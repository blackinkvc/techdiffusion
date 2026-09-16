#!/usr/bin/env node
/**
 * check_text_hygiene.js — 文本卫生独立抽查断言（第四道门禁候选）
 * ============================================================================
 * 定位（勿与既有三道门禁混淆）：
 *   1) check_docs.js          文档/数据「数字」一致性
 *   2) regen_text.js --check  派生文案「不动点」（与网络一致）
 *   3) audit_net.js --check   结构指标「不劣化」（对 audit/baseline.json）
 *   本工具（4）             文本「卫生」—— 独立于上述三者，尤其独立于生成器规则。
 *
 * 为什么必须独立（立项依据）：
 *   检修计划 §五 · 固定动作第 5 条 / 纠错页 pendingQueue #19：
 *   「不动点不是完备性证明 —— 凡『规则识别 + 重写』类工具，须附一条不依赖该规则的
 *    独立抽查断言。」
 *   regen_text.js 的断言链全部走 derived_text_rules.js 的模板骨架，属同一算法内部的
 *   自洽性检验：模板里若有固有缺陷（如未翻译词），它只会把缺陷「忠实地复制」下去，
 *   且门禁全绿。本工具**不 import 任何生成器规则**，只读数据文件本身做词法抽查，
 *   因此能看见识别器的盲区。这是它与 regen_text.js 的关键区别，勿合并。
 *
 * 检查项（均作用于节点文本字段，不涉及 SOP / METHODOLOGY 等非节点文案）：
 *   L1 未译拉丁词   中文字段里出现孤立小写拉丁词，且不在术语白名单内
 *                   （例：模板字面量泄漏的 "collective"、"closes"、"mass media"）
 *   L2 en 非英文    en 字段含中日韩字符（英文位显示中文）
 *   L3 首尾空白     字符串字段 / 数组元素两端有空白（例：" ambulance"）
 *   L4 模板残留     {{占位}} / ${ / undefined / NaN / TODO / printf 占位 / 重复标点
 *                   （当前实测为 0，属「只许保持」的不变量）
 *
 * 用法：
 *   node tools/check_text_hygiene.js             # 报告：列出全部命中（人工审核用）
 *   node tools/check_text_hygiene.js --check     # 门禁：出现基线外的新命中 → 退出码 1
 *   node tools/check_text_hygiene.js --snapshot  # 清理后刷新基线
 *
 * 基线：audit/text_hygiene_baseline.json
 *   采用与 audit_net.js 同构的「冻结基线 + 不得劣化」策略：现存命中已知、
 *   不阻断提交；**新增**命中一律阻断。这样门禁可在数据清理完成前先挂上。
 * ============================================================================
 */
"use strict";

const fs = require("fs");
const vm = require("vm");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const BASELINE = path.join(ROOT, "audit", "text_hygiene_baseline.json");

const MODE_CHECK = process.argv.includes("--check");
const MODE_SNAPSHOT = process.argv.includes("--snapshot");

// ---------- 载入主管线（与浏览器同一加载顺序）----------
const DATA_FILES = [
  "assets/techs_extra.js",
  "assets/techs_extend.js",
  "assets/techs_more.js",
  "assets/techs_midtech.js",
  "assets/data.js"
];

function loadTechs() {
  const ctx = vm.createContext({ console, window: {} });
  for (const f of DATA_FILES) {
    vm.runInContext(fs.readFileSync(path.join(ROOT, f), "utf8"), ctx, { filename: f });
  }
  return vm.runInContext("TECHS", ctx);
}

// ---------- 检查定义 ----------
const CJK = /[　-〿぀-ヿ㐀-䶿一-鿿豈-﫿]/;

/**
 * 术语白名单：合法的拉丁文技术术语 / 拉丁学名，不算「未译词」。
 * 出现新词而它确实合法时，加到这里（并在 git 提交信息里说明依据）。
 */
const TERM_WHITELIST = new Set([
  "bootstrap",  // 自助法（统计重采样方法，中文文献常直接用原名）
  "copula",     // copula 函数（连接函数）
  "sapiens",    // Homo sapiens 拉丁学名
  "erectus",    // Homo erectus 拉丁学名
  "habilis",    // Homo habilis
  "neanderthalensis"
]);

// 只匹配「两侧都是非拉丁字母」的孤立小写词 —— 避免把 Schöningen 切成 ningen。
const LATIN_WORD = /(?<![A-Za-zÀ-ɏ])([a-z]{3,})(?![A-Za-zÀ-ɏ])/g;

const TEMPLATE_RESIDUE = [
  [/\{\{[^}]*\}\}/, "{{占位符}}"],
  [/\$\{/, "${ 模板插值"],
  [/\bundefined\b/, "undefined"],
  [/\bNaN\b/, "NaN"],
  [/\bTODO\b|\bFIXME\b|\bXXX\b/, "TODO/FIXME/XXX"],
  [/%s|%d(?![\d.])/, "printf 占位"],
  [/[，。；、]{2,}/, "重复标点"]
];

const SKIP_FIELDS = new Set(["id"]);

function scan(techs) {
  const hits = [];   // { check, id, field, detail }
  const push = (check, id, field, detail) => hits.push({ check, id, field, detail });

  for (const t of techs) {
    for (const [k, v] of Object.entries(t)) {
      if (k.startsWith("_") || SKIP_FIELDS.has(k)) continue;

      // 数组字段（applications / views / dependsOn …）
      if (Array.isArray(v)) {
        for (const e of v) {
          if (typeof e === "string") checkString(e, k, t.id, push, true);
          else if (e && typeof e === "object") {
            for (const [k2, v2] of Object.entries(e)) {
              if (typeof v2 === "string") checkString(v2, `${k}[].${k2}`, t.id, push, false);
            }
          }
        }
        continue;
      }

      if (typeof v !== "string" || !v) continue;

      // L3 首尾空白（对全部字符串字段）
      if (v !== v.trim()) push("L3", t.id, k, JSON.stringify(v.slice(0, 40)));

      // L2 en 字段含中日韩字符
      if (k === "en" && CJK.test(v)) push("L2", t.id, k, v);

      // L1 / L4 只查自然语言字段
      checkString(v, k, t.id, push, false);
    }
  }
  return hits;
}

function checkString(s, field, id, push, isArrayItem) {
  // L3（数组元素单独判）
  if (isArrayItem && s !== s.trim()) push("L3", id, field, JSON.stringify(s));

  // L1 未译拉丁词：仅当该字段是中文语境（含 CJK）时才判，
  //    否则整段英文（如 en 字段）会被误报。
  if (CJK.test(s)) {
    LATIN_WORD.lastIndex = 0;
    let m;
    const seen = new Set();
    while ((m = LATIN_WORD.exec(s))) {
      const w = m[1];
      if (TERM_WHITELIST.has(w) || seen.has(w)) continue;
      seen.add(w);
      push("L1", id, field, w);
    }
  }

  // L4 模板残留
  for (const [re, label] of TEMPLATE_RESIDUE) {
    if (re.test(s)) push("L4", id, field, label);
  }
}

// ---------- 基线键 ----------
const keyOf = h => `${h.check}|${h.id}|${h.field}|${h.detail}`;
const sortKeys = a => a.slice().sort();

function loadBaseline() {
  if (!fs.existsSync(BASELINE)) return null;
  return JSON.parse(fs.readFileSync(BASELINE, "utf8"));
}

function writeBaseline(hits) {
  const known = sortKeys(hits.map(keyOf));
  const obj = {
    version: 1,
    note:
      "文本卫生基线（tools/check_text_hygiene.js）。known = 已知且暂未清理的命中；" +
      "门禁只阻断**新增**命中（不得劣化），与 audit/baseline.json 同构。" +
      "清理数据后用 --snapshot 刷新。whitelist 见工具内 TERM_WHITELIST。",
    counts: hits.reduce((a, h) => ((a[h.check] = (a[h.check] || 0) + 1), a), {}),
    known
  };
  fs.writeFileSync(BASELINE, JSON.stringify(obj, null, 1) + "\n", "utf8");
  return obj;
}

// ---------- 主流程 ----------
function main() {
  const techs = loadTechs();
  const hits = scan(techs);

  const byCheck = {};
  for (const h of hits) byCheck[h.check] = (byCheck[h.check] || 0) + 1;

  // ---- 快照模式 ----
  if (MODE_SNAPSHOT) {
    const obj = writeBaseline(hits);
    console.log("文本卫生基线已刷新");
    console.log("----------------------------------------");
    console.log(`扫描节点      ${techs.length}`);
    for (const c of ["L1", "L2", "L3", "L4"]) {
      console.log(`  ${c} 已知命中   ${byCheck[c] || 0}`);
    }
    console.log(`写入 ${path.relative(ROOT, BASELINE)}（known ${obj.known.length} 条）`);
    return 0;
  }

  // ---- 门禁模式 ----
  if (MODE_CHECK) {
    const base = loadBaseline();
    if (!base) {
      console.error("✗ 未找到 audit/text_hygiene_baseline.json");
      console.error("  先执行：node tools/check_text_hygiene.js --snapshot");
      return 1;
    }
    const knownSet = new Set(base.known || []);
    const fresh = hits.filter(h => !knownSet.has(keyOf(h)));
    const fixedCount = (base.known || []).filter(k => !hits.some(h => keyOf(h) === k)).length;

    if (fresh.length) {
      console.error("✗ 文本卫生出现基线外的新命中（新增 " + fresh.length + " 条）：");
      for (const h of fresh.slice(0, 40)) {
        console.error(`   [${h.check}] ${h.id} · ${h.field} · ${h.detail}`);
      }
      if (fresh.length > 40) console.error(`   …另有 ${fresh.length - 40} 条`);
      console.error("  处置：修正数据后重跑 --snapshot；若确属合法（专名/术语），加进工具内白名单。");
      return 1;
    }
    console.log(
      `[OK] 文本卫生无新增命中（已知 ${base.known ? base.known.length : 0} 条` +
      (fixedCount ? `，本次已清理 ${fixedCount} 条，可 --snapshot 收紧基线` : "") + "）"
    );
    return 0;
  }

  // ---- 报告模式 ----
  const base = loadBaseline();
  const knownSet = base ? new Set(base.known || []) : new Set();
  console.log("文本卫生抽查（独立于生成器规则）");
  console.log("----------------------------------------");
  console.log(`扫描节点 ${techs.length} · 命中合计 ${hits.length}`);
  for (const c of ["L1", "L2", "L3", "L4"]) {
    console.log(`  ${c}  ${byCheck[c] || 0}`);
  }
  console.log("");

  const TITLES = {
    L1: "L1 未译拉丁词（中文字段里的孤立小写拉丁词，白名单外）",
    L2: "L2 en 字段含中日韩字符（英文位显示中文）",
    L3: "L3 字段/数组元素首尾空白",
    L4: "L4 模板残留"
  };
  for (const c of ["L1", "L2", "L3", "L4"]) {
    const g = hits.filter(h => h.check === c);
    if (!g.length) { console.log(`${TITLES[c]} —— 0`); console.log(""); continue; }
    console.log(`${TITLES[c]} —— ${g.length}`);
    if (c === "L1") {
      // 按 token 聚合，便于按「一个词修一处模板」批量处置
      const tally = {};
      for (const h of g) tally[h.detail] = (tally[h.detail] || 0) + 1;
      for (const [w, n] of Object.entries(tally).sort((a, b) => b[1] - a[1])) {
        const sample = g.filter(h => h.detail === w).slice(0, 2)
          .map(h => `${h.id}:${h.field}`).join(", ");
        const mark = knownSet.has(keyOf(g.find(h => h.detail === w))) === false && base ? " [新]" : "";
        console.log(`   ${String(n).padStart(4)}  ${w.padEnd(14)} e.g. ${sample}${mark}`);
      }
    } else {
      for (const h of g.slice(0, 60)) {
        console.log(`   ${h.id} · ${h.field} · ${h.detail}`);
      }
      if (g.length > 60) console.log(`   …另有 ${g.length - 60} 条`);
    }
    console.log("");
  }
  return 0;
}

process.exit(main());