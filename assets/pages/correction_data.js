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
    note: "本页专门记录「技术依赖关系、前因后果、发明者/地点归属」等被证明错误的修正事件。这类事件反映数据管道在「链接预测 / catalog 合并 / 文案生成」环节可能产生的系统性偏差，属重要质量事件，除在本页留档外，也会同步登记进《版本迭代》。每个记录附「自检方法」，便于横向复用到全库扫描。",
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
      "二阶枢纽污染（二阶自检）：液态空气储能(ene_liquidair,31)、井式地热(ene_borehole,27)、余热回收(ene_wasteheat,50)、调峰电站(ene_peaker,41)、感应熔炼(mat_inductionmelt,46)、金属有机框架(mat_mof,39)、热处理炉(mfg_furnace,38)、激光熔覆(mat_laserclad,27)、渗硼(mat_boriding,27)、燃料电池汽车(ene_fuelcellcar,26)、泡沫金属(mat_foammetal,25)、盐差能(ene_salinity,25)、碟式斯特林(ene_dishstirling,25)、水热地热(ene_hydrothermal,24)、储氢合金(mat_hydrogenstorage,23)、可燃冰(ene_clathrate,23)、风力(ene_wind,22)、切削液(mfg_coolant,21)、放电等离子烧结(mat_sps,19)、电动机(electric_motor,17)、半导体材料(semiconductors,16)、碳纤维(mat_cf,15)、砂轮(mfg_grindingwheel,15) 等约 24 个材料/能源/制造节点，其下游多为 transport/build/info/military 模板，疑似同类链接预测污染，待逐节点人工核验（勿盲目批量删，需区分真实下游后再修）。",
      "report.txt 中全部「同名已存在，改为打标」节点是否丢失了 catalog deps（持续核查）。",
      "悬空边已修复（见 CR-2026-0909-orphan）；建议复核这些被引用却缺失的节点（math_hypothesis_testing、laptop_computer、compute_fpga_soc、si_system 等）是否应补建，或确属废弃引用。"
    ]
  },
  entries: [
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
    }
  ]
};
