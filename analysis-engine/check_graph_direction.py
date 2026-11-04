#!/usr/bin/env python3
from pathlib import Path
import sys

ROOT = Path(__file__).resolve().parent
sys.path.insert(0, str(ROOT))

import graph_engine
import phase2_score
import phase3_linkpredict


def main():
    _, expected_edges = phase3_linkpredict.load_full()
    expected = set(expected_edges)
    for module in (graph_engine, phase2_score):
        graph, _ = module.build_graph()
        actual = set(graph.edges())
        if actual != expected:
            missing = len(expected - actual)
            extra = len(actual - expected)
            print(f"FAIL {module.__name__}: 与 Phase 3 方向/边集不一致（缺 {missing}，多 {extra}）")
            return 1
    print(f"Python 图方向检查通过：{len(expected)} 条依赖边")
    return 0


if __name__ == "__main__":
    sys.exit(main())
