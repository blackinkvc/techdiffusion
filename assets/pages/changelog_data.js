/* ============================================================
   技术演化数据库 · 版本迭代记录（数据）
   - 由 changelog.html + assets/pages/changelog.js 渲染
   - 每次版本变更在此追加一条 entry（按时间正序，渲染时倒序展示最新在前）
   - 字段：date(YYYY-MM-DD) / version(语义版本) / type(变更类型) /
           title / summary(一句话) / changes(要点数组) / files(涉及文件,可选) /
           treeChange(科技树变更原因,可选)
   - type 取值：milestone 里程碑 | feature 功能 | data 数据 | fix 修复 | refactor 重构 | docs 文档
   - treeChange 字段（仅当本次变更实质影响「科技树」即依赖网/节点/边/评分/框架时填写）：
           { scope 影响范围, reason 变更原因(核心,必填), detail 具体动作/节点边评分影响(可选) }
   - 「科技树变更原因」为独立栏目：任何改变整张网络结构、规模、评分体系或推演框架的版本都要在此写清原因，
     便于回溯「树为何变成现在的样子」。该栏目由渲染器依据 treeChange 自动汇总，无需手动维护。
   说明：早期版本（v0.1.0–v0.8.0）日期依据项目文件时间戳与开发记录重建；
        自 2026-09-06 建立本页起，每次变更逐条如实登记。
   ============================================================ */
window.CHANGELOG = {
  meta: {
    title: "版本迭代记录",
    subtitle: "Version Changelog · 项目逐日变更档案",
    note: "本页记录「人类技术演化网络 · 规律挖掘与未来涌现推演」项目每次版本迭代所完成的工作。早期版本日期依据项目文件时间戳与开发记录重建；自 2026-09-06 建立本页起，每次变更逐条如实登记，便于回溯与协作。注：2026-09-08 校正了项目目的——从『科幻可行性评测』改为『拆解真实技术＋找规律＋推演未来涌现』。",
    maintainer: "WorkBuddy（自主构建 Agent）",
    roadmap: [
      "Phase 3 · 链接预测：✅ 已完成（v0.9.9 方向修正后）——补全 25 条高可信近因前提边；v0.9.8 初版 2883 条因依赖边方向读反已回滚（详见 v0.9.9）。",
      "Phase 4 · 站点集成：✅ 已完成（v0.9.2）——全量科技树可视化。",
      "Tier B · 内容补全：对 1750 年后归属明确的现代技术做 web 研究，补全发明者 / 地点。"
    ]
  },
  entries: [
    {
      date: "2026-08-26",
      version: "v0.1.0",
      type: "milestone",
      title: "静态站点骨架 v1.0",
      summary: "搭建「技术演化数据库」静态多页站点（MPA）骨架，确立档案/蓝图卷宗视觉体系。",
      treeChange: {
        scope: "原始技术库：≈2265 条技术 → 依赖图 2362 节点",
        reason: "项目启动首次建网：确立 9 大分类与历史分期体系，搭出 dependency 依赖边骨架。此后所有新增节点/边均以此为基础扩展，是整个科技树的「根版本」。",
        detail: "配套 tools/ 工具集（gen_techs / disassemble / relink_parents / extend_net 等）作为建网流水线；边 type=dependency。"
      },
      changes: [
        "确立 9 大分类（科学基础 / 材料 / 能源 / 制造 / 交通 / 信息 / 生命 / 建筑 / 军事）与历史分期体系。",
        "收录约 2265 条原始技术，构建 data.js 与依赖图 graph.json（2362 节点，边 type=dependency）。",
        "实现 D3 v7 力导向「科技树」可视化、分类检索、时间轴、来龙去脉推演等核心视图。",
        "打包 tech-evolution-db-v1.0，配套 tools/ 工具集（gen_techs / disassemble / relink_parents / extend_net / complete_net / writeback 等）。"
      ],
      files: ["assets/data.js", "assets/style.css", "assets/core.js", "assets/app.js", "tools/"]
    },
    {
      date: "2026-08-28",
      version: "v0.2.0",
      type: "feature",
      title: "全页面体系与关系网分析页",
      summary: "补全 12 个站点页面，建立统一导航、全局搜索与详情弹窗，上线关系网分析。",
      changes: [
        "新增 worldview / browse / timeline / tree / lineage / method / midtech / progress / sop / analysis / detail / index 共 12 个页面。",
        "由 shell.js 统一注入 header 导航（含当前页高亮）、全局检索框、详情弹窗与页脚计数。",
        "上线 analysis.html「关系网分析」：基于依赖网计算 PageRank / 中介中心性 / 组合诞生推演。",
        "确立《研发 SOP》与「方法论」页，作为内容质量门禁与升级标准。",
        "按《研发 SOP》将 993 条模板占位升级为非模板简介，清除套话与中英混排。"
      ],
      files: ["*.html", "assets/shell.js", "assets/app.js", "assets/pages/analysis.js", "assets/pages/method.js", "assets/pages/sop.js"]
    },
    {
      date: "2026-09-02",
      version: "v0.3.0",
      type: "data",
      title: "88 任务域骨架与子分类生成流水线",
      summary: "采用 88 任务域骨架，建立「任务域 → 子分类」生成流水线与统一标签体系。",
      treeChange: {
        scope: "全量网络规模：2362 → 13392 节点（+11031）",
        reason: "此前树仅覆盖原始库，缺失大量现代技术域。改用 88 任务域骨架 + 子分类生成流水线，按 DAG 年份排序规则批量扩充，使网络从「骨架」变为「近全量人类技术覆盖」。",
        detail: "存量打标 448、跳过 739（重复/无法归属）；目标约 20000 节点，本版未达标，留待 Tier B 内容补全。"
      },
      changes: [
        "在 analysis-engine/catalogs/ 落地 88 个任务域 catalog（cat/sub/families[].items[] 结构），含 _SCHEM.md 规范、_ANCHORS.json（110 锚点）、_filemap.json（88→文件名）。",
        "编写 gen_subcat.js 编译器：依 DAG 年份排序规则生成子分类条目并打统一 subcategory 标签。",
        "全库新增 11031 条技术条目，存量打标 448、跳过 739，全库达 13392 节点（目标约 20000）。",
        "打包 tech-evolution-project.zip 作为阶段性成果快照。"
      ],
      files: ["analysis-engine/catalogs/", "analysis-engine/gen_subcat.js", "analysis-engine/data/subcat/new_techs.json"]
    },
    {
      date: "2026-09-04",
      version: "v0.8.0",
      type: "milestone",
      title: "分析引擎 Phase 1/2：图算法 + 第一性原理评分",
      summary: "引入确定性 Python 分析引擎，完成依赖图门禁、图算法度量与第一性原理五维评分。",
      treeChange: {
        scope: "评分体系：13392 节点首次获得五维评分与 L1–L5 五档标记",
        reason: "此前科技树只有「节点 + 依赖边」，无法量化成熟度。引入第一性原理五维（D1 物理可行 / D2 时间成熟 / D3 依赖深度 / D4 系统织密 / D5 跨域辐射）后，树从『有无依赖』升级为『成熟度可量化、可推演未来档』。",
        detail: "L1 已实现 13168 / L1-基石 4 / L1-前沿 103 / L2 59 / L3 27 / L4 19 / L5 12；门禁全绿（断边 0 / 年份倒置 0 / DAG 无环）。"
      },
      changes: [
        "validate_final.py 最终质量门禁全绿：依赖边 17923、断边 0、同年依赖 0、年份倒置 0、DAG 无环、2927 弱连通分量。",
        "graph_engine.py（Phase 1）：PageRank / HITS / 拓扑层级 / 社区发现 / 割点 / 最长关键路径 → 最长演化链 211 跳（粉彩瓷→…→陶器→红铜→青铜）；割点 1859（化学 848 / 数学 784 / 电子计算机 643）。",
        "phase2_score.py（Phase 2）：第一性原理五维评分（D1 物理可行 / D2 时间成熟 / D3 依赖深度 / D4 系统织密 / D5 跨域辐射）→ L1 已实现 13168 / L1-基石 4 / L1-前沿 103 / L2 59 / L3 27 / L4 19 / L5 12。",
        "工具链决策落地：LLM 仅用于知识生成，图算法 / 统计 / 校验一律用确定性 Python（networkx），CPU 秒级，无需 GPU / 外部 API。",
        "修正若干算法缺陷：同年限规则、D5 跨域辐射方向（predecessors 下游）、阈值分离（成熟 vs 前沿）。"
      ],
      files: ["analysis-engine/validate_final.py", "analysis-engine/graph_engine.py", "analysis-engine/phase2_score.py", "analysis-engine/data/phase1_report.md", "analysis-engine/data/phase2_report.md"]
    },
    {
      date: "2026-09-06",
      version: "v0.9.0",
      type: "feature",
      title: "新增「版本迭代」变更日志页（本页）",
      summary: "建立项目逐日 / 逐次变更档案，集成至全站导航，并持续记录后续所有迭代。",
      changes: [
        "新增 changelog.html 页面 + assets/pages/changelog.js 渲染器 + assets/pages/changelog_data.js 数据。",
        "在 shell.js 主导航新增「版本迭代」入口；首页快速导航同步补充。",
        "采用数据驱动的变更条目结构（date / version / type / title / summary / changes / files），便于后续每次变更直接追加一条。",
        "回填 v0.1.0–v0.8.0 关键里程碑（据项目文件时间戳与开发记录重建），自此起逐条如实登记。",
        "注：v1.0.0 预留给「站点集成（Phase 4）」完成时发布。"
      ],
      files: ["changelog.html", "assets/pages/changelog.js", "assets/pages/changelog_data.js", "assets/shell.js", "assets/style.css", "index.html"]
    },
    {
      date: "2026-09-06",
      version: "v0.9.1",
      type: "docs",
      title: "补入历史相关研究并审计文档缺口",
      summary: "在《构建研究思路与全程纪要》新增 §3 历史相关研究（文献溯源 + 实证结论），并补 §12 文档缺口审计。",
      changes: [
        "新增 §3「历史相关研究：溯源与实证」：3.1 文献与方法溯源（Arthur 2009 组合进化、Basalla 1988 进化树、内史/外史、技术网络 SNA）；3.2 本项目实证历史研究结论（最长链 211 跳、割点 1859、拓扑最深=现代医学、组合诞生、五维评分→五分法映射）。",
        "全文章节顺延重编号（原 §3–§10 → §4–§11），交叉引用同步修正。",
        "新增 §12「文档缺口与待补」审计，列出 10 项待补内容。",
        "新增附录 C 关键外部文献，便于对外引用。"
      ],
      files: ["项目构建研究思路与全程纪要.md"]
    },
    {
      date: "2026-09-06",
      version: "v0.9.2",
      type: "feature",
      title: "Phase 4 · 全量科技树站点集成（数据层 + 可视化）",
      summary: "打通分析引擎到站点的数据管道，新增「全量科技树」页，可视化 13392 节点与第一性原理五维评分。",
      treeChange: {
        scope: "全量科技树：13392 节点 + 18141 边 接入站点可视化层",
        reason: "此前评分与网络只存在于 analysis-engine，站点看不到。build_full_dataset.js 合并 graph.json(原库富字段)+new_techs(11031)+phase2_scores(13392)，重建依赖/赋能边，使评分卡与网络在站点层可交互，是「树」首次完整呈现给用户。",
        detail: "assets/data_full.js（8.1MB，summary 覆盖率 100%）；D3 力导向渲染 + 按分类/tier/综合分着色筛选。"
      },
      changes: [
        "新增 analysis-engine/build_full_dataset.js：合并 graph.json(原库富字段) + new_techs.json(11031) + phase2_scores.json(13392 评分)，重建依赖/赋能边，输出 assets/data_full.js（8.1MB，全量评分、summary 覆盖率 100%）。",
        "新增 tree_full.html + assets/pages/tree_full.js：加载全量数据集，D3 力导向渲染，支持按分类 / 成熟度(tier) / 综合分着色，按分类与 tier 筛选，全球搜索高亮。",
        "详情弹窗含第一性原理五维评分卡（D1 物理可行 / D2 时间成熟 / D3 依赖深度 / D4 系统织密 / D5 跨域辐射）+ 综合分 + 上下游依赖链。",
        "shell.js 导航新增「全量科技树」入口；style.css 补充 .sc-* 评分卡 / .tf-dist / .lg-dot 样式。",
        "tier 分布核验一致：L1 13168 / L1-基石 4 / L1-前沿 103 / L2 59 / L3 27 / L4 19 / L5 12。"
      ],
      files: ["analysis-engine/build_full_dataset.js", "assets/data_full.js", "tree_full.html", "assets/pages/tree_full.js", "assets/shell.js", "assets/style.css"]
    },
    {
      version: "v0.9.3",
      date: "2026-09-08",
      type: "refactor",
      title: "项目目的校正：从『科幻可行性』转向『真实技术拆解 + 规律 + 未来涌现推演』",
      summary: "用户明确指出项目目的被误读为『研究科幻作品科技如何实现』。校正为：拆解真实人类技术发展、结合时代背景与技术前提建网络、找出联系与规律、推演未来何时/何条件涌现何技术（严肃科学，非科幻）。",
      treeChange: {
        scope: "数据净化：隔离 extend_net.js 手工拍年份的 117+ 未来节点（2050–2199 仅 51 个）",
        reason: "用户校正目的为『严肃科学、非科幻』。手工臆测的科幻外推年份节点污染了推演正确性，属不该进入真实技术演化网络的数据，故明令排除；未来档此后一律由网络前提闭包 + 前提齐备律推导，不再手拍。",
        detail: "五分法重新定位为『技术涌现可行性五档』（输出而非科幻外推）；项目更名。"
      },
      changes: [
        "重命名项目为『人类技术演化网络 · 规律挖掘与未来涌现推演』，废弃『科幻科技实现蓝图（现实锚点层）』表述。",
        "《项目构建研究思路与全程纪要》§1 标注旧框架为误读、写入校正后权威目的；§13 新增『规律库（6 条已实跑验证的规律）+ 未来涌现推演引擎方法论』。",
        "隔离污染：extend_net.js 手工拍年份的 117+ 未来节点、2050–2199 仅 51 节点的臆测数据不得进入推演引擎；未来档须由网络前提闭包 + 规律推导。",
        "五分法重新定位为『技术涌现可行性五档』（已实现/目前可实现/未来可能/未来较难/受物理制约），输出而非科幻外推。",
        "同步修正 版本迭代日志.md、changelog_data.js 的『科幻』措辞。"
      ],
      files: ["项目构建研究思路与全程纪要.md", "版本迭代日志.md", "assets/pages/changelog_data.js"]
    },
    {
      version: "v0.9.4",
      date: "2026-09-08",
      type: "feature",
      title: "Phase 5 · 未来涌现推演引擎（项目真正核心落地）",
      summary: "按校正后目的，构建确定性推演引擎：从真实网络实算「前提齐备律」滞后分布，对每个严肃科技方向按前提闭包推导 L2–L5 与涌现时期区间，全程禁用手工年份。",
      treeChange: {
        scope: "推演层：以确定性引擎替代手工年份，新增 L2/L3/L5 涌现推导",
        reason: "为落实校正后目的，不能用臆测年份。从真实网络实算『前提齐备律』滞后分布（year≥1700, n=6684, p50=26/p90=147），按前提闭包推导涌现时期，使科技树的『未来枝』由内生规律产生而非外部假设。",
        detail: "L2=105（中位≈2052）/ L3=60（中位≈2078）/ L5=10（物理制约）；彻底替代 extend_net.js 手拍年份。"
      },
      changes: [
        "新增 analysis-engine/forecast_engine.js：载入全量网络，计算 year≥1700 的滞后分布（n=6684，p50=26 / p90=147 年）。",
        "推导分档：L2=105（前提齐备，涌现中位≈2052，如通用人工智能/量子计算机/自动驾驶）、L3=60（L2 跨域组合级联生成，中位≈2078）、L5=10（物理制约：曲速引擎/虫洞/超光速通讯等）。",
        "输出 analysis-engine/data/forecast_results.json；§13.3 标注为已落地并补实测数据。",
        "彻底替代 extend_net.js 的手工臆测年份，符合校正后『严肃科学、非科幻』目的。"
      ],
      files: ["analysis-engine/forecast_engine.js", "analysis-engine/data/forecast_results.json", "项目构建研究思路与全程纪要.md"]
    },
    {
      version: "v0.9.5",
      date: "2026-09-08",
      type: "docs",
      title: "奠基方法论对话完整存档（§3.0 扩充）",
      summary: "将项目启动时的关键方法论对话（是否需要深度神经网络、历史文献谱系、四阶段研究方案、叙述层→推理层的提醒）无遗漏地补入《项目构建研究思路与全程纪要》§3.0，并标注其旧框架表述与后续 §1/§13 校正的关系。",
      changes: [
        "§3.0 由 4 条检索摘要扩写为完整存档：含 DNN 规模对照表（2265 节点/600 边 vs DL 甜区）、TRIZ/Delphi/复杂网络/卡尔达肖夫-德雷克四类文献谱系及项目对应表、阶段 0–3 四阶段算法方案表、『叙述层 vs 推理层』关键提醒、当时建议的四项下一步。",
        "补『事后印证』段，将奠基方案与后续 Phase 1–5 落地一一对应（阶段 0=graph.json、阶段 1=graph_engine.py、阶段 2=phase2_score.py、阶段 3=链接预测、§13 推演引擎）。",
        "加语境说明：对话中的『科幻科技』按校正后目的理解为『严肃科技方向的未来可行性』，方法论内核（确定性优先、可解释、链接预测为唯一可选 ML）被全程沿用且实证有效。",
        "同步记入 版本迭代日志.md。"
      ],
      files: ["项目构建研究思路与全程纪要.md", "版本迭代日志.md", "assets/pages/changelog_data.js"]
    },
    {
      version: "v0.9.6",
      date: "2026-09-08",
      type: "feature",
      title: "新增独立「文献谱系」页（历史相关研究，不进入技术网络）",
      summary: "按用户要求，把 TRIZ、技术预测学、复杂网络、卡尔达肖夫-德雷克等历史相关研究单独做成可点开查看详细介绍的页面；这些内容属方法论谱系而非技术，明确不进入 13392 节点技术演化网络。",
      changes: [
        "新增 research.html + assets/pages/research.js + assets/pages/research_data.js：8 张研究卡（TRIZ / 技术预测学 Delphi / 复杂网络引文分析 / 卡尔达肖夫-德雷克 / Arthur 组合进化 / 内史外史 / SNA / Polak&Arthur 计算实验），点击弹窗显示详细介绍（导语 + 正文 + 工具对应表 + 本项目借鉴 + 参考文献）。",
        "页面顶部明确标注：文献谱系是「研究范式」而非技术，不进入技术演化网络。",
        "复用站点 #modal 弹窗与全局搜索（本页做卡实时筛选）；shell.js 导航新增「文献谱系」入口。",
        "style.css 补 .research-* / .r-* 系列样式。"
      ],
      files: ["research.html", "assets/pages/research_data.js", "assets/pages/research.js", "assets/shell.js", "assets/style.css"]
    },
    {
      version: "v0.9.7",
      date: "2026-09-08",
      type: "feature",
      title: "新增「科技树变更原因」独立栏目",
      summary: "按用户要求，在版本迭代日志新增独立栏目，专门记录每次改变整张科技树（结构 / 规模 / 评分体系 / 推演框架）的原因，并回填历史原因，便于回溯「树为何变成现在的样子」。",
      changes: [
        "数据层：changelog 条目新增可选字段 treeChange{ scope 影响范围, reason 变更原因(核心), detail 具体动作 }；任何实质改动科技树的版本都须填写原因。",
        "渲染层：renderChangelog() 新增「科技树变更原因 · 全程追踪」表（列：版本 / 日期 / 变更 / 影响范围 / 变更原因），由 treeChange 自动汇总；统计区新增「科技树变更」计数。",
        "卡片层：每条目录卡片内嵌高亮块，展示该版本的科技树影响范围与变更原因。",
        "回填 v0.1.0 / v0.3.0 / v0.8.0 / v0.9.2 / v0.9.3 / v0.9.4 共 6 个版本的科技树变更原因。",
        "同步《版本迭代日志.md》：新增追踪表 + 各版本原因块；style.css 补 .cl-ttrack* / .cl-tree* 样式。"
      ],
      files: ["assets/pages/changelog_data.js", "assets/app.js", "assets/style.css", "版本迭代日志.md"]
    },
    {
      version: "v0.9.8",
      date: "2026-09-08",
      type: "feature",
      title: "Phase 3 · 链接预测补全隐含技术前置关系",
      summary: "实现确定性、可解释的链接预测引擎，基于依赖网祖先闭包计算「前提支撑度」，补全『长度=2』的隐含前提缺口；写回 2883 条高可信隐式依赖边，使科技树前置关系更完整。",
      treeChange: {
        scope: "全量依赖网：17837 → 20720 直接依赖边（+2883，+16.2%）",
        reason: "此前依赖网稀疏（平均约 1.35 条直接前提），大量『A 的已知前提都直接依赖 B』的隐含前提关系未显式记录。用前提支撑度（B 为 A 多数直接前提的直接前提 ⇒ 补 A→B）补全，使科技树的前置关系更完整、下游中心性与未来涌现推演更准。",
        detail: "护栏：frac=1.0 且 支撑≥2 且 同域或属基础科学；边打 provenance=phase3_linkpredict 标记，可审计/可回退。候选共 7886，写回 2883。"
      },
      changes: [
        "新增 analysis-engine/phase3_linkpredict.py：bitmask 祖先闭包 + 前提支撑度链接预测（确定性、非黑箱 ML），输出 phase3_results.json / phase3_inferred_edges.json / phase3_report.md。",
        "补全方法：仅补『长度=2 缺口』（A 的直接前提 p 直接依赖 B ⇒ A→B 隐含），避免把多跳传递依赖误当新边；年份顺序由 DAG 拓扑自动保证。",
        "写回 2883 条高可信隐式前提边至 graph.json（provenance 标记）；重跑 build_full_dataset.js 刷新 data_full.js（边 21024）。",
        "依赖网经校验仍为 DAG（无环）；重跑 forecast_engine.js 保持未来涌现预测一致（L2=105 / L3=60 / L5=10 不变）。"
      ],
      files: ["analysis-engine/phase3_linkpredict.py", "analysis-engine/data/phase3_results.json", "analysis-engine/data/phase3_inferred_edges.json", "analysis-engine/data/phase3_report.md", "analysis-engine/data/graph.json", "assets/data_full.js"]
    },
    {
      version: "v0.9.9",
      date: "2026-09-08",
      type: "fix",
      title: "Phase 3 修正 · 实证发现依赖边方向读反，全量回滚并按权威方向重写回",
      summary: "审计揭示 graph.json 依赖边权威方向为 source(前提)→target(依赖者)，而 v0.9.8 引擎按相反假设运行，2883 条写回边方向错乱（如「疫苗→骨科」被写成疫苗是骨科前提）。回滚全部 2883 条错误边，修复引擎方向 + 后代计数 bug，升级护栏（近因窗口 + 普适度），按权威方向重写回 25 条高质量近因前提边，并新增 hold-out 科学评估。",
      treeChange: {
        scope: "依赖边方向体系：回滚 2883 条方向错乱边 → 写回 25 条方向正确的近因前提边（依赖边 17862，data_full.js 同步）",
        reason: "v0.9.8 把依赖边 (source,target) 误读为 (依赖者,前提)，实际权威方向相反（铁证：boiler(1765)→steam_engine(1769)；且约 80% 依赖边满足 source.year < target.year，与「前提早于依赖者」一致，反向假设下语义崩塌）。方向反了会导致整张反图上的支撑度计算与写回全部错乱，必须回滚纠正，否则污染科技树的可信度。",
        detail: "修复：① load 时边方向 (t,s)；② 后代计数从树式累加改为去重闭包 bitmask（稠密 DAG 下原式指数爆炸）；③ 写回方向交换为 (前提→依赖者) + 年份门禁；④ 护栏升级：同域/basic + 近因窗口 gap≤3 + 普适度 desc<0.5。25 条全部通过时间箭头校验（0 违反）。"
      },
      changes: [
        "事故定性：依赖边权威方向为 source(前提)→target(依赖者)；此前引擎与写回均按相反方向假设，v0.9.8 的 2883 条边为方向错乱的可疑边。",
        "回滚：删除 graph.json 中 2883 条 provenance=phase3_linkpredict 错误边（备份 analysis-engine/data/backup/graph.json.pre-phase3-20260908.bak，可审计可回退）。",
        "修复 phase3_linkpredict.py：load_full 方向 (t,s) 统一为 (依赖者,前提)；--apply 写回方向交换为 (source=前提→target=依赖者) 并加年份门禁（两端有年份时强制 前提年≤依赖者年）。",
        "修复后代计数 bug：desc 由树式累加（稠密 DAG 重复计数致指数爆炸，desc_ratio 一度达 1e22）改为去重闭包 bitmask，普适度恢复可解释量纲。",
        "护栏升级为四重：frac=1.0 + 支撑≥2 + 同域/basic + 近因窗口 gap≤3 + 普适度 desc<0.5；重推后候选 1237、可写回 25 条。",
        "新增 analysis-engine/phase3_eval.py hold-out 评估（seed=42，留出 20% 规则可覆盖现存边）：AUC=0.564（随机 0.5），Recall@1000=0.49 vs 随机 0.27（约 1.8×）；结论=规则信号中等，写回质量由护栏保证 precision。",
        "重写回 25 条高可信近因前提边（如 电力系统→配电自动化/数字化变电站、集成电路→异构计算、火药→无后坐力炮、正态分布→假设检验、人造卫星→星载定位接收），年份门禁 0 违反，依赖网经校验仍为 DAG。",
        "重跑 build_full_dataset.js 刷新 data_full.js（dependency 17837→17862）；重跑 forecast_engine.js 预测分档不变（L2=105 / L3=60 / L5=10）。"
      ],
      files: ["analysis-engine/phase3_linkpredict.py", "analysis-engine/phase3_eval.py", "analysis-engine/data/phase3_eval.json", "analysis-engine/data/graph.json", "analysis-engine/data/backup/graph.json.pre-phase3-20260908.bak", "analysis-engine/data/phase3_results.json", "analysis-engine/data/phase3_inferred_edges.json", "analysis-engine/data/phase3_report.md", "assets/data_full.js"]
    },
    {
      version: "v0.9.10",
      date: "2026-09-09",
      type: "fix",
      title: "依赖关系纠错：修正「无人机测绘」前因并新增「纠错总结」页",
      summary: "审计发现「无人机测绘」的直接上游被误设为二维材料 / 工业 4.0 / 摩擦纳米发电，修正为 GPS / 计算机 / 无人机 / 相机 / 摄影 / 飞控 / 多旋翼；同步新增「纠错总结」页专录此类质量事件。",
      treeChange: {
        scope: "依赖网：修正 bld_dronesurvey 入边（删 3 条错误 + 加 7 条正确），data_full.js 同步",
        reason: "原 graph.json 中 bld_dronesurvey 的入边是 catalog 合并环节产生的错误因果（二维材料 / 工业 4.0 / 摩擦纳米发电均非其前置技术），导致来龙去脉页生成「这些技术汇聚使其商品化」的荒谬文案，并回溯出 65 项含大量无关节点的上游列表。修正直接前因才能使依赖网可信。",
        detail: "year 2015→2010 与 catalog 对齐；重写 summary、补 people/place；app.js 代际标签由「第 N 代（更早）」改为「直接上游 / 第 N 代上游」。"
      },
      changes: [
        "graph.json：bld_dronesurvey 入边由 {mat_2d, mfg_industry40, ene_tribo} 修正为 {gps, computer, drone, camera, photography, uav_controller, multicopter}。",
        "graph.json：year 2015→2010；重写 summary；补 people/place（DJI / 开源飞控 / Pix4D 等）。",
        "assets/app.js：renderLineageSide 代际标签改为「直接上游 / 第 N 代上游」；顶部 prose 改为克制因果表述。",
        "新增 correction.html + assets/pages/correction_data.js + correction.js：专录依赖关系 / 前因后果 / 归属类纠错事件，并内置全库自检方法论与待检清单。",
        "shell.js 导航新增「纠错总结」入口；style.css 补 .cr-* 样式。",
        "运行 build_full_dataset.js 重建 assets/data_full.js，bld_dronesurvey 上游已更新。"
      ],
      files: ["analysis-engine/data/graph.json", "assets/app.js", "correction.html", "assets/pages/correction_data.js", "assets/pages/correction.js", "assets/shell.js", "assets/style.css", "assets/data_full.js"]
    },
    {
      version: "v0.9.11",
      date: "2026-09-09",
      type: "fix",
      title: "依赖关系纠错（续）：清理枢纽节点误接下游与悬空边",
      summary: "延续无人机测绘案例做全库自检：删除二维材料 / 工业 4.0 / 摩擦纳米发电 / 自修复材料 4 个枢纽节点的全部 104 条误接下游边，并清理 21 条指向不存在节点的悬空边；保留石墨烯→二维材料这一条语义正确的边。",
      treeChange: {
        scope: "依赖网：删除 4 枢纽节点 104 条误接下游边 + 21 条悬空边，data_full.js 同步重建",
        reason: "Phase 3 链接预测 / catalog 合并阶段对通用技术名做了过度泛化的前因推断，把二维材料等当作万能前置注入一批共享模板下游（transport/build/info/military），导致来龙去脉页大量无关上游；另有部分边引用了合并后已消失的节点 id。无人机测绘案例是这一系统性偏差的可见症状。",
        detail: "mat_2d(56) / mfg_industry40(4) / ene_tribo(20) / mat_selfheal(24) 下游全清；保留 mat_graphene→mat_2d（石墨烯催生二维材料研究，语义正确）。全库边数 8397→8275。"
      },
      changes: [
        "graph.json：删除 mat_2d 全部 56 条、mfg_industry40 全部 4 条、ene_tribo 全部 20 条、mat_selfheal 全部 24 条下游误接边，合计 104 条。",
        "graph.json：删除 21 条悬空依赖边（18 条 target 缺失 + 3 条 source 缺失）。",
        "graph.json：保留 mat_graphene→mat_2d（核验正确）。",
        "运行 build_full_dataset.js 重建 assets/data_full.js，全库边数 8397→8275。"
      ],
      files: ["analysis-engine/data/graph.json", "assets/data_full.js", "assets/pages/correction_data.js"]
    },
    {
      date: "2026-09-09",
      version: "v0.9.12",
      type: "docs",
      title: "数据口径澄清：Tier B 1915 gap 与预览工具注入属性",
      summary: "澄清 Tier B 1915 gap 的真实含义（候选而非必填），并记录「预览工具向 HTML 注入 data-page-node-id 属工具噪声、非数据问题」。",
      changes: [
        "Tier B 1915 gap 口径：tierB_gap.json 的 1915 条 = year≥1750 且 people/place 双缺的节点；按 9 类分布 life296/info245/basic249/build216/transport209/military202/energy196/material188/manufact114。",
        "其中大量为程序化生成的「学科/子领域」节点（bx_math_*、it_alg_*、ml_uav_* 等），本就不应有单一发明人 → 按设计留空；仅「地标性发明/理论」值得高精度回填。",
        "已首批回填 29 个地标节点（铅笔、青霉素、X 射线、ENIAC、万维网、高铁、微处理器等），gap 由 1944→1915，剩余 1915 为 backlog。",
        "记录教训：内置预览/自动化工具会在 HTML 上注入 data-page-node-id=\"...\" 追踪属性，属工具噪声、非用户内容、非数据问题；此前一度被当作「未提交改动」处理，实为误报，今后勿据此提交或修改文件。"
      ],
      files: ["assets/pages/correction_data.js", "版本迭代日志.md"]
    },
    {
      version: "v0.9.13",
      date: "2026-09-09",
      type: "feature",
      title: "新增「技术演化的数学模型」页（5 构想 + 十种进阶模型 + 验证硬化）",
      summary: "新建数学模型页，把技术依赖网形式化为可计算、可验证、随研发迭代演进的数学对象；含 5 个构想、十种进阶模型（隐性参数·神经网络·专用硬件），以及 Phase 1 验证硬化。",
      changes: [
        "新建 model.html + assets/pages/model.js：把项目数据形式化为有向无环依赖图（DAG），全部统计量由 2289 节点语料在浏览器实时计算（不写死常量）；D3 绘制滞后直方图 / 9×9 共生热力图 / 时期重要性中位条形 / 入度-年代分组 / 信息流速率折线；shell.js 导航新增「数学模型」入口。",
        "5 个构想：A 社会-环境涌现（参数扩充至约 20 个，核心涌现速率方程 λ(t) 保留用户给定形式、新增扩展因子 Ξ(t) 吸收新参数，显式点出正反馈闭环并以按时期滞后中位 Δ 作实证指纹）/ B 前提闭包+滞后分布（year−最晚前置年，实时拟合分位）/ C 组合涌现（分类共生 lift ℒ，汇聚诞生占比）/ D 重要性=网络中心性（x_i 综合评分）/ E 物质能量信息三元流动。",
        "第九节新增十种进阶模型 M1–M10（潜空间嵌入 / GCN / VAE / 图自编码器 / 时空图网络 / Transformer / 图扩散 / IBP 贝叶斯非参数 / PINN / NOTEARS 潜在因果），标注隐性参数、所需硬件（CPU/GPU/TPU 集群）与后续实现库（PyG/DGL/HuggingFace/DiGress/Pyro·NumPyro/gcastle），并说明其作为构想 A–E 的「计算化身」衔接关系。",
        "第九节打磨：每个进阶模型补「代价/局限」一行；构想 A 信息流速度 v_i 从占比代理升级为量化指标（各时期信息类技术涌现速率，项/百年）；新增「模型选用速查表」（任务→推荐模型 M1–M10）；顶部加硬件分级分布速览。",
        "Phase 1 验证硬化：构想 B 新增样本外验证（留最近 20% 技术作测试集，以训练集滞后中位预测，算 MAE/RMSE 量化可外推性）；构想 A 量化正反馈指纹（信息流速率↔总体涌现速率 Pearson 相关 r）；验证总览表新增「证据强度」列（强/中 + 样本量）；设立 MODEL_METHOD 方法日志（v0.1–v0.6）记录建模方法随迭代演进。",
        "配套建立文档时效门禁 tools/check_docs.js（运行时算 TOTAL=2289 / TOTAL_FULL=13392，扫描正文写死数字）+ 挂 .git/hooks/pre-commit 自动拦截过期数字。"
      ],
      files: ["model.html", "assets/pages/model.js", "assets/shell.js", "assets/style.css", "tools/check_docs.js", ".git/hooks/pre-commit"]
    },
    {
      version: "v0.9.14",
      date: "2026-09-09",
      type: "fix",
      title: "主管线网络审计修正 + 模型页 Phase3 待硬件暂存",
      summary: "对模型页/分析页所用的主管线 2289 节点网络做全量遍历审计并修正：清除 4 个已定论枢纽在数组源头残留的 105 条误接下游边与 86 条重复依赖边（主管线边 8129→7938）；并把 Phase 3（进阶模型可运行化）方案以「待硬件」提醒框 + 折叠详情形式存入数学模型页。",
      treeChange: {
        scope: "主管线技术网络：边 8129→7938（删 105 条枢纽误接边 + 去重 86 条重复依赖），节点不变",
        reason: "v0.9.10–11 的枢纽清理只改了全量管线 graph.json / data_full.js，未写回主管线数组源头（techs_extra.js / data.js / techs_more.js），导致模型页与分析页所读的主管线网络仍残留同一批「万能前置」误接与重复依赖，统计（滞后、下游、共生）被污染。",
        detail: "移除 mat_2d / mfg_industry40 / ene_tribo / mat_selfheal 的全部下游引用（techs_extra 101 条 + data.js 4 条；主管线无 graphene→2d 特例）；dependsOn/enables 重复元素去重（techs_extra 1 + techs_more 85）。修正后四枢纽下游归零、dupEdge=0、仍无自环/环/悬空。二阶枢纽约 24 节点（ene_wasteheat 50 / ene_liquidair 31 等）维持挂起待人工核验（关联 CR-2026-0909-hub2nd）。"
      },
      changes: [
        "网络遍历审计结论：2289 节点无重复 id、无自环、无环、无悬空 dependsOn；结构健康。残留问题：一阶枢纽误接（mat_2d 57 / ene_tribo 21 / mat_selfheal 22 / mfg_industry40 5）、同节点重复依赖 86 条、年倒挂 4 处。",
        "techs_extra.js：78 个条目去污染/去重，移除 101 条枢纽下游引用 + 1 处重复；techs_more.js：85 个条目去重；data.js：2 个 AI/大模型条目移除 mat_2d、ene_tribo 依赖（4 条误接边）。",
        "修复复核：edges 8129→7938；四枢纽下游=0；dupEdge=0；DAG 无环不变。",
        "保留未动（报告项）：4 处年倒挂（engineering←scientific_method 等）判定为年代标注噪声；二阶枢纽 ~24 节点继续挂起（CR-2026-0909-hub2nd）。",
        "数学模型页：第九节新增「⚠ Phase 3 待硬件」提醒框 + 折叠详情（M1 node2vec / M2 PyG-GCN / M4 PyG-GAEn 最小可运行脚本方案、算力量级设计估算、速查表将补数据需求量列、验收协议）；MODEL_METHOD 方法日志加 v0.8。"
      ],
      files: ["assets/techs_extra.js", "assets/techs_more.js", "assets/data.js", "assets/pages/correction_data.js", "assets/pages/model.js"]
    },
    {
      version: "v0.9.15",
      date: "2026-09-09",
      type: "fix",
      title: "网络年份/概念关系修正 + 二阶枢纽逐节点核验结案 + 量子两项研判",
      summary: "处理 v0.9.14 遗留的三类报告项：① 4 处年倒挂——科学方法/热力学/量子科技等「后发学科/方法」依赖降级为概念影响并移除硬边，年份/纪元修正（engineering→前 3000、propulsion→1960，纪元纠偏 5 处）；② 二阶枢纽（CR-2026-0909-hub2nd）24 节点逐一下游抽样核验，证其为「同纪元模板整批注入」，删除 590 条确认污染边并保留真实下游；③ 量子纠缠/量子科技两项研判（纠缠＝已实验证实并工程化为 QKD/隐形传态资源的物理基础，量子科技＝对技术有直接推动），修正量子簇 3 条虚假下游与摘要。主管线边 7938→7341（−597），yearInv 归零。",
      treeChange: {
        scope: "主管线技术网络：边 7938→7341（删 4 条概念影响化硬边 + 3 条量子簇虚假下游 + 590 条二阶枢纽污染边）；年份/纪元修正涉及 engineering / propulsion / rocket / scientific_method / physics / chemistry / quantum_entanglement；节点不变 2289",
        reason: "v0.9.14 将 4 处年倒挂与二阶枢纽列为报告项待人工定夺。用户裁定：① 年份必须改对并全库自查；② 这 4 条把「后发学科/方法」当技术前置的依赖降级为「概念影响」（站内 _upConcept 承接科学解释类关系）；③ 二阶枢纽逐个核验、删污染留真实后结案。本轮逐一落地：概念影响化移除硬边、年份/纪元修正、24 枢纽逐节点核验（实证为同纪元模板整批注入：每个枢纽下游几乎同一年、横跨五类，对照半导体材料的真实异年下游即可识别）、量子两项 web 研判后修正量子簇。目的：消除 DAG 时间倒挂与批量模板污染，恢复滞后/下游/共生统计与来龙去脉页可信度。",
        detail: "① 概念影响降级 4 条 + 量子簇清除 3 条虚假下游（λ演算/计算机科学←纠缠、蛋白质组学←量子信息）；② 年份修正：engineering 1500→-3000、propulsion 1900→1960；纪元纠偏：scientific_method/physics/chemistry→earlymodern、rocket→electrical、quantum_entanglement→electrical；③ 二阶枢纽删除污染 590 条，保留真实下游 semiconductors 8（太阳能光伏/晶体管/集成电路/激光器/相机图像传感器/内存/卫星/激光雷达）、mat_cf 2（碳纤维复合材料/金属基复合材料）、electric_motor 8（无刷电机/工业机器人/真空吸尘器/汽车电气/自动驾驶/割草·吸尘执行机构/多旋翼）；④ 量子研判落地：纠缠保留为真实基础节点（Bell 实验验证 + 2022 诺奖 + QKD 组网/墨子号/京沪干线为已实现技术资源），量子科技保留（对技术进步有直接推动），重写 6 处模板摘要。复核：yearInv 0、dupEdge 0、无自环/环/悬空；模型页 dry-run RENDER OK。"
      },
      changes: [
        "年份/概念：4 条倒挂硬依赖（engineering←scientific_method、propulsion←rocket、combustion←thermodynamics、quantum_entanglement←quantum）降级为「概念影响」并移除硬边（摘要注明）；年份修正 engineering→-3000(ancient)、propulsion→1960(info)；纪元纠偏 scientific_method/physics/chemistry→earlymodern、rocket→electrical、quantum_entanglement→electrical。",
        "量子两项研判（web 检索佐证）：① 量子纠缠(1935)非「可能性强的理论」——1980 年代起经 Bell 实验反复证实、2022 年获诺贝尔物理学奖，并已作为量子密钥分发/量子隐形传态的工程化资源（量子通信已进入实用化：京沪干线/城域 QKD 网商用、墨子号星地 1200km QKD、2025 国际量子科技年）；② 量子科技(1980)非「仅教育意义」——对技术进步有直接推动（量子密钥分发商用组网、量子计算「优越性」实验与云服务、量子传感用于心磁图/电网/管道探伤等）。据此两者均保留为真实基础节点。",
        "量子簇修正：清除 λ演算、计算机科学 ← 量子纠缠 与 蛋白质组学 ← 量子信息 共 3 条虚假下游；重写 quantum_entanglement / quantum / quantum_info / engineering / propulsion / combustion 六处模板化/重复摘要。",
        "二阶枢纽结案（CR-2026-0909-hub2nd → 已修正）：24 节点共删除 590 条确认污染下游引用（明细见纠错页），保留 semiconductors 8 / mat_cf 2 / electric_motor 8 条真实下游；污染枢纽下游归零。",
        "全库年份自查：正年口径 yearInv 4→0；era-vs-year 失配 59→52；另发现 12 处古早纪年噪声（含负年，如 masonry←mortar 等 18 节点）列入待核清单未擅改。",
        "复核：主管线 edges 7938→7341；dupEdge=0；无自环/环/悬空 dependsOn；模型页 dry-run RENDER OK（P 弹性 1.33/R²=0.875、K 弹性 2.03/R²=0.933 渲染与独立复算一致）。"
      ],
      files: ["assets/techs_extra.js", "assets/techs_extend.js", "assets/data.js", "assets/pages/correction_data.js"]
    },
    {
      version: "v0.9.16",
      date: "2026-09-10",
      type: "fix",
      title: "全量管线镜像同步 + 无人机测绘主库漏修 + 史前/上古 12 处负年倒挂考古修正",
      summary: "把 v0.9.15 的主管线修正镜像到全量管线（graph.json/data_full.js），补修主管线漏修的 bld_dronesurvey，并对 12 处含负年年份倒挂（18 节点）做考古修正（负年 yearInv 12→0）；顺带修复 build_full_dataset.js 的 dependency 边方向混写 bug，使全量科技树边方向统一。全量数据集节点 13392→13413、边 18048→17503。",
      treeChange: {
        scope: "主管线技术网络：边 7348→7340（删 7 条「专化使能当起源前置」概念化硬边 + arch 去 cement 1 条）；年份修正 7 节点（rope/woodworking/hafting/arch/smithing/loom + bld_dronesurvey 2015→2010）；全量管线 graph.json 与主管线双向 0 差异；data_full.js 节点 13392→13413、边 18048→17503",
        reason: "v0.9.15 的清理只落在主管线数组源头，graph.json/data_full.js 仍残留同源约 622 条陈旧污染边；反向地，bld_dronesurvey 当年的纠错只修了 graph.json，主管线仍是旧模板错误态。两套数据源已分叉且互为镜像对象。另：12 处含负年的倒挂此前仅登记未修正，属「史前/上古批次 year 占位值互相矛盾 + rope 等通用早期技术被当整批 cohort 万能前置注入」，需按考古证据逐例定夺。",
        detail: "① 先修 bld_dronesurvey 主库条目（对齐 graph.json：year 2010、7 条真实前置、重写模板摘要），再以 dump_data.js 重导出 graph.json（清 654 条陈旧边、补 110 条主库新增边，与主管线 0 差异）；② build_full_dataset.js 将 graph 的 dependency 边由「被依赖者→依赖者」转置为「依赖者→被依赖者」与 new_techs/全量科技树方向统一，重建 data_full.js；③ 12 处负年倒挂考古修正：rope→约 4.5 万年前（Abri du Maras 直证）、woodworking→约 30 万年前（Schöningen 木矛）、hafting→约 20 万年前（粘合装柄）、arch→约 公元前 1800 年(ancient)、smithing→约 公元前 1000 年（铁器时代）、loom→约 前 4000 年；并对 7 条「后发专化使能/材料被当领域起源前置」依赖做概念影响降级（rope 出 woodworking/hafting/fire_making、mortar 出 masonry、arch 出 bridge、bellows/charcoal 出 metallurgy、cement 出 arch）；④ 52 项 era-vs-year 语义纪元逐条复核维持原判（era 承担领域/预测档位语义）。复核：负年 yearInv 12→0、graph 镜像 0 差异、data_full 污染枢纽被依赖归零、模型页 dry-run RENDER OK、docs 门禁 OK（TOTAL_FULL 13413）。"
      },
      changes: [
        "全量镜像：dump_data.js 重导出 graph.json（2289 技术节点 / dependency 7340 与主库一致，断链 0、镜像 0 差异）；build_full_dataset.js 修 dependency 方向混写后重建 data_full.js（TECHS_FULL 13392→13413，+21 主库独有史前/上古节点；EDGES_FULL 18048→17503，反向重复对归零）。",
        "bld_dronesurvey 主库漏修补齐（techs_extra.js）：year 2015→2010、dependsOn 空→7 条真实前置（gps/computer/drone/camera/photography/uav_controller/multicopter）、补 people/place、summary/views/significance 重写去模板。",
        "史前/上古 12 处负年倒挂考古修正（含 18 节点）：见 correction 页 CR-2026-0910-mirror-ancient 的逐节点明细（年份/日期/纪元 + 考古依据：绳索/装柄/木作/砖拱/铁器锻造/织机等）；负年口径 yearInv 12→0。",
        "7 条概念影响降级（摘要注明）：rope←woodworking/hafting/fire_making、mortar←masonry、arch←bridge、bellows/charcoal←metallurgy、cement←arch 的硬依赖移除。",
        "52 项 era-vs-year「语义纪元」逐条复核：全部维持原判（上古延伸/领域纪元/预测档位三类），数据不改。",
        "登记新遗留：ml_uav_1..126 模板 cohort（主库+new_techs 同构依赖 rocket/algorithm/electronics）列入 pendingQueue 待下轮批量甄别（本轮未动）。",
        "数据声明同步：README.md/tree_full.html 13,392→13,413 节点、约 1.8 万→约 1.75 万边；模型页实时拟合值微移（P 1.33/R²≈0.874、K 2.04/R²≈0.932，无硬编码）。"
      ],
      files: ["assets/techs_extra.js", "assets/techs_extend.js", "assets/data.js", "analysis-engine/data/graph.json", "assets/data_full.js", "analysis-engine/build_full_dataset.js", "assets/pages/correction_data.js", "README.md", "tree_full.html"]
    },
    {
      version: "v0.9.17",
      date: "2026-09-12",
      type: "fix",
      title: "enables 语义错误批量修正：95 个「灰色概念」占位清零（主库 + 全量镜像）+ 正式甄别表落档",
      summary: "对 enables 字段的系统性语义错误做批量修正：把「技术带来的社会影响/应用」误当「技术催生技术」的 95 个断链目标（即前端渲染为灰色虚框标签的「灰色概念」）从主库清理（data.js 60 处 + techs_extra.js 2 处，移除 83 条断链引用）；并发现与修复全量镜像层同源残留（phase2_scores.json 96 条 (concept) 占位经 build_full_dataset.js 评分分支进入 data_full.js，为该层灰节点的真正来源），主管线概念占位 95→11、全量集概念节点 96→0（TECHS_FULL 13413→13319）。脏 id calendar(agri)/mars(未来) 清理，顺带修正 gunpowder/optics 的 algorithm 错挂依赖。95 项正式甄别表（三分类 + 逐条处置建议）落为纠错页 meta.enablesAudit，可逐条勾选。",
      treeChange: {
        scope: "主管线技术网络：enables 断链引用移除 83 条（data.js 60 处 + techs_extra.js 2 处）、概念占位 95→11；dependsOn 修正 2 条（gunpowder / optics 去 algorithm），依赖边 7342→7340；节点不变 2289。全量管线：graph.json enables 304→206、断链 12；data_full.js 节点 13413→13319、边 17503→17394、概念节点 96→0",
        reason: "enables 字段长期混写「技术催生技术」与「技术带来的社会影响/应用」两类语义，且自动生成批次按 summary 关键词机械提取下游，把「重塑社会结构」「推动书籍发展」等描述句名词当成使能目标（典型：trade←帆船/道路/马具、social←互联网/万维网/智能手机、books←造纸/印刷、cooking←用火、hunting←弓箭/火器）。这些指向不存在 id 的断链被 dump_data.js 一并登记为 kind=concept 占位节点，在前端 core.js 因映射不到实体而渲染成灰色虚框标签，即「95 个灰色概念」。另一同源残留藏在全量镜像层：phase2_scores.json 内 (concept) 占位评分条目经 build_full_dataset.js「评分独有节点」分支进入 data_full.js。",
        detail: "① 主库逐条移除 ②③ 类 enables 引用，脏 id calendar(agri)→calendar_agri、mars(未来)→mars_colony（接上真实节点「火星殖民」）；② dump_data.js 重导出 graph.json：概念占位 95→11、enables 边 304→206、断链 enables 12；③ build_full_dataset.js 增加 isConcept 过滤（graph 节点 / new_techs / score 条目三处 + category 回填守卫）并重建：TECHS_FULL 13413→13319、EDGES_FULL 17503→17394、概念节点 0（移除的 94 项经逐 id 比对确认全为概念占位，无真实节点误伤、无新增）；④ 修正 gunpowder / optics 的 algorithm 错挂依赖。"
      },
      changes: [
        "主库 enables 清理：assets/data.js 60 处 + assets/techs_extra.js 2 处，共移除 83 条指向灰色概念的断链引用；真实技术边（如 sail→navigation）保留不动。",
        "graph.json 重导出（dump_data.js）：概念占位 95→11、enables 边 304→206、断链 enables 12（= 11 个待实体化概念，icbm 被 rocket 与 missile 双处引用）；技术节点 2289 / dependency 7340 / 悬空 0 / 年份倒挂 0。",
        "全量镜像同源残留修复：定位到 phase2_scores.json 残留 96 条 (concept) 占位评分条目（经「评分独有节点」分支进入 data_full.js，是该层灰节点长期存在的真正原因）；加固 build_full_dataset.js 的 isConcept 过滤后重建，TECHS_FULL 13413→13319、概念节点 96→0。",
        "脏 id 清理：calendar(agri)→calendar_agri（仍属待建真技术缺口）、mars(未来)→mars_colony（直接接上既有真实节点）；全库复扫含括号 id / 引用 = 0。",
        "顺带修正 algorithm 错挂依赖：gunpowder（火药 850）、optics（光学 1000）的 dependsOn 移除 algorithm（算法理论 825）。全库 216 个 algorithm 下游中 213 个属信息/智能时代（AI/ML 合理），仅 3 个非 AI 时代，前两者已修；mil_depthcharge 属自动生成 stub 捏造依赖链，另案登记。",
        "正式甄别表落档：95 项灰色概念三分类（真技术物 33 / 抽象现象 56 / 应用·上下位 6）+ 逐条处置建议（待实体化 11 / 去重 21 / 降为广义影响 63）落为纠错页 meta.enablesAudit；纠错页新增可勾选渲染（correction.js + style.css），勾选状态本地记忆、可一键清除。",
        "新增纠错记录 CR-2026-0912-enables-semantics（severity 高）；pendingQueue 追加本轮甄别表与新发现两条。",
        "新发现登记（本轮未动）：自动生成 stub 存在捏造依赖链——mil_depthcharge（深水炸弹 1910）dependsOn 含 vacuum_cleaner（真空吸尘器）/ mat_ferrite / tr_simulator，summary 亦写「建立在 真空吸尘器、调峰电站、铁氧体 之上」；techs_more.js 另约 209 条同构 dependsOn（[rocket,algorithm,electronics] 与 [mathematics,computer,statistics,algorithm] 两族）疑为模板注入，待专项甄别。",
        "数据声明同步：README.md（2 处）/ tree_full.html 全量节点 13,413→13,319、依赖/赋能边约 1.75 万→约 1.74 万；check_docs 门禁 OK；纠错页 dry-run 95 行勾选表渲染正常；模型页 dry-run RENDER OK。"
      ],
      files: ["assets/data.js", "assets/techs_extra.js", "analysis-engine/data/graph.json", "analysis-engine/build_full_dataset.js", "assets/data_full.js", "assets/pages/correction_data.js", "assets/pages/correction.js", "assets/style.css", "README.md", "tree_full.html"]
    }
,
    {
      version: "v0.9.18",
      date: "2026-09-12",
      type: "fix",
      title: "构想 B 口径修正：前提齐备是「必要条件」而非「充分条件」",
      summary: "用户指出技术常由多技术共同导致，且条件成熟后未必诞生（可能由社会条件、偶然性催生）。据此复核模型页对「前提齐备律」的表述，判定「Δ 中位仅 0–2 年 ⇒ 前提一旦齐备技术几乎立刻涌现」属过强断言，予以修正：明确前提齐备只是必要条件，齐备之后还须通过「社会·需求门 / 偶然之门 / 路径·淘汰门」三道尚未建模的门；近零中位改判为编年产物；并补量化佐证 r=0.727（r²≈0.53）。仅改页面表述与方法日志，不动数据与网络结构。",
      changes: [
        "model.js 第二节「实证锚点」卡片：标题由「有效滞后 Δ 极短（前提齐备即涌现）」改为「前提齐备是『必要条件』，不是『充分条件』」，徽章 pass→partial（必要非充分）。",
        "新增四道门示意流程：① 前置 AND 门 · 已建模 → ② 社会·需求门 · 未建模 → ③ 偶然之门 · 未建模 → ④ 路径·淘汰门 · 未建模 → 涌现。",
        "csub 改为实时分位口径（n=1879、中位 6 年、均值 30.8 年、p90 100 年、max 993 年；Δ=0 占 35%、Δ>10 年占 46%、Δ≥100 年 190 项），全部由本页实算、不写死常量。",
        "新增「口径声明（方法 v0.9）」：说明近零中位的两条编造成因——① 前置集被学科背景枢纽主导（数学 648 / 化学 426 / 经典力学 289 个下游，早已就位，「齐备」近乎恒真）；② 编年惯例把技术年对齐到最晚前置年附近。二者皆属编年产物、非自然律。",
        "补典型反例：火药 850 → 钻爆法 1843（滞后 993 年）、线膛 1490 → 后膛装填 1850（360 年）、化学 1661 → 石墨烯 2004（317 年）。",
        "补量化佐证：本页实算 year 与 max(前置年) 的 Pearson r=0.727（r²≈0.53），即前置只解释约一半的涌现时间方差，其余由后三道门与误差项承担。",
        "正反馈闭环图内「前提闭包更快满足、有效滞后 Δ ↓」标注为「（假说）」。",
        "MODEL_METHOD 方法日志追加 v0.9 条目（构想 B 口径修正）。",
        "本轮甄别结论留档（未改数据）：Ⅰ 多因共致——主库 2,128/2,289 = 93% 为多前置，但引擎一律以 max() 当同质 AND 门，未区分「必要/可选」与「瓶颈/背景」、亦无权重；Ⅱ 条件齐备却久候——46% 节点滞后 >10 年、190 项 ≥100 年；Ⅲ 偶然性维度全库缺失（summary 命中「偶然/意外」= 0 条）；Ⅳ 分支淘汰仅 4 条且均为赢家叙述；Ⅴ 全量集自动生成层以 year=0 占位制造假滞后（主库 year===0 为 0 个，无此问题）。"
      ],
      files: ["assets/pages/model.js"]
    }
,
    {
      version: "v0.9.19",
      date: "2026-09-12",
      type: "feature",
      title: "理论与解释：新增「技术先行、理论后至」覆盖层标注",
      summary: "用户指出有些技术在刚使用时没有科学解释（或长期靠朴素哲理/神话解释），后来才有科学解释、且解释本身还会被修正。复核发现现有依赖网把 dependsOn 硬编码为「前置」并强制 yearInv=0（前置年 ≤ 技术年），「技术先用、理论后到」在结构上无法表达。本轮不动任何现有边，新增独立覆盖层 theory_data.js 把这层语义抽出来标注，并在详情页渲染「理论与解释」区块。",
      changes: [
        "新增 assets/pages/theory_data.js（覆盖层，只读标注，不改动任何 dependsOn / enables / 节点字段）：meta（层定义与关系四型）+ nodes（节点层）+ retro（事后解释）。",
        "节点层 55 项（首版）：theory 理论与解释 36 / method 方法·制度·工具 9 / tech 明确属技术却误挂「基础」10；覆盖承担 1982 条「基础→技术」依赖边的 30 个枢纽中的全部。",
        "事后解释 20 条（metallurgy / mat_pottery / fermentation / mat_cement / mat_glass / gunpowder / compass / clock / bio_glasses / telescope / steam_engine / vaccination / airplane / bow_arrow / waterwheel / ene_wind / arch / bio_surgery / wheel / textile），每条记 useYear（实际开始使用）/ explain.at（首次科学解释）/ folk（期间朴素解释）/ note。",
        "「无科学解释期」由页面实时计算 explain.at − useYear，不写死：冶金 ≈6660 年、发酵 ≈8860 年、火药 ≈810 年、蒸汽机 ≈112 年、疫苗 ≈94 年、望远镜 ≈58 年。",
        "朴素解释标注（带起止年与「被谁取代」）：四元素说、燃素说（1667–1777 → 氧化说）、自然发生说（→ 微生物致病说）、瘴气说·体液说（→ 微生物致病说）、风水·天人感应（→ 地磁说 → 电磁学）、视觉射线说。",
        "core.js 新增 buildTheoryBlock(t)，挂入 buildDetailHTML（弹窗与整页详情共用单数据源），位置在「关系解说」之后、「不同时期人们的期待与看法」之前；两层皆无标注的节点返回空串。",
        "style.css 新增 .th-* 样式（层徽章三色 / 三格指标 / 斜纹空白条 / 朴素解释 chips），沿用档案卷宗视觉体系。",
        "16 个页面挂载 assets/pages/theory_data.js；core.js 与 style.css 版本串统一为 20260912t。",
        "范围声明：全库 2289 节点中 74 个会显示该区块；节点数、依赖边数与任何现有关系均未变动。",
        "纠错页同步登记 CR-2026-0912-theory-layer（severity 中 / status 进行中）：把本次审计出的三类问题留档——① 依赖网结构上无法表达「技术先用、理论后到」（dependsOn 硬编码前置 + yearInv=0）；② basic 分类混装 24 个非理论节点（仪器 / 技能·符号 / 材料 / 方法·制度 / 领域·未来项）；③ 160 个 bx_* 填充占位（year 全为 1950、下游 0、占 basic 的 53%）；并附带记录全库 summary 无「偶然 / 意外 / 巧合」、无朴素解释标注、淘汰侧不建模三项缺口。",
        "pendingQueue 新增 4 条待办：basic 144 真节点人工重挂（含 24 个明显非理论者）、160 个 bx_* 占位清理、依赖网引入 rel=\"retro\" 事后解释边类型（允许理论年 > 技术年并让 yearInv 按 rel 放行）、55+20 条标注逐条复核（重点 vaccination 1890 / airplane 1904 / compass 1865 三条口径）。",
        "自查修正：节点层分层计数先前误记为 theory 37 / method 7 / tech 11，经逐层实点为 **36 / 9 / 10**（合计 55 不变），已在本条目、《版本迭代》与纠错页三处同步更正。"
      ],
      files: ["assets/pages/theory_data.js", "assets/core.js", "assets/style.css", "assets/pages/correction_data.js", "detail.html", "tree.html", "browse.html", "lineage.html", "analysis.html", "model.html", "tree_full.html", "changelog.html", "correction.html", "method.html", "midtech.html", "progress.html", "research.html", "sop.html", "timeline.html", "worldview.html", "index.html"]
    }

  ]
};
