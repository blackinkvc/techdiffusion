# techdiffusion

> 人类技术演化网络 2.0 · 规律挖掘与未来涌现推演
> Humanity Technology Evolution Network — mapping the dependencies, patterns, and future emergence of human technology.

**在线浏览（GitHub Pages）：<https://blackinkvc.github.io/techdiffusion/>**

[English below](#english)

---

## 这是什么

一个**纯静态、可离线浏览**的人类技术发展可视化数据库。它把从「用火」到「智能」的上万项技术，按**真实的历史依赖关系**连成一张科技演化网络，并配套一套**确定性的分析引擎**，用于：

- 梳理技术的**前置依赖**（A 为什么必须先于 B 出现）；
- 量化每项技术的**成熟度五维评分**（物理可行 / 时间成熟 / 依赖深度 / 系统织密 / 跨域辐射）；
- **推演未来**：基于网络本身的前提闭包与「前提齐备律」，推导技术何时、在什么条件下涌现（严肃科学，非科幻臆测）。

当前数据规模：**13,318 个技术节点 + 约 1.74 万条依赖/赋能边**。

---

## 站点结构（各页面用途）

站点为多页应用（MPA），由 `assets/shell.js` 统一注入导航、全局搜索与详情弹窗。

| 页面 | 用途 |
|---|---|
| `index.html` | 入口，自动跳转至首页 `worldview.html` |
| `worldview.html` | 卷首 / 总览世界观 |
| `browse.html` | 技术检索（按分类 / 关键词 / 标签过滤） |
| `timeline.html` | 时间轴（按历史时期浏览技术涌现） |
| `tree.html` | 科技树（核心依赖网络可视化） |
| `tree_full.html` | **全量科技树**（加载 `data_full.js`，13k 节点力导向图，按分类 / 成熟度 / 综合分着色筛选） |
| `lineage.html` | 来龙去脉（单条技术的上下游依赖链） |
| `analysis.html` | 关系网分析（PageRank / 中介中心性 / 组合诞生推演） |
| `method.html` | 方法论（第一性原理五维评分体系说明） |
| `midtech.html` | 中间技术 |
| `progress.html` | 进度 |
| `sop.html` | 研发 SOP（内容质量门禁） |
| `research.html` | 文献谱系（历史相关研究，不进入技术网络） |
| `changelog.html` | 版本迭代日志（与 `版本迭代日志.md` 同源） |
| `detail.html` | 详情弹窗页（五维评分卡 + 依赖链） |

更完整的构建思路与方法论见仓库内两份文档：
- [`版本迭代日志.md`](版本迭代日志.md) — 逐次变更与「科技树为何变成现在这样」的全程追踪
- [`项目构建研究思路与全程纪要.md`](项目构建研究思路与全程纪要.md) — 方法论、图算法、评分与推演引擎的设计纪要

---

## 分析引擎（`analysis-engine/`）

一套**确定性**的 Python / JS 工具链（图算法与统计一律用 `networkx` 等确定性方法，CPU 秒级，无需 GPU / 外部 API）：

| 模块 | 作用 |
|---|---|
| `graph_engine.py` | 图算法：PageRank / HITS / 拓扑层级 / 社区发现 / 割点 / 最长关键路径 |
| `phase2_score.py` | 第一性原理**五维评分**（D1–D5）→ 技术成熟度 L1–L5 五档 |
| `phase3_linkpredict.py` | 链接预测：基于祖先闭包的前提支撑度，补全隐含前置关系 |
| `forecast_engine.js` | 未来涌现推演：从真实网络实算「前提齐备律」滞后分布，推导 L2/L3/L5 涌现时期 |
| `validate_final.py` | 质量门禁（断边 / 年份倒置 / DAG 无环校验） |
| `build_full_dataset.js` | 合并 `graph.json` + `new_techs` + `phase2_scores` → `assets/data_full.js` |
| `catalogs/` | 88 个任务域骨架与子分类生成流水线 |

---

## 技术栈

- **前端**：D3.js v7（力导向图）、原生 HTML / CSS / JavaScript（无构建步骤）
- **分析**：Python 3 + `networkx`（确定性图算法与统计）
- **数据格式**：`graph.json`（依赖边，权威方向 `source(前提) → target(依赖者)`）、`assets/data_full.js`（全量评分数据）

---

## 目录结构

```
.
├── index.html / worldview.html / browse.html / timeline.html / tree.html / tree_full.html
├── lineage.html / method.html / midtech.html / progress.html / sop.html
├── analysis.html / research.html / changelog.html / detail.html
├── assets/                 # 前端资源（style.css, shell.js, app.js, data_full.js 等）
├── analysis-engine/        # Python/JS 分析引擎 + catalogs/ + data/
├── tools/                  # 建网脚本（gen_techs / disassemble / relink_parents 等）
├── tech-evolution-db-v1.0/ # v1.0 快照（历史存档）
├── 版本迭代日志.md
└── 项目构建研究思路与全程纪要.md
```

---

## 本地预览

站点为纯静态文件，**推荐用本地 HTTP 服务器**打开（部分页面用 `fetch` / ES Module，`file://` 直接打开可能被浏览器拦截）：

```bash
# 在项目根目录执行
python3 -m http.server 8000
# 然后浏览器访问
open http://localhost:8000/
```

入口 `index.html` 会自动跳转到 `worldview.html`。查看全量科技树请访问 `tree_full.html`（数据较大，加载稍慢属正常）。

---

## 许可证

本项目用于技术与科学史研究与教育。具体授权方式请参见仓库 License（如有）。数据与文档欢迎在注明出处的前提下引用。

---

<a id="english"></a>
## English

**techdiffusion** is a static, offline-browsable visualization database of human technology evolution. It connects ~13,318 technologies through their real historical dependencies into a single evolution network, paired with a deterministic analysis engine that:

- maps prerequisite dependencies between technologies,
- scores each technology on five first-principles maturity dimensions (D1–D5 → L1–L5 tiers),
- forecasts *when* and *under what conditions* future technologies will emerge, derived from the network's own premise-closure and "premise-readiness law" (serious science, not speculative fiction).

**Stack:** D3.js v7 + vanilla HTML/CSS/JS front end; Python 3 + `networkx` for deterministic graph algorithms and statistics.

**Local preview:**

```bash
python3 -m http.server 8000
# open http://localhost:8000/
```

See [`版本迭代日志.md`](版本迭代日志.md) and [`项目构建研究思路与全程纪要.md`](项目构建研究思路与全程纪要.md) (Chinese) for methodology and build notes.
