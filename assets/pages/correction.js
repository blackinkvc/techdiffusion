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

    // 95 项灰色概念甄别表（逐条可勾选）
    const A = M.enablesAudit;
    if (A && A.items && A.items.length) {
      const GROUPS = [
        { key: "待实体化", desc: "真技术物但缺节点，需补建" },
        { key: "去重（已有实体）", desc: "已有等价实体节点，移除断链引用即可" },
        { key: "降为广义影响", desc: "非技术实体，改为 applications 或删除" }
      ];
      let saved = {};
      try { saved = JSON.parse(localStorage.getItem("cr-audit-v1") || "{}"); } catch (e) { saved = {}; }
      html += `<section class="cr-audit" id="cr-audit"><div class="cr-audit-h">${esc(A.title || "灰色概念甄别表")}<span class="cr-audit-count" id="cr-audit-count"></span></div>`;
      if (A.intro) html += `<div class="cr-audit-intro">${esc(A.intro)}</div>`;
      if (A.stats) {
        html += `<div class="cr-audit-stats">`;
        const cat = A.stats.cat || {}, disp = A.stats.disp || {};
        Object.keys(cat).forEach(k => html += `<span class="cr-chip">${esc(k)} · ${esc(cat[k])}</span>`);
        Object.keys(disp).forEach(k => html += `<span class="cr-chip disp">${esc(k)} · ${esc(disp[k])}</span>`);
        html += `</div>`;
      }
      GROUPS.forEach(g => {
        const list = A.items.filter(x => x.disp === g.key);
        if (!list.length) return;
        html += `<details class="cr-audit-group" open><summary>${esc(g.key)}<span class="cr-g-n">${list.length}</span><span class="cr-g-desc">${esc(g.desc)}</span></summary><div class="cr-audit-rows">`;
        list.forEach(x => {
          const ck = saved[x.id] ? " checked" : "";
          const hosts = (x.hosts || []).map(h => `<code>${esc(h)}</code>`).join("");
          const tg = x.target ? `<code class="cr-t-target">${esc(x.target)}</code>` : "";
          html += `<label class="cr-row"><input type="checkbox" class="cr-ck" data-id="${esc(x.id)}"${ck}>`
                + `<span class="cr-row-id">${esc(x.id)}</span>`
                + `<span class="cr-row-cat">${esc(x.cat)}</span>`
                + `<span class="cr-row-host">${hosts}${tg}</span>`
                + `<span class="cr-row-note">${esc(x.note || "")}</span></label>`;
        });
        html += `</div></details>`;
      });
      html += `<div class="cr-audit-actions"><button type="button" class="cr-btn" id="cr-audit-clear">清除全部勾选</button></div></section>`;
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
    bindAudit();
  }

  // 甄别表勾选状态：写入 localStorage，供逐条核对留痕
  function bindAudit() {
    const box = document.getElementById("cr-audit");
    if (!box) return;
    const KEY = "cr-audit-v1";
    const load = () => { try { return JSON.parse(localStorage.getItem(KEY) || "{}"); } catch (e) { return {}; } };
    const save = o => { try { localStorage.setItem(KEY, JSON.stringify(o)); } catch (e) { /* 隐私模式忽略 */ } };
    const cks = box.querySelectorAll("input.cr-ck");
    const upd = () => {
      const n = box.querySelectorAll("input.cr-ck:checked").length;
      const el = document.getElementById("cr-audit-count");
      if (el) el.textContent = `已核对 ${n} / ${cks.length}`;
    };
    cks.forEach(ck => ck.addEventListener("change", () => {
      const o = load();
      if (ck.checked) o[ck.dataset.id] = 1; else delete o[ck.dataset.id];
      save(o); upd();
    }));
    const clr = document.getElementById("cr-audit-clear");
    if (clr) clr.addEventListener("click", () => {
      save({});
      cks.forEach(ck => { ck.checked = false; });
      upd();
    });
    upd();
  }

  function main() { renderCorrections(); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", main);
  else main();
})();
