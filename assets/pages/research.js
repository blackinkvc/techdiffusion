// 文献谱系页（历史相关研究）渲染器 —— 独立知识页，与技术演化网络分离
// 仅展示方法论/文献谱系，不进入 13392 节点技术图。
(function () {
  function esc(s) {
    return ("" + (s == null ? "" : s)).replace(/[&<>"']/g, c =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }

  function cardHTML(r) {
    return `<article class="research-card" data-id="${esc(r.id)}" tabindex="0" role="button" aria-label="${esc(r.name)} 详情">
      <div class="rc-top">
        <span class="rc-tag">${esc(r.tag)}</span>
        <span class="rc-year">${esc(r.year)}</span>
      </div>
      <h3 class="rc-name">${esc(r.name)}</h3>
      <div class="rc-en">${esc(r.en)}</div>
      <p class="rc-lead">${esc(r.lead)}</p>
      <div class="rc-foot"><span class="rc-founder">${esc(r.founder)}</span><span class="rc-more">查看详情 →</span></div>
    </article>`;
  }

  function detailHTML(r) {
    let h = "";
    h += `<div class="modal-head" style="background:linear-gradient(180deg,color-mix(in srgb,var(--accent) 10%,var(--panel)),var(--panel))">
      <button class="m-close" data-close aria-label="关闭">×</button>
      <div class="r-kicker">${esc(r.tag)} · ${esc(r.year)}</div>
      <h2 class="r-title">${esc(r.name)}</h2>
      <div class="r-en">${esc(r.en)}</div>
      <div class="r-meta">创立/代表：${esc(r.founder)}　|　领域：${esc(r.field)}</div>
    </div>`;
    h += `<div class="modal-body r-body">`;
    h += `<p class="r-lead">${esc(r.lead)}</p>`;
    (r.body || []).forEach(p => { h += `<p class="r-p">${esc(p)}</p>`; });
    if (r.table) {
      h += `<div class="r-section"><div class="r-sec-h">工具 ↔ 本项目对应</div><table class="r-table"><thead><tr>`;
      r.table.head.forEach(c => h += `<th>${esc(c)}</th>`);
      h += `</tr></thead><tbody>`;
      r.table.rows.forEach(row => {
        h += `<tr>` + row.map(c => `<td>${esc(c)}</td>`).join("") + `</tr>`;
      });
      h += `</tbody></table></div>`;
    }
    if (r.link) {
      h += `<div class="r-section"><div class="r-sec-h">在本项目中的借鉴</div><p class="r-p r-link">${esc(r.link)}</p></div>`;
    }
    if (r.refs && r.refs.length) {
      h += `<div class="r-section"><div class="r-sec-h">参考文献</div><ul class="r-refs">`;
      r.refs.forEach(rf => h += `<li>${esc(rf)}</li>`);
      h += `</ul></div>`;
    }
    h += `</div>`;
    return h;
  }

  function showDetail(id) {
    const r = (window.RESEARCH || []).find(x => x.id === id);
    if (!r) return;
    const card = document.querySelector("#modal-card");
    if (!card) return;
    card.innerHTML = detailHTML(r);
    card.querySelectorAll("[data-close]").forEach(b => b.addEventListener("click", closeModal));
    const m = document.querySelector("#modal");
    if (m) m.classList.remove("hidden");
  }

  function main() {
    const wrap = document.querySelector("#research-doc");
    if (!wrap || !window.RESEARCH) return;
    const items = window.RESEARCH;
    wrap.innerHTML =
      `<p class="research-note">本页收录的是「人类技术演化研究」的<strong>方法论谱系与文献基础</strong>——TRIZ、技术预测学、复杂网络、组合进化理论等。这些内容属于<strong>研究范式</strong>，<strong>不是技术本身</strong>，因此<strong>不进入</strong> 13392 节点的技术演化网络，仅作独立档案，可分别点开查看详细介绍。</p>` +
      `<div class="research-grid">` + items.map(cardHTML).join("") + `</div>`;

    wrap.querySelectorAll(".research-card").forEach(el => {
      el.addEventListener("click", () => showDetail(el.dataset.id));
      el.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); showDetail(el.dataset.id); } });
    });

    // 全局搜索框在本页做实时筛选（不影响站点其它页）
    const gs = document.querySelector("#globalSearch");
    if (gs) {
      gs.addEventListener("input", e => {
        const q = (e.target.value || "").trim().toLowerCase();
        wrap.querySelectorAll(".research-card").forEach(c => {
          const txt = (c.textContent || "").toLowerCase();
          c.style.display = (!q || txt.includes(q)) ? "" : "none";
        });
      });
    }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", main);
  else main();
})();
