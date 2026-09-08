#!/usr/bin/env python3.11
# -*- coding: utf-8 -*-
"""Phase 3 — 确定性链接预测：补全隐含的技术前置关系
=================================================
目的：在 13392 节点 / 依赖边的全量技术 DAG 上，发现「隐含但未显式记录」的
      技术前置（依赖）关系，使其显式化，补全科技树的依赖网。

方法（确定性、可解释，非黑箱 ML）：
  对依赖图 G（有向，边 u→v 表示 u 依赖 v，即 v 是 u 的前提），
  为每个节点 A 计算其「前提支撑度」：
    · 取 A 的全部直接前提 P(A)；
    · 对 P(A) 中每个前提 p，取其全部（传递）祖先（即 p 的前提的前提…）；
    · 若某个节点 B 出现在 A 的多数直接前提的祖先集中，则 B 极可能是 A 的
      （隐含）前提 —— 即 A 多数已知前提都依赖 B，A 本身也理应直接依赖 B。
    · 支撑度 frac(B|A) = |{p∈P(A): B∈anc(p)}| / |P(A)|；
      置信度 score = frac · (1 + log2(support))，兼顾「占比」与「支撑广度」。
  仅当 frac ≥ MIN_FRAC 且 support ≥ MIN_SUPPORT 时记为候选；且 B 不能是 A 已有的
  直接前提（避免重复），年份顺序由 DAG 拓扑自动保证（前提必早于依赖者）。

为何可信：这是把「传递性隐含前提」显式化的标准链接预测思路（共祖先 / 前提支撑），
          完全可解释、可审计；与本项目「确定性优先、链接预测为唯一可选 ML」一致。
输出：
  data/phase3_results.json    候选边（含证据：A 的哪些直接前提依赖 B）
  data/phase3_inferred_edges.json  全部通过阈值的隐式前提边（可写回）
  data/phase3_report.md       文本报告（摘要 + Top 表 + 分类分布）
写回（可选 --apply）：将高置信边注入 graph.json 的边集（打 provenance 标记），
          随后应重跑 build_full_dataset.js 刷新站点全量数据。
"""
import json, time, math, argparse
from collections import defaultdict, Counter

ROOT = "/workspace/analysis-engine/data"
MIN_SUPPORT = 2      # B 至少被 A 的 2 个直接前提依赖
MIN_FRAC = 0.6       # B 至少覆盖 A 的 60% 直接前提
APPLY_FRAC = 0.8     # 写回阈值：支撑占比
APPLY_SUPPORT = 3    # 写回阈值：支撑广度
GAP_MAX = 3          # 近因窗口：仅显式化 layer 差 ≤3 的近因前提（挡普适远祖噪声）
DESC_MAX = 0.5       # 普适度上限：隐含前提 B 的传递被依赖占比须 < 50%
                     # （挡语言/科学方法等「全网知识前提」型泛根；保留电力系统/集成电路等真近因枢纽）

def load_full():
    g = json.load(open(f"{ROOT}/graph.json", encoding="utf-8"))
    nodes = {n["id"]: n for n in g["nodes"]}
    # ⚠ 方向语义（2026-09-08 实证修正，曾有事故）：
    #   graph.json 的 dependency 边权威方向 = source(前提) → target(依赖者)。
    #   证据：(1) boiler(1765) → steam_engine(1769) 只存在该方向；
    #        (2) 全部依赖边中约 80% 满足 source.year < target.year，
    #            与「前提早于依赖者」一致；反向假设下该比例仅 20%，语义崩塌。
    #   此前实现误把 (source,target) 当 (依赖者,前提)，在反图上做支撑度计算，
    #   导致 2883 条写回边方向错乱（如 vaccination→bio_orthopedics 被写成
    #   「疫苗是骨科前提」），已于 2026-09-08 回滚（备份 backup/graph.json.pre-phase3-20260908.bak）。
    #   本函数统一内部表示为 edges = (依赖者, 前提)。
    edges = []
    for e in g.get("edges", []):
        s, t, typ = e["source"], e["target"], e.get("type")
        if typ in ("dependency", "dependsOn"):
            edges.append((t, s))            # t 依赖 s ⇒ (依赖者 t, 前提 s)
    nt = json.load(open(f"{ROOT}/subcat/new_techs.json", encoding="utf-8"))
    for x in nt:
        if x.get("id"):
            nodes.setdefault(x["id"], x)
            for d in x.get("dependsOn", []):
                edges.append((x["id"], d))  # x 依赖 d
    # 仅保留两端均存在的非自环边
    edges = [(s, t) for s, t in edges if s in nodes and t in nodes and s != t]
    return nodes, edges

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--apply", action="store_true", help="将高置信隐式前提边写回 graph.json")
    args = ap.parse_args()

    t0 = time.time()
    nodes, edges = load_full()
    ids = list(nodes.keys())
    idx = {i: k for k, i in enumerate(ids)}
    inv = ids
    N = len(ids)
    print(f"全量节点: {N} | 依赖边(去重前): {len(edges)}")

    # 邻接：parents[u] = u 的直接前提列表；children[u] = u 的直接依赖者
    parents = [[] for _ in range(N)]
    children = [[] for _ in range(N)]
    direct = set()
    for s, t in edges:
        u, v = idx[s], idx[t]
        if (u, v) in direct:
            continue
        direct.add((u, v))
        parents[u].append(v)
        children[v].append(u)
    indeg = [len(parents[i]) for i in range(N)]   # 入度 = 前提数
    print(f"直接依赖边: {len(direct)}")

    # Kahn 拓扑排序（前提先、依赖者后）
    from collections import deque
    deg = indeg[:]
    q = deque([i for i in range(N) if deg[i] == 0])
    topo = []
    while q:
        u = q.popleft()
        topo.append(u)
        for c in children[u]:
            deg[c] -= 1
            if deg[c] == 0:
                q.append(c)
    if len(topo) != N:
        print("⚠ 检测到环（应为 DAG）！剩余节点:", N - len(topo))
    print(f"拓扑排序完成: {len(topo)} 节点 | 用时 {time.time()-t0:.1f}s")

    # 祖先闭包 bitmask（严格祖先，不含自身）；层级 depth
    BIT = [1 << i for i in range(N)]
    anc = [0] * N
    layer = [0] * N
    for u in topo:
        m = 0
        L = 0
        for v in parents[u]:
            m |= anc[v] | BIT[v]
            if layer[v] + 1 > L:
                L = layer[v] + 1
        anc[u] = m
        layer[u] = L

    # 后代闭包 bitmask（去重计数）→ 普适度 desc_ratio = 传递依赖 B 的节点占比。
    # ⚠ 不能用 desc[u]=1+Σdesc[children]（树式）——本图为稠密 DAG，共享基础子树
    #   会被多条路径重复累加而指数爆炸（2026-09-08 实证修复）。
    desc_mask = [0] * N
    for u in reversed(topo):
        m = 0
        for c in children[u]:
            m |= desc_mask[c] | BIT[c]
        desc_mask[u] = m
    desc = [desc_mask[i].bit_count() for i in range(N)]
    HUB_TH = 0.30 * N   # 被超过 30% 节点依赖 ⇒ 视为普适枢纽，隐含边不予写回

    name = lambda i: nodes.get(inv[i], {}).get("name") or inv[i]
    cat = lambda i: nodes.get(inv[i], {}).get("category") or "?"

    # 链接预测：前提支撑度（仅补全「长度=2 的缺口」——
    #   A 的直接前提 p 直接依赖 B，则 A→B 是隐含应显式化的前提边）
    #   这样避免把「经基础学科的多跳传递依赖」误当新边，保证高信号、可解释。
    cands = []
    cand_by_cat = Counter()
    writable = 0
    t1 = time.time()
    for a in range(N):
        P = parents[a]
        np_ = len(P)
        if np_ < MIN_SUPPORT:
            continue
        sup = defaultdict(int)
        for p in P:
            for b in parents[p]:        # B 是 p 的直接前提（A 与 B 间隔 1 跳）
                sup[b] += 1
        for b, cnt in sup.items():
            if b == a or (a, b) in direct:
                continue
            frac = cnt / np_
            if cnt >= MIN_SUPPORT and frac >= MIN_FRAC:
                score = frac * (1.0 + math.log2(cnt))
                ev = [p for p in P if b in set(parents[p])][:6]
                gap = layer[a] - layer[b]     # layer 差（A 深、B 浅为正值）
                desc_ratio = desc[b] / N      # 普适度：传递依赖 B 的节点占比
                # 写回护栏（2026-09-08 实证收紧）：
                #   ① frac=1.0：A 的全部已知前提都直接依赖 B（最干净的隐含边）
                #   ② support≥2：至少 2 个直接前提佐证
                #   ③ 同域或属基础科学（跨域噪声由该语义护栏挡掉）
                #   ④ 近因窗口 0<gap≤GAP_MAX：拒绝「语言/文字/数学」这类普适远祖
                #      被提名为隐含前提（无信息量，且会把传递依赖误当新边）
                #   ⑤ 普适度上限 desc_ratio<DESC_MAX：B 若被过多节点传递依赖
                #      （近乎全网祖先），显式化 A→B 无信息量
                can_write = (frac >= 0.999 and cnt >= 2
                             and (cat(a) == cat(b) or cat(b) == "basic")
                             and 0 < gap <= GAP_MAX
                             and desc_ratio < DESC_MAX)
                if can_write:
                    writable += 1
                cands.append({
                    "source": inv[a], "source_name": name(a),
                    "source_category": cat(a), "source_layer": layer[a],
                    "target": inv[b], "target_name": name(b),
                    "target_category": cat(b), "target_layer": layer[b],
                    "gap": gap, "target_desc_ratio": round(desc_ratio, 3),
                    "support": cnt, "total_parents": np_,
                    "frac": round(frac, 4), "score": round(score, 4),
                    "evidence_parents": [name(p) for p in ev],
                })
                cand_by_cat[cat(b)] += 1
    cands.sort(key=lambda c: (-c["score"], -c["frac"], -c["support"]))
    print(f"候选隐式前提边: {len(cands)} | 其中可写回(护栏后): {writable} | 扫描 {time.time()-t1:.1f}s")

    high = [c for c in cands if c["frac"] >= APPLY_FRAC and c["support"] >= APPLY_SUPPORT]
    print(f"高置信(原阈值)边: {len(high)}")

    # ---- 写出 results / inferred / report ----
    results = {
        "meta": {
            "method": "prerequisite-support (ancestor-closure link prediction)",
            "nodes": N, "direct_edges": len(direct),
            "min_support": MIN_SUPPORT, "min_frac": MIN_FRAC,
            "candidates": len(cands), "high_confidence": len(high),
            "computed_at": time.strftime("%Y-%m-%dT%H:%M:%S"),
            "note": "把『多数已知前提都依赖 B』的隐含前提关系显式化；年份顺序由 DAG 拓扑保证。",
        },
        "top_candidates": cands[:1500],
    }
    json.dump(results, open(f"{ROOT}/phase3_results.json", "w", encoding="utf-8"),
              ensure_ascii=False, indent=1)

    inferred = [{
        "source": c["source"], "target": c["target"], "type": "dependency",
        "provenance": "phase3_linkpredict", "confidence": c["frac"],
        "support": c["support"], "total_parents": c["total_parents"],
        "score": c["score"], "evidence_parents": c["evidence_parents"],
    } for c in cands]
    json.dump(inferred, open(f"{ROOT}/phase3_inferred_edges.json", "w", encoding="utf-8"),
              ensure_ascii=False, indent=1)

    # 报告
    L = []
    L.append("# Phase 3 — 链接预测：补全隐含技术前置关系\n")
    L.append(f"- 全量网络：**{N} 节点 / {len(direct)} 直接依赖边**")
    L.append(f"- 方法：前提支撑度（祖先闭包链接预测），确定性、可解释")
    L.append(f"- 阈值：支撑广度 ≥ {MIN_SUPPORT} 且 支撑占比 ≥ {MIN_FRAC}")
    L.append(f"- 候选隐式前提边：**{len(cands)}** 条")
    L.append(f"- 写回护栏（frac=1.0 且 支撑≥2 且 同域或属基础科学 且 近因窗口 gap≤{GAP_MAX} 且 普适度 desc<{DESC_MAX}）：可写回 **{writable}** 条")
    L.append(f"- 护栏说明：仅补全『长度=2 的近因缺口』（A 的直接前提 p 直接依赖 B ⇒ 补 A→B）；"
             f"近因窗口（layer 差 ≤{GAP_MAX}）拒绝语言/文字等普适远祖被当隐含前提；"
             f"普适度护栏（传递被依赖占比 <{DESC_MAX}）挡『全网知识前提』型泛根；"
             f"跨域噪声由『同域/basic』语义护栏挡掉。\n")
    L.append("## 1. 候选边按目标技术所属领域分布（Top）\n")
    L.append("| 领域 | 候选数 |")
    L.append("|---|---|")
    for c2, n in cand_by_cat.most_common():
        L.append(f"| {c2} | {n} |")
    L.append("\n## 2. 高置信隐式前提边 Top40（score 降序）\n")
    L.append("| # | 依赖者 | 隐含前提 | 领域 | 层级 | 支撑/总前提 | 占比 | 证据（部分前提依赖它） |")
    L.append("|---|------|------|------|------|------|------|------|")
    for i, c in enumerate(high[:40], 1):
        ev = "、".join(c["evidence_parents"][:4])
        L.append(f"| {i} | {c['source_name']} | {c['target_name']} | {c['target_category']} | {c['target_layer']} | {c['support']}/{c['total_parents']} | {c['frac']:.2f} | {ev} |")
    L.append("\n## 3. 全部候选 Top40（含中置信，score 降序）\n")
    L.append("| # | 依赖者 | 隐含前提 | 领域 | 支撑/总前提 | 占比 |")
    L.append("|---|------|------|------|------|------|")
    for i, c in enumerate(cands[:40], 1):
        L.append(f"| {i} | {c['source_name']} | {c['target_name']} | {c['target_category']} | {c['support']}/{c['total_parents']} | {c['frac']:.2f} |")
    open(f"{ROOT}/phase3_report.md", "w", encoding="utf-8").write("\n".join(L))
    print(f"✅ 写出 phase3_results.json / phase3_inferred_edges.json / phase3_report.md")

    # ---- 可选写回（护栏后的高可信隐式前提边）----
    # ⚠ 方向：graph.json 权威方向 = source(前提) → target(依赖者)。
    #   候选 c 语义为 c.source=依赖者 A、c.target=隐含前提 B，故写回时须交换：
    #   落库边 = (source=c.target, target=c.source) = B → A，表示「B 是 A 的前提」。
    #   （此前实现按 (A,B) 直写导致方向全反，已回滚。）
    if args.apply:
        gj = json.load(open("/workspace/analysis-engine/data/graph.json", encoding="utf-8"))
        existing = {(e["source"], e["target"], e.get("type")) for e in gj["edges"]}
        year = lambda cid: (lambda o: o["year"] if o and o.get("year") is not None else None)(
            nodes.get(cid))
        added = skipped_year = skipped_missing = 0
        for c in cands:
            if not (c["frac"] >= 0.999 and c["support"] >= 2):
                continue
            if not (c["source_category"] == c["target_category"] or c["target_category"] == "basic"):
                continue
            if not (0 < c["gap"] <= GAP_MAX):
                continue
            if not (c.get("target_desc_ratio", 1.0) < DESC_MAX):
                continue
            # 年份门禁：两端均有年份时要求 前提年 ≤ 依赖者年（时间箭头不可逆）
            ya, yb = year(c["source"]), year(c["target"])
            if ya is not None and yb is not None:
                if yb > ya:
                    skipped_year += 1
                    continue
            else:
                skipped_missing += 1
                continue
            # 写回 (前提 B → 依赖者 A)
            key = (c["target"], c["source"], "dependency")
            if key in existing:
                continue
            gj["edges"].append({
                "source": c["target"], "target": c["source"], "type": "dependency",
                "provenance": "phase3_linkpredict",
                "confidence": c["frac"], "support": c["support"],
            })
            existing.add(key)
            added += 1
        json.dump(gj, open("/workspace/analysis-engine/data/graph.json", "w", encoding="utf-8"),
                  ensure_ascii=False, indent=1)
        print(f"✅ 写回隐式前提边 {added} 条至 graph.json（已打 provenance 标记）")
        print(f"   年份门禁拦截：违反时间箭头 {skipped_year} 条 | 缺年份 {skipped_missing} 条")
        print("   提示：随后请重跑  node analysis-engine/build_full_dataset.js  刷新站点全量数据。")

if __name__ == "__main__":
    main()
