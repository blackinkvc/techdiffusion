/* ============================================================
 * forecast_engine.js  —— Phase 5 · 未来涌现推演引擎（校正后核心）
 * 方法（见《项目构建研究思路与全程纪要》§13.3）：
 *   A) 从真实网络实算「前提齐备律」滞后分布（year - max(前置年)），
 *      仅对 year>=1700 的历史技术统计，避免史前节点污染。
 *   B) 对每个未来方向，按"前提闭包的最大分档"推导涌现可行性五档
 *      L1 已实现 / L2 目前可实现 / L3 未来可能 / L4 未来较难 / L5 受物理制约。
 *   C) 级联推演：L2 节点的组合 → L3；L3 的三元组合 → L4（组合涌现律）。
 *   D) 涌现时期 = 前提全部实现年 + 历史滞后分布分位（禁用手工年份）。
 * 全程确定性、可复现、可审计。  用法：node forecast_engine.js
 * ============================================================ */
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');

global.window = {};
eval(fs.readFileSync(path.join(ROOT, 'assets/data_full.js'), 'utf8'));
const T = window.TECHS_FULL, E = window.EDGES_FULL;
const NOW = 2026;

const m = {};
T.forEach(t => { m[t.id] = t; });
// 前置闭包（记忆化）
const closureCache = {};
function ancestors(id, seen = new Set()) {
  if (closureCache[id]) return closureCache[id];
  const node = m[id]; if (!node) return new Set();
  const acc = new Set();
  for (const u of (node.dependsOn || []).filter(x => m[x])) {
    if (seen.has(u)) continue; seen.add(u); acc.add(u);
    for (const a of ancestors(u, seen)) acc.add(a);
  }
  closureCache[id] = acc; return acc;
}
const ancNodes = id => [...ancestors(id)].map(x => m[x]).filter(Boolean);

// ---- A. 滞后分布（仅 year>=1700 的历史技术）----
const lags = [];
T.forEach(t => {
  const y = t.year; if (y == null || y < 1700) return;
  const uy = (t.dependsOn || []).map(x => m[x]).filter(Boolean).map(x => x.year).filter(v => v != null && v >= 0);
  if (uy.length) lags.push(y - Math.max(...uy));
});
const sorted = [...lags].sort((a, b) => a - b);
const pct = p => sorted.length ? sorted[Math.min(sorted.length - 1, Math.floor(p * sorted.length))] : null;
const lagStats = {
  n: lags.length, min: sorted[0], max: sorted[sorted.length - 1],
  mean: +(lags.reduce((a, b) => a + b, 0) / lags.length).toFixed(1),
  p10: pct(0.10), p25: pct(0.25), p50: pct(0.50), p75: pct(0.75), p90: pct(0.90)
};

// ---- 已实现判定 ----
function isRealized(node) {
  const y = node.year; if (y == null || y > NOW) return false;
  const uy = (node.dependsOn || []).map(x => m[x]).filter(Boolean).map(x => x.year).filter(v => v != null);
  return uy.every(u => u <= y);
}

// ---- 物理制约关键词（L5）----
const L5_KW = ['曲速', '虫洞', '超光速', '物质传送', '传送', '永动机', '奇异物质', '黑洞计算'];
const isL5 = n => (n.name + ' ' + (n.summary || '')).split(/\s+/).some(() => L5_KW.some(k => (n.name + n.summary || '').includes(k)));

// ---- B. 推导未来候选（来自既有 future/未来档节点，清洗手工年份）----
const rank = t => ({ L1: 1, 'L1-基石': 1, 'L1-前沿': 1, L2: 2, L3: 3, L4: 4, L5: 5 }[t] || 1);
const candidates = [];
T.forEach(node => {
  if (isRealized(node)) return;
  const anc = ancNodes(node.id);
  const validYears = anc.map(n => n.year).filter(v => v != null && v >= 0);
  const maxAncYear = validYears.length ? Math.max(...validYears) : NOW;
  const ancTiers = anc.map(rank);
  const maxAncTier = ancTiers.length ? Math.max(...ancTiers) : 1;

  let tier, basis;
  if (isL5(node)) { tier = 'L5'; basis = '依赖违反已知物理定律的前提'; }
  else if (anc.every(n => isRealized(n))) { tier = 'L2'; basis = '全部前置已为已实现(L1)，前提齐备'; }
  else if (maxAncTier <= 2) { tier = 'L3'; basis = '前置含 L2（目前可实现）环节，需先实现'; }
  else { tier = 'L4'; basis = '前置链含 L3+ 或需重大基础突破'; }

  const lo = maxAncYear + lagStats.p25, mid = maxAncYear + lagStats.p50, hi = maxAncYear + lagStats.p90;
  candidates.push({
    id: node.id, name: node.name, category: node.category, source: 'curated',
    storedTier: node.tier || 'NA', derivedTier: tier, basis,
    prereqCount: anc.length, maxAncestorYear: maxAncYear,
    emergence: { early: lo, median: mid, late: hi },
    needsPhysics: isL5(node)
  });
});

// ---- C. 级联推演：由 L2 → L3（二元组合涌现）----
const l2 = candidates.filter(c => c.derivedTier === 'L2');
const l2ById = {}; l2.forEach(c => l2ById[c.id] = c.emergence.median);
// 取按 emerged 早 + 中心度高的 L2 作组合原料
const l2sorted = [...l2].sort((a, b) => a.emergence.median - b.emergence.median);
const TOPN = 40;
const pool = l2sorted.slice(0, TOPN);
const seenPair = new Set();
let synthCount = 0;
for (let i = 0; i < pool.length && synthCount < 60; i++) {
  for (let j = i + 1; j < pool.length && synthCount < 60; j++) {
    const a = pool[i], b = pool[j];
    if (a.category === b.category) continue; // 跨域组合才涌现新方向
    const key = [a.id, b.id].sort().join('|'); if (seenPair.has(key)) continue; seenPair.add(key);
    const maxEm = Math.max(a.emergence.median, b.emergence.median);
    const lo = maxEm + lagStats.p25, mid = maxEm + lagStats.p50, hi = maxEm + lagStats.p90;
    candidates.push({
      id: `syn_L3_${a.id}__${b.id}`, name: `（推演）${a.name} × ${b.name} 融合系统`,
      category: `${a.category}+${b.category}`, source: 'synthetic',
      storedTier: 'NA', derivedTier: 'L3', basis: `组合涌现：依赖 L2 方向（${a.name}、${b.name}）`,
      prereqCount: 2, maxAncestorYear: maxEm,
      emergence: { early: lo, median: mid, late: hi }, needsPhysics: false
    });
    synthCount++;
  }
}

// ---- 统计 + 输出 ----
const dist = {};
candidates.forEach(c => { dist[c.derivedTier] = (dist[c.derivedTier] || 0) + 1; });
const byTier = t => candidates.filter(c => c.derivedTier === t).sort((a, b) => a.emergence.median - b.emergence.median);

const out = {
  generatedAt: new Date().toISOString().slice(0, 10),
  method: '前提闭包 + 滞后分布（§13.3）确定性推导，禁用手工年份；L3 由 L2 跨域组合级联生成',
  lagStats,
  totalCandidates: candidates.length,
  derivedDistribution: dist,
  L2_top: byTier('L2').slice(0, 20).map(c => ({ name: c.name, cat: c.category, early: c.emergence.early, median: c.emergence.median })),
  L3_top: byTier('L3').slice(0, 15).map(c => ({ name: c.name, early: c.emergence.early, median: c.emergence.median })),
  L5_examples: byTier('L5').slice(0, 12).map(c => ({ name: c.name, basis: c.basis }))
};
fs.writeFileSync(path.join(ROOT, 'analysis-engine/data/forecast_results.json'), JSON.stringify(out, null, 2));

console.log('=== 滞后分布（year>=1700，n=' + lagStats.n + '）===');
console.log(JSON.stringify(lagStats));
console.log('\n=== 推导分档分布（未来候选，含级联）===');
console.log(JSON.stringify(dist));
console.log('\n=== L2 目前可实现 · 涌现最早 Top10 ===');
byTier('L2').slice(0, 10).forEach(c => console.log(`  ${c.name} (${c.category})  中位${c.emergence.median}`));
console.log('\n=== L3 推演候选（组合涌现）Top8 ===');
byTier('L3').slice(0, 8).forEach(c => console.log(`  ${c.name}  中位${c.emergence.median}`));
console.log('\n=== L5 受物理制约（样例）===');
byTier('L5').slice(0, 8).forEach(c => console.log(`  ${c.name}`));
console.log('\n→ 写入 analysis-engine/data/forecast_results.json');
