/* ============================================================
   多学科技术页 · 数据构建器（构建时计算，运行时零计算）
   用法：node tools/gen_multidisciplinary.js            # 干跑，只打印
        node tools/gen_multidisciplinary.js --write      # 写出 assets/pages/multidisciplinary_data.js

   跨学科度口径（**口径丙**，批次 P1 裁定）：
     closure = dependsOn 上游闭包（记忆化 DFS，防环）
     剔除：① category === "basic" 的节点 ② 14 个维度顶点
     —— 不剔 basic 就剔不掉 writing（writing 的 category 是 info），symbol 会混进所有节点。
   ⚠️ 该指标不可靠的两种情形（用它圈定前必读）：
     ① 边的覆盖不完整（如 automobile 汽车、ai 人工智能的直接前置极少）→ 不能纯靠计算圈定
     ② 节点的 summary / significance 是派生物，不作判据
   ============================================================ */
"use strict";
const fs = require("fs"), vm = require("vm"), path = require("path");

const ROOT = path.resolve(__dirname, "..");
process.chdir(ROOT);

/* ---------- 候选清单（人工圈定 + 计算预选，口径 C：「计算预选 + 删补」） ----------
   source: pre = 计算预选（口径丙 ≥5 门类，25 条）；add = 本次删补新增
   group   分组键（见 GROUPS）
   note    收录理由（用于页面「收录说明」列） */
const GROUPS = [
  { key: "transport", name: "交通载具" },
  { key: "machine",   name: "智能机器" },
  { key: "ai",        name: "人工智能" },
  { key: "infra",     name: "信息基础设施" },
  { key: "space",     name: "太空与未来构想" },
  { key: "military",  name: "军事技术" },
  { key: "build",     name: "建造与测绘" }
];

const PICK = [
  // ---- 交通载具 ----
  ["automobile",         "transport", "add", "用户点名；计算口径下仅 2 门类（直接前置 3 条），属「边覆盖不完整」"],
  ["tr_evcar",           "transport", "add", "用户点名（电动汽车）"],
  ["autonomous_driving", "transport", "add", "用户点名（自动驾驶）；库内另有 self_driving（2030）为重复项，取更早者"],
  ["flying_car",         "transport", "pre", "计算预选"],
  ["drone",              "transport", "pre", "计算预选；无人机族主干"],
  ["tr_cargo_drone",     "transport", "pre", "计算预选"],
  ["tr_passdrone",       "transport", "pre", "计算预选"],

  // ---- 智能机器 ----
  ["robot",              "machine",   "add", "用户点名（机器人）"],
  ["humanoid",           "machine",   "add", "用户点名（人形机器人）"],
  ["mfg_cobot",          "machine",   "add", "人工清单（协作机器人）"],
  ["bio_surgerobot",     "machine",   "add", "人工清单（手术机器人）"],
  ["robot_vacuum",       "machine",   "add", "人工清单（家用扫地机器人）"],
  ["smart_mower",        "machine",   "pre", "计算预选；人工清单亦列"],

  // ---- 人工智能 ----
  ["ai",                 "ai",        "add", "用户点名；计算口径下仅 3 门类（直接前置 1 条），属「边覆盖不完整」"],
  ["agi",                "ai",        "add", "人工清单（通用人工智能）"],
  ["inf_agent",          "ai",        "add", "人工清单（智能体）"],
  ["mil_aiwar",          "ai",        "pre", "计算预选；人工清单亦列（军事人工智能）"],

  // ---- 信息基础设施 ----
  ["internet",           "infra",     "add", "人工清单（互联网）"],
  ["smartphone",         "infra",     "add", "人工清单（智能手机）"],
  ["ene_smartgrid",      "infra",     "add", "人工清单（智能电网）"],
  ["bld_smartb",         "infra",     "add", "人工清单（智能建筑）"],

  // ---- 太空与未来构想 ----
  ["space_habitat",      "space",     "pre", "计算预选；用户指定以「太空居住」代表「太空旅行」"],
  ["lunar_base",         "space",     "pre", "计算预选；人工清单亦列"],
  ["mars_colony",        "space",     "pre", "计算预选；人工清单亦列"],
  ["spacecraft",         "space",     "add", "人工清单（航天器）"],
  ["tr_shuttle",         "space",     "add", "人工清单（航天飞机）"],
  ["space_station",      "space",     "add", "人工清单（空间站）"],
  ["tr_reusablerocket",  "space",     "add", "人工清单（可回收火箭）；库内另有 reusable_rocket（2025）为重复项，取更早者"],
  ["starship",           "space",     "add", "人工清单（巨型火箭）"],
  ["dyson_sphere",       "space",     "add", "人工清单（戴森球）"],
  ["nanobot_swarm",      "space",     "add", "人工清单（纳米机器人）"],

  // ---- 军事技术 ----
  ["mil_ballistic",      "military",  "pre", "计算预选"],
  ["mil_sam",            "military",  "pre", "计算预选"],
  ["mil_cruise",         "military",  "pre", "计算预选"],
  ["mil_atgm",           "military",  "pre", "计算预选"],
  ["mil_missiledef",     "military",  "pre", "计算预选"],
  ["mil_satrec",         "military",  "pre", "计算预选"],
  ["mil_loitering",      "military",  "pre", "计算预选"],
  ["mil_hypersonicm",    "military",  "pre", "计算预选"],
  ["mil_triad",          "military",  "pre", "计算预选"],
  ["autonomous_weapon",  "military",  "pre", "计算预选；用户裁定「军用武器收录」"],
  ["mil_loyalwingman",   "military",  "pre", "计算预选"],
  ["mil_swarm",          "military",  "pre", "计算预选"],

  // ---- 建造与测绘 ----
  ["bld_dronesurvey",    "build",     "pre", "计算预选"]
];

/* 计算预选 25 条中被删除的条目（口径 C 的「删」） */
const DELETED = [
  ["mil_irguid",     "红外制导", "IR Guidance", 1950, "组件级技术（制导方式），非「多学科技术系统」；入选 5 门类主要来自闭包中的材料与工程"],
  ["mil_glider",     "高超滑翔体", "Hypersonic Glide Vehicle", 2010, "与 mil_hypersonicm 高超声速导弹构成同一武器系统的两个部件（弹 + 滑翔体），同页并列会重复计数"],
  ["tr_personalair", "个人飞行器", "Personal Aerial Vehicle", 2010, "与 flying_car 飞行汽车（2045）语义重叠，且同为 transport/urban 任务域"]
];

/* ---------- 加载数据 ---------- */
const ctx = vm.createContext({ console, window: {} });
for (const f of ["assets/techs_extra.js", "assets/techs_extend.js", "assets/techs_more.js", "assets/data.js",
                 "assets/pages/dimension_data.js"]) {
  vm.runInContext(fs.readFileSync(f, "utf8"), ctx, { filename: f });
}
const TECHS = vm.runInContext("TECHS", ctx);
const D = vm.runInContext("window.DIMENSION", ctx);

const M = {}; TECHS.forEach(t => M[t.id] = t);
const HEADS = new Set();
const DISC_ORDER = [];
for (const k in D.disciplines) { DISC_ORDER.push(k); (D.disciplines[k].heads || []).forEach(h => HEADS.add(h)); }

const F = {};
TECHS.forEach(t => { F[t.id] = D.resolve(t.id, t).field.primary; });

const cache = {};
function up(id, st) {
  if (cache[id]) return cache[id];
  if (st.has(id)) return new Set();
  st.add(id);
  const o = new Set();
  for (const p of (M[id] && M[id].dependsOn) || []) { o.add(p); for (const q of up(p, st)) o.add(q); }
  st.delete(id);
  cache[id] = o;
  return o;
}
/* 口径丙排除项 */
const EX = q => HEADS.has(q) || (M[q] && M[q].category === "basic");

/* ---------- 断言 ---------- */
const fail = [];
function need(cond, msg) { if (!cond) fail.push(msg); }

const groups = new Set(GROUPS.map(g => g.key));
const seen = new Set();
const nodes = {};          // id -> [zh, en, year, discKey]
const items = [];
const coreZero = [];

for (const [id, grp, source, note] of PICK) {
  const t = M[id];
  need(!!t, `候选 ${id} 在主管线中不存在`);
  if (!t) continue;
  need(!seen.has(id), `候选 ${id} 重复`);
  seen.add(id);
  need(groups.has(grp), `候选 ${id} 的分组 ${grp} 不在 GROUPS 内`);

  const cl = [...up(id, new Set())].filter(q => !EX(q));
  const byDisc = {};
  for (const q of cl) { const f = F[q]; if (f) (byDisc[f] = byDisc[f] || []).push(q); }
  const discKeys = DISC_ORDER.filter(k => byDisc[k] && byDisc[k].length);

  const directClean = (t.dependsOn || []).filter(q => M[q] && !EX(q));
  const downClean = TECHS.filter(x => (x.dependsOn || []).includes(id)).map(x => x.id);

  const years = cl.map(q => M[q].year).filter(y => typeof y === "number");
  const discArr = discKeys.map(k => [k, byDisc[k].length]).sort((a, b) => b[1] - a[1]);

  const parts = {};
  for (const k of discKeys) {
    parts[k] = byDisc[k].slice().sort((a, b) => (M[a].year || 0) - (M[b].year || 0));
  }
  for (const q of cl) nodes[q] = [M[q].name || q, M[q].en || "", M[q].year, F[q] || ""];

  if (directClean.length === 0) {
    coreZero.push({ id, zh: t.name, en: t.en || "", year: t.year, discCount: discKeys.length,
      note: "直接前置全部为「学科级顶点 / 基本类」—— 属 R8 违规形态，页面上单列提示，不并入正常统计。" });
  }

  items.push({
    id, zh: t.name, en: t.en || "", year: t.year, cat: t.category, catName: (t.category || ""),
    group: grp, source, note,
    discCount: discKeys.length, closureSize: cl.length,
    disc: discArr,
    parts,
    direct: directClean,
    down: downClean,
    yearMin: years.length ? Math.min.apply(null, years) : null,
    yearMax: years.length ? Math.max.apply(null, years) : null
  });
}
for (const q of Object.keys(nodes)) { /* nodes 已填 */ }
for (const d of DELETED) {
  need(!!M[d[0]], `被删条目 ${d[0]} 在主管线中不存在`);
  need(!seen.has(d[0]), `被删条目 ${d[0]} 同时出现在候选清单中`);
}

/* 分组覆盖检查：每组至少 1 条 */
for (const g of GROUPS) need(items.some(x => x.group === g.key), `分组 ${g.key} 无成员`);

/* 口径丙分布复核（与 /tmp/xdisc2.js 一致）：≥5 门类应为 25 条 */
const distAll = {};
for (const t of TECHS) {
  const cl = [...up(t.id, new Set())].filter(q => !EX(q));
  const n = new Set(cl.map(q => F[q]).filter(Boolean)).size;
  distAll[n] = (distAll[n] || 0) + 1;
}
need(distAll[5] === 25, `口径丙 5 门类应为 25 条，实测 ${distAll[5]}`);
need((distAll[6] || 0) === 0, `口径丙 6 门类应为 0 条，实测 ${distAll[6]}`);
need(TECHS.length === 2267, `节点总数应为 2,267，实测 ${TECHS.length}`);

if (fail.length) { console.error("[FAIL] 断言未通过：\n  - " + fail.join("\n  - ")); process.exit(1); }

/* ---------- 输出 ---------- */
const disciplines = DISC_ORDER.map(k => ({ key: k, name: D.disciplines[k].name, en: D.disciplines[k].en || "" }));
const byGroup = GROUPS.map(g => ({ key: g.key, name: g.name, n: items.filter(x => x.group === g.key).length }));

const out = {
  meta: {
    generated: "2026-09-15",
    title: "多学科技术",
    criterion: "沿 dependsOn 取上游闭包，剔除 category=basic 的节点与 14 个维度顶点后，统计闭包内出现的学科门类数",
    criterionKey: "口径丙",
    caveat: "该指标不可靠：边的覆盖不完整（automobile 汽车仅 2 门类、ai 人工智能仅 3 门类），不能纯靠计算圈定 —— 故采用「计算预选 + 人工删补」",
    baseline: { nodes: 2267, edges: 6169 },
    pickMethod: "口径 C：计算预选（口径丙 ≥5 门类，25 条）+ 删 3 条 + 补 21 条",
    preCount: PICK.filter(x => x[2] === "pre").length,
    addCount: PICK.filter(x => x[2] === "add").length,
    total: items.length
  },
  disciplines,
  groups: byGroup,
  nodes,
  items,
  deleted: DELETED.map(d => ({ id: d[0], zh: d[1], en: d[2], year: d[3], reason: d[4] })),
  coreZero,
  distribution: distAll
};

const js = "/* 自动生成，请勿手改 —— 由 tools/gen_multidisciplinary.js 写出 */\n" +
  "window.MD_DATA = " + JSON.stringify(out) + ";\n";

console.log("=== 多学科技术 · 数据构建 ===");
console.log("候选总数      : " + items.length + "（预选 " + out.meta.preCount + " + 补 " + out.meta.addCount + "）");
console.log("被删条目      : " + DELETED.length + " → " + DELETED.map(d => d[0]).join(", "));
console.log("核心为 0 节点 : " + coreZero.length + (coreZero.length ? " → " + coreZero.map(x => x.id).join(", ") : ""));
console.log("闭包节点索引  : " + Object.keys(nodes).length + " 个");
console.log("门类数分布    : " + Object.keys(distAll).sort((a, b) => b - a).map(k => k + "门类:" + distAll[k]).join("  "));
console.log("");
console.log("分组统计：");
byGroup.forEach(g => console.log("  " + g.name.padEnd(8, "　") + " " + String(g.n).padStart(3) + " 条"));
console.log("");
console.log("逐条（门类数 / 闭包 / 年）：");
items.slice().sort((a, b) => b.discCount - a.discCount || b.closureSize - a.closureSize)
  .forEach(x => console.log("  " + x.id.padEnd(21) + " " + x.discCount + "门类  闭包" + String(x.closureSize).padStart(3) +
    "  " + String(x.year).padStart(5) + "  " + x.zh));
console.log("");
console.log("文件体积      : " + Buffer.byteLength(js, "utf8") + " 字节");

if (process.argv.indexOf("--write") >= 0) {
  fs.writeFileSync("assets/pages/multidisciplinary_data.js", js);
  console.log("[写入] assets/pages/multidisciplinary_data.js");
} else {
  console.log("[干跑] 未写盘。加 --write 执行。");
}
