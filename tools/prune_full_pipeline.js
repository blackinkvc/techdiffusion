/*
 * 全量管线残留边清理器
 *
 * 依据：批次 eaa086f（v0.9.20/21「生成器槽位边收口」）已把 577 条位置式伪边判为删除并
 *   从主管线移除，但**当时未同步全量管线**。实测该批删除边有 564 条（97.7%）仍留在
 *   analysis-engine/data/graph.json 与 assets/data_full.js 中，即 tree_full.html 仍在展示
 *   已被判定为伪边的关系。
 *
 * 本工具只做一件事：把「已判定删除」的边从全量管线两侧同步移除 —— 不新增任何判定。
 *   剩余「全量管线独有」的边不在本工具范围（见批次 5.1，需逐条语义审核）。
 *
 * 用法：
 *   node tools/prune_full_pipeline.js --derive   # 从 git 历史推导排除清单，写入 audit/
 *   node tools/prune_full_pipeline.js            # 干跑（按清单统计命中）
 *   node tools/prune_full_pipeline.js --apply    # 写盘（两侧同步，写前备份）
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { execFileSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const LIST = path.join(ROOT, 'audit/full_pipeline_exclusions.json');
const args = process.argv.slice(2);

// ---------- --derive：从 git 历史推导「已判定删除」的边 ----------
if (args.includes('--derive')) {
  const BASE = 'eaa086f^';
  const tmp = '/tmp/prune_prev4';
  fs.mkdirSync(tmp, { recursive: true });
  const FILES = ['techs_extra.js', 'techs_extend.js', 'techs_more.js', 'data.js'];
  for (const f of FILES) {
    const out = execFileSync('git', ['show', BASE + ':assets/' + f], { cwd: ROOT, maxBuffer: 1 << 28 });
    fs.writeFileSync(path.join(tmp, f), out);
  }
  const load = (fs_) => {
    const ctx = vm.createContext({ console, window: {} });
    for (const f of fs_) vm.runInContext(fs.readFileSync(f, 'utf8'), ctx, { filename: f });
    return vm.runInContext('TECHS', ctx);
  };
  const PREV = load(FILES.map(f => path.join(tmp, f)));
  const NOW = load(FILES.map(f => path.join(ROOT, 'assets', f)));
  const mapOf = a => { const m = new Map(); a.forEach(t => m.set(t.id, new Set(t.dependsOn || []))); return m; };
  const prev = mapOf(PREV), now = mapOf(NOW);
  const removed = [];
  for (const [id, s] of prev) {
    const n = now.get(id); if (!n) continue;
    for (const p of s) if (!n.has(p)) removed.push({ child: id, parent: p });
  }
  const out = {
    generatedAt: new Date().toISOString().slice(0, 10),
    source: 'git ' + BASE + ' 与 HEAD 的 assets/{techs_extra,techs_extend,techs_more,data}.js 逐边 diff',
    provenance: '批次 eaa086f（v0.9.20/21 生成器槽位边收口）判定删除、当时未同步全量管线',
    count: removed.length,
    edges: removed
  };
  fs.writeFileSync(LIST, JSON.stringify(out, null, 1));
  console.log('[derive] 推导出已判定删除的边 ' + removed.length + ' 条 → audit/full_pipeline_exclusions.json');
  process.exit(0);
}

// ---------- 读取清单 ----------
const list = JSON.parse(fs.readFileSync(LIST, 'utf8'));
const excl = new Set(list.edges.map(e => e.child + '|' + e.parent));
console.log('排除清单：' + list.count + ' 条（来源：' + list.provenance + '）');

// 主管线 TECHS（graph.json meta.totalTechs 的口径 = 主管线节点数，见 dump_data.js:139）
const mctx = vm.createContext({ console, window: {} });
for (const f of ['techs_extra.js', 'techs_extend.js', 'techs_more.js', 'data.js']) {
  vm.runInContext(fs.readFileSync(path.join(ROOT, 'assets', f), 'utf8'), mctx, { filename: f });
}
const TECHS_MAIN = vm.runInContext('TECHS', mctx);
console.log('主管线 TECHS =', TECHS_MAIN.length);

// ---------- 全量管线两侧 ----------
const FULLFILE = path.join(ROOT, 'assets/data_full.js');
const GRAPHFILE = path.join(ROOT, 'analysis-engine/data/graph.json');
const fctx = vm.createContext({ console, window: {} });
vm.runInContext(fs.readFileSync(FULLFILE, 'utf8'), fctx, { filename: 'data_full.js' });
const EDGES_FULL = vm.runInContext('window.EDGES_FULL', fctx);
const TECHS_FULL = vm.runInContext('window.TECHS_FULL', fctx);
const META = vm.runInContext('window.SCORE_META', fctx);
const G = JSON.parse(fs.readFileSync(GRAPHFILE, 'utf8'));

const norm = e => e.type === 'enables'
  ? { child: e.target, parent: e.source }
  : { child: e.source, parent: e.target };

const hitFull = EDGES_FULL.filter(e => { const n = norm(e); return excl.has(n.child + '|' + n.parent); });
const hitGraph = G.edges.filter(e => excl.has(e.target + '|' + e.source));

console.log('\n命中：EDGES_FULL ' + hitFull.length + ' / ' + EDGES_FULL.length +
  '　graph.json ' + hitGraph.length + ' / ' + G.edges.length);
console.log('  按类型 EDGES_FULL ' + JSON.stringify(hitFull.reduce((m, e) => (m[e.type] = (m[e.type] || 0) + 1, m), {})));

if (!args.includes('--apply')) { console.log('\n[干跑] 未写盘。加 --apply 执行。'); process.exit(0); }

// ---------- 写盘（两侧同步、备份、先校验往返字节一致）----------
const stamp = Date.now();
const bad = '/tmp/prune_full_bak_' + stamp;
fs.mkdirSync(bad, { recursive: true });
fs.copyFileSync(FULLFILE, bad + '/data_full.js');
fs.copyFileSync(GRAPHFILE, bad + '/graph.json');
console.log('\n[备份] ' + bad);

// 往返校验：确认可安全 parse → filter → stringify
const rawFull = fs.readFileSync(FULLFILE, 'utf8');
const lines = rawFull.split('\n');
if (lines.length !== 5 || lines[4] !== '') {
  console.error('[FAIL] data_full.js 行数异常（' + lines.length + '），拒绝写入'); process.exit(1);
}
const reFull = 'window.TECHS_FULL = ' + JSON.stringify(TECHS_FULL) + ';\n' +
  'window.EDGES_FULL = ' + JSON.stringify(EDGES_FULL) + ';\n' +
  'window.SCORE_META = ' + JSON.stringify(META) + ';\n';
if (lines.slice(1).join('\n') !== reFull) {
  console.error('[FAIL] data_full.js 往返序列化不一致，拒绝写入'); process.exit(1);
}
console.log('[校验] data_full.js 往返序列化字节一致 ✓');

// graph.json：JSON.stringify(obj, null, 1)，且原文件末尾无换行（保持一致，避免无谓 diff）
const rawGraph = fs.readFileSync(GRAPHFILE, 'utf8');
if (JSON.stringify(G, null, 1) + '\n' !== rawGraph && JSON.stringify(G, null, 1) !== rawGraph) {
  console.error('[FAIL] graph.json 往返序列化不一致（既非无换行亦非有换行），拒绝写入');
  process.exit(1);
}
const graphTail = rawGraph.endsWith('\n') ? '\n' : '';
console.log('[校验] graph.json 往返序列化一致 ✓（末尾换行：' + (graphTail ? '有' : '无') + '）');

const E2 = EDGES_FULL.filter(e => { const n = norm(e); return !excl.has(n.child + '|' + n.parent); });
const G2 = { ...G, edges: G.edges.filter(e => !excl.has(e.target + '|' + e.source)) };

// SCORE_META：同步边数统计与补丁记录（沿用既有 patchedAt / patchNote 字段）
META.totalEdges = E2.length;
META.patchedAt = new Date().toISOString();
META.patchNote = 'v0.9.24 · 全量管线同步：移除主管线已判定删除的 ' +
  (EDGES_FULL.length - E2.length) + ' 条位置式伪边（批次 eaa086f 遗留，两侧各同步 ' +
  (G.edges.length - G2.edges.length) + ' 条）。';

// graph.json meta：计数口径与 dump_data.js 一致（totalTechs = 主管线 TECHS.length）
const MAIN_COUNT = TECHS_MAIN.length;
const dep = G2.edges.filter(e => e.type === 'dependency').length;
const ena = G2.edges.filter(e => e.type === 'enables').length;
G2.meta = {
  ...G2.meta,
  totalTechs: MAIN_COUNT,
  totalEdges: G2.edges.length,
  depEdges: dep,
  enaEdges: ena,
  patchedAt: new Date().toISOString(),
  patchNote: 'v0.9.24 · 同步 v0.9.20/21 已判定删除的位置式伪边（' + hitGraph.length +
    ' 条）；另修正 totalTechs（1c 批次重名合并后自 ' + G.meta.totalTechs + ' 起未同步，现为 ' + MAIN_COUNT + '）。'
};
console.log('\ngraph.json meta: totalTechs ' + G.meta.totalTechs + ' → ' + MAIN_COUNT +
  '　totalEdges ' + G.meta.totalEdges + ' → ' + G2.edges.length +
  '　depEdges ' + G.meta.depEdges + ' → ' + dep +
  '　enaEdges ' + G.meta.enaEdges + ' → ' + ena);

const outFull = lines[0] + '\n' +
  'window.TECHS_FULL = ' + JSON.stringify(TECHS_FULL) + ';\n' +
  'window.EDGES_FULL = ' + JSON.stringify(E2) + ';\n' +
  'window.SCORE_META = ' + JSON.stringify(META) + ';\n';
fs.writeFileSync(FULLFILE, outFull);
fs.writeFileSync(GRAPHFILE, JSON.stringify(G2, null, 1) + graphTail);
console.log('[写盘] graph.json edges ' + G.edges.length + ' → ' + G2.edges.length);
console.log('[写盘] EDGES_FULL ' + EDGES_FULL.length + ' → ' + E2.length);
console.log('       节点数不变：graph.json ' + G.nodes.length + '，TECHS_FULL ' + TECHS_FULL.length);
