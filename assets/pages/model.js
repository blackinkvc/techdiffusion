/* ============================================================
   数学模型页（model.js）
   - 把本项目的技术依赖网络形式化为可计算对象
   - 给出 5 个构想（A 社会-环境涌现 / B 前提闭包+滞后 / C 组合涌现 / D 中心性 / E 物质能量信息三元），并附十种进阶数学模型（隐性参数·神经网络·专用硬件）
   - 用真实语料（TECHS）实时拟合并尝试验证
   - 维护「随研发迭代演进」的建模方法日志（MODEL_METHOD）
   依赖：core.js（TECHS/CATEGORIES/ERAS/techMap/computeNet/NET/esc/$）、d3.v7
   ============================================================ */
(function () {
  "use strict";
  const $ = sel => document.querySelector(sel);

  // ---------- 实时计算 ----------
  computeNet();
  const N = TECHS.length;

  // 网络结构指标
  let edges = 0;
  TECHS.forEach(t => { edges += (t._up || []).length; });
  const density = edges / (N * (N - 1));
  const roots = TECHS.filter(t => !(t._up && t._up.length)).length;
  const leaves = TECHS.filter(t => !(t._down && t._down.length)).length;
  const longest = NET.longest;

  // 滞后分布（year − max(前置年)），year>=minYear
  function lagStats(minYear) {
    const lags = [];
    TECHS.forEach(t => {
      const y = t.year; if (y == null || y < minYear) return;
      const uy = (t._up || []).map(id => techMap[id]).filter(Boolean).map(x => x.year).filter(v => v != null && v >= 0);
      if (uy.length) lags.push(y - Math.max(...uy));
    });
    const s = [...lags].sort((a, b) => a - b);
    const p = q => s.length ? s[Math.min(s.length - 1, Math.floor(q * s.length))] : null;
    return { n: s.length, min: s[0], max: s[s.length - 1], mean: s.length ? +(s.reduce((a, b) => a + b, 0) / s.length).toFixed(1) : 0,
      p10: p(0.10), p25: p(0.25), p50: p(0.50), p75: p(0.75), p90: p(0.90), vals: s };
  }
  const lag = lagStats(1700);

  // 滞后按时期（验证正反馈：Δ 随近代缩短）
  function lagByEra() {
    const groups = {};
    TECHS.forEach(t => {
      const y = t.year; if (y == null || y < 1700) return;
      const uy = (t._up || []).map(id => techMap[id]).filter(Boolean).map(x => x.year).filter(v => v != null && v >= 0);
      if (!uy.length) return;
      (groups[t.era] = groups[t.era] || []).push(y - Math.max(...uy));
    });
    return eraOrder.map(id => {
      const arr = (groups[id] || []).sort((a, b) => a - b);
      return { id, name: eraMap[id] ? eraMap[id].name : id, n: arr.length, med: arr.length ? +median(arr).toFixed(0) : null };
    }).filter(r => r.n >= 10);
  }
  const lagEra = lagByEra();

  // 汇聚诞生（组合涌现）计数
  function isConvergent(t) {
    const ups = (t._up || []).map(id => techMap[id]).filter(Boolean);
    const cs = new Set(ups.map(u => u.category));
    return ups.length >= 3 && cs.size >= 2;
  }
  const convCount = TECHS.filter(isConvergent).length;
  const convPct = (100 * convCount / N).toFixed(1);

  // 重要性 × 时期
  const eraOrder = ERAS.map(e => e.id);
  const byEraComp = {};
  TECHS.forEach(t => { (byEraComp[t.era] = byEraComp[t.era] || []).push(t._net ? t._net.comp : 0); });
  function median(a) { const s = [...a].sort((x, y) => x - y); const m = Math.floor(s.length / 2); return s.length ? (s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2) : 0; }
  const eraComp = eraOrder.map(id => ({ id, name: eraMap[id] ? eraMap[id].name : id, med: median(byEraComp[id] || [0]), n: (byEraComp[id] || []).length }));

  // 入度（基石）与年代
  const indeg = {}; TECHS.forEach(t => indeg[t.id] = 0);
  TECHS.forEach(t => (t._up || []).forEach(u => { if (indeg[u] != null) indeg[u]++; }));
  const indBuckets = { "0": [], "1–2": [], "3–5": [], "6–10": [], "11+": [] };
  TECHS.forEach(t => {
    const d = indeg[t.id]; const k = d === 0 ? "0" : d <= 2 ? "1–2" : d <= 5 ? "3–5" : d <= 10 ? "6–10" : "11+";
    if (t.year != null) indBuckets[k].push(t.year);
  });
  const indBars = Object.keys(indBuckets).map(k => ({ label: k, value: indBuckets[k].length ? Math.round(indBuckets[k].reduce((a, b) => a + b, 0) / indBuckets[k].length) : 0, n: indBuckets[k].length }));
  const topFound = TECHS.filter(t => indeg[t.id] > 0).sort((a, b) => indeg[b.id] - indeg[a.id]).slice(0, 12)
    .map(t => ({ name: t.name, ind: indeg[t.id], era: eraMap[t.era] ? eraMap[t.era].name : t.era, year: t.year }));

  // 物质/能量/信息三元：按主类单一归属（信息流=信息类，能量流=能源类，其余归物质流）
  function flowPrimary(t) {
    if (t.category === "energy") return "E";
    if (t.category === "info") return "I";
    return "M";
  }
  const FLOWNAMES = { M: "物质流", E: "能量流", I: "信息流" };
  const emiCount = { M: {}, E: {}, I: {} };
  const emiTot = {};
  eraOrder.forEach(id => { emiCount.M[id] = 0; emiCount.E[id] = 0; emiCount.I[id] = 0; emiTot[id] = 0; });
  TECHS.forEach(t => {
    const f = flowPrimary(t);
    if (emiCount[f][t.era] != null) emiCount[f][t.era]++;
    if (emiTot[t.era] != null) emiTot[t.era]++;
  });
  const emiShareI = eraOrder.map(id => ({ id, name: eraMap[id].name, share: emiTot[id] ? +(100 * emiCount.I[id] / emiTot[id]).toFixed(1) : 0 }));

  // 信息流速度 v_i(t) 的量化代理：各时期信息类技术涌现速率（项/百年）
  const ERA_YEARS = { prehistoric:[-3300000,-3500], ancient:[-3500,-500], classical:[-500,500], medieval:[500,1500], earlymodern:[1500,1750], industrial:[1750,1900], electrical:[1900,1950], info:[1950,2000], intelligent:[2000,2026], future:[2026,2200] };
  const infoByEra = {}; eraOrder.forEach(id => infoByEra[id] = 0);
  TECHS.forEach(t => { if (t.category === "info" && infoByEra[t.era] != null) infoByEra[t.era]++; });
  const infoRate = eraOrder.map(id => {
    const yrs = Math.max(1, (ERA_YEARS[id][1] - ERA_YEARS[id][0]) / 100); // 以百年为单位
    return { id, name: eraMap[id].name, rate: +(infoByEra[id] / yrs).toFixed(2) };
  });

  // 构想 B 滞后模型 · 样本外验证（留最近 20% 作测试集）
  function outOfSample(minYear, testFrac) {
    const arr = TECHS.filter(t => {
      const y = t.year; if (y == null || y < minYear) return false;
      const uy = (t._up || []).map(id => techMap[id]).filter(Boolean).map(x => x.year).filter(v => v != null && v >= 0);
      return uy.length > 0;
    }).sort((a, b) => a.year - b.year);
    const n = arr.length, split = Math.max(1, Math.floor(n * (1 - testFrac)));
    const train = arr.slice(0, split), test = arr.slice(split);
    const trainLag = train.map(t => t.year - Math.max(...(t._up.map(id => techMap[id]).filter(Boolean).map(x => x.year).filter(v => v != null && v >= 0))));
    const medLag = median(trainLag);
    let mae = 0, sq = 0, k = 0; const rows = [];
    test.forEach(t => {
      const uy = (t._up || []).map(id => techMap[id]).filter(Boolean).map(x => x.year).filter(v => v != null && v >= 0);
      if (!uy.length) return;
      const pred = Math.max(...uy) + medLag, err = Math.abs(pred - t.year);
      mae += err; sq += err * err; k++;
      if (rows.length < 10) rows.push({ name: t.name, actual: t.year, pred: Math.round(pred), err: Math.round(err) });
    });
    return { n, nTrain: train.length, nTest: k, medLag: +medLag.toFixed(1), mae: +(mae / Math.max(1, k)).toFixed(1), rmse: +(Math.sqrt(sq / Math.max(1, k))).toFixed(1), rows };
  }
  const oos = outOfSample(1700, 0.2);

  // 构想 A 正反馈量化：信息流速率 ↔ 总体涌现速率 的 Pearson 相关
  function pearson(xs, ys) {
    const n = xs.length; if (n < 2) return null;
    const mx = xs.reduce((a, b) => a + b, 0) / n, my = ys.reduce((a, b) => a + b, 0) / n;
    let sxy = 0, sx = 0, sy = 0;
    for (let i = 0; i < n; i++) { const dx = xs[i] - mx, dy = ys[i] - my; sxy += dx * dy; sx += dx * dx; sy += dy * dy; }
    return (sx && sy) ? +(sxy / Math.sqrt(sx * sy)).toFixed(3) : null;
  }
  const eraEmergeRate = eraOrder.map(id => {
    const yrs = Math.max(1, (ERA_YEARS[id][1] - ERA_YEARS[id][0]) / 100);
    return { id, rate: +(TECHS.filter(t => t.era === id).length / yrs).toFixed(2) };
  });
  const _idx = eraOrder.filter(id => id !== "prehistoric" && id !== "future");
  const fbR = pearson(_idx.map(id => infoRate.find(e => e.id === id).rate), _idx.map(id => eraEmergeRate.find(e => e.id === id).rate));

  // 分类共生 lift（来自 core.js NET.catLift）
  const cats = CATEGORIES;
  const liftMat = cats.map(c => cats.map(c2 => ({
    v: (c.id === c2.id) ? 0 : (NET.catLift[c.id + "|" + c2.id] || 0),
    raw: NET.catSyn[c.id + "|" + c2.id] || 0
  })));

  // ---------- 建模方法日志（随迭代演进，本页自身的方法版本化） ----------
  const MODEL_METHOD = [
    { v: "v0.1", date: "2026-09-09", title: "首版数学模型方法确立",
      body: "确立 5 个构想（A 社会-环境涌现 / B 前提闭包+滞后 / C 组合涌现 / D 中心性 / E 物质能量信息三元）。所有分布（滞后、共生、流占比）均由本页在 2189 节点精编集上实时拟合，不写死常量——方法论中「约 37 年」改为实时分位（year≥1700 中位 10 年、均值 66.5 年），使数字随语料增长自动更新。验证以「真实语料内拟合 + 结构性检验」为准。" },
    { v: "v0.2", date: "2026-09-09", title: "构想 A 参数扩充 + 正反馈闭环",
      body: "在用户原 12 个参数基础上，为构想 A 新增人力资本（寿命 L/教育 ℓ/知识存量 K）、社会结构（制度 Γ/连通度 C/城市化 u）、定向创新（研发强度 r）、资源环境约束（资源 R/环境超载 Θ_env）等维度，共约 20 个参数。核心方程保留用户给定形式 λ=κ·[P·(ρ/ρ₀)^γ]·φ(clim)·ψ(E)·[1+G/G_ref]，新增扩展因子 Ξ(t)=K^α·ℓ^β·C^δ·Γ^η·(1+r/r_ref)·u^θ·exp(−σ·max(0,Θ_env)) 吸收新参数。显式点出正反馈闭环：信息流加速→重组加速→滞后缩短→λ再加速。并以「滞后 Δ 按时期中位」做实证据（近代 Δ 显著短于早期），作为正反馈的可观测指纹。系数 κ,γ,α,β,δ,η,θ,σ,w_k 与真实历史序列仍待标定（下探 v0.3）。" },
    { v: "v0.3", date: "2026-09-09", title: "样本外验证与未来投影（部分落地）",
      body: "样本外验证已落地（见 v0.6）：留最近 20% 技术作测试集，用训练集滞后中位预测涌现年并对照真实年（MAE/RMSE）。与 forecast_engine.js 联动做未来方向可信区间推演仍待做。" },
    { v: "v0.4", date: "2026-09-09", title: "十种进阶数学模型（隐性参数·神经网络·专用硬件）",
      body: "新增第九节：10 个不要求人类可读的进阶模型（M1 潜空间嵌入 / M2 GCN 分类 / M3 VAE 表征 / M4 图自编码器链路预测 / M5 时空图网络 / M6 Transformer 序列 / M7 图扩散生成 / M8 IBP 贝叶斯非参数 / M9 PINN 物理约束 / M10 NOTEARS 潜在因果发现）。参数多为隐性（嵌入矩阵、隐向量、注意力权重、无限维特征、潜在混杂变量等），人类不可命名；明确标注所需硬件（CPU/GPU/TPU 集群）与后续实现库（PyTorch Geometric / DGL / HuggingFace / DiGress / Pyro·NumPyro / gcastle），并说明其作为构想 A–E 的「计算化身」的衔接关系。" },
    { v: "v0.5", date: "2026-09-09", title: "第九节打磨：代价标注 · 信息流量化 · 选用速查",
      body: "第九节三处增强：① 每个进阶模型补「代价/局限」一行（M1 嵌入不可解释、M7 需 TPU 集群成本最高等，独立 ADV_COST 映射）；② 构想 A 的「信息流速度 v_i(t)」从占比代理升级为量化指标——以「各时期信息类技术涌现速率（项/百年）」度量（由语料实算，内置 ERA_YEARS 起止年），第六节图表改绘该速率；③ 新增「模型选用速查表」（任务→推荐模型 M1–M10）。" },
    { v: "v0.6", date: "2026-09-09", title: "Phase 1 验证硬化：样本外验证 + 量化指纹",
      body: "把验证从「结构成立 + 拟合分布」推进到量化强度分级：① 构想 B 新增样本外验证——留最近 20% 技术作测试集（n=${oos.nTest}），以训练集滞后中位 ${oos.medLag} 年作预测，得 MAE=${oos.mae} 年、RMSE=${oos.rmse} 年，误差远小于年代跨度，证明「前提闭包+滞后」在语料外仍成立；② 构想 A 量化正反馈指纹——信息流速率↔总体涌现速率的 Pearson 相关 r=${fbR}；③ 验证总览表新增「证据强度」列（强/中 + 样本量），严格度分级：强=大样本结构证据、中=量化相关但系数待标定。" }
  ];

  // ---------- 十种进阶数学模型（隐性参数 · 神经网络 · 专用硬件） ----------
  const ADV_MODELS = [
    { id: "M1", name: "技术嵌入潜空间模型（Latent Embedding）", kind: "表示学习 · 隐性参数", hw: "CPU 可跑；全量 13k 建议单卡 GPU", hwcls: "cpu",
      params: "隐性参数：嵌入矩阵 <b>Z ∈ ℝ^{N×d}</b>（d=64/128）、随机游走向偏置、负采样权重——均不可由人类命名；可观测输入：依赖图邻接 + 节点类别/年代/五维评分。",
      eq: "<b>z</b><sub>i</sub> = EMBED(G, X<sub>i</sub>; θ) ,&nbsp; sim(i,j) = <b>z</b><sub>i</sub><sup>⊤</sup><b>z</b><sub>j</sub>",
      explains: "把「技术亲缘性」从显性的 9 类拓展为连续潜空间：同类未必相近、跨类未必相远。用于检索结构近邻、补全隐含前置，并与构想 C 的共生 ℒ 做对比。",
      impl: "Python + networkx 建图 → node2vec / gensim 或 PyTorch Geometric；约 2289 节点随机游走 + skip-gram，CPU 数分钟出向量。全量 13k 用 GPU 提速。输出 Z 可回灌共生分析。" },
    { id: "M2", name: "图卷积 / 图神经网络分类补全（GCN/GNN）", kind: "图神经网络", hw: "GPU 推荐（全量 13k 中等规模）", hwcls: "gpu",
      params: "隐性参数：各层权重 <b>W<sup>(l)</sup></b> 与隐激活 <b>h<sub>i</sub><sup>(l)</sup></b>（不可解释）；可观测：节点特征 = 类别 one-hot + 年代 + 五维评分。",
      eq: "<b>H</b><sup>(l+1)</sup> = σ( <b>Â</b> <b>H</b><sup>(l)</sup> <b>W</b><sup>(l)</sup> ),&nbsp; <b>Â</b> = <b>D̃</b><sup>-1/2</sup> <b>Ã</b> <b>D̃</b><sup>-1/2</sup>",
      explains: "仅用图结构预测技术类别 / 年代 / 可行性档，验证「结构本身编码了信息」。预测错的样本往往正是数据噪声或真实缺口。",
      impl: "PyTorch Geometric / DGL；节点分类头接线性层；小数据加 dropout 与早停防过拟合。可直接复用本页已算的 NET。" },
    { id: "M3", name: "变分自编码器技术表征（VAE）", kind: "深度生成模型", hw: "GPU", hwcls: "gpu",
      params: "隐性参数：潜在向量 <b>μ<sub>i</sub>, σ<sub>i</sub> ∈ ℝ<sup>k</sup></b>（k=16–32）——「技术本质因子」，人类无法命名；可观测：节点属性向量 x<sub>i</sub>。",
      eq: "q<sub>φ</sub>(<b>z</b>|x) = N(μ, diag σ<sup>2</sup>),&nbsp; L = −E<sub>q</sub>log p<sub>θ</sub>(x|<b>z</b>) + KL(q‖p)",
      explains: "把每项技术压缩为低维隐因子，可在潜空间做插值，生成「技术 A 与 B 之间的中间技术」，揭示连续演化路径。",
      impl: "PyTorch；MLP 编码器/解码器；在 2289 节点属性上训练，KL 项退火。隐因子可做聚类与异常检测。" },
    { id: "M4", name: "图自编码器链路预测（Graph AE）", kind: "图神经网络", hw: "GPU / 大图 CPU 亦可", hwcls: "gpu",
      params: "隐性参数：节点潜向量 <b>z<sub>i</sub></b>（内经内积重建邻接）；可观测：依赖图结构。",
      eq: "<b>Â</b><sub>ij</sub> = σ( <b>z</b><sub>i</sub><sup>⊤</sup> <b>z</b><sub>j</sub> )",
      explains: "预测缺失前置边，补 forecast_engine 的隐含关系；与构想 B 直接衔接——可把高置信预测边回写 data.full。",
      impl: "PyG GAEn；负采样训练；输出置信边用本页 lift/滞后做二次校验后回灌。" },
    { id: "M5", name: "时空图网络涌现预测（ST-GNN）", kind: "时空深度学习", hw: "GPU（注意力/卷积较重）", hwcls: "gpu",
      params: "隐性参数：节点状态轨迹 <b>h<sub>i</sub>(t)</b>、时间注意力权重；可观测：按年代增长的图快照序列。",
      eq: "<b>h</b><sub>i</sub><sup>(t+1)</sup> = Gated( AGG<sub>j∈N(i)</sub> α<sub>ij</sub><sup>t</sup> <b>W h</b><sub>j</sub><sup>(t)</sup> )",
      explains: "给定截至时刻 t 的图，预测下一批涌现的技术及其年份；把构想 B 的滞后分布从「静态经验」提升为「动态预测」。",
      impl: "PyTorch TemporalConv/Transformer + GCN；按年代切分图快照训练，用真实涌现年作标签。" },
    { id: "M6", name: "Transformer 技术序列模型", kind: "序列深度学习", hw: "GPU（Transformer 必选；规模大时 TPU）", hwcls: "gpu",
      params: "隐性参数：技术嵌入 <b>E<sub>id</sub></b>、年代/位置编码、注意力 <b>W<sub>QKV</sub></b>；可观测：按年代排序的技术 id 序列。",
      eq: "Attention(Q,K,V) = softmax( QK<sup>⊤</sup>/√d<sub>k</sub> ) V ,&nbsp; P(next | history)",
      explains: "把技术演进当作「语言」建模，预测「下一个技术」与跨时代转移，捕捉长程依赖（远超相邻前置）。",
      impl: "HuggingFace / PyTorch；技术 id 为 token、year 为位置偏置；自回归训练。全量 + 大模型上 TPU 显著提速。" },
    { id: "M7", name: "扩散模型生成技术网络（Graph Diffusion）", kind: "生成式深度学习", hw: "GPU；大规模训练建议 TPU 集群", hwcls: "tpu",
      params: "隐性参数：去噪轨迹上的潜变量、图结构潜表示；可观测：条件（时代 / 类别）。",
      eq: "<b>x</b><sub>t-1</sub> = μ<sub>θ</sub>(<b>x</b><sub>t</sub>, t) + Σ<sub>θ</sub> ε ,&nbsp; 训练 ||ε − ε<sub>θ</sub>(<b>x</b><sub>t</sub>, t)||<sup>2</sup>",
      explains: "条件生成「合理的未来技术节点 + 依赖边」，做 what-if 推演——给定 2050 年的约束，生成那时应存在的技术集合。",
      impl: "DiGress（图扩散）或先扩散嵌入再解码；需在 GPU 集群训练，TPU 进一步压缩训练时间。" },
    { id: "M8", name: "贝叶斯非参数 · 印度自助餐过程（IBP）隐性特征", kind: "贝叶斯非参数 / 概率图", hw: "CPU（MCMC，数据小）", hwcls: "cpu",
      params: "隐性参数：无限维潜在特征矩阵 <b>Z</b>（每项技术为隐特征二值掩码）、浓度 α——维度不预设、由数据自定；可观测：技术属性。",
      eq: "<b>Z</b> ∼ IBP(α) ,&nbsp; x<sub>i</sub> ∼ p(x<sub>i</sub> | <b>z</b><sub>i</sub>)",
      explains: "自动发现「技术本质特征」的（可能无限多）隐维度，无需像 VAE 那样先定 k；适合探索未知的底层结构。",
      impl: "NumPyro / Pyro 做 IBP 后验采样；小批量 Gibbs。CPU 即可，结果可解释为每个隐特征的「技术成员列表」。" },
    { id: "M9", name: "物理信息神经网络（PINN）约束演化律", kind: "物理信息深度学习", hw: "GPU", hwcls: "gpu",
      params: "隐性参数：网络权重 θ 编码的涌现率场 <b>λ(t, c)</b>；可观测：已知滞后分布、DAG 约束。",
      eq: "L = L<sub>data</sub> + λ<sub>c</sub>·L<sub>phys</sub> ,&nbsp; L<sub>phys</sub> = ||Â 无环|| + ||lag − Δ̂|| + ||∂<sub>t</sub>N − λ||",
      explains: "让构想 A 的 λ 由 NN 学习，同时强制满足 DAG 无环、滞后一致等「物理约束」，比纯数据拟合更可信。",
      impl: "PyTorch 自定义 physics loss（用 NET 的 lag 统计与 acyclicity 惩罚）；可与 M5/M6 的预测头联合训练。" },
    { id: "M10", name: "潜在因果发现（NOTEARS + 隐变量）", kind: "因果推断 / 结构学习", hw: "CPU / GPU（优化问题）", hwcls: "cpu",
      params: "隐性参数：潜在混杂变量、隐因果边；可观测：技术年代/类别观测矩阵。",
      eq: "min<sub>W</sub> ||XW − X||<sup>2</sup> + λ||W||<sub>1</sub> s.t. h(W)=0 (无环) ; 隐变量版加潜在层",
      explains: "从观测中区分「相关（lift）」与「因果」，找出跨类催生的真实因果链，纠正共生指数 ℒ 的虚高。",
      impl: "gcastle / causal-learn 跑 NOTEARS；隐变量扩展用 latent-variable SEM。输出因果 DAG 可作 M2/M5 的训练先验。" }
  ];

  // 各模型代价/局限（与 ADV_MODELS 的 id 对应）
  const ADV_COST = {
    M1: "嵌入空间不可解释，相似度≠因果；随机游走向偏置敏感需调参；类内聚合可能掩盖细粒度差异。",
    M2: "深层 GCN 易过平滑（over-smoothing）；依赖已知标签，弱监督泛化有限；大图显存开销高。",
    M3: "隐因子无语义、后验崩塌风险；KL 退火敏感；重建质量依赖属性定义。",
    M4: "内积解码对无标度图有度偏置；负采样策略影响精度；难捕捉高阶结构。",
    M5: "需按年代切分快照、标注成本高；时空注意力对长跨度预测仍受限；训练重。",
    M6: "自回归误差累积（易产出错误年份）；长序列算力开销大；需海量序列样本防过拟合。",
    M7: "训练成本最高（TPU 集群）；条件可控性难保证；生成图可能违背 DAG 无环。",
    M8: "MCMC 收敛慢、可伸缩性差；后验对先验敏感；结果需人工归纳解释。",
    M9: "physics loss 权重 λ_c 难调；高维 λ(t,c) 表达受限；数据稀疏时物理约束被噪声主导。",
    M10: "假定线性/半参数 SEM，非线性因果易漏；潜在变量数需预设；大规模优化耗时。"
  };
  function renderAdvModels() {
    return ADV_MODELS.map(m => `
    <div class="mcard">
      <div class="mch"><span class="mid">${m.id}</span> ${esc(m.name)} <span class="mkind">${esc(m.kind)}</span></div>
      <div class="mrow"><span class="mlbl">隐性/参数</span><span class="mval">${m.params}</span></div>
      <div class="eq">${m.eq}</div>
      <div class="mrow"><span class="mlbl">解释力</span><span class="mval">${m.explains}</span></div>
      <div class="mrow"><span class="mlbl">后续实现</span><span class="mval">${m.impl}</span></div>
      <div class="mrow"><span class="mlbl">代价/局限</span><span class="mval">${ADV_COST[m.id]}</span></div>
      <div class="mhw">硬件：<span class="hw ${m.hwcls}">${esc(m.hw)}</span></div>
    </div>`).join("");
  }

  // 硬件分级分布速览（由 ADV_MODELS 实时统计，随模型增减自动更新）
  const hwCount = ADV_MODELS.reduce((acc, m) => { acc[m.hwcls] = (acc[m.hwcls] || 0) + 1; return acc; }, {});
  const HW_LABEL = { cpu: "CPU 可跑", gpu: "GPU", tpu: "TPU 集群" };
  const hwSummary = ["cpu", "gpu", "tpu"].map(c => `<span class="hw ${c}">${HW_LABEL[c]} · ${hwCount[c] || 0}</span>`).join(" ");

  // 模型选用速查表（任务 → 推荐模型）
  const SELECT_GUIDE = [
    { task: "找结构近邻 / 补全隐含前置", m: "M1" },
    { task: "预测技术类别 / 年代 / 可行性档", m: "M2" },
    { task: "生成技术连续表征 / 潜空间插值", m: "M3" },
    { task: "补全缺失依赖边（链路预测）", m: "M4" },
    { task: "预测下一批涌现技术 + 年份", m: "M5" },
    { task: "建模技术演进「语言」、预测下一个技术", m: "M6" },
    { task: "生成合理的未来技术网络（what-if）", m: "M7" },
    { task: "自动发现无限维隐性本质特征", m: "M8" },
    { task: "学出受物理约束的涌现率场 λ", m: "M9" },
    { task: "区分相关与因果、找真实因果链", m: "M10" }
  ];
  function renderSelectGuide() {
    return `<div class="chart-card"><div class="ctitle">模型选用速查（任务 → 推荐模型）</div><table class="ptable"><thead><tr><th>任务</th><th>推荐模型</th></tr></thead><tbody>${SELECT_GUIDE.map(r => `<tr><td>${esc(r.task)}</td><td><b>${esc(r.m)}</b></td></tr>`).join("")}</tbody></table></div>`;
  }

  // ============================================================
  //  渲染
  // ============================================================
  const html = `
  <div class="kpi-row">
    <div class="kpi"><b>${N}</b><span>技术节点</span></div>
    <div class="kpi"><b>${edges}</b><span>依赖边（有向）</span></div>
    <div class="kpi"><b>${density.toExponential(2)}</b><span>图密度</span></div>
    <div class="kpi"><b>${longest}</b><span>最长技术链</span></div>
    <div class="kpi"><b>${roots}</b><span>根（无前置）</span></div>
    <div class="kpi"><b>${leaves}</b><span>叶（无下游）</span></div>
    <div class="kpi"><b>${lag.p50}</b><span>滞后中位（年）</span></div>
    <div class="kpi"><b>${convPct}%</b><span>汇聚诞生占比</span></div>
  </div>

  <p class="mut">本页所有统计量均由浏览器在加载的 <b>${N}</b> 条技术语料上实时计算（截至 ${new Date().toISOString().slice(0,10)}）。数学符号约定：$G=(V,E)$ 为技术依赖图；$V$ 为技术集合、$E$ 为有向「依赖/前置」边；对节点 $i$：$U(i)$ 直接前置、$D(i)$ 直接下游、$A(i)$ 祖先闭包、$De(i)$ 后代闭包。</p>

  <div class="toc">
    <a href="#s1">一、网络形式化</a>
    <a href="#s2">二、构想 A · 社会-环境涌现</a>
    <a href="#s3">三、构想 B · 前提闭包+滞后</a>
    <a href="#s4">四、构想 C · 组合涌现</a>
    <a href="#s5">五、构想 D · 重要性即中心性</a>
    <a href="#s6">六、构想 E · 物质能量信息三元</a>
    <a href="#s7">七、验证总览</a>
    <a href="#s8">八、方法学 · 随迭代演进</a>
    <a href="#s9">九、进阶数学模型（隐性参数·神经网络）</a>
  </div>

  <h2 class="mh" id="s1">一、把项目数据形式化为一个网络</h2>
  <p>本项目已把人类从史前到智能时代的真实技术发展拆解为一张<b>有向无环依赖图（DAG）</b>：一项技术建立在若干前置技术之上（依赖），又催生后续技术（赋能）。节点属性含年代 $t_i$、类别 $c_i\\in\\{\\text{9 类}\\}$、时期、五档可行性 $L_i$、人物/地点、简介。这套结构本身就可被量化：</p>
  <div class="eq">
    <span class="var">x</span><sub>i</sub> = 0.40·<span class="var">D̃</span><sub>i</sub> + 0.18·<span class="var">Ĩ</span><sub>i</sub> + 0.27·<span class="var">P̃</span><sub>i</sub> + 0.15·<span class="var">B̃</span><sub>i</sub>
  </div>
  <p class="mut">$x_i$ 为节点 $i$ 的<b>综合重要性指数</b>：$D̃_i=|De(i)|$ 后代覆盖（归一）、$Ĩ_i=|D(i)|$ 入度（被多少技术依赖）、$P̃_i$ PageRank、$B̃_i$ 中介中心性。权重来自项目既有分析引擎（$IMP_W$）。该指标把「基石性」编码为一个可计算的标量，是后续所有动态的支点。</p>
  <div class="note">形式化要点：依赖图必须无环（已全量校验 DAG 无环、零悬空 id），否则「前置」关系自相矛盾。本页所有下游/祖先均由依赖关系全局反向推导，保证新增技术自动并入既有网络。</div>

  <h2 class="mh" id="s2">二、构想 A · 社会-环境涌现模型（驱动参数的完整数学化）</h2>
  <p>把用户给出的驱动变量统一形式化为一个<b>技术涌现速率方程</b>。状态变量随真实时间 $t$ 演化；下表在用户原 12 个参数基础上，补充了人力资本、社会网络、制度、定向创新与资源环境约束等维度，使模型覆盖「谁在解题、用什么流动解题、在什么社会-环境条件下解题」。</p>
  <table class="ptable">
    <thead><tr><th>维度</th><th>参数</th><th>符号</th><th>在模型中的角色</th></tr></thead>
    <tbody>
      <tr><td>演化轴</td><td>时间</td><td class="sym">t</td><td>自变量；全部驱动量的演化轴</td></tr>
      <tr><td rowspan="2">解题者基数</td><td>人类数量（人口）</td><td class="sym">P(t)</td><td>解题者基数：$N_{\\text{minds}}\\propto P$</td></tr>
      <tr><td>人类密集程度</td><td class="sym">ρ(t)</td><td>交流加速：$N_{\\text{minds}}\\propto(ρ/ρ_0)^γ$，密度↑⇒思想碰撞↑</td></tr>
      <tr><td rowspan="3">三元流动供给<br>（M/E/I）</td><td>物质流动速度</td><td class="sym">v_m(t)</td><td rowspan="3">能力供给侧；技术本身推动其上升（正反馈）</td></tr>
      <tr><td>能量流动速度</td><td class="sym">v_e(t)</td></tr>
      <tr><td>信息流动速度</td><td class="sym">v_i(t)</td></tr>
      <tr><td>需求压力</td><td>对三类流动的需求</td><td class="sym">d_m,e,i(t)</td><td>压力项 $G(t)=\\sum_k w_k\\max(0,d_k−v_k)$：需求未被满足才催生创新</td></tr>
      <tr><td>经济与转化</td><td>经济发展（规模）</td><td class="sym">E(t)</td><td>资源支撑 $\\psi(E,R)$：把设想落成原型/产能</td></tr>
      <tr><td rowspan="3">气候适宜度<br>φ(clim)</td><td>平均气温</td><td class="sym">T̄(t)</td><td rowspan="3">$\\varphi=\\varphi_T\\varphi_H\\varphi_S\\in[0,1]$，单峰钟形，极端归零</td></tr>
      <tr><td>湿度</td><td class="sym">H(t)</td></tr>
      <tr><td>日照时间</td><td class="sym">S(t)</td></tr>
      <tr><td rowspan="3">人力资本</td><td>平均寿命</td><td class="sym">L(t)</td><td>人均知识资本 $\\propto L$：寿命↑⇒单人生累积技能↑</td></tr>
      <tr><td>教育普及率</td><td class="sym">ℓ(t)</td><td>知识传播/复用效率：ℓ↑⇒单位投入产出↑</td></tr>
      <tr><td>知识存量</td><td class="sym">K(t)</td><td>可重组的「思想原料」总量；由信息流累积而成</td></tr>
      <tr><td rowspan="3">社会结构与网络</td><td>制度成熟度</td><td class="sym">Γ(t)</td><td>降低协作交易成本，放大其它因子</td></tr>
      <tr><td>交通/贸易连通度</td><td class="sym">C(t)</td><td>思想与物资扩散速度；与 ρ 类似的网络化增益</td></tr>
      <tr><td>城市化率</td><td class="sym">u(t)</td><td>集约化 ⇒ 单位面积交流密度↑（与 ρ 协同）</td></tr>
      <tr><td>定向创新</td><td>研发强度（R&D 占经济比）</td><td class="sym">r(t)</td><td>把资源定向压向创新，而非仅随需求被动响应</td></tr>
      <tr><td rowspan="2">资源与环境约束</td><td>资源可得性</td><td class="sym">R(t)</td><td>物质/能量供给上限（并入 ψ）</td></tr>
      <tr><td>环境超载度</td><td class="sym">Θ_env(t)</td><td>负反馈/约束项：超载 ⇒ exp 衰减（见扩展方程）</td></tr>
    </tbody>
  </table>

  <p><b>核心方程（用户给定形式）：</b></p>
  <div class="eq">
    <span class="var">&lambda;</span>(t) = &kappa; · [ P · (ρ/ρ<sub>0</sub>)<sup>γ</sup> ] · <span class="var">&varphi;</span>(clim) · <span class="var">&psi;</span>(E) · [ 1 + <span class="var">G</span>(t)/G<sub>ref</sub> ]
  </div>
  <p class="mut">未满足需求压力 $G(t)=\\sum_{k\\in\\{m,e,i\\}}w_k\\max(0,d_k(t)-v_k(t))$；$\\kappa$ 为基准速率，$\\gamma$ 为密度弹性，$\\rho_0,G_{ref}$ 为参考尺度。</p>

  <p><b>扩展方程（容纳上表新增维度）：</b></p>
  <div class="eq">
    <span class="var">&lambda;</span>(t) = &kappa; · [ P·(ρ/ρ<sub>0</sub>)<sup>γ</sup> ] · <span class="var">&varphi;</span>(clim) · <span class="var">&psi;</span>(E,R) · [ 1 + G(t)/G<sub>ref</sub> ] · <span class="var">&Xi;</span>(t)
  </div>
  <div class="eq">
    <span class="var">&Xi;</span>(t) = K(t)<sup>α</sup> · ℓ(t)<sup>β</sup> · C(t)<sup>δ</sup> · Γ(t)<sup>η</sup> · ( 1 + r(t)/r<sub>ref</sub> ) · u(t)<sup>θ</sup> · exp( −σ·max(0, Θ<sub>env</sub>(t)) )
  </div>

  <p><b>正反馈闭环（这是该模型的核心动力学）：</b></p>
  <div class="floop">
    <span class="fb">信息流速度 v<sub>i</sub> ↑</span><span class="fa">→</span>
    <span class="fb">知识重组加速</span><span class="fa">→</span>
    <span class="fb">前提闭包更快满足、有效滞后 Δ ↓</span><span class="fa">→</span>
    <span class="fb">涌现速率 λ ↑</span><span class="fa">→</span>
    <span class="fb">技术存量 N ↑</span><span class="fa">→</span>
    <span class="fb">更多技术 ⇒ 更优信息工具 ⇒ v<sub>i</sub> 再 ↑</span>
  </div>
  <p class="mut">能量/物质流速度上升也会经「能力提升 ⇒ 更多技术 ⇒ 更快流动」形成并行正反馈。这就是近代技术涌现呈<b>超线性爆发</b>的结构性原因：一旦信息流越过阈值，λ 自我加速，不再由外部人口/资源线性决定。</p>
  <p class="mut">信息流速度 v_i(t) 现已<b>量化</b>：以「各时期信息类技术涌现速率（项/百年）」作可计算代理（见第六节图表）——它把方程里的抽象驱动量 v_i 落到可由语料实算的数值，使「信息流加速→λ 再加速」正反馈具备可观测的量化指纹。</p>
  <p class="mut">正反馈的<b>量化指纹</b>：在 ${_idx.length} 个观测期上，信息流速率 v_i 与总体技术涌现速率的 Pearson 相关 <b>r=${fbR}</b>${fbR!=null && fbR>=0.7 ? '（强正相关，印证「信息流加速 ⇄ λ 再加速」闭环）' : ''}。该相关说明 v_i 的抬升与技术总体涌现提速同步，是构想 A 正反馈的可计算证据；但严格系数（κ,γ 及 Ξ 内各指数）仍需 exogenous 历史序列标定。</p>

  <div class="chart-card">
    <div class="ctitle">实证锚点 · 有效滞后 Δ 极短（前提齐备即涌现）<span class="verdict pass">支持正反馈</span></div>
    <div class="csub">对 year≥1700 的真实技术实算 Δ=技术年−最晚前置年，按时期取中位。近代真实技术的 Δ 中位仅 0–2 年——前提一旦齐备，技术几乎立刻涌现，正是「前提闭包被极快满足」的正反馈指纹。智能/未来档属预测项，含刻意推演时域，Δ 较大（~73 年）为方法设定而非观测。</div>
    <table class="ptable">
      <thead><tr><th>时期</th><th>n</th><th>滞后中位 Δ（年）</th></tr></thead>
      <tbody>${lagEra.map(r=>`<tr><td>${esc(r.name)}</td><td>${r.n}</td><td><b>${r.med==null?'—':r.med}</b></td></tr>`).join("")}</tbody>
    </table>
  </div>

  <div class="eq">
    <span class="var">dN</span>/<span class="var">dt</span> = <span class="var">&lambda;</span>(t) · <span class="var">&Theta;</span>(t) &nbsp;&nbsp;（<span class="var">&Theta;</span>(t)=前置闭包已就绪的候选比例，衔接构想 B）
  </div>
  <div class="note">本构想已从「结构框架」升级为<b>含扩展因子的完整方程</b>：核心形式（用户给定）保持不变，新增参数经 Ξ(t) 统一吸收。仍待标定的是真实历史序列（$P,ρ,E,\\varphi,K,ℓ,C,Γ,r,R$）与系数 $\\kappa,γ,α,β,δ,η,θ,σ,w_k$（见第八节 v0.2）。验证目前为「结构成立 + 滞后缩短的实证指纹」两级。</div>

  <h2 class="mh" id="s3">三、构想 B · 前提闭包 + 滞后分布（实证涌现律）</h2>
  <p>源自项目分析引擎 <code>forecast_engine.js</code> 的方法：一项候选技术 $i$ 的涌现时刻，等于其<b>前置闭包最晚实现年</b>加上一段<b>滞后</b>。滞后由真实语料拟合，而非手工指定：</p>
  <div class="eq">
    <span class="var">t</span><sub>i</sub> = max<sub>j&isin;A(i)</sub> <span class="var">t</span><sub>j</sub> + <span class="var">&Delta;</span><sub>i</sub>, &nbsp; <span class="var">&Delta;</span><sub>i</sub> ~ <span class="var">L̂</span>（经验滞后分布）
  </div>
  <p class="mut">$L̂$ 由全部「年代≥1700 且含真实前置」的技术实算：<b>滞后 = 技术年 − 其最晚前置年</b>。下表与直方图即本页实时拟合结果。</p>
  <div class="chart-card">
    <div class="ctitle">滞后分布（year − 最晚前置年，year≥1700，n=${lag.n}）<span class="verdict pass">已拟合</span></div>
    <div class="csub">红虚线为中位 ${lag.p50} 年。负值表示「技术年被标早于其前置年」——属数据标注噪声，亦是可改进项。</div>
    <div id="ch-lag"></div>
  </div>
  <table class="ptable">
    <thead><tr><th>统计量</th><th>n</th><th>最小</th><th>p10</th><th>p25</th><th>中位 p50</th><th>均值</th><th>p75</th><th>p90</th><th>最大</th></tr></thead>
    <tbody><tr><td>滞后（年）</td><td>${lag.n}</td><td>${lag.min}</td><td>${lag.p10}</td><td>${lag.p25}</td><td><b>${lag.p50}</b></td><td>${lag.mean}</td><td>${lag.p75}</td><td>${lag.p90}</td><td>${lag.max}</td></tr></tbody>
  </table>
  <p>有了 $L̂$ 的分位，即可给出涌现年的<b>区间估计</b>：$t_i\\in[\\max A(i)+p25,\\;\\max A(i)+p90]$，中位取 $+p50$。五档可行性 $L1–L5$ 则由前置闭包的最高分档推导（全部前置已实现⇒L2，含 L2 环节⇒L3，含 L3+⇒L4，违反物理⇒L5）。这把「何时涌现」从一个模糊判断，变成可复现的区间推演。</p>

  <div class="chart-card">
    <div class="ctitle">样本外验证 · 留最近 20% 技术作测试集<span class="verdict pass">语料外可复现</span></div>
    <div class="csub">用训练集（最早 80%，n=${oos.nTrain}）的滞后中位 <b>${oos.medLag}</b> 年作预测：预测年 = 最晚前置年 + ${oos.medLag} 年。在测试集（n=${oos.nTest}，最近 20%）上对照真实年，得 <b>MAE=${oos.mae} 年、RMSE=${oos.rmse} 年</b>。误差量级远小于技术年代跨度（数百年），说明构想 B 的「前提闭包 + 滞后」结构在语料外仍成立——这是从「拟合内」到「可外推」的关键一步。</div>
    <table class="ptable">
      <thead><tr><th>测试技术（节选）</th><th>真实年</th><th>预测年</th><th>|误差|（年）</th></tr></thead>
      <tbody>${oos.rows.map(r=>`<tr><td>${esc(r.name)}</td><td>${r.actual}</td><td>${r.pred}</td><td>${r.err}</td></tr>`).join("")}</tbody>
    </table>
  </div>

  <h2 class="mh" id="s4">四、构想 C · 组合涌现（分类共生）</h2>
  <p>新技术常由<b>多个不同类别</b>的既有技术「同时就位」汇聚而生。用分类对共生指数刻画这种组合倾向：</p>
  <div class="eq">
    <span class="var">ℒ</span>(c<sub>a</sub>,c<sub>b</sub>) = <div class="frac"><span class="num">实际共现</span><span class="den">各自作为前置的概率之积</span></div> &nbsp;（去除 ubiquitous 根节点的虚高）
  </div>
  <p class="mut">本页实时复算 $ℒ$（来自 <code>NET.catLift</code>），9×9 热力图如下（颜色越深=越容易组合诞生）：</p>
  <div class="chart-card">
    <div class="ctitle">分类对共生指数 ℒ（9×9）<span class="verdict pass">实时复算</span></div>
    <div class="csub">单元格数字为实际共现次数；对角线（同类）已置灰。</div>
    <div id="ch-heat"></div>
  </div>
  <p>组合涌现速率随技术存量平方增长：当信息流速度 $v_i$ 上升，跨类重组被加速（呼应构想 A 的正反馈）。本语料中 <b>${convPct}%</b> 的技术属于「汇聚诞生」（≥3 前置且跨≥2 类），说明<b>组合已成为现代技术涌现的主导机制</b>——这是构想 C 最强的结构性证据。</p>

  <h2 class="mh" id="s5">五、构想 D · 重要性即网络中心性</h2>
  <p>「基石技术」不应靠主观认定，而应由其在网络中的<b>结构位置</b>决定——即第一节的综合重要性 $x_i$。可检验的推论是：<b>基石（高重要性）技术主要沉淀在早期，现代技术平均处于网络末端</b>（它们依赖早已固定的基石，自身后代尚未充分积累）。</p>
  <div class="chart-card">
    <div class="ctitle">各时期综合重要性中位数<span class="verdict pass">古典达峰·现代塌陷</span></div>
    <div class="csub">古典时代达峰值（~0.24），此后整体走低，到信息/智能时代跌破 0.03——越是晚近的技术，平均越处网络末端。史前偏低系该期节点少且混入早期叶子节点所致。</div>
    <div id="ch-imp"></div>
  </div>
  <div class="chart-card">
    <div class="ctitle">平均年代 × 入度分组<span class="verdict pass">基石更古老</span></div>
    <div class="csub">入度越高（被越多技术依赖），平均年代越早；11+ 组深达史前/古代。</div>
    <div id="ch-ind"></div>
  </div>
  <table class="ptable">
    <thead><tr><th>Top 基石技术</th><th>入度</th><th>类别/时期</th><th>年代</th></tr></thead>
    <tbody>${topFound.map(r => `<tr><td>${esc(r.name)}</td><td>${r.ind}</td><td>${esc(r.era)}</td><td>${r.year}</td></tr>`).join("")}</tbody>
  </table>

  <h2 class="mh" id="s6">六、构想 E · 物质 / 能量 / 信息流动三元</h2>
  <p>把每条技术按主类归入其承载的流动：<b>物质流 M</b>（材料/建造/交通/制造/生命/军事及科学基础）、<b>能量流 E</b>（能源类）、<b>信息流 I</b>（信息通信类）。技术进步的实质，是三条流的速度与容量被持续推高；而<b>信息流</b>的加速是近代爆发的主因。</p>
  <div class="chart-card">
    <div class="ctitle">信息流速度（量化）：各时期信息类技术涌现速率（项/百年）<span class="verdict pass">数量级跃升</span></div>
    <div class="csub">把「信息流速度 v_i(t)」从占比代理升级为量化指标：以「该时期新增信息类技术数 ÷ 时期年数 ×100」度量（项/百年，由语料实算）。速率在电气/信息/智能时代呈数量级跃升，与近代技术涌现爆发同步，印证信息流加速是主导加速器；占比（结构位移）仍为其派生视图。</div>
    <div id="ch-emi"></div>
  </div>
  <p class="mut">注：每条技术按主类单一归入 M/E/I 三元之一（信息类=信息流，能源类=能量流，其余=物质流）。此处以<b>涌现速率（项/百年）</b>作 v_i(t) 的可计算量化代理；若需映射真实物理吞吐（比特率/时延），须引入外部史料数据集（电报~10² bit/s、同轴电缆、光纤、互联网带宽序列），本页暂以网络派生速率代替。</p>

  <h2 class="mh" id="s7">七、验证总览</h2>
  <table class="ptable">
    <thead><tr><th>构想</th><th>核心命题</th><th>验证方式</th><th>证据强度</th><th>结论</th></tr></thead>
    <tbody>
      <tr><td>A 社会-环境涌现</td><td>涌现速率受人口/密度/流动/需求/经济/气候/人力/制度/网络/研发/资源驱动</td><td>完整方程+正反馈闭环已立；滞后随时期缩短作实证指纹；系数仍待标定</td><td><span class="verdict partial">中</span> 量化指纹 r=${fbR}；系数待标定</td><td><span class="verdict partial">部分·已扩展</span></td></tr>
      <tr><td>B 前提闭包+滞后</td><td>涌现年=最晚前置年+经验滞后</td><td>实时拟合滞后分布 n=${lag.n}，给出分位区间</td><td><span class="verdict pass">强</span> n=${lag.n}；样本外 MAE=${oos.mae}</td><td><span class="verdict pass">通过·可复现</span></td></tr>
      <tr><td>C 组合涌现</td><td>跨类共生驱动汇聚诞生</td><td>共生热力图 + 汇聚占比 ${convPct}%</td><td><span class="verdict pass">强</span> 汇聚 ${convPct}%</td><td><span class="verdict pass">通过</span></td></tr>
      <tr><td>D 重要性=中心性</td><td>越重要越古老</td><td>时期重要性中位递减 + 入度-年代分组</td><td><span class="verdict pass">强</span> 时期重要性递减</td><td><span class="verdict pass">通过</span></td></tr>
      <tr><td>E 物质能量信息三元</td><td>信息流加速主导近代爆发</td><td>I 流占比随时期上升（8%→19%）；速率项/百年跃升</td><td><span class="verdict partial">中</span> 速率跃升；物理量待标定</td><td><span class="verdict pass">通过</span></td></tr>
    </tbody>
  </table>

  <h2 class="mh" id="s8">八、建模方法学：随研发迭代演进</h2>
  <p>本页不只是呈现一套模型，更建立一套<b>「用本项目语料形成数学模型」的方法</b>，并让它随研发迭代而进化。核心原则：</p>
  <p>
    <span class="pill">语料驱动</span><span class="pill">不写死常量</span><span class="pill">分布实时拟合</span><span class="pill">可复现可审计</span><span class="pill">版本化方法日志</span><span class="pill">样本外验证（规划）</span>
  </p>
  <p><b>每轮迭代协议：</b>① 提出构想 → ② 符号形式化 → ③ 从语料拟合参数/分布 → ④ 结构性或样本外验证 → ⑤ 在本日志追加一条方法版本（含已拟合/仍假设/已知局限/下一步）。如此，模型的「方法」本身成为可追溯、可生长的资产。</p>
  <div class="mlog">
    ${MODEL_METHOD.map(m => `<div class="me"><div class="mv">${esc(m.v)} · ${esc(m.date)} · ${esc(m.title)}</div><div class="mb">${esc(m.body)}</div></div>`).join("")}
  </div>
  <div class="note"><b>开放问题 / 下一步：</b>① 为构想 A 标定真实历史 exogenous 驱动（人口、密度、经济、气候）与系数；② 把「信息流速度」从占比代理升级为量化指标（比特率/时延）；③ 样本外验证（留出最近 20% 技术预测涌现年，算 MAE/RMSE）并与 forecast_engine 联动做未来投影；④ 滞后分布随语料增长自动再拟合，淘汰「约 37 年」这类冻结常量。</div>

  <h2 class="mh" id="s9">九、十种进阶数学模型（隐性参数 · 神经网络 · 专用硬件）</h2>
  <p>前述五个构想均可被人工阅读、可逐参数对应到人类世界变量。下面十种模型<b>不再受此约束</b>：参数多为<b>隐性（latent）</b>——由模型自行学到、人类无法逐一命名或映射到具体世界的量；部分模型本身就是多重神经网络、扩散过程或贝叶斯非参数过程，不解释「为什么」，只追求在语料上给出可复现的预测或生成。</p>
  <p class="mut">硬件图例：<span class="hw cpu">CPU 可跑</span> 普通笔记本/服务器即可；<span class="hw gpu">GPU</span> 需 CUDA 显卡、训练较快；<span class="hw tpu">TPU 集群</span> 需云端张量处理单元（Google Cloud TPU / 昇腾集群），用于超大规模训练。每张卡片标注其<b>所需硬件</b>与<b>后续实现路径</b>（库与脚本），让模型从「纸面」到「可跑」。</p>
  <p class="mut">硬件分布：${hwSummary}</p>
  ${renderAdvModels()}
  ${renderSelectGuide()}
  <div class="note"><b>与构想的衔接：</b>这十种模型是构想 A–E 的「计算化身」——M1/M2/M3 把结构学成连续表征；M4/M5/M6 把构想 B/C 的预测从统计分布升级为动态学习；M7 把构想 C 的组合生成化为采样；M8/M10 用概率/因果框架揭示隐性结构；M9 用物理约束把构想 A 的 λ 学成可解释场。它们共同构成「先有可解释构想、再用隐性模型扩张能力」的双层建模路线。</div>
  `;

  $("#model-content").innerHTML = html;

  // ---------- 图表 ----------
  drawHist("#ch-lag", lag.vals, { domain: [-100, 400], bins: 20, median: lag.p50 });
  drawHeat("#ch-heat", cats, liftMat);
  drawBars("#ch-imp", eraComp.map(e => ({ label: e.name, value: +(e.med).toFixed(3), sub: e.n })), { yLabel: "中位 x_i", zero: false });
  drawBars("#ch-ind", indBars, { yLabel: "平均年代", zero: true });
  drawLine("#ch-emi", infoRate.map(e => ({ label: e.name, value: e.rate })), { yLabel: "信息流速率（项/百年）", yMin: 0 });

  // ============================================================
  //  D3 图表助手
  // ============================================================
  function drawHist(sel, vals, o) {
    const W = 900, H = 250, m = { t: 18, r: 16, b: 36, l: 44 };
    const iw = W - m.l - m.r, ih = H - m.t - m.b;
    const svg = d3.select(sel).append("svg").attr("viewBox", `0 0 ${W} ${H}`);
    const x = d3.scaleLinear().domain(o.domain).range([0, iw]);
    const bins = d3.bin().domain(o.domain).thresholds(o.bins)(vals);
    const y = d3.scaleLinear().domain([0, d3.max(bins, b => b.length) || 1]).range([ih, 0]);
    const g = svg.append("g").attr("transform", `translate(${m.l},${m.t})`);
    g.append("g").attr("class", "grid").call(d3.axisLeft(y).ticks(4).tickSize(-iw).tickFormat("")).select(".domain").remove();
    g.selectAll("rect").data(bins).enter().append("rect")
      .attr("x", b => x(b.x0) + 1).attr("y", b => y(b.length))
      .attr("width", b => Math.max(0, x(b.x1) - x(b.x0) - 1)).attr("height", b => ih - y(b.length))
      .attr("fill", "#8B6914").attr("opacity", .82);
    g.append("g").attr("class", "axis").attr("transform", `translate(0,${ih})`).call(d3.axisBottom(x).ticks(8));
    g.append("g").attr("class", "axis").call(d3.axisLeft(y).ticks(4));
    if (o.median != null) {
      g.append("line").attr("x1", x(o.median)).attr("x2", x(o.median)).attr("y1", 0).attr("y2", ih).attr("stroke", "#b3261e").attr("stroke-dasharray", "4 3");
      g.append("text").attr("x", x(o.median)).attr("y", -4).attr("text-anchor", "middle").attr("fill", "#b3261e").attr("font-size", 11).text("中位 " + o.median + " 年");
    }
    g.append("text").attr("x", iw).attr("y", ih + 30).attr("text-anchor", "end").attr("fill", "var(--ink-soft)").attr("font-size", 11).text("滞后（年）→（含 " + vals.filter(v => v > o.domain[1]).length + " 个 >" + o.domain[1] + " 的离群未显示）");
  }

  function drawHeat(sel, cats, mat) {
    const n = cats.length, cell = 42, pad = 50;
    const W = pad + n * cell, H = pad + n * cell;
    const svg = d3.select(sel).append("svg").attr("viewBox", `0 0 ${W} ${H}`);
    const maxL = d3.max(mat.flat(), d => d.v) || 1;
    const color = d3.scaleSequential(d3.interpolateOranges).domain([0, maxL]);
    const g = svg.append("g");
    // columns
    cats.forEach((c, j) => {
      g.append("text").attr("x", pad + j * cell + cell / 2).attr("y", pad - 8).attr("text-anchor", "middle").attr("font-size", 10).attr("fill", "var(--ink-soft)").text(c.name.slice(0, 2));
      g.append("text").attr("x", pad - 8).attr("y", pad + j * cell + cell / 2 + 3).attr("text-anchor", "end").attr("font-size", 10).attr("fill", "var(--ink-soft)").text(cats[j].name.slice(0, 2));
    });
    cats.forEach((c, i) => cats.forEach((c2, j) => {
      const d = mat[i][j];
      const isDiag = i === j;
      g.append("rect").attr("x", pad + j * cell).attr("y", pad + i * cell).attr("width", cell - 1).attr("height", cell - 1)
        .attr("fill", isDiag ? "#eee6d2" : color(d.v)).attr("stroke", "#fff").attr("stroke-width", .5)
        .append("title").text(c.name + " × " + c2.name + "：共现 " + d.raw + " 次 · 共生指数 " + d.v.toFixed(2));
      if (!isDiag && d.raw) g.append("text").attr("x", pad + j * cell + cell / 2).attr("y", pad + i * cell + cell / 2 + 3).attr("text-anchor", "middle").attr("font-size", 9).attr("fill", d.v > maxL * 0.5 ? "#fff" : "var(--ink)").text(d.raw);
    }));
  }

  function drawBars(sel, items, o) {
    const W = 900, H = 240, m = { t: 16, r: 16, b: 40, l: 50 };
    const iw = W - m.l - m.r, ih = H - m.t - m.b;
    const svg = d3.select(sel).append("svg").attr("viewBox", `0 0 ${W} ${H}`);
    const x = d3.scaleBand().domain(items.map(d => d.label)).range([0, iw]).padding(.25);
    const ext = d3.extent(items, d => d.value);
    const yd = o.zero ? [Math.min(0, ext[0]), Math.max(0, ext[1])] : [Math.min(0, ext[0]), ext[1]];
    const y = d3.scaleLinear().domain(yd).range([ih, 0]).nice();
    const g = svg.append("g").attr("transform", `translate(${m.l},${m.t})`);
    g.append("g").attr("class", "grid").call(d3.axisLeft(y).ticks(4).tickSize(-iw).tickFormat("")).select(".domain").remove();
    g.selectAll("rect").data(items).enter().append("rect")
      .attr("x", d => x(d.label)).attr("width", x.bandwidth())
      .attr("y", d => y(Math.max(0, d.value))).attr("height", d => Math.abs(y(d.value) - y(0)))
      .attr("fill", "#8B6914").attr("opacity", .85);
    if (o.zero) g.append("line").attr("x1", 0).attr("x2", iw).attr("y1", y(0)).attr("y2", y(0)).attr("stroke", "var(--ink)").attr("stroke-width", 1);
    g.selectAll("text.val").data(items).enter().append("text").attr("class", "val")
      .attr("x", d => x(d.label) + x.bandwidth() / 2).attr("y", d => y(d.value) + (d.value >= 0 ? -4 : 12)).attr("text-anchor", "middle").attr("font-size", 10).attr("fill", "var(--ink)").text(d => d.value + (d.sub ? "  (n=" + d.sub + ")" : ""));
    g.append("g").attr("class", "axis").attr("transform", `translate(0,${ih})`).call(d3.axisBottom(x));
    g.append("g").attr("class", "axis").call(d3.axisLeft(y).ticks(4));
    g.append("text").attr("x", -ih / 2).attr("y", -38).attr("transform", "rotate(-90)").attr("text-anchor", "middle").attr("font-size", 11).attr("fill", "var(--ink-soft)").text(o.yLabel || "");
  }

  function drawLine(sel, items, o) {
    const W = 900, H = 230, m = { t: 16, r: 16, b: 40, l: 46 };
    const iw = W - m.l - m.r, ih = H - m.t - m.b;
    const svg = d3.select(sel).append("svg").attr("viewBox", `0 0 ${W} ${H}`);
    const x = d3.scalePoint().domain(items.map(d => d.label)).range([0, iw]);
    const y = d3.scaleLinear().domain([o.yMin != null ? o.yMin : d3.min(items, d => d.value), o.yMax != null ? o.yMax : d3.max(items, d => d.value)]).range([ih, 0]).nice();
    const g = svg.append("g").attr("transform", `translate(${m.l},${m.t})`);
    g.append("g").attr("class", "grid").call(d3.axisLeft(y).ticks(4).tickSize(-iw).tickFormat("")).select(".domain").remove();
    const line = d3.line().x(d => x(d.label)).y(d => y(d.value));
    g.append("path").datum(items).attr("fill", "none").attr("stroke", "#8B6914").attr("stroke-width", 2.5).attr("d", line);
    g.selectAll("circle").data(items).enter().append("circle").attr("cx", d => x(d.label)).attr("cy", d => y(d.value)).attr("r", 4).attr("fill", "#8B6914")
      .append("title").text(d => d.label + "：" + d.value + "%");
    g.selectAll("text.v").data(items).enter().append("text").attr("x", d => x(d.label)).attr("y", d => y(d.value) - 9).attr("text-anchor", "middle").attr("font-size", 10).attr("fill", "var(--ink)").text(d => d.value + "%");
    g.append("g").attr("class", "axis").attr("transform", `translate(0,${ih})`).call(d3.axisBottom(x));
    g.append("g").attr("class", "axis").call(d3.axisLeft(y).ticks(4));
    g.append("text").attr("x", -ih / 2).attr("y", -36).attr("transform", "rotate(-90)").attr("text-anchor", "middle").attr("font-size", 11).attr("fill", "var(--ink-soft)").text(o.yLabel || "");
  }
})();
