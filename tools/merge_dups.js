// tools/merge_dups.js —— 同名重复节点合并
// 读取 audit/ledger.json 中该批次的 merges，执行：
//   ① 全库引用改指（dependsOn 与 enables 中的冗余 id → 保留 id）
//   ② 保留项并入冗余项的独有前置（已按时序性过滤）
//   ③ 从源文件删除冗余节点对象
// 用法：node tools/merge_dups.js --batch 1c [--apply]
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
if (!BATCH) { console.error("用法: node tools/merge_dups.js --batch <批次号> [--apply]"); process.exit(2); }

const ledger = JSON.parse(fs.readFileSync(path.join(ROOT, "audit", "ledger.json"), "utf8"));
const batch = ledger.batches[BATCH];
if (!batch || !batch.merges) { console.error("台账中无该批次的 merges"); process.exit(2); }

function loadMain() {
  const ctx = vm.createContext({ console });
  for (const f of FILES) vm.runInContext(fs.readFileSync(A + f, "utf8"), ctx, { filename: f });
  return vm.runInContext("TECHS", ctx);
}

const T0 = loadMain();
const byId = {}; T0.forEach((t) => { if (!(t.id in byId)) byId[t.id] = t; });
const idSet = new Set(T0.map((t) => t.id));

const repoint = {};
batch.merges.forEach((m) => {
  if (!idSet.has(m.keep)) throw new Error("保留项不存在: " + m.keep);
  if (!idSet.has(m.drop)) throw new Error("冗余项不存在: " + m.drop);
  if (m.keep === m.drop) throw new Error("自合并: " + m.keep);
  if (!(byId[m.keep].views || []).length) throw new Error("保留项缺 views 富字段: " + m.keep);
  repoint[m.drop] = m.keep;
});
const drops = Object.keys(repoint);

// 护栏：add 列表中的 id 不得是本批次将被删除的冗余 id（须先改指为保留 id）
const dropSet = new Set(drops);
batch.merges.forEach((m) => {
  (m.add || []).forEach((d) => {
    if (dropSet.has(d)) throw new Error("并入列表含待删除 id： " + m.keep + " ← " + d + "（应改指为保留 id）");
    if (!idSet.has(d)) throw new Error("并入列表含不存在的 id： " + m.keep + " ← " + d);
  });
});

// 预期：全库引用改指 + 保留项并入独有前置
const expectDeps = {}, expectEn = {};
T0.forEach((t) => {
  const d0 = (t.dependsOn || []).slice();
  const e0 = (t.enables || []).slice();
  if (!(t.id in byId) || byId[t.id] !== t) return;
  const d1 = d0.map((x) => repoint[x] || x).filter((x, i, a) => a.indexOf(x) === i && x !== t.id);
  const e1 = e0.map((x) => repoint[x] || x).filter((x, i, a) => a.indexOf(x) === i && x !== t.id);
  if (d1.join(",") !== d0.join(",")) expectDeps[t.id] = d1;
  if (e1.join(",") !== e0.join(",")) expectEn[t.id] = e1;
});
batch.merges.forEach((m) => {
  if (!(m.add || []).length) return;
  const cur = expectDeps[m.keep] || (byId[m.keep].dependsOn || []).slice();
  m.add.forEach((d) => { if (!cur.includes(d)) cur.push(d); });
  expectDeps[m.keep] = cur;
});

// 时序性校验
const yearBad = [];
Object.keys(expectDeps).forEach((c) => expectDeps[c].forEach((d) => {
  if (!idSet.has(d) || d in repoint) return;
  const a = byId[c].year, b = byId[d].year;
  if (a != null && b != null && a >= 0 && b >= 0 && a < b) yearBad.push(c + "(" + a + ") <- " + d + "(" + b + ")");
}));

// 环校验（预期图：删除冗余项后）
const eff = (id) => (expectDeps[id] !== undefined ? expectDeps[id] : (byId[id] ? (byId[id].dependsOn || []).filter((x) => !(x in repoint)) : []));
const color = {}; const cyc = [];
const dfs = (id) => { color[id] = 1; eff(id).forEach((d) => { if (!idSet.has(d) || d in repoint) return; if (color[d] === 1) cyc.push(id + "->" + d); else if (!color[d]) dfs(d); }); color[id] = 2; };
T0.forEach((t) => { if (!(t.id in repoint) && !color[t.id]) dfs(t.id); });

console.log("批次 " + BATCH + " · " + batch.scope);
console.log("合并组 " + batch.merges.length + "，删除节点 " + drops.length);
console.log("需改 dependsOn 的节点 " + Object.keys(expectDeps).length + "，需改 enables 的节点 " + Object.keys(expectEn).length);
if (batch.summary) {
  const tot = Object.values(batch.summary).reduce((s, v) => s + v, 0);
  if (tot !== batch.merges.length) throw new Error("台账断言失败：summary 合计 " + tot + " ≠ 组数 " + batch.merges.length);
  console.log("[OK] 台账完整划分断言通过（" + tot + " = " + batch.merges.length + "）");
}
if (yearBad.length) { console.log("[FAIL] 年份倒挂 " + yearBad.length + " 处："); yearBad.slice(0, 10).forEach((x) => console.log("   ! " + x)); process.exit(1); }
console.log("[OK] 时序性校验通过");
if (cyc.length) { console.log("[FAIL] 预期图出现环 " + cyc.length + "："); cyc.slice(0, 10).forEach((x) => console.log("   ! " + x)); process.exit(1); }
console.log("[OK] 环校验通过");

console.log("\n引用改指明细：");
Object.keys(expectDeps).sort().forEach((c) => console.log("  dependsOn " + byId[c].name + " [" + c + "]  →  " + expectDeps[c].join(",")));
Object.keys(expectEn).sort().forEach((c) => console.log("  enables   " + byId[c].name + " [" + c + "]  →  " + expectEn[c].join(",")));
console.log("\n待删除节点：");
drops.forEach((d) => console.log("  " + byId[d].name + " [" + d + "] → 保留 " + repoint[d]));

if (!APPLY) { console.log("\n（干跑模式，未写盘。加 --apply 执行）"); process.exit(0); }

const bak = "/tmp/bak_" + BATCH + "_" + Date.now();
cp.execSync("mkdir -p " + bak + " && cp " + FILES.map((f) => A + f).join(" ") + " " + bak + "/");
console.log("\n已备份 → " + bak);

const RE = /("dependsOn"|"enables"|\bdependsOn|\benables)\s*:\s*\[([^\]]*)\]/;
const F = {};
FILES.forEach((f) => (F[f] = fs.readFileSync(A + f, "utf8")));

function locate(src, id) {
  const pretty = src.indexOf('"id": "' + id + '",');
  if (pretty >= 0) {
    const start = src.lastIndexOf("{", pretty);
    let stop = src.indexOf("\n  },", pretty + 5);
    if (stop < 0) stop = src.indexOf("\n  }\n", pretty + 5);
    return { start: start < 0 ? pretty : start, stop: stop < 0 ? src.length : stop };
  }
  const esc = id.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const compact = new RegExp("\\{ id:\"" + esc + "\"").exec(src);
  if (compact) {
    let stop = src.indexOf('{ id:"', compact.index + 5);
    if (stop < 0) stop = src.length;
    return { start: compact.index, stop };
  }
  return null;
}

// 逐节点改写 dependsOn / enables
let okN = 0; const fail = [];
Object.keys(expectDeps).concat(Object.keys(expectEn)).filter((v, i, a) => a.indexOf(v) === i).forEach((id) => {
  let done = false;
  for (const fn of FILES) {
    if (done) break;
    const src = F[fn];
    const loc = locate(src, id);
    if (!loc) continue;
    let block = src.slice(loc.start, loc.stop);
    if (block.indexOf('"name"') < 0 && block.indexOf('name:') < 0) continue;
    let changed = false;
    const repl = (field, ids) => {
      const re = new RegExp('("' + field + '"|\\b' + field + ')\\s*:\\s*\\[([^\\]]*)\\]');
      const m = re.exec(block);
      if (!m) return false;
      const quoted = /"/.test(m[2]) || new RegExp('"dependsOn"\\s*:|\\bdependsOn\\s*:\\s*\\["').test(src);
      const q = (x) => (quoted ? '"' + x + '"' : x);
      const multiline = m[2].indexOf("\n") >= 0;
      let inner;
      if (!multiline) inner = ids.map(q).join(",");
      else {
        const lines = m[2].split("\n");
        const itemIndent = (lines.slice(1).find((l) => l.trim()) || "").match(/^[ \t]*/)[0];
        const closeIndent = (lines[lines.length - 1] || "").match(/^[ \t]*/)[0];
        inner = "\n" + ids.map((x) => itemIndent + q(x)).join(",\n") + "\n" + closeIndent;
      }
      block = block.slice(0, m.index) + m[1] + ": [" + inner + "]" + block.slice(m.index + m[0].length);
      changed = true;
      return true;
    };
    if (expectDeps[id]) repl("dependsOn", expectDeps[id]);
    if (expectEn[id]) repl("enables", expectEn[id]);
    if (!changed) continue;
    F[fn] = src.slice(0, loc.start) + block + src.slice(loc.stop);
    okN++; done = true;
  }
  if (!done) fail.push(id);
});

// 删除冗余节点对象
let delN = 0;
drops.forEach((d) => {
  let done = false;
  for (const fn of FILES) {
    if (done) break;
    const src = F[fn];
    const loc = locate(src, d);
    if (!loc) continue;
    let cut = loc.stop;
    if (src.substr(cut, 5) === "\n  },") cut += 6;
    else if (src.substr(cut, 4) === "\n  }") cut += 4;
    F[fn] = src.slice(0, loc.start) + src.slice(cut);
    delN++; done = true;
  }
  if (!done) fail.push("删除失败: " + d);
});

console.log("改写节点 " + okN + "，删除对象 " + delN + "，失败 " + fail.length);
fail.slice(0, 10).forEach((x) => console.log("   ! " + x));
if (fail.length) { console.log("存在失败项，未写盘。"); process.exit(1); }

FILES.forEach((f) => fs.writeFileSync(A + f, F[f]));
const T2 = loadMain();
const id2 = new Set(T2.map((t) => t.id));
const left = drops.filter((d) => id2.has(d));
console.log("\n写盘完成。节点总数 " + T0.length + " → " + T2.length + "（预期 " + (T0.length - drops.length) + "）");
console.log("残留冗余节点: " + (left.length ? left.join(",") : "无"));
const by2 = {}; T2.forEach((t) => { if (!(t.id in by2)) by2[t.id] = t; });
const bad = [];
Object.keys(expectDeps).filter((c) => !dropSet.has(c)).forEach((c) => { const a = ((by2[c] || {}).dependsOn || []).join(","); const e = expectDeps[c].join(","); if (a !== e) bad.push("dependsOn " + c + " 实=" + a + " 期=" + e); });
Object.keys(expectEn).filter((c) => !dropSet.has(c)).forEach((c) => { const a = ((by2[c] || {}).enables || []).join(","); const e = expectEn[c].join(","); if (a !== e) bad.push("enables " + c + " 实=" + a + " 期=" + e); });
// 全库无残留引用
const refLeft = [];
T2.forEach((t) => { (t.dependsOn || []).forEach((d) => { if (drops.includes(d)) refLeft.push("dep " + t.id + "->" + d); }); (t.enables || []).forEach((d) => { if (drops.includes(d)) refLeft.push("en " + t.id + "->" + d); }); });
console.log("逐节点断言: " + (bad.length === 0 ? "全部通过 (" + (Object.keys(expectDeps).length + Object.keys(expectEn).length) + ")" : bad.length + " 处不符"));
bad.slice(0, 10).forEach((x) => console.log("   ! " + x));
console.log("残留引用: " + (refLeft.length ? refLeft.slice(0, 10).join("; ") : "无"));
if (left.length || bad.length || refLeft.length || T2.length !== T0.length - drops.length) process.exit(1);
