/*
 * 派生文案重算器（三族）
 * ------------------------------------------------------------------
 * 让节点文案与当前依赖网络一致。文本是「生成时刻」dependsOn 与反图的快照
 * （公式见 tools/derived_text_rules.js 头部），网络清理后必须同步重算，
 * 否则会出现「写着已不存在的前置 / 下游」的失真。
 *
 * 三族与目标文件：
 *   A  techs_extra.js   summary / significance / views[].text   （upgrade_stubs.js + disassemble.js）
 *   B  techs_extend.js  summary（保留手写 base，只重算追加的深化句）（extend_net.js deepen）
 *   C  techs_more.js    summary（整句由上游名+用途合成）           （gen_1000.js summarize）
 *
 * 原则：**仅重写被识别为生成器模板句的那一句**；不匹配任何模板骨架的手写散文一律不动。
 *   这是与「整体重生成」的关键区别。
 *
 * 用法：
 *   node tools/regen_text.js            # 干跑，只出报告（并写 /tmp/regen_changes.json）
 *   node tools/regen_text.js --check    # 干跑；若存在需改写则退出码 1（回归门禁用）
 *   node tools/regen_text.js --apply    # 写盘（写前自动备份到 /tmp）
 */
const fs = require("fs");
const vm = require("vm");
const path = require("path");
const R = require("./derived_text_rules");

const ROOT = path.resolve(__dirname, "..");
const APPLY = process.argv.includes("--apply");
const CHECK = process.argv.includes("--check");

const DATA_FILES = ["assets/techs_extra.js", "assets/techs_extend.js", "assets/techs_more.js", "assets/data.js"];

// ---------- 载入 ----------
const ctx = vm.createContext({ console, window: {} });
for (const f of DATA_FILES) vm.runInContext(fs.readFileSync(path.join(ROOT, f), "utf8"), ctx, { filename: f });
const TECHS = vm.runInContext("TECHS", ctx);
const EXTEND = vm.runInContext("EXTEND_TECHS", ctx);
const MORE = vm.runInContext("MORE_TECHS", ctx);
const CATEGORIES = vm.runInContext("CATEGORIES", ctx);
const ERAS = vm.runInContext("ERAS", ctx);

const techMap = {};
TECHS.forEach(t => (techMap[t.id] = t));
const downMap = {};
TECHS.forEach(t => (t.dependsOn || []).forEach(u => { (downMap[u] = downMap[u] || []).push(t.id); }));
const CATNAMES = {}; CATEGORIES.forEach(c => (CATNAMES[c.id] = c.name));
const ERANAME = {}; ERAS.forEach(e => (ERANAME[e.id] = e.name));

const E = {
  nameOf: id => (techMap[id] ? techMap[id].name : id),
  downMap, techMap,
  catNameOf: id => CATNAMES[id],
  eraNameOf: id => ERANAME[id]
};

// ---------- 扫描 ----------
const changes = [];   // { family, file, id, field, before, after }
const stats = { A: { tpl: 0, hand: 0, chg: 0, nodes: new Set(), byField: {} }, B: { tpl: 0, hand: 0, chg: 0, nodes: new Set() }, C: { tpl: 0, hand: 0, chg: 0, nodes: new Set(), variantMismatch: [] } };
const periodStale = [];
const add = (fam, file, id, field, before, after) => {
  changes.push({ family: fam, file, id, field, before, after });
  stats[fam].chg++; stats[fam].nodes.add(id);
  if (fam === "A") stats[fam].byField[field] = (stats[fam].byField[field] || 0) + 1;
};

// 族 A
for (const t of TECHS) {
  const sh = R.shapesA(t, E);
  const want = R.computeA(t, E);
  const any = (res, s) => res.some(re => re.test(s));
  if (typeof t.summary === "string") {
    if (any(sh.summary, t.summary)) { stats.A.tpl++; if (want.summary !== t.summary) add("A", "assets/techs_extra.js", t.id, "summary", t.summary, want.summary); }
    else stats.A.hand++;
  }
  if (typeof t.significance === "string" && t.significance) {
    if (any(sh.significance, t.significance)) { stats.A.tpl++; if (want.significance !== t.significance) add("A", "assets/techs_extra.js", t.id, "significance", t.significance, want.significance); }
    else stats.A.hand++;
  }
  if (Array.isArray(t.views)) {
    t.views.forEach((v, i) => {
      if (!v || typeof v.text !== "string") return;
      const res = i === 0 ? sh.views0 : sh.views1;
      if (!any(res, v.text)) { stats.A.hand++; return; }
      stats.A.tpl++;
      const after = i === 0 ? want.views[0] : want.views[1];
      if (typeof after === "string" && after !== v.text) add("A", "assets/techs_extra.js", t.id, "views[" + i + "].text", v.text, after);
    });
    // 报告项：views[].period 由 era 派生，若 era 改名会失真（本轮只统计，不改）
    if (t.views[0] && t.views[0].period) {
      const want0 = ERANAME[t.era] || t.era || "";
      if (want0 && t.views[0].period !== want0) periodStale.push({ id: t.id, now: t.views[0].period, want: want0, era: t.era });
    }
  }
}
// 族 B
for (const t of EXTEND) {
  const c = R.computeB(t, E);
  if (!c) { stats.B.hand++; continue; }
  stats.B.tpl++;
  if (c.summary !== t.summary) add("B", "assets/techs_extend.js", t.id, "summary", t.summary, c.summary);
}
// 族 C
for (const t of MORE) {
  const sh = R.shapesC(t, E);
  const idx = sh.findIndex(re => re.test(t.summary || ""));
  if (idx < 0) { stats.C.hand++; continue; }
  stats.C.tpl++;
  const w = R.summarize1000(t, E);
  if (w.variant !== idx) stats.C.variantMismatch.push({ id: t.id, inText: idx, byHash: w.variant });
  if (w.summary !== t.summary) add("C", "assets/techs_more.js", t.id, "summary", t.summary, w.summary);
}

// ---------- 报告 ----------
console.log("=== 派生文案重算（三族）===");
const line = (fam, name, file) => {
  const s = stats[fam];
  console.log(`  ${fam} 族 ${name.padEnd(16)} ${file.padEnd(24)} 模板句 ${String(s.tpl).padStart(5)} ｜ 手写跳过 ${String(s.hand).padStart(5)} ｜ 需改写 ${String(s.chg).padStart(5)} ｜ 节点 ${String(s.nodes.size).padStart(4)}`);
};
line("A", "upgrade/disassemble", "assets/techs_extra.js");
line("B", "extend_net.deepen", "assets/techs_extend.js");
line("C", "gen_1000.summarize", "assets/techs_more.js");
console.log("  族 A 按字段 " + JSON.stringify(stats.A.byField));
const total = changes.length;
const totalNodes = new Set(changes.map(c => c.id)).size;
console.log(`\n  合计需改写 ${total} 处 / ${totalNodes} 节点`);
if (stats.C.variantMismatch.length) {
  console.log(`  ⚠️ 族 C 变体不符（文本所写变体 ≠ hash 决定）${stats.C.variantMismatch.length} 处：`);
  stats.C.variantMismatch.slice(0, 5).forEach(x => console.log(`     ${x.id}: 文本=${x.inText} hash=${x.byHash}`));
}
console.log(`  [报告项] views[0].period 与 era 名不符 ${periodStale.length} 处（本轮不修改）`);
if (periodStale.length) periodStale.slice(0, 5).forEach(x => console.log(`     ${x.id}: 现有「${x.now}」／应为「${x.want}」（era=${x.era}）`));

console.log("\n=== 样例（每族前 3）===");
for (const fam of ["A", "B", "C"]) {
  changes.filter(c => c.family === fam).slice(0, 3).forEach(c => {
    console.log(`[${fam}][${c.id}] ${c.field}`);
    console.log("   旧: " + c.before);
    console.log("   新: " + c.after);
  });
}

fs.writeFileSync("/tmp/regen_changes.json", JSON.stringify(changes, null, 1));
console.log("\n明细写入 /tmp/regen_changes.json（" + changes.length + " 条）");

if (CHECK && total > 0) { console.log("\n[check] 存在需改写的派生文案 → 退出码 1"); process.exit(1); }
if (!APPLY) { console.log("\n[干跑] 未写盘。加 --apply 执行。"); process.exit(0); }
if (!total) { console.log("\n[不动点] 无需写盘。"); process.exit(0); }

// ---------- 写盘：对象作用域行替换 ----------
// 三个目标文件的对象均为「字段 4 空格缩进、对象以两空格 + }, 收尾」，
// views 为多行数组、「text」在 8 空格缩进处（techs_extra / techs_extend / techs_more 同构）。
const TARGETS = ["assets/techs_extra.js", "assets/techs_extend.js", "assets/techs_more.js"];
const byFile = new Map();
for (const c of changes) {
  if (!byFile.has(c.file)) byFile.set(c.file, []);
  byFile.get(c.file).push(c);
}
const APPLIED = { files: 0, summary: 0, significance: 0, views: 0 };
const FAIL = [];
const stamp = Date.now();

for (const file of TARGETS) {
  const list = byFile.get(file);
  if (!list || !list.length) continue;
  const abs = path.join(ROOT, file);
  let src = fs.readFileSync(abs, "utf8");
  const before = Buffer.byteLength(src, "utf8");
  const bak = "/tmp/regen_text_bak_" + stamp + "_" + path.basename(file);
  fs.writeFileSync(bak, src);
  console.log("\n[备份] " + bak);

  const byNode = new Map();
  for (const c of list) {
    if (!byNode.has(c.id)) byNode.set(c.id, []);
    byNode.get(c.id).push(c);
  }

  for (const [id, cs] of byNode) {
    const anchor = '    "id": "' + id + '",\n';
    const at = src.indexOf(anchor);
    if (at < 0) { FAIL.push(file + " " + id + ": 未定位 id 锚点"); continue; }
    if (src.indexOf(anchor, at + 1) >= 0) { FAIL.push(file + " " + id + ": id 锚点不唯一"); continue; }
    const endM = src.slice(at).match(/\n  \},?\n/);
    if (!endM) { FAIL.push(file + " " + id + ": 未定位对象结束"); continue; }
    const scopeEnd = at + endM.index;
    let scope = src.slice(at, scopeEnd);
    let dirty = false;

    for (const c of cs) {
      if (c.field.startsWith("views[")) continue;      // 统一在 views 分支处理
      const re = new RegExp('^    "' + c.field + '": (.*?)(,?)$', "m");
      const m = scope.match(re);
      if (!m) { FAIL.push(file + " " + id + " " + c.field + ": 未定位字段行"); continue; }
      if (m[1] !== JSON.stringify(c.before)) { FAIL.push(file + " " + id + " " + c.field + ": 字段现值与预期不符"); continue; }
      scope = scope.replace(m[0], '    "' + c.field + '": ' + JSON.stringify(c.after) + m[2]);
      APPLIED[c.field]++; dirty = true;
    }

    const vc = cs.filter(c => c.field.startsWith("views[")).sort((a, b) => a.field.localeCompare(b.field));
    if (vc.length) {
      const t0 = techMap[id];
      const texts = [...scope.matchAll(/^        "text": (.*?)(,?)$/gm)];
      const expect = (t0 && Array.isArray(t0.views)) ? t0.views.length : -1;
      if (texts.length !== expect) { FAIL.push(file + " " + id + " views.text 行数 = " + texts.length + "（应为 " + expect + "）"); }
      else {
        for (const c of vc) {
          const idx = Number(c.field.slice(6, 7));
          const m = texts[idx];
          if (!m) { FAIL.push(file + " " + id + " " + c.field + ": 索引越界"); continue; }
          if (m[1] !== JSON.stringify(c.before)) { FAIL.push(file + " " + id + " " + c.field + ": 数组现值与预期不符"); continue; }
          scope = scope.replace(m[0], '        "text": ' + JSON.stringify(c.after) + m[2]);
          APPLIED.views++; dirty = true;
        }
      }
    }
    if (!dirty) continue;
    src = src.slice(0, at) + scope + src.slice(scopeEnd);
  }

  // 语法 + 条目数校验
  const KEY = { "assets/techs_extra.js": "EXTRA_TECHS", "assets/techs_extend.js": "EXTEND_TECHS", "assets/techs_more.js": "MORE_TECHS" }[file];
  const nBefore = vm.runInContext(KEY, ctx).length;
  const ctx2 = vm.createContext({ console, window: {} });
  try { vm.runInContext(src, ctx2, { filename: file }); }
  catch (e) { FAIL.push(file + ": 写盘后语法错误 → " + e.message); }
  if (!FAIL.some(x => x.startsWith(file))) {
    const n2 = vm.runInContext(KEY, ctx2).length;
    if (n2 !== nBefore) FAIL.push(file + ": 条目数变化 " + nBefore + " → " + n2);
  }
  if (FAIL.some(x => x.startsWith(file))) continue;
  const out = Buffer.from(src, "utf8");
  fs.writeFileSync(abs, out);
  APPLIED.files++;
  console.log("[写盘] " + file + "  " + (before / 1024 / 1024).toFixed(2) + " → " + (out.length / 1024 / 1024).toFixed(2) + " MB");
}

console.log("\n已应用 = " + JSON.stringify(APPLIED));
const got = APPLIED.summary + APPLIED.significance + APPLIED.views;
if (FAIL.length) {
  console.error("[FAIL] " + FAIL.length + " 处未应用：");
  FAIL.slice(0, 20).forEach(x => console.error("   " + x));
  process.exit(1);
}
if (got !== changes.length) { console.error("[FAIL] 应用数不符：预期 " + changes.length + "，实际 " + got); process.exit(1); }
console.log("\n[下一步] 重跑本工具应为「合计需改写 0 处」（不动点），再跑 node tools/audit_net.js --check");
