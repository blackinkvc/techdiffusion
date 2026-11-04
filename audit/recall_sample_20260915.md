# 前置完备率复核 · 20260915

> 生成工具 `tools/audit_recall.js`（种子 20260915，抽样 50 / 全库 2268 节点）。
> 高影响层（下游 ≥ 10）抽 25 个，普通层抽 25 个；总体指标按两层总体规模加权。

**怎么用**：打开同目录的 `recall_sample_20260915.tsv`，对每一行做三件事 ——
1. 完成复核后在「已复核(y)」列填 `y`；即使无需增删也必须填写，否则该行不计入统计；
2. 在「真实还有哪些前置」列补上**该有但现在没有**的前置（填节点 id，逗号分隔；没有就留空）；
3. 在「现有里记错的」列写下现有前置中**不成立**的（填节点 id，逗号分隔；没有就留空）。

填完跑 `node tools/audit_recall.js --score`。未知 id、重复补充、把现有前置再次补充都会报错。

| # | 节点 | 分类·年 | 下游数 | 抽样层 | 现有前置 |
|---|---|---|---|---|---|
| 1 | 陶器 `mat_pottery` | material·-10000 | 11 | high | 露天烧陶、磨制石器 |
| 2 | 化学 `chemistry` | basic·1661 | 433 | high | 科学方法 |
| 3 | 砌筑 `masonry` | build·-5000 | 179 | high | 石器、砖与砌筑 |
| 4 | 集成电路 `ic` | info·1958 | 15 | high | 晶体管、半导体材料、半导体、电子学 |
| 5 | 无菌外科 `surgery` | life·1867 | 95 | high | 麻醉、微生物学 |
| 6 | 量子力学 `quantum_mech` | basic·1925 | 60 | high | 文字、数学 |
| 7 | 统计力学 `stat_mech` | basic·1872 | 56 | high | 文字、数学 |
| 8 | 火箭 `rocket` | transport·1926 | 151 | high | 内燃机、经典力学、火药、液体火箭发动机 |
| 9 | 无线电 `radio` | info·1895 | 12 | high | 电磁学、电报 |
| 10 | 数值分析 `numerical` | basic·1950 | 105 | high | 文字、数学、统计学、最优化/线性规划 |
| 11 | 铸铁 `mat_castiron` | material·-500 | 19 | high | 块炼铁 |
| 12 | 纳米技术 `nanotech` | material·1980 | 10 | high | 材料科学、化学、经典力学 |
| 13 | 车床与精密加工 `lathe` | manufact·1751 | 22 | high | 钢铁 |
| 14 | 文字 `writing` | info·-3200 | 114 | high | 语言 |
| 15 | 电力系统 `electricity` | energy·1879 | 94 | high | 发电机与电动机、电池 |
| 16 | 发酵 `fermentation` | life·-7000 | 84 | high | 农业、陶器 |
| 17 | 遗传学 `genetics` | basic·1865 | 86 | high | 文字、数学 |
| 18 | 工业机器人 `robot` | manufact·1961 | 35 | high | 电子计算机、流水线、电动机 |
| 19 | 人工智能 `ai` | info·1956 | 32 | high | 电子计算机 |
| 20 | 汽车 `automobile` | transport·1886 | 81 | high | 内燃机、钢铁、底盘 |
| 21 | 经典力学 `physics` | basic·1687 | 290 | high | 数学、科学方法、文字 |
| 22 | 建筑学 `architecture` | build·-3000 | 162 | high | 砌筑、工程学 |
| 23 | 免疫学 `immunology` | basic·1798 | 86 | high | 文字、数学 |
| 24 | 窑 `kiln` | manufact·-6000 | 37 | high | 用火、陶器 |
| 25 | 固体力学 `solid_mech` | basic·1700 | 58 | high | 微分方程、文字、数学 |
| 26 | DNA 疫苗 `lf_bio_2` | life·2000 | 0 | other | 遗传学、免疫学、发酵 |
| 27 | 聚丙烯 `mat_pp` | material·1954 | 0 | other | 化学、经典力学 |
| 28 | 有轨电车 `tr_tram` | transport·1832 | 0 | other | 发电机与电动机 |
| 29 | 泛函分析 `bx_math_44` | basic·1950 | 0 | other | 数学、数值分析、统计学、最优化/线性规划 |
| 30 | 钻床 `mfg_drillpress` | manufact·1800 | 0 | other | 钻、车床 |
| 31 | 精神康复 `lf_dx_71` | life·2005 | 0 | other | 电子计算机、分子生物学、无菌外科、互联网 |
| 32 | 电池底盘一体化 `tp_road_18` | transport·2005 | 0 | other | 汽车、内燃机、全球卫星定位 GNSS、燃烧 |
| 33 | 高射炮 `mil_aagun` | military·1900 | 0 | other | 火炮、钢铁 |
| 34 | 复合工具 `hafting` | manufact·-200000 | 3 | other | 石器、木作 |
| 35 | 雷达 `tr_radar2` | transport·1935 | 9 | other | 无线电、电磁学 |
| 36 | 高温超导 `mat_htsc` | material·1986 | 1 | other | 化学、经典力学、碳化硅半导体 |
| 37 | 伴随保障机器人 `ml_uav_48` | military·2000 | 0 | other | 火箭、算法理论、电子学 |
| 38 | 术中病理 `lf_dx_58` | life·2005 | 0 | other | 电子计算机、分子生物学、无菌外科、互联网 |
| 39 | 框架结构 `bld_framing` | build·1800 | 2 | other | 钢铁、压延 |
| 40 | 无线传感网 `inf_sensor_net` | info·1980 | 0 | other | 数学 |
| 41 | 治疗药物监测 `lf_dx_21` | life·2005 | 0 | other | 电子计算机、分子生物学、无菌外科、互联网 |
| 42 | 生理学 `bio_physiology` | life·-300 | 0 | other | 数学、解剖学 |
| 43 | 并查集 `it_alg_7` | info·1970 | 0 | other | 数学、电子计算机、统计学、算法理论 |
| 44 | 合成燃料 `ene_synfuel` | energy·1920 | 0 | other | 经典力学、化学 |
| 45 | 驱逐舰 `tr_destroyer` | transport·1890 | 0 | other | 蒸汽船、鱼雷 |
| 46 | 线膛 `rifling` | military·1490 | 1 | other | 火药 |
| 47 | 核裂变 `nuclear_fission` | energy·1942 | 3 | other | 相对论与量子力学、化学 |
| 48 | 人工皮肤 `bio_artskin` | life·1980 | 0 | other | 化学、数学、组织工程 |
| 49 | 建筑光学 `bd_civ_109` | build·2000 | 0 | other | 砌筑、建筑学、工程学 |
| 50 | 鼻喷疫苗 `lf_bio_8` | life·2000 | 0 | other | 遗传学、免疫学、发酵 |
