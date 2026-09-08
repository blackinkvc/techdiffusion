#!/usr/bin/env python3.11
# -*- coding: utf-8 -*-
"""Phase 3 链接预测 —— Hold-out 科学评估（2026-09-08 方向修正后新增）
=====================================================================
目的：量化「前提支撑度（长度=2 近因缺口）」链接预测规则的真实判别力，
      而非自证其成。

方法（与 phase3_linkpredict.py 同源同方向，train/test 严格分离）：
  1. 正样本池 P = 全部「规则可覆盖的现存边」：
       (a,b) ∈ edges 且 ∃ p∈parents(a): b∈parents(p)  —— 即长度=2 缺口恰好
       已被显式记录的边（这类边若当初漏记，规则能补出来）。
  2. 随机留出 20% 作测试正例 H（seed=42）。
  3. 训练图 G' = G - H。在 G' 上对每条测试边与其配对负例打分：
        score(a,b) = frac·(1+log2 sup)，frac=sup/|parents(a)|，
        sup = |{p∈parents'(a): b∈parents'(p)}|；sup=0 ⇒ score=0。
  4. 配对负例 N：对每条 h∈H 从 a 的「长度=2 可达但非现存」候选中随机取 1 个，
     保证正负样本处于同一判别难度（条件负例，避免全图随机导致 AUC 虚高）。
  5. 指标：
        AUC      = P(score(正)>score(负))，Mann-Whitney U 估计，随机基线 0.5
        Recall@K = 正例中 score 排名进入全局候选 top-K 的比例
        Lift     = Recall@K / (随机挑选的期望命中率)

输出：data/phase3_eval.json + 控制台摘要。
用法：python3.11 analysis-engine/phase3_eval.py
"""
import json, random, math, time
from collections import defaultdict
from phase3_linkpredict import load_full

ROOT = "/workspace/analysis-engine/data"
SEED = 42
HOLD_FRAC = 0.20

def build_parents(edges):
    parents = defaultdict(set)
    for a, b in edges:          # a 依赖 b（b 是 a 的直接前提）
        parents[a].add(b)
    return parents

def rule_score(parents, a, b):
    """前提支撑度：sup = 直接前提中『直接依赖 b』的个数（长度=2 近因缺口）"""
    sup = 0
    for p in parents.get(a, ()):
        if b in parents.get(p, ()):
            sup += 1
    if sup == 0:
        return 0.0
    frac = sup / len(parents[a])
    return frac * (1.0 + math.log2(sup))

def main():
    t0 = time.time()
    nodes, edges_raw = load_full()
    edges = set(edges_raw)
    print(f"全量节点 {len(nodes)} | 依赖边(去重) {len(edges)}")

    parents = build_parents(edges)
    # 1) 正样本池 P：规则可覆盖的现存边
    P = set()
    for a, plist in parents.items():
        for p in plist:
            for b in parents.get(p, ()):
                if (a, b) in edges:
                    P.add((a, b))
    print(f"规则可覆盖的现存边(正样本池 P): {len(P)}")

    # 2) 随机留出 H（同时保证每条 h 在剩余图上还有替代证据可能——不强制）
    rng = random.Random(SEED)
    H = set(rng.sample(sorted(P), int(HOLD_FRAC * len(P))))
    Etr = edges - H
    parents_tr = build_parents(Etr)
    print(f"测试正例 H: {len(H)} | 训练图边: {len(Etr)}")

    # 3+4) 配对负例 + 打分（训练图上）
    scores_pos, scores_neg = [], []
    recall_pool = []            # 全局候选 (a,b,score)，用于 Recall@K
    gen_by_a = defaultdict(list)
    # 对每个测试正例 a，需要其 2-hop 可达集做负例采样；同时收集全局候选分
    # （只对涉及的 a 全量生成，供排序）
    test_as = set(a for a, b in H)
    for a in test_as:
        cand = {}
        for p in parents_tr.get(a, ()):
            for b in parents_tr.get(p, ()):
                if b != a and (a, b) not in Etr:
                    s = rule_score(parents_tr, a, b)
                    if s > 0:
                        cand[b] = s
        for b, s in cand.items():
            recall_pool.append((a, b, s))
    # 打正例分
    for a, b in H:
        scores_pos.append(rule_score(parents_tr, a, b))
    # 配对负例：每个测试 a 若存在未命中的候选 b' 则取一个最高分候选作“难负例”，
    # 否则取随机 2-hop 可达非现存 b'
    used_neg = set()
    for a, b in sorted(H):
        opts = [bb for (aa, bb, s) in recall_pool if aa == a and s >= 0]
        # 排除已是现存/正例/已用
        pool = [bb for bb in opts if bb not in parents_tr[a] and (a, bb) not in Etr and bb != b]
        pool = [bb for bb in pool if (a, bb) not in used_neg]
        if pool:
            nb = rng.choice(pool)
        else:
            # 回退：随机挑一个 b' 使 (a,b') 不在训练图
            candidates = [x for x in nodes if x != a and (a, x) not in Etr]
            nb = rng.choice(candidates) if candidates else None
        if nb is not None:
            used_neg.add((a, nb))
            scores_neg.append(rule_score(parents_tr, a, nb))
    # 若配对不足（池耗尽），补齐随机负例
    while len(scores_neg) < len(scores_pos):
        a = rng.choice(list(test_as))
        candidates = [x for x in nodes if x != a and (a, x) not in Etr]
        if not candidates:
            continue
        nb = rng.choice(candidates)
        if (a, nb) in used_neg:
            continue
        used_neg.add((a, nb))
        scores_neg.append(rule_score(parents_tr, a, nb))

    # 5) 指标
    # AUC（Mann-Whitney）
    auc_n = len(scores_pos)
    if not scores_neg or auc_n == 0:
        print("FAIL: 样本不足"); return
    pos_arr, neg_arr = scores_pos, scores_neg
    # 高效近似：排序后秩和
    combined = sorted([(s, 1) for s in pos_arr] + [(s, 0) for s in neg_arr],
                      key=lambda x: x[0])
    rank_sum = 0.0
    i = 0
    n_total = len(combined)
    while i < n_total:
        j = i
        while j < n_total and combined[j][0] == combined[i][0]:
            j += 1
        avg_rank = (i + 1 + j) / 2.0
        for k in range(i, j):
            if combined[k][1] == 1:
                rank_sum += avg_rank
        i = j
    auc = (rank_sum - auc_n * (auc_n + 1) / 2.0) / (auc_n * len(scores_neg))

    # Recall@K：全局候选按分排序
    recall_pool_sorted = sorted(recall_pool, key=lambda x: -x[2])
    pool_by_a = defaultdict(list)
    for a, b, s in recall_pool_sorted:
        pool_by_a[a].append(b)
    def recall_at(k):
        top = {}
        for a, b, s in recall_pool_sorted[:k]:
            top[(a, b)] = True
        hit = sum(1 for h in H if h in top)
        return hit / len(H) if H else 0
    r_k = {k: round(recall_at(k), 4) for k in (100, 500, 1000, 5000)}
    # 随机基线 recall@K（归一化命中率）：在候选空间 Ω 随机抽 K 条，命中 H 的期望占比 = K/|Ω|
    omega_size = len(recall_pool)  # 候选空间大小
    baseline = {k: round(min(1.0, k / max(omega_size, 1)), 4) for k in (100, 500, 1000, 5000)}

    gen_ratio = round(sum(1 for x in scores_pos if x > 0) / max(len(scores_pos), 1), 4)
    result = {
        "test_positive_reconstructible_ratio": gen_ratio,
        "meta": {
            "method": "prerequisite-support hold-out evaluation",
            "graph": f"{len(nodes)} nodes / {len(edges)} edges",
            "positive_pool": len(P), "test_positive": len(H),
            "negative_sampled": len(scores_neg),
            "seed": SEED, "hold_frac": HOLD_FRAC,
            "computed_at": time.strftime("%Y-%m-%dT%H:%M:%S"),
        },
        "auc": round(auc, 4),
        "auc_random_baseline": 0.5,
        "recall_at_k": r_k,
        "recall_random_baseline": baseline,
    }
    json.dump(result, open(f"{ROOT}/phase3_eval.json", "w", encoding="utf-8"),
              ensure_ascii=False, indent=1)
    print(f"\n=== Phase 3 Hold-out 评估（方向修正后）===")
    print(f"AUC = {auc:.4f}  (随机基线 0.5, lift {auc/0.5:.1f}x)")
    for k in (100, 500, 1000, 5000):
        print(f"Recall@{k:<5}= {r_k[k]:.4f}   随机基线 {baseline[k]:.4f}")
    print(f"候选空间 ≈ {omega_size} | 用时 {time.time()-t0:.1f}s")
    print("✅ 写出 data/phase3_eval.json")

if __name__ == "__main__":
    main()
