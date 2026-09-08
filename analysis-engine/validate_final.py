#!/usr/bin/env python3.11
"""最终全库校验：合并 graph.json(原2265) + new_techs.json(新增11031)，
做 DAG / 断边 / 重复 / 年份序 / 连通性 校验。"""
import json, sys
import networkx as nx
from collections import Counter

ROOT = "/workspace/analysis-engine/data"

def load():
    g = json.load(open(f"{ROOT}/graph.json"))
    orig_nodes = {n["id"]: n for n in g["nodes"]}
    # 原库 dependsOn 边
    orig_dep = [(e["source"], e["target"]) for e in g["edges"] if e.get("type") in ("dependsOn", "dependency")]
    nt = json.load(open(f"{ROOT}/subcat/new_techs.json"))
    return orig_nodes, orig_dep, nt

def main():
    orig_nodes, orig_dep, nt = load()
    print(f"[1] 原库节点: {len(orig_nodes)} | 原库dep边: {len(orig_dep)} | 新增条目: {len(nt)}")

    # ---- 重复 id 校验 ----
    new_ids = [x["id"] for x in nt]
    dup_new = [k for k, v in Counter(new_ids).items() if v > 1]
    overlap = set(new_ids) & set(orig_nodes.keys())
    # 区分「真实冲突」与「占位概念被真实条目替换」
    real_conflict = []
    concept_replaced = []
    for i in overlap:
        o = orig_nodes[i]
        if o.get("kind") == "concept" or o.get("category") == "(concept)":
            concept_replaced.append(i)
        else:
            real_conflict.append(i)
    print(f"[2] 新增内重复id: {len(dup_new)} | 真实冲突id: {len(real_conflict)} | 占位概念被替换: {len(concept_replaced)}")
    if dup_new[:10]:
        print("    重复样例:", dup_new[:10])
    if real_conflict[:10]:
        print("    真实冲突样例:", real_conflict[:10])

    # ---- 构建全节点 + dependsOn 有向图 ----
    all_nodes = {}
    all_nodes.update(orig_nodes)
    for x in nt:
        all_nodes[x["id"]] = x
    print(f"[3] 合并后总节点: {len(all_nodes)}")

    G = nx.DiGraph()
    G.add_nodes_from(all_nodes.keys())
    broken = []          # 断边（指向不存在的节点）
    year_viol = []       # 年份序违规（子.year < 父.year）
    edges = 0
    for (s, t) in orig_dep:
        if t not in all_nodes:
            broken.append((s, t)); continue
        G.add_edge(s, t); edges += 1
    for x in nt:
        s = x["id"]; sy = x.get("year", 0) or 0
        for t in x.get("dependsOn", []):
            edges += 1
            if t not in all_nodes:
                broken.append((s, t)); continue
            G.add_edge(s, t)
            ty = all_nodes[t].get("year", 0) or 0
            if sy < ty:   # 依赖必须更早或同年
                year_viol.append((s, sy, t, ty))
    print(f"[4] dependsOn 边总数: {edges} | 断边: {len(broken)} | 年份序违规: {len(year_viol)}")
    if broken[:10]:
        print("    断边样例:", broken[:10])
    if year_viol[:10]:
        print("    年份违规样例:", year_viol[:10])

    # ---- DAG 校验 ----
    try:
        cyc = nx.find_cycle(G, orientation="original")
        print(f"[5] ❌ 发现环: {cyc[:3]}")
        dag_ok = False
    except nx.NetworkXNoCycle:
        print("[5] ✅ DAG 校验通过：无环")
        dag_ok = True

    # ---- 连通性 ----
    wcc = list(nx.weakly_connected_components(G))
    sizes = sorted((len(c) for c in wcc), reverse=True)
    print(f"[6] 弱连通分量: {len(wcc)} | 最大: {sizes[0]} | 前5: {sizes[:5]}")
    roots = [n for n in G if G.in_degree(n) == 0]
    leaves = [n for n in G if G.out_degree(n) == 0]
    print(f"    根(无依赖): {len(roots)} | 叶(无下游): {len(leaves)}")

    # ---- tier 分布（新增条目）----
    tiers = Counter(x.get("tier") for x in nt)
    print(f"[7] 新增条目 tier 分布: {dict(tiers)}")

    # ---- 汇总 ----
    ok = (len(dup_new) == 0 and len(real_conflict) == 0 and len(broken) == 0
          and len(year_viol) == 0 and dag_ok)
    print("\n==== 结论 ====")
    print("PASS ✅" if ok else "FAIL ❌")
    return 0 if ok else 1

if __name__ == "__main__":
    sys.exit(main())
