#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { loadMain, sourceDigest } = require('./mainline');

const ROOT = path.resolve(__dirname, '..');
const errors = [];
const check = (condition, message) => { if (!condition) errors.push(message); };
const sameSet = (a, b) => a.size === b.size && [...a].every(x => b.has(x));
const key = (source, target) => `${source}\0${target}`;
const dependency = e => (e.type || 'dependency') !== 'enables';

const techs = loadMain(ROOT);
const digest = sourceDigest(techs);
const mainIds = techs.map(t => t.id);
const mainIdSet = new Set(mainIds);
check(mainIdSet.size === mainIds.length, '主管线存在重复 id');
const mainDep = techs.flatMap(t => (t.dependsOn || []).map(d => key(d, t.id)));
const mainDepSet = new Set(mainDep);
check(mainDepSet.size === mainDep.length, '主管线存在重复依赖边');

const graph = JSON.parse(fs.readFileSync(path.join(ROOT, 'analysis-engine/data/graph.json'), 'utf8'));
const graphTech = graph.nodes.filter(n => n.kind === 'tech');
const graphTechIds = new Set(graphTech.map(n => n.id));
const graphConcepts = graph.nodes.filter(n => n.kind === 'concept');
const graphDep = graph.edges.filter(dependency);
const graphDepKeys = graphDep.map(e => key(e.source, e.target));
check(sameSet(mainIdSet, graphTechIds), 'graph.json 技术节点与主管线不一致，可能存在遗漏或已删除节点复活');
check(sameSet(mainDepSet, new Set(graphDepKeys)), 'graph.json 依赖边集合或方向与主管线不一致');
check(graphDepKeys.length === mainDep.length, 'graph.json 依赖边数量与主管线不一致');
check(graph.meta.totalTechs === techs.length, 'graph.json meta.totalTechs 与实际技术节点数不一致');
check(graph.meta.totalConceptNodes === graphConcepts.length, 'graph.json meta.totalConceptNodes 与实际概念节点数不一致');
check(graph.meta.totalNodes === graph.nodes.length, 'graph.json meta.totalNodes 与实际节点数不一致');
check(graph.meta.totalEdges === graph.edges.length, 'graph.json meta.totalEdges 与实际边数不一致');
check(graph.meta.depEdges === graphDep.length, 'graph.json meta.depEdges 与实际依赖边数不一致');
check(graph.meta.enaEdges === graph.edges.length - graphDep.length, 'graph.json meta.enaEdges 与实际赋能边数不一致');
check(graph.meta.sourceDigest === digest, 'graph.json 来源指纹过期，请重跑 analysis-engine/dump_data.js');

const ctx = vm.createContext({ window: {}, console });
vm.runInContext(fs.readFileSync(path.join(ROOT, 'assets/data_full.js'), 'utf8'), ctx, { filename: 'assets/data_full.js' });
const fullNodes = ctx.window.TECHS_FULL;
const fullEdges = ctx.window.EDGES_FULL;
const fullMeta = ctx.window.SCORE_META;
check(Array.isArray(fullNodes) && Array.isArray(fullEdges) && fullMeta, 'data_full.js 缺少节点、边或元数据');
const fullIds = fullNodes.map(n => n.id);
const fullIdSet = new Set(fullIds);
check(fullIdSet.size === fullIds.length, 'data_full.js 存在重复节点 id');
check([...mainIdSet].every(id => fullIdSet.has(id)), 'data_full.js 缺少主管线节点');
check(fullMeta.totalNodes === fullNodes.length, 'SCORE_META.totalNodes 与实际节点数不一致');
check(fullMeta.totalEdges === fullEdges.length, 'SCORE_META.totalEdges 与实际边数不一致');
check(fullMeta.mainlineNodes === techs.length, 'SCORE_META.mainlineNodes 与主管线不一致');
check(fullMeta.mainlineDependencyEdges === mainDep.length, 'SCORE_META.mainlineDependencyEdges 与主管线不一致');
check(fullMeta.sourceDigest === digest, 'data_full.js 来源指纹过期，请重跑 analysis-engine/build_full_dataset.js');
const fullEdgeKeys = fullEdges.map(e => `${key(e.source, e.target)}\0${e.type}`);
check(new Set(fullEdgeKeys).size === fullEdgeKeys.length, 'data_full.js 存在重复边');

const dependsOn = new Map(fullNodes.map(n => [n.id, []]));
const enables = new Map(fullNodes.map(n => [n.id, []]));
for (const e of fullEdges) {
  const targetMap = dependency(e) ? dependsOn : enables;
  if (targetMap.has(e.source)) targetMap.get(e.source).push(e.target);
}
const mainlineScores = JSON.parse(fs.readFileSync(path.join(ROOT, 'analysis-engine/data/phase2_scores_mainline.json'), 'utf8'));
const fullScores = JSON.parse(fs.readFileSync(path.join(ROOT, 'analysis-engine/data/phase2_scores.json'), 'utf8'));
check(sameSet(mainIdSet, new Set(Object.keys(mainlineScores))), '主管线评分节点集合与主管线不一致');
const provenanceDist = {}, networkStatusDist = {};
const connectedIds = new Set();
fullEdges.forEach(e => { connectedIds.add(e.source); connectedIds.add(e.target); });
for (const n of fullNodes) {
  const actualDep = n.dependsOn || [];
  const actualEna = n.enables || [];
  check(new Set(actualDep).size === actualDep.length, `${n.id}: dependsOn 含重复前置`);
  check(new Set(actualEna).size === actualEna.length, `${n.id}: enables 含重复目标`);
  check(sameSet(new Set(actualDep), new Set(dependsOn.get(n.id))), `${n.id}: dependsOn 与 EDGES_FULL 不一致`);
  check(sameSet(new Set(actualEna), new Set(enables.get(n.id))), `${n.id}: enables 与 EDGES_FULL 不一致`);

  check(['mainline-derived', 'new_techs', 'score-only'].includes(n.provenance), `${n.id}: 未知 provenance`);
  const expectedStatus = !connectedIds.has(n.id) ? 'isolated' : actualDep.length ? 'connected' : 'root';
  check(n.networkStatus === expectedStatus, `${n.id}: networkStatus 与边表不一致`);
  provenanceDist[n.provenance] = (provenanceDist[n.provenance] || 0) + 1;
  networkStatusDist[expectedStatus] = (networkStatusDist[expectedStatus] || 0) + 1;

  const mainline = n.provenance === 'mainline-derived';
  const score = mainline ? mainlineScores[n.id] : fullScores[n.id];
  check(Boolean(score), `${n.id}: 缺少对应范围的评分`);
  check(n.scoreScope === (mainline ? 'mainline' : 'full'), `${n.id}: scoreScope 与来源不一致`);
  if (score) {
    for (const field of ['score', 'tier', 'D1', 'D2', 'D3', 'D4', 'D5', 'layer']) {
      check(n[field] === score[field], `${n.id}: ${field} 与 ${mainline ? '主管线' : '全量'}评分不一致`);
    }
  }
}
check(sameSet(new Set(Object.keys(provenanceDist)), new Set(Object.keys(fullMeta.provenanceDist || {}))), 'provenanceDist 来源种类不一致');
for (const [source, count] of Object.entries(provenanceDist)) {
  check((fullMeta.provenanceDist || {})[source] === count, `provenanceDist.${source} 计数不一致`);
}
check(sameSet(new Set(Object.keys(networkStatusDist)), new Set(Object.keys(fullMeta.networkStatusDist || {}))), 'networkStatusDist 状态种类不一致');
for (const [status, count] of Object.entries(networkStatusDist)) {
  check((fullMeta.networkStatusDist || {})[status] === count, `networkStatusDist.${status} 计数不一致`);
}

const backtest = JSON.parse(fs.readFileSync(path.join(ROOT, 'analysis-engine/data/backtest_1990_2020.json'), 'utf8'));
check(backtest.sourceDigest === digest, '回溯结果来源指纹过期，请重跑 backtest_engine.js');
check(backtest.input && backtest.input.asOf === 1990 && backtest.input.until === 2020, '回溯区间不是 1990–2020');
check(backtest.validationStatus === 'exploratory' && backtest.temporalLeakageControlled === false,
  '缺少边时间证据的回溯结果必须标记为探索性且未完全控制泄漏');
check(Array.isArray(backtest.limitations) && backtest.limitations.length >= 3, '回溯结果缺少局限说明');
for (const name of ['global_median', 'category_median', 'dependency_bucket']) {
  check(Number.isFinite(backtest.models && backtest.models[name] && backtest.models[name].mae), `回溯缺少 ${name} 的 MAE`);
}

const forecast = JSON.parse(fs.readFileSync(path.join(ROOT, 'analysis-engine/data/forecast_results.json'), 'utf8'));
check(forecast.input && forecast.input.pipeline === 'mainline', '预测输入不是主管线');
check(forecast.input && forecast.input.nodes === techs.length, '预测输入节点数与主管线不一致');
check(forecast.input && forecast.input.dependencyEdges === mainDep.length, '预测输入依赖边数与主管线不一致');
check(forecast.input && forecast.input.sourceDigest === digest, '预测结果来源指纹过期，请重跑 analysis-engine/forecast_engine.js');
const asOf = forecast.input && forecast.input.asOf;
check(Number.isFinite(asOf), '预测结果缺少 asOf 基准年');
check(asOf === 2026 && forecast.input.until == null && forecast.input.validationStatus === 'current',
  '默认预测结果必须是 2026 当前视图；历史 as-of 结果应写入独立文件');
check(forecast.syntheticCandidates === 0, '默认预测结果包含自动组合候选');
if (Number.isFinite(asOf)) {
  for (const listName of ['L2_top', 'L3_top']) {
    for (const row of forecast[listName] || []) {
      for (const field of ['early', 'median']) {
        check(row[field] == null || row[field] >= asOf,
          `${listName}/${row.name}: ${field} 早于 asOf 基准年`);
      }
    }
  }
}

if (errors.length) {
  console.error(`分析数据一致性检查失败（${errors.length} 项）：`);
  errors.slice(0, 50).forEach(e => console.error(`  ✗ ${e}`));
  if (errors.length > 50) console.error(`  …另有 ${errors.length - 50} 项`);
  process.exit(1);
}
console.log(`分析数据一致性检查通过：主管线 ${techs.length} 节点 / ${mainDep.length} 依赖边；全量 ${fullNodes.length} 节点 / ${fullEdges.length} 边`);
