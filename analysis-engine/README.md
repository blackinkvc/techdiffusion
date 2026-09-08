# 算法引擎 · 技术谱系数据库（analysis-engine）

> 严肃科学 / 第一性原理 / 超级工程师 —— 真实技术数据的"子分类 + 织网"生产线

## 目录结构

```
analysis-engine/
├── dump_data.js                阶段0：导出全量图数据（浏览器同序加载 5 个数据文件）
├── gen_subcat.js               任务域生成器：catalog → 技术条目（自动织网、标注 subcategory）
├── catalogs/                   任务域真实技术目录（内容源头）
│   ├── energy_storage.json     样板①：储能（75 条记录 → 新增 54 + 打标 21）
│   └── info_compute.json       样板②：计算设备（45 条 → 新增 41 + 打标 4）
├── data/
│   ├── graph.json              2265 技术节点 + 8368 关系边 + 97 概念节点（DAG）
│   ├── quality_report.md       数据质量报告
│   └── subcat/
│       ├── new_techs.json      新增条目（含 subcategory 字段）95 条
│       ├── tagmap.json         存量条目→子分类打标 25 条
│       └── report.txt          生成报告
└── data/subcategory_taxonomy_v1.json   任务域子分类树（9 大类 → 88 任务域）
```

## 子分类体系（v1）

9 大类（basic/material/energy/manufact/transport/info/life/build/military）
→ **88 个任务域**（每个 = 一项真实技术任务，如 energy 拆 13 域）
→ 每个 catalog 内按**技术族**（如储能 → 水力机械/电化学/氢能/热/系统）
→ 族内逐条**真实技术**（如磷酸铁锂电池、抽水蓄能）

## 织网三原则（保证科学严谨）

1. **DAG 无环**：每条 dependsOn 只指向年份更早的节点（现存锚点允许同年）；
   目录内跨条目引用必须严格更早。
2. **零断链**：deps 目标不存在 → 自动剔除并记告警（当前 0 告警）。
3. **零重名**：与全库同 id/同名的目录条目不重复新增，转为存量打标。

## 用法

```bash
node dump_data.js          # 全量导出（每次数据变更后重跑）
node gen_subcat.js         # 编译 catalogs/ 全部目录 → new_techs.json + tagmap.json
python3.11 -c "..."        # networkx 校验 DAG / 连通性
```

## 验证结果（样板批）

| 指标 | 数值 |
|---|---|
| 全库存量 | 2265 节点 / 7978 依赖边 / 无环 |
| 样板新增 | 95 条（storage 54 + compute 41） |
| 存量打标 | 25 条（抽水蓄能→storage、云计算→compute …） |
| 依赖告警 | 0 |
| 合并后 | 2360 节点 / 8101 边 / 仍无环 / 零重名 |

## 下一步（铺开 88 域）

- 为剩余 86 个任务域编写真实技术目录（技术族 → 条目，含年份与依赖接线）
- 逐类运行生成器 → 校验 → 并入
- 全部目录完成后：给全库 2265 存量做子分类兜底归类（规则+抽查）
- 数据层完备后：升级站点浏览/检索/科技树，让 subcategory 成为检索维度
