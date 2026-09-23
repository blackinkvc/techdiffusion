# 前置完备率复核 · 20260915

> 生成工具 `tools/audit_recall.js`（种子 20260915，抽样 50 / 全库 2268 节点）。
> 一半取自**高影响节点**（下游 ≥ 10，预测骨架），一半随机。

**怎么用**：打开同目录的 `recall_sample_20260915.tsv`，对每一行做两件事 ——
1. 在「真实还有哪些前置」列补上你认为**该有但现在没有**的前置（填节点 id，逗号分隔；没有就留空）；
2. 在「现有里记错的」列写下现有前置中**你认为不成立**的（填节点 id，逗号分隔）。

填完跑 `node tools/audit_recall.js --score`。

| # | 节点 | 分类·年 | 下游数 | 现有前置 |
|---|---|---|---|---|
| 1 | 分子生物学 `molecular_bio` | basic·1953 | 94 | 数值分析、文字、数学、DNA 双螺旋 |
| 2 | 蒸汽机 `steam_engine` | energy·1769 | 23 | 煤炭开采与利用、铁器、钢铁、纽科门大气式蒸汽机、瓦特分离冷凝器蒸汽机、锅炉 |
| 3 | 电池 `battery` | energy·1800 | 98 | 化学 |
| 4 | 钢铁 `steel` | material·-1000 | 69 | 铁器 |
| 5 | 电子学 `electronics` | info·1883 | 159 | 电磁学 |
| 6 | 飞机 `airplane` | transport·1903 | 15 | 内燃机、空气动力学、钢铁、航空发动机、起落架 |
| 7 | 汽车 `automobile` | transport·1886 | 81 | 内燃机、钢铁、底盘 |
| 8 | 经典力学 `physics` | basic·1687 | 290 | 数学、科学方法、文字 |
| 9 | 最优化/线性规划 `optimization` | basic·1947 | 106 | 文字、数学 |
| 10 | 纳米技术 `nanotech` | material·1980 | 10 | 材料科学、化学、经典力学 |
| 11 | 免疫学 `immunology` | basic·1798 | 86 | 文字、数学 |
| 12 | 量子科技 `quantum` | basic·1980 | 10 | 相对论与量子力学、经典力学 |
| 13 | 半导体材料 `semiconductors` | material·1947 | 10 | 化学、相对论与量子力学 |
| 14 | 航天器 `spacecraft` | transport·1957 | 13 | 火箭、人造卫星 |
| 15 | 铁器 `iron` | material·-1200 | 17 | 耐火材料、青铜 |
| 16 | 车床与精密加工 `lathe` | manufact·1751 | 22 | 钢铁 |
| 17 | 工程学 `engineering` | basic·-3000 | 170 | 数学 |
| 18 | 集成电路 `ic` | info·1958 | 15 | 晶体管、半导体材料、半导体、电子学 |
| 19 | 用火 `fire` | energy·-1000000 | 13 | （无） |
| 20 | 电动机 `electric_motor` | energy·1837 | 17 | 电池、钢铁 |
| 21 | 固体力学 `solid_mech` | basic·1700 | 58 | 微分方程、文字、数学 |
| 22 | 建筑学 `architecture` | build·-3000 | 162 | 砌筑、工程学 |
| 23 | 内燃机 `internal_combustion` | energy·1876 | 95 | 石油工业、热力学、钢铁、四冲程奥托循环 |
| 24 | 混凝土 `mat_concrete` | material·-2000 | 10 | 石灰 |
| 25 | 工业机器人 `robot` | manufact·1961 | 35 | 电子计算机、流水线、电动机 |
| 26 | 矩阵补全 `bx_math_89` | basic·1950 | 0 | 数学、数值分析、统计学、最优化/线性规划 |
| 27 | 地源热泵建筑 `bld_geothermal2` | build·1980 | 1 | 热泵、空调系统 |
| 28 | 零知识证明 `inf_zeroknowledge` | info·1985 | 0 | 数学 |
| 29 | 可拉伸电池 `en_bat_19` | energy·1990 | 0 | 电池、铅酸电池、化学、电力系统 |
| 30 | 马尔可夫过程 `bx_math_50` | basic·1950 | 0 | 数学、数值分析、统计学、最优化/线性规划 |
| 31 | 电动垂直起降网络 `fut_evtol_network` | transport·2032 | 0 | 航天器、火箭、人造卫星 |
| 32 | 造纸 `paper` | material·105 | 1 | 文字 |
| 33 | 压电材料 `mat_piezo` | material·1880 | 0 | 化学、经典力学 |
| 34 | 水射流加工应用 `mn_proc_8` | manufact·1970 | 0 | 车床与精密加工、工业机器人、电子学、自动化 |
| 35 | 铝电池 `en_bat_4` | energy·1990 | 0 | 电池、铅酸电池、化学、电力系统 |
| 36 | 蓄热墙体 `bd_civ_147` | build·2000 | 0 | 砌筑、建筑学、工程学 |
| 37 | 意识上传网络 `fut_mind_upload_net` | info·2080 | 0 | 人工智能、量子科技、电子计算机 |
| 38 | 数控加工 `cnc` | manufact·1952 | 1 | 电子计算机、车床与精密加工 |
| 39 | 聚酯 `mat_polyester` | material·1930 | 1 | 化学、经典力学 |
| 40 | 生物物理学 `biophysics` | basic·1900 | 0 | 生物化学、文字、数学 |
| 41 | 硼钢 `mt_alloy_34` | material·1950 | 0 | 材料科学、冶金、钢铁、硬铝合金 |
| 42 | 哥特结构 `bld_gothic` | build·1100 | 0 | 飞扶壁、砌筑、拱 |
| 43 | 蜂窝夹层 `mat_honeycomb` | material·1940 | 0 | 化学、经典力学、聚四氟乙烯 |
| 44 | 锌冶炼 `mat_zinc` | material·-500 | 0 | 铅冶炼 |
| 45 | 时空 `spacetime` | basic·1915 | 3 | 相对论与量子力学、经典力学 |
| 46 | 测量学 `surveying` | basic·-2000 | 2 | 语言、文字、数学、制图学 |
| 47 | 光固化成型 `sla` | manufact·1986 | 0 | 激光器 |
| 48 | 成员推断 `it_alg_74` | info·1970 | 0 | 数学、电子计算机、统计学、算法理论 |
| 49 | 泡沫陶瓷 `mat_foamceramic` | material·1970 | 1 | 化学、经典力学 |
| 50 | 数据科学 `data_science` | basic·2000 | 0 | 文字、数学 |
