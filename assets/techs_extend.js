// 关系网前后延伸生成器产出（tools/extend_net.js 生成，请勿手改；改请改生成器后重跑）
// 向后：补缺失前置 / 根系 + 填补库内断层；向前：L2–L5 未来 / 科幻技术
const EXTEND_TECHS = [
  {
    "id": "gesture_comm",
    "name": "手势交流",
    "en": "Gesture Communication",
    "category": "basic",
    "era": "prehistoric",
    "date": "约 10 万年前",
    "year": -100000,
    "dependsOn": [],
    "summary": "早于语言的符号交流，以手势与体态协调群体狩猎与协作，是语言演化与抽象思维的前奏，它约 约 10 万年前 出现于史前的科学基础与方法，填补了早期能力图谱的空白，为后续复杂技术的展开提供了前提。"
  },
  {
    "id": "symbolic_art",
    "name": "符号艺术",
    "en": "Symbolic Art",
    "category": "basic",
    "era": "prehistoric",
    "date": "约 4 万年前",
    "year": -40000,
    "dependsOn": [
      "language",
      "stone_tools"
    ],
    "summary": "洞穴壁画与刻划符号把抽象概念外化为可共享的视觉符号，为文字与计数系统铺路，它建立在语言、石器之上，约 约 4 万年前 出现于史前，把科学基础与方法的相关能力第一次稳定下来，是后来技术谱系的基础环节。"
  },
  {
    "id": "rope",
    "name": "绳索",
    "en": "Rope",
    "category": "manufact",
    "era": "prehistoric",
    "date": "约 4.5 万年前",
    "year": -45000,
    "dependsOn": [
      "stone_tools"
    ],
    "summary": "搓捻植物纤维成股，是最早的复合材料之一，使负重、牵引、绑扎与升降得以实现。直接证据为法国 Abri du Maras 出土的约 4.1–5.2 万年前尼安德特人合股纤维绳；它建立在石器之上，是编织、吊运、绑扎与航海缆索的基础。"
  },
  {
    "id": "bone_tools",
    "name": "骨器",
    "en": "Bone Tools",
    "category": "manufact",
    "era": "prehistoric",
    "date": "约 9 万年前",
    "year": -90000,
    "dependsOn": [
      "stone_tools",
      "fire"
    ],
    "summary": "以兽骨磨制针、钩、锥，比石器更细巧，开启了缝纫、捕鱼与精细加工，它建立在石器、用火之上，约 约 9 万年前 成形于史前，把制造与工具中的关键能力落到实处，并直接支撑了锤、斧、锤等后续技术。"
  },
  {
    "id": "woodworking",
    "name": "木作",
    "en": "Woodworking",
    "category": "manufact",
    "era": "prehistoric",
    "date": "约 30 万年前",
    "year": -300000,
    "dependsOn": [
      "stone_tools",
      "fire"
    ],
    "summary": "砍伐、刳削、拼接木材，把木材加工为结构骨架与日常器具。德国 Schöningen 出土约 30 万年前的木矛，是系统性木作的最早实证；它建立在石器与用火之上，是木炭、独木舟、织机、风箱等木质结构技术的基础。"
  },
  {
    "id": "weaving",
    "name": "编织",
    "en": "Weaving",
    "category": "manufact",
    "era": "prehistoric",
    "date": "约 2.6 万年前",
    "year": -26000,
    "dependsOn": [
      "rope",
      "stone_tools"
    ],
    "summary": "经纬交错固定纤维，比绳更致密，是容器、衣物与一切后续纺织的起点，依托绳索、石器，它在史前（约 2.6 万年前）把相关能力从经验推向方法，成为制造与工具中承上启下的一环，直接催生了篮篓编织、纺织、纺锤等发展。"
  },
  {
    "id": "basketry",
    "name": "篮篓编织",
    "en": "Basketry",
    "category": "manufact",
    "era": "prehistoric",
    "date": "约 1.8 万年前",
    "year": -18000,
    "dependsOn": [
      "weaving"
    ],
    "summary": "以植物条编织容器，其涂泥耐火的雏形直接催生了陶器工艺，依托编织，它在史前（约 1.8 万年前）解决了制造与工具中的具体难题，使相应能力得以被反复复用。其成熟让制造与工具从零散尝试走向可复用的方法。"
  },
    {
    "id": "fire_making",
    "name": "人工取火",
    "en": "Fire-making",
    "category": "basic",
    "era": "prehistoric",
    "date": "约 5 万年前",
    "year": -50000,
    "dependsOn": [
      "fire"
    ],
    "summary": "以钻木、锯木等摩擦法主动生火，摆脱对自然火的依赖，使热能随时可用。早期手钻、火犁取火并不需要绳索，弓钻等绳绕钻火是绳索与弓出现后的普及形态；它建立在用火之上，让人工火源脱离对自然火候的依赖。"
  },
  {
    "id": "hafting",
    "name": "复合工具",
    "en": "Composite Tools",
    "category": "manufact",
    "era": "prehistoric",
    "date": "约 20 万年前",
    "year": -200000,
    "dependsOn": [
      "stone_tools",
      "woodworking"
    ],
    "summary": "把石刃绑固或粘合于木柄，复合工具放大了人力，是武器与农具的雏形。粘合装柄的直接证据可上溯至约 20 万年前；依托石器与木作，它把单一材料的减材打制推进为多部件的组装制造。"
  },
  {
    "id": "domestication",
    "name": "驯化",
    "en": "Domestication",
    "category": "life",
    "era": "prehistoric",
    "date": "约 1.1 万年前",
    "year": -11000,
    "dependsOn": [
      "fire",
      "language"
    ],
    "summary": "选择性培育动植物使其服务于人，是农业与畜牧的共同前提，依托用火、语言，它在史前（约 1.1 万年前）把相关能力从经验推向方法，成为生命与医疗中承上启下的一环，直接催生了农业、畜力等发展。"
  },
  {
    "id": "animal_draft",
    "name": "畜力",
    "en": "Animal Traction",
    "category": "transport",
    "era": "ancient",
    "date": "约 前 4000 年",
    "year": -4000,
    "dependsOn": [
      "domestication"
    ],
    "summary": "以牛马等役畜牵引，把生物肌力引入运输与耕作，突破人力上限，它建立在驯化之上，约 约 前 4000 年 成形于上古，把交通运载中的关键能力落到实处，并直接支撑了车等后续技术。"
  },
  {
    "id": "cart",
    "name": "车",
    "en": "Cart",
    "category": "transport",
    "era": "ancient",
    "date": "约 前 3500 年",
    "year": -3500,
    "dependsOn": [
      "wheel",
      "woodworking",
      "animal_draft"
    ],
    "summary": "轮与畜力结合，使陆上重物的远程运输成为可能，它建立在轮子、木作、畜力之上，约 约 前 3500 年 成形于上古，把交通运载中的关键能力落到实处，并直接支撑了水力利用、水力利用等后续技术。"
  },
  {
    "id": "kiln",
    "name": "窑",
    "en": "Kiln",
    "category": "manufact",
    "era": "ancient",
    "date": "约 前 6000 年",
    "year": -6000,
    "dependsOn": [
      "fire",
      "mat_pottery"
    ],
    "summary": "可控高温的封闭炉膛，使陶、砖、石灰、玻璃等材料的烧成走向标准化，它建立在用火、陶器之上，约 约 前 6000 年 成形于上古，把制造与工具中的关键能力落到实处，并直接支撑了氮化硅陶瓷、木炭、锯等后续技术。"
  },
  {
    "id": "mortar",
    "name": "砂浆",
    "en": "Mortar",
    "category": "build",
    "era": "ancient",
    "date": "约 前 3000 年",
    "year": -3000,
    "dependsOn": [
      "lime",
      "kiln"
    ],
    "summary": "石灰与骨料调成的粘结剂，使块石得以咬合为整体承重结构，依托石灰、窑，它在上古（约 前 3000 年）把相关能力从经验推向方法，成为建筑建造中承上启下的一环，直接催生了砌筑、引水渠等发展。"
  },
  {
    "id": "masonry",
    "name": "砌筑",
    "en": "Masonry",
    "category": "build",
    "era": "ancient",
    "date": "约 前 5000 年",
    "year": -5000,
    "dependsOn": [
      "stone_tools",
      "brick"
    ],
    "summary": "以规整块材叠砌承重墙，是大型永久建筑的基础工艺，约 公元前 5000 年已见于近东的泥砖与石砌建筑。早期砌筑用干砌或泥浆粘结；石灰砂浆是其后千年的粘结升级（概念影响），并非砌筑起源的技术前置。"
  },
    {
    "id": "bridge",
    "name": "桥梁",
    "en": "Bridge",
    "category": "build",
    "era": "ancient",
    "date": "约 前 1000 年",
    "year": -1000,
    "dependsOn": [
      "masonry",
      "engineering"
    ],
    "summary": "跨越河谷沟壑，把道路连成网络，扩张了交通与贸易范围。早期以木梁、石梁与砌筑墩台实现跨越；拱桥是拱技术成熟后的后起形式（概念影响），并非桥梁起源的技术前置。"
  },
  {
    "id": "aqueduct",
    "name": "引水渠",
    "en": "Aqueduct",
    "category": "build",
    "era": "ancient",
    "date": "约 前 700 年",
    "year": -700,
    "dependsOn": [
      "masonry",
      "mortar",
      "arch",
      "engineering"
    ],
    "summary": "以重力坡降长距离输水入城，支撑城市卫生与人口聚集。公元前 7 世纪亚述耶尔万（Jerwan）引水渠已用真拱跨越河谷，是拱与砌筑、砂浆相结合的早期实证，也是后来罗马输水道的基础。"
  },
  {
    "id": "engineering",
    "name": "工程学",
    "en": "Engineering",
    "category": "basic",
    "era": "ancient",
    "date": "约 公元前 3000 年",
    "year": -3000,
    "dependsOn": [
      "mathematics"
    ],
    "summary": "规划、建造与机制设计的应用知识域，自文明早期的灌溉、筑城与大型营造起持续演进；以数学为通用基础。科学方法对近代工程的深化属概念性影响而非技术前置。"
  },
  {
    "id": "architecture",
    "name": "建筑学",
    "en": "Architecture",
    "category": "build",
    "era": "ancient",
    "date": "约 前 3000 年",
    "year": -3000,
    "dependsOn": ["masonry", "engineering"],
    "summary": "统筹结构、空间与材料以满足人居，是建造活动的系统知识，依托砌筑、工程学、数学，它在上古（约 前 3000 年）把相关能力从经验推向方法，成为建筑建造中承上启下的一环，直接催生了保温隔热、模块化建筑、装配式建筑等发展。"
  },
  {
    "id": "gearing",
    "name": "齿轮",
    "en": "Gearing",
    "category": "manufact",
    "era": "ancient",
    "date": "约 前 300 年",
    "year": -300,
    "dependsOn": [
      "wheel",
      "bronze"
    ],
    "summary": "以啮合轮系变速换向，把旋转运动拆解为可控的机械语言，依托轮子、青铜，它在上古（约 前 300 年）把相关能力从经验推向方法，成为制造与工具中承上启下的一环，直接催生了机械钟、水磨等发展。"
  },
  {
    "id": "clock",
    "name": "机械钟",
    "en": "Mechanical Clock",
    "category": "manufact",
    "era": "medieval",
    "date": "约 1300 年",
    "year": 1300,
    "dependsOn": [
      "gearing",
      "astronomy"
    ],
    "summary": "以擒纵机构稳定分割时间，催生了对机械精度的极致追求，它建立在齿轮、天文学之上，约 约 1300 年 出现于中古，把制造与工具的相关能力第一次稳定下来，是后来技术谱系的基础环节。"
  },
  {
    "id": "watermill",
    "name": "水磨",
    "en": "Watermill",
    "category": "manufact",
    "era": "medieval",
    "date": "约 1000 年",
    "year": 1000,
    "dependsOn": ["waterwheel","gearing"],
    "summary": "把水能转为研磨与锻打的动力，是工厂机械化的先声，依托水车、齿轮，它在中古（约 1000 年）解决了制造与工具中的具体难题，使相应能力得以被反复复用。其成熟让制造与工具从零散尝试走向可复用的方法。"
  },
  {
    "id": "metallurgy",
    "name": "冶金",
    "en": "Metallurgy",
    "category": "material",
    "era": "ancient",
    "date": "约 前 5000 年",
    "year": -5000,
    "dependsOn": [
      "mining",
      "fire"
    ],
    "summary": "从矿石还原金属并调配合金，是材料文明的发动机。铜冶金约 公元前 5000 年出现于近东与巴尔干，依托采矿与用火；风箱与木炭是青铜、铁等高温冶炼阶段的关键使能（概念影响），并非铜冶金起源的技术前置。"
  },
  {
    "id": "copper",
    "name": "红铜",
    "en": "Copper",
    "category": "material",
    "era": "ancient",
    "date": "约 前 5000 年",
    "year": -5000,
    "dependsOn": [
      "metallurgy",
      "mining"
    ],
    "summary": "最早被还原利用的金属，延展易锻，开启了金属时代，依托冶金、采矿，它在上古（约 前 5000 年）解决了材料体系中的具体难题，使相应能力得以被反复复用。其成熟让材料体系从零散尝试走向可复用的方法。"
  },
      {
    "id": "textile",
    "name": "纺织",
    "en": "Textile",
    "category": "manufact",
    "era": "ancient",
    "date": "约 前 4000 年",
    "year": -4000,
    "dependsOn": [
      "weaving",
      "spindle"
    ],
    "summary": "把纱线织成布，是御寒、身份标识与后来工业化的核心产业。依托编织与纺锤纺纱，约 公元前 4000 年 前后织造进入半机械阶段，并催生了织机。"
  },
  {
    "id": "spindle",
    "name": "纺锤",
    "en": "Spindle",
    "category": "manufact",
    "era": "ancient",
    "date": "约 前 8000 年",
    "year": -8000,
    "dependsOn": [
      "weaving",
      "stone_tools"
    ],
    "summary": "以旋转加重纺捻纤维成纱，使纱线得以批量生产，依托编织、石器，它在上古（约 前 8000 年）把相关能力从经验推向方法，成为制造与工具中承上启下的一环，直接催生了纺织等发展。"
  },
  {
    "id": "loom",
    "name": "织机",
    "en": "Loom",
    "category": "manufact",
    "era": "ancient",
    "date": "约 前 4000 年",
    "year": -4000,
    "dependsOn": [
      "textile",
      "woodworking"
    ],
    "summary": "以框架固定经线、规律引纬，把织造从手作升级为半机械生产。依托纺织（纱线）与木作（木架），约 公元前 4000 年前后 在埃及、美索不达米亚等地普及，是纺织工业化的起点。"
  },
  {
    "id": "navigation",
    "name": "航海术",
    "en": "Navigation",
    "category": "transport",
    "era": "ancient",
    "date": "约 前 3000 年",
    "year": -3000,
    "dependsOn": ["tr_canoe","sail"],
    "summary": "以天体与海流定位航向，使跨海远航与全球贸易成为可能，它建立在独木舟、帆船、天文学之上，约 约 前 3000 年 出现于上古，把交通运载的相关能力第一次稳定下来，是后来技术谱系的基础环节。"
  },
  {
    "id": "magnet",
    "name": "天然磁石",
    "en": "Lodestone",
    "category": "basic",
    "era": "ancient",
    "date": "约 前 1000 年",
    "year": -1000,
    "dependsOn": [],
    "summary": "天然磁铁矿的指向性被早期文明发现，是磁现象的第一笔记录，它约 约 前 1000 年 出现于上古的科学基础与方法，填补了早期能力图谱的空白，为后续复杂技术的展开提供了前提。"
  },
  {
    "id": "compass",
    "name": "指南针",
    "en": "Compass",
    "category": "transport",
    "era": "medieval",
    "date": "约 1100 年",
    "year": 1100,
    "dependsOn": [
      "magnet"
    ],
    "summary": "以磁针恒定指北，使坏天气下仍能定向航行，它建立在天然磁石之上，约 约 1100 年 出现于中古，把交通运载的相关能力第一次稳定下来，是后来技术谱系的基础环节。其成熟让交通运载从零散尝试走向可复用的方法。"
  },
  {
    "id": "lime",
    "name": "石灰",
    "en": "Lime",
    "category": "material",
    "era": "ancient",
    "date": "约 前 4000 年",
    "year": -4000,
    "dependsOn": [
      "kiln",
      "mining"
    ],
    "summary": "煅烧石灰石得生石灰，遇水硬化，是砂浆与混凝土的关键组分，依托窑、采矿，它在上古（约 前 4000 年）把相关能力从经验推向方法，成为材料体系中承上启下的一环，直接催生了砂浆等发展。"
  },
  {
    "id": "mining",
    "name": "采矿",
    "en": "Mining",
    "category": "material",
    "era": "ancient",
    "date": "约 前 5000 年",
    "year": -5000,
    "dependsOn": [
      "stone_tools",
      "fire"
    ],
    "summary": "以凿、掘、烧裂从地层取矿，是金属与燃料供给的起点，它建立在石器、用火之上，约 约 前 5000 年 成形于上古，把材料体系中的关键能力落到实处，并直接支撑了煤炭开采与利用、冶金、红铜等后续技术。"
  },
  {
    "id": "drilling",
    "name": "钻井",
    "en": "Drilling",
    "category": "manufact",
    "era": "ancient",
    "date": "约 前 3000 年",
    "year": -3000,
    "dependsOn": [
      "stone_tools",
      "wheel"
    ],
    "summary": "以旋转或冲击向地下穿孔，用于取水、采盐与后世油气开采，依托石器、轮子，它在上古（约 前 3000 年）把相关能力从经验推向方法，成为制造与工具中承上启下的一环，直接催生了石油工业等发展。"
  },
  {
    "id": "bellows",
    "name": "风箱",
    "en": "Bellows",
    "category": "manufact",
    "era": "ancient",
    "date": "约 前 1500 年",
    "year": -1500,
    "dependsOn": [
      "fire",
      "woodworking",
      "rope"
    ],
    "summary": "鼓风增氧抬升炉温，使铁矿石还原与高温熔炼可行。它建立在用火、木作与绳索之上，约 公元前 1500 年起随铁器时代普及，直接支撑了冶铁与锻造等高温工艺。"
  },
  {
    "id": "plasma_phys",
    "name": "等离子体物理",
    "en": "Plasma Physics",
    "category": "basic",
    "era": "electrical",
    "date": "1920 年",
    "year": 1920,
    "dependsOn": [
      "electromagnetism",
      "thermodynamics"
    ],
    "summary": "研究电离气体的宏观行为，是受控核聚变与航天推进的理论基础，依托电磁学、热力学，它在电气时代（1920 年）把相关能力从经验推向方法，成为科学基础与方法中承上启下的一环，直接催生了核聚变、聚变发电、离子推进等发展。"
  },
  {
    "id": "electronics",
    "name": "电子学",
    "en": "Electronics",
    "category": "info",
    "era": "electrical",
    "date": "1883 年",
    "year": 1883,
    "dependsOn": [
      "electromagnetism"
    ],
    "summary": "以电子在真空与固体中的运动构造器件，是信息与控制的底层学科，依托电磁学，它在电气时代（1883 年）把相关能力从经验推向方法，成为信息通信中承上启下的一环，直接催生了超精密加工、微细加工、超声加工等发展。"
  },
  {
    "id": "biotech",
    "name": "生物技术",
    "en": "Biotechnology",
    "category": "life",
    "era": "electrical",
    "date": "1910 年",
    "year": 1910,
    "dependsOn": [
      "microbiology",
      "genetics"
    ],
    "summary": "以生物体或其组分进行生产与控制，是发酵、育种与基因工程的总括，它建立在微生物学、遗传学之上，约 1910 年 成形于电气时代，把生命与医疗中的关键能力落到实处，并直接支撑了组织工程、合成生物学、器官芯片等后续技术。"
  },
  {
    "id": "laser",
    "name": "激光",
    "en": "Laser",
    "category": "info",
    "era": "electrical",
    "date": "1960 年",
    "year": 1960,
    "dependsOn": ["quantum_mech","electromagnetism"],
    "summary": "受激辐射产生相干单色光，是精密测量、通信、加工与医疗的通用工具，依托光学、电磁学，它在电气时代（1960 年）把相关能力从经验推向方法，成为信息通信中承上启下的一环，直接催生了定向能武器、定向能武器、量子加密等发展。"
  },
  {
    "id": "semiconductor",
    "name": "半导体",
    "en": "Semiconductor",
    "category": "material",
    "era": "electrical",
    "date": "1947 年",
    "year": 1947,
    "dependsOn": [
      "chemistry",
      "physics",
      "materials"
    ],
    "summary": "导电性可控的材料，是晶体管、芯片与一切现代电子的基石，依托化学、经典力学、材料科学，它在电气时代（1947 年）把相关能力从经验推向方法，成为材料体系中承上启下的一环，直接催生了集成电路、集成电路、显示技术等发展。"
  },
    {
    "id": "sensor",
    "name": "传感器",
    "en": "Sensor",
    "category": "info",
    "era": "electrical",
    "date": "约 1950 年",
    "year": 1950,
    "dependsOn": [
      "electronics",
      "materials"
    ],
    "summary": "把光、力、热、磁等物理量转为电信号，是机器感知世界的接口，它建立在电子学、材料科学之上，约 约 1950 年 成形于电气时代，把信息通信中的关键能力落到实处，并直接支撑了增强现实、虚拟现实、增强现实等后续技术。"
  },
  {
    "id": "display",
    "name": "显示技术",
    "en": "Display",
    "category": "info",
    "era": "electrical",
    "date": "约 1960 年",
    "year": 1960,
    "dependsOn": ["semiconductor"],
    "summary": "把电信号还原为可见光图像，是人机交互的最终输出端，它建立在半导体、光学之上，约 约 1960 年 成形于电气时代，把信息通信中的关键能力落到实处，并直接支撑了增强现实、虚拟现实、增强现实等后续技术。"
  },
  {
    "id": "materials",
    "name": "材料科学",
    "en": "Materials Science",
    "category": "basic",
    "era": "info",
    "date": "约 1900 年",
    "year": 1900,
    "dependsOn": [
      "chemistry",
      "physics"
    ],
    "summary": "以原子与结构解释性能，使材料从经验配比走向按需设计，它建立在化学、经典力学之上，约 约 1900 年 成形于信息时代，把科学基础与方法中的关键能力落到实处，并直接支撑了DNA 双螺旋、氮化硅陶瓷、金属基复合材料等后续技术。"
  },
  {
    "id": "quantum",
    "name": "量子科技",
    "en": "Quantum Technology",
    "category": "basic",
    "era": "info",
    "date": "20 世纪后期",
    "year": 1980,
    "dependsOn": [
      "relativity_qm",
      "physics"
    ],
    "summary": "以量子叠加与纠缠构造器件的技术域，覆盖量子计算、量子通信与量子精密测量。自 1980 年代量子计算理论起步，依托相对论与量子力学及经典力学；对技术进步有直接推动——量子密钥分发已商用组网、量子计算机已实现计算优越性实验，并直接催生量子信息、量子互联网与新一代计算等方向。"
  },
  {
    "id": "nanotech",
    "name": "纳米技术",
    "en": "Nanotechnology",
    "category": "material",
    "era": "info",
    "date": "20 世纪后期",
    "year": 1980,
    "dependsOn": [
      "materials",
      "chemistry",
      "physics"
    ],
    "summary": "在纳米尺度操纵物质，使性能由结构而非成分决定，它建立在材料科学、化学、经典力学之上，约 20 世纪后期 成形于信息时代，把材料体系中的关键能力落到实处，并直接支撑了mRNA 疫苗、mRNA 疫苗、mRNA 疫苗等后续技术。"
  },
  {
    "id": "spacecraft",
    "name": "航天器",
    "en": "Spacecraft",
    "category": "transport",
    "era": "info",
    "date": "1957 年",
    "year": 1957,
    "dependsOn": [
      "rocket",
      "satellite"
    ],
    "summary": "进入并工作于太空的载体，把活动疆域从地表扩展到轨道与深空，它建立在火箭、人造卫星之上，约 1957 年 成形于信息时代，把交通运载中的关键能力落到实处，并直接支撑了离子推进、太空电梯、太空制造等后续技术。"
  },
  {
    "id": "life_support",
    "name": "生命保障",
    "en": "Life Support",
    "category": "life",
    "era": "info",
    "date": "约 1960 年",
    "year": 1960,
    "dependsOn": [
      "engineering",
      "chemistry",
      "biotech"
    ],
    "summary": "在封闭环境中维持温、氧、水、食的循环，使人得以离开地球生存，它建立在工程学、化学、生物技术之上，约 约 1960 年 成形于信息时代，把生命与医疗中的关键能力落到实处，并直接支撑了居住舱、人造子宫、火星殖民等后续技术。"
  },
    {
    "id": "stem_cells",
    "name": "干细胞",
    "en": "Stem Cells",
    "category": "life",
    "era": "info",
    "date": "1960 年",
    "year": 1960,
    "dependsOn": [
      "genetics",
      "biotech"
    ],
    "summary": "具自我更新与分化潜能的细胞，是再生医学与器官构建的种子，依托遗传学、生物技术，它在信息时代（1960 年）把相关能力从经验推向方法，成为生命与医疗中承上启下的一环，直接催生了正电子成像、组织工程、电子病历等发展。"
  },
    {
    "id": "microfluidics",
    "name": "微流控",
    "en": "Microfluidics",
    "category": "life",
    "era": "info",
    "date": "1990 年",
    "year": 1990,
    "dependsOn": [
      "physics",
      "materials"
    ],
    "summary": "在微米通道内操控微量流体，是便携诊断与单细胞质控的平台，依托经典力学、材料科学，它在信息时代（1990 年）把相关能力从经验推向方法，成为生命与医疗中承上启下的一环，直接催生了器官芯片、器官芯片、器官芯片等发展。"
  },
  {
    "id": "propulsion",
    "name": "推进",
    "en": "Propulsion",
    "category": "transport",
    "era": "info",
    "date": "约 1960 年",
    "year": 1960,
    "dependsOn": [
      "thermodynamics"
    ],
    "summary": "将能量转化为定向推力的核心能力，建立在热力学之上。火箭等运载推进是其专门实现而非前置（概念影响）；20 世纪 60 年代起电推进、核热推进等先进概念工程化，成为未来核热、聚变与恒星发动机等推进方向的母体。"
  },
  {
    "id": "combustion",
    "name": "燃烧",
    "en": "Combustion",
    "category": "energy",
    "era": "industrial",
    "date": "约 1800 年",
    "year": 1800,
    "dependsOn": [
      "chemistry"
    ],
    "summary": "燃料与氧化剂快速放热的科学，建立在化学（氧化学说）之上；热力学为其效率与机理提供解释，属概念性影响而非技术前置。它支撑内燃、喷气等动力来源，并延伸至燃料电池等新兴动力方向。"
  },
  {
    "id": "actuator",
    "name": "作动器",
    "en": "Actuator",
    "category": "manufact",
    "era": "info",
    "date": "约 1950 年",
    "year": 1950,
    "dependsOn": [
      "electronics",
      "materials"
    ],
    "summary": "把电、液、气信号转为机械运动，是机器执行动作的肌肉，依托电子学、材料科学，它在信息时代（约 1950 年）把相关能力从经验推向方法，成为制造与工具中承上启下的一环，直接催生了人形机器人、软体机器人、动力外骨骼等发展。"
  },
  {
    "id": "cad",
    "name": "计算机辅助设计",
    "en": "CAD",
    "category": "info",
    "era": "info",
    "date": "1960 年",
    "year": 1960,
    "dependsOn": [
      "computer",
      "mathematics"
    ],
    "summary": "以参数化模型代替图板，使设计、仿真与制造无缝衔接，它建立在电子计算机、数学之上，约 1960 年 成形于信息时代，把信息通信中的关键能力落到实处，并直接支撑了数字孪生、数字孪生、数字孪生等后续技术。"
  },
  {
    "id": "simulation",
    "name": "仿真",
    "en": "Simulation",
    "category": "info",
    "era": "info",
    "date": "约 1950 年",
    "year": 1950,
    "dependsOn": [
      "computer",
      "mathematics"
    ],
    "summary": "用数值模型复现系统行为，使工程在制造前先试飞、试爆、试错，依托电子计算机、数学，它在信息时代（约 1950 年）把相关能力从经验推向方法，成为信息通信中承上启下的一环，直接催生了数字孪生、数字孪生、数字孪生等发展。"
  },
  {
    "id": "iot",
    "name": "物联网",
    "en": "Internet of Things",
    "category": "info",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "dependsOn": [
      "internet",
      "sensor",
      "soc"
    ],
    "summary": "把传感器与执行器联网，使物理世界可被软件实时感知与调度，它建立在互联网、传感器、手机系统级芯片之上，约 2010 年 成形于智能时代，把信息通信中的关键能力落到实处，并直接支撑了边缘智能、边缘智能、边缘智能等后续技术。"
  },
  {
    "id": "big_data",
    "name": "大数据",
    "en": "Big Data",
    "category": "info",
    "era": "intelligent",
    "date": "2005 年",
    "year": 2005,
    "dependsOn": [
      "computer",
      "internet"
    ],
    "summary": "在海量异构数据上挖掘规律，是智能决策与模型训练的燃料，依托电子计算机、互联网，它在智能时代（2005 年）把相关能力从经验推向方法，成为信息通信中承上启下的一环，直接催生了精准医疗、精准医疗、通用人工智能等发展。"
  },
    {
    "id": "microwave",
    "name": "微波",
    "en": "Microwave",
    "category": "energy",
    "era": "electrical",
    "date": "1940 年",
    "year": 1940,
    "dependsOn": [
      "electromagnetism"
    ],
    "summary": "厘米波段的电磁波，用于加热、雷达与点对点通信，依托电磁学，它在电气时代（1940 年）把相关能力从经验推向方法，成为能量形式中承上启下的一环，直接催生了空间太阳能、空间太阳能、空间太阳能等发展。"
  },
  {
    "id": "cryogenics",
    "name": "低温工程",
    "en": "Cryogenics",
    "category": "energy",
    "era": "info",
    "date": "约 1900 年",
    "year": 1900,
    "dependsOn": [
      "thermodynamics",
      "physics"
    ],
    "summary": "获得并维持极低温，是超导、液化与量子器件的前提，它建立在热力学、经典力学之上，约 约 1900 年 成形于信息时代，把能量形式中的关键能力落到实处，并直接支撑了量子计算机、超导磁体等后续技术。"
  },
  {
    "id": "superconductor",
    "name": "超导体",
    "en": "Superconductor",
    "category": "material",
    "era": "info",
    "date": "1911 年",
    "year": 1911,
    "dependsOn": [
      "physics",
      "materials"
    ],
    "summary": "零电阻且排磁场的状态，是强磁体、无损耗输电与量子比特的载体，它建立在经典力学、材料科学之上，约 1911 年 成形于信息时代，把材料体系中的关键能力落到实处，并直接支撑了电磁炮、量子计算机、聚变发电等后续技术。"
  },
  {
    "id": "particle_physics",
    "name": "粒子物理",
    "en": "Particle Physics",
    "category": "basic",
    "era": "info",
    "date": "1930 年",
    "year": 1930,
    "dependsOn": [
      "physics",
      "relativity_qm"
    ],
    "summary": "在最高能量下探究物质基本组分与力，是标准模型的实验场，它建立在经典力学、相对论与量子力学之上，约 1930 年 成形于信息时代，把科学基础与方法中的关键能力落到实处，并直接支撑了量子场论、粒子物理学、射电天文学等后续技术。"
  },
  {
    "id": "spacetime",
    "name": "时空",
    "en": "Spacetime",
    "category": "basic",
    "era": "info",
    "date": "1915 年",
    "year": 1915,
    "dependsOn": [
      "relativity_qm",
      "physics"
    ],
    "summary": "把时间与空间统一为可弯曲的几何，是引力与宇宙学的新框架，依托相对论与量子力学、经典力学，它在信息时代（1915 年）把相关能力从经验推向方法，成为科学基础与方法中承上启下的一环，直接催生了曲速引擎、虫洞、超光速通讯等发展。"
  },
  {
    "id": "general_relativity",
    "name": "广义相对论",
    "en": "General Relativity",
    "category": "basic",
    "era": "info",
    "date": "1915 年",
    "year": 1915,
    "dependsOn": [
      "relativity_qm",
      "physics"
    ],
    "summary": "以时空弯曲诠释引力，预言了黑洞、引力波与时间膨胀，它建立在相对论与量子力学、经典力学之上，约 1915 年 成形于信息时代，把科学基础与方法中的关键能力落到实处，并直接支撑了宇宙学、宇宙学、黑洞等后续技术。"
  },
  {
    "id": "quantum_field",
    "name": "量子场论",
    "en": "Quantum Field Theory",
    "category": "basic",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "dependsOn": [
      "relativity_qm",
      "particle_physics"
    ],
    "summary": "把粒子视为场的激发，统一了量子与狭义相对论，是现代物理的语法，它建立在相对论与量子力学、粒子物理之上，约 1950 年 成形于信息时代，把科学基础与方法中的关键能力落到实处，并直接支撑了奇异物质等后续技术。"
  },
  {
    "id": "quantum_entanglement",
    "name": "量子纠缠",
    "en": "Quantum Entanglement",
    "category": "basic",
    "era": "electrical",
    "date": "1935 年",
    "year": 1935,
    "dependsOn": [
      "relativity_qm"
    ],
    "summary": "量子态之间非定域的强关联现象（1935 年 EPR 论证，1980 年代起经 Bell 实验反复证实，2022 年获诺贝尔物理学奖）。它是量子信息与不可克隆定理的物理基础，并已成为量子密钥分发、量子隐形传态等已实现技术的资源；量子科技是其下游应用方向而非前置（概念影响）。"
  },
  {
    "id": "quantum_info",
    "name": "量子信息",
    "en": "Quantum Information",
    "category": "basic",
    "era": "info",
    "date": "1990 年",
    "year": 1990,
    "dependsOn": [
      "quantum_entanglement",
      "computer"
    ],
    "summary": "以量子态编码、传输与处理信息的学科（约 1990 年前后成形），建立在量子科技、量子纠缠与电子计算机之上，是量子计算机、量子隐形传态与量子网络的理论基础。"
  },
  {
    "id": "black_hole",
    "name": "黑洞",
    "en": "Black Hole",
    "category": "basic",
    "era": "info",
    "date": "1960 年",
    "year": 1960,
    "dependsOn": [
      "general_relativity",
      "physics"
    ],
    "summary": "引力坍缩到视界之内的天体，是检验极端物理的天然实验室，它建立在广义相对论、经典力学之上，约 1960 年 成形于信息时代，把科学基础与方法中的关键能力落到实处，并直接支撑了黑洞计算等后续技术。"
  },
  {
    "id": "climate_science",
    "name": "气候科学",
    "en": "Climate Science",
    "category": "basic",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "dependsOn": [
      "physics",
      "chemistry"
    ],
    "summary": "研究地球能量与物质收支，是评估人为影响与预测变化的依据，它建立在经典力学、化学之上，约 1950 年 成形于信息时代，把科学基础与方法中的关键能力落到实处，并直接支撑了气候工程等后续技术。"
  },
  {
    "id": "aerosol",
    "name": "气溶胶",
    "en": "Aerosol",
    "category": "material",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "dependsOn": [
      "chemistry",
      "physics"
    ],
    "summary": "悬浮于气体中的微粒，影响云、气候与大气光学，也是喷射药剂的载体，依托化学、经典力学，它在信息时代（1950 年）把相关能力从经验推向方法，成为材料体系中承上启下的一环，直接催生了气候工程等发展。"
  },
  {
    "id": "led",
    "name": "发光二极管",
    "en": "LED",
    "category": "info",
    "era": "electrical",
    "date": "1962 年",
    "year": 1962,
    "dependsOn": ["semiconductor","quantum_mech"],
    "summary": "半导体电致发光，以极低功耗重塑了照明与显示，依托半导体、光学，它在电气时代（1962 年）把相关能力从经验推向方法，成为信息通信中承上启下的一环，直接催生了垂直农业等发展。"
  },
  {
    "id": "automation",
    "name": "自动化",
    "en": "Automation",
    "category": "manufact",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "dependsOn": [
      "computer",
      "electronics"
    ],
    "summary": "以反馈与控制代替人工操作，是流水线、机器人与无人系统的灵魂，依托电子计算机、电子学，它在信息时代（1950 年）把相关能力从经验推向方法，成为制造与工具中承上启下的一环，直接催生了超精密加工、微细加工、超声加工等发展。"
  },
  {
    "id": "ventilation",
    "name": "通风",
    "en": "Ventilation",
    "category": "build",
    "era": "industrial",
    "date": "约 1800 年",
    "year": 1800,
    "dependsOn": [
      "engineering"
    ],
    "summary": "主动置换空气以维持温湿与洁净，是地下、密闭与洁净空间的前提，依托工程学，它在工业时代（约 1800 年）把相关能力从经验推向方法，成为建筑建造中承上启下的一环，直接催生了地下城等发展。"
  },
  {
    "id": "habitat",
    "name": "居住舱",
    "en": "Habitat Module",
    "category": "build",
    "era": "info",
    "date": "1970 年",
    "year": 1970,
    "dependsOn": [
      "engineering",
      "life_support"
    ],
    "summary": "可独立维持人居的封闭结构，是月球、火星与前哨基地的居所，依托工程学、生命保障，它在信息时代（1970 年）把相关能力从经验推向方法，成为建筑建造中承上启下的一环，直接催生了月球基地等发展。"
  },
  {
    "id": "scramjet",
    "name": "超燃冲压发动机",
    "en": "Scramjet",
    "category": "transport",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "dependsOn": [
      "combustion",
      "aerodynamics",
      "rocket"
    ],
    "summary": "在超声速气流中直接燃烧，无需旋转压气机即可推进，是高超声速动力，依托燃烧、空气动力学、火箭，它在智能时代（2000 年）把相关能力从经验推向方法，成为交通运载中承上启下的一环，直接催生了高超声速飞行等发展。"
  },
  {
    "id": "hypersonic",
    "name": "高超声速飞行",
    "en": "Hypersonic Flight",
    "category": "transport",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "dependsOn": [
      "aerodynamics",
      "scramjet",
      "materials"
    ],
    "summary": "以 5 马赫以上速度穿越大气，对材料、热管理与制导提出极限要求，它建立在空气动力学、超燃冲压发动机、材料科学之上，约 2010 年 成形于智能时代，把交通运载中的关键能力落到实处，并直接支撑了高超声速武器、轨道打击等后续技术。"
  },
  {
    "id": "railgun",
    "name": "电磁炮",
    "en": "Railgun",
    "category": "military",
    "era": "info",
    "date": "2000 年",
    "year": 2000,
    "dependsOn": [
      "electromagnetism",
      "superconductor"
    ],
    "summary": "以电磁力加速弹丸，免却发射药而获得极高初速与射程，它建立在电磁学、超导体之上，约 2000 年 出现于信息时代，把军事技术的相关能力第一次稳定下来，是后来技术谱系的基础环节。"
  },
  {
    "id": "isru",
    "name": "原位资源利用",
    "en": "ISRU",
    "category": "transport",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "dependsOn": [
      "mining",
      "chemistry",
      "automation"
    ],
    "summary": "在地外就地取材制取燃料、水与建材，是长期驻留的前提，依托采矿、化学、自动化，它在智能时代（2010 年）把相关能力从经验推向方法，成为交通运载中承上启下的一环，直接催生了月球基地、火星殖民、太空居住等发展。"
  },
  {
    "id": "agi",
    "name": "通用人工智能",
    "en": "Artificial General Intelligence",
    "category": "info",
    "era": "future",
    "date": "约 2040 年（L2·目前技术可实现）",
    "year": 2040,
    "tier": "L2",
    "dependsOn": [
      "ai",
      "inf_nn",
      "big_data"
    ],
    "summary": "在广泛任务上达到或超越人类水平的通用智能，是后续多数科幻设想的共同前提，依托人工智能、神经网络、大数据，它在未来/科幻（约 2040 年（L2·目前技术可实现））把相关能力从经验推向方法，成为信息通信中承上启下的一环，直接催生了数字生命、冯·诺依曼探测器等发展。",
    "views": [
      {
        "period": "设想",
        "text": "被视为继火、文字、蒸汽之后的又一次文明级跃迁，也可能失控。"
      },
      {
        "period": "影响",
        "text": "若实现，将同时冲击就业、科研节奏与权力结构。"
      }
    ]
  },
  {
    "id": "neuromorphic",
    "name": "神经形态计算",
    "en": "Neuromorphic Computing",
    "category": "info",
    "era": "future",
    "date": "约 2030 年（L2·目前技术可实现）",
    "year": 2030,
    "tier": "L2",
    "dependsOn": [
      "ai",
      "ic",
      "neuroscience"
    ],
    "summary": "以脉冲神经元仿脑结构布线，极低功耗下做感知与决策，是边缘智能的候选架构，依托人工智能、集成电路、神经科学，它在未来/科幻（约 2030 年（L2·目前技术可实现））解决了信息通信中的具体难题，使相应能力得以被反复复用。"
  },
  {
    "id": "quantum_computer",
    "name": "量子计算机",
    "en": "Quantum Computer",
    "category": "info",
    "era": "future",
    "date": "约 2035 年（L2·目前技术可实现）",
    "year": 2035,
    "tier": "L2",
    "dependsOn": [
      "quantum_info",
      "superconductor",
      "cryogenics"
    ],
    "summary": "利用叠加与纠缠做特定问题指数加速，有望破解优化、化学模拟与密码，依托量子信息、超导体、低温工程，它在未来/科幻（约 2035 年（L2·目前技术可实现））解决了信息通信中的具体难题，使相应能力得以被反复复用。"
  },
  {
    "id": "quantum_crypto",
    "name": "量子加密",
    "en": "Quantum Cryptography",
    "category": "info",
    "era": "future",
    "date": "约 2030 年（L2·目前技术可实现）",
    "year": 2030,
    "tier": "L2",
    "dependsOn": [
      "quantum_entanglement",
      "laser",
      "internet"
    ],
    "summary": "以不可克隆定理分发密钥，任何窃听都会留下痕迹，提供信息论级安全，依托量子纠缠、激光、互联网，它在未来/科幻（约 2030 年（L2·目前技术可实现））解决了信息通信中的具体难题，使相应能力得以被反复复用。"
  },
          {
    "id": "holography",
    "name": "全息显示",
    "en": "Holographic Display",
    "category": "info",
    "era": "future",
    "date": "约 2035 年（L2·目前技术可实现）",
    "year": 2035,
    "tier": "L2",
    "dependsOn": ["laser","display","wave_optics"],
    "summary": "以干涉记录重建真三维光场，无需眼镜即可裸眼观看悬浮影像，依托激光、显示技术、光学，它在未来/科幻（约 2035 年（L2·目前技术可实现））解决了信息通信中的具体难题，使相应能力得以被反复复用。"
  },
  {
    "id": "self_driving",
    "name": "自动驾驶",
    "en": "Autonomous Driving",
    "category": "transport",
    "era": "future",
    "date": "约 2030 年（L2·目前技术可实现）",
    "year": 2030,
    "tier": "L2",
    "dependsOn": [
      "ai",
      "lidar",
      "gps",
      "automobile"
    ],
    "summary": "在复杂城市道路中由系统全程控车，把通勤时间转化为可自由支配的时间，它建立在人工智能、激光雷达、全球卫星定位 GNSS之上，约 约 2030 年（L2·目前技术可实现） 成形于未来/科幻，把交通运载中的关键能力落到实处，并直接支撑了飞行汽车等后续技术。"
  },
  {
    "id": "humanoid",
    "name": "人形机器人",
    "en": "Humanoid Robot",
    "category": "manufact",
    "era": "future",
    "date": "约 2032 年（L2·目前技术可实现）",
    "year": 2032,
    "tier": "L2",
    "dependsOn": [
      "robot",
      "ai",
      "actuator"
    ],
    "summary": "以双足与多指适应为人类设计的环境，承接看护、服务等柔性任务，依托工业机器人、人工智能、作动器，它在未来/科幻（约 2032 年（L2·目前技术可实现））解决了制造与工具中的具体难题，使相应能力得以被反复复用。"
  },
  {
    "id": "soft_robot",
    "name": "软体机器人",
    "en": "Soft Robot",
    "category": "manufact",
    "era": "future",
    "date": "约 2030 年（L2·目前技术可实现）",
    "year": 2030,
    "tier": "L2",
    "dependsOn": [
      "robot",
      "materials",
      "actuator"
    ],
    "summary": "以弹性体变形运动，能安全钻入缝隙、贴合人体，适合医疗与救援，依托工业机器人、材料科学、作动器，它在未来/科幻（约 2030 年（L2·目前技术可实现））解决了制造与工具中的具体难题，使相应能力得以被反复复用。"
  },
  {
    "id": "swarm_robot",
    "name": "集群机器人",
    "en": "Swarm Robotics",
    "category": "manufact",
    "era": "future",
    "date": "约 2030 年（L2·目前技术可实现）",
    "year": 2030,
    "tier": "L2",
    "dependsOn": [
      "robot",
      "ai",
      "iot"
    ],
    "summary": "大量简单单元以局部规则自组织，涌现侦查、搬运与建造等群体能力，依托工业机器人、人工智能、物联网，它在未来/科幻（约 2030 年（L2·目前技术可实现））把相关能力从经验推向方法，成为制造与工具中承上启下的一环，直接催生了纳米机器人等发展。"
  },
  {
    "id": "exoskeleton",
    "name": "动力外骨骼",
    "en": "Powered Exoskeleton",
    "category": "manufact",
    "era": "future",
    "date": "约 2030 年（L2·目前技术可实现）",
    "year": 2030,
    "tier": "L2",
    "dependsOn": [
      "robot",
      "battery",
      "actuator",
      "materials"
    ],
    "summary": "外穿戴式助力骨架，放大体力，用于负重、康复与单兵机动，依托工业机器人、电池、作动器，它在未来/科幻（约 2030 年（L2·目前技术可实现））解决了制造与工具中的具体难题，使相应能力得以被反复复用。"
  },
  {
    "id": "robot_factory",
    "name": "无人工厂",
    "en": "Lights-out Factory",
    "category": "manufact",
    "era": "future",
    "date": "约 2030 年（L2·目前技术可实现）",
    "year": 2030,
    "tier": "L2",
    "dependsOn": [
      "robot",
      "ai",
      "iot",
      "mfg_3dp"
    ],
    "summary": "从投料到质检全由机器闭环，少人乃至无人即可连续生产，依托工业机器人、人工智能、物联网，它在未来/科幻（约 2030 年（L2·目前技术可实现））解决了制造与工具中的具体难题，使相应能力得以被反复复用。"
  },
  {
    "id": "crispr",
    "name": "基因编辑",
    "en": "Gene Editing",
    "category": "life",
    "era": "future",
    "date": "约 2025 年（L2·目前技术可实现）",
    "year": 2025,
    "tier": "L2",
    "dependsOn": [
      "dna",
      "genetics",
      "recombinant_dna"
    ],
    "summary": "以分子剪刀定点改写基因组，使遗传疾病治疗与作物改良进入可编程时代，依托遗传学 / DNA、遗传学、重组DNA技术，它在未来/科幻（约 2025 年（L2·目前技术可实现））把相关能力从经验推向方法，成为生命与医疗中承上启下的一环，直接催生了基因治疗、基因电路等发展。"
  },
      {
    "id": "stem_cell_therapy",
    "name": "干细胞治疗",
    "en": "Stem Cell Therapy",
    "category": "life",
    "era": "future",
    "date": "约 2035 年（L2·目前技术可实现）",
    "year": 2035,
    "tier": "L2",
    "dependsOn": [
      "stem_cells",
      "bio_tissueeng"
    ],
    "summary": "以干细胞替换受损组织，为帕金森、脊髓损伤等退行性疾病提供修复路径，它建立在干细胞、组织工程之上，约 约 2035 年（L2·目前技术可实现） 出现于未来/科幻，把生命与医疗的相关能力第一次稳定下来，是后来技术谱系的基础环节。"
  },
        {
    "id": "fusion_power",
    "name": "聚变发电",
    "en": "Fusion Power",
    "category": "energy",
    "era": "future",
    "date": "约 2050 年（L2·目前技术可实现）",
    "year": 2050,
    "tier": "L2",
    "dependsOn": [
      "nuclear_fusion",
      "plasma_phys",
      "superconductor"
    ],
    "summary": "以托卡马克或激光约束等离子体持续点火，提供近乎无限的清洁能源，它建立在核聚变、等离子体物理、超导体之上，约 约 2050 年（L2·目前技术可实现） 成形于未来/科幻，把能量形式中的关键能力落到实处，并直接支撑了聚变火箭等后续技术。"
  },
  {
    "id": "superconducting_magnet",
    "name": "超导磁体",
    "en": "Superconducting Magnet",
    "category": "energy",
    "era": "future",
    "date": "约 2030 年（L2·目前技术可实现）",
    "year": 2030,
    "tier": "L2",
    "dependsOn": [
      "superconductor",
      "cryogenics",
      "electromagnetism"
    ],
    "summary": "以零电阻线圈产生强稳磁场，是聚变、磁悬浮与高能加速器的核心部件，它建立在超导体、低温工程、电磁学之上，约 约 2030 年（L2·目前技术可实现） 出现于未来/科幻，把能量形式的相关能力第一次稳定下来，是后来技术谱系的基础环节。"
  },
        {
    "id": "grid_storage",
    "name": "电网级储能",
    "en": "Grid-scale Storage",
    "category": "energy",
    "era": "future",
    "date": "约 2030 年（L2·目前技术可实现）",
    "year": 2030,
    "tier": "L2",
    "dependsOn": [
      "battery",
      "electronics",
      "solar"
    ],
    "summary": "以百兆瓦时级储能平抑风光波动，使高比例可再生电网稳定运行，它建立在电池、电子学、太阳能光伏之上，约 约 2030 年（L2·目前技术可实现） 出现于未来/科幻，把能量形式的相关能力第一次稳定下来，是后来技术谱系的基础环节。"
  },
  {
    "id": "graphene",
    "name": "石墨烯量产",
    "en": "Graphene at Scale",
    "category": "material",
    "era": "future",
    "date": "约 2035 年（L2·目前技术可实现）",
    "year": 2035,
    "tier": "L2",
    "dependsOn": [
      "nanotech",
      "materials",
      "chemistry"
    ],
    "summary": "单层碳网的卷对卷制备，带来超强、超薄、高导的基准新材料，它建立在纳米技术、材料科学、化学之上，约 约 2035 年（L2·目前技术可实现） 出现于未来/科幻，把材料体系的相关能力第一次稳定下来，是后来技术谱系的基础环节。"
  },
  {
    "id": "carbon_nanotube",
    "name": "碳纳米管",
    "en": "Carbon Nanotube",
    "category": "material",
    "era": "future",
    "date": "约 2035 年（L2·目前技术可实现）",
    "year": 2035,
    "tier": "L2",
    "dependsOn": [
      "nanotech",
      "materials"
    ],
    "summary": "强度逾钢百倍、导电胜铜的纳米管，是超强缆绳与高端器件的候选，它建立在纳米技术、材料科学之上，约 约 2035 年（L2·目前技术可实现） 成形于未来/科幻，把材料体系中的关键能力落到实处，并直接支撑了太空电梯等后续技术。"
  },
  {
    "id": "metamaterial",
    "name": "超材料",
    "en": "Metamaterial",
    "category": "material",
    "era": "future",
    "date": "约 2030 年（L2·目前技术可实现）",
    "year": 2030,
    "tier": "L2",
    "dependsOn": ["materials","electromagnetism"],
    "summary": "以亚波长结构而非成分定制响应，可造负折射、隐身与超透镜，它建立在材料科学、电磁学、光学之上，约 约 2030 年（L2·目前技术可实现） 成形于未来/科幻，把材料体系中的关键能力落到实处，并直接支撑了可编程物质等后续技术。"
  },
  {
    "id": "room_temp_superconductor",
    "name": "室温超导",
    "en": "Room-temperature Superconductor",
    "category": "material",
    "era": "future",
    "date": "约 2040 年（L2·目前技术可实现）",
    "year": 2040,
    "tier": "L2",
    "dependsOn": [
      "superconductor",
      "materials",
      "physics"
    ],
    "summary": "无需极低温即零电阻，将重塑输电、磁体与计算，若证实影响深远，依托超导体、材料科学、经典力学，它在未来/科幻（约 2040 年（L2·目前技术可实现））解决了材料体系中的具体难题，使相应能力得以被反复复用。"
  },
    {
    "id": "high_entropy_alloy",
    "name": "高熵合金",
    "en": "High-entropy Alloy",
    "category": "material",
    "era": "future",
    "date": "约 2030 年（L2·目前技术可实现）",
    "year": 2030,
    "tier": "L2",
    "dependsOn": [
      "metallurgy",
      "materials"
    ],
    "summary": "多种主元等摩尔固溶，以晶格畸变获得强度、耐蚀与高温稳定性的新组合，它建立在冶金、材料科学之上，约 约 2030 年（L2·目前技术可实现） 出现于未来/科幻，把材料体系的相关能力第一次稳定下来，是后来技术谱系的基础环节。"
  },
  {
    "id": "biofabrication",
    "name": "生物制造",
    "en": "Biofabrication",
    "category": "material",
    "era": "future",
    "date": "约 2035 年（L2·目前技术可实现）",
    "year": 2035,
    "tier": "L2",
    "dependsOn": [
      "biotech",
      "microbiology",
      "materials"
    ],
    "summary": "以工程菌或细胞工厂发酵产出材料与化学品，绕过高能耗的化工业路线，它建立在生物技术、微生物学、材料科学之上，约 约 2035 年（L2·目前技术可实现） 出现于未来/科幻，把材料体系的相关能力第一次稳定下来，是后来技术谱系的基础环节。"
  },
  {
    "id": "reusable_rocket",
    "name": "可重复火箭",
    "en": "Reusable Rocket",
    "category": "transport",
    "era": "future",
    "date": "约 2025 年（L2·目前技术可实现）",
    "year": 2025,
    "tier": "L2",
    "dependsOn": [
      "rocket",
      "composites",
      "materials"
    ],
    "summary": "垂直回收与翻新箭体，把单位质量入轨成本压低一个数量级，它建立在火箭、复合材料、材料科学之上，约 约 2025 年（L2·目前技术可实现） 成形于未来/科幻，把交通运载中的关键能力落到实处，并直接支撑了巨型火箭、月球基地等后续技术。"
  },
  {
    "id": "starship",
    "name": "巨型火箭",
    "en": "Super-heavy Lift Rocket",
    "category": "transport",
    "era": "future",
    "date": "约 2030 年（L2·目前技术可实现）",
    "year": 2030,
    "tier": "L2",
    "dependsOn": [
      "reusable_rocket",
      "rocket",
      "composites"
    ],
    "summary": "百吨级近地运载，使大型星座、月面基地与深空载具的部署成为可能，它建立在可重复火箭、火箭、复合材料之上，约 约 2030 年（L2·目前技术可实现） 成形于未来/科幻，把交通运载中的关键能力落到实处，并直接支撑了火星殖民、戴森球、轨道打击等后续技术。"
  },
  {
    "id": "ion_drive",
    "name": "离子推进",
    "en": "Ion Thruster",
    "category": "transport",
    "era": "future",
    "date": "约 2030 年（L2·目前技术可实现）",
    "year": 2030,
    "tier": "L2",
    "dependsOn": [
      "electromagnetism",
      "plasma_phys",
      "spacecraft"
    ],
    "summary": "以电场加速离子获得极高比冲，适合长期、深空与轨道维持任务，依托电磁学、等离子体物理、航天器，它在未来/科幻（约 2030 年（L2·目前技术可实现））解决了交通运载中的具体难题，使相应能力得以被反复复用。"
  },
  {
    "id": "electric_aircraft",
    "name": "电动飞机",
    "en": "Electric Aircraft",
    "category": "transport",
    "era": "future",
    "date": "约 2035 年（L2·目前技术可实现）",
    "year": 2035,
    "tier": "L2",
    "dependsOn": [
      "battery",
      "airplane",
      "actuator"
    ],
    "summary": "以电机替代涡轮，实现低噪零排的短途通勤飞行，受限于电池能量密度，它建立在电池、飞机、作动器之上，约 约 2035 年（L2·目前技术可实现） 出现于未来/科幻，把交通运载的相关能力第一次稳定下来，是后来技术谱系的基础环节。"
  },
  {
    "id": "maglev",
    "name": "磁悬浮",
    "en": "Maglev",
    "category": "transport",
    "era": "future",
    "date": "约 2030 年（L2·目前技术可实现）",
    "year": 2030,
    "tier": "L2",
    "dependsOn": [
      "superconductor",
      "electromagnetism",
      "actuator"
    ],
    "summary": "以磁力无接触悬浮与推进，突破轮轨黏着极限，实现超高速地面交通，它建立在超导体、电磁学、作动器之上，约 约 2030 年（L2·目前技术可实现） 出现于未来/科幻，把交通运载的相关能力第一次稳定下来，是后来技术谱系的基础环节。"
  },
  {
    "id": "hyperloop",
    "name": "真空管道交通",
    "en": "Hyperloop",
    "category": "transport",
    "era": "future",
    "date": "约 2040 年（L2·目前技术可实现）",
    "year": 2040,
    "tier": "L2",
    "dependsOn": [
      "shield_tbm",
      "superconductor"
    ],
    "summary": "近真空管道内以磁悬浮载具巡航，把城市间通勤压缩到数十分钟，它建立在盾构机、超导体之上，约 约 2040 年（L2·目前技术可实现） 出现于未来/科幻，把交通运载的相关能力第一次稳定下来，是后来技术谱系的基础环节。"
  },
  {
    "id": "autonomous_ship",
    "name": "无人船",
    "en": "Autonomous Ship",
    "category": "transport",
    "era": "future",
    "date": "约 2035 年（L2·目前技术可实现）",
    "year": 2035,
    "tier": "L2",
    "dependsOn": [
      "satellite",
      "ai",
      "automation"
    ],
    "summary": "以自主导航与远程值守运行货轮，降低人力成本与人为事故，依托人造卫星、人工智能、自动化，它在未来/科幻（约 2035 年（L2·目前技术可实现））解决了交通运载中的具体难题，使相应能力得以被反复复用。"
  },
  {
    "id": "lunar_base",
    "name": "月球基地",
    "en": "Lunar Base",
    "category": "transport",
    "era": "future",
    "date": "约 2040 年（L2·目前技术可实现）",
    "year": 2040,
    "tier": "L2",
    "dependsOn": [
      "reusable_rocket",
      "isru",
      "habitat"
    ],
    "summary": "在月面以原位资源建永久居所与发射前哨，作为深空的中转站，它建立在可重复火箭、原位资源利用、居住舱之上，约 约 2040 年（L2·目前技术可实现） 成形于未来/科幻，把交通运载中的关键能力落到实处，并直接支撑了太空居住等后续技术。"
  },
  {
    "id": "additive_mass",
    "name": "大规模增材制造",
    "en": "Mass Additive Manufacturing",
    "category": "manufact",
    "era": "future",
    "date": "约 2030 年（L2·目前技术可实现）",
    "year": 2030,
    "tier": "L2",
    "dependsOn": [
      "mfg_3dp",
      "materials",
      "robot"
    ],
    "summary": "把打印从样件推向产线，按需、分布式地制造结构与器件，依托3D 打印、材料科学、工业机器人，它在未来/科幻（约 2030 年（L2·目前技术可实现））解决了制造与工具中的具体难题，使相应能力得以被反复复用。"
  },
  {
    "id": "vertical_farm",
    "name": "垂直农业",
    "en": "Vertical Farming",
    "category": "build",
    "era": "future",
    "date": "约 2030 年（L2·目前技术可实现）",
    "year": 2030,
    "tier": "L2",
    "dependsOn": [
      "automation",
      "led",
      "agriculture"
    ],
    "summary": "在层架与人工光下全年密集种植，把农田搬进城市、贴近消费端，依托自动化、发光二极管、农业，它在未来/科幻（约 2030 年（L2·目前技术可实现））解决了建筑建造中的具体难题，使相应能力得以被反复复用。"
  },
    {
    "id": "hypersonic_weapon",
    "name": "高超声速武器",
    "en": "Hypersonic Weapon",
    "category": "military",
    "era": "future",
    "date": "约 2035 年（L2·目前技术可实现）",
    "year": 2035,
    "tier": "L2",
    "dependsOn": [
      "hypersonic",
      "gps",
      "materials"
    ],
    "summary": "以 5 马赫以上机动滑翔突防，压缩防御方的预警与拦截窗口，依托高超声速飞行、全球卫星定位 GNSS、材料科学，它在未来/科幻（约 2035 年（L2·目前技术可实现））解决了军事技术中的具体难题，使相应能力得以被反复复用。"
  },
  {
    "id": "autonomous_weapon",
    "name": "自主武器",
    "en": "Autonomous Weapon",
    "category": "military",
    "era": "future",
    "date": "约 2035 年（L2·目前技术可实现）",
    "year": 2035,
    "tier": "L2",
    "dependsOn": [
      "ai",
      "drone",
      "sensor"
    ],
    "summary": "在有限监督下自行搜索、识别与接战，引发致命性决策的伦理争议，依托人工智能、无人机、传感器，它在未来/科幻（约 2035 年（L2·目前技术可实现））解决了军事技术中的具体难题，使相应能力得以被反复复用。"
  },
  {
    "id": "quantum_teleportation",
    "name": "量子隐形传态",
    "en": "Quantum Teleportation",
    "category": "info",
    "era": "future",
    "date": "约 2035 年（L2·目前技术可实现）",
    "year": 2035,
    "tier": "L2",
    "dependsOn": [
      "quantum_entanglement",
      "quantum_info"
    ],
    "summary": "借助纠缠将未知量子态转移到远端，是量子中继与量子网的基本操作，它建立在量子纠缠、量子信息之上，约 约 2035 年（L2·目前技术可实现） 成形于未来/科幻，把信息通信中的关键能力落到实处，并直接支撑了物质传送等后续技术。"
  },
  {
    "id": "artificial_photosynthesis",
    "name": "人工光合作用",
    "en": "Artificial Photosynthesis",
    "category": "material",
    "era": "future",
    "date": "约 2040 年（L2·目前技术可实现）",
    "year": 2040,
    "tier": "L2",
    "dependsOn": [
      "chemistry",
      "solar",
      "materials"
    ],
    "summary": "以催化系统把光、水与二氧化碳直接转为燃料或化学品，模拟并超越自然光合，依托化学、太阳能光伏、材料科学，它在未来/科幻（约 2040 年（L2·目前技术可实现））解决了材料体系中的具体难题，使相应能力得以被反复复用。"
  },
  {
    "id": "synthetic_food",
    "name": "人造食物",
    "en": "Synthetic Food",
    "category": "life",
    "era": "future",
    "date": "约 2035 年（L2·目前技术可实现）",
    "year": 2035,
    "tier": "L2",
    "dependsOn": [
      "biotech",
      "microbiology",
      "agriculture"
    ],
    "summary": "以发酵与细胞培养产出肉、奶与蛋白，脱离传统养殖的土地与伦理负担，它建立在生物技术、微生物学、农业之上，约 约 2035 年（L2·目前技术可实现） 出现于未来/科幻，把生命与医疗的相关能力第一次稳定下来，是后来技术谱系的基础环节。"
  },
  {
    "id": "gene_circuit",
    "name": "基因电路",
    "en": "Genetic Circuit",
    "category": "life",
    "era": "future",
    "date": "约 2050 年（L3·未来可能实现）",
    "year": 2050,
    "tier": "L3",
    "dependsOn": [
      "bio_synbio",
      "crispr"
    ],
    "summary": "在活细胞内布设逻辑门与计数器，使细胞按环境自行决策、定时释药，依托合成生物学、基因编辑，它在未来/科幻（约 2050 年（L3·未来可能实现））解决了生命与医疗中的具体难题，使相应能力得以被反复复用。"
  },
  {
    "id": "organ_printing",
    "name": "器官打印",
    "en": "Organ Printing",
    "category": "life",
    "era": "future",
    "date": "约 2055 年（L3·未来可能实现）",
    "year": 2055,
    "tier": "L3",
    "dependsOn": [
      "mfg_3dp",
      "stem_cells",
      "biotech"
    ],
    "summary": "以细胞为墨、逐层构建血管化器官，根本性缓解移植供体短缺，依托3D 打印、干细胞、生物技术，它在未来/科幻（约 2055 年（L3·未来可能实现））解决了生命与医疗中的具体难题，使相应能力得以被反复复用。"
  },
  {
    "id": "nanomedicine",
    "name": "纳米医药",
    "en": "Nanomedicine",
    "category": "life",
    "era": "future",
    "date": "约 2050 年（L3·未来可能实现）",
    "year": 2050,
    "tier": "L3",
    "dependsOn": [
      "nanotech",
      "bio_pharmacology",
      "biotech"
    ],
    "summary": "以纳米颗粒精准递送、成像与治疗，在分子尺度区分敌我，它建立在纳米技术、药理学、生物技术之上，约 约 2050 年（L3·未来可能实现） 成形于未来/科幻，把生命与医疗中的关键能力落到实处，并直接支撑了纳米机器人等后续技术。"
  },
  {
    "id": "life_extension",
    "name": "寿命延长",
    "en": "Life Extension",
    "category": "life",
    "era": "future",
    "date": "约 2070 年（L3·未来可能实现）",
    "year": 2070,
    "tier": "L3",
    "dependsOn": [
      "genetics",
      "senolytics",
      "stem_cells"
    ],
    "summary": "以清除衰老细胞、重编程与组织替换延缓退化，显著拉长健康寿命，它建立在遗传学、衰老干预、干细胞之上，约 约 2070 年（L3·未来可能实现） 出现于未来/科幻，把生命与医疗的相关能力第一次稳定下来，是后来技术谱系的基础环节。"
  },
  {
    "id": "senolytics",
    "name": "衰老干预",
    "en": "Senolytics",
    "category": "life",
    "era": "future",
    "date": "约 2045 年（L3·未来可能实现）",
    "year": 2045,
    "tier": "L3",
    "dependsOn": [
      "genetics",
      "bio_pharmacology"
    ],
    "summary": "选择性清除功能失调的衰老细胞，延缓多种年龄相关疾病的发作，依托遗传学、药理学，它在未来/科幻（约 2045 年（L3·未来可能实现））把相关能力从经验推向方法，成为生命与医疗中承上启下的一环，直接催生了寿命延长等发展。"
  },
  {
    "id": "artificial_womb",
    "name": "人造子宫",
    "en": "Artificial Womb",
    "category": "life",
    "era": "future",
    "date": "约 2055 年（L3·未来可能实现）",
    "year": 2055,
    "tier": "L3",
    "dependsOn": [
      "stem_cells",
      "life_support",
      "bio_tissueeng"
    ],
    "summary": "以生物反应器模拟妊娠环境，为早产儿与生育选择提供新路径，它建立在干细胞、生命保障、组织工程之上，约 约 2055 年（L3·未来可能实现） 出现于未来/科幻，把生命与医疗的相关能力第一次稳定下来，是后来技术谱系的基础环节。"
  },
  {
    "id": "virtual_world",
    "name": "虚拟世界",
    "en": "Virtual World",
    "category": "info",
    "era": "future",
    "date": "约 2045 年（L3·未来可能实现）",
    "year": 2045,
    "tier": "L3",
    "dependsOn": [
      "inf_vr",
      "ai",
      "simulation"
    ],
    "summary": "由智能体持续演化的沉浸式社会空间，模糊娱乐、工作与现实的边界，它建立在虚拟现实、人工智能、仿真之上，约 约 2045 年（L3·未来可能实现） 成形于未来/科幻，把信息通信中的关键能力落到实处，并直接支撑了数字生命等后续技术。"
  },
    {
    "id": "space_elevator",
    "name": "太空电梯",
    "en": "Space Elevator",
    "category": "transport",
    "era": "future",
    "date": "约 2070 年（L3·未来可能实现）",
    "year": 2070,
    "tier": "L3",
    "dependsOn": [
      "carbon_nanotube",
      "spacecraft",
      "materials"
    ],
    "summary": "以同步轨道缆绳把地表与轨道直连，以电力而非火箭送载荷入轨，依托碳纳米管、航天器、材料科学，它在未来/科幻（约 2070 年（L3·未来可能实现））把相关能力从经验推向方法，成为交通运载中承上启下的一环，直接催生了轨道环等发展。"
  },
  {
    "id": "nuclear_thermal",
    "name": "核热推进",
    "en": "Nuclear Thermal Propulsion",
    "category": "transport",
    "era": "future",
    "date": "约 2050 年（L3·未来可能实现）",
    "year": 2050,
    "tier": "L3",
    "dependsOn": [
      "nuclear_fission",
      "rocket",
      "propulsion"
    ],
    "summary": "以反应堆加热工质喷射，比冲数倍于化学火箭，大幅缩短火星航程，它建立在核裂变、火箭、推进之上，约 约 2050 年（L3·未来可能实现） 出现于未来/科幻，把交通运载的相关能力第一次稳定下来，是后来技术谱系的基础环节。"
  },
  {
    "id": "mars_colony",
    "name": "火星殖民",
    "en": "Mars Colony",
    "category": "transport",
    "era": "future",
    "date": "约 2060 年（L3·未来可能实现）",
    "year": 2060,
    "tier": "L3",
    "dependsOn": [
      "starship",
      "isru",
      "life_support"
    ],
    "summary": "以原位制氧、制水与建舱在火星建立自给聚落，成为跨行星物种，它建立在巨型火箭、原位资源利用、生命保障之上，约 约 2060 年（L3·未来可能实现） 出现于未来/科幻，把交通运载的相关能力第一次稳定下来，是后来技术谱系的基础环节。"
  },
  {
    "id": "space_mfg",
    "name": "太空制造",
    "en": "Space Manufacturing",
    "category": "manufact",
    "era": "future",
    "date": "约 2055 年（L3·未来可能实现）",
    "year": 2055,
    "tier": "L3",
    "dependsOn": [
      "mfg_3dp",
      "spacecraft",
      "robot"
    ],
    "summary": "利用微重力与真空制造地面难做的晶体、纤维与器件，反向补给地球，依托3D 打印、航天器、工业机器人，它在未来/科幻（约 2055 年（L3·未来可能实现））把相关能力从经验推向方法，成为制造与工具中承上启下的一环，直接催生了戴森球、冯·诺依曼探测器、恒星发动机等发展。"
  },
  {
    "id": "self_build",
    "name": "自建造结构",
    "en": "Self-building Structure",
    "category": "build",
    "era": "future",
    "date": "约 2060 年（L3·未来可能实现）",
    "year": 2060,
    "tier": "L3",
    "dependsOn": [
      "robot",
      "mfg_3dp",
      "materials"
    ],
    "summary": "由机器人集群依图纸自主浇筑、拼装，把建造变为可远程下达的指令，依托工业机器人、3D 打印、材料科学，它在未来/科幻（约 2060 年（L3·未来可能实现））解决了建筑建造中的具体难题，使相应能力得以被反复复用。"
  },
  {
    "id": "space_habitat",
    "name": "太空居住",
    "en": "Space Habitat",
    "category": "build",
    "era": "future",
    "date": "约 2065 年（L3·未来可能实现）",
    "year": 2065,
    "tier": "L3",
    "dependsOn": [
      "lunar_base",
      "life_support",
      "isru"
    ],
    "summary": "在轨或星表建旋转人居舱，以人工重力与闭环生态支撑长期生活，它建立在月球基地、生命保障、原位资源利用之上，约 约 2065 年（L3·未来可能实现） 出现于未来/科幻，把建筑建造的相关能力第一次稳定下来，是后来技术谱系的基础环节。"
  },
  {
    "id": "underground_city",
    "name": "地下城",
    "en": "Underground City",
    "category": "build",
    "era": "future",
    "date": "约 2055 年（L3·未来可能实现）",
    "year": 2055,
    "tier": "L3",
    "dependsOn": [
      "shield_tbm",
      "ventilation",
      "engineering"
    ],
    "summary": "以深层隧道构筑恒温、抗灾、节地的城市空间，应对地表拥挤与极端气候，依托盾构机、通风、工程学，它在未来/科幻（约 2055 年（L3·未来可能实现））解决了建筑建造中的具体难题，使相应能力得以被反复复用。"
  },
  {
    "id": "nanobot_swarm",
    "name": "纳米机器人",
    "en": "Medical Nanobot Swarm",
    "category": "life",
    "era": "future",
    "date": "约 2060 年（L3·未来可能实现）",
    "year": 2060,
    "tier": "L3",
    "dependsOn": [
      "nanotech",
      "swarm_robot",
      "nanomedicine"
    ],
    "summary": "数以亿计的分子机器在血中巡航，执行识别、清理与修复的群体任务，它建立在纳米技术、集群机器人、纳米医药之上，约 约 2060 年（L3·未来可能实现） 出现于未来/科幻，把生命与医疗的相关能力第一次稳定下来，是后来技术谱系的基础环节。"
  },
  {
    "id": "climate_engineering",
    "name": "气候工程",
    "en": "Climate Engineering",
    "category": "basic",
    "era": "future",
    "date": "约 2050 年（L3·未来可能实现）",
    "year": 2050,
    "tier": "L3",
    "dependsOn": [
      "climate_science",
      "aerosol"
    ],
    "summary": "以平流层反射或碳移除主动调节地球能量收支，作为减排之外的备份手段，依托气候科学、气溶胶，它在未来/科幻（约 2050 年（L3·未来可能实现））解决了科学基础与方法中的具体难题，使相应能力得以被反复复用。"
  },
  {
    "id": "cryosleep",
    "name": "人体冬眠",
    "en": "Human Cryosleep",
    "category": "life",
    "era": "future",
    "date": "约 2060 年（L3·未来可能实现）",
    "year": 2060,
    "tier": "L3",
    "dependsOn": [
      "life_support",
      "biotech"
    ],
    "summary": "以代谢抑制拉长任务耐受时间，为深空远征与危重救治争取窗口，它建立在生命保障、生物技术之上，约 约 2060 年（L3·未来可能实现） 出现于未来/科幻，把生命与医疗的相关能力第一次稳定下来，是后来技术谱系的基础环节。"
  },
  {
    "id": "flying_car",
    "name": "飞行汽车",
    "en": "Flying Car",
    "category": "transport",
    "era": "future",
    "date": "约 2045 年（L3·未来可能实现）",
    "year": 2045,
    "tier": "L3",
    "dependsOn": [
      "automobile",
      "drone",
      "self_driving",
      "automation"
    ],
    "summary": "陆空一体、垂直起降的个人飞行器，受电池、空域与安全的共同约束，它建立在汽车、无人机、自动驾驶之上，约 约 2045 年（L3·未来可能实现） 出现于未来/科幻，把交通运载的相关能力第一次稳定下来，是后来技术谱系的基础环节。"
  },
  {
    "id": "brain_emulation",
    "name": "大脑仿真",
    "en": "Brain Emulation",
    "category": "info",
    "era": "future",
    "date": "约 2080 年（L4·未来较难实现）",
    "year": 2080,
    "tier": "L4",
    "dependsOn": [
      "neuroscience",
      "simulation",
      "sensor"
    ],
    "summary": "在算力上复现人脑的连接与动力学，是意识相关议题的物理前提之一，依托神经科学、仿真、传感器，它在未来/科幻（约 2080 年（L4·未来较难实现））把相关能力从经验推向方法，成为信息通信中承上启下的一环，直接催生了意识上传、记忆提取等发展。"
  },
  {
    "id": "mind_upload",
    "name": "意识上传",
    "en": "Mind Uploading",
    "category": "info",
    "era": "future",
    "date": "约 2090 年（L4·未来较难实现）",
    "year": 2090,
    "tier": "L4",
    "dependsOn": [
      "brain_emulation",
      "bio_bci",
      "computer"
    ],
    "summary": "把心智的结构与状态转入载体，使人格脱离生物脑存续，伦理与同一性存疑，它建立在大脑仿真、脑机接口、电子计算机之上，约 约 2090 年（L4·未来较难实现） 成形于未来/科幻，把信息通信中的关键能力落到实处，并直接支撑了数字生命等后续技术。"
  },
  {
    "id": "digital_life",
    "name": "数字生命",
    "en": "Digital Life",
    "category": "info",
    "era": "future",
    "date": "约 2095 年（L4·未来较难实现）",
    "year": 2095,
    "tier": "L4",
    "dependsOn": [
      "agi",
      "mind_upload",
      "virtual_world"
    ],
    "summary": "在算力中自维持、繁衍与演化的智能体，构成脱离碳基的生态，依托通用人工智能、意识上传、虚拟世界，它在未来/科幻（约 2095 年（L4·未来较难实现））解决了信息通信中的具体难题，使相应能力得以被反复复用。"
  },
  {
    "id": "programmable_matter",
    "name": "可编程物质",
    "en": "Programmable Matter",
    "category": "material",
    "era": "future",
    "date": "约 2085 年（L4·未来较难实现）",
    "year": 2085,
    "tier": "L4",
    "dependsOn": [
      "metamaterial",
      "nanotech",
      "ai"
    ],
    "summary": "物质按指令自重组形态与功能，使一件物体可变为任意所需之物，依托超材料、纳米技术、人工智能，它在未来/科幻（约 2085 年（L4·未来较难实现））解决了材料体系中的具体难题，使相应能力得以被反复复用。"
  },
  {
    "id": "atomic_manufacturing",
    "name": "原子级制造",
    "en": "Atomic-scale Manufacturing",
    "category": "manufact",
    "era": "future",
    "date": "约 2080 年（L4·未来较难实现）",
    "year": 2080,
    "tier": "L4",
    "dependsOn": [
      "nanotech",
      "materials",
      "simulation"
    ],
    "summary": "逐个安放原子构筑器件，逼近物理极限的精度，但通量与误差控制极难，它建立在纳米技术、材料科学、仿真之上，约 约 2080 年（L4·未来较难实现） 成形于未来/科幻，把制造与工具中的关键能力落到实处，并直接支撑了分子装配等后续技术。"
  },
  {
    "id": "molecular_assembly",
    "name": "分子装配",
    "en": "Molecular Assembly",
    "category": "manufact",
    "era": "future",
    "date": "约 2085 年（L4·未来较难实现）",
    "year": 2085,
    "tier": "L4",
    "dependsOn": [
      "nanotech",
      "chemistry",
      "atomic_manufacturing"
    ],
    "summary": "以可控的化学反应逐键搭建宏观物体，理论上可廉价造出任意结构，依托纳米技术、化学、原子级制造，它在未来/科幻（约 2085 年（L4·未来较难实现））解决了制造与工具中的具体难题，使相应能力得以被反复复用。"
  },
  {
    "id": "self_replicating",
    "name": "自复制机器",
    "en": "Self-replicating Machine",
    "category": "manufact",
    "era": "future",
    "date": "约 2080 年（L4·未来较难实现）",
    "year": 2080,
    "tier": "L4",
    "dependsOn": [
      "robot",
      "ai",
      "mfg_3dp"
    ],
    "summary": "能自行采集资源、复制自身的机器集群，是大规模太空作业的杠杆，依托工业机器人、人工智能、3D 打印，它在未来/科幻（约 2080 年（L4·未来较难实现））把相关能力从经验推向方法，成为制造与工具中承上启下的一环，直接催生了冯·诺依曼探测器等发展。"
  },
  {
    "id": "fusion_rocket",
    "name": "聚变火箭",
    "en": "Fusion Rocket",
    "category": "transport",
    "era": "future",
    "date": "约 2085 年（L4·未来较难实现）",
    "year": 2085,
    "tier": "L4",
    "dependsOn": [
      "fusion_power",
      "rocket",
      "propulsion"
    ],
    "summary": "以聚变能高速排出工质，获得远超化学与核热的比冲，开启外行星时代，依托聚变发电、火箭、推进，它在未来/科幻（约 2085 年（L4·未来较难实现））解决了交通运载中的具体难题，使相应能力得以被反复复用。"
  },
  {
    "id": "orbital_ring",
    "name": "轨道环",
    "en": "Orbital Ring",
    "category": "transport",
    "era": "future",
    "date": "约 2090 年（L4·未来较难实现）",
    "year": 2090,
    "tier": "L4",
    "dependsOn": [
      "space_elevator",
      "spacecraft",
      "materials"
    ],
    "summary": "以环绕地球的高速缆环借离心力悬浮，提供近乎无限的低成本入轨通道，它建立在太空电梯、航天器、材料科学之上，约 约 2090 年（L4·未来较难实现） 出现于未来/科幻，把交通运载的相关能力第一次稳定下来，是后来技术谱系的基础环节。"
  },
  {
    "id": "antimatter_energy",
    "name": "反物质能源",
    "en": "Antimatter Energy",
    "category": "energy",
    "era": "future",
    "date": "约 2090 年（L4·未来较难实现）",
    "year": 2090,
    "tier": "L4",
    "dependsOn": [
      "particle_physics",
      "superconductor"
    ],
    "summary": "正反物质湮灭释放质能，能量密度冠绝一切，但制备与封存成本高到离谱，它建立在粒子物理、超导体之上，约 约 2090 年（L4·未来较难实现） 出现于未来/科幻，把能量形式的相关能力第一次稳定下来，是后来技术谱系的基础环节。"
  },
  {
    "id": "dyson_sphere",
    "name": "戴森球",
    "en": "Dyson Sphere",
    "category": "energy",
    "era": "future",
    "date": "约 2100 年（L4·未来较难实现）",
    "year": 2100,
    "tier": "L4",
    "dependsOn": [
      "solar",
      "space_mfg",
      "starship"
    ],
    "summary": "以巨量结构包覆恒星收集其全部辐射，是文明能级跃升的标杆工程，依托太阳能光伏、太空制造、巨型火箭，它在未来/科幻（约 2100 年（L4·未来较难实现））把相关能力从经验推向方法，成为能量形式中承上启下的一环，直接催生了恒星发动机等发展。"
  },
  {
    "id": "von_neumann",
    "name": "冯·诺依曼探测器",
    "en": "Von Neumann Probe",
    "category": "transport",
    "era": "future",
    "date": "约 2090 年（L4·未来较难实现）",
    "year": 2090,
    "tier": "L4",
    "dependsOn": [
      "self_replicating",
      "agi",
      "space_mfg"
    ],
    "summary": "能自我复制并扩散至恒星系的无人探测器，是星际探查的指数杠杆，它建立在自复制机器、通用人工智能、太空制造之上，约 约 2090 年（L4·未来较难实现） 出现于未来/科幻，把交通运载的相关能力第一次稳定下来，是后来技术谱系的基础环节。"
  },
  {
    "id": "memory_extract",
    "name": "记忆提取",
    "en": "Memory Extraction",
    "category": "info",
    "era": "future",
    "date": "约 2090 年（L4·未来较难实现）",
    "year": 2090,
    "tier": "L4",
    "dependsOn": [
      "neuroscience",
      "brain_emulation",
      "bio_bci"
    ],
    "summary": "以高分辨读脑还原特定记忆片段，可用于取证、治疗，亦威胁内心私密，依托神经科学、大脑仿真、脑机接口，它在未来/科幻（约 2090 年（L4·未来较难实现））解决了信息通信中的具体难题，使相应能力得以被反复复用。"
  },
  {
    "id": "orbital_strike",
    "name": "轨道打击",
    "en": "Orbital Strike",
    "category": "military",
    "era": "future",
    "date": "约 2080 年（L4·未来较难实现）",
    "year": 2080,
    "tier": "L4",
    "dependsOn": [
      "starship",
      "hypersonic",
      "gps"
    ],
    "summary": "从轨道投送高速动能或定向能载荷，实现全球到达与瞬时打击，它建立在巨型火箭、高超声速飞行、全球卫星定位 GNSS之上，约 约 2080 年（L4·未来较难实现） 出现于未来/科幻，把军事技术的相关能力第一次稳定下来，是后来技术谱系的基础环节。"
  },
  {
    "id": "exotic_matter",
    "name": "奇异物质",
    "en": "Exotic Matter",
    "category": "basic",
    "era": "future",
    "date": "设想（L5·仅在该世界观）",
    "year": 2150,
    "tier": "L5",
    "dependsOn": [
      "particle_physics",
      "quantum_field"
    ],
    "summary": "具负质量或负能量的理论物质，用以撑开曲速泡与虫洞，现实中尚未现身，它建立在粒子物理、量子场论之上，约 设想（L5·仅在该世界观） 成形于未来/科幻，把科学基础与方法中的关键能力落到实处，并直接支撑了曲速引擎、虫洞等后续技术。"
  },
  {
    "id": "warp_drive",
    "name": "曲速引擎",
    "en": "Warp Drive",
    "category": "transport",
    "era": "future",
    "date": "设想（L5·仅在该世界观）",
    "year": 2150,
    "tier": "L5",
    "dependsOn": ["spacetime", "general_relativity"],
    "summary": "压缩前方、膨胀后方的时空泡，使表观超光速航行而不违背局域光速，需负能量支撑，依托时空、奇异物质、广义相对论，它在未来/科幻（设想（L5·仅在该世界观））把相关能力从经验推向方法，成为交通运载中承上启下的一环，直接催生了超光速通讯等发展。"
  },
  {
    "id": "wormhole",
    "name": "虫洞",
    "en": "Wormhole",
    "category": "basic",
    "era": "future",
    "date": "设想（L5·仅在该世界观）",
    "year": 2150,
    "tier": "L5",
    "dependsOn": [
      "spacetime",
      "exotic_matter",
      "general_relativity"
    ],
    "summary": "连接两点的时空捷径，穿越它需以奇异物质维持喉部开放，属理论构造，依托时空、奇异物质、广义相对论，它在未来/科幻（设想（L5·仅在该世界观））解决了科学基础与方法中的具体难题，使相应能力得以被反复复用。"
  },
  {
    "id": "ftl_comm",
    "name": "超光速通讯",
    "en": "Faster-than-light Communication",
    "category": "info",
    "era": "future",
    "date": "设想（L5·仅在该世界观）",
    "year": 2150,
    "tier": "L5",
    "dependsOn": ["quantum_entanglement", "spacetime"],
    "summary": "借纠缠或非局域通道瞬时传递信息，绕开光速延迟，依赖该世界观的特殊规则，依托量子纠缠、时空、曲速引擎，它在未来/科幻（设想（L5·仅在该世界观））解决了信息通信中的具体难题，使相应能力得以被反复复用。"
  },
  {
    "id": "teleportation",
    "name": "物质传送",
    "en": "Teleportation",
    "category": "info",
    "era": "future",
    "date": "设想（L5·仅在该世界观）",
    "year": 2150,
    "tier": "L5",
    "dependsOn": [
      "quantum_teleportation",
      "sensor",
      "mfg_3dp"
    ],
    "summary": "扫描源物并以量子态在远端重建，需完美读取与重组，现实中受不可克隆与退相干限制，它建立在量子隐形传态、传感器、3D 打印之上，约 设想（L5·仅在该世界观） 出现于未来/科幻，把信息通信的相关能力第一次稳定下来，是后来技术谱系的基础环节。"
  },
  {
    "id": "stellar_engine",
    "name": "恒星发动机",
    "en": "Stellar Engine",
    "category": "energy",
    "era": "future",
    "date": "设想（L5·仅在该世界观）",
    "year": 2160,
    "tier": "L5",
    "dependsOn": [
      "dyson_sphere",
      "space_mfg",
      "propulsion"
    ],
    "summary": "以恒星级结构调动整颗恒星的位置与能量，是文明操纵银河尺度的终极工程，它建立在戴森球、太空制造、推进之上，约 设想（L5·仅在该世界观） 出现于未来/科幻，把能量形式的相关能力第一次稳定下来，是后来技术谱系的基础环节。"
  },
  {
    "id": "black_hole_comp",
    "name": "黑洞计算",
    "en": "Black-hole Computing",
    "category": "basic",
    "era": "future",
    "date": "设想（L5·仅在该世界观）",
    "year": 2160,
    "tier": "L5",
    "dependsOn": [
      "black_hole",
      "physics",
      "quantum_info"
    ],
    "summary": "以黑洞视界附近的物理做信息加工，借极致时空曲率逼近计算与熵的极限，纯属推想，它建立在黑洞、经典力学、量子信息之上，约 设想（L5·仅在该世界观） 出现于未来/科幻，把科学基础与方法的相关能力第一次稳定下来，是后来技术谱系的基础环节。"
  }
];
