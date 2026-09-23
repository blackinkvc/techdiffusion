# 边准确率抽样复核 · 20260915

> 生成工具 `tools/sample_edges.js`（种子 20260915，抽样 200 / 全库 6182 条边）。
> **怎么用**：打开同目录的 `edge_sample_20260915.tsv`，在「你的判定(y/n/u)」列填 **y**（关系成立）/ **n**（关系错误）/ **u**（不确定），
> 可选填「备注」。填完跑 `node tools/sample_edges.js --score` 得到准确率。
> 「机器初判」只依据**结构性信号**（年份间隔 / 分类 / 是否枢纽），**不看语义** ——「较可信」只表示没有机械可疑信号，不代表语义正确。

## 分层与抽样数

| 层（枢纽 / 同域） | 全库条数 | 本表抽到 |
|---|---|---|
| 前置非枢纽 · 同分类 | 2285 | 74 |
| 前置为枢纽 · 跨分类 | 1948 | 63 |
| 前置非枢纽 · 跨分类 | 1333 | 43 |
| 前置为枢纽 · 同分类 | 616 | 20 |

## 抽样清单

| # | 依赖者 | 分类·年 | 前置 | 分类·年 | 跨度 | 机器初判 | 依据 |
|---|---|---|---|---|---|---|---|
| 1 | 生物化学 `biochem` | basic·1890 | 文字 `writing` | info·-3200 | 5090 | 待查 | 前置为 14 个维度顶点（A/E 族问题区） |
| 2 | 因子图 `bx_math_103` | basic·1950 | 数值分析 `numerical` | basic·1950 | 0 | 疑 | 同年前置；前置为 14 个维度顶点（A/E 族问题区） |
| 3 | 代数几何 `bx_math_18` | basic·1950 | 数值分析 `numerical` | basic·1950 | 0 | 疑 | 同年前置；前置为 14 个维度顶点（A/E 族问题区） |
| 4 | 凸优化 `bx_math_3` | basic·1950 | 统计学 `statistics` | basic·1809 | 141 | 待查 | 前置为 14 个维度顶点（A/E 族问题区） |
| 5 | 李代数 `bx_math_32` | basic·1950 | 数学 `mathematics` | basic·-3000 | 4950 | 待查 | 前置为 14 个维度顶点（A/E 族问题区） |
| 6 | 李群 `bx_math_33` | basic·1950 | 统计学 `statistics` | basic·1809 | 141 | 待查 | 前置为 14 个维度顶点（A/E 族问题区） |
| 7 | 类型论 `bx_math_40` | basic·1950 | 数值分析 `numerical` | basic·1950 | 0 | 疑 | 同年前置；前置为 14 个维度顶点（A/E 族问题区） |
| 8 | 参数化复杂性 `bx_math_42` | basic·1950 | 统计学 `statistics` | basic·1809 | 141 | 待查 | 前置为 14 个维度顶点（A/E 族问题区） |
| 9 | 泛函分析 `bx_math_44` | basic·1950 | 数值分析 `numerical` | basic·1950 | 0 | 疑 | 同年前置；前置为 14 个维度顶点（A/E 族问题区） |
| 10 | 布朗运动 `bx_math_51` | basic·1950 | 数值分析 `numerical` | basic·1950 | 0 | 疑 | 同年前置；前置为 14 个维度顶点（A/E 族问题区） |
| 11 | 随机微分方程 `bx_math_53` | basic·1950 | 统计学 `statistics` | basic·1809 | 141 | 待查 | 前置为 14 个维度顶点（A/E 族问题区） |
| 12 | 可靠性理论 `bx_math_56` | basic·1950 | 最优化/线性规划 `optimization` | basic·1947 | 3 | 疑 | 年份仅隔 3 年；前置为 14 个维度顶点（A/E 族问题区） |
| 13 | 生存分析 `bx_math_57` | basic·1950 | 统计学 `statistics` | basic·1809 | 141 | 待查 | 前置为 14 个维度顶点（A/E 族问题区） |
| 14 | 蒙特卡洛方法 `bx_math_70` | basic·1950 | 数值分析 `numerical` | basic·1950 | 0 | 疑 | 同年前置；前置为 14 个维度顶点（A/E 族问题区） |
| 15 | 字典学习 `bx_math_86` | basic·1950 | 最优化/线性规划 `optimization` | basic·1947 | 3 | 疑 | 年份仅隔 3 年；前置为 14 个维度顶点（A/E 族问题区） |
| 16 | 核方法 `bx_math_93` | basic·1950 | 最优化/线性规划 `optimization` | basic·1947 | 3 | 疑 | 年份仅隔 3 年；前置为 14 个维度顶点（A/E 族问题区） |
| 17 | 拓扑光子学 `bx_phys_11` | basic·1950 | 固体力学 `solid_mech` | basic·1700 | 250 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 18 | 冷原子物理 `bx_phys_15` | basic·1950 | 统计力学 `stat_mech` | basic·1872 | 78 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 19 | 费米气体 `bx_phys_17` | basic·1950 | 经典力学 `physics` | basic·1687 | 263 | 待查 | 前置为 14 个维度顶点（A/E 族问题区） |
| 20 | 格点规范理论 `bx_phys_24` | basic·1950 | 固体力学 `solid_mech` | basic·1700 | 250 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 21 | 格点规范理论 `bx_phys_24` | basic·1950 | 统计力学 `stat_mech` | basic·1872 | 78 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 22 | 弦论 `bx_phys_25` | basic·1950 | 经典力学 `physics` | basic·1687 | 263 | 待查 | 前置为 14 个维度顶点（A/E 族问题区） |
| 23 | AdS/CFT 对偶 `bx_phys_28` | basic·1950 | 统计力学 `stat_mech` | basic·1872 | 78 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 24 | 涨落定理 `bx_phys_33` | basic·1950 | 固体力学 `solid_mech` | basic·1700 | 250 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 25 | 福克-普朗克方程 `bx_phys_35` | basic·1950 | 固体力学 `solid_mech` | basic·1700 | 250 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 26 | 非牛顿流体 `bx_phys_41` | basic·1950 | 量子力学 `quantum_mech` | basic·1925 | 25 | 待查 | 同分类且年份很近（疑似同义/同类节点自指） |
| 27 | 湍流理论 `bx_phys_42` | basic·1950 | 固体力学 `solid_mech` | basic·1700 | 250 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 28 | 等离子体约束 `bx_phys_45` | basic·1950 | 经典力学 `physics` | basic·1687 | 263 | 待查 | 前置为 14 个维度顶点（A/E 族问题区） |
| 29 | 拓扑序 `bx_phys_52` | basic·1950 | 量子力学 `quantum_mech` | basic·1925 | 25 | 待查 | 同分类且年份很近（疑似同义/同类节点自指） |
| 30 | 磁子学 `bx_phys_9` | basic·1950 | 固体力学 `solid_mech` | basic·1700 | 250 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 31 | 分子学说 `molecular_theory` | basic·1811 | 文字 `writing` | info·-3200 | 5011 | 待查 | 前置为 14 个维度顶点（A/E 族问题区） |
| 32 | 神经科学 `neuroscience` | basic·1890 | 文字 `writing` | info·-3200 | 5090 | 待查 | 前置为 14 个维度顶点（A/E 族问题区） |
| 33 | 数值分析 `numerical` | basic·1950 | 最优化/线性规划 `optimization` | basic·1947 | 3 | 疑 | 年份仅隔 3 年；前置为 14 个维度顶点（A/E 族问题区） |
| 34 | 粒子物理 `particle_physics` | basic·1930 | 相对论与量子力学 `relativity_qm` | basic·1905 | 25 | 待查 | 同分类且年份很近（疑似同义/同类节点自指） |
| 35 | 位值制计数法 `positional` | basic·600 | 零的概念 `zero_concept` | basic·500 | 100 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 36 | 证明论 `proof_theory` | basic·1900 | 数学 `mathematics` | basic·-3000 | 4900 | 待查 | 前置为 14 个维度顶点（A/E 族问题区） |
| 37 | 波动光学 `wave_optics` | basic·1678 | 文字 `writing` | info·-3200 | 4878 | 待查 | 前置为 14 个维度顶点（A/E 族问题区） |
| 38 | 天然采光 `bd_civ_110` | build·2000 | 建筑学 `architecture` | build·-3000 | 5000 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 39 | 碳纤维加固 `bd_civ_130` | build·2000 | 砌筑 `masonry` | build·-5000 | 7000 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 40 | 外包钢加固 `bd_civ_131` | build·2000 | 建筑学 `architecture` | build·-3000 | 5000 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 41 | 裂缝修补 `bd_civ_134` | build·2000 | 砌筑 `masonry` | build·-5000 | 7000 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 42 | 双层呼吸幕墙 `bd_civ_137` | build·2000 | 砌筑 `masonry` | build·-5000 | 7000 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 43 | 相变蓄热墙体 `bd_civ_146` | build·2000 | 砌筑 `masonry` | build·-5000 | 7000 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 44 | 数字孪生城市 `bd_civ_15` | build·2000 | 砌筑 `masonry` | build·-5000 | 7000 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 45 | 加压送风 `bd_civ_160` | build·2000 | 工程学 `engineering` | basic·-3000 | 5000 | 待查 | 前置为 14 个维度顶点（A/E 族问题区） |
| 46 | 深基坑监测 `bd_civ_21` | build·2000 | 砌筑 `masonry` | build·-5000 | 7000 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 47 | 边坡监测 `bd_civ_22` | build·2000 | 砌筑 `masonry` | build·-5000 | 7000 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 48 | 雨水花园 `bd_civ_33` | build·2000 | 工程学 `engineering` | basic·-3000 | 5000 | 待查 | 前置为 14 个维度顶点（A/E 族问题区） |
| 49 | 调蓄池 `bd_civ_37` | build·2000 | 工程学 `engineering` | basic·-3000 | 5000 | 待查 | 前置为 14 个维度顶点（A/E 族问题区） |
| 50 | 屋顶农场 `bd_civ_41` | build·2000 | 砌筑 `masonry` | build·-5000 | 7000 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 51 | 模块化桥 `bd_civ_72` | build·2000 | 工程学 `engineering` | basic·-3000 | 5000 | 待查 | 前置为 14 个维度顶点（A/E 族问题区） |
| 52 | 被动控制 `bd_civ_91` | build·2000 | 工程学 `engineering` | basic·-3000 | 5000 | 待查 | 前置为 14 个维度顶点（A/E 族问题区） |
| 53 | 斗拱 `bld_dougong` | build·-500 | 木作 `woodworking` | manufact·-300000 | 299500 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 54 | 地源热泵建筑 `bld_geothermal2` | build·1980 | 热泵 `ene_heatpump` | energy·1852 | 128 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 55 | 筒体结构 `bld_tube` | build·1960 | 钢结构 `steel_frame` | build·1885 | 75 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 56 | 钢结构 `steel_frame` | build·1885 | 钢铁 `steel` | material·-1000 | 2885 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 57 | 戴森球 `dyson_sphere` | energy·2100 | 太阳能光伏 `solar` | energy·1954 | 146 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 58 | 镍铁电池 `en_bat_12` | energy·1990 | 铅酸电池 `ene_leadacid` | energy·1859 | 131 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 59 | 全固态电池应用 `en_bat_15` | energy·1990 | 化学 `chemistry` | basic·1661 | 329 | 待查 | 前置为 14 个维度顶点（A/E 族问题区） |
| 60 | 全固态电池应用 `en_bat_15` | energy·1990 | 铅酸电池 `ene_leadacid` | energy·1859 | 131 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 61 | 可拉伸电池 `en_bat_19` | energy·1990 | 电力系统 `electricity` | energy·1879 | 111 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 62 | 软包电池 `en_bat_25` | energy·1990 | 化学 `chemistry` | basic·1661 | 329 | 待查 | 前置为 14 个维度顶点（A/E 族问题区） |
| 63 | 硅氧负极 `en_bat_29` | energy·1990 | 铅酸电池 `ene_leadacid` | energy·1859 | 131 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 64 | 无钴电池 `en_bat_57` | energy·1990 | 电池 `battery` | energy·1800 | 190 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 65 | 质子交换膜燃料电池 `en_h2_0` | energy·1970 | 燃烧 `combustion` | energy·1800 | 170 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 66 | 快中子增殖堆 `ene_fastbreeder` | energy·1951 | 经典力学 `physics` | basic·1687 | 264 | 待查 | 前置为 14 个维度顶点（A/E 族问题区） |
| 67 | 干热岩 `ene_hotdry` | energy·1970 | 经典力学 `physics` | basic·1687 | 283 | 待查 | 前置为 14 个维度顶点（A/E 族问题区） |
| 68 | 光伏电池 `ene_pv` | energy·1954 | 化学 `chemistry` | basic·1661 | 293 | 待查 | 前置为 14 个维度顶点（A/E 族问题区） |
| 69 | 固态电池 `ene_solidstate` | energy·2010 | 化学 `chemistry` | basic·1661 | 349 | 待查 | 前置为 14 个维度顶点（A/E 族问题区） |
| 70 | 固态电池 `ene_solidstate` | energy·2010 | 经典力学 `physics` | basic·1687 | 323 | 待查 | 前置为 14 个维度顶点（A/E 族问题区） |
| 71 | 热电池 `ene_thermalbattery` | energy·1980 | 经典力学 `physics` | basic·1687 | 293 | 待查 | 前置为 14 个维度顶点（A/E 族问题区） |
| 72 | 奇点发动机 `fut_singularity_engine` | energy·2160 | 太阳能光伏 `solar` | energy·1954 | 206 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 73 | 发电厂 `power_plant` | energy·1882 | 锅炉 `boiler` | energy·1765 | 117 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 74 | 数码相机 / 图像传感器 `camera` | info·1975 | 电池 `battery` | energy·1800 | 175 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 75 | 电子管计算机 `eniac` | info·1946 | 电子管 `vacuum_tube` | info·1904 | 42 | 待查 | 同分类且年份很近（疑似同义/同类节点自指） |
| 76 | 物质传送网 `fut_teleportation_net` | info·2150 | 电子计算机 `computer` | info·1946 | 204 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 77 | 超文本传输协议 `http` | info·1991 | TCP/IP协议 `tcpip` | info·1981 | 10 | 待查 | 同分类且年份很近（疑似同义/同类节点自指） |
| 78 | 同态加密 `inf_homomorphic` | info·2009 | 数学 `mathematics` | basic·-3000 | 5009 | 待查 | 前置为 14 个维度顶点（A/E 族问题区） |
| 79 | 油印 `inf_mimeograph` | info·1870 | 数学 `mathematics` | basic·-3000 | 4870 | 待查 | 前置为 14 个维度顶点（A/E 族问题区） |
| 80 | 协同过滤 `inf_recommend2` | info·1992 | 算法理论 `algorithm` | basic·825 | 1167 | 疑 | 前置为 14 个维度顶点（A/E 族问题区）；跨分类且跨度 > 800 年（F 族口径） |
| 81 | 字典树 `it_alg_10` | info·1970 | 电子计算机 `computer` | info·1946 | 24 | 待查 | 同分类且年份很近（疑似同义/同类节点自指） |
| 82 | 红黑树 `it_alg_12` | info·1970 | 数学 `mathematics` | basic·-3000 | 4970 | 待查 | 前置为 14 个维度顶点（A/E 族问题区） |
| 83 | 位图索引 `it_alg_17` | info·1970 | 算法理论 `algorithm` | basic·825 | 1145 | 疑 | 前置为 14 个维度顶点（A/E 族问题区）；跨分类且跨度 > 800 年（F 族口径） |
| 84 | 列存索引 `it_alg_18` | info·1970 | 数学 `mathematics` | basic·-3000 | 4970 | 待查 | 前置为 14 个维度顶点（A/E 族问题区） |
| 85 | 联邦学习 `it_alg_41` | info·1970 | 数学 `mathematics` | basic·-3000 | 4970 | 待查 | 前置为 14 个维度顶点（A/E 族问题区） |
| 86 | 领域自适应 `it_alg_43` | info·1970 | 电子计算机 `computer` | info·1946 | 24 | 待查 | 同分类且年份很近（疑似同义/同类节点自指） |
| 87 | 依存句法 `it_alg_53` | info·1970 | 电子计算机 `computer` | info·1946 | 24 | 待查 | 同分类且年份很近（疑似同义/同类节点自指） |
| 88 | 自动机器学习 `it_alg_67` | info·1970 | 电子计算机 `computer` | info·1946 | 24 | 待查 | 同分类且年份很近（疑似同义/同类节点自指） |
| 89 | 对抗训练 `it_alg_73` | info·1970 | 数学 `mathematics` | basic·-3000 | 4970 | 待查 | 前置为 14 个维度顶点（A/E 族问题区） |
| 90 | 可验证计算 `it_alg_84` | info·1970 | 数学 `mathematics` | basic·-3000 | 4970 | 待查 | 前置为 14 个维度顶点（A/E 族问题区） |
| 91 | 后缀数组 `it_alg_9` | info·1970 | 电子计算机 `computer` | info·1946 | 24 | 待查 | 同分类且年份很近（疑似同义/同类节点自指） |
| 92 | 光纤 `optic_fiber` | info·1970 | 玻璃 `mat_glass` | material·-2500 | 4470 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 93 | 义齿 `bio_denture` | life·-500 | 数学 `mathematics` | basic·-3000 | 2500 | 待查 | 前置为 14 个维度顶点（A/E 族问题区） |
| 94 | 外骨骼 `bio_exoskeleton` | life·2000 | 康复机器人 `bio_reharobot` | life·2000 | 0 | 疑 | 同年前置；同分类且年份很近（疑似同义/同类节点自指） |
| 95 | 发酵工程 `bio_fermentation` | life·1900 | 化学 `chemistry` | basic·1661 | 239 | 待查 | 前置为 14 个维度顶点（A/E 族问题区） |
| 96 | 液体活检 `bio_liquidbiopsy` | life·2010 | 电子计算机 `computer` | info·1946 | 64 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 97 | 单克隆抗体 `bio_monoclonal` | life·1975 | 数学 `mathematics` | basic·-3000 | 4975 | 待查 | 前置为 14 个维度顶点（A/E 族问题区） |
| 98 | 器官芯片 `bio_organonchip` | life·2010 | 化学 `chemistry` | basic·1661 | 349 | 待查 | 前置为 14 个维度顶点（A/E 族问题区） |
| 99 | 精准医疗 `bio_precisionmed` | life·2010 | 遗传学 `genetics` | basic·1865 | 145 | 待查 | 前置为 14 个维度顶点（A/E 族问题区） |
| 100 | 放射治疗 `bio_radiotherapy` | life·1900 | 化学 `chemistry` | basic·1661 | 239 | 待查 | 前置为 14 个维度顶点（A/E 族问题区） |
| 101 | 合成生物学 `bio_synbio` | life·2000 | 遗传学 / DNA `dna` | life·1953 | 47 | 待查 | 同分类且年份很近（疑似同义/同类节点自指） |
| 102 | 通用疫苗 `bio_universalvax` | life·2020 | 化学 `chemistry` | basic·1661 | 359 | 待查 | 前置为 14 个维度顶点（A/E 族问题区） |
| 103 | 基因电路 `gene_circuit` | life·2050 | 合成生物学 `bio_synbio` | life·2000 | 50 | 待查 | 同分类且年份很近（疑似同义/同类节点自指） |
| 104 | 基因工程 `genetic_engineering` | life·1973 | 生物技术 `biotech` | life·1910 | 63 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 105 | 纳米抗体 `lf_bio_24` | life·2000 | 发酵 `fermentation` | life·-7000 | 9000 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 106 | 抗体工程 `lf_bio_28` | life·2000 | 免疫学 `immunology` | basic·1798 | 202 | 待查 | 前置为 14 个维度顶点（A/E 族问题区） |
| 107 | 洗涤酶 `lf_bio_44` | life·2000 | 免疫学 `immunology` | basic·1798 | 202 | 待查 | 前置为 14 个维度顶点（A/E 族问题区） |
| 108 | 固态发酵 `lf_bio_50` | life·2000 | 免疫学 `immunology` | basic·1798 | 202 | 待查 | 前置为 14 个维度顶点（A/E 族问题区） |
| 109 | 厌氧发酵 `lf_bio_52` | life·2000 | 发酵 `fermentation` | life·-7000 | 9000 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 110 | 补料分批发酵 `lf_bio_54` | life·2000 | 发酵 `fermentation` | life·-7000 | 9000 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 111 | 连续发酵 `lf_bio_55` | life·2000 | 遗传学 `genetics` | basic·1865 | 135 | 待查 | 前置为 14 个维度顶点（A/E 族问题区） |
| 112 | 密码子优化 `lf_bio_61` | life·2000 | 发酵 `fermentation` | life·-7000 | 9000 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 113 | 类器官培养 `lf_bio_71` | life·2000 | 免疫学 `immunology` | basic·1798 | 202 | 待查 | 前置为 14 个维度顶点（A/E 族问题区） |
| 114 | 器官芯片灌流 `lf_bio_72` | life·2000 | 免疫学 `immunology` | basic·1798 | 202 | 待查 | 前置为 14 个维度顶点（A/E 族问题区） |
| 115 | 生物墨水 `lf_bio_74` | life·2000 | 免疫学 `immunology` | basic·1798 | 202 | 待查 | 前置为 14 个维度顶点（A/E 族问题区） |
| 116 | 脱细胞基质 `lf_bio_76` | life·2000 | 免疫学 `immunology` | basic·1798 | 202 | 待查 | 前置为 14 个维度顶点（A/E 族问题区） |
| 117 | 循环肿瘤 DNA `lf_dx_1` | life·2005 | 无菌外科 `surgery` | life·1867 | 138 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 118 | 伴随诊断 `lf_dx_17` | life·2005 | 分子生物学 `molecular_bio` | basic·1953 | 52 | 待查 | 前置为 14 个维度顶点（A/E 族问题区） |
| 119 | 卫生技术评估 `lf_dx_28` | life·2005 | 互联网 `internet` | info·1969 | 36 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 120 | 在线问诊 `lf_dx_34` | life·2005 | 互联网 `internet` | info·1969 | 36 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 121 | 生物制品追溯 `lf_dx_38` | life·2005 | 分子生物学 `molecular_bio` | basic·1953 | 52 | 待查 | 前置为 14 个维度顶点（A/E 族问题区） |
| 122 | 日间手术 `lf_dx_47` | life·2005 | 分子生物学 `molecular_bio` | basic·1953 | 52 | 待查 | 前置为 14 个维度顶点（A/E 族问题区） |
| 123 | 神经康复 `lf_dx_64` | life·2005 | 分子生物学 `molecular_bio` | basic·1953 | 52 | 待查 | 前置为 14 个维度顶点（A/E 族问题区） |
| 124 | 缓和医疗 `lf_dx_74` | life·2005 | 分子生物学 `molecular_bio` | basic·1953 | 52 | 待查 | 前置为 14 个维度顶点（A/E 族问题区） |
| 125 | 智慧养老 `lf_dx_76` | life·2005 | 互联网 `internet` | info·1969 | 36 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 126 | 情绪监测 `lf_dx_85` | life·2005 | 无菌外科 `surgery` | life·1867 | 138 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 127 | 放射组学 `lf_dx_9` | life·2005 | 分子生物学 `molecular_bio` | basic·1953 | 52 | 待查 | 前置为 14 个维度顶点（A/E 族问题区） |
| 128 | 智能割草机器人 `smart_mower` | life·2015 | 激光雷达 `lidar` | transport·2005 | 10 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 129 | 纳米装配工厂 `fut_nano_assembly_plant` | manufact·2050 | 自动化 `automation` | manufact·1950 | 100 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 130 | 数控机床 `mfg_cnc` | manufact·1949 | 伺服系统 `mfg_servo` | manufact·1940 | 9 | 待查 | 同分类且年份很近（疑似同义/同类节点自指） |
| 131 | 拉伸成形 `mfg_drawing2` | manufact·1800 | 冲压 `mfg_stamping` | manufact·1800 | 0 | 疑 | 同年前置；同分类且年份很近（疑似同义/同类节点自指） |
| 132 | 电解加工 `mfg_ecm` | manufact·1950 | 电力系统 `electricity` | energy·1879 | 71 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 133 | 电火花加工 `mfg_edm` | manufact·1943 | 电力系统 `electricity` | energy·1879 | 64 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 134 | 搅拌摩擦焊 `mfg_fsw` | manufact·1991 | 铣床 `mfg_mill` | manufact·1818 | 173 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 135 | 电阻焊 `mfg_resistweld` | manufact·1877 | 发电机与电动机 `generator` | energy·1831 | 46 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 136 | 喷丸 `mfg_shotblast` | manufact·1930 | 磨料 `mfg_abrasive` | manufact·-5000 | 6930 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 137 | 六西格玛 `mfg_sixsigma` | manufact·1986 | 统计过程控制 `mfg_spcc` | manufact·1924 | 62 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 138 | 超精密加工 `mfg_ultraprecise` | manufact·1960 | 车床与精密加工 `lathe` | manufact·1751 | 209 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 139 | 激光加工应用 `mn_proc_10` | manufact·1970 | 车床与精密加工 `lathe` | manufact·1751 | 219 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 140 | 离子束抛光 `mn_proc_2` | manufact·1970 | 电子学 `electronics` | info·1883 | 87 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 141 | 水射流加工应用 `mn_proc_8` | manufact·1970 | 自动化 `automation` | manufact·1950 | 20 | 待查 | 同分类且年份很近（疑似同义/同类节点自指） |
| 142 | 无人工厂 `robot_factory` | manufact·2030 | 人工智能 `ai` | info·1956 | 74 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 143 | 高熵合金 `high_entropy_alloy` | material·2030 | 冶金 `metallurgy` | material·-5000 | 7030 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 144 | 连续铸造 `mat_continuouscast` | material·1840 | 化学 `chemistry` | basic·1661 | 179 | 待查 | 前置为 14 个维度顶点（A/E 族问题区） |
| 145 | 冲天炉 `mat_cupola` | material·1800 | 经典力学 `physics` | basic·1687 | 113 | 待查 | 前置为 14 个维度顶点（A/E 族问题区） |
| 146 | 锻造 `mat_forging` | material·-3000 | 用火 `fire` | energy·-1000000 | 997000 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 147 | 热浸镀锌 `mat_galv` | material·1742 | 化学 `chemistry` | basic·1661 | 81 | 待查 | 前置为 14 个维度顶点（A/E 族问题区） |
| 148 | 聚酰胺 `mat_pa` | material·1938 | 化学 `chemistry` | basic·1661 | 277 | 待查 | 前置为 14 个维度顶点（A/E 族问题区） |
| 149 | 聚四氟乙烯 `mat_ptfe` | material·1938 | 化学 `chemistry` | basic·1661 | 277 | 待查 | 前置为 14 个维度顶点（A/E 族问题区） |
| 150 | 淬火 `mat_quench` | material·-1000 | 铁器 `iron` | material·-1200 | 200 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 151 | 丁苯橡胶 `mat_sbr` | material·1929 | 化学 `chemistry` | basic·1661 | 268 | 待查 | 前置为 14 个维度顶点（A/E 族问题区） |
| 152 | 碳化硅半导体 `mat_sicsemi` | material·1980 | 化学 `chemistry` | basic·1661 | 319 | 待查 | 前置为 14 个维度顶点（A/E 族问题区） |
| 153 | 钛合金 `mat_tialloy` | material·1950 | 化学 `chemistry` | basic·1661 | 289 | 待查 | 前置为 14 个维度顶点（A/E 族问题区） |
| 154 | 锆 `mat_zirconium` | material·1789 | 化学 `chemistry` | basic·1661 | 128 | 待查 | 前置为 14 个维度顶点（A/E 族问题区） |
| 155 | 金属间化合物 `mt_alloy_25` | material·1950 | 材料科学 `materials` | basic·1900 | 50 | 待查 | 前置为 14 个维度顶点（A/E 族问题区） |
| 156 | 硼钢 `mt_alloy_34` | material·1950 | 冶金 `metallurgy` | material·-5000 | 6950 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 157 | 梯度功能材料 `mt_alloy_7` | material·1950 | 材料科学 `materials` | basic·1900 | 50 | 待查 | 前置为 14 个维度顶点（A/E 族问题区） |
| 158 | 透明陶瓷 `mt_cer_0` | material·1950 | 窑 `kiln` | manufact·-6000 | 7950 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 159 | 后膛装填 `breech_loading` | military·1850 | 线膛 `rifling` | military·1490 | 360 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 160 | 预警机 `mil_aewc` | military·1970 | 无线电 `radio` | info·1895 | 75 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 161 | 空降兵 `mil_airborne` | military·1940 | 军用运输机 `mil_transportac` | military·1920 | 20 | 待查 | 同分类且年份很近（疑似同义/同类节点自指） |
| 162 | 网络战 `mil_cyber` | military·1990 | 互联网 `internet` | info·1969 | 21 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 163 | 制导技术 `mil_guidance` | military·1940 | 雷达 `tr_radar2` | transport·1935 | 5 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 164 | 干扰 `mil_jamming` | military·1900 | 无线电 `radio` | info·1895 | 5 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 165 | 机枪 `mil_machinegun` | military·1884 | 铣床 `mfg_mill` | manufact·1818 | 66 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 166 | 中子弹 `mil_neutron` | military·1960 | 氢弹 `mil_hweapon` | military·1952 | 8 | 待查 | 同分类且年份很近（疑似同义/同类节点自指） |
| 167 | 军用运输机 `mil_transportac` | military·1920 | 航空发动机 `aircraft_engine` | energy·1903 | 17 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 168 | 边境雷达 `ml_uav_103` | military·2000 | 火箭 `rocket` | transport·1926 | 74 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 169 | 数据链应用 `ml_uav_111` | military·2000 | 算法理论 `algorithm` | basic·825 | 1175 | 疑 | 前置为 14 个维度顶点（A/E 族问题区）；跨分类且跨度 > 800 年（F 族口径） |
| 170 | 动中通 `ml_uav_123` | military·2000 | 火箭 `rocket` | transport·1926 | 74 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 171 | 温压弹 `ml_uav_16` | military·2000 | 电子学 `electronics` | info·1883 | 117 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 172 | 反蛙人声纳 `ml_uav_31` | military·2000 | 电子学 `electronics` | info·1883 | 117 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 173 | 自主水下机器人 `ml_uav_37` | military·2000 | 算法理论 `algorithm` | basic·825 | 1175 | 疑 | 前置为 14 个维度顶点（A/E 族问题区）；跨分类且跨度 > 800 年（F 族口径） |
| 174 | 机器狗军 `ml_uav_42` | military·2000 | 算法理论 `algorithm` | basic·825 | 1175 | 疑 | 前置为 14 个维度顶点（A/E 族问题区）；跨分类且跨度 > 800 年（F 族口径） |
| 175 | 伴随保障机器人 `ml_uav_48` | military·2000 | 电子学 `electronics` | info·1883 | 117 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 176 | 班组机器人 `ml_uav_49` | military·2000 | 电子学 `electronics` | info·1883 | 117 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 177 | 无人破障 `ml_uav_50` | military·2000 | 火箭 `rocket` | transport·1926 | 74 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 178 | 无人架桥 `ml_uav_51` | military·2000 | 算法理论 `algorithm` | basic·825 | 1175 | 疑 | 前置为 14 个维度顶点（A/E 族问题区）；跨分类且跨度 > 800 年（F 族口径） |
| 179 | 忠诚僚机军 `ml_uav_56` | military·2000 | 电子学 `electronics` | info·1883 | 117 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 180 | 分布式雷达 `ml_uav_79` | military·2000 | 火箭 `rocket` | transport·1926 | 74 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 181 | 飞机 `airplane` | transport·1903 | 起落架 `landing_gear` | transport·1903 | 0 | 疑 | 同年前置；同分类且年份很近（疑似同义/同类节点自指） |
| 182 | 自动驾驶 / 汽车智能 `autonomous_driving` | transport·2009 | 激光雷达 `lidar` | transport·2005 | 4 | 待查 | 同分类且年份很近（疑似同义/同类节点自指） |
| 183 | 飞行汽车 `flying_car` | transport·2045 | 自动化 `automation` | manufact·1950 | 95 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 184 | 冯·诺依曼自复制舰队 `fut_vn_fleet` | transport·2090 | 航天器 `spacecraft` | transport·1957 | 133 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 185 | 激光雷达 `lidar` | transport·2005 | 集成电路 `ic` | info·1958 | 47 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 186 | 帆船 `sail` | transport·-3500 | 木作 `woodworking` | manufact·-300000 | 296500 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 187 | 太空电梯 `space_elevator` | transport·2070 | 航天器 `spacecraft` | transport·1957 | 113 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 188 | 航天器 `spacecraft` | transport·1957 | 火箭 `rocket` | transport·1926 | 31 | 待查 | 同分类且年份很近（疑似同义/同类节点自指） |
| 189 | 电池底盘一体化 `tp_road_18` | transport·2005 | 全球卫星定位 GNSS `gps` | transport·1990 | 15 | 待查 | 同分类且年份很近（疑似同义/同类节点自指） |
| 190 | 盲区监测 `tp_road_59` | transport·2005 | 燃烧 `combustion` | energy·1800 | 205 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 191 | 情感交互 `tp_road_74` | transport·2005 | 内燃机 `internal_combustion` | energy·1876 | 129 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 192 | 市郊铁路 `tp_urban_7` | transport·2000 | 全球卫星定位 GNSS `gps` | transport·1990 | 10 | 待查 | 同分类且年份很近（疑似同义/同类节点自指） |
| 193 | 旋翼机 `tr_autogyro` | transport·1923 | 航空发动机 `aircraft_engine` | energy·1903 | 20 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 194 | 公共汽车 `tr_bus` | transport·1895 | 内燃机 `internal_combustion` | energy·1876 | 19 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 195 | 巡洋舰 `tr_cruiser` | transport·1800 | 钢铁 `steel` | material·-1000 | 2800 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 196 | 地铁 `tr_metro` | transport·1863 | 交通隧道 `tr_tunnel2` | transport·1700 | 163 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 197 | 充气轮胎 `tr_pneumatictire` | transport·1845 | 化学 `chemistry` | basic·1661 | 184 | 待查 | 前置为 14 个维度顶点（A/E 族问题区） |
| 198 | 运载火箭 `tr_rocket` | transport·1926 | 火箭发动机 `ene_rocketengine` | energy·1926 | 0 | 待查 | 同年前置 |
| 199 | 超音速客机 `tr_supersonic` | transport·1969 | 喷气发动机 `ene_jet` | energy·1937 | 32 | 较可信 | 无机械可疑信号（≠ 语义正确） |
| 200 | 风洞 `tr_windtunnel` | transport·1871 | 蒸汽机 `steam_engine` | energy·1769 | 102 | 较可信 | 无机械可疑信号（≠ 语义正确） |
