// 纠错总结（Correction Log）渲染器
(function () {
  function renderCorrections() {
    const C = window.CORRECTIONS;
    const wrap = $("#correction-doc");
    if (!wrap || !C) return;
    const M = C.meta || {};
    const E = (C.entries || []).slice().reverse(); // 最新在前

    let html = `<p class="cl-lead">${esc(M.subtitle || "")}</p>`;
    if (M.note) html += `<div class="cl-note">${esc(M.note)}</div>`;

    // 统计
    const sevCount = {};
    E.forEach(e => { const s = e.severity || "—"; sevCount[s] = (sevCount[s] || 0) + 1; });
    const fixed = E.filter(e => (e.status || "").indexOf("已修正") >= 0).length;
    html += `<div class="cl-stats">`;
    [
      { n: E.length, l: "纠错记录" },
      { n: fixed, l: "已修正" },
      { n: M.maintainer || "—", l: "维护者" }
    ].forEach(s => html += `<div class="cl-stat"><div class="cl-stat-n">${esc(s.n)}</div><div class="cl-stat-l">${esc(s.l)}</div></div>`);
    html += `</div>`;

    // 自检方法
    if (M.method && M.method.length) {
      html += `<section class="cr-method"><div class="cr-method-h">全库自检方法论</div><ol class="cr-method-list">`;
      M.method.forEach(m => html += `<li>${esc(m)}</li>`);
      html += `</ol></section>`;
    }
    // 待检清单
    if (M.pendingQueue && M.pendingQueue.length) {
      html += `<section class="cr-queue"><div class="cr-queue-h">待自检清单</div><ul class="cr-queue-list">`;
      M.pendingQueue.forEach(q => html += `<li>${esc(q)}</li>`);
      html += `</ul></section>`;
    }

    // 纠错记录
    const SEV_LABEL = { "高": "高", "中": "中", "低": "低" };
    const STATUS_CLASS = { "已修正": "done", "进行中": "doing", "待修正": "todo" };
    html += `<div class="cr-entries">`;
    E.forEach(e => {
      const sev = e.severity || "—";
      const st = e.status || "—";
      const stCls = STATUS_CLASS[st] || "todo";
      const bad = (e.badUpstream || []).map(x => `<code class="cr-tag bad">${esc(x)}</code>`).join("");
      const good = (e.goodUpstream || []).map(x => `<code class="cr-tag good">${esc(x)}</code>`).join("");
      const changes = (e.changes || []).map(c => `<li>${esc(c)}</li>`).join("");
      html += `<article class="cr-entry">
        <div class="cr-head">
          <span class="cr-id">${esc(e.id || "")}</span>
          <span class="cr-sev cr-sev-${sev}">严重度 ${esc(sev)}</span>
          <span class="cr-status cr-status-${stCls}">${esc(st)}</span>
          <span class="cr-date">${esc(e.date || "")}</span>
        </div>
        <h3 class="cr-title">${esc(e.nodeName || e.node || "")}</h3>
        <div class="cr-meta"><span class="cr-k">节点</span><span class="cr-v"><code>${esc(e.node || "")}</code> · ${esc(e.category || "")}</span></div>
        <div class="cr-block"><div class="cr-block-h">问题</div><div class="cr-block-b">${esc(e.problem || "")}</div></div>
        <div class="cr-block"><div class="cr-block-h">根因</div><div class="cr-block-b">${esc(e.rootCause || "")}</div></div>
        <div class="cr-block"><div class="cr-block-h">修正</div><div class="cr-block-b">${esc(e.fix || "")}</div></div>
        ${bad ? `<div class="cr-tags"><span class="cr-tags-lbl">误作前因</span>${bad}</div>` : ""}
        ${good ? `<div class="cr-tags"><span class="cr-tags-lbl">修正前因</span>${good}</div>` : ""}
        ${changes ? `<ul class="cr-changes">${changes}</ul>` : ""}
      </article>`;
    });
    html += `</div>`;

    wrap.innerHTML = html;
  }

  function main() { renderCorrections(); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", main);
  else main();
})();
