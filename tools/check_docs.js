#!/usr/bin/env node
/**
 * check_docs.js — 文档/数据一致性自检（让正文数字随语料增长自动被捕获）
 * ============================================================================
 * 背景：本项目正文（含 data.js 的 SOP 区块、README、tree_full 等）曾把语料总数
 * 等「会随 techs_* 文件增长而变化」的数字写死（如 SOP 一度写「2181 条」，实际已
 * 变为 2289）。这类数字一旦写死就会悄悄过期，靠人工复查很难及时发现。
 *
 * 本办法（让更新更及时）分两层：
 *   1) 源头消歧义：正文里凡引用「当前语料总数」处，统一用占位符 {{TOTAL}}，
 *      由前端渲染时填入实时 TECHS.length（见 assets/app.js renderSop）。
 *   2) 提交门禁：本脚本在每次 git commit 前运行，把「权威数值」与「正文散文里的
 *      硬编码数字」比对，发现不一致即报错并阻断提交，把过期挡在入库之前。
 *
 * 权威数值（运行时计算，不写死）：
 *   - TOTAL       = 主站点语料数（techs_extra/extend/more/midtech + data.js 的 TECHS）
 *   - TOTAL_FULL  = 全量数据集（assets/data_full.js 的 window.TECHS_FULL）
 *
 * 检查项：
 *   [E] 正文出现已知过期 token（如 2181）
 *   [E] SOP 区块用 {{TOTAL}} 占位（防止再次写死总数）
 *   [E] 主站点语料声明（现存 N 条 / N 条技术简介 / N 条简介）必须等于 TOTAL
 *   [E] 全量数据集声明（N 项真实技术 / N 个技术节点 / ~N technologies）必须等于 TOTAL_FULL
 *   [W] 文档里「截至/更新于 YYYY-MM-DD」或 SOP.updated 距今天数 > 60 视为可能过期
 *
 * 退出码：有 ERROR → 1（pre-commit 会阻断）；仅 WARNING → 0（仅提示，不阻断）。
 * ============================================================================
 */
const fs = require('fs');
const vm = require('vm');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const ASSETS = path.join(ROOT, 'assets');
const DAY = 86400000;
const FRESH_DAYS = 60;

// ---------- 1. 计算权威数值 ----------
function computeCanonical() {
  // 主站点语料
  const ctx = { console };
  vm.createContext(ctx);
  let code = '';
  for (const f of ['techs_extra.js', 'techs_extend.js', 'techs_more.js', 'techs_midtech.js', 'data.js']) {
    code += fs.readFileSync(path.join(ASSETS, f), 'utf8') + '\n';
  }
  code += '\n;globalThis.__T=(typeof TECHS!=="undefined")?TECHS.length:0;';
  code += '\nglobalThis.__SOP=(typeof SOP!=="undefined")?SOP:null;';
  vm.runInContext(code, ctx);

  // 全量数据集
  let totalFull = 0;
  const dfPath = path.join(ASSETS, 'data_full.js');
  if (fs.existsSync(dfPath)) {
    const ctxF = { window: {}, console };
    vm.createContext(ctxF);
    vm.runInContext(fs.readFileSync(dfPath, 'utf8'), ctxF);
    totalFull = (ctxF.window.TECHS_FULL && ctxF.window.TECHS_FULL.length) || 0;
  }
  return { total: ctx.__T, totalFull, sop: ctx.__SOP };
}

// ---------- 2. 待扫描文件集合 ----------
function scanFiles() {
  const out = [];
  const rootEntries = fs.readdirSync(ROOT);
  const EXCLUDE_LOG = new Set(['版本迭代日志.md', 'changelog.html']); // 日志/变更页：历史日期属正常
  for (const e of rootEntries) {
    if (!/^.*\.(html|md)$/.test(e)) continue;
    if (EXCLUDE_LOG.has(e)) continue;
    out.push(path.join(ROOT, e));
  }
  // 注意：data.js 的 SOP 区块单独在 runChecks 里校验（仅校验 SOP.lead / SOP.target.note，
  // 不扫描其中的历史 log 数组，避免把「某次迭代时的历史计数」误判为过期）。
  return out;
}

// ---------- 3. 各检查项 ----------
const DENY_TOKENS = ['2181']; // 已知过期值，正文不得再出现

// 主站点语料声明 → 必须等于 TOTAL
const ACTIVE_PATTERNS = [
  /现存\s*([\d,]+)\s*条/g,
  /([\d,]+)\s*条技术简介/g,
  /([\d,]+)\s*条简介/g,
];
// 全量数据集声明 → 必须等于 TOTAL_FULL
const FULL_PATTERNS = [
  /([\d,]+)\s*项真实技术/g,
  /([\d,]+)\s*个技术节点/g,
  /~?([\d,]+)\s*technologies/gi,
];

function parseNum(s) { return parseInt(String(s).replace(/[,\s]/g, ''), 10); }

function runChecks(canonical, files) {
  const errors = [];
  const warnings = [];
  const today = new Date();

  // 3a. SOP 占位符 + 计数一致性检查（仅针对 SOP.lead / SOP.target.note，不扫历史 log）
  if (canonical.sop) {
    const lead = canonical.sop.lead || '';
    const note = (canonical.sop.target && canonical.sop.target.note) || '';
    if (!lead.includes('{{TOTAL}}') || !note.includes('{{TOTAL}}'))
      errors.push(['assets/data.js', 0, 'SOP.lead / SOP.target.note 未使用 {{TOTAL}} 占位，语料总数被写死，存在过期风险']);
    for (const t of [lead, note]) {
      for (const re of ACTIVE_PATTERNS) {
        re.lastIndex = 0; let m;
        while ((m = re.exec(t))) {
          const n = parseNum(m[1]);
          if (n !== canonical.total)
            errors.push(['assets/data.js', 0, `SOP 语料声明 ${n} ≠ 实际主站点语料 ${canonical.total}`]);
        }
      }
    }
    if (canonical.sop.updated) {
      const d = new Date(canonical.sop.updated);
      if (!isNaN(d) && (today - d) > FRESH_DAYS * DAY)
        warnings.push(['assets/data.js', 0, `SOP.updated=${canonical.sop.updated} 已超 ${FRESH_DAYS} 天，文档可能过期，建议更新`]);
    }
  }

  for (const fp of files) {
    const rel = path.relative(ROOT, fp);
    let content;
    try { content = fs.readFileSync(fp, 'utf8'); } catch { continue; }
    const lines = content.split('\n');
    const isChangelog = /changelog\.html$/.test(fp);

    lines.forEach((line, idx) => {
      const ln = idx + 1;
      // 3b. 已知过期 token
      for (const t of DENY_TOKENS) {
        if (line.includes(t)) errors.push([rel, ln, `出现已知过期值 ${t}`]);
      }
      // 3c. 主站点语料声明
      for (const re of ACTIVE_PATTERNS) {
        re.lastIndex = 0; let m;
        while ((m = re.exec(line))) {
          const n = parseNum(m[1]);
          if (n !== canonical.total)
            errors.push([rel, ln, `语料声明 ${n} ≠ 实际主站点语料 ${canonical.total}（应为实时值）`]);
        }
      }
      // 3d. 全量数据集声明
      for (const re of FULL_PATTERNS) {
        re.lastIndex = 0; let m;
        while ((m = re.exec(line))) {
          const n = parseNum(m[1]);
          if (canonical.totalFull && n !== canonical.totalFull)
            errors.push([rel, ln, `全量数据集声明 ${n} ≠ 实际 data_full.js 节点数 ${canonical.totalFull}`]);
        }
      }
      // 3e. 日期时效（变更页跳过）
      if (!isChangelog) {
        const dm = line.match(/(?:截至|截止|更新于)\s*(\d{4}-\d{2}-\d{2})/);
        if (dm) {
          const d = new Date(dm[1]);
          if (!isNaN(d) && (today - d) > FRESH_DAYS * DAY)
            warnings.push([rel, ln, `日期 ${dm[1]} 距今超 ${FRESH_DAYS} 天，内容可能已过期`]);
        }
      }
    });
  }
  return { errors, warnings };
}

// ---------- 4. 输出 ----------
function main() {
  const canonical = computeCanonical();
  const files = scanFiles();
  const { errors, warnings } = runChecks(canonical, files);

  console.log('文档/数据一致性自检');
  console.log('----------------------------------------');
  console.log(`主站点语料 TOTAL      = ${canonical.total}`);
  console.log(`全量数据集 TOTAL_FULL = ${canonical.totalFull}`);
  console.log('----------------------------------------');

  let bad = false;
  if (errors.length) {
    bad = true;
    console.log(`\n[ERROR] ${errors.length} 处必须修正：`);
    for (const [f, l, msg] of errors) console.log(`  ✗ ${f}${l ? ':' + l : ''} — ${msg}`);
  } else {
    console.log('\n[OK] 未发现过期/不一致的数字声明。');
  }
  if (warnings.length) {
    console.log(`\n[WARN] ${warnings.length} 处建议关注：`);
    for (const [f, l, msg] of warnings) console.log(`  ! ${f}${l ? ':' + l : ''} — ${msg}`);
  }
  console.log('');
  process.exit(bad ? 1 : 0);
}
main();
