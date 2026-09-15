// tools/gen_dimension.js —— 维度层打标、校验与报表
// 用法：
//   node tools/gen_dimension.js           报表（stdout 摘要）
//   node tools/gen_dimension.js --check   仅校验，任一断言失败 exit 1（供门禁调用）
//   node tools/gen_dimension.js --report  另写完整报表到 /tmp/dimension_report.md
//
// 本工具**不写任何项目文件**：维度层是只读覆盖层，打标结果只在运行时求值。
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.resolve(__dirname, "..");
const A = path.join(ROOT, "assets");
const FILES = ["techs_extra.js", "techs_extend.js", "techs_more.js", "data.js"];

const args = process.argv.slice(2);
const CHECK = args.includes("--check");
const WANT_REPORT = args.includes("--report");

const ctx = vm.createContext({ console });
for (const f of FILES) vm.runInContext(fs.readFileSync(A + "/" + f, "utf8"), ctx, { filename: f });
vm.runInContext(fs.readFileSync(A + "/pages/dimension_data.js", "utf8"), ctx, { filename: "dimension_data.js" });
const TECHS = vm.runInContext("TECHS", ctx);
const D = vm.runInContext("DIMENSION", ctx);

const FAIL = [];
const fail = (m) => FAIL.push(m);
const ok = (m) => { if (!CHECK) console.log("  [OK] " + m); };

// ---------- 校验 0：注册表自身 ----------
const DC = Object.keys(D.disciplines);
const SUB = Object.keys(D.taskDomains);

// 0.1 每个域的门类必须存在
SUB.forEach((s) => { if (DC.indexOf(D.taskDomains[s].f) < 0) fail(`任务域 ${s} 的门类 ${D.taskDomains[s].f} 不在 disciplines`); });

// 0.2 heads 不重不漏，且覆盖 14 个泛化枢纽
const headSeen = {};
DC.forEach((k) => D.disciplines[k].heads.forEach((h) => {
  if (headSeen[h]) fail(`维度顶点 ${h} 重复挂载（${headSeen[h]} 与 ${k}）`);
  headSeen[h] = k;
}));
const HUB14 = ["mathematics", "chemistry", "physics", "algorithm", "statistics", "engineering",
  "writing", "optimization", "numerical", "molecular_bio", "materials", "genetics", "immunology", "language"];
HUB14.forEach((h) => { if (!headSeen[h]) fail(`泛化枢纽 ${h} 未挂任何门类（应全部转为维度顶点）`); });
if (Object.keys(headSeen).length !== 14) fail(`维度顶点总数 ${Object.keys(headSeen).length} ≠ 14`);
ok(`注册表：${DC.length} 门类 / ${SUB.length} 任务域 / ${Object.keys(headSeen).length} 维度顶点（14 个泛化枢纽全覆盖）`);

// 0.3 与 taxonomy 文件的域集合一致
const tax = JSON.parse(fs.readFileSync(path.join(ROOT, "analysis-engine/data/subcategory_taxonomy_v1.json"), "utf8"));
const taxKeys = [];
Object.keys(tax.categories).forEach((c) => tax.categories[c].tasks.forEach((t) => taxKeys.push(c + "/" + t.id)));
const missInLayer = taxKeys.filter((k) => SUB.indexOf(k) < 0);
const extraInLayer = SUB.filter((k) => taxKeys.indexOf(k) < 0);
if (missInLayer.length) fail(`taxonomy 有 ${missInLayer.length} 个域未在维度层登记：${missInLayer.join(", ")}`);
if (extraInLayer.length) fail(`维度层有 ${extraInLayer.length} 个域不在 taxonomy 中：${extraInLayer.join(", ")}`);
ok(`域集合与 subcategory_taxonomy_v1.json 一致（${taxKeys.length} 域）`);

// ---------- 校验 1：全库求解 ----------
const idSet = new Set(TECHS.map((t) => t.id));
const resolved = TECHS.map((t) => {
  const r = D.resolve(t.id, t);
  const sp = r.via.split("/");
  return { t: t, r: r, viaP: sp[0], viaS: sp[1] };
});

resolved.forEach(({ t, r, viaS }) => {
  if (DC.indexOf(r.field.primary) < 0) fail(`${t.id}: primary=${r.field.primary} 非法`);
  if (SUB.indexOf(r.sub) < 0) fail(`${t.id}: sub=${r.sub} 非法`);
  r.field.secondary.forEach((s) => { if (DC.indexOf(s) < 0) fail(`${t.id}: secondary=${s} 非法`); });
  if (r.field.secondary.indexOf(r.field.primary) >= 0) fail(`${t.id}: secondary 与 primary 重复（${r.field.primary}）`);
  // sub 的域必须与节点 category 同属一类（taxonomy 的定义：同 category 内按任务归入唯一子分类）
  if (viaS !== "ov" && r.sub.split("/")[0] !== t.category) {
    fail(`${t.id}: sub=${r.sub} 与 category=${t.category} 不同类`);
  }
});
ok(`全库 ${TECHS.length} 条：primary / sub / secondary 取值合法，且 sub 与 category 同类`);

// overrides 的 id 必须存在
Object.keys(D.overrides).forEach((k) => { if (!idSet.has(k)) fail(`overrides 引用了不存在的 id：${k}`); });
ok(`overrides 引用检查（当前 ${Object.keys(D.overrides).length} 条）`);

// ---------- 报表统计 ----------
const byViaP = {}, byViaS = {}, byDisc = {}, bySub = {}, catDisc = {};
resolved.forEach(({ t, r, viaP, viaS }) => {
  byViaP[viaP] = (byViaP[viaP] || 0) + 1;
  byViaS[viaS] = (byViaS[viaS] || 0) + 1;
  byDisc[r.field.primary] = (byDisc[r.field.primary] || 0) + 1;
  bySub[r.sub] = (bySub[r.sub] || 0) + 1;
  const k = (t.category || "") + "→" + r.field.primary;
  catDisc[k] = (catDisc[k] || 0) + 1;
});

const overrideCount = Object.keys(D.overrides).length;
const mechanical = resolved.length - overrideCount;

// ---------- 门类级下游计数（旧平面模型下即「归属被写成边」的规模） ----------
const down = {};
TECHS.forEach((t) => { down[t.id] = 0; });
TECHS.forEach((t) => (t.dependsOn || []).forEach((d) => { if (down[d] !== undefined) down[d]++; }));
const hubEdges = [];
DC.forEach((k) => D.disciplines[k].heads.forEach((h) => hubEdges.push({ disc: k, head: h, down: down[h] || 0 })));
hubEdges.sort((a, b) => b.down - a.down);
const hubTotal = hubEdges.reduce((s, x) => s + x.down, 0);

// ---------- 输出 ----------
if (!CHECK) {
  console.log("");
  console.log("  --- 主维度求解路径 ---");
  Object.keys(byViaP).sort((a, b) => byViaP[b] - byViaP[a]).forEach((v) => console.log(`  ${v.padEnd(14)} ${String(byViaP[v]).padStart(5)}`));
  console.log("  --- 任务域求解路径 ---");
  Object.keys(byViaS).sort((a, b) => byViaS[b] - byViaS[a]).forEach((v) => console.log(`  ${v.padEnd(14)} ${String(byViaS[v]).padStart(5)}`));
  console.log("");
  console.log("  --- 学科门类分布（共 " + DC.length + "） ---");
  DC.slice().sort((a, b) => (byDisc[b] || 0) - (byDisc[a] || 0)).forEach((k) =>
    console.log(`  ${k.padEnd(8)} ${D.disciplines[k].name.padEnd(6)} ${String(byDisc[k] || 0).padStart(5)}  ${((byDisc[k] || 0) / TECHS.length * 100).toFixed(1)}%`));
  console.log("");
  console.log("  --- 任务域命中数（前 18 / 共 " + SUB.length + "） ---");
  SUB.slice().sort((a, b) => (bySub[b] || 0) - (bySub[a] || 0)).slice(0, 18).forEach((s) =>
    console.log(`  ${s.padEnd(28)} ${String(bySub[s] || 0).padStart(4)}`));
  const empty = SUB.filter((s) => !bySub[s]);
  console.log(`  零命中域 ${empty.length} 个：${empty.join(", ") || "无"}`);
  console.log("");
  console.log("  --- category → primary 交叉（仅列 ≥10 条） ---");
  Object.keys(catDisc).sort((a, b) => catDisc[b] - catDisc[a]).filter((k) => catDisc[k] >= 10)
    .forEach((k) => console.log(`  ${k.padEnd(18)} ${String(catDisc[k]).padStart(5)}`));
  console.log("");
  console.log("  --- 维度顶点下游计数（旧平面模型的「归属边」规模） ---");
  hubEdges.forEach((x) => console.log(`  ${x.disc.padEnd(8)} ${x.head.padEnd(14)} ${String(x.down).padStart(4)}`));
  console.log(`  合计入边 ${hubTotal}`);
}

if (WANT_REPORT) {
  const L = [];
  L.push("# 维度层打标报表 · D0");
  L.push("");
  L.push(`生成时间 ${new Date().toISOString()} ｜ 主管线 ${TECHS.length} 节点`);
  L.push("");
  L.push("## 一、规模");
  L.push("");
  L.push(`- 学科门类 **${DC.length}** 个，其中 8 个锚定 14 个泛化枢纽；维度顶点 **${Object.keys(headSeen).length}** 个`);
  L.push(`- 技术任务域 **${SUB.length}** 个（与 \`subcategory_taxonomy_v1.json\` 一致）`);
  L.push(`- 求解路径（主维度）：${Object.keys(byViaP).sort((a, b) => byViaP[b] - byViaP[a]).map((v) => `${v} ${byViaP[v]}`).join(" / ")}`);
  L.push(`- 求解路径（任务域）：${Object.keys(byViaS).sort((a, b) => byViaS[b] - byViaS[a]).map((v) => `${v} ${byViaS[v]}`).join(" / ")}`);
  L.push(`- 逐条覆盖 ${overrideCount} 条 / 机械兜底 ${mechanical} 条`);
  L.push("");
  L.push("## 二、学科门类分布");
  L.push("");
  L.push("| 门类 | 名称 | 节点数 | 占比 | 维度顶点 | 顶点入边合计 |");
  L.push("|---|---|---|---|---|---|");
  DC.slice().sort((a, b) => (byDisc[b] || 0) - (byDisc[a] || 0)).forEach((k) => {
    const hs = D.disciplines[k].heads;
    const e = hubEdges.filter((x) => x.disc === k).reduce((s, x) => s + x.down, 0);
    L.push(`| ${k} | ${D.disciplines[k].name} | ${byDisc[k] || 0} | ${((byDisc[k] || 0) / TECHS.length * 100).toFixed(1)}% | ${hs.length ? hs.join(" / ") : "—"} | ${e} |`);
  });
  L.push("");
  L.push("## 三、任务域分布（全 88）");
  L.push("");
  L.push("| 任务域 | 名称 | 门类 | 节点数 |");
  L.push("|---|---|---|---|");
  SUB.slice().sort((a, b) => (bySub[b] || 0) - (bySub[a] || 0)).forEach((s) =>
    L.push(`| ${s} | ${D.taskDomains[s].n} | ${D.taskDomains[s].f} | ${bySub[s] || 0} |`));
  L.push("");
  L.push("## 四、category → primary 交叉");
  L.push("");
  L.push("| 组合 | 节点数 |");
  L.push("|---|---|");
  Object.keys(catDisc).sort((a, b) => catDisc[b] - catDisc[a]).forEach((k) => L.push(`| ${k} | ${catDisc[k]} |`));
  L.push("");
  L.push("## 五、维度顶点与旧「归属边」规模");
  L.push("");
  L.push("| 门类 | 维度顶点 | 当前下游入边 |");
  L.push("|---|---|---|");
  hubEdges.forEach((x) => L.push(`| ${x.disc} | ${x.head} | ${x.down} |`));
  L.push("");
  L.push(`合计 **${hubTotal}** 条 —— 即旧平面模型下「学科归属被写成依赖边」的规模。`);
  fs.writeFileSync("/tmp/dimension_report.md", L.join("\n") + "\n");
  console.log("\n  报表已写入 /tmp/dimension_report.md");
}

// ---------- 结论 ----------
console.log("");
if (FAIL.length) {
  console.log(`  维度层校验：${FAIL.length} 项失败`);
  FAIL.slice(0, 30).forEach((m) => console.log("   ✗ " + m));
  process.exit(1);
}
console.log(`  维度层校验：全部通过（${TECHS.length} 节点 · ${DC.length} 门类 · ${SUB.length} 任务域 · 14 维度顶点）`);
