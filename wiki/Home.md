# techdiffusion

> 人类技术演化网络 2.0 · 规律挖掘与未来涌现推演
> Humanity Technology Evolution Network — mapping the dependencies, patterns, and future emergence of human technology.

**在线浏览（GitHub Pages）：<https://blackinkvc.github.io/techdiffusion/>**

本 Wiki 为仓库文档页，内容取自 [`README.md`](https://github.com/blackinkvc/techdiffusion/blob/main/README.md)。

---

## 目录

| 页面 | 内容 |
|---|---|
| [[这是什么]] | 项目定位、能回答什么问题、当前数据规模 |
| [[站点结构]] | 站点各页面用途一览 + 两份构建文档入口 |
| [[分析引擎]] | `analysis-engine/` 工具链、技术栈、数据格式 |
| [[目录结构与本地预览]] | 仓库目录树、本地起服务、许可证 |
| [[English]] | 英文简介 |

---

## 快速上手

```bash
git clone https://github.com/blackinkvc/techdiffusion.git
cd techdiffusion
python3 -m http.server 8000
open http://localhost:8000/
```

入口 `index.html` 会自动跳转到 `worldview.html`；全量科技树为 `tree_full.html`（数据较大，加载稍慢属正常）。
