// tools/audit_net.js —— 主管线结构体检（可复跑）
// 用法：
//   node tools/audit_net.js            打印体检报告
//   node tools/audit_net.js --json     打印 JSON
//   node tools/audit_net.js --snapshot 将当前指标写入 audit/baseline.json
//   node tools/audit_net.js --check    与 audit/baseline.json 比对，劣化则非零退出
// 指标定义见《技术网络检修计划.md》第一章。
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.resolve(__dirname, "..");
const ASSETS = path.join(ROOT, "assets");
const BASELINE = path.join(ROOT, "audit", "baseline.json");

const FILES = ["techs_extra.js", "techs_extend.js", "techs_more.js", "data.js"];

function loadMain() {
  const ctx = vm.createContext({ console });
  for (const f of FILES) {
    vm.runInContext(fs.readFileSync(path.join(ASSETS, f), "utf8"), ctx, { filename: f });
  }
  return vm.runInContext("TECHS", ctx);
}

function analyze(TECHS) {
  const byId = {};
  TECHS.forEach((t) => { byId[t.id] = t; });
  const idSet = new Set(TECHS.map((t) => t.id));
  const CATS = [...new Set(TECHS.map((t) => t.category))].sort();

  const down = {}, up = {};
  TECHS.forEach((t) => { down[t.id] = 0; up[t.id] = 0; });

  let edges = 0, selfLoop = 0, dupEdge = 0, danglingDep = 0, danglingEn = 0, yearInv = 0;
  const pairSet = new Set();
  TECHS.forEach((t) => {
    const seen = new Set();
    (t.dependsOn || []).forEach((d) => {
      if (d === t.id) selfLoop++;
      if (!idSet.has(d)) { danglingDep++; return; }
      edges++;
      const key = d + "->" + t.id;
      if (pairSet.has(key)) dupEdge++; else pairSet.add(key);
      if (seen.has(d)) return;
      seen.add(d);
      down[d]++; up[t.id]++;
      const p = byId[d];
      if (t.year != null && p.year != null && t.year >= 0 && p.year >= 0 && t.year < p.year) yearInv++;
    });
    (t.enables || []).forEach((e) => { if (!idSet.has(e)) danglingEn++; });
  });

  // 泛化枢纽与 A / E 族
  const GENERIC = new Set(TECHS.filter((t) => t.category === "basic" && down[t.id] >= 80).map((t) => t.id));
  GENERIC.add("writing");
  GENERIC.add("language");

  const tap = (fn) => {
    const o = {};
    TECHS.filter(fn).forEach((t) => { o[t.category] = (o[t.category] || 0) + 1; });
    return o;
  };
  const realDeps = (t) => (t.dependsOn || []).filter((d) => idSet.has(d));

  const A = tap((t) => {
    const r = realDeps(t);
    return r.length > 0 && r.every((d) => GENERIC.has(d)) && !GENERIC.has(t.id);
  });
  const E = tap((t) => {
    const r = realDeps(t);
    return r.length === 1 && GENERIC.has(r[0]) && !GENERIC.has(t.id);
  });
  const Ch = tap((t) => down[t.id] === 0 && t.year != null && t.year < 1900);

  // F 族：跨分类、跨度 > 800 年、两端均非泛化枢纽
  let F = 0;
  TECHS.forEach((t) => {
    realDeps(t).forEach((d) => {
      const p = byId[d];
      if (t.category === p.category) return;
      if (GENERIC.has(d)) return;
      if (t.year == null || p.year == null || t.year < 0 || p.year < 0) return;
      if (Math.abs(t.year - p.year) > 800) F++;
    });
  });

  // 重复节点名
  const nm = {};
  TECHS.forEach((t) => { (nm[t.name] = nm[t.name] || []).push(t.id); });
  const dupGroups = Object.entries(nm).filter(([, v]) => v.length > 1).length;

  // 孤立与零前置
  const zeroDep = TECHS.filter((t) => realDeps(t).length === 0).length;
  const isolated = TECHS.filter((t) => down[t.id] === 0 && realDeps(t).length === 0).length;

  // 环
  const color = {};
  let cycles = 0;
  const dfs = (id) => {
    color[id] = 1;
    realDeps(byId[id]).forEach((d) => {
      if (color[d] === 1) cycles++;
      else if (!color[d]) dfs(d);
    });
    color[id] = 2;
  };
  TECHS.forEach((t) => { if (!color[t.id]) dfs(t.id); });

  return {
    N: TECHS.length, edges, selfLoop, dupEdge, danglingDep, danglingEn, yearInv, cycles,
    zeroDep, isolated, dupGroups, F,
    A_total: Object.values(A).reduce((s, v) => s + v, 0), A,
    E_total: Object.values(E).reduce((s, v) => s + v, 0), E,
    Ch_total: Object.values(Ch).reduce((s, v) => s + v, 0), Ch,
    generic: [...GENERIC].map((id) => ({ id, name: byId[id].name, down: down[id] })).sort((a, b) => b.down - a.down),
    era: (() => { const o = {}; TECHS.forEach((t) => { o[t.era] = (o[t.era] || 0) + 1; }); return o; })(),
    cats: CATS,
  };
}

function graphJsonStats() {
  const p = path.join(ROOT, "analysis-engine", "data", "graph.json");
  if (!fs.existsSync(p)) return null;
  const g = JSON.parse(fs.readFileSync(p, "utf8"));
  const s = (e) => (e.source && e.source.id !== undefined ? e.source.id : e.source);
  const t = (e) => (e.target && e.target.id !== undefined ? e.target.id : e.target);
  return { nodes: (g.nodes || []).length, edges: (g.edges || []).length, edgeSet: (g.edges || []).map((e) => s(e) + "->" + t(e)) };
}

function dualDiff(mainEdges, gj) {
  if (!gj) return null;
  const ms = new Set(mainEdges);
  const gs = new Set(gj.edgeSet);
  return {
    onlyInGraphJson: [...gs].filter((k) => !ms.has(k)).length,
    onlyInMain: [...ms].filter((k) => !gs.has(k)).length,
  };
}

function printReport(r, dual) {
  const line = (k, v) => console.log("  " + k.padEnd(22) + v);
  console.log("主管线结构体检");
  console.log("=".repeat(46));
  console.log("[完整性]");
  line("节点", r.N);
  line("依赖边", r.edges);
  line("环", r.cycles);
  line("自环", r.selfLoop);
  line("重复边", r.dupEdge);
  line("悬空前置", r.danglingDep);
  line("悬空 enables", r.danglingEn);
  line("年份倒挂", r.yearInv);
  console.log("[结构问题族]");
  line("A 仅靠学理枢纽", r.A_total);
  line("E 单前置=枢纽", r.E_total);
  line("Ch 历史断链", r.Ch_total);
  line("F 跨类长跨度", r.F);
  line("重名组", r.dupGroups);
  line("零前置节点", r.zeroDep);
  line("孤立节点", r.isolated);
  console.log("  A 分类: " + JSON.stringify(r.A));
  console.log("  E 分类: " + JSON.stringify(r.E));
  console.log("  Ch 分类: " + JSON.stringify(r.Ch));
  if (dual) {
    console.log("[双管线]");
    line("仅 graph.json 有", dual.onlyInGraphJson);
    line("仅主管线有", dual.onlyInMain);
  }
}

const main = () => {
  const TECHS = loadMain();
  const r = analyze(TECHS);
  const gj = graphJsonStats();
  const mainEdges = [];
  const byId = {}; TECHS.forEach((t) => { byId[t.id] = t; });
  const idSet = new Set(TECHS.map((t) => t.id));
  TECHS.forEach((t) => (t.dependsOn || []).forEach((d) => { if (idSet.has(d)) mainEdges.push(d + "->" + t.id); }));
  const dual = dualDiff(mainEdges, gj);
  if (gj) { r.graphJson = { nodes: gj.nodes, edges: gj.edges }; r.dual = dual; }

  const args = process.argv.slice(2);
  if (args.includes("--json")) { console.log(JSON.stringify(r, null, 1)); return; }

  if (args.includes("--snapshot")) {
    fs.mkdirSync(path.dirname(BASELINE), { recursive: true });
    fs.writeFileSync(BASELINE, JSON.stringify(r, null, 1));
    console.log("已写入基线 " + path.relative(ROOT, BASELINE));
    printReport(r, dual);
    return;
  }

  if (args.includes("--check")) {
    if (!fs.existsSync(BASELINE)) { console.error("缺少 audit/baseline.json，请先执行 --snapshot"); process.exit(2); }
    const base = JSON.parse(fs.readFileSync(BASELINE, "utf8"));
    const bad = [];
    const mustZero = ["cycles", "selfLoop", "dupEdge", "danglingDep", "yearInv"];
    mustZero.forEach((k) => { if (r[k] > 0) bad.push(k + " = " + r[k] + "（应为 0）"); });
    ["A_total", "E_total", "F", "dupGroups", "isolated"].forEach((k) => {
      if (r[k] > base[k]) bad.push(k + " 由 " + base[k] + " 升到 " + r[k]);
    });
    if (r.N < base.N) bad.push("节点数由 " + base.N + " 降到 " + r.N);
    if (bad.length) {
      console.log("[FAIL] 结构指标劣化：");
      bad.forEach((b) => console.log("  - " + b));
      process.exit(1);
    }
    console.log("[OK] 结构指标未劣化（对照 audit/baseline.json）");
    if (r.Ch_total !== base.Ch_total) console.log("  备注：Ch 族 " + base.Ch_total + " → " + r.Ch_total);
    if (r.A_total !== base.A_total || r.E_total !== base.E_total) {
      console.log("  备注：A " + base.A_total + " → " + r.A_total + "，E " + base.E_total + " → " + r.E_total);
    }
    return;
  }

  printReport(r, dual);
};

main();
