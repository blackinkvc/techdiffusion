#!/usr/bin/env node
// ============================================================
// 阶段0 · 数据治理：把浏览器端技术库导出为标准图数据
// ------------------------------------------------------------
// 复现页面中真实的 <script> 加载顺序（共享同一全局作用域），
// 提取全量 TECHS，输出：
//   data/graph.json        标准化图数据（节点+边）
//   data/quality_report.md 数据质量报告
// 用法: node dump_data.js
// ============================================================
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ASSETS = path.join(__dirname, "..", "assets");
const OUT = path.join(__dirname, "data");

// ---- 1. 与浏览器一致的加载顺序：同一全局上下文依次执行 ----
const files = [
  "techs_extra.js",    // EXTRA_TECHS
  "techs_extend.js",   // EXTEND_TECHS
  "techs_more.js",     // MORE_TECHS
  "techs_midtech.js",  // MIDTECHS_EXTRA
  "data.js",           // TECHS 主体（合并以上全部）
];
const sandbox = { console, window: {}, setTimeout, clearTimeout };
sandbox.window = sandbox;   // 部分文件可能引用 window
vm.createContext(sandbox);
for (const f of files) {
  const code = fs.readFileSync(path.join(ASSETS, f), "utf8");
  try {
    vm.runInContext(code, sandbox, { filename: f });
  } catch (e) {
    console.error(`[dump] 执行 ${f} 失败:`, e.message);
    process.exit(1);
  }
}
// 关键：顶层 const 不挂载到沙盒对象，必须在同一上下文内读取词法变量
const extracted = vm.runInContext(
  `({
    TECHS: typeof TECHS !== "undefined" ? TECHS : null,
    EXTRA: typeof EXTRA_TECHS !== "undefined" ? EXTRA_TECHS.length : null,
    EXTEND: typeof EXTEND_TECHS !== "undefined" ? EXTEND_TECHS.length : null,
    MORE: typeof MORE_TECHS !== "undefined" ? MORE_TECHS.length : null,
    MID: typeof MIDTECHS_EXTRA !== "undefined" ? MIDTECHS_EXTRA.length : null
  })`,
  sandbox
);
console.log(`[dump] 来源规模: data主库+EXTRA=${extracted.EXTRA} EXTEND=${extracted.EXTEND} MORE=${extracted.MORE} MIDTECHS_EXTRA=${extracted.MID}`);
const TECHS = extracted.TECHS;
if (!Array.isArray(TECHS) || TECHS.length === 0) {
  console.error("[dump] 未能从沙盒获取 TECHS");
  process.exit(1);
}

// ---- 2. 质量校验 ----
const issues = [];
const seen = new Set();
const byId = new Map();
const catCount = {};
const eraCount = {};
const tierCount = {};
const fieldMissing = {};

for (const t of TECHS) {
  if (!t.id) { issues.push("条目缺少 id"); continue; }
  if (seen.has(t.id)) issues.push(`重复 id: ${t.id}`);
  seen.add(t.id);
  byId.set(t.id, t);

  // 字段完备性
  for (const f of ["name", "category", "era", "date", "year", "summary", "dependsOn", "enables"]) {
    const v = t[f];
    const bad = v === undefined || v === null || (typeof v === "string" && v.trim() === "");
    if (bad) fieldMissing[f] = (fieldMissing[f] || 0) + 1;
  }
  catCount[t.category] = (catCount[t.category] || 0) + 1;
  eraCount[t.era || "(无)"] = (eraCount[t.era || "(无)"] || 0) + 1;
  if (t.tier) tierCount[t.tier] = (tierCount[t.tier] || 0) + 1;
}

// 断链校验：dependsOn / enables 引用的 id 是否存在
let depRefs = 0, enaRefs = 0, depBroken = 0, enaBroken = 0;
const brokenRefs = [];
const edgeList = [];      // 标准边表 {source,target,type}
const conceptIds = new Set(); // enables 断链目标 = 概念占位节点
for (const t of TECHS) {
  for (const d of (t.dependsOn || [])) {
    depRefs++;
    if (!byId.has(d)) { depBroken++; brokenRefs.push(`[dependsOn] ${t.id} -> ${d}`); }
    edgeList.push({ source: d, target: t.id, type: "dependency" }); // t 依赖 d
  }
  for (const e of (t.enables || [])) {
    enaRefs++;
    if (!byId.has(e)) {
      enaBroken++;
      brokenRefs.push(`[enables] ${t.id} -> ${e}`);
      conceptIds.add(e);  // 治理：断链目标登记为概念节点
    }
    edgeList.push({ source: t.id, target: e, type: "enables" });
  }
}

// ---- 3. 标准化 graph.json ----
const nodes = TECHS.map(t => ({
  id: t.id,
  name: t.name,
  en: t.en || "",
  category: t.category || "",
  era: t.era || "",
  date: t.date || "",
  year: typeof t.year === "number" ? t.year : null,
  people: t.people || "",
  place: t.place || "",
  summary: t.summary || "",
  tier: t.tier || null,
  applications: t.applications || [],
  kind: "tech",
}));
// 概念占位节点：enables 断链目标（如 astronomy→calendar(agri) 的 calendar(agri)）
const concepts = [...conceptIds].map(cid => ({
  id: cid,
  name: cid,
  en: "",
  category: "(concept)",
  era: "",
  date: "",
  year: null,
  people: "",
  place: "",
  summary: `概念占位节点：被技术 ${edgeList.filter(e=>e.type==="enables"&&e.target===cid).map(e=>e.source).join("、")} 记为影响去向，但不在技术库中实体化。`,
  tier: null,
  applications: [],
  kind: "concept",
}));
const graph = {
  meta: {
    exportedAt: new Date().toISOString(),
    totalTechs: TECHS.length,
    totalConceptNodes: concepts.length,
    totalNodes: TECHS.length + concepts.length,
    totalEdges: edgeList.length,
    depEdges: edgeList.filter(e=>e.type==="dependency").length,
    enaEdges: edgeList.filter(e=>e.type==="enables").length,
    source: "assets/data.js + techs_{extra,extend,more,midtech}.js",
  },
  nodes: [...nodes, ...concepts],
  edges: edgeList,
};
fs.writeFileSync(path.join(OUT, "graph.json"), JSON.stringify(graph, null, 1), "utf8");

// ---- 4. 质量报告 ----
const L = [];
L.push("# 阶段0 · 数据质量报告");
L.push("");
L.push(`导出时间：${new Date().toISOString()}`);
L.push("");
L.push("## 总览");
L.push("");
L.push(`| 指标 | 数值 |`);
L.push(`|---|---|`);
L.push(`| 技术节点总数 | ${TECHS.length} |`);
L.push(`| 显式关系边总数 | ${edgeList.length} |`);
L.push(`| dependsOn 引用 | ${depRefs}（断链 ${depBroken}） |`);
L.push(`| enables 引用 | ${enaRefs}（断链 ${enaBroken}） |`);
L.push(`| 重复 id | ${TECHS.length - seen.size} |`);
L.push("");
L.push("## 分类分布");
L.push("");
L.push("| 分类 | 数量 |");
L.push("|---|---|");
for (const [k, v] of Object.entries(catCount).sort((a, b) => b[1] - a[1])) L.push(`| ${k} | ${v} |`);
L.push("");
L.push("## 时代分布");
L.push("");
L.push("| 时代 | 数量 |");
L.push("|---|---|");
for (const [k, v] of Object.entries(eraCount).sort((a, b) => b[1] - a[1])) L.push(`| ${k} | ${v} |`);
if (Object.keys(tierCount).length) {
  L.push("");
  L.push("## 五档分级分布（仅科幻层条目）");
  L.push("");
  L.push("| 档位 | 数量 |");
  L.push("|---|---|");
  for (const [k, v] of Object.entries(tierCount).sort()) L.push(`| ${k} | ${v} |`);
}
L.push("");
L.push("## 字段缺失");
L.push("");
const missingEntries = Object.entries(fieldMissing);
if (missingEntries.length) {
  L.push("| 字段 | 缺失条数 |");
  L.push("|---|---|");
  for (const [k, v] of missingEntries) L.push(`| ${k} | ${v} |`);
} else L.push("无缺失。");
L.push("");
L.push("## 断链明细（前 30 条）");
L.push("");
if (brokenRefs.length) {
  L.push("```");
  brokenRefs.slice(0, 30).forEach(r => L.push(r));
  if (brokenRefs.length > 30) L.push(`… 共 ${brokenRefs.length} 条`);
  L.push("```");
} else L.push("无断链。");
fs.writeFileSync(path.join(OUT, "quality_report.md"), L.join("\n"), "utf8");

console.log(`[dump] 完成`);
console.log(`  技术节点: ${TECHS.length}`);
console.log(`  关系边:   ${edgeList.length}  (dependency ${edgeList.filter(e=>e.type==="dependency").length} + enables ${edgeList.filter(e=>e.type==="enables").length})`);
console.log(`  断链:     dependsOn ${depBroken} / enables ${enaBroken}`);
console.log(`  重复 id:  ${TECHS.length - seen.size}`);
console.log(`  输出:     data/graph.json, data/quality_report.md`);
