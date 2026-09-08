# 「无人机测绘」详情页问题审计

> 页面对应节点：`bld_dronesurvey` / 无人机测绘 / Drone Surveying / year 2015 / category build
> 审计日期：2026-09-09

## 一、截图显示的问题

截图来自站点「来龙去脉」侧边栏（`assets/app.js → renderLineageSide`），顶部文案与下方列表存在明显不合理：

- **顶部文案**：「无人机测绘并非凭空出现，而是当多条技术线索在同一时点成熟后汇聚而成：**二维材料、工业 4.0、摩擦纳米发电**。正是这些上游技术同时就位，才让它从设想变为可商品化的现实。」
- **来龙列表（按代际）**：
  - 第 1 代（更早）：二维材料(2004)、工业 4.0(2011)、摩擦纳米发电(2012)
  - 第 2 代（更早）：数学(~3000BCE)、化学(1661)、经典力学(1687)、自修复材料(2000)、石墨烯(2004)
- **统计**：上游技术背景 65 项 · 下游衍生 0 项 · 最大回溯 7 层

## 二、为什么错了

### 1. 直接上游 dependency 数据错误（根因）

当前 `analysis-engine/data/graph.json` 里，`bld_dronesurvey` 的入边（前置依赖）只有三条：

- `mat_2d` 二维材料
- `mfg_industry40` 工业 4.0
- `ene_tribo` 摩擦纳米发电

这三条均不是「无人机测绘」的合理直接前置技术：

| 上游节点 | 为什么不合理 |
|---|---|
| 二维材料 | 石墨烯等二维材料是材料学概念，与无人机测绘的成像、定位、飞行平台无直接因果 |
| 工业 4.0 | 这是 2011 年后的制造业范式，甚至晚于无人机测绘雏形出现；属于应用场景/时代背景，不是前置技术 |
| 摩擦纳米发电 | 是一种微小能量收集技术，与无人机测绘的动力、载荷、算法均不直接相关 |

由于这三条错误入边存在，系统自动回溯它们的祖先，得到 65 项庞大上游列表；其中混入「自修复材料」「石墨烯」等无关节点，进一步稀释了技术谱系的可信度。

### 2. 正确的来源被忽略了

在原始目录 `analysis-engine/catalogs/build_construction.json` 第 124 行，已有人工编纂的正确条目：

```json
{
  "id": "constr_drone_survey",
  "name": "无人机测绘",
  "en": "UAV surveying",
  "year": 2010,
  "note": "以无人机航拍与定位快速生成地形模型。",
  "deps": ["gps", "computer"]
}
```

但在构建时该节点被判定为「同名已存在(=bld_dronesurvey)，改为打标」（见 `analysis-engine/data/subcat/report.txt`），仅保留了分类/子域标签，**原有正确的 `deps` 没有覆盖到已存在的节点**上，导致错误的图结构继续生效。

### 3. 年份不一致

- 截图节点显示 2015 年
- 原始目录里写 2010 年
- 实际产业共识：无人机测绘在 2010 年前后随消费级多旋翼（DJI Phantom 2013 前后）和开源飞控普及而商品化；2015 更像大规模应用节点

建议统一为 **2010 年**，与目录一致，并在 summary 中说明商品化高峰在 2013-2015 年。

### 4. UI 文案与层标签问题

- `assets/app.js:475` 把「直接上游」统称为「多条技术线索在同一时点成熟后汇聚」，语气过于绝对；如果上游年份横跨数千年，「同一时点」明显失真。
- `assets/app.js:488` 每一层都标注「第 N 代（更早）」，导致「第 1 代（更早）」这种自相矛盾的标签。

## 三、应该怎么改

### A. 数据层：修正 `bld_dronesurvey` 的入边

将 `analysis-engine/data/graph.json` 中指向 `bld_dronesurvey` 的入边替换为：

```json
[
  {"source": "gps",     "target": "bld_dronesurvey", "type": "dependency"},
  {"source": "computer","target": "bld_dronesurvey", "type": "dependency"},
  {"source": "drone",   "target": "bld_dronesurvey", "type": "dependency"},
  {"source": "camera",  "target": "bld_dronesurvey", "type": "dependency"},
  {"source": "photography","target": "bld_dronesurvey", "type": "dependency"},
  {"source": "uav_controller","target": "bld_dronesurvey", "type": "dependency"},
  {"source": "multicopter","target": "bld_dronesurvey", "type": "dependency"}
]
```

同时把这三个错误入边删除：

- `mat_2d → bld_dronesurvey`
- `mfg_industry40 → bld_dronesurvey`
- `ene_tribo → bld_dronesurvey`

### B. 节点字段修正

- `year`: 2015 → **2010**
- `summary` 建议改为：
  > 以无人机为飞行平台，结合 GNSS 定位、数码相机/图像传感器、飞控与计算机视觉/摄影测量算法，快速获取地表影像并生成地形模型、正射影像或三维点云的技术。2010 年后随多旋翼无人机、MEMS 云台与消费级飞控普及而商品化，广泛应用于工程测量、城市规划、建筑巡检与农业监测。

### C. 人物/地点补全

- `people`: 可写「DJI 大疆等消费级无人机厂商 / 开源飞控社区（ArduPilot、PX4）/ 摄影测量软件社区」
- `place`: 中国 / 美国 / 瑞士（Pix4D 等瑞士摄影测量软件公司）

### D. UI 层微调

修改 `assets/app.js:488`：

```javascript
const label = d === 1 ? "直接上游" : `第 ${d} 代上游`;
html += `<div style="...">${label}</div>`;
```

并削弱顶部 prose 的绝对化语气，例如：

> 「无人机测绘」建立在若干前置技术之上：{directUp names}。这些技术为其提供了飞行平台、精确定位、影像获取与数据处理能力。

### E. 关系解说层

现有 `buildRelationExplanation`（`assets/core.js:234-281`）对 build 类上游统一返回「提供了建造基础」过于粗糙。可增加以下规则，使「无人机测绘」这类 build-info 交叉节点得到更准确的解释：

- 上游含 `gps/GNSS/定位/导航/卫星` → 提供导航与定位能力
- 上游含 `camera/图像/摄影/视觉/lidar/雷达/传感` → 提供环境感知与影像采集能力
- 上游含 `computer/AI/算法/视觉` → 提供影像处理与三维重建能力
- 上游含 `drone/UAV/多旋翼/飞控` → 提供无人飞行平台与自主飞行能力

## 四、全库自检计划（待你审核后执行）

只修一个节点不能解决系统性问题。建议按以下步骤自检所有相关节点：

1. **找出同类错误**：扫描所有 `build` 类节点，检查其直接上游是否包含 `mat_2d`、`mfg_industry40`、`ene_tribo`、`二维材料`、`工业 4.0`、`摩擦纳米发电` 等高概率误关联节点，列出清单。
2. **目录覆盖检查**：对所有「同名已存在，改为打标」的节点（`analysis-engine/data/subcat/report.txt` 中标记为「同名已存在」），比对 catalog 里的 `deps` 与 graph.json 里的实际入边，把 catalog 中更合理的 deps 合并/覆盖进去。
3. **添加语义校验脚本**：写一个数据校验器，标记以下可疑边：
   - 时间倒置：上游 year > 下游 year（跨 5 年以上）
   - 跨大类别误连：如 energy → build、material → info 等缺乏明确关键词映射
   - 未来节点指向现实节点（year > 2030 → year < 2020）
   - 上游为「工业 4.0」「二维材料」「摩擦纳米发电」「自修复材料」等极易被滥用的通用概念
4. **重建并验证**：修正后重新运行 `node analysis-engine/build_full_dataset.js`，检查上游数量与内容是否合理，再重新打开「无人机测绘」等页面人工复核。

## 五、需要你确认的事

请审核上面的问题分析和修改方案。如果同意，我将：

1. 先按 A/B/C 修正 `bld_dronesurvey`；
2. 按 D 微调 `assets/app.js` 文案；
3. 按「全库自检计划」第 1-2 步扫描并修正一批同类错误；
4. 重建 `assets/data_full.js` 并提交。

如果你只想先修这一页、再看效果，也可以只执行第 1-2 步。
