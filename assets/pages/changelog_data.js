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
,
    {
      version: "v0.9.20",
      date: "2026-09-13",
      type: "fix",
      title: "依赖网全量重建：生成器「位置式模板伪边」三变体清零（处置 1,142 条 / 删 1,015 条）",
      summary: "承接 v0.9.19 的样本修复，本轮把生成管线遗留的模板伪边按「本质与逻辑」全量过一遍：先复核严格「时间最近」变体（778 条）→ 顺藤发现同年份变体（287 条）→ 再发现跨分类同年「前沿并列」变体（97 条），三族合计 1,142 条逐条判定。删 1,015 条、保留核验通过的 152 条、为 97 个被清空的节点补写真实前置。依赖边 7,328 → 6,549（净 −779），节点 2,288 不变，环 0、年份倒挂 0、悬空引用 0。",
      treeChange: {
        scope: "主管线技术网络（模型页 / 分析页 / 来龙去脉页所读）：依赖边 7,328 → 6,549（删 1,015 / 加 236 / 净 −779）；节点 2,288 不变；被删边的节点 647 个、被加边的节点 115 个；位置式模板边 806 → 152（保留者全部逐条核验通过）；无前置节点 9 → 8。",
        reason: "v0.9.19 之后用户裁定按「本质与逻辑」全量重建，并要求「把剩下的所有都过一遍，不要遗漏」。审计显示 tools/gen_run.js 的 nearestEarlier() 只按时间序取前驱，该规则实际产出三族同源伪边：① 严格「时间最近」（B 是 B 所属分类中 year < A.year 的最后一个节点，778 条）；② 同年份变体（B.year == A.year，287 条——此前审计用严格小于比较，整族漏检）；③ 跨分类同年「前沿并列」变体（B 与 A 同年且 B 是该分类截至 A.year 的最新年份节点之一，97 条——因并列年 tie-break 不同而未被 ② 捕获）。三族本质相同：把「当时最新的材料 / 能源 / 信息条目」当成前置，必须清零，否则滞后 / 下游 / 共生统计与来龙去脉页的因果关系持续失真。",
        detail: "① 严格变体 778 条：保留 106 条、删 672 条；复核删边时发现 1 处误伤（rope←stone_tools，属唯一候选槽位且节点简介明写「建立在石器之上」）已恢复。② 同年变体 287 条：保留 29 条、删 258 条；保留者以「系统←自身部件」为主（www←web_server、llm←transformer_arch、smartphone←camera_module）。③ 前沿并列变体 97 条：保留 17 条、删 80 条；此族暴露「人工选取的最新相关节点」与「生成器槽位」会撞车（本轮手写的 mil_assaultbridge←bld_steelbridge 即被同规则命中），故以已裁定的人工边做排除集。④ 被清空节点整表重写 97 个（52 + 38 + 7）。⑤ 环根因：mat_brass 补入的 mat_zinc 经 mat_castiron→…→mat_refractory←mat_brass 制造 8 个环，改回只留 [mat_copper] 后环 0。⑥ 全部改动仅落在 dependsOn 行（621 插入 / 624 删除，无格式噪声）。"
      },
      changes: [
        "① 严格「时间最近」变体（778 条）：逐条过账后保留 106 条、删除 672 条。保留者按三档分类——同分类 75 条（本领域上一节点，如 steam_engine←boiler、mat_wrought←mat_iron、gunpowder←mil_blackpowder）、跨界·材料槽 15 条（如 mfg_bolt/mfg_thread/tr_crane←mat_blastfurnace、inf_mimeograph/tr_windtunnel/mfg_injection←mat_toolsteel）、跨界·其他 16 条（如算术/天文学/数学族←文字、agriculture←stone_hoe、mil_aweapon←ene_nuclear）。",
        "② 同年份变体（287 条）：此前审计用严格小于比较，整族漏检。保留 29 条、删除 258 条。保留者以「系统←自身部件」为主：www←web_server、internet←packet_switch、computer←eniac、llm←transformer_arch、smartphone←camera_module、tunnel←drill_blast、internal_combustion←otto_cycle、genetic_engineering←gene_cloning；跨界 9 条为真实关系：airplane←aircraft_engine、tr_rocket / liquid_rocket←ene_rocketengine、tr_helicopter←ene_gasturbine、mfg_sandcast / mfg_lostwax←mat_casting、mfg_rolling2←mat_rolling、mfg_wiredraw←mat_drawing、architecture←engineering。",
        "③ 跨分类同年「前沿并列」变体（97 条）：保留 17 条、删除 80 条。此族含大量同一模板签名，如 mil_sword 的 [研磨, 渡轮]、mil_sam / mil_cruise / mil_inertial 的 [超声加工, 遥控潜水器]、bld_green / bld_passive / bld_verticalgreen 的 [在机测量]；保留 17 条含 transistor←semiconductors、inf_ram←semiconductors、bld_dronesurvey←drone、bld_bim←mfg_cam、tr_trolley←ene_hydroplant。",
        "④ 被清空节点补写真实前置：整表重写 97 个节点（同年变体 52 + 前沿并列变体 38 + 第三类抽检 7）。示例：tr_metro←[tr_steamloco 蒸汽机车, tr_tunnel2 交通隧道]；tr_maglev←[直线电机, 低温超导]；tr_submarine / tr_train / tr_bicycle / tr_glider / tr_shuttle / tr_reusablerocket 等按「推进 + 结构」两类重挂；mil_rifle←[滑膛枪, 镗床]、mil_machinegun←[来复枪, 铣床, 钢铁]、mil_ballistic←[火箭, 制导技术]、mil_hweapon←[原子弹, 核裂变反应堆]、mil_nuclearsub←[潜艇, 核裂变反应堆]、mil_aewc←[飞机, 雷达, 无线电]、mil_thermal←[夜视仪, 半导体材料]；bld_immersed←[钢筋混凝土, 挖泥船]、bld_pump←[钢筋混凝土, 内燃机, 起重机]、bld_zeroenergy←[太阳能光伏, 太阳能热利用, 地源热泵建筑]；bld_curtain 由浮法玻璃（1952，晚于节点 1950）改为钢化玻璃以消除年份倒挂。",
        "⑤ 第三类抽检（本轮新发现）：mat_brass 原前置 mat_glass 属位置边被删后补入 [红铜冶炼, 锌冶炼]，其中 mat_zinc 经 mat_castiron→mat_anneal…→mat_refractory←mat_brass 形成 8 个环；改为只保留 [红铜冶炼]（黄铜＝铜＋锌矿，金属锌出现晚于黄铜）后环归零。同时清理 mat_refractory←黄铜、mat_stoneware←汞/黄铜、mat_mercury←黄铜、mat_concrete←炻器/汞 等「黄铜 / 汞」系无意义前置；sail 由 [轮子, 木炭] 改为 [桨, 编织, 木作]；polymer_chem 去「证明论」；mil_torpedo 由 [现代炸药(1867), 螺旋桨] 改为 [螺旋桨, 硝化甘油, 雷管]，消除全库唯一一处年份倒挂。",
        "⑥ 计数与校验：依赖边 7,328 → 6,549（删 1,015 / 加 236 / 净 −779）；节点 2,288 不变；重边 0、自环 0、悬空前置 0、年份倒挂 0、环 0；无前置节点 9 → 8（rope←stone_tools 恢复；其余 8 个为 language / stone_tools / fire / wheel / mfg_stone / fire_drill / gesture_comm / magnet，均属文明起点）。全量校验链：tools/check_docs.js [OK]（TOTAL 2288 / TOTAL_FULL 13318）、模型页 runtime 干跑无残留模板串、前置性质渲染干跑（钢笔 6 枚 / 控制论 4 枚含 2 枚虚边 / 巴拿马运河 4 枚）、纠错页干跑 9/9。",
        "⑦ 方法论存疑记录（重要）：位置式判定规则只能作**筛查信号**，不能作判据。新采用的前置里只有极少数恰好命中「时间最近」启发式，而正确边（如 电话→电话交换机）会被该启发式误判；同理「同年」也不能当判据——全库同分类同年的 654 条边属正常「系统←自身部件」关系（www←http、smartphone←soc、tunnel←盾构机）。",
        "⑧ 改动形态：仅改写 dependsOn 行，621 插入 / 624 删除，无格式噪声；compact 格式（assets/data.js，元素不带引号、是 JS 标识符引用）与多行数组均按原 token 文本处理，不重新加引号（曾因重新加引号触发 ReferenceError: mathematics is not defined，已回滚改用原文本保留）。",
        "⑨ 纠错页同步：CR-2026-0913-positional-template 状态由「进行中」更新为「已修正（全量）」，补记三族判定与补前置明细；纠错页 pendingQueue 中「生成式依赖网全量重建」一条标记为已执行，余下待办收敛为 1027 条模板文案重写与 22 组同名节点去重。",
        "⑩ 遗留（本轮未动）：1027 条 upgrade_stubs 三段模板文案（与本轮改边无关，需另批按新前置重写）；22 组同名节点去重；12 条 enables 悬空引用（icbm / comsat / film / copilot 等，已在纠错页 enablesAudit 逐条列明）。"
      ],
      files: ["assets/techs_extra.js", "assets/techs_more.js", "assets/techs_extend.js", "assets/data.js", "assets/pages/changelog_data.js", "assets/pages/correction_data.js", "版本迭代日志.md", "index.html", "tree.html", "tree_full.html", "browse.html", "detail.html", "lineage.html", "analysis.html", "model.html", "changelog.html", "correction.html", "method.html", "midtech.html", "progress.html", "research.html", "sop.html", "timeline.html", "worldview.html"]
    }

,
    {
      version: "v0.9.21",
      date: "2026-09-13",
      type: "fix",
      title: "生成器槽位边收口：「同分类最近前驱」伪边按生成器复现逐条判定（处置 719 / 删 549 / 补 95 节点真实前置）",
      summary: "改用确定性方法收口——把 tools/gen_run.js 的依赖接线在隔离目录复跑、给每条边打来源标签，据此筛出「生成器同分类槽位边」并只取当前仍存活的 719 条，逐条语义判定后删 549 条、保留 170 条，并为因此失去全部前置的 95 个节点补写真实前置。依赖边 6,549 → 6,139（删 549 / 加 139 / 净 −410），节点 2,288 不变；环 0、年份倒挂 0、悬空前置 0、重边 0、自环 0；零前置节点维持 8 个文明起点。95 个节点的模板枚举句同步按新前置重写，残留引用 0 条。",
      treeChange: {
        scope: "主管线技术网络（模型页 / 分析页 / 来龙去脉页所读）：依赖边 6,549 → 6,139（删 549 / 加 139 / 净 −410）；节点 2,288 不变；受改节点 490 个；位置式同分类槽位边由 719 条压到 170 条。",
        reason: "v0.9.20 已清掉「时间最近」三族伪边，但检测器把生成器建模成「1 个槽位 + 按年份取最近 + 用当前排名」，而 tools/gen_run.js 第 67-70 行的实际规则是「同分类最近前驱（最多 2 个，按 key = year*100000 + 插入序、在生成时刻求值）」。两处盲区导致伪边残留：① 第 2 槽位从未被扫描；② 后插入的同分类节点会把旧槽位边挤出视野（排名漂移）。用户报的「智能割草机器人 → 通用疫苗」正是 ②：smart_mower 生成时是生命类 rank 1，2026-08-25 拆解批次插入 mower_nav / mower_deck（同为 2015 年）后掉到 rank 3，从此落在检测器视野之外。",
        detail: "① 复现：把 tools/gen_techs.js + gen_run.js 复制到隔离目录（gen_run.js 结尾会 fs.writeFileSync 覆盖 assets/techs_extra.js，绝不可在仓库内直跑），锚点源换成拆解前快照 assets/data.before_disasm.js，并在依赖分配三处插入 ORIGIN[子>前] 标签后复跑 —— 结果与原生成文件 assets/techs_extra.backup.js 完全一致（bio_universalvax 复现为 [chemistry, mathematics, smart_mower, bio_crispr]），证明可确定性还原生成器产物。复现规模 1,104 节点 / 3,900 边，来源构成 prereq（跨类前提）2,834 / slot1（同分类最近 1）989 / slot2（同分类最近 2）983；当前仍存活 1,137 / 551 / 168。② 候选集：只取同分类槽位（slot1 + slot2）且当前仍存活者 = 719 条，逐条按「A 是否真的建立于 B 之上」判定，删 549、留 170（完整划分，无越界项）。③ 补前置：删边后有 95 个节点会失去全部前置（如 牙科 原只依赖「犁」、自动扶梯 只依赖「驱逐舰」、防水 只依赖「灌浆」），逐个人工补写真实前置并经 id 存在性 + 年份不倒挂校验（95/95 通过）。④ 安全校验：应用后环 0、年份倒挂 0、悬空 0、重边 0、节点数不变；95 个补前置节点逐条断言与期望一致。⑤ 文案：96 个节点的正文仍在复述已删前置，其中 95 个属模板枚举句（「依托 A、B 把 … 落到实处」「建立在 … 之上」「依托 A 解决了 …」「把 A 与 … 连接起来」），按新 dependsOn 重写后残留 0；另 1 个（传真机）的「摄影」出现在手写史实叙述中，属误报，未改。⑥ 改动形态：仅 dependsOn 行与模板文案句，无格式噪声。"
      },
      changes: [
        "① 方法论升级（本轮关键）：弃用「启发式排名检测」，改用「生成器复现 + 与当前数据逐边 diff」的确定性方法。启发式追不上排名漂移（节点陆续插入会让旧槽位掉出视野），复现则能一次性还原生成器的全部产物并给出每条边的来源标签（slot1 / slot2 / prereq）。",
        "② 复现设施与铁律：隔离目录复跑（/tmp/repro），锚点源 = assets/data.before_disasm.js（拆解前快照，112 锚点），在 gen_run.js 依赖分配三处植入 ORIGIN 标签后输出 origin.json。铁律：绝不可在仓库内直接跑 gen_run.js —— 其结尾会覆盖 assets/techs_extra.js。",
        "③ 候选与判定：同分类槽位边当前存活 719 条（basic 58 / build 53 / energy 67 / info 95 / life 180 / manufact 86 / material 116 / military 7 / transport 57）。判定口径 = 「A 是否真的建立于 B 之上」；仅时间相邻、或同域但互为并列（如 消毒剂←流行病学、益生菌←腹腔镜、核医学←超声诊断、inf_ssd←万维网、mat_gold←红铜）一律判删。结果：删 549、留 170。",
        "④ 保留样例（真实前置）：counting←language、numerals←counting、cartography←arithmetic、telescope←observ_astron、kepler_laws←telescope、calculus←physics、probability←combinatorics、atomic_theory←spectroscopy、computer_sci←lambda_calc、control_theory←info_theory、bld_adobe←bld_rammed、bld_gothic←bld_flying、bld_shield←bld_underground、mfg_handaxe←mfg_stone、mfg_lostwax←mfg_sandcast、mfg_lathe←iron_smelting、mfg_thread←mfg_bolt、mat_iron←iron、mat_quench←mat_heat、mat_temper←mat_quench、mat_2d←mat_graphene、mil_arrow←mil_bow、mil_sniper←mil_rifle、tr_lighthouse←tr_navigation、tr_simulator←airplane、tr_passdrone←tr_cargo_drone。",
        "⑤ 删除样例（位置式伪边）：农业类 bio_dentistry←犁、bio_acupuncture←犁、bio_chemotherapy←益生菌、bio_enzyme←核医学、bio_mri←基因工程；信息类 inf_ssd←万维网、inf_hash←彩色电视、inf_db←激光器、inf_compiler←强化学习、inf_cache←负载均衡；交通类 tr_escalator←驱逐舰、tr_hyperloop←平衡车、tr_icebreaker←人造卫星、tr_aircraftcarrier←叉车、tr_lunarlander←自主水下航行器；建筑类 防水←灌浆、自然采光←保温隔热、通风←自然采光、给排水←通风（1800 年退化链）；材料类 mat_porcelain←造纸、mat_lead←青铜、mat_stainless←低温超导、mat_pe←气凝胶。",
        "⑥ 补写真实前置（95 个节点，示例）：bio_dentistry←[草药学, 石器]、bio_herb←农业、ene_hydro←轮子、ene_coal←石器、bld_timber←[木作, 土坯砖]、bld_tile←[窑, 陶器]、bld_stone←[砖石砌筑, 石器]、bld_hvac←[热力学, 铸铁]、bld_3dpb←[3D 打印, 预制构件]、bld_smartcity←[云计算, 智能建筑]、mat_gold←锤、mat_casting←陶器、mat_castiron←块炼铁、mat_blastfurnace←冶铁、mat_porcelain←[窑, 炻器]；交通类 tr_steamloco←蒸汽机、tr_destroyer←[蒸汽船, 鱼雷]、tr_radar2←[无线电, 电磁学]、tr_jetliner←喷气发动机、tr_evcar←[电池, 电动机]、tr_hyperloop←高速铁路。校验：95/95 覆盖、引用的 id 全部存在、无年份倒挂、无重复、应用后环 0。",
        "⑦ 文案一致性：96 个节点的正文仍在复述已删前置。按句式定位后改写 95 个（模板枚举句），残留引用 0。例：牙科「依托 数学、犁、草药学 把 …」→「依托 草药学、石器 把 …」；水力利用「依托 用火、木炭 把 …」→「依托 轮子 把 …」。手写史实叙述中的同名词（如传真机的「摄影制版」）不属模板枚举句，未改。",
        "⑧ 计数与校验：依赖边 6,549 → 6,139（删 549 / 加 139 / 净 −410）；节点 2,288 不变；重边 0、自环 0、悬空前置 0、年份倒挂 0、环 0；零前置节点 8 个（language / stone_tools / fire / wheel / mfg_stone / fire_drill / gesture_comm / magnet，均文明起点）。校验链：/tmp/check_net.js 全绿；tools/check_docs.js [OK]（TOTAL 2288 / TOTAL_FULL 13318）；模型页 runtime 干跑无残留模板串（P 1.33/R² 0.874、K 2.04/R² 0.932）；依赖徽章干跑（钢笔 6 枚 / 控制论 4 枚含 2 虚边 / 巴拿马运河 4 枚 / 传真机 3 枚 / 充气轮胎 4 枚；兜底蒸汽机 8 枚）；纠错页干跑 9/9。",
        "⑨ 遗留（本轮未动，下一批）：① 264 个节点删边后仅剩泛化枢纽前置（数学 / 化学 / 文字），需逐个人工补写领域前置 —— 这是本轮「诚实但单薄」的代价，已登记；② 1027 条 upgrade_stubs 三段模板文案整批重写；③ 22 组同名节点去重；④ 12 条 enables 悬空引用；⑤ 部分节点的「直接催生了 X、Y」列表仍与当前反图不一致（反向索引陈旧，非本轮改动所致）。"
      ],
      files: ["assets/techs_extra.js", "assets/pages/changelog_data.js", "assets/pages/correction_data.js", "版本迭代日志.md", "index.html", "tree.html", "tree_full.html", "browse.html", "detail.html", "lineage.html", "analysis.html", "model.html", "changelog.html", "correction.html", "method.html", "midtech.html", "progress.html", "research.html", "sop.html", "timeline.html", "worldview.html"]
    }

,
    {
      version: "v0.9.22",
      date: "2026-09-13",
      type: "fix",
      title: "结构体检与分步检修（一）：四类结构问题基线量化 + 阶段 0/1 执行（F 族 27→8、同名重复 23→0、零前置 8→4）",
      summary: "建立可复跑的结构体检器与逐条判定台账，把全库结构问题量化为 A / E / Ch / F 四族（基线 563 / 173 / 267 / 27）并据此编制《技术网络检修计划》（含编制日期与逐批状态栏），随后执行阶段 0（工具与门禁）与阶段 1（止血三批）：F 族 27 条边处置为删 15 / 改前置 4 / 保留 8，并补真实前置 10 条；零前置节点 8 → 4、孤立节点 2 → 0；23 组同名重复节点合并。节点 2,288 → 2,265，依赖边 6,139 → 6,091；环 0 / 自环 0 / 重复边 0 / 悬空前置 0 / 年份倒挂 0。",
      treeChange: {
        scope: "主管线技术网络（模型页 / 分析页 / 来龙去脉页所读）：节点 2,288 → 2,265（合并 23 组同名重复节点）；依赖边 6,139 → 6,091；F 族（跨分类且年份跨度 > 800 年）27 → 8；同名重复组 23 → 0；零前置节点 8 → 4（石器 / 用火 / 手势交流 / 天然磁石）；孤立节点 2 → 0；A 族（全部真实前置仅落在泛化学理枢纽内）563 → 562；Ch 族（下游依赖 = 0 且 year < 1900）267 → 260。新增文件 tools/audit_net.js / tools/apply_ledger.js / tools/merge_dups.js、audit/ledger.json / audit/baseline.json、技术网络检修计划.md。",
        reason: "用户要求按严谨科学研究口径做结构体检与分步检修，不以主观印象为据，即先有可复核的量化基线、再按统一判定标准逐条处置、全程留痕。体检确认四类系统性结构问题：① A 族 563 个节点的全部真实前置都落在 14 个泛化学理枢纽内（数学 / 化学 / 经典力学 / 算法理论 / 统计学 / 工程学 / 文字 / 数值分析 / 最优化 / 分子生物学 / 材料科学 / 遗传学 / 免疫学 / 语言），下游集中度极高——数学一个节点被 637 个节点依赖；② E 族 173 个节点仅有 1 条真实前置且该前置即为泛化枢纽，其中 68 个属制造类（该族最大子类），病灶形态为机床族与焊接族前置一律写作「数学」；③ Ch 族 267 个节点的下游依赖数为 0 且年份早于 1900，属历史断链，其中 basic 类 42 个——三角学 / 对数 / 群论 / 集合论 / 图论等数学分支全为叶子，表明分支间依赖链缺失；④ F 族 27 条边跨分类且年份跨度超过 800 年，其中「马蹄铁(300)」指向 10 个军事节点一节无任何成立机制。四类问题同源：出自「时间就近取前驱」的生成规则与后续批量改写，故须按统一的四条判定标准逐条复核。",
        detail: "阶段 0（工具与门禁）：新建 tools/audit_net.js 体检器，输出完整性六项（环 / 自环 / 重复边 / 悬空前置 / 悬空 enables / 年份倒挂）与结构问题族（A / E / Ch / F / 重名组 / 零前置 / 孤立 + 分类明细 + 双管线差异），支持 --json / --snapshot 写基线 / --check 对照基线，mustZero = 环 / 自环 / 重复边 / 悬空前置 / 年份倒挂，五族计数劣化即非零退出；新建 audit/ledger.json 判定台账，每批次存逐条 verdict + reason + newParent + backfills（外加 keepRule / notes / summary），驱动脚本断言「keep + repoint + delete + concept = candidates」与「backfills.length = summary.backfill」，不允许漏判；给 tools/gen_run.js 加 --no-write 干跑开关、同分类槽位边上限断言（超限拒写，实测槽位边 1,065 / 3,899 = 27.3%，默认上限 0 即拒写）与写出前自动备份到 /tmp。阶段 1（止血三批）：1a 处置 F 族 27 条边——删 15 条（inf_pen←paper，以及 10 条 mil_*←tr_horseshoe、metamaterial / directed_energy / mil_directedenergy / display←optics）、改前置 4 条（holography←wave_optics，led / lasers / laser←quantum_mech）、保留 8 条，并为因删边失去前置的节点补真实前置 10 条（板甲←钢铁 + 锻造，火绳枪 / 滑膛枪 / 手枪←火药 + 铁器 + 螺纹，防弹衣←板甲 + 钢铁，地雷←火药 + 铁器，火箭弹←火药 + 箭，加农炮←火药 + 青铜铸造，手榴弹←火药，自然采光←建筑学）；1b 为 4 个无前置的文明起点补真实前置（轮子←木作，石器打制←石器，钻木取火←石器 + 用火，语言←手势交流）；1c 合并 23 组同名重复节点，冗余项全部位于 techs_extend.js、保留项为含 views 富字段者，其中 3 组并入冗余项独有且时序成立的 7 条前置（mat_forging←用火 + 风箱 + 木炭，ene_charcoal←用火，tr_canoe←用火 + 石器），4 条并入项因时序性剔除（iron→mat_forging、microwave→ene_wpt、iot→mfg_digitaltwin、crispr→bio_genetherapy），全库 dependsOn 16 处 / enables 3 处引用同步改指，残留引用 0。全部写盘经五道门：台账完整划分断言、时序性校验、环校验、逐节点写后断言、残留引用检查，逐批通过。"
      },
      changes: [
        "① 体检器（新增 tools/audit_net.js）：可复跑的全库结构体检，输出完整性六项与结构问题族，支持写入 audit/baseline.json 基线快照并用 --check 做回归门禁（mustZero = 环 / 自环 / 重复边 / 悬空前置 / 年份倒挂；A / E / F / 重名组 / 孤立五项计数不得上升）。基线快照：节点 2,288 / 依赖边 6,139、A 563 / E 173 / Ch 267 / F 27 / 重名组 23 / 零前置 8 / 孤立 2。",
        "② 判定台账（新增 audit/ledger.json）：把「逐条判定」从对话搬进文件——每条候选边记录 verdict（保留 / 改前置 / 删边 / 降级为概念影响）+ reason + newParent，每批次记录 backfills 与 summary；驱动器断言 keep + repoint + delete + concept 恰好等于候选数、backfills 数恰好等于 summary.backfill，从机制上杜绝漏判。",
        "③ 判定四标准（写入计划文档，作为全阶段统一口径）：新增或保留一条「A 是 B 的前置」须同时满足——必要性（去掉 A，B 是否仍能按史实出现；仅因同处一个时代或同一大类不成立）、排他性（A 是否为该环节最直接先行者）、时序性（A 年份早于 B 或同期可达）、域内优先（跨域须有明确传导机制）。",
        "④ 阶段 1a · F 族 27 条边处置：删 15 / 改前置 4 / 保留 8，补真实前置 10 条。F 族计数 27 → 8，剩余 8 条为跨域但有明确传导机制者（如火药→火箭 / 钻爆法）。",
        "⑤ 阶段 1b · 文明起点补前置：零前置节点 8 → 4（轮子←木作，石器打制←石器，钻木取火←石器 + 用火，语言←手势交流），孤立节点 2 → 0。收敛后的起点为石器 / 用火 / 手势交流 / 天然磁石四个。",
        "⑥ 阶段 1c · 同名重复节点合并：23 组一次合并，节点 2,288 → 2,265，同名重复组 23 → 0。保留规则以「具备 views 与 applications 富字段」为准（详情卡依赖该字段），该类条目年份均不晚于同名冗余项；并入冗余项独有前置 7 条、按时序性剔除 4 条；dependsOn 16 处 / enables 3 处引用改指，残留引用 0。",
        "⑦ 生成器护栏（阶段 0.3）：tools/gen_run.js 增加 --no-write 干跑开关与同分类槽位边上限断言。实测该生成器每次运行会产生槽位边 1,065 条（占 3,899 条的 27.3%）、指向 mathematics 的固定槽位边 458 条——即模板污染的再生源。默认上限为 0，任何重跑在未显式加 --allow-overflow 时一律拒写，并在写出前自动备份现有产物。",
        "⑧ 台账驱动执行（新增 tools/apply_ledger.js / tools/merge_dups.js）：执行器从台账推导期望状态，先做完整划分 / 时序 / 环三重校验，再按「块级正则 + 引号风格回退探测」改写，写盘后重新加载数据逐节点断言。引号风格必须回退到文件级探测——当原数组为空时依据数组内容判定会失效并写出无引号 id，本轮即因此写脏过一次，已从备份回滚并修正判据。",
        "⑨ 计划文档《技术网络检修计划.md》：补齐编制日期（2026-09-13）、最近修订、基线版本、当前状态与修订记录表；每个批次表新增日期栏与状态栏；F 族 27 条逐条列表（跨度 / 依赖者 / 前置 / 初步判定）；删除全部主观表述，改为可复核的中性数据陈述。",
        "⑩ 后续批次（阶段 2–5，已登记待执行，详见《技术网络检修计划.md》）：阶段 2 为 96 条中间技术入网（basic + material / energy + transport / manufact + build / life + military / info 五批，优先插入阶段 1 登记的断链位置，目标 Ch 族 267 → 120 以下）；阶段 3 为前置补齐（E 族 173 → 0、A 族 563 → 150 以下，分 E 族 173 与 A 族 basic 176 / material 96 + life 80 / info 92 + manufact 68 + energy 48 四批）；阶段 4 为结构与元数据治理（覆盖矩阵空缺逐格判定、纪元体系统一并校对、近现代占比评估、反向索引与反图对齐并清 12 处 enables 悬空引用）；阶段 5 为全量对齐与收口（按主管线重建 graph.json 并清 11 个独占节点、重写 1,027 条 upgrade_stubs 模板文案、生成器语义硬约束、全量回归与上线）。"
      ],
      files: ["assets/techs_extra.js", "assets/techs_extend.js", "assets/techs_more.js", "assets/data.js", "技术网络检修计划.md", "tools/audit_net.js", "tools/apply_ledger.js", "tools/merge_dups.js", "tools/gen_run.js", "audit/ledger.json", "audit/baseline.json", "assets/pages/changelog_data.js", "assets/pages/correction_data.js", "版本迭代日志.md", "index.html", "tree.html", "tree_full.html", "browse.html", "detail.html", "lineage.html", "analysis.html", "model.html", "changelog.html", "correction.html", "method.html", "midtech.html", "progress.html", "research.html", "sop.html", "timeline.html", "worldview.html"]
    }

,
    {
      version: "v0.9.23",
      date: "2026-09-13",
      type: "fix",
      title: "阶段 2 重新裁定：原「96 条中间技术入网」前提核查后撤销（96/96 已在主管线）＋ 修复中间技术库重复条目与生成器护栏",
      summary: "执行阶段 2 前先做前提核查，确认原方案不成立：中间技术库的 96 条条目 id 与名称全部已在主管线中（连 data.js 的 4 条手工案例也在），它们是 tools/gen_midtech.js 按「跨领域汇聚」口径从主管线筛出的案例视图，而非待入网的新技术——按原方案执行会新增 96 个重复节点。据此撤销「入网」，改为「性质核查与防再生」：修复库内重复条目 mil_smartmunition（96 → 95 条）、给 gen_midtech.js 加护栏（重复 id / 断链背景即中止、--no-write 干跑、写前备份、漂移报告）、把「重建 backgrounds + 重写 69 条摘要枚举句」移交阶段 5、并把 Ch 族目标并入阶段 3。本轮未改动网络数据（节点 2,265 / 依赖边 6,091 不变）。",
      treeChange: {
        scope: "无（阶段 2 未改动主管线网络数据：节点 2,265 / 依赖边 6,091 与阶段 1 完成后一致）。仅改动 assets/techs_midtech.js（96 → 95 条）与 tools/gen_midtech.js；变更的是检修框架的阶段划分与本项目对中间技术库性质的认定。",
        reason: "原阶段 2 的设计基于一条错误认定——把「中间技术库」当成「96 条未入网的技术」。核查发现该库的每一条 id 都已在主管线中，其缺少 category / dependsOn 只是因为该视图层只携带展示所需字段；gen_midtech.js 的头部注释（「从已有技术按跨领域汇聚口径筛选」）与数据源（TECHS）都指向这一点。若不做前置核查而直接执行，会向主管线注入 96 个重复节点，正是阶段 1c 刚清理掉的缺陷类型；同时其 backgrounds 取自生成时刻的旧 dependsOn，与清理后的网络已偏离 85/96。据此撤销原方案并把对齐工作推到结构定稿之后，避免同一批文案改写两遍。",
        detail: "核查证据：① 重叠 96/96（0 条独立新技术，手工 4 例亦在内）；② 库内 mil_smartmunition 重复登记两次（index 50 / 57），两条 date / summary / backgrounds 完全不同；③ backgrounds 与当前 dependsOn 对比：完全一致 11 条、含已删前置 44 条、缺新前置 1 条、双向偏离 40 条；④ 95 个唯一 id 中 69 条的摘要含前置枚举句且与当前前置不符（依托 X 把…36 条、建立在 X 之上 36 条、承接 X，5 条、族 E 的在 X 之上 / 以 X 为基若干），其中多数属 A / E 族（前置待阶段 3 补齐）；⑤ 以当前数据重跑 gen_midtech.js 只产出 32 条（候选门槛 dependsOn >= 4 在清理后大部分节点已不满足），即原库无法按原口径复现。处置：修复重复条目（保留 index 50）、新增 tools/fix_midtech_dup.js、gen_midtech.js 加护栏、批次结论写入 audit/ledger.json 的 batches[2.1]、计划文档 §1.8 更正误读并重排阶段 2 与阶段 5d。"
      },
      changes: [
        "① 前提核查（本批关键）：执行前先验证方案假设，而非直接动手。结论为原「96 条中间技术入网」撤销——96 条条目全部已在主管线中（同 id、同名称），0 条为独立新技术。",
        "② 误读更正：计划文档 §1.8 原写「无 category、无 dependsOn，未进入主管线」，改用准确表述——该库是主管线的案例视图，缺字段只是视图层设计；并补记其 backgrounds 与当前 dependsOn 的偏离统计。",
        "③ 库内重复修复：mil_smartmunition（智能弹药）登记两次（index 50「2010 年」与 index 57「21 世纪」，summary 句式亦不同），保留与主管线 date 一致的首次出现者，条目 96 → 95，唯一 id 95/95；执行器 tools/fix_midtech_dup.js（干跑 + --apply + 写后唯一性断言）。",
        "④ 生成器护栏：tools/gen_midtech.js 在写出前断言重复条目 = 0、断链背景 = 0（原代码只计数不中止，故重复条目得以留存）；新增 --no-write 干跑开关、写前自动备份到 /tmp、以及与现有文件的 backgrounds 漂移报告（干跑实测漂移 23 / 32）。",
        "⑤ 生成器不可复现（新发现）：以当前数据重跑 gen_midtech.js 的候选集从 96 条塌缩为 32 条（material 2 / energy 3 / manufact 3 / transport 6 / info 2 / life 14 / build 2），原因是候选门槛 dependsOn.length >= 4 在 v0.9.20 / v0.9.21 清理后已不适用；原库的 96 条是在清理前的网络状态下选出的。生成器口径修订列为阶段 5d。",
        "⑥ 阶段划分调整：原寄望「中间技术入网」压低 Ch 族（267 → 120）的目标并入阶段 3——Ch 族的成因是「无下游」，只能靠补 / 改前置解决（阶段 1a / 1b 已验证有效），无法靠新增节点解决；「中间技术库与主管线对齐」移入阶段 5d，在结构定稿后一次性执行。",
        "⑦ 台账：批次结论写入 audit/ledger.json 的 batches[2.1]（family = SCOPE，verdict = 撤销（前提不成立），6 条 findings + 4 条 actions），供回溯与审核。",
        "⑧ 本轮不动网络：节点 2,265 / 依赖边 6,091 与阶段 1 完成后一致；回归门禁 audit_net --check [OK]，文档门禁 check_docs [OK]（TOTAL 2265）。"
      ],
      files: ["assets/techs_midtech.js", "tools/gen_midtech.js", "tools/fix_midtech_dup.js", "audit/ledger.json", "技术网络检修计划.md", "assets/pages/changelog_data.js", "assets/pages/correction_data.js", "版本迭代日志.md", "index.html", "tree.html", "tree_full.html", "browse.html", "detail.html", "lineage.html", "analysis.html", "model.html", "changelog.html", "correction.html", "method.html", "midtech.html", "progress.html", "research.html", "sop.html", "timeline.html", "worldview.html"]
    },
    {
      "version": "v0.9.24",
      "date": "2026-09-13",
      "type": "fix",
      "title": "阶段 5.1 派生数据同步：节点文案 3,313 处、中间技术库 84 + 69 条、全量管线 576 条伪边与主管线对齐",
      "summary": "把「生成时刻快照」类的派生数据统一以当前主管线为准重算并工具化。三件事：① 主管线 977 个节点的 3,313 处模板文案（summary / significance / views）——v0.9.20/21 删除 577 条伪边后未同步，文案里仍写着已删除的前置与不存在的下游；② 中间技术库 95 条条目的 backgrounds（84 条）与摘要（69 条）——原为生成时刻 dependsOn 的快照，批次 5.0 抽检显示 5/5 残留；③ 全量管线——把该批次已判定删除的 576 条伪边从 graph.json 与 data_full.js 两侧移除（tree_full.html 此前仍在展示它们）。三项均为「派生数据重算」，不改动任何因果结构判定；重跑皆为不动点。网络本身未变：节点 2,265 / 依赖边 6,091。",
      "treeChange": {
        "scope": "主管线依赖网络（节点 / 依赖边）未改动：仍为 2,265 个节点 / 6,091 条依赖边。本次改动的是三类派生数据 —— ① 节点展示文案（summary / significance / views[].text）977 节点 3,313 处；② 中间技术库 assets/techs_midtech.js 的 backgrounds（84 条）与 summary（69 条）；③ 全量管线 analysis-engine/data/graph.json（边 7,539 → 6,963）与 assets/data_full.js（边 17,387 → 16,811）。全量管线节点数不变（2,299 / 13,318）。",
        "reason": "这三类数据都是「某一时刻从依赖网络导出」的快照，而依赖网络在 v0.9.20/21 被大幅清理（删 577 条位置式伪边、95 个节点补写真实前置），快照却未重算，于是文案与背景继续把已判为错误的关系讲成史实——即「结构错 → 文案把错讲成史实」这条根因链的末端。用户抽检 5 条关系时确认：主管线 dependsOn 已 0/5 残留，但节点摘要 3/5、中间库 backgrounds 5/5、全量管线 1/5 仍有残留。因此本次不逐条打补丁，而是把「重算公式」固化为工具：文案按 tools/upgrade_stubs.js 的原公式（upsStr = dependsOn 前 3 项、downsStr = 反图前 3 项、模板选择 = hash(id) % 2）重算；中间库背景按 gen_midtech.js 的原口径重算；全量管线则只做「既成判定的传播」。三者可随时重跑，后续批次改完 dependsOn 只需重跑即归零漂移。",
        "detail": "① 文案同步：识别为模板句者 3,942 处、手写散文 1,724 处（一律不动）；实际改写 3,313 处（summary 953 + significance 940 + views[].text 1,420），按段落归属为「仅上游段变」745、「仅下游段变」1,725、「上下游都变」712、模板切换 131。样例：mfg_3dp 由「建立在 激光熔覆、碟式斯特林、数学 之上」改为「建立在 数学、CNC、计算机 之上」；positional 由「建立在 语言、文字、数学 之上…并为 代数 的发展铺平了道路」改为「建立在 文字、数学、零的概念 之上…」（下游子句按当前反图移除）。② 中间库：backgrounds 84 条变化、summary 69 条、born 5 条，95 条目录集合不变；mat_graphene 清掉已删除的 mat_selfheal，mil_loyalwingman 由 [工业4.0, 摩擦纳米发电, 二维材料, 可重复使用火箭] 变为 [无人机, 隐身技术2]。未重选案例集合——以当前数据重跑 gen_midtech.js 只能选出 32 条且 life 占 14 条，属筛选口径失效（已登记 5d），案例集合维持人工策展。规则抽为 tools/midtech_rules.js 供生成器与本工具共用，重构后生成器干跑输出与重构前逐字节一致。③ 全量管线：以 git eaa086f^ 与当前主管线逐边 diff 得到该批次判定删除的 577 条，核验其中 576 条同时存在于 graph.json 与 data_full.js（两侧互为交叉校验）、无一被主管线重新承认、两端节点在 TECHS_FULL 中均存在，据此两侧各移除 576 条（dependency 575 + enables 1），清单存 audit/full_pipeline_exclusions.json；graph.json meta.totalTechs 一并由 2,288 修正为 2,265（1c 批次重名合并后未同步的陈旧值）。方法学结论：对全量管线使用「位置式签名」启发式扫描，上述 576 条真实伪边中仅 18 条命中该签名——印证该签名只能作筛查信号、不能作判据，确定性方法是「生成器复现 / 既成判定传播 + 逐边 diff」。"
      },
      "changes": [
        "① 派生文本同步（主管线）：977 个节点 3,313 处改写，工具 tools/regen_text.js。只替换被完整模板骨架识别的句子，1,724 处手写散文全部未动（例：tr_pneumatictire 的「天然橡胶与硫化工艺」）。逐节点断言 id 锚点唯一、字段现值与预期逐字相符；写后校验 EXTRA_TECHS 仍 1,033 条。",
        "② 改写范围（按变化性质）：删已不存在的下游子句 1,657 处、补新出现的下游 142 处、仅枚举项/顺序变化 656 处、模板切换 131 处。上游段受影响 1,457 处、下游段 2,437 处。",
        "③ 中间技术库对齐：backgrounds 84 条、summary 69 条、born 5 条，工具 tools/regen_midtech.js。写后断言无断链背景（tech 字段全部指向存在节点，原文件存在 undefined 背景）、无重复 id、条目数 95 不变。",
        "④ 共享规则抽出：FAMOUS / CAT_ABILITY / noteFor / crossSelf / chosenUps 由 gen_midtech.js 内联改为 tools/midtech_rules.js，生成器与同步器共用一套口径，避免二处分叉；顺带修正 CAT_ABILITY 键名（原表用 basicscience / building，而实际分类 id 为 basic / build，导致这两类前置的注释一律退化为兜底句）。重构后 gen_midtech.js 干跑输出与重构前逐字节一致（32 条 / 漂移 23 / 样例相同）。",
        "⑤ 全量管线同步：graph.json 边 7,539 → 6,963，assets/data_full.js 边 17,387 → 16,811，两侧各移除 576 条（dependency 575 + enables 1），节点数均不变（2,299 / 13,318）。工具 tools/prune_full_pipeline.js，排除清单 audit/full_pipeline_exclusions.json（含来源提交与生成日期，可复核）。",
        "⑥ 元数据计数修正：graph.json meta 的 totalTechs 2,288 → 2,265、totalEdges 7,539 → 6,963、depEdges 7,333 → 6,758、enaEdges 206 → 205；data_full.js SCORE_META.totalEdges 17,387 → 16,811，并按既有约定写入 patchedAt / patchNote。",
        "⑦ 双管线分叉收窄：audit_net 的 dual 指标 onlyInGraphJson 1,779 → 1,204、onlyInMain 448 不变；受影响指标全部未变，已据此刷新 audit/baseline.json（差异仅上述两项信息性字段）。",
        "⑧ 校验链：regen_text 重跑为不动点（0 处）；regen_midtech 重跑为不动点（95/95 未变）；audit_net --check [OK]；check_docs [OK]；全量 runtime 干跑 29 个脚本无错、TECHS 2,265；两侧写入前做往返序列化一致性校验（data_full.js 字节一致，graph.json 一致且保留原「末尾无换行」，diff 仅含删除行）。",
        "⑨ 未改动：主管线网络结构（节点 2,265 / 依赖边 6,091）、全量管线节点集合、中间技术库案例集合。本轮不新增或删除任何依赖关系判定。",
        "⑩ 遗留待审核（新登记批次 5.1d）：全量管线仍有 1,127 条边未被主管线承认——yearInv 29 + 位置式签名 705 + 其他 393。其中 29 条年份倒挂全为 enables 类型，对应已知的「技术先行、理论后至」结构类（如 蒸汽机(1769) → 热力学(1824)），不是本族错误、不应按伪边删除，须另行设计表达方式；其余须按 eaa086f 的方法（生成器复现 + 逐边 diff）或逐条语义判定处理，出判定草案后再执行。",
        "⑪ 流程增补：自本批次起，「凡改动 dependsOn 的批次，收尾必须重跑 regen_text.js 与 regen_midtech.js 并确认输出为不动点」写入《技术网络检修计划.md》§五 固定动作第 4 条。这是本批次暴露的系统性风险——派生数据若不在结构定稿后重算，会再次把错误讲成史实。"
      ],
      "files": [
        "assets/techs_extra.js",
        "assets/techs_midtech.js",
        "analysis-engine/data/graph.json",
        "assets/data_full.js",
        "assets/pages/changelog_data.js",
        "assets/pages/correction_data.js",
        "版本迭代日志.md",
        "技术网络检修计划.md",
        "audit/ledger.json",
        "audit/baseline.json",
        "audit/full_pipeline_exclusions.json",
        "tools/regen_text.js",
        "tools/regen_midtech.js",
        "tools/midtech_rules.js",
        "tools/prune_full_pipeline.js",
        "tools/audit_full_pipeline.js",
        "tools/gen_midtech.js",
        "index.html",
        "tree.html",
        "tree_full.html",
        "browse.html",
        "detail.html",
        "lineage.html",
        "analysis.html",
        "model.html",
        "changelog.html",
        "correction.html",
        "method.html",
        "midtech.html",
        "progress.html",
        "research.html",
        "sop.html",
        "timeline.html",
        "worldview.html"
      ]
    },
    {
      "version": "v0.9.25",
      "date": "2026-09-13",
      "type": "fix",
      "title": "阶段 5.2 派生文案补齐：修复模板识别器盲区（槽位通配误排空白字符）+ 覆盖另两族生成器文案，三族合计 531 处 / 461 节点",
      "summary": "本轮由对 v0.9.24 成果的独立复核触发：以「模板句中枚举的下游是否真存在于当前反图」为断言对全库扫描，发现 12 处不一致，追查得识别器盲区 —— 模板骨架的槽位通配写为「排除空白字符」，使「ABS 树脂」「工业 4.0」「遗传学 / DNA」等名称内部含空格的句子整体无法匹配，被判为「手写散文」而跳过；这是 v0.9.24 漏改 38 个节点的直接原因，修复后族 A 再改 108 处。同时对「同类派生文案还有哪些族」做普查，发现两族此前完全未覆盖：techs_extend.js（由 extend_net.js 的 deepen() 在逐条手写简介后追加深化句）34 处；techs_more.js（由 gen_1000.js 的 summarize() 按「上游名 + 用途」整句合成）389 处。三族合计 531 处 / 461 节点。为消除「同一公式散落多处」的隐患，新建 tools/derived_text_rules.js 收录三族公式、映射表与句子骨架，作为单一真相源；tools/regen_text.js 升级为三族通用重算器并新增 --check（有需改写即非零退出）。另查明中间技术库的 summary 是主管线摘要的拷贝，本轮文案改写因此向下传播 15 条 —— 由此确立「派生链顺序：主管线文案 → 中间库文案」并在计划文档登记。pre-commit 门禁由 1 道扩为 3 道。新发现全量管线 data_full.js 对 2,265 个共有节点持有第三份独立文案副本，其中 971 条仍停留在 v0.9.24 之前，列为批次 5.2 待审核。网络结构未变：节点 2,265 / 依赖边 6,091。",
      "treeChange": {
        "scope": "主管线依赖网络（节点 / 依赖边）未改动：仍为 2,265 个节点 / 6,091 条依赖边。本次改动的是节点展示文案（三族合计 531 处 / 461 节点）与中间技术库的摘要拷贝（15 条），以及工具与门禁。",
        "reason": "派生文案是「生成时刻 dependsOn 与反图的快照」，网络清理后必须重算，否则会把已判为错误的关系继续讲成史实。v0.9.24 已把重算工具化，但覆盖不完整，存在两处缺口：① **识别器盲区** —— 判定「这一句是否模板句、可否安全重写」的通配式排除了空白字符，而库内存在「ABS 树脂」「工业 4.0」「遗传学 / DNA」「金属 3D 打印」等含空格名称，凡枚举中含此类名称的句子一律匹配失败、被当作手写散文保护起来，于是残留不被发现也不被修复；② **生成器家族未穷举** —— 只覆盖了 techs_extra.js（upgrade_stubs.js / disassemble.js），未覆盖另两条独立的文案生成链：techs_extend.js 由 extend_net.js 的 deepen() 在逐条手写简介后追加深化句，techs_more.js 由 gen_1000.js 的 summarize() 整句合成。二者同样以 dependsOn 与反图为输入，同样会过期。",
        "detail": "① 发现路径：以「模板句枚举的下游是否真存在于当前反图」为断言全库扫描，命中 12 处 —— 例如 mfg_cnc（数控机床）的 significance 写「并直接催生了 等离子切割」，而该节点当前下游为 0 条；inf_barcode 写「并为 射频识别 的发展铺平了道路」，而 inf_rfid 的前置实为 mathematics。抽样其文案可见上游亦为陈旧值（mfg_cnc 写「依托 ABS 树脂、压缩空气储能、数学」，当前 dependsOn 仅 [mathematics]）。② 根因定位：这些句子的槽位枚举中含「ABS 树脂」等带空格名称，使骨架正则整体失配；将槽位通配由「排除空白字符」放宽为「仅排除换行与句读符号」后，族 A 新增识别 128 处、其中需改写 108 处 / 38 节点。性质分布：删去已不存在的下游子句 79 处、上游枚举与句式变体变化 29 处。③ 家族普查：B 族（extend_net.js deepen）识别 134 处模板句、17 处纯手写，需改写 34 处；C 族（gen_1000.js summarize）973 条全为合成句，需改写 389 处。C 族病因统一 —— 文本枚举的上游名已不在 dependsOn 中：8 条为文本内同名重复（生成时刻同名多 id，v0.9.23 合并 23 组重名后消失，如 fut_controllable_fusion_plant 的「太阳能光伏、太阳能光伏」）、其余为节点被删或改前置（如 bd_civ_1 的「物联网」、lf_bio_0 的「遗传学」重复项）。④ 工具化：新建 tools/derived_text_rules.js 收录三族公式、DOMAIN_A / ERA_NAME_B / DOMAIN_B 映射表与全部句子骨架，regen_text.js 改为 require 该规则库；B 族的识别采「先按 add 前缀定位分割点、再要求尾段完整匹配五种骨架之一」，从而只重写追加的深化句、手写 base 原样保留。⑤ 写盘器由单文件扩为三文件（techs_extra / techs_extend / techs_more 三者均为「字段 4 空格缩进、对象以两空格 + }, 收尾、views 多行」，同一套对象作用域行替换通用）；逐节点断言 id 锚点唯一、字段现值与预期逐字相符、views 行数等于该节点 views 长度；写后重载校验条目数不变（1,033 / 151 / 973）。⑥ 下游传播：因中间技术库 summary 是主管线摘要的拷贝，本轮改写使其产生 15 条漂移，重跑 regen_midtech.js 归零（95/95 不动点）；其中 3 条故意保留退化句，因主管线摘要不足 40 字，按 gen_midtech.js 原口径即用兜底文案。⑦ 门禁：pre-commit 由「仅 check_docs」扩为三道 —— 文档一致性、派生文案不动点（regen_text --check）、结构指标不劣化（audit_net --check），任一不过即阻断提交，确需跳过用 --no-verify。⑧ 校验链：regen_text 重跑为不动点（531 → 0）；regen_midtech 重跑为不动点（95/95）；audit_net --check [OK]；check_docs [OK]；全量 runtime 干跑 29 个脚本无错、TECHS 2,265；对全部 976 个改动节点调用 buildDetailHTML 做渲染校验（summary 与 views 全部进入渲染输出）；对全库重跑语义断言由 12 处不一致降为 0。⑨ 新发现问题（列批次 5.2 待审）：全量管线 data_full.js 对 2,265 个共有节点持有第三份独立文案副本，其中 971 条与主管线不一致（如 geometry_euclid 在全量侧仍写「依托 语言、文字、数学 … 直接支撑了 数论」）；另有 11,053 个全量独占节点，其中 7 条带 deepen / summarize 同型文案。因该侧文本来源（analysis-engine 导出链）与主管线的权威关系尚未裁定，本轮不修改、只登记。⑩ 报告项（本轮不改）：views[0].period 与 ERAS 表纪元名不符 99 处（如 language 的 period 为「史前」而 era=prehistoric 对应名为「史前时代」），性质属命名口径而非结构错误，待阶段 4 纪元体系统一时一并处理。"
      },
      "changes": [
        "① 修复模板识别器盲区（本轮根因）：tools/derived_text_rules.js 中槽位通配由 `[^\\s，。；、（）()「」]{1,28}` 改为 `[^\\n，。；、（）()「」]{1,40}`。原式排除空白字符，使「ABS 树脂」「工业 4.0」「遗传学 / DNA」等名称内部含空格的句子整体失配、被判为手写散文而跳过。修正后族 A 新增识别 128 处（1,714 → 1,586 手写），需改写 108 处 / 38 节点。",
        "② 族 A 新增改写 108 处 / 38 节点（techs_extra.js）：按字段 summary 38 + significance 35 + views[1].text 25 + views[0].text 10；按性质删去已不存在的下游子句 79 处、上游枚举与句式变体变化 29 处。样例：mat_2d 由「依托 化学、经典力学、用火 … 直接支撑了 工业 4.0、增减材混合制造、数字化车间」改为「建立在 化学、经典力学、石墨烯 之上」（上游由已删的「用火」换为当前的 mat_graphene，下游归零后切换变体）；mfg_cnc 由「依托 ABS 树脂、压缩空气储能、数学」改为「建立在 数学 之上」；tr_maglev 由「建立在 3D 打印、碟式斯特林、激光熔覆 之上」改为「建立在 直线电机、低温超导 之上」。",
        "③ 新增家族 B 覆盖（techs_extend.js，生成器 extend_net.js:400-425 deepen）：151 条中识别为「手写简介 + 生成器追加深化句」134 条、纯手写 17 条；重算后需改写 34 处。仅替换追加的深化句，手写 base 逐字保留。样例：bone_tools 的下游由已失效的「锤、斧、锤」改为按当前反图归零（切至「出现于…」变体）；weaving 的下游由「篮篓编织、纺织、纺锤」改为「帆船、伪装迷彩、篮篓编织」；cart 由「水力利用、水力利用」改为「自行车、军事后勤」。",
        "④ 新增家族 C 覆盖（techs_more.js，生成器 gen_1000.js:344-358 summarize）：973 条全为合成句（4 变体按 hash(id) % 4 选择，上游名串为全部 dependsOn 名而非前 3 项），重算后需改写 389 处。病因统一为「文本枚举的上游名已不在 dependsOn 中」：8 条为文本内同名重复（生成时刻同名多 id，v0.9.23 合并 23 组重名后消失）、其余为节点被删或改前置。样例：fut_orbital_solar_plant 由「把 太阳能光伏、太阳能光伏 的成果用于」改为「把 太阳能光伏 的成果用于」；bd_civ_1 去掉已删的「物联网」；lf_bio_0 去掉重复的「遗传学」。",
        "⑤ 规则库抽取：新建 tools/derived_text_rules.js，收录三族公式、映射表（DOMAIN_A；B 族专用 ERA_NAME_B 与 DOMAIN_B，注意其 ancient=上古 / medieval=中古 / future=未来/科幻 与族 A 不同，混用会造成假阳性）与全部句子骨架；tools/regen_text.js 改为 require 共用。这是与 gen_midtech.js / midtech_rules.js 相同的分层（规则 / 执行分离），避免同一公式散落多处再各自漂移。",
        "⑥ 重算器升级：tools/regen_text.js 由单族单文件扩为三族三文件（新增 --check 模式，有需改写即退出码 1）。写盘采对象作用域行替换：先定位唯一 id 锚点，再求对象尾，逐字段断言「现值 === 预期旧值」后替换；views 按行数等于节点 views 长度校验后按索引替换。写前每文件备份到 /tmp，写后重载校验条目数不变（EXTRA_TECHS 1,033 / EXTEND_TECHS 151 / MORE_TECHS 973）。",
        "⑦ 下游传播修正：中间技术库 summary 为「生成时刻主管线摘要的拷贝」，本轮文案改写使其漂移 15 条，重跑 tools/regen_midtech.js 归零（backgrounds 0 / summary 15 / born 0，写后 95/95 不动点）。其中 steam_engine、automobile、rocket 3 条保留退化句 —— 主管线摘要不足 40 字，按 gen_midtech.js 原口径即应使用兜底文案，非漂移。由此确立派生链顺序约定：主管线文案必须先于中间库文案重算。",
        "⑧ pre-commit 门禁扩为三道（.git/hooks/pre-commit）：① 文档一致性（check_docs.js，原有）② 派生文案不动点（regen_text.js --check，新增）③ 结构指标不劣化（audit_net.js --check，新增）。任一不过即阻断提交并给出修复命令，确需跳过用 --no-verify。原有钩子已备份至 /tmp/pre-commit.bak.*，可回退。",
        "⑨ 校验链（全部通过）：regen_text 重跑不动点（531 → 0 处）；regen_midtech 重跑不动点（95/95）；audit_net --check [OK]（结构指标未劣化）；check_docs [OK]；全量 runtime 干跑 29 个脚本无错、TECHS = 2,265；渲染校验 —— 对全部 976 个改动节点调用 buildDetailHTML，summary 与 views[].text 全部进入渲染输出、无异常；语义断言 —— 全库模板句枚举的下游均由 12 处不一致降为 0；门禁演练退出码 0。",
        "⑩ 未改动：主管线网络结构（节点 2,265 / 依赖边 6,091）、全量管线节点集合与边集合、中间技术库案例集合、全部手写散文（族 A 1,586 处 + 族 B 17 条未动）。本轮不新增或删除任何依赖关系判定。",
        "⑪ 新登记待审批次 5.2：全量管线 assets/data_full.js 对 2,265 个共有节点持有第三份独立文案副本，其中 971 条与主管线不一致（例：geometry_euclid 在全量侧仍写「依托 语言、文字、数学 … 直接支撑了 数论」，而主管线已改为「建立在 语言、文字、数学 之上」且下游归零）；全量独占 11,053 节点中另有 7 条带 deepen / summarize 同型文案。因该侧文本来源（analysis-engine 导出链，含 phase2_scores.json）与主管线之间的权威关系尚未裁定，且与已登记的批次 5.1d（1,127 条边）同属该侧，本轮只取证登记、不修改。",
        "⑫ 报告项（本轮不改，待阶段 4 处理）：views[0].period 与 ERAS 表纪元名不符 99 处，如 language 的 period 为「史前」而 era=prehistoric 的对应名为「史前时代」、mathematics 为「古代」而应为「古代文明」。判为命名口径不一致而非结构错误，与既有的 52 项 era-vs-year 不匹配同归「纪元体系统一」批次。"
      ],
      "files": [
        "assets/techs_extra.js",
        "assets/techs_extend.js",
        "assets/techs_more.js",
        "assets/techs_midtech.js",
        "tools/derived_text_rules.js",
        "tools/regen_text.js",
        "tools/regen_midtech.js",
        "tools/git-hooks/pre-commit",
        "tools/install_git_hooks.sh",
        "assets/pages/changelog_data.js",
        "assets/pages/correction_data.js",
        "版本迭代日志.md",
        "技术网络检修计划.md",
        "audit/ledger.json",
        ".git/hooks/pre-commit"
      ]
    },
    {
      "version": "v0.9.26",
      "date": "2026-09-14",
      "type": "fix",
      "title": "全量管线权威关系裁定：共有节点以主管线为权威，处置定为「按主管线单向重建」并入阶段 5e；独占节点单列、29 条年份倒挂降级为概念影响",
      "summary": "本轮不修改任何数据，只做裁定与登记更正。起因是批次 5.2b 的登记项本身即为「须先裁定全量管线文案与主管线的权威关系，才能决定同步方向」，而 5.1d 的未承认边同属该侧、同受该裁定约束。以三条独立取证把问题查清：① `graph.json` 与 `data_full.js` 对 2,289 个共有节点的 summary 仅 1 条不同 → 两侧是同一份拷贝（`data_full.js` 由 `analysis-engine/build_full_dataset.js` 自 `graph.json` 导出），不是两份独立语料；② 把全量侧文案逐条对照主管线各历史版本，不一致条数为 v0.9.23 的 105 条、v0.9.24 的 971 条、v0.9.25 的 1,429 条 —— 单调递增且起点接近 0，该形态只有「全量侧是主管线的旧快照」能解释；③ `SCORE_META.generatedAt` = 2026-09-12T13:23:39Z，与 v0.9.23 提交时点吻合。据此裁定：共有 2,265 个节点以主管线为权威，处置不作逐条打补丁，而是以主管线为源单向重建 `graph.json` 与 `data_full.js`，且排在阶段 3、4 之后随阶段 5e 执行（现在做会因阶段 3/4 改动 dependsOn 而再次漂移），5.1d 的边处置与 5a 的「按主管线重建」并入同一批；重建时须新增「共有节点文案差异 = 0」断言纳入 pre-commit，否则派生侧无门禁会再次静默过期。11,053 个全量独占节点（约 11,030 条来自 `new_techs.json`）判为独立语料、不并入主管线，但须加 provenance 标注并在页面说明来源；23 条同名 id 变体保留为独立节点、加 `aliasOf` 字段而不合并。29 条年份倒挂按既有四档处置中的「降级为概念影响」落地 —— 重建前先写入 `theory_data.js` 覆盖层，否则重建时信息丢失；不在四标准之外另开 `rel:\"retro\"` 无判据通道。附带更正上一轮两处已过期的计数：全量侧陈旧文案 971 → 1,429、独占节点同型文案 7 → 21，未承认边口径统一为 `dependsOn ∪ enables` = 1,116。",
      "treeChange": {
        "scope": "未改动任何数据。裁定对象为全量管线（`graph.json` / `data_full.js`）相对主管线的权威关系，以及由此确定的处置方式、执行时点与配套门禁。主管线网络未变：2,265 个节点 / 6,091 条依赖边；全量管线 `graph.json`（2,299 / 6,963）与 `data_full.js`（13,318 / 16,811）未变。",
        "reason": "批次 5.2b 的登记项本身即「须先裁定权威关系，再决定同步方向」——在权威归属未定的前提下改动任何一侧，都可能把已判定的错误重新写回（全量侧仍含 v0.9.20/21/23 已删除的依赖关系及其对应文案，例如 `zero_concept` 在全量侧仍写「依托 语言、文字、数学」，而主管线已把「语言」判为不成立）。5.1d 的未承认边与 5.2b 的陈旧文案同属该侧、同受该裁定约束，故一并裁定。裁定采取「先以与识别器不同源的取证确定事实，再据事实定处置」的顺序，不用启发式推断权威归属。",
        "detail": "① **取证一（同一份拷贝）**：`graph.json` 与 `data_full.js` 对 2,289 个共有节点的 summary 仅 1 条不同 —— 两侧不是两份语料；`data_full.js` 由 `analysis-engine/build_full_dataset.js` 自 `graph.json` 导出，而 `graph.json` 的「原库富字段节点」即自主管线导出（其真实节点数 2,265 与主管线一致，仅多出 34 个概念占位/独占项）。② **取证二（漂移单调、起点近零）**：把全量侧文案逐条对照主管线四个历史版本得到不一致条数 —— v0.9.23 与 `origin/main` 均为 105 条、v0.9.24 为 971 条、v0.9.25（HEAD）为 1,429 条。若全量侧另有独立真值来源，差距不应表现为「随主管线的清理轮次单调递增」；该形态只有「全量侧是主管线的旧快照」能够解释。③ **取证三（时点吻合）**：`SCORE_META.generatedAt` = 2026-09-12T13:23:39Z，与 v0.9.23 的提交时点吻合。④ **裁定一至六（5.2b）**：共有节点以主管线为权威；处置为以主管线为源单向重建；执行时点排在阶段 3、4 之后随 5e 执行（现在重建会因阶段 3/4 改动 dependsOn 而再次漂移，等于白做）；与 5a 的「按主管线重建」、5.1d 的边处置合并为同一批；重建时须同时落地「共有节点文案差异 = 0」断言并纳入 pre-commit。⑤ **裁定七至九（独占节点）**：11,053 条中约 11,030 条来自 `analysis-engine/data/subcat/new_techs.json`（11,031 条），既不属主管线、也未经过任何清理批次 —— 判为独立语料，不并入主管线，但须加 `provenance`（`mainline-derived` / `new_techs`）并在 `tree_full.html` 给出图例说明，避免读者把「未经验证」的扩充语料与「已校订」的主管线等同看待。⑥ **裁定十（id 变体）**：23 条与主管线同名的独占节点（`canoe`=`tr_canoe`、`dome`=`bld_dome`、`charcoal`=`ene_charcoal`、`smithing`=`mat_forging`、`chip`=`ic`、`neural_network`=`inf_nn`、`digital_twin`=`mfg_digitaltwin` 等）保留为独立节点、不合并，改为加 `aliasOf` 字段 —— 合并会改变全量节点数与边数、触发 `check_docs` 的 `TOTAL_FULL` 与 `tree_full.html` 写死数字同步，去重 23 条的收益远小于代价；而不处理会让同名两项技术并列出现、误导读者。⑦ **裁定十一至十四（29 条年份倒挂，与本次重建耦合）**：29 条经逐条核实，全部可作「该技术的后期阶段吸收了源技术」解读（采矿用现代炸药爆破、犁用铁器、拱与穹顶用水泥、电子计算机用集成电路与半导体、自动化用工业机器人与 AI、飞机与航天器用复合材料、扫地机器人与自动驾驶用计算机视觉），并非方向性错误；真正的冲突在建模口径 —— 节点 `year` 取该技术的最早实例（采矿 -5000、犁 -3000），而边描述的是该技术的后期阶段，与主管线 `yearInv=0`（前置年 ≤ 本节点年）硬约束不相容。故按既有四档处置中的「降级为概念影响」落地（不写入 `dependsOn`，仅见于文案），载体为 `assets/pages/theory_data.js` 覆盖层；不在四标准之外另开 `rel:\"retro\"` 无判据通道（本项目的「位置式伪边」正是无约束生成规则的产物）。重建以主管线为源，这些边不会出现在产物中，因此重建前必须先把 29 条写入覆盖层，否则信息丢失。⑧ **附带更正**：上一轮登记的两处计数已过期 —— 全量侧陈旧文案 971 → 1,429（原口径对照 v0.9.24，已被 v0.9.25 的 531 处改写作废）、独占节点同型文案 7 → 21（原为关键词粗筛，按 `extend_net.deepen` 五种骨架精确匹配为 21 条）；未承认边口径统一为 `dependsOn ∪ enables` = 1,116（仅按 `dependsOn` 为 1,207，计划文档原记 1,127 落在两口径之间）。"
      },
      "changes": [
        "① 取证一（同一份拷贝）：`graph.json` 与 `data_full.js` 对 2,289 个共有节点的 summary 逐条比对，仅 1 条不同。结论：`data_full.js` 由 `build_full_dataset.js` 自 `graph.json` 导出，二者是同一份拷贝，全量侧不是独立语料。",
        "② 取证二（漂移单调、起点近零）：全量侧文案对照主管线四个历史版本 —— v0.9.23 / `origin/main` 不一致 105 条、v0.9.24 为 971 条、v0.9.25（HEAD）为 1,429 条。结论：全量侧 = 主管线在 v0.9.23 时点的快照；此后每轮主管线文案清理都使差距扩大。",
        "③ 取证三（时点吻合）：`assets/data_full.js` 的 `SCORE_META.generatedAt` = 2026-09-12T13:23:39Z，与 v0.9.23 提交时点吻合；`build_full_dataset.js` 头注亦写明「用 graph.json 原库富字段节点(2362) + new_techs(11031) 作富字段源」。",
        "④ 裁定（权威归属）：共有 2,265 个节点以主管线为权威。推论：`tree_full.html` 当前展示的 1,429 条共有节点文案在史实层面不可信（与已完成的清理判定相矛盾），须修正。",
        "⑤ 裁定（处置方式）：不作逐条打补丁，改为以主管线为源单向重建 `graph.json` 与 `data_full.js`（重跑 `analysis-engine` 导出链）。理由：逐条同步只在快照时点正确，阶段 3/4/5 仍会改 `dependsOn` 与文案；重建一次即消除该类漂移，并顺带解决 5.1d 的未承认边。",
        "⑥ 裁定（执行时点）：排在阶段 3、4 完成之后，随阶段 5e 全量回归执行；与 5a 的「按主管线重建」、5.1d 的边处置合并为同一批。现在不做 —— 阶段 3/4 一改即再次漂移。",
        "⑦ 裁定（配套门禁）：重建时须同时落地断言「全量管线对共有节点的文案差异 = 0」并纳入 `pre-commit`。本轮暴露的模式是「派生侧无门禁即静默过期」，门禁是防止漂移复发的唯一机制。",
        "⑧ 裁定（独占节点，11,053 条）：判为独立语料、不并入主管线。依据：约 11,030 条来自 `analysis-engine/data/subcat/new_techs.json`（11,031 条），既不属主管线、也未经过任何清理批次 —— 未经验证 ≠ 已验证。",
        "⑨ 裁定（独占节点标注）：数据层加 `provenance`（`mainline-derived` / `new_techs`），页面层在 `tree_full.html` 给出图例说明；是否对扩充语料另设视图，单列一批。",
        "⑩ 裁定（23 条同名 id 变体）：保留为独立节点、不合并，加 `aliasOf` 字段指向主管线同名 id。合并会改变全量节点数与边数并触发 `check_docs` 的 `TOTAL_FULL` 与 `tree_full.html` 写死数字同步，收益远小于代价。",
        "⑪ 裁定（29 条年份倒挂）：处置档 =「降级为概念影响」（不写入 `dependsOn`，仅见于文案），落地方式 = 写入 `assets/pages/theory_data.js` 覆盖层。不新增 `rel:\"retro\"` 边类型：新增边类型等于在「必要性 / 排他性 / 时序性 / 域内优先」四标准之外另开一个无判据通道，而本项目的「位置式伪边」正是无约束生成规则的产物。",
        "⑫ 裁定（顺序要求）：重建以主管线为源，29 条边不会出现在重建产物中，因此**重建前必须先把这 29 条写入 `theory_data.js` 覆盖层**，否则信息丢失。`rel:\"retro\"` 保留为已登记的方法学待办（`correction_data.js` 的 `meta.pendingQueue`，v0.9.19 登记）；若将来启用，须先把适用范围扩为「后出现者促成先出现者的后续演进」并先立判据。",
        "⑬ 附带更正（计数）：全量侧陈旧文案 971 → 1,429；独占节点同型文案 7 → 21；未承认边口径统一为 `dependsOn ∪ enables` = 1,116（仅按 `dependsOn` 为 1,207；计划文档原记 1,127 属两口径之间）。三处更正均写入 `audit/ledger.json` 的批次 5.1d / 5.2b 与《技术网络检修计划.md》。",
        "⑭ 未改动：主管线网络结构（2,265 节点 / 6,091 边）、全量管线节点与边集合、中间技术库、`theory_data.js` 覆盖层、全部文案。本轮不新增或删除任何依赖关系判定。"
      ],
      "files": [
        "audit/ledger.json",
        "技术网络检修计划.md",
        "版本迭代日志.md",
        "assets/pages/changelog_data.js",
        "assets/pages/correction_data.js"
      ]
    },
    {
      "version": "v0.9.27",
      "date": "2026-09-14",
      "type": "data",
      "title": "补建材料类缺失节点「玄武岩纤维」(mat_basaltfiber)：主管线 2,265 → 2,266 节点 / 6,091 → 6,094 条依赖边",
      "summary": "按用户指派，经联网取证后向主管线补建材料类缺失节点「玄武岩纤维」。取证要点：玄武岩纤维以天然玄武岩碎料经一步法（破碎与均质化 → 1450–1500 ℃ 熔融 → 铂铑合金漏板高速拉丝）制成，生产过程中不添加配料，与玻璃纤维（需配料）的关键区别在此；1840 年英国首次试制蓬松玄武岩棉，1923 年法国保罗·德（Paul Dhe）获美国专利 US 1,462,446，1950 年代德、捷以离心法产棉，1950–60 年代苏联全苏玻璃钢与玻璃纤维科研院乌克兰分院研制连续纤维，1985 年苏联实现连续玄武岩纤维工业化，1995 年解密后转入民用；抗拉强度 2.8–3.1 GPa、弹性模量 85–87 GPa、密度约 2.67 g/cm³、耐温 −269 至 +700 ℃，是继碳纤维、芳纶、超高分子量聚乙烯之后的第四大高技术纤维。年份口径取 1985 年（连续纤维工业化），理由有二：一、项目内同类节点 `mat_glassfiber` 玻璃纤维取 1930 年（工业化起点）而非 1836 年；二、玄武岩纤维的整套工艺沿袭玻璃纤维工业，若取 1923 年则 `mat_glassfiber`(1930) 作前置即构成年份倒挂。前置登记 3 条（`chemistry` 化学 / `physics` 经典力学 / `mat_glassfiber` 玻璃纤维），与既有 `mat_cfrp` 碳纤维复合材料「化学＋经典力学＋母体纤维」同构；经复核排除 `mining`（该节点语义为「从地层取矿、金属与燃料供给的起点」，用于玄武岩岩石属跨域误用，且网络内无采石节点）、`kiln`（必要性成立但排他性不成立，熔融环节已被 `mat_glassfiber` 覆盖，且 `mat_glassfiber` 自身亦未列 `kiln`）、`mfg_wiredraw`（该节点为金属拉丝，非纤维漏板拉丝）。「后续」一侧经前提核查确认现有网络中无必要性成立的下游：`mat_glassfiber` 当前零下游，`mat_frp` 玻璃钢仅 1 条下游 `bld_frpbridge` 复材桥梁(2010)，最接近的 `bld_frpbridge`／`bld_carbonconc` 碳纤维混凝土／`bd_civ_130` 碳纤维加固分别以玻璃钢、碳纤维为对象，改接玄武岩纤维必要性不成立；遍历 year ≥ 1985 的 material / build / transport / energy 共 417 个节点亦无纤维增强下游节点。经用户裁定「只加玄武岩纤维本身」，后续侧登记为待补节点，不新建下游。新节点的四个文案字段由 `tools/regen_text.js` 按族 A 公式自动重算（`mat_glassfiber` 因新增下游同步重算 3 处），重跑为不动点。",
      "treeChange": {
        "scope": "主管线依赖网络：节点 2,265 → 2,266，依赖边 6,091 → 6,094（新增节点 1 个、新增前置边 3 条；`mat_glassfiber` 下游 0 → 1）。全量管线 `graph.json`（2,299 / 6,963）与 `assets/data_full.js`（13,318 / 16,811）本轮未改动。",
        "reason": "主管线材料类漏收了玄武岩纤维这一已工业化、且被列为国家重点发展的高性能纤维。该技术在本网络中的位置是明确的：工艺上直接沿袭玻璃纤维工业（同一套熔融—漏板拉丝路线，差别在于玄武岩纤维不加配料、以单一玄武岩碎料直接成纤），故其前置必然包含玻璃纤维——这也决定了节点年份不能取早于玻璃纤维工业化的 1840 / 1923 年。",
        "detail": "① **新增节点**：`mat_basaltfiber` 玄武岩纤维，category=material、era=info、year=1985、date=「1985 年」，`dependsOn` = chemistry / physics / mat_glassfiber，`applications` = 结构增强 / 耐高温防护 / 耐腐蚀构件，写入 `assets/techs_extra.js`（族 A，`EXTRA_TECHS` 1033 → 1034）。② **文案**：新节点的 `summary` / `significance` / `views[].text` 由 `tools/regen_text.js` 依 `tools/derived_text_rules.js` 的族 A 公式自动生成；因新增下游，`mat_glassfiber` 的 `summary` / `significance` / `views[1].text` 同步重算 3 处（其文案由「它把 工具制造、结构件 变成可稳定复现的能力」改为「依托 化学、经典力学 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 玄武岩纤维 等后续技术」）。③ **年份口径**：取 1985 年，不取 1840 年（首次试制蓬松玄武岩棉）或 1923 年（首个专利）；理由见 `summary` —— 同类节点 `mat_glassfiber` 取 1930 年工业化起点，且工艺沿袭关系要求节点年不早于玻璃纤维。④ **前置取舍**：收录 3 条，排除 3 条（`mining` / `kiln` / `mfg_wiredraw`），排除理由见 `summary`。⑤ **后续缺口**：现有网络中无必要性成立的下游，经用户裁定不新建下游节点，登记为待补；网络自身的范式（`mat_cf` 碳纤维 → `mat_cfrp` 碳纤维复合材料 → `bld_carbonconc` 碳纤维混凝土）提示将来若要接上「后续」，应新建「玄武岩纤维复合材料」类节点。⑥ **全量管线**：依 v0.9.26 裁定「以主管线为源单向重建、不逐条打补丁」，本轮不改动 `graph.json` 与 `data_full.js`；新节点将在阶段 5e 重建时随主管线一并带入。"
      },
      "changes": [
        "① 联网取证：确认玄武岩纤维为一步法工艺（破碎与均质化 → 1450–1500 ℃ 熔融 → 铂铑合金漏板高速拉丝），过程中不添加配料；原料要求 SiO₂ > 46%、低铁；丝径常 10–20 μm（可细至 5 μm），单根长度可达万米。",
        "② 史实脉络：1840 年英国（威尔士）首次试制蓬松玄武岩棉 → 1923 年法国保罗·德（Paul Dhe）获美国专利 US 1,462,446 → 1950 年代德、捷以离心法产棉 → 1950–60 年代苏联全苏玻璃钢与玻璃纤维科研院乌克兰分院研制连续纤维 → 1985 年苏联实现连续玄武岩纤维工业化 → 1995 年解密后转入民用 → 2001–03 年中国列入 863 计划并建厂。",
        "③ 性能参数：抗拉强度 2.8–3.1 GPa、弹性模量 85–87 GPa、断裂延伸率约 3.15%、密度 2.65–2.67 g/cm³、耐温 −269 至 +700 ℃；耐酸碱、电绝缘、生物惰性、可降解。",
        "④ 年份口径裁定：取 1985 年（连续纤维工业化），不取 1840 / 1923 年。依据一 —— 同类节点 `mat_glassfiber` 玻璃纤维取 1930 年（工业化起点）而非 1836 年；依据二 —— 玄武岩纤维工艺沿袭玻璃纤维工业，若取 1923 年则 `mat_glassfiber`(1930) 作前置构成年份倒挂。era=info（1950–2000）。",
        "⑤ 新增节点 `mat_basaltfiber`（material / 1985 / info）：写入 `assets/techs_extra.js` 的 `EXTRA_TECHS`（1033 → 1034），字段与同族节点同构（`people` / `place` 为空字符串，与 `mat_glassfiber` / `mat_cf` / `mat_frp` 一致）。",
        "⑥ 前置登记 3 条：`chemistry` 化学（原料均质化与成分判据）、`physics` 经典力学（熔体黏度—拉丝张力—模量控制）、`mat_glassfiber` 玻璃纤维（熔融—漏板拉丝工艺母体）。与 `mat_cfrp` 碳纤维复合材料「化学＋经典力学＋母体纤维」同构。",
        "⑦ 经复核排除的前置：`mining` 采矿（其语义为「从地层取矿，金属与燃料供给的起点」，用于玄武岩岩石属跨域误用；网络内无采石节点）、`kiln` 窑（必要性成立但排他性不成立 —— 熔融环节已被 `mat_glassfiber` 覆盖，且 `mat_glassfiber` 自身亦未列 `kiln`，与其口径保持一致）、`mfg_wiredraw` 拉丝（该节点为金属拉丝，非纤维漏板拉丝）。",
        "⑧ 后续缺口（前提核查）：现有网络中无任何节点的「必要性」要求玄武岩纤维 —— `mat_glassfiber` 当前零下游；`mat_frp` 玻璃钢(1930) 仅 1 条下游 `bld_frpbridge` 复材桥梁(2010)；最接近的 `bld_frpbridge` / `bld_carbonconc` 碳纤维混凝土(2010) / `bd_civ_130` 碳纤维加固(2000) 分别以玻璃钢、碳纤维为对象，改接玄武岩纤维必要性不成立；遍历 year ≥ 1985 的 material / build / transport / energy 共 417 个节点，无纤维增强下游节点。经用户裁定「只加玄武岩纤维本身」，后续侧登记为待补（网络自身范式提示将来应新建「玄武岩纤维复合材料」类节点）。",
        "⑨ 文案同步：新节点的 `summary` / `significance` / `views[].text` 由 `tools/regen_text.js` 按族 A 公式生成；因新增下游，`mat_glassfiber` 同步重算 3 处（`summary` / `significance` / `views[1].text`）。重跑 `regen_text.js --check` 为不动点（0 处），`regen_midtech.js` 为不动点（95/95 未变）。",
        "⑩ 派生数据校验（与识别器不同源的断言）：写盘前断言新节点的四个文案字段均被族 A 模板骨架识别（否则 `regen_text` 会当手写散文跳过、造成静默过期）；写盘后断言 `EXTRA_TECHS` 条目数 +1、新节点 JSON 往返一致、前置年份均 ≤ 1985。",
        "⑪ 门禁：`check_docs [OK]`（主站点语料 TOTAL 2265 → 2266 由 `{{TOTAL}}` 占位与实时计算承接，无需改声明）、`regen_text --check [OK]`（不动点）、`audit_net --check [OK]`；`audit/baseline.json` 按合法改进刷新（N 2,265 → 2,266、edges 6,091 → 6,094、`chemistry` 下游 430 → 431、`physics` 下游 289 → 290）。",
        "⑫ 未改动：全量管线 `graph.json` 与 `assets/data_full.js`（依 v0.9.26 裁定「以主管线为源单向重建、不逐条打补丁」，新节点随阶段 5e 重建带入）、中间技术库、`theory_data.js` 覆盖层、其余 2,265 个节点的依赖关系与手写散文。"
      ],
      "files": [
        "assets/techs_extra.js",
        "assets/pages/changelog_data.js",
        "assets/pages/correction_data.js",
        "audit/ledger.json",
        "audit/baseline.json",
        "技术网络检修计划.md",
        "版本迭代日志.md"
      ]
    },
    {
      "version": "v0.9.28",
      "date": "2026-09-14",
      "type": "data",
      "title": "批次 3.1a 写盘：E 族 manufact 首批 27 条「mathematics 单前置」判定落地，依赖边 6,094 → 6,126 条",
      "summary": "阶段 3 的第一批前置补齐（批次 3.1a）写盘。病灶同构且明确：E 族 manufact 68 个节点的前置**全部为同一条 `mathematics`**（网络内被它依赖的节点一度达 636 个），系生成器对同一槽位批量赋值所致，非逐条语义判定。本批取机床族 17 条与焊接 / 连接族 10 条共 27 条，按四标准（必要性 / 排他性 / 时序性 / 域内优先）逐条判定：保留 2 条（`mfg_cnc` 数控与 `mfg_cmm` 三坐标测量 —— 插补、坐标解算属其定义性构成，数学为必要前提）、改前置 1 条（`mfg_gauge` 量具改指 `numerals` 数字符号系统 —— 刻线即数值尺度，`numerals`(−3500) 比学科级「数学」更贴近该环节且早于量具 −2000）、删边 24 条（`mathematics` 对机床 / 焊接类不构成必要前提，去掉后这些技术仍可按史实出现）、降级为概念影响 0 条。删除 24 条 + 补前置 27 条（共新增 56 条边，涉及 37 个不同前置 id），依赖边 6,094 → 6,126（净 +32），节点总数 2,266 不变。补入的前置取自同族可考事实而非位置推断，例：`mfg_boring` 镗床 → `mfg_lathe` 车床 + `mfg_drill`；`mfg_cryogenicm` 低温切削 → `cryogenics` 低温工程 + `mfg_coolant`；`mfg_adhesive` 胶接 → `hafting` 装柄 + `fire` 火（天然胶粘剂的早期形态）。派生链按序重算：`regen_text --apply` 应用 45 节点 136 处（A 族 43 节点 134 处、B 族 2 节点 2 处），复跑为不动点 0 处；`regen_midtech --apply` 应用 3 条（`mfg_cryogenicm` / `mfg_mc` / `mfg_turnmill` 的 `summary` 与 `backgrounds`），复跑 95/95 不动点。结构问题族同步下降：A 562 → 535、E 173 → 146、Ch 260 → 252（其中 `Ch.manufact` 29 → 23）、`A.manufact` 68 → 41、`F` 8 不变；`mathematics` 作为前置的节点 636 → 611。全量管线依 v0.9.26 裁定未逐条打补丁，本批改动随阶段 5e「按主管线单向重建」带入。",
      "treeChange": {
        "scope": "主管线依赖网络：依赖边 6,094 → 6,126（删 24 条 `mathematics` 入边 + 改指 1 条 + 补前置 27 条共新增 56 条边）；节点总数 2,266 不变。涉及 `assets/techs_extra.js`（27 个节点的 `dependsOn` 与派生文案）、`assets/techs_extend.js`（2 节点的 B 族文案）、`assets/techs_midtech.js`（3 条中间技术库 `summary` / `backgrounds`）。全量管线 `graph.json`（2,299 / 6,963）与 `assets/data_full.js`（13,318 / 16,811）本轮未改动。",
        "reason": "E 族 manufact 68 条的前置被生成器按同一槽位批量赋值为通用的 `mathematics`——该节点作为前置一度覆盖 636 个节点，跨越材料、能源、制造等全部领域，属「通用学理枢纽泛化挂边」，与项目此前清理的位置式伪边、二阶枢纽污染同源。机床与焊接类是具体机械工艺，其必要前提是同族的加工母体与部件（车床、钻具、伺服、夹持等），把学科级「数学」登记为其直接前因，既无排他性也无域内传导机制；反过来，真正的必要条件（如车床之于镗床）在网络里反而缺席。",
        "detail": "① **候选与断言**：候选筛选在脚本内硬断言「单前置且前置 == mathematics」，27 条全部满足，任一不符即抛错，不会把非 E 族节点混入。② **四标准判定**：保留 2（`mfg_cnc` / `mfg_cmm`）、改前置 1（`mfg_gauge` → `numerals`）、删边 24、降级 0。③ **补前置**：27 条 `backfills` 共新增 56 条边、涉及 37 个前置 id，全部取自同族可考事实（如 `mfg_boring` → `mfg_lathe` + `mfg_drill`、`mfg_planer` 与 `mfg_grindingwheel` 的母体与磨具关系、`mfg_gasweld` 气焊的燃烧与金属熔接前提、`mfg_resistweld` 电阻焊改用 `generator`(1831) / `battery`(1800) 作合法前置而非存疑的 1877 年份）。④ **台账与执行器**：判定与理由逐条登记于 `audit/ledger.json` 的 `batches[\"3.1a\"]`（`edges` 27 + `backfills` 27 + `findings` 7 + `verification` 7）；写盘由 `tools/apply_ledger.js --batch 3.1a --apply` 执行，定位节点 27 / 27、失败 0、逐节点断言「现值 === 预期旧值」全部通过，写前备份至 `/tmp/bak_3.1a_1789328792963`。⑤ **派生链（按序不可颠倒）**：`regen_text.js --apply`（主管线文案，45 节点 136 处）→ `regen_midtech.js --apply`（中间库文案，3 条），两者复跑均为不动点。⑥ **结构下降**：A 族 562 → 535、E 族 173 → 146、Ch 族 260 → 252、`A.manufact` 68 → 41、`Ch.manufact` 29 → 23；`mathematics` 前置数 636 → 611。⑦ **门禁**：`check_docs [OK]`（TOTAL 2,266 由 `{{TOTAL}}` 占位承接）、`regen_text --check` 0 处、`audit_net --check [OK]`；`audit/baseline.json` 按合法改进刷新。⑧ **全量管线**：依 v0.9.26 裁定不逐条打补丁，本批前置改动随阶段 5e 重建一并带入。"
      },
      "changes": [
        "① 病灶确认：E 族 manufact 68 条的当前前置**全部为同一条 `mathematics`**，无一条例外——同一槽位被批量赋值，病灶完全同构。本批先取机床族 17 条与焊接 / 连接族 10 条，共 27 条。",
        "② 判定结果：保留 2 条（`mfg_cnc` 数控——以程序指令控制机床运动，插补与坐标计算属定义性构成；`mfg_cmm` 三坐标测量——以坐标系表述并解算几何量，几何与数值解算属定义性构成）、改前置 1 条（`mfg_gauge` 量具 → `numerals` 数字符号系统）、删边 24 条、降级为概念影响 0 条。",
        "③ 改前置理由：量具的本质是把长度数值化并与基准比对，其刻线即数值尺度；`numerals`(−3500) 比学科级「数学」更贴近该环节（排他性），且早于量具(−2000)（时序性）。",
        "④ 删边理由：机床与焊接类是具体机械工艺，去掉「数学」这一前置后仍可按史实出现（例如镗床、钻床、刨床、砂轮、气焊、钎焊），数学不构成其必要前提；其必要条件是同族加工母体与部件，而这些在网络中反而缺席。",
        "⑤ 补前置 27 条共新增 56 条边、涉及 37 个不同前置 id，全部取自同族可考事实。抽样：`mfg_gauge` → `mfg_chisel` 凿 + `woodworking` 木作（刻线与木质直杆尺身）；`mfg_boring` → `mfg_lathe` 车床 + `mfg_drill` 钻孔（内圆扩孔的母体）；`mfg_drillpress` → `mfg_drill` + `mfg_lathe`；`mfg_cryogenicm` 低温切削 → `cryogenics` 低温工程 + `mfg_coolant` 切削液；`mfg_adhesive` 胶接 → `hafting` 装柄 + `fire` 火（天然胶粘剂的早期形态）；`mfg_mc` 加工中心 → `mfg_cnc` + `mfg_toolholder`；`mfg_turnmill` 车铣复合 → `mfg_cnc` + `mfg_lathe` + `mfg_mill`。",
        "⑥ 年份存疑（本批已绕开、留待阶段 4）：`mfg_resistweld` 电阻焊标注 1877 年，早于 `electricity` 电力系统 1879，工程史通行说法为 1886 年 Thomson 专利；本批改用 `generator`(1831) / `battery`(1800) 作为合法前置，年份本身未动。",
        "⑦ 写盘执行：`tools/apply_ledger.js --batch 3.1a --apply` —— 定位节点 27 / 27、失败 0、逐节点断言「现值 === 预期旧值」全部通过；写前备份 `/tmp/bak_3.1a_1789328792963`；节点总数 2,266 → 2,266 不变。",
        "⑧ 边增减核账：删 24 条（全部 parent = `mathematics`）+ 改指 1 条（边数不变）+ 保留 2 条 + 补前置新增 56 条 → 依赖边 6,094 → 6,126（净 +32）。",
        "⑨ 派生文案重算（按序）：`regen_text.js --apply` 应用 45 节点 136 处（A 族 43 节点 134 处 = `summary` 43 / `significance` 43 / `views[0]` 25 / `views[1]` 23；B 族 2 节点 2 处）；复跑 `--check` 为不动点 0 处。`regen_midtech.js --apply` 应用 3 条（`mfg_cryogenicm` / `mfg_mc` / `mfg_turnmill` 的 `summary` 与 `backgrounds`，其 `backgrounds` 由占位的「数学提供了所有定量科学的语言与工具」改为真实域内前置 + 域内模板注释）；复跑 95/95 不动点。",
        "⑩ 结构问题族下降：A 562 → 535、E 173 → 146、Ch 260 → 252（其中 `Ch.manufact` 29 → 23）、`A.manufact` 68 → 41、`F` 8 不变；`mathematics` 作为前置的节点 636 → 611。环 0 / 自环 0 / 重复边 0 / 悬空前置 0 / 年份倒挂 0 / 零前置 4（不变）。",
        "⑪ 门禁与基线：`check_docs.js [OK]`（TOTAL 2,266）、`regen_text.js --check` 0 处、`audit_net.js --check [OK]`；`audit/baseline.json` 按合法改进刷新，共 12 项变化 —— `edges` 6,094 → 6,126、`A_total` 562 → 535、`E_total` 173 → 146、`Ch_total` 260 → 252、`A.manufact` 68 → 41、`E.manufact` 68 → 41、`Ch.manufact` 29 → 23、`Ch.basic` 40 → 39、`Ch.energy` 34 → 33、`generic` 首项 `mathematics` 下游 636 → 611、`dual.onlyInGraphJson` 1,204 → 1,229、`dual.onlyInMain` 451 → 508。",
        "⑫ 未改动：全量管线 `graph.json` 与 `assets/data_full.js`（依 v0.9.26 裁定不逐条打补丁，本批前置改动随阶段 5e 重建带入）、`theory_data.js` 覆盖层、其余 2,239 个节点的依赖关系与手写散文。E 族 manufact 其余 41 条前置同样一律为 `mathematics`，本批处置规则 R1–R4 可直接沿用。"
      ],
      "files": [
        "assets/techs_extra.js",
        "assets/techs_extend.js",
        "assets/techs_midtech.js",
        "audit/ledger.json",
        "audit/baseline.json",
        "assets/pages/changelog_data.js",
        "assets/pages/correction_data.js",
        "技术网络检修计划.md",
        "版本迭代日志.md"
      ]
    }
]
};
