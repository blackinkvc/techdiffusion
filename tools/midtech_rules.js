// 中间技术库共享规则：gen_midtech.js（生成）与 regen_midtech.js（同步）共用，避免两处口径分叉。
// 口径定义见《技术网络检修计划.md》阶段 5d。

// 知名上游 -> 具体作用注释（命中则用之，否则用分类模板）
const FAMOUS = {
  ai: "人工智能让系统能自主感知、决策与执行",
  ml: "机器学习从数据中自动提炼规律与策略",
  dl: "深度学习提供端到端的高维模式识别能力",
  neural_network: "神经网络支撑复杂函数的逼近与分类",
  big_data: "大数据为模型提供海量样本与统计基础",
  cloud: "云计算把算力与存储变成随取随用的资源",
  edge_ai: "边缘智能把推理下沉到终端，降低时延与带宽",
  algorithm: "算法把问题转化为可执行的计算步骤",
  software: "软件把硬件能力编排成可用的产品功能",
  internet: "互联网让终端随时在线、全球互联",
  www: "万维网把信息组织成可点击的超文本",
  gps: "卫星导航提供廉价可靠的全局定位",
  gnss: "卫星导航提供廉价可靠的全局定位",
  lidar: "激光雷达提供高精度三维环境建模",
  radar: "雷达实现对目标的远距离探测与跟踪",
  camera: "数码成像让机器拥有「看」的能力",
  computer_vision: "计算机视觉让机器理解图像与场景",
  ic: "集成电路把整机算力压缩进极小体积",
  chip: "芯片提供核心计算与信号处理单元",
  semiconductor: "半导体器件是现代电子的基石",
  sensor: "传感器把物理量转化为可处理的信号",
  display: "显示技术把数字信息呈现为人可感知的界面",
  touchscreen: "触控屏重塑了人机交互范式",
  battery: "高能量密度电池支撑无线长续航",
  lithium_battery: "锂电提供高能量密度与长循环寿命",
  motor: "电动机把电能转化为精准可控的旋转动力",
  brushless_motor: "无刷电机提供高效、安静、长寿命的动力",
  engine: "发动机把燃料化学能转化为机械功",
  combustion: "燃烧把燃料能量释放为可用功",
  electric_motor: "电动机把电能转化为精准可控的动力",
  control_theory: "控制理论让系统稳定、精准地跟踪目标",
  robotics: "机器人学把感知—决策—执行闭环工程化",
  actuator: "作动器把控制信号转化为物理动作",
  material: "新材料决定了性能上限与形态可能",
  composite: "复合材料以高比强度实现轻量化承载",
  alloy: "合金调控强度、韧性与耐蚀性",
  polymer: "高分子材料提供轻质、可塑与功能化的介质",
  ceramic: "陶瓷提供耐高温、耐磨与电绝缘特性",
  manufacturing: "制造工艺把设计变成可量产的实物",
  machining: "精密加工实现微米级形位精度",
  mfg_3dp: "增材制造让复杂结构无需模具即可成型",
  "3d_printing": "3D 打印让复杂结构无需模具即可成型",
  energy: "能源为整个系统提供动力来源",
  electricity: "电力是现代社会通用的能量载体",
  solar: "太阳能提供分布式的清洁电力",
  photovoltaic: "光伏把太阳光直接转化为电能",
  fuel_cell: "燃料电池把化学能高效转化为电",
  nuclear: "核能提供超高能量密度的动力来源",
  thermodynamics: "热力学约束了能量转换的效率边界",
  physics: "物理学提供了描述世界的底层规律",
  mechanics: "力学揭示了力与运动的定量关系",
  classical_mechanics: "经典力学是工程设计的定量基础",
  electromagnetism: "电磁学支撑了发电、通信与驱动",
  electronics: "电子学把微弱信号变成可控的系统行为",
  microprocessor: "微处理器把计算引擎集成于单芯片",
  memory: "存储器提供程序与数据的暂存空间",
  storage: "存储让信息与状态得以持久保存",
  wireless: "无线通信摆脱了对物理连线的依赖",
  communication: "通信技术实现异地信息的可靠传递",
  "5g": "5G 提供高带宽、低时延的移动通信",
  network: "网络把孤立节点连成协同的整体",
  encryption: "加密保障信息在开放信道中的机密性",
  blockchain: "区块链提供去中心化、不可篡改的信任",
  quantum: "量子效应带来超越经典的计算与感知能力",
  photonics: "光子学用光承载信息与控制",
  laser: "激光提供高度相干、可聚焦的能量与测量手段",
  optics: "光学实现对光的产生、操控与探测",
  gene: "基因是生命信息的编码载体",
  dna: "DNA 双螺旋承载遗传蓝图",
  genetics: "遗传学揭示性状传递与变异的规律",
  genomics: "基因组学在全局尺度解读生命密码",
  crispr: "基因编辑让定点改写生命蓝图成为可能",
  biotech: "生物技术把生命过程转化为可用工具",
  microbiology: "微生物学利用微小生命体实现功能",
  synthetic_bio: "合成生物学像搭积木一样重编程生命",
  neuroscience: "神经科学揭示感知、学习与决策的机制",
  medicine: "医学把科学发现转化为救死扶伤的手段",
  pharmacology: "药理学设计与优化作用于机体的分子",
  vaccine: "疫苗训练免疫系统识别并抵御病原",
  antibiotic: "抗生素提供了对抗细菌感染的利器",
  surgery: "外科手段直接修复机体的结构与功能",
  agriculture: "农业把生物过程转化为稳定的食物供给",
  chemistry: "化学在原子层面重组物质",
  biology: "生物学揭示生命的结构与运作原理",
  materials_science: "材料科学从源头设计物质的性能",
  aerospace: "航空航天把载荷可靠地送入并运行于天空与太空",
  aerodynamics: "空气动力学揭示并驾驭流体中的力",
  propulsion: "推进系统把能量转化为持续的推力",
  rocket: "火箭提供挣脱引力的动力",
  spacecraft: "航天器是在极端环境中执行任务的平台",
  satellite: "卫星把能力部署到轨道上实现全球覆盖",
  navigation: "导航让移动体随时知晓自身位置与航向",
  automation: "自动化让机器在少人干预下持续运行",
  cad: "计算机辅助设计把工程构思快速变为可制造模型",
  simulation: "仿真在虚拟环境中预演与优化真实系统",
  mathematics: "数学提供了所有定量科学的语言与工具",
  fire_use: "用火开启了能量可控利用的序幕",
  writing: "文字让知识得以跨时空累积与传递",
  language: "语言使复杂协作与抽象思考成为可能"
};

const CAT_ABILITY = {
  basic: "提供底层科学原理与理论支撑",
  basicscience: "提供底层科学原理与理论支撑",
  life: "提供生物、医学与生命系统能力",
  build: "提供空间载体、结构与工程实现",
  building: "提供空间载体、结构与工程实现",
  military: "提供探测、防护与精确打击能力",
  transport: "提供移动、运输与平台能力",
  info: "提供感知、计算、通信与控制能力",
  energy: "提供能量、动力与续航保障",
  material: "提供关键结构、介质与功能材料",
  manufact: "提供加工、成型与量产能力"
};

function noteFor(u) {
  if (FAMOUS[u.id]) return FAMOUS[u.id];
  return (u.name || u.id) + "：" + (CAT_ABILITY[u.category] || "提供关键能力支撑");
}

// 跨非自身分类数
function crossSelf(t, techMap) {
  const deps = (t.dependsOn || []).map(id => techMap[id]).filter(Boolean);
  return new Set(deps.filter(d => d.category !== t.category).map(d => d.category)).size;
}

// 背景选取：优先「跨分类前置」，不足 4 条则退回全部前置；知名优先，至多 10 条。
function chosenUps(t, techMap) {
  const deps = (t.dependsOn || []).map(id => techMap[id]).filter(Boolean);
  const crossUps = deps.filter(u => u.category !== t.category);
  const base = crossUps.length >= 4 ? crossUps : deps;
  return base.slice().sort((a, b) => (FAMOUS[b.id] ? 1 : 0) - (FAMOUS[a.id] ? 1 : 0)).slice(0, 10);
}

function backgroundsOf(t, techMap) {
  return chosenUps(t, techMap).map(u => ({ tech: u.id, note: noteFor(u) }));
}

module.exports = { FAMOUS, CAT_ABILITY, noteFor, crossSelf, chosenUps, backgroundsOf };
