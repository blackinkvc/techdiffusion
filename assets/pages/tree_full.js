// 全量科技树（Phase 4 站点集成）— 数据来自 window.TECHS_FULL / EDGES_FULL / SCORE_META
// 借用 core.js 全局辅助：$, $$, esc, catColor, catName, eraName, classifyRelation, relColor, REL_TYPES, CATEGORIES
(function () {
  "use strict";

  const TIER_COLORS = {
    "L1": "#26a69a", "L1-基石": "#00897b", "L1-前沿": "#4db6ac",
    "L2": "#66bb6a", "L3": "#42a5f5", "L4": "#ffa726", "L5": "#ef5350", "NA": "#b0bec5"
  };
  const TIER_LABEL = {
    "L1": "L1·已实现", "L1-基石": "L1·基石", "L1-前沿": "L1·前沿",
    "L2": "L2·目前技术可实现", "L3": "L3·未来可能实现",
    "L4": "L4·未来较难实现", "L5": "L5·仅在该世界观", "NA": "未评分"
  };

  let techMapFull = null;
  let treeFull = null;
  const fullState = { cat: "all", tier: "all", colorMode: "tier", search: "", limit: true };
  let edgesFull = [];

  function buildIndex() {
    if (techMapFull) return;
    const nodes = window.TECHS_FULL || [];
    edgesFull = window.EDGES_FULL || [];
    techMapFull = {};
    nodes.forEach(t => {
      t._up = []; t._down = []; t._deg = 0;
      techMapFull[t.id] = t;
    });
    // 由边推导邻接：enables(source赋能target) => source._down+=target, target._up+=source
    //            dependency(依赖者->被依赖者) => 依赖者._up+=被依赖者, 被依赖者._down+=依赖者
    edgesFull.forEach(e => {
      const s = techMapFull[e.source], t = techMapFull[e.target];
      if (!s || !t) return;
      if (e.type === "enables") { s._down.push(t.id); t._up.push(s.id); }
      else { s._up.push(t.id); t._down.push(s.id); } // dependency
    });
    nodes.forEach(t => { t._deg = t._up.length + t._down.length; });
  }

  function scoreColor(s) {
    const v = Math.max(0, Math.min(100, s == null ? 0 : s)) / 100;
    return d3.interpolateRgb("#ef5350", "#26a69a")(v);
  }
  function nodeColor(t) {
    if (fullState.colorMode === "category") return catColor(t.category);
    if (fullState.colorMode === "score") return scoreColor(t.score);
    return TIER_COLORS[t.tier] || TIER_COLORS.NA;
  }
  function nodeRadius(t) { return 4 + Math.sqrt(t._deg) * 1.4; }

  function renderToolbar() {
    let html = `<span class="fg-label">分类</span>`;
    html += `<button class="fbtn ${fullState.cat === "all" ? "active" : ""}" data-cat="all">全部</button>`;
    (window.CATEGORIES || []).forEach(c =>
      html += `<button class="fbtn ${fullState.cat === c.id ? "active" : ""}" data-cat="${c.id}" style="border-left:3px solid ${c.color}">${esc(c.name)}</button>`);
    html += `<span class="tb-sep"></span><span class="fg-label">成熟度</span>`;
    ["L1", "L1-基石", "L1-前沿", "L2", "L3", "L4", "L5"].forEach(tk =>
      html += `<button class="fbtn ${fullState.tier === tk ? "active" : ""}" data-tier="${tk}" style="border-left:3px solid ${TIER_COLORS[tk]}">${TIER_LABEL[tk]}</button>`);
    html += `<button class="fbtn ${fullState.tier === "all" ? "active" : ""}" data-tier="all">全部</button>`;
    html += `<span class="tb-sep"></span><span class="fg-label">着色</span>`;
    html += `<button class="fbtn ${fullState.colorMode === "tier" ? "active" : ""}" data-cm="tier">成熟度</button>`;
    html += `<button class="fbtn ${fullState.colorMode === "category" ? "active" : ""}" data-cm="category">分类</button>`;
    html += `<button class="fbtn ${fullState.colorMode === "score" ? "active" : ""}" data-cm="score">综合分</button>`;
    html += `<span class="tb-sep"></span><button class="fbtn ${fullState.limit ? "active" : ""}" data-limit>核心层(高连接)</button>`;
    html += `<button class="fbtn" id="tf-reset">重置视图</button>`;
    $("#tf-toolbar").innerHTML = html;
    $$('#tf-toolbar [data-cat]').forEach(b => b.addEventListener("click", () => { fullState.cat = b.dataset.cat; renderTreeFull(); }));
    $$('#tf-toolbar [data-tier]').forEach(b => b.addEventListener("click", () => { fullState.tier = b.dataset.tier; renderTreeFull(); }));
    $$('#tf-toolbar [data-cm]').forEach(b => b.addEventListener("click", () => { fullState.colorMode = b.dataset.cm; if (treeFull) treeFull.node.select("circle").attr("fill", d => nodeColor(d)); }));
    $$('#tf-toolbar [data-limit]').forEach(b => b.addEventListener("click", () => { fullState.limit = !fullState.limit; renderTreeFull(); }));
    $("#tf-reset").addEventListener("click", () => {
      fullState.cat = "all"; fullState.tier = "all"; fullState.colorMode = "tier"; fullState.search = "";
      const gs = document.querySelector("#globalSearch"); if (gs) gs.value = "";
      renderToolbar(); renderTreeFull();
    });
  }

  function renderLegend() {
    const box = $("#tf-legend");
    if (!box) return;
    if (fullState.colorMode === "tier") {
      box.style.display = "flex";
      box.innerHTML = `<span class="lg-title">成熟度</span>` +
        Object.keys(TIER_COLORS).map(tk => `<span class="lg-item"><span class="lg-dot" style="background:${TIER_COLORS[tk]}"></span>${TIER_LABEL[tk]}</span>`).join("");
    } else if (fullState.colorMode === "category") {
      box.style.display = "flex";
      box.innerHTML = `<span class="lg-title">分类</span>` +
        (window.CATEGORIES || []).map(c => `<span class="lg-item"><span class="lg-dot" style="background:${c.color}"></span>${esc(c.name)}</span>`).join("");
    } else {
      box.style.display = "flex";
      box.innerHTML = `<span class="lg-title">综合分</span><span class="lg-item"><span class="lg-line" style="background:linear-gradient(90deg,#ef5350,#26a69a)"></span>低(未来/未实现)→高(已实现)</span>`;
    }
  }

  function sidePlaceholder() {
    const meta = window.SCORE_META || {};
    const td = meta.tierDist || {};
    const dist = ["L1-基石", "L1", "L1-前沿", "L2", "L3", "L4", "L5"].map(k => `${k}:${td[k] || 0}`).join(" · ");
    return `<h3>全量技术演化网络</h3><p style="font-size:13px;color:var(--ink-soft)">共 <b>${meta.totalNodes || 0}</b> 项技术、<b>${meta.totalEdges || 0}</b> 条依赖/赋能边。点击任一节点查看其<b>前置技术（上游）</b>、<b>催生的后续技术（下游）</b>与第一性原理五维评分（D1–D5）。</p><div class="tf-dist">${dist}</div><p style="font-size:12.5px;color:var(--ink-soft);margin-top:8px">拖动可重排，滚轮可缩放。</p>`;
  }

  function renderTreeFull() {
    buildIndex();
    renderToolbar();
    renderLegend();
    const wrap = $("#tf-svg");
    const W = wrap.clientWidth || 900, H = wrap.clientHeight || 620;
    const svg = d3.select("#tf-svg").attr("viewBox", `0 0 ${W} ${H}`);
    svg.selectAll("*").remove();

    let nodes = (window.TECHS_FULL || []).filter(t =>
      (fullState.cat === "all" || t.category === fullState.cat) &&
      (fullState.tier === "all" || t.tier === fullState.tier));
    if (fullState.limit && nodes.length > 3000) {
      nodes = nodes.slice().sort((a, b) => b._deg - a._deg).slice(0, 2200);
    }
    const ids = new Set(nodes.map(n => n.id));
    const links = [];
    edgesFull.forEach(e => {
      if (ids.has(e.source) && ids.has(e.target)) {
        const rel = classifyRelation(techMapFull[e.source].category, techMapFull[e.target].category);
        links.push({ source: e.source, target: e.target, type: e.type, rel });
      }
    });

    const g = svg.append("g");
    const link = g.append("g").attr("stroke-width", 1).selectAll("line").data(links).join("line")
      .attr("class", "link").attr("stroke", d => d.type === "enables" ? "#9aa0a6" : relColor(d.rel)).attr("stroke-opacity", .35);
    const node = g.append("g").selectAll("g").data(nodes).join("g").attr("class", "node").call(dragFull());
    node.append("circle").attr("r", d => nodeRadius(d)).attr("fill", d => nodeColor(d)).attr("fill-opacity", .9).attr("stroke", "#fff").attr("stroke-width", .6);
    node.append("text").text(d => d.name).attr("x", d => nodeRadius(d) + 4).attr("dy", ".35em").attr("font-size", "10px");

    const sim = d3.forceSimulation(nodes)
      .force("link", d3.forceLink(links).id(d => d.id).distance(70).strength(.25))
      .force("charge", d3.forceManyBody().strength(-160))
      .force("center", d3.forceCenter(W / 2, H / 2))
      .force("collide", d3.forceCollide(d => nodeRadius(d) + 5))
      .force("x", d3.forceX(W / 2).strength(.03))
      .force("y", d3.forceY(H / 2).strength(.03));

    sim.on("tick", () => {
      link.attr("x1", d => d.source.x).attr("y1", d => d.source.y).attr("x2", d => d.target.x).attr("y2", d => d.target.y);
      node.attr("transform", d => `translate(${d.x},${d.y})`);
    });

    svg.call(d3.zoom().scaleExtent([0.2, 4]).on("zoom", ev => g.attr("transform", ev.transform)));
    node.on("click", (ev, d) => { ev.stopPropagation(); openModalFull(d.id); highlightFull(d.id); });
    svg.on("click", () => { if (treeFull) { treeFull.node.classed("dim", false).classed("hl", false); treeFull.link.classed("hl", false).classed("dim", false); } $("#tf-side").innerHTML = sidePlaceholder(); });

    treeFull = { svg, g, node, link, sim, nodes, links };
    $("#tf-side").innerHTML = sidePlaceholder();
    applySearch();
  }

  function dragFull() {
    return d3.drag()
      .on("start", (ev, d) => { if (!ev.active) treeFull.sim.alphaTarget(.3).restart(); d.fx = d.x; d.fy = d.y; })
      .on("drag", (ev, d) => { d.fx = ev.x; d.fy = ev.y; })
      .on("end", (ev, d) => { if (!ev.active) treeFull.sim.alphaTarget(0); d.fx = null; d.fy = null; });
  }

  function highlightFull(id) {
    if (!treeFull) return;
    const t = techMapFull[id]; if (!t) return;
    const up = new Set(t._up), down = new Set(t._down);
    const keep = new Set([id, ...up, ...down]);
    treeFull.node.classed("dim", d => !keep.has(d.id)).classed("hl", d => d.id === id || up.has(d.id) || down.has(d.id));
    treeFull.link
      .classed("hl", l => (l.source.id === id && up.has(l.target.id)) || (l.target.id === id && down.has(l.source.id)))
      .classed("dim", l => !((l.source.id === id && up.has(l.target.id)) || (l.target.id === id && down.has(l.source.id))));
    renderSideFull(t);
  }

  function renderSideFull(t) {
    let html = `<h3 style="border-left:4px solid ${catColor(t.category)};padding-left:8px">${esc(t.name)}</h3>`;
    const tb = TIER_COLORS[t.tier] ? `<span style="display:inline-block;margin-left:8px;padding:1px 8px;border-radius:10px;font-size:11px;font-weight:600;color:#fff;background:${TIER_COLORS[t.tier]}">${TIER_LABEL[t.tier]}</span>` : "";
    html += `<div style="font-size:12.5px;color:var(--ink-soft);margin-bottom:8px">${esc(t.date || "")} · ${esc(eraName(t.era))} · ${esc(catName(t.category))}${tb}${t.score != null ? ` · 综合分 <b>${t.score.toFixed(1)}</b>` : ""}</div>`;
    if (t._up.length) {
      html += `<div class="m-label" style="margin-top:10px">↑ 前置技术（上游 ${t._up.length}）</div><div>`;
      t._up.forEach(u => { const n = techMapFull[u]; if (n) html += `<span class="node-link" data-id="${u}">${esc(n.name)}</span>`; });
      html += `</div>`;
    }
    if (t._down.length) {
      html += `<div class="m-label" style="margin-top:12px">↓ 催生的后续技术（下游 ${t._down.length}）</div><div>`;
      t._down.forEach(d => { const n = techMapFull[d]; if (n) html += `<span class="node-link" data-id="${d}">${esc(n.name)}</span>`; });
      html += `</div>`;
    }
    $("#tf-side").innerHTML = html;
    $$("#tf-side .node-link").forEach(n => n.addEventListener("click", () => { openModalFull(n.dataset.id); highlightFull(n.dataset.id); }));
  }

  function applySearch() {
    if (!treeFull) return;
    const term = (fullState.search || "").trim().toLowerCase();
    if (!term) { treeFull.node.classed("dim", false); treeFull.link.classed("dim", false); return; }
    const hit = new Set((window.TECHS_FULL || []).filter(t =>
      [t.name, t.en, t.people, t.place, t.summary, (t.subcategory || ""), (t.dependsOn || []).join(" ")].join(" ").toLowerCase().includes(term)
    ).map(t => t.id));
    treeFull.node.classed("dim", d => !hit.has(d.id));
    treeFull.link.classed("dim", l => !(hit.has(l.source.id) && hit.has(l.target.id)));
  }

  // ---------- 详情弹窗（含第一性原理五维评分卡） ----------
  function scoreBar(label, v) {
    const pct = Math.max(0, Math.min(100, (v || 0) * 100));
    return `<div class="sc-row"><span class="sc-label">${label}</span><span class="sc-track"><span class="sc-fill" style="width:${pct.toFixed(0)}%"></span></span><span class="sc-val">${(v || 0).toFixed(2)}</span></div>`;
  }
  function buildDetailFullHTML(t) {
    const tcol = TIER_COLORS[t.tier] || TIER_COLORS.NA;
    let html = `<div class="modal-head">
      <button class="m-close" data-close>×</button>
      <h2>${esc(t.name)} <span class="m-en">${esc(t.en || "")}</span></h2>
      <div class="m-badges">
        <span class="badge" style="background:${catColor(t.category)}22;color:${catColor(t.category)};font-size:12px;padding:3px 10px;border-radius:12px">${esc(catName(t.category))}</span>
        <span class="badge era" style="font-size:12px;padding:3px 10px;border-radius:12px;background:#fff3e0;color:#b15a00">${esc(eraName(t.era))}</span>
        <span class="badge" style="font-size:12px;padding:3px 10px;border-radius:12px;color:#fff;background:${tcol}">${TIER_LABEL[t.tier] || "未评分"}</span>
        ${t.score != null ? `<span class="badge" style="font-size:12px;padding:3px 10px;border-radius:12px;background:${scoreColor(t.score)};color:#fff">综合分 ${t.score.toFixed(1)}</span>` : ""}
        <span class="badge" style="font-size:12px;padding:3px 10px;border-radius:12px;background:var(--accent-bg);color:var(--ink-soft)">${esc(t.date || "")}</span>
        ${t.place ? `<span class="badge" style="font-size:12px;padding:3px 10px;border-radius:12px;background:var(--accent-bg);color:var(--ink-soft)">${esc(t.place)}</span>` : ""}
      </div>
    </div>`;
    // 五维评分卡
    if (t.D1 != null) {
      html += `<div class="sc-card">
        <div class="sc-title">第一性原理五维评分（D1–D5）</div>
        ${scoreBar("D1 物理可行", t.D1)}
        ${scoreBar("D2 时间成熟", t.D2)}
        ${scoreBar("D3 依赖深度", t.D3)}
        ${scoreBar("D4 系统织密", t.D4)}
        ${scoreBar("D5 跨域辐射", t.D5)}
        <div class="sc-note">D1 物理/工程可行性 · D2 时间成熟度 · D3 上游依赖深度 · D4 下游织密度 · D5 跨域辐射力。综合分由 D1/D2/D4/D5 加权（D3 单用于前沿判定）。</div>
      </div>`;
    }
    if (t.summary) html += `<div class="m-section"><div class="m-subtitle">◆ 简介</div><p>${esc(t.summary)}</p></div>`;
    if (t.significance) html += `<div class="m-section"><div class="m-subtitle">◆ 意义</div><p>${esc(t.significance)}</p></div>`;
    if (t.people) html += `<div class="m-section"><div class="m-subtitle">◆ 关键人物 / 机构</div><p>${esc(t.people)}</p></div>`;
    if (t._up.length) {
      html += `<div class="m-section"><div class="m-subtitle">◆ 前置技术（上游 ${t._up.length}）</div><div class="m-tags">`;
      t._up.forEach(u => { const n = techMapFull[u]; if (n) html += `<span class="node-link" data-id="${u}">${esc(n.name)}</span>`; });
      html += `</div></div>`;
    }
    if (t._down.length) {
      html += `<div class="m-section"><div class="m-subtitle">◆ 催生的后续技术（下游 ${t._down.length}）</div><div class="m-tags">`;
      t._down.forEach(d => { const n = techMapFull[d]; if (n) html += `<span class="node-link" data-id="${d}">${esc(n.name)}</span>`; });
      html += `</div></div>`;
    }
    return html;
  }

  function openModalFull(id) {
    const t = techMapFull && techMapFull[id];
    if (!t) return;
    const card = $("#modal-card");
    if (!card) return;
    card.innerHTML = buildDetailFullHTML(t);
    const modal = $("#modal");
    if (modal) modal.classList.remove("hidden");
    $$("#modal-card .node-link").forEach(n => n.addEventListener("click", () => { openModalFull(n.dataset.id); highlightFull(n.dataset.id); }));
  }

  function main() {
    buildIndex();
    renderTreeFull();
    const gs = document.querySelector("#globalSearch");
    if (gs) gs.addEventListener("input", e => { fullState.search = e.target.value; applySearch(); });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", main);
  else main();
})();
