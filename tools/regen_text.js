/*
 * 派生文本重算器 —— 让节点文案与当前依赖网络一致。
 *
 * 背景：summary / significance / views[].text 是「生成时刻」的 dependsOn 与反图快照
 *   （公式见 tools/upgrade_stubs.js:50-84、tools/disassemble.js:50-76）。
 *   网络经 v0.9.20/21 等批次清理后，文案未同步，仍写着已删除的前置（位置式伪边残留），
 *   并残留「为 X 的发展铺平了道路」这类指向不存在下游的子句。
 *
 * 做法：以完全相同的公式，从当前 TECHS 重算，并**仅替换被识别为模板句的那一句**。
 *   手写散文（不匹配任何模板骨架）一律不动 —— 这是与「整体重生成」的关键区别。
 *
 * 用法：
 *   node tools/regen_text.js            # 干跑，只出报告
 *   node tools/regen_text.js --apply    # 写盘（写前自动备份到 /tmp）
 */
const fs = require('fs');
const vm = require('vm');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const APPLY = process.argv.includes('--apply');

const FILES = ['assets/techs_extra.js', 'assets/techs_extend.js', 'assets/techs_more.js', 'assets/data.js'];

// ---------- 载入 ----------
const ctx = vm.createContext({ console, window: {} });
for (const f of FILES) vm.runInContext(fs.readFileSync(path.join(ROOT, f), 'utf8'), ctx, { filename: f });
const TECHS = vm.runInContext('TECHS', ctx);

const techMap = {};
TECHS.forEach(t => (techMap[t.id] = t));
const nameOf = id => (techMap[id] ? techMap[id].name : id);

// ---------- 反图（顺序 = TECHS 顺序，与生成器一致） ----------
const downMap = {};
TECHS.forEach(t => (t.dependsOn || []).forEach(u => { (downMap[u] = downMap[u] || []).push(t.id); }));

// ---------- 与生成器逐字一致的取词规则 ----------
const DOMAIN = {
  basic: '科学基础与方法', material: '材料体系', energy: '能量形式', manufact: '制造与工具',
  transport: '交通运载', info: '信息通信', life: '生命与医疗', build: '建筑建造', military: '军事技术'
};
const ERA = { prehistoric: '史前', ancient: '古代文明', classical: '古典时代', medieval: '中世纪', earlymodern: '近代早期', industrial: '工业时代', electrical: '电气时代', info: '信息时代', intelligent: '智能时代', future: '未来展望' };
const hash = s => { let h = 0; for (const c of s) h = (h * 31 + c.charCodeAt(0)) >>> 0; return h; };
const fixName = name => {
  if (!name) return name;
  if (/[A-Za-z]/.test(name)) {
    const m = name.match(/^[一-龥，、与和\s]*/);
    let zh = m ? m[0] : '';
    zh = zh.replace(/[与和、\s]+$/, '').trim();
    if (zh.length >= 2) return zh;
  }
  return name;
};

function parts(t) {
  const zh = fixName(t.name);
  const ups = (t.dependsOn || []).map(nameOf).filter(Boolean);
  const downs = (downMap[t.id] || []).map(nameOf).filter(Boolean);
  const apps = (t.applications || []).slice(0, 3);
  const domain = DOMAIN[t.category] || t.category;
  const era = ERA[t.era] || t.era;
  const date = t.date || '';
  return {
    zh, ups, downs, domain, era, date,
    upsTop: ups[0] || domain,
    appsTop: apps[0] || domain,
    upsStr: ups.length ? ups.slice(0, 3).join('、') : '既有技术积累',
    downsStr: downs.length ? downs.slice(0, 3).join('、') : '',
    appsStr: apps.length ? apps.slice(0, 2).join('、') : domain
  };
}

// ---------- 与生成器同构的句子构造 ----------
function tSummary(p, t) {
  let s;
  if (p.downs.length && hash(t.id) % 2 === 0) {
    s = `${p.zh}约 ${p.date} 成熟，建立在 ${p.upsStr} 之上完成关键突破；其能力延伸到 ${p.appsStr}，并为 ${p.downsStr} 的发展铺平了道路。`;
  } else if (p.downs.length) {
    s = `${p.zh}在 ${p.date} 前后成形，依托 ${p.upsStr} 把 ${p.appsStr} 落到实处，并成为 ${p.domain} 中承上启下的一环，直接支撑了 ${p.downsStr} 等后续技术。`;
  } else {
    s = `${p.zh}约 ${p.date} 出现，建立在 ${p.upsStr} 之上；它把 ${p.appsStr} 变成可稳定复现的能力，是 ${p.domain} 中从经验走向方法的关键一步。`;
  }
  if (s.length < 60) s += `其成熟标志着 ${p.domain} 从零散尝试走向可复用的方法。`;
  return s;
}
function tSignificance(p) {
  return `${p.zh}把 ${p.upsTop} 与 ${p.appsTop} 连接起来，是 ${p.domain} 中从「可能」走向「可用」的关键节点${p.downs.length ? '，并直接催生了 ' + p.downsStr : ''}。`;
}
function tView0(p) {
  return `${p.zh}在 ${p.date} 前后出现，依托 ${p.upsTop} 解决了 ${p.domain} 中的具体难题，使相关能力第一次可被稳定复现。`;
}
function tView1(p) {
  return `今天，${p.zh}仍是 ${p.appsTop} 的底层支撑${p.downs.length ? '，并持续影响 ' + p.downsStr : '，并作为 ' + p.domain + ' 的基础能力持续发挥作用'}。`;
}

// ---------- 骨架识别：把模板里的「枚举槽位」换成通配 ----------
const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const ITEM = '[^\\s，。；、（）()「」]{1,28}';
const LIST = ITEM + '(?:、' + ITEM + ')*';
const LIST_OR_FALLBACK = '(?:' + LIST + '|既有技术积累)';

function shapeSummary(p) {
  return [
    new RegExp('^' + esc(`${p.zh}约 ${p.date} 成熟，建立在 `) + LIST_OR_FALLBACK + esc(' 之上完成关键突破；其能力延伸到 ') + LIST + esc('，并为 ') + LIST + esc(' 的发展铺平了道路。') + '(?:其成熟标志着 ' + esc(p.domain) + ' 从零散尝试走向可复用的方法。)?$'),
    new RegExp('^' + esc(`${p.zh}在 ${p.date} 前后成形，依托 `) + LIST_OR_FALLBACK + esc(' 把 ') + LIST + esc(' 落到实处，并成为 ') + esc(p.domain) + esc(' 中承上启下的一环，直接支撑了 ') + LIST + esc(' 等后续技术。') + '(?:其成熟标志着 ' + esc(p.domain) + ' 从零散尝试走向可复用的方法。)?$'),
    new RegExp('^' + esc(`${p.zh}约 ${p.date} 出现，建立在 `) + LIST_OR_FALLBACK + esc(' 之上；它把 ') + LIST + esc(' 变成可稳定复现的能力，是 ') + esc(p.domain) + esc(' 中从经验走向方法的关键一步。') + '(?:其成熟标志着 ' + esc(p.domain) + ' 从零散尝试走向可复用的方法。)?$')
  ];
}
function shapeSignificance(p) {
  return [
    new RegExp('^' + esc(`${p.zh}把 `) + LIST_OR_FALLBACK + esc(' 与 ') + LIST_OR_FALLBACK + esc(' 连接起来，是 ') + esc(p.domain) + esc(' 中从「可能」走向「可用」的关键节点，并直接催生了 ') + LIST + '。$'),
    new RegExp('^' + esc(`${p.zh}把 `) + LIST_OR_FALLBACK + esc(' 与 ') + LIST_OR_FALLBACK + esc(' 连接起来，是 ') + esc(p.domain) + esc(' 中从「可能」走向「可用」的关键节点') + '。$')
  ];
}
function shapeView0(p) {
  return [new RegExp('^' + esc(`${p.zh}在 ${p.date} 前后出现，依托 `) + LIST_OR_FALLBACK + esc(' 解决了 ') + esc(p.domain) + esc(' 中的具体难题，使相关能力第一次可被稳定复现。') + '$')];
}
function shapeView1(p) {
  return [
    new RegExp('^今天，' + esc(p.zh) + esc('仍是 ') + LIST_OR_FALLBACK + esc(' 的底层支撑，并持续影响 ') + LIST + '。$'),
    new RegExp('^今天，' + esc(p.zh) + esc('仍是 ') + LIST_OR_FALLBACK + esc(' 的底层支撑，并作为 ') + esc(p.domain) + esc(' 的基础能力持续发挥作用。') + '$')
  ];
}
const anyMatch = (res, s) => res.some(re => re.test(s));

// ---------- 扫描 ----------
const changes = [];   // {id, field, before, after, kind}
const stats = { scanned: 0, shapeHit: 0, changed: 0, skippedHand: 0, byField: {}, byKind: {} };
function bump(o, k) { o[k] = (o[k] || 0) + 1; }

for (const t of TECHS) {
  const p = parts(t);
  stats.scanned++;
  // summary
  if (typeof t.summary === 'string') {
    const hit = anyMatch(shapeSummary(p), t.summary);
    if (hit) {
      stats.shapeHit++;
      const after = tSummary(p, t);
      if (after !== t.summary) {
        changes.push({ id: t.id, field: 'summary', before: t.summary, after, kind: t.downLen === 0 ? '?' : 'shape' });
        bump(stats.byField, 'summary'); bump(stats.byKind, 'summary'); stats.changed++;
      }
    } else stats.skippedHand++;
  }
  // significance
  if (typeof t.significance === 'string') {
    if (anyMatch(shapeSignificance(p), t.significance)) {
      stats.shapeHit++;
      const after = tSignificance(p);
      if (after !== t.significance) { changes.push({ id: t.id, field: 'significance', before: t.significance, after }); bump(stats.byField, 'significance'); stats.changed++; }
    } else stats.skippedHand++;
  }
  // views
  if (Array.isArray(t.views) && t.views.length) {
    t.views.forEach((v, i) => {
      if (!v || typeof v.text !== 'string') return;
      const res = i === 0 ? shapeView0(p) : shapeView1(p);
      if (anyMatch(res, v.text)) {
        stats.shapeHit++;
        const after = i === 0 ? tView0(p) : tView1(p);
        if (after !== v.text) { changes.push({ id: t.id, field: 'views[' + i + '].text', before: v.text, after }); bump(stats.byField, 'views'); stats.changed++; }
      } else stats.skippedHand++;
    });
  }
}

console.log('=== 扫描 ===');
console.log('  节点数            ', stats.scanned);
console.log('  识别为模板句（处） ', stats.shapeHit);
console.log('  非模板（手写，跳过）', stats.skippedHand);
console.log('  需改写（处）       ', stats.changed);
console.log('  按字段            ', JSON.stringify(stats.byField));

// 变化性质分类
const kindOf = {};
for (const c of changes) {
  const id = c.id, t = techMap[id], p = parts(t);
  let k;
  if (c.field === 'summary') {
    const hadDown = /并为 .* 的发展铺平了道路。|直接支撑了 .* 等后续技术。/.test(c.before);
    const hasDown = /并为 .* 的发展铺平了道路。|直接支撑了 .* 等后续技术。/.test(c.after);
    if (hadDown && !hasDown) k = 'summary: 删除已不存在的下游子句';
    else if (!hadDown && hasDown) k = 'summary: 补充新出现的下游子句';
    else k = 'summary: 仅枚举项/顺序变化';
  } else if (c.field === 'significance') {
    const had = /并直接催生了 /.test(c.before), has = /并直接催生了 /.test(c.after);
    if (had && !has) k = 'significance: 删除已不存在的下游';
    else if (!had && has) k = 'significance: 补充新出现的下游';
    else k = 'significance: 枚举项变化';
  } else {
    if (/并持续影响 /.test(c.before) && !/并持续影响 /.test(c.after)) k = 'view: 删除已不存在的下游';
    else k = 'view: 引用项变化';
  }
  bump(kindOf, k);
}
console.log('\n=== 变化性质 ===');
Object.entries(kindOf).sort((a, b) => b[1] - a[1]).forEach(([k, v]) => console.log('  ' + k.padEnd(28), v));

console.log('\n=== 样例（前 10）===');
changes.slice(0, 10).forEach(c => {
  console.log('  [' + c.id + '] ' + c.field);
  console.log('    旧: ' + c.before);
  console.log('    新: ' + c.after);
});

// 受影响节点 / 涉及文件分布
const nodeSet = new Set(changes.map(c => c.id));
console.log('\n受影响节点数 =', nodeSet.size);

fs.writeFileSync('/tmp/regen_changes.json', JSON.stringify(changes, null, 1));
console.log('明细写入 /tmp/regen_changes.json（' + changes.length + ' 条）');

if (!APPLY) { console.log('\n[干跑] 未写盘。加 --apply 执行。'); process.exit(0); }

// ---------- 写盘：对象作用域行替换 ----------
// techs_extra.js 实际格式：对象 { 顶格，字段 4 空格缩进，对象以「两空格 + },」收尾，
// views 为多行数组，「text」字段在 8 空格缩进处。
const TARGET = 'assets/techs_extra.js';
const abs = path.join(ROOT, TARGET);
let src = fs.readFileSync(abs, 'utf8');
const EXTRA_BEFORE = vm.runInContext('EXTRA_TECHS', ctx).length;
const bak = '/tmp/regen_text_bak_' + Date.now() + '_techs_extra.js';
fs.writeFileSync(bak, src);
console.log('\n[备份] ' + bak);

const byNode = new Map();
for (const c of changes) {
  if (!byNode.has(c.id)) byNode.set(c.id, []);
  byNode.get(c.id).push(c);
}

const APPLIED = { summary: 0, significance: 0, views: 0 };
const FAIL = [];
const REPL = (re, s, fn) => { const m = s.match(re); return m ? s.replace(m[0], fn(m)) : null; };

for (const [id, list] of byNode) {
  const anchor = '    "id": "' + id + '",\n';
  const at = src.indexOf(anchor);
  if (at < 0) { FAIL.push(id + ': 未定位 id 锚点'); continue; }
  if (src.indexOf(anchor, at + 1) >= 0) { FAIL.push(id + ': id 锚点不唯一'); continue; }
  const endM = src.slice(at).match(/\n  \},?\n/);
  if (!endM) { FAIL.push(id + ': 未定位对象结束'); continue; }
  const scopeEnd = at + endM.index;
  let scope = src.slice(at, scopeEnd);
  let dirty = false;

  for (const c of list) {
    if (c.field.startsWith('views[')) continue;      // 统一在 views 分支处理
    const re = new RegExp('^    "' + c.field + '": (.*?)(,?)$', 'm');
    const m = scope.match(re);
    if (!m) { FAIL.push(id + ' ' + c.field + ': 未定位字段行'); continue; }
    // 注意：捕获组里是 JSON 字符串字面量（含转义），直接与 JSON.stringify 比对
    if (m[1] !== JSON.stringify(c.before)) { FAIL.push(id + ' ' + c.field + ': 字段现值与预期不符'); continue; }
    scope = scope.replace(m[0], '    "' + c.field + '": ' + JSON.stringify(c.after) + m[2]);
    APPLIED[c.field]++; dirty = true;
  }

  const vChanges = list.filter(c => c.field.startsWith('views[')).sort((a, b) => a.field.localeCompare(b.field));
  if (vChanges.length) {
    const texts = [...scope.matchAll(/^        "text": (.*?)(,?)$/gm)];
    if (texts.length !== 2) { FAIL.push(id + ' views.text 行数 = ' + texts.length + '（应为 2）'); }
    else {
      for (const c of vChanges) {
        const idx = Number(c.field.slice(6, 7));
        const m = texts[idx];
        if (m[1] !== JSON.stringify(c.before)) { FAIL.push(id + ' ' + c.field + ': 数组现值与预期不符'); continue; }
        scope = scope.replace(m[0], '        "text": ' + JSON.stringify(c.after) + m[2]);
        APPLIED.views++; dirty = true;
      }
    }
  }
  if (!dirty) continue;
  src = src.slice(0, at) + scope + src.slice(scopeEnd);
}

console.log('已应用 =', JSON.stringify(APPLIED), ' 合计', APPLIED.summary + APPLIED.significance + APPLIED.views);
if (FAIL.length) {
  console.error('[FAIL] ' + FAIL.length + ' 处未应用：');
  FAIL.slice(0, 20).forEach(x => console.error('   ' + x));
  process.exit(1);
}
const got = APPLIED.summary + APPLIED.significance + APPLIED.views;
if (got !== changes.length) { console.error('[FAIL] 应用数不符：预期 ' + changes.length + '，实际 ' + got); process.exit(1); }

// 语法 + 结构校验
const ctx2 = vm.createContext({ console, window: {} });
vm.runInContext(src, ctx2, { filename: TARGET });
const E2 = vm.runInContext('EXTRA_TECHS', ctx2);
console.log('[校验] EXTRA_TECHS =', E2.length, '（原 ' + EXTRA_BEFORE + '）');
if (E2.length !== EXTRA_BEFORE) { console.error('[FAIL] 条目数变化'); process.exit(1); }

fs.writeFileSync(abs, src);
console.log('[写盘] ' + TARGET + '  ' + (src.length / 1024 / 1024).toFixed(2) + ' MB');
console.log('\n下一步：重跑本工具应为「需改写 0 处」（不动点），再跑 node tools/audit_net.js --check');


