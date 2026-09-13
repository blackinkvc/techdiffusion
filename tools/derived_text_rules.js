/*
 * 派生文案规则库（derived text rules）
 * ------------------------------------------------------------------
 * 三族「由依赖网络派生出的节点文案」的公式与句子骨架的唯一真相源。
 * 与既有 tools/midtech_rules.js 同构：本文件只放纯规则，扫描 / 报告 / 写盘由 regen_text.js 负责。
 *
 * 三族的出处（务必与生成器逐字一致，改生成器须同步改此处）：
 *   A 族  tools/upgrade_stubs.js:50-84 upgrade()   / tools/disassemble.js:50-76 makeText()
 *        —— 产出 assets/techs_extra.js 的 summary / significance / views[].text
 *   B 族  tools/extend_net.js:400-425 deepen()      —— 追加深化句到 assets/techs_extend.js 的 summary
 *   C 族  tools/gen_1000.js:344-358 summarize()     —— 合成 assets/techs_more.js 的 summary
 *
 * 共同性质：文本所写的前置与下游 =「生成时刻」dependsOn 与反图的快照。
 *   网络经清理后文本未同步，即产生「写着已不存在的前置 / 下游」的失真。
 *
 * ⚠️ 历史修正（v0.9.25）：家族 A 的槽位通配原为 `[^\s，。；、（）()「」]{1,28}`，
 *   其中 `\s` 的排除使「ABS 树脂」「工业 4.0」「遗传学 / DNA」等含空格名称无法匹配，
 *   整句被判为「手写散文」而跳过 —— 这是 v0.9.24 漏改 38 个节点的直接原因。
 *   现改为 `[^\n，。；、（）()「」]{1,40}`（仅排除换行与句读符号）。
 */
"use strict";

// ============ 公用 ============
const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const hash = s => { let h = 0; for (const c of s) h = (h * 31 + c.charCodeAt(0)) >>> 0; return h; };
const fixName = name => {
  if (!name) return name;
  if (/[A-Za-z]/.test(name)) {
    const m = name.match(/^[一-龥，、与和\s]*/);
    let zh = m ? m[0] : "";
    zh = zh.replace(/[与和、\s]+$/, "").trim();
    if (zh.length >= 2) return zh;
  }
  return name;
};

// 槽位通配：单项 / 枚举 / 允许「既有技术积累」退化词
const ITEM = "[^\\n，。；、（）()「」]{1,40}";
const LIST = ITEM + "(?:、" + ITEM + ")*";
const LIST_OR_FALLBACK = "(?:" + LIST + "|既有技术积累)";
/** 家族 C 用：purpose / 上游串可能含「，、」等，需宽松槽位（惰性） */
const SLOT_LOOSE = "[\\s\\S]{1,200}?";

// ============ 家族 A：upgrade_stubs.js / disassemble.js ============
const DOMAIN_A = {
  basic: "科学基础与方法", material: "材料体系", energy: "能量形式", manufact: "制造与工具",
  transport: "交通运载", info: "信息通信", life: "生命与医疗", build: "建筑建造", military: "军事技术"
};

function partsA(t, E) {
  const zh = fixName(t.name);
  const ups = (t.dependsOn || []).map(E.nameOf).filter(Boolean);
  const downs = (E.downMap[t.id] || []).map(E.nameOf).filter(Boolean);
  const apps = (t.applications || []).slice(0, 3);
  const domain = DOMAIN_A[t.category] || t.category;
  const date = t.date || "";
  return {
    zh, ups, downs, domain, date,
    upsTop: ups[0] || domain,
    appsTop: apps[0] || domain,
    upsStr: ups.length ? ups.slice(0, 3).join("、") : "既有技术积累",
    downsStr: downs.length ? downs.slice(0, 3).join("、") : "",
    appsStr: apps.length ? apps.slice(0, 2).join("、") : domain,
    view1Period: (t.views && t.views[0] && t.views[0].period) || ""
  };
}
/** 重算族 A 的四个文案字段 */
function computeA(t, E) {
  const p = partsA(t, E);
  let summary;
  if (p.downs.length && hash(t.id) % 2 === 0) {
    summary = `${p.zh}约 ${p.date} 成熟，建立在 ${p.upsStr} 之上完成关键突破；其能力延伸到 ${p.appsStr}，并为 ${p.downsStr} 的发展铺平了道路。`;
  } else if (p.downs.length) {
    summary = `${p.zh}在 ${p.date} 前后成形，依托 ${p.upsStr} 把 ${p.appsStr} 落到实处，并成为 ${p.domain} 中承上启下的一环，直接支撑了 ${p.downsStr} 等后续技术。`;
  } else {
    summary = `${p.zh}约 ${p.date} 出现，建立在 ${p.upsStr} 之上；它把 ${p.appsStr} 变成可稳定复现的能力，是 ${p.domain} 中从经验走向方法的关键一步。`;
  }
  if (summary.length < 60) summary += `其成熟标志着 ${p.domain} 从零散尝试走向可复用的方法。`;
  const significance = `${p.zh}把 ${p.upsTop} 与 ${p.appsTop} 连接起来，是 ${p.domain} 中从「可能」走向「可用」的关键节点${p.downs.length ? "，并直接催生了 " + p.downsStr : ""}。`;
  const views = [
    `${p.zh}在 ${p.date} 前后出现，依托 ${p.upsTop} 解决了 ${p.domain} 中的具体难题，使相关能力第一次可被稳定复现。`,
    `今天，${p.zh}仍是 ${p.appsTop} 的底层支撑${p.downs.length ? "，并持续影响 " + p.downsStr : "，并作为 " + p.domain + " 的基础能力持续发挥作用"}。`
  ];
  return { summary, significance, views };
}
/** 族 A 的完整模板骨架（用于判定「这一句是模板句、可安全重写」） */
function shapesA(t, E) {
  const p = partsA(t, E);
  const S = "其成熟标志着 " + esc(p.domain) + " 从零散尝试走向可复用的方法。";
  return {
    summary: [
      new RegExp("^" + esc(`${p.zh}约 ${p.date} 成熟，建立在 `) + LIST_OR_FALLBACK + esc(" 之上完成关键突破；其能力延伸到 ") + LIST + esc("，并为 ") + LIST + esc(" 的发展铺平了道路。") + "(?:" + S + ")?$"),
      new RegExp("^" + esc(`${p.zh}在 ${p.date} 前后成形，依托 `) + LIST_OR_FALLBACK + esc(" 把 ") + LIST + esc(" 落到实处，并成为 ") + esc(p.domain) + esc(" 中承上启下的一环，直接支撑了 ") + LIST + esc(" 等后续技术。") + "(?:" + S + ")?$"),
      new RegExp("^" + esc(`${p.zh}约 ${p.date} 出现，建立在 `) + LIST_OR_FALLBACK + esc(" 之上；它把 ") + LIST + esc(" 变成可稳定复现的能力，是 ") + esc(p.domain) + esc(" 中从经验走向方法的关键一步。") + "(?:" + S + ")?$")
    ],
    significance: [
      new RegExp("^" + esc(`${p.zh}把 `) + LIST_OR_FALLBACK + esc(" 与 ") + LIST_OR_FALLBACK + esc(" 连接起来，是 ") + esc(p.domain) + esc(" 中从「可能」走向「可用」的关键节点，并直接催生了 ") + LIST + "。$"),
      new RegExp("^" + esc(`${p.zh}把 `) + LIST_OR_FALLBACK + esc(" 与 ") + LIST_OR_FALLBACK + esc(" 连接起来，是 ") + esc(p.domain) + esc(" 中从「可能」走向「可用」的关键节点") + "。$")
    ],
    views0: [
      new RegExp("^" + esc(`${p.zh}在 ${p.date} 前后出现，依托 `) + LIST_OR_FALLBACK + esc(" 解决了 ") + esc(p.domain) + esc(" 中的具体难题，使相关能力第一次可被稳定复现。") + "$")
    ],
    views1: [
      new RegExp("^今天，" + esc(p.zh) + esc("仍是 ") + LIST_OR_FALLBACK + esc(" 的底层支撑，并持续影响 ") + LIST + "。$"),
      new RegExp("^今天，" + esc(p.zh) + esc("仍是 ") + LIST_OR_FALLBACK + esc(" 的底层支撑，并作为 ") + esc(p.domain) + esc(" 的基础能力持续发挥作用。") + "$")
    ]
  };
}
/** 族 A 的 period 字段（视图时段名）：取自 t.views[0].period，重算时保持不变 */
function periodA(t) { return (t.views && t.views[0] && t.views[0].period) || ""; }

// ============ 家族 B：extend_net.js deepen() ============
// 逐字照搬 tools/extend_net.js:388-389（注意与族 A 不同：ancient=上古、medieval=中古、future=未来/科幻）
const ERA_NAME_B = { prehistoric: "史前", ancient: "上古", classical: "古典", medieval: "中古", earlymodern: "近代早期", industrial: "工业时代", electrical: "电气时代", info: "信息时代", intelligent: "智能时代", future: "未来/科幻" };
const DOMAIN_B = { basic: "科学基础与方法", material: "材料体系", energy: "能量形式", manufact: "制造与工具", transport: "交通运载", info: "信息通信", life: "生命与医疗", build: "建筑建造", military: "军事技术", future: "未来/科幻设想" };

function deepenAdd(t, E) {
  const ups = (t.dependsOn || []).map(E.nameOf).filter(Boolean);
  const downs = (E.downMap[t.id] || []).map(E.nameOf).filter(Boolean);
  const dom = DOMAIN_B[t.category] || t.category;
  const era = ERA_NAME_B[t.era] || t.era;
  const date = t.date || "";
  const upsStr = ups.length ? ups.slice(0, 3).join("、") : "既有技术积累";
  const downsStr = downs.length ? downs.slice(0, 3).join("、") : "";
  const h = hash(t.id);
  if (ups.length && downs.length) return (h % 2 === 0)
    ? `它建立在${upsStr}之上，约 ${date} 成形于${era}，把${dom}中的关键能力落到实处，并直接支撑了${downsStr}等后续技术。`
    : `依托${upsStr}，它在${era}（${date}）把相关能力从经验推向方法，成为${dom}中承上启下的一环，直接催生了${downsStr}等发展。`;
  if (ups.length) return (h % 2 === 0)
    ? `它建立在${upsStr}之上，约 ${date} 出现于${era}，把${dom}的相关能力第一次稳定下来，是后来技术谱系的基础环节。`
    : `依托${upsStr}，它在${era}（${date}）解决了${dom}中的具体难题，使相应能力得以被反复复用。`;
  return `它约 ${date} 出现于${era}的${dom}，填补了早期能力图谱的空白，为后续复杂技术的展开提供了前提。`;
}
/** 族 B 追加句的 5 种骨架（含可选尾句），用于判定「这句深化是生成器产物、可安全重算」 */
function deepenShapes(t, E) {
  const dom = DOMAIN_B[t.category] || t.category;
  const era = ERA_NAME_B[t.era] || t.era;
  const date = t.date || "";
  const HEAD = "它建立在" + LIST + "之上，约 " + esc(date) + " 成形于" + esc(era) + "，把" + esc(dom) + "中的关键能力落到实处，并直接支撑了" + LIST + "等后续技术。";
  const HEAD2 = "依托" + LIST + "，它在" + esc(era) + "（" + esc(date) + "）把相关能力从经验推向方法，成为" + esc(dom) + "中承上启下的一环，直接催生了" + LIST + "等发展。";
  const HEAD3 = "它建立在" + LIST + "之上，约 " + esc(date) + " 出现于" + esc(era) + "，把" + esc(dom) + "的相关能力第一次稳定下来，是后来技术谱系的基础环节。";
  const HEAD4 = "依托" + LIST + "，它在" + esc(era) + "（" + esc(date) + "）解决了" + esc(dom) + "中的具体难题，使相应能力得以被反复复用。";
  const HEAD5 = "它约 " + esc(date) + " 出现于" + esc(era) + "的" + esc(dom) + "，填补了早期能力图谱的空白，为后续复杂技术的展开提供了前提。";
  const TAIL = "其成熟让" + esc(dom) + "从零散尝试走向可复用的方法。";
  return [HEAD, HEAD2, HEAD3, HEAD4, HEAD5].map(h => [
    new RegExp("^" + h + "(?:" + TAIL + ")?$"),
    // 仅尾句（base 已含完整 add 的情况不会出现，保留用于识别）
    new RegExp("^" + h + TAIL + "$")
  ]);
}
/**
 * 族 B 重算：返回 { base, summary } —— 识别不到「手写base + 生成器深化句」结构则返回 null
 * 结构：summary = base + "，" + add [+ tail]，其中 base 为手写简介去掉末尾「。」
 */
function computeB(t, E) {
  const s = t.summary;
  if (typeof s !== "string" || !s) return null;
  const shapes = deepenShapes(t, E).map(x => x[0]);
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "，") continue;
    const rest = s.slice(i + 1);
    if (!shapes.some(re => re.test(rest))) continue;
    const base = s.slice(0, i);
    const dom = DOMAIN_B[t.category] || t.category;
    let neu = base + "，" + deepenAdd(t, E);
    if (neu.length < 80) neu += `其成熟让${dom}从零散尝试走向可复用的方法。`;
    return { base, summary: neu };
  }
  return null;
}

// ============ 家族 C：gen_1000.js summarize() ============
function summarize1000(t, E) {
  const catName = E.catNameOf(t.category) || "技术";
  const eraName = E.eraNameOf(t.era) || "";
  const up = (t.dependsOn || []).map(E.nameOf);
  const upStr = up.length ? up.join("、") : "基础原理";
  const p = t.purpose || "推进该领域的技术图景";
  const variants = [
    `以${upStr}为基，${t.name}专攻${p}，把${catName}的能力边界再往前推一步。`,
    `${t.name}把${upStr}的成果用于${p}，让${catName}从原理走向可部署的工程现实。`,
    `在${upStr}之上，${t.name}聚焦于${p}，是${catName}走向更精细、更可控的关键环节。`,
    `承接${upStr}，${t.name}解决${p}，填补了${catName}在${eraName}的一项具体空白。`
  ];
  return { variant: hash(t.id) % variants.length, summary: variants[hash(t.id) % variants.length] };
}
/** 族 C 4 变体骨架（用于判定「这句是生成器合成、可安全重算」） */
function shapesC(t, E) {
  const catName = E.catNameOf(t.category) || "技术";
  const eraName = E.eraNameOf(t.era) || "";
  const N = esc(t.name), CAT = esc(catName);
  return [
    new RegExp("^以" + SLOT_LOOSE + "为基，" + N + "专攻" + SLOT_LOOSE + "，把" + CAT + "的能力边界再往前推一步。$"),
    new RegExp("^" + N + "把" + SLOT_LOOSE + "的成果用于" + SLOT_LOOSE + "，让" + CAT + "从原理走向可部署的工程现实。$"),
    new RegExp("^在" + SLOT_LOOSE + "之上，" + N + "聚焦于" + SLOT_LOOSE + "，是" + CAT + "走向更精细、更可控的关键环节。$"),
    new RegExp("^承接" + SLOT_LOOSE + "，" + N + "解决" + SLOT_LOOSE + "，填补了" + CAT + "在" + esc(eraName) + "的一项具体空白。$")
  ];
}

module.exports = {
  esc, hash, fixName,
  ITEM, LIST, LIST_OR_FALLBACK, SLOT_LOOSE,
  DOMAIN_A, ERA_NAME_B, DOMAIN_B,
  partsA, computeA, shapesA, periodA,
  deepenAdd, deepenShapes, computeB,
  summarize1000, shapesC
};
