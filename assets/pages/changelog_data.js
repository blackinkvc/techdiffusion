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
    }
  ]
};
