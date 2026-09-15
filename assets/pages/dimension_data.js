/* ============================================================
   维度层 · 学科归属与技术任务域（覆盖层 · v1.0 · 2026-09-15）
   —— 只读覆盖层，不改动任何 dependsOn / enables / 节点字段。
   —— 定位：把「归属」与「因果」分开。dependsOn 只承载**必要条件**，
      学科归属（field）与技术任务域（sub）由本层承载，不再写成依赖边。

   轴（两条并存，2026-09-15 用户裁定）：
     · field 学科归属（学理侧）—— 10 个门类，其中 8 个锚定 14 个泛化枢纽；
                                  主维度单值 primary + 副维度多值 secondary
     · sub   技术任务域（技术侧）—— 88 域，源自
            analysis-engine/data/subcategory_taxonomy_v1.json；按定义单值
     · cat   领域大类 —— 沿用节点自带 category（9 值，100% 覆盖），本层不改

   使用：window.DIMENSION.resolve(id, node) → { cat, sub, field:{primary,secondary}, via }
   未标注的节点由 rules 兜底推导（前缀 → category → 关键词），overrides 逐条覆盖。

   规则：
     R6 归属不写入 dependsOn —— 「A 属于数学领域」不是「A 依赖数学」
     R7 学科级顶点转维度顶点 —— 14 个泛化枢纽不再作为前置，只作维度锚点
     R8 处置第五档 toField —— 删伪边 + 把归属记入维度，不得以泛化学理充当前置
   ============================================================ */
(function (root) {
  "use strict";

  var D = {};

  D.meta = {
    v: "1.0",
    date: "2026-09-15",
    status: "骨架已落盘 · 全库机械打标可用 · 例外表待逐条审核",
    principle: "归属走标签，因果走边。",
    axes: {
      field: "学科归属（学理侧）：10 门类，8 个锚定 14 个泛化枢纽",
      sub: "技术任务域（技术侧）：88 域，单值",
      cat: "领域大类：节点自带 category，9 值，本层不改"
    },
    cardinality: "field.primary 单值；field.secondary 多值；sub 单值",
    hubRuling: "14 个泛化枢纽全部转为**维度顶点**（不再作为 dependsOn 的前置）",
    fallback: "prefix → cat → keyword 三级兜底，overrides 逐条覆盖",
    rules: ["R6 归属不写入 dependsOn", "R7 学科级顶点转维度顶点", "R8 第五档 toField"],
    note: "本层不含任何因果判定；它只回答「这个节点属于哪个领域、承担什么任务」。"
  };

  /* ---------- ① 学科门类（field · 主维度单值） ----------
     heads = 归属该门类的「维度顶点」。原为审计术语中的「14 个泛化学理枢纽」，
     其下游计数（合计 1,867 条入边）在旧平面模型中即「归属被写成边」的证据。 */
  D.disciplines = {
    math:   { name: "数学",       en: "Mathematics",   heads: ["mathematics", "statistics", "optimization", "numerical"] },
    phys:   { name: "物理",       en: "Physics",       heads: ["physics"] },
    chem:   { name: "化学",       en: "Chemistry",     heads: ["chemistry"] },
    earth:  { name: "地球与天文", en: "Earth & Space", heads: [] },
    life:   { name: "生命与医学", en: "Life & Medicine", heads: ["molecular_bio", "genetics", "immunology"] },
    matter: { name: "材料科学",   en: "Materials",     heads: ["materials"] },
    eng:    { name: "工程与建造", en: "Engineering",   heads: ["engineering"] },
    info:   { name: "信息与计算", en: "Computing",     heads: ["algorithm"] },
    symbol: { name: "语言与符号", en: "Language & Notation", heads: ["writing", "language"] },
    mil:    { name: "军事技术",   en: "Military",      heads: [] }
  };

  /* ---------- ② 88 个技术任务域（sub · 单值） ----------
     来源 analysis-engine/data/subcategory_taxonomy_v1.json；f = 该域所属学科门类。
     kw = 关键词兜底（在 id + name + en 上做小写包含匹配）。 */
  D.taskDomains = {
    "basic/math":              { n: "数学与逻辑",       f: "math",   kw: ["math", "algebra", "geometry", "geometr", "calculus", "theorem", "logic", "number", "set", "graph_theory", "knot", "topolog", "probab", "statistic", "numerical", "optimiz", "combinat", "arithmetic", "numeral"] },
    "basic/physics":           { n: "物理探索",         f: "phys",   kw: ["phys", "mechanic", "thermo", "optic", "electromag", "relativ", "quantum", "particle", "plasma", "wave", "nuclear_fission"] },
    "basic/chemistry":         { n: "化学研究",         f: "chem",   kw: ["chem", "periodic", "molecul", "valence", "catalys", "electrochem", "polymer_chem"] },
    "basic/astronomy":         { n: "天文与宇宙探索",   f: "earth",  kw: ["astronom", "kepler", "celestial", "telescope", "cosmo"] },
    "basic/earthsci":          { n: "地球科学",         f: "earth",  kw: ["geolog", "meteorolog", "ocean", "seism", "cartog", "gis"] },
    "basic/biosci":            { n: "生命科学研究",     f: "life",   kw: ["bio", "cell_theory", "germ", "dna", "evolution", "ecolog", "taxonom", "physiolog", "anatomy"] },
    "basic/measure":           { n: "测量与计量",       f: "eng",    kw: ["measur", "gauge", "clock", "standard", "calibr", "metrolog", "cmm"] },
    "basic/method":            { n: "科研方法与工具",   f: "symbol", kw: ["method", "peer_review", "publish", "experiment", "laborator", "microscope", "academy"] },

    "material/natmaterial":    { n: "天然材料利用",     f: "matter", kw: ["stone", "wood", "bone", "hide", "clay", "flint"] },
    "material/metal_basic":    { n: "金属冶炼与基础合金", f: "matter", kw: ["smelt", "iron", "bronze", "copper", "brass", "steel", "cast_iron", "blast"] },
    "material/metal_adv":      { n: "先进金属与特种合金", f: "matter", kw: ["alloy", "titanium", "aluminium", "aluminum", "superalloy", "toolsteel", "tungsten"] },
    "material/ceramic_glass":  { n: "陶瓷与玻璃",       f: "matter", kw: ["ceram", "glass", "porcelain", "enamel", "refract"] },
    "material/polymer":        { n: "高分子与塑料",     f: "chem",   kw: ["polymer", "plastic", "rubber", "nylon", "resin", "bakelite", "ptfe", "vulcan"] },
    "material/semimaterial":   { n: "半导体与电子材料", f: "phys",   kw: ["semiconductor", "silicon", "gallium", "wafer", "dopant", "ferrite", "superconduct"] },
    "material/composite":      { n: "复合材料",         f: "matter", kw: ["composite", "frp", "cfrp", "carbon_fiber", "fiberglass", "glassfiber", "basaltfiber", "laminate"] },
    "material/nanomaterial":   { n: "纳米与微结构材料", f: "matter", kw: ["nano", "graphene", "nanotube", "quantum_dot", "metamaterial"] },
    "material/buildmaterial":  { n: "建筑与工程材料",   f: "matter", kw: ["cement", "concrete", "mortar", "asphalt", "brick_mat", "timber", "rebar"] },
    "material/funmaterial":    { n: "功能材料",         f: "matter", kw: ["magnet", "phosphor", "piezo", "shape_memory", "self_heal", "ferrofluid"] },
    "material/textile":        { n: "纤维纺织与印染",   f: "chem",   kw: ["textile", "fiber", "fibre", "spinning", "weav", "dye", "loom", "cotton", "wool", "silk"] },

    "energy/biomass":          { n: "生物质与薪柴利用", f: "eng",    kw: ["charcoal", "firewood", "biomass", "biogas", "wood_gas"] },
    "energy/animal_human":     { n: "人力畜力利用",     f: "eng",    kw: ["animal_draft", "horse", "ox", "pedal", "human_power", "waterwheel_man"] },
    "energy/hydropower":       { n: "水能利用",         f: "eng",    kw: ["hydro", "waterwheel", "water_turbine", "dam", "tidal_power"] },
    "energy/windpower":        { n: "风能利用",         f: "eng",    kw: ["windmill", "wind_turbine", "windpower", "sail_energy"] },
    "energy/fossil":           { n: "化石能源开采利用", f: "eng",    kw: ["coal", "oil", "petroleum", "natgas", "coke", "refin"] },
    "energy/electric_gen":     { n: "电力生产",         f: "eng",    kw: ["generator", "dynamo", "alternator", "power_plant", "turbine_gen"] },
    "energy/solar":            { n: "太阳能利用",       f: "phys",   kw: ["solar", "photovoltaic", "pv_", "heliostat"] },
    "energy/geo_ocean":        { n: "地热与海洋能",     f: "earth",  kw: ["geothermal", "ocean_thermal", "wave_power"] },
    "energy/storage":          { n: "储能技术",         f: "eng",    kw: ["battery", "storage", "accumulator", "flywheel", "capacitor", "supercapacitor", "pumped"] },
    "energy/grid":             { n: "输配电与电网",     f: "eng",    kw: ["grid", "transmission_line", "substation", "smart_grid", "distribution"] },
    "energy/power_machine":    { n: "动力机械",         f: "eng",    kw: ["engine", "turbine", "motor", "compressor", "boiler", "steam_engine", "internal_combustion", "jet_"] },
    "energy/light_heat":       { n: "照明与热利用",     f: "eng",    kw: ["lamp", "light_bulb", "led_light", "heating", "stove", "furnace_heat", "hvac_heat"] },
    "energy/nuclear_energy":   { n: "核能利用",         f: "phys",   kw: ["nuclear_fission", "nuclear_fusion", "reactor", "atomic_energy"] },

    "manufact/hand_tool":      { n: "手工工具",         f: "eng",    kw: ["handaxe", "hand_tool", "knife", "chisel", "hammer", "axe", "saw_hand", "awl"] },
    "manufact/cutting":        { n: "切削加工",         f: "eng",    kw: ["cut", "saw", "mill", "lathe", "bore", "drill", "grind", "abrasive", "edm", "laser_cut", "lasercut", "waterjet", "planer", "broach", "hone", "turning"] },
    "manufact/casting":        { n: "铸造与锻压",       f: "eng",    kw: ["cast", "forg", "die_cast", "diecast", "stamp", "press", "extru", "rolling_mill"] },
    "manufact/joining":        { n: "连接与焊接",       f: "eng",    kw: ["weld", "braz", "solder", "rivet", "adhesive", "glue", "bond", "friction_stir", "ebw"] },
    "manufact/molding":        { n: "成型工艺",         f: "eng",    kw: ["mold", "mould", "inject", "blow_mold", "thermoform", "sinter", "forming"] },
    "manufact/additive":       { n: "增材制造",         f: "eng",    kw: ["3dp", "additive", "stereolith", "sla", "sls_", "fdm", "powder_bed"] },
    "manufact/precision":      { n: "精密与超精密制造", f: "eng",    kw: ["precision", "ultraprecision", "metrology_fab", "lithograph", "resistor_fab", "nanofab"] },
    "manufact/machinetool":    { n: "工业母机与装备",   f: "eng",    kw: ["machine_tool", "machinetool", "mfg_cnc", "cnc", "machining_center", "grinder", "lathe_machine"] },
    "manufact/automation":     { n: "自动化与产线",     f: "info",   kw: ["automation", "automat", "robot", "plc", "servo", "cnc_ctrl", "industry_40", "digitaltwin", "aps", "mes_"] },
    "manufact/chem_process":   { n: "化工过程",         f: "chem",   kw: ["haber", "contact_process", "distill", "cracking", "chemical_process", "electrolysis", "ammonia", "sulfuric"] },
    "manufact/food_proc":      { n: "食品加工与保藏",   f: "chem",   kw: ["food", "preserv", "canning", "pasteur", "refriger", "ferment", "milling_grain", "baking"] },
    "manufact/assembly":       { n: "装配与集成",       f: "eng",    kw: ["assembly", "interchangeable", "fixture", "jig", "integration_line"] },

    "transport/road":          { n: "道路与陆路运输",   f: "eng",    kw: ["road", "pavement", "wheel", "cart", "chariot", "highway", "asphalt_road", "auto_"] },
    "transport/rail":          { n: "轨道运输",         f: "eng",    kw: ["rail", "train", "locomot", "railway", "tram", "metro_rail", "track"] },
    "transport/water":         { n: "水路运输",         f: "eng",    kw: ["canoe", "raft", "ship", "boat", "sail", "harbor", "dock", "submarine", "naval_vessel"] },
    "transport/aviation":      { n: "航空运输",         f: "eng",    kw: ["aircraft", "airplane", "glider", "helicopter", "flight", "wing", "uav", "drone"] },
    "transport/space":         { n: "航天运输",         f: "eng",    kw: ["rocket", "orbit", "satellite", "space", "lunar", "mars", "ion_drive", "launcher"] },
    "transport/pipeline":      { n: "管道运输",         f: "eng",    kw: ["pipeline", "pipe_", "duct", "aqueduct_pipe"] },
    "transport/urban":         { n: "城市交通系统",     f: "eng",    kw: ["urban", "traffic", "signal_light", "subway", "bike_share", "parking"] },
    "transport/logistics":     { n: "物流与仓储",       f: "eng",    kw: ["logistic", "warehous", "container", "pallet", "freight", "supply_chain"] },

    "info/record":             { n: "记录与复制",       f: "symbol", kw: ["writing", "paper", "print", "pencil", "pen", "typewriter", "carbonpaper", "copy", "book", "record_media", "notat"] },
    "info/telecom":            { n: "电信与远程通信",   f: "info",   kw: ["telegraph", "telephon", "cable", "antenna", "microwave", "fiber", "5g", "leo", "bluetooth", "radio_comm", "modem"] },
    "info/broadcast":          { n: "广播与媒体",       f: "info",   kw: ["broadcast", "radio_", "television", "tv", "vcr", "camera", "camcorder", "film_media", "stream"] },
    "info/network":            { n: "网络与互联网",     f: "info",   kw: ["network", "internet", "router", "switch", "tcp", "dns", "cdn", "vpn", "sdn", "alloptical", "web"] },
    "info/compute":            { n: "计算设备",         f: "info",   kw: ["computer", "microprocessor", "transistor", "ic", "chip", "eniac", "abacus", "calculator", "quantum_computer", "photonic_computer"] },
    "info/datastore":          { n: "数据存储",         f: "info",   kw: ["storage", "hdd", "floppy", "tape_data", "ssd", "flash", "usb", "database", "db", "nosql", "cache", "vector_db", "graphdb", "timeseries"] },
    "info/software":           { n: "软件与算法",       f: "info",   kw: ["software", "os", "operating_system", "compiler", "middleware", "uml", "sql", "algorithm", "program", "pl_"] },
    "info/ai":                 { n: "人工智能",         f: "info",   kw: ["ai", "neural", "machine_learning", "deep_learn", "llm", "expert_system", "brain_emulation", "copilot"] },
    "info/interface":          { n: "人机交互与显示",   f: "info",   kw: ["interface", "display", "screen", "crt", "lcd", "touch", "haptic", "vr", "ar", "keyboard", "mouse", "dataviz"] },
    "info/security":           { n: "信息安全与密码",   f: "info",   kw: ["crypt", "cipher", "security", "firewall", "encryption", "watermark", "hash"] },

    "life/medicine":           { n: "药物与治疗",       f: "life",   kw: ["drug", "pharma", "antibiotic", "vaccine", "insulin", "therapy", "medicin", "herb", "anesthes"] },
    "life/surgery":            { n: "外科手术",         f: "life",   kw: ["surgery", "surgical", "scalpel", "suture", "transplant", "laparoscop"] },
    "life/diag":               { n: "诊断技术",         f: "life",   kw: ["diag", "xray", "x_ray", "ct_scan", "mri", "ultrasound", "endoscop", "microscope_med", "imaging", "stethoscop"] },
    "life/publichealth":       { n: "公共卫生与防疫",   f: "life",   kw: ["public_health", "sanitation", "sewage", "quarantine", "epidemi", "water_treat", "hygiene"] },
    "life/biotech":            { n: "生物技术",         f: "life",   kw: ["bio", "gene", "clon", "crispr", "pcr", "recombinant", "tissue_eng", "organ_print", "stem_cell", "nanobot_med", "synthetic_bio"] },
    "life/agriculture":        { n: "农业与粮食",       f: "life",   kw: ["agri", "plow", "plough", "harvest", "irrigat", "crop", "fertiliz", "green_revolution", "tractor", "vertical_farm", "aquacultur"] },
    "life/repro":              { n: "生殖与妇幼",       f: "life",   kw: ["repro", "ivf", "contracept", "obstetr", "neonat", "womb"] },
    "life/nutrition":          { n: "营养与食品科学",   f: "life",   kw: ["nutrition", "vitamin", "diet", "synthetic_food", "food_science"] },
    "life/rehab":              { n: "康复与辅助",       f: "life",   kw: ["rehab", "prosthe", "wheelchair", "hearing_aid", "exoskelet", "assistive"] },

    "build/structure":         { n: "结构工程",         f: "eng",    kw: ["structure", "beam", "truss", "arch", "dome", "steel_frame", "reinforced", "foundation", "seismic_design"] },
    "build/construction":      { n: "施工技术",         f: "eng",    kw: ["construction", "scaffold", "crane", "excavat", "tbm", "blasting", "prefab", "lift_slab"] },
    "build/civil":             { n: "土木与大型工程",   f: "eng",    kw: ["civil", "bridge", "tunnel", "highway_civil", "canal", "port", "airport_civil", "viaduct"] },
    "build/waterworks":        { n: "水利与给排水",     f: "eng",    kw: ["waterworks", "dam_civil", "aqueduct", "sewer", "drainage", "water_supply", "irrig_canal"] },
    "build/building":          { n: "建筑设计与营造",   f: "eng",    kw: ["building", "adobe", "brick", "timber_frame", "rammed", "tile", "glass_facade", "skyscraper", "architect"] },
    "build/facility":          { n: "建筑设备系统",     f: "eng",    kw: ["facility", "hvac", "plumbing", "elevator", "escalator", "fire_suppress", "lighting_build"] },
    "build/planning":          { n: "城市规划与基础设施", f: "eng",  kw: ["planning", "urban_plan", "zoning", "grid_city", "infrastructure", "underground_city", "smart_city"] },

    "military/melee":          { n: "冷兵器与单兵装备", f: "mil",    kw: ["bow", "arrow", "sword", "spear", "javelin", "catapult", "crossbow", "armor", "helmet", "siege"] },
    "military/firearm":        { n: "火器与火炮",       f: "mil",    kw: ["firearm", "gun", "musket", "rifle", "cannon", "artillery", "gunpowder", "breech", "recoil", "mortar_gun"] },
    "military/armor_vehicle":  { n: "装甲与地面载具",   f: "mil",    kw: ["tank", "armored", "armour", "apc", "vehicle_mil"] },
    "military/navy":           { n: "海军装备",         f: "mil",    kw: ["naval", "warship", "submarine_mil", "carrier", "torpedo", "destroyer"] },
    "military/airforce":       { n: "空军装备",         f: "mil",    kw: ["fighter", "bomber", "airforce", "stealth", "uav_mil", "ml_uav", "loyalwingman"] },
    "military/missile":        { n: "导弹与制导武器",   f: "mil",    kw: ["missile", "icbm", "ballistic", "cruise", "guidance_mil", "hypersonic", "orbital_strike"] },
    "military/nuclear_weapon": { n: "核武器与威慑",     f: "mil",    kw: ["nuclear_weapon", "atomic_bomb", "warhead", "deterren"] },
    "military/sensor":         { n: "侦察与预警",       f: "info",   kw: ["radar", "sonar", "recon", "surveil", "early_warning", "satellite_recon", "infrared_mil"] },
    "military/ew":             { n: "电子战与网络战",   f: "info",   kw: ["electronic_warfare", "jamming", "cyber", "sigint", "directed_energy", "laser_weapon"] },
    "military/logi":           { n: "军事后勤与工程",   f: "mil",    kw: ["logistics_mil", "fortificat", "entrench", "supply_mil", "military_engineer"] }
  };

  /* ---------- ③ 前缀兜底：id 前缀 → 主维度 ----------
     实测覆盖 1,838 / 2,267（另 429 条走 category 兜底）。 */
  D.rules = {
    prefix: {
      lf: "life", bio: "life",
      mat: "matter", mt: "matter",
      bd: "eng", bld: "eng",
      inf: "info", it: "info",
      mfg: "eng", mn: "eng",
      tr: "eng", tp: "eng",
      ene: "eng", en: "eng",
      mil: "mil", ml: "mil",
      "bx": "math",
      quantum: "phys", nuclear: "phys", atomic: "phys", particle: "phys",
      "molecular": "life", gene: "life", stem: "life", life: "life", medical: "life",
      artificial: "life", synthetic: "life", organ: "life", nanobot: "life",
      recombinant: "life", genetic: "life", smart: "life", mower: "life", slam: "life", pen: "life",
      space: "eng", rocket: "eng", liquid: "eng", multistage: "eng", reusable: "eng",
      ion: "eng", lunar: "eng", mars: "eng", warp: "eng", "von": "eng", flying: "eng",
      orbital: "mil", hypersonic: "mil", breech: "mil", recoil: "mil",
      steam: "eng", power: "eng", electric: "eng", "internal": "eng", brushless: "eng",
      fusion: "phys", superconducting: "phys", antimatter: "phys", "grid": "eng",
      newcomen: "eng", watt: "eng", otto: "eng", diesel: "eng", transmission: "eng",
      hearth: "eng", aircraft: "eng", jet: "eng", "high": "eng",
      computer: "info", robot: "info", transistor: "info", mobile: "info", camera: "info",
      packet: "info", optic: "info", web: "info", transformer: "info", big: "info",
      virtual: "info", brain: "info", mind: "info", digital: "info", memory: "info", ftl: "info",
      carbon: "matter", room: "matter", programmable: "matter", exotic: "phys",
      ground: "matter", open: "matter", steel: "matter",
      stone: "matter", bronze: "matter", iron: "matter",
      railway: "eng", rail: "eng", auto: "eng", landing: "eng", flight: "eng", uav: "eng", fpv: "eng",
      shield: "eng", drill: "eng", tunnel: "eng", additive: "eng",
      vertical: "eng", underground: "eng", dyson: "eng", stellar: "eng",
      climate: "earth", coal: "eng",
      scientific: "symbol", gesture: "symbol", symbolic: "symbol",
      assembly: "eng", interchangeable: "eng",
      none: "symbol", zero: "math", negative: "math", analytic: "math", complex: "math",
      number: "math", lin: "math", diff: "math", group: "math", set: "math", graph: "math",
      tensor: "math", measure: "math", game: "math", info: "math", category: "math",
      knot: "math", proof: "math", lambda: "math", math: "math",
      celestial: "phys", stat: "phys", em: "phys", wave: "phys", special: "phys",
      standard: "phys", periodic: "chem", organic: "chem", inorganic: "chem",
      physical: "chem", analytical: "chem", polymer: "chem", thermo: "chem",
      cell: "life", germ: "life", dna: "life", kepler: "earth", radio: "earth",
      observ: "earth", peer: "symbol", standards: "eng", control: "info",
      systems: "info", fluid: "phys", solid: "phys", data: "info", network: "info",
      "self": "eng", horse: "eng", bow: "mil", relativity: "phys",
      general: "phys", soft: "info", swarm: "info"
    },
    cat: {
      basic: "symbol", material: "matter", energy: "eng", manufact: "eng",
      transport: "eng", info: "info", life: "life", build: "eng", military: "mil"
    },
    /* category → 默认任务域（关键词未命中时的最后兜底） */
    catSub: {
      basic: "basic/method", material: "material/natmaterial", energy: "energy/power_machine",
      manufact: "manufact/hand_tool", transport: "transport/urban", info: "info/software",
      life: "life/medicine", build: "build/construction", military: "military/logi"
    },
    /* 两段前缀（精确定位，优先于关键词）—— 本库 id 系统性命名空间化，
       两段前缀比关键词更稳，且不会跨类泄漏。 */
    prefix2: {
      "lf_dx": "life/diag", "lf_surg": "life/surgery", "lf_drug": "life/medicine",
      "lf_vax": "life/medicine", "lf_ph": "life/publichealth", "lf_ag": "life/agriculture",
      "lf_repro": "life/repro", "lf_nut": "life/nutrition", "lf_reh": "life/rehab",
      "lf_bio": "life/biotech",
      "bd_civ": "build/civil", "bd_str": "build/structure", "bd_wat": "build/waterworks",
      "bd_plan": "build/planning", "bd_fac": "build/facility",
      "it_alg": "info/software", "it_net": "info/network", "it_sec": "info/security",
      "it_ai": "info/ai", "it_db": "info/datastore", "it_hci": "info/interface",
      "it_rec": "info/record",
      "tp_road": "transport/road", "tp_rail": "transport/rail", "tp_water": "transport/water",
      "tp_air": "transport/aviation", "tp_space": "transport/space",
      "tp_pipe": "transport/pipeline", "tp_urb": "transport/urban", "tp_logi": "transport/logistics",
      "ml_uav": "military/airforce",
      "bx_math": "basic/math", "bx_phys": "basic/physics", "bx_chem": "basic/chemistry",
      "en_bat": "energy/storage", "ene_bio": "energy/biomass"
    },
    /* 一段前缀（粗定位，仅在关键词未命中时使用） */
    prefixSub: {
      "lf_": "life/medicine", "bio_": "life/biotech",
      "mat_": "material/metal_basic", "mt_": "material/metal_adv",
      "mfg_": "manufact/hand_tool", "mn_": "manufact/chem_process",
      "bd_": "build/civil", "bld_": "build/building",
      "inf_": "info/telecom", "it_": "info/software",
      "tr_": "transport/road", "tp_": "transport/road",
      "ene_": "energy/fossil", "en_": "energy/storage",
      "mil_": "military/melee", "ml_": "military/logi",
      "bx_": "basic/measure"
    }
  };

  /* ---------- ④ 逐条覆盖（例外表） ----------
     D0 阶段为空：全部节点走三级兜底。D1 起把兜底明显不符者逐条写入，待用户审核。 */
  D.overrides = {};

  /* ---------- ⑤ 求解 ---------- */
  var DOMAIN_KEYS = Object.keys(D.taskDomains);

  function norm(s) { return String(s == null ? "" : s).toLowerCase(); }

  D.disciplineOfHead = function (id) {
    for (var k in D.disciplines) {
      if (D.disciplines[k].heads.indexOf(id) >= 0) return k;
    }
    return null;
  };

  /* 关键词匹配**限定在同 category 的域内** —— category 100% 覆盖且互为独立语料，
     跨类匹配是本层唯一的系统性噪声源（如 material 节点命中 info 的关键词）。 */
  D.matchTaskDomain = function (node, cat) {
    var hay = norm(node.id) + " " + norm(node.name) + " " + norm(node.en);
    var best = null, bestLen = 0;
    for (var i = 0; i < DOMAIN_KEYS.length; i++) {
      var k = DOMAIN_KEYS[i];
      if (cat && k.split("/")[0] !== cat) continue;
      var kws = D.taskDomains[k].kw || [];
      for (var j = 0; j < kws.length; j++) {
        var w = kws[j];
        if (w && w.length >= 3 && hay.indexOf(w) >= 0 && w.length > bestLen) { best = k; bestLen = w.length; }
      }
    }
    return best;
  };

  /* 两段前缀命中（精确）；一段前缀仅作粗定位兜底 */
  D.matchPrefix2 = function (id) {
    var parts = id.split("_");
    if (parts.length >= 2) {
      var k2 = parts[0] + "_" + parts[1];
      if (D.rules.prefix2[k2]) return { sub: D.rules.prefix2[k2], via: "p2" };
    }
    return null;
  };

  D.matchPrefix1 = function (id) {
    var k1 = id.split("_")[0] + "_";
    if (D.rules.prefixSub[k1]) return D.rules.prefixSub[k1];
    return null;
  };

  /* bx_math_* / bx_phys_* / bx_chem_* 三个占位族的细分 */
  function bxDiscipline(id) {
    if (id.indexOf("bx_math") === 0) return "math";
    if (id.indexOf("bx_phys") === 0) return "phys";
    if (id.indexOf("bx_chem") === 0) return "chem";
    return null;
  }

  D.resolve = function (id, node) {
    node = node || {};
    var ov = D.overrides[id] || {};
    var cat = node.category || (node.cat || "");
    var head = D.disciplineOfHead(id);
    var primary = null, via = "";

    if (ov.primary) { primary = ov.primary; via = "override"; }
    if (!primary && head) { primary = head; via = "hub-head"; }
    if (!primary) {
      var p = id.split("_")[0];
      if (id.indexOf("bx_") === 0) { primary = bxDiscipline(id) || "math"; via = "prefix:bx"; }
      else if (D.rules.prefix[p]) { primary = D.rules.prefix[p]; via = "prefix"; }
    }
    if (!primary) { primary = D.rules.cat[cat] || "symbol"; via = "cat"; }

    /* sub：override → 两段前缀 → 同 category 关键词 → 一段前缀 → category 默认域 */
    var sub = ov.sub || null, svia = "";
    if (sub) svia = "ov";
    if (!sub) { var h2 = D.matchPrefix2(id); if (h2) { sub = h2.sub; svia = h2.via; } }
    if (!sub) { sub = D.matchTaskDomain({ id: id, name: node.name, en: node.en }, cat); if (sub) svia = "kw"; }
    if (!sub) { var h1 = D.matchPrefix1(id); if (h1 && h1.split("/")[0] === cat) { sub = h1; svia = "p1"; } }
    if (!sub) { sub = D.rules.catSub[cat] || "basic/method"; svia = "catSub"; }

    var secondary = (ov.secondary || []).slice();
    if (!secondary.length) {
      var sf = D.taskDomains[sub] && D.taskDomains[sub].f;
      if (sf && sf !== primary && secondary.indexOf(sf) < 0) secondary.push(sf);
    }

    return { cat: cat, sub: sub, field: { primary: primary, secondary: secondary }, via: via + "/" + svia };
  };

  D.taskDomainOf = function (idOrSub) {
    if (D.taskDomains[idOrSub]) return D.taskDomains[idOrSub];
    for (var k in D.taskDomains) { if (D.taskDomains[k].n === idOrSub) return D.taskDomains[k]; }
    return null;
  };

  D.disciplineName = function (k) { return (D.disciplines[k] || {}).name || k; };

  root.DIMENSION = D;
})(typeof window !== "undefined" ? window : globalThis);
