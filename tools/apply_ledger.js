// tools/apply_ledger.js —— 判定台账驱动器
// 读取 audit/ledger.json 中某一批次的判定，应用到主管线四个数据文件。
// 用法：
//   node tools/apply_ledger.js --batch 1a          干跑（打印预期变更与校验）
//   node tools/apply_ledger.js --batch 1a --apply  写盘
// 约定：pretty 文件（techs_extra / techs_extend / techs_more）与紧凑文件（data.js）均可定位；
//       沿用整块文本 + 正则替换，按原格式决定引号，禁止整数组重排。
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const cp = require("child_process");

const ROOT = path.resolve(__dirname, "..");
const A = path.join(ROOT, "assets") + "/";
const FILES = ["techs_extra.js", "techs_extend.js", "techs_more.js", "data.js"];

const args = process.argv.slice(2);
const APPLY = args.includes("--apply");
const bi = args.indexOf("--batch");
const BATCH = bi >= 0 ? args[bi + 1] : null;
if (!BATCH) { console.error("用法: node tools/apply_ledger.js --batch <批次号> [--apply]"); process.exit(2); }

const ledger = JSON.parse(fs.readFileSync(path.join(ROOT, "audit", "ledger.json"), "utf8"));
const batch = ledger.batches[BATCH];
if (!batch) { console.error("台账中无批次 " + BATCH); process.exit(2); }

function loadMain() {
  const ctx = vm.createContext({ console });
  for (const f of FILES) vm.runInContext(fs.readFileSync(A + f, "utf8"), ctx, { filename: f });
  return vm.runInContext("TECHS", ctx);
}

const T0 = loadMain();
const idSet = new Set(T0.map((t) => t.id));
const before = {};
T0.forEach((t) => { if (!(t.id in before)) before[t.id] = (t.dependsOn || []).slice(); });

// 按判定推导每个节点的期望前置列表
const expect = {};
const removals = {};
(batch.edges || []).forEach((e) => {
  if (!idSet.has(e.child)) throw new Error("子节点不存在: " + e.child);
  if (!idSet.has(e.parent)) throw new Error("前置不存在: " + e.parent);
  if (!expect[e.child]) expect[e.child] = (before[e.child] || []).slice();
  if (e.verdict === "delete") {
    if (!expect[e.child].includes(e.parent)) throw new Error("待删边不存在: " + e.parent + "->" + e.child);
    expect[e.child] = expect[e.child].filter((d) => d !== e.parent);
    (removals[e.parent] = removals[e.parent] || []).push(e.child);
  } else if (e.verdict === "repoint") {
    if (!idSet.has(e.newParent)) throw new Error("新前置不存在: " + e.newParent);
    if (!expect[e.child].includes(e.parent)) throw new Error("待改边不存在: " + e.parent + "->" + e.child);
    expect[e.child] = expect[e.child].map((d) => (d === e.parent ? e.newParent : d));
  } else if (e.verdict === "concept") {
    if (!expect[e.child].includes(e.parent)) throw new Error("待降级边不存在: " + e.parent + "->" + e.child);
    expect[e.child] = expect[e.child].filter((d) => d !== e.parent);
    (removals[e.parent] = removals[e.parent] || []).push(e.child + "(concept)");
  }
});
(batch.backfills || []).forEach((b) => {
  if (!idSet.has(b.child)) throw new Error("补前置节点不存在: " + b.child);
  if (!expect[b.child]) expect[b.child] = (before[b.child] || []).slice();
  b.add.forEach((d) => {
    if (!idSet.has(d)) throw new Error("补前置候选不存在: " + d);
    if (!expect[b.child].includes(d)) expect[b.child].push(d);
  });
});

// 时序性校验
const byId = {}; T0.forEach((t) => { if (!(t.id in byId)) byId[t.id] = t; });
const yearBad = [];
Object.keys(expect).forEach((c) => {
  expect[c].forEach((d) => {
    const a = byId[c].year, b = byId[d].year;
    if (a != null && b != null && a >= 0 && b >= 0 && a < b) yearBad.push(c + "(" + a + ") <- " + d + "(" + b + ")");
  });
});

// 环校验（在预期图上）
const color = {}; const cyc = [];
const dfs = (id) => {
  color[id] = 1;
  (expect[id] || before[id] || []).forEach((d) => {
    if (!idSet.has(d)) return;
    if (color[d] === 1) cyc.push(id + "->" + d);
    else if (!color[d]) dfs(d);
  });
  color[id] = 2;
};
Object.keys(expect).forEach((id) => { if (!color[id]) dfs(id); });

console.log("批次 " + BATCH + " · " + batch.scope);
console.log("待改节点 " + Object.keys(expect).length + " 个");
const tallies = {};
(batch.edges || []).forEach((e) => { tallies[e.verdict] = (tallies[e.verdict] || 0) + 1; });
console.log("边判定: " + JSON.stringify(tallies));
if (batch.summary) {
  const s = batch.summary;
  const sum = s.keep + s.repoint + s.delete + s.concept;
  if (sum !== batch.candidates) throw new Error("台账断言失败：keep+repoint+delete+concept = " + sum + " ≠ candidates " + batch.candidates);
  if ((batch.backfills || []).length !== s.backfill) throw new Error("台账断言失败：backfills 数量不符");
  console.log("[OK] 台账完整划分断言通过（" + sum + " = " + batch.candidates + "）");
}
if (yearBad.length) { console.log("[FAIL] 年份倒挂 " + yearBad.length + " 处："); yearBad.slice(0, 10).forEach((x) => console.log("   ! " + x)); process.exit(1); }
console.log("[OK] 时序性校验通过");
if (cyc.length) { console.log("[FAIL] 预期图出现环 " + cyc.length + " 个："); cyc.slice(0, 10).forEach((x) => console.log("   ! " + x)); process.exit(1); }
console.log("[OK] 环校验通过");

console.log("\n变更明细：");
Object.keys(expect).sort().forEach((c) => {
  const a = (before[c] || []).join(","), b = expect[c].join(",");
  if (a !== b) console.log("  " + byId[c].name + " [" + c + "]  " + (a || "（无）") + "  →  " + (b || "（无）"));
});

if (!APPLY) { console.log("\n（干跑模式，未写盘。加 --apply 执行）"); process.exit(0); }

const bak = "/tmp/bak_" + BATCH + "_" + Date.now();
cp.execSync("mkdir -p " + bak + " && cp " + FILES.map((f) => A + f).join(" ") + " " + bak + "/");
console.log("\n已备份 → " + bak);

const RE = /("dependsOn"|\bdependsOn)\s*:\s*\[([^\]]*)\]/;
const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const F = {};
FILES.forEach((f) => (F[f] = fs.readFileSync(A + f, "utf8")));
let okNodes = 0; const fail = []; const hit = {};
Object.keys(expect).forEach((id) => {
  let done = false;
  for (const fn of FILES) {
    if (done) break;
    const src = F[fn];
    const pretty = src.indexOf('"id": "' + id + '",');
    const compact = new RegExp("\\{ id:\"" + esc(id) + "\"").exec(src);
    let start, stop;
    if (pretty >= 0) { start = pretty; stop = src.indexOf("\n  }", start + 5); if (stop < 0) stop = src.length; }
    else if (compact) { start = compact.index; stop = src.indexOf('{ id:"', start + 5); if (stop < 0) stop = src.length; }
    else continue;
    const block = src.slice(start, stop);
    if (block.indexOf('"name"') < 0 && block.indexOf('name:') < 0) continue;
    const m = RE.exec(block);
    if (!m) { fail.push(id + " @" + fn + " 无 dependsOn"); done = true; break; }
    const quoted = /"/.test(m[2]) || /"dependsOn"\s*:|\bdependsOn\s*:\s*\["/.test(src);
    const inner = expect[id].map((d) => (quoted ? '"' + d + '"' : d)).join(",");
    F[fn] = src.slice(0, start) + block.slice(0, m.index) + m[1] + ": [" + inner + "]" + block.slice(m.index + m[0].length) + src.slice(stop);
    hit[fn] = (hit[fn] || 0) + 1; okNodes++; done = true;
  }
  if (!done) fail.push(id + " 未在任何文件定位");
});
console.log("定位节点 " + okNodes + " / " + Object.keys(expect).length + "，失败 " + fail.length);
fail.slice(0, 15).forEach((x) => console.log("   ! " + x));
if (fail.length) { console.log("存在未定位节点，未写盘。"); process.exit(1); }
console.log("各文件命中: " + JSON.stringify(hit));

FILES.forEach((f) => fs.writeFileSync(A + f, F[f]));
const T2 = loadMain();
const by2 = {}; T2.forEach((t) => { if (!(t.id in by2)) by2[t.id] = t; });
const bad = [];
Object.keys(expect).forEach((id) => {
  const a = ((by2[id] || {}).dependsOn || []).join(",");
  if (a !== expect[id].join(",")) bad.push(id + "  实=" + a + "  期=" + expect[id].join(","));
});
console.log("\n写盘完成。节点总数 " + T0.length + " → " + T2.length + (T0.length === T2.length ? "  OK" : "  异常"));
console.log("逐节点断言: " + (bad.length === 0 ? "全部通过 (" + Object.keys(expect).length + ")" : bad.length + " 处不符"));
bad.slice(0, 15).forEach((x) => console.log("   ! " + x));
if (bad.length) process.exit(1);
