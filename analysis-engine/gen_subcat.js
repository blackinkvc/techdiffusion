#!/usr/bin/env node
// ============================================================
// 任务域生成器：把 catalog（任务域真实技术目录）编译为技术条目
// ------------------------------------------------------------
// 输入: catalogs/*.json
// 输出:
//   data/subcat/new_techs.json    新增条目（含 subcategory 字段）
//   data/subcat/tagmap.json       存量条目 → 子分类 打标映射
//   data/subcat/report.txt        处理报告（跳过/告警/冲突）
// 织网原则：
//   1) dependsOn 仅指向「年份更早」的节点 → 天然 DAG 无环
//   2) 目录条目与全库同 id/同名 → 不新增，转为存量打标
//   3) deps 引用缺失或年份不早于自身 → 剔除并记入告警
// 用法: node gen_subcat.js
// ============================================================
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ASSETS = path.join(__dirname, "..", "assets");
const CAT_DIR = path.join(__dirname, "catalogs");
const OUT_DIR = path.join(__dirname, "data", "subcat");
fs.mkdirSync(OUT_DIR, { recursive: true });

// ---------- 1. 载入全量现存技术 ----------
const files = ["techs_extra.js", "techs_extend.js", "techs_more.js", "techs_midtech.js", "data.js"];
const sb = { console, window: {} };
sb.window = sb;
vm.createContext(sb);
for (const f of files) vm.runInContext(fs.readFileSync(path.join(ASSETS, f), "utf8"), sb, { filename: f });
const existing = vm.runInContext(`({ T: typeof TECHS !== "undefined" ? TECHS : [] })`, sb).T;
const exById = new Map(existing.map(t => [t.id, t]));
const exByName = new Map(existing.map(t => [t.name, t]));

// ---------- 2. 工具：年份 → 时代/日期 ----------
function eraOf(y) {
  if (y < -3500) return "prehistoric";
  if (y < -500) return "ancient";
  if (y < 500) return "classical";
  if (y < 1500) return "medieval";
  if (y < 1750) return "earlymodern";
  if (y < 1900) return "industrial";
  if (y < 1950) return "electrical";
  if (y < 2000) return "info";
  return "intelligent";
}
function dateOf(y) {
  if (y < 0) { const a = -y; return a >= 10000 ? `约 ${(a / 10000).toFixed(a % 10000 === 0 ? 0 : 1)} 万年前` : `公元前 ${a} 年`; }
  return `${y} 年`;
}

// ---------- 3. 第一遍：读取全部 catalog 并注册目录内 id→year ----------
// 注意：只注册 id→year（供 deps 的年份校验），不共享条目元数据——
// 同 id 跨文件重复时元数据一律以「当前遍历文件」为准，避免交叉污染。
const catList = [];
const newYearById = new Map();   // 目录内出现的 id -> year
for (const catFile of fs.readdirSync(CAT_DIR).filter(f => f.endsWith(".json") && !f.startsWith("_")).sort()) {
  const cat = JSON.parse(fs.readFileSync(path.join(CAT_DIR, catFile), "utf8"));
  catList.push(cat);
  for (const fam of cat.families) {
    for (const item of fam.items) {
      if (newYearById.has(item.id)) {
        // 跨文件重复 id：仅保留年最早出现为准（去重保留首个文件条目）
        continue;
      }
      newYearById.set(item.id, item.year);
    }
  }
}

// 日期工具（供 views 使用）
function yearIsValid(y) { return typeof y === "number"; }

// ---------- 4. 第二遍：逐条决策 ----------
const newTechs = [];
const tagmap = [];        // 存量打标 {id, sub, cat}
const skipped = [];       // {id, name, why}
const problems = [];      // 依赖告警
const decided = new Set();    // 本批已决定新增的 name
const decidedIds = new Set(); // 本批已决定新增的 id

for (const cat of catList) {
  for (const fam of cat.families) {
    for (const item of fam.items) {
      // 元数据一律取「当前遍历文件」的条目，避免跨文件同 id 污染
      const m = {
        id: item.id, name: item.name, en: item.en || "", year: item.year,
        note: item.note || "", people: item.people || "",
        deps: item.deps || [], catId: cat.cat
      };
      const { id, name } = m;

      // 4a. 与现存库冲突 → 打标或跳过
      if (exById.has(id)) {
        tagmap.push({ id, sub: cat.sub, cat: cat.cat, source: "catalog-id 命中现存" });
        skipped.push({ id, name, why: "id 已存在于全库" });
        continue;
      }
      if (exByName.has(name)) {
        const hit = exByName.get(name);
        tagmap.push({ id: hit.id, sub: cat.sub, cat: cat.cat, source: "catalog-名命中现存" });
        skipped.push({ id, name, why: `同名已存在(=${hit.id})，改为打标` });
        continue;
      }
      // 4b. 跨 catalog 重名 / 重 id（前面 catalog 已新增）
      if (decided.has(name)) {
        const first = [...newTechs, ...skipped].find(x => x.name === name);
        skipped.push({ id, name, why: `本批目录内重名(=${first && first.id})，跳过重复` });
        continue;
      }
      if (decidedIds.has(id)) {
        skipped.push({ id, name, why: "本批目录内 id 重复，跳过" });
        continue;
      }

      // 4c. 解析依赖（现存 ∪ 目录内，仅保留年份早于自身）
      //     现存锚点允许同年（如 1800 伏打电堆→同年水电解）；目录内新条目必须严格更早，防环
      const deps = [];
      for (const d of (m.deps || [])) {
        let ty = null, fromNew = false;
        if (exById.has(d)) ty = exById.get(d).year;
        else if (newYearById.has(d)) { ty = newYearById.get(d); fromNew = true; }
        if (ty === null || ty === undefined) { problems.push(`${id} 依赖 ${d}：目标不存在，剔除`); continue; }
        if (!(ty < m.year || (!fromNew && ty === m.year))) { problems.push(`${id} 依赖 ${d}：年份(${ty})不早于自身(${m.year})，剔除`); continue; }
        deps.push(d);
      }

      // 4d. 组装
      newTechs.push({
        id, name, en: m.en || "", category: m.catId,
        subcategory: cat.sub,
        era: eraOf(m.year), date: dateOf(m.year), year: m.year,
        people: m.people, place: "",
        summary: m.note,
        dependsOn: deps, enables: [], applications: [],
        views: [
          { period: "成形期", text: `${dateOf(m.year)} 前后成形，服务于「${cat.subName}」领域的真实工程需求。` },
          { period: "当代", text: `如今仍是「${cat.subName}」的基础技术之一，并持续演化出新的形态。` }
        ],
        significance: `作为「${cat.subName}」任务域的代表性真实技术，${name} 的成熟使该领域的能力从「可能」走向「工程可用」。`
      });
      decided.add(name);
      decidedIds.add(id);
    }
  }
}

// ---------- 4e. 最终校验：跨目录重名去重 + deps 断链清理 ----------
{
  const seenId = new Set(), seenName = new Set();
  const kept = [];
  for (const t of newTechs) {
    if (seenId.has(t.id) || seenName.has(t.name)) { skipped.push({ id: t.id, name: t.name, why: "跨目录重复，保留首个" }); continue; }
    seenId.add(t.id); seenName.add(t.name);
    // deps 只保留「现存」或「本批实际生成」的目标
    const valid = t.dependsOn.filter(d => exById.has(d) || seenId.has(d));
    if (valid.length !== t.dependsOn.length) {
      const gone = t.dependsOn.filter(d => !exById.has(d) && !seenId.has(d));
      problems.push(`${t.id} 依赖 ${gone.join("、")}：目标被去重/不存在，已剔除`);
    }
    t.dependsOn = valid;
    kept.push(t);
  }
  newTechs.length = 0; newTechs.push(...kept);
}

// ---------- 5. 写文件 ----------
fs.writeFileSync(path.join(OUT_DIR, "new_techs.json"), JSON.stringify(newTechs, null, 1), "utf8");
fs.writeFileSync(path.join(OUT_DIR, "tagmap.json"), JSON.stringify(tagmap, null, 1), "utf8");

const rep = [];
rep.push("# 任务域生成报告");
rep.push(`目录数: ${catList.length}  新增条目: ${newTechs.length}  存量打标: ${tagmap.length}  跳过: ${skipped.length}  依赖告警: ${problems.length}`);
rep.push("");
rep.push("## 新增条目分类统计");
const bySub = {};
for (const t of newTechs) { const k = `${t.category}/${t.subcategory}`; bySub[k] = (bySub[k] || 0) + 1; }
for (const [k, v] of Object.entries(bySub)) rep.push(`- ${k}: ${v}`);
rep.push("");
rep.push("## 跳过明细");
for (const s of skipped) rep.push(`- ${s.id}「${s.name}」: ${s.why}`);
rep.push("");
rep.push("## 依赖告警");
for (const p of problems) rep.push(`- ${p}`);
fs.writeFileSync(path.join(OUT_DIR, "report.txt"), rep.join("\n"), "utf8");

// 输出内嵌校验：新增条目 id 重复 / name 重复
const dupId = newTechs.filter((t, i) => newTechs.findIndex(x => x.id === t.id) !== i);
const dupName = newTechs.filter((t, i) => newTechs.findIndex(x => x.name === t.name) !== i);
const noDep = newTechs.filter(t => t.dependsOn.length === 0);
console.log(`[gen_subcat] 完成`);
console.log(`  新增条目: ${newTechs.length}`);
console.log(`  存量打标: ${tagmap.length}`);
console.log(`  跳过(已存在/重名): ${skipped.length}`);
console.log(`  依赖告警: ${problems.length}`);
if (dupId.length) console.log(`  ⚠ 新增内 id 重复: ${dupId.map(t => t.id).join(", ")}`);
if (dupName.length) console.log(`  ⚠ 新增内 name 重复: ${dupName.map(t => t.name).join(", ")}`);
console.log(`  无依赖(根)条目: ${noDep.length} 例: ${noDep.slice(0, 5).map(t => t.id).join(", ")}`);
