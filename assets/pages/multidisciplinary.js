/* ============================================================
   多学科技术页（multidisciplinary.js）
   - 总览态：概览数字 / 门类构成 / 门类数分布 / 年代×门类数散点 / 可排序清单表
   - 详细分析态（?id=<id>）：基本信息 / 门类占比 / 按门类分组的组成技术 / 直接组成 / 下游
   - 数据源：assets/pages/multidisciplinary_data.js（构建时算好，运行时零计算）
   依赖：core.js（techMap / esc / openTech / catName）、dimension_data.js
   ============================================================ */
(function () {
  "use strict";
  const $ = sel => document.querySelector(sel);
  const D = window.MD_DATA;
  const root = $("#md-content");
  if (!D || !root) return;

  /* ---------- 索引 ---------- */
  const NODES = D.nodes || {};
  const DISC = {};
  (D.disciplines || []).forEach((d, i) => { DISC[d.key] = { name: d.name, en: d.en, idx: i }; });
  const GRP = {};
  (D.groups || []).forEach(g => { GRP[g.key] = g; });

  const PALETTE = ["#8B6914", "#2f6f8f", "#7a4b8f", "#3d7a4a", "#a85b2b", "#4a5a8f",
                   "#8f3d5a", "#5f7a2b", "#2b7a7a", "#7a6a2b", "#5a5a5a", "#8f5a2b"];
  const discColor = k => PALETTE[(DISC[k] ? DISC[k].idx : 0) % PALETTE.length];
  const discName = k => (DISC[k] ? DISC[k].name : k);
  const discEn = k => (DISC[k] ? DISC[k].en : "");

  const nodeZh = id => (NODES[id] ? NODES[id][0] : (typeof techMap !== "undefined" && techMap[id] ? techMap[id].name : id));
  const nodeEn = id => (NODES[id] ? NODES[id][1] : (typeof techMap !== "undefined" && techMap[id] ? (techMap[id].en || "") : ""));
  const nodeYear = id => (NODES[id] ? NODES[id][2] : (typeof techMap !== "undefined" && techMap[id] ? techMap[id].year : null));
  const fmtYear = y => {
    if (y == null) return "—";
    if (y >= 0) return String(y);
    const a = Math.abs(y);
    if (a >= 10000) { const w = a / 10000; return "前 " + (Number.isInteger(w) ? w : w.toFixed(1)) + " 万年"; }
    return "前 " + a;
  };
  const item = id => D.items.filter(x => x.id === id)[0];

  /* 节点徽章（可点开详情弹窗；缺 en 时只显示中文） */
  function nodeChip(id) {
    const zh = nodeZh(id), en = nodeEn(id), y = nodeYear(id);
    return '<span class="md-node" data-id="' + esc(id) + '" title="' + esc(id) + '">' +
      esc(zh) + (en ? ' <em>' + esc(en) + '</em>' : '') +
      (y == null ? '' : ' <b>' + fmtYear(y) + '</b>') + '</span>';
  }
  function bindNodes(scope) {
    scope.querySelectorAll(".md-node").forEach(el => {
      el.addEventListener("click", () => { if (typeof openTech === "function") openTech(el.dataset.id); });
    });
  }

  /* 水平条形图（纯 SVG，不依赖图表库） */
  function bars(rows, opt) {
    const o = opt || {};
    const W = o.w || 640, rowH = o.rowH || 22, gap = 6, m = { t: 6, r: 46, b: 6, l: o.labelW || 96 };
    const H = m.t + m.b + rows.length * (rowH + gap);
    const iw = W - m.l - m.r;
    const max = Math.max(1, ...rows.map(r => r.value));
    let s = '<svg viewBox="0 0 ' + W + ' ' + H + '" role="img">';
    rows.forEach((r, i) => {
      const y = m.t + i * (rowH + gap);
      const w = Math.max(2, iw * r.value / max);
      s += '<text x="' + (m.l - 8) + '" y="' + (y + rowH / 2 + 4) + '" text-anchor="end" font-size="12" fill="var(--ink)">' + esc(r.label) + '</text>';
      s += '<rect x="' + m.l + '" y="' + y + '" width="' + w + '" height="' + rowH + '" rx="3" fill="' + (r.color || "#8B6914") + '" opacity="0.85"><title>' + esc(r.label + "：" + r.value + (r.sub ? "（" + r.sub + "）" : "")) + '</title></rect>';
      s += '<text x="' + (m.l + w + 6) + '" y="' + (y + rowH / 2 + 4) + '" font-size="11" fill="var(--ink-soft)">' + r.value + (r.sub ? " · " + r.sub : "") + '</text>';
    });
    return s + '</svg>';
  }

  /* 直方图（离散横轴） */
  function histogram(bins, opt) {
    const o = opt || {};
    const W = o.w || 320, H = o.h || 170, m = { t: 12, r: 10, b: 34, l: 30 };
    const iw = W - m.l - m.r, ih = H - m.t - m.b;
    const max = Math.max(1, ...bins.map(b => b.value));
    const bw = iw / bins.length;
    let s = '<svg viewBox="0 0 ' + W + ' ' + H + '" role="img">';
    s += '<line x1="' + m.l + '" y1="' + (m.t + ih) + '" x2="' + (m.l + iw) + '" y2="' + (m.t + ih) + '" stroke="var(--line-light)"/>';
    bins.forEach((b, i) => {
      const h = Math.max(1, ih * b.value / max);
      const x = m.l + i * bw + bw * 0.18, w = bw * 0.64;
      s += '<rect x="' + x + '" y="' + (m.t + ih - h) + '" width="' + w + '" height="' + h + '" rx="3" fill="' + (b.color || "#8B6914") + '" opacity="0.85"><title>' + esc(b.label + "：" + b.value + " 项") + '</title></rect>';
      s += '<text x="' + (m.l + i * bw + bw / 2) + '" y="' + (m.t + ih + 14) + '" text-anchor="middle" font-size="11" fill="var(--ink-soft)">' + esc(b.label) + '</text>';
      if (b.value) s += '<text x="' + (m.l + i * bw + bw / 2) + '" y="' + (m.t + ih - h - 4) + '" text-anchor="middle" font-size="11" fill="var(--ink)">' + b.value + '</text>';
    });
    s += '<text x="' + (m.l - 6) + '" y="' + (m.t + 8) + '" text-anchor="end" font-size="10" fill="var(--ink-soft)">' + max + '</text>';
    s += '<text x="' + (m.l - 6) + '" y="' + (m.t + ih) + '" text-anchor="end" font-size="10" fill="var(--ink-soft)">0</text>';
    return s + '</svg>';
  }

  /* 散点：年代 × 门类数 */
  function scatter(pts, opt) {
    const o = opt || {};
    const W = o.w || 320, H = o.h || 170, m = { t: 12, r: 12, b: 34, l: 32 };
    const iw = W - m.l - m.r, ih = H - m.t - m.b;
    const xs = pts.map(p => p.year), ys = pts.map(p => p.n);
    const x0 = Math.min(...xs) - 20, x1 = Math.max(...xs) + 40;
    const y0 = 0, y1 = Math.max(1, Math.max(...ys)) + 0.6;
    const X = v => m.l + iw * (v - x0) / (x1 - x0);
    const Y = v => m.t + ih - ih * (v - y0) / (y1 - y0);
    let s = '<svg viewBox="0 0 ' + W + ' ' + H + '" role="img">';
    s += '<line x1="' + m.l + '" y1="' + (m.t + ih) + '" x2="' + (m.l + iw) + '" y2="' + (m.t + ih) + '" stroke="var(--line-light)"/>';
    for (let g = 1; g <= Math.floor(y1); g++) {
      s += '<line x1="' + m.l + '" y1="' + Y(g) + '" x2="' + (m.l + iw) + '" y2="' + Y(g) + '" stroke="var(--line-light)" stroke-dasharray="2 3"/>';
      s += '<text x="' + (m.l - 5) + '" y="' + (Y(g) + 3) + '" text-anchor="end" font-size="10" fill="var(--ink-soft)">' + g + '</text>';
    }
    [1800, 1900, 2000, 2100].forEach(v => {
      if (v >= x0 && v <= x1) {
        s += '<line x1="' + X(v) + '" y1="' + m.t + '" x2="' + X(v) + '" y2="' + (m.t + ih) + '" stroke="var(--line-light)" stroke-dasharray="2 3"/>';
        s += '<text x="' + X(v) + '" y="' + (m.t + ih + 14) + '" text-anchor="middle" font-size="10" fill="var(--ink-soft)">' + v + '</text>';
      }
    });
    pts.forEach(p => {
      s += '<circle cx="' + X(p.year) + '" cy="' + Y(p.n) + '" r="4" fill="' + (p.color || "#8B6914") + '" opacity="0.8"><title>' + esc(p.zh + "（" + p.en + "）· " + fmtYear(p.year) + " · " + p.n + " 门类 · " + p.id) + '</title></circle>';
    });
    return s + '</svg>';
  }

  /* ---------- 分派 ----------
     ⚠️ 必须在文件末尾执行：renderTable 引用了下方的 const SORT / SORT 处于 TDZ，
     若在此处调用 renderOverview 会抛 ReferenceError（Cannot access 'SORT' before initialization）。 */

  /* ============================================================
     总览态
     ============================================================ */
  function renderOverview() {
    const items = D.items.slice();
    const nTot = items.length;
    const nGe5 = items.filter(x => x.discCount >= 5).length;
    const avg = (items.reduce((s, x) => s + x.discCount, 0) / nTot);
    const ys = items.map(x => x.year);
    const discSum = {}, discItems = {};
    items.forEach(x => x.disc.forEach(([k, c]) => { discSum[k] = (discSum[k] || 0) + c; discItems[k] = (discItems[k] || 0) + 1; }));
    const discRows = Object.keys(discSum).map(k => ({ k, label: discName(k), value: discSum[k], sub: discItems[k] + " 项技术涉及", color: discColor(k) }))
      .sort((a, b) => b.value - a.value);

    const bins = [];
    for (let n = 5; n >= 0; n--) bins.push({ label: n + " 门类", value: items.filter(x => x.discCount === n).length, color: n >= 5 ? "#8B6914" : n >= 3 ? "#2f6f8f" : "#a85b2b" });

    let h = '';
    h += '<div class="md-head"><h2>多学科技术</h2>' +
      '<p class="lead">把「同时涉及多个学科门类」的技术单独列出：先给全量统计，再逐项给出详细分析</p></div>';

    h += '<div class="md-kpi">' +
      kpi(nTot, "收录技术") + kpi(nGe5, "涉及 ≥5 门类") + kpi(avg.toFixed(1), "平均涉及门类") +
      kpi(discRows.length, "覆盖学科门类") + kpi(fmtYear(Math.min.apply(null, ys)) + " – " + fmtYear(Math.max.apply(null, ys)), "年代跨度") +
      '</div>';

    h += '<div class="md-note"><b>收录口径</b>（口径 C：计算预选 + 删补）——' + esc(D.meta.pickMethod) +
      '。' + esc(D.meta.criterion) + '。<br><b>⚠️ 该指标不可靠</b>：' + esc(D.meta.caveat) + '</div>';

    h += '<div class="md-card"><div class="md-ct">学科门类构成</div>' +
      '<div class="md-cs">按各技术闭包内出现的技术条数汇总（同一技术可被多项技术共用，故合计大于收录数）</div>' +
      bars(discRows, { labelW: 104 }) + '</div>';

    h += '<div class="md-two">' +
      '<div class="md-card"><div class="md-ct">涉及门类数分布</div><div class="md-cs">' + nTot + ' 项按涉及门类数分档</div>' +
      histogram(bins, {}) + '</div>' +
      '<div class="md-card"><div class="md-ct">年代 × 涉及门类数</div><div class="md-cs">越靠上＝涉及门类越多</div>' +
      scatter(items.map(x => ({ id: x.id, zh: x.zh, en: x.en, year: x.year, n: x.discCount, color: x.discCount >= 5 ? "#8B6914" : "#2f6f8f" })), {}) + '</div>' +
      '</div>';

    h += '<div class="md-card"><div class="md-ct">清单</div>' +
      '<div class="md-cs">点「详细分析」查看该项按门类分组的组成技术；点技术名可打开详情弹窗</div>' +
      '<div class="md-chips" id="md-filter">' + groupChips(items) + '</div>' +
      '<div id="md-table"></div></div>';

    h += '<div class="md-card md-warn"><div class="md-ct">⚠️ 直接组成全部为「学科级顶点 / 基本类」（' + D.coreZero.length + ' 项）</div>' +
      '<div class="md-cs">这些技术剔除学科级顶点后核心组成为 0 —— 属 R8 违规形态（不得以学科级顶点充当前置），单列提示，不并入正常统计</div>' +
      D.coreZero.map(x => '<div class="md-row"><span class="md-node-warn">' + esc(x.zh) + ' <em>' + esc(x.en) + '</em> <b>' + fmtYear(x.year) + '</b></span>' +
        '<span class="md-why">' + esc(x.note) + '　闭包内 ${n} 门类'.replace("${n}", x.discCount) + '</span></div>').join("") + '</div>';

    h += '<div class="md-card"><div class="md-ct">计算预选中被删除的条目（' + D.deleted.length + ' 项）</div>' +
      '<div class="md-cs">口径 C 的「删」—— 理由逐条给出，可复核</div>' +
      D.deleted.map(x => '<div class="md-row"><span class="md-node-warn">' + esc(x.zh) + ' <em>' + esc(x.en) + '</em> <b>' + fmtYear(x.year) + '</b></span>' +
        '<span class="md-why">' + esc(x.reason) + '</span></div>').join("") + '</div>';

    h += '<div class="md-note"><b>统计口径陷阱</b>：按「是否涉及某门类」统计时，本清单对多数门类是 44/44，无区分度（因顶点扇入）→ 页面统计<b>一律用「组成技术条数」</b>。<br>' +
      '<b>边界</b>：本页为只读展示层 —— 不修改 <code>dependsOn</code>、不修改维度层 <code>overrides</code>、不改动现有页面。</div>';

    root.innerHTML = h;
    renderTable("all");
    $("#md-filter").addEventListener("click", e => {
      const b = e.target.closest("[data-g]"); if (!b) return;
      renderTable(b.dataset.g);
    });
    bindNodes(root);
  }

  function kpi(v, l) { return '<div class="md-kpiv"><b>' + esc(String(v)) + '</b><span>' + esc(l) + '</span></div>'; }

  function groupChips(items) {
    let s = '<button class="md-chip active" data-g="all">全部 <i>' + items.length + '</i></button>';
    D.groups.forEach(g => { s += '<button class="md-chip" data-g="' + g.key + '">' + esc(g.name) + ' <i>' + g.n + '</i></button>'; });
    return s;
  }

  const SORT = { key: "discCount", dir: -1 };
  function renderTable(g) {
    root.querySelectorAll("#md-filter .md-chip").forEach(b => b.classList.toggle("active", b.dataset.g === g));
    const rows = D.items.filter(x => g === "all" || x.group === g).slice();
    rows.sort((a, b) => {
      const k = SORT.key;
      let d = 0;
      if (k === "zh" || k === "id") d = String(a[k]).localeCompare(String(b[k]), "zh");
      else if (k === "year" || k === "discCount" || k === "closureSize") d = (a[k] || 0) - (b[k] || 0);
      else d = (a[k] || 0) - (b[k] || 0);
      return d * SORT.dir;
    });
    const cols = [["zh", "中文名"], ["year", "年"], ["discCount", "涉及门类"], ["closureSize", "闭包规模"]];
    let s = '<table class="md-table"><thead><tr><th>分组</th>';
    cols.forEach(c => { s += '<th class="sortable' + (SORT.key === c[0] ? " on" : "") + '" data-k="' + c[0] + '">' + c[1] + (SORT.key === c[0] ? (SORT.dir < 0 ? " ▼" : " ▲") : "") + '</th>'; });
    s += '<th>门类构成（条数）</th><th></th></tr></thead><tbody>';
    rows.forEach(x => {
      s += '<tr><td class="g">' + esc(GRP[x.group] ? GRP[x.group].name : x.group) + '</td>';
      s += '<td><b>' + esc(x.zh) + '</b><br><span class="en">' + esc(x.en) + '</span></td>';
      s += '<td>' + fmtYear(x.year) + '</td>';
      s += '<td class="num">' + x.discCount + '</td>';
      s += '<td class="num">' + x.closureSize + '</td>';
      s += '<td>' + x.disc.map(([k, c]) => '<span class="md-dchip" style="border-color:' + discColor(k) + ';color:' + discColor(k) + '">' + esc(discName(k)) + ' ' + c + '</span>').join("") + '</td>';
      s += '<td><a class="md-go" href="multidisciplinary.html?id=' + encodeURIComponent(x.id) + '">详细分析 →</a></td></tr>';
    });
    s += '</tbody></table>';
    const box = root.querySelector("#md-table");
    box.innerHTML = s;
    box.querySelectorAll("th.sortable").forEach(th => th.addEventListener("click", () => {
      if (SORT.key === th.dataset.k) SORT.dir = -SORT.dir; else { SORT.key = th.dataset.k; SORT.dir = -1; }
      renderTable(g);
    }));
  }

  /* ============================================================
     详细分析态
     ============================================================ */
  function renderDetail(x) {
    const ids = Object.keys(x.parts);
    const tot = x.disc.reduce((s, d) => s + d[1], 0);
    const rows = x.disc.map(([k, c]) => ({ k, label: discName(k), value: c, sub: (100 * c / tot).toFixed(1) + "%", color: discColor(k) }));

    let h = '';
    h += '<div class="md-head"><p class="md-crumb"><a href="multidisciplinary.html">← 多学科技术总览</a></p>' +
      '<h2>' + esc(x.zh) + ' <small>' + esc(x.en) + '</small></h2>' +
      '<p class="lead">' + fmtYear(x.year) + ' · ' + esc(GRP[x.group] ? GRP[x.group].name : x.group) + ' · 任务域 ' + esc(discTask(x.id)) + '</p>' +
      '<div class="dim-line" id="md-dim"></div></div>';

    h += '<div class="md-kpi">' +
      kpi(x.discCount, "涉及门类") + kpi(x.closureSize, "闭包组成技术") +
      kpi(fmtYear(x.yearMin) + " – " + fmtYear(x.yearMax), "组成技术年代跨度") +
      kpi(x.direct.length, "直接组成") + kpi(x.down.length, "直接下游") +
      '</div>';

    h += '<div class="md-note"><b>收录说明</b>：' + esc(x.note) + '（来源：' + (x.source === "pre" ? "计算预选" : "人工补录") + '）</div>';

    if (x.direct.length === 0) {
      h += '<div class="md-card md-warn"><div class="md-ct">⚠️ 直接组成为 0</div>' +
        '<div class="md-cs">该技术的直接前置全部为「学科级顶点 / 基本类」—— 属 R8 违规形态（不得以学科级顶点充当前置）。下方门类构成为闭包内出现的组成技术，不代表直接依赖。</div></div>';
    }

    h += '<div class="md-card"><div class="md-ct">门类构成</div><div class="md-cs">闭包内 ' + x.closureSize + ' 条组成技术按学科门类分布（剔除基本类与维度顶点）</div>' +
      bars(rows, { labelW: 104 }) + '</div>';

    h += '<div class="md-card"><div class="md-ct">按门类分组的组成技术（' + tot + ' 条次）</div>' +
      '<div class="md-cs">点任意技术名可打开详情弹窗；括号内为年代</div>';
    h += '<div class="md-chips">' + ids.map(k => '<button class="md-chip" data-t="' + k + '">' + esc(discName(k)) + ' <i>' + x.parts[k].length + '</i></button>').join("") + '</div>';
    ids.forEach(k => {
      h += '<details class="md-fold" data-t="' + k + '" open><summary><span class="dot" style="background:' + discColor(k) + '"></span>' +
        esc(discName(k)) + ' <em>' + esc(discEn(k)) + '</em> · ' + x.parts[k].length + ' 条</summary>' +
        '<div class="md-nodes">' + x.parts[k].map(nodeChip).join("") + '</div></details>';
    });
    h += '</div>';

    h += '<div class="md-two">' +
      '<div class="md-card"><div class="md-ct">直接组成（' + x.direct.length + '）</div>' +
      (x.direct.length ? '<div class="md-nodes">' + x.direct.map(nodeChip).join("") + '</div>' : '<div class="md-cs">无（直接前置全为学科级顶点 / 基本类）</div>') + '</div>' +
      '<div class="md-card"><div class="md-ct">直接下游（' + x.down.length + '）</div>' +
      (x.down.length ? '<div class="md-nodes">' + x.down.map(nodeChip).join("") + '</div>' : '<div class="md-cs">无</div>') + '</div>' +
      '</div>';

    root.innerHTML = h;
    bindNodes(root);
    root.querySelectorAll(".md-chip[data-t]").forEach(b => b.addEventListener("click", () => {
      const d = root.querySelector('.md-fold[data-t="' + b.dataset.t + '"]'); if (d) d.open = !d.open;
    }));

    // 维度归属徽章（与详情页同源）
    const dm = $("#md-dim");
    if (dm && typeof buildDimensionBlock === "function" && typeof techMap !== "undefined" && techMap[x.id]) {
      dm.outerHTML = buildDimensionBlock(techMap[x.id]);
    }
  }

  function discTask(id) {
    const t = (typeof techMap !== "undefined") ? techMap[id] : null;
    const DD = window.DIMENSION;
    if (t && DD && typeof DD.resolve === "function") {
      const r = DD.resolve(id, t);
      const tn = DD.taskDomains && DD.taskDomains[r.sub];
      return (tn ? tn.n : r.sub) || "—";
    }
    return "—";
  }

  /* ---------- 入口（文件末尾，确保所有 const 已初始化） ---------- */
  const qid = new URLSearchParams(location.search).get("id");
  if (qid && item(qid)) renderDetail(item(qid));
  else renderOverview();
})();
