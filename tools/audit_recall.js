#!/usr/bin/env node
/**
 * audit_recall.js — 前置完备率（recall）度量（第 0 期指标工具之二）
 * ============================================================================
 * 为什么这是第 0 期最重要的指标：
 *   最终目标是「据网络推演未来技术何时涌现」，靠的是**前提闭包** ——
 *   若某技术真实的前置有一半没被记录，闭包就是残缺的，推演必然落空。
 *   边**准确率**（sample_edges.js）只说明「记下的对不对」；
 *   本工具量的是「**该记的记全了没有**」。后者才是预测能力的直接上限。
 *
 * 两种口径：
 *   A) --report  结构性近似（**不需人工，立刻出数**）
 *      以「同分类 × 同历史时期」的中位前置数为基线，统计有多少节点的前置数
 *      明显低于基线。这不是真实 recall，是**代理指标**，用于立刻拿到一个
 *      数量级判断（例：汽车 3 条前置 vs 同类同期中位 4 条）。
 *   B) --gen / --score  人工口径（真实 recall，需要你逐条补）
 *      抽样节点 → 你在 TSV 里补「真实还有哪些前置」并划掉「记错的」→ 统计：
 *        recall    = 正确的已记录数 / 真实前置总数
 *        precision = 正确的已记录数 / 已记录数
 *
 * 用法：
 *   node tools/audit_recall.js --report            # 结构性近似（立即出数）
 *   node tools/audit_recall.js --gen [N]           # 生成人工复核表（默认 N=50）
 *   node tools/audit_recall.js --score             # 读回人工复核表算 recall
 *
 * 输出：audit/recall_sample_<日期>.tsv / .md
 * ============================================================================
 */
"use strict";

const fs = require("fs");
const vm = require("vm");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const AUDIT = path.join(ROOT, "audit");
const DATE = "20260915";
const TSV = path.join(AUDIT, `recall_sample_${DATE}.tsv`);
const MD = path.join(AUDIT, `recall_sample_${DATE}.md`);

const args = process.argv.slice(2);
const MODE_REPORT = args.includes("--report");
const MODE_GEN = args.includes("--gen");
const MODE_SCORE = args.includes("--score");
const SEED = (() => { const i = args.indexOf("--seed"); return i >= 0 ? parseInt(args[i + 1], 10) : 20260915; })();
const N = (() => { const i = args.indexOf("--gen"); const v = i >= 0 ? parseInt(args[i + 1], 10) : NaN; return Number.isFinite(v) ? v : 50; })();

const GENERIC = new Set([
  "mathematics", "chemistry", "physics", "algorithm", "statistics", "engineering",
  "writing", "optimization", "numerical", "molecular_bio", "materials", "genetics",
  "immunology", "language"
]);

function loadMain() {
  const F = ["assets/techs_extra.js", "assets/techs_extend.js", "assets/techs_more.js", "assets/techs_midtech.js", "assets/data.js"];
  const ctx = vm.createContext({ console });
  for (const f of F) vm.runInContext(fs.readFileSync(path.join(ROOT, f), "utf8"), ctx, { filename: f });
  return vm.runInContext("TECHS", ctx);
}

function makeRng(seed) {
  let s = seed >>> 0;
  return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; };
}
function shuffle(a, rng) { const b = a.slice(); for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(rng() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; }

// 历史时期（与 gen_techs.js 的 eraOf 同口径，用于「同分期」基线）
function eraOf(y) {
  if (y == null) return "?";
  if (y < -3500) return "史前";
  if (y < -500) return "古代";
  if (y < 500) return "古典";
  if (y < 1500) return "中世纪";
  if (y < 1750) return "近代早期";
  if (y < 1900) return "工业革命";
  if (y < 1950) return "电气";
  if (y < 2000) return "信息";
  return "智能";
}

function build() {
  const TECHS = loadMain();
  const map = {}; TECHS.forEach(t => (map[t.id] = t));
  const down = {};
  TECHS.forEach(t => (t.dependsOn || []).forEach(d => { if (map[d]) (down[d] = down[d] || []).push(t.id); }));
  const real = t => (t.dependsOn || []).filter(d => map[d]);
  const nonGeneric = t => real(t).filter(d => !GENERIC.has(d));
  return { TECHS, map, down, real, nonGeneric };
}

// ---------- A) 结构性近似 ----------
function report() {
  const { TECHS, real, nonGeneric } = build();

  // 基线：同分类 × 同时期的中位「非枢纽前置数」
  const buckets = {};
  for (const t of TECHS) {
    const k = `${t.category}|${eraOf(t.year)}`;
    (buckets[k] = buckets[k] || []).push(nonGeneric(t).length);
  }
  const median = (a) => { const b = a.slice().sort((x, y) => x - y); const m = b.length >> 1; return b.length % 2 ? b[m] : (b[m - 1] + b[m]) / 2; };
  const base = {}; for (const k of Object.keys(buckets)) base[k] = median(buckets[k]);

  const rows = TECHS.map(t => {
    const k = `${t.category}|${eraOf(t.year)}`;
    return { id: t.id, name: t.name, cat: t.category, era: eraOf(t.year), year: t.year,
      n: nonGeneric(t).length, nAll: real(t).length, med: base[k], down: (0) };
  });
  // 下游度
  const { down } = build();
  rows.forEach(r => (r.down = (down[r.id] || []).length));

  const zero = rows.filter(r => r.n === 0);
  const below = rows.filter(r => r.n > 0 && r.n < r.med);
  const atOrAbove = rows.filter(r => r.n >= r.med);
  const emptyOrOne = rows.filter(r => r.nAll <= 1);

  console.log("前置完备率 · 结构性近似（不需人工，代理指标）");
  console.log("========================================");
  console.log("口径：以「同分类 × 同历史时期」的非枢纽前置数中位值为基线");
  console.log("");
  console.log(`全库节点                      ${rows.length}`);
  console.log(`非枢纽前置数 = 0              ${zero.length}  (${(zero.length / rows.length * 100).toFixed(1)}%)`);
  console.log(`低于同组中位                  ${below.length}  (${(below.length / rows.length * 100).toFixed(1)}%)`);
  console.log(`达到或高于中位                ${atOrAbove.length}  (${(atOrAbove.length / rows.length * 100).toFixed(1)}%)`);
  console.log(`**总前置数 ≤ 1（近乎无前置）**  ${emptyOrOne.length}  (${(emptyOrOne.length / rows.length * 100).toFixed(1)}%)`);
  console.log("");
  console.log("注：这是**代理指标**，不等于真实 recall —— 中位基线本身也可能是偏低的。");
  console.log("    要拿真实数字需跑 --gen 后由人工逐条补全。");
  console.log("");

  // 高影响节点（下游 ≥ 20）的缺口 —— 这些是预测骨架，最该先补
  // 排除 14 个维度顶点：它们前置少是设计使然（维度根），不是缺口
  const impact = rows.filter(r => r.down >= 20 && !GENERIC.has(r.id)).sort((a, b) => b.down - a.down);
  const impactThin = impact.filter(r => r.n < r.med);
  console.log(`高影响节点（下游 ≥ 20 且非维度顶点）${impact.length} 个，其中前置低于同组中位的 ${impactThin.length} 个：`);
  console.log("");
  console.log("| 节点 | 分类 | 年 | 下游数 | 非枢纽前置 | 同组中位 |");
  console.log("|---|---|---|---|---|---|");
  for (const r of impactThin.slice(0, 40)) {
    console.log(`| ${r.name} \`${r.id}\` | ${r.cat} | ${r.year ?? "?"} | ${r.down} | **${r.n}** | ${r.med} |`);
  }
  if (impactThin.length > 40) console.log(`\n…另有 ${impactThin.length - 40} 个。`);
  console.log("");
  console.log(`高影响节点中前置 ≤ 1 的：${impact.filter(r => r.nAll <= 1).length} 个`);
}

// ---------- B) 人工口径 ----------
function gen() {
  const { TECHS, map, real, nonGeneric, down } = build();

  // 分层：一半取高影响（下游 ≥ 10），一半随机；均在分类内均衡
  const rng = makeRng(SEED);
  const high = TECHS.filter(t => (down[t.id] || []).length >= 10);
  const pool = shuffle(TECHS, rng);
  const half = Math.floor(N / 2);
  const pickHigh = shuffle(high, rng).slice(0, Math.min(half, high.length));
  const pickedIds = new Set(pickHigh.map(t => t.id));
  const pickRand = [];
  for (const t of pool) { if (pickRand.length >= N - pickHigh.length) break; if (!pickedIds.has(t.id)) { pickRand.push(t); pickedIds.add(t.id); } }
  const picked = pickHigh.concat(pickRand);

  const HDR = ["#", "节点", "节点名", "分类", "年", "下游数", "现有前置(逗号分隔)",
    "真实还有哪些前置(你补,逗号分隔)", "现有里记错的(逗号分隔)", "备注"];
  const lines = [HDR.join("\t")];
  picked.forEach((t, i) => {
    lines.push([i + 1, t.id, t.name, t.category, t.year ?? "", (down[t.id] || []).length,
      real(t).join(","), "", "", ""].join("\t"));
  });
  fs.writeFileSync(TSV, lines.join("\n") + "\n", "utf8");

  const md = [];
  md.push(`# 前置完备率复核 · ${DATE}`);
  md.push("");
  md.push(`> 生成工具 \`tools/audit_recall.js\`（种子 ${SEED}，抽样 ${picked.length} / 全库 ${TECHS.length} 节点）。`);
  md.push(`> 一半取自**高影响节点**（下游 ≥ 10，预测骨架），一半随机。`);
  md.push("");
  md.push("**怎么用**：打开同目录的 `recall_sample_" + DATE + ".tsv`，对每一行做两件事 ——");
  md.push("1. 在「真实还有哪些前置」列补上你认为**该有但现在没有**的前置（填节点 id，逗号分隔；没有就留空）；");
  md.push("2. 在「现有里记错的」列写下现有前置中**你认为不成立**的（填节点 id，逗号分隔）。");
  md.push("");
  md.push("填完跑 `node tools/audit_recall.js --score`。");
  md.push("");
  md.push("| # | 节点 | 分类·年 | 下游数 | 现有前置 |");
  md.push("|---|---|---|---|---|");
  picked.forEach((t, i) => {
    const names = real(t).map(d => (map[d] ? map[d].name : d)).join("、") || "（无）";
    md.push(`| ${i + 1} | ${t.name} \`${t.id}\` | ${t.category}·${t.year ?? "?"} | ${(down[t.id] || []).length} | ${names} |`);
  });
  fs.writeFileSync(MD, md.join("\n") + "\n", "utf8");

  console.log("前置完备率复核表已生成");
  console.log("----------------------------------------");
  console.log(`抽样 ${picked.length} 节点（高影响 ${pickHigh.length} + 随机 ${pickRand.length}）`);
  console.log(`待填表 ${path.relative(ROOT, TSV)}`);
  console.log(`可读版 ${path.relative(ROOT, MD)}`);
}

function score() {
  if (!fs.existsSync(TSV)) { console.error("✗ 未找到复核表，先执行 --gen"); process.exit(1); }
  const { map } = build();
  const rows = fs.readFileSync(TSV, "utf8").split("\n").filter(l => l && !l.startsWith("#\t"));
  let rec = 0, realTotal = 0, prec = 0, precTotal = 0, filled = 0;
  const detail = [];
  for (const l of rows) {
    const c = l.split("\t");
    const cur = (c[6] || "").split(",").map(s => s.trim()).filter(Boolean);
    const add = (c[7] || "").split(",").map(s => s.trim()).filter(Boolean);
    const bad = (c[8] || "").split(",").map(s => s.trim()).filter(Boolean);
    if (!add.length && !bad.length) continue;    // 本行未填
    filled++;
    const goodCur = cur.filter(d => !bad.includes(d));
    const realSet = new Set(goodCur.concat(add));
    rec += goodCur.length; realTotal += realSet.size;
    prec += goodCur.length; precTotal += cur.length;
    detail.push({ id: c[1], name: c[2], cur: cur.length, good: goodCur.length, added: add.length, bad: bad.length });
  }
  const fmt = v => v == null ? "—" : (v * 100).toFixed(1) + "%";
  console.log("前置完备率统计（人工口径）");
  console.log("----------------------------------------");
  console.log(`已填行数 ${filled} / ${rows.length}`);
  if (!filled) { console.log("（还没填任何一行）"); return; }
  console.log("");
  console.log(`**recall（完备率）  ${fmt(realTotal ? rec / realTotal : null)}**   正确已记录 ${rec} / 真实前置 ${realTotal}`);
  console.log(`precision（准确率） ${fmt(precTotal ? prec / precTotal : null)}   正确已记录 ${prec} / 已记录 ${precTotal}`);
  console.log("");
  console.log("逐条：");
  for (const d of detail.slice(0, 40)) {
    console.log(`  ${d.name.padEnd(16)} 现有 ${String(d.cur).padStart(2)}（错 ${d.bad}）  补 ${String(d.added).padStart(2)}  → 该条 recall ${fmt(d.good / (d.good + d.added))}`);
  }
}

(MODE_REPORT ? report : MODE_SCORE ? score : gen)();