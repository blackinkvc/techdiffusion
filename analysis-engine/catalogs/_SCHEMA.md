# Catalog 编写规范（内容生产代理必读）

> 目标：为指定的「任务域」编写一份**真实技术目录** JSON 文件，供 `gen_subcat.js` 编译为技术条目。

## 必读文件

- `data/subcategory_taxonomy_v1.json` —— 88 任务域的定义（category.categories[cat].tasks[]，含每个任务的 examples 种子）
- `catalogs/_ANCHORS.json` —— 全局锚点白名单：`[{id, name, year}]`，共 110 个已存在于全库的基石技术（语言/数学/物理/化学/电/蒸汽机/计算机/互联网…）。**deps 只能引用这里面的 id，或本目录文件中你自己先定义的条目 id**
- `catalogs/_filemap.json` —— 每个任务域对应的输出文件名
- `catalogs/energy_storage.json` —— 合格样板（结构与密度示范；样板 75 条偏少，本批要求 130-180 条）

## 输出文件位置

`/workspace/analysis-engine/catalogs/<cat>_<sub>.json`（文件名严格用 _filemap.json 中给定值）

## JSON 结构（必须与样板完全一致）

```json
{
  "cat": "basic", "catName": "科学基础与方法",
  "sub": "math", "subName": "数学与逻辑",
  "anchors": ["mathematics", "writing"],
  "families": [
    {
      "name": "算术与代数",
      "items": [
        { "id": "math_decimal", "name": "十进制记数", "en": "Decimal numeral system", "year": -2000,
          "note": "以十为基的位置记数法，是算术运算与账簿记录的基础。",
          "deps": ["mathematics"] }
      ]
    }
  ]
}
```

字段规则：

| 字段 | 规则 |
|---|---|
| `cat`/`sub` | 取自 taxonomy，与文件名一致 |
| `anchors` | 从 `_ANCHORS.json` 挑选与本域相关的 id 子集（5-15 个） |
| `families[].name` | 技术族中文名（把本域按技术谱系拆成 3-7 个族） |
| `items[].id` | snake_case 英文唯一 id；**不得与 _ANCHORS.json 及你负责的其它文件重复**；建议带域语义前缀（如存储域 `ene_liion` 风格，但更推荐可读长名如 `lead_acid_battery`，需保证唯一） |
| `items[].name` | **中文真实技术名**（见下方真实性纪律） |
| `items[].en` | 英文标准名 |
| `items[].year` | 整数，技术成形的真实约年（负数=公元前）；与技术史实相符 |
| `items[].note` | 一句话（25-60 字）讲清"是什么 + 意义/应用"，客观、可查证，不用感叹号、不做技术预测 |
| `items[].deps` | 可选。依赖的 id 数组：只能来自 ①`_ANCHORS.json` ②本文件内更早定义的条目。**每个被依赖 id 的 year 必须严格小于本条目 year**（全库现存锚点可同年）。缺省按族内先后顺序推断 |

## 真实性纪律（最重要）

1. 只收录**人类世界真实存在/已实现**的技术、工艺、材料体系、装置门类。
2. **禁止**：科幻概念、未实现设想、纯理论构想（已建成的研究装置可收录并如实描述）、品牌产品型号（禁止"iPhone""波音737"这类型号级条目；允许"喷气式客机"这种技术门类）。
3. 技术名用通用标准名，避免俚语、避免含具体年份的"XX年款"。
4. 若某项技术已作为 `_ANCHORS.json` 中的条目存在（如"电""蒸汽机""计算机"），**不要重复收录**；需要时在别的条目 deps 里引用其 id。
5. `year` 与真实科技史吻合：能考证就写公认成形年；跨度大的写关键节点年，不要前后矛盾（族的 items 建议大致按时间排序）。
6. `note` 基于公认事实（谁发明/什么原理/用在哪儿），宁短勿错。

## 密度与覆盖

- **每个任务域总条目 130-180 条**（含族结构），宁缺毋滥但需达到下沿。
- 技术族划分要覆盖该任务域的主要技术谱系，不要遗漏大类（如储能：机械/电化学/氢能/热/系统；切削加工：车/铣/钻/磨/齿轮/螺纹/特种加工）。
- 存量样板域（energy_storage、info_compute）如果被指派加厚：在现有 families 内补 items，或新增 family，**不得改动/删除已有条目**，且新增条目仍须满足 id/name 全库唯一。

## 自检清单（写完每个文件后执行）

1. 文件是合法 JSON（`node -e "JSON.parse(require('fs').readFileSync('路径','utf8')); console.log('OK')"`）。
2. 本文件内 id 无重复、name 无重复。
3. 每个 `deps` 引用的 id 存在（在 _ANCHORS.json 或本文件内）且 year 更早；不确定就删掉该 deps。
4. 不与 `_ANCHORS.json` 及你负责的其他 catalog 的 id/name 重复。
5. 条数达标（130-180）。

> 不要运行 `node gen_subcat.js`、不要修改 catalogs 之外的任何文件。完成全部负责文件后，在回复里报告：每个文件的条目数、技术族列表、自检结果。
