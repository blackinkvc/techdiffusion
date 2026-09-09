/* build_full_dataset.js — Phase 4 数据管道 v2
 * 用 graph.json 原库富字段节点(2362) + new_techs(11031) 作富字段源，
 * 叠加 phase2_scores(13392) 评分，重建依赖/赋能边，输出站点可加载全量数据集。
 * 输出：assets/data_full.js -> window.TECHS_FULL / EDGES_FULL / SCORE_META
 */
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');

const gj = JSON.parse(fs.readFileSync(path.join(ROOT, 'analysis-engine/data/graph.json'), 'utf8'));
const newt = JSON.parse(fs.readFileSync(path.join(ROOT, 'analysis-engine/data/subcat/new_techs.json'), 'utf8'));
const scores = JSON.parse(fs.readFileSync(path.join(ROOT, 'analysis-engine/data/phase2_scores.json'), 'utf8'));

// 1) 原库富字段节点（graph.json.nodes 已含 name/en/category/era/date/year/people/place/summary）
const byId = new Map();
function set(id, obj) {
  if (!id) return;
  if (byId.has(id)) Object.assign(byId.get(id), obj);
  else byId.set(id, obj);
}
gj.nodes.forEach(n => {
  set(n.id, Object.assign({ subcategory: n.category || '', dependsOn: [], enables: [], views: [], applications: [], significance: '' }, n));
});

// 2) 新条目富字段（new_techs，含 subcategory/dependsOn/enables/views/significance/summary）
newt.forEach(t => {
  if (!t.id) return;
  if (byId.has(t.id)) {
    const c = byId.get(t.id);
    for (const k in t) if (t[k] !== '' && t[k] != null && (c[k] == null || c[k] === '' || (Array.isArray(c[k]) && c[k].length === 0))) c[k] = t[k];
  } else {
    byId.set(t.id, Object.assign({}, t));
  }
});

// 3) 附加评分卡
const tierDist = {};
let scoredNodes = 0;
for (const [id, node] of byId) {
  const sc = scores[id];
  if (sc) {
    node.score = sc.score; node.tier = sc.tier;
    node.D1 = sc.D1; node.D2 = sc.D2; node.D3 = sc.D3; node.D4 = sc.D4; node.D5 = sc.D5;
    node.layer = sc.layer;
    scoredNodes++;
  }
  if (!node.category && sc) node.category = sc.category;
  if (node.year == null && sc) node.year = sc.year;
  if (sc && sc.name && !node.name) node.name = sc.name;
  if (!node.subcategory) node.subcategory = (sc && sc.category) ? sc.category : (node.category || '');
  const tier = node.tier || 'NA';
  tierDist[tier] = (tierDist[tier] || 0) + 1;
}

// 4) scores 独有节点纳入（仅评分，用评分字段填充），确保全量 13392
for (const id in scores) {
  if (!byId.has(id)) {
    const sc = scores[id];
    byId.set(id, {
      id, name: sc.name, category: sc.category, year: sc.year,
      score: sc.score, tier: sc.tier, D1: sc.D1, D2: sc.D2, D3: sc.D3, D4: sc.D4, D5: sc.D5, layer: sc.layer,
      subcategory: sc.category || '', summary: '', dependsOn: [], enables: [], views: [], applications: [], significance: ''
    });
    tierDist[sc.tier] = (tierDist[sc.tier] || 0) + 1;
    scoredNodes++;
  }
}

// 5) 重建边：原库边(graph.json) + 新条目 dependsOn/enables
//    全量边方向统一为：dependency = 依赖者 -> 被依赖者；enables = 赋能者 -> 被赋能者
//    （graph.json 导出的 dependency 存为 被依赖者->依赖者，需转置后再合并，避免两种相反方向混存）
const ids = new Set(byId.keys());
const edges = [];
const ekey = new Set();
function addEdge(src, tgt, type) {
  if (!src || !tgt || !ids.has(src) || !ids.has(tgt) || src === tgt) return;
  const k = src + '|' + tgt + '|' + type;
  if (ekey.has(k)) return;
  ekey.add(k);
  edges.push({ source: src, target: tgt, type });
}
(gj.edges || []).forEach(e => {
  if ((e.type || 'dependency') === 'enables') addEdge(e.source, e.target, 'enables');
  else addEdge(e.target, e.source, 'dependency'); // 转置：graph.json 的 (前置->依赖者) -> (依赖者->前置)
});
for (const [id, node] of byId) {
  (node.dependsOn || []).forEach(d => addEdge(id, d, 'dependency'));
  (node.enables || []).forEach(e => addEdge(id, e, 'enables'));
}

const nodes = Array.from(byId.values());
const meta = {
  generatedAt: new Date().toISOString(),
  totalNodes: nodes.length,
  totalEdges: edges.length,
  scoredNodes,
  tierDist,
  weights: { D1: 0.25, D2: 0.20, D4: 0.35, D5: 0.20 },
  note: 'Phase 4 全量数据集 v2：原库富字段(graph.json) + 新条目(new_techs) + 五维评分(phase2_scores) + 依赖/赋能边'
};
const out = '// 自动生成 by analysis-engine/build_full_dataset.js v2 — 全量数据集 (富字段 + 五维评分 + 边)\n'
  + 'window.TECHS_FULL = ' + JSON.stringify(nodes) + ';\n'
  + 'window.EDGES_FULL = ' + JSON.stringify(edges) + ';\n'
  + 'window.SCORE_META = ' + JSON.stringify(meta) + ';\n';
fs.writeFileSync(path.join(ROOT, 'assets/data_full.js'), out);

// 覆盖率校验
const withSummary = nodes.filter(n => n.summary && n.summary.length > 0).length;
const withPeople = nodes.filter(n => n.people && n.people.length > 0).length;
console.log('nodes:', nodes.length, '| edges:', edges.length, '| scored:', scoredNodes);
console.log('tierDist:', JSON.stringify(tierDist));
console.log('withSummary:', withSummary, '(' + (100 * withSummary / nodes.length).toFixed(1) + '%)',
            '| withPeople:', withPeople, '(' + (100 * withPeople / nodes.length).toFixed(1) + '%)');
const dep = edges.filter(e => e.type === 'dependency').length;
const ena = edges.filter(e => e.type === 'enables').length;
console.log('edges -> dependency:', dep, '| enables:', ena);
console.log('data_full.js size MB:', (out.length / 1048576).toFixed(2));
