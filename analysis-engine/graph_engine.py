#!/usr/bin/env python3.11
"""Phase 1 — 确定性图算法引擎。
对全库技术 DAG 计算：
  · PageRank        —— 基础性/枢纽度（谁被最多技术依赖）
  · HITS            —— 权威度(hub/authority)
  · 拓扑层级        —— 从根到本节点的最长依赖链长度 = 技术成熟深度
  · 社区发现        —— greedy modularity（技术领域聚类）
  · 割点/关键节点   —— 去掉后图会碎裂的瓶颈技术
  · 最长关键路径    —— DAG 上最长的技术演化链
结果写入 data/phase1_results.json + data/phase1_report.md
"""
import json, time
import networkx as nx
from collections import Counter, defaultdict

ROOT = "/workspace/analysis-engine/data"

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
    G = nx.DiGraph()
    G.add_nodes_from(nodes.keys())
    G.add_edges_from(edges)
    return G, nodes

def topsort_layers(G):
    """返回每个节点的拓扑层级 = 最长入依赖链长度。"""
    layer = {}
    for n in nx.topological_sort(G):
        preds = list(G.predecessors(n))
        layer[n] = 0 if not preds else 1 + max(layer[p] for p in preds)
    return layer

def main():
    t0 = time.time()
    G, nodes = build_graph()
    print(f"图规模: {G.number_of_nodes()} 节点 / {G.number_of_edges()} 边")
    n = G.number_of_nodes()

    # 1) PageRank
    print("· PageRank ...")
    pr = nx.pagerank(G, alpha=0.85)

    # 2) HITS
    print("· HITS ...")
    try:
        h, a = nx.hits(G, max_iter=1000, tol=1e-8)
    except Exception as e:
        print("  HITS 失败(可能含孤立分量):", e)
        h, a = {}, {}

    # 3) 拓扑层级
    print("· 拓扑层级 ...")
    layer = topsort_layers(G)

    # 4) 社区发现 (greedy modularity)
    print("· 社区发现 ...")
    UG = G.to_undirected()
    comms = nx.community.greedy_modularity_communities(UG)
    comm_of = {}
    for ci, c in enumerate(comms):
        for node in c:
            comm_of[node] = ci
    comm_sizes = [len(c) for c in comms]
    print(f"  社区数: {len(comms)} | 最大: {max(comm_sizes)} | 前5: {sorted(comm_sizes, reverse=True)[:5]}")

    # 5) 割点
    print("· 割点/关键节点 ...")
    cut = list(nx.articulation_points(UG))
    print(f"  割点(瓶颈技术): {len(cut)}")

    # 6) 最长关键路径
    print("· 最长关键路径 ...")
    # 在 DAG 上求最长路径（边权=1），用 longest path via DP on topo order
    longest = {}
    parent = {}
    for node in nx.topological_sort(G):
        longest[node] = 0
        parent[node] = None
        for p in G.predecessors(node):
            if longest[p] + 1 > longest[node]:
                longest[node] = longest[p] + 1
                parent[node] = p
    end = max(longest, key=lambda k: longest[k])
    chain = []
    cur = end
    while cur is not None:
        chain.append(cur); cur = parent[cur]
    chain.reverse()
    print(f"  最长链长度: {longest[end]} 跳 | 路径: {' → '.join(chain[:12])}{' …' if len(chain)>12 else ''}")

    # ---- 汇总输出 ----
    name = lambda i: nodes.get(i, {}).get("name") or nodes.get(i, {}).get("id") or i
    cat  = lambda i: nodes.get(i, {}).get("category") or "?"

    results = {
        "meta": {
            "nodes": n, "edges": G.number_of_edges(),
            "computed_at": time.strftime("%Y-%m-%dT%H:%M:%S"),
            "communities": len(comms), "articulation_points": len(cut),
            "longest_chain_len": longest[end],
        },
        "pagerank_top": [
            {"id": k, "name": name(k), "category": cat(k), "score": round(v, 6)}
            for k, v in sorted(pr.items(), key=lambda kv: -kv[1])[:30]
        ],
        "authority_top": [
            {"id": k, "name": name(k), "category": cat(k), "score": round(v, 6)}
            for k, v in sorted(a.items(), key=lambda kv: -kv[1])[:30]
        ],
        "hub_top": [
            {"id": k, "name": name(k), "category": cat(k), "score": round(v, 6)}
            for k, v in sorted(h.items(), key=lambda kv: -kv[1])[:30]
        ],
        "depth_top": [
            {"id": k, "name": name(k), "category": cat(k), "layer": layer[k]}
            for k in sorted(layer, key=lambda k: -layer[k])[:30]
        ],
        "articulation_top": [
            {"id": k, "name": name(k), "category": cat(k),
             "degree": G.degree(k)}
            for k in sorted(cut, key=lambda k: -G.degree(k))[:30]
        ],
        "longest_chain": [{"id": c, "name": name(c)} for c in chain],
    }
    json.dump(results, open(f"{ROOT}/phase1_results.json", "w"),
              ensure_ascii=False, indent=1)

    # ---- 文本报告 ----
    L = []
    L.append("# Phase 1 — 确定性图算法引擎报告\n")
    L.append(f"- 全库规模：**{n} 节点 / {G.number_of_edges()} 依赖边**")
    L.append(f"- 社区（技术领域聚类）：**{len(comms)} 个**，最大 {max(comm_sizes)} 节点")
    L.append(f"- 割点（瓶颈技术）：**{len(cut)} 个**")
    L.append(f"- DAG 最长技术演化链：**{longest[end]} 跳**\n")
    L.append("## 1. 基础性 Top15（PageRank：被最多技术依赖 = 技术树基石）\n")
    L.append("| # | 技术 | 领域 | PR |")
    L.append("|---|------|------|-----|")
    for i, r in enumerate(results["pagerank_top"][:15], 1):
        L.append(f"| {i} | {r['name']} | {r['category']} | {r['score']:.5f} |")
    L.append("\n## 2. 权威度 Top15（HITS authority：自身被高度依赖）\n")
    L.append("| # | 技术 | 领域 | 权威度 |")
    L.append("|---|------|------|--------|")
    for i, r in enumerate(results["authority_top"][:15], 1):
        L.append(f"| {i} | {r['name']} | {r['category']} | {r['score']:.5f} |")
    L.append("\n## 3. 技术成熟深度 Top15（拓扑层级：最长依赖链长度）\n")
    L.append("| # | 技术 | 领域 | 层级 |")
    L.append("|---|------|------|------|")
    for i, r in enumerate(results["depth_top"][:15], 1):
        L.append(f"| {i} | {r['name']} | {r['category']} | {r['layer']} |")
    L.append("\n## 4. 瓶颈技术 Top15（割点：移除后图碎裂，单点失效风险）\n")
    L.append("| # | 技术 | 领域 | 度 |")
    L.append("|---|------|------|----|")
    for i, r in enumerate(results["articulation_top"][:15], 1):
        L.append(f"| {i} | {r['name']} | {r['category']} | {r['degree']} |")
    L.append("\n## 5. 最长技术演化链（关键路径）\n")
    L.append(" → ".join(results["longest_chain"][i]["name"] for i in range(min(20, len(chain)))))
    open(f"{ROOT}/phase1_report.md", "w").write("\n".join(L))
    print(f"\n✅ Phase 1 完成，用时 {time.time()-t0:.1f}s，结果写入 phase1_results.json / phase1_report.md")

if __name__ == "__main__":
    main()
