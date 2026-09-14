# English

**techdiffusion** is a static, offline-browsable visualization database of human technology evolution. It connects ~13,318 technologies through their real historical dependencies into a single evolution network, paired with a deterministic analysis engine that:

- maps prerequisite dependencies between technologies,
- scores each technology on five first-principles maturity dimensions (D1–D5 → L1–L5 tiers),
- forecasts *when* and *under what conditions* future technologies will emerge, derived from the network's own premise-closure and "premise-readiness law" (serious science, not speculative fiction).

**Online:** <https://blackinkvc.github.io/techdiffusion/>

**Stack:** D3.js v7 + vanilla HTML/CSS/JS front end; Python 3 + `networkx` for deterministic graph algorithms and statistics.

**Local preview:**

```bash
python3 -m http.server 8000
# open http://localhost:8000/
```

**Note on data scale:** the repository carries two datasets. The main pipeline (`assets/data.js` + `assets/techs_*.js`), used by `browse` / `tree` / `lineage` / `detail` / `analysis`, holds 2,266 nodes and 6,126 dependency edges. The full dataset (`assets/data_full.js`), used by `tree_full.html`, holds 13,318 nodes and 16,811 dependency/enabling edges. The figure "~13,318 technologies" in the README refers to the full dataset.

See [`版本迭代日志.md`](https://github.com/blackinkvc/techdiffusion/blob/main/版本迭代日志.md) and [`项目构建研究思路与全程纪要.md`](https://github.com/blackinkvc/techdiffusion/blob/main/项目构建研究思路与全程纪要.md) (Chinese) for methodology and build notes.
