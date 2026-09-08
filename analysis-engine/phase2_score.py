#!/usr/bin/env python3.11
"""Phase 2 — 第一性原理可行性评分卡 (L1-L5)。
对全库每个技术节点，从图谱+元数据派生 5 个第一性原理维度，
合成 0-100 成熟度分并映射分层。全部确定性计算（不依赖 LLM）。

维度（各 0-1）：
  D1 物理/科学可行性  —— 真实存在技术=1.0（已通过存在性验证）；若带 L2-L5 标记则按标记下调
  D2 时间成熟度      —— year 越早越成熟（存在即被时间验证）
  D3 上游深度        —— 拓扑层级 / 全局最大层级（站在多少前人肩膀上 = 先进/前沿度）
  D4 下游织密度      —— 归一化 PageRank（被多少技术依赖 = 自身有多基石）
  D5 跨域辐射度      —— 下游闭包覆盖的不同领域数 / 9（被多少领域共用 = 通用性）
分层逻辑（成熟/基石 与 前沿 分离）：
  显式 tier∈{L2..L5}      → 沿用标记（为科幻条目预留）
  D3>=0.80 且 year>=2000  → L1-前沿（深依赖 + 近 20 年 = 活跃研发前沿）
  成熟度>=75 且 year<=1990 → L1-基石（被广域长期依赖 = 技术树基石）
  否则                     → L1 已实现
  成熟度 = D1*0.25 + D2*0.20 + D4*0.35 + D5*0.20
"""
import json, time
import networkx as nx
from collections import Counter, defaultdict

ROOT = "/workspace/analysis-engine/data"
CATS = ["basic", "material", "energy", "manufact", "transport",
        "info", "life", "build", "military"]
W = {"D1": 0.25, "D2": 0.20, "D4": 0.35, "D5": 0.20}
YEAR_MIN, YEAR_MAX = -3000, 2026

def build_graph():
    g = json.load(open(f"{ROOT}/graph.json"))
    nodes = {n["id"]: n for n in g["nodes"]}
    edges = [(e["source"], e["target"]) for e in g["edges"]
             if e.get("type") in ("dependsOn", "dependency")]
    nt = json.load(open(f"{ROOT}/subcat/new_techs.json"))
    for x in nt:
        nodes[x["id"]] = x
        for t in x.get("dependsOn", []):
            if t in nodes:
                edges.append((x["id"], t))
    G = nx.DiGraph(); G.add_nodes_from(nodes.keys()); G.add_edges_from(edges)
    return G, nodes

def clamp(x, lo=0.0, hi=1.0):
    return max(lo, min(hi, x))

def main():
    t0 = time.time()
    G, nodes = build_graph()
    n = G.number_of_nodes()
    print(f"图规模: {n} 节点 / {G.number_of_edges()} 边")

    # 拓扑层级
    layer = {}
    for nd in nx.topological_sort(G):
        ps = list(G.predecessors(nd))
        layer[nd] = 0 if not ps else 1 + max(layer[p] for p in ps)
    maxL = max(layer.values())

    # PageRank
    pr = nx.pagerank(G, alpha=0.85)
    maxPR = max(pr.values())

    # 上游领域闭包（反向拓扑 DP，用于 D3 上游深度已由 layer 表达）
    cat_of = lambda i: (nodes.get(i, {}) or {}).get("category") or "?"
    # 下游领域闭包（沿 predecessors=用户 做正向拓扑 DP，用于 D5 跨域辐射度）
    down_cats = defaultdict(set)
    for nd in nx.topological_sort(G):
        s = set()
        if cat_of(nd) in CATS:
            s.add(cat_of(nd))
        for c in G.predecessors(nd):   # c 是 nd 的用户（依赖 nd 的技术）
            s |= down_cats[c]
        down_cats[nd] = s
    maxCross = len(CATS)

    # 评分
    scores = {}
    for i in nodes:
        nd = nodes[i]
        year = nd.get("year") or 0
        explicit = nd.get("tier")
        d1 = 1.0 if explicit in (None, "L1", "realized") else \
             {"L2": 0.7, "L3": 0.5, "L4": 0.3, "L5": 0.1}.get(explicit, 1.0)
        d2 = clamp((year - YEAR_MIN) / (YEAR_MAX - YEAR_MIN))
        d3 = (layer[i] / maxL) if maxL else 0.0          # 上游深度（前沿度）
        d4 = clamp(pr[i] / maxPR) if maxPR else 0.0       # 下游织密（基石度）
        d5 = clamp(len(down_cats[i]) / maxCross)          # 跨域辐射（通用性）
        maturity = (W["D1"]*d1 + W["D2"]*d2 + W["D4"]*d4 + W["D5"]*d5) * 100

        # 分层：成熟/基石 与 前沿 分离
        if explicit in ("L2", "L3", "L4", "L5"):
            tier = explicit
        elif d3 >= 0.80 and year >= 2000:
            tier = "L1-前沿"
        elif maturity >= 75 and year <= 1990:
            tier = "L1-基石"
        else:
            tier = "L1"

        scores[i] = {
            "score": round(maturity, 1), "tier": tier,
            "D1": round(d1, 3), "D2": round(d2, 3), "D3": round(d3, 3),
            "D4": round(d4, 3), "D5": round(d5, 3),
            "year": year, "layer": layer[i], "category": cat_of(i),
            "name": nd.get("name") or i,
        }

    json.dump(scores, open(f"{ROOT}/phase2_scores.json", "w"), ensure_ascii=False)

    # ---- 报告 ----
    tier_dist = Counter(s["tier"] for s in scores.values())
    cat_tier = defaultdict(Counter)
    for s in scores.values():
        cat_tier[s["category"]][s["tier"]] += 1
    score_by_cat = defaultdict(list)
    for s in scores.values():
        score_by_cat[s["category"]].append(s["score"])

    L = []
    L.append("# Phase 2 — 第一性原理可行性评分卡 (L1-L5)\n")
    L.append(f"- 全库节点: **{n}** | 最大拓扑层级: {maxL} | 最大跨域闭包: {maxCross}")
    L.append(f"- 权重: D1物理可行{int(W['D1']*100)}% / D2时间成熟{int(W['D2']*100)}% / "
             f"D4下游织密{int(W['D4']*100)}% / D5跨域辐射{int(W['D5']*100)}% "
             f"（D3上游深度单独用于前沿判定）\n")
    L.append("## 分层分布\n")
    for t in ["L1-基石", "L1", "L1-前沿", "L2", "L3", "L4", "L5"]:
        L.append(f"- **{t}**: {tier_dist.get(t,0)}")
    L.append("\n## 各领域成熟度（均值）\n")
    L.append("| 领域 | 条目 | 均值分 | L1-基石 | L1 | L1-前沿 |")
    L.append("|------|------|--------|---------|-----|---------|")
    for c in CATS:
        vals = score_by_cat.get(c, [])
        if not vals: continue
        avg = sum(vals)/len(vals)
        tc = cat_tier[c]
        L.append(f"| {c} | {len(vals)} | {avg:.1f} | {tc.get('L1-基石',0)} | "
                 f"{tc.get('L1',0)} | {tc.get('L1-前沿',0)} |")
    L.append("\n## 基石 Top15（下游辐射：被最多领域长期依赖 = 技术树真基石）\n")
    corner = sorted(scores.items(), key=lambda kv: -(kv[1]["D4"]*0.6 + kv[1]["D5"]*0.4))[:15]
    L.append("| # | 技术 | 领域 | 织密D4 | 跨域D5 | 年 |")
    L.append("|---|------|------|--------|--------|----|")
    for i, (k, s) in enumerate(corner, 1):
        L.append(f"| {i} | {s['name']} | {s['category']} | {s['D4']} | {s['D5']} | {s['year']} |")
    L.append("\n## 前沿 Top15（上游深度 D3≥0.8 且 近20年：当前最活跃的研发前沿）\n")
    frontier = sorted([(k, s) for k, s in scores.items() if s["tier"] == "L1-前沿"],
                      key=lambda kv: -(kv[1]["D3"]))[:15]
    L.append("| # | 技术 | 领域 | 年 | 深度D3 |")
    L.append("|---|------|------|----|--------|")
    for i, (k, s) in enumerate(frontier, 1):
        L.append(f"| {i} | {s['name']} | {s['category']} | {s['year']} | {s['D3']} |")
    open(f"{ROOT}/phase2_report.md", "w").write("\n".join(L))
    print(f"✅ Phase 2 完成，用时 {time.time()-t0:.1f}s")
    print("分层分布:", dict(tier_dist))
    print("报告写入 phase2_report.md / phase2_scores.json")

if __name__ == "__main__":
    main()
