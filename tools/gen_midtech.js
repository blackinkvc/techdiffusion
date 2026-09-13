// 生成「中间技术」案例库：从已有 2342 项技术中，按"跨领域汇聚"口径筛选。
// 口径：dependsOn >= 4 且依赖跨越 >= 3 个「非自身」分类（即多线汇聚型复合技术）。
// 取样：跨领域数降序、依赖数降序、时代近现代优先；按分类配额取样，凑满 100 个（含原有 4 个手工案例则本生成器产 96 个）。
const fs = require("fs");
const exSrc = fs.readFileSync("assets/techs_extra.js", "utf8");
const extSrc = fs.readFileSync("assets/techs_extend.js", "utf8");
const moreSrc = fs.readFileSync("assets/techs_more.js", "utf8");
const dataSrc = fs.readFileSync("assets/data.js", "utf8").replace(/if \(typeof module[\s\S]*$/, "");
const D = (new Function(exSrc + "\n" + extSrc + "\n" + moreSrc + "\n" + dataSrc + "\nreturn {TECHS, ERAS, CATEGORIES, MIDTECHS};"))();
const TECHS = D.TECHS, ERAS = D.ERAS, CATEGORIES = D.CATEGORIES, MIDTECHS = D.MIDTECHS;

const techMap = {}; TECHS.forEach(t => techMap[t.id] = t);
const catName = {}; CATEGORIES.forEach(c => catName[c.id] = c.name);
const eraOrder = {}; ERAS.forEach(e => eraOrder[e.id] = e.order || 0);

// 手工已有案例（保留，不重复生成）
const HAND = new Set((MIDTECHS.items || []).map(it => it.id));

// 跨分类计数与背景选取规则：与 tools/regen_midtech.js 共用（见 tools/midtech_rules.js）
const MR = require("./midtech_rules");
const crossSelf = t => MR.crossSelf(t, techMap);
const noteFor = MR.noteFor;
const FAMOUS = MR.FAMOUS;


// 候选：dep>=4 且 跨非自身分类>=2（基础科学为源头，无汇聚候选，自然不入选）
const cands3 = TECHS.filter(t => {
  if (HAND.has(t.id)) return false;
  if ((t.dependsOn || []).length < 4) return false;
  return crossSelf(t) >= 3;
}).sort((a, b) => {
  const da = (a.dependsOn || []).length, db = (b.dependsOn || []).length;
  if (db !== da) return db - da;
  return (eraOrder[b.era] || 0) - (eraOrder[a.era] || 0);
});
const cands3Ids = new Set(cands3.map(t => t.id));
const cands2 = TECHS.filter(t => {
  if (HAND.has(t.id)) return false;
  if (cands3Ids.has(t.id)) return false;
  if ((t.dependsOn || []).length < 4) return false;
  return crossSelf(t) >= 2;
}).sort((a, b) => {
  const da = (a.dependsOn || []).length, db = (b.dependsOn || []).length;
  if (db !== da) return db - da;
  return (eraOrder[b.era] || 0) - (eraOrder[a.era] || 0);
});

// 按分类分组：主池(cross>=3)排前，补池(cross>=2)在后
const perClass = {}; CATEGORIES.forEach(c => perClass[c.id] = []);
[...cands3, ...cands2].forEach(t => perClass[t.category].push(t));

// round-robin 轮转取样，保证 8 个有候选的分类均衡覆盖
const TARGET = 96;
const CAP = 14;
const used = {};
const chosen = [];
let added = true;
while (chosen.length < TARGET && added) {
  added = false;
  for (const c of CATEGORIES.map(x => x.id)) {
    if (chosen.length >= TARGET) break;
    if (perClass[c].length && (used[c] || 0) < CAP) {
      chosen.push(perClass[c].shift());
      used[c] = (used[c] || 0) + 1;
      added = true;
    }
  }
}

// 生成案例对象
const items = chosen.map(t => {
  const deps = (t.dependsOn || []).map(id => techMap[id]).filter(Boolean);
  let crossUps = deps.filter(u => u.category !== t.category);
  let chosen_ups = crossUps.length >= 4 ? crossUps : deps;
  // 知名优先，截断至多 10 个
  chosen_ups = chosen_ups.slice().sort((a, b) => (FAMOUS[b.id] ? 1 : 0) - (FAMOUS[a.id] ? 1 : 0)).slice(0, 10);
  const backgrounds = chosen_ups.map(u => ({ tech: u.id, note: noteFor(u) }));
  const date = t.date || (t.year ? t.year + " 年" : "");
  const summary = (t.summary && t.summary.length >= 40) ? t.summary
    : (t.name + " 是" + (catName[t.category] || "技术") + "领域的一项复合技术，依赖多条来自不同领域的技术线索同时成熟后才汇聚而生。");
  const born = t.name + "之所以在 " + date + " 前后成为可能，是因为以下关键技术恰好同时越过了「可用、便宜、可靠」的临界点：";
  return { id: t.id, name: t.name, en: t.en || "", date, summary, born, backgrounds };
});

// 校验
const ids = new Set(); let dup = 0, badDep = 0;
items.forEach(it => {
  if (ids.has(it.id)) dup++; ids.add(it.id);
  if (HAND.has(it.id)) dup++;
  it.backgrounds.forEach(b => { if (!techMap[b.tech]) badDep++; });
});
console.log("自动生成案例数:", items.length, "| 与手工重复:", dup, "| 断链背景:", badDep);
console.log("分类配额:", JSON.stringify(used));

// 护栏：重复 id 或断链背景一律中止
//   历史事故：mil_smartmunition 曾被登记两次，且该文件被后续批次部分重写、与生成器产物不一致。
if (dup > 0) {
  console.error("[FAIL] 出现 " + dup + " 处重复条目（含与手工案例重复），已中止写出。");
  process.exit(1);
}
if (badDep > 0) {
  console.error("[FAIL] 出现 " + badDep + " 处断链背景，已中止写出。");
  process.exit(1);
}

// 漂移报告：与现有文件对比 backgrounds 变化量（揭示主管线清理后的过期程度）
const OUTFILE = "assets/techs_midtech.js";
let drift = 0; const driftSamples = [];
try {
  const prev = (new Function(fs.readFileSync(OUTFILE, "utf8") + "\nreturn MIDTECHS_EXTRA;"))();
  const prevMap = {}; prev.forEach(p => (prevMap[p.id] = (p.backgrounds || []).map(b => b.tech).join(",")));
  items.forEach(it => {
    const now = it.backgrounds.map(b => b.tech).join(",");
    if (prevMap[it.id] !== now) {
      drift++;
      if (driftSamples.length < 5) driftSamples.push(it.id + " 旧=[" + prevMap[it.id] + "] 新=[" + now + "]");
    }
  });
} catch (e) { console.log("[warn] 无法读取现有文件做漂移对比：" + e.message); }
console.log("漂移（backgrounds 与现有文件不同）:", drift, "/", items.length);
driftSamples.forEach(s => console.log("   " + s));

if (process.argv.slice(2).includes("--no-write")) { console.error("\n[DRY-RUN] --no-write，未写盘。"); process.exit(0); }

// 写出（先备份）
if (fs.existsSync(OUTFILE)) {
  const bak = "/tmp/gen_midtech_bak_" + Date.now();
  fs.mkdirSync(bak, { recursive: true });
  fs.copyFileSync(OUTFILE, bak + "/techs_midtech.js");
  console.error("[BAK] 原文件已备份 → " + bak + "/techs_midtech.js");
}
const head = "// 自动生成：中间技术案例（从已有技术按「跨领域汇聚」口径筛选）\n// 生成于 2026-08-26，由 tools/gen_midtech.js 产出，与 data.js 手工 4 例合并为 100 例。\n";
const body = "const MIDTECHS_EXTRA = " + JSON.stringify(items, null, 2) + ";\n\nif (typeof module !== \"undefined\" && module.exports) {\n  module.exports = { MIDTECHS_EXTRA };\n}\n";
fs.writeFileSync(OUTFILE, head + body);
console.log("已写出 " + OUTFILE);
