/* ============================================================
   理论与解释 · 覆盖层标注（v1.0 · 2026-09-12）
   —— 本文件不改动任何现有 dependsOn / enables / 节点字段，
      仅以 id 为键「追加」两类标注，供 core.js 的详情渲染读取：
        ① nodes  ：节点层（理论 / 方法·制度·工具 / 技术实现）
        ② retro  ：事后解释（技术先用、科学解释后至）
   背景：现有依赖网把 dependsOn 硬编码为「前置」，且 yearInv=0 强制
   「前置年 ≤ 技术年」，因此「技术先用、理论后到」在结构上无法表达。
   本层把这层语义抽出来单独标注，并保留原网络不动。
   状态：首版 · 待逐条复核（年份以学界通行说法为准，与语料年份不一致处已注明）
   ============================================================ */
window.THEORY = {
  meta: {
    v: "1.0",
    date: "2026-09-12",
    status: "首版 · 待逐条复核",
    note: "标注分两层：nodes 给「理论/方法/技术」定性，retro 记「技术何时开始用、何时才被科学解释、这中间的空白期靠什么解释」。所有年份为学界通行说法，凡与语料节点年份不一致者已在 note 中注明。",
    layers: {
      theory: "理论与解释",
      method: "方法 · 制度 · 工具",
      tech: "技术实现",
      concept: "概念占位"
    },
    rels: {
      precede: "前置奠基（理论先于技术，真正指导）",
      retro: "事后解释（技术先用，理论后至）",
      parallel: "并行互促（经验与理论同期演进）",
      revised: "解释被修正（旧理论被新理论取代）"
    },
    /* 前置的「性质」6 类（v2 · 2026-09-13）。
       前 4 类是「这个技术本身是什么性质的东西」，挂在前置节点上、**可多值**
       （工具钢 = 工艺 + 材料，一句话说清，不必在每条边上纠结）；
       后 2 类是「边的关系性质」，只在关系特殊时才覆盖。
       —— 一条边显示什么徽章 = 该前置节点的 kinds（或 edgeRels 覆盖），可同时多枚。 */
    depKinds: {
      material: { short: "材料", long: "材料 · 物质——造它所用之物（含消耗品与部件）" },
      craft: { short: "工艺", long: "工艺 · 装备——造它所需之具，或同类技术装置" },
      theory: { short: "学理", long: "学理 · 知识——解释它为何可行（多为潜在支撑，非直接造物所需）" },
      power: { short: "动力", long: "动力 · 能源——为它提供运转所需的能量或原动力" },
      symbol: { short: "符号", long: "符号 · 文化——因它才被需要（需求侧，非造物所需）" },
      complement: { short: "互补", long: "互补 · 搭档——与它配套使用，而非因果关系" }
    },
    /* 兜底规则：节点未在 kinds 里逐条标注时，按其 cat 推导 —— 有了它，
       全库 2288 个节点默认就有徽章，kinds 只用来「覆盖 / 细化」少数关键节点。 */
    kindByCat: {
      material: ["material"],
      energy: ["power"],
      manufact: ["craft"], info: ["craft"], transport: ["craft"],
      build: ["craft"], military: ["craft"],
      basic: ["theory"], life: ["theory"]
    },
    /* 「潜在学理」修饰：kinds 里写成 "theory.latent" —— 纯形式学科
       （数学 / 统计 / 概率 / 逻辑 / 信息论 / 计算理论）对具体技术多数只是
       背景性支撑，不提供任何具体的物质、工具或动力形态。徽章显示为虚边淡色。 */
    latentNote: "虚边徽章 = 潜在支撑（背景性学理，非直接造物所需）"
  },

  /* ---------- ① 节点层标注 ---------- */
  nodes: {
    mathematics: { layer: "theory", field: "数学", note: "公理化演绎体系，非技术物；语料记 −3000，承担 435 条依赖边，是最强的「恒真前置」" },
    /* ——— 数学簇 · 批次 2 补（35 条，逐条标 theory）——— */
    arithmetic: { layer: "theory", field: "算术" },
    geometry_euclid: { layer: "theory", field: "几何学" },
    number_theory: { layer: "theory", field: "数论" },
    negative_num: { layer: "theory", field: "数概念" },
    trigonometry: { layer: "theory", field: "三角学" },
    zero_concept: { layer: "theory", field: "数概念" },
    algebra: { layer: "theory", field: "代数" },
    decimal: { layer: "theory", field: "记数法" },
    complex_num: { layer: "theory", field: "复数" },
    logarithms: { layer: "theory", field: "对数" },
    analytic_geom: { layer: "theory", field: "解析几何" },
    combinatorics: { layer: "theory", field: "组合数学" },
    probability: { layer: "theory", field: "概率论" },
    calculus: { layer: "theory", field: "微积分" },
    diff_eq: { layer: "theory", field: "微分方程" },
    graph_theory: { layer: "theory", field: "图论" },
    fourier: { layer: "theory", field: "分析" },
    noneuclid: { layer: "theory", field: "几何学" },
    group_theory: { layer: "theory", field: "代数" },
    math_logic: { layer: "theory", field: "数理逻辑" },
    lin_algebra: { layer: "theory", field: "线性代数" },
    topology: { layer: "theory", field: "拓扑学" },
    knot_theory: { layer: "theory", field: "拓扑学" },
    set_theory: { layer: "theory", field: "集合论" },
    tensor_calc: { layer: "theory", field: "张量分析" },
    proof_theory: { layer: "theory", field: "数理逻辑" },
    measure_theory: { layer: "theory", field: "测度论" },
    kolmogorov: { layer: "theory", field: "概率论" },
    lambda_calc: { layer: "theory", field: "数理逻辑" },
    category_theory: { layer: "theory", field: "范畴论" },
    optimization: { layer: "theory", field: "运筹学", note: "语料记 1947，承担 108 条依赖边（仅次于数学/化学/力学/算法/工程学）" },
    numerical: { layer: "theory", field: "数值分析", note: "语料记 1950（占位年），承担 106 条依赖边" },
    catastrophe: { layer: "theory", field: "应用数学" },
    chaos: { layer: "theory", field: "动力系统" },
    fractal: { layer: "theory", field: "几何学" },
    /* ——— 物理簇 · 批次 3 补（16 条，逐条标 theory）——— */
    celestial_mech: { layer: "theory", field: "天体力学", note: "牛顿《原理》1687 的天体部分；语料年份与 physics 同源" },
    lagrangian: { layer: "theory", field: "分析力学", note: "拉格朗日 1788《分析力学》；与 newton 力学同源、互为重述" },
    em_theory: { layer: "theory", field: "电磁学", note: "麦克斯韦方程组 1865；语料记 1865" },
    wave_optics: { layer: "theory", field: "光学", note: "惠更斯-菲涅耳 1678/1818；波动说与粒子说之争见 optics" },
    special_rel: { layer: "theory", field: "相对论", note: "爱因斯坦 1905；语料记 1905" },
    quantum_field: { layer: "theory", field: "量子场论", note: "唯一权威条目。原 qft（1948）为同名重复节点，已于 v0.9.20 退役并入本条" },
    standard_model: { layer: "theory", field: "粒子物理", note: "电弱统一 1967（温伯格-萨拉姆）、QCD 1973 定型；语料记 1970" },
    nuclear_phys: { layer: "theory", field: "核物理", note: "语料 1911（卢瑟福核式模型）；作为学科成熟于 1930s" },
    atomic_theory: { layer: "theory", field: "原子论", note: "道尔顿近代原子论 1803；古希腊原子论远早于此，语料取道尔顿" },
    molecular_theory: { layer: "theory", field: "分子学说", note: "阿伏伽德罗 1811；与 atomic_theory 配套" },
    crystallography: { layer: "theory", field: "晶体学", note: "语料 1780；阿羽依晶体结构论 1784、X 射线晶体学 1912 后大盛" },
    spectroscopy: { layer: "theory", field: "光谱学", note: "语料 1802（沃拉斯顿/夫琅禾费）；基尔霍夫-本生 1859 建立光谱分析" },
    black_hole: { layer: "theory", field: "天体物理", note: "语料 1960；史瓦西解 1916、惠勒命名「黑洞」1967——语料年份偏早，待考" },
    acoustics: { layer: "theory", field: "声学", note: "语料 1700（占位年）；作为数理学科成熟于 17–19 世纪" },
    biophysics: { layer: "theory", field: "生物物理学", note: "语料 1900（占位年）；作为学科成熟于 1950s" },
    /* ——— 化学簇 · 批次 3 补（11 条，子学科统一标 theory）——— */
    periodic_table: { layer: "theory", field: "化学", note: "门捷列夫 1869《元素周期律》；语料记 1869" },
    valence: { layer: "theory", field: "化学键", note: "语料 1852（弗兰克兰价键概念）；电子对键 1916（路易斯）——年份口径待定" },
    organic_chem: { layer: "theory", field: "有机化学", note: "维勒尿素合成 1828 起；子学科" },
    inorganic_chem: { layer: "theory", field: "无机化学", note: "语料 1700（占位年）；子学科" },
    physical_chem: { layer: "theory", field: "物理化学", note: "语料 1887（奥斯特瓦尔德《普通化学教科书》）；子学科" },
    analytical_chem: { layer: "theory", field: "分析化学", note: "语料 1750（占位年）；子学科" },
    biochem: { layer: "theory", field: "生物化学", note: "语料 1890；子学科" },
    polymer_chem: { layer: "theory", field: "高分子化学", note: "语料 1900（施陶丁格大分子说 1920）；子学科" },
    electrochem: { layer: "theory", field: "电化学", note: "语料 1800（伏打电堆）；法拉第电解定律 1834；子学科" },
    thermo_chem: { layer: "theory", field: "热化学", note: "语料 1840（盖斯定律 1840）；子学科" },
    photochemistry: { layer: "theory", field: "光化学", note: "语料 1840；子学科" },
    engineering: { layer: "theory", field: "应用学科", note: "学科而非具体技术；语料记 −3000，承担 169 条依赖边" },
    chemistry: { layer: "theory", field: "化学", note: "语料记 1661（波义耳《怀疑的化学家》）；承担 421 条依赖边" },
    physics: { layer: "theory", field: "经典力学", note: "语料 id 为 physics，实指 1687 年牛顿力学的体系化" },
    algorithm: { layer: "theory", field: "算法理论", note: "语料记 825（花拉子米），承担 215 条依赖边" },
    molecular_bio: { layer: "theory", field: "分子生物学" },
    materials: { layer: "theory", field: "材料科学" },
    genetics: { layer: "theory", field: "遗传学" },
    immunology: { layer: "theory", field: "免疫学", note: "语料记 1798（詹纳出版），但作为解释体系成熟于 1880–1890 年代" },
    statistics: { layer: "theory", field: "统计学" },
    electromagnetism: { layer: "theory", field: "电磁学" },
    optics: { layer: "theory", field: "光学" },
    quantum: { layer: "theory", field: "量子科技" },
    microbiology: { layer: "theory", field: "微生物学" },
    neuroscience: { layer: "theory", field: "神经科学" },
    relativity_qm: { layer: "theory", field: "相对论与量子力学" },
    plasma_phys: { layer: "theory", field: "等离子体物理" },
    thermodynamics: { layer: "theory", field: "热力学" },
    quantum_entanglement: { layer: "theory", field: "量子纠缠" },
    astronomy: { layer: "theory", field: "天文学" },
    quantum_info: { layer: "theory", field: "量子信息" },
    spacetime: { layer: "theory", field: "时空" },
    evolution: { layer: "theory", field: "进化论" },
    particle_physics: { layer: "theory", field: "粒子物理" },
    particle_phys: { layer: "theory", field: "粒子物理学" },
    general_relativity: { layer: "theory", field: "广义相对论" },
    fluid_mech: { layer: "theory", field: "流体力学" },
    solid_mech: { layer: "theory", field: "固体力学" },
    stat_mech: { layer: "theory", field: "统计力学" },
    quantum_mech: { layer: "theory", field: "量子力学" },
    info_theory: { layer: "theory", field: "信息论" },
    control_theory: { layer: "theory", field: "控制论" },
    systems_theory: { layer: "theory", field: "系统论" },
    game_theory: { layer: "theory", field: "博弈论" },
    germ_theory: { layer: "theory", field: "微生物致病说" },
    ecology: { layer: "theory", field: "生态学" },
    taxonomy: { layer: "method", field: "生物分类学", note: "分类方法体系，非造物技术" },
    scientific_method: { layer: "method", field: "科学方法", note: "方法论，非技术物" },
    peer_review: { layer: "method", field: "同行评审制度", note: "学术制度" },
    replication: { layer: "method", field: "可重复实验", note: "方法论" },
    metrology: { layer: "method", field: "计量学" },
    standards_units: { layer: "method", field: "标准单位制" },
    surveying: { layer: "method", field: "测量学" },
    cartography: { layer: "method", field: "制图学" },
    microscope: { layer: "tech", field: "仪器", note: "仪器设备，误挂「基础」；能力上属观测技术" },
    telescope: { layer: "tech", field: "仪器", note: "仪器设备，误挂「基础」" },
    atomic_clock: { layer: "tech", field: "仪器", note: "仪器设备，误挂「基础」" },
    language: { layer: "tech", field: "符号系统", note: "人类自造的符号—交流系统，非科学理论" },
    fire_making: { layer: "tech", field: "技能", note: "技能，误挂「基础」" },
    magnet: { layer: "tech", field: "材料", note: "天然磁石是材料/器物，非理论" },
    counting: { layer: "tech", field: "技能", note: "计数是技能，其理论化是数学" },
    numerals: { layer: "tech", field: "符号系统" },
    positional: { layer: "tech", field: "符号系统", note: "位值制是记数技术" },
    data_science: { layer: "method", field: "方法" },
    bld_bim: { layer: "tech", field: "工程软件", note: "建筑信息模型是工具产物，非理论" }
  },

  /* ---------- ③ 前置的性质（v0.9.21 新增 · v2 改「节点多值」· 只读标注，不改 dependsOn） ----------
     背景：dependsOn 是扁平数组，把性质完全不同的前置混在一起。以钢笔(1884)为例——
       writing 文字   = 符号 · 文化   （有文字才需要钢笔，属需求侧）
       paper 造纸     = 互补 · 搭档   （笔的搭档，非笔的原料；由 edgeRels 覆盖）
       mat_toolsteel  = 工艺 + 材料   （笔尖的钢：既是材料，也要靠金属加工）
       mat_vulcan     = 工艺 + 材料   （储墨的硫化橡胶）
     四者在数据里长得一模一样。

     v2 的关键改动：**把性质挂在前置节点上、允许一节点多类**，而不是在边上二选一。
       —— 用户裁定：「工具钢的上层是金属工艺和材料两类就好了」，一句解决。
       —— 另一裁定：「内燃机不是造运河所需之具，而是挖泥机械的动力来源」→ 增设「动力」类。
     于是徽章可多枚：工具钢→钢笔 显示「工艺」「材料」两枚；内燃机→运河 显示「动力」。

     渲染优先级：edgeRels[边] > kinds[前置节点] > meta.kindByCat[前置节点的 cat]。
     最后一级兜底意味着**全库 2288 节点默认即有徽章**，kinds 只用于覆盖与细化。
     状态：先在 5 个修复样本上试点（对应 CR-2026-0913-positional-template）。 */
  kinds: {
    writing: ["symbol"],
    paper: ["craft", "material"],
    mat_toolsteel: ["craft", "material"],
    mat_vulcan: ["craft", "material"],
    mathematics: ["theory.latent"],
    statistics: ["theory.latent"],
    info_theory: ["theory"],
    neuroscience: ["theory"],
    explosives: ["material"],
    internal_combustion: ["power"],
    mat_reconcrete: ["material"],
    steel_frame: ["craft"],
    telegraph: ["craft"],
    photography: ["craft"],
    chemistry: ["theory"],
    electrochem: ["theory"],
    mat_rubber: ["material"],
    inf_cable: ["material"]
  },
  /* 边的关系性质覆盖（"依赖者|前置" → kind）。只在「不是因果前置」时才需要，
     因为「是材料还是工艺」已由前置节点自身回答，不必逐条重述。
     telephone→交换机 = 配套使用（交换机因电话而存在），非因果前置。 */
  edgeRels: {
    "inf_pen|paper": "complement",
    "inf_switchboard|telephone": "complement"
  },

  /* ---------- ② 事后解释（技术先行、科学解释后至） ----------
     字段：useYear 实际开始使用年（数字，与语料节点年可能不同）
           useNote 语料年份与实际起点的差异说明（可选）
           explain.at 首次科学解释年 / by 解释者节点 id / label 显示名
           folk 期间的朴素解释（from/to 年代，superseded 被谁取代）
           note 备注
     gap（无科学解释期）由渲染时用 explain.at − useYear 实时计算，不写死。 */
  retro: {
    metallurgy: {
      useYear: -5000, useSince: "约 −5000",
      explain: { at: 1661, by: ["chemistry"], label: "化学（波义耳）" },
      folk: [{ idea: "四元素说", to: 1661 }, { idea: "燃素说", from: 1667, to: 1777, superseded: "氧化说" }],
      note: "先有冶炼，几千年后才有人追问「金属到底是什么」。燃素说一度是主流解释，1777 年被拉瓦锡的氧化说取代。"
    },
    mat_pottery: {
      useYear: -10000, useSince: "约 −10000",
      explain: { at: 1661, by: ["chemistry"], label: "化学（硅酸盐）" },
      folk: [{ idea: "四元素说", to: 1661 }],
      note: "烧结、釉料、窑温全靠师徒经验，直到化学把硅酸盐与玻化讲清楚。"
    },
    fermentation: {
      useYear: -7000, useSince: "约 −7000",
      explain: { at: 1857, by: ["microbiology"], label: "微生物学（巴斯德）" },
      folk: [{ idea: "自然发生说", to: 1861, superseded: "微生物致病说" }],
      note: "酿酒、发面用了近万年。巴斯德 1857 证明发酵由微生物引起，1861 年实验推翻「自然发生说」。"
    },
    mat_cement: {
      useYear: -3000, useSince: "约 −3000",
      explain: { at: 1887, by: ["chemistry"], label: "水化化学（勒夏特列）" },
      folk: [{ idea: "四元素说", to: 1661 }],
      note: "罗马混凝土用了三千年，水化反应的化学解释到 19 世纪末才成型。"
    },
    mat_glass: {
      useYear: -2500, useSince: "约 −2500",
      explain: { at: 1661, by: ["chemistry"], label: "化学" },
      folk: [{ idea: "四元素说", to: 1661 }],
      note: "玻璃的成分与结构理论在 19 世纪随硅酸盐化学成熟。"
    },
    gunpowder: {
      useYear: 850, useSince: "约 850",
      explain: { at: 1661, by: ["chemistry"], label: "化学" },
      folk: [{ idea: "炼金术 · 四元素说", to: 1661 }, { idea: "燃素说", from: 1667, to: 1777, superseded: "氧化说" }],
      note: "火药出自炼丹术，本就是「无解释的配方」；为何爆燃，直到化学建立才有答案。"
    },
    compass: {
      useYear: 1100, useSince: "约 1100",
      explain: { at: 1865, by: ["electromagnetism"], label: "电磁学（麦克斯韦）" },
      folk: [{ idea: "风水 · 天人感应", to: 1600 }, { idea: "地磁说（吉尔伯特）", from: 1600, to: 1865 }],
      note: "定向可用千年，地磁成因与磁场的数学描述要到麦克斯韦才完成。"
    },
    clock: {
      useYear: 1300, useSince: "约 1300",
      explain: { at: 1656, by: ["physics"], label: "摆的等时性（惠更斯）" },
      folk: [],
      note: "机械钟先落地三百年，摆的等时性才被写出来，随即反哺钟表精度。属「经验先行、理论紧随」。"
    },
    bio_glasses: {
      useYear: 1280, useSince: "约 1280",
      explain: { at: 1621, by: ["optics"], label: "折射定律 · 透镜成像" },
      folk: [],
      note: "眼镜靠试磨镜片，成像规律（斯涅耳 1621、笛卡尔 1637）晚三百余年。"
    },
    telescope: {
      useYear: 1608, useSince: "1608",
      explain: { at: 1666, by: ["optics"], label: "光学（牛顿色散）" },
      folk: [{ idea: "视觉射线说", to: 1600 }],
      note: "伽利略用它看天时，尚不知为何成像、色差从何而来。"
    },
    steam_engine: {
      useYear: 1712, useSince: "1712（纽科门机）",
      useNote: "语料中 steam_engine 记 1769（瓦特），实际起点为纽科门机 1712",
      explain: { at: 1824, by: ["thermodynamics"], label: "热力学（卡诺）" },
      folk: [],
      note: "无朴素理论，纯靠工匠试错；热力学随后把「效率上限」写成定律，并反过来成为后续动力技术的真前置。"
    },
    vaccination: {
      useYear: 1796, useSince: "1796（詹纳）",
      explain: { at: 1890, by: ["immunology"], label: "免疫学（抗毒素）" },
      folk: [{ idea: "瘴气说", to: 1861, superseded: "微生物致病说" }],
      note: "牛痘接种有效了近百年，免疫机制（抗体、抗毒素）才被讲清楚。"
    },
    airplane: {
      useYear: 1903, useSince: "1903",
      explain: { at: 1904, by: ["fluid_mech"], label: "边界层理论（普朗特）" },
      folk: [],
      note: "首飞时并无完整空气动力学；普朗特 1904 年提出边界层，1918 年升力线理论才补齐机翼计算。"
    },
    bow_arrow: {
      useYear: -20000, useSince: "约 −20000",
      explain: { at: 1742, by: ["physics"], label: "弹道学（罗宾斯）" },
      folk: [],
      note: "投掷与射击靠手感与世代相传的经验，抛物线弹道的定量分析很晚才出现（牛顿 1687 起，罗宾斯 1742 系统化）。"
    },
    waterwheel: {
      useYear: 100, useSince: "约 100",
      explain: { at: 1752, by: ["fluid_mech"], label: "流体力学" },
      folk: [],
      note: "水轮效率长期靠试错，伯努利 1738、欧拉 1750 年代才有流体力学。"
    },
    ene_wind: {
      useYear: 900, useSince: "约 900",
      explain: { at: 1752, by: ["fluid_mech"], label: "流体力学" },
      folk: [],
      note: "风车早于流体力学约八百年，「为什么叶片要这么做」长期没人算得清。"
    },
    arch: {
      useYear: -1800, useSince: "约 −1800",
      explain: { at: 1675, by: ["solid_mech"], label: "悬链线定理（胡克）" },
      folk: [],
      note: "拱券靠比例经验与倒塌试错，其受力分析（胡克悬链线、18 世纪拱理论）极晚。"
    },
    bio_surgery: {
      useYear: -500, useSince: "约 −500",
      explain: { at: 1861, by: ["germ_theory"], label: "微生物致病说" },
      folk: [{ idea: "瘴气说 · 体液说", to: 1861 }],
      note: "外科技艺与解剖学积累了两千余年；感染为何发生，要等微生物致病说与无菌术（李斯特 1867）才有答案。"
    },
    wheel: {
      useYear: -3500, useSince: "约 −3500",
      explain: { at: 1781, by: ["solid_mech"], label: "摩擦定律（库仑）" },
      folk: [],
      note: "轮子用了五千年，滚动摩擦的定量规律到 18 世纪末才有。"
    },
    textile: {
      useYear: -4000, useSince: "约 −4000",
      explain: { at: 1856, by: ["chemistry"], label: "有机化学（合成染料）" },
      folk: [{ idea: "四元素说", to: 1661 }],
      note: "纺与染靠经验配方数千年；珀金 1856 年合成苯胺紫，染料才从经验转入化学。"
    }
  }
};
