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
 *   B) --gen / --score  人工口径（真实 recall，需要你逐条复核）
 *      高影响 / 普通分层抽样 → 每行显式填「已复核(y)」并补漏 / 划错 → 统计：
 *        recall    = 正确的已记录数 / 真实前置总数
 *        precision = 正确的已记录数 / 已记录数
 *      总体指标按两层总体规模加权；无需增删的已复核行同样计入。
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
  const { TECHS, map, real, down } = build();

  // 高影响与普通节点分别抽样；总体指标按两层总体规模加权。
  const rng = makeRng(SEED);
  const high = TECHS.filter(t => (down[t.id] || []).length >= 10);
  const other = TECHS.filter(t => (down[t.id] || []).length < 10);
  const half = Math.floor(N / 2);
  const pickHigh = shuffle(high, rng).slice(0, Math.min(half, high.length));
  const pickOther = shuffle(other, rng).slice(0, N - pickHigh.length);
  const picked = pickHigh.concat(pickOther);
  const stratum = new Map(pickHigh.map(t => [t.id, "high"]).concat(pickOther.map(t => [t.id, "other"])));

  const HDR = ["#", "节点", "节点名", "分类", "年", "下游数", "抽样层", "现有前置(逗号分隔)",
    "已复核(y)", "真实还有哪些前置(你补,逗号分隔)", "现有里记错的(逗号分隔)", "备注"];
  const lines = [HDR.join("\t")];
  picked.forEach((t, i) => {
    lines.push([i + 1, t.id, t.name, t.category, t.year ?? "", (down[t.id] || []).length,
      stratum.get(t.id), real(t).join(","), "", "", "", ""].join("\t").replace(/\t+$/, ""));
  });
  fs.writeFileSync(TSV, lines.join("\n") + "\n", "utf8");

  const md = [];
  md.push(`# 前置完备率复核 · ${DATE}`);
  md.push("");
  md.push(`> 生成工具 \`tools/audit_recall.js\`（种子 ${SEED}，抽样 ${picked.length} / 全库 ${TECHS.length} 节点）。`);
  md.push(`> 高影响层（下游 ≥ 10）抽 ${pickHigh.length} 个，普通层抽 ${pickOther.length} 个；总体指标按两层总体规模加权。`);
  md.push("");
  md.push("**怎么用**：打开同目录的 `recall_sample_" + DATE + ".tsv`，对每一行做三件事 ——");
  md.push("1. 完成复核后在「已复核(y)」列填 `y`；即使无需增删也必须填写，否则该行不计入统计；");
  md.push("2. 在「真实还有哪些前置」列补上**该有但现在没有**的前置（填节点 id，逗号分隔；没有就留空）；");
  md.push("3. 在「现有里记错的」列写下现有前置中**不成立**的（填节点 id，逗号分隔；没有就留空）。");
  md.push("");
  md.push("填完跑 `node tools/audit_recall.js --score`。未知 id、重复补充、把现有前置再次补充都会报错。");
  md.push("");
  md.push("| # | 节点 | 分类·年 | 下游数 | 抽样层 | 现有前置 |");
  md.push("|---|---|---|---|---|---|");
  picked.forEach((t, i) => {
    const names = real(t).map(d => (map[d] ? map[d].name : d)).join("、") || "（无）";
    md.push(`| ${i + 1} | ${t.name} \`${t.id}\` | ${t.category}·${t.year ?? "?"} | ${(down[t.id] || []).length} | ${stratum.get(t.id)} | ${names} |`);
  });
  fs.writeFileSync(MD, md.join("\n") + "\n", "utf8");

  console.log("前置完备率复核表已生成");
  console.log("----------------------------------------");
  console.log(`抽样 ${picked.length} 节点（高影响 ${pickHigh.length} + 普通 ${pickOther.length}）`);
  console.log(`待填表 ${path.relative(ROOT, TSV)}`);
  console.log(`可读版 ${path.relative(ROOT, MD)}`);
}

function score() {
  if (!fs.existsSync(TSV)) { console.error("✗ 未找到复核表，先执行 --gen"); process.exit(1); }
  const { TECHS, map, down } = build();
  const rows = fs.readFileSync(TSV, "utf8").split("\n").filter(l => l && !l.startsWith("#\t"));
  const groups = {
    high: { label: "高影响", population: TECHS.filter(t => (down[t.id] || []).length >= 10).length, rows: 0, rec: 0, real: 0, current: 0 },
    other: { label: "普通", population: TECHS.filter(t => (down[t.id] || []).length < 10).length, rows: 0, rec: 0, real: 0, current: 0 }
  };
  const errors = [], detail = [];
  let filled = 0;
  for (const l of rows) {
    const c = l.split("\t");
    const reviewed = (c[8] || "").trim().toLowerCase() === "y";
    if (!reviewed) continue;
    const stratum = (c[6] || "").trim();
    const cur = (c[7] || "").split(",").map(s => s.trim()).filter(Boolean);
    const add = (c[9] || "").split(",").map(s => s.trim()).filter(Boolean);
    const bad = (c[10] || "").split(",").map(s => s.trim()).filter(Boolean);
    const rowErrors = [];
    if (!groups[stratum]) rowErrors.push(`未知抽样层 ${stratum}`);
    if (new Set(add).size !== add.length) rowErrors.push("补充前置含重复 id");
    if (add.some(d => !map[d])) rowErrors.push(`未知补充 id: ${add.filter(d => !map[d]).join(",")}`);
    if (add.some(d => cur.includes(d))) rowErrors.push(`补充 id 已在现有前置中: ${add.filter(d => cur.includes(d)).join(",")}`);
    if (bad.some(d => !cur.includes(d))) rowErrors.push(`划错 id 不在现有前置中: ${bad.filter(d => !cur.includes(d)).join(",")}`);
    if (rowErrors.length) { errors.push(`${c[1]}: ${rowErrors.join("；")}`); continue; }

    filled++;
    const goodCur = cur.filter(d => !bad.includes(d));
    const realSet = new Set(goodCur.concat(add));
    const g = groups[stratum];
    g.rows++;
    g.rec += goodCur.length;
    g.real += realSet.size;
    g.current += cur.length;
    detail.push({ id: c[1], name: c[2], cur: cur.length, good: goodCur.length, added: add.length, bad: bad.length });
  }
  if (errors.length) {
    console.error("复核表存在错误：\n" + errors.slice(0, 20).join("\n"));
    process.exit(1);
  }
  const fmt = v => v == null || !Number.isFinite(v) ? "—" : (v * 100).toFixed(1) + "%";
  console.log("前置完备率统计（人工口径）");
  console.log("----------------------------------------");
  console.log(`已复核行数 ${filled} / ${rows.length}`);
  if (!filled) { console.log("（还没有已复核行）"); return; }
  console.log("");
  for (const g of Object.values(groups)) {
    if (!g.rows) continue;
    console.log(`${g.label}层：复核 ${g.rows} 行 / 总体 ${g.population} 节点  recall ${fmt(g.rec / g.real)}  precision ${fmt(g.rec / g.current)}`);
  }
  const estimate = field => Object.values(groups).reduce((sum, g) =>
    sum + (g.rows ? g[field] * g.population / g.rows : 0), 0);
  const rec = estimate("rec"), real = estimate("real"), current = estimate("current");
  console.log("");
  console.log(`**recall（总体加权完备率）  ${fmt(rec / real)}**`);
  console.log(`precision（总体加权准确率） ${fmt(rec / current)}`);
  console.log("");
  console.log("逐条：");
  for (const d of detail.slice(0, 40)) {
    console.log(`  ${d.name.padEnd(16)} 现有 ${String(d.cur).padStart(2)}（错 ${d.bad}）  补 ${String(d.added).padStart(2)}  → 该条 recall ${fmt(d.good / (d.good + d.added))}`);
  }
}

(MODE_REPORT ? report : MODE_SCORE ? score : gen)();