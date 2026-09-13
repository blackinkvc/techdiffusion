/*
 * 全量管线取证器（只读）—— 查清 tree_full.html 一侧残留了多少「主管线不承认」的依赖边。
 *
 * 为什么要单独取证：全量管线（analysis-engine/data/graph.json + assets/data_full.js）是
 *   独立生成的另一套数据（13,318 节点），其边并非由主管线推导，且从未经过 v0.9.20/21 的清理。
 *   因 id 空间与生成路径不同，不能直接照搬主管线的判定；须先量化、再逐类处置。
 *
 * 方向语义（2026-09-13 实测确认，勿凭记忆）：
 *   data_full.js EDGES_FULL:
 *     type="dependency" → { source: 依赖者, target: 前置 }   （"source 依赖 target"）
 *     type="enables"    → { source: 前置,   target: 依赖者 } （"source 赋能 target"）
 *   graph.json:
 *     { source: 前置, target: 依赖者 }
 *
 * 判定「主管线是否承认」：child.dependsOn 是否含 parent（以主管线为准）。
 * 位置式签名（筛查信号，非判据）：parent 恰为「parent 所属分类内 year 严格小于 child.year 的最后一个节点」。
 *
 * 用法：node tools/audit_full_pipeline.js [--json]
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');
const JSON_OUT = process.argv.includes('--json');

// ---------- 主管线 ----------
const ctx = vm.createContext({ console, window: {} });
for (const f of ['assets/techs_extra.js', 'assets/techs_extend.js', 'assets/techs_more.js', 'assets/data.js']) {
  vm.runInContext(fs.readFileSync(path.join(ROOT, f), 'utf8'), ctx, { filename: f });
}
const TECHS = vm.runInContext('TECHS', ctx);
const byId = new Map(); TECHS.forEach(t => byId.set(t.id, t));
const nameOf = id => (byId.get(id) || {}).name || id;

// 每个分类内按 year 升序的节点序列（用于位置式签名）
const byCat = new Map();
TECHS.forEach(t => { if (!byCat.has(t.category)) byCat.set(t.category, []); byCat.get(t.category).push(t); });
for (const arr of byCat.values()) arr.sort((a, b) => a.year - b.year);
function lastBefore(cat, y) {
  const arr = byCat.get(cat) || [];
  let r = null;
  for (const t of arr) { if (t.year < y) r = t; else break; }
  return r;
}

// ---------- 全量管线：EDGES_FULL ----------
const fctx = vm.createContext({ console, window: {} });
vm.runInContext(fs.readFileSync(path.join(ROOT, 'assets/data_full.js'), 'utf8'), fctx, { filename: 'data_full.js' });
const EDGES_FULL = vm.runInContext('window.EDGES_FULL', fctx);
const META = vm.runInContext('window.SCORE_META', fctx);

// ---------- 全量管线：graph.json ----------
const G = JSON.parse(fs.readFileSync(path.join(ROOT, 'analysis-engine/data/graph.json'), 'utf8'));
const gEdges = G.edges.map(e => ({ child: e.target, parent: e.source, type: e.type || '' }));

// 归一化 EDGES_FULL 为 (child, parent)
const normalize = e => e.type === 'enables'
  ? { child: e.target, parent: e.source, type: e.type }
  : { child: e.source, parent: e.target, type: e.type || 'dependency' };

const edgesFull = EDGES_FULL.map(normalize);

function classify(child, parent) {
  const c = byId.get(child), p = byId.get(parent);
  if (!c || !p) return 'out-of-scope';
  if ((c.dependsOn || []).includes(parent)) return 'acknowledged';
  if (p.year > c.year) return 'yearInv';
  const lb = lastBefore(p.category, c.year);
  if (lb && lb.id === parent) return 'positional';
  return 'unacknowledged-other';
}
function tally(edges) {
  const t = {};
  for (const e of edges) { const k = classify(e.child, e.parent); t[k] = (t[k] || 0) + 1; }
  return t;
}

const tFull = tally(edgesFull);
const tGraph = tally(gEdges);
const both = edgesFull.filter(e => byId.has(e.child) && byId.has(e.parent));

const report = {
  mainPipeline: { nodes: TECHS.length, edges: TECHS.reduce((a, t) => a + (t.dependsOn || []).length, 0) },
  dataFull: { nodes: META && META.totalNodes, edges: EDGES_FULL.length, byType: EDGES_FULL.reduce((m, e) => (m[e.type] = (m[e.type] || 0) + 1, m), {}), tally: tFull },
  graphJson: { nodes: G.nodes.length, edges: G.edges.length, tally: tGraph },
  bothEndsInMainPipeline: both.length,
  residue: {}
};
for (const k of ['positional', 'yearInv', 'unacknowledged-other']) {
  const arr = both.filter(e => classify(e.child, e.parent) === k);
  report.residue[k] = {
    count: arr.length,
    byType: arr.reduce((m, e) => (m[e.type] = (m[e.type] || 0) + 1, m), {}),
    samples: arr.slice(0, 12).map(e => `${nameOf(e.child)}(${e.child}) → ${nameOf(e.parent)}(${e.parent}) [${e.type}]`)
  };
}

if (JSON_OUT) { console.log(JSON.stringify(report, null, 1)); }
else {
  console.log('=== 主管线 ===  节点 ' + TECHS.length + ' / 边 ' + report.mainPipeline.edges);
  console.log('=== data_full.js ===  EDGES_FULL ' + EDGES_FULL.length + ' ' + JSON.stringify(report.dataFull.byType));
  console.log('   分类（以主管线为准）', JSON.stringify(tFull));
  console.log('=== graph.json ===  节点 ' + G.nodes.length + ' / 边 ' + G.edges.length);
  console.log('   分类（以主管线为准）', JSON.stringify(tGraph));
  console.log('\n两端均落在主管线 id 空间的边：' + both.length + '（占比 ' + (both.length / EDGES_FULL.length * 100).toFixed(1) + '%）');
  for (const k of ['positional', 'yearInv', 'unacknowledged-other']) {
    const r = report.residue[k];
    console.log('\n--- 残留类「' + k + '」 = ' + r.count + ' 条 ' + JSON.stringify(r.byType));
    r.samples.forEach(s => console.log('     ' + s));
  }
}
fs.writeFileSync('/tmp/full_audit.json', JSON.stringify(report, null, 1));
console.log('\n报告写入 /tmp/full_audit.json');
