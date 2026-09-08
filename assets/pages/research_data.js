/* ============================================================
 * research_data.js — 历史相关研究 / 文献谱系（独立知识页，非技术节点）
 * 本页内容是人类技术演化研究的「方法论谱系」，不属于技术本身，
 * 因此不进入 13392 节点的技术演化网络，仅作独立研究档案展示。
 * 数据来源：项目 §3.0.2（奠基对话文献谱系）+ §3.1（文献与方法溯源）。
 * ============================================================ */
window.RESEARCH = [
  {
    id: "triz",
    name: "TRIZ 理论",
    en: "Theory of Inventive Problem Solving",
    tag: "发明方法论",
    year: "1946",
    founder: "根里奇·阿奇舒勒（Genrich Altshuller）",
    field: "创新方法论 / 专利分析",
    lead: "基于分析约 250 万件专利得出的创新规律体系。核心结论——约 99% 的技术成果并非无中生有，而是“既有知识要素的重新组合与迁移”。",
    body: [
      "苏联发明家、专利审查员阿奇舒勒在 1940 年代系统分析全球专利，发现“发明”并非随机灵感，而是遵循可被归纳的规律：同一类工程矛盾在不同领域反复出现，且往往已有标准解法。",
      "他把这些规律形式化为一套可复用工具，使“创新”从艺术变成可训练的工程方法。本项目“来龙去脉”的理念——在已知之间建立前所未有的新链接——与其完全同构。",
      "TRIZ 的 5 级发明分级，与本项目 L1–L5“技术涌现可行性五档”几乎一一对应，是本项目分层体系最直接的学术前身。"
    ],
    table: {
      head: ["TRIZ 工具", "本项目对应物"],
      rows: [
        ["8 大技术系统进化法则", "判断一条技术链“下一步会演化成什么”"],
        ["S 曲线进化法则", "判断某项技术处于“萌芽 / 成长 / 成熟 / 衰退”哪一段"],
        ["39 参数 × 40 发明原理的矛盾矩阵", "把“未来科技方向”拆解成“要解决什么矛盾”"],
        ["理想度 I = ∑有用功能 / (∑有害功能 + ∑成本)", "量化“这项技术值不值得往 L3/L4 推”"],
        ["5 级发明分级", "与本项目 L1–L5 五档分级几乎一一对应"]
      ]
    },
    link: "作为骨架方法：5 级分级直接映射到本项目五档涌现可行性；理想度量化用于阶段 2 评分卡的“是否值得推”；矛盾矩阵用于把未来方向拆成可评的约束。",
    refs: [
      "Altshuller, G. (1984/1999). And Suddenly the Inventor Appeared: TRIZ.",
      "阿奇舒勒. 创造是一门精密的科学（TRIZ 中译本）."
    ]
  },
  {
    id: "delphi",
    name: "技术预测学（Delphi + 交叉影响分析）",
    en: "Technology Forecasting: Delphi & Cross-Impact Analysis",
    tag: "未来研判",
    year: "1950s",
    founder: "Olaf Helmer / Norman Dalkey / Nicholas Rescher（RAND 公司）",
    field: "技术预测 / 政策研究",
    lead: "用结构化专家调查锚定“未来可能性与概率”的成熟方法论，是本项目 L3（未来可能实现）档的直接对应物。",
    body: [
      "Delphi 法：多轮匿名专家问卷，每轮把群体反馈回投给专家，使意见在不受群体压力与权威偏差干扰下收敛为共识。",
      "交叉影响分析（Cross-Impact Analysis）：评估一项预测的“实现”会如何改变其他事件的可能性，处理预测间的相互依赖。",
      "历史校准：RAND“2000 年技术预测”项目（1960s）对卫星通信、个人电脑的预测，后来被证实“惊人地准确”——说明结构化专家研判在时间跨度与可行性概率上是可靠的。"
    ],
    link: "对应本项目 L3（未来可能实现）档——需要专家研判时间跨度与可行性概率。与 §13 推演引擎互补：引擎给出确定性的“前提闭包 + 滞后律”，Delphi 补主观不确定性的概率区间。",
    refs: [
      "Helmer, O. & Rescher, N. (1959). On the Epistemology of the Inexact Sciences. RAND.",
      "RAND. (1960s). 2000 年技术预测项目（Project 1969 / 2000 study）."
    ]
  },
  {
    id: "networks",
    name: "复杂网络 / 引文网络分析",
    en: "Complex Networks & Citation Network Analysis",
    tag: "数学底座",
    year: "1989–1999",
    founder: "PageRank(Brin & Page 1998) · HITS(Kleinberg 1999) · 主路径分析(Hummon & Doreian 1989) · 模体/NDS(Broekel)",
    field: "网络科学 / 科学计量学",
    lead: "本项目数据最自然的数学底座——把技术视为依赖 / 引文网络，用图论刻画“来龙去脉”与“枢纽”。",
    body: [
      "PageRank（Google 1998）与 HITS（Kleinberg 1999）：识别网络中的“枢纽节点”。南京大学经济学者已用 PageRank + HITS 测度“卡脖子”技术——这正对应本项目 L4（未来较难实现）档里“难实现”的核心判据之一。",
      "主路径分析（Main Path Analysis, Hummon & Doreian 1989）：识别引文网络中“知识扩散的主干路径”，正是要找的“技术来龙去脉”的数学形式化。",
      "模体（Motif）与网络多样性指标（iNDS）：Tom Broekel 用 313 万专利数据区分“简单 / 复杂 / 随机”网络，可用来量化每条技术链的“复杂度”。"
    ],
    link: "直接支撑 Phase 1 确定性图算法：PageRank/HITS→枢纽/卡脖子（L4 判据）；主路径分析→来龙去脉主干；模体/NDS→复杂度分级；社区检测→能力簇聚类。",
    refs: [
      "Brin, S. & Page, L. (1998). The Anatomy of a Large-Scale Hypertextual Web Search Engine.",
      "Kleinberg, J. (1999). Authoritative Sources in a Hyperlinked Environment.",
      "Hummon, N. & Doreian, P. (1989). Connectivity in a Citation Network.",
      "Broekel, T. (2010s). Network indicators for the analysis of innovation networks."
    ]
  },
  {
    id: "kardashev",
    name: "文明尺度与推演框架（卡尔达肖夫 / 德雷克）",
    en: "Civilization Scales & Decomposition Frameworks",
    tag: "物理标尺",
    year: "1960 / 1964",
    founder: "Nikolai Kardashev (1964) · Frank Drake (1960)",
    field: "天体物理 / 大尺度推演",
    lead: "以“能量控制力”与“可分解因子乘积”为标尺，给“物理天花板”和“可行性评分”提供范式。",
    body: [
      "卡尔达肖夫尺度（Kardashev 1964）：以文明能控制的能量量级分级（人类约 0.73 级；II 型对应戴森球）。这是本项目 L5（受物理定律制约不可实现）档的理想“物理天花板”标尺——超过当前文明能量若干个量级的设想，须诚实标注其物理约束。",
      "德雷克方程（Drake 1960）：把“银河系内可通信文明数”这个不可知的大问题，拆成若干可估计因子的乘积（R*、fp、ne、fl、fi、fc、L）。这是本项目设计“技术可行性评分”的方法论范本——把“能否实现”拆成可分别估计的因子。"
    ],
    link: "能量预算→阶段 2 评分卡的“能量预算”项（用卡尔达肖夫量级估需能 vs 当前文明产出）；德雷克方程范式→评分卡“多维可估因子”结构（物理约束/材料瓶颈/尺度/前置完备度/矛盾可解性）。",
    refs: [
      "Kardashev, N. (1964). Transmission of Information by Extraterrestrial Civilizations.",
      "Drake, F. (1960). The Drake Equation (Green Bank conference)."
    ]
  },
  {
    id: "arthur",
    name: "技术组合进化理论",
    en: "Combinatorial Evolution of Technology",
    tag: "演化理论",
    year: "2009",
    founder: "W. Brian Arthur",
    field: "经济 / 技术哲学",
    lead: "新技术由已有技术组合而生，技术是一个“自我创造”的构件递归网络——“来龙去脉”的本质是组合递归，而非神经网络拟合。",
    body: [
      "《The Nature of Technology: What It Is and How It Evolves》(2009)：技术通过“组合进化”产生——每一项新技术都由已有技术组合而成，且新成果本身成为后续技术的构件，递归建造出技术的“集体（collective）”。",
      "这直接回答了本项目“来龙去脉”的本质：一项现代技术踩在数十代前人肩膀上，其演化是深度的组合递归，而非端到端的统计拟合。"
    ],
    link: "直接验证 Phase 1 的“组合诞生推演”——跨分类技术同时越过可用门槛即融合诞生复合技术（如智能手机、民用无人机、自动驾驶）；支撑“网络是自然组合网而非随机连接”的论断。",
    refs: [
      "Arthur, W. B. (2009). The Nature of Technology: What It Is and How It Evolves."
    ]
  },
  {
    id: "internal",
    name: "技术史方法论：内史 / 外史",
    en: "Internalist vs Externalist History of Technology",
    tag: "史学立场",
    year: "—",
    founder: "科技史学界（内史/外史之分）",
    field: "科学史 / 技术史",
    lead: "确定本项目取“内史”立场——以技术自身依赖链为第一性原理，社会因素仅作补充。",
    body: [
      "“内史”从技术自身的内容与逻辑出发，寻找技术发展内在的规律；“外史”从科技—社会互动（经济、政治、文化）出发找规律，但易陷入环境决定论。",
      "本项目取内史立场：以技术自身的依赖链为第一性原理（依赖前置→涌现），外部社会因素作为 Tier B 补充，不主导“能否实现”的判定。这保证了推演的确定性、可复现、可审计。"
    ],
    link: "贯穿全项目的方法论立场：Phase 1–2 与 §13 推演引擎均以内史（依赖网）为唯一判据，社会因素不进入 L 档判定。",
    refs: [
      "《人类科技创新简史》书评（光明日报, 2019）：论技术史的“内史”与“外史”。"
    ]
  },
  {
    id: "sna",
    name: "新兴技术合作创新网络（SNA）",
    en: "Emerging-Tech Cooperative Innovation Networks",
    tag: "网络实证",
    year: "2020 / 2021",
    founder: "李欣（情报杂志 2021）· 杨春白雪（科研管理 2020）",
    field: "情报学 / 创新管理",
    lead: "用社会网络分析（SNA）刻画技术合作网络，为本项目采用密度 / 中心性 / 割点等图指标提供实证合理性支撑。",
    body: [
      "研究用 SNA 指标（密度、平均路径长度、聚类系数、平均度、小世界→无标度）刻画新兴技术研发合作网络的演化特征。",
      "结论：核心节点（高中心性）对整个网络起关键作用，一旦缺位会割裂大片下游——这正对应本项目的“基石 / 割点”概念。"
    ],
    link: "验证了 Phase 1 采用网络密度、中心性、割点、最长路径等图指标的合理性；“核心节点”对应我们的“基石/割点（1859 个，化学/数学/电子计算机居前）”。",
    refs: [
      "李欣等. 多层网络分析视域下的新兴技术研发合作网络演化特征（情报杂志, 2021）.",
      "杨春白雪等. 新兴技术合作创新网络演化及特征分析（科研管理, 2020）."
    ]
  },
  {
    id: "polak",
    name: "组合进化计算实验（Polak & Arthur）",
    en: "Computational Model of Combinatorial Evolution",
    tag: "计算先例",
    year: "2006",
    founder: "Polak & Arthur",
    field: "复杂系统 / 计算实验",
    lead: "在电脑中仅用基本逻辑门随机组合、保留有用者作构件，自动涌现复杂电路——证明组合进化可在计算中实现。",
    body: [
      "实验设定：以极少的“基本构件”（逻辑门）为起点，随机组合新构件，保留其中“有用的”并加入构件库，递归建造，最终自动涌现出 8 位加法器等复杂电路。",
      "意义：用计算证明了“组合是创新的主要供给力”，为“依赖网自动编织 + 链接预测（Phase 3）”提供了方法论先例。"
    ],
    link: "Phase 3 链接预测的直接先例——既然组合可由程序自动发现有用新构件，那么自动化补全技术网络中“应连未连”的隐含依赖边就是可行路线；也为依赖网自动编织提供范式。",
    refs: [
      "Polak, S. & Arthur, B. (2006). The Evolution of Technology within a Simple Computer Model."
    ]
  }
];
