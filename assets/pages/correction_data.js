/* ============================================================
   技术演化数据库 · 纠错总结（数据）
   - 由 correction.html + assets/pages/correction.js 渲染
   - 本页专录「前因后果 / 依赖关系 / 归属」等被证伪的修正事件，属重要质量事件
   - 每次发现并修正一类错误，在此追加一条 correction（按发现时间倒序展示）
   - 字段：id / date(YYYY-MM-DD) / node / nodeName / category / severity(高|中|低) /
           status(已修正|进行中|待修正) / problem / rootCause / fix /
           badUpstream(被误作前因的节点数组) / goodUpstream(修正后前因数组) /
           changes(要点数组) / files(涉及文件)
   ============================================================ */
window.CORRECTIONS = {
  meta: {
    title: "纠错总结",
    subtitle: "Correction Log · 依赖关系与前因后果的质量审计",
    note: "本页专门记录「技术依赖关系、前因后果、发明者/地点归属」等被证明错误的修正事件。这类事件反映数据管道在「链接预测 / catalog 合并 / 文案生成」环节可能产生的系统性偏差，属重要质量事件，除在本页留档外，也会同步登记进《版本迭代》。每个记录附「自检方法」，便于横向复用到全库扫描。注：内置预览/自动化工具会在 HTML 标签注入 data-page-node-id 追踪属性，属工具噪声、非数据问题，请勿据此提交或修改文件。",
    maintainer: "WorkBuddy（自主构建 Agent）",
    method: [
      "步骤 1 · 抽样核验：对来龙去脉页中「直接上游」明显不合理的节点（如材料/制造范式被列作某具体技术的直接前因）做人工核验。",
      "步骤 2 · 溯源 catalog：到 analysis-engine/catalogs/*.json 找该节点的原始编纂 deps，确认正确前因。",
      "步骤 3 · 比对合并缺口：在 analysis-engine/data/subcat/report.txt 中查「同名已存在，改为打标」记录，确认 catalog 的 deps 是否被丢弃未覆盖。",
      "步骤 4 · 修正 graph.json 入边：删除错误入边、补正确入边，必要时同步 year / summary / people / place。",
      "步骤 5 · 全库自检：对同批次被滥用的通用节点（二维材料、工业 4.0、摩擦纳米发电、自修复材料、石墨烯等）做全库反向扫描，批量修正同类错误。",
      "步骤 6 · 重建与登记：node analysis-engine/build_full_dataset.js 重建 data_full.js，记录进本页与《版本迭代》。"
    ],
    pendingQueue: [
      "report.txt 中全部「同名已存在，改为打标」节点是否丢失了 catalog deps（持续核查）。",
      "悬空边已修复（见 CR-2026-0909-orphan）；建议复核这些被引用却缺失的节点（math_hypothesis_testing、laptop_computer、compute_fpga_soc、si_system 等）是否应补建，或确属废弃引用。",
      "新发现（v0.9.16 审计）：ml_uav_1..126 等 126 个模板化「军用无人机衍生」节点仍同构依赖 rocket/algorithm/electronics（同为链接预测整批生成的 cohort，与二阶枢纽污染同源但主体在主管线主库与新条目语料中）——待下一轮批量甄别是「拆成真实子技术」还是删除，勿与 590 条二阶污染混淆。"
    ]
  },
  entries: [
    {
      id: "CR-2026-0910-mirror-ancient",
      date: "2026-09-10",
      node: "(全量管线镜像) graph.json / data_full.js / bld_dronesurvey / 12 处负年倒挂（18 节点）",
      nodeName: "全量管线镜像同步 + 无人机测绘主库漏修 + 史前/上古 12 处负年倒挂考古修正",
      category: "meta",
      severity: "中",
      status: "已修正",
      problem: "① 全量管线（analysis-engine/data/graph.json + assets/data_full.js）与主管线长期分叉：graph.json 是 2026-09-04 由主管线导出，v0.9.10–15 对主管线的全部清理未镜像过去（残留约 622 条同源污染依赖边，且缺 22 个史前/上古新增节点）；② 反向也有主管线漏修：bld_dronesurvey（无人机测绘）当年 CR-2026-0909-dronesurvey 只修了 graph.json/data_full，主管线数组仍为旧错误态（year 2015、dependsOn/enables 空、摘要仍是「依托二维材料/工业 4.0/摩擦纳米发电」模板）；③ 12 处含负年的年份倒挂（masonry←mortar、metallurgy←charcoal/bellows、bridge/aqueduct←arch、hafting←rope/woodworking、loom←textile、smithing←iron/bellows、fire_making←rope 等，涉及 18 节点）此前只登记未修正；④ 顺带发现 build_full_dataset.js 把 graph.json 的 dependency 边（存为 被依赖者→依赖者）与 new_techs 边（依赖者→被依赖者）两种相反方向混写入 EDGES_FULL，全量科技树按单一方向解释导致部分边渲染反向。",
      rootCause: "① 多套数据源的导出/重建脚本（dump_data.js / build_full_dataset.js）缺少「改主管线后必须重导出」的门禁，历史清理只改局部文件；② bld_dronesurvey 纠错当年以 graph.json 为唯一入口，未写回主管线数组源头；③ 史前/上古批次的 year 为生成占位值且互相矛盾，且 rope 等「通用早期技术」被当整批 cohort 的万能前置注入（与二阶枢纽同型的模板注入，发生在史前层）；④ build_full_dataset.js 建边时直接拷贝 graph.json 边而未做方向归一。",
      fix: "① 全量镜像：先修 bld_dronesurvey 主库条目（对齐 graph.json 正确版：year 2010、dependsOn=gps/computer/drone/camera/photography/uav_controller/multicopter 共 7 条、补 people/place、重写 summary/views/significance 去除模板污染），再以 dump_data.js 从主管线重导出 graph.json（654 条 graph-only 陈旧边清除、110 条主库新增边补入，graph 与主管线双向 0 差异）；② build_full_dataset.js 修正 dependency 边方向（graph 边转置为 依赖者→被依赖者，与 new_techs 及全量科技树解释一致），重建 data_full.js（节点 13392→13413，补入 21 个此前仅存在于主管线的节点；边 18048→17503）；③ 12 处负年倒挂考古修正（详见 changes：绳索 4.1–5.2 万年前直证、装柄复合工具≥20 万年前、木作 30 万年前 Schöningen 木矛、铜冶金/砌筑 约 公元前 5000 年、锻造取铁器时代约 公元前 1000 年、织机 约 前 4000 年、拱 约 公元前 1800 年 美索不达米亚砖拱），并对「后发的专化技术/材料被当领域起源前置」的 7 条依赖做概念影响降级移除硬边；④ 52 项 era-vs-year 语义纪元逐条复核后维持原判（era 承担领域/预测档位语义，非时间桶标签，不改数据）；⑤ README/tree_full 全量数声明 13392→13413。复核：主管线负年 yearInv 12→0、edges 7348→7340；graph.json 镜像 0 差异；data_full 污染枢纽（mat_2d/ene_wasteheat/mat_selfheal/ene_liquidair 等）被依赖数归零；模型页 dry-run RENDER OK（拟合值因年份/纪元修订微移：P b=1.33/R²≈0.874、K b≈2.04/R²≈0.932，实时渲染无硬编码）；check_docs 门禁 OK。",
      badUpstream: ["(全量管线陈旧边) 二阶枢纽模板污染约 622 条 + 量子簇残留 + bld_dronesurvey 旧模板文本", "(负年倒挂 7 条概念化硬边) rope→woodworking/hafting/fire_making、mortar→masonry、arch→bridge、bellows·charcoal→metallurgy、cement→arch"],
      goodUpstream: ["graph.json / data_full.js 与主管线 0 差异；bld_dronesurvey 对齐 7 真实前置", "考古年份修正：rope -45000 / woodworking -300000 / hafting -200000 / arch -1800(ancient) / smithing -1000 / loom -4000 等；7 条非必要前置降级为概念影响（摘要注明）"],
      changes: [
        "全量镜像：dump_data.js 重导出 graph.json（技术节点 2289、dependency 7340 与主库完全一致，断链 0）；build_full_dataset.js 修复 dependency 边方向归一后重建 data_full.js：TECHS_FULL 13392→13413（+21 主库独有节点进入全量，多为史前/上古真实技术：木炭/独木舟/绳索/锻造/木作等）、EDGES_FULL 18048→17503，全量科技树（tree_full）边方向统一为 依赖者→被依赖者、反向重复对归零。",
        "bld_dronesurvey 主库漏修补齐（techs_extra.js）：year 2015→2010、dependsOn 由空补为 7 条真实前置、摘要/views/significance 重写，删除「二维材料/工业 4.0/摩擦纳米发电/混凝土 3D 打印」模板语句；与 graph.json 既有修正态一致。",
        "12 处负年倒挂（18 节点）考古修正——年份/日期/纪元：rope -28000→-45000（约 4.5 万年前，法国 Abri du Maras 尼安德特纤维绳直证 4.1–5.2 万年前）、woodworking -50000→-300000（约 30 万年前，Schöningen 木矛）、hafting -60000→-200000（约 20 万年前，粘合装柄证据）、arch -100(classical)→-1800(ancient)（约 公元前 1800 年，美索不达米亚砖拱）、smithing -3000→-1000（铁器时代锻造普及口径）、loom -5000→-4000；metallurgy/masonry 维持约 公元前 5000 年（铜冶金/砌筑实证起点），aqueduct/bellows/charcoal/textile 等相应保持。",
        "7 条「专化使能当起源前置」硬边做概念影响降级（摘要注明）：rope 移出 woodworking/hafting/fire_making 的 dependsOn（装柄可用粘合剂与革筋、摩擦取火不需绳、木作不需绳）；mortar 移出 masonry（早期干砌/泥浆砌筑）；arch 移出 bridge（木梁/石梁桥早于拱桥，拱桥为后起形式）；bellows·charcoal 移出 metallurgy（铜冶金起源不需风箱/木炭，二者是青铜/铁高温冶炼阶段使能）；cement 移出 arch（罗马水泥远晚于砖拱）。",
        "52 项 era-vs-year 语义纪元逐条复核：全部维持原判、不改数据——含「上古延伸」（era=ancient 但年份在公元前 3500 年前，如 brick/kiln/masonry/metallurgy/textile/mining/charcoal 等约 14 项）、「领域纪元」（era 按学科/技术域语义取 electrical/info/intelligent/industrial 而非时间桶，如 electricity 1879=electrical、lasers 1960=electrical、plastics 1907=industrial 等）、「预测档位」（crispr/mrna_vaccine/reusable_rocket era=future、year 2025 为预期成熟锚）。",
        "新发现登记：ml_uav_1..126 模板 cohort 仍同构依赖 rocket/algorithm/electronics（主库 + new_techs 双份），与二阶枢纽污染同源但属「衍生分支生成物」，已列入 pendingQueue 待下轮批量甄别（本轮未动，非 622 条镜像范围）。",
        "数据声明同步：README.md / tree_full.html 全量节点 13,392→13,413、依赖/赋能边约 1.8 万→约 1.75 万；模型页实时拟合值随年份/纪元修订微移（P 弹性 1.33/R²≈0.874、K 弹性 2.04/R²≈0.932，页面实时计算、无硬编码）。"
      ],
      files: ["assets/techs_extra.js", "assets/techs_extend.js", "assets/data.js", "analysis-engine/data/graph.json", "assets/data_full.js", "analysis-engine/build_full_dataset.js", "assets/pages/correction_data.js", "README.md", "tree_full.html"]
    },
    {
      id: "CR-2026-0909-yearinv",
      date: "2026-09-09",
      node: "engineering / scientific_method / propulsion / rocket / combustion / thermodynamics / quantum_entanglement / quantum",
      nodeName: "4 处年倒挂依赖：降级为概念影响 + 年份/纪元修正 + 量子两项研判",
      category: "meta",
      severity: "中",
      status: "已修正",
      problem: "v0.9.14 审计保留的 4 条硬依赖形成「子技术年早于前置年」倒挂：engineering(1500)←scientific_method(1600)、propulsion(1900)←rocket(1926)、combustion(1800)←thermodynamics(1824)、quantum_entanglement(1935)←quantum(1980)。人工核验结论：① 这 4 条实为「后发的学科/方法」被当成了技术硬前置——工程不建立在 1600 年的科学方法之上（经验工程远早于此）、推进不依赖 1926 年的火箭（火箭是推进的实例）、燃烧不依赖 1824 年才成形热力学学科、1935 年的纠缠不依赖 1980 年才出现的量子科技——语义上属「科学解释/概念影响」，并非可参与滞后统计的技术谱系硬边；② 部分年份为「世纪占位年」（engineering 1500、propulsion 1900），与其真实年代和下游年代（工程下游含公元前 3000 年建筑等）明显偏离；③ 伴随纪元标注错误（科学方法 1600 标 classical、火箭 1926 标 industrial、纠缠 1935 标 info、物理 1687/化学 1661 标 classical 等）。",
      rootCause: "生成阶段把学科/方法类概念当作「缺失前置」补入大枢纽（engineering/combustion/propulsion/entanglement）的 dependsOn，并用整纪元的占位年作为 hub year，既违背时间顺序又把「解释关系」误建成「依赖关系」；纪元字段由旧口径自动打标未随年份校对。",
      fix: "① 4 条硬依赖按用户裁定降级为「概念影响」：移除 dependsOn 硬边，并在节点摘要中显式注明该关系为概念性影响（站内 _upConcept 机制用于承接未建节点的概念引用，对已建节点以「摘要注明 + 移除硬边」落实同义语义）；② 年份修正：engineering 1500→-3000（古代，与下游建筑/桥梁谱系一致）、propulsion 1900→1960（信息时代，先进推进工程化起点，其下游均为 2050+ 未来推进）；③ 纪元纠偏：scientific_method/physics/chemistry→earlymodern，rocket→electrical，quantum_entanglement→electrical，engineering→ancient（共 7 处，era-year mismatch 59→52，余项经逐条甄别多为「语义纪元」合理保留或古早纪年噪声另列）；④ 量子两项 web 研判落地（见 problem/fix 注）：纠缠系经 Bell 实验反复证实（2022 诺贝尔物理学奖）并已工程化为量子密钥分发/隐形传态资源的物理事实，量子科技对技术进步有直接推动（QKD 组网商用、量子计算优越性实验、量子传感医疗/电网应用）——二者均保留为真实基础节点，不改建成「纯理论/仅教育」；据此同时清除量子簇 3 条虚假下游硬边（λ演算、计算机科学 ←量子纠缠；蛋白质组学 ←量子信息）并重写 6 处模板化/重复摘要。",
      badUpstream: ["scientific_method 科学方法(1600)→工程(概念影响)", "rocket 火箭(1926)→推进(概念影响)", "thermodynamics 热力学(1824)→燃烧(概念影响)", "quantum 量子科技(1980)→量子纠缠(概念影响)"],
      goodUpstream: ["engineering 现仅依赖 mathematics", "propulsion 现仅依赖 thermodynamics", "combustion 现仅依赖 chemistry", "quantum_entanglement 现仅依赖 relativity_qm（相对论与量子力学，1905）"],
      changes: [
        "硬边移除 4 条（降级为概念影响，摘要注明）：engineering 去 scientific_method、propulsion 去 rocket、combustion 去 thermodynamics、quantum_entanglement 去 quantum。",
        "量子簇虚假下游清除 3 条：λ演算/计算机科学 dependsOn 去 quantum_entanglement、蛋白质组学 dependsOn 去 quantum_info（并修正 quantum_info 摘要中「蛋白质组学」错误表述）。",
        "年份修正 2 处：engineering 1500→-3000（date/era 同步）、propulsion 1900→1960（date/era 同步）；纪元纠偏 5 处：scientific_method/physics/chemistry→earlymodern、rocket→electrical、quantum_entanglement→electrical。",
        "摘要重写 6 处（去重复 token 与虚假下游声明，注明概念影响与真实依据）：engineering / propulsion / combustion / quantum_entanglement / quantum / quantum_info。",
        "全库年份自查：yearInv（正年口径）4→0；含负年全量口径另发现 12 处古早纪年噪声（如 masonry(-5000)←mortar(-3000)、metallurgy(-5000)←charcoal(-4000) 等 18 节点），非本轮四例同类、需考古口径逐例定夺，已列入待核清单未擅改。",
        "复核：主管线 edges 7938→7931（本项 −7），无自环/环/悬空；模型页 dry-run RENDER OK（P 弹性 1.33/R²=0.875，K 弹性 2.03/R²=0.933 实时渲染与复算一致）。"
      ],
      files: ["assets/techs_extend.js", "assets/techs_extra.js", "assets/data.js"]
    },
    {
      id: "CR-2026-0909-dronesurvey",
      date: "2026-09-09",
      node: "bld_dronesurvey",
      nodeName: "无人机测绘 Drone Surveying",
      category: "build",
      severity: "高",
      status: "已修正",
      problem: "来龙去脉页把「二维材料、工业 4.0、摩擦纳米发电」三条无关技术列为无人机测绘的直接前因，并据此生成「这些技术在同一时点成熟后汇聚使其商品化」的文案；回溯出 65 项庞大且含大量无关节点（自修复材料、石墨烯）的上游列表。",
      rootCause: "graph.json 中 bld_dronesurvey 的入边被错误设为 mat_2d / mfg_industry40 / ene_tribo。原始目录 build_construction.json 已写正确 deps=[\"gps\",\"computer\"]，但构建时该节点被标记「同名已存在，改为打标」，正确依赖未覆盖到现有节点，错误图结构继续生效。",
      fix: "删除三条错误入边，新增正确前因：gps、computer、drone、camera、photography、uav_controller、multicopter；year 2015→2010；重写 summary，补 people/place（DJI/开源飞控社区/Pix4D 等）。并修正 app.js 文案：代际标签由「第 N 代（更早）」改为「直接上游 / 第 N 代上游」，弱化顶部 prose 的绝对化表述。",
      badUpstream: ["mat_2d 二维材料", "mfg_industry40 工业 4.0", "ene_tribo 摩擦纳米发电"],
      goodUpstream: ["gps 全球卫星定位", "computer 电子计算机", "drone 无人机", "camera 数码相机/图像传感器", "photography 摄影", "uav_controller 飞控系统", "multicopter 多旋翼构型"],
      changes: [
        "graph.json：bld_dronesurvey 入边由 {mat_2d,mfg_industry40,ene_tribo} 修正为 {gps,computer,drone,camera,photography,uav_controller,multicopter}。",
        "graph.json：year 2015→2010；重写 summary；补 people/place。",
        "assets/app.js：renderLineageSide 代际标签「第 N 代（更早）」改为「直接上游 / 第 N 代上游」；顶部 prose 改为克制因果表述。",
        "重建 assets/data_full.js（node analysis-engine/build_full_dataset.js）。"
      ],
      files: ["analysis-engine/data/graph.json", "assets/app.js", "analysis-engine/catalogs/build_construction.json", "assets/data_full.js"]
    },
    {
      id: "CR-2026-0909-hubspam",
      date: "2026-09-09",
      node: "mat_2d / mfg_industry40 / ene_tribo / mat_selfheal",
      nodeName: "枢纽节点误接下游（链接预测污染）",
      category: "meta",
      severity: "高",
      status: "已修正",
      problem: "延续无人机测绘案例的全库自检：二维材料(mat_2d, 56 下游)、工业 4.0(mfg_industry40, 4)、摩擦纳米发电(ene_tribo, 20)、自修复材料(mat_selfheal, 24) 被链接预测/合并环节批量误接为大量无关下游的直接前因——下游几乎全是 llm / Transformer / 5G / 区块链 / 深度学习 / 无人机蜂群 / 高超声速导弹等软件、AI、通信、交通、军事、建造范式节点，这些领域并不以二维材料或摩擦纳米发电为前提。同批下游的「其它上游」还混入了液态空气储能、井式地热等同样被滥用的枢纽，证明是同一类模板化误接。",
      rootCause: "Phase 3 链接预测 / catalog 合并阶段对若干「通用技术名」做了过度泛化的前因推断，把它们当作万能前置注入到一批共享模板下游（transport/build/info/military），而非依据真实技术谱系。无人机测绘案例是这一系统性偏差的可见症状，全库反向扫描则暴露了它在 4 个枢纽节点上的完整分布。",
      fix: "删除上述 4 节点的全部误接下游边：mat_2d 56 条、mfg_industry40 4 条、ene_tribo 20 条、mat_selfheal 24 条，合计 104 条。其中 mat_graphene→mat_2d（石墨烯 2004 年发现催生二维材料研究领域）经核验为正确，予以保留；mat_selfheal 无任何语义合理的下游，全部删除。",
      badUpstream: ["mat_2d 二维材料(56 下游)", "mfg_industry40 工业 4.0(4)", "ene_tribo 摩擦纳米发电(20)", "mat_selfheal 自修复材料(24)"],
      goodUpstream: ["mat_graphene 石墨烯 → mat_2d 二维材料（核验正确，保留）"],
      changes: [
        "graph.json：删除 mat_2d 全部 56 条、mfg_industry40 全部 4 条、ene_tribo 全部 20 条、mat_selfheal 全部 24 条下游误接边，合计 104 条。",
        "graph.json：保留 mat_graphene→mat_2d（石墨烯催生二维材料研究，语义正确）。",
        "全库边数由 8397 降至 8275（含下一记录的悬空边清理）。",
        "重建 assets/data_full.js（node analysis-engine/build_full_dataset.js）。"
      ],
      files: ["analysis-engine/data/graph.json", "assets/data_full.js"]
    },
    {
      id: "CR-2026-0909-orphan",
      date: "2026-09-09",
      node: "(数据完整性)",
      nodeName: "悬空依赖边（指向不存在的节点）",
      category: "meta",
      severity: "中",
      status: "已修正",
      problem: "全库扫描发现 21 条边引用了不存在的节点 id（18 条边 target 缺失、3 条边 source 缺失），如 math_hypothesis_testing、laptop_computer、compute_fpga_soc、si_system、plan_slow_traffic、math_normal_distribution 等。这些悬空边会在来龙去脉页 / 可视化中造成断链或运行时报错。",
      rootCause: "catalog 合并 / 节点去重阶段，部分下游节点被丢弃或改名，但引用它们的边未同步清理；另有少数 source 节点（metric_system、plan_road_hierarchy、math_normal_distribution）同样未进入最终节点表。",
      fix: "删除全部 21 条悬空边（source 或 target 任一方不在节点表中的边），消除断链。被引用却缺失的节点暂未补建，已在待检清单登记，待确认是否应补建或确属废弃引用。",
      badUpstream: [],
      goodUpstream: [],
      changes: [
        "graph.json：删除 21 条悬空依赖边（18 条 target 缺失 + 3 条 source 缺失）。",
        "涉及缺失节点示例：math_hypothesis_testing、laptop_computer、compute_fpga_soc、si_system、plan_slow_traffic、math_normal_distribution、metric_system、plan_road_hierarchy 等。",
        "与枢纽清理一并重建 assets/data_full.js。"
      ],
      files: ["analysis-engine/data/graph.json", "assets/data_full.js"]
    },
    {
      id: "CR-2026-0909-hub2nd",
      date: "2026-09-09",
      node: "ene_liquidair 等约 24 个材料/能源/制造节点",
      nodeName: "二阶枢纽污染（链接预测残留）",
      category: "meta",
      severity: "高",
      status: "已修正（主管线；全量管线 graph.json 待镜像同步）",
      problem: "Phase 3（链接预测 / catalog 合并）阶段把「通用技术名」过度泛化成万能前置，批量注入到 transport/build/info/military 等共享模板下游。一阶已修（v0.9.11，已修正）：删掉 4 个明显枢纽——二维材料 mat_2d、工业 4.0 mfg_industry40、摩擦纳米发电 ene_tribo、自修复材料 mat_selfheal 的 104 条误接下游边（保留 mat_graphene→mat_2d，语义正确）。二阶（本次遗留）：同因、更隐蔽的残留——还有约 24 个材料/能源/制造节点，下游数量异常大（15–50 条）且大多指向 transport/build/info/military 模板，疑似同类污染。",
      rootCause: "与一阶同源：链接预测 / catalog 合并阶段对通用技术名做了过度泛化的前因推断，把它们当作万能前置注入一批共享模板下游，而非依据真实技术谱系。无人机测绘案例是可见症状；一阶清理暴露了 4 个显眼枢纽，二阶是同一机制在更多中频节点上的分散残留。",
      fix: "逐节点抽样核验已完成并落地：对 24 个二阶枢纽逐一检查其下游，发现它们并非「含真实下游+混入模板边」，而是整批由「同纪元模板」注入——每个枢纽的全部下游几乎都以该枢纽 year 为锚、同一年份横跨 build/info/manufact/military/transport 五类（例：余热回收 ene_wasteheat 的 50 条下游全部为 1800 年工业纪元 cohort——框架/桁架/钢桥、刨床/磨床/冲压、来复枪/水雷/军事后勤、蒸汽船/铁路/缆车等，无一以余热回收为前提；液态空气储能 ene_liquidair 的 31 条全为 2010 智能纪元 cohort；盐差能/泡沫金属全为 1950 cohort；金属有机框架/燃料电池汽车全为 1990 cohort……）。结论：这些下游是链接预测阶段整批生成的模板污染，不是真实技术谱系；真实枢纽（对照：半导体材料 semiconductors）的下游应异类异年（晶体管/集成电路/激光器/卫星）。处置：删除确认污染的 590 条下游引用（含一批枢纽间互相误接，如热处理炉/切削液/量子通信等条目 dependsOn 中的余热回收、碟式斯特林、激光熔覆、渗硼、调峰电站引用），保留核验为真实的下游（semiconductors 8：太阳能光伏/晶体管/集成电路/激光器/数码相机图像传感器/内存/人造卫星/激光雷达；mat_cf 2：碳纤维复合材料/金属基复合材料；electric_motor 8：无刷电机/工业机器人/真空吸尘器/汽车电气系统/自动驾驶/割草·吸尘执行机构/多旋翼构型）。修正后：主管线边 7938→7341（−597，其中本项 −590），yearInv=0，DAG 无环不变。",
      badUpstream: [],
      goodUpstream: [],
      changes: [
        "逐节点核验方法：列出每个枢纽的完整下游 → 逐条比对 name/category/year（模板特征＝同纪元整批 + 跨 5 类）→ 抽样查看下游条目 dependsOn 全文与摘要 → 分类「真实 / 污染」。",
        "删除确认污染的 590 条下游引用（24 枢纽明细：余热回收 50 / 感应熔炼 46 / 调峰电站 41 / 金属有机框架 38 / 热处理炉 38 / 液态空气储能 31 / 激光熔覆 27 / 渗硼 27 / 燃料电池汽车 26 / 盐差能 25 / 碟式斯特林 25 / 泡沫金属 25 / 井式地热 25 / 水热地热 24 / 储氢合金 23 / 可燃冰 23 / 风力 22 / 切削液 21 / 放电等离子烧结 19 / 砂轮 15 / 碳纤维 13 / 电动机 4 / 地热利用 1 / 半导体材料 1）。",
        "保留真实下游：semiconductors 8 项、mat_cf 2 项（碳纤维复合材料/金属基复合材料）、electric_motor 8 项。",
        "污染枢纽清除后下游归零：ene_wasteheat / ene_liquidair / ene_borehole / ene_salinity / ene_dishstirling / ene_hydrothermal / ene_clathrate / ene_peaker / ene_wind / ene_fuelcellcar / mat_inductionmelt / mat_mof / mat_laserclad / mat_boriding / mat_foammetal / mat_sps / mat_hydrogenstorage / mfg_furnace / mfg_coolant / mfg_grindingwheel / ene_geothermal。",
        "修正复核：主管线边 7938→7341（−597，其中二阶枢纽 −590）；dupEdge=0、无自环/环/悬空 dependsOn、yearInv=0。",
        "范围说明：本项在主管线数组源头（assets/techs_extra.js / data.js / techs_extend.js）落地；全量管线 analysis-engine/data/graph.json 的同类约 622 条污染边仍待镜像同步（单独批次）。"
      ],
      files: ["assets/techs_extra.js", "assets/data.js", "assets/techs_extend.js", "assets/pages/correction_data.js", "analysis-engine/data/graph.json(待镜像)"]
    },
    {
      id: "CR-2026-0909-tierb",
      date: "2026-09-09",
      node: "tierB_gap.json 的 1915 条候选节点",
      nodeName: "Tier B 剩余约 1915 gap（口径澄清）",
      category: "meta",
      severity: "低",
      status: "已知（设计如此）",
      problem: "tierB_gap.json 的「1915 gap」常被误解为「1915 条缺失、都要补发明者/地点」。实际定义：year≥1750 且 people 与 place 同时缺失的节点，共 1915 条，按 9 类分布：life296 / info245 / basic249 / build216 / transport209 / military202 / energy196 / material188 / manufact114。",
      rootCause: "其中大量是程序化生成的「学科/子领域」节点（如 bx_math_*、it_alg_*、ml_uav_*），本就不应有单一发明人 → 按设计留空。所以 1915 不是「都要填」，而是「1915 个候选，仅地标性发明/理论值得高精度回填」。",
      fix: "首批已回填 29 个地标节点（铅笔、青霉素、X 射线、ENIAC、万维网、高铁、微处理器等），gap 由 1944→1915；剩余 1915 为 backlog，按地标性优先、程序化子领域节点保持留空。",
      badUpstream: [],
      goodUpstream: [],
      changes: [
        "口径：tierB_gap.json = year≥1750 且 people&place 双缺；9 类合计 1915（life296/info245/basic249/build216/transport209/military202/energy196/material188/manufact114）。",
        "性质：多为程序化「学科/子领域」节点，按设计留空；仅地标性发明/理论值得回填。",
        "进度：首批 29 个地标已回填（graph.json people/place + 重建 data_full.js），gap 1944→1915。"
      ],
      files: ["analysis-engine/data/tierB_gap.json", "analysis-engine/data/graph.json", "assets/data_full.js"]
    },
    {
      id: "CR-2026-0909-mainline-audit",
      date: "2026-09-09",
      node: "主管线技术网络（2289 节点依赖 DAG，模型页/分析页数据源）",
      nodeName: "主管线网络全量遍历审计：一阶枢纽残留 + 重复依赖边",
      category: "meta",
      severity: "高",
      status: "已修正（一阶+去重+二阶结案；年份/概念处理见 CR-2026-0909-yearinv、CR-2026-0909-hub2nd）",
      problem: "此前 v0.9.10–11 的枢纽清理只改了全量管线 graph.json / data_full.js，未改主管线数组源头（assets/techs_extra.js 等），导致模型页/分析页所用的 2289 节点网络仍残留同一批污染。本轮对主管线全网络遍历审计（2289 节点 / 8129 条真实依赖边）：无重复 id、无自环、无环、无悬空 dependsOn（结构健康）；但一阶枢纽误接下仍存在——mat_2d(57) / ene_tribo(21) / mat_selfheal(22) / mfg_industry40(5)；另有 86 条「同节点重复依赖」（如 solar、genetics 在 dependsOn 中被列两次，污染下游统计），以及 4 处「子技术年早于前置年」倒挂。",
      rootCause: "① 清理没有回写到主管线数组源头（生成的 techs_extra.js 由 gen_run/gen_1000 注入共享模板下游），主/全量两套数据源出现分叉；② 生成器对部分通用根节点（solar/genetics 等）在 dependsOn 中追加了两次。",
      fix: "对数组源头执行镜像修正：移除 4 个已定论枢纽（mat_2d/mfg_industry40/ene_tribo/mat_selfheal）在 techs_extra.js + data.js 的全部下游引用（105 条，主管线中无 mat_graphene→mat_2d 特例可保留），并把 dependsOn/enables 重复元素去重（86 条）。修正后主管线边 8129→7938，四个枢纽下游归零、重复依赖归零，DAG 无环不变。",
      badUpstream: [],
      goodUpstream: [],
      changes: [
        "techs_extra.js：78 个条目去污染/去重，移除 101 条枢纽下游引用 + 1 处重复。",
        "techs_more.js：85 个条目去重（solar/genetics 等被列两次的重复依赖）。",
        "data.js：2 个 AI/大模型基础条目移除 mat_2d、ene_tribo 依赖（共 4 条误接边）。",
        "修复后复核：edges 8129→7938；mat_2d/mfg_industry40/ene_tribo/mat_selfheal 下游 0；dupEdge 0；无自环/环/悬空。",
        "后续处理（v0.9.15）：4 处年倒挂降级为概念影响并修正年份/纪元 → CR-2026-0909-yearinv；二阶枢纽 ~24 节点逐节点核验并删除 590 条污染边 → CR-2026-0909-hub2nd 已结案。主管线边最终 7938→7341，yearInv=0。"
      ],
      files: ["assets/techs_extra.js", "assets/techs_more.js", "assets/data.js"]
    }
  ]
};
