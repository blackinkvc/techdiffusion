#!/usr/bin/env node
/**
 * sample_edges.js — 边准确率抽样复核（第 0 期指标工具之一）
 * ============================================================================
 * 目的：把「这个网络到底准到什么程度」从主观判断变成**可复核的数字**。
 *       此前从无此度量 —— 所有关于准确性的讨论都只能靠举例。
 *
 * 方法（与检修计划 §五第 5 条同源：独立于判定规则的抽查）：
 *   1) **确定性分层抽样** —— 固定种子（默认 20260915）的 LCG，同参数永远抽同一批，
 *      便于逐次复跑对比。分层维度：
 *        · 依赖者分类（9 类）
 *        · 前置是否 14 个维度顶点（GENERIC）—— 这是已知最大问题区，单独成层
 *        · 前置与依赖者是否同分类
 *   2) **机器初判**（heuristic hint）—— 按机械信号给出「疑 / 待查 / 较可信」，
 *      让复核者**确认或推翻**而非从零判断，显著降低人工成本。
 *      注意：初判只依据**结构性信号**（年份、分类、枢纽），不看语义 ——
 *      它给出的「较可信」不代表真的可信，只是「没有机械可疑信号」。
 *   3) 人工在 TSV 的「你的判定」列填 y（对）/ n（错）/ u（不确定），
 *      然后 `--score` 统计准确率（分层 + 总体，含置信区间）。
 *
 * 用法：
 *   node tools/sample_edges.js --gen [N] [--seed S]   # 生成抽样表（默认 N=200）
 *   node tools/sample_edges.js --score                # 读回判定并统计
 *   node tools/sample_edges.js --list                 # 只打印分层分布
 *
 * 输出：
 *   audit/edge_sample_<日期>.tsv   待填（制表符分隔，可直接在编辑器里改最后一列）
 *   audit/edge_sample_<日期>.md    同内容的可读版（只读，供浏览）
 * ============================================================================
 */
"use strict";

const fs = require("fs");
const vm = require("vm");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const AUDIT = path.join(ROOT, "audit");
const DATE = "20260915";                    // 抽样批次标识（写死以便复跑）
const TSV = path.join(AUDIT, `edge_sample_${DATE}.tsv`);
const MD = path.join(AUDIT, `edge_sample_${DATE}.md`);

const args = process.argv.slice(2);
const MODE_GEN = args.includes("--gen");
const MODE_SCORE = args.includes("--score");
const MODE_LIST = args.includes("--list");
const SEED = (() => { const i = args.indexOf("--seed"); return i >= 0 ? parseInt(args[i + 1], 10) : 20260915; })();
const N = (() => { const i = args.indexOf("--gen"); const v = i >= 0 ? parseInt(args[i + 1], 10) : NaN; return Number.isFinite(v) ? v : 200; })();

// 14 个泛化枢纽（维度顶点）—— 与 tools/audit_net.js 的 GENERIC 同源
const GENERIC = new Set([
  "mathematics", "chemistry", "physics", "algorithm", "statistics", "engineering",
  "writing", "optimization", "numerical", "molecular_bio", "materials", "genetics",
  "immunology", "language"
]);

// ---------- 载入主管线 ----------
function loadMain() {
  const F = ["assets/techs_extra.js", "assets/techs_extend.js", "assets/techs_more.js", "assets/techs_midtech.js", "assets/data.js"];
  const ctx = vm.createContext({ console });
  for (const f of F) vm.runInContext(fs.readFileSync(path.join(ROOT, f), "utf8"), ctx, { filename: f });
  return vm.runInContext("TECHS", ctx);
}

// ---------- 确定性随机（LCG，便于复跑）----------
function makeRng(seed) {
  let s = seed >>> 0;
  return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; };
}
function shuffle(arr, rng) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ---------- 机器初判 ----------
function hintOf(e) {
  const reasons = [];
  if (e.yearC != null && e.yearP != null) {
    if (e.yearP > e.yearC) return { level: "错", why: "年份倒挂：前置晚于依赖者" };
    if (e.yearC >= 0 && e.yearP >= 0 && e.yearC - e.yearP <= 3 && e.yearC !== e.yearP)
      reasons.push(`年份仅隔 ${e.yearC - e.yearP} 年`);
    if (e.yearC === e.yearP) reasons.push("同年前置");
  }
  if (e.isGeneric) reasons.push("前置为 14 个维度顶点（A/E 族问题区）");
  if (e.sameCat && !e.isGeneric && e.yearC != null && e.yearP != null && e.yearC - e.yearP <= 50)
    reasons.push("同分类且年份很近（疑似同义/同类节点自指）");
  if (!e.sameCat && e.yearC != null && e.yearP != null && e.yearC >= 0 && e.yearP >= 0 && e.yearC - e.yearP > 800)
    reasons.push("跨分类且跨度 > 800 年（F 族口径）");

  if (reasons.length === 0) return { level: "较可信", why: "无机械可疑信号（≠ 语义正确）" };
  if (reasons.length === 1 && reasons[0].startsWith("年份仅隔")) return { level: "疑", why: reasons.join("；") };
  return { level: reasons.length >= 2 ? "疑" : "待查", why: reasons.join("；") };
}

// ---------- 生成 ----------
function gen() {
  const TECHS = loadMain();
  const map = {};
  TECHS.forEach(t => (map[t.id] = t));

  const edges = [];
  for (const t of TECHS) {
    for (const p of (t.dependsOn || [])) {
      const P = map[p];
      if (!P) continue;
      const e = {
        child: t.id, childName: t.name, catC: t.category, yearC: t.year,
        parent: p, parentName: P.name, catP: P.category, yearP: P.year,
        sameCat: t.category === P.category,
        isGeneric: GENERIC.has(p),
        span: (t.year != null && P.year != null) ? Math.abs(t.year - P.year) : null
      };
      e.stratum = `${e.isGeneric ? "G" : "N"}|${e.sameCat ? "same" : "cross"}`;
      e.hint = hintOf(e);
      edges.push(e);
    }
  }
  edges.sort((a, b) => (a.child < b.child ? -1 : a.child > b.child ? 1 : a.parent < b.parent ? -1 : 1));

  // 分层：按 stratum 分组，组内确定性打乱后按比例抽样（不足则全取）
  const byStratum = {};
  for (const e of edges) (byStratum[e.stratum] = byStratum[e.stratum] || []).push(e);
  const rng = makeRng(SEED);
  const total = edges.length;
  const picked = [];
  const strataInfo = [];
  for (const k of Object.keys(byStratum).sort()) {
    const pool = shuffle(byStratum[k], rng);
    const want = Math.max(1, Math.round((pool.length / total) * N));
    const take = Math.min(want, pool.length);
    picked.push(...pool.slice(0, take));
    strataInfo.push({ stratum: k, pool: pool.length, taken: take });
  }
  // 稳定排序输出顺序（按 依赖者分类 → 依赖者 → 前置）
  picked.sort((a, b) => (a.catC < b.catC ? -1 : a.catC > b.catC ? 1 : a.child < b.child ? -1 : a.child > b.child ? 1 : 0));

  // ---- TSV ----
  const HDR = ["#", "依赖者", "依赖者名", "分类", "年", "前置", "前置名", "分类", "年", "跨度",
    "同域", "枢纽", "机器初判", "依据", "你的判定(y/n/u)", "备注"];
  const lines = [HDR.join("\t")];
  picked.forEach((e, i) => {
    lines.push([
      i + 1, e.child, e.childName, e.catC, e.yearC ?? "",
      e.parent, e.parentName, e.catP, e.yearP ?? "",
      e.span ?? "", e.sameCat ? "同" : "跨", e.isGeneric ? "是" : "",
      e.hint.level, e.hint.why, "", ""
    ].join("\t"));
  });
  fs.writeFileSync(TSV, lines.join("\n") + "\n", "utf8");

  // ---- MD（只读可读版）----
  const md = [];
  md.push(`# 边准确率抽样复核 · ${DATE}`);
  md.push("");
  md.push(`> 生成工具 \`tools/sample_edges.js\`（种子 ${SEED}，抽样 ${picked.length} / 全库 ${total} 条边）。`);
  md.push(`> **怎么用**：打开同目录的 \`edge_sample_${DATE}.tsv\`，在「你的判定(y/n/u)」列填 **y**（关系成立）/ **n**（关系错误）/ **u**（不确定），`);
  md.push(`> 可选填「备注」。填完跑 \`node tools/sample_edges.js --score\` 得到准确率。`);
  md.push(`> 「机器初判」只依据**结构性信号**（年份间隔 / 分类 / 是否枢纽），**不看语义** ——「较可信」只表示没有机械可疑信号，不代表语义正确。`);
  md.push("");
  md.push("## 分层与抽样数");
  md.push("");
  md.push("| 层（枢纽 / 同域） | 全库条数 | 本表抽到 |");
  md.push("|---|---|---|");
  for (const s of strataInfo.sort((a, b) => b.pool - a.pool)) {
    const label = s.stratum === "G|same" ? "前置为枢纽 · 同分类" : s.stratum === "G|cross" ? "前置为枢纽 · 跨分类"
      : s.stratum === "N|same" ? "前置非枢纽 · 同分类" : "前置非枢纽 · 跨分类";
    md.push(`| ${label} | ${s.pool} | ${s.taken} |`);
  }
  md.push("");
  md.push("## 抽样清单");
  md.push("");
  md.push("| # | 依赖者 | 分类·年 | 前置 | 分类·年 | 跨度 | 机器初判 | 依据 |");
  md.push("|---|---|---|---|---|---|---|---|");
  for (const [i, e] of picked.entries()) {
    md.push(`| ${i + 1} | ${e.childName} \`${e.child}\` | ${e.catC}·${e.yearC ?? "?"} | ${e.parentName} \`${e.parent}\` | ${e.catP}·${e.yearP ?? "?"} | ${e.span ?? "?"} | ${e.hint.level} | ${e.hint.why} |`);
  }
  fs.writeFileSync(MD, md.join("\n") + "\n", "utf8");

  console.log("边抽样复核表已生成");
  console.log("----------------------------------------");
  console.log(`全库实存边   ${total}`);
  console.log(`抽样         ${picked.length}（种子 ${SEED}）`);
  for (const s of strataInfo.sort((a, b) => b.pool - a.pool)) console.log(`  ${s.stratum.padEnd(10)} 全库 ${String(s.pool).padStart(4)}  抽到 ${s.taken}`);
  console.log("");
  console.log(`待填表  ${path.relative(ROOT, TSV)}`);
  console.log(`可读版  ${path.relative(ROOT, MD)}`);
  console.log("");
  console.log("填完「你的判定」列（y/n/u）后执行：node tools/sample_edges.js --score");
}

// ---------- 统计 ----------
function score() {
  if (!fs.existsSync(TSV)) {
    console.error("✗ 未找到抽样表，先执行 --gen");
    process.exit(1);
  }
  const rows = fs.readFileSync(TSV, "utf8").split("\n").filter(l => l && !l.startsWith("#\t"));
  const recs = rows.map(l => {
    const c = l.split("\t");
    return { child: c[1], parent: c[5], catC: c[3], isGeneric: c[11] === "是", sameCat: c[10] === "同", hint: c[12], verdict: (c[14] || "").trim().toLowerCase(), note: c[15] || "" };
  });
  const judged = recs.filter(r => r.verdict === "y" || r.verdict === "n");
  const unsure = recs.filter(r => r.verdict === "u").length;
  const blank = recs.filter(r => !r.verdict).length;

  const acc = (arr) => arr.length ? arr.filter(r => r.verdict === "y").length / arr.length : null;
  const fmt = (v) => v == null ? "—" : (v * 100).toFixed(1) + "%";
  const ci = (k, n) => {           // Wilson 区间（95%），小样本下比正态近似稳
    if (!n) return "—";
    const z = 1.96, p = k / n;
    const d = 1 + z * z / n;
    const c = (p + z * z / (2 * n)) / d;
    const h = z * Math.sqrt(p * (1 - p) / n + z * z / (4 * n * n)) / d;
    return `${((c - h) * 100).toFixed(1)}% ~ ${((c + h) * 100).toFixed(1)}%`;
  };

  console.log("边准确率统计");
  console.log("----------------------------------------");
  console.log(`抽到 ${recs.length} 条 | 已判 ${judged.length} | 不确定 ${unsure} | 未填 ${blank}`);
  const k = judged.filter(r => r.verdict === "y").length;
  console.log("");
  console.log(`**整体准确率  ${fmt(acc(judged))}**   95% 置信区间 ${ci(k, judged.length)}`);
  console.log("");
  console.log("按分层：");
  const strata = [["G|same", "前置为枢纽 · 同分类"], ["G|cross", "前置为枢纽 · 跨分类"], ["N|same", "前置非枢纽 · 同分类"], ["N|cross", "前置非枢纽 · 跨分类"]];
  for (const [key, label] of strata) {
    const g = judged.filter(r => `${r.isGeneric ? "G" : "N"}|${r.sameCat ? "same" : "cross"}` === key);
    if (!g.length) continue;
    const kk = g.filter(r => r.verdict === "y").length;
    console.log(`  ${label.padEnd(20)} ${String(g.length).padStart(3)} 条  准确率 ${fmt(acc(g)).padStart(6)}  区间 ${ci(kk, g.length)}`);
  }
  console.log("");
  console.log("与机器初判的吻合度（初判「疑/待查」中人判为错的比例，越高说明初判越有用）：");
  for (const lv of ["疑", "待查", "较可信", "错"]) {
    const g = judged.filter(r => r.hint === lv);
    if (!g.length) continue;
    const bad = g.filter(r => r.verdict === "n").length;
    console.log(`  初判「${lv}」  ${String(g.length).padStart(3)} 条  人判为错 ${bad}（${fmt(bad / g.length)}）`);
  }
  if (blank) console.log(`\n提示：还有 ${blank} 条未填判定，未计入统计。`);
}

// ---------- 分布 ----------
function list() {
  const TECHS = loadMain();
  const map = {}; TECHS.forEach(t => (map[t.id] = t));
  const cnt = {};
  for (const t of TECHS) for (const p of (t.dependsOn || [])) {
    const P = map[p]; if (!P) continue;
    const k = `${GENERIC.has(p) ? "G" : "N"}|${t.category === P.category ? "same" : "cross"}`;
    cnt[k] = (cnt[k] || 0) + 1;
  }
  console.log("全库边分层分布：");
  Object.keys(cnt).sort().forEach(k => console.log(`  ${k.padEnd(10)} ${cnt[k]}`));
}

(MODE_SCORE ? score : MODE_LIST ? list : gen)();