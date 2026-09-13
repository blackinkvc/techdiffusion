/*
 * 中间技术库同步器 —— 保持「案例视图」的派生字段与主管线一致。
 *
 * 背景：assets/techs_midtech.js 的 backgrounds 是生成时刻 dependsOn 的快照（原样搬运），
 *   summary 是生成时刻主管线节点摘要的拷贝。主管线经多批清理后二者已过期，
 *   残留形如「背景里还有已删除的前置」（如 mat_graphene 的 mat_selfheal），
 *   以及 tech 字段为 undefined 的断链背景。
 *
 * 范围：**只修派生字段，不重选案例集合**。
 *   注意：直接重跑 gen_midtech.js 会因清理后 crossSelf 分布变化而把案例从 95 条塌缩到 32 条
 *   且分类严重倾斜（life 占 14），故案例集合的取舍属人工策展，不在本工具职责内。
 *
 * 用法：
 *   node tools/regen_midtech.js            # 干跑，只出报告
 *   node tools/regen_midtech.js --apply    # 写盘（写前备份到 /tmp）
 */
const fs = require('fs');
const path = require('path');
const MR = require('./midtech_rules');

const ROOT = path.resolve(__dirname, '..');
const APPLY = process.argv.includes('--apply');
const OUTFILE = path.join(ROOT, 'assets/techs_midtech.js');

// ---------- 载入主管线 ----------
const rd = f => fs.readFileSync(path.join(ROOT, 'assets', f), 'utf8');
const dataSrc = rd('data.js').replace(/if \(typeof module[\s\S]*$/, '');
const D = (new Function(
  rd('techs_extra.js') + '\n' + rd('techs_extend.js') + '\n' + rd('techs_more.js') + '\n' + dataSrc +
  '\nreturn { TECHS, MIDTECHS };'))();
const TECHS = D.TECHS, MIDTECHS = D.MIDTECHS;
const techMap = {}; TECHS.forEach(t => (techMap[t.id] = t));

// ---------- 载入现有中间库 ----------
const cur = (new Function(fs.readFileSync(OUTFILE, 'utf8') + '\nreturn MIDTECHS_EXTRA;'))();
console.log('现有条目 =', cur.length, '| 手工案例 (data.js) =', (MIDTECHS.items || []).length);

const HEAD = '// 自动生成：中间技术案例（从已有技术按「跨领域汇聚」口径筛选）\n' +
  '// 案例集合由 tools/gen_midtech.js 于 2026-08-26 产出；文案与背景由 tools/regen_midtech.js 与主管线同步。\n';

const stats = { bg: 0, summary: 0, born: 0, name: 0, missing: [], badBg: 0, unchanged: 0 };
const samples = [];
const items = cur.map(it => {
  const t = techMap[it.id];
  if (!t) { stats.missing.push(it.id); return it; }
  const date = t.date || (t.year ? t.year + ' 年' : '');
  const backgrounds = MR.backgroundsOf(t, techMap);
  const summary = (t.summary && t.summary.length >= 40)
    ? t.summary
    : (t.name + ' 是' + '技术' + '领域的一项复合技术，依赖多条来自不同领域的技术线索同时成熟后才汇聚而生。');
  const born = t.name + '之所以在 ' + date + ' 前后成为可能，是因为以下关键技术恰好同时越过了「可用、便宜、可靠」的临界点：';

  const oldBg = JSON.stringify((it.backgrounds || []).map(b => b.tech));
  const newBg = JSON.stringify(backgrounds.map(b => b.tech));
  const changed = oldBg !== newBg || it.summary !== summary || it.born !== born || it.name !== t.name;
  if (oldBg !== newBg) {
    stats.bg++;
    if ((it.backgrounds || []).some(b => !b.tech || !techMap[b.tech])) stats.badBg++;
    if (samples.length < 8) samples.push(it.id + '\n     旧=[' + (it.backgrounds || []).map(b => b.tech).join(',') + ']\n     新=[' + backgrounds.map(b => b.tech).join(',') + ']');
  }
  if (it.summary !== summary) stats.summary++;
  if (it.born !== born) stats.born++;
  if (it.name !== t.name) stats.name++;
  if (!changed) stats.unchanged++;

  return { id: it.id, name: t.name, en: t.en || '', date, summary, born, backgrounds };
});

console.log('\n=== 派生字段差异 ===');
console.log('  backgrounds 变化   ', stats.bg, '（其中含断链背景的', stats.badBg, '条）');
console.log('  summary 变化       ', stats.summary);
console.log('  born 变化          ', stats.born);
console.log('  name 变化          ', stats.name);
console.log('  未变化条目         ', stats.unchanged, '/', items.length);
if (stats.missing.length) console.log('  [WARN] 主管线已无此节点（保留原样）:', stats.missing.join(', '));

console.log('\n=== 样例（前 8）===');
samples.forEach(s => console.log('   ' + s));

// 校验：背景必须全部指向存在的节点
let bad = 0;
items.forEach(it => it.backgrounds.forEach(b => { if (!techMap[b.tech]) bad++; }));
if (bad) { console.error('\n[FAIL] 存在 ' + bad + ' 处断链背景，已中止'); process.exit(1); }
const ids = new Set();
items.forEach(it => { if (ids.has(it.id)) { console.error('\n[FAIL] 重复 id: ' + it.id); process.exit(1); } ids.add(it.id); });
console.log('\n[校验] 无断链背景、无重复 id，条目数 ' + items.length);

if (!APPLY) { console.log('\n[干跑] 未写盘。加 --apply 执行。'); process.exit(0); }

const bak = '/tmp/regen_midtech_bak_' + Date.now();
fs.mkdirSync(bak, { recursive: true });
fs.copyFileSync(OUTFILE, bak + '/techs_midtech.js');
console.log('[备份] ' + bak + '/techs_midtech.js');

const body = 'const MIDTECHS_EXTRA = ' + JSON.stringify(items, null, 2) + ';\n\n' +
  'if (typeof module !== "undefined" && module.exports) {\n  module.exports = { MIDTECHS_EXTRA };\n}\n';
fs.writeFileSync(OUTFILE, HEAD + body);
console.log('[写盘] assets/techs_midtech.js');
