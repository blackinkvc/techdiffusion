// 自动生成 + 按《研发 SOP》升级后的技术条目（含技术拆解新增的子组件）
const EXTRA_TECHS = [
{
    "id": "counting",
    "name": "计数",
    "en": "Counting",
    "category": "basic",
    "era": "prehistoric",
    "date": "约 3 万年前",
    "year": -30000,
    "people": "",
    "place": "",
    "summary": "计数在 约 3 万年前 前后成形，依托 语言 把 理论建模、实验测量 落到实处，并成为 科学基础与方法 中承上启下的一环，直接支撑了 数字符号系统 等后续技术。",
    "dependsOn": ["language"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "史前时代",
        "text": "计数在 约 3 万年前 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，计数仍是 理论建模 的底层支撑，并持续影响 数字符号系统。"
      }
    ],
    "significance": "计数把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 数字符号系统。"
  },
{
    "id": "numerals",
    "name": "数字符号系统",
    "en": "Numerical Notation",
    "category": "basic",
    "era": "ancient",
    "date": "公元前 3500 年",
    "year": -3500,
    "people": "",
    "place": "",
    "summary": "数字符号系统约 公元前 3500 年 出现，建立在 语言、计数 之上；它把 理论建模、实验测量 变成可稳定复现的能力，是 科学基础与方法 中从经验走向方法的关键一步。",
    "dependsOn": ["language","counting"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "数字符号系统在 公元前 3500 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，数字符号系统仍是 理论建模 的底层支撑，并作为 科学基础与方法 的基础能力持续发挥作用。"
      }
    ],
    "significance": "数字符号系统把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "arithmetic",
    "name": "算术",
    "en": "Arithmetic",
    "category": "basic",
    "era": "ancient",
    "date": "公元前 3000 年",
    "year": -3000,
    "people": "",
    "place": "",
    "summary": "算术约 公元前 3000 年 成熟，建立在 语言、文字、数学 之上完成关键突破；其能力延伸到 理论建模、实验测量，并为 制图学 的发展铺平了道路。",
    "dependsOn": ["language","writing","mathematics"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "算术在 公元前 3000 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，算术仍是 理论建模 的底层支撑，并持续影响 制图学。"
      }
    ],
    "significance": "算术把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 制图学。"
  },
{
    "id": "geometry_euclid",
    "name": "几何学",
    "en": "Geometry",
    "category": "basic",
    "era": "classical",
    "date": "公元前 300 年",
    "year": -300,
    "people": "",
    "place": "",
    "summary": "几何学约 公元前 300 年 出现，建立在 语言、文字、数学 之上；它把 理论建模、实验测量 变成可稳定复现的能力，是 科学基础与方法 中从经验走向方法的关键一步。",
    "dependsOn": ["language","writing","mathematics","surveying"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "古典时代",
        "text": "几何学在 公元前 300 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，几何学仍是 理论建模 的底层支撑，并作为 科学基础与方法 的基础能力持续发挥作用。"
      }
    ],
    "significance": "几何学把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "zero_concept",
    "name": "零的概念",
    "en": "Zero Concept",
    "category": "basic",
    "era": "medieval",
    "date": "500 年",
    "year": 500,
    "people": "",
    "place": "",
    "summary": "零的概念在 500 年 前后成形，依托 文字、数学 把 理论建模、实验测量 落到实处，并成为 科学基础与方法 中承上启下的一环，直接支撑了 位值制计数法 等后续技术。",
    "dependsOn": ["writing","mathematics"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "中世纪",
        "text": "零的概念在 500 年 前后出现，依托 文字 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，零的概念仍是 理论建模 的底层支撑，并持续影响 位值制计数法。"
      }
    ],
    "significance": "零的概念把 文字 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 位值制计数法。"
  },
{
    "id": "positional",
    "name": "位值制计数法",
    "en": "Positional Notation",
    "category": "basic",
    "era": "medieval",
    "date": "600 年",
    "year": 600,
    "people": "",
    "place": "",
    "summary": "位值制计数法约 600 年 出现，建立在 文字、数学、零的概念 之上；它把 理论建模、实验测量 变成可稳定复现的能力，是 科学基础与方法 中从经验走向方法的关键一步。",
    "dependsOn": ["writing","mathematics","zero_concept"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "中世纪",
        "text": "位值制计数法在 600 年 前后出现，依托 文字 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，位值制计数法仍是 理论建模 的底层支撑，并作为 科学基础与方法 的基础能力持续发挥作用。"
      }
    ],
    "significance": "位值制计数法把 文字 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "algebra",
    "name": "代数",
    "en": "Algebra",
    "category": "basic",
    "era": "medieval",
    "date": "820 年",
    "year": 820,
    "people": "",
    "place": "",
    "summary": "代数约 820 年 成熟，建立在 文字、数学 之上完成关键突破；其能力延伸到 理论建模、实验测量，并为 光学、算法理论 的发展铺平了道路。",
    "dependsOn": ["writing","mathematics"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "中世纪",
        "text": "代数在 820 年 前后出现，依托 文字 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，代数仍是 理论建模 的底层支撑，并持续影响 光学、算法理论。"
      }
    ],
    "significance": "代数把 文字 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 光学、算法理论。"
  },
{
    "id": "trigonometry",
    "name": "三角学",
    "en": "Trigonometry",
    "category": "basic",
    "era": "classical",
    "date": "150 年",
    "year": 150,
    "people": "",
    "place": "",
    "summary": "三角学约 150 年 出现，建立在 文字、数学 之上；它把 理论建模、实验测量 变成可稳定复现的能力，是 科学基础与方法 中从经验走向方法的关键一步。",
    "dependsOn": ["writing","mathematics"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "古典时代",
        "text": "三角学在 150 年 前后出现，依托 文字 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，三角学仍是 理论建模 的底层支撑，并作为 科学基础与方法 的基础能力持续发挥作用。"
      }
    ],
    "significance": "三角学把 文字 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "decimal",
    "name": "十进制小数",
    "en": "Decimal Fractions",
    "category": "basic",
    "era": "medieval",
    "date": "1200 年",
    "year": 1200,
    "people": "",
    "place": "",
    "summary": "十进制小数约 1200 年 出现，建立在 文字、数学 之上；它把 理论建模、实验测量 变成可稳定复现的能力，是 科学基础与方法 中从经验走向方法的关键一步。",
    "dependsOn": ["writing","mathematics"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "中世纪",
        "text": "十进制小数在 1200 年 前后出现，依托 文字 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，十进制小数仍是 理论建模 的底层支撑，并作为 科学基础与方法 的基础能力持续发挥作用。"
      }
    ],
    "significance": "十进制小数把 文字 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "negative_num",
    "name": "负数",
    "en": "Negative Numbers",
    "category": "basic",
    "era": "classical",
    "date": "100 年",
    "year": 100,
    "people": "",
    "place": "",
    "summary": "负数约 100 年 出现，建立在 文字、数学 之上；它把 理论建模、实验测量 变成可稳定复现的能力，是 科学基础与方法 中从经验走向方法的关键一步。",
    "dependsOn": ["writing","mathematics"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "古典时代",
        "text": "负数在 100 年 前后出现，依托 文字 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，负数仍是 理论建模 的底层支撑，并作为 科学基础与方法 的基础能力持续发挥作用。"
      }
    ],
    "significance": "负数把 文字 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "logarithms",
    "name": "对数",
    "en": "Logarithms",
    "category": "basic",
    "era": "earlymodern",
    "date": "1614 年",
    "year": 1614,
    "people": "",
    "place": "",
    "summary": "对数约 1614 年 出现，建立在 文字、数学 之上；它把 理论建模、实验测量 变成可稳定复现的能力，是 科学基础与方法 中从经验走向方法的关键一步。",
    "dependsOn": ["writing","mathematics"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "近代早期",
        "text": "对数在 1614 年 前后出现，依托 文字 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，对数仍是 理论建模 的底层支撑，并作为 科学基础与方法 的基础能力持续发挥作用。"
      }
    ],
    "significance": "对数把 文字 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "analytic_geom",
    "name": "解析几何",
    "en": "Analytic Geometry",
    "category": "basic",
    "era": "earlymodern",
    "date": "1637 年",
    "year": 1637,
    "people": "",
    "place": "",
    "summary": "解析几何约 1637 年 出现，建立在 文字、数学 之上；它把 理论建模、实验测量 变成可稳定复现的能力，是 科学基础与方法 中从经验走向方法的关键一步。",
    "dependsOn": ["writing","mathematics"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "近代早期",
        "text": "解析几何在 1637 年 前后出现，依托 文字 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，解析几何仍是 理论建模 的底层支撑，并作为 科学基础与方法 的基础能力持续发挥作用。"
      }
    ],
    "significance": "解析几何把 文字 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "calculus",
    "name": "微积分",
    "en": "Calculus",
    "category": "basic",
    "era": "earlymodern",
    "date": "1687 年",
    "year": 1687,
    "people": "",
    "place": "",
    "summary": "微积分约 1687 年 成熟，建立在 文字、数学、经典力学 之上完成关键突破；其能力延伸到 理论建模、实验测量，并为 天体力学 的发展铺平了道路。",
    "dependsOn": ["writing","mathematics","physics"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "近代早期",
        "text": "微积分在 1687 年 前后出现，依托 文字 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，微积分仍是 理论建模 的底层支撑，并持续影响 天体力学。"
      }
    ],
    "significance": "微积分把 文字 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 天体力学。"
  },
{
    "id": "probability",
    "name": "概率论",
    "en": "Probability Theory",
    "category": "basic",
    "era": "earlymodern",
    "date": "1654 年",
    "year": 1654,
    "people": "",
    "place": "",
    "summary": "概率论约 1654 年 出现，建立在 文字、数学、组合数学 之上；它把 理论建模、实验测量 变成可稳定复现的能力，是 科学基础与方法 中从经验走向方法的关键一步。",
    "dependsOn": ["writing","mathematics","combinatorics"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "近代早期",
        "text": "概率论在 1654 年 前后出现，依托 文字 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，概率论仍是 理论建模 的底层支撑，并作为 科学基础与方法 的基础能力持续发挥作用。"
      }
    ],
    "significance": "概率论把 文字 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "complex_num",
    "name": "复数",
    "en": "Complex Numbers",
    "category": "basic",
    "era": "earlymodern",
    "date": "1572 年",
    "year": 1572,
    "people": "",
    "place": "",
    "summary": "复数约 1572 年 出现，建立在 文字、数学 之上；它把 理论建模、实验测量 变成可稳定复现的能力，是 科学基础与方法 中从经验走向方法的关键一步。",
    "dependsOn": ["writing","mathematics"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "近代早期",
        "text": "复数在 1572 年 前后出现，依托 文字 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，复数仍是 理论建模 的底层支撑，并作为 科学基础与方法 的基础能力持续发挥作用。"
      }
    ],
    "significance": "复数把 文字 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "number_theory",
    "name": "数论",
    "en": "Number Theory",
    "category": "basic",
    "era": "classical",
    "date": "公元前 300 年",
    "year": -300,
    "people": "",
    "place": "",
    "summary": "数论约 公元前 300 年 出现，建立在 语言、文字、数学 之上；它把 理论建模、实验测量 变成可稳定复现的能力，是 科学基础与方法 中从经验走向方法的关键一步。",
    "dependsOn": ["language","writing","mathematics"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "古典时代",
        "text": "数论在 公元前 300 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，数论仍是 理论建模 的底层支撑，并作为 科学基础与方法 的基础能力持续发挥作用。"
      }
    ],
    "significance": "数论把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "lin_algebra",
    "name": "线性代数",
    "en": "Linear Algebra",
    "category": "basic",
    "era": "industrial",
    "date": "1858 年",
    "year": 1858,
    "people": "",
    "place": "",
    "summary": "线性代数约 1858 年 出现，建立在 文字、数学 之上；它把 理论建模、实验测量 变成可稳定复现的能力，是 科学基础与方法 中从经验走向方法的关键一步。",
    "dependsOn": ["writing","mathematics"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "线性代数在 1858 年 前后出现，依托 文字 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，线性代数仍是 理论建模 的底层支撑，并作为 科学基础与方法 的基础能力持续发挥作用。"
      }
    ],
    "significance": "线性代数把 文字 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "diff_eq",
    "name": "微分方程",
    "en": "Differential Equations",
    "category": "basic",
    "era": "earlymodern",
    "date": "1690 年",
    "year": 1690,
    "people": "",
    "place": "",
    "summary": "微分方程约 1690 年 成熟，建立在 文字、数学、经典力学 之上完成关键突破；其能力延伸到 理论建模、实验测量，并为 固体力学、声学 的发展铺平了道路。",
    "dependsOn": ["writing","mathematics","physics"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "近代早期",
        "text": "微分方程在 1690 年 前后出现，依托 文字 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，微分方程仍是 理论建模 的底层支撑，并持续影响 固体力学、声学。"
      }
    ],
    "significance": "微分方程把 文字 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 固体力学、声学。"
  },
{
    "id": "fourier",
    "name": "傅里叶分析",
    "en": "Fourier Analysis",
    "category": "basic",
    "era": "industrial",
    "date": "1807 年",
    "year": 1807,
    "people": "",
    "place": "",
    "summary": "傅里叶分析约 1807 年 出现，建立在 文字、数学 之上；它把 理论建模、实验测量 变成可稳定复现的能力，是 科学基础与方法 中从经验走向方法的关键一步。",
    "dependsOn": ["writing","mathematics"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "傅里叶分析在 1807 年 前后出现，依托 文字 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，傅里叶分析仍是 理论建模 的底层支撑，并作为 科学基础与方法 的基础能力持续发挥作用。"
      }
    ],
    "significance": "傅里叶分析把 文字 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "statistics",
    "name": "统计学",
    "en": "Statistics",
    "category": "basic",
    "era": "industrial",
    "date": "1809 年",
    "year": 1809,
    "people": "",
    "place": "",
    "summary": "统计学在 1809 年 前后成形，依托 文字、数学 把 理论建模、实验测量 落到实处，并成为 科学基础与方法 中承上启下的一环，直接支撑了 分形几何、数值分析、计算复杂性 等后续技术。",
    "dependsOn": ["writing","mathematics"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "统计学在 1809 年 前后出现，依托 文字 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，统计学仍是 理论建模 的底层支撑，并持续影响 分形几何、数值分析、计算复杂性。"
      }
    ],
    "significance": "统计学把 文字 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 分形几何、数值分析、计算复杂性。"
  },
{
    "id": "noneuclid",
    "name": "非欧几何",
    "en": "Non-Euclidean Geometry",
    "category": "basic",
    "era": "industrial",
    "date": "1829 年",
    "year": 1829,
    "people": "",
    "place": "",
    "summary": "非欧几何约 1829 年 出现，建立在 文字、数学 之上；它把 理论建模、实验测量 变成可稳定复现的能力，是 科学基础与方法 中从经验走向方法的关键一步。",
    "dependsOn": ["writing","mathematics"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "非欧几何在 1829 年 前后出现，依托 文字 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，非欧几何仍是 理论建模 的底层支撑，并作为 科学基础与方法 的基础能力持续发挥作用。"
      }
    ],
    "significance": "非欧几何把 文字 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "group_theory",
    "name": "群论",
    "en": "Group Theory",
    "category": "basic",
    "era": "industrial",
    "date": "1832 年",
    "year": 1832,
    "people": "",
    "place": "",
    "summary": "群论约 1832 年 出现，建立在 文字、数学 之上；它把 理论建模、实验测量 变成可稳定复现的能力，是 科学基础与方法 中从经验走向方法的关键一步。",
    "dependsOn": ["writing","mathematics"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "群论在 1832 年 前后出现，依托 文字 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，群论仍是 理论建模 的底层支撑，并作为 科学基础与方法 的基础能力持续发挥作用。"
      }
    ],
    "significance": "群论把 文字 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "topology",
    "name": "拓扑学",
    "en": "Topology",
    "category": "basic",
    "era": "industrial",
    "date": "1860 年",
    "year": 1860,
    "people": "",
    "place": "",
    "summary": "拓扑学在 1860 年 前后成形，依托 文字、数学 把 理论建模、实验测量 落到实处，并成为 科学基础与方法 中承上启下的一环，直接支撑了 纽结理论 等后续技术。",
    "dependsOn": ["writing","mathematics"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "拓扑学在 1860 年 前后出现，依托 文字 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，拓扑学仍是 理论建模 的底层支撑，并持续影响 纽结理论。"
      }
    ],
    "significance": "拓扑学把 文字 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 纽结理论。"
  },
{
    "id": "set_theory",
    "name": "集合论",
    "en": "Set Theory",
    "category": "basic",
    "era": "industrial",
    "date": "1874 年",
    "year": 1874,
    "people": "",
    "place": "",
    "summary": "集合论约 1874 年 出现，建立在 文字、数学 之上；它把 理论建模、实验测量 变成可稳定复现的能力，是 科学基础与方法 中从经验走向方法的关键一步。",
    "dependsOn": ["writing","mathematics"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "集合论在 1874 年 前后出现，依托 文字 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，集合论仍是 理论建模 的底层支撑，并作为 科学基础与方法 的基础能力持续发挥作用。"
      }
    ],
    "significance": "集合论把 文字 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "graph_theory",
    "name": "图论",
    "en": "Graph Theory",
    "category": "basic",
    "era": "earlymodern",
    "date": "1736 年",
    "year": 1736,
    "people": "",
    "place": "",
    "summary": "图论约 1736 年 出现，建立在 文字、数学 之上；它把 理论建模、实验测量 变成可稳定复现的能力，是 科学基础与方法 中从经验走向方法的关键一步。",
    "dependsOn": ["writing","mathematics"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "近代早期",
        "text": "图论在 1736 年 前后出现，依托 文字 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，图论仍是 理论建模 的底层支撑，并作为 科学基础与方法 的基础能力持续发挥作用。"
      }
    ],
    "significance": "图论把 文字 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "combinatorics",
    "name": "组合数学",
    "en": "Combinatorics",
    "category": "basic",
    "era": "earlymodern",
    "date": "1650 年",
    "year": 1650,
    "people": "",
    "place": "",
    "summary": "组合数学在 1650 年 前后成形，依托 文字、数学 把 理论建模、实验测量 落到实处，并成为 科学基础与方法 中承上启下的一环，直接支撑了 概率论 等后续技术。",
    "dependsOn": ["writing","mathematics"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "近代早期",
        "text": "组合数学在 1650 年 前后出现，依托 文字 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，组合数学仍是 理论建模 的底层支撑，并持续影响 概率论。"
      }
    ],
    "significance": "组合数学把 文字 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 概率论。"
  },
{
    "id": "math_logic",
    "name": "数理逻辑",
    "en": "Mathematical Logic",
    "category": "basic",
    "era": "industrial",
    "date": "1854 年",
    "year": 1854,
    "people": "",
    "place": "",
    "summary": "数理逻辑约 1854 年 出现，建立在 文字、数学 之上；它把 理论建模、实验测量 变成可稳定复现的能力，是 科学基础与方法 中从经验走向方法的关键一步。",
    "dependsOn": ["writing","mathematics"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "数理逻辑在 1854 年 前后出现，依托 文字 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，数理逻辑仍是 理论建模 的底层支撑，并作为 科学基础与方法 的基础能力持续发挥作用。"
      }
    ],
    "significance": "数理逻辑把 文字 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "tensor_calc",
    "name": "张量",
    "en": "Tensor Calculus",
    "category": "basic",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "张量在 1900 年 前后成形，依托 文字、数学 把 理论建模、实验测量 落到实处，并成为 科学基础与方法 中承上启下的一环，直接支撑了 测度论 等后续技术。",
    "dependsOn": ["writing","mathematics"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "张量在 1900 年 前后出现，依托 文字 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，张量仍是 理论建模 的底层支撑，并持续影响 测度论。"
      }
    ],
    "significance": "张量把 文字 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 测度论。"
  },
{
    "id": "measure_theory",
    "name": "测度论",
    "en": "Measure Theory",
    "category": "basic",
    "era": "electrical",
    "date": "1902 年",
    "year": 1902,
    "people": "",
    "place": "",
    "summary": "测度论约 1902 年 出现，建立在 张量、文字、数学 之上；它把 理论建模、实验测量 变成可稳定复现的能力，是 科学基础与方法 中从经验走向方法的关键一步。",
    "dependsOn": ["tensor_calc","writing","mathematics"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "测度论在 1902 年 前后出现，依托 张量 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，测度论仍是 理论建模 的底层支撑，并作为 科学基础与方法 的基础能力持续发挥作用。"
      }
    ],
    "significance": "测度论把 张量 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "kolmogorov",
    "name": "公理化概率",
    "en": "Axiomatic Probability",
    "category": "basic",
    "era": "electrical",
    "date": "1933 年",
    "year": 1933,
    "people": "",
    "place": "",
    "summary": "公理化概率约 1933 年 出现，建立在 文字、数学 之上；它把 理论建模、实验测量 变成可稳定复现的能力，是 科学基础与方法 中从经验走向方法的关键一步。",
    "dependsOn": ["writing","mathematics"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "公理化概率在 1933 年 前后出现，依托 文字 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，公理化概率仍是 理论建模 的底层支撑，并作为 科学基础与方法 的基础能力持续发挥作用。"
      }
    ],
    "significance": "公理化概率把 文字 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "chaos",
    "name": "混沌理论",
    "en": "Chaos Theory",
    "category": "basic",
    "era": "info",
    "date": "1963 年",
    "year": 1963,
    "people": "",
    "place": "",
    "summary": "混沌理论约 1963 年 出现，建立在 文字、数学、突变理论 之上；它把 理论建模、实验测量 变成可稳定复现的能力，是 科学基础与方法 中从经验走向方法的关键一步。",
    "dependsOn": ["writing","mathematics","catastrophe"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "混沌理论在 1963 年 前后出现，依托 文字 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，混沌理论仍是 理论建模 的底层支撑，并作为 科学基础与方法 的基础能力持续发挥作用。"
      }
    ],
    "significance": "混沌理论把 文字 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "fractal",
    "name": "分形几何",
    "en": "Fractal Geometry",
    "category": "basic",
    "era": "info",
    "date": "1975 年",
    "year": 1975,
    "people": "",
    "place": "",
    "summary": "分形几何约 1975 年 出现，建立在 文字、数学、数值分析 之上；它把 理论建模、实验测量 变成可稳定复现的能力，是 科学基础与方法 中从经验走向方法的关键一步。",
    "dependsOn": ["writing","mathematics","numerical","statistics","optimization"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "分形几何在 1975 年 前后出现，依托 文字 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，分形几何仍是 理论建模 的底层支撑，并作为 科学基础与方法 的基础能力持续发挥作用。"
      }
    ],
    "significance": "分形几何把 文字 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "game_theory",
    "name": "博弈论",
    "en": "Game Theory",
    "category": "basic",
    "era": "electrical",
    "date": "1944 年",
    "year": 1944,
    "people": "",
    "place": "",
    "summary": "博弈论约 1944 年 出现，建立在 文字、数学 之上；它把 理论建模、实验测量 变成可稳定复现的能力，是 科学基础与方法 中从经验走向方法的关键一步。",
    "dependsOn": ["writing","mathematics"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "博弈论在 1944 年 前后出现，依托 文字 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，博弈论仍是 理论建模 的底层支撑，并作为 科学基础与方法 的基础能力持续发挥作用。"
      }
    ],
    "significance": "博弈论把 文字 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "info_theory",
    "name": "信息论",
    "en": "Information Theory",
    "category": "basic",
    "era": "electrical",
    "date": "1948 年",
    "year": 1948,
    "people": "",
    "place": "",
    "summary": "信息论约 1948 年 成熟，建立在 文字、数学 之上完成关键突破；其能力延伸到 理论建模、实验测量，并为 控制论 的发展铺平了道路。",
    "dependsOn": ["writing","mathematics"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "信息论在 1948 年 前后出现，依托 文字 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，信息论仍是 理论建模 的底层支撑，并持续影响 控制论。"
      }
    ],
    "significance": "信息论把 文字 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 控制论。"
  },
{
    "id": "category_theory",
    "name": "范畴论",
    "en": "Category Theory",
    "category": "basic",
    "era": "electrical",
    "date": "1945 年",
    "year": 1945,
    "people": "",
    "place": "",
    "summary": "范畴论约 1945 年 出现，建立在 文字、数学 之上；它把 理论建模、实验测量 变成可稳定复现的能力，是 科学基础与方法 中从经验走向方法的关键一步。",
    "dependsOn": ["writing","mathematics"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "范畴论在 1945 年 前后出现，依托 文字 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，范畴论仍是 理论建模 的底层支撑，并作为 科学基础与方法 的基础能力持续发挥作用。"
      }
    ],
    "significance": "范畴论把 文字 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "numerical",
    "name": "数值分析",
    "en": "Numerical Analysis",
    "category": "basic",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "people": "",
    "place": "",
    "summary": "数值分析约 1950 年 成熟，建立在 文字、数学、统计学 之上完成关键突破；其能力延伸到 理论建模、实验测量，并为 分形几何、分子生物学、计算复杂性 的发展铺平了道路。",
    "dependsOn": ["writing","mathematics","statistics","optimization"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "数值分析在 1950 年 前后出现，依托 文字 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，数值分析仍是 理论建模 的底层支撑，并持续影响 分形几何、分子生物学、计算复杂性。"
      }
    ],
    "significance": "数值分析把 文字 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 分形几何、分子生物学、计算复杂性。"
  },
{
    "id": "optimization",
    "name": "最优化/线性规划",
    "en": "Optimization",
    "category": "basic",
    "era": "electrical",
    "date": "1947 年",
    "year": 1947,
    "people": "",
    "place": "",
    "summary": "最优化/线性规划在 1947 年 前后成形，依托 文字、数学 把 理论建模、实验测量 落到实处，并成为 科学基础与方法 中承上启下的一环，直接支撑了 分形几何、数值分析、计算复杂性 等后续技术。",
    "dependsOn": ["writing","mathematics"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "最优化/线性规划在 1947 年 前后出现，依托 文字 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，最优化/线性规划仍是 理论建模 的底层支撑，并持续影响 分形几何、数值分析、计算复杂性。"
      }
    ],
    "significance": "最优化/线性规划把 文字 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 分形几何、数值分析、计算复杂性。"
  },
{
    "id": "knot_theory",
    "name": "纽结理论",
    "en": "Knot Theory",
    "category": "basic",
    "era": "industrial",
    "date": "1860 年",
    "year": 1860,
    "people": "",
    "place": "",
    "summary": "纽结理论约 1860 年 出现，建立在 文字、数学、拓扑学 之上；它把 理论建模、实验测量 变成可稳定复现的能力，是 科学基础与方法 中从经验走向方法的关键一步。",
    "dependsOn": ["writing","mathematics","topology"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "纽结理论在 1860 年 前后出现，依托 文字 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，纽结理论仍是 理论建模 的底层支撑，并作为 科学基础与方法 的基础能力持续发挥作用。"
      }
    ],
    "significance": "纽结理论把 文字 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "proof_theory",
    "name": "证明论",
    "en": "Proof Theory",
    "category": "basic",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "证明论约 1900 年 出现，建立在 生物化学、文字、数学 之上；它把 理论建模、实验测量 变成可稳定复现的能力，是 科学基础与方法 中从经验走向方法的关键一步。",
    "dependsOn": ["biochem","writing","mathematics"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "证明论在 1900 年 前后出现，依托 生物化学 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，证明论仍是 理论建模 的底层支撑，并作为 科学基础与方法 的基础能力持续发挥作用。"
      }
    ],
    "significance": "证明论把 生物化学 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "lambda_calc",
    "name": "λ演算",
    "en": "Lambda Calculus",
    "category": "basic",
    "era": "electrical",
    "date": "1936 年",
    "year": 1936,
    "people": "",
    "place": "",
    "summary": "λ演算在 1936 年 前后成形，依托 文字、数学 把 理论建模、实验测量 落到实处，并成为 科学基础与方法 中承上启下的一环，直接支撑了 计算机科学 等后续技术。",
    "dependsOn": ["writing","mathematics"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "λ演算在 1936 年 前后出现，依托 文字 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，λ演算仍是 理论建模 的底层支撑，并持续影响 计算机科学。"
      }
    ],
    "significance": "λ演算把 文字 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 计算机科学。"
  },
{
    "id": "catastrophe",
    "name": "突变理论",
    "en": "Catastrophe Theory",
    "category": "basic",
    "era": "info",
    "date": "1960 年",
    "year": 1960,
    "people": "",
    "place": "",
    "summary": "突变理论约 1960 年 成熟，建立在 文字、数学 之上完成关键突破；其能力延伸到 理论建模、实验测量，并为 混沌理论 的发展铺平了道路。",
    "dependsOn": ["writing","mathematics"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "突变理论在 1960 年 前后出现，依托 文字 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，突变理论仍是 理论建模 的底层支撑，并持续影响 混沌理论。"
      }
    ],
    "significance": "突变理论把 文字 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 混沌理论。"
  },
{
    "id": "celestial_mech",
    "name": "天体力学",
    "en": "Celestial Mechanics",
    "category": "basic",
    "era": "earlymodern",
    "date": "1687 年",
    "year": 1687,
    "people": "",
    "place": "",
    "summary": "天体力学约 1687 年 出现，建立在 文字、数学、微积分 之上；它把 理论建模、实验测量 变成可稳定复现的能力，是 科学基础与方法 中从经验走向方法的关键一步。",
    "dependsOn": ["writing","mathematics","calculus"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "近代早期",
        "text": "天体力学在 1687 年 前后出现，依托 文字 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，天体力学仍是 理论建模 的底层支撑，并作为 科学基础与方法 的基础能力持续发挥作用。"
      }
    ],
    "significance": "天体力学把 文字 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点。"
  },

{
    "id": "lagrangian",
    "name": "分析力学",
    "en": "Analytical Mechanics",
    "category": "basic",
    "era": "industrial",
    "date": "1788 年",
    "year": 1788,
    "people": "",
    "place": "",
    "summary": "分析力学约 1788 年 出现，建立在 文字、数学 之上；它把 理论建模、实验测量 变成可稳定复现的能力，是 科学基础与方法 中从经验走向方法的关键一步。",
    "dependsOn": ["writing","mathematics"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "分析力学在 1788 年 前后出现，依托 文字 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，分析力学仍是 理论建模 的底层支撑，并作为 科学基础与方法 的基础能力持续发挥作用。"
      }
    ],
    "significance": "分析力学把 文字 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点。"
  },

{
    "id": "stat_mech",
    "name": "统计力学",
    "en": "Statistical Mechanics",
    "category": "basic",
    "era": "industrial",
    "date": "1872 年",
    "year": 1872,
    "people": "",
    "place": "",
    "summary": "统计力学约 1872 年 成熟，建立在 文字、数学 之上完成关键突破；其能力延伸到 理论建模、实验测量，并为 超流性、超固态、自旋电子学 的发展铺平了道路。",
    "dependsOn": ["writing","mathematics"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "统计力学在 1872 年 前后出现，依托 文字 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，统计力学仍是 理论建模 的底层支撑，并持续影响 超流性、超固态、自旋电子学。"
      }
    ],
    "significance": "统计力学把 文字 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 超流性、超固态、自旋电子学。"
  },
{
    "id": "em_theory",
    "name": "电磁理论",
    "en": "Electromagnetism",
    "category": "basic",
    "era": "industrial",
    "date": "1865 年",
    "year": 1865,
    "people": "",
    "place": "",
    "summary": "电磁理论约 1865 年 出现，建立在 文字、数学、电磁学 之上；它把 理论建模、实验测量 变成可稳定复现的能力，是 科学基础与方法 中从经验走向方法的关键一步。",
    "dependsOn": ["writing","mathematics","electromagnetism"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "电磁理论在 1865 年 前后出现，依托 文字 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，电磁理论仍是 理论建模 的底层支撑，并作为 科学基础与方法 的基础能力持续发挥作用。"
      }
    ],
    "significance": "电磁理论把 文字 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "wave_optics",
    "name": "波动光学",
    "en": "Wave Optics",
    "category": "basic",
    "era": "earlymodern",
    "date": "1678 年",
    "year": 1678,
    "people": "",
    "place": "",
    "summary": "波动光学约 1678 年 成熟，建立在 文字、数学 之上完成关键突破；其能力延伸到 理论建模、实验测量，并为 全息显示 的发展铺平了道路。",
    "dependsOn": ["writing","mathematics"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "近代早期",
        "text": "波动光学在 1678 年 前后出现，依托 文字 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，波动光学仍是 理论建模 的底层支撑，并持续影响 全息显示。"
      }
    ],
    "significance": "波动光学把 文字 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 全息显示。"
  },
{
    "id": "special_rel",
    "name": "狭义相对论",
    "en": "Special Relativity",
    "category": "basic",
    "era": "electrical",
    "date": "1905 年",
    "year": 1905,
    "people": "",
    "place": "",
    "summary": "狭义相对论在 1905 年 前后成形，依托 文字、数学 把 理论建模、实验测量 落到实处，并成为 科学基础与方法 中承上启下的一环，直接支撑了 核物理 等后续技术。",
    "dependsOn": ["writing","mathematics"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "狭义相对论在 1905 年 前后出现，依托 文字 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，狭义相对论仍是 理论建模 的底层支撑，并持续影响 核物理。"
      }
    ],
    "significance": "狭义相对论把 文字 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 核物理。"
  },

{
    "id": "quantum_mech",
    "name": "量子力学",
    "en": "Quantum Mechanics",
    "category": "basic",
    "era": "electrical",
    "date": "1925 年",
    "year": 1925,
    "people": "",
    "place": "",
    "summary": "量子力学在 1925 年 前后成形，依托 文字、数学 把 理论建模、实验测量 落到实处，并成为 科学基础与方法 中承上启下的一环，直接支撑了 激光器、粒子物理学、激光 等后续技术。",
    "dependsOn": ["writing","mathematics"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "量子力学在 1925 年 前后出现，依托 文字 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，量子力学仍是 理论建模 的底层支撑，并持续影响 激光器、粒子物理学、激光。"
      }
    ],
    "significance": "量子力学把 文字 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 激光器、粒子物理学、激光。"
  },
{
    "id": "standard_model",
    "name": "标准模型",
    "en": "Standard Model",
    "category": "basic",
    "era": "info",
    "date": "1970 年",
    "year": 1970,
    "people": "",
    "place": "",
    "summary": "标准模型约 1970 年 出现，建立在 文字、数学 之上；它把 理论建模、实验测量 变成可稳定复现的能力，是 科学基础与方法 中从经验走向方法的关键一步。",
    "dependsOn": ["writing","mathematics"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "标准模型在 1970 年 前后出现，依托 文字 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，标准模型仍是 理论建模 的底层支撑，并作为 科学基础与方法 的基础能力持续发挥作用。"
      }
    ],
    "significance": "标准模型把 文字 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "particle_phys",
    "name": "粒子物理学",
    "en": "Particle Physics",
    "category": "basic",
    "era": "electrical",
    "date": "1932 年",
    "year": 1932,
    "people": "",
    "place": "",
    "summary": "粒子物理学约 1932 年 出现，建立在 文字、数学、量子力学 之上；它把 理论建模、实验测量 变成可稳定复现的能力，是 科学基础与方法 中从经验走向方法的关键一步。",
    "dependsOn": ["writing","mathematics","quantum_mech"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "粒子物理学在 1932 年 前后出现，依托 文字 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，粒子物理学仍是 理论建模 的底层支撑，并作为 科学基础与方法 的基础能力持续发挥作用。"
      }
    ],
    "significance": "粒子物理学把 文字 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "nuclear_phys",
    "name": "核物理",
    "en": "Nuclear Physics",
    "category": "basic",
    "era": "electrical",
    "date": "1911 年",
    "year": 1911,
    "people": "",
    "place": "",
    "summary": "核物理约 1911 年 出现，建立在 文字、数学、狭义相对论 之上；它把 理论建模、实验测量 变成可稳定复现的能力，是 科学基础与方法 中从经验走向方法的关键一步。",
    "dependsOn": ["writing","mathematics","special_rel"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "核物理在 1911 年 前后出现，依托 文字 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，核物理仍是 理论建模 的底层支撑，并作为 科学基础与方法 的基础能力持续发挥作用。"
      }
    ],
    "significance": "核物理把 文字 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "atomic_theory",
    "name": "原子论",
    "en": "Atomic Theory",
    "category": "basic",
    "era": "industrial",
    "date": "1803 年",
    "year": 1803,
    "people": "",
    "place": "",
    "summary": "原子论约 1803 年 出现，建立在 文字、数学、光谱学 之上；它把 理论建模、实验测量 变成可稳定复现的能力，是 科学基础与方法 中从经验走向方法的关键一步。",
    "dependsOn": ["writing","mathematics","spectroscopy"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "原子论在 1803 年 前后出现，依托 文字 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，原子论仍是 理论建模 的底层支撑，并作为 科学基础与方法 的基础能力持续发挥作用。"
      }
    ],
    "significance": "原子论把 文字 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "molecular_theory",
    "name": "分子学说",
    "en": "Molecular Theory",
    "category": "basic",
    "era": "industrial",
    "date": "1811 年",
    "year": 1811,
    "people": "",
    "place": "",
    "summary": "分子学说约 1811 年 成熟，建立在 文字、数学 之上完成关键突破；其能力延伸到 理论建模、实验测量，并为 热力学 的发展铺平了道路。",
    "dependsOn": ["writing","mathematics"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "分子学说在 1811 年 前后出现，依托 文字 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，分子学说仍是 理论建模 的底层支撑，并持续影响 热力学。"
      }
    ],
    "significance": "分子学说把 文字 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 热力学。"
  },
{
    "id": "crystallography",
    "name": "晶体学",
    "en": "Crystallography",
    "category": "basic",
    "era": "industrial",
    "date": "1780 年",
    "year": 1780,
    "people": "",
    "place": "",
    "summary": "晶体学约 1780 年 出现，建立在 文字、数学 之上；它把 理论建模、实验测量 变成可稳定复现的能力，是 科学基础与方法 中从经验走向方法的关键一步。",
    "dependsOn": ["writing","mathematics"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "晶体学在 1780 年 前后出现，依托 文字 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，晶体学仍是 理论建模 的底层支撑，并作为 科学基础与方法 的基础能力持续发挥作用。"
      }
    ],
    "significance": "晶体学把 文字 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "spectroscopy",
    "name": "光谱学",
    "en": "Spectroscopy",
    "category": "basic",
    "era": "industrial",
    "date": "1802 年",
    "year": 1802,
    "people": "",
    "place": "",
    "summary": "光谱学约 1802 年 成熟，建立在 文字、数学 之上完成关键突破；其能力延伸到 理论建模、实验测量，并为 原子论 的发展铺平了道路。",
    "dependsOn": ["writing","mathematics"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "光谱学在 1802 年 前后出现，依托 文字 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，光谱学仍是 理论建模 的底层支撑，并持续影响 原子论。"
      }
    ],
    "significance": "光谱学把 文字 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 原子论。"
  },
{
    "id": "periodic_table",
    "name": "元素周期律",
    "en": "Periodic Table",
    "category": "basic",
    "era": "industrial",
    "date": "1869 年",
    "year": 1869,
    "people": "",
    "place": "",
    "summary": "元素周期律约 1869 年 出现，建立在 文字、数学 之上；它把 理论建模、实验测量 变成可稳定复现的能力，是 科学基础与方法 中从经验走向方法的关键一步。",
    "dependsOn": ["writing","mathematics"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "元素周期律在 1869 年 前后出现，依托 文字 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，元素周期律仍是 理论建模 的底层支撑，并作为 科学基础与方法 的基础能力持续发挥作用。"
      }
    ],
    "significance": "元素周期律把 文字 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "valence",
    "name": "化学键/价键",
    "en": "Chemical Bonding",
    "category": "basic",
    "era": "industrial",
    "date": "1852 年",
    "year": 1852,
    "people": "",
    "place": "",
    "summary": "化学键/价键约 1852 年 出现，建立在 文字、数学 之上；它把 理论建模、实验测量 变成可稳定复现的能力，是 科学基础与方法 中从经验走向方法的关键一步。",
    "dependsOn": ["writing","mathematics"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "化学键/价键在 1852 年 前后出现，依托 文字 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，化学键/价键仍是 理论建模 的底层支撑，并作为 科学基础与方法 的基础能力持续发挥作用。"
      }
    ],
    "significance": "化学键/价键把 文字 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "organic_chem",
    "name": "有机化学",
    "en": "Organic Chemistry",
    "category": "basic",
    "era": "industrial",
    "date": "1828 年",
    "year": 1828,
    "people": "",
    "place": "",
    "summary": "有机化学在 1828 年 前后成形，依托 文字、数学 把 理论建模、实验测量 落到实处，并成为 科学基础与方法 中承上启下的一环，直接支撑了 TNT、有机金属化学、有机催化 等后续技术。",
    "dependsOn": ["writing","mathematics"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "有机化学在 1828 年 前后出现，依托 文字 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，有机化学仍是 理论建模 的底层支撑，并持续影响 TNT、有机金属化学、有机催化。"
      }
    ],
    "significance": "有机化学把 文字 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 TNT、有机金属化学、有机催化。"
  },
{
    "id": "inorganic_chem",
    "name": "无机化学",
    "en": "Inorganic Chemistry",
    "category": "basic",
    "era": "earlymodern",
    "date": "1700 年",
    "year": 1700,
    "people": "",
    "place": "",
    "summary": "无机化学约 1700 年 成熟，建立在 文字、数学 之上完成关键突破；其能力延伸到 理论建模、实验测量，并为 生物分类学、有机金属化学、有机催化 的发展铺平了道路。",
    "dependsOn": ["writing","mathematics"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "近代早期",
        "text": "无机化学在 1700 年 前后出现，依托 文字 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，无机化学仍是 理论建模 的底层支撑，并持续影响 生物分类学、有机金属化学、有机催化。"
      }
    ],
    "significance": "无机化学把 文字 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 生物分类学、有机金属化学、有机催化。"
  },
{
    "id": "physical_chem",
    "name": "物理化学",
    "en": "Physical Chemistry",
    "category": "basic",
    "era": "industrial",
    "date": "1887 年",
    "year": 1887,
    "people": "",
    "place": "",
    "summary": "物理化学在 1887 年 前后成形，依托 文字、数学 把 理论建模、实验测量 落到实处，并成为 科学基础与方法 中承上启下的一环，直接支撑了 生物化学、有机金属化学、有机催化 等后续技术。",
    "dependsOn": ["writing","mathematics"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "物理化学在 1887 年 前后出现，依托 文字 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，物理化学仍是 理论建模 的底层支撑，并持续影响 生物化学、有机金属化学、有机催化。"
      }
    ],
    "significance": "物理化学把 文字 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 生物化学、有机金属化学、有机催化。"
  },
{
    "id": "analytical_chem",
    "name": "分析化学",
    "en": "Analytical Chemistry",
    "category": "basic",
    "era": "industrial",
    "date": "1750 年",
    "year": 1750,
    "people": "",
    "place": "",
    "summary": "分析化学约 1750 年 出现，建立在 文字、数学 之上；它把 理论建模、实验测量 变成可稳定复现的能力，是 科学基础与方法 中从经验走向方法的关键一步。",
    "dependsOn": ["writing","mathematics"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "分析化学在 1750 年 前后出现，依托 文字 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，分析化学仍是 理论建模 的底层支撑，并作为 科学基础与方法 的基础能力持续发挥作用。"
      }
    ],
    "significance": "分析化学把 文字 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "biochem",
    "name": "生物化学",
    "en": "Biochemistry",
    "category": "basic",
    "era": "industrial",
    "date": "1890 年",
    "year": 1890,
    "people": "",
    "place": "",
    "summary": "生物化学在 1890 年 前后成形，依托 文字、数学、物理化学 把 理论建模、实验测量 落到实处，并成为 科学基础与方法 中承上启下的一环，直接支撑了 证明论、高分子化学、可重复实验 等后续技术。",
    "dependsOn": ["writing","mathematics","physical_chem"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "生物化学在 1890 年 前后出现，依托 文字 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，生物化学仍是 理论建模 的底层支撑，并持续影响 证明论、高分子化学、可重复实验。"
      }
    ],
    "significance": "生物化学把 文字 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 证明论、高分子化学、可重复实验。"
  },
{
    "id": "polymer_chem",
    "name": "高分子化学",
    "en": "Polymer Chemistry",
    "category": "basic",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "高分子化学约 1900 年 出现，建立在 生物化学、文字、数学 之上；它把 理论建模、实验测量 变成可稳定复现的能力，是 科学基础与方法 中从经验走向方法的关键一步。",
    "dependsOn": ["biochem", "writing", "mathematics"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "高分子化学在 1900 年 前后出现，依托 生物化学 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，高分子化学仍是 理论建模 的底层支撑，并作为 科学基础与方法 的基础能力持续发挥作用。"
      }
    ],
    "significance": "高分子化学把 生物化学 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "electrochem",
    "name": "电化学",
    "en": "Electrochemistry",
    "category": "basic",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "电化学在 1800 年 前后成形，依托 文字、数学 把 理论建模、实验测量 落到实处，并成为 科学基础与方法 中承上启下的一环，直接支撑了 传真机 等后续技术。",
    "dependsOn": ["writing","mathematics"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "电化学在 1800 年 前后出现，依托 文字 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，电化学仍是 理论建模 的底层支撑，并持续影响 传真机。"
      }
    ],
    "significance": "电化学把 文字 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 传真机。"
  },
{
    "id": "cell_theory",
    "name": "细胞学说",
    "en": "Cell Theory",
    "category": "basic",
    "era": "industrial",
    "date": "1838 年",
    "year": 1838,
    "people": "",
    "place": "",
    "summary": "细胞学说约 1838 年 出现，建立在 文字、数学 之上；它把 理论建模、实验测量 变成可稳定复现的能力，是 科学基础与方法 中从经验走向方法的关键一步。",
    "dependsOn": ["writing","mathematics"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "细胞学说在 1838 年 前后出现，依托 文字 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，细胞学说仍是 理论建模 的底层支撑，并作为 科学基础与方法 的基础能力持续发挥作用。"
      }
    ],
    "significance": "细胞学说把 文字 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "germ_theory",
    "name": "微生物致病说",
    "en": "Germ Theory",
    "category": "basic",
    "era": "industrial",
    "date": "1861 年",
    "year": 1861,
    "people": "",
    "place": "",
    "summary": "微生物致病说约 1861 年 出现，建立在 文字、数学 之上；它把 理论建模、实验测量 变成可稳定复现的能力，是 科学基础与方法 中从经验走向方法的关键一步。",
    "dependsOn": ["writing","mathematics"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "微生物致病说在 1861 年 前后出现，依托 文字 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，微生物致病说仍是 理论建模 的底层支撑，并作为 科学基础与方法 的基础能力持续发挥作用。"
      }
    ],
    "significance": "微生物致病说把 文字 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点。"
  },

{
    "id": "genetics",
    "name": "遗传学",
    "en": "Genetics",
    "category": "basic",
    "era": "industrial",
    "date": "1865 年",
    "year": 1865,
    "people": "",
    "place": "",
    "summary": "遗传学约 1865 年 成熟，建立在 文字、数学 之上完成关键突破；其能力延伸到 理论建模、实验测量，并为 基因治疗、合成生物学、代谢工程 的发展铺平了道路。",
    "dependsOn": ["writing","mathematics"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "遗传学在 1865 年 前后出现，依托 文字 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，遗传学仍是 理论建模 的底层支撑，并持续影响 基因治疗、合成生物学、代谢工程。"
      }
    ],
    "significance": "遗传学把 文字 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 基因治疗、合成生物学、代谢工程。"
  },
{
    "id": "dna_struct",
    "name": "DNA 双螺旋",
    "en": "DNA Structure",
    "category": "basic",
    "era": "info",
    "date": "1953 年",
    "year": 1953,
    "people": "",
    "place": "",
    "summary": "DNA 双螺旋在 1953 年 前后成形，依托 文字、数学、材料科学 把 理论建模、实验测量 落到实处，并成为 科学基础与方法 中承上启下的一环，直接支撑了 分子生物学 等后续技术。",
    "dependsOn": ["writing","mathematics","materials"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "DNA 双螺旋在 1953 年 前后出现，依托 文字 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，DNA 双螺旋仍是 理论建模 的底层支撑，并持续影响 分子生物学。"
      }
    ],
    "significance": "DNA 双螺旋把 文字 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 分子生物学。"
  },
{
    "id": "molecular_bio",
    "name": "分子生物学",
    "en": "Molecular Biology",
    "category": "basic",
    "era": "info",
    "date": "1953 年",
    "year": 1953,
    "people": "",
    "place": "",
    "summary": "分子生物学在 1953 年 前后成形，依托 数值分析、文字、数学 把 理论建模、实验测量 落到实处，并成为 科学基础与方法 中承上启下的一环，直接支撑了 液体活检、循环肿瘤 DNA、循环肿瘤细胞 等后续技术。",
    "dependsOn": ["numerical","writing","mathematics","dna_struct"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "分子生物学在 1953 年 前后出现，依托 数值分析 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，分子生物学仍是 理论建模 的底层支撑，并持续影响 液体活检、循环肿瘤 DNA、循环肿瘤细胞。"
      }
    ],
    "significance": "分子生物学把 数值分析 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 液体活检、循环肿瘤 DNA、循环肿瘤细胞。"
  },
{
    "id": "microbiology",
    "name": "微生物学",
    "en": "Microbiology",
    "category": "basic",
    "era": "earlymodern",
    "date": "1670 年",
    "year": 1670,
    "people": "",
    "place": "",
    "summary": "微生物学在 1670 年 前后成形，依托 文字、数学 把 理论建模、实验测量 落到实处，并成为 科学基础与方法 中承上启下的一环，直接支撑了 疫苗、无菌外科、药理学 等后续技术。",
    "dependsOn": ["writing","mathematics"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "近代早期",
        "text": "微生物学在 1670 年 前后出现，依托 文字 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，微生物学仍是 理论建模 的底层支撑，并持续影响 疫苗、无菌外科、药理学。"
      }
    ],
    "significance": "微生物学把 文字 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 疫苗、无菌外科、药理学。"
  },
{
    "id": "immunology",
    "name": "免疫学",
    "en": "Immunology",
    "category": "basic",
    "era": "industrial",
    "date": "1798 年",
    "year": 1798,
    "people": "",
    "place": "",
    "summary": "免疫学约 1798 年 成熟，建立在 文字、数学 之上完成关键突破；其能力延伸到 理论建模、实验测量，并为 mRNA 疫苗、基因治疗、代谢工程 的发展铺平了道路。",
    "dependsOn": ["writing","mathematics"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "免疫学在 1798 年 前后出现，依托 文字 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，免疫学仍是 理论建模 的底层支撑，并持续影响 mRNA 疫苗、基因治疗、代谢工程。"
      }
    ],
    "significance": "免疫学把 文字 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 mRNA 疫苗、基因治疗、代谢工程。"
  },
{
    "id": "neuroscience",
    "name": "神经科学",
    "en": "Neuroscience",
    "category": "basic",
    "era": "industrial",
    "date": "1890 年",
    "year": 1890,
    "people": "",
    "place": "",
    "summary": "神经科学在 1890 年 前后成形，依托 文字、数学 把 理论建模、实验测量 落到实处，并成为 科学基础与方法 中承上启下的一环，直接支撑了 控制论、脑机接口、神经形态计算 等后续技术。",
    "dependsOn": ["writing","mathematics"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "神经科学在 1890 年 前后出现，依托 文字 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，神经科学仍是 理论建模 的底层支撑，并持续影响 控制论、脑机接口、神经形态计算。"
      }
    ],
    "significance": "神经科学把 文字 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 控制论、脑机接口、神经形态计算。"
  },
{
    "id": "ecology",
    "name": "生态学",
    "en": "Ecology",
    "category": "basic",
    "era": "industrial",
    "date": "1866 年",
    "year": 1866,
    "people": "",
    "place": "",
    "summary": "生态学约 1866 年 出现，建立在 文字、数学 之上；它把 理论建模、实验测量 变成可稳定复现的能力，是 科学基础与方法 中从经验走向方法的关键一步。",
    "dependsOn": ["writing","mathematics"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "生态学在 1866 年 前后出现，依托 文字 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，生态学仍是 理论建模 的底层支撑，并作为 科学基础与方法 的基础能力持续发挥作用。"
      }
    ],
    "significance": "生态学把 文字 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "taxonomy",
    "name": "生物分类学",
    "en": "Taxonomy",
    "category": "basic",
    "era": "earlymodern",
    "date": "1735 年",
    "year": 1735,
    "people": "",
    "place": "",
    "summary": "生物分类学约 1735 年 出现，建立在 无机化学、文字、数学 之上；它把 理论建模、实验测量 变成可稳定复现的能力，是 科学基础与方法 中从经验走向方法的关键一步。",
    "dependsOn": ["inorganic_chem","writing","mathematics"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "近代早期",
        "text": "生物分类学在 1735 年 前后出现，依托 无机化学 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，生物分类学仍是 理论建模 的底层支撑，并作为 科学基础与方法 的基础能力持续发挥作用。"
      }
    ],
    "significance": "生物分类学把 无机化学 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "heliocentrism",
    "name": "日心说",
    "en": "Heliocentrism",
    "category": "basic",
    "era": "earlymodern",
    "date": "1543 年",
    "year": 1543,
    "people": "",
    "place": "",
    "summary": "日心说约 1543 年 出现，建立在 工程学、文字、数学 之上；它把 理论建模、实验测量 变成可稳定复现的能力，是 科学基础与方法 中从经验走向方法的关键一步。",
    "dependsOn": ["engineering","writing","mathematics"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "近代早期",
        "text": "日心说在 1543 年 前后出现，依托 工程学 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，日心说仍是 理论建模 的底层支撑，并作为 科学基础与方法 的基础能力持续发挥作用。"
      }
    ],
    "significance": "日心说把 工程学 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "kepler_laws",
    "name": "开普勒定律",
    "en": "Kepler's Laws",
    "category": "basic",
    "era": "earlymodern",
    "date": "1609 年",
    "year": 1609,
    "people": "",
    "place": "",
    "summary": "开普勒定律约 1609 年 出现，建立在 文字、数学、望远镜 之上；它把 理论建模、实验测量 变成可稳定复现的能力，是 科学基础与方法 中从经验走向方法的关键一步。",
    "dependsOn": ["writing","mathematics","telescope"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "近代早期",
        "text": "开普勒定律在 1609 年 前后出现，依托 文字 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，开普勒定律仍是 理论建模 的底层支撑，并作为 科学基础与方法 的基础能力持续发挥作用。"
      }
    ],
    "significance": "开普勒定律把 文字 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "radio_astron",
    "name": "射电天文学",
    "en": "Radio Astronomy",
    "category": "basic",
    "era": "electrical",
    "date": "1932 年",
    "year": 1932,
    "people": "",
    "place": "",
    "summary": "射电天文学约 1932 年 出现，建立在 文字、数学 之上；它把 理论建模、实验测量 变成可稳定复现的能力，是 科学基础与方法 中从经验走向方法的关键一步。",
    "dependsOn": ["writing","mathematics"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "射电天文学在 1932 年 前后出现，依托 文字 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，射电天文学仍是 理论建模 的底层支撑，并作为 科学基础与方法 的基础能力持续发挥作用。"
      }
    ],
    "significance": "射电天文学把 文字 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "cosmology",
    "name": "宇宙学",
    "en": "Cosmology",
    "category": "basic",
    "era": "electrical",
    "date": "1920 年",
    "year": 1920,
    "people": "",
    "place": "",
    "summary": "宇宙学约 1920 年 出现，建立在 文字、数学、广义相对论 之上；它把 理论建模、实验测量 变成可稳定复现的能力，是 科学基础与方法 中从经验走向方法的关键一步。",
    "dependsOn": ["writing","mathematics","general_relativity"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "宇宙学在 1920 年 前后出现，依托 文字 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，宇宙学仍是 理论建模 的底层支撑，并作为 科学基础与方法 的基础能力持续发挥作用。"
      }
    ],
    "significance": "宇宙学把 文字 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bigbang",
    "name": "大爆炸宇宙论",
    "en": "Big Bang Theory",
    "category": "basic",
    "era": "electrical",
    "date": "1949 年",
    "year": 1949,
    "people": "",
    "place": "",
    "summary": "大爆炸宇宙论约 1949 年 出现，建立在 文字、数学 之上；它把 理论建模、实验测量 变成可稳定复现的能力，是 科学基础与方法 中从经验走向方法的关键一步。",
    "dependsOn": ["writing","mathematics"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "大爆炸宇宙论在 1949 年 前后出现，依托 文字 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，大爆炸宇宙论仍是 理论建模 的底层支撑，并作为 科学基础与方法 的基础能力持续发挥作用。"
      }
    ],
    "significance": "大爆炸宇宙论把 文字 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "observ_astron",
    "name": "实测天文学",
    "en": "Observational Astronomy",
    "category": "basic",
    "era": "earlymodern",
    "date": "1600 年",
    "year": 1600,
    "people": "",
    "place": "",
    "summary": "实测天文学在 1600 年 前后成形，依托 文字、数学、科学方法 把 理论建模、实验测量 落到实处，并成为 科学基础与方法 中承上启下的一环，直接支撑了 望远镜 等后续技术。",
    "dependsOn": ["writing","mathematics","scientific_method"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "近代早期",
        "text": "实测天文学在 1600 年 前后出现，依托 文字 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，实测天文学仍是 理论建模 的底层支撑，并持续影响 望远镜。"
      }
    ],
    "significance": "实测天文学把 文字 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 望远镜。"
  },
{
    "id": "telescope",
    "name": "望远镜",
    "en": "Telescope",
    "category": "basic",
    "era": "earlymodern",
    "date": "1608 年",
    "year": 1608,
    "people": "",
    "place": "",
    "summary": "望远镜约 1608 年 成熟，建立在 文字、数学、实测天文学 之上完成关键突破；其能力延伸到 理论建模、实验测量，并为 开普勒定律 的发展铺平了道路。",
    "dependsOn": ["writing","mathematics","observ_astron"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "近代早期",
        "text": "望远镜在 1608 年 前后出现，依托 文字 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，望远镜仍是 理论建模 的底层支撑，并持续影响 开普勒定律。"
      }
    ],
    "significance": "望远镜把 文字 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 开普勒定律。"
  },
{
    "id": "microscope",
    "name": "显微镜",
    "en": "Microscope",
    "category": "basic",
    "era": "earlymodern",
    "date": "1590 年",
    "year": 1590,
    "people": "",
    "place": "",
    "summary": "显微镜约 1590 年 出现，建立在 文字、数学 之上；它把 理论建模、实验测量 变成可稳定复现的能力，是 科学基础与方法 中从经验走向方法的关键一步。",
    "dependsOn": ["writing","mathematics"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "近代早期",
        "text": "显微镜在 1590 年 前后出现，依托 文字 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，显微镜仍是 理论建模 的底层支撑，并作为 科学基础与方法 的基础能力持续发挥作用。"
      }
    ],
    "significance": "显微镜把 文字 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "peer_review",
    "name": "同行评审制度",
    "en": "Peer Review",
    "category": "basic",
    "era": "earlymodern",
    "date": "1665 年",
    "year": 1665,
    "people": "",
    "place": "",
    "summary": "同行评审制度约 1665 年 出现，建立在 文字、数学 之上；它把 理论建模、实验测量 变成可稳定复现的能力，是 科学基础与方法 中从经验走向方法的关键一步。",
    "dependsOn": ["writing","mathematics"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "近代早期",
        "text": "同行评审制度在 1665 年 前后出现，依托 文字 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，同行评审制度仍是 理论建模 的底层支撑，并作为 科学基础与方法 的基础能力持续发挥作用。"
      }
    ],
    "significance": "同行评审制度把 文字 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "replication",
    "name": "可重复实验",
    "en": "Replication",
    "category": "basic",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "可重复实验约 1900 年 出现，建立在 生物化学、文字、数学 之上；它把 理论建模、实验测量 变成可稳定复现的能力，是 科学基础与方法 中从经验走向方法的关键一步。",
    "dependsOn": ["biochem","writing","mathematics"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "可重复实验在 1900 年 前后出现，依托 生物化学 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，可重复实验仍是 理论建模 的底层支撑，并作为 科学基础与方法 的基础能力持续发挥作用。"
      }
    ],
    "significance": "可重复实验把 生物化学 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "metrology",
    "name": "计量学",
    "en": "Metrology",
    "category": "basic",
    "era": "industrial",
    "date": "1790 年",
    "year": 1790,
    "people": "",
    "place": "",
    "summary": "计量学约 1790 年 出现，建立在 文字、数学 之上；它把 理论建模、实验测量 变成可稳定复现的能力，是 科学基础与方法 中从经验走向方法的关键一步。",
    "dependsOn": ["writing","mathematics"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "计量学在 1790 年 前后出现，依托 文字 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，计量学仍是 理论建模 的底层支撑，并作为 科学基础与方法 的基础能力持续发挥作用。"
      }
    ],
    "significance": "计量学把 文字 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "standards_units",
    "name": "标准单位制",
    "en": "Standard Units",
    "category": "basic",
    "era": "industrial",
    "date": "1799 年",
    "year": 1799,
    "people": "",
    "place": "",
    "summary": "标准单位制约 1799 年 出现，建立在 文字、数学 之上；它把 理论建模、实验测量 变成可稳定复现的能力，是 科学基础与方法 中从经验走向方法的关键一步。",
    "dependsOn": ["writing","mathematics"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "标准单位制在 1799 年 前后出现，依托 文字 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，标准单位制仍是 理论建模 的底层支撑，并作为 科学基础与方法 的基础能力持续发挥作用。"
      }
    ],
    "significance": "标准单位制把 文字 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "cartography",
    "name": "制图学",
    "en": "Cartography",
    "category": "basic",
    "era": "ancient",
    "date": "公元前 2500 年",
    "year": -2500,
    "people": "",
    "place": "",
    "summary": "制图学约 公元前 2500 年 成熟，建立在 语言、文字、数学 之上完成关键突破；其能力延伸到 理论建模、实验测量，并为 测量学、侦察技术 的发展铺平了道路。",
    "dependsOn": ["language","writing","mathematics","arithmetic"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "制图学在 公元前 2500 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，制图学仍是 理论建模 的底层支撑，并持续影响 测量学、侦察技术。"
      }
    ],
    "significance": "制图学把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 测量学、侦察技术。"
  },
{
    "id": "surveying",
    "name": "测量学",
    "en": "Surveying",
    "category": "basic",
    "era": "ancient",
    "date": "公元前 2000 年",
    "year": -2000,
    "people": "",
    "place": "",
    "summary": "测量学约 公元前 2000 年 成熟，建立在 语言、文字、数学 之上完成关键突破；其能力延伸到 理论建模、实验测量，并为 几何学、工程测量 的发展铺平了道路。",
    "dependsOn": ["language","writing","mathematics","cartography"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "测量学在 公元前 2000 年 前后出现，依托 语言 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，测量学仍是 理论建模 的底层支撑，并持续影响 几何学、工程测量。"
      }
    ],
    "significance": "测量学把 语言 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 几何学、工程测量。"
  },
{
    "id": "computer_sci",
    "name": "计算机科学",
    "en": "Computer Science",
    "category": "basic",
    "era": "electrical",
    "date": "1936 年",
    "year": 1936,
    "people": "",
    "place": "",
    "summary": "计算机科学约 1936 年 出现，建立在 文字、数学、λ演算 之上；它把 理论建模、实验测量 变成可稳定复现的能力，是 科学基础与方法 中从经验走向方法的关键一步。",
    "dependsOn": ["writing","mathematics","lambda_calc"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "计算机科学在 1936 年 前后出现，依托 文字 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，计算机科学仍是 理论建模 的底层支撑，并作为 科学基础与方法 的基础能力持续发挥作用。"
      }
    ],
    "significance": "计算机科学把 文字 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "algorithm",
    "name": "算法理论",
    "en": "Algorithms",
    "category": "basic",
    "era": "medieval",
    "date": "825 年",
    "year": 825,
    "people": "",
    "place": "",
    "summary": "算法理论在 825 年 前后成形，依托 文字、数学、代数 把 理论建模、实验测量 落到实处，并成为 科学基础与方法 中承上启下的一环，直接支撑了 协同过滤、深水炸弹、智能弹药 等后续技术。",
    "dependsOn": ["writing","mathematics","algebra"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "中世纪",
        "text": "算法理论在 825 年 前后出现，依托 文字 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，算法理论仍是 理论建模 的底层支撑，并持续影响 协同过滤、深水炸弹、智能弹药。"
      }
    ],
    "significance": "算法理论把 文字 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 协同过滤、深水炸弹、智能弹药。"
  },
{
    "id": "complexity",
    "name": "计算复杂性",
    "en": "Complexity Theory",
    "category": "basic",
    "era": "info",
    "date": "1971 年",
    "year": 1971,
    "people": "",
    "place": "",
    "summary": "计算复杂性约 1971 年 出现，建立在 文字、数学、数值分析 之上；它把 理论建模、实验测量 变成可稳定复现的能力，是 科学基础与方法 中从经验走向方法的关键一步。",
    "dependsOn": ["writing","mathematics","numerical","statistics","optimization"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "计算复杂性在 1971 年 前后出现，依托 文字 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，计算复杂性仍是 理论建模 的底层支撑，并作为 科学基础与方法 的基础能力持续发挥作用。"
      }
    ],
    "significance": "计算复杂性把 文字 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "math_crypto",
    "name": "数论密码",
    "en": "Mathematical Cryptography",
    "category": "basic",
    "era": "info",
    "date": "1976 年",
    "year": 1976,
    "people": "",
    "place": "",
    "summary": "数论密码约 1976 年 出现，建立在 文字、数学 之上；它把 理论建模、实验测量 变成可稳定复现的能力，是 科学基础与方法 中从经验走向方法的关键一步。",
    "dependsOn": ["writing","mathematics"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "数论密码在 1976 年 前后出现，依托 文字 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，数论密码仍是 理论建模 的底层支撑，并作为 科学基础与方法 的基础能力持续发挥作用。"
      }
    ],
    "significance": "数论密码把 文字 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "control_theory",
    "name": "控制论",
    "en": "Control Theory",
    "category": "basic",
    "era": "electrical",
    "date": "1948 年",
    "year": 1948,
    "people": "",
    "place": "",
    "summary": "控制论由维纳在 1948 年提出，把「反馈」从机械、生物与社会系统中抽象为同一条原理，让调节与目的性第一次可被统一描述；它奠基于数学、信息论、统计学与神经科学，是自动控制、人工智能与系统科学的共同源头。",
    "dependsOn": ["mathematics","info_theory","statistics","neuroscience"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "控制论在 1948 年 前后出现，把机械的伺服、生物的调节与社会的组织收进同一条反馈原理，使「目的性行为」第一次可被工程化地描述。"
      },
      {
        "period": "当代",
        "text": "今天，控制论的思想仍是自动化、机器人与人工智能的底层语法，并主要以「系统科学」的形态持续发挥作用。"
      }
    ],
    "significance": "控制论把「反馈」确立为独立概念，是自动化与系统科学从零散工程走向统一理论的转折点。"
  },
{
    "id": "systems_theory",
    "name": "系统论",
    "en": "Systems Theory",
    "category": "basic",
    "era": "electrical",
    "date": "1940 年",
    "year": 1940,
    "people": "",
    "place": "",
    "summary": "系统论约 1940 年 出现，建立在 文字、数学 之上；它把 理论建模、实验测量 变成可稳定复现的能力，是 科学基础与方法 中从经验走向方法的关键一步。",
    "dependsOn": ["writing","mathematics"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "系统论在 1940 年 前后出现，依托 文字 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，系统论仍是 理论建模 的底层支撑，并作为 科学基础与方法 的基础能力持续发挥作用。"
      }
    ],
    "significance": "系统论把 文字 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "fluid_mech",
    "name": "流体力学",
    "en": "Fluid Mechanics",
    "category": "basic",
    "era": "industrial",
    "date": "1752 年",
    "year": 1752,
    "people": "",
    "place": "",
    "summary": "流体力学约 1752 年 成熟，建立在 文字、数学 之上完成关键突破；其能力延伸到 理论建模、实验测量，并为 空气动力学 的发展铺平了道路。",
    "dependsOn": ["writing","mathematics"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "流体力学在 1752 年 前后出现，依托 文字 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，流体力学仍是 理论建模 的底层支撑，并持续影响 空气动力学。"
      }
    ],
    "significance": "流体力学把 文字 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 空气动力学。"
  },
{
    "id": "solid_mech",
    "name": "固体力学",
    "en": "Solid Mechanics",
    "category": "basic",
    "era": "earlymodern",
    "date": "1700 年",
    "year": 1700,
    "people": "",
    "place": "",
    "summary": "固体力学在 1700 年 前后成形，依托 微分方程、文字、数学 把 理论建模、实验测量 落到实处，并成为 科学基础与方法 中承上启下的一环，直接支撑了 声学、抗震设计、超流性 等后续技术。",
    "dependsOn": ["diff_eq","writing","mathematics"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "近代早期",
        "text": "固体力学在 1700 年 前后出现，依托 微分方程 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，固体力学仍是 理论建模 的底层支撑，并持续影响 声学、抗震设计、超流性。"
      }
    ],
    "significance": "固体力学把 微分方程 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 声学、抗震设计、超流性。"
  },
{
    "id": "acoustics",
    "name": "声学",
    "en": "Acoustics",
    "category": "basic",
    "era": "earlymodern",
    "date": "1700 年",
    "year": 1700,
    "people": "",
    "place": "",
    "summary": "声学约 1700 年 成熟，建立在 微分方程、文字、数学 之上完成关键突破；其能力延伸到 理论建模、实验测量，并为 声纳 的发展铺平了道路。",
    "dependsOn": ["diff_eq","writing","mathematics","solid_mech"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "近代早期",
        "text": "声学在 1700 年 前后出现，依托 微分方程 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，声学仍是 理论建模 的底层支撑，并持续影响 声纳。"
      }
    ],
    "significance": "声学把 微分方程 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 声纳。"
  },
{
    "id": "thermo_chem",
    "name": "热化学",
    "en": "Thermochemistry",
    "category": "basic",
    "era": "industrial",
    "date": "1840 年",
    "year": 1840,
    "people": "",
    "place": "",
    "summary": "热化学在 1840 年 前后成形，依托 文字、数学 把 理论建模、实验测量 落到实处，并成为 科学基础与方法 中承上启下的一环，直接支撑了 光化学 等后续技术。",
    "dependsOn": ["writing","mathematics"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "热化学在 1840 年 前后出现，依托 文字 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，热化学仍是 理论建模 的底层支撑，并持续影响 光化学。"
      }
    ],
    "significance": "热化学把 文字 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点，并直接催生了 光化学。"
  },
{
    "id": "photochemistry",
    "name": "光化学",
    "en": "Photochemistry",
    "category": "basic",
    "era": "industrial",
    "date": "1840 年",
    "year": 1840,
    "people": "",
    "place": "",
    "summary": "光化学约 1840 年 出现，建立在 文字、数学、热化学 之上；它把 理论建模、实验测量 变成可稳定复现的能力，是 科学基础与方法 中从经验走向方法的关键一步。",
    "dependsOn": ["writing","mathematics","thermo_chem"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "光化学在 1840 年 前后出现，依托 文字 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，光化学仍是 理论建模 的底层支撑，并作为 科学基础与方法 的基础能力持续发挥作用。"
      }
    ],
    "significance": "光化学把 文字 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "biophysics",
    "name": "生物物理学",
    "en": "Biophysics",
    "category": "basic",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "生物物理学约 1900 年 出现，建立在 生物化学、文字、数学 之上；它把 理论建模、实验测量 变成可稳定复现的能力，是 科学基础与方法 中从经验走向方法的关键一步。",
    "dependsOn": ["biochem","writing","mathematics"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "生物物理学在 1900 年 前后出现，依托 生物化学 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，生物物理学仍是 理论建模 的底层支撑，并作为 科学基础与方法 的基础能力持续发挥作用。"
      }
    ],
    "significance": "生物物理学把 生物化学 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "genomics",
    "name": "基因组学",
    "en": "Genomics",
    "category": "basic",
    "era": "info",
    "date": "1977 年",
    "year": 1977,
    "people": "",
    "place": "",
    "summary": "基因组学约 1977 年 出现，建立在 文字、数学 之上；它把 理论建模、实验测量 变成可稳定复现的能力，是 科学基础与方法 中从经验走向方法的关键一步。",
    "dependsOn": ["writing","mathematics"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "基因组学在 1977 年 前后出现，依托 文字 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，基因组学仍是 理论建模 的底层支撑，并作为 科学基础与方法 的基础能力持续发挥作用。"
      }
    ],
    "significance": "基因组学把 文字 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "proteomics",
    "name": "蛋白质组学",
    "en": "Proteomics",
    "category": "basic",
    "era": "info",
    "date": "1995 年",
    "year": 1995,
    "people": "",
    "place": "",
    "summary": "蛋白质组学约 1995 年 出现，建立在 文字、数学 之上；它把 理论建模、实验测量 变成可稳定复现的能力，是 科学基础与方法 中从经验走向方法的关键一步。",
    "dependsOn": ["writing","mathematics"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "蛋白质组学在 1995 年 前后出现，依托 文字 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，蛋白质组学仍是 理论建模 的底层支撑，并作为 科学基础与方法 的基础能力持续发挥作用。"
      }
    ],
    "significance": "蛋白质组学把 文字 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "nanoscience",
    "name": "纳米科学",
    "en": "Nanoscience",
    "category": "basic",
    "era": "info",
    "date": "1980 年",
    "year": 1980,
    "people": "",
    "place": "",
    "summary": "纳米科学约 1980 年 出现，建立在 文字、数学 之上；它把 理论建模、实验测量 变成可稳定复现的能力，是 科学基础与方法 中从经验走向方法的关键一步。",
    "dependsOn": ["writing","mathematics"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "纳米科学在 1980 年 前后出现，依托 文字 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，纳米科学仍是 理论建模 的底层支撑，并作为 科学基础与方法 的基础能力持续发挥作用。"
      }
    ],
    "significance": "纳米科学把 文字 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点。"
  },

{
    "id": "data_science",
    "name": "数据科学",
    "en": "Data Science",
    "category": "basic",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "数据科学约 2000 年 出现，建立在 文字、数学 之上；它把 理论建模、实验测量 变成可稳定复现的能力，是 科学基础与方法 中从经验走向方法的关键一步。",
    "dependsOn": ["writing","mathematics"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "数据科学在 2000 年 前后出现，依托 文字 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，数据科学仍是 理论建模 的底层支撑，并作为 科学基础与方法 的基础能力持续发挥作用。"
      }
    ],
    "significance": "数据科学把 文字 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "network_sci",
    "name": "网络科学",
    "en": "Network Science",
    "category": "basic",
    "era": "info",
    "date": "1998 年",
    "year": 1998,
    "people": "",
    "place": "",
    "summary": "网络科学约 1998 年 出现，建立在 文字、数学 之上；它把 理论建模、实验测量 变成可稳定复现的能力，是 科学基础与方法 中从经验走向方法的关键一步。",
    "dependsOn": ["writing","mathematics"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "网络科学在 1998 年 前后出现，依托 文字 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，网络科学仍是 理论建模 的底层支撑，并作为 科学基础与方法 的基础能力持续发挥作用。"
      }
    ],
    "significance": "网络科学把 文字 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "cognition",
    "name": "认知科学",
    "en": "Cognitive Science",
    "category": "basic",
    "era": "info",
    "date": "1970 年",
    "year": 1970,
    "people": "",
    "place": "",
    "summary": "认知科学约 1970 年 出现，建立在 文字、数学 之上；它把 理论建模、实验测量 变成可稳定复现的能力，是 科学基础与方法 中从经验走向方法的关键一步。",
    "dependsOn": ["writing","mathematics"],
    "enables": [],
    "applications": [
      "理论建模",
      "实验测量",
      "工程计算"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "认知科学在 1970 年 前后出现，依托 文字 解决了 科学基础与方法 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，认知科学仍是 理论建模 的底层支撑，并作为 科学基础与方法 的基础能力持续发挥作用。"
      }
    ],
    "significance": "认知科学把 文字 与 理论建模 连接起来，是 科学基础与方法 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_copper",
    "name": "红铜冶炼",
    "en": "Copper Smelting",
    "category": "material",
    "era": "prehistoric",
    "date": "公元前 5000 年",
    "year": -5000,
    "people": "",
    "place": "",
    "summary": "红铜冶炼约 公元前 5000 年 成熟，建立在 陶器 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 黄铜、铅冶炼、避雷 的发展铺平了道路。",
    "dependsOn": ["mat_pottery"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "史前时代",
        "text": "红铜冶炼在 公元前 5000 年 前后出现，依托 陶器 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，红铜冶炼仍是 工具制造 的底层支撑，并持续影响 黄铜、铅冶炼、避雷。"
      }
    ],
    "significance": "红铜冶炼把 陶器 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 黄铜、铅冶炼、避雷。"
  },
{
    "id": "mat_bronze",
    "name": "青铜合金",
    "en": "Bronze Alloy",
    "category": "material",
    "era": "ancient",
    "date": "公元前 3300 年",
    "year": -3300,
    "people": "",
    "place": "",
    "summary": "青铜合金在 公元前 3300 年 前后成形，依托 青铜、铸造 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 弩、剑、盾 等后续技术。",
    "dependsOn": ["bronze","mat_casting"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "青铜合金在 公元前 3300 年 前后出现，依托 青铜 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，青铜合金仍是 工具制造 的底层支撑，并持续影响 弩、剑、盾。"
      }
    ],
    "significance": "青铜合金把 青铜 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 弩、剑、盾。"
  },
{
    "id": "mat_brass",
    "name": "黄铜",
    "en": "Brass",
    "category": "material",
    "era": "ancient",
    "date": "公元前 2000 年",
    "year": -2000,
    "people": "",
    "place": "",
    "summary": "黄铜约 公元前 2000 年 成熟，建立在 红铜冶炼 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 天然橡胶 的发展铺平了道路。",
    "dependsOn": ["mat_copper"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "黄铜在 公元前 2000 年 前后出现，依托 红铜冶炼 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，黄铜仍是 工具制造 的底层支撑，并持续影响 天然橡胶。"
      }
    ],
    "significance": "黄铜把 红铜冶炼 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 天然橡胶。"
  },
{
    "id": "mat_iron",
    "name": "块炼铁",
    "en": "Bloomery Iron",
    "category": "material",
    "era": "ancient",
    "date": "公元前 1200 年",
    "year": -1200,
    "people": "",
    "place": "",
    "summary": "块炼铁在 公元前 1200 年 前后成形，依托 耐火材料、铁器 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 熟铁、铸铁、避雷 等后续技术。",
    "dependsOn": ["mat_refractory","iron"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "块炼铁在 公元前 1200 年 前后出现，依托 耐火材料 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，块炼铁仍是 工具制造 的底层支撑，并持续影响 熟铁、铸铁、避雷。"
      }
    ],
    "significance": "块炼铁把 耐火材料 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 熟铁、铸铁、避雷。"
  },
{
    "id": "mat_wrought",
    "name": "熟铁",
    "en": "Wrought Iron",
    "category": "material",
    "era": "ancient",
    "date": "公元前 1000 年",
    "year": -1000,
    "people": "",
    "place": "",
    "summary": "熟铁约 公元前 1000 年 出现，建立在 铁器、块炼铁 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["iron","mat_iron"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "熟铁在 公元前 1000 年 前后出现，依托 铁器 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，熟铁仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "熟铁把 铁器 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_castiron",
    "name": "铸铁",
    "en": "Cast Iron",
    "category": "material",
    "era": "classical",
    "date": "公元前 500 年",
    "year": -500,
    "people": "",
    "place": "",
    "summary": "铸铁约 公元前 500 年 成熟，建立在 块炼铁 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 水泥与混凝土、渗碳、制动系统 的发展铺平了道路。",
    "dependsOn": ["mat_iron"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "古典时代",
        "text": "铸铁在 公元前 500 年 前后出现，依托 块炼铁 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，铸铁仍是 工具制造 的底层支撑，并持续影响 水泥与混凝土、渗碳、制动系统。"
      }
    ],
    "significance": "铸铁把 块炼铁 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 水泥与混凝土、渗碳、制动系统。"
  },
{
    "id": "mat_steel2",
    "name": "坩埚钢",
    "en": "Crucible Steel",
    "category": "material",
    "era": "medieval",
    "date": "500 年",
    "year": 500,
    "people": "",
    "place": "",
    "summary": "坩埚钢约 500 年 出现，建立在 钢铁 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["steel"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "中世纪",
        "text": "坩埚钢在 500 年 前后出现，依托 钢铁 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，坩埚钢仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "坩埚钢把 钢铁 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_ductile",
    "name": "球墨铸铁",
    "en": "Ductile Iron",
    "category": "material",
    "era": "electrical",
    "date": "1943 年",
    "year": 1943,
    "people": "",
    "place": "",
    "summary": "球墨铸铁约 1943 年 出现，建立在 化学、经典力学、导弹 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics","missile"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "球墨铸铁在 1943 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，球墨铸铁仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "球墨铸铁把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_malleable",
    "name": "可锻铸铁",
    "en": "Malleable Iron",
    "category": "material",
    "era": "earlymodern",
    "date": "1722 年",
    "year": 1722,
    "people": "",
    "place": "",
    "summary": "可锻铸铁约 1722 年 出现，建立在 化学、经典力学 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "近代早期",
        "text": "可锻铸铁在 1722 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，可锻铸铁仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "可锻铸铁把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_stainless",
    "name": "不锈钢",
    "en": "Stainless Steel",
    "category": "material",
    "era": "electrical",
    "date": "1913 年",
    "year": 1913,
    "people": "",
    "place": "",
    "summary": "不锈钢约 1913 年 出现，建立在 化学、经典力学 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "不锈钢在 1913 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，不锈钢仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "不锈钢把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_manganese",
    "name": "锰钢",
    "en": "Manganese Steel",
    "category": "material",
    "era": "industrial",
    "date": "1882 年",
    "year": 1882,
    "people": "",
    "place": "",
    "summary": "锰钢约 1882 年 出现，建立在 化学、经典力学 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "锰钢在 1882 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，锰钢仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "锰钢把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_toolsteel",
    "name": "工具钢",
    "en": "Tool Steel",
    "category": "material",
    "era": "industrial",
    "date": "1868 年",
    "year": 1868,
    "people": "",
    "place": "",
    "summary": "工具钢约 1868 年 成熟，建立在 化学、经典力学 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 注塑、风洞、钢笔 的发展铺平了道路。",
    "dependsOn": ["chemistry","physics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "工具钢在 1868 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，工具钢仍是 工具制造 的底层支撑，并持续影响 注塑、风洞、钢笔。"
      }
    ],
    "significance": "工具钢把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 注塑、风洞、钢笔。"
  },
{
    "id": "mat_hss",
    "name": "高速钢",
    "en": "High-Speed Steel",
    "category": "material",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "高速钢在 1900 年 前后成形，依托 化学、经典力学 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 模具钢、酚醛树脂、透明导电膜 等后续技术。",
    "dependsOn": ["chemistry","physics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "高速钢在 1900 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，高速钢仍是 工具制造 的底层支撑，并持续影响 模具钢、酚醛树脂、透明导电膜。"
      }
    ],
    "significance": "高速钢把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 模具钢、酚醛树脂、透明导电膜。"
  },
{
    "id": "mat_die",
    "name": "模具钢",
    "en": "Die Steel",
    "category": "material",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "模具钢约 1900 年 出现，建立在 化学、经典力学、高速钢 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics","mat_hss"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "模具钢在 1900 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，模具钢仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "模具钢把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_siliconsteel",
    "name": "硅钢",
    "en": "Silicon Steel",
    "category": "material",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "硅钢约 1900 年 出现，建立在 化学、经典力学 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "硅钢在 1900 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，硅钢仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "硅钢把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_alu",
    "name": "铝冶炼",
    "en": "Aluminium Smelting",
    "category": "material",
    "era": "industrial",
    "date": "1825 年",
    "year": 1825,
    "people": "",
    "place": "",
    "summary": "铝冶炼约 1825 年 出现，建立在 化学、经典力学 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "铝冶炼在 1825 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，铝冶炼仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "铝冶炼把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_alalloy",
    "name": "硬铝合金",
    "en": "Duralumin",
    "category": "material",
    "era": "electrical",
    "date": "1909 年",
    "year": 1909,
    "people": "",
    "place": "",
    "summary": "硬铝合金在 1909 年 前后成形，依托 化学、经典力学 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 金属基复合材料、陶瓷基复合材料、储氢合金 等后续技术。",
    "dependsOn": ["chemistry","physics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "硬铝合金在 1909 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，硬铝合金仍是 工具制造 的底层支撑，并持续影响 金属基复合材料、陶瓷基复合材料、储氢合金。"
      }
    ],
    "significance": "硬铝合金把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 金属基复合材料、陶瓷基复合材料、储氢合金。"
  },
{
    "id": "mat_tialloy",
    "name": "钛合金",
    "en": "Titanium Alloy",
    "category": "material",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "people": "",
    "place": "",
    "summary": "钛合金在 1950 年 前后成形，依托 化学、经典力学 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 浮法玻璃 等后续技术。",
    "dependsOn": ["chemistry","physics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "钛合金在 1950 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，钛合金仍是 工具制造 的底层支撑，并持续影响 浮法玻璃。"
      }
    ],
    "significance": "钛合金把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 浮法玻璃。"
  },
{
    "id": "mat_mgalloy",
    "name": "镁合金",
    "en": "Magnesium Alloy",
    "category": "material",
    "era": "electrical",
    "date": "1930 年",
    "year": 1930,
    "people": "",
    "place": "",
    "summary": "镁合金约 1930 年 成熟，建立在 化学、经典力学 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 气凝胶、丁腈橡胶 的发展铺平了道路。",
    "dependsOn": ["chemistry","physics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "镁合金在 1930 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，镁合金仍是 工具制造 的底层支撑，并持续影响 气凝胶、丁腈橡胶。"
      }
    ],
    "significance": "镁合金把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 气凝胶、丁腈橡胶。"
  },
{
    "id": "mat_nialloy",
    "name": "镍合金",
    "en": "Nickel Alloy",
    "category": "material",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "镍合金约 1900 年 出现，建立在 化学、经典力学 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "镍合金在 1900 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，镍合金仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "镍合金把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_zinc",
    "name": "锌冶炼",
    "en": "Zinc Smelting",
    "category": "material",
    "era": "classical",
    "date": "公元前 500 年",
    "year": -500,
    "people": "",
    "place": "",
    "summary": "锌冶炼约 公元前 500 年 出现，建立在 铅冶炼 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["mat_lead"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "古典时代",
        "text": "锌冶炼在 公元前 500 年 前后出现，依托 铅冶炼 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，锌冶炼仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "锌冶炼把 铅冶炼 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_lead",
    "name": "铅冶炼",
    "en": "Lead Smelting",
    "category": "material",
    "era": "ancient",
    "date": "公元前 3000 年",
    "year": -3000,
    "people": "",
    "place": "",
    "summary": "铅冶炼在 公元前 3000 年 前后成形，依托 红铜冶炼 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 锌冶炼、软钎料、玻璃 等后续技术。",
    "dependsOn": ["mat_copper"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "铅冶炼在 公元前 3000 年 前后出现，依托 红铜冶炼 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，铅冶炼仍是 工具制造 的底层支撑，并持续影响 锌冶炼、软钎料、玻璃。"
      }
    ],
    "significance": "铅冶炼把 红铜冶炼 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 锌冶炼、软钎料、玻璃。"
  },
{
    "id": "mat_tin",
    "name": "锡冶炼",
    "en": "Tin Smelting",
    "category": "material",
    "era": "ancient",
    "date": "公元前 3000 年",
    "year": -3000,
    "people": "",
    "place": "",
    "summary": "锡冶炼约 公元前 3000 年 成熟，建立在 青铜 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 软钎料 的发展铺平了道路。",
    "dependsOn": ["bronze"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "锡冶炼在 公元前 3000 年 前后出现，依托 青铜 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，锡冶炼仍是 工具制造 的底层支撑，并持续影响 软钎料。"
      }
    ],
    "significance": "锡冶炼把 青铜 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 软钎料。"
  },
{
    "id": "mat_mercury",
    "name": "汞冶炼",
    "en": "Mercury Smelting",
    "category": "material",
    "era": "ancient",
    "date": "公元前 2000 年",
    "year": -2000,
    "people": "",
    "place": "",
    "summary": "汞冶炼约 公元前 2000 年 出现，建立在 窑、陶器 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["kiln", "mat_pottery"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "汞冶炼在 公元前 2000 年 前后出现，依托 窑 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，汞冶炼仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "汞冶炼把 窑 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_gold",
    "name": "黄金加工",
    "en": "Gold Working",
    "category": "material",
    "era": "prehistoric",
    "date": "公元前 4000 年",
    "year": -4000,
    "people": "",
    "place": "",
    "summary": "黄金加工约 公元前 4000 年 出现，建立在 锤 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_hammer"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "史前时代",
        "text": "黄金加工在 公元前 4000 年 前后出现，依托 锤 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，黄金加工仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "黄金加工把 锤 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_silver",
    "name": "白银加工",
    "en": "Silver Working",
    "category": "material",
    "era": "prehistoric",
    "date": "公元前 4000 年",
    "year": -4000,
    "people": "",
    "place": "",
    "summary": "白银加工约 公元前 4000 年 出现，建立在 锤 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_hammer"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "史前时代",
        "text": "白银加工在 公元前 4000 年 前后出现，依托 锤 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，白银加工仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "白银加工把 锤 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_platinum",
    "name": "铂族金属",
    "en": "Platinum Group",
    "category": "material",
    "era": "industrial",
    "date": "1750 年",
    "year": 1750,
    "people": "",
    "place": "",
    "summary": "铂族金属约 1750 年 出现，建立在 化学、经典力学 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "铂族金属在 1750 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，铂族金属仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "铂族金属把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_tungsten",
    "name": "钨",
    "en": "Tungsten",
    "category": "material",
    "era": "industrial",
    "date": "1783 年",
    "year": 1783,
    "people": "",
    "place": "",
    "summary": "钨约 1783 年 出现，建立在 化学、经典力学 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "钨在 1783 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，钨仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "钨把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_chromium",
    "name": "铬",
    "en": "Chromium",
    "category": "material",
    "era": "industrial",
    "date": "1797 年",
    "year": 1797,
    "people": "",
    "place": "",
    "summary": "铬约 1797 年 出现，建立在 化学、经典力学 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "铬在 1797 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，铬仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "铬把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_manganese2",
    "name": "锰",
    "en": "Manganese",
    "category": "material",
    "era": "industrial",
    "date": "1774 年",
    "year": 1774,
    "people": "",
    "place": "",
    "summary": "锰约 1774 年 出现，建立在 化学、经典力学 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "锰在 1774 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，锰仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "锰把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_cobalt",
    "name": "钴",
    "en": "Cobalt",
    "category": "material",
    "era": "earlymodern",
    "date": "1735 年",
    "year": 1735,
    "people": "",
    "place": "",
    "summary": "钴约 1735 年 出现，建立在 化学、经典力学 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "近代早期",
        "text": "钴在 1735 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，钴仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "钴把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_molybdenum",
    "name": "钼",
    "en": "Molybdenum",
    "category": "material",
    "era": "industrial",
    "date": "1781 年",
    "year": 1781,
    "people": "",
    "place": "",
    "summary": "钼约 1781 年 出现，建立在 化学、经典力学 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "钼在 1781 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，钼仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "钼把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_vanadium",
    "name": "钒",
    "en": "Vanadium",
    "category": "material",
    "era": "industrial",
    "date": "1801 年",
    "year": 1801,
    "people": "",
    "place": "",
    "summary": "钒约 1801 年 出现，建立在 化学、经典力学、粉末冶金 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics","mat_powder"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "钒在 1801 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，钒仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "钒把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_tantalum",
    "name": "钽",
    "en": "Tantalum",
    "category": "material",
    "era": "industrial",
    "date": "1802 年",
    "year": 1802,
    "people": "",
    "place": "",
    "summary": "钽约 1802 年 出现，建立在 化学、经典力学 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "钽在 1802 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，钽仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "钽把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_niobium",
    "name": "铌",
    "en": "Niobium",
    "category": "material",
    "era": "industrial",
    "date": "1864 年",
    "year": 1864,
    "people": "",
    "place": "",
    "summary": "铌约 1864 年 出现，建立在 化学、经典力学 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "铌在 1864 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，铌仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "铌把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_zirconium",
    "name": "锆",
    "en": "Zirconium",
    "category": "material",
    "era": "industrial",
    "date": "1789 年",
    "year": 1789,
    "people": "",
    "place": "",
    "summary": "锆约 1789 年 出现，建立在 化学、经典力学 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "锆在 1789 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，锆仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "锆把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_beryllium",
    "name": "铍",
    "en": "Beryllium",
    "category": "material",
    "era": "industrial",
    "date": "1798 年",
    "year": 1798,
    "people": "",
    "place": "",
    "summary": "铍约 1798 年 出现，建立在 化学、经典力学 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "铍在 1798 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，铍仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "铍把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_solder",
    "name": "软钎料",
    "en": "Solder",
    "category": "material",
    "era": "ancient",
    "date": "公元前 3000 年",
    "year": -3000,
    "people": "",
    "place": "",
    "summary": "软钎料约 公元前 3000 年 出现，建立在 青铜、锡冶炼、铅冶炼 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["bronze","mat_tin","mat_lead"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "软钎料在 公元前 3000 年 前后出现，依托 青铜 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，软钎料仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "软钎料把 青铜 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_babbitt",
    "name": "巴氏合金",
    "en": "Babbitt Metal",
    "category": "material",
    "era": "industrial",
    "date": "1839 年",
    "year": 1839,
    "people": "",
    "place": "",
    "summary": "巴氏合金约 1839 年 出现，建立在 化学、经典力学 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "巴氏合金在 1839 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，巴氏合金仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "巴氏合金把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_woodmetal",
    "name": "伍德合金",
    "en": "Wood's Metal",
    "category": "material",
    "era": "industrial",
    "date": "1860 年",
    "year": 1860,
    "people": "",
    "place": "",
    "summary": "伍德合金约 1860 年 出现，建立在 化学、经典力学 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "伍德合金在 1860 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，伍德合金仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "伍德合金把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_shapemem",
    "name": "形状记忆合金",
    "en": "Shape Memory Alloy",
    "category": "material",
    "era": "info",
    "date": "1962 年",
    "year": 1962,
    "people": "",
    "place": "",
    "summary": "形状记忆合金约 1962 年 出现，建立在 化学、经典力学 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "形状记忆合金在 1962 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，形状记忆合金仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "形状记忆合金把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_metglass",
    "name": "非晶合金",
    "en": "Amorphous Alloy",
    "category": "material",
    "era": "info",
    "date": "1960 年",
    "year": 1960,
    "people": "",
    "place": "",
    "summary": "非晶合金在 1960 年 前后成形，依托 化学、经典力学 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 聚酰亚胺 等后续技术。",
    "dependsOn": ["chemistry","physics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "非晶合金在 1960 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，非晶合金仍是 工具制造 的底层支撑，并持续影响 聚酰亚胺。"
      }
    ],
    "significance": "非晶合金把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 聚酰亚胺。"
  },
{
    "id": "mat_powder",
    "name": "粉末冶金",
    "en": "Powder Metallurgy",
    "category": "material",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "粉末冶金约 1800 年 成熟，建立在 化学、经典力学 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 钒 的发展铺平了道路。",
    "dependsOn": ["chemistry","physics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "粉末冶金在 1800 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，粉末冶金仍是 工具制造 的底层支撑，并持续影响 钒。"
      }
    ],
    "significance": "粉末冶金把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 钒。"
  },
{
    "id": "mat_sinter",
    "name": "烧结",
    "en": "Sintering",
    "category": "material",
    "era": "ancient",
    "date": "公元前 3000 年",
    "year": -3000,
    "people": "",
    "place": "",
    "summary": "烧结约 公元前 3000 年 成熟，建立在 青铜 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 水泥 的发展铺平了道路。",
    "dependsOn": ["bronze"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "烧结在 公元前 3000 年 前后出现，依托 青铜 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，烧结仍是 工具制造 的底层支撑，并持续影响 水泥。"
      }
    ],
    "significance": "烧结把 青铜 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 水泥。"
  },
{
    "id": "mat_forging",
    "name": "锻造",
    "en": "Forging",
    "category": "material",
    "era": "ancient",
    "date": "公元前 3000 年",
    "year": -3000,
    "people": "",
    "place": "",
    "summary": "锻造在 公元前 3000 年 前后成形，依托 青铜、木炭、用火 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 板甲 等后续技术。",
    "dependsOn": ["bronze","ene_charcoal","fire","bellows"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "锻造在 公元前 3000 年 前后出现，依托 青铜 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，锻造仍是 工具制造 的底层支撑，并持续影响 板甲。"
      }
    ],
    "significance": "锻造把 青铜 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 板甲。"
  },
{
    "id": "mat_casting",
    "name": "铸造",
    "en": "Casting",
    "category": "material",
    "era": "ancient",
    "date": "公元前 3500 年",
    "year": -3500,
    "people": "",
    "place": "",
    "summary": "铸造约 公元前 3500 年 成熟，建立在 陶器 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 青铜、青铜合金、砂型铸造 的发展铺平了道路。",
    "dependsOn": ["mat_pottery"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "铸造在 公元前 3500 年 前后出现，依托 陶器 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，铸造仍是 工具制造 的底层支撑，并持续影响 青铜、青铜合金、砂型铸造。"
      }
    ],
    "significance": "铸造把 陶器 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 青铜、青铜合金、砂型铸造。"
  },
{
    "id": "mat_rolling",
    "name": "轧制",
    "en": "Rolling",
    "category": "material",
    "era": "earlymodern",
    "date": "1500 年",
    "year": 1500,
    "people": "",
    "place": "",
    "summary": "轧制约 1500 年 成熟，建立在 拉拔 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 压延 的发展铺平了道路。",
    "dependsOn": ["mat_drawing"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "近代早期",
        "text": "轧制在 1500 年 前后出现，依托 拉拔 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，轧制仍是 工具制造 的底层支撑，并持续影响 压延。"
      }
    ],
    "significance": "轧制把 拉拔 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 压延。"
  },
{
    "id": "mat_drawing",
    "name": "拉拔",
    "en": "Wire Drawing",
    "category": "material",
    "era": "medieval",
    "date": "1200 年",
    "year": 1200,
    "people": "",
    "place": "",
    "summary": "拉拔在 1200 年 前后成形，依托 车床 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 轧制、拉丝 等后续技术。",
    "dependsOn": ["mfg_lathe"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "中世纪",
        "text": "拉拔在 1200 年 前后出现，依托 车床 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，拉拔仍是 工具制造 的底层支撑，并持续影响 轧制、拉丝。"
      }
    ],
    "significance": "拉拔把 车床 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 轧制、拉丝。"
  },
{
    "id": "mat_extrusion",
    "name": "挤压成形",
    "en": "Extrusion",
    "category": "material",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "挤压成形约 1800 年 出现，建立在 化学、经典力学 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "挤压成形在 1800 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，挤压成形仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "挤压成形把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_heat",
    "name": "热处理",
    "en": "Heat Treatment",
    "category": "material",
    "era": "ancient",
    "date": "公元前 1000 年",
    "year": -1000,
    "people": "",
    "place": "",
    "summary": "热处理在 公元前 1000 年 前后成形，依托 铁器 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 淬火、回火 等后续技术。",
    "dependsOn": ["iron"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "热处理在 公元前 1000 年 前后出现，依托 铁器 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，热处理仍是 工具制造 的底层支撑，并持续影响 淬火、回火。"
      }
    ],
    "significance": "热处理把 铁器 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 淬火、回火。"
  },
{
    "id": "mat_quench",
    "name": "淬火",
    "en": "Quenching",
    "category": "material",
    "era": "ancient",
    "date": "公元前 1000 年",
    "year": -1000,
    "people": "",
    "place": "",
    "summary": "淬火在 公元前 1000 年 前后成形，依托 铁器、热处理 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 回火、退火 等后续技术。",
    "dependsOn": ["iron","mat_heat"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "淬火在 公元前 1000 年 前后出现，依托 铁器 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，淬火仍是 工具制造 的底层支撑，并持续影响 回火、退火。"
      }
    ],
    "significance": "淬火把 铁器 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 回火、退火。"
  },
{
    "id": "mat_temper",
    "name": "回火",
    "en": "Tempering",
    "category": "material",
    "era": "ancient",
    "date": "公元前 1000 年",
    "year": -1000,
    "people": "",
    "place": "",
    "summary": "回火约 公元前 1000 年 出现，建立在 铁器、淬火、热处理 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["iron","mat_quench","mat_heat"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "回火在 公元前 1000 年 前后出现，依托 铁器 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，回火仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "回火把 铁器 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_anneal",
    "name": "退火",
    "en": "Annealing",
    "category": "material",
    "era": "ancient",
    "date": "公元前 1000 年",
    "year": -1000,
    "people": "",
    "place": "",
    "summary": "退火约 公元前 1000 年 出现，建立在 铁器、淬火 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["iron","mat_quench"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "退火在 公元前 1000 年 前后出现，依托 铁器 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，退火仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "退火把 铁器 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_carburize",
    "name": "渗碳",
    "en": "Carburizing",
    "category": "material",
    "era": "classical",
    "date": "公元前 500 年",
    "year": -500,
    "people": "",
    "place": "",
    "summary": "渗碳约 公元前 500 年 出现，建立在 铸铁 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["mat_castiron"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "古典时代",
        "text": "渗碳在 公元前 500 年 前后出现，依托 铸铁 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，渗碳仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "渗碳把 铸铁 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_casehard",
    "name": "表面硬化",
    "en": "Case Hardening",
    "category": "material",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "表面硬化约 1800 年 出现，建立在 化学、经典力学 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "表面硬化在 1800 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，表面硬化仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "表面硬化把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_plating",
    "name": "电镀",
    "en": "Electroplating",
    "category": "material",
    "era": "industrial",
    "date": "1805 年",
    "year": 1805,
    "people": "",
    "place": "",
    "summary": "电镀约 1805 年 出现，建立在 化学、经典力学 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "电镀在 1805 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，电镀仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "电镀把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_anodize",
    "name": "阳极氧化",
    "en": "Anodizing",
    "category": "material",
    "era": "electrical",
    "date": "1923 年",
    "year": 1923,
    "people": "",
    "place": "",
    "summary": "阳极氧化约 1923 年 出现，建立在 化学、经典力学 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "阳极氧化在 1923 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，阳极氧化仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "阳极氧化把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_galv",
    "name": "热浸镀锌",
    "en": "Hot-Dip Galvanizing",
    "category": "material",
    "era": "earlymodern",
    "date": "1742 年",
    "year": 1742,
    "people": "",
    "place": "",
    "summary": "热浸镀锌约 1742 年 出现，建立在 化学、经典力学 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "近代早期",
        "text": "热浸镀锌在 1742 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，热浸镀锌仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "热浸镀锌把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_pottery",
    "name": "陶器",
    "en": "Pottery",
    "category": "material",
    "era": "prehistoric",
    "date": "约 1 万年前",
    "year": -10000,
    "people": "",
    "place": "",
    "summary": "陶器约 约 1 万年前 成熟，建立在 露天烧陶、磨制石器 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 砖与砌筑、青铜、发酵 的发展铺平了道路。",
    "dependsOn": ["open_firing","ground_stone"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "史前时代",
        "text": "陶器在 约 1 万年前 前后出现，依托 露天烧陶 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，陶器仍是 工具制造 的底层支撑，并持续影响 砖与砌筑、青铜、发酵。"
      }
    ],
    "significance": "陶器把 露天烧陶 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 砖与砌筑、青铜、发酵。"
  },
{
    "id": "mat_porcelain",
    "name": "瓷器",
    "en": "Porcelain",
    "category": "material",
    "era": "medieval",
    "date": "600 年",
    "year": 600,
    "people": "",
    "place": "",
    "summary": "瓷器约 600 年 出现，建立在 窑、炻器 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["kiln","mat_stoneware"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "中世纪",
        "text": "瓷器在 600 年 前后出现，依托 窑 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，瓷器仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "瓷器把 窑 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_stoneware",
    "name": "炻器",
    "en": "Stoneware",
    "category": "material",
    "era": "ancient",
    "date": "公元前 2000 年",
    "year": -2000,
    "people": "",
    "place": "",
    "summary": "炻器在 公元前 2000 年 前后成形，依托 窑、陶器 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 瓷器、耐火材料 等后续技术。",
    "dependsOn": ["kiln", "mat_pottery"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "炻器在 公元前 2000 年 前后出现，依托 窑 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，炻器仍是 工具制造 的底层支撑，并持续影响 瓷器、耐火材料。"
      }
    ],
    "significance": "炻器把 窑 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 瓷器、耐火材料。"
  },
{
    "id": "mat_glass",
    "name": "玻璃",
    "en": "Glass",
    "category": "material",
    "era": "ancient",
    "date": "公元前 2500 年",
    "year": -2500,
    "people": "",
    "place": "",
    "summary": "玻璃在 公元前 2500 年 前后成形，依托 铅冶炼、陶器 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 摄影、触摸屏、电子管 等后续技术。",
    "dependsOn": ["mat_lead","mat_pottery"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "玻璃在 公元前 2500 年 前后出现，依托 铅冶炼 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，玻璃仍是 工具制造 的底层支撑，并持续影响 摄影、触摸屏、电子管。"
      }
    ],
    "significance": "玻璃把 铅冶炼 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 摄影、触摸屏、电子管。"
  },
{
    "id": "mat_flatglass",
    "name": "平板玻璃",
    "en": "Flat Glass",
    "category": "material",
    "era": "classical",
    "date": "100 年",
    "year": 100,
    "people": "",
    "place": "",
    "summary": "平板玻璃约 100 年 成熟，建立在 窑、陶器 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 自然采光 的发展铺平了道路。",
    "dependsOn": ["kiln","mat_pottery"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "古典时代",
        "text": "平板玻璃在 100 年 前后出现，依托 窑 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，平板玻璃仍是 工具制造 的底层支撑，并持续影响 自然采光。"
      }
    ],
    "significance": "平板玻璃把 窑 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 自然采光。"
  },
{
    "id": "mat_floatglass",
    "name": "浮法玻璃",
    "en": "Float Glass",
    "category": "material",
    "era": "info",
    "date": "1952 年",
    "year": 1952,
    "people": "",
    "place": "",
    "summary": "浮法玻璃约 1952 年 出现，建立在 化学、经典力学、钛合金 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics","mat_tialloy"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "浮法玻璃在 1952 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，浮法玻璃仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "浮法玻璃把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_tempered",
    "name": "钢化玻璃",
    "en": "Tempered Glass",
    "category": "material",
    "era": "industrial",
    "date": "1874 年",
    "year": 1874,
    "people": "",
    "place": "",
    "summary": "钢化玻璃在 1874 年 前后成形，依托 化学、经典力学 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 玻璃幕墙 等后续技术。",
    "dependsOn": ["chemistry","physics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "钢化玻璃在 1874 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，钢化玻璃仍是 工具制造 的底层支撑，并持续影响 玻璃幕墙。"
      }
    ],
    "significance": "钢化玻璃把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 玻璃幕墙。"
  },
{
    "id": "mat_opticalglass",
    "name": "光学玻璃",
    "en": "Optical Glass",
    "category": "material",
    "era": "earlymodern",
    "date": "1600 年",
    "year": 1600,
    "people": "",
    "place": "",
    "summary": "光学玻璃约 1600 年 出现，建立在 光学、窑 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["optics","kiln"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "近代早期",
        "text": "光学玻璃在 1600 年 前后出现，依托 光学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，光学玻璃仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "光学玻璃把 光学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_glassfiber",
    "name": "玻璃纤维",
    "en": "Glass Fiber",
    "category": "material",
    "era": "electrical",
    "date": "1930 年",
    "year": 1930,
    "people": "",
    "place": "",
    "summary": "玻璃纤维在 1930 年 前后成形，依托 化学、经典力学 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 玄武岩纤维 等后续技术。",
    "dependsOn": ["chemistry","physics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "玻璃纤维在 1930 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，玻璃纤维仍是 工具制造 的底层支撑，并持续影响 玄武岩纤维。"
      }
    ],
    "significance": "玻璃纤维把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 玄武岩纤维。"
  },
{
    "id": "mat_basaltfiber",
    "name": "玄武岩纤维",
    "en": "Basalt Fiber",
    "category": "material",
    "era": "info",
    "date": "1985 年",
    "year": 1985,
    "people": "",
    "place": "",
    "summary": "玄武岩纤维约 1985 年 出现，建立在 化学、经典力学、玻璃纤维 之上；它把 结构增强、耐高温防护 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics","mat_glassfiber"],
    "enables": [],
    "applications": [
      "结构增强",
      "耐高温防护",
      "耐腐蚀构件"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "玄武岩纤维在 1985 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，玄武岩纤维仍是 结构增强 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "玄武岩纤维把 化学 与 结构增强 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_cement",
    "name": "水泥",
    "en": "Cement",
    "category": "material",
    "era": "ancient",
    "date": "公元前 3000 年",
    "year": -3000,
    "people": "",
    "place": "",
    "summary": "水泥在 公元前 3000 年 前后成形，依托 青铜、烧结 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 苏伊士运河、隧道衬砌 等后续技术。",
    "dependsOn": ["bronze","mat_sinter"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "水泥在 公元前 3000 年 前后出现，依托 青铜 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，水泥仍是 工具制造 的底层支撑，并持续影响 苏伊士运河、隧道衬砌。"
      }
    ],
    "significance": "水泥把 青铜 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 苏伊士运河、隧道衬砌。"
  },
{
    "id": "mat_concrete",
    "name": "混凝土",
    "en": "Concrete",
    "category": "material",
    "era": "ancient",
    "date": "公元前 2000 年",
    "year": -2000,
    "people": "",
    "place": "",
    "summary": "混凝土约 公元前 2000 年 成熟，建立在 石灰 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 机场跑道、立交桥、高铁桥梁 的发展铺平了道路。",
    "dependsOn": ["lime"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "混凝土在 公元前 2000 年 前后出现，依托 石灰 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，混凝土仍是 工具制造 的底层支撑，并持续影响 机场跑道、立交桥、高铁桥梁。"
      }
    ],
    "significance": "混凝土把 石灰 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 机场跑道、立交桥、高铁桥梁。"
  },
{
    "id": "mat_reconcrete",
    "name": "钢筋混凝土",
    "en": "Reinforced Concrete",
    "category": "material",
    "era": "industrial",
    "date": "1849 年",
    "year": 1849,
    "people": "",
    "place": "",
    "summary": "钢筋混凝土在 1849 年 前后成形，依托 化学、经典力学 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 巴拿马运河、剪力墙、筒体结构 等后续技术。",
    "dependsOn": ["chemistry","physics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "钢筋混凝土在 1849 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，钢筋混凝土仍是 工具制造 的底层支撑，并持续影响 巴拿马运河、剪力墙、筒体结构。"
      }
    ],
    "significance": "钢筋混凝土把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 巴拿马运河、剪力墙、筒体结构。"
  },
{
    "id": "mat_prestress",
    "name": "预应力混凝土",
    "en": "Prestressed Concrete",
    "category": "material",
    "era": "industrial",
    "date": "1886 年",
    "year": 1886,
    "people": "",
    "place": "",
    "summary": "预应力混凝土约 1886 年 出现，建立在 化学、经典力学 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "预应力混凝土在 1886 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，预应力混凝土仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "预应力混凝土把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_refractory",
    "name": "耐火材料",
    "en": "Refractory",
    "category": "material",
    "era": "ancient",
    "date": "公元前 1500 年",
    "year": -1500,
    "people": "",
    "place": "",
    "summary": "耐火材料约 公元前 1500 年 成熟，建立在 炻器、窑 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 铁器、块炼铁 的发展铺平了道路。",
    "dependsOn": ["mat_stoneware", "kiln"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "耐火材料在 公元前 1500 年 前后出现，依托 炻器 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，耐火材料仍是 工具制造 的底层支撑，并持续影响 铁器、块炼铁。"
      }
    ],
    "significance": "耐火材料把 炻器 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 铁器、块炼铁。"
  },
{
    "id": "mat_sic",
    "name": "碳化硅",
    "en": "Silicon Carbide",
    "category": "material",
    "era": "industrial",
    "date": "1891 年",
    "year": 1891,
    "people": "",
    "place": "",
    "summary": "碳化硅约 1891 年 出现，建立在 化学、经典力学 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "碳化硅在 1891 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，碳化硅仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "碳化硅把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_alumina",
    "name": "氧化铝陶瓷",
    "en": "Alumina Ceramic",
    "category": "material",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "氧化铝陶瓷约 1900 年 出现，建立在 化学、经典力学 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "氧化铝陶瓷在 1900 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，氧化铝陶瓷仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "氧化铝陶瓷把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_zirconia",
    "name": "氧化锆陶瓷",
    "en": "Zirconia Ceramic",
    "category": "material",
    "era": "electrical",
    "date": "1920 年",
    "year": 1920,
    "people": "",
    "place": "",
    "summary": "氧化锆陶瓷约 1920 年 出现，建立在 化学、经典力学 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "氧化锆陶瓷在 1920 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，氧化锆陶瓷仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "氧化锆陶瓷把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_sin",
    "name": "氮化硅陶瓷",
    "en": "Silicon Nitride",
    "category": "material",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "people": "",
    "place": "",
    "summary": "氮化硅陶瓷约 1950 年 出现，建立在 化学、经典力学、材料科学 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics","materials","kiln"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "氮化硅陶瓷在 1950 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，氮化硅陶瓷仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "氮化硅陶瓷把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_wc",
    "name": "碳化钨",
    "en": "Tungsten Carbide",
    "category": "material",
    "era": "electrical",
    "date": "1923 年",
    "year": 1923,
    "people": "",
    "place": "",
    "summary": "碳化钨约 1923 年 出现，建立在 化学、经典力学 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "碳化钨在 1923 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，碳化钨仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "碳化钨把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_foamceramic",
    "name": "泡沫陶瓷",
    "en": "Foam Ceramic",
    "category": "material",
    "era": "info",
    "date": "1970 年",
    "year": 1970,
    "people": "",
    "place": "",
    "summary": "泡沫陶瓷约 1970 年 成熟，建立在 化学、经典力学 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 导电聚合物 的发展铺平了道路。",
    "dependsOn": ["chemistry","physics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "泡沫陶瓷在 1970 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，泡沫陶瓷仍是 工具制造 的底层支撑，并持续影响 导电聚合物。"
      }
    ],
    "significance": "泡沫陶瓷把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 导电聚合物。"
  },
{
    "id": "mat_aerogel",
    "name": "气凝胶",
    "en": "Aerogel",
    "category": "material",
    "era": "electrical",
    "date": "1931 年",
    "year": 1931,
    "people": "",
    "place": "",
    "summary": "气凝胶约 1931 年 成熟，建立在 化学、经典力学、镁合金 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 有机玻璃 的发展铺平了道路。",
    "dependsOn": ["chemistry","physics","mat_mgalloy"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "气凝胶在 1931 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，气凝胶仍是 工具制造 的底层支撑，并持续影响 有机玻璃。"
      }
    ],
    "significance": "气凝胶把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 有机玻璃。"
  },
{
    "id": "mat_rubber",
    "name": "天然橡胶",
    "en": "Natural Rubber",
    "category": "material",
    "era": "ancient",
    "date": "公元前 1500 年",
    "year": -1500,
    "people": "",
    "place": "",
    "summary": "天然橡胶在 公元前 1500 年 前后成形，依托 黄铜 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 滑板、充气轮胎、实心轮胎 等后续技术。",
    "dependsOn": ["mat_brass"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "天然橡胶在 公元前 1500 年 前后出现，依托 黄铜 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，天然橡胶仍是 工具制造 的底层支撑，并持续影响 滑板、充气轮胎、实心轮胎。"
      }
    ],
    "significance": "天然橡胶把 黄铜 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 滑板、充气轮胎、实心轮胎。"
  },
{
    "id": "mat_vulcan",
    "name": "硫化橡胶",
    "en": "Vulcanized Rubber",
    "category": "material",
    "era": "industrial",
    "date": "1839 年",
    "year": 1839,
    "people": "",
    "place": "",
    "summary": "硫化橡胶约 1839 年 成熟，建立在 化学、经典力学 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 充气轮胎、钢笔 的发展铺平了道路。",
    "dependsOn": ["chemistry","physics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "硫化橡胶在 1839 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，硫化橡胶仍是 工具制造 的底层支撑，并持续影响 充气轮胎、钢笔。"
      }
    ],
    "significance": "硫化橡胶把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 充气轮胎、钢笔。"
  },
{
    "id": "mat_phenolic",
    "name": "酚醛树脂",
    "en": "Phenolic Resin",
    "category": "material",
    "era": "electrical",
    "date": "1907 年",
    "year": 1907,
    "people": "",
    "place": "",
    "summary": "酚醛树脂在 1907 年 前后成形，依托 化学、经典力学、高速钢 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 铁氧体 等后续技术。",
    "dependsOn": ["chemistry","physics","mat_hss","plastics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "酚醛树脂在 1907 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，酚醛树脂仍是 工具制造 的底层支撑，并持续影响 铁氧体。"
      }
    ],
    "significance": "酚醛树脂把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 铁氧体。"
  },
{
    "id": "mat_nylon",
    "name": "尼龙",
    "en": "Nylon",
    "category": "material",
    "era": "electrical",
    "date": "1935 年",
    "year": 1935,
    "people": "",
    "place": "",
    "summary": "尼龙约 1935 年 出现，建立在 化学、经典力学 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "尼龙在 1935 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，尼龙仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "尼龙把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_pe",
    "name": "聚乙烯",
    "en": "Polyethylene",
    "category": "material",
    "era": "electrical",
    "date": "1933 年",
    "year": 1933,
    "people": "",
    "place": "",
    "summary": "聚乙烯约 1933 年 成熟，建立在 化学、经典力学 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 氧化锌半导体 的发展铺平了道路。",
    "dependsOn": ["chemistry","physics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "聚乙烯在 1933 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，聚乙烯仍是 工具制造 的底层支撑，并持续影响 氧化锌半导体。"
      }
    ],
    "significance": "聚乙烯把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 氧化锌半导体。"
  },
{
    "id": "mat_pp",
    "name": "聚丙烯",
    "en": "Polypropylene",
    "category": "material",
    "era": "info",
    "date": "1954 年",
    "year": 1954,
    "people": "",
    "place": "",
    "summary": "聚丙烯约 1954 年 出现，建立在 化学、经典力学 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "聚丙烯在 1954 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，聚丙烯仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "聚丙烯把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_pvc",
    "name": "聚氯乙烯",
    "en": "PVC",
    "category": "material",
    "era": "electrical",
    "date": "1926 年",
    "year": 1926,
    "people": "",
    "place": "",
    "summary": "聚氯乙烯约 1926 年 出现，建立在 化学、经典力学 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "聚氯乙烯在 1926 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，聚氯乙烯仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "聚氯乙烯把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_ps",
    "name": "聚苯乙烯",
    "en": "Polystyrene",
    "category": "material",
    "era": "electrical",
    "date": "1930 年",
    "year": 1930,
    "people": "",
    "place": "",
    "summary": "聚苯乙烯约 1930 年 出现，建立在 化学、经典力学 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "聚苯乙烯在 1930 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，聚苯乙烯仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "聚苯乙烯把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_ptfe",
    "name": "聚四氟乙烯",
    "en": "PTFE",
    "category": "material",
    "era": "electrical",
    "date": "1938 年",
    "year": 1938,
    "people": "",
    "place": "",
    "summary": "聚四氟乙烯约 1938 年 成熟，建立在 化学、经典力学 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 硅橡胶、多晶硅、蜂窝夹层 的发展铺平了道路。",
    "dependsOn": ["chemistry","physics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "聚四氟乙烯在 1938 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，聚四氟乙烯仍是 工具制造 的底层支撑，并持续影响 硅橡胶、多晶硅、蜂窝夹层。"
      }
    ],
    "significance": "聚四氟乙烯把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 硅橡胶、多晶硅、蜂窝夹层。"
  },
{
    "id": "mat_polyester",
    "name": "聚酯",
    "en": "Polyester",
    "category": "material",
    "era": "electrical",
    "date": "1930 年",
    "year": 1930,
    "people": "",
    "place": "",
    "summary": "聚酯约 1930 年 成熟，建立在 化学、经典力学 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 玻璃钢 的发展铺平了道路。",
    "dependsOn": ["chemistry","physics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "聚酯在 1930 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，聚酯仍是 工具制造 的底层支撑，并持续影响 玻璃钢。"
      }
    ],
    "significance": "聚酯把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 玻璃钢。"
  },
{
    "id": "mat_pu",
    "name": "聚氨酯",
    "en": "Polyurethane",
    "category": "material",
    "era": "electrical",
    "date": "1937 年",
    "year": 1937,
    "people": "",
    "place": "",
    "summary": "聚氨酯约 1937 年 出现，建立在 化学、经典力学 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "聚氨酯在 1937 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，聚氨酯仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "聚氨酯把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_epoxy",
    "name": "环氧树脂",
    "en": "Epoxy",
    "category": "material",
    "era": "electrical",
    "date": "1936 年",
    "year": 1936,
    "people": "",
    "place": "",
    "summary": "环氧树脂约 1936 年 出现，建立在 化学、经典力学 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "环氧树脂在 1936 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，环氧树脂仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "环氧树脂把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_pmma",
    "name": "有机玻璃",
    "en": "PMMA",
    "category": "material",
    "era": "electrical",
    "date": "1933 年",
    "year": 1933,
    "people": "",
    "place": "",
    "summary": "有机玻璃约 1933 年 出现，建立在 化学、经典力学、气凝胶 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics","mat_aerogel"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "有机玻璃在 1933 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，有机玻璃仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "有机玻璃把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_sbr",
    "name": "丁苯橡胶",
    "en": "SBR",
    "category": "material",
    "era": "electrical",
    "date": "1929 年",
    "year": 1929,
    "people": "",
    "place": "",
    "summary": "丁苯橡胶约 1929 年 出现，建立在 化学、经典力学 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "丁苯橡胶在 1929 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，丁苯橡胶仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "丁苯橡胶把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_nbr",
    "name": "丁腈橡胶",
    "en": "Nitrile Rubber",
    "category": "material",
    "era": "electrical",
    "date": "1931 年",
    "year": 1931,
    "people": "",
    "place": "",
    "summary": "丁腈橡胶约 1931 年 出现，建立在 化学、经典力学、镁合金 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics","mat_mgalloy"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "丁腈橡胶在 1931 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，丁腈橡胶仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "丁腈橡胶把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_silicone",
    "name": "硅橡胶",
    "en": "Silicone Rubber",
    "category": "material",
    "era": "electrical",
    "date": "1940 年",
    "year": 1940,
    "people": "",
    "place": "",
    "summary": "硅橡胶约 1940 年 出现，建立在 化学、经典力学、聚四氟乙烯 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics","mat_ptfe"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "硅橡胶在 1940 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，硅橡胶仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "硅橡胶把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_abs",
    "name": "ABS 树脂",
    "en": "ABS",
    "category": "material",
    "era": "electrical",
    "date": "1948 年",
    "year": 1948,
    "people": "",
    "place": "",
    "summary": "ABS 树脂约 1948 年 出现，建立在 化学、经典力学 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "ABS 树脂在 1948 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，ABS 树脂仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "ABS 树脂把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_pc",
    "name": "聚碳酸酯",
    "en": "Polycarbonate",
    "category": "material",
    "era": "info",
    "date": "1953 年",
    "year": 1953,
    "people": "",
    "place": "",
    "summary": "聚碳酸酯约 1953 年 出现，建立在 化学、经典力学 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "聚碳酸酯在 1953 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，聚碳酸酯仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "聚碳酸酯把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_pa",
    "name": "聚酰胺",
    "en": "Polyamide",
    "category": "material",
    "era": "electrical",
    "date": "1938 年",
    "year": 1938,
    "people": "",
    "place": "",
    "summary": "聚酰胺约 1938 年 出现，建立在 化学、经典力学 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "聚酰胺在 1938 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，聚酰胺仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "聚酰胺把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_pi",
    "name": "聚酰亚胺",
    "en": "Polyimide",
    "category": "material",
    "era": "info",
    "date": "1961 年",
    "year": 1961,
    "people": "",
    "place": "",
    "summary": "聚酰亚胺约 1961 年 出现，建立在 化学、经典力学、非晶合金 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics","mat_metglass"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "聚酰亚胺在 1961 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，聚酰亚胺仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "聚酰亚胺把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_peek",
    "name": "聚醚醚酮",
    "en": "PEEK",
    "category": "material",
    "era": "info",
    "date": "1978 年",
    "year": 1978,
    "people": "",
    "place": "",
    "summary": "聚醚醚酮约 1978 年 出现，建立在 化学、经典力学 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "聚醚醚酮在 1978 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，聚醚醚酮仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "聚醚醚酮把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_cf",
    "name": "碳纤维",
    "en": "Carbon Fiber",
    "category": "material",
    "era": "info",
    "date": "1958 年",
    "year": 1958,
    "people": "",
    "place": "",
    "summary": "碳纤维约 1958 年 成熟，建立在 化学、经典力学 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 碳纤维复合材料、航天飞机、可回收火箭 的发展铺平了道路。",
    "dependsOn": ["chemistry","physics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "碳纤维在 1958 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，碳纤维仍是 工具制造 的底层支撑，并持续影响 碳纤维复合材料、航天飞机、可回收火箭。"
      }
    ],
    "significance": "碳纤维把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 碳纤维复合材料、航天飞机、可回收火箭。"
  },
{
    "id": "mat_aramid",
    "name": "芳纶",
    "en": "Aramid",
    "category": "material",
    "era": "info",
    "date": "1965 年",
    "year": 1965,
    "people": "",
    "place": "",
    "summary": "芳纶在 1965 年 前后成形，依托 化学、经典力学 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 凯夫拉护具 等后续技术。",
    "dependsOn": ["chemistry","physics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "芳纶在 1965 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，芳纶仍是 工具制造 的底层支撑，并持续影响 凯夫拉护具。"
      }
    ],
    "significance": "芳纶把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 凯夫拉护具。"
  },
{
    "id": "mat_uhmwpe",
    "name": "超高分子量聚乙烯",
    "en": "UHMWPE",
    "category": "material",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "people": "",
    "place": "",
    "summary": "超高分子量聚乙烯约 1950 年 出现，建立在 化学、经典力学 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "超高分子量聚乙烯在 1950 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，超高分子量聚乙烯仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "超高分子量聚乙烯把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_conductingpoly",
    "name": "导电聚合物",
    "en": "Conducting Polymer",
    "category": "material",
    "era": "info",
    "date": "1977 年",
    "year": 1977,
    "people": "",
    "place": "",
    "summary": "导电聚合物约 1977 年 出现，建立在 化学、经典力学、泡沫陶瓷 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics","mat_foamceramic"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "导电聚合物在 1977 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，导电聚合物仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "导电聚合物把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_hydrogel",
    "name": "水凝胶",
    "en": "Hydrogel",
    "category": "material",
    "era": "info",
    "date": "1960 年",
    "year": 1960,
    "people": "",
    "place": "",
    "summary": "水凝胶约 1960 年 出现，建立在 化学、经典力学 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "水凝胶在 1960 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，水凝胶仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "水凝胶把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_ge",
    "name": "锗",
    "en": "Germanium",
    "category": "material",
    "era": "industrial",
    "date": "1886 年",
    "year": 1886,
    "people": "",
    "place": "",
    "summary": "锗约 1886 年 出现，建立在 化学、经典力学 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "锗在 1886 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，锗仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "锗把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_siliconw",
    "name": "单晶硅",
    "en": "Monocrystalline Silicon",
    "category": "material",
    "era": "electrical",
    "date": "1918 年",
    "year": 1918,
    "people": "",
    "place": "",
    "summary": "单晶硅约 1918 年 出现，建立在 化学、经典力学 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "单晶硅在 1918 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，单晶硅仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "单晶硅把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_polysi",
    "name": "多晶硅",
    "en": "Polycrystalline Silicon",
    "category": "material",
    "era": "electrical",
    "date": "1940 年",
    "year": 1940,
    "people": "",
    "place": "",
    "summary": "多晶硅约 1940 年 出现，建立在 化学、经典力学、聚四氟乙烯 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics","mat_ptfe"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "多晶硅在 1940 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，多晶硅仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "多晶硅把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_gaas",
    "name": "砷化镓",
    "en": "Gallium Arsenide",
    "category": "material",
    "era": "info",
    "date": "1960 年",
    "year": 1960,
    "people": "",
    "place": "",
    "summary": "砷化镓约 1960 年 出现，建立在 化学、经典力学 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "砷化镓在 1960 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，砷化镓仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "砷化镓把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_gan",
    "name": "氮化镓",
    "en": "Gallium Nitride",
    "category": "material",
    "era": "info",
    "date": "1969 年",
    "year": 1969,
    "people": "",
    "place": "",
    "summary": "氮化镓约 1969 年 出现，建立在 化学、经典力学 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "氮化镓在 1969 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，氮化镓仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "氮化镓把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_sicsemi",
    "name": "碳化硅半导体",
    "en": "SiC Semiconductor",
    "category": "material",
    "era": "info",
    "date": "1980 年",
    "year": 1980,
    "people": "",
    "place": "",
    "summary": "碳化硅半导体约 1980 年 成熟，建立在 化学、经典力学 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 有机半导体、高温超导 的发展铺平了道路。",
    "dependsOn": ["chemistry","physics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "碳化硅半导体在 1980 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，碳化硅半导体仍是 工具制造 的底层支撑，并持续影响 有机半导体、高温超导。"
      }
    ],
    "significance": "碳化硅半导体把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 有机半导体、高温超导。"
  },
{
    "id": "mat_gan2",
    "name": "氧化锌半导体",
    "en": "ZnO Semiconductor",
    "category": "material",
    "era": "electrical",
    "date": "1935 年",
    "year": 1935,
    "people": "",
    "place": "",
    "summary": "氧化锌半导体约 1935 年 出现，建立在 化学、经典力学、聚乙烯 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics","mat_pe"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "氧化锌半导体在 1935 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，氧化锌半导体仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "氧化锌半导体把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_inp",
    "name": "磷化铟",
    "en": "Indium Phosphide",
    "category": "material",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "people": "",
    "place": "",
    "summary": "磷化铟约 1950 年 出现，建立在 化学、经典力学 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "磷化铟在 1950 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，磷化铟仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "磷化铟把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_ito",
    "name": "透明导电膜",
    "en": "ITO Film",
    "category": "material",
    "era": "electrical",
    "date": "1907 年",
    "year": 1907,
    "people": "",
    "place": "",
    "summary": "透明导电膜约 1907 年 出现，建立在 化学、经典力学、高速钢 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics","mat_hss"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "透明导电膜在 1907 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，透明导电膜仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "透明导电膜把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_perovskite",
    "name": "钙钛矿材料",
    "en": "Perovskite",
    "category": "material",
    "era": "info",
    "date": "1970 年",
    "year": 1970,
    "people": "",
    "place": "",
    "summary": "钙钛矿材料约 1970 年 出现，建立在 化学、经典力学 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "钙钛矿材料在 1970 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，钙钛矿材料仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "钙钛矿材料把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_orgsc",
    "name": "有机半导体",
    "en": "Organic Semiconductor",
    "category": "material",
    "era": "info",
    "date": "1980 年",
    "year": 1980,
    "people": "",
    "place": "",
    "summary": "有机半导体约 1980 年 出现，建立在 化学、经典力学、碳化硅半导体 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics","mat_sicsemi"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "有机半导体在 1980 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，有机半导体仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "有机半导体把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_graphene",
    "name": "石墨烯",
    "en": "Graphene",
    "category": "material",
    "era": "intelligent",
    "date": "2004 年",
    "year": 2004,
    "people": "",
    "place": "",
    "summary": "石墨烯在 2004 年 前后成形，依托 化学、经典力学 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 二维材料 等后续技术。",
    "dependsOn": ["chemistry","physics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "石墨烯在 2004 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，石墨烯仍是 工具制造 的底层支撑，并持续影响 二维材料。"
      }
    ],
    "significance": "石墨烯把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 二维材料。"
  },
{
    "id": "mat_2d",
    "name": "二维材料",
    "en": "2D Materials",
    "category": "material",
    "era": "intelligent",
    "date": "2004 年",
    "year": 2004,
    "people": "",
    "place": "",
    "summary": "二维材料约 2004 年 出现，建立在 化学、经典力学、石墨烯 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics","mat_graphene"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "二维材料在 2004 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，二维材料仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "二维材料把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_plywood",
    "name": "胶合板",
    "en": "Plywood",
    "category": "material",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "胶合板约 1800 年 出现，建立在 化学、经典力学 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "胶合板在 1800 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，胶合板仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "胶合板把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_cfrp",
    "name": "碳纤维复合材料",
    "en": "Carbon Fiber Composite",
    "category": "material",
    "era": "info",
    "date": "1960 年",
    "year": 1960,
    "people": "",
    "place": "",
    "summary": "碳纤维复合材料约 1960 年 成熟，建立在 化学、经典力学、碳纤维 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 金属基复合材料、碳纤维混凝土 的发展铺平了道路。",
    "dependsOn": ["chemistry","physics","mat_cf"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "碳纤维复合材料在 1960 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，碳纤维复合材料仍是 工具制造 的底层支撑，并持续影响 金属基复合材料、碳纤维混凝土。"
      }
    ],
    "significance": "碳纤维复合材料把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 金属基复合材料、碳纤维混凝土。"
  },
{
    "id": "mat_frp",
    "name": "玻璃钢",
    "en": "FRP",
    "category": "material",
    "era": "electrical",
    "date": "1930 年",
    "year": 1930,
    "people": "",
    "place": "",
    "summary": "玻璃钢在 1930 年 前后成形，依托 化学、经典力学、聚酯 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 复材桥梁 等后续技术。",
    "dependsOn": ["chemistry","physics","mat_polyester"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "玻璃钢在 1930 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，玻璃钢仍是 工具制造 的底层支撑，并持续影响 复材桥梁。"
      }
    ],
    "significance": "玻璃钢把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 复材桥梁。"
  },
{
    "id": "mat_honeycomb",
    "name": "蜂窝夹层",
    "en": "Honeycomb Sandwich",
    "category": "material",
    "era": "electrical",
    "date": "1940 年",
    "year": 1940,
    "people": "",
    "place": "",
    "summary": "蜂窝夹层约 1940 年 出现，建立在 化学、经典力学、聚四氟乙烯 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics","mat_ptfe"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "蜂窝夹层在 1940 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，蜂窝夹层仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "蜂窝夹层把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_mmc",
    "name": "金属基复合材料",
    "en": "MMC",
    "category": "material",
    "era": "info",
    "date": "1960 年",
    "year": 1960,
    "people": "",
    "place": "",
    "summary": "金属基复合材料约 1960 年 出现，建立在 化学、经典力学、碳纤维复合材料 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics","mat_cfrp","materials","metallurgy","steel","mat_alalloy"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "金属基复合材料在 1960 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，金属基复合材料仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "金属基复合材料把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_cmc",
    "name": "陶瓷基复合材料",
    "en": "CMC",
    "category": "material",
    "era": "info",
    "date": "1970 年",
    "year": 1970,
    "people": "",
    "place": "",
    "summary": "陶瓷基复合材料约 1970 年 出现，建立在 化学、经典力学、材料科学 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics","materials","metallurgy","steel","mat_alalloy"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "陶瓷基复合材料在 1970 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，陶瓷基复合材料仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "陶瓷基复合材料把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_ltsc",
    "name": "低温超导",
    "en": "Low-Temp Superconductor",
    "category": "material",
    "era": "electrical",
    "date": "1911 年",
    "year": 1911,
    "people": "",
    "place": "",
    "summary": "低温超导在 1911 年 前后成形，依托 化学、经典力学 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 磁悬浮列车、内燃机车、自动驾驶仪 等后续技术。",
    "dependsOn": ["chemistry","physics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "低温超导在 1911 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，低温超导仍是 工具制造 的底层支撑，并持续影响 磁悬浮列车、内燃机车、自动驾驶仪。"
      }
    ],
    "significance": "低温超导把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 磁悬浮列车、内燃机车、自动驾驶仪。"
  },
{
    "id": "mat_htsc",
    "name": "高温超导",
    "en": "High-Temp Superconductor",
    "category": "material",
    "era": "info",
    "date": "1986 年",
    "year": 1986,
    "people": "",
    "place": "",
    "summary": "高温超导在 1986 年 前后成形，依托 化学、经典力学、碳化硅半导体 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 钇钡铜氧 等后续技术。",
    "dependsOn": ["chemistry","physics","mat_sicsemi"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "高温超导在 1986 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，高温超导仍是 工具制造 的底层支撑，并持续影响 钇钡铜氧。"
      }
    ],
    "significance": "高温超导把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 钇钡铜氧。"
  },
{
    "id": "mat_ybco",
    "name": "钇钡铜氧",
    "en": "YBCO",
    "category": "material",
    "era": "info",
    "date": "1987 年",
    "year": 1987,
    "people": "",
    "place": "",
    "summary": "钇钡铜氧约 1987 年 出现，建立在 化学、经典力学、高温超导 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics","mat_htsc"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "钇钡铜氧在 1987 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，钇钡铜氧仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "钇钡铜氧把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_hydrogenstorage",
    "name": "储氢合金",
    "en": "Hydrogen Storage Alloy",
    "category": "material",
    "era": "info",
    "date": "1970 年",
    "year": 1970,
    "people": "",
    "place": "",
    "summary": "储氢合金约 1970 年 出现，建立在 化学、经典力学、材料科学 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics","materials","metallurgy","steel","mat_alalloy"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "储氢合金在 1970 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，储氢合金仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "储氢合金把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_pcm",
    "name": "相变材料",
    "en": "Phase Change Material",
    "category": "material",
    "era": "info",
    "date": "1960 年",
    "year": 1960,
    "people": "",
    "place": "",
    "summary": "相变材料约 1960 年 出现，建立在 化学、经典力学 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "相变材料在 1960 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，相变材料仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "相变材料把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_thermoelec",
    "name": "热电材料",
    "en": "Thermoelectric Material",
    "category": "material",
    "era": "industrial",
    "date": "1821 年",
    "year": 1821,
    "people": "",
    "place": "",
    "summary": "热电材料约 1821 年 出现，建立在 化学、经典力学 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "热电材料在 1821 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，热电材料仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "热电材料把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_piezo",
    "name": "压电材料",
    "en": "Piezoelectric Material",
    "category": "material",
    "era": "industrial",
    "date": "1880 年",
    "year": 1880,
    "people": "",
    "place": "",
    "summary": "压电材料约 1880 年 出现，建立在 化学、经典力学 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "压电材料在 1880 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，压电材料仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "压电材料把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_ferrite",
    "name": "铁氧体",
    "en": "Ferrite",
    "category": "material",
    "era": "electrical",
    "date": "1909 年",
    "year": 1909,
    "people": "",
    "place": "",
    "summary": "铁氧体约 1909 年 出现，建立在 化学、经典力学、酚醛树脂 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics","mat_phenolic"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "铁氧体在 1909 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，铁氧体仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "铁氧体把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_softmag",
    "name": "非晶软磁",
    "en": "Amorphous Soft Magnet",
    "category": "material",
    "era": "info",
    "date": "1960 年",
    "year": 1960,
    "people": "",
    "place": "",
    "summary": "非晶软磁约 1960 年 出现，建立在 化学、经典力学、材料科学 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics","materials","metallurgy","steel","mat_alalloy"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "非晶软磁在 1960 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，非晶软磁仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "非晶软磁把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_selfheal",
    "name": "自修复材料",
    "en": "Self-Healing Material",
    "category": "material",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "自修复材料约 2000 年 出现，建立在 化学、经典力学、仿生材料 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics","mat_bioinspired","materials"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "自修复材料在 2000 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，自修复材料仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "自修复材料把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_bioinspired",
    "name": "仿生材料",
    "en": "Bioinspired Material",
    "category": "material",
    "era": "info",
    "date": "1990 年",
    "year": 1990,
    "people": "",
    "place": "",
    "summary": "仿生材料在 1990 年 前后成形，依托 化学、经典力学 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 自修复材料 等后续技术。",
    "dependsOn": ["chemistry","physics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "仿生材料在 1990 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，仿生材料仍是 工具制造 的底层支撑，并持续影响 自修复材料。"
      }
    ],
    "significance": "仿生材料把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 自修复材料。"
  },
{
    "id": "mat_biomat",
    "name": "生物材料",
    "en": "Biomaterial",
    "category": "material",
    "era": "info",
    "date": "1960 年",
    "year": 1960,
    "people": "",
    "place": "",
    "summary": "生物材料约 1960 年 出现，建立在 化学、经典力学 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "生物材料在 1960 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，生物材料仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "生物材料把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_degradable",
    "name": "可降解材料",
    "en": "Biodegradable Material",
    "category": "material",
    "era": "info",
    "date": "1980 年",
    "year": 1980,
    "people": "",
    "place": "",
    "summary": "可降解材料约 1980 年 出现，建立在 化学、经典力学 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "可降解材料在 1980 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，可降解材料仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "可降解材料把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_stealth",
    "name": "吸波隐身材料",
    "en": "Radar-Absorbing Material",
    "category": "material",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "people": "",
    "place": "",
    "summary": "吸波隐身材料约 1950 年 出现，建立在 化学、经典力学 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "吸波隐身材料在 1950 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，吸波隐身材料仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "吸波隐身材料把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_insulation",
    "name": "隔热材料",
    "en": "Thermal Insulation",
    "category": "material",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "隔热材料约 1800 年 出现，建立在 化学、经典力学 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "隔热材料在 1800 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，隔热材料仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "隔热材料把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_foammetal",
    "name": "泡沫金属",
    "en": "Metal Foam",
    "category": "material",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "people": "",
    "place": "",
    "summary": "泡沫金属约 1950 年 出现，建立在 化学、经典力学 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "泡沫金属在 1950 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，泡沫金属仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "泡沫金属把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_blastfurnace",
    "name": "高炉炼铁",
    "en": "Blast Furnace",
    "category": "material",
    "era": "classical",
    "date": "公元前 500 年",
    "year": -500,
    "people": "",
    "place": "",
    "summary": "高炉炼铁在 公元前 500 年 前后成形，依托 冶铁 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 螺纹连接、螺纹、起重机 等后续技术。",
    "dependsOn": ["iron_smelting"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "古典时代",
        "text": "高炉炼铁在 公元前 500 年 前后出现，依托 冶铁 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，高炉炼铁仍是 工具制造 的底层支撑，并持续影响 螺纹连接、螺纹、起重机。"
      }
    ],
    "significance": "高炉炼铁把 冶铁 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 螺纹连接、螺纹、起重机。"
  },
{
    "id": "mat_cupola",
    "name": "冲天炉",
    "en": "Cupola Furnace",
    "category": "material",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "冲天炉在 1800 年 前后成形，依托 化学、经典力学 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 感应熔炼 等后续技术。",
    "dependsOn": ["chemistry","physics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "冲天炉在 1800 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，冲天炉仍是 工具制造 的底层支撑，并持续影响 感应熔炼。"
      }
    ],
    "significance": "冲天炉把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 感应熔炼。"
  },
{
    "id": "mat_inductionmelt",
    "name": "感应熔炼",
    "en": "Induction Melting",
    "category": "material",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "感应熔炼约 1800 年 出现，建立在 化学、经典力学、冲天炉 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics","mat_cupola"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "感应熔炼在 1800 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，感应熔炼仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "感应熔炼把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_continuouscast",
    "name": "连续铸造",
    "en": "Continuous Casting",
    "category": "material",
    "era": "industrial",
    "date": "1840 年",
    "year": 1840,
    "people": "",
    "place": "",
    "summary": "连续铸造约 1840 年 出现，建立在 化学、经典力学 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "连续铸造在 1840 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，连续铸造仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "连续铸造把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_esr",
    "name": "电渣重熔",
    "en": "Electroslag Remelting",
    "category": "material",
    "era": "electrical",
    "date": "1940 年",
    "year": 1940,
    "people": "",
    "place": "",
    "summary": "电渣重熔约 1940 年 出现，建立在 化学、经典力学、聚四氟乙烯 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics","mat_ptfe"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "电渣重熔在 1940 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，电渣重熔仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "电渣重熔把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_metal3dp",
    "name": "金属",
    "en": "Metal 3D Printing",
    "category": "material",
    "era": "info",
    "date": "1990 年",
    "year": 1990,
    "people": "",
    "place": "",
    "summary": "金属在 1990 年 前后成形，依托 化学、经典力学 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 粘结剂喷射 等后续技术。",
    "dependsOn": ["chemistry","physics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "金属在 1990 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，金属仍是 工具制造 的底层支撑，并持续影响 粘结剂喷射。"
      }
    ],
    "significance": "金属把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 粘结剂喷射。"
  },
{
    "id": "mat_binderjet",
    "name": "粘结剂喷射",
    "en": "Binder Jetting",
    "category": "material",
    "era": "info",
    "date": "1990 年",
    "year": 1990,
    "people": "",
    "place": "",
    "summary": "粘结剂喷射约 1990 年 出现，建立在 化学、经典力学、金属 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics","mat_metal3dp"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "粘结剂喷射在 1990 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，粘结剂喷射仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "粘结剂喷射把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_ded",
    "name": "定向能量沉积",
    "en": "Directed Energy Deposition",
    "category": "material",
    "era": "info",
    "date": "1990 年",
    "year": 1990,
    "people": "",
    "place": "",
    "summary": "定向能量沉积约 1990 年 出现，建立在 化学、经典力学 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "定向能量沉积在 1990 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，定向能量沉积仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "定向能量沉积把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_coldspray",
    "name": "冷喷涂",
    "en": "Cold Spray",
    "category": "material",
    "era": "info",
    "date": "1980 年",
    "year": 1980,
    "people": "",
    "place": "",
    "summary": "冷喷涂约 1980 年 成熟，建立在 化学、经典力学 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 超音速火焰喷涂 的发展铺平了道路。",
    "dependsOn": ["chemistry","physics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "冷喷涂在 1980 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，冷喷涂仍是 工具制造 的底层支撑，并持续影响 超音速火焰喷涂。"
      }
    ],
    "significance": "冷喷涂把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 超音速火焰喷涂。"
  },
{
    "id": "mat_thermalspray",
    "name": "热喷涂",
    "en": "Thermal Spray",
    "category": "material",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "热喷涂约 1900 年 出现，建立在 化学、经典力学 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "热喷涂在 1900 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，热喷涂仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "热喷涂把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_hvof",
    "name": "超音速火焰喷涂",
    "en": "HVOF",
    "category": "material",
    "era": "info",
    "date": "1980 年",
    "year": 1980,
    "people": "",
    "place": "",
    "summary": "超音速火焰喷涂约 1980 年 成熟，建立在 化学、经典力学、冷喷涂 之上完成关键突破；其能力延伸到 工具制造、结构件，并为 激光熔覆 的发展铺平了道路。",
    "dependsOn": ["chemistry","physics","mat_coldspray"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "超音速火焰喷涂在 1980 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，超音速火焰喷涂仍是 工具制造 的底层支撑，并持续影响 激光熔覆。"
      }
    ],
    "significance": "超音速火焰喷涂把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 激光熔覆。"
  },
{
    "id": "mat_laserclad",
    "name": "激光熔覆",
    "en": "Laser Cladding",
    "category": "material",
    "era": "info",
    "date": "1980 年",
    "year": 1980,
    "people": "",
    "place": "",
    "summary": "激光熔覆约 1980 年 出现，建立在 化学、经典力学、超音速火焰喷涂 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics","mat_hvof"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "激光熔覆在 1980 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，激光熔覆仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "激光熔覆把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_nitriding",
    "name": "渗氮",
    "en": "Nitriding",
    "category": "material",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "渗氮在 1900 年 前后成形，依托 化学、经典力学 把 工具制造、结构件 落到实处，并成为 材料体系 中承上启下的一环，直接支撑了 渗硼 等后续技术。",
    "dependsOn": ["chemistry","physics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "渗氮在 1900 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，渗氮仍是 工具制造 的底层支撑，并持续影响 渗硼。"
      }
    ],
    "significance": "渗氮把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点，并直接催生了 渗硼。"
  },
{
    "id": "mat_boriding",
    "name": "渗硼",
    "en": "Boriding",
    "category": "material",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "渗硼约 1900 年 出现，建立在 化学、经典力学、渗氮 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics","mat_nitriding"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "渗硼在 1900 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，渗硼仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "渗硼把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_ebm",
    "name": "电子束熔融",
    "en": "Electron Beam Melting",
    "category": "material",
    "era": "info",
    "date": "1990 年",
    "year": 1990,
    "people": "",
    "place": "",
    "summary": "电子束熔融约 1990 年 出现，建立在 化学、经典力学 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "电子束熔融在 1990 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，电子束熔融仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "电子束熔融把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_sps",
    "name": "放电等离子烧结",
    "en": "Spark Plasma Sintering",
    "category": "material",
    "era": "info",
    "date": "1960 年",
    "year": 1960,
    "people": "",
    "place": "",
    "summary": "放电等离子烧结约 1960 年 出现，建立在 化学、经典力学 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "放电等离子烧结在 1960 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，放电等离子烧结仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "放电等离子烧结把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_mof",
    "name": "金属有机框架",
    "en": "Metal-Organic Framework",
    "category": "material",
    "era": "info",
    "date": "1990 年",
    "year": 1990,
    "people": "",
    "place": "",
    "summary": "金属有机框架约 1990 年 出现，建立在 化学、经典力学 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "金属有机框架在 1990 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，金属有机框架仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "金属有机框架把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mat_zeolite",
    "name": "沸石分子筛",
    "en": "Zeolite",
    "category": "material",
    "era": "earlymodern",
    "date": "1700 年",
    "year": 1700,
    "people": "",
    "place": "",
    "summary": "沸石分子筛约 1700 年 出现，建立在 化学、经典力学 之上；它把 工具制造、结构件 变成可稳定复现的能力，是 材料体系 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","physics"],
    "enables": [],
    "applications": [
      "工具制造",
      "结构件",
      "电子器件"
    ],
    "views": [
      {
        "period": "近代早期",
        "text": "沸石分子筛在 1700 年 前后出现，依托 化学 解决了 材料体系 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，沸石分子筛仍是 工具制造 的底层支撑，并作为 材料体系 的基础能力持续发挥作用。"
      }
    ],
    "significance": "沸石分子筛把 化学 与 工具制造 连接起来，是 材料体系 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "ene_charcoal",
    "name": "木炭",
    "en": "Charcoal",
    "category": "energy",
    "era": "prehistoric",
    "date": "公元前 4000 年",
    "year": -4000,
    "people": "",
    "place": "",
    "summary": "木炭约 公元前 4000 年 成熟，建立在 木作、窑、用火 之上完成关键突破；其能力延伸到 动力输出、照明加热，并为 锻造、砂型铸造、失蜡法 的发展铺平了道路。",
    "dependsOn": ["woodworking","kiln","fire"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "史前时代",
        "text": "木炭在 公元前 4000 年 前后出现，依托 木作 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，木炭仍是 动力输出 的底层支撑，并持续影响 锻造、砂型铸造、失蜡法。"
      }
    ],
    "significance": "木炭把 木作 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 锻造、砂型铸造、失蜡法。"
  },
{
    "id": "ene_coal",
    "name": "煤炭开采",
    "en": "Coal Mining",
    "category": "energy",
    "era": "ancient",
    "date": "公元前 1000 年",
    "year": -1000,
    "people": "",
    "place": "",
    "summary": "煤炭开采约 公元前 1000 年 出现，建立在 石器 之上；它把 动力输出、照明加热 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["stone_tools"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "煤炭开采在 公元前 1000 年 前后出现，依托 石器 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，煤炭开采仍是 动力输出 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "煤炭开采把 石器 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "ene_coke",
    "name": "焦炭",
    "en": "Coke",
    "category": "energy",
    "era": "earlymodern",
    "date": "1700 年",
    "year": 1700,
    "people": "",
    "place": "",
    "summary": "焦炭约 1700 年 出现，建立在 经典力学、化学、煤炭开采与利用 之上；它把 动力输出、照明加热 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["physics","chemistry","coal_mining"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "近代早期",
        "text": "焦炭在 1700 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，焦炭仍是 动力输出 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "焦炭把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "ene_oil",
    "name": "石油开采",
    "en": "Oil Extraction",
    "category": "energy",
    "era": "industrial",
    "date": "1850 年",
    "year": 1850,
    "people": "",
    "place": "",
    "summary": "石油开采约 1850 年 出现，建立在 经典力学、化学 之上；它把 动力输出、照明加热 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["physics","chemistry"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "石油开采在 1850 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，石油开采仍是 动力输出 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "石油开采把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "ene_natgas",
    "name": "天然气利用",
    "en": "Natural Gas",
    "category": "energy",
    "era": "industrial",
    "date": "1820 年",
    "year": 1820,
    "people": "",
    "place": "",
    "summary": "天然气利用约 1820 年 出现，建立在 经典力学、化学 之上；它把 动力输出、照明加热 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["physics","chemistry"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "天然气利用在 1820 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，天然气利用仍是 动力输出 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "天然气利用把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "ene_oilshale",
    "name": "油页岩",
    "en": "Oil Shale",
    "category": "energy",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "油页岩约 1800 年 成熟，建立在 经典力学、化学 之上完成关键突破；其能力延伸到 动力输出、照明加热，并为 斯特林发动机 的发展铺平了道路。",
    "dependsOn": ["physics","chemistry"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "油页岩在 1800 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，油页岩仍是 动力输出 的底层支撑，并持续影响 斯特林发动机。"
      }
    ],
    "significance": "油页岩把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 斯特林发动机。"
  },
{
    "id": "ene_biofuel",
    "name": "生物燃料",
    "en": "Biofuel",
    "category": "energy",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "生物燃料约 1800 年 出现，建立在 经典力学、化学、蒸汽机 之上；它把 动力输出、照明加热 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["physics","chemistry","steam_engine"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "生物燃料在 1800 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，生物燃料仍是 动力输出 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "生物燃料把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "ene_ethanol",
    "name": "燃料乙醇",
    "en": "Ethanol Fuel",
    "category": "energy",
    "era": "industrial",
    "date": "1850 年",
    "year": 1850,
    "people": "",
    "place": "",
    "summary": "燃料乙醇约 1850 年 出现，建立在 经典力学、化学 之上；它把 动力输出、照明加热 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["physics","chemistry"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "燃料乙醇在 1850 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，燃料乙醇仍是 动力输出 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "燃料乙醇把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "ene_biodiesel",
    "name": "生物柴油",
    "en": "Biodiesel",
    "category": "energy",
    "era": "industrial",
    "date": "1890 年",
    "year": 1890,
    "people": "",
    "place": "",
    "summary": "生物柴油约 1890 年 出现，建立在 经典力学、化学 之上；它把 动力输出、照明加热 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["physics","chemistry"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "生物柴油在 1890 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，生物柴油仍是 动力输出 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "生物柴油把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "ene_biomass",
    "name": "生物质气化",
    "en": "Biomass Gasification",
    "category": "energy",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "生物质气化约 1800 年 出现，建立在 经典力学、化学、蒸汽机 之上；它把 动力输出、照明加热 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["physics","chemistry","steam_engine"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "生物质气化在 1800 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，生物质气化仍是 动力输出 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "生物质气化把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "ene_hydro",
    "name": "水力利用",
    "en": "Hydropower",
    "category": "energy",
    "era": "ancient",
    "date": "公元前 3000 年",
    "year": -3000,
    "people": "",
    "place": "",
    "summary": "水力利用在 公元前 3000 年 前后成形，依托 轮子 把 动力输出、照明加热 落到实处，并成为 能量形式 中承上启下的一环，直接支撑了 水车 等后续技术。",
    "dependsOn": ["wheel"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "水力利用在 公元前 3000 年 前后出现，依托 轮子 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，水力利用仍是 动力输出 的底层支撑，并持续影响 水车。"
      }
    ],
    "significance": "水力利用把 轮子 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 水车。"
  },

{
    "id": "ene_waterturbine",
    "name": "水轮机",
    "en": "Water Turbine",
    "category": "energy",
    "era": "industrial",
    "date": "1820 年",
    "year": 1820,
    "people": "",
    "place": "",
    "summary": "水轮机约 1820 年 出现，建立在 经典力学、化学 之上；它把 动力输出、照明加热 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["physics","chemistry"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "水轮机在 1820 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，水轮机仍是 动力输出 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "水轮机把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "ene_wind",
    "name": "风车",
    "en": "Windmill",
    "category": "energy",
    "era": "medieval",
    "date": "900 年",
    "year": 900,
    "people": "",
    "place": "",
    "summary": "风车约 900 年 出现，建立在 轮子 之上；它把 动力输出、照明加热 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["wheel"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "中世纪",
        "text": "风车在 900 年 前后出现，依托 轮子 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，风车仍是 动力输出 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "风车把 轮子 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "ene_windturbine",
    "name": "风力发电机",
    "en": "Wind Turbine",
    "category": "energy",
    "era": "industrial",
    "date": "1887 年",
    "year": 1887,
    "people": "",
    "place": "",
    "summary": "风力发电机约 1887 年 出现，建立在 经典力学、化学 之上；它把 动力输出、照明加热 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["physics","chemistry"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "风力发电机在 1887 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，风力发电机仍是 动力输出 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "风力发电机把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "ene_geothermal",
    "name": "地热利用",
    "en": "Geothermal",
    "category": "energy",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "地热利用约 1800 年 出现，建立在 经典力学、化学、蒸汽机 之上；它把 动力输出、照明加热 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["physics","chemistry","steam_engine"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "地热利用在 1800 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，地热利用仍是 动力输出 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "地热利用把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "ene_tidal",
    "name": "潮汐能",
    "en": "Tidal Power",
    "category": "energy",
    "era": "info",
    "date": "1960 年",
    "year": 1960,
    "people": "",
    "place": "",
    "summary": "潮汐能在 1960 年 前后成形，依托 经典力学、化学 把 动力输出、照明加热 落到实处，并成为 能量形式 中承上启下的一环，直接支撑了 托卡马克、空间太阳能 等后续技术。",
    "dependsOn": ["physics","chemistry"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "潮汐能在 1960 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，潮汐能仍是 动力输出 的底层支撑，并持续影响 托卡马克、空间太阳能。"
      }
    ],
    "significance": "潮汐能把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 托卡马克、空间太阳能。"
  },
{
    "id": "mat_wave",
    "name": "波浪能",
    "en": "Wave Energy",
    "category": "energy",
    "era": "info",
    "date": "1970 年",
    "year": 1970,
    "people": "",
    "place": "",
    "summary": "波浪能约 1970 年 成熟，建立在 经典力学、化学 之上完成关键突破；其能力延伸到 动力输出、照明加热，并为 聚光太阳能、熔盐储热、风电场 的发展铺平了道路。",
    "dependsOn": ["physics","chemistry"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "波浪能在 1970 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，波浪能仍是 动力输出 的底层支撑，并持续影响 聚光太阳能、熔盐储热、风电场。"
      }
    ],
    "significance": "波浪能把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 聚光太阳能、熔盐储热、风电场。"
  },
{
    "id": "ene_solarthermal",
    "name": "太阳能热利用",
    "en": "Solar Thermal",
    "category": "energy",
    "era": "earlymodern",
    "date": "1700 年",
    "year": 1700,
    "people": "",
    "place": "",
    "summary": "太阳能热利用在 1700 年 前后成形，依托 经典力学、化学 把 动力输出、照明加热 落到实处，并成为 能量形式 中承上启下的一环，直接支撑了 绿色建筑、零能耗建筑 等后续技术。",
    "dependsOn": ["physics","chemistry"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "近代早期",
        "text": "太阳能热利用在 1700 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，太阳能热利用仍是 动力输出 的底层支撑，并持续影响 绿色建筑、零能耗建筑。"
      }
    ],
    "significance": "太阳能热利用把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 绿色建筑、零能耗建筑。"
  },
{
    "id": "ene_pv",
    "name": "光伏电池",
    "en": "Photovoltaic",
    "category": "energy",
    "era": "info",
    "date": "1954 年",
    "year": 1954,
    "people": "",
    "place": "",
    "summary": "光伏电池约 1954 年 出现，建立在 经典力学、化学、太阳能光伏 之上；它把 动力输出、照明加热 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["physics","chemistry","solar"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "光伏电池在 1954 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，光伏电池仍是 动力输出 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "光伏电池把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "ene_csp",
    "name": "聚光太阳能",
    "en": "Concentrated Solar",
    "category": "energy",
    "era": "info",
    "date": "1980 年",
    "year": 1980,
    "people": "",
    "place": "",
    "summary": "聚光太阳能在 1980 年 前后成形，依托 经典力学、化学、波浪能 把 动力输出、照明加热 落到实处，并成为 能量形式 中承上启下的一环，直接支撑了 熔盐储热 等后续技术。",
    "dependsOn": ["physics","chemistry","mat_wave"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "聚光太阳能在 1980 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，聚光太阳能仍是 动力输出 的底层支撑，并持续影响 熔盐储热。"
      }
    ],
    "significance": "聚光太阳能把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 熔盐储热。"
  },
{
    "id": "ene_steamturbine",
    "name": "蒸汽轮机",
    "en": "Steam Turbine",
    "category": "energy",
    "era": "industrial",
    "date": "1884 年",
    "year": 1884,
    "people": "",
    "place": "",
    "summary": "蒸汽轮机约 1884 年 出现，建立在 经典力学、化学 之上；它把 动力输出、照明加热 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["physics","chemistry"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "蒸汽轮机在 1884 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，蒸汽轮机仍是 动力输出 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "蒸汽轮机把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "ene_gasturbine",
    "name": "燃气轮机",
    "en": "Gas Turbine",
    "category": "energy",
    "era": "electrical",
    "date": "1939 年",
    "year": 1939,
    "people": "",
    "place": "",
    "summary": "燃气轮机在 1939 年 前后成形，依托 经典力学、化学、喷气发动机 把 动力输出、照明加热 落到实处，并成为 能量形式 中承上启下的一环，直接支撑了 直升机、气垫船 等后续技术。",
    "dependsOn": ["physics","chemistry","ene_jet"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "燃气轮机在 1939 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，燃气轮机仍是 动力输出 的底层支撑，并持续影响 直升机、气垫船。"
      }
    ],
    "significance": "燃气轮机把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 直升机、气垫船。"
  },
{
    "id": "ene_stirling",
    "name": "斯特林发动机",
    "en": "Stirling Engine",
    "category": "energy",
    "era": "industrial",
    "date": "1816 年",
    "year": 1816,
    "people": "",
    "place": "",
    "summary": "斯特林发动机约 1816 年 出现，建立在 经典力学、化学、油页岩 之上；它把 动力输出、照明加热 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["physics","chemistry","ene_oilshale"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "斯特林发动机在 1816 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，斯特林发动机仍是 动力输出 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "斯特林发动机把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "ene_jet",
    "name": "喷气发动机",
    "en": "Jet Engine",
    "category": "energy",
    "era": "electrical",
    "date": "1937 年",
    "year": 1937,
    "people": "",
    "place": "",
    "summary": "喷气发动机约 1937 年 成熟，建立在 经典力学、化学、压气机 之上完成关键突破；其能力延伸到 动力输出、照明加热，并为 燃气轮机、喷气客机、超音速客机 的发展铺平了道路。",
    "dependsOn": ["physics","chemistry","jet_compressor","jet_turbine"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "喷气发动机在 1937 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，喷气发动机仍是 动力输出 的底层支撑，并持续影响 燃气轮机、喷气客机、超音速客机。"
      }
    ],
    "significance": "喷气发动机把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 燃气轮机、喷气客机、超音速客机。"
  },
{
    "id": "ene_rocketengine",
    "name": "火箭发动机",
    "en": "Rocket Engine",
    "category": "energy",
    "era": "electrical",
    "date": "1926 年",
    "year": 1926,
    "people": "",
    "place": "",
    "summary": "火箭发动机在 1926 年 前后成形，依托 经典力学、化学 把 动力输出、照明加热 落到实处，并成为 能量形式 中承上启下的一环，直接支撑了 运载火箭、液体火箭发动机 等后续技术。",
    "dependsOn": ["physics","chemistry"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "火箭发动机在 1926 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，火箭发动机仍是 动力输出 的底层支撑，并持续影响 运载火箭、液体火箭发动机。"
      }
    ],
    "significance": "火箭发动机把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 运载火箭、液体火箭发动机。"
  },
{
    "id": "ene_leadacid",
    "name": "铅酸电池",
    "en": "Lead-Acid Battery",
    "category": "energy",
    "era": "industrial",
    "date": "1859 年",
    "year": 1859,
    "people": "",
    "place": "",
    "summary": "铅酸电池约 1859 年 成熟，建立在 经典力学、化学 之上完成关键突破；其能力延伸到 动力输出、照明加热，并为 钠离子电池、锌空气电池、钾离子电池 的发展铺平了道路。",
    "dependsOn": ["physics","chemistry"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "铅酸电池在 1859 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，铅酸电池仍是 动力输出 的底层支撑，并持续影响 钠离子电池、锌空气电池、钾离子电池。"
      }
    ],
    "significance": "铅酸电池把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 钠离子电池、锌空气电池、钾离子电池。"
  },
{
    "id": "ene_nicd",
    "name": "镍镉电池",
    "en": "NiCd Battery",
    "category": "energy",
    "era": "industrial",
    "date": "1899 年",
    "year": 1899,
    "people": "",
    "place": "",
    "summary": "镍镉电池约 1899 年 出现，建立在 经典力学、化学 之上；它把 动力输出、照明加热 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["physics","chemistry"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "镍镉电池在 1899 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，镍镉电池仍是 动力输出 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "镍镉电池把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "ene_nimh",
    "name": "镍氢电池",
    "en": "NiMH Battery",
    "category": "energy",
    "era": "info",
    "date": "1989 年",
    "year": 1989,
    "people": "",
    "place": "",
    "summary": "镍氢电池在 1989 年 前后成形，依托 经典力学、化学 把 动力输出、照明加热 落到实处，并成为 能量形式 中承上启下的一环，直接支撑了 电池储能系统 等后续技术。",
    "dependsOn": ["physics","chemistry"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "镍氢电池在 1989 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，镍氢电池仍是 动力输出 的底层支撑，并持续影响 电池储能系统。"
      }
    ],
    "significance": "镍氢电池把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 电池储能系统。"
  },
{
    "id": "ene_liion",
    "name": "锂离子电池",
    "en": "Li-ion Battery",
    "category": "energy",
    "era": "info",
    "date": "1991 年",
    "year": 1991,
    "people": "",
    "place": "",
    "summary": "锂离子电池约 1991 年 成熟，建立在 经典力学、化学 之上完成关键突破；其能力延伸到 动力输出、照明加热，并为 锂聚合物电池、充电站 的发展铺平了道路。",
    "dependsOn": ["physics","chemistry"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "锂离子电池在 1991 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，锂离子电池仍是 动力输出 的底层支撑，并持续影响 锂聚合物电池、充电站。"
      }
    ],
    "significance": "锂离子电池把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 锂聚合物电池、充电站。"
  },
{
    "id": "ene_lipoly",
    "name": "锂聚合物电池",
    "en": "Li-Po Battery",
    "category": "energy",
    "era": "info",
    "date": "1996 年",
    "year": 1996,
    "people": "",
    "place": "",
    "summary": "锂聚合物电池约 1996 年 出现，建立在 经典力学、化学、锂离子电池 之上；它把 动力输出、照明加热 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["physics","chemistry","ene_liion"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "锂聚合物电池在 1996 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，锂聚合物电池仍是 动力输出 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "锂聚合物电池把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "ene_nas",
    "name": "钠离子电池",
    "en": "Sodium-Ion Battery",
    "category": "energy",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "钠离子电池在 2010 年 前后成形，依托 经典力学、化学、智能电网 把 动力输出、照明加热 落到实处，并成为 能量形式 中承上启下的一环，直接支撑了 固态电池、摩擦纳米发电 等后续技术。",
    "dependsOn": ["physics","chemistry","ene_smartgrid","battery","ene_leadacid","electricity"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "钠离子电池在 2010 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，钠离子电池仍是 动力输出 的底层支撑，并持续影响 固态电池、摩擦纳米发电。"
      }
    ],
    "significance": "钠离子电池把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 固态电池、摩擦纳米发电。"
  },
{
    "id": "ene_solidstate",
    "name": "固态电池",
    "en": "Solid-State Battery",
    "category": "energy",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "固态电池约 2010 年 出现，建立在 经典力学、化学、智能电网 之上；它把 动力输出、照明加热 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["physics","chemistry","ene_smartgrid","ene_nas","battery","materials"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "固态电池在 2010 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，固态电池仍是 动力输出 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "固态电池把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "ene_fuelcell",
    "name": "燃料电池",
    "en": "Fuel Cell",
    "category": "energy",
    "era": "industrial",
    "date": "1839 年",
    "year": 1839,
    "people": "",
    "place": "",
    "summary": "燃料电池约 1839 年 出现，建立在 经典力学、化学 之上；它把 动力输出、照明加热 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["physics","chemistry"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "燃料电池在 1839 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，燃料电池仍是 动力输出 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "燃料电池把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "ene_h2fc",
    "name": "氢燃料电池",
    "en": "Hydrogen Fuel Cell",
    "category": "energy",
    "era": "info",
    "date": "1960 年",
    "year": 1960,
    "people": "",
    "place": "",
    "summary": "氢燃料电池约 1960 年 成熟，建立在 经典力学、化学 之上完成关键突破；其能力延伸到 动力输出、照明加热，并为 燃料电池卡车 的发展铺平了道路。",
    "dependsOn": ["physics","chemistry"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "氢燃料电池在 1960 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，氢燃料电池仍是 动力输出 的底层支撑，并持续影响 燃料电池卡车。"
      }
    ],
    "significance": "氢燃料电池把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 燃料电池卡车。"
  },
{
    "id": "ene_zincair",
    "name": "锌空气电池",
    "en": "Zinc-Air Battery",
    "category": "energy",
    "era": "electrical",
    "date": "1932 年",
    "year": 1932,
    "people": "",
    "place": "",
    "summary": "锌空气电池约 1932 年 出现，建立在 经典力学、化学、电池 之上；它把 动力输出、照明加热 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["physics","chemistry","battery","ene_leadacid","electricity"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "锌空气电池在 1932 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，锌空气电池仍是 动力输出 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "锌空气电池把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "ene_flow",
    "name": "液流电池",
    "en": "Flow Battery",
    "category": "energy",
    "era": "info",
    "date": "1970 年",
    "year": 1970,
    "people": "",
    "place": "",
    "summary": "液流电池约 1970 年 出现，建立在 经典力学、化学、托卡马克 之上；它把 动力输出、照明加热 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["physics","chemistry","ene_tokamak"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "液流电池在 1970 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，液流电池仍是 动力输出 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "液流电池把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "ene_supercap",
    "name": "超级电容",
    "en": "Supercapacitor",
    "category": "energy",
    "era": "info",
    "date": "1957 年",
    "year": 1957,
    "people": "",
    "place": "",
    "summary": "超级电容约 1957 年 成熟，建立在 经典力学、化学 之上完成关键突破；其能力延伸到 动力输出、照明加热，并为 电磁轨道炮 的发展铺平了道路。",
    "dependsOn": ["physics","chemistry"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "超级电容在 1957 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，超级电容仍是 动力输出 的底层支撑，并持续影响 电磁轨道炮。"
      }
    ],
    "significance": "超级电容把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 电磁轨道炮。"
  },
{
    "id": "ene_flywheel",
    "name": "飞轮储能",
    "en": "Flywheel Storage",
    "category": "energy",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "people": "",
    "place": "",
    "summary": "飞轮储能在 1950 年 前后成形，依托 经典力学、化学 把 动力输出、照明加热 落到实处，并成为 能量形式 中承上启下的一环，直接支撑了 核聚变、快中子增殖堆 等后续技术。",
    "dependsOn": ["physics","chemistry"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "飞轮储能在 1950 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，飞轮储能仍是 动力输出 的底层支撑，并持续影响 核聚变、快中子增殖堆。"
      }
    ],
    "significance": "飞轮储能把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 核聚变、快中子增殖堆。"
  },
{
    "id": "ene_pumped",
    "name": "抽水蓄能",
    "en": "Pumped Storage",
    "category": "energy",
    "era": "industrial",
    "date": "1890 年",
    "year": 1890,
    "people": "",
    "place": "",
    "summary": "抽水蓄能约 1890 年 出现，建立在 经典力学、化学 之上；它把 动力输出、照明加热 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["physics","chemistry"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "抽水蓄能在 1890 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，抽水蓄能仍是 动力输出 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "抽水蓄能把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "ene_caes",
    "name": "压缩空气储能",
    "en": "CAES",
    "category": "energy",
    "era": "electrical",
    "date": "1949 年",
    "year": 1949,
    "people": "",
    "place": "",
    "summary": "压缩空气储能约 1949 年 出现，建立在 经典力学、化学 之上；它把 动力输出、照明加热 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["physics","chemistry"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "压缩空气储能在 1949 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，压缩空气储能仍是 动力输出 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "压缩空气储能把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "ene_molten",
    "name": "熔盐储热",
    "en": "Molten Salt Storage",
    "category": "energy",
    "era": "info",
    "date": "1980 年",
    "year": 1980,
    "people": "",
    "place": "",
    "summary": "熔盐储热约 1980 年 出现，建立在 经典力学、化学、波浪能 之上；它把 动力输出、照明加热 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["physics","chemistry","mat_wave","ene_csp"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "熔盐储热在 1980 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，熔盐储热仍是 动力输出 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "熔盐储热把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "ene_h2storage",
    "name": "储氢技术",
    "en": "Hydrogen Storage",
    "category": "energy",
    "era": "info",
    "date": "1970 年",
    "year": 1970,
    "people": "",
    "place": "",
    "summary": "储氢技术约 1970 年 出现，建立在 经典力学、化学、托卡马克 之上；它把 动力输出、照明加热 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["physics","chemistry","ene_tokamak"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "储氢技术在 1970 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，储氢技术仍是 动力输出 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "储氢技术把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "ene_transformer",
    "name": "变压器",
    "en": "Transformer",
    "category": "energy",
    "era": "industrial",
    "date": "1885 年",
    "year": 1885,
    "people": "",
    "place": "",
    "summary": "变压器约 1885 年 出现，建立在 经典力学、化学、发电机与电动机 之上；它把 动力输出、照明加热 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["physics","chemistry","generator"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "变压器在 1885 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，变压器仍是 动力输出 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "变压器把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "ene_transmission",
    "name": "电力传输",
    "en": "Power Transmission",
    "category": "energy",
    "era": "industrial",
    "date": "1882 年",
    "year": 1882,
    "people": "",
    "place": "",
    "summary": "电力传输在 1882 年 前后成形，依托 经典力学、化学、电网 把 动力输出、照明加热 落到实处，并成为 能量形式 中承上启下的一环，直接支撑了 燃煤发电、高速铁路、变电站 等后续技术。",
    "dependsOn": ["physics","chemistry","power_grid"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "电力传输在 1882 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，电力传输仍是 动力输出 的底层支撑，并持续影响 燃煤发电、高速铁路、变电站。"
      }
    ],
    "significance": "电力传输把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 燃煤发电、高速铁路、变电站。"
  },
{
    "id": "ene_ac",
    "name": "交流电系统",
    "en": "AC Power",
    "category": "energy",
    "era": "industrial",
    "date": "1888 年",
    "year": 1888,
    "people": "",
    "place": "",
    "summary": "交流电系统在 1888 年 前后成形，依托 经典力学、化学 把 动力输出、照明加热 落到实处，并成为 能量形式 中承上启下的一环，直接支撑了 无线输电 等后续技术。",
    "dependsOn": ["physics","chemistry"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "交流电系统在 1888 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，交流电系统仍是 动力输出 的底层支撑，并持续影响 无线输电。"
      }
    ],
    "significance": "交流电系统把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 无线输电。"
  },
{
    "id": "ene_dc",
    "name": "直流电系统",
    "en": "DC Power",
    "category": "energy",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "直流电系统约 1800 年 出现，建立在 经典力学、化学、蒸汽机 之上；它把 动力输出、照明加热 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["physics","chemistry","steam_engine"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "直流电系统在 1800 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，直流电系统仍是 动力输出 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "直流电系统把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "ene_smartgrid",
    "name": "智能电网",
    "en": "Smart Grid",
    "category": "energy",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "智能电网约 2000 年 成熟，建立在 经典力学、化学 之上完成关键突破；其能力延伸到 动力输出、照明加热，并为 钠离子电池、固态电池、微电网 的发展铺平了道路。",
    "dependsOn": ["physics","chemistry"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "智能电网在 2000 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，智能电网仍是 动力输出 的底层支撑，并持续影响 钠离子电池、固态电池、微电网。"
      }
    ],
    "significance": "智能电网把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 钠离子电池、固态电池、微电网。"
  },
{
    "id": "ene_nuclear",
    "name": "核裂变反应堆",
    "en": "Nuclear Reactor",
    "category": "energy",
    "era": "electrical",
    "date": "1942 年",
    "year": 1942,
    "people": "",
    "place": "",
    "summary": "核裂变反应堆在 1942 年 前后成形，依托 经典力学、化学、核裂变 把 动力输出、照明加热 落到实处，并成为 能量形式 中承上启下的一环，直接支撑了 核潜艇、原子弹、氢弹 等后续技术。",
    "dependsOn": ["physics","chemistry","nuclear_fission"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "核裂变反应堆在 1942 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，核裂变反应堆仍是 动力输出 的底层支撑，并持续影响 核潜艇、原子弹、氢弹。"
      }
    ],
    "significance": "核裂变反应堆把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 核潜艇、原子弹、氢弹。"
  },
{
    "id": "ene_pwr",
    "name": "压水堆",
    "en": "PWR",
    "category": "energy",
    "era": "info",
    "date": "1953 年",
    "year": 1953,
    "people": "",
    "place": "",
    "summary": "压水堆约 1953 年 出现，建立在 经典力学、化学 之上；它把 动力输出、照明加热 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["physics","chemistry"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "压水堆在 1953 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，压水堆仍是 动力输出 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "压水堆把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "ene_bwr",
    "name": "沸水堆",
    "en": "BWR",
    "category": "energy",
    "era": "info",
    "date": "1955 年",
    "year": 1955,
    "people": "",
    "place": "",
    "summary": "沸水堆约 1955 年 出现，建立在 经典力学、化学 之上；它把 动力输出、照明加热 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["physics","chemistry"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "沸水堆在 1955 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，沸水堆仍是 动力输出 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "沸水堆把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "ene_phwr",
    "name": "重水堆",
    "en": "PHWR",
    "category": "energy",
    "era": "info",
    "date": "1960 年",
    "year": 1960,
    "people": "",
    "place": "",
    "summary": "重水堆约 1960 年 出现，建立在 经典力学、化学 之上；它把 动力输出、照明加热 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["physics","chemistry"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "重水堆在 1960 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，重水堆仍是 动力输出 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "重水堆把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "ene_fastbreeder",
    "name": "快中子增殖堆",
    "en": "Fast Breeder",
    "category": "energy",
    "era": "info",
    "date": "1951 年",
    "year": 1951,
    "people": "",
    "place": "",
    "summary": "快中子增殖堆约 1951 年 出现，建立在 经典力学、化学、飞轮储能 之上；它把 动力输出、照明加热 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["physics","chemistry","ene_flywheel"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "快中子增殖堆在 1951 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，快中子增殖堆仍是 动力输出 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "快中子增殖堆把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  },

{
    "id": "ene_tokamak",
    "name": "托卡马克",
    "en": "Tokamak",
    "category": "energy",
    "era": "info",
    "date": "1968 年",
    "year": 1968,
    "people": "",
    "place": "",
    "summary": "托卡马克在 1968 年 前后成形，依托 经典力学、化学、潮汐能 把 动力输出、照明加热 落到实处，并成为 能量形式 中承上启下的一环，直接支撑了 液流电池、储氢技术、干热岩 等后续技术。",
    "dependsOn": ["physics","chemistry","ene_tidal"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "托卡马克在 1968 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，托卡马克仍是 动力输出 的底层支撑，并持续影响 液流电池、储氢技术、干热岩。"
      }
    ],
    "significance": "托卡马克把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 液流电池、储氢技术、干热岩。"
  },
{
    "id": "ene_icf",
    "name": "惯性约束聚变",
    "en": "Inertial Confinement",
    "category": "energy",
    "era": "info",
    "date": "1960 年",
    "year": 1960,
    "people": "",
    "place": "",
    "summary": "惯性约束聚变约 1960 年 出现，建立在 经典力学、化学 之上；它把 动力输出、照明加热 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["physics","chemistry"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "惯性约束聚变在 1960 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，惯性约束聚变仍是 动力输出 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "惯性约束聚变把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "ene_satpower",
    "name": "空间太阳能",
    "en": "Space Solar Power",
    "category": "energy",
    "era": "info",
    "date": "1968 年",
    "year": 1968,
    "people": "",
    "place": "",
    "summary": "空间太阳能约 1968 年 出现，建立在 经典力学、化学、潮汐能 之上；它把 动力输出、照明加热 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["physics","chemistry","ene_tidal","solar","satellite","microwave"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "空间太阳能在 1968 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，空间太阳能仍是 动力输出 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "空间太阳能把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "ene_wpt",
    "name": "无线输电",
    "en": "Wireless Power",
    "category": "energy",
    "era": "industrial",
    "date": "1890 年",
    "year": 1890,
    "people": "",
    "place": "",
    "summary": "无线输电约 1890 年 成熟，建立在 经典力学、化学、交流电系统 之上完成关键突破；其能力延伸到 动力输出、照明加热，并为 滚珠丝杠、公共汽车、卡车 的发展铺平了道路。",
    "dependsOn": ["physics","chemistry","ene_ac","electromagnetism"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "无线输电在 1890 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，无线输电仍是 动力输出 的底层支撑，并持续影响 滚珠丝杠、公共汽车、卡车。"
      }
    ],
    "significance": "无线输电把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 滚珠丝杠、公共汽车、卡车。"
  },
{
    "id": "ene_thermoelectric",
    "name": "热电发电",
    "en": "Thermoelectric Generation",
    "category": "energy",
    "era": "industrial",
    "date": "1821 年",
    "year": 1821,
    "people": "",
    "place": "",
    "summary": "热电发电约 1821 年 出现，建立在 经典力学、化学 之上；它把 动力输出、照明加热 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["physics","chemistry"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "热电发电在 1821 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，热电发电仍是 动力输出 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "热电发电把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "ene_piezoelectric",
    "name": "压电发电",
    "en": "Piezoelectric Harvesting",
    "category": "energy",
    "era": "industrial",
    "date": "1880 年",
    "year": 1880,
    "people": "",
    "place": "",
    "summary": "压电发电约 1880 年 出现，建立在 经典力学、化学 之上；它把 动力输出、照明加热 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["physics","chemistry"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "压电发电在 1880 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，压电发电仍是 动力输出 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "压电发电把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "ene_tribo",
    "name": "摩擦纳米发电",
    "en": "Triboelectric Nanogen",
    "category": "energy",
    "era": "intelligent",
    "date": "2012 年",
    "year": 2012,
    "people": "",
    "place": "",
    "summary": "摩擦纳米发电约 2012 年 出现，建立在 经典力学、化学、钠离子电池 之上；它把 动力输出、照明加热 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["physics","chemistry","ene_nas"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "摩擦纳米发电在 2012 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，摩擦纳米发电仍是 动力输出 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "摩擦纳米发电把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "ene_biogenic",
    "name": "生物发电",
    "en": "Bioelectric Generation",
    "category": "energy",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "生物发电约 1800 年 出现，建立在 经典力学、化学、蒸汽机 之上；它把 动力输出、照明加热 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["physics","chemistry","steam_engine"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "生物发电在 1800 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，生物发电仍是 动力输出 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "生物发电把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "ene_synfuel",
    "name": "合成燃料",
    "en": "Syngas Fuel",
    "category": "energy",
    "era": "electrical",
    "date": "1920 年",
    "year": 1920,
    "people": "",
    "place": "",
    "summary": "合成燃料约 1920 年 出现，建立在 经典力学、化学 之上；它把 动力输出、照明加热 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["physics","chemistry"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "合成燃料在 1920 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，合成燃料仍是 动力输出 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "合成燃料把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "ene_ammonia",
    "name": "氨燃料",
    "en": "Ammonia Fuel",
    "category": "energy",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "氨燃料约 1900 年 出现，建立在 经典力学、化学 之上；它把 动力输出、照明加热 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["physics","chemistry"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "氨燃料在 1900 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，氨燃料仍是 动力输出 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "氨燃料把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "ene_clathrate",
    "name": "可燃冰",
    "en": "Methane Hydrate",
    "category": "energy",
    "era": "info",
    "date": "1960 年",
    "year": 1960,
    "people": "",
    "place": "",
    "summary": "可燃冰约 1960 年 出现，建立在 经典力学、化学 之上；它把 动力输出、照明加热 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["physics","chemistry"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "可燃冰在 1960 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，可燃冰仍是 动力输出 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "可燃冰把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "ene_hotdry",
    "name": "干热岩",
    "en": "Hot Dry Rock",
    "category": "energy",
    "era": "info",
    "date": "1970 年",
    "year": 1970,
    "people": "",
    "place": "",
    "summary": "干热岩约 1970 年 出现，建立在 经典力学、化学、托卡马克 之上；它把 动力输出、照明加热 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["physics","chemistry","ene_tokamak"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "干热岩在 1970 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，干热岩仍是 动力输出 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "干热岩把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "ene_otec",
    "name": "海洋温差能",
    "en": "OTEC",
    "category": "energy",
    "era": "industrial",
    "date": "1881 年",
    "year": 1881,
    "people": "",
    "place": "",
    "summary": "海洋温差能约 1881 年 出现，建立在 经典力学、化学 之上；它把 动力输出、照明加热 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["physics","chemistry"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "海洋温差能在 1881 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，海洋温差能仍是 动力输出 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "海洋温差能把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "ene_salinity",
    "name": "盐差能",
    "en": "Salinity Gradient",
    "category": "energy",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "people": "",
    "place": "",
    "summary": "盐差能约 1950 年 出现，建立在 经典力学、化学 之上；它把 动力输出、照明加热 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["physics","chemistry"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "盐差能在 1950 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，盐差能仍是 动力输出 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "盐差能把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "ene_methanol",
    "name": "甲醇燃料",
    "en": "Methanol Fuel",
    "category": "energy",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "甲醇燃料约 1900 年 出现，建立在 经典力学、化学 之上；它把 动力输出、照明加热 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["physics","chemistry"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "甲醇燃料在 1900 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，甲醇燃料仍是 动力输出 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "甲醇燃料把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "ene_hydrogenfuel",
    "name": "氢燃料",
    "en": "Hydrogen Fuel",
    "category": "energy",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "氢燃料约 1800 年 出现，建立在 经典力学、化学、蒸汽机 之上；它把 动力输出、照明加热 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["physics","chemistry","steam_engine"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "氢燃料在 1800 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，氢燃料仍是 动力输出 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "氢燃料把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "ene_coalfired",
    "name": "燃煤发电",
    "en": "Coal Power Plant",
    "category": "energy",
    "era": "industrial",
    "date": "1882 年",
    "year": 1882,
    "people": "",
    "place": "",
    "summary": "燃煤发电约 1882 年 出现，建立在 经典力学、化学、电力传输 之上；它把 动力输出、照明加热 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["physics","chemistry","ene_transmission"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "燃煤发电在 1882 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，燃煤发电仍是 动力输出 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "燃煤发电把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "ene_gasfired",
    "name": "燃气发电",
    "en": "Gas Power Plant",
    "category": "energy",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "燃气发电约 1900 年 出现，建立在 经典力学、化学 之上；它把 动力输出、照明加热 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["physics","chemistry"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "燃气发电在 1900 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，燃气发电仍是 动力输出 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "燃气发电把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "ene_hydroplant",
    "name": "水力发电站",
    "en": "Hydroelectric Plant",
    "category": "energy",
    "era": "industrial",
    "date": "1882 年",
    "year": 1882,
    "people": "",
    "place": "",
    "summary": "水力发电站约 1882 年 成熟，建立在 经典力学、化学 之上完成关键突破；其能力延伸到 动力输出、照明加热，并为 精密轴承、无轨电车 的发展铺平了道路。",
    "dependsOn": ["physics","chemistry"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "水力发电站在 1882 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，水力发电站仍是 动力输出 的底层支撑，并持续影响 精密轴承、无轨电车。"
      }
    ],
    "significance": "水力发电站把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 精密轴承、无轨电车。"
  },
{
    "id": "ene_windfarm",
    "name": "风电场",
    "en": "Wind Farm",
    "category": "energy",
    "era": "info",
    "date": "1980 年",
    "year": 1980,
    "people": "",
    "place": "",
    "summary": "风电场约 1980 年 出现，建立在 经典力学、化学、波浪能 之上；它把 动力输出、照明加热 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["physics","chemistry","mat_wave"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "风电场在 1980 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，风电场仍是 动力输出 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "风电场把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "ene_solarfarm",
    "name": "光伏电站",
    "en": "Solar Farm",
    "category": "energy",
    "era": "info",
    "date": "1980 年",
    "year": 1980,
    "people": "",
    "place": "",
    "summary": "光伏电站约 1980 年 出现，建立在 经典力学、化学、波浪能 之上；它把 动力输出、照明加热 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["physics","chemistry","mat_wave"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "光伏电站在 1980 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，光伏电站仍是 动力输出 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "光伏电站把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "ene_batteryev",
    "name": "电池储能系统",
    "en": "Battery Energy Storage",
    "category": "energy",
    "era": "info",
    "date": "1990 年",
    "year": 1990,
    "people": "",
    "place": "",
    "summary": "电池储能系统约 1990 年 出现，建立在 经典力学、化学、镍氢电池 之上；它把 动力输出、照明加热 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["physics","chemistry","ene_nimh"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "电池储能系统在 1990 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，电池储能系统仍是 动力输出 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "电池储能系统把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "ene_microgrid",
    "name": "微电网",
    "en": "Microgrid",
    "category": "energy",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "微电网在 2000 年 前后成形，依托 经典力学、化学、智能电网 把 动力输出、照明加热 落到实处，并成为 能量形式 中承上启下的一环，直接支撑了 车网互动 等后续技术。",
    "dependsOn": ["physics","chemistry","ene_smartgrid"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "微电网在 2000 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，微电网仍是 动力输出 的底层支撑，并持续影响 车网互动。"
      }
    ],
    "significance": "微电网把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 车网互动。"
  },
{
    "id": "ene_v2g",
    "name": "车网互动",
    "en": "Vehicle-to-Grid",
    "category": "energy",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "车网互动约 2000 年 出现，建立在 经典力学、化学、微电网 之上；它把 动力输出、照明加热 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["physics","chemistry","ene_microgrid"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "车网互动在 2000 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，车网互动仍是 动力输出 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "车网互动把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "ene_heatpump",
    "name": "热泵",
    "en": "Heat Pump",
    "category": "energy",
    "era": "industrial",
    "date": "1852 年",
    "year": 1852,
    "people": "",
    "place": "",
    "summary": "热泵在 1852 年 前后成形，依托 经典力学、化学 把 动力输出、照明加热 落到实处，并成为 能量形式 中承上启下的一环，直接支撑了 地源热泵建筑 等后续技术。",
    "dependsOn": ["physics","chemistry"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "热泵在 1852 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，热泵仍是 动力输出 的底层支撑，并持续影响 地源热泵建筑。"
      }
    ],
    "significance": "热泵把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 地源热泵建筑。"
  },
{
    "id": "ene_district",
    "name": "区域供冷供热",
    "en": "District Energy",
    "category": "energy",
    "era": "industrial",
    "date": "1877 年",
    "year": 1877,
    "people": "",
    "place": "",
    "summary": "区域供冷供热约 1877 年 出现，建立在 经典力学、化学 之上；它把 动力输出、照明加热 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["physics","chemistry"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "区域供冷供热在 1877 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，区域供冷供热仍是 动力输出 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "区域供冷供热把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "ene_wasteheat",
    "name": "余热回收",
    "en": "Waste Heat Recovery",
    "category": "energy",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "余热回收约 1800 年 出现，建立在 经典力学、化学、蒸汽机 之上；它把 动力输出、照明加热 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["physics","chemistry","steam_engine"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "余热回收在 1800 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，余热回收仍是 动力输出 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "余热回收把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "ene_fuelcellcar",
    "name": "燃料电池汽车",
    "en": "Fuel Cell Vehicle",
    "category": "energy",
    "era": "info",
    "date": "1990 年",
    "year": 1990,
    "people": "",
    "place": "",
    "summary": "燃料电池汽车约 1990 年 出现，建立在 经典力学、化学、汽车 之上；它把 动力输出、照明加热 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["physics","chemistry","automobile","internal_combustion","combustion"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "燃料电池汽车在 1990 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，燃料电池汽车仍是 动力输出 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "燃料电池汽车把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "ene_peaker",
    "name": "调峰电站",
    "en": "Peaker Plant",
    "category": "energy",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "调峰电站约 1900 年 出现，建立在 经典力学、化学 之上；它把 动力输出、照明加热 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["physics","chemistry"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "调峰电站在 1900 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，调峰电站仍是 动力输出 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "调峰电站把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "ene_island",
    "name": "离网供电",
    "en": "Off-Grid System",
    "category": "energy",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "离网供电约 2000 年 出现，建立在 经典力学、化学 之上；它把 动力输出、照明加热 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["physics","chemistry"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "离网供电在 2000 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，离网供电仍是 动力输出 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "离网供电把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "ene_bess",
    "name": "集装箱储能",
    "en": "BESS Container",
    "category": "energy",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "集装箱储能约 2010 年 出现，建立在 经典力学、化学、智能电网 之上；它把 动力输出、照明加热 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["physics","chemistry","ene_smartgrid"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "集装箱储能在 2010 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，集装箱储能仍是 动力输出 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "集装箱储能把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "ene_gravity",
    "name": "重力储能",
    "en": "Gravity Storage",
    "category": "energy",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "重力储能约 2000 年 出现，建立在 经典力学、化学 之上；它把 动力输出、照明加热 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["physics","chemistry"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "重力储能在 2000 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，重力储能仍是 动力输出 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "重力储能把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "ene_liquidair",
    "name": "液态空气储能",
    "en": "Liquid Air Storage",
    "category": "energy",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "液态空气储能约 2010 年 出现，建立在 经典力学、化学、智能电网 之上；它把 动力输出、照明加热 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["physics","chemistry","ene_smartgrid"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "液态空气储能在 2010 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，液态空气储能仍是 动力输出 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "液态空气储能把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "ene_thermalbattery",
    "name": "热电池",
    "en": "Thermal Battery",
    "category": "energy",
    "era": "info",
    "date": "1980 年",
    "year": 1980,
    "people": "",
    "place": "",
    "summary": "热电池约 1980 年 出现，建立在 经典力学、化学、波浪能 之上；它把 动力输出、照明加热 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["physics","chemistry","mat_wave"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "热电池在 1980 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，热电池仍是 动力输出 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "热电池把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "ene_bipv",
    "name": "光伏建筑一体化",
    "en": "BIPV",
    "category": "energy",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "光伏建筑一体化约 2000 年 出现，建立在 经典力学、化学 之上；它把 动力输出、照明加热 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["physics","chemistry"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "光伏建筑一体化在 2000 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，光伏建筑一体化仍是 动力输出 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "光伏建筑一体化把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "ene_solartower",
    "name": "熔盐塔式光热",
    "en": "Solar Power Tower",
    "category": "energy",
    "era": "info",
    "date": "1980 年",
    "year": 1980,
    "people": "",
    "place": "",
    "summary": "熔盐塔式光热约 1980 年 出现，建立在 经典力学、化学、波浪能 之上；它把 动力输出、照明加热 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["physics","chemistry","mat_wave"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "熔盐塔式光热在 1980 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，熔盐塔式光热仍是 动力输出 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "熔盐塔式光热把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "ene_dishstirling",
    "name": "碟式斯特林",
    "en": "Dish-Stirling",
    "category": "energy",
    "era": "info",
    "date": "1980 年",
    "year": 1980,
    "people": "",
    "place": "",
    "summary": "碟式斯特林约 1980 年 出现，建立在 经典力学、化学、波浪能 之上；它把 动力输出、照明加热 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["physics","chemistry","mat_wave"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "碟式斯特林在 1980 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，碟式斯特林仍是 动力输出 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "碟式斯特林把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "ene_linearfresnel",
    "name": "线性菲涅尔",
    "en": "Linear Fresnel",
    "category": "energy",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "线性菲涅尔约 2000 年 出现，建立在 经典力学、化学 之上；它把 动力输出、照明加热 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["physics","chemistry"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "线性菲涅尔在 2000 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，线性菲涅尔仍是 动力输出 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "线性菲涅尔把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "ene_hydrothermal",
    "name": "水热型地热",
    "en": "Hydrothermal Geothermal",
    "category": "energy",
    "era": "info",
    "date": "1970 年",
    "year": 1970,
    "people": "",
    "place": "",
    "summary": "水热型地热约 1970 年 出现，建立在 经典力学、化学、托卡马克 之上；它把 动力输出、照明加热 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["physics","chemistry","ene_tokamak"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "水热型地热在 1970 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，水热型地热仍是 动力输出 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "水热型地热把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "ene_borehole",
    "name": "井式地热",
    "en": "Borehole Geothermal",
    "category": "energy",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "井式地热约 2000 年 出现，建立在 经典力学、化学 之上；它把 动力输出、照明加热 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["physics","chemistry"],
    "enables": [],
    "applications": [
      "动力输出",
      "照明加热",
      "驱动系统"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "井式地热在 2000 年 前后出现，依托 经典力学 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，井式地热仍是 动力输出 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "井式地热把 经典力学 与 动力输出 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mfg_stone",
    "name": "石器打制",
    "en": "Stone Knapping",
    "category": "manufact",
    "era": "prehistoric",
    "date": "约 260 万年前",
    "year": -2600000,
    "people": "",
    "place": "",
    "summary": "石器打制约 约 260 万年前 成熟，建立在 石器 之上完成关键突破；其能力延伸到 零件加工、批量制造，并为 手斧 的发展铺平了道路。",
    "dependsOn": ["stone_tools"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "史前时代",
        "text": "石器打制在 约 260 万年前 前后出现，依托 石器 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，石器打制仍是 零件加工 的底层支撑，并持续影响 手斧。"
      }
    ],
    "significance": "石器打制把 石器 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 手斧。"
  },
{
    "id": "mfg_handaxe",
    "name": "手斧",
    "en": "Hand Axe",
    "category": "manufact",
    "era": "prehistoric",
    "date": "约 170 万年前",
    "year": -1700000,
    "people": "",
    "place": "",
    "summary": "手斧约 约 170 万年前 成熟，建立在 石器打制 之上完成关键突破；其能力延伸到 零件加工、批量制造，并为 刀具、凿、锯 的发展铺平了道路。",
    "dependsOn": ["mfg_stone"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "史前时代",
        "text": "手斧在 约 170 万年前 前后出现，依托 石器打制 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，手斧仍是 零件加工 的底层支撑，并持续影响 刀具、凿、锯。"
      }
    ],
    "significance": "手斧把 石器打制 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 刀具、凿、锯。"
  },
{
    "id": "mfg_knife",
    "name": "刀具",
    "en": "Knife",
    "category": "manufact",
    "era": "prehistoric",
    "date": "约 10 万年前",
    "year": -100000,
    "people": "",
    "place": "",
    "summary": "刀具约 约 10 万年前 出现，建立在 手斧 之上；它把 零件加工、批量制造 变成可稳定复现的能力，是 制造与工具 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_handaxe"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "史前时代",
        "text": "刀具在 约 10 万年前 前后出现，依托 手斧 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，刀具仍是 零件加工 的底层支撑，并作为 制造与工具 的基础能力持续发挥作用。"
      }
    ],
    "significance": "刀具把 手斧 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mfg_chisel",
    "name": "凿",
    "en": "Chisel",
    "category": "manufact",
    "era": "prehistoric",
    "date": "约 3 万年前",
    "year": -30000,
    "people": "",
    "place": "",
    "summary": "凿在 约 3 万年前 前后成形，依托 手斧 把 零件加工、批量制造 落到实处，并成为 制造与工具 中承上启下的一环，直接支撑了 弓、箭、标枪 等后续技术。",
    "dependsOn": ["mfg_handaxe"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "史前时代",
        "text": "凿在 约 3 万年前 前后出现，依托 手斧 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，凿仍是 零件加工 的底层支撑，并持续影响 弓、箭、标枪。"
      }
    ],
    "significance": "凿把 手斧 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 弓、箭、标枪。"
  },
{
    "id": "mfg_hammer",
    "name": "锤",
    "en": "Hammer",
    "category": "manufact",
    "era": "prehistoric",
    "date": "约 5 万年前",
    "year": -50000,
    "people": "",
    "place": "",
    "summary": "锤在 约 5 万年前 前后成形，依托 复合工具 把 零件加工、批量制造 落到实处，并成为 制造与工具 中承上启下的一环，直接支撑了 黄金加工、白银加工、斧 等后续技术。",
    "dependsOn": ["hafting"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "史前时代",
        "text": "锤在 约 5 万年前 前后出现，依托 复合工具 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，锤仍是 零件加工 的底层支撑，并持续影响 黄金加工、白银加工、斧。"
      }
    ],
    "significance": "锤把 复合工具 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 黄金加工、白银加工、斧。"
  },
{
    "id": "mfg_axe",
    "name": "斧",
    "en": "Axe",
    "category": "manufact",
    "era": "prehistoric",
    "date": "约 5 万年前",
    "year": -50000,
    "people": "",
    "place": "",
    "summary": "斧约 约 5 万年前 出现，建立在 复合工具、锤 之上；它把 零件加工、批量制造 变成可稳定复现的能力，是 制造与工具 中从经验走向方法的关键一步。",
    "dependsOn": ["hafting","mfg_hammer"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "史前时代",
        "text": "斧在 约 5 万年前 前后出现，依托 复合工具 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，斧仍是 零件加工 的底层支撑，并作为 制造与工具 的基础能力持续发挥作用。"
      }
    ],
    "significance": "斧把 复合工具 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mfg_saw",
    "name": "锯",
    "en": "Saw",
    "category": "manufact",
    "era": "prehistoric",
    "date": "公元前 5000 年",
    "year": -5000,
    "people": "",
    "place": "",
    "summary": "锯约 公元前 5000 年 出现，建立在 手斧 之上；它把 零件加工、批量制造 变成可稳定复现的能力，是 制造与工具 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_handaxe"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "史前时代",
        "text": "锯在 公元前 5000 年 前后出现，依托 手斧 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，锯仍是 零件加工 的底层支撑，并作为 制造与工具 的基础能力持续发挥作用。"
      }
    ],
    "significance": "锯把 手斧 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mfg_drill",
    "name": "钻",
    "en": "Drill",
    "category": "manufact",
    "era": "prehistoric",
    "date": "约 1 万年前",
    "year": -10000,
    "people": "",
    "place": "",
    "summary": "钻约 约 1 万年前 出现，建立在 手斧 之上；它把 零件加工、批量制造 变成可稳定复现的能力，是 制造与工具 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_handaxe"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "史前时代",
        "text": "钻在 约 1 万年前 前后出现，依托 手斧 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，钻仍是 零件加工 的底层支撑，并作为 制造与工具 的基础能力持续发挥作用。"
      }
    ],
    "significance": "钻把 手斧 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mfg_lathe",
    "name": "车床",
    "en": "Lathe",
    "category": "manufact",
    "era": "ancient",
    "date": "公元前 1000 年",
    "year": -1000,
    "people": "",
    "place": "",
    "summary": "车床在 公元前 1000 年 前后成形，依托 数学、冶铁 把 零件加工、批量制造 落到实处，并成为 制造与工具 中承上启下的一环，直接支撑了 拉拔、螺纹连接、注塑 等后续技术。",
    "dependsOn": ["mathematics", "iron_smelting"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "车床在 公元前 1000 年 前后出现，依托 数学 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，车床仍是 零件加工 的底层支撑，并持续影响 拉拔、螺纹连接、注塑。"
      }
    ],
    "significance": "车床把 数学 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 拉拔、螺纹连接、注塑。"
  },
{
    "id": "mfg_boring",
    "name": "镗床",
    "en": "Boring Machine",
    "category": "manufact",
    "era": "earlymodern",
    "date": "1500 年",
    "year": 1500,
    "people": "",
    "place": "",
    "summary": "镗床约 1500 年 成熟，建立在 数学 之上完成关键突破；其能力延伸到 零件加工、批量制造，并为 来复枪 的发展铺平了道路。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "近代早期",
        "text": "镗床在 1500 年 前后出现，依托 数学 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，镗床仍是 零件加工 的底层支撑，并持续影响 来复枪。"
      }
    ],
    "significance": "镗床把 数学 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 来复枪。"
  },
{
    "id": "mfg_mill",
    "name": "铣床",
    "en": "Milling Machine",
    "category": "manufact",
    "era": "industrial",
    "date": "1818 年",
    "year": 1818,
    "people": "",
    "place": "",
    "summary": "铣床在 1818 年 前后成形，依托 数学、刨床 把 零件加工、批量制造 落到实处，并成为 制造与工具 中承上启下的一环，直接支撑了 机枪 等后续技术。",
    "dependsOn": ["mathematics","mfg_planer"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "铣床在 1818 年 前后出现，依托 数学 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，铣床仍是 零件加工 的底层支撑，并持续影响 机枪。"
      }
    ],
    "significance": "铣床把 数学 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 机枪。"
  },
{
    "id": "mfg_planer",
    "name": "刨床",
    "en": "Planer",
    "category": "manufact",
    "era": "industrial",
    "date": "1810 年",
    "year": 1810,
    "people": "",
    "place": "",
    "summary": "刨床在 1810 年 前后成形，依托 数学 把 零件加工、批量制造 落到实处，并成为 制造与工具 中承上启下的一环，直接支撑了 铣床、滑翔机、自行车 等后续技术。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "刨床在 1810 年 前后出现，依托 数学 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，刨床仍是 零件加工 的底层支撑，并持续影响 铣床、滑翔机、自行车。"
      }
    ],
    "significance": "刨床把 数学 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 铣床、滑翔机、自行车。"
  },
{
    "id": "mfg_grinder",
    "name": "磨床",
    "en": "Grinder",
    "category": "manufact",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "磨床约 1800 年 出现，建立在 数学、可互换零件 之上；它把 零件加工、批量制造 变成可稳定复现的能力，是 制造与工具 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics","interchangeable_parts"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "磨床在 1800 年 前后出现，依托 数学 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，磨床仍是 零件加工 的底层支撑，并作为 制造与工具 的基础能力持续发挥作用。"
      }
    ],
    "significance": "磨床把 数学 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mfg_drillpress",
    "name": "钻床",
    "en": "Drill Press",
    "category": "manufact",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "钻床约 1800 年 出现，建立在 数学 之上；它把 零件加工、批量制造 变成可稳定复现的能力，是 制造与工具 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "钻床在 1800 年 前后出现，依托 数学 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，钻床仍是 零件加工 的底层支撑，并作为 制造与工具 的基础能力持续发挥作用。"
      }
    ],
    "significance": "钻床把 数学 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mfg_cnc",
    "name": "数控机床",
    "en": "CNC Machine",
    "category": "manufact",
    "era": "electrical",
    "date": "1949 年",
    "year": 1949,
    "people": "",
    "place": "",
    "summary": "数控机床约 1949 年 出现，建立在 数学 之上；它把 零件加工、批量制造 变成可稳定复现的能力，是 制造与工具 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "数控机床在 1949 年 前后出现，依托 数学 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，数控机床仍是 零件加工 的底层支撑，并作为 制造与工具 的基础能力持续发挥作用。"
      }
    ],
    "significance": "数控机床把 数学 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mfg_mc",
    "name": "加工中心",
    "en": "Machining Center",
    "category": "manufact",
    "era": "info",
    "date": "1958 年",
    "year": 1958,
    "people": "",
    "place": "",
    "summary": "加工中心约 1958 年 出现，建立在 数学 之上；它把 零件加工、批量制造 变成可稳定复现的能力，是 制造与工具 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "加工中心在 1958 年 前后出现，依托 数学 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，加工中心仍是 零件加工 的底层支撑，并作为 制造与工具 的基础能力持续发挥作用。"
      }
    ],
    "significance": "加工中心把 数学 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mfg_turnmill",
    "name": "车铣复合",
    "en": "Turn-Mill",
    "category": "manufact",
    "era": "info",
    "date": "1980 年",
    "year": 1980,
    "people": "",
    "place": "",
    "summary": "车铣复合约 1980 年 出现，建立在 数学 之上；它把 零件加工、批量制造 变成可稳定复现的能力，是 制造与工具 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "车铣复合在 1980 年 前后出现，依托 数学 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，车铣复合仍是 零件加工 的底层支撑，并作为 制造与工具 的基础能力持续发挥作用。"
      }
    ],
    "significance": "车铣复合把 数学 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mfg_3dp",
    "name": "3D 打印",
    "en": "3D Printing",
    "category": "manufact",
    "era": "info",
    "date": "1984 年",
    "year": 1984,
    "people": "",
    "place": "",
    "summary": "3D 打印约 1984 年 成熟，建立在 数学、数控加工、电子计算机 之上完成关键突破；其能力延伸到 零件加工、批量制造，并为 增材制造、3D 打印建筑、熔融沉积成型 的发展铺平了道路。",
    "dependsOn": ["mathematics","cnc","computer"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "3D 打印在 1984 年 前后出现，依托 数学 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，3D 打印仍是 零件加工 的底层支撑，并持续影响 增材制造、3D 打印建筑、熔融沉积成型。"
      }
    ],
    "significance": "3D 打印把 数学 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 增材制造、3D 打印建筑、熔融沉积成型。"
  },
{
    "id": "mfg_additive",
    "name": "增材制造",
    "en": "Additive Manufacturing",
    "category": "manufact",
    "era": "info",
    "date": "1986 年",
    "year": 1986,
    "people": "",
    "place": "",
    "summary": "增材制造在 1986 年 前后成形，依托 数学、3D 打印 把 零件加工、批量制造 落到实处，并成为 制造与工具 中承上启下的一环，直接支撑了 熔融沉积成型 等后续技术。",
    "dependsOn": ["mathematics", "mfg_3dp"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "增材制造在 1986 年 前后出现，依托 数学 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，增材制造仍是 零件加工 的底层支撑，并持续影响 熔融沉积成型。"
      }
    ],
    "significance": "增材制造把 数学 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 熔融沉积成型。"
  },
{
    "id": "mfg_lasercut",
    "name": "激光切割",
    "en": "Laser Cutting",
    "category": "manufact",
    "era": "info",
    "date": "1965 年",
    "year": 1965,
    "people": "",
    "place": "",
    "summary": "激光切割约 1965 年 出现，建立在 数学 之上；它把 零件加工、批量制造 变成可稳定复现的能力，是 制造与工具 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "激光切割在 1965 年 前后出现，依托 数学 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，激光切割仍是 零件加工 的底层支撑，并作为 制造与工具 的基础能力持续发挥作用。"
      }
    ],
    "significance": "激光切割把 数学 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mfg_waterjet",
    "name": "水射流切割",
    "en": "Water Jet Cutting",
    "category": "manufact",
    "era": "info",
    "date": "1970 年",
    "year": 1970,
    "people": "",
    "place": "",
    "summary": "水射流切割约 1970 年 出现，建立在 数学 之上；它把 零件加工、批量制造 变成可稳定复现的能力，是 制造与工具 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "水射流切割在 1970 年 前后出现，依托 数学 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，水射流切割仍是 零件加工 的底层支撑，并作为 制造与工具 的基础能力持续发挥作用。"
      }
    ],
    "significance": "水射流切割把 数学 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mfg_plasma",
    "name": "等离子切割",
    "en": "Plasma Cutting",
    "category": "manufact",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "people": "",
    "place": "",
    "summary": "等离子切割约 1950 年 出现，建立在 数学 之上；它把 零件加工、批量制造 变成可稳定复现的能力，是 制造与工具 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "等离子切割在 1950 年 前后出现，依托 数学 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，等离子切割仍是 零件加工 的底层支撑，并作为 制造与工具 的基础能力持续发挥作用。"
      }
    ],
    "significance": "等离子切割把 数学 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mfg_edm",
    "name": "电火花加工",
    "en": "EDM",
    "category": "manufact",
    "era": "electrical",
    "date": "1943 年",
    "year": 1943,
    "people": "",
    "place": "",
    "summary": "电火花加工约 1943 年 出现，建立在 数学 之上；它把 零件加工、批量制造 变成可稳定复现的能力，是 制造与工具 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "电火花加工在 1943 年 前后出现，依托 数学 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，电火花加工仍是 零件加工 的底层支撑，并作为 制造与工具 的基础能力持续发挥作用。"
      }
    ],
    "significance": "电火花加工把 数学 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mfg_wedm",
    "name": "线切割",
    "en": "Wire EDM",
    "category": "manufact",
    "era": "info",
    "date": "1960 年",
    "year": 1960,
    "people": "",
    "place": "",
    "summary": "线切割约 1960 年 出现，建立在 数学 之上；它把 零件加工、批量制造 变成可稳定复现的能力，是 制造与工具 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "线切割在 1960 年 前后出现，依托 数学 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，线切割仍是 零件加工 的底层支撑，并作为 制造与工具 的基础能力持续发挥作用。"
      }
    ],
    "significance": "线切割把 数学 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mfg_sandcast",
    "name": "砂型铸造",
    "en": "Sand Casting",
    "category": "manufact",
    "era": "ancient",
    "date": "公元前 3500 年",
    "year": -3500,
    "people": "",
    "place": "",
    "summary": "砂型铸造约 公元前 3500 年 成熟，建立在 铸造、木炭 之上完成关键突破；其能力延伸到 零件加工、批量制造，并为 失蜡法 的发展铺平了道路。",
    "dependsOn": ["mat_casting","ene_charcoal"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "砂型铸造在 公元前 3500 年 前后出现，依托 铸造 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，砂型铸造仍是 零件加工 的底层支撑，并持续影响 失蜡法。"
      }
    ],
    "significance": "砂型铸造把 铸造 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 失蜡法。"
  },
{
    "id": "mfg_lostwax",
    "name": "失蜡法",
    "en": "Lost-Wax Casting",
    "category": "manufact",
    "era": "ancient",
    "date": "公元前 3500 年",
    "year": -3500,
    "people": "",
    "place": "",
    "summary": "失蜡法约 公元前 3500 年 出现，建立在 铸造、木炭、砂型铸造 之上；它把 零件加工、批量制造 变成可稳定复现的能力，是 制造与工具 中从经验走向方法的关键一步。",
    "dependsOn": ["mat_casting","ene_charcoal","mfg_sandcast"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "失蜡法在 公元前 3500 年 前后出现，依托 铸造 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，失蜡法仍是 零件加工 的底层支撑，并作为 制造与工具 的基础能力持续发挥作用。"
      }
    ],
    "significance": "失蜡法把 铸造 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mfg_diecast",
    "name": "压铸",
    "en": "Die Casting",
    "category": "manufact",
    "era": "industrial",
    "date": "1838 年",
    "year": 1838,
    "people": "",
    "place": "",
    "summary": "压铸约 1838 年 出现，建立在 数学 之上；它把 零件加工、批量制造 变成可稳定复现的能力，是 制造与工具 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "压铸在 1838 年 前后出现，依托 数学 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，压铸仍是 零件加工 的底层支撑，并作为 制造与工具 的基础能力持续发挥作用。"
      }
    ],
    "significance": "压铸把 数学 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mfg_forging2",
    "name": "模锻",
    "en": "Die Forging",
    "category": "manufact",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "模锻在 1800 年 前后成形，依托 数学 把 零件加工、批量制造 落到实处，并成为 制造与工具 中承上启下的一环，直接支撑了 冲压 等后续技术。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "模锻在 1800 年 前后出现，依托 数学 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，模锻仍是 零件加工 的底层支撑，并持续影响 冲压。"
      }
    ],
    "significance": "模锻把 数学 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 冲压。"
  },
{
    "id": "mfg_stamping",
    "name": "冲压",
    "en": "Stamping",
    "category": "manufact",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "冲压约 1800 年 成熟，建立在 数学、模锻 之上完成关键突破；其能力延伸到 零件加工、批量制造，并为 拉伸成形、钢盔 的发展铺平了道路。",
    "dependsOn": ["mathematics","mfg_forging2"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "冲压在 1800 年 前后出现，依托 数学 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，冲压仍是 零件加工 的底层支撑，并持续影响 拉伸成形、钢盔。"
      }
    ],
    "significance": "冲压把 数学 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 拉伸成形、钢盔。"
  },
{
    "id": "mfg_drawing2",
    "name": "拉伸成形",
    "en": "Deep Drawing",
    "category": "manufact",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "拉伸成形约 1800 年 出现，建立在 数学、冲压 之上；它把 零件加工、批量制造 变成可稳定复现的能力，是 制造与工具 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics","mfg_stamping"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "拉伸成形在 1800 年 前后出现，依托 数学 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，拉伸成形仍是 零件加工 的底层支撑，并作为 制造与工具 的基础能力持续发挥作用。"
      }
    ],
    "significance": "拉伸成形把 数学 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mfg_rivet",
    "name": "铆接",
    "en": "Riveting",
    "category": "manufact",
    "era": "ancient",
    "date": "公元前 2000 年",
    "year": -2000,
    "people": "",
    "place": "",
    "summary": "铆接在 公元前 2000 年 前后成形，依托 数学 把 零件加工、批量制造 落到实处，并成为 制造与工具 中承上启下的一环，直接支撑了 潜艇 等后续技术。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "铆接在 公元前 2000 年 前后出现，依托 数学 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，铆接仍是 零件加工 的底层支撑，并持续影响 潜艇。"
      }
    ],
    "significance": "铆接把 数学 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 潜艇。"
  },
{
    "id": "mfg_welding",
    "name": "电弧焊",
    "en": "Arc Welding",
    "category": "manufact",
    "era": "industrial",
    "date": "1881 年",
    "year": 1881,
    "people": "",
    "place": "",
    "summary": "电弧焊约 1881 年 出现，建立在 数学 之上；它把 零件加工、批量制造 变成可稳定复现的能力，是 制造与工具 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "电弧焊在 1881 年 前后出现，依托 数学 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，电弧焊仍是 零件加工 的底层支撑，并作为 制造与工具 的基础能力持续发挥作用。"
      }
    ],
    "significance": "电弧焊把 数学 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mfg_gasweld",
    "name": "气焊",
    "en": "Gas Welding",
    "category": "manufact",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "气焊约 1900 年 出现，建立在 数学 之上；它把 零件加工、批量制造 变成可稳定复现的能力，是 制造与工具 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "气焊在 1900 年 前后出现，依托 数学 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，气焊仍是 零件加工 的底层支撑，并作为 制造与工具 的基础能力持续发挥作用。"
      }
    ],
    "significance": "气焊把 数学 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mfg_resistweld",
    "name": "电阻焊",
    "en": "Resistance Welding",
    "category": "manufact",
    "era": "industrial",
    "date": "1877 年",
    "year": 1877,
    "people": "",
    "place": "",
    "summary": "电阻焊约 1877 年 出现，建立在 数学 之上；它把 零件加工、批量制造 变成可稳定复现的能力，是 制造与工具 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "电阻焊在 1877 年 前后出现，依托 数学 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，电阻焊仍是 零件加工 的底层支撑，并作为 制造与工具 的基础能力持续发挥作用。"
      }
    ],
    "significance": "电阻焊把 数学 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mfg_laserweld",
    "name": "激光焊",
    "en": "Laser Welding",
    "category": "manufact",
    "era": "info",
    "date": "1960 年",
    "year": 1960,
    "people": "",
    "place": "",
    "summary": "激光焊约 1960 年 出现，建立在 数学 之上；它把 零件加工、批量制造 变成可稳定复现的能力，是 制造与工具 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "激光焊在 1960 年 前后出现，依托 数学 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，激光焊仍是 零件加工 的底层支撑，并作为 制造与工具 的基础能力持续发挥作用。"
      }
    ],
    "significance": "激光焊把 数学 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mfg_fsw",
    "name": "搅拌摩擦焊",
    "en": "Friction Stir Welding",
    "category": "manufact",
    "era": "info",
    "date": "1991 年",
    "year": 1991,
    "people": "",
    "place": "",
    "summary": "搅拌摩擦焊约 1991 年 出现，建立在 数学 之上；它把 零件加工、批量制造 变成可稳定复现的能力，是 制造与工具 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "搅拌摩擦焊在 1991 年 前后出现，依托 数学 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，搅拌摩擦焊仍是 零件加工 的底层支撑，并作为 制造与工具 的基础能力持续发挥作用。"
      }
    ],
    "significance": "搅拌摩擦焊把 数学 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mfg_ebw",
    "name": "电子束焊",
    "en": "Electron Beam Welding",
    "category": "manufact",
    "era": "info",
    "date": "1958 年",
    "year": 1958,
    "people": "",
    "place": "",
    "summary": "电子束焊约 1958 年 出现，建立在 数学 之上；它把 零件加工、批量制造 变成可稳定复现的能力，是 制造与工具 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "电子束焊在 1958 年 前后出现，依托 数学 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，电子束焊仍是 零件加工 的底层支撑，并作为 制造与工具 的基础能力持续发挥作用。"
      }
    ],
    "significance": "电子束焊把 数学 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mfg_braze",
    "name": "钎焊",
    "en": "Brazing",
    "category": "manufact",
    "era": "ancient",
    "date": "公元前 2000 年",
    "year": -2000,
    "people": "",
    "place": "",
    "summary": "钎焊约 公元前 2000 年 出现，建立在 数学 之上；它把 零件加工、批量制造 变成可稳定复现的能力，是 制造与工具 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "钎焊在 公元前 2000 年 前后出现，依托 数学 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，钎焊仍是 零件加工 的底层支撑，并作为 制造与工具 的基础能力持续发挥作用。"
      }
    ],
    "significance": "钎焊把 数学 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mfg_adhesive",
    "name": "胶接",
    "en": "Adhesive Bonding",
    "category": "manufact",
    "era": "ancient",
    "date": "公元前 2000 年",
    "year": -2000,
    "people": "",
    "place": "",
    "summary": "胶接约 公元前 2000 年 出现，建立在 数学 之上；它把 零件加工、批量制造 变成可稳定复现的能力，是 制造与工具 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "胶接在 公元前 2000 年 前后出现，依托 数学 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，胶接仍是 零件加工 的底层支撑，并作为 制造与工具 的基础能力持续发挥作用。"
      }
    ],
    "significance": "胶接把 数学 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mfg_bolt",
    "name": "螺纹连接",
    "en": "Bolting",
    "category": "manufact",
    "era": "classical",
    "date": "公元前 300 年",
    "year": -300,
    "people": "",
    "place": "",
    "summary": "螺纹连接约 公元前 300 年 成熟，建立在 高炉炼铁、数学、车床 之上完成关键突破；其能力延伸到 零件加工、批量制造，并为 螺纹 的发展铺平了道路。",
    "dependsOn": ["mat_blastfurnace","mathematics","mfg_lathe"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "古典时代",
        "text": "螺纹连接在 公元前 300 年 前后出现，依托 高炉炼铁 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，螺纹连接仍是 零件加工 的底层支撑，并持续影响 螺纹。"
      }
    ],
    "significance": "螺纹连接把 高炉炼铁 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 螺纹。"
  },
{
    "id": "mfg_thread",
    "name": "螺纹",
    "en": "Screw Thread",
    "category": "manufact",
    "era": "classical",
    "date": "公元前 300 年",
    "year": -300,
    "people": "",
    "place": "",
    "summary": "螺纹在 公元前 300 年 前后成形，依托 高炉炼铁、数学、螺纹连接 把 零件加工、批量制造 落到实处，并成为 制造与工具 中承上启下的一环，直接支撑了 自行车、马镫、马蹄铁 等后续技术。",
    "dependsOn": ["mat_blastfurnace","mathematics","mfg_bolt"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "古典时代",
        "text": "螺纹在 公元前 300 年 前后出现，依托 高炉炼铁 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，螺纹仍是 零件加工 的底层支撑，并持续影响 自行车、马镫、马蹄铁。"
      }
    ],
    "significance": "螺纹把 高炉炼铁 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 自行车、马镫、马蹄铁。"
  },
{
    "id": "mfg_standard",
    "name": "零件标准化",
    "en": "Part Standardization",
    "category": "manufact",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "零件标准化约 1800 年 出现，建立在 数学 之上；它把 零件加工、批量制造 变成可稳定复现的能力，是 制造与工具 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "零件标准化在 1800 年 前后出现，依托 数学 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，零件标准化仍是 零件加工 的底层支撑，并作为 制造与工具 的基础能力持续发挥作用。"
      }
    ],
    "significance": "零件标准化把 数学 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mfg_assembly",
    "name": "装配线",
    "en": "Assembly Line",
    "category": "manufact",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "装配线约 1900 年 出现，建立在 数学 之上；它把 零件加工、批量制造 变成可稳定复现的能力，是 制造与工具 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "装配线在 1900 年 前后出现，依托 数学 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，装配线仍是 零件加工 的底层支撑，并作为 制造与工具 的基础能力持续发挥作用。"
      }
    ],
    "significance": "装配线把 数学 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mfg_fixture",
    "name": "工装夹具",
    "en": "Jig and Fixture",
    "category": "manufact",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "工装夹具约 1800 年 出现，建立在 数学 之上；它把 零件加工、批量制造 变成可稳定复现的能力，是 制造与工具 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "工装夹具在 1800 年 前后出现，依托 数学 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，工装夹具仍是 零件加工 的底层支撑，并作为 制造与工具 的基础能力持续发挥作用。"
      }
    ],
    "significance": "工装夹具把 数学 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mfg_mold",
    "name": "模具",
    "en": "Mold",
    "category": "manufact",
    "era": "ancient",
    "date": "公元前 3000 年",
    "year": -3000,
    "people": "",
    "place": "",
    "summary": "模具在 公元前 3000 年 前后成形，依托 青铜铸造 把 零件加工、批量制造 落到实处，并成为 制造与工具 中承上启下的一环，直接支撑了 注塑 等后续技术。",
    "dependsOn": ["bronze_casting"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "模具在 公元前 3000 年 前后出现，依托 青铜铸造 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，模具仍是 零件加工 的底层支撑，并持续影响 注塑。"
      }
    ],
    "significance": "模具把 青铜铸造 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 注塑。"
  },
{
    "id": "mfg_injection",
    "name": "注塑",
    "en": "Injection Molding",
    "category": "manufact",
    "era": "industrial",
    "date": "1872 年",
    "year": 1872,
    "people": "",
    "place": "",
    "summary": "注塑在 1872 年 前后出现，把熔融的塑性材料高压注入闭合模具，一次成形出形状复杂的零件。它依赖模具这一成形母体、工具钢制成的模腔，以及车床等精密加工手段。",
    "dependsOn": ["mfg_mold","mat_toolsteel","mfg_lathe"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "注塑在 1872 年 前后出现，依托 模具 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，注塑仍是 零件加工 的底层支撑，并作为 制造与工具 的基础能力持续发挥作用。"
      }
    ],
    "significance": "注塑把成形从「去除材料」变成「填充型腔」：只要做出模具，同一零件就能被无限次复制——这是批量生产在塑料时代的形态。",
  },
{
    "id": "mfg_blow",
    "name": "吹塑",
    "en": "Blow Molding",
    "category": "manufact",
    "era": "electrical",
    "date": "1930 年",
    "year": 1930,
    "people": "",
    "place": "",
    "summary": "吹塑约 1930 年 出现，建立在 数学 之上；它把 零件加工、批量制造 变成可稳定复现的能力，是 制造与工具 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "吹塑在 1930 年 前后出现，依托 数学 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，吹塑仍是 零件加工 的底层支撑，并作为 制造与工具 的基础能力持续发挥作用。"
      }
    ],
    "significance": "吹塑把 数学 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mfg_extrude2",
    "name": "挤出成型",
    "en": "Extrusion Molding",
    "category": "manufact",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "挤出成型约 1800 年 出现，建立在 数学 之上；它把 零件加工、批量制造 变成可稳定复现的能力，是 制造与工具 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "挤出成型在 1800 年 前后出现，依托 数学 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，挤出成型仍是 零件加工 的底层支撑，并作为 制造与工具 的基础能力持续发挥作用。"
      }
    ],
    "significance": "挤出成型把 数学 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mfg_rolling2",
    "name": "压延",
    "en": "Rolling Forming",
    "category": "manufact",
    "era": "earlymodern",
    "date": "1500 年",
    "year": 1500,
    "people": "",
    "place": "",
    "summary": "压延约 1500 年 成熟，建立在 轧制、数学 之上完成关键突破；其能力延伸到 零件加工、批量制造，并为 铁路列车、框架结构 的发展铺平了道路。",
    "dependsOn": ["mat_rolling","mathematics"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "近代早期",
        "text": "压延在 1500 年 前后出现，依托 轧制 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，压延仍是 零件加工 的底层支撑，并持续影响 铁路列车、框架结构。"
      }
    ],
    "significance": "压延把 轧制 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 铁路列车、框架结构。"
  },
{
    "id": "mfg_wiredraw",
    "name": "拉丝",
    "en": "Wire Drawing",
    "category": "manufact",
    "era": "medieval",
    "date": "1200 年",
    "year": 1200,
    "people": "",
    "place": "",
    "summary": "拉丝约 1200 年 成熟，建立在 拉拔、数学 之上完成关键突破；其能力延伸到 零件加工、批量制造，并为 索道、电梯、手榴弹 的发展铺平了道路。",
    "dependsOn": ["mat_drawing","mathematics"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "中世纪",
        "text": "拉丝在 1200 年 前后出现，依托 拉拔 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，拉丝仍是 零件加工 的底层支撑，并持续影响 索道、电梯、手榴弹。"
      }
    ],
    "significance": "拉丝把 拉拔 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 索道、电梯、手榴弹。"
  },
{
    "id": "mfg_furnace",
    "name": "热处理炉",
    "en": "Heat Treatment Furnace",
    "category": "manufact",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "热处理炉约 1800 年 出现，建立在 数学 之上；它把 零件加工、批量制造 变成可稳定复现的能力，是 制造与工具 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "热处理炉在 1800 年 前后出现，依托 数学 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，热处理炉仍是 零件加工 的底层支撑，并作为 制造与工具 的基础能力持续发挥作用。"
      }
    ],
    "significance": "热处理炉把 数学 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mfg_vacfurnace",
    "name": "真空炉",
    "en": "Vacuum Furnace",
    "category": "manufact",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "people": "",
    "place": "",
    "summary": "真空炉约 1950 年 出现，建立在 数学 之上；它把 零件加工、批量制造 变成可稳定复现的能力，是 制造与工具 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "真空炉在 1950 年 前后出现，依托 数学 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，真空炉仍是 零件加工 的底层支撑，并作为 制造与工具 的基础能力持续发挥作用。"
      }
    ],
    "significance": "真空炉把 数学 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mfg_induction",
    "name": "感应加热",
    "en": "Induction Heating",
    "category": "manufact",
    "era": "industrial",
    "date": "1887 年",
    "year": 1887,
    "people": "",
    "place": "",
    "summary": "感应加热约 1887 年 出现，建立在 数学 之上；它把 零件加工、批量制造 变成可稳定复现的能力，是 制造与工具 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "感应加热在 1887 年 前后出现，依托 数学 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，感应加热仍是 零件加工 的底层支撑，并作为 制造与工具 的基础能力持续发挥作用。"
      }
    ],
    "significance": "感应加热把 数学 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mfg_shotblast",
    "name": "喷丸",
    "en": "Shot Peening",
    "category": "manufact",
    "era": "electrical",
    "date": "1930 年",
    "year": 1930,
    "people": "",
    "place": "",
    "summary": "喷丸约 1930 年 出现，建立在 数学 之上；它把 零件加工、批量制造 变成可稳定复现的能力，是 制造与工具 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "喷丸在 1930 年 前后出现，依托 数学 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，喷丸仍是 零件加工 的底层支撑，并作为 制造与工具 的基础能力持续发挥作用。"
      }
    ],
    "significance": "喷丸把 数学 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mfg_polish",
    "name": "抛光",
    "en": "Polishing",
    "category": "manufact",
    "era": "ancient",
    "date": "公元前 3000 年",
    "year": -3000,
    "people": "",
    "place": "",
    "summary": "抛光约 公元前 3000 年 成熟，建立在 磨料 之上完成关键突破；其能力延伸到 零件加工、批量制造，并为 研磨 的发展铺平了道路。",
    "dependsOn": ["mfg_abrasive"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "抛光在 公元前 3000 年 前后出现，依托 磨料 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，抛光仍是 零件加工 的底层支撑，并持续影响 研磨。"
      }
    ],
    "significance": "抛光把 磨料 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 研磨。"
  },
{
    "id": "mfg_lapp",
    "name": "研磨",
    "en": "Lapping",
    "category": "manufact",
    "era": "ancient",
    "date": "公元前 3000 年",
    "year": -3000,
    "people": "",
    "place": "",
    "summary": "研磨约 公元前 3000 年 出现，建立在 抛光 之上；它把 零件加工、批量制造 变成可稳定复现的能力，是 制造与工具 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_polish"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "研磨在 公元前 3000 年 前后出现，依托 抛光 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，研磨仍是 零件加工 的底层支撑，并作为 制造与工具 的基础能力持续发挥作用。"
      }
    ],
    "significance": "研磨把 抛光 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mfg_ultraprecise",
    "name": "超精密加工",
    "en": "Ultra-Precision Machining",
    "category": "manufact",
    "era": "info",
    "date": "1960 年",
    "year": 1960,
    "people": "",
    "place": "",
    "summary": "超精密加工约 1960 年 出现，建立在 数学、车床与精密加工、电子学 之上；它把 零件加工、批量制造 变成可稳定复现的能力，是 制造与工具 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics","lathe","electronics","automation"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "超精密加工在 1960 年 前后出现，依托 数学 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，超精密加工仍是 零件加工 的底层支撑，并作为 制造与工具 的基础能力持续发挥作用。"
      }
    ],
    "significance": "超精密加工把 数学 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mfg_micro",
    "name": "微细加工",
    "en": "Microfabrication",
    "category": "manufact",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "people": "",
    "place": "",
    "summary": "微细加工约 1950 年 出现，建立在 数学、车床与精密加工、电子学 之上；它把 零件加工、批量制造 变成可稳定复现的能力，是 制造与工具 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics","lathe","electronics"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "微细加工在 1950 年 前后出现，依托 数学 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，微细加工仍是 零件加工 的底层支撑，并作为 制造与工具 的基础能力持续发挥作用。"
      }
    ],
    "significance": "微细加工把 数学 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mfg_nanoimprint",
    "name": "纳米压印",
    "en": "Nanoimprint",
    "category": "manufact",
    "era": "info",
    "date": "1995 年",
    "year": 1995,
    "people": "",
    "place": "",
    "summary": "纳米压印约 1995 年 出现，建立在 数学 之上；它把 零件加工、批量制造 变成可稳定复现的能力，是 制造与工具 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "纳米压印在 1995 年 前后出现，依托 数学 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，纳米压印仍是 零件加工 的底层支撑，并作为 制造与工具 的基础能力持续发挥作用。"
      }
    ],
    "significance": "纳米压印把 数学 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mfg_ecm",
    "name": "电解加工",
    "en": "Electrochemical Machining",
    "category": "manufact",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "people": "",
    "place": "",
    "summary": "电解加工约 1950 年 出现，建立在 数学 之上；它把 零件加工、批量制造 变成可稳定复现的能力，是 制造与工具 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "电解加工在 1950 年 前后出现，依托 数学 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，电解加工仍是 零件加工 的底层支撑，并作为 制造与工具 的基础能力持续发挥作用。"
      }
    ],
    "significance": "电解加工把 数学 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mfg_chemill",
    "name": "化学铣切",
    "en": "Chemical Milling",
    "category": "manufact",
    "era": "electrical",
    "date": "1940 年",
    "year": 1940,
    "people": "",
    "place": "",
    "summary": "化学铣切约 1940 年 出现，建立在 数学 之上；它把 零件加工、批量制造 变成可稳定复现的能力，是 制造与工具 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "化学铣切在 1940 年 前后出现，依托 数学 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，化学铣切仍是 零件加工 的底层支撑，并作为 制造与工具 的基础能力持续发挥作用。"
      }
    ],
    "significance": "化学铣切把 数学 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mfg_pim",
    "name": "金属注射成形",
    "en": "Metal Injection Molding",
    "category": "manufact",
    "era": "info",
    "date": "1970 年",
    "year": 1970,
    "people": "",
    "place": "",
    "summary": "金属注射成形约 1970 年 出现，建立在 数学 之上；它把 零件加工、批量制造 变成可稳定复现的能力，是 制造与工具 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "金属注射成形在 1970 年 前后出现，依托 数学 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，金属注射成形仍是 零件加工 的底层支撑，并作为 制造与工具 的基础能力持续发挥作用。"
      }
    ],
    "significance": "金属注射成形把 数学 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mfg_hip",
    "name": "热等静压",
    "en": "Hot Isostatic Pressing",
    "category": "manufact",
    "era": "info",
    "date": "1955 年",
    "year": 1955,
    "people": "",
    "place": "",
    "summary": "热等静压约 1955 年 出现，建立在 数学 之上；它把 零件加工、批量制造 变成可稳定复现的能力，是 制造与工具 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "热等静压在 1955 年 前后出现，依托 数学 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，热等静压仍是 零件加工 的底层支撑，并作为 制造与工具 的基础能力持续发挥作用。"
      }
    ],
    "significance": "热等静压把 数学 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mfg_cmm",
    "name": "三坐标测量",
    "en": "CMM",
    "category": "manufact",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "people": "",
    "place": "",
    "summary": "三坐标测量约 1950 年 出现，建立在 数学 之上；它把 零件加工、批量制造 变成可稳定复现的能力，是 制造与工具 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "三坐标测量在 1950 年 前后出现，依托 数学 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，三坐标测量仍是 零件加工 的底层支撑，并作为 制造与工具 的基础能力持续发挥作用。"
      }
    ],
    "significance": "三坐标测量把 数学 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mfg_reverse",
    "name": "逆向工程",
    "en": "Reverse Engineering",
    "category": "manufact",
    "era": "info",
    "date": "1980 年",
    "year": 1980,
    "people": "",
    "place": "",
    "summary": "逆向工程约 1980 年 出现，建立在 数学 之上；它把 零件加工、批量制造 变成可稳定复现的能力，是 制造与工具 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "逆向工程在 1980 年 前后出现，依托 数学 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，逆向工程仍是 零件加工 的底层支撑，并作为 制造与工具 的基础能力持续发挥作用。"
      }
    ],
    "significance": "逆向工程把 数学 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mfg_plc",
    "name": "可编程逻辑控制器",
    "en": "PLC",
    "category": "manufact",
    "era": "info",
    "date": "1968 年",
    "year": 1968,
    "people": "",
    "place": "",
    "summary": "可编程逻辑控制器约 1968 年 出现，建立在 数学 之上；它把 零件加工、批量制造 变成可稳定复现的能力，是 制造与工具 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "可编程逻辑控制器在 1968 年 前后出现，依托 数学 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，可编程逻辑控制器仍是 零件加工 的底层支撑，并作为 制造与工具 的基础能力持续发挥作用。"
      }
    ],
    "significance": "可编程逻辑控制器把 数学 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mfg_servo",
    "name": "伺服系统",
    "en": "Servo System",
    "category": "manufact",
    "era": "electrical",
    "date": "1940 年",
    "year": 1940,
    "people": "",
    "place": "",
    "summary": "伺服系统约 1940 年 成熟，建立在 数学 之上完成关键突破；其能力延伸到 零件加工、批量制造，并为 直线电机、扫描振镜 的发展铺平了道路。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "伺服系统在 1940 年 前后出现，依托 数学 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，伺服系统仍是 零件加工 的底层支撑，并持续影响 直线电机、扫描振镜。"
      }
    ],
    "significance": "伺服系统把 数学 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 直线电机、扫描振镜。"
  },
{
    "id": "mfg_ballscrew",
    "name": "滚珠丝杠",
    "en": "Ball Screw",
    "category": "manufact",
    "era": "industrial",
    "date": "1898 年",
    "year": 1898,
    "people": "",
    "place": "",
    "summary": "滚珠丝杠约 1898 年 出现，建立在 无线输电、数学 之上；它把 零件加工、批量制造 变成可稳定复现的能力，是 制造与工具 中从经验走向方法的关键一步。",
    "dependsOn": ["ene_wpt","mathematics"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "滚珠丝杠在 1898 年 前后出现，依托 无线输电 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，滚珠丝杠仍是 零件加工 的底层支撑，并作为 制造与工具 的基础能力持续发挥作用。"
      }
    ],
    "significance": "滚珠丝杠把 无线输电 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mfg_linearmotor",
    "name": "直线电机",
    "en": "Linear Motor",
    "category": "manufact",
    "era": "electrical",
    "date": "1940 年",
    "year": 1940,
    "people": "",
    "place": "",
    "summary": "直线电机在 1940 年 前后成形，依托 数学、伺服系统 把 零件加工、批量制造 落到实处，并成为 制造与工具 中承上启下的一环，直接支撑了 磁悬浮列车 等后续技术。",
    "dependsOn": ["mathematics", "mfg_servo"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "直线电机在 1940 年 前后出现，依托 数学 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，直线电机仍是 零件加工 的底层支撑，并持续影响 磁悬浮列车。"
      }
    ],
    "significance": "直线电机把 数学 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 磁悬浮列车。"
  },
{
    "id": "mfg_harmonic",
    "name": "谐波减速器",
    "en": "Harmonic Drive",
    "category": "manufact",
    "era": "info",
    "date": "1955 年",
    "year": 1955,
    "people": "",
    "place": "",
    "summary": "谐波减速器约 1955 年 出现，建立在 数学 之上；它把 零件加工、批量制造 变成可稳定复现的能力，是 制造与工具 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "谐波减速器在 1955 年 前后出现，依托 数学 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，谐波减速器仍是 零件加工 的底层支撑，并作为 制造与工具 的基础能力持续发挥作用。"
      }
    ],
    "significance": "谐波减速器把 数学 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mfg_precisionbearing",
    "name": "精密轴承",
    "en": "Precision Bearing",
    "category": "manufact",
    "era": "industrial",
    "date": "1883 年",
    "year": 1883,
    "people": "",
    "place": "",
    "summary": "精密轴承约 1883 年 出现，建立在 水力发电站、数学 之上；它把 零件加工、批量制造 变成可稳定复现的能力，是 制造与工具 中从经验走向方法的关键一步。",
    "dependsOn": ["ene_hydroplant","mathematics"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "精密轴承在 1883 年 前后出现，依托 水力发电站 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，精密轴承仍是 零件加工 的底层支撑，并作为 制造与工具 的基础能力持续发挥作用。"
      }
    ],
    "significance": "精密轴承把 水力发电站 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mfg_gauge",
    "name": "量具",
    "en": "Gauge",
    "category": "manufact",
    "era": "ancient",
    "date": "公元前 2000 年",
    "year": -2000,
    "people": "",
    "place": "",
    "summary": "量具约 公元前 2000 年 出现，建立在 数学 之上；它把 零件加工、批量制造 变成可稳定复现的能力，是 制造与工具 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "量具在 公元前 2000 年 前后出现，依托 数学 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，量具仍是 零件加工 的底层支撑，并作为 制造与工具 的基础能力持续发挥作用。"
      }
    ],
    "significance": "量具把 数学 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mfg_spcc",
    "name": "统计过程控制",
    "en": "SPC",
    "category": "manufact",
    "era": "electrical",
    "date": "1924 年",
    "year": 1924,
    "people": "",
    "place": "",
    "summary": "统计过程控制约 1924 年 出现，建立在 数学、流水线 之上；它把 零件加工、批量制造 变成可稳定复现的能力，是 制造与工具 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics","assembly_line"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "统计过程控制在 1924 年 前后出现，依托 数学 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，统计过程控制仍是 零件加工 的底层支撑，并作为 制造与工具 的基础能力持续发挥作用。"
      }
    ],
    "significance": "统计过程控制把 数学 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mfg_sixsigma",
    "name": "六西格玛",
    "en": "Six Sigma",
    "category": "manufact",
    "era": "info",
    "date": "1986 年",
    "year": 1986,
    "people": "",
    "place": "",
    "summary": "六西格玛约 1986 年 出现，建立在 数学 之上；它把 零件加工、批量制造 变成可稳定复现的能力，是 制造与工具 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "六西格玛在 1986 年 前后出现，依托 数学 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，六西格玛仍是 零件加工 的底层支撑，并作为 制造与工具 的基础能力持续发挥作用。"
      }
    ],
    "significance": "六西格玛把 数学 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mfg_lean",
    "name": "精益生产",
    "en": "Lean Production",
    "category": "manufact",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "people": "",
    "place": "",
    "summary": "精益生产约 1950 年 出现，建立在 数学 之上；它把 零件加工、批量制造 变成可稳定复现的能力，是 制造与工具 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "精益生产在 1950 年 前后出现，依托 数学 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，精益生产仍是 零件加工 的底层支撑，并作为 制造与工具 的基础能力持续发挥作用。"
      }
    ],
    "significance": "精益生产把 数学 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mfg_kanban",
    "name": "看板管理",
    "en": "Kanban",
    "category": "manufact",
    "era": "electrical",
    "date": "1940 年",
    "year": 1940,
    "people": "",
    "place": "",
    "summary": "看板管理约 1940 年 出现，建立在 数学 之上；它把 零件加工、批量制造 变成可稳定复现的能力，是 制造与工具 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "看板管理在 1940 年 前后出现，依托 数学 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，看板管理仍是 零件加工 的底层支撑，并作为 制造与工具 的基础能力持续发挥作用。"
      }
    ],
    "significance": "看板管理把 数学 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mfg_cam",
    "name": "计算机辅助制造",
    "en": "CAM",
    "category": "manufact",
    "era": "info",
    "date": "1970 年",
    "year": 1970,
    "people": "",
    "place": "",
    "summary": "计算机辅助制造约 1970 年 成熟，建立在 数学 之上完成关键突破；其能力延伸到 零件加工、批量制造，并为 空间站、防抱死制动、建筑信息模型 的发展铺平了道路。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "计算机辅助制造在 1970 年 前后出现，依托 数学 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，计算机辅助制造仍是 零件加工 的底层支撑，并持续影响 空间站、防抱死制动、建筑信息模型。"
      }
    ],
    "significance": "计算机辅助制造把 数学 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 空间站、防抱死制动、建筑信息模型。"
  },
{
    "id": "mfg_fms",
    "name": "柔性制造系统",
    "en": "FMS",
    "category": "manufact",
    "era": "info",
    "date": "1967 年",
    "year": 1967,
    "people": "",
    "place": "",
    "summary": "柔性制造系统约 1967 年 出现，建立在 数学 之上；它把 零件加工、批量制造 变成可稳定复现的能力，是 制造与工具 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "柔性制造系统在 1967 年 前后出现，依托 数学 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，柔性制造系统仍是 零件加工 的底层支撑，并作为 制造与工具 的基础能力持续发挥作用。"
      }
    ],
    "significance": "柔性制造系统把 数学 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mfg_adaptive",
    "name": "自适应控制",
    "en": "Adaptive Control",
    "category": "manufact",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "people": "",
    "place": "",
    "summary": "自适应控制约 1950 年 出现，建立在 数学 之上；它把 零件加工、批量制造 变成可稳定复现的能力，是 制造与工具 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "自适应控制在 1950 年 前后出现，依托 数学 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，自适应控制仍是 零件加工 的底层支撑，并作为 制造与工具 的基础能力持续发挥作用。"
      }
    ],
    "significance": "自适应控制把 数学 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mfg_digitaltwin",
    "name": "数字孪生",
    "en": "Digital Twin",
    "category": "manufact",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "数字孪生约 2000 年 出现，建立在 数学、仿真、计算机辅助设计 之上；它把 零件加工、批量制造 变成可稳定复现的能力，是 制造与工具 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics","simulation","cad"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "数字孪生在 2000 年 前后出现，依托 数学 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，数字孪生仍是 零件加工 的底层支撑，并作为 制造与工具 的基础能力持续发挥作用。"
      }
    ],
    "significance": "数字孪生把 数学 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mfg_cobot",
    "name": "协作机器人",
    "en": "Collaborative Robot",
    "category": "manufact",
    "era": "info",
    "date": "1996 年",
    "year": 1996,
    "people": "",
    "place": "",
    "summary": "协作机器人约 1996 年 出现，建立在 数学 之上；它把 零件加工、批量制造 变成可稳定复现的能力，是 制造与工具 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "协作机器人在 1996 年 前后出现，依托 数学 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，协作机器人仍是 零件加工 的底层支撑，并作为 制造与工具 的基础能力持续发挥作用。"
      }
    ],
    "significance": "协作机器人把 数学 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mfg_selfassemble",
    "name": "自组装",
    "en": "Self-Assembly",
    "category": "manufact",
    "era": "info",
    "date": "1990 年",
    "year": 1990,
    "people": "",
    "place": "",
    "summary": "自组装约 1990 年 出现，建立在 数学 之上；它把 零件加工、批量制造 变成可稳定复现的能力，是 制造与工具 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "自组装在 1990 年 前后出现，依托 数学 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，自组装仍是 零件加工 的底层支撑，并作为 制造与工具 的基础能力持续发挥作用。"
      }
    ],
    "significance": "自组装把 数学 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mfg_bionics",
    "name": "仿生制造",
    "en": "Biomimetic Manufacturing",
    "category": "manufact",
    "era": "info",
    "date": "1990 年",
    "year": 1990,
    "people": "",
    "place": "",
    "summary": "仿生制造约 1990 年 出现，建立在 数学 之上；它把 零件加工、批量制造 变成可稳定复现的能力，是 制造与工具 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "仿生制造在 1990 年 前后出现，依托 数学 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，仿生制造仍是 零件加工 的底层支撑，并作为 制造与工具 的基础能力持续发挥作用。"
      }
    ],
    "significance": "仿生制造把 数学 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mfg_grindingwheel",
    "name": "砂轮",
    "en": "Grinding Wheel",
    "category": "manufact",
    "era": "industrial",
    "date": "1840 年",
    "year": 1840,
    "people": "",
    "place": "",
    "summary": "砂轮约 1840 年 出现，建立在 数学 之上；它把 零件加工、批量制造 变成可稳定复现的能力，是 制造与工具 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "砂轮在 1840 年 前后出现，依托 数学 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，砂轮仍是 零件加工 的底层支撑，并作为 制造与工具 的基础能力持续发挥作用。"
      }
    ],
    "significance": "砂轮把 数学 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mfg_abrasive",
    "name": "磨料",
    "en": "Abrasive",
    "category": "manufact",
    "era": "prehistoric",
    "date": "公元前 5000 年",
    "year": -5000,
    "people": "",
    "place": "",
    "summary": "磨料约 公元前 5000 年 成熟，建立在 手斧 之上完成关键突破；其能力延伸到 零件加工、批量制造，并为 抛光 的发展铺平了道路。",
    "dependsOn": ["mfg_handaxe"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "史前时代",
        "text": "磨料在 公元前 5000 年 前后出现，依托 手斧 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，磨料仍是 零件加工 的底层支撑，并持续影响 抛光。"
      }
    ],
    "significance": "磨料把 手斧 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 抛光。"
  },
{
    "id": "mfg_toolholder",
    "name": "刀柄",
    "en": "Tool Holder",
    "category": "manufact",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "刀柄约 1900 年 出现，建立在 数学 之上；它把 零件加工、批量制造 变成可稳定复现的能力，是 制造与工具 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "刀柄在 1900 年 前后出现，依托 数学 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，刀柄仍是 零件加工 的底层支撑，并作为 制造与工具 的基础能力持续发挥作用。"
      }
    ],
    "significance": "刀柄把 数学 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mfg_coolant",
    "name": "切削液",
    "en": "Cutting Fluid",
    "category": "manufact",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "切削液约 1900 年 出现，建立在 数学 之上；它把 零件加工、批量制造 变成可稳定复现的能力，是 制造与工具 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "切削液在 1900 年 前后出现，依托 数学 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，切削液仍是 零件加工 的底层支撑，并作为 制造与工具 的基础能力持续发挥作用。"
      }
    ],
    "significance": "切削液把 数学 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mfg_edmwire",
    "name": "电火花线切割机",
    "en": "Wire EDM Machine",
    "category": "manufact",
    "era": "info",
    "date": "1960 年",
    "year": 1960,
    "people": "",
    "place": "",
    "summary": "电火花线切割机约 1960 年 出现，建立在 数学 之上；它把 零件加工、批量制造 变成可稳定复现的能力，是 制造与工具 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "电火花线切割机在 1960 年 前后出现，依托 数学 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，电火花线切割机仍是 零件加工 的底层支撑，并作为 制造与工具 的基础能力持续发挥作用。"
      }
    ],
    "significance": "电火花线切割机把 数学 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mfg_roboticweld",
    "name": "焊接机器人",
    "en": "Welding Robot",
    "category": "manufact",
    "era": "info",
    "date": "1980 年",
    "year": 1980,
    "people": "",
    "place": "",
    "summary": "焊接机器人约 1980 年 出现，建立在 数学 之上；它把 零件加工、批量制造 变成可稳定复现的能力，是 制造与工具 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "焊接机器人在 1980 年 前后出现，依托 数学 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，焊接机器人仍是 零件加工 的底层支撑，并作为 制造与工具 的基础能力持续发挥作用。"
      }
    ],
    "significance": "焊接机器人把 数学 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mfg_agv",
    "name": "自动导引车",
    "en": "AGV",
    "category": "manufact",
    "era": "info",
    "date": "1953 年",
    "year": 1953,
    "people": "",
    "place": "",
    "summary": "自动导引车约 1953 年 出现，建立在 数学 之上；它把 零件加工、批量制造 变成可稳定复现的能力，是 制造与工具 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "自动导引车在 1953 年 前后出现，依托 数学 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，自动导引车仍是 零件加工 的底层支撑，并作为 制造与工具 的基础能力持续发挥作用。"
      }
    ],
    "significance": "自动导引车把 数学 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mfg_aps",
    "name": "高级计划排程",
    "en": "APS",
    "category": "manufact",
    "era": "info",
    "date": "1990 年",
    "year": 1990,
    "people": "",
    "place": "",
    "summary": "高级计划排程在 1990 年 前后成形，依托 数学 把 零件加工、批量制造 落到实处，并成为 制造与工具 中承上启下的一环，直接支撑了 制造执行系统 等后续技术。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "高级计划排程在 1990 年 前后出现，依托 数学 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，高级计划排程仍是 零件加工 的底层支撑，并持续影响 制造执行系统。"
      }
    ],
    "significance": "高级计划排程把 数学 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 制造执行系统。"
  },
{
    "id": "mfg_quality",
    "name": "全面质量管理",
    "en": "TQM",
    "category": "manufact",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "people": "",
    "place": "",
    "summary": "全面质量管理约 1950 年 出现，建立在 数学 之上；它把 零件加工、批量制造 变成可稳定复现的能力，是 制造与工具 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "全面质量管理在 1950 年 前后出现，依托 数学 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，全面质量管理仍是 零件加工 的底层支撑，并作为 制造与工具 的基础能力持续发挥作用。"
      }
    ],
    "significance": "全面质量管理把 数学 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mfg_mes",
    "name": "制造执行系统",
    "en": "MES",
    "category": "manufact",
    "era": "info",
    "date": "1990 年",
    "year": 1990,
    "people": "",
    "place": "",
    "summary": "制造执行系统约 1990 年 出现，建立在 数学、高级计划排程 之上；它把 零件加工、批量制造 变成可稳定复现的能力，是 制造与工具 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics","mfg_aps"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "制造执行系统在 1990 年 前后出现，依托 数学 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，制造执行系统仍是 零件加工 的底层支撑，并作为 制造与工具 的基础能力持续发挥作用。"
      }
    ],
    "significance": "制造执行系统把 数学 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mfg_industry40",
    "name": "工业 4.0",
    "en": "Industry 4.0",
    "category": "manufact",
    "era": "intelligent",
    "date": "2011 年",
    "year": 2011,
    "people": "",
    "place": "",
    "summary": "工业 4.0约 2011 年 出现，建立在 数学 之上；它把 零件加工、批量制造 变成可稳定复现的能力，是 制造与工具 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "工业 4.0在 2011 年 前后出现，依托 数学 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，工业 4.0仍是 零件加工 的底层支撑，并作为 制造与工具 的基础能力持续发挥作用。"
      }
    ],
    "significance": "工业 4.0把 数学 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mfg_ecmg",
    "name": "电解磨削",
    "en": "Electrochemical Grinding",
    "category": "manufact",
    "era": "info",
    "date": "1960 年",
    "year": 1960,
    "people": "",
    "place": "",
    "summary": "电解磨削约 1960 年 出现，建立在 数学 之上；它把 零件加工、批量制造 变成可稳定复现的能力，是 制造与工具 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "电解磨削在 1960 年 前后出现，依托 数学 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，电解磨削仍是 零件加工 的底层支撑，并作为 制造与工具 的基础能力持续发挥作用。"
      }
    ],
    "significance": "电解磨削把 数学 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mfg_ultrasonicm",
    "name": "超声加工",
    "en": "Ultrasonic Machining",
    "category": "manufact",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "people": "",
    "place": "",
    "summary": "超声加工约 1950 年 出现，建立在 数学、车床与精密加工、电子学 之上；它把 零件加工、批量制造 变成可稳定复现的能力，是 制造与工具 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics","lathe","electronics"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "超声加工在 1950 年 前后出现，依托 数学 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，超声加工仍是 零件加工 的底层支撑，并作为 制造与工具 的基础能力持续发挥作用。"
      }
    ],
    "significance": "超声加工把 数学 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mfg_awj",
    "name": "磨料水射流",
    "en": "Abrasive Water Jet",
    "category": "manufact",
    "era": "info",
    "date": "1980 年",
    "year": 1980,
    "people": "",
    "place": "",
    "summary": "磨料水射流约 1980 年 出现，建立在 数学 之上；它把 零件加工、批量制造 变成可稳定复现的能力，是 制造与工具 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "磨料水射流在 1980 年 前后出现，依托 数学 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，磨料水射流仍是 零件加工 的底层支撑，并作为 制造与工具 的基础能力持续发挥作用。"
      }
    ],
    "significance": "磨料水射流把 数学 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mfg_hybridm",
    "name": "增减材混合制造",
    "en": "Hybrid Manufacturing",
    "category": "manufact",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "增减材混合制造约 2010 年 出现，建立在 数学、车床与精密加工、工业机器人 之上；它把 零件加工、批量制造 变成可稳定复现的能力，是 制造与工具 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics","lathe","robot","electronics","automation"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "增减材混合制造在 2010 年 前后出现，依托 数学 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，增减材混合制造仍是 零件加工 的底层支撑，并作为 制造与工具 的基础能力持续发挥作用。"
      }
    ],
    "significance": "增减材混合制造把 数学 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mfg_toolmonitor",
    "name": "刀具状态监控",
    "en": "Tool Monitoring",
    "category": "manufact",
    "era": "info",
    "date": "1990 年",
    "year": 1990,
    "people": "",
    "place": "",
    "summary": "刀具状态监控约 1990 年 出现，建立在 数学 之上；它把 零件加工、批量制造 变成可稳定复现的能力，是 制造与工具 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "刀具状态监控在 1990 年 前后出现，依托 数学 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，刀具状态监控仍是 零件加工 的底层支撑，并作为 制造与工具 的基础能力持续发挥作用。"
      }
    ],
    "significance": "刀具状态监控把 数学 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mfg_cryogenicm",
    "name": "低温切削",
    "en": "Cryogenic Machining",
    "category": "manufact",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "低温切削约 2000 年 出现，建立在 数学 之上；它把 零件加工、批量制造 变成可稳定复现的能力，是 制造与工具 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "低温切削在 2000 年 前后出现，依托 数学 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，低温切削仍是 零件加工 的底层支撑，并作为 制造与工具 的基础能力持续发挥作用。"
      }
    ],
    "significance": "低温切削把 数学 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mfg_onmachinem",
    "name": "在机测量",
    "en": "On-Machine Measurement",
    "category": "manufact",
    "era": "info",
    "date": "1990 年",
    "year": 1990,
    "people": "",
    "place": "",
    "summary": "在机测量约 1990 年 出现，建立在 数学 之上；它把 零件加工、批量制造 变成可稳定复现的能力，是 制造与工具 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "在机测量在 1990 年 前后出现，依托 数学 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，在机测量仍是 零件加工 的底层支撑，并作为 制造与工具 的基础能力持续发挥作用。"
      }
    ],
    "significance": "在机测量把 数学 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mfg_robotgripper",
    "name": "机器人夹爪",
    "en": "Robot Gripper",
    "category": "manufact",
    "era": "info",
    "date": "1980 年",
    "year": 1980,
    "people": "",
    "place": "",
    "summary": "机器人夹爪约 1980 年 出现，建立在 数学 之上；它把 零件加工、批量制造 变成可稳定复现的能力，是 制造与工具 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "机器人夹爪在 1980 年 前后出现，依托 数学 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，机器人夹爪仍是 零件加工 的底层支撑，并作为 制造与工具 的基础能力持续发挥作用。"
      }
    ],
    "significance": "机器人夹爪把 数学 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mfg_visionguide",
    "name": "视觉引导装配",
    "en": "Vision-Guided Assembly",
    "category": "manufact",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "视觉引导装配约 2000 年 出现，建立在 数学 之上；它把 零件加工、批量制造 变成可稳定复现的能力，是 制造与工具 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "视觉引导装配在 2000 年 前后出现，依托 数学 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，视觉引导装配仍是 零件加工 的底层支撑，并作为 制造与工具 的基础能力持续发挥作用。"
      }
    ],
    "significance": "视觉引导装配把 数学 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mfg_digitalshop",
    "name": "数字化车间",
    "en": "Digital Shopfloor",
    "category": "manufact",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "数字化车间在 2010 年 前后成形，依托 数学 把 零件加工、批量制造 落到实处，并成为 制造与工具 中承上启下的一环，直接支撑了 无人化工厂 等后续技术。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "数字化车间在 2010 年 前后出现，依托 数学 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，数字化车间仍是 零件加工 的底层支撑，并持续影响 无人化工厂。"
      }
    ],
    "significance": "数字化车间把 数学 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点，并直接催生了 无人化工厂。"
  },
{
    "id": "mfg_darkfactory",
    "name": "无人化工厂",
    "en": "Lights-Out Factory",
    "category": "manufact",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "无人化工厂约 2010 年 出现，建立在 数学、数字化车间 之上；它把 零件加工、批量制造 变成可稳定复现的能力，是 制造与工具 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics","mfg_digitalshop"],
    "enables": [],
    "applications": [
      "零件加工",
      "批量制造",
      "精密装配"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "无人化工厂在 2010 年 前后出现，依托 数学 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，无人化工厂仍是 零件加工 的底层支撑，并作为 制造与工具 的基础能力持续发挥作用。"
      }
    ],
    "significance": "无人化工厂把 数学 与 零件加工 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "tr_canoe",
    "name": "独木舟",
    "en": "Canoe",
    "category": "transport",
    "era": "prehistoric",
    "date": "约 1 万年前",
    "year": -10000,
    "people": "",
    "place": "",
    "summary": "独木舟在 约 1 万年前 前后成形，依托 木作、用火、石器 把 人员位移、物资运输 落到实处，并成为 交通运载 中承上启下的一环，直接支撑了 航海术 等后续技术。",
    "dependsOn": ["woodworking","fire","stone_tools"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "史前时代",
        "text": "独木舟在 约 1 万年前 前后出现，依托 木作 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，独木舟仍是 人员位移 的底层支撑，并持续影响 航海术。"
      }
    ],
    "significance": "独木舟把 木作 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 航海术。"
  },
{
    "id": "tr_raft",
    "name": "木筏",
    "en": "Raft",
    "category": "transport",
    "era": "prehistoric",
    "date": "约 1 万年前",
    "year": -10000,
    "people": "",
    "place": "",
    "summary": "木筏约 约 1 万年前 成熟，建立在 木作 之上完成关键突破；其能力延伸到 人员位移、物资运输，并为 桨、运河 的发展铺平了道路。",
    "dependsOn": ["woodworking"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "史前时代",
        "text": "木筏在 约 1 万年前 前后出现，依托 木作 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，木筏仍是 人员位移 的底层支撑，并持续影响 桨、运河。"
      }
    ],
    "significance": "木筏把 木作 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 桨、运河。"
  },
{
    "id": "tr_paddle",
    "name": "桨",
    "en": "Paddle",
    "category": "transport",
    "era": "prehistoric",
    "date": "公元前 8000 年",
    "year": -8000,
    "people": "",
    "place": "",
    "summary": "桨在 公元前 8000 年 前后成形，依托 木筏 把 人员位移、物资运输 落到实处，并成为 交通运载 中承上启下的一环，直接支撑了 帆船、明轮船、潜艇 等后续技术。",
    "dependsOn": ["tr_raft"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "史前时代",
        "text": "桨在 公元前 8000 年 前后出现，依托 木筏 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，桨仍是 人员位移 的底层支撑，并持续影响 帆船、明轮船、潜艇。"
      }
    ],
    "significance": "桨把 木筏 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 帆船、明轮船、潜艇。"
  },

{
    "id": "tr_paddlesteamer",
    "name": "明轮船",
    "en": "Paddle Steamer",
    "category": "transport",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "明轮船约 1800 年 成熟，建立在 蒸汽机、桨 之上完成关键突破；其能力延伸到 人员位移、物资运输，并为 舟桥 的发展铺平了道路。",
    "dependsOn": ["steam_engine","tr_paddle"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "明轮船在 1800 年 前后出现，依托 蒸汽机 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，明轮船仍是 人员位移 的底层支撑，并持续影响 舟桥。"
      }
    ],
    "significance": "明轮船把 蒸汽机 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 舟桥。"
  },

{
    "id": "tr_screwprop",
    "name": "螺旋桨",
    "en": "Screw Propeller",
    "category": "transport",
    "era": "industrial",
    "date": "1836 年",
    "year": 1836,
    "people": "",
    "place": "",
    "summary": "螺旋桨约 1836 年 成熟，建立在 发电机与电动机 之上完成关键突破；其能力延伸到 人员位移、物资运输，并为 鱼雷 的发展铺平了道路。",
    "dependsOn": ["generator"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "螺旋桨在 1836 年 前后出现，依托 发电机与电动机 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，螺旋桨仍是 人员位移 的底层支撑，并持续影响 鱼雷。"
      }
    ],
    "significance": "螺旋桨把 发电机与电动机 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 鱼雷。"
  },
{
    "id": "tr_submarine",
    "name": "潜艇",
    "en": "Submarine",
    "category": "transport",
    "era": "earlymodern",
    "date": "1620 年",
    "year": 1620,
    "people": "",
    "place": "",
    "summary": "潜艇在 1620 年 前后成形，依托 桨、铆接 把 人员位移、物资运输 落到实处，并成为 交通运载 中承上启下的一环，直接支撑了 核潜艇、核三位一体 等后续技术。",
    "dependsOn": ["tr_paddle","mfg_rivet"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "近代早期",
        "text": "潜艇在 1620 年 前后出现，依托 桨 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，潜艇仍是 人员位移 的底层支撑，并持续影响 核潜艇、核三位一体。"
      }
    ],
    "significance": "潜艇把 桨 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 核潜艇、核三位一体。"
  },
{
    "id": "tr_balloon",
    "name": "热气球",
    "en": "Hot-Air Balloon",
    "category": "transport",
    "era": "industrial",
    "date": "1783 年",
    "year": 1783,
    "people": "",
    "place": "",
    "summary": "热气球约 1783 年 成熟，建立在 蒸汽机 之上完成关键突破；其能力延伸到 人员位移、物资运输，并为 飞艇、滑翔机、侦察技术 的发展铺平了道路。",
    "dependsOn": ["steam_engine"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "热气球在 1783 年 前后出现，依托 蒸汽机 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，热气球仍是 人员位移 的底层支撑，并持续影响 飞艇、滑翔机、侦察技术。"
      }
    ],
    "significance": "热气球把 蒸汽机 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 飞艇、滑翔机、侦察技术。"
  },
{
    "id": "tr_airship",
    "name": "飞艇",
    "en": "Airship",
    "category": "transport",
    "era": "industrial",
    "date": "1852 年",
    "year": 1852,
    "people": "",
    "place": "",
    "summary": "飞艇约 1852 年 出现，建立在 热气球、蒸汽机 之上；它把 人员位移、物资运输 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["tr_balloon", "steam_engine"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "飞艇在 1852 年 前后出现，依托 热气球 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，飞艇仍是 人员位移 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "飞艇把 热气球 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "tr_glider",
    "name": "滑翔机",
    "en": "Glider",
    "category": "transport",
    "era": "industrial",
    "date": "1853 年",
    "year": 1853,
    "people": "",
    "place": "",
    "summary": "滑翔机约 1853 年 出现，建立在 热气球、刨床 之上；它把 人员位移、物资运输 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["tr_balloon","mfg_planer"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "滑翔机在 1853 年 前后出现，依托 热气球 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，滑翔机仍是 人员位移 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "滑翔机把 热气球 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "tr_helicopter",
    "name": "直升机",
    "en": "Helicopter",
    "category": "transport",
    "era": "electrical",
    "date": "1939 年",
    "year": 1939,
    "people": "",
    "place": "",
    "summary": "直升机约 1939 年 出现，建立在 燃气轮机 之上；它把 人员位移、物资运输 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["ene_gasturbine"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "直升机在 1939 年 前后出现，依托 燃气轮机 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，直升机仍是 人员位移 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "直升机把 燃气轮机 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "tr_jetliner",
    "name": "喷气客机",
    "en": "Jet Airliner",
    "category": "transport",
    "era": "info",
    "date": "1952 年",
    "year": 1952,
    "people": "",
    "place": "",
    "summary": "喷气客机约 1952 年 成熟，建立在 喷气发动机 之上完成关键突破；其能力延伸到 人员位移、物资运输，并为 超音速客机 的发展铺平了道路。",
    "dependsOn": ["ene_jet"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "喷气客机在 1952 年 前后出现，依托 喷气发动机 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，喷气客机仍是 人员位移 的底层支撑，并持续影响 超音速客机。"
      }
    ],
    "significance": "喷气客机把 喷气发动机 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 超音速客机。"
  },
{
    "id": "tr_supersonic",
    "name": "超音速客机",
    "en": "Supersonic Transport",
    "category": "transport",
    "era": "info",
    "date": "1969 年",
    "year": 1969,
    "people": "",
    "place": "",
    "summary": "超音速客机约 1969 年 成熟，建立在 喷气客机、喷气发动机 之上完成关键突破；其能力延伸到 人员位移、物资运输，并为 空间站 的发展铺平了道路。",
    "dependsOn": ["tr_jetliner", "ene_jet"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "超音速客机在 1969 年 前后出现，依托 喷气客机 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，超音速客机仍是 人员位移 的底层支撑，并持续影响 空间站。"
      }
    ],
    "significance": "超音速客机把 喷气客机 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 空间站。"
  },
{
    "id": "tr_autogyro",
    "name": "旋翼机",
    "en": "Autogyro",
    "category": "transport",
    "era": "electrical",
    "date": "1923 年",
    "year": 1923,
    "people": "",
    "place": "",
    "summary": "旋翼机约 1923 年 出现，建立在 飞机、航空发动机 之上；它把 人员位移、物资运输 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["airplane", "aircraft_engine"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "旋翼机在 1923 年 前后出现，依托 飞机 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，旋翼机仍是 人员位移 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "旋翼机把 飞机 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "tr_rocket",
    "name": "运载火箭",
    "en": "Launch Vehicle",
    "category": "transport",
    "era": "electrical",
    "date": "1926 年",
    "year": 1926,
    "people": "",
    "place": "",
    "summary": "运载火箭在 1926 年 前后成形，依托 火箭发动机、火箭 把 人员位移、物资运输 落到实处，并成为 交通运载 中承上启下的一环，直接支撑了 航天飞机、可回收火箭、夜视仪 等后续技术。",
    "dependsOn": ["ene_rocketengine", "rocket"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "运载火箭在 1926 年 前后出现，依托 火箭发动机 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，运载火箭仍是 人员位移 的底层支撑，并持续影响 航天飞机、可回收火箭、夜视仪。"
      }
    ],
    "significance": "运载火箭把 火箭发动机 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 航天飞机、可回收火箭、夜视仪。"
  },
{
    "id": "tr_shuttle",
    "name": "航天飞机",
    "en": "Space Shuttle",
    "category": "transport",
    "era": "info",
    "date": "1981 年",
    "year": 1981,
    "people": "",
    "place": "",
    "summary": "航天飞机约 1981 年 出现，建立在 运载火箭、碳纤维 之上；它把 人员位移、物资运输 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["tr_rocket","mat_cf"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "航天飞机在 1981 年 前后出现，依托 运载火箭 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，航天飞机仍是 人员位移 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "航天飞机把 运载火箭 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },

{
    "id": "tr_hsr",
    "name": "高速铁路",
    "en": "High-Speed Rail",
    "category": "transport",
    "era": "info",
    "date": "1964 年",
    "year": 1964,
    "people": "",
    "place": "",
    "summary": "高速铁路约 1964 年 成熟，建立在 铁路、电力传输 之上完成关键突破；其能力延伸到 人员位移、物资运输，并为 真空管道列车 的发展铺平了道路。",
    "dependsOn": ["railway","ene_transmission"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "高速铁路在 1964 年 前后出现，依托 铁路 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，高速铁路仍是 人员位移 的底层支撑，并持续影响 真空管道列车。"
      }
    ],
    "significance": "高速铁路把 铁路 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 真空管道列车。"
  },
{
    "id": "tr_maglev",
    "name": "磁悬浮列车",
    "en": "Maglev",
    "category": "transport",
    "era": "info",
    "date": "1984 年",
    "year": 1984,
    "people": "",
    "place": "",
    "summary": "磁悬浮列车约 1984 年 出现，建立在 直线电机、低温超导 之上；它把 人员位移、物资运输 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_linearmotor", "mat_ltsc"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "磁悬浮列车在 1984 年 前后出现，依托 直线电机 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，磁悬浮列车仍是 人员位移 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "磁悬浮列车把 直线电机 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "tr_metro",
    "name": "地铁",
    "en": "Metro",
    "category": "transport",
    "era": "industrial",
    "date": "1863 年",
    "year": 1863,
    "people": "",
    "place": "",
    "summary": "地铁约 1863 年 出现，建立在 蒸汽机车、交通隧道 之上；它把 人员位移、物资运输 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["tr_steamloco","tr_tunnel2"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "地铁在 1863 年 前后出现，依托 蒸汽机车 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，地铁仍是 人员位移 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "地铁把 蒸汽机车 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "tr_tram",
    "name": "有轨电车",
    "en": "Tram",
    "category": "transport",
    "era": "industrial",
    "date": "1832 年",
    "year": 1832,
    "people": "",
    "place": "",
    "summary": "有轨电车约 1832 年 出现，建立在 发电机与电动机 之上；它把 人员位移、物资运输 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["generator"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "有轨电车在 1832 年 前后出现，依托 发电机与电动机 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，有轨电车仍是 人员位移 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "有轨电车把 发电机与电动机 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "tr_trolley",
    "name": "无轨电车",
    "en": "Trolleybus",
    "category": "transport",
    "era": "industrial",
    "date": "1882 年",
    "year": 1882,
    "people": "",
    "place": "",
    "summary": "无轨电车约 1882 年 出现，建立在 水力发电站 之上；它把 人员位移、物资运输 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["ene_hydroplant"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "无轨电车在 1882 年 前后出现，依托 水力发电站 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，无轨电车仍是 人员位移 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "无轨电车把 水力发电站 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "tr_bus",
    "name": "公共汽车",
    "en": "Bus",
    "category": "transport",
    "era": "industrial",
    "date": "1895 年",
    "year": 1895,
    "people": "",
    "place": "",
    "summary": "公共汽车约 1895 年 出现，建立在 无线输电 之上；它把 人员位移、物资运输 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["ene_wpt"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "公共汽车在 1895 年 前后出现，依托 无线输电 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，公共汽车仍是 人员位移 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "公共汽车把 无线输电 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "tr_truck",
    "name": "卡车",
    "en": "Truck",
    "category": "transport",
    "era": "industrial",
    "date": "1896 年",
    "year": 1896,
    "people": "",
    "place": "",
    "summary": "卡车约 1896 年 出现，建立在 无线输电 之上；它把 人员位移、物资运输 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["ene_wpt"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "卡车在 1896 年 前后出现，依托 无线输电 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，卡车仍是 人员位移 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "卡车把 无线输电 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "tr_motorcycle",
    "name": "摩托车",
    "en": "Motorcycle",
    "category": "transport",
    "era": "industrial",
    "date": "1885 年",
    "year": 1885,
    "people": "",
    "place": "",
    "summary": "摩托车约 1885 年 出现，建立在 自行车、内燃机、钢铁 之上；它把 人员位移、物资运输 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["tr_bicycle", "internal_combustion", "steel"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "摩托车在 1885 年 前后出现，依托 自行车 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，摩托车仍是 人员位移 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "摩托车把 自行车 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "tr_bicycle",
    "name": "自行车",
    "en": "Bicycle",
    "category": "transport",
    "era": "industrial",
    "date": "1817 年",
    "year": 1817,
    "people": "",
    "place": "",
    "summary": "自行车约 1817 年 成熟，建立在 车、刨床、螺纹 之上完成关键突破；其能力延伸到 人员位移、物资运输，并为 摩托车 的发展铺平了道路。",
    "dependsOn": ["cart","mfg_planer","mfg_thread"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "自行车在 1817 年 前后出现，依托 车 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，自行车仍是 人员位移 的底层支撑，并持续影响 摩托车。"
      }
    ],
    "significance": "自行车把 车 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 摩托车。"
  },
{
    "id": "tr_train",
    "name": "铁路列车",
    "en": "Railway Train",
    "category": "transport",
    "era": "industrial",
    "date": "1804 年",
    "year": 1804,
    "people": "",
    "place": "",
    "summary": "铁路列车在 1804 年 前后成形，依托 蒸汽机、压延 把 人员位移、物资运输 落到实处，并成为 交通运载 中承上启下的一环，直接支撑了 动车组 等后续技术。",
    "dependsOn": ["steam_engine","mfg_rolling2"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "铁路列车在 1804 年 前后出现，依托 蒸汽机 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，铁路列车仍是 人员位移 的底层支撑，并持续影响 动车组。"
      }
    ],
    "significance": "铁路列车把 蒸汽机 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 动车组。"
  },
{
    "id": "tr_steamloco",
    "name": "蒸汽机车",
    "en": "Steam Locomotive",
    "category": "transport",
    "era": "industrial",
    "date": "1814 年",
    "year": 1814,
    "people": "",
    "place": "",
    "summary": "蒸汽机车约 1814 年 成熟，建立在 蒸汽机 之上完成关键突破；其能力延伸到 人员位移、物资运输，并为 地铁 的发展铺平了道路。",
    "dependsOn": ["steam_engine"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "蒸汽机车在 1814 年 前后出现，依托 蒸汽机 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，蒸汽机车仍是 人员位移 的底层支撑，并持续影响 地铁。"
      }
    ],
    "significance": "蒸汽机车把 蒸汽机 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 地铁。"
  },
{
    "id": "tr_diesel loco",
    "name": "内燃机车",
    "en": "Diesel Locomotive",
    "category": "transport",
    "era": "electrical",
    "date": "1912 年",
    "year": 1912,
    "people": "",
    "place": "",
    "summary": "内燃机车约 1912 年 出现，建立在 低温超导 之上；它把 人员位移、物资运输 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["mat_ltsc"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "内燃机车在 1912 年 前后出现，依托 低温超导 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，内燃机车仍是 人员位移 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "内燃机车把 低温超导 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "tr_emu",
    "name": "动车组",
    "en": "EMU",
    "category": "transport",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "动车组约 1900 年 出现，建立在 铁路列车、电动机 之上；它把 人员位移、物资运输 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["tr_train","electric_motor"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "动车组在 1900 年 前后出现，依托 铁路列车 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，动车组仍是 人员位移 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "动车组把 铁路列车 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "tr_cablecar",
    "name": "缆车",
    "en": "Cable Car",
    "category": "transport",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "缆车在 1800 年 前后出现，用一条由蒸汽机驱动的钢缆牵引车厢沿轨道升降，把「动力留在上端、车厢只做承载」这一分工变成现实。它接续索道的悬索牵引思路，并以钢铁材料与蒸汽动力为条件。",
    "dependsOn": ["tr_ropeway","steam_engine","steel"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "缆车在 1800 年 前后出现，依托 索道 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，缆车仍是 人员位移 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "缆车的意义在于把牵引与承载分离：动力不必随车移动，陡坡运输因而成立——这一思路后来成为电梯、索道与自动扶梯的共同基础。",
  },
{
    "id": "tr_ropeway",
    "name": "索道",
    "en": "Aerial Ropeway",
    "category": "transport",
    "era": "earlymodern",
    "date": "1600 年",
    "year": 1600,
    "people": "",
    "place": "",
    "summary": "索道约 1600 年 成熟，建立在 拉丝 之上完成关键突破；其能力延伸到 人员位移、物资运输，并为 缆车 的发展铺平了道路。",
    "dependsOn": ["mfg_wiredraw"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "近代早期",
        "text": "索道在 1600 年 前后出现，依托 拉丝 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，索道仍是 人员位移 的底层支撑，并持续影响 缆车。"
      }
    ],
    "significance": "索道把 拉丝 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 缆车。"
  },
{
    "id": "tr_elevator",
    "name": "电梯",
    "en": "Elevator",
    "category": "transport",
    "era": "industrial",
    "date": "1852 年",
    "year": 1852,
    "people": "",
    "place": "",
    "summary": "电梯在 1852 年 前后成形，依托 蒸汽机、拉丝 把 人员位移、物资运输 落到实处，并成为 交通运载 中承上启下的一环，直接支撑了 自动扶梯 等后续技术。",
    "dependsOn": ["steam_engine","mfg_wiredraw"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "电梯在 1852 年 前后出现，依托 蒸汽机 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，电梯仍是 人员位移 的底层支撑，并持续影响 自动扶梯。"
      }
    ],
    "significance": "电梯把 蒸汽机 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 自动扶梯。"
  },
{
    "id": "tr_escalator",
    "name": "自动扶梯",
    "en": "Escalator",
    "category": "transport",
    "era": "industrial",
    "date": "1891 年",
    "year": 1891,
    "people": "",
    "place": "",
    "summary": "自动扶梯约 1891 年 出现，建立在 电梯 之上；它把 人员位移、物资运输 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["tr_elevator"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "自动扶梯在 1891 年 前后出现，依托 电梯 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，自动扶梯仍是 人员位移 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "自动扶梯把 电梯 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "tr_crane",
    "name": "起重机",
    "en": "Crane",
    "category": "transport",
    "era": "classical",
    "date": "公元前 300 年",
    "year": -300,
    "people": "",
    "place": "",
    "summary": "起重机约 公元前 300 年 成熟，建立在 高炉炼铁 之上完成关键突破；其能力延伸到 人员位移、物资运输，并为 叉车、混凝土泵车 的发展铺平了道路。",
    "dependsOn": ["mat_blastfurnace"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "古典时代",
        "text": "起重机在 公元前 300 年 前后出现，依托 高炉炼铁 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，起重机仍是 人员位移 的底层支撑，并持续影响 叉车、混凝土泵车。"
      }
    ],
    "significance": "起重机把 高炉炼铁 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 叉车、混凝土泵车。"
  },
{
    "id": "tr_forklift",
    "name": "叉车",
    "en": "Forklift",
    "category": "transport",
    "era": "electrical",
    "date": "1917 年",
    "year": 1917,
    "people": "",
    "place": "",
    "summary": "叉车约 1917 年 出现，建立在 内燃机、起重机 之上；它把 人员位移、物资运输 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["internal_combustion","tr_crane"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "叉车在 1917 年 前后出现，依托 内燃机 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，叉车仍是 人员位移 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "叉车把 内燃机 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "tr_bulldozer",
    "name": "推土机",
    "en": "Bulldozer",
    "category": "transport",
    "era": "electrical",
    "date": "1923 年",
    "year": 1923,
    "people": "",
    "place": "",
    "summary": "推土机约 1923 年 出现，建立在 内燃机、挖掘机 之上；它把 人员位移、物资运输 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["internal_combustion","tr_excavator"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "推土机在 1923 年 前后出现，依托 内燃机 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，推土机仍是 人员位移 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "推土机把 内燃机 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "tr_excavator",
    "name": "挖掘机",
    "en": "Excavator",
    "category": "transport",
    "era": "industrial",
    "date": "1830 年",
    "year": 1830,
    "people": "",
    "place": "",
    "summary": "挖掘机约 1830 年 成熟，建立在 蒸汽机 之上完成关键突破；其能力延伸到 人员位移、物资运输，并为 推土机、苏伊士运河 的发展铺平了道路。",
    "dependsOn": ["steam_engine"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "挖掘机在 1830 年 前后出现，依托 蒸汽机 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，挖掘机仍是 人员位移 的底层支撑，并持续影响 推土机、苏伊士运河。"
      }
    ],
    "significance": "挖掘机把 蒸汽机 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 推土机、苏伊士运河。"
  },
{
    "id": "tr_loader",
    "name": "装载机",
    "en": "Loader",
    "category": "transport",
    "era": "electrical",
    "date": "1920 年",
    "year": 1920,
    "people": "",
    "place": "",
    "summary": "装载机约 1920 年 出现，建立在 拖拉机、内燃机 之上；它把 人员位移、物资运输 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["tr_tractor", "internal_combustion"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "装载机在 1920 年 前后出现，依托 拖拉机 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，装载机仍是 人员位移 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "装载机把 拖拉机 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "tr_tractor",
    "name": "拖拉机",
    "en": "Tractor",
    "category": "transport",
    "era": "industrial",
    "date": "1892 年",
    "year": 1892,
    "people": "",
    "place": "",
    "summary": "拖拉机约 1892 年 成熟，建立在 内燃机、履带 之上完成关键突破；其能力延伸到 人员位移、物资运输，并为 装载机 的发展铺平了道路。",
    "dependsOn": ["internal_combustion","tr_track"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "拖拉机在 1892 年 前后出现，依托 内燃机 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，拖拉机仍是 人员位移 的底层支撑，并持续影响 装载机。"
      }
    ],
    "significance": "拖拉机把 内燃机 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 装载机。"
  },
{
    "id": "tr_combine",
    "name": "联合收割机",
    "en": "Combine Harvester",
    "category": "transport",
    "era": "industrial",
    "date": "1834 年",
    "year": 1834,
    "people": "",
    "place": "",
    "summary": "联合收割机约 1834 年 出现，建立在 发电机与电动机 之上；它把 人员位移、物资运输 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["generator"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "联合收割机在 1834 年 前后出现，依托 发电机与电动机 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，联合收割机仍是 人员位移 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "联合收割机把 发电机与电动机 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "tr_aircraftcarrier",
    "name": "航空母舰",
    "en": "Aircraft Carrier",
    "category": "transport",
    "era": "electrical",
    "date": "1917 年",
    "year": 1917,
    "people": "",
    "place": "",
    "summary": "航空母舰约 1917 年 出现，建立在 飞机 之上；它把 人员位移、物资运输 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["airplane"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "航空母舰在 1917 年 前后出现，依托 飞机 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，航空母舰仍是 人员位移 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "航空母舰把 飞机 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "tr_destroyer",
    "name": "驱逐舰",
    "en": "Destroyer",
    "category": "transport",
    "era": "industrial",
    "date": "1890 年",
    "year": 1890,
    "people": "",
    "place": "",
    "summary": "驱逐舰约 1890 年 出现，建立在 蒸汽船、鱼雷 之上；它把 人员位移、物资运输 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["steam_ship","mil_torpedo"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "驱逐舰在 1890 年 前后出现，依托 蒸汽船 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，驱逐舰仍是 人员位移 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "驱逐舰把 蒸汽船 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "tr_cruiser",
    "name": "巡洋舰",
    "en": "Cruiser",
    "category": "transport",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "巡洋舰约 1800 年 出现，建立在 帆船、钢铁 之上；它把 人员位移、物资运输 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["sail","steel"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "巡洋舰在 1800 年 前后出现，依托 帆船 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，巡洋舰仍是 人员位移 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "巡洋舰把 帆船 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "tr_icebreaker",
    "name": "破冰船",
    "en": "Icebreaker",
    "category": "transport",
    "era": "info",
    "date": "1957 年",
    "year": 1957,
    "people": "",
    "place": "",
    "summary": "破冰船约 1957 年 成熟，建立在 蒸汽船 之上完成关键突破；其能力延伸到 人员位移、物资运输，并为 战略导弹潜艇 的发展铺平了道路。",
    "dependsOn": ["steam_ship"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "破冰船在 1957 年 前后出现，依托 蒸汽船 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，破冰船仍是 人员位移 的底层支撑，并持续影响 战略导弹潜艇。"
      }
    ],
    "significance": "破冰船把 蒸汽船 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 战略导弹潜艇。"
  },
{
    "id": "tr_dredger",
    "name": "挖泥船",
    "en": "Dredger",
    "category": "transport",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "挖泥船约 1800 年 成熟，建立在 蒸汽机 之上完成关键突破；其能力延伸到 人员位移、物资运输，并为 苏伊士运河、沉管隧道 的发展铺平了道路。",
    "dependsOn": ["steam_engine"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "挖泥船在 1800 年 前后出现，依托 蒸汽机 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，挖泥船仍是 人员位移 的底层支撑，并持续影响 苏伊士运河、沉管隧道。"
      }
    ],
    "significance": "挖泥船把 蒸汽机 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 苏伊士运河、沉管隧道。"
  },
{
    "id": "tr_hovercraft",
    "name": "气垫船",
    "en": "Hovercraft",
    "category": "transport",
    "era": "info",
    "date": "1956 年",
    "year": 1956,
    "people": "",
    "place": "",
    "summary": "气垫船约 1956 年 出现，建立在 内燃机、燃气轮机 之上；它把 人员位移、物资运输 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["internal_combustion","ene_gasturbine"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "气垫船在 1956 年 前后出现，依托 内燃机 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，气垫船仍是 人员位移 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "气垫船把 内燃机 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "tr_ekranoplan",
    "name": "地效飞行器",
    "en": "Ground Effect Vehicle",
    "category": "transport",
    "era": "info",
    "date": "1960 年",
    "year": 1960,
    "people": "",
    "place": "",
    "summary": "地效飞行器约 1960 年 出现，建立在 飞机 之上；它把 人员位移、物资运输 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["airplane"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "地效飞行器在 1960 年 前后出现，依托 飞机 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，地效飞行器仍是 人员位移 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "地效飞行器把 飞机 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "tr_jetpack",
    "name": "喷气背包",
    "en": "Jet Pack",
    "category": "transport",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "people": "",
    "place": "",
    "summary": "喷气背包约 1950 年 出现，建立在 喷气发动机、火箭 之上；它把 人员位移、物资运输 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["ene_jet", "rocket"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "喷气背包在 1950 年 前后出现，依托 喷气发动机 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，喷气背包仍是 人员位移 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "喷气背包把 喷气发动机 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "tr_hoverboard",
    "name": "平衡车",
    "en": "Hoverboard",
    "category": "transport",
    "era": "intelligent",
    "date": "2013 年",
    "year": 2013,
    "people": "",
    "place": "",
    "summary": "平衡车约 2013 年 出现，建立在 电动机 之上；它把 人员位移、物资运输 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["electric_motor"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "平衡车在 2013 年 前后出现，依托 电动机 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，平衡车仍是 人员位移 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "平衡车把 电动机 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "tr_skateboard",
    "name": "滑板",
    "en": "Skateboard",
    "category": "transport",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "people": "",
    "place": "",
    "summary": "滑板约 1950 年 出现，建立在 轮子、天然橡胶 之上；它把 人员位移、物资运输 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["wheel","mat_rubber"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "滑板在 1950 年 前后出现，依托 轮子 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，滑板仍是 人员位移 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "滑板把 轮子 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "tr_sled",
    "name": "雪橇",
    "en": "Sled",
    "category": "transport",
    "era": "prehistoric",
    "date": "公元前 5000 年",
    "year": -5000,
    "people": "",
    "place": "",
    "summary": "雪橇约 公元前 5000 年 出现，建立在 木作、石器 之上；它把 人员位移、物资运输 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["woodworking", "stone_tools"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "史前时代",
        "text": "雪橇在 公元前 5000 年 前后出现，依托 木作 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，雪橇仍是 人员位移 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "雪橇把 木作 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "tr_stirrup",
    "name": "马镫",
    "en": "Stirrup",
    "category": "transport",
    "era": "classical",
    "date": "300 年",
    "year": 300,
    "people": "",
    "place": "",
    "summary": "马镫约 300 年 出现，建立在 螺纹 之上；它把 人员位移、物资运输 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_thread"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "古典时代",
        "text": "马镫在 300 年 前后出现，依托 螺纹 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，马镫仍是 人员位移 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "马镫把 螺纹 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "tr_horseshoe",
    "name": "马蹄铁",
    "en": "Horseshoe",
    "category": "transport",
    "era": "classical",
    "date": "300 年",
    "year": 300,
    "people": "",
    "place": "",
    "summary": "马蹄铁约 300 年 出现，建立在 螺纹 之上；它把 人员位移、物资运输 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_thread"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "古典时代",
        "text": "马蹄铁在 300 年 前后出现，依托 螺纹 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，马蹄铁仍是 人员位移 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "马蹄铁把 螺纹 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "tr_pneumatictire",
    "name": "充气轮胎",
    "en": "Pneumatic Tire",
    "category": "transport",
    "era": "industrial",
    "date": "1845 年",
    "year": 1845,
    "people": "",
    "place": "",
    "summary": "充气轮胎在 1845 年由汤姆逊取得专利，用硫化橡胶做成可充气的密闭气囊，把轮与地之间的刚性滚动换成弹性缓冲；它建立在天然橡胶与硫化工艺之上，是车辆提速与乘坐舒适性的前提。",
    "dependsOn": ["chemistry","mat_rubber","mat_vulcan"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "充气轮胎在 1845 年 前后出现，靠硫化橡胶的弹性与气密性把路面冲击从车体上隔开，使车辆得以在更高速度下保持稳定。"
      },
      {
        "period": "当代",
        "text": "今天，充气轮胎仍是绝大多数车辆与飞机与地面接触的唯一界面，其橡胶配方与结构仍在持续演化。"
      }
    ],
    "significance": "充气轮胎把「滚动」从刚性接触变成弹性缓冲，是交通工具提速与舒适化的关键前提。"
  },
{
    "id": "tr_solidtire",
    "name": "实心轮胎",
    "en": "Solid Tire",
    "category": "transport",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "实心轮胎约 1800 年 出现，建立在 天然橡胶 之上；它把 人员位移、物资运输 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["mat_rubber"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "实心轮胎在 1800 年 前后出现，依托 天然橡胶 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，实心轮胎仍是 人员位移 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "实心轮胎把 天然橡胶 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "tr_track",
    "name": "履带",
    "en": "Track",
    "category": "transport",
    "era": "industrial",
    "date": "1770 年",
    "year": 1770,
    "people": "",
    "place": "",
    "summary": "履带约 1770 年 成熟，建立在 蒸汽机 之上完成关键突破；其能力延伸到 人员位移、物资运输，并为 拖拉机 的发展铺平了道路。",
    "dependsOn": ["steam_engine"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "履带在 1770 年 前后出现，依托 蒸汽机 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，履带仍是 人员位移 的底层支撑，并持续影响 拖拉机。"
      }
    ],
    "significance": "履带把 蒸汽机 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 拖拉机。"
  },
{
    "id": "tr_suspension",
    "name": "悬挂系统",
    "en": "Suspension",
    "category": "transport",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "悬挂系统约 1800 年 出现，建立在 轮子、钢铁 之上；它把 人员位移、物资运输 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["wheel","steel"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "悬挂系统在 1800 年 前后出现，依托 轮子 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，悬挂系统仍是 人员位移 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "悬挂系统把 轮子 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "tr_steering",
    "name": "转向系统",
    "en": "Steering",
    "category": "transport",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "转向系统约 1800 年 出现，建立在 轮子 之上；它把 人员位移、物资运输 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["wheel"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "转向系统在 1800 年 前后出现，依托 轮子 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，转向系统仍是 人员位移 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "转向系统把 轮子 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "tr_brake",
    "name": "制动系统",
    "en": "Braking",
    "category": "transport",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "制动系统约 1800 年 出现，建立在 轮子、铸铁 之上；它把 人员位移、物资运输 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["wheel","mat_castiron"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "制动系统在 1800 年 前后出现，依托 轮子 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，制动系统仍是 人员位移 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "制动系统把 轮子 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "tr_abs",
    "name": "防抱死制动",
    "en": "ABS",
    "category": "transport",
    "era": "info",
    "date": "1978 年",
    "year": 1978,
    "people": "",
    "place": "",
    "summary": "防抱死制动约 1978 年 出现，建立在 计算机辅助制造 之上；它把 人员位移、物资运输 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_cam"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "防抱死制动在 1978 年 前后出现，依托 计算机辅助制造 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，防抱死制动仍是 人员位移 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "防抱死制动把 计算机辅助制造 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "tr_navigation",
    "name": "航海导航",
    "en": "Marine Navigation",
    "category": "transport",
    "era": "ancient",
    "date": "公元前 2000 年",
    "year": -2000,
    "people": "",
    "place": "",
    "summary": "航海导航在 公元前 2000 年 前后成形，依托 天文学 把 人员位移、物资运输 落到实处，并成为 交通运载 中承上启下的一环，直接支撑了 灯塔 等后续技术。",
    "dependsOn": ["astronomy"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "航海导航在 公元前 2000 年 前后出现，依托 天文学 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，航海导航仍是 人员位移 的底层支撑，并持续影响 灯塔。"
      }
    ],
    "significance": "航海导航把 天文学 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 灯塔。"
  },
{
    "id": "tr_autopilot",
    "name": "自动驾驶仪",
    "en": "Autopilot",
    "category": "transport",
    "era": "electrical",
    "date": "1912 年",
    "year": 1912,
    "people": "",
    "place": "",
    "summary": "自动驾驶仪约 1912 年 出现，建立在 低温超导 之上；它把 人员位移、物资运输 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["mat_ltsc"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "自动驾驶仪在 1912 年 前后出现，依托 低温超导 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，自动驾驶仪仍是 人员位移 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "自动驾驶仪把 低温超导 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "tr_trafficsignal",
    "name": "交通信号灯",
    "en": "Traffic Light",
    "category": "transport",
    "era": "industrial",
    "date": "1868 年",
    "year": 1868,
    "people": "",
    "place": "",
    "summary": "交通信号灯约 1868 年 出现，建立在 铁路信号 之上；它把 人员位移、物资运输 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["railway_signal"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "交通信号灯在 1868 年 前后出现，依托 铁路信号 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，交通信号灯仍是 人员位移 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "交通信号灯把 铁路信号 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "tr_lighthouse",
    "name": "灯塔",
    "en": "Lighthouse",
    "category": "transport",
    "era": "ancient",
    "date": "公元前 1000 年",
    "year": -1000,
    "people": "",
    "place": "",
    "summary": "灯塔约 公元前 1000 年 出现，建立在 航海导航 之上；它把 人员位移、物资运输 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["tr_navigation"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "灯塔在 公元前 1000 年 前后出现，依托 航海导航 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，灯塔仍是 人员位移 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "灯塔把 航海导航 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "tr_radar2",
    "name": "雷达",
    "en": "Radar",
    "category": "transport",
    "era": "electrical",
    "date": "1935 年",
    "year": 1935,
    "people": "",
    "place": "",
    "summary": "雷达在 1935 年 前后成形，依托 无线电、电磁学 把 人员位移、物资运输 落到实处，并成为 交通运载 中承上启下的一环，直接支撑了 应答机、防空导弹、制导技术 等后续技术。",
    "dependsOn": ["radio","electromagnetism"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "雷达在 1935 年 前后出现，依托 无线电 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，雷达仍是 人员位移 的底层支撑，并持续影响 应答机、防空导弹、制导技术。"
      }
    ],
    "significance": "雷达把 无线电 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 应答机、防空导弹、制导技术。"
  },
{
    "id": "tr_transponder",
    "name": "应答机",
    "en": "Transponder",
    "category": "transport",
    "era": "electrical",
    "date": "1940 年",
    "year": 1940,
    "people": "",
    "place": "",
    "summary": "应答机约 1940 年 出现，建立在 无线电、雷达 之上；它把 人员位移、物资运输 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["radio", "tr_radar2"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "应答机在 1940 年 前后出现，依托 无线电 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，应答机仍是 人员位移 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "应答机把 无线电 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "tr_blackbox",
    "name": "飞行记录器",
    "en": "Black Box",
    "category": "transport",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "people": "",
    "place": "",
    "summary": "飞行记录器约 1950 年 出现，建立在 飞机 之上；它把 人员位移、物资运输 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["airplane"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "飞行记录器在 1950 年 前后出现，依托 飞机 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，飞行记录器仍是 人员位移 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "飞行记录器把 飞机 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "tr_simulator",
    "name": "飞行模拟器",
    "en": "Flight Simulator",
    "category": "transport",
    "era": "electrical",
    "date": "1910 年",
    "year": 1910,
    "people": "",
    "place": "",
    "summary": "飞行模拟器约 1910 年 出现，建立在 飞机 之上；它把 人员位移、物资运输 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["airplane"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "飞行模拟器在 1910 年 前后出现，依托 飞机 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，飞行模拟器仍是 人员位移 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "飞行模拟器把 飞机 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "tr_windtunnel",
    "name": "风洞",
    "en": "Wind Tunnel",
    "category": "transport",
    "era": "industrial",
    "date": "1871 年",
    "year": 1871,
    "people": "",
    "place": "",
    "summary": "风洞约 1871 年 出现，建立在 工具钢 之上；它把 人员位移、物资运输 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["mat_toolsteel"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "风洞在 1871 年 前后出现，依托 工具钢 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，风洞仍是 人员位移 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "风洞把 工具钢 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "tr_runway",
    "name": "机场跑道",
    "en": "Runway",
    "category": "transport",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "机场跑道约 1900 年 出现，建立在 混凝土 之上；它把 人员位移、物资运输 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["mat_concrete"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "机场跑道在 1900 年 前后出现，依托 混凝土 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，机场跑道仍是 人员位移 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "机场跑道把 混凝土 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "tr_port",
    "name": "港口",
    "en": "Port",
    "category": "transport",
    "era": "ancient",
    "date": "公元前 3000 年",
    "year": -3000,
    "people": "",
    "place": "",
    "summary": "港口约 公元前 3000 年 成熟，建立在 帆船 之上完成关键突破；其能力延伸到 人员位移、物资运输，并为 渡轮 的发展铺平了道路。",
    "dependsOn": ["sail"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "港口在 公元前 3000 年 前后出现，依托 帆船 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，港口仍是 人员位移 的底层支撑，并持续影响 渡轮。"
      }
    ],
    "significance": "港口把 帆船 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 渡轮。"
  },
{
    "id": "tr_canal",
    "name": "运河",
    "en": "Canal",
    "category": "transport",
    "era": "prehistoric",
    "date": "公元前 4000 年",
    "year": -4000,
    "people": "",
    "place": "",
    "summary": "运河约 公元前 4000 年 成熟，建立在 石锄与耒耜、木筏 之上完成关键突破；其能力延伸到 人员位移、物资运输，并为 军事后勤 的发展铺平了道路。",
    "dependsOn": ["stone_hoe", "tr_raft"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "史前时代",
        "text": "运河在 公元前 4000 年 前后出现，依托 石锄与耒耜 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，运河仍是 人员位移 的底层支撑，并持续影响 军事后勤。"
      }
    ],
    "significance": "运河把 石锄与耒耜 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 军事后勤。"
  },
{
    "id": "tr_suez",
    "name": "苏伊士运河",
    "en": "Suez Canal",
    "category": "transport",
    "era": "industrial",
    "date": "1869 年",
    "year": 1869,
    "people": "",
    "place": "",
    "summary": "苏伊士运河在 1869 年 通航，在海平面高度挖通地中海与红海，使欧亚航程缩短数千海里。它依靠挖掘机与挖泥船的大规模土方作业、现代炸药的硬岩爆破，以及水泥构筑的防波堤与码头。",
    "dependsOn": ["tr_excavator","tr_dredger","explosives","mat_cement"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "苏伊士运河在 1869 年 前后出现，依托 挖掘机 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，苏伊士运河仍是 人员位移 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "苏伊士运河证明了「用工程改写地理」的可行性：不换船、不换装，一条人工水道即可改变全球航运格局，也把运河工程确立为独立的技术门类。",
  },
{
    "id": "tr_panama",
    "name": "巴拿马运河",
    "en": "Panama Canal",
    "category": "transport",
    "era": "electrical",
    "date": "1914 年",
    "year": 1914,
    "people": "",
    "place": "",
    "summary": "巴拿马运河于 1914 年通航，用炸药开凿、内燃机械挖运，并以钢筋混凝土与钢结构闸门克服地峡落差，把两大洋之间的航程缩短数千海里；它是「以工程改造地理」的标志性个案。",
    "dependsOn": ["explosives","internal_combustion","mat_reconcrete","steel_frame"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "巴拿马运河在 1914 年 前后建成，用炸药与内燃机械在山地与雨林中开凿航道，再靠闸门把两大洋抬到同一水面，使船舶不必绕行南美南端。"
      },
      {
        "period": "当代",
        "text": "今天，巴拿马运河仍是全球贸易的关键瓶颈与枢纽，闸门与航道已多次扩建以适应更大型的船舶。"
      }
    ],
    "significance": "巴拿马运河把开凿、机械与结构工程合成一套「改造地理」的能力，是运输从绕行走向改道的转折点。"
  },
{
    "id": "tr_tunnel2",
    "name": "交通隧道",
    "en": "Traffic Tunnel",
    "category": "transport",
    "era": "earlymodern",
    "date": "1700 年",
    "year": 1700,
    "people": "",
    "place": "",
    "summary": "交通隧道在 1700 年 前后成形，依托 拱、砌筑 把 人员位移、物资运输 落到实处，并成为 交通运载 中承上启下的一环，直接支撑了 地铁 等后续技术。",
    "dependsOn": ["bld_arch", "masonry"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "近代早期",
        "text": "交通隧道在 1700 年 前后出现，依托 拱 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，交通隧道仍是 人员位移 的底层支撑，并持续影响 地铁。"
      }
    ],
    "significance": "交通隧道把 拱 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 地铁。"
  },
{
    "id": "tr_interchange",
    "name": "立交桥",
    "en": "Interchange",
    "category": "transport",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "立交桥约 1900 年 出现，建立在 混凝土 之上；它把 人员位移、物资运输 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["mat_concrete"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "立交桥在 1900 年 前后出现，依托 混凝土 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，立交桥仍是 人员位移 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "立交桥把 混凝土 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "tr_servicearea",
    "name": "服务区",
    "en": "Service Area",
    "category": "transport",
    "era": "electrical",
    "date": "1920 年",
    "year": 1920,
    "people": "",
    "place": "",
    "summary": "服务区约 1920 年 出现，建立在 汽车 之上；它把 人员位移、物资运输 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["automobile"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "服务区在 1920 年 前后出现，依托 汽车 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，服务区仍是 人员位移 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "服务区把 汽车 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "tr_gasstation",
    "name": "加油站",
    "en": "Gas Station",
    "category": "transport",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "加油站约 1900 年 出现，建立在 汽车 之上；它把 人员位移、物资运输 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["automobile"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "加油站在 1900 年 前后出现，依托 汽车 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，加油站仍是 人员位移 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "加油站把 汽车 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "tr_charging",
    "name": "充电站",
    "en": "Charging Station",
    "category": "transport",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "充电站约 2000 年 出现，建立在 电网、锂离子电池、电动机 之上；它把 人员位移、物资运输 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["power_grid", "ene_liion", "electric_motor"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "充电站在 2000 年 前后出现，依托 电网 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，充电站仍是 人员位移 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "充电站把 电网 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "tr_v2x",
    "name": "车路协同",
    "en": "V2X",
    "category": "transport",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "车路协同约 2010 年 出现，建立在 汽车、内燃机、全球卫星定位 GNSS 之上；它把 人员位移、物资运输 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["automobile","internal_combustion","gps","combustion"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "车路协同在 2010 年 前后出现，依托 汽车 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，车路协同仍是 人员位移 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "车路协同把 汽车 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "tr_containership",
    "name": "集装箱船",
    "en": "Container Ship",
    "category": "transport",
    "era": "info",
    "date": "1956 年",
    "year": 1956,
    "people": "",
    "place": "",
    "summary": "集装箱船约 1956 年 出现，建立在 蒸汽船 之上；它把 人员位移、物资运输 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["steam_ship"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "集装箱船在 1956 年 前后出现，依托 蒸汽船 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，集装箱船仍是 人员位移 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "集装箱船把 蒸汽船 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "tr_bulktanker",
    "name": "油轮",
    "en": "Oil Tanker",
    "category": "transport",
    "era": "industrial",
    "date": "1860 年",
    "year": 1860,
    "people": "",
    "place": "",
    "summary": "油轮约 1860 年 出现，建立在 蒸汽机、钢铁、石油工业 之上；它把 人员位移、物资运输 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["steam_engine", "steel", "petroleum"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "油轮在 1860 年 前后出现，依托 蒸汽机 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，油轮仍是 人员位移 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "油轮把 蒸汽机 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "tr_roship",
    "name": "滚装船",
    "en": "Ro-Ro Ship",
    "category": "transport",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "滚装船约 1900 年 出现，建立在 蒸汽船 之上；它把 人员位移、物资运输 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["steam_ship"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "滚装船在 1900 年 前后出现，依托 蒸汽船 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，滚装船仍是 人员位移 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "滚装船把 蒸汽船 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "tr_ferry",
    "name": "渡轮",
    "en": "Ferry",
    "category": "transport",
    "era": "ancient",
    "date": "公元前 3000 年",
    "year": -3000,
    "people": "",
    "place": "",
    "summary": "渡轮约 公元前 3000 年 出现，建立在 港口 之上；它把 人员位移、物资运输 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["tr_port"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "渡轮在 公元前 3000 年 前后出现，依托 港口 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，渡轮仍是 人员位移 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "渡轮把 港口 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "tr_hsrbridge",
    "name": "高铁桥梁",
    "en": "HSR Bridge",
    "category": "transport",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "高铁桥梁约 1900 年 出现，建立在 钢铁、混凝土 之上；它把 人员位移、物资运输 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["steel","mat_concrete"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "高铁桥梁在 1900 年 前后出现，依托 钢铁 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，高铁桥梁仍是 人员位移 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "高铁桥梁把 钢铁 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "tr_monorail",
    "name": "单轨铁路",
    "en": "Monorail",
    "category": "transport",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "单轨铁路约 1900 年 出现，建立在 铁路 之上；它把 人员位移、物资运输 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["railway"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "单轨铁路在 1900 年 前后出现，依托 铁路 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，单轨铁路仍是 人员位移 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "单轨铁路把 铁路 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "tr_funicular",
    "name": "齿轨铁路",
    "en": "Funicular",
    "category": "transport",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "齿轨铁路约 1800 年 出现，建立在 蒸汽机 之上；它把 人员位移、物资运输 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["steam_engine"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "齿轨铁路在 1800 年 前后出现，依托 蒸汽机 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，齿轨铁路仍是 人员位移 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "齿轨铁路把 蒸汽机 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "tr_pipeline",
    "name": "管道运输",
    "en": "Pipeline Transport",
    "category": "transport",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "管道运输在 1800 年 前后成形，依托 铸铁 把 人员位移、物资运输 落到实处，并成为 交通运载 中承上启下的一环，直接支撑了 自动喷淋 等后续技术。",
    "dependsOn": ["mat_castiron"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "管道运输在 1800 年 前后出现，依托 铸铁 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，管道运输仍是 人员位移 的底层支撑，并持续影响 自动喷淋。"
      }
    ],
    "significance": "管道运输把 铸铁 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 自动喷淋。"
  },
{
    "id": "tr_hyperloop",
    "name": "真空管道列车",
    "en": "Hyperloop",
    "category": "transport",
    "era": "intelligent",
    "date": "2013 年",
    "year": 2013,
    "people": "",
    "place": "",
    "summary": "真空管道列车约 2013 年 出现，建立在 高速铁路 之上；它把 人员位移、物资运输 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["tr_hsr"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "真空管道列车在 2013 年 前后出现，依托 高速铁路 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，真空管道列车仍是 人员位移 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "真空管道列车把 高速铁路 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "tr_evcar",
    "name": "电动汽车",
    "en": "Electric Car",
    "category": "transport",
    "era": "info",
    "date": "1990 年",
    "year": 1990,
    "people": "",
    "place": "",
    "summary": "电动汽车约 1990 年 成熟，建立在 电池、电动机 之上完成关键突破；其能力延伸到 人员位移、物资运输，并为 电动船 的发展铺平了道路。",
    "dependsOn": ["battery","electric_motor"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "电动汽车在 1990 年 前后出现，依托 电池 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，电动汽车仍是 人员位移 的底层支撑，并持续影响 电动船。"
      }
    ],
    "significance": "电动汽车把 电池 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 电动船。"
  },
{
    "id": "tr_fcevtruck",
    "name": "燃料电池卡车",
    "en": "Fuel Cell Truck",
    "category": "transport",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "燃料电池卡车约 2010 年 出现，建立在 氢燃料电池、内燃机 之上；它把 人员位移、物资运输 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["ene_h2fc","internal_combustion"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "燃料电池卡车在 2010 年 前后出现，依托 氢燃料电池 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，燃料电池卡车仍是 人员位移 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "燃料电池卡车把 氢燃料电池 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "tr_personalair",
    "name": "个人飞行器",
    "en": "Personal Aerial Vehicle",
    "category": "transport",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "个人飞行器约 2010 年 出现，建立在 无人机 之上；它把 人员位移、物资运输 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["drone"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "个人飞行器在 2010 年 前后出现，依托 无人机 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，个人飞行器仍是 人员位移 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "个人飞行器把 无人机 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "tr_electricboat",
    "name": "电动船",
    "en": "Electric Boat",
    "category": "transport",
    "era": "info",
    "date": "1990 年",
    "year": 1990,
    "people": "",
    "place": "",
    "summary": "电动船约 1990 年 出现，建立在 电动汽车 之上；它把 人员位移、物资运输 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["tr_evcar"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "电动船在 1990 年 前后出现，依托 电动汽车 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，电动船仍是 人员位移 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "电动船把 电动汽车 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "tr_auv",
    "name": "自主水下航行器",
    "en": "AUV",
    "category": "transport",
    "era": "info",
    "date": "1960 年",
    "year": 1960,
    "people": "",
    "place": "",
    "summary": "自主水下航行器约 1960 年 出现，建立在 电动机 之上；它把 人员位移、物资运输 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["electric_motor"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "自主水下航行器在 1960 年 前后出现，依托 电动机 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，自主水下航行器仍是 人员位移 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "自主水下航行器把 电动机 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "tr_rov",
    "name": "遥控潜水器",
    "en": "ROV",
    "category": "transport",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "people": "",
    "place": "",
    "summary": "遥控潜水器约 1950 年 出现，建立在 电动机 之上；它把 人员位移、物资运输 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["electric_motor"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "遥控潜水器在 1950 年 前后出现，依托 电动机 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，遥控潜水器仍是 人员位移 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "遥控潜水器把 电动机 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "tr_cargo_drone",
    "name": "无人机货运",
    "en": "Cargo Drone",
    "category": "transport",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "无人机货运约 2010 年 成熟，建立在 无人机 之上完成关键突破；其能力延伸到 人员位移、物资运输，并为 载人无人机 的发展铺平了道路。",
    "dependsOn": ["drone"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "无人机货运在 2010 年 前后出现，依托 无人机 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，无人机货运仍是 人员位移 的底层支撑，并持续影响 载人无人机。"
      }
    ],
    "significance": "无人机货运把 无人机 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 载人无人机。"
  },
{
    "id": "tr_passdrone",
    "name": "载人无人机",
    "en": "Passenger Drone",
    "category": "transport",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "载人无人机约 2010 年 出现，建立在 无人机货运 之上；它把 人员位移、物资运输 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["tr_cargo_drone"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "载人无人机在 2010 年 前后出现，依托 无人机货运 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，载人无人机仍是 人员位移 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "载人无人机把 无人机货运 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },

{
    "id": "tr_reusablerocket",
    "name": "可回收火箭",
    "en": "Reusable Rocket",
    "category": "transport",
    "era": "intelligent",
    "date": "2015 年",
    "year": 2015,
    "people": "",
    "place": "",
    "summary": "可回收火箭约 2015 年 出现，建立在 运载火箭、碳纤维 之上；它把 人员位移、物资运输 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["tr_rocket","mat_cf"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "可回收火箭在 2015 年 前后出现，依托 运载火箭 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，可回收火箭仍是 人员位移 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "可回收火箭把 运载火箭 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "tr_lunarlander",
    "name": "月球着陆器",
    "en": "Lunar Lander",
    "category": "transport",
    "era": "info",
    "date": "1960 年",
    "year": 1960,
    "people": "",
    "place": "",
    "summary": "月球着陆器约 1960 年 出现，建立在 火箭 之上；它把 人员位移、物资运输 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["rocket"],
    "enables": [],
    "applications": [
      "人员位移",
      "物资运输",
      "远程投送"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "月球着陆器在 1960 年 前后出现，依托 火箭 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，月球着陆器仍是 人员位移 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "月球着陆器把 火箭 与 人员位移 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_pencil",
    "name": "铅笔",
    "en": "Pencil",
    "category": "info",
    "era": "industrial",
    "date": "1795 年",
    "year": 1795,
    "people": "",
    "place": "",
    "summary": "铅笔约 1795 年 出现，建立在 蒸汽机、数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["steam_engine","mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "铅笔在 1795 年 前后出现，依托 蒸汽机 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，铅笔仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "铅笔把 蒸汽机 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_pen",
    "name": "钢笔",
    "en": "Fountain Pen",
    "category": "info",
    "era": "industrial",
    "date": "1884 年",
    "year": 1884,
    "people": "",
    "place": "",
    "summary": "钢笔在 1884 年 前后成形，用金属笔尖、硬橡胶储墨件与毛细导流把「随身书写」变成可靠工具；它建立在文字、造纸、工具钢与硫化橡胶之上，使蘸水笔「写几字就要蘸墨」的断续书写第一次变成连续书写。",
    "dependsOn": ["writing","mat_toolsteel","mat_vulcan"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "钢笔在 1884 年 前后出现，用金属笔尖与橡胶储墨件解决了蘸水笔须频频蘸墨的痛点，使连续书写第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，钢笔的书写职能已被更廉价的笔类接替，但「随身记录」这一能力仍是信息社会最日常的底层动作。"
      }
    ],
    "significance": "钢笔把书写从案头动作变成随身能力，是文字使用日常化、信息得以随手记录的关键一环。"
  },
{
    "id": "inf_ballpoint",
    "name": "圆珠笔",
    "en": "Ballpoint Pen",
    "category": "info",
    "era": "electrical",
    "date": "1938 年",
    "year": 1938,
    "people": "",
    "place": "",
    "summary": "圆珠笔约 1938 年 出现，建立在 喷气发动机、数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["ene_jet", "mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "圆珠笔在 1938 年 前后出现，依托 喷气发动机 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，圆珠笔仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "圆珠笔把 喷气发动机 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_typewriter",
    "name": "打字机",
    "en": "Typewriter",
    "category": "info",
    "era": "industrial",
    "date": "1868 年",
    "year": 1868,
    "people": "",
    "place": "",
    "summary": "打字机约 1868 年 出现，建立在 数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "打字机在 1868 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，打字机仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "打字机把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_carbonpaper",
    "name": "复写纸",
    "en": "Carbon Paper",
    "category": "info",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "复写纸约 1800 年 出现，建立在 数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "复写纸在 1800 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，复写纸仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "复写纸把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_mimeograph",
    "name": "油印",
    "en": "Mimeograph",
    "category": "info",
    "era": "industrial",
    "date": "1870 年",
    "year": 1870,
    "people": "",
    "place": "",
    "summary": "油印约 1870 年 出现，建立在 工具钢、数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mat_toolsteel","mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "油印在 1870 年 前后出现，依托 工具钢 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，油印仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "油印把 工具钢 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_photocopier",
    "name": "复印机",
    "en": "Photocopier",
    "category": "info",
    "era": "electrical",
    "date": "1938 年",
    "year": 1938,
    "people": "",
    "place": "",
    "summary": "复印机约 1938 年 出现，建立在 喷气发动机、数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["ene_jet","mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "复印机在 1938 年 前后出现，依托 喷气发动机 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，复印机仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "复印机把 喷气发动机 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_fax",
    "name": "传真机",
    "en": "Fax",
    "category": "info",
    "era": "industrial",
    "date": "1843 年",
    "year": 1843,
    "people": "",
    "place": "",
    "summary": "传真机把「图像」变成可沿电报线传输的信号——1843 年贝恩的化学电报是它的雏形，此后靠电化学记录与摄影制版，使远方图像的即时复制第一次成为可能。",
    "dependsOn": ["telegraph","chemistry","electrochem"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "传真机在 1843 年 前后出现，借电报线路与电化学记录，把扫描到的图像逐点转成电信号再还原，使图像第一次能沿着线路远行。"
      },
      {
        "period": "当代",
        "text": "今天，传真机在办公场景中已被网络传输取代，但「逐点扫描—传输—重建」这一范式正是后来扫描仪、电视与数字图像的共同起点。"
      }
    ],
    "significance": "传真机把电报从「传字」扩展到「传图」，是信息技术从符号走向图像的第一步。"
  },


{
    "id": "inf_switchboard",
    "name": "电话交换机",
    "en": "Telephone Exchange",
    "category": "info",
    "era": "industrial",
    "date": "1878 年",
    "year": 1878,
    "people": "",
    "place": "",
    "summary": "电话交换机在 1878 年 前后成形，用插塞、塞孔与塞绳把任意两条线路按需接通，使电话从「一对线两个人」变成可任意互连的网络。它建立在电报的电路与信号范式、通信电缆这一线路载体，以及电话这一服务对象之上。",
    "dependsOn": ["telegraph","telephone","inf_cable"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "电话交换机在 1878 年 前后出现，依托 电报 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，电话交换机仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "交换机的本质是「连接」：把线缆的物理连通变成可调度的关系。它让电话网从点对点扩展为任意拓扑，是通信由「线路」走向「网络」的转折点。",
  },
{
    "id": "inf_cable",
    "name": "通信电缆",
    "en": "Communication Cable",
    "category": "info",
    "era": "industrial",
    "date": "1850 年",
    "year": 1850,
    "people": "",
    "place": "",
    "summary": "通信电缆在 1850 年 前后成形，依托 数学 把 信息记录、远程传输 落到实处，并成为 信息通信 中承上启下的一环，直接支撑了 电话交换机、海底电缆 等后续技术。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "通信电缆在 1850 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，通信电缆仍是 信息记录 的底层支撑，并持续影响 电话交换机、海底电缆。"
      }
    ],
    "significance": "通信电缆把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 电话交换机、海底电缆。"
  },
{
    "id": "inf_submarine_cable",
    "name": "海底电缆",
    "en": "Submarine Cable",
    "category": "info",
    "era": "industrial",
    "date": "1858 年",
    "year": 1858,
    "people": "",
    "place": "",
    "summary": "海底电缆约 1858 年 出现，建立在 数学、通信电缆 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics","inf_cable"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "海底电缆在 1858 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，海底电缆仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "海底电缆把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_radio2",
    "name": "无线电广播",
    "en": "Radio Broadcasting",
    "category": "info",
    "era": "electrical",
    "date": "1906 年",
    "year": 1906,
    "people": "",
    "place": "",
    "summary": "无线电广播约 1906 年 出现，建立在 数学、调制技术 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics","inf_modulation"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "无线电广播在 1906 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，无线电广播仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "无线电广播把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },

{
    "id": "inf_bw_tv",
    "name": "黑白电视",
    "en": "Black-White TV",
    "category": "info",
    "era": "electrical",
    "date": "1927 年",
    "year": 1927,
    "people": "",
    "place": "",
    "summary": "黑白电视约 1927 年 出现，建立在 数学、电视 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics","television"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "黑白电视在 1927 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，黑白电视仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "黑白电视把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_color_tv",
    "name": "彩色电视",
    "en": "Color TV",
    "category": "info",
    "era": "info",
    "date": "1953 年",
    "year": 1953,
    "people": "",
    "place": "",
    "summary": "彩色电视约 1953 年 出现，建立在 数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "彩色电视在 1953 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，彩色电视仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "彩色电视把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_vcr",
    "name": "录像机",
    "en": "VCR",
    "category": "info",
    "era": "info",
    "date": "1956 年",
    "year": 1956,
    "people": "",
    "place": "",
    "summary": "录像机约 1956 年 出现，建立在 数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "录像机在 1956 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，录像机仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "录像机把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_camcorder",
    "name": "摄像机",
    "en": "Camcorder",
    "category": "info",
    "era": "info",
    "date": "1980 年",
    "year": 1980,
    "people": "",
    "place": "",
    "summary": "摄像机约 1980 年 出现，建立在 数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "摄像机在 1980 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，摄像机仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "摄像机把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_vinyl",
    "name": "黑胶唱片",
    "en": "Vinyl Record",
    "category": "info",
    "era": "industrial",
    "date": "1877 年",
    "year": 1877,
    "people": "",
    "place": "",
    "summary": "黑胶唱片约 1877 年 出现，建立在 数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "黑胶唱片在 1877 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，黑胶唱片仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "黑胶唱片把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_tape",
    "name": "磁带",
    "en": "Magnetic Tape",
    "category": "info",
    "era": "electrical",
    "date": "1928 年",
    "year": 1928,
    "people": "",
    "place": "",
    "summary": "磁带约 1928 年 出现，建立在 数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "磁带在 1928 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，磁带仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "磁带把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_microprocessor",
    "name": "微处理器",
    "en": "Microprocessor",
    "category": "info",
    "era": "info",
    "date": "1971 年",
    "year": 1971,
    "people": "",
    "place": "",
    "summary": "微处理器约 1971 年 成熟，建立在 数学 之上完成关键突破；其能力延伸到 信息记录、远程传输，并为 多旋翼构型、飞控系统、微处理器个人计算机 的发展铺平了道路。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "微处理器在 1971 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，微处理器仍是 信息记录 的底层支撑，并持续影响 多旋翼构型、飞控系统、微处理器个人计算机。"
      }
    ],
    "significance": "微处理器把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 多旋翼构型、飞控系统、微处理器个人计算机。"
  },
{
    "id": "inf_ram",
    "name": "内存",
    "en": "RAM",
    "category": "info",
    "era": "electrical",
    "date": "1947 年",
    "year": 1947,
    "people": "",
    "place": "",
    "summary": "内存约 1947 年 出现，建立在 半导体材料、数学、晶体管 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["semiconductors","mathematics","transistor"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "内存在 1947 年 前后出现，依托 半导体材料 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，内存仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "内存把 半导体材料 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_hdd",
    "name": "硬盘",
    "en": "Hard Disk",
    "category": "info",
    "era": "info",
    "date": "1956 年",
    "year": 1956,
    "people": "",
    "place": "",
    "summary": "硬盘约 1956 年 出现，建立在 数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "硬盘在 1956 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，硬盘仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "硬盘把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_floppy",
    "name": "软盘",
    "en": "Floppy Disk",
    "category": "info",
    "era": "info",
    "date": "1971 年",
    "year": 1971,
    "people": "",
    "place": "",
    "summary": "软盘约 1971 年 出现，建立在 数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "软盘在 1971 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，软盘仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "软盘把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_flash",
    "name": "闪存",
    "en": "Flash Memory",
    "category": "info",
    "era": "info",
    "date": "1980 年",
    "year": 1980,
    "people": "",
    "place": "",
    "summary": "闪存约 1980 年 出现，建立在 数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "闪存在 1980 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，闪存仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "闪存把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_usb",
    "name": "U 盘",
    "en": "USB Drive",
    "category": "info",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "U 盘约 2000 年 出现，建立在 数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "U 盘在 2000 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，U 盘仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "U 盘把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_ssd",
    "name": "固态硬盘",
    "en": "SSD",
    "category": "info",
    "era": "info",
    "date": "1991 年",
    "year": 1991,
    "people": "",
    "place": "",
    "summary": "固态硬盘约 1991 年 出现，建立在 数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "固态硬盘在 1991 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，固态硬盘仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "固态硬盘把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_os",
    "name": "操作系统",
    "en": "Operating System",
    "category": "info",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "people": "",
    "place": "",
    "summary": "操作系统约 1950 年 成熟，建立在 数学 之上完成关键突破；其能力延伸到 信息记录、远程传输，并为 网页浏览器、移动操作系统 的发展铺平了道路。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "操作系统在 1950 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，操作系统仍是 信息记录 的底层支撑，并持续影响 网页浏览器、移动操作系统。"
      }
    ],
    "significance": "操作系统把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 网页浏览器、移动操作系统。"
  },
{
    "id": "inf_compiler",
    "name": "编译器",
    "en": "Compiler",
    "category": "info",
    "era": "info",
    "date": "1952 年",
    "year": 1952,
    "people": "",
    "place": "",
    "summary": "编译器约 1952 年 出现，建立在 数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "编译器在 1952 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，编译器仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "编译器把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_pl_fortran",
    "name": "Fortran",
    "en": "Fortran",
    "category": "info",
    "era": "info",
    "date": "1957 年",
    "year": 1957,
    "people": "",
    "place": "",
    "summary": "Fortran约 1957 年 出现，建立在 数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "Fortran在 1957 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，Fortran仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "Fortran把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_pl_c",
    "name": "C 语言",
    "en": "C Language",
    "category": "info",
    "era": "info",
    "date": "1972 年",
    "year": 1972,
    "people": "",
    "place": "",
    "summary": "C 语言约 1972 年 成熟，建立在 数学 之上完成关键突破；其能力延伸到 信息记录、远程传输，并为 版本控制、重组DNA技术 的发展铺平了道路。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "C 语言在 1972 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，C 语言仍是 信息记录 的底层支撑，并持续影响 版本控制、重组DNA技术。"
      }
    ],
    "significance": "C 语言把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 版本控制、重组DNA技术。"
  },
{
    "id": "inf_pl_python",
    "name": "Python",
    "en": "Python",
    "category": "info",
    "era": "info",
    "date": "1991 年",
    "year": 1991,
    "people": "",
    "place": "",
    "summary": "Python约 1991 年 出现，建立在 数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "Python在 1991 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，Python仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "Python把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_db",
    "name": "数据库",
    "en": "Database",
    "category": "info",
    "era": "info",
    "date": "1960 年",
    "year": 1960,
    "people": "",
    "place": "",
    "summary": "数据库约 1960 年 成熟，建立在 数学 之上完成关键突破；其能力延伸到 信息记录、远程传输，并为 地理信息系统 的发展铺平了道路。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "数据库在 1960 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，数据库仍是 信息记录 的底层支撑，并持续影响 地理信息系统。"
      }
    ],
    "significance": "数据库把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 地理信息系统。"
  },
{
    "id": "inf_rdbms",
    "name": "关系型数据库",
    "en": "RDBMS",
    "category": "info",
    "era": "info",
    "date": "1970 年",
    "year": 1970,
    "people": "",
    "place": "",
    "summary": "关系型数据库约 1970 年 出现，建立在 数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "关系型数据库在 1970 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，关系型数据库仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "关系型数据库把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_sql",
    "name": "SQL",
    "en": "SQL",
    "category": "info",
    "era": "info",
    "date": "1974 年",
    "year": 1974,
    "people": "",
    "place": "",
    "summary": "SQL约 1974 年 出现，建立在 数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "SQL在 1974 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，SQL仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "SQL把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_nosql",
    "name": "NoSQL",
    "en": "NoSQL",
    "category": "info",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "NoSQL约 2000 年 出现，建立在 数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "NoSQL在 2000 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，NoSQL仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "NoSQL把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_search",
    "name": "搜索引擎",
    "en": "Search Engine",
    "category": "info",
    "era": "info",
    "date": "1990 年",
    "year": 1990,
    "people": "",
    "place": "",
    "summary": "搜索引擎约 1990 年 成熟，建立在 数学 之上完成关键突破；其能力延伸到 信息记录、远程传输，并为 网页浏览器 的发展铺平了道路。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "搜索引擎在 1990 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，搜索引擎仍是 信息记录 的底层支撑，并持续影响 网页浏览器。"
      }
    ],
    "significance": "搜索引擎把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 网页浏览器。"
  },
{
    "id": "inf_browser",
    "name": "网页浏览器",
    "en": "Web Browser",
    "category": "info",
    "era": "info",
    "date": "1990 年",
    "year": 1990,
    "people": "",
    "place": "",
    "summary": "网页浏览器约 1990 年 出现，建立在 数学、搜索引擎、操作系统 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics","inf_search","inf_os"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "网页浏览器在 1990 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，网页浏览器仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "网页浏览器把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_email",
    "name": "电子邮件",
    "en": "Email",
    "category": "info",
    "era": "info",
    "date": "1971 年",
    "year": 1971,
    "people": "",
    "place": "",
    "summary": "电子邮件约 1971 年 出现，建立在 数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "电子邮件在 1971 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，电子邮件仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "电子邮件把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_im",
    "name": "即时通讯",
    "en": "Instant Messaging",
    "category": "info",
    "era": "info",
    "date": "1996 年",
    "year": 1996,
    "people": "",
    "place": "",
    "summary": "即时通讯约 1996 年 出现，建立在 数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "即时通讯在 1996 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，即时通讯仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "即时通讯把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_social",
    "name": "社交网络",
    "en": "Social Network",
    "category": "info",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "社交网络约 2000 年 出现，建立在 数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "社交网络在 2000 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，社交网络仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "社交网络把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_wifi",
    "name": "Wi-Fi",
    "en": "Wi-Fi",
    "category": "info",
    "era": "info",
    "date": "1997 年",
    "year": 1997,
    "people": "",
    "place": "",
    "summary": "Wi-Fi 在 1997 年 前后标准化，用无线电波在局域网内传输分组数据，使终端摆脱网线。它建立在无线电的电磁波通信原理、集成电路的射频收发能力，以及局域网与 TCP/IP 的组网协议之上。",
    "dependsOn": ["radio","ic","inf_lan","tcpip"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "Wi-Fi在 1997 年 前后出现，依托 无线电 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，Wi-Fi仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "Wi-Fi 把「接入」从物理位置里解放出来：网络端口不再只是墙上的插座，而成为空间本身——这是移动互联网得以成立的前提。",
  },
{
    "id": "inf_bluetooth",
    "name": "蓝牙",
    "en": "Bluetooth",
    "category": "info",
    "era": "info",
    "date": "1994 年",
    "year": 1994,
    "people": "",
    "place": "",
    "summary": "蓝牙约 1994 年 出现，建立在 数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "蓝牙在 1994 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，蓝牙仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "蓝牙把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_5g",
    "name": "5G",
    "en": "5G",
    "category": "info",
    "era": "intelligent",
    "date": "2018 年",
    "year": 2018,
    "people": "",
    "place": "",
    "summary": "5G约 2018 年 出现，建立在 数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "5G在 2018 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，5G仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "5G把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_6g",
    "name": "6G",
    "en": "6G",
    "category": "info",
    "era": "intelligent",
    "date": "2020 年",
    "year": 2020,
    "people": "",
    "place": "",
    "summary": "6G约 2020 年 出现，建立在 数学、大语言模型 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics","llm"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "6G在 2020 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，6G仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "6G把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_fiber",
    "name": "光纤通信",
    "en": "Fiber Optics Comms",
    "category": "info",
    "era": "info",
    "date": "1970 年",
    "year": 1970,
    "people": "",
    "place": "",
    "summary": "光纤通信约 1970 年 成熟，建立在 数学 之上完成关键突破；其能力延伸到 信息记录、远程传输，并为 局域网 的发展铺平了道路。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "光纤通信在 1970 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，光纤通信仍是 信息记录 的底层支撑，并持续影响 局域网。"
      }
    ],
    "significance": "光纤通信把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 局域网。"
  },
{
    "id": "inf_microwave",
    "name": "微波中继",
    "en": "Microwave Relay",
    "category": "info",
    "era": "electrical",
    "date": "1940 年",
    "year": 1940,
    "people": "",
    "place": "",
    "summary": "微波中继约 1940 年 出现，建立在 数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "微波中继在 1940 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，微波中继仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "微波中继把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_modem",
    "name": "调制解调器",
    "en": "Modem",
    "category": "info",
    "era": "info",
    "date": "1958 年",
    "year": 1958,
    "people": "",
    "place": "",
    "summary": "调制解调器约 1958 年 出现，建立在 数学、集成电路 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics","ic"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "调制解调器在 1958 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，调制解调器仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "调制解调器把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_router",
    "name": "路由器",
    "en": "Router",
    "category": "info",
    "era": "info",
    "date": "1980 年",
    "year": 1980,
    "people": "",
    "place": "",
    "summary": "路由器在 1980 年 前后成形，依托 数学 把 信息记录、远程传输 落到实处，并成为 信息通信 中承上启下的一环，直接支撑了 网络交换机 等后续技术。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "路由器在 1980 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，路由器仍是 信息记录 的底层支撑，并持续影响 网络交换机。"
      }
    ],
    "significance": "路由器把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 网络交换机。"
  },
{
    "id": "inf_net_switch",
    "name": "网络交换机",
    "en": "Network Switch",
    "category": "info",
    "era": "info",
    "date": "1980 年",
    "year": 1980,
    "people": "",
    "place": "",
    "summary": "网络交换机约 1980 年 出现，建立在 数学、路由器 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics","inf_router"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "网络交换机在 1980 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，网络交换机仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "网络交换机把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_lan",
    "name": "局域网",
    "en": "LAN",
    "category": "info",
    "era": "info",
    "date": "1970 年",
    "year": 1970,
    "people": "",
    "place": "",
    "summary": "局域网在 1970 年 前后成形，依托 数学、光纤通信 把 信息记录、远程传输 落到实处，并成为 信息通信 中承上启下的一环，直接支撑了 Wi-Fi、广域网、智能建筑 等后续技术。",
    "dependsOn": ["mathematics","inf_fiber"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "局域网在 1970 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，局域网仍是 信息记录 的底层支撑，并持续影响 Wi-Fi、广域网、智能建筑。"
      }
    ],
    "significance": "局域网把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 Wi-Fi、广域网、智能建筑。"
  },
{
    "id": "inf_wan",
    "name": "广域网",
    "en": "WAN",
    "category": "info",
    "era": "info",
    "date": "1970 年",
    "year": 1970,
    "people": "",
    "place": "",
    "summary": "广域网约 1970 年 出现，建立在 数学、局域网 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics","inf_lan"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "广域网在 1970 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，广域网仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "广域网把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_vpn",
    "name": "虚拟专网",
    "en": "VPN",
    "category": "info",
    "era": "info",
    "date": "1996 年",
    "year": 1996,
    "people": "",
    "place": "",
    "summary": "虚拟专网约 1996 年 出现，建立在 数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "虚拟专网在 1996 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，虚拟专网仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "虚拟专网把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_blockchain",
    "name": "区块链",
    "en": "Blockchain",
    "category": "info",
    "era": "intelligent",
    "date": "2008 年",
    "year": 2008,
    "people": "",
    "place": "",
    "summary": "区块链约 2008 年 出现，建立在 数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "区块链在 2008 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，区块链仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "区块链把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_pubkey",
    "name": "公钥密码",
    "en": "Public-Key Crypto",
    "category": "info",
    "era": "info",
    "date": "1976 年",
    "year": 1976,
    "people": "",
    "place": "",
    "summary": "公钥密码约 1976 年 成熟，建立在 数学 之上完成关键突破；其能力延伸到 信息记录、远程传输，并为 数字签名 的发展铺平了道路。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "公钥密码在 1976 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，公钥密码仍是 信息记录 的底层支撑，并持续影响 数字签名。"
      }
    ],
    "significance": "公钥密码把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 数字签名。"
  },
{
    "id": "inf_symenc",
    "name": "对称加密",
    "en": "Symmetric Crypto",
    "category": "info",
    "era": "electrical",
    "date": "1949 年",
    "year": 1949,
    "people": "",
    "place": "",
    "summary": "对称加密约 1949 年 出现，建立在 数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "对称加密在 1949 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，对称加密仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "对称加密把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_hash",
    "name": "哈希函数",
    "en": "Hash Function",
    "category": "info",
    "era": "info",
    "date": "1953 年",
    "year": 1953,
    "people": "",
    "place": "",
    "summary": "哈希函数约 1953 年 出现，建立在 数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "哈希函数在 1953 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，哈希函数仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "哈希函数把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_digitalsig",
    "name": "数字签名",
    "en": "Digital Signature",
    "category": "info",
    "era": "info",
    "date": "1976 年",
    "year": 1976,
    "people": "",
    "place": "",
    "summary": "数字签名约 1976 年 出现，建立在 数学、公钥密码 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics","inf_pubkey"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "数字签名在 1976 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，数字签名仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "数字签名把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_qrcode",
    "name": "二维码",
    "en": "QR Code",
    "category": "info",
    "era": "info",
    "date": "1994 年",
    "year": 1994,
    "people": "",
    "place": "",
    "summary": "二维码约 1994 年 出现，建立在 数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "二维码在 1994 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，二维码仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "二维码把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_barcode",
    "name": "条形码",
    "en": "Barcode",
    "category": "info",
    "era": "electrical",
    "date": "1948 年",
    "year": 1948,
    "people": "",
    "place": "",
    "summary": "条形码约 1948 年 出现，建立在 数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "条形码在 1948 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，条形码仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "条形码把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_rfid",
    "name": "射频识别",
    "en": "RFID",
    "category": "info",
    "era": "electrical",
    "date": "1948 年",
    "year": 1948,
    "people": "",
    "place": "",
    "summary": "射频识别约 1948 年 出现，建立在 数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "射频识别在 1948 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，射频识别仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "射频识别把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_sensor_net",
    "name": "无线传感网",
    "en": "WSN",
    "category": "info",
    "era": "info",
    "date": "1980 年",
    "year": 1980,
    "people": "",
    "place": "",
    "summary": "无线传感网约 1980 年 出现，建立在 数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "无线传感网在 1980 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，无线传感网仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "无线传感网把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },

{
    "id": "inf_edge",
    "name": "边缘计算",
    "en": "Edge Computing",
    "category": "info",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "边缘计算约 2000 年 出现，建立在 数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "边缘计算在 2000 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，边缘计算仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "边缘计算把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_cloud",
    "name": "云计算",
    "en": "Cloud Computing",
    "category": "info",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "云计算在 2000 年 前后成形，依托 数学 把 信息记录、远程传输 落到实处，并成为 信息通信 中承上启下的一环，直接支撑了 智慧城市 等后续技术。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "云计算在 2000 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，云计算仍是 信息记录 的底层支撑，并持续影响 智慧城市。"
      }
    ],
    "significance": "云计算把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 智慧城市。"
  },
{
    "id": "inf_fog",
    "name": "雾计算",
    "en": "Fog Computing",
    "category": "info",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "雾计算约 2010 年 出现，建立在 数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "雾计算在 2010 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，雾计算仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "雾计算把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_quantumcom",
    "name": "量子通信",
    "en": "Quantum Communication",
    "category": "info",
    "era": "info",
    "date": "1980 年",
    "year": 1980,
    "people": "",
    "place": "",
    "summary": "量子通信约 1980 年 出现，建立在 数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "量子通信在 1980 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，量子通信仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "量子通信把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_qkd",
    "name": "量子密钥分发",
    "en": "QKD",
    "category": "info",
    "era": "info",
    "date": "1984 年",
    "year": 1984,
    "people": "",
    "place": "",
    "summary": "量子密钥分发约 1984 年 出现，建立在 数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "量子密钥分发在 1984 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，量子密钥分发仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "量子密钥分发把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_ml",
    "name": "机器学习",
    "en": "Machine Learning",
    "category": "info",
    "era": "info",
    "date": "1959 年",
    "year": 1959,
    "people": "",
    "place": "",
    "summary": "机器学习约 1959 年 出现，建立在 数学、神经网络 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics","inf_nn"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "机器学习在 1959 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，机器学习仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "机器学习把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_dl",
    "name": "深度学习",
    "en": "Deep Learning",
    "category": "info",
    "era": "intelligent",
    "date": "2006 年",
    "year": 2006,
    "people": "",
    "place": "",
    "summary": "深度学习约 2006 年 出现，建立在 数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "深度学习在 2006 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，深度学习仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "深度学习把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_nn",
    "name": "神经网络",
    "en": "Neural Network",
    "category": "info",
    "era": "info",
    "date": "1958 年",
    "year": 1958,
    "people": "",
    "place": "",
    "summary": "神经网络约 1958 年 成熟，建立在 数学、人工智能 之上完成关键突破；其能力延伸到 信息记录、远程传输，并为 机器学习、通用人工智能 的发展铺平了道路。",
    "dependsOn": ["mathematics","ai"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "神经网络在 1958 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，神经网络仍是 信息记录 的底层支撑，并持续影响 机器学习、通用人工智能。"
      }
    ],
    "significance": "神经网络把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 机器学习、通用人工智能。"
  },
{
    "id": "inf_expert",
    "name": "专家系统",
    "en": "Expert System",
    "category": "info",
    "era": "info",
    "date": "1965 年",
    "year": 1965,
    "people": "",
    "place": "",
    "summary": "专家系统约 1965 年 出现，建立在 数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "专家系统在 1965 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，专家系统仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "专家系统把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_knowledge",
    "name": "知识图谱",
    "en": "Knowledge Graph",
    "category": "info",
    "era": "intelligent",
    "date": "2007 年",
    "year": 2007,
    "people": "",
    "place": "",
    "summary": "知识图谱约 2007 年 出现，建立在 数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "知识图谱在 2007 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，知识图谱仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "知识图谱把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_nlp",
    "name": "自然语言处理",
    "en": "NLP",
    "category": "info",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "people": "",
    "place": "",
    "summary": "自然语言处理约 1950 年 出现，建立在 数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "自然语言处理在 1950 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，自然语言处理仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "自然语言处理把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_asr",
    "name": "语音识别",
    "en": "Speech Recognition",
    "category": "info",
    "era": "info",
    "date": "1952 年",
    "year": 1952,
    "people": "",
    "place": "",
    "summary": "语音识别约 1952 年 出现，建立在 数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "语音识别在 1952 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，语音识别仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "语音识别把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_mt",
    "name": "机器翻译",
    "en": "Machine Translation",
    "category": "info",
    "era": "info",
    "date": "1954 年",
    "year": 1954,
    "people": "",
    "place": "",
    "summary": "机器翻译约 1954 年 出现，建立在 数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "机器翻译在 1954 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，机器翻译仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "机器翻译把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_recommend",
    "name": "推荐系统",
    "en": "Recommender",
    "category": "info",
    "era": "info",
    "date": "1990 年",
    "year": 1990,
    "people": "",
    "place": "",
    "summary": "推荐系统约 1990 年 出现，建立在 数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "推荐系统在 1990 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，推荐系统仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "推荐系统把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_ar",
    "name": "增强现实",
    "en": "Augmented Reality",
    "category": "info",
    "era": "info",
    "date": "1990 年",
    "year": 1990,
    "people": "",
    "place": "",
    "summary": "增强现实约 1990 年 出现，建立在 数学、显示技术、数码相机 / 图像传感器 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics","display","camera","ai","sensor"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "增强现实在 1990 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，增强现实仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "增强现实把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_vr",
    "name": "虚拟现实",
    "en": "Virtual Reality",
    "category": "info",
    "era": "info",
    "date": "1980 年",
    "year": 1980,
    "people": "",
    "place": "",
    "summary": "虚拟现实约 1980 年 成熟，建立在 数学、显示技术、电子计算机 之上完成关键突破；其能力延伸到 信息记录、远程传输，并为 虚拟世界 的发展铺平了道路。",
    "dependsOn": ["mathematics","display","computer","sensor"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "虚拟现实在 1980 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，虚拟现实仍是 信息记录 的底层支撑，并持续影响 虚拟世界。"
      }
    ],
    "significance": "虚拟现实把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 虚拟世界。"
  },

{
    "id": "inf_dataviz",
    "name": "数据可视化",
    "en": "Data Visualization",
    "category": "info",
    "era": "info",
    "date": "1980 年",
    "year": 1980,
    "people": "",
    "place": "",
    "summary": "数据可视化约 1980 年 出现，建立在 数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "数据可视化在 1980 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，数据可视化仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "数据可视化把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_gis",
    "name": "地理信息系统",
    "en": "GIS",
    "category": "info",
    "era": "info",
    "date": "1960 年",
    "year": 1960,
    "people": "",
    "place": "",
    "summary": "地理信息系统约 1960 年 出现，建立在 数学、数据库 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics","inf_db"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "地理信息系统在 1960 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，地理信息系统仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "地理信息系统把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_emap",
    "name": "电子地图",
    "en": "Digital Map",
    "category": "info",
    "era": "info",
    "date": "1980 年",
    "year": 1980,
    "people": "",
    "place": "",
    "summary": "电子地图约 1980 年 出现，建立在 数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "电子地图在 1980 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，电子地图仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "电子地图把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_navsoft",
    "name": "导航软件",
    "en": "Navigation Software",
    "category": "info",
    "era": "info",
    "date": "1990 年",
    "year": 1990,
    "people": "",
    "place": "",
    "summary": "导航软件约 1990 年 出现，建立在 数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "导航软件在 1990 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，导航软件仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "导航软件把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_watermark",
    "name": "数字水印",
    "en": "Digital Watermark",
    "category": "info",
    "era": "info",
    "date": "1990 年",
    "year": 1990,
    "people": "",
    "place": "",
    "summary": "数字水印约 1990 年 成熟，建立在 数学 之上完成关键突破；其能力延伸到 信息记录、远程传输，并为 信息隐藏 的发展铺平了道路。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "数字水印在 1990 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，数字水印仍是 信息记录 的底层支撑，并持续影响 信息隐藏。"
      }
    ],
    "significance": "数字水印把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 信息隐藏。"
  },
{
    "id": "inf_steg",
    "name": "信息隐藏",
    "en": "Steganography",
    "category": "info",
    "era": "info",
    "date": "1990 年",
    "year": 1990,
    "people": "",
    "place": "",
    "summary": "信息隐藏约 1990 年 出现，建立在 数学、数字水印 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics","inf_watermark"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "信息隐藏在 1990 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，信息隐藏仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "信息隐藏把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_ecc",
    "name": "纠错码",
    "en": "Error Correction Code",
    "category": "info",
    "era": "electrical",
    "date": "1949 年",
    "year": 1949,
    "people": "",
    "place": "",
    "summary": "纠错码约 1949 年 出现，建立在 数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "纠错码在 1949 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，纠错码仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "纠错码把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_compression",
    "name": "数据压缩",
    "en": "Data Compression",
    "category": "info",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "people": "",
    "place": "",
    "summary": "数据压缩约 1950 年 成熟，建立在 数学 之上完成关键突破；其能力延伸到 信息记录、远程传输，并为 编解码 的发展铺平了道路。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "数据压缩在 1950 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，数据压缩仍是 信息记录 的底层支撑，并持续影响 编解码。"
      }
    ],
    "significance": "数据压缩把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 编解码。"
  },
{
    "id": "inf_codec",
    "name": "编解码",
    "en": "Codec",
    "category": "info",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "people": "",
    "place": "",
    "summary": "编解码约 1950 年 出现，建立在 数学、数据压缩 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics","inf_compression"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "编解码在 1950 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，编解码仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "编解码把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_modulation",
    "name": "调制技术",
    "en": "Modulation",
    "category": "info",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "调制技术约 1900 年 成熟，建立在 数学、无线电 之上完成关键突破；其能力延伸到 信息记录、远程传输，并为 无线电广播 的发展铺平了道路。",
    "dependsOn": ["mathematics","radio"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "调制技术在 1900 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，调制技术仍是 信息记录 的底层支撑，并持续影响 无线电广播。"
      }
    ],
    "significance": "调制技术把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 无线电广播。"
  },
{
    "id": "inf_antenna",
    "name": "天线",
    "en": "Antenna",
    "category": "info",
    "era": "industrial",
    "date": "1888 年",
    "year": 1888,
    "people": "",
    "place": "",
    "summary": "天线约 1888 年 出现，建立在 数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "天线在 1888 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，天线仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "天线把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_phasedarray",
    "name": "相控阵",
    "en": "Phased Array",
    "category": "info",
    "era": "electrical",
    "date": "1930 年",
    "year": 1930,
    "people": "",
    "place": "",
    "summary": "相控阵约 1930 年 出现，建立在 数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "相控阵在 1930 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，相控阵仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "相控阵把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_sdn",
    "name": "软件定义网络",
    "en": "SDN",
    "category": "info",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "软件定义网络约 2000 年 出现，建立在 数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "软件定义网络在 2000 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，软件定义网络仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "软件定义网络把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_container",
    "name": "容器技术",
    "en": "Container",
    "category": "info",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "容器技术在 2000 年 前后成形，依托 数学 把 信息记录、远程传输 落到实处，并成为 信息通信 中承上启下的一环，直接支撑了 应用程序接口 等后续技术。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "容器技术在 2000 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，容器技术仍是 信息记录 的底层支撑，并持续影响 应用程序接口。"
      }
    ],
    "significance": "容器技术把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 应用程序接口。"
  },
{
    "id": "inf_microservice",
    "name": "微服务",
    "en": "Microservice",
    "category": "info",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "微服务约 2010 年 出现，建立在 数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "微服务在 2010 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，微服务仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "微服务把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_lowcode",
    "name": "低代码",
    "en": "Low-Code",
    "category": "info",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "低代码约 2010 年 出现，建立在 数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "低代码在 2010 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，低代码仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "低代码把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_devops",
    "name": "DevOps",
    "en": "DevOps",
    "category": "info",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "DevOps在 2010 年 前后成形，依托 数学 把 信息记录、远程传输 落到实处，并成为 信息通信 中承上启下的一环，直接支撑了 持续集成 等后续技术。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "DevOps在 2010 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，DevOps仍是 信息记录 的底层支撑，并持续影响 持续集成。"
      }
    ],
    "significance": "DevOps把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 持续集成。"
  },
{
    "id": "inf_cicd",
    "name": "持续集成",
    "en": "CI/CD",
    "category": "info",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "持续集成约 2010 年 出现，建立在 数学、DevOps 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics","inf_devops"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "持续集成在 2010 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，持续集成仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "持续集成把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_agile",
    "name": "敏捷开发",
    "en": "Agile",
    "category": "info",
    "era": "intelligent",
    "date": "2001 年",
    "year": 2001,
    "people": "",
    "place": "",
    "summary": "敏捷开发约 2001 年 出现，建立在 数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "敏捷开发在 2001 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，敏捷开发仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "敏捷开发把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_uml",
    "name": "统一建模语言",
    "en": "UML",
    "category": "info",
    "era": "info",
    "date": "1997 年",
    "year": 1997,
    "people": "",
    "place": "",
    "summary": "统一建模语言约 1997 年 出现，建立在 数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "统一建模语言在 1997 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，统一建模语言仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "统一建模语言把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_git",
    "name": "版本控制",
    "en": "Version Control",
    "category": "info",
    "era": "info",
    "date": "1972 年",
    "year": 1972,
    "people": "",
    "place": "",
    "summary": "版本控制约 1972 年 出现，建立在 数学、C 语言 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics","inf_pl_c"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "版本控制在 1972 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，版本控制仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "版本控制把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_api",
    "name": "应用程序接口",
    "en": "API",
    "category": "info",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "应用程序接口约 2000 年 出现，建立在 数学、容器技术 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics","inf_container"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "应用程序接口在 2000 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，应用程序接口仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "应用程序接口把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_middleware",
    "name": "中间件",
    "en": "Middleware",
    "category": "info",
    "era": "info",
    "date": "1990 年",
    "year": 1990,
    "people": "",
    "place": "",
    "summary": "中间件约 1990 年 出现，建立在 数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "中间件在 1990 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，中间件仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "中间件把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_cdn",
    "name": "内容分发网络",
    "en": "CDN",
    "category": "info",
    "era": "info",
    "date": "1990 年",
    "year": 1990,
    "people": "",
    "place": "",
    "summary": "内容分发网络在 1990 年 前后成形，依托 数学 把 信息记录、远程传输 落到实处，并成为 信息通信 中承上启下的一环，直接支撑了 负载均衡 等后续技术。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "内容分发网络在 1990 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，内容分发网络仍是 信息记录 的底层支撑，并持续影响 负载均衡。"
      }
    ],
    "significance": "内容分发网络把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 负载均衡。"
  },
{
    "id": "inf_loadbalancer",
    "name": "负载均衡",
    "en": "Load Balancer",
    "category": "info",
    "era": "info",
    "date": "1990 年",
    "year": 1990,
    "people": "",
    "place": "",
    "summary": "负载均衡约 1990 年 出现，建立在 数学、内容分发网络 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics","inf_cdn"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "负载均衡在 1990 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，负载均衡仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "负载均衡把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_cache",
    "name": "缓存系统",
    "en": "Caching",
    "category": "info",
    "era": "info",
    "date": "1990 年",
    "year": 1990,
    "people": "",
    "place": "",
    "summary": "缓存系统约 1990 年 出现，建立在 数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "缓存系统在 1990 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，缓存系统仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "缓存系统把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_graphdb",
    "name": "图数据库",
    "en": "Graph Database",
    "category": "info",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "图数据库约 2000 年 出现，建立在 数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "图数据库在 2000 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，图数据库仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "图数据库把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_timeseries",
    "name": "时序数据库",
    "en": "Time-Series DB",
    "category": "info",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "时序数据库约 2000 年 出现，建立在 数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "时序数据库在 2000 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，时序数据库仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "时序数据库把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_vector_db",
    "name": "向量数据库",
    "en": "Vector Database",
    "category": "info",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "向量数据库约 2010 年 出现，建立在 数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "向量数据库在 2010 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，向量数据库仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "向量数据库把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_recommend2",
    "name": "协同过滤",
    "en": "Collaborative Filtering",
    "category": "info",
    "era": "info",
    "date": "1992 年",
    "year": 1992,
    "people": "",
    "place": "",
    "summary": "协同过滤约 1992 年 出现，建立在 数学、电子计算机、统计学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics","computer","statistics","algorithm"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "协同过滤在 1992 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，协同过滤仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "协同过滤把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },


{
    "id": "inf_diffusion",
    "name": "扩散模型",
    "en": "Diffusion Model",
    "category": "info",
    "era": "intelligent",
    "date": "2015 年",
    "year": 2015,
    "people": "",
    "place": "",
    "summary": "扩散模型约 2015 年 出现，建立在 数学、生成对抗网络 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics","inf_gan"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "扩散模型在 2015 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，扩散模型仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "扩散模型把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_rl",
    "name": "强化学习",
    "en": "Reinforcement Learning",
    "category": "info",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "people": "",
    "place": "",
    "summary": "强化学习约 1950 年 出现，建立在 数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "强化学习在 1950 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，强化学习仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "强化学习把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_gan",
    "name": "生成对抗网络",
    "en": "GAN",
    "category": "info",
    "era": "intelligent",
    "date": "2014 年",
    "year": 2014,
    "people": "",
    "place": "",
    "summary": "生成对抗网络约 2014 年 成熟，建立在 数学 之上完成关键突破；其能力延伸到 信息记录、远程传输，并为 扩散模型 的发展铺平了道路。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "生成对抗网络在 2014 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，生成对抗网络仍是 信息记录 的底层支撑，并持续影响 扩散模型。"
      }
    ],
    "significance": "生成对抗网络把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 扩散模型。"
  },
{
    "id": "inf_rpa",
    "name": "机器人流程自动化",
    "en": "RPA",
    "category": "info",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "机器人流程自动化约 2010 年 出现，建立在 数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "机器人流程自动化在 2010 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，机器人流程自动化仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "机器人流程自动化把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_alloptical",
    "name": "全光网络",
    "en": "All-Optical Network",
    "category": "info",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "全光网络约 2000 年 出现，建立在 数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "全光网络在 2000 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，全光网络仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "全光网络把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_400g",
    "name": "高速光模块",
    "en": "High-Speed Optical Module",
    "category": "info",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "高速光模块约 2010 年 出现，建立在 数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "高速光模块在 2010 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，高速光模块仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "高速光模块把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_leo",
    "name": "低轨卫星星座",
    "en": "LEO Constellation",
    "category": "info",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "低轨卫星星座约 2010 年 出现，建立在 数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "低轨卫星星座在 2010 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，低轨卫星星座仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "低轨卫星星座把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_quantuminternet",
    "name": "量子互联网",
    "en": "Quantum Internet",
    "category": "info",
    "era": "intelligent",
    "date": "2020 年",
    "year": 2020,
    "people": "",
    "place": "",
    "summary": "量子互联网约 2020 年 出现，建立在 数学、人工智能、量子科技 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics","ai","quantum","computer"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "量子互联网在 2020 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，量子互联网仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "量子互联网把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_homomorphic",
    "name": "同态加密",
    "en": "Homomorphic Encryption",
    "category": "info",
    "era": "intelligent",
    "date": "2009 年",
    "year": 2009,
    "people": "",
    "place": "",
    "summary": "同态加密约 2009 年 出现，建立在 数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "同态加密在 2009 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，同态加密仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "同态加密把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_zeroknowledge",
    "name": "零知识证明",
    "en": "Zero-Knowledge Proof",
    "category": "info",
    "era": "info",
    "date": "1985 年",
    "year": 1985,
    "people": "",
    "place": "",
    "summary": "零知识证明约 1985 年 出现，建立在 数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "零知识证明在 1985 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，零知识证明仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "零知识证明把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_multimodal",
    "name": "多模态大模型",
    "en": "Multimodal Model",
    "category": "info",
    "era": "intelligent",
    "date": "2020 年",
    "year": 2020,
    "people": "",
    "place": "",
    "summary": "多模态大模型约 2020 年 成熟，建立在 数学 之上完成关键突破；其能力延伸到 信息记录、远程传输，并为 智能体 的发展铺平了道路。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "多模态大模型在 2020 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，多模态大模型仍是 信息记录 的底层支撑，并持续影响 智能体。"
      }
    ],
    "significance": "多模态大模型把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 智能体。"
  },
{
    "id": "inf_agent",
    "name": "智能体",
    "en": "AI Agent",
    "category": "info",
    "era": "intelligent",
    "date": "2020 年",
    "year": 2020,
    "people": "",
    "place": "",
    "summary": "智能体在 2020 年 前后成形，依托 数学、多模态大模型 把 信息记录、远程传输 落到实处，并成为 信息通信 中承上启下的一环，直接支撑了 世界模型 等后续技术。",
    "dependsOn": ["mathematics","inf_multimodal"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "智能体在 2020 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，智能体仍是 信息记录 的底层支撑，并持续影响 世界模型。"
      }
    ],
    "significance": "智能体把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 世界模型。"
  },
{
    "id": "inf_worldmodel",
    "name": "世界模型",
    "en": "World Model",
    "category": "info",
    "era": "intelligent",
    "date": "2020 年",
    "year": 2020,
    "people": "",
    "place": "",
    "summary": "世界模型约 2020 年 出现，建立在 数学、智能体 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics","inf_agent"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "世界模型在 2020 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，世界模型仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "世界模型把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_embedding",
    "name": "嵌入模型",
    "en": "Embedding Model",
    "category": "info",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "嵌入模型约 2010 年 出现，建立在 数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "嵌入模型在 2010 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，嵌入模型仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "嵌入模型把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_vectorsearch",
    "name": "向量检索",
    "en": "Vector Search",
    "category": "info",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "向量检索约 2010 年 出现，建立在 数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "向量检索在 2010 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，向量检索仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "向量检索把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_rag",
    "name": "检索增强生成",
    "en": "RAG",
    "category": "info",
    "era": "intelligent",
    "date": "2020 年",
    "year": 2020,
    "people": "",
    "place": "",
    "summary": "检索增强生成约 2020 年 出现，建立在 数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "检索增强生成在 2020 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，检索增强生成仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "检索增强生成把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_alignment",
    "name": "大模型对齐",
    "en": "AI Alignment",
    "category": "info",
    "era": "intelligent",
    "date": "2020 年",
    "year": 2020,
    "people": "",
    "place": "",
    "summary": "大模型对齐约 2020 年 出现，建立在 数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "大模型对齐在 2020 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，大模型对齐仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "大模型对齐把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_speechsyn",
    "name": "语音合成",
    "en": "Speech Synthesis",
    "category": "info",
    "era": "info",
    "date": "1990 年",
    "year": 1990,
    "people": "",
    "place": "",
    "summary": "语音合成约 1990 年 出现，建立在 数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "语音合成在 1990 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，语音合成仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "语音合成把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_digitalhuman",
    "name": "数字人",
    "en": "Digital Human",
    "category": "info",
    "era": "intelligent",
    "date": "2020 年",
    "year": 2020,
    "people": "",
    "place": "",
    "summary": "数字人约 2020 年 出现，建立在 数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "数字人在 2020 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，数字人仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "数字人把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_edgeai",
    "name": "边缘智能",
    "en": "Edge AI",
    "category": "info",
    "era": "intelligent",
    "date": "2015 年",
    "year": 2015,
    "people": "",
    "place": "",
    "summary": "边缘智能约 2015 年 出现，建立在 数学、人工智能、物联网 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics","ai","iot","soc"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "边缘智能在 2015 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，边缘智能仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "边缘智能把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_aisearch",
    "name": "AI 搜索",
    "en": "AI Search",
    "category": "info",
    "era": "intelligent",
    "date": "2020 年",
    "year": 2020,
    "people": "",
    "place": "",
    "summary": "AI 搜索约 2020 年 出现，建立在 数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "AI 搜索在 2020 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，AI 搜索仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "AI 搜索把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "inf_codegen",
    "name": "代码生成模型",
    "en": "Code Generation",
    "category": "info",
    "era": "intelligent",
    "date": "2020 年",
    "year": 2020,
    "people": "",
    "place": "",
    "summary": "代码生成模型约 2020 年 出现，建立在 数学 之上；它把 信息记录、远程传输 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "信息记录",
      "远程传输",
      "智能处理"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "代码生成模型在 2020 年 前后出现，依托 数学 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，代码生成模型仍是 信息记录 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "代码生成模型把 数学 与 信息记录 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bio_herb",
    "name": "草药学",
    "en": "Herbal Medicine",
    "category": "life",
    "era": "prehistoric",
    "date": "公元前 5000 年",
    "year": -5000,
    "people": "",
    "place": "",
    "summary": "草药学约 公元前 5000 年 成熟，建立在 农业 之上完成关键突破；其能力延伸到 疾病治疗、健康维持，并为 牙科、战地医疗 的发展铺平了道路。",
    "dependsOn": ["agriculture"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "史前时代",
        "text": "草药学在 公元前 5000 年 前后出现，依托 农业 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，草药学仍是 疾病治疗 的底层支撑，并持续影响 牙科、战地医疗。"
      }
    ],
    "significance": "草药学把 农业 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 牙科、战地医疗。"
  },
{
    "id": "bio_acupuncture",
    "name": "针灸",
    "en": "Acupuncture",
    "category": "life",
    "era": "ancient",
    "date": "公元前 2000 年",
    "year": -2000,
    "people": "",
    "place": "",
    "summary": "针灸约 公元前 2000 年 成熟，建立在 数学 之上完成关键突破；其能力延伸到 疾病治疗、健康维持，并为 方剂学 的发展铺平了道路。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "针灸在 公元前 2000 年 前后出现，依托 数学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，针灸仍是 疾病治疗 的底层支撑，并持续影响 方剂学。"
      }
    ],
    "significance": "针灸把 数学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 方剂学。"
  },
{
    "id": "bio_anatomy",
    "name": "解剖学",
    "en": "Anatomy",
    "category": "life",
    "era": "classical",
    "date": "公元前 300 年",
    "year": -300,
    "people": "",
    "place": "",
    "summary": "解剖学约 公元前 300 年 成熟，建立在 数学、外科学 之上完成关键突破；其能力延伸到 疾病治疗、健康维持，并为 生理学 的发展铺平了道路。",
    "dependsOn": ["mathematics","bio_surgery"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "古典时代",
        "text": "解剖学在 公元前 300 年 前后出现，依托 数学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，解剖学仍是 疾病治疗 的底层支撑，并持续影响 生理学。"
      }
    ],
    "significance": "解剖学把 数学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 生理学。"
  },
{
    "id": "bio_physiology",
    "name": "生理学",
    "en": "Physiology",
    "category": "life",
    "era": "classical",
    "date": "公元前 300 年",
    "year": -300,
    "people": "",
    "place": "",
    "summary": "生理学约 公元前 300 年 出现，建立在 数学、解剖学 之上；它把 疾病治疗、健康维持 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics","bio_anatomy"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "古典时代",
        "text": "生理学在 公元前 300 年 前后出现，依托 数学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，生理学仍是 疾病治疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "生理学把 数学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bio_pharmacology",
    "name": "药理学",
    "en": "Pharmacology",
    "category": "life",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "药理学在 1800 年 前后成形，依托 化学、数学、微生物学 把 疾病治疗、健康维持 落到实处，并成为 生命与医疗 中承上启下的一环，直接支撑了 纳米医药、衰老干预 等后续技术。",
    "dependsOn": ["chemistry","mathematics","microbiology"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "药理学在 1800 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，药理学仍是 疾病治疗 的底层支撑，并持续影响 纳米医药、衰老干预。"
      }
    ],
    "significance": "药理学把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 纳米医药、衰老干预。"
  },
{
    "id": "bio_prescription",
    "name": "方剂学",
    "en": "Prescriptions",
    "category": "life",
    "era": "ancient",
    "date": "公元前 2000 年",
    "year": -2000,
    "people": "",
    "place": "",
    "summary": "方剂学约 公元前 2000 年 出现，建立在 数学、针灸 之上；它把 疾病治疗、健康维持 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics","bio_acupuncture"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "方剂学在 公元前 2000 年 前后出现，依托 数学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，方剂学仍是 疾病治疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "方剂学把 数学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bio_distill",
    "name": "蒸馏制药",
    "en": "Distilled Medicine",
    "category": "life",
    "era": "medieval",
    "date": "800 年",
    "year": 800,
    "people": "",
    "place": "",
    "summary": "蒸馏制药约 800 年 出现，建立在 数学 之上；它把 疾病治疗、健康维持 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "中世纪",
        "text": "蒸馏制药在 800 年 前后出现，依托 数学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，蒸馏制药仍是 疾病治疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "蒸馏制药把 数学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bio_aspirin",
    "name": "阿司匹林",
    "en": "Aspirin",
    "category": "life",
    "era": "industrial",
    "date": "1897 年",
    "year": 1897,
    "people": "",
    "place": "",
    "summary": "阿司匹林约 1897 年 出现，建立在 化学、数学 之上；它把 疾病治疗、健康维持 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","mathematics"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "阿司匹林在 1897 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，阿司匹林仍是 疾病治疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "阿司匹林把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bio_penicillin",
    "name": "青霉素",
    "en": "Penicillin",
    "category": "life",
    "era": "electrical",
    "date": "1928 年",
    "year": 1928,
    "people": "",
    "place": "",
    "summary": "青霉素约 1928 年 成熟，建立在 化学、数学 之上完成关键突破；其能力延伸到 疾病治疗、健康维持，并为 抗生素、生物反应器 的发展铺平了道路。",
    "dependsOn": ["chemistry","mathematics"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "青霉素在 1928 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，青霉素仍是 疾病治疗 的底层支撑，并持续影响 抗生素、生物反应器。"
      }
    ],
    "significance": "青霉素把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 抗生素、生物反应器。"
  },
{
    "id": "bio_antibiotic",
    "name": "抗生素",
    "en": "Antibiotics",
    "category": "life",
    "era": "electrical",
    "date": "1928 年",
    "year": 1928,
    "people": "",
    "place": "",
    "summary": "抗生素约 1928 年 出现，建立在 化学、数学、青霉素 之上；它把 疾病治疗、健康维持 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","mathematics","bio_penicillin"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "抗生素在 1928 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，抗生素仍是 疾病治疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "抗生素把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bio_smallpox",
    "name": "牛痘接种",
    "en": "Smallpox Vaccination",
    "category": "life",
    "era": "industrial",
    "date": "1796 年",
    "year": 1796,
    "people": "",
    "place": "",
    "summary": "牛痘接种约 1796 年 出现，建立在 化学、数学、疫苗 之上；它把 疾病治疗、健康维持 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","mathematics","vaccination"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "牛痘接种在 1796 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，牛痘接种仍是 疾病治疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "牛痘接种把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bio_bcg",
    "name": "卡介苗",
    "en": "BCG Vaccine",
    "category": "life",
    "era": "electrical",
    "date": "1921 年",
    "year": 1921,
    "people": "",
    "place": "",
    "summary": "卡介苗约 1921 年 出现，建立在 化学、数学 之上；它把 疾病治疗、健康维持 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","mathematics"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "卡介苗在 1921 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，卡介苗仍是 疾病治疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "卡介苗把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bio_insulin",
    "name": "胰岛素",
    "en": "Insulin",
    "category": "life",
    "era": "electrical",
    "date": "1921 年",
    "year": 1921,
    "people": "",
    "place": "",
    "summary": "胰岛素约 1921 年 出现，建立在 化学、数学 之上；它把 疾病治疗、健康维持 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","mathematics"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "胰岛素在 1921 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，胰岛素仍是 疾病治疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "胰岛素把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bio_hormone",
    "name": "激素疗法",
    "en": "Hormone Therapy",
    "category": "life",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "激素疗法约 1900 年 出现，建立在 化学、数学 之上；它把 疾病治疗、健康维持 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","mathematics"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "激素疗法在 1900 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，激素疗法仍是 疾病治疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "激素疗法把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bio_vitamin",
    "name": "维生素",
    "en": "Vitamin",
    "category": "life",
    "era": "electrical",
    "date": "1912 年",
    "year": 1912,
    "people": "",
    "place": "",
    "summary": "维生素约 1912 年 出现，建立在 化学、数学 之上；它把 疾病治疗、健康维持 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","mathematics"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "维生素在 1912 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，维生素仍是 疾病治疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "维生素把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bio_transfusion",
    "name": "输血",
    "en": "Blood Transfusion",
    "category": "life",
    "era": "industrial",
    "date": "1818 年",
    "year": 1818,
    "people": "",
    "place": "",
    "summary": "输血约 1818 年 出现，建立在 化学、数学 之上；它把 疾病治疗、健康维持 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","mathematics"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "输血在 1818 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，输血仍是 疾病治疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "输血把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bio_bloodtype",
    "name": "血型",
    "en": "Blood Group",
    "category": "life",
    "era": "electrical",
    "date": "1901 年",
    "year": 1901,
    "people": "",
    "place": "",
    "summary": "血型约 1901 年 出现，建立在 化学、数学 之上；它把 疾病治疗、健康维持 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","mathematics"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "血型在 1901 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，血型仍是 疾病治疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "血型把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },

{
    "id": "bio_aseptic",
    "name": "无菌术",
    "en": "Aseptic Technique",
    "category": "life",
    "era": "industrial",
    "date": "1867 年",
    "year": 1867,
    "people": "",
    "place": "",
    "summary": "无菌术约 1867 年 出现，建立在 化学、数学、无菌外科 之上；它把 疾病治疗、健康维持 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","mathematics","surgery","anesthesia"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "无菌术在 1867 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，无菌术仍是 疾病治疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "无菌术把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bio_surgery",
    "name": "外科学",
    "en": "Surgery",
    "category": "life",
    "era": "classical",
    "date": "公元前 500 年",
    "year": -500,
    "people": "",
    "place": "",
    "summary": "外科学约 公元前 500 年 成熟，建立在 数学、缝合 之上完成关键突破；其能力延伸到 疾病治疗、健康维持，并为 解剖学、战地医疗 的发展铺平了道路。",
    "dependsOn": ["mathematics","bio_suture"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "古典时代",
        "text": "外科学在 公元前 500 年 前后出现，依托 数学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，外科学仍是 疾病治疗 的底层支撑，并持续影响 解剖学、战地医疗。"
      }
    ],
    "significance": "外科学把 数学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 解剖学、战地医疗。"
  },
{
    "id": "bio_suture",
    "name": "缝合",
    "en": "Suturing",
    "category": "life",
    "era": "ancient",
    "date": "公元前 2000 年",
    "year": -2000,
    "people": "",
    "place": "",
    "summary": "缝合在 公元前 2000 年 前后成形，依托 数学 把 疾病治疗、健康维持 落到实处，并成为 生命与医疗 中承上启下的一环，直接支撑了 外科学 等后续技术。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "缝合在 公元前 2000 年 前后出现，依托 数学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，缝合仍是 疾病治疗 的底层支撑，并持续影响 外科学。"
      }
    ],
    "significance": "缝合把 数学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 外科学。"
  },
{
    "id": "bio_orthopedics",
    "name": "骨科",
    "en": "Orthopedics",
    "category": "life",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "骨科约 1800 年 出现，建立在 化学、数学 之上；它把 疾病治疗、健康维持 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","mathematics"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "骨科在 1800 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，骨科仍是 疾病治疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "骨科把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bio_neurosurgery",
    "name": "神经外科",
    "en": "Neurosurgery",
    "category": "life",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "神经外科约 1900 年 出现，建立在 化学、数学 之上；它把 疾病治疗、健康维持 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","mathematics"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "神经外科在 1900 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，神经外科仍是 疾病治疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "神经外科把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bio_cardiovascular",
    "name": "心血管外科",
    "en": "Cardiovascular Surgery",
    "category": "life",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "心血管外科约 1900 年 出现，建立在 化学、数学 之上；它把 疾病治疗、健康维持 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","mathematics"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "心血管外科在 1900 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，心血管外科仍是 疾病治疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "心血管外科把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bio_transplant",
    "name": "器官移植",
    "en": "Organ Transplant",
    "category": "life",
    "era": "info",
    "date": "1954 年",
    "year": 1954,
    "people": "",
    "place": "",
    "summary": "器官移植约 1954 年 出现，建立在 化学、数学 之上；它把 疾病治疗、健康维持 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","mathematics"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "器官移植在 1954 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，器官移植仍是 疾病治疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "器官移植把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bio_dialysis",
    "name": "血液透析",
    "en": "Dialysis",
    "category": "life",
    "era": "electrical",
    "date": "1943 年",
    "year": 1943,
    "people": "",
    "place": "",
    "summary": "血液透析在 1943 年 前后成形，依托 化学、数学、血液制品 把 疾病治疗、健康维持 落到实处，并成为 生命与医疗 中承上启下的一环，直接支撑了 人工肾 等后续技术。",
    "dependsOn": ["chemistry","mathematics","bio_bloodprod"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "血液透析在 1943 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，血液透析仍是 疾病治疗 的底层支撑，并持续影响 人工肾。"
      }
    ],
    "significance": "血液透析把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 人工肾。"
  },
{
    "id": "bio_artkidney",
    "name": "人工肾",
    "en": "Artificial Kidney",
    "category": "life",
    "era": "electrical",
    "date": "1943 年",
    "year": 1943,
    "people": "",
    "place": "",
    "summary": "人工肾约 1943 年 出现，建立在 化学、数学、血液透析 之上；它把 疾病治疗、健康维持 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","mathematics","bio_dialysis"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "人工肾在 1943 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，人工肾仍是 疾病治疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "人工肾把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bio_pacemaker",
    "name": "心脏起搏器",
    "en": "Pacemaker",
    "category": "life",
    "era": "info",
    "date": "1958 年",
    "year": 1958,
    "people": "",
    "place": "",
    "summary": "心脏起搏器约 1958 年 出现，建立在 化学、数学 之上；它把 疾病治疗、健康维持 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","mathematics"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "心脏起搏器在 1958 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，心脏起搏器仍是 疾病治疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "心脏起搏器把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bio_stent",
    "name": "血管支架",
    "en": "Stent",
    "category": "life",
    "era": "info",
    "date": "1980 年",
    "year": 1980,
    "people": "",
    "place": "",
    "summary": "血管支架约 1980 年 出现，建立在 化学、数学 之上；它把 疾病治疗、健康维持 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","mathematics"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "血管支架在 1980 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，血管支架仍是 疾病治疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "血管支架把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bio_endoscope",
    "name": "内窥镜",
    "en": "Endoscope",
    "category": "life",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "内窥镜约 1800 年 出现，建立在 化学、数学 之上；它把 疾病治疗、健康维持 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","mathematics"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "内窥镜在 1800 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，内窥镜仍是 疾病治疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "内窥镜把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bio_laparoscope",
    "name": "腹腔镜",
    "en": "Laparoscope",
    "category": "life",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "腹腔镜约 1900 年 出现，建立在 化学、数学 之上；它把 疾病治疗、健康维持 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","mathematics"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "腹腔镜在 1900 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，腹腔镜仍是 疾病治疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "腹腔镜把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bio_ultrasound",
    "name": "超声诊断",
    "en": "Medical Ultrasound",
    "category": "life",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "people": "",
    "place": "",
    "summary": "超声诊断约 1950 年 出现，建立在 化学、数学 之上；它把 疾病治疗、健康维持 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","mathematics"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "超声诊断在 1950 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，超声诊断仍是 疾病治疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "超声诊断把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bio_ct",
    "name": "CT 扫描",
    "en": "CT Scan",
    "category": "life",
    "era": "info",
    "date": "1971 年",
    "year": 1971,
    "people": "",
    "place": "",
    "summary": "CT 扫描约 1971 年 成熟，建立在 化学、数学 之上完成关键突破；其能力延伸到 疾病治疗、健康维持，并为 重组DNA技术 的发展铺平了道路。",
    "dependsOn": ["chemistry","mathematics"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "CT 扫描在 1971 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，CT 扫描仍是 疾病治疗 的底层支撑，并持续影响 重组DNA技术。"
      }
    ],
    "significance": "CT 扫描把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 重组DNA技术。"
  },
{
    "id": "bio_mri",
    "name": "核磁共振",
    "en": "MRI",
    "category": "life",
    "era": "info",
    "date": "1973 年",
    "year": 1973,
    "people": "",
    "place": "",
    "summary": "核磁共振约 1973 年 出现，建立在 化学、数学 之上；它把 疾病治疗、健康维持 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","mathematics"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "核磁共振在 1973 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，核磁共振仍是 疾病治疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "核磁共振把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bio_xray",
    "name": "X 射线",
    "en": "X-Ray",
    "category": "life",
    "era": "industrial",
    "date": "1895 年",
    "year": 1895,
    "people": "",
    "place": "",
    "summary": "X 射线约 1895 年 出现，建立在 化学、数学、医学影像 之上；它把 疾病治疗、健康维持 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","mathematics","medical_imaging"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "X 射线在 1895 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，X 射线仍是 疾病治疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "X 射线把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bio_nuclear_med",
    "name": "核医学",
    "en": "Nuclear Medicine",
    "category": "life",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "people": "",
    "place": "",
    "summary": "核医学约 1950 年 出现，建立在 化学、数学 之上；它把 疾病治疗、健康维持 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","mathematics"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "核医学在 1950 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，核医学仍是 疾病治疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "核医学把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bio_pet",
    "name": "正电子成像",
    "en": "PET",
    "category": "life",
    "era": "info",
    "date": "1970 年",
    "year": 1970,
    "people": "",
    "place": "",
    "summary": "正电子成像约 1970 年 出现，建立在 化学、数学 之上；它把 疾病治疗、健康维持 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","mathematics"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "正电子成像在 1970 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，正电子成像仍是 疾病治疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "正电子成像把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bio_seq",
    "name": "基因测序",
    "en": "DNA Sequencing",
    "category": "life",
    "era": "info",
    "date": "1977 年",
    "year": 1977,
    "people": "",
    "place": "",
    "summary": "基因测序约 1977 年 出现，建立在 化学、数学 之上；它把 疾病治疗、健康维持 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","mathematics"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "基因测序在 1977 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，基因测序仍是 疾病治疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "基因测序把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bio_pcr",
    "name": "聚合酶链反应",
    "en": "PCR",
    "category": "life",
    "era": "info",
    "date": "1983 年",
    "year": 1983,
    "people": "",
    "place": "",
    "summary": "聚合酶链反应约 1983 年 成熟，建立在 化学、数学、蛋白质工程 之上完成关键突破；其能力延伸到 疾病治疗、健康维持，并为 mRNA 疫苗 的发展铺平了道路。",
    "dependsOn": ["chemistry","mathematics","bio_proteineng"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "聚合酶链反应在 1983 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，聚合酶链反应仍是 疾病治疗 的底层支撑，并持续影响 mRNA 疫苗。"
      }
    ],
    "significance": "聚合酶链反应把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 mRNA 疫苗。"
  },

{
    "id": "bio_transgenic",
    "name": "转基因",
    "en": "Transgenics",
    "category": "life",
    "era": "info",
    "date": "1973 年",
    "year": 1973,
    "people": "",
    "place": "",
    "summary": "转基因约 1973 年 出现，建立在 化学、数学、基因工程 之上；它把 疾病治疗、健康维持 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","mathematics","genetic_engineering"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "转基因在 1973 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，转基因仍是 疾病治疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "转基因把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bio_clone",
    "name": "克隆技术",
    "en": "Cloning",
    "category": "life",
    "era": "info",
    "date": "1996 年",
    "year": 1996,
    "people": "",
    "place": "",
    "summary": "克隆技术约 1996 年 出现，建立在 化学、数学 之上；它把 疾病治疗、健康维持 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","mathematics"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "克隆技术在 1996 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，克隆技术仍是 疾病治疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "克隆技术把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bio_ivf",
    "name": "试管婴儿",
    "en": "IVF",
    "category": "life",
    "era": "info",
    "date": "1978 年",
    "year": 1978,
    "people": "",
    "place": "",
    "summary": "试管婴儿约 1978 年 出现，建立在 化学、数学 之上；它把 疾病治疗、健康维持 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","mathematics"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "试管婴儿在 1978 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，试管婴儿仍是 疾病治疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "试管婴儿把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },

{
    "id": "bio_tissueeng",
    "name": "组织工程",
    "en": "Tissue Engineering",
    "category": "life",
    "era": "info",
    "date": "1980 年",
    "year": 1980,
    "people": "",
    "place": "",
    "summary": "组织工程约 1980 年 成熟，建立在 化学、数学、生物技术 之上完成关键突破；其能力延伸到 疾病治疗、健康维持，并为 人工皮肤、干细胞治疗、人造子宫 的发展铺平了道路。",
    "dependsOn": ["chemistry","mathematics","biotech","stem_cells","materials"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "组织工程在 1980 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，组织工程仍是 疾病治疗 的底层支撑，并持续影响 人工皮肤、干细胞治疗、人造子宫。"
      }
    ],
    "significance": "组织工程把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 人工皮肤、干细胞治疗、人造子宫。"
  },
{
    "id": "bio_artskin",
    "name": "人工皮肤",
    "en": "Artificial Skin",
    "category": "life",
    "era": "info",
    "date": "1980 年",
    "year": 1980,
    "people": "",
    "place": "",
    "summary": "人工皮肤约 1980 年 出现，建立在 化学、数学、组织工程 之上；它把 疾病治疗、健康维持 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","mathematics","bio_tissueeng"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "人工皮肤在 1980 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，人工皮肤仍是 疾病治疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "人工皮肤把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bio_prosthesis",
    "name": "假肢",
    "en": "Prosthesis",
    "category": "life",
    "era": "ancient",
    "date": "公元前 2000 年",
    "year": -2000,
    "people": "",
    "place": "",
    "summary": "假肢在 公元前 2000 年 前后成形，依托 数学 把 疾病治疗、健康维持 落到实处，并成为 生命与医疗 中承上启下的一环，直接支撑了 义齿 等后续技术。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "假肢在 公元前 2000 年 前后出现，依托 数学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，假肢仍是 疾病治疗 的底层支撑，并持续影响 义齿。"
      }
    ],
    "significance": "假肢把 数学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 义齿。"
  },
{
    "id": "bio_hearingaid",
    "name": "助听器",
    "en": "Hearing Aid",
    "category": "life",
    "era": "industrial",
    "date": "1898 年",
    "year": 1898,
    "people": "",
    "place": "",
    "summary": "助听器约 1898 年 出现，建立在 化学、数学 之上；它把 疾病治疗、健康维持 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","mathematics"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "助听器在 1898 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，助听器仍是 疾病治疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "助听器把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bio_glasses",
    "name": "眼镜",
    "en": "Eyeglasses",
    "category": "life",
    "era": "medieval",
    "date": "1280 年",
    "year": 1280,
    "people": "",
    "place": "",
    "summary": "眼镜约 1280 年 出现，建立在 数学 之上；它把 疾病治疗、健康维持 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "中世纪",
        "text": "眼镜在 1280 年 前后出现，依托 数学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，眼镜仍是 疾病治疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "眼镜把 数学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bio_contactlens",
    "name": "隐形眼镜",
    "en": "Contact Lens",
    "category": "life",
    "era": "industrial",
    "date": "1888 年",
    "year": 1888,
    "people": "",
    "place": "",
    "summary": "隐形眼镜约 1888 年 出现，建立在 化学、数学 之上；它把 疾病治疗、健康维持 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","mathematics"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "隐形眼镜在 1888 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，隐形眼镜仍是 疾病治疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "隐形眼镜把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bio_iol",
    "name": "人工晶体",
    "en": "Intraocular Lens",
    "category": "life",
    "era": "electrical",
    "date": "1949 年",
    "year": 1949,
    "people": "",
    "place": "",
    "summary": "人工晶体约 1949 年 出现，建立在 化学、数学 之上；它把 疾病治疗、健康维持 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","mathematics"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "人工晶体在 1949 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，人工晶体仍是 疾病治疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "人工晶体把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bio_denture",
    "name": "义齿",
    "en": "Denture",
    "category": "life",
    "era": "classical",
    "date": "公元前 500 年",
    "year": -500,
    "people": "",
    "place": "",
    "summary": "义齿约 公元前 500 年 出现，建立在 数学、假肢 之上；它把 疾病治疗、健康维持 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["mathematics","bio_prosthesis"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "古典时代",
        "text": "义齿在 公元前 500 年 前后出现，依托 数学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，义齿仍是 疾病治疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "义齿把 数学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bio_dentistry",
    "name": "牙科",
    "en": "Dentistry",
    "category": "life",
    "era": "ancient",
    "date": "公元前 3000 年",
    "year": -3000,
    "people": "",
    "place": "",
    "summary": "牙科约 公元前 3000 年 出现，建立在 草药学、石器 之上；它把 疾病治疗、健康维持 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["bio_herb","stone_tools"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "牙科在 公元前 3000 年 前后出现，依托 草药学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，牙科仍是 疾病治疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "牙科把 草药学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bio_epidemiology",
    "name": "流行病学",
    "en": "Epidemiology",
    "category": "life",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "流行病学约 1800 年 出现，建立在 化学、数学 之上；它把 疾病治疗、健康维持 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","mathematics"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "流行病学在 1800 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，流行病学仍是 疾病治疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "流行病学把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bio_disinfectant",
    "name": "消毒剂",
    "en": "Disinfectant",
    "category": "life",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "消毒剂约 1800 年 出现，建立在 化学、数学 之上；它把 疾病治疗、健康维持 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","mathematics"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "消毒剂在 1800 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，消毒剂仍是 疾病治疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "消毒剂把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bio_probiotic",
    "name": "益生菌",
    "en": "Probiotics",
    "category": "life",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "益生菌约 1900 年 出现，建立在 化学、数学 之上；它把 疾病治疗、健康维持 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","mathematics"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "益生菌在 1900 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，益生菌仍是 疾病治疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "益生菌把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bio_nutrition",
    "name": "营养学",
    "en": "Nutrition",
    "category": "life",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "营养学约 1800 年 出现，建立在 化学、数学 之上；它把 疾病治疗、健康维持 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","mathematics"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "营养学在 1800 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，营养学仍是 疾病治疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "营养学把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bio_enzyme",
    "name": "酶工程",
    "en": "Enzyme Engineering",
    "category": "life",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "people": "",
    "place": "",
    "summary": "酶工程在 1950 年 前后成形，依托 化学、数学 把 疾病治疗、健康维持 落到实处，并成为 生命与医疗 中承上启下的一环，直接支撑了 体外诊断 等后续技术。",
    "dependsOn": ["chemistry","mathematics"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "酶工程在 1950 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，酶工程仍是 疾病治疗 的底层支撑，并持续影响 体外诊断。"
      }
    ],
    "significance": "酶工程把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 体外诊断。"
  },
{
    "id": "bio_fermentation",
    "name": "发酵工程",
    "en": "Fermentation Engineering",
    "category": "life",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "发酵工程约 1900 年 出现，建立在 化学、数学 之上；它把 疾病治疗、健康维持 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","mathematics"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "发酵工程在 1900 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，发酵工程仍是 疾病治疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "发酵工程把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bio_bioreactor",
    "name": "生物反应器",
    "en": "Bioreactor",
    "category": "life",
    "era": "electrical",
    "date": "1940 年",
    "year": 1940,
    "people": "",
    "place": "",
    "summary": "生物反应器在 1940 年 前后成形，依托 化学、数学、青霉素 把 疾病治疗、健康维持 落到实处，并成为 生命与医疗 中承上启下的一环，直接支撑了 血液制品 等后续技术。",
    "dependsOn": ["chemistry","mathematics","bio_penicillin"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "生物反应器在 1940 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，生物反应器仍是 疾病治疗 的底层支撑，并持续影响 血液制品。"
      }
    ],
    "significance": "生物反应器把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 血液制品。"
  },
{
    "id": "bio_monoclonal",
    "name": "单克隆抗体",
    "en": "Monoclonal Antibody",
    "category": "life",
    "era": "info",
    "date": "1975 年",
    "year": 1975,
    "people": "",
    "place": "",
    "summary": "单克隆抗体约 1975 年 出现，建立在 化学、数学 之上；它把 疾病治疗、健康维持 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","mathematics"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "单克隆抗体在 1975 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，单克隆抗体仍是 疾病治疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "单克隆抗体把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bio_interferon",
    "name": "干扰素",
    "en": "Interferon",
    "category": "life",
    "era": "info",
    "date": "1957 年",
    "year": 1957,
    "people": "",
    "place": "",
    "summary": "干扰素在 1957 年 前后成形，依托 化学、数学 把 疾病治疗、健康维持 落到实处，并成为 生命与医疗 中承上启下的一环，直接支撑了 抗病毒药 等后续技术。",
    "dependsOn": ["chemistry","mathematics"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "干扰素在 1957 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，干扰素仍是 疾病治疗 的底层支撑，并持续影响 抗病毒药。"
      }
    ],
    "significance": "干扰素把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 抗病毒药。"
  },
{
    "id": "bio_mrnavax",
    "name": "mRNA 疫苗",
    "en": "mRNA Vaccine",
    "category": "life",
    "era": "info",
    "date": "1990 年",
    "year": 1990,
    "people": "",
    "place": "",
    "summary": "mRNA 疫苗约 1990 年 出现，建立在 化学、数学、聚合酶链反应 之上；它把 疾病治疗、健康维持 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","mathematics","bio_pcr","dna","nanotech","immunology"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "mRNA 疫苗在 1990 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，mRNA 疫苗仍是 疾病治疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "mRNA 疫苗把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bio_antiviral",
    "name": "抗病毒药",
    "en": "Antiviral",
    "category": "life",
    "era": "info",
    "date": "1960 年",
    "year": 1960,
    "people": "",
    "place": "",
    "summary": "抗病毒药约 1960 年 出现，建立在 化学、数学、干扰素 之上；它把 疾病治疗、健康维持 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","mathematics","bio_interferon"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "抗病毒药在 1960 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，抗病毒药仍是 疾病治疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "抗病毒药把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bio_chemo",
    "name": "化学治疗",
    "en": "Chemotherapy",
    "category": "life",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "化学治疗约 1900 年 出现，建立在 化学、数学 之上；它把 疾病治疗、健康维持 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","mathematics"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "化学治疗在 1900 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，化学治疗仍是 疾病治疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "化学治疗把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bio_radiotherapy",
    "name": "放射治疗",
    "en": "Radiotherapy",
    "category": "life",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "放射治疗约 1900 年 出现，建立在 化学、数学 之上；它把 疾病治疗、健康维持 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","mathematics"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "放射治疗在 1900 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，放射治疗仍是 疾病治疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "放射治疗把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bio_targeted",
    "name": "靶向治疗",
    "en": "Targeted Therapy",
    "category": "life",
    "era": "info",
    "date": "1990 年",
    "year": 1990,
    "people": "",
    "place": "",
    "summary": "靶向治疗在 1990 年 前后成形，依托 化学、数学 把 疾病治疗、健康维持 落到实处，并成为 生命与医疗 中承上启下的一环，直接支撑了 基因治疗 等后续技术。",
    "dependsOn": ["chemistry","mathematics"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "靶向治疗在 1990 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，靶向治疗仍是 疾病治疗 的底层支撑，并持续影响 基因治疗。"
      }
    ],
    "significance": "靶向治疗把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 基因治疗。"
  },
{
    "id": "bio_immunotherapy",
    "name": "免疫治疗",
    "en": "Immunotherapy",
    "category": "life",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "免疫治疗在 2010 年 前后成形，依托 化学、数学 把 疾病治疗、健康维持 落到实处，并成为 生命与医疗 中承上启下的一环，直接支撑了 CAR-T 疗法 等后续技术。",
    "dependsOn": ["chemistry","mathematics"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "免疫治疗在 2010 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，免疫治疗仍是 疾病治疗 的底层支撑，并持续影响 CAR-T 疗法。"
      }
    ],
    "significance": "免疫治疗把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 CAR-T 疗法。"
  },
{
    "id": "bio_genetherapy",
    "name": "基因治疗",
    "en": "Gene Therapy",
    "category": "life",
    "era": "info",
    "date": "1990 年",
    "year": 1990,
    "people": "",
    "place": "",
    "summary": "基因治疗约 1990 年 出现，建立在 化学、数学、靶向治疗 之上；它把 疾病治疗、健康维持 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","mathematics","bio_targeted","genetics","immunology"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "基因治疗在 1990 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，基因治疗仍是 疾病治疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "基因治疗把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bio_celltherapy",
    "name": "细胞治疗",
    "en": "Cell Therapy",
    "category": "life",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "细胞治疗约 2000 年 出现，建立在 化学、数学 之上；它把 疾病治疗、健康维持 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","mathematics"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "细胞治疗在 2000 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，细胞治疗仍是 疾病治疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "细胞治疗把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bio_cart",
    "name": "CAR-T 疗法",
    "en": "CAR-T",
    "category": "life",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "CAR-T 疗法约 2010 年 出现，建立在 化学、数学、免疫治疗 之上；它把 疾病治疗、健康维持 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","mathematics","bio_immunotherapy"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "CAR-T 疗法在 2010 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，CAR-T 疗法仍是 疾病治疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "CAR-T 疗法把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bio_bloodprod",
    "name": "血液制品",
    "en": "Blood Products",
    "category": "life",
    "era": "electrical",
    "date": "1940 年",
    "year": 1940,
    "people": "",
    "place": "",
    "summary": "血液制品约 1940 年 成熟，建立在 化学、数学、生物反应器 之上完成关键突破；其能力延伸到 疾病治疗、健康维持，并为 血液透析 的发展铺平了道路。",
    "dependsOn": ["chemistry","mathematics","bio_bioreactor"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "血液制品在 1940 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，血液制品仍是 疾病治疗 的底层支撑，并持续影响 血液透析。"
      }
    ],
    "significance": "血液制品把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 血液透析。"
  },
{
    "id": "bio_ivd",
    "name": "体外诊断",
    "en": "IVD",
    "category": "life",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "people": "",
    "place": "",
    "summary": "体外诊断约 1950 年 出现，建立在 化学、数学、酶工程 之上；它把 疾病治疗、健康维持 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","mathematics","bio_enzyme"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "体外诊断在 1950 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，体外诊断仍是 疾病治疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "体外诊断把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bio_poc",
    "name": "快速检测",
    "en": "POCT",
    "category": "life",
    "era": "info",
    "date": "1980 年",
    "year": 1980,
    "people": "",
    "place": "",
    "summary": "快速检测约 1980 年 出现，建立在 化学、数学 之上；它把 疾病治疗、健康维持 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","mathematics"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "快速检测在 1980 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，快速检测仍是 疾病治疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "快速检测把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bio_wearable",
    "name": "可穿戴健康",
    "en": "Wearable Health",
    "category": "life",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "可穿戴健康约 2000 年 出现，建立在 化学、数学 之上；它把 疾病治疗、健康维持 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","mathematics"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "可穿戴健康在 2000 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，可穿戴健康仍是 疾病治疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "可穿戴健康把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bio_telemed",
    "name": "远程医疗",
    "en": "Telemedicine",
    "category": "life",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "people": "",
    "place": "",
    "summary": "远程医疗约 1950 年 出现，建立在 化学、数学 之上；它把 疾病治疗、健康维持 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","mathematics"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "远程医疗在 1950 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，远程医疗仍是 疾病治疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "远程医疗把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bio_ehr",
    "name": "电子病历",
    "en": "EHR",
    "category": "life",
    "era": "info",
    "date": "1970 年",
    "year": 1970,
    "people": "",
    "place": "",
    "summary": "电子病历约 1970 年 出现，建立在 化学、数学 之上；它把 疾病治疗、健康维持 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","mathematics"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "电子病历在 1970 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，电子病历仍是 疾病治疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "电子病历把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bio_medicalai",
    "name": "医疗影像",
    "en": "Medical Imaging AI",
    "category": "life",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "医疗影像约 2010 年 出现，建立在 化学、数学 之上；它把 疾病治疗、健康维持 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","mathematics"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "医疗影像在 2010 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，医疗影像仍是 疾病治疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "医疗影像把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bio_surgerobot",
    "name": "手术机器人",
    "en": "Surgical Robot",
    "category": "life",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "手术机器人在 2000 年 前后成形，依托 化学、数学 把 疾病治疗、健康维持 落到实处，并成为 生命与医疗 中承上启下的一环，直接支撑了 康复机器人 等后续技术。",
    "dependsOn": ["chemistry","mathematics"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "手术机器人在 2000 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，手术机器人仍是 疾病治疗 的底层支撑，并持续影响 康复机器人。"
      }
    ],
    "significance": "手术机器人把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 康复机器人。"
  },
{
    "id": "bio_reharobot",
    "name": "康复机器人",
    "en": "Rehabilitation Robot",
    "category": "life",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "康复机器人在 2000 年 前后成形，依托 化学、数学、手术机器人 把 疾病治疗、健康维持 落到实处，并成为 生命与医疗 中承上启下的一环，直接支撑了 外骨骼 等后续技术。",
    "dependsOn": ["chemistry","mathematics","bio_surgerobot"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "康复机器人在 2000 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，康复机器人仍是 疾病治疗 的底层支撑，并持续影响 外骨骼。"
      }
    ],
    "significance": "康复机器人把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 外骨骼。"
  },
{
    "id": "bio_exoskeleton",
    "name": "外骨骼",
    "en": "Exoskeleton",
    "category": "life",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "外骨骼约 2000 年 出现，建立在 化学、数学、康复机器人 之上；它把 疾病治疗、健康维持 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","mathematics","bio_reharobot"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "外骨骼在 2000 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，外骨骼仍是 疾病治疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "外骨骼把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bio_bci",
    "name": "脑机接口",
    "en": "BCI",
    "category": "life",
    "era": "info",
    "date": "1970 年",
    "year": 1970,
    "people": "",
    "place": "",
    "summary": "脑机接口在 1970 年 前后成形，依托 化学、数学、神经科学 把 疾病治疗、健康维持 落到实处，并成为 生命与医疗 中承上启下的一环，直接支撑了 意识上传、记忆提取 等后续技术。",
    "dependsOn": ["chemistry","mathematics","neuroscience","electronics","ai"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "脑机接口在 1970 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，脑机接口仍是 疾病治疗 的底层支撑，并持续影响 意识上传、记忆提取。"
      }
    ],
    "significance": "脑机接口把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 意识上传、记忆提取。"
  },
{
    "id": "bio_neuromod",
    "name": "神经调控",
    "en": "Neuromodulation",
    "category": "life",
    "era": "info",
    "date": "1980 年",
    "year": 1980,
    "people": "",
    "place": "",
    "summary": "神经调控约 1980 年 出现，建立在 化学、数学 之上；它把 疾病治疗、健康维持 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","mathematics"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "神经调控在 1980 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，神经调控仍是 疾病治疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "神经调控把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bio_dbs",
    "name": "深部脑刺激",
    "en": "DBS",
    "category": "life",
    "era": "info",
    "date": "1987 年",
    "year": 1987,
    "people": "",
    "place": "",
    "summary": "深部脑刺激约 1987 年 出现，建立在 化学、数学 之上；它把 疾病治疗、健康维持 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","mathematics"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "深部脑刺激在 1987 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，深部脑刺激仍是 疾病治疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "深部脑刺激把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bio_bioniceye",
    "name": "仿生眼",
    "en": "Bionic Eye",
    "category": "life",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "仿生眼约 2000 年 出现，建立在 化学、数学 之上；它把 疾病治疗、健康维持 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","mathematics"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "仿生眼在 2000 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，仿生眼仍是 疾病治疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "仿生眼把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bio_cochlear",
    "name": "人工耳蜗",
    "en": "Cochlear Implant",
    "category": "life",
    "era": "info",
    "date": "1977 年",
    "year": 1977,
    "people": "",
    "place": "",
    "summary": "人工耳蜗约 1977 年 出现，建立在 化学、数学 之上；它把 疾病治疗、健康维持 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","mathematics"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "人工耳蜗在 1977 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，人工耳蜗仍是 疾病治疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "人工耳蜗把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bio_bio3dp",
    "name": "生物",
    "en": "Bioprinting",
    "category": "life",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "生物约 2000 年 出现，建立在 化学、数学 之上；它把 疾病治疗、健康维持 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","mathematics"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "生物在 2000 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，生物仍是 疾病治疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "生物把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bio_organoid",
    "name": "类器官",
    "en": "Organoid",
    "category": "life",
    "era": "intelligent",
    "date": "2009 年",
    "year": 2009,
    "people": "",
    "place": "",
    "summary": "类器官约 2009 年 成熟，建立在 化学、数学 之上完成关键突破；其能力延伸到 疾病治疗、健康维持，并为 单细胞测序 的发展铺平了道路。",
    "dependsOn": ["chemistry","mathematics"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "类器官在 2009 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，类器官仍是 疾病治疗 的底层支撑，并持续影响 单细胞测序。"
      }
    ],
    "significance": "类器官把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 单细胞测序。"
  },
{
    "id": "bio_synbio",
    "name": "合成生物学",
    "en": "Synthetic Biology",
    "category": "life",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "合成生物学在 2000 年 前后成形，依托 化学、数学、遗传学 把 疾病治疗、健康维持 落到实处，并成为 生命与医疗 中承上启下的一环，直接支撑了 基因电路 等后续技术。",
    "dependsOn": ["chemistry","mathematics","genetics","biotech","dna"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "合成生物学在 2000 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，合成生物学仍是 疾病治疗 的底层支撑，并持续影响 基因电路。"
      }
    ],
    "significance": "合成生物学把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 基因电路。"
  },
{
    "id": "bio_directedevo",
    "name": "定向进化",
    "en": "Directed Evolution",
    "category": "life",
    "era": "info",
    "date": "1990 年",
    "year": 1990,
    "people": "",
    "place": "",
    "summary": "定向进化在 1990 年 前后成形，依托 化学、数学 把 疾病治疗、健康维持 落到实处，并成为 生命与医疗 中承上启下的一环，直接支撑了 代谢工程 等后续技术。",
    "dependsOn": ["chemistry","mathematics"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "定向进化在 1990 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，定向进化仍是 疾病治疗 的底层支撑，并持续影响 代谢工程。"
      }
    ],
    "significance": "定向进化把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 代谢工程。"
  },
{
    "id": "bio_proteineng",
    "name": "蛋白质工程",
    "en": "Protein Engineering",
    "category": "life",
    "era": "info",
    "date": "1980 年",
    "year": 1980,
    "people": "",
    "place": "",
    "summary": "蛋白质工程约 1980 年 成熟，建立在 化学、数学 之上完成关键突破；其能力延伸到 疾病治疗、健康维持，并为 聚合酶链反应 的发展铺平了道路。",
    "dependsOn": ["chemistry","mathematics"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "蛋白质工程在 1980 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，蛋白质工程仍是 疾病治疗 的底层支撑，并持续影响 聚合酶链反应。"
      }
    ],
    "significance": "蛋白质工程把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 聚合酶链反应。"
  },
{
    "id": "bio_metabeng",
    "name": "代谢工程",
    "en": "Metabolic Engineering",
    "category": "life",
    "era": "info",
    "date": "1990 年",
    "year": 1990,
    "people": "",
    "place": "",
    "summary": "代谢工程约 1990 年 出现，建立在 化学、数学、定向进化 之上；它把 疾病治疗、健康维持 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","mathematics","bio_directedevo","genetics","immunology","fermentation"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "代谢工程在 1990 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，代谢工程仍是 疾病治疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "代谢工程把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bio_microbiome",
    "name": "微生物组",
    "en": "Microbiome",
    "category": "life",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "微生物组约 2000 年 出现，建立在 化学、数学 之上；它把 疾病治疗、健康维持 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","mathematics"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "微生物组在 2000 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，微生物组仍是 疾病治疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "微生物组把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bio_phage",
    "name": "噬菌体疗法",
    "en": "Phage Therapy",
    "category": "life",
    "era": "electrical",
    "date": "1920 年",
    "year": 1920,
    "people": "",
    "place": "",
    "summary": "噬菌体疗法约 1920 年 出现，建立在 化学、数学 之上；它把 疾病治疗、健康维持 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","mathematics"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "噬菌体疗法在 1920 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，噬菌体疗法仍是 疾病治疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "噬菌体疗法把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bio_drugdelivery",
    "name": "药物递送",
    "en": "Drug Delivery",
    "category": "life",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "people": "",
    "place": "",
    "summary": "药物递送在 1950 年 前后成形，依托 化学、数学 把 疾病治疗、健康维持 落到实处，并成为 生命与医疗 中承上启下的一环，直接支撑了 缓释制剂 等后续技术。",
    "dependsOn": ["chemistry","mathematics"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "药物递送在 1950 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，药物递送仍是 疾病治疗 的底层支撑，并持续影响 缓释制剂。"
      }
    ],
    "significance": "药物递送把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 缓释制剂。"
  },
{
    "id": "bio_nanomed",
    "name": "纳米药物",
    "en": "Nanomedicine",
    "category": "life",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "纳米药物在 2000 年 前后成形，依托 化学、数学 把 疾病治疗、健康维持 落到实处，并成为 生命与医疗 中承上启下的一环，直接支撑了 脂质纳米粒 等后续技术。",
    "dependsOn": ["chemistry","mathematics"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "纳米药物在 2000 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，纳米药物仍是 疾病治疗 的底层支撑，并持续影响 脂质纳米粒。"
      }
    ],
    "significance": "纳米药物把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 脂质纳米粒。"
  },
{
    "id": "bio_sustained",
    "name": "缓释制剂",
    "en": "Sustained Release",
    "category": "life",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "people": "",
    "place": "",
    "summary": "缓释制剂在 1950 年 前后成形，依托 化学、数学、药物递送 把 疾病治疗、健康维持 落到实处，并成为 生命与医疗 中承上启下的一环，直接支撑了 吸入制剂 等后续技术。",
    "dependsOn": ["chemistry","mathematics","bio_drugdelivery"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "缓释制剂在 1950 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，缓释制剂仍是 疾病治疗 的底层支撑，并持续影响 吸入制剂。"
      }
    ],
    "significance": "缓释制剂把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 吸入制剂。"
  },
{
    "id": "bio_transdermal",
    "name": "透皮给药",
    "en": "Transdermal",
    "category": "life",
    "era": "info",
    "date": "1970 年",
    "year": 1970,
    "people": "",
    "place": "",
    "summary": "透皮给药约 1970 年 出现，建立在 化学、数学 之上；它把 疾病治疗、健康维持 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","mathematics"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "透皮给药在 1970 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，透皮给药仍是 疾病治疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "透皮给药把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bio_inhaler",
    "name": "吸入制剂",
    "en": "Inhaler",
    "category": "life",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "people": "",
    "place": "",
    "summary": "吸入制剂约 1950 年 出现，建立在 化学、数学、缓释制剂 之上；它把 疾病治疗、健康维持 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","mathematics","bio_sustained"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "吸入制剂在 1950 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，吸入制剂仍是 疾病治疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "吸入制剂把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bio_genevector",
    "name": "基因递送载体",
    "en": "Gene Vector",
    "category": "life",
    "era": "info",
    "date": "1970 年",
    "year": 1970,
    "people": "",
    "place": "",
    "summary": "基因递送载体约 1970 年 出现，建立在 化学、数学 之上；它把 疾病治疗、健康维持 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","mathematics"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "基因递送载体在 1970 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，基因递送载体仍是 疾病治疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "基因递送载体把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bio_lipidnp",
    "name": "脂质纳米粒",
    "en": "LNP",
    "category": "life",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "脂质纳米粒在 2000 年 前后成形，依托 化学、数学、纳米药物 把 疾病治疗、健康维持 落到实处，并成为 生命与医疗 中承上启下的一环，直接支撑了 疫苗平台 等后续技术。",
    "dependsOn": ["chemistry","mathematics","bio_nanomed"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "脂质纳米粒在 2000 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，脂质纳米粒仍是 疾病治疗 的底层支撑，并持续影响 疫苗平台。"
      }
    ],
    "significance": "脂质纳米粒把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 疫苗平台。"
  },
{
    "id": "bio_vaccineplatform",
    "name": "疫苗平台",
    "en": "Vaccine Platform",
    "category": "life",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "疫苗平台约 2000 年 出现，建立在 化学、数学、脂质纳米粒 之上；它把 疾病治疗、健康维持 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","mathematics","bio_lipidnp"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "疫苗平台在 2000 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，疫苗平台仍是 疾病治疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "疫苗平台把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bio_pathogen",
    "name": "病原体鉴定",
    "en": "Pathogen ID",
    "category": "life",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "病原体鉴定约 1800 年 出现，建立在 化学、数学 之上；它把 疾病治疗、健康维持 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","mathematics"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "病原体鉴定在 1800 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，病原体鉴定仍是 疾病治疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "病原体鉴定把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bio_epigenetics",
    "name": "表观遗传学",
    "en": "Epigenetics",
    "category": "life",
    "era": "info",
    "date": "1980 年",
    "year": 1980,
    "people": "",
    "place": "",
    "summary": "表观遗传学约 1980 年 出现，建立在 化学、数学 之上；它把 疾病治疗、健康维持 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","mathematics"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "表观遗传学在 1980 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，表观遗传学仍是 疾病治疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "表观遗传学把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bio_proteomics2",
    "name": "蛋白组学",
    "en": "Proteomics",
    "category": "life",
    "era": "info",
    "date": "1995 年",
    "year": 1995,
    "people": "",
    "place": "",
    "summary": "蛋白组学约 1995 年 出现，建立在 化学、数学 之上；它把 疾病治疗、健康维持 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","mathematics"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "蛋白组学在 1995 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，蛋白组学仍是 疾病治疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "蛋白组学把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bio_metabolomics",
    "name": "代谢组学",
    "en": "Metabolomics",
    "category": "life",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "代谢组学约 2000 年 出现，建立在 化学、数学 之上；它把 疾病治疗、健康维持 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","mathematics"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "代谢组学在 2000 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，代谢组学仍是 疾病治疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "代谢组学把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bio_spatialtrans",
    "name": "空间转录组",
    "en": "Spatial Transcriptomics",
    "category": "life",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "空间转录组约 2010 年 出现，建立在 化学、数学 之上；它把 疾病治疗、健康维持 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","mathematics"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "空间转录组在 2010 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，空间转录组仍是 疾病治疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "空间转录组把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bio_singlecell",
    "name": "单细胞测序",
    "en": "Single-Cell Sequencing",
    "category": "life",
    "era": "intelligent",
    "date": "2009 年",
    "year": 2009,
    "people": "",
    "place": "",
    "summary": "单细胞测序约 2009 年 出现，建立在 化学、数学、类器官 之上；它把 疾病治疗、健康维持 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","mathematics","bio_organoid"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "单细胞测序在 2009 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，单细胞测序仍是 疾病治疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "单细胞测序把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bio_organonchip",
    "name": "器官芯片",
    "en": "Organs-on-Chip",
    "category": "life",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "器官芯片在 2010 年 前后成形，依托 化学、数学、微流控 把 疾病治疗、健康维持 落到实处，并成为 生命与医疗 中承上启下的一环，直接支撑了 精准医疗 等后续技术。",
    "dependsOn": ["chemistry","mathematics","microfluidics","stem_cells","biotech"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "器官芯片在 2010 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，器官芯片仍是 疾病治疗 的底层支撑，并持续影响 精准医疗。"
      }
    ],
    "significance": "器官芯片把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 精准医疗。"
  },
{
    "id": "bio_universalvax",
    "name": "通用疫苗",
    "en": "Universal Vaccine",
    "category": "life",
    "era": "intelligent",
    "date": "2020 年",
    "year": 2020,
    "people": "",
    "place": "",
    "summary": "通用疫苗约 2020 年 出现，建立在 化学、数学 之上；它把 疾病治疗、健康维持 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","mathematics"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "通用疫苗在 2020 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，通用疫苗仍是 疾病治疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "通用疫苗把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bio_newantibiotic",
    "name": "新型抗生素",
    "en": "Novel Antibiotic",
    "category": "life",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "新型抗生素在 2000 年 前后成形，依托 化学、数学 把 疾病治疗、健康维持 落到实处，并成为 生命与医疗 中承上启下的一环，直接支撑了 抗菌肽 等后续技术。",
    "dependsOn": ["chemistry","mathematics"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "新型抗生素在 2000 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，新型抗生素仍是 疾病治疗 的底层支撑，并持续影响 抗菌肽。"
      }
    ],
    "significance": "新型抗生素把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 抗菌肽。"
  },
{
    "id": "bio_antimicrobialpep",
    "name": "抗菌肽",
    "en": "Antimicrobial Peptide",
    "category": "life",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "抗菌肽约 2000 年 出现，建立在 化学、数学、新型抗生素 之上；它把 疾病治疗、健康维持 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","mathematics","bio_newantibiotic"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "抗菌肽在 2000 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，抗菌肽仍是 疾病治疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "抗菌肽把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bio_precisionmed",
    "name": "精准医疗",
    "en": "Precision Medicine",
    "category": "life",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "精准医疗在 2010 年 前后成形，依托 化学、数学、器官芯片 把 疾病治疗、健康维持 落到实处，并成为 生命与医疗 中承上启下的一环，直接支撑了 液体活检 等后续技术。",
    "dependsOn": ["chemistry","mathematics","bio_organonchip","genetics","ai","big_data"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "精准医疗在 2010 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，精准医疗仍是 疾病治疗 的底层支撑，并持续影响 液体活检。"
      }
    ],
    "significance": "精准医疗把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 液体活检。"
  },
{
    "id": "bio_pharmacogen",
    "name": "药物基因组学",
    "en": "Pharmacogenomics",
    "category": "life",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "药物基因组学约 2000 年 出现，建立在 化学、数学 之上；它把 疾病治疗、健康维持 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","mathematics"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "药物基因组学在 2000 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，药物基因组学仍是 疾病治疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "药物基因组学把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bio_liquidbiopsy",
    "name": "液体活检",
    "en": "Liquid Biopsy",
    "category": "life",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "液体活检在 2010 年 前后成形，依托 化学、数学、精准医疗 把 疾病治疗、健康维持 落到实处，并成为 生命与医疗 中承上启下的一环，直接支撑了 循环肿瘤 等后续技术。",
    "dependsOn": ["chemistry","mathematics","bio_precisionmed","computer","molecular_bio","surgery","internet"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "液体活检在 2010 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，液体活检仍是 疾病治疗 的底层支撑，并持续影响 循环肿瘤。"
      }
    ],
    "significance": "液体活检把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 循环肿瘤。"
  },
{
    "id": "bio_ctdna",
    "name": "循环肿瘤",
    "en": "ctDNA",
    "category": "life",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "循环肿瘤约 2010 年 出现，建立在 化学、数学、液体活检 之上；它把 疾病治疗、健康维持 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","mathematics","bio_liquidbiopsy"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "循环肿瘤在 2010 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，循环肿瘤仍是 疾病治疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "循环肿瘤把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bio_cgm",
    "name": "连续血糖监测",
    "en": "CGM",
    "category": "life",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "连续血糖监测约 2010 年 出现，建立在 化学、数学 之上；它把 疾病治疗、健康维持 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","mathematics"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "连续血糖监测在 2010 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，连续血糖监测仍是 疾病治疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "连续血糖监测把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bio_ecmo",
    "name": "体外膜肺氧合",
    "en": "ECMO",
    "category": "life",
    "era": "info",
    "date": "1972 年",
    "year": 1972,
    "people": "",
    "place": "",
    "summary": "体外膜肺氧合约 1972 年 出现，建立在 化学、数学 之上；它把 疾病治疗、健康维持 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","mathematics"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "体外膜肺氧合在 1972 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，体外膜肺氧合仍是 疾病治疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "体外膜肺氧合把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bio_artliver",
    "name": "人工肝",
    "en": "Artificial Liver",
    "category": "life",
    "era": "info",
    "date": "1990 年",
    "year": 1990,
    "people": "",
    "place": "",
    "summary": "人工肝约 1990 年 出现，建立在 化学、数学 之上；它把 疾病治疗、健康维持 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","mathematics"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "人工肝在 1990 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，人工肝仍是 疾病治疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "人工肝把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bio_artlung",
    "name": "人工肺",
    "en": "Artificial Lung",
    "category": "life",
    "era": "info",
    "date": "1990 年",
    "year": 1990,
    "people": "",
    "place": "",
    "summary": "人工肺约 1990 年 出现，建立在 化学、数学 之上；它把 疾病治疗、健康维持 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","mathematics"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "人工肺在 1990 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，人工肺仍是 疾病治疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "人工肺把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bio_arthroplasty",
    "name": "人工关节",
    "en": "Artificial Joint",
    "category": "life",
    "era": "info",
    "date": "1960 年",
    "year": 1960,
    "people": "",
    "place": "",
    "summary": "人工关节约 1960 年 出现，建立在 化学、数学 之上；它把 疾病治疗、健康维持 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry","mathematics"],
    "enables": [],
    "applications": [
      "疾病治疗",
      "健康维持",
      "生命干预"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "人工关节在 1960 年 前后出现，依托 化学 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，人工关节仍是 疾病治疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "人工关节把 化学 与 疾病治疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bld_rammed",
    "name": "夯土",
    "en": "Rammed Earth",
    "category": "build",
    "era": "prehistoric",
    "date": "约 1 万年前",
    "year": -10000,
    "people": "",
    "place": "",
    "summary": "夯土在 约 1 万年前 前后成形，依托 石器 把 房屋营建、桥梁隧道 落到实处，并成为 建筑建造 中承上启下的一环，直接支撑了 土坯砖、地基处理 等后续技术。",
    "dependsOn": ["stone_tools"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "史前时代",
        "text": "夯土在 约 1 万年前 前后出现，依托 石器 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，夯土仍是 房屋营建 的底层支撑，并持续影响 土坯砖、地基处理。"
      }
    ],
    "significance": "夯土把 石器 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 土坯砖、地基处理。"
  },
{
    "id": "bld_adobe",
    "name": "土坯砖",
    "en": "Adobe",
    "category": "build",
    "era": "prehistoric",
    "date": "公元前 9000 年",
    "year": -9000,
    "people": "",
    "place": "",
    "summary": "土坯砖约 公元前 9000 年 成熟，建立在 陶器、夯土 之上完成关键突破；其能力延伸到 房屋营建、桥梁隧道，并为 烧砖、木构建筑 的发展铺平了道路。",
    "dependsOn": ["mat_pottery","bld_rammed"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "史前时代",
        "text": "土坯砖在 公元前 9000 年 前后出现，依托 陶器 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，土坯砖仍是 房屋营建 的底层支撑，并持续影响 烧砖、木构建筑。"
      }
    ],
    "significance": "土坯砖把 陶器 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 烧砖、木构建筑。"
  },
{
    "id": "bld_brick",
    "name": "烧砖",
    "en": "Fired Brick",
    "category": "build",
    "era": "prehistoric",
    "date": "公元前 5000 年",
    "year": -5000,
    "people": "",
    "place": "",
    "summary": "烧砖约 公元前 5000 年 成熟，建立在 土坯砖 之上完成关键突破；其能力延伸到 房屋营建、桥梁隧道，并为 拱 的发展铺平了道路。",
    "dependsOn": ["bld_adobe"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "史前时代",
        "text": "烧砖在 公元前 5000 年 前后出现，依托 土坯砖 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，烧砖仍是 房屋营建 的底层支撑，并持续影响 拱。"
      }
    ],
    "significance": "烧砖把 土坯砖 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 拱。"
  },
{
    "id": "bld_tile",
    "name": "瓦",
    "en": "Roof Tile",
    "category": "build",
    "era": "ancient",
    "date": "公元前 3000 年",
    "year": -3000,
    "people": "",
    "place": "",
    "summary": "瓦约 公元前 3000 年 出现，建立在 窑、陶器 之上；它把 房屋营建、桥梁隧道 变成可稳定复现的能力，是 建筑建造 中从经验走向方法的关键一步。",
    "dependsOn": ["kiln","mat_pottery"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "瓦在 公元前 3000 年 前后出现，依托 窑 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，瓦仍是 房屋营建 的底层支撑，并作为 建筑建造 的基础能力持续发挥作用。"
      }
    ],
    "significance": "瓦把 窑 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bld_timber",
    "name": "木构建筑",
    "en": "Timber Frame",
    "category": "build",
    "era": "prehistoric",
    "date": "公元前 5000 年",
    "year": -5000,
    "people": "",
    "place": "",
    "summary": "木构建筑约 公元前 5000 年 成熟，建立在 木作、土坯砖 之上完成关键突破；其能力延伸到 房屋营建、桥梁隧道，并为 榫卯 的发展铺平了道路。",
    "dependsOn": ["woodworking","bld_adobe"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "史前时代",
        "text": "木构建筑在 公元前 5000 年 前后出现，依托 木作 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，木构建筑仍是 房屋营建 的底层支撑，并持续影响 榫卯。"
      }
    ],
    "significance": "木构建筑把 木作 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 榫卯。"
  },
{
    "id": "bld_mortise",
    "name": "榫卯",
    "en": "Mortise and Tenon",
    "category": "build",
    "era": "prehistoric",
    "date": "公元前 5000 年",
    "year": -5000,
    "people": "",
    "place": "",
    "summary": "榫卯约 公元前 5000 年 出现，建立在 木构建筑 之上；它把 房屋营建、桥梁隧道 变成可稳定复现的能力，是 建筑建造 中从经验走向方法的关键一步。",
    "dependsOn": ["bld_timber"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "史前时代",
        "text": "榫卯在 公元前 5000 年 前后出现，依托 木构建筑 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，榫卯仍是 房屋营建 的底层支撑，并作为 建筑建造 的基础能力持续发挥作用。"
      }
    ],
    "significance": "榫卯把 木构建筑 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bld_dougong",
    "name": "斗拱",
    "en": "Dougong Bracket",
    "category": "build",
    "era": "classical",
    "date": "公元前 500 年",
    "year": -500,
    "people": "",
    "place": "",
    "summary": "斗拱约 公元前 500 年 出现，建立在 车床、拱 之上；它把 房屋营建、桥梁隧道 变成可稳定复现的能力，是 建筑建造 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_lathe", "bld_arch"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "古典时代",
        "text": "斗拱在 公元前 500 年 前后出现，依托 车床 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，斗拱仍是 房屋营建 的底层支撑，并作为 建筑建造 的基础能力持续发挥作用。"
      }
    ],
    "significance": "斗拱把 车床 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bld_stone",
    "name": "石构建筑",
    "en": "Stone Construction",
    "category": "build",
    "era": "ancient",
    "date": "公元前 3000 年",
    "year": -3000,
    "people": "",
    "place": "",
    "summary": "石构建筑约 公元前 3000 年 出现，建立在 砌筑、石器 之上；它把 房屋营建、桥梁隧道 变成可稳定复现的能力，是 建筑建造 中从经验走向方法的关键一步。",
    "dependsOn": ["masonry","stone_tools"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "石构建筑在 公元前 3000 年 前后出现，依托 砌筑 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，石构建筑仍是 房屋营建 的底层支撑，并作为 建筑建造 的基础能力持续发挥作用。"
      }
    ],
    "significance": "石构建筑把 砌筑 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bld_arch",
    "name": "拱",
    "en": "Arch",
    "category": "build",
    "era": "ancient",
    "date": "公元前 1000 年",
    "year": -1000,
    "people": "",
    "place": "",
    "summary": "拱在 公元前 1000 年 前后成形，依托 砌筑、烧砖 把 房屋营建、桥梁隧道 落到实处，并成为 建筑建造 中承上启下的一环，直接支撑了 交通隧道、斗拱 等后续技术。",
    "dependsOn": ["masonry","bld_brick"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "拱在 公元前 1000 年 前后出现，依托 砌筑 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，拱仍是 房屋营建 的底层支撑，并持续影响 交通隧道、斗拱。"
      }
    ],
    "significance": "拱把 砌筑 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 交通隧道、斗拱。"
  },
{
    "id": "bld_dome",
    "name": "穹顶",
    "en": "Dome",
    "category": "build",
    "era": "classical",
    "date": "公元前 100 年",
    "year": -100,
    "people": "",
    "place": "",
    "summary": "穹顶约 公元前 100 年 出现，建立在 水泥与混凝土、螺纹、拱与穹顶 之上；它把 房屋营建、桥梁隧道 变成可稳定复现的能力，是 建筑建造 中从经验走向方法的关键一步。",
    "dependsOn": ["cement","mfg_thread","arch","masonry"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "古典时代",
        "text": "穹顶在 公元前 100 年 前后出现，依托 水泥与混凝土 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，穹顶仍是 房屋营建 的底层支撑，并作为 建筑建造 的基础能力持续发挥作用。"
      }
    ],
    "significance": "穹顶把 水泥与混凝土 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bld_ribvault",
    "name": "肋拱",
    "en": "Rib Vault",
    "category": "build",
    "era": "medieval",
    "date": "1100 年",
    "year": 1100,
    "people": "",
    "place": "",
    "summary": "肋拱约 1100 年 成熟，建立在 螺纹 之上完成关键突破；其能力延伸到 房屋营建、桥梁隧道，并为 飞扶壁 的发展铺平了道路。",
    "dependsOn": ["mfg_thread"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "中世纪",
        "text": "肋拱在 1100 年 前后出现，依托 螺纹 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，肋拱仍是 房屋营建 的底层支撑，并持续影响 飞扶壁。"
      }
    ],
    "significance": "肋拱把 螺纹 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 飞扶壁。"
  },
{
    "id": "bld_flying",
    "name": "飞扶壁",
    "en": "Flying Buttress",
    "category": "build",
    "era": "medieval",
    "date": "1100 年",
    "year": 1100,
    "people": "",
    "place": "",
    "summary": "飞扶壁约 1100 年 成熟，建立在 螺纹、肋拱 之上完成关键突破；其能力延伸到 房屋营建、桥梁隧道，并为 哥特结构 的发展铺平了道路。",
    "dependsOn": ["mfg_thread","bld_ribvault"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "中世纪",
        "text": "飞扶壁在 1100 年 前后出现，依托 螺纹 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，飞扶壁仍是 房屋营建 的底层支撑，并持续影响 哥特结构。"
      }
    ],
    "significance": "飞扶壁把 螺纹 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 哥特结构。"
  },
{
    "id": "bld_gothic",
    "name": "哥特结构",
    "en": "Gothic Structure",
    "category": "build",
    "era": "medieval",
    "date": "1100 年",
    "year": 1100,
    "people": "",
    "place": "",
    "summary": "哥特结构约 1100 年 出现，建立在 螺纹、飞扶壁 之上；它把 房屋营建、桥梁隧道 变成可稳定复现的能力，是 建筑建造 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_thread","bld_flying"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "中世纪",
        "text": "哥特结构在 1100 年 前后出现，依托 螺纹 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，哥特结构仍是 房屋营建 的底层支撑，并作为 建筑建造 的基础能力持续发挥作用。"
      }
    ],
    "significance": "哥特结构把 螺纹 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bld_romanconc",
    "name": "罗马混凝土",
    "en": "Roman Concrete",
    "category": "build",
    "era": "classical",
    "date": "公元前 100 年",
    "year": -100,
    "people": "",
    "place": "",
    "summary": "罗马混凝土约 公元前 100 年 出现，建立在 水泥与混凝土、螺纹 之上；它把 房屋营建、桥梁隧道 变成可稳定复现的能力，是 建筑建造 中从经验走向方法的关键一步。",
    "dependsOn": ["cement","mfg_thread"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "古典时代",
        "text": "罗马混凝土在 公元前 100 年 前后出现，依托 水泥与混凝土 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，罗马混凝土仍是 房屋营建 的底层支撑，并作为 建筑建造 的基础能力持续发挥作用。"
      }
    ],
    "significance": "罗马混凝土把 水泥与混凝土 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bld_framing",
    "name": "框架结构",
    "en": "Frame Structure",
    "category": "build",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "框架结构在 1800 年 前后成形，依托 钢铁、压延 把 房屋营建、桥梁隧道 落到实处，并成为 建筑建造 中承上启下的一环，直接支撑了 剪力墙、桁架 等后续技术。",
    "dependsOn": ["steel","mfg_rolling2"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "框架结构在 1800 年 前后出现，依托 钢铁 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，框架结构仍是 房屋营建 的底层支撑，并持续影响 剪力墙、桁架。"
      }
    ],
    "significance": "框架结构把 钢铁 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 剪力墙、桁架。"
  },
{
    "id": "bld_shearwall",
    "name": "剪力墙",
    "en": "Shear Wall",
    "category": "build",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "剪力墙约 1900 年 出现，建立在 钢筋混凝土、框架结构 之上；它把 房屋营建、桥梁隧道 变成可稳定复现的能力，是 建筑建造 中从经验走向方法的关键一步。",
    "dependsOn": ["mat_reconcrete","bld_framing"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "剪力墙在 1900 年 前后出现，依托 钢筋混凝土 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，剪力墙仍是 房屋营建 的底层支撑，并作为 建筑建造 的基础能力持续发挥作用。"
      }
    ],
    "significance": "剪力墙把 钢筋混凝土 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bld_tube",
    "name": "筒体结构",
    "en": "Tube Structure",
    "category": "build",
    "era": "info",
    "date": "1960 年",
    "year": 1960,
    "people": "",
    "place": "",
    "summary": "筒体结构约 1960 年 出现，建立在 钢结构、钢筋混凝土 之上；它把 房屋营建、桥梁隧道 变成可稳定复现的能力，是 建筑建造 中从经验走向方法的关键一步。",
    "dependsOn": ["steel_frame", "mat_reconcrete"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "筒体结构在 1960 年 前后出现，依托 钢结构 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，筒体结构仍是 房屋营建 的底层支撑，并作为 建筑建造 的基础能力持续发挥作用。"
      }
    ],
    "significance": "筒体结构把 钢结构 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bld_cablestay",
    "name": "斜拉桥",
    "en": "Cable-Stayed Bridge",
    "category": "build",
    "era": "info",
    "date": "1955 年",
    "year": 1955,
    "people": "",
    "place": "",
    "summary": "斜拉桥约 1955 年 出现，建立在 钢桥、钢结构 之上；它把 房屋营建、桥梁隧道 变成可稳定复现的能力，是 建筑建造 中从经验走向方法的关键一步。",
    "dependsOn": ["bld_steelbridge", "steel_frame"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "斜拉桥在 1955 年 前后出现，依托 钢桥 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，斜拉桥仍是 房屋营建 的底层支撑，并作为 建筑建造 的基础能力持续发挥作用。"
      }
    ],
    "significance": "斜拉桥把 钢桥 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bld_suspension",
    "name": "悬索桥",
    "en": "Suspension Bridge",
    "category": "build",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "悬索桥约 1800 年 出现，建立在 钢铁、砌筑 之上；它把 房屋营建、桥梁隧道 变成可稳定复现的能力，是 建筑建造 中从经验走向方法的关键一步。",
    "dependsOn": ["steel","masonry"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "悬索桥在 1800 年 前后出现，依托 钢铁 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，悬索桥仍是 房屋营建 的底层支撑，并作为 建筑建造 的基础能力持续发挥作用。"
      }
    ],
    "significance": "悬索桥把 钢铁 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bld_truss",
    "name": "桁架",
    "en": "Truss",
    "category": "build",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "桁架约 1800 年 成熟，建立在 钢铁、框架结构 之上完成关键突破；其能力延伸到 房屋营建、桥梁隧道，并为 钢桥 的发展铺平了道路。",
    "dependsOn": ["steel","bld_framing"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "桁架在 1800 年 前后出现，依托 钢铁 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，桁架仍是 房屋营建 的底层支撑，并持续影响 钢桥。"
      }
    ],
    "significance": "桁架把 钢铁 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 钢桥。"
  },
{
    "id": "bld_steelbridge",
    "name": "钢桥",
    "en": "Steel Bridge",
    "category": "build",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "钢桥在 1800 年 前后成形，依托 桁架 把 房屋营建、桥梁隧道 落到实处，并成为 建筑建造 中承上启下的一环，直接支撑了 斜拉桥、舟桥 等后续技术。",
    "dependsOn": ["bld_truss"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "钢桥在 1800 年 前后出现，依托 桁架 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，钢桥仍是 房屋营建 的底层支撑，并持续影响 斜拉桥、舟桥。"
      }
    ],
    "significance": "钢桥把 桁架 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 斜拉桥、舟桥。"
  },
{
    "id": "bld_tunnel3",
    "name": "隧道掘进",
    "en": "Tunnel Boring",
    "category": "build",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "隧道掘进约 1800 年 出现，建立在 砌筑、火药 之上；它把 房屋营建、桥梁隧道 变成可稳定复现的能力，是 建筑建造 中从经验走向方法的关键一步。",
    "dependsOn": ["masonry","gunpowder"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "隧道掘进在 1800 年 前后出现，依托 砌筑 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，隧道掘进仍是 房屋营建 的底层支撑，并作为 建筑建造 的基础能力持续发挥作用。"
      }
    ],
    "significance": "隧道掘进把 砌筑 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bld_shield",
    "name": "盾构法",
    "en": "Shield Tunnelling",
    "category": "build",
    "era": "industrial",
    "date": "1825 年",
    "year": 1825,
    "people": "",
    "place": "",
    "summary": "盾构法约 1825 年 成熟，建立在 地下空间 之上完成关键突破；其能力延伸到 房屋营建、桥梁隧道，并为 可变径盾构 的发展铺平了道路。",
    "dependsOn": ["bld_underground"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "盾构法在 1825 年 前后出现，依托 地下空间 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，盾构法仍是 房屋营建 的底层支撑，并持续影响 可变径盾构。"
      }
    ],
    "significance": "盾构法把 地下空间 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 可变径盾构。"
  },
{
    "id": "bld_immersed",
    "name": "沉管隧道",
    "en": "Immersed Tunnel",
    "category": "build",
    "era": "industrial",
    "date": "1890 年",
    "year": 1890,
    "people": "",
    "place": "",
    "summary": "沉管隧道约 1890 年 出现，建立在 钢筋混凝土、挖泥船 之上；它把 房屋营建、桥梁隧道 变成可稳定复现的能力，是 建筑建造 中从经验走向方法的关键一步。",
    "dependsOn": ["mat_reconcrete", "tr_dredger"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "沉管隧道在 1890 年 前后出现，依托 钢筋混凝土 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，沉管隧道仍是 房屋营建 的底层支撑，并作为 建筑建造 的基础能力持续发挥作用。"
      }
    ],
    "significance": "沉管隧道把 钢筋混凝土 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bld_pile",
    "name": "桩基础",
    "en": "Pile Foundation",
    "category": "build",
    "era": "ancient",
    "date": "公元前 2000 年",
    "year": -2000,
    "people": "",
    "place": "",
    "summary": "桩基础约 公元前 2000 年 出现，建立在 砌筑、木作 之上；它把 房屋营建、桥梁隧道 变成可稳定复现的能力，是 建筑建造 中从经验走向方法的关键一步。",
    "dependsOn": ["masonry","woodworking"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "桩基础在 公元前 2000 年 前后出现，依托 砌筑 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，桩基础仍是 房屋营建 的底层支撑，并作为 建筑建造 的基础能力持续发挥作用。"
      }
    ],
    "significance": "桩基础把 砌筑 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bld_raftfound",
    "name": "筏基",
    "en": "Raft Foundation",
    "category": "build",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "筏基约 1800 年 出现，建立在 混凝土、砌筑 之上；它把 房屋营建、桥梁隧道 变成可稳定复现的能力，是 建筑建造 中从经验走向方法的关键一步。",
    "dependsOn": ["mat_concrete","masonry"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "筏基在 1800 年 前后出现，依托 混凝土 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，筏基仍是 房屋营建 的底层支撑，并作为 建筑建造 的基础能力持续发挥作用。"
      }
    ],
    "significance": "筏基把 混凝土 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bld_ground",
    "name": "地基处理",
    "en": "Ground Improvement",
    "category": "build",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "地基处理约 1800 年 成熟，建立在 夯土、砌筑 之上完成关键突破；其能力延伸到 房屋营建、桥梁隧道，并为 灌浆 的发展铺平了道路。",
    "dependsOn": ["bld_rammed","masonry"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "地基处理在 1800 年 前后出现，依托 夯土 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，地基处理仍是 房屋营建 的底层支撑，并持续影响 灌浆。"
      }
    ],
    "significance": "地基处理把 夯土 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 灌浆。"
  },
{
    "id": "bld_grouting",
    "name": "灌浆",
    "en": "Grouting",
    "category": "build",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "灌浆约 1800 年 出现，建立在 地基处理 之上；它把 房屋营建、桥梁隧道 变成可稳定复现的能力，是 建筑建造 中从经验走向方法的关键一步。",
    "dependsOn": ["bld_ground"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "灌浆在 1800 年 前后出现，依托 地基处理 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，灌浆仍是 房屋营建 的底层支撑，并作为 建筑建造 的基础能力持续发挥作用。"
      }
    ],
    "significance": "灌浆把 地基处理 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bld_waterproof",
    "name": "防水",
    "en": "Waterproofing",
    "category": "build",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "防水约 1800 年 出现，建立在 混凝土、石灰 之上；它把 房屋营建、桥梁隧道 变成可稳定复现的能力，是 建筑建造 中从经验走向方法的关键一步。",
    "dependsOn": ["mat_concrete","lime"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "防水在 1800 年 前后出现，依托 混凝土 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，防水仍是 房屋营建 的底层支撑，并作为 建筑建造 的基础能力持续发挥作用。"
      }
    ],
    "significance": "防水把 混凝土 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bld_insulation2",
    "name": "保温隔热",
    "en": "Thermal Insulation",
    "category": "build",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "保温隔热约 1800 年 出现，建立在 砌筑、建筑学、工程学 之上；它把 房屋营建、桥梁隧道 变成可稳定复现的能力，是 建筑建造 中从经验走向方法的关键一步。",
    "dependsOn": ["masonry","architecture","engineering"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "保温隔热在 1800 年 前后出现，依托 砌筑 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，保温隔热仍是 房屋营建 的底层支撑，并作为 建筑建造 的基础能力持续发挥作用。"
      }
    ],
    "significance": "保温隔热把 砌筑 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bld_curtain",
    "name": "玻璃幕墙",
    "en": "Curtain Wall",
    "category": "build",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "people": "",
    "place": "",
    "summary": "玻璃幕墙约 1950 年 出现，建立在 钢化玻璃、钢结构 之上；它把 房屋营建、桥梁隧道 变成可稳定复现的能力，是 建筑建造 中从经验走向方法的关键一步。",
    "dependsOn": ["mat_tempered", "steel_frame"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "玻璃幕墙在 1950 年 前后出现，依托 钢化玻璃 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，玻璃幕墙仍是 房屋营建 的底层支撑，并作为 建筑建造 的基础能力持续发挥作用。"
      }
    ],
    "significance": "玻璃幕墙把 钢化玻璃 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bld_daylight",
    "name": "自然采光",
    "en": "Daylighting",
    "category": "build",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "自然采光约 1800 年 出现，建立在 平板玻璃、建筑学 之上；它把 房屋营建、桥梁隧道 变成可稳定复现的能力，是 建筑建造 中从经验走向方法的关键一步。",
    "dependsOn": ["mat_flatglass","architecture"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "自然采光在 1800 年 前后出现，依托 平板玻璃 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，自然采光仍是 房屋营建 的底层支撑，并作为 建筑建造 的基础能力持续发挥作用。"
      }
    ],
    "significance": "自然采光把 平板玻璃 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bld_vent",
    "name": "通风系统",
    "en": "Ventilation",
    "category": "build",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "通风系统约 1800 年 出现，建立在 铁器、铸铁 之上；它把 房屋营建、桥梁隧道 变成可稳定复现的能力，是 建筑建造 中从经验走向方法的关键一步。",
    "dependsOn": ["iron","mat_castiron"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "通风系统在 1800 年 前后出现，依托 铁器 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，通风系统仍是 房屋营建 的底层支撑，并作为 建筑建造 的基础能力持续发挥作用。"
      }
    ],
    "significance": "通风系统把 铁器 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bld_hvac",
    "name": "空调系统",
    "en": "HVAC",
    "category": "build",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "空调系统在 1900 年 前后成形，依托 热力学、铸铁 把 房屋营建、桥梁隧道 落到实处，并成为 建筑建造 中承上启下的一环，直接支撑了 智能建筑、地源热泵建筑 等后续技术。",
    "dependsOn": ["thermodynamics","mat_castiron"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "空调系统在 1900 年 前后出现，依托 热力学 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，空调系统仍是 房屋营建 的底层支撑，并持续影响 智能建筑、地源热泵建筑。"
      }
    ],
    "significance": "空调系统把 热力学 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 智能建筑、地源热泵建筑。"
  },
{
    "id": "bld_plumbing",
    "name": "给排水",
    "en": "Plumbing",
    "category": "build",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "给排水在 1800 年 前后成形，依托 铅冶炼、铸铁 把 房屋营建、桥梁隧道 落到实处，并成为 建筑建造 中承上启下的一环，直接支撑了 污水处理、雨水管理、消防系统 等后续技术。",
    "dependsOn": ["mat_lead","mat_castiron"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "给排水在 1800 年 前后出现，依托 铅冶炼 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，给排水仍是 房屋营建 的底层支撑，并持续影响 污水处理、雨水管理、消防系统。"
      }
    ],
    "significance": "给排水把 铅冶炼 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 污水处理、雨水管理、消防系统。"
  },
{
    "id": "bld_sewage",
    "name": "污水处理",
    "en": "Sewage Treatment",
    "category": "build",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "污水处理在 1800 年 前后成形，依托 给排水 把 房屋营建、桥梁隧道 落到实处，并成为 建筑建造 中承上启下的一环，直接支撑了 雨水管理、海绵城市 等后续技术。",
    "dependsOn": ["bld_plumbing"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "污水处理在 1800 年 前后出现，依托 给排水 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，污水处理仍是 房屋营建 的底层支撑，并持续影响 雨水管理、海绵城市。"
      }
    ],
    "significance": "污水处理把 给排水 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 雨水管理、海绵城市。"
  },
{
    "id": "bld_rainwater",
    "name": "雨水管理",
    "en": "Stormwater Mgmt",
    "category": "build",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "雨水管理约 1900 年 成熟，建立在 污水处理、给排水 之上完成关键突破；其能力延伸到 房屋营建、桥梁隧道，并为 海绵城市 的发展铺平了道路。",
    "dependsOn": ["bld_sewage","bld_plumbing"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "雨水管理在 1900 年 前后出现，依托 污水处理 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，雨水管理仍是 房屋营建 的底层支撑，并持续影响 海绵城市。"
      }
    ],
    "significance": "雨水管理把 污水处理 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 海绵城市。"
  },
{
    "id": "bld_fireprotect",
    "name": "消防系统",
    "en": "Fire Protection",
    "category": "build",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "消防系统约 1800 年 成熟，建立在 给排水、铸铁 之上完成关键突破；其能力延伸到 房屋营建、桥梁隧道，并为 自动喷淋 的发展铺平了道路。",
    "dependsOn": ["bld_plumbing","mat_castiron"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "消防系统在 1800 年 前后出现，依托 给排水 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，消防系统仍是 房屋营建 的底层支撑，并持续影响 自动喷淋。"
      }
    ],
    "significance": "消防系统把 给排水 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 自动喷淋。"
  },
{
    "id": "bld_sprinkler",
    "name": "自动喷淋",
    "en": "Sprinkler",
    "category": "build",
    "era": "industrial",
    "date": "1874 年",
    "year": 1874,
    "people": "",
    "place": "",
    "summary": "自动喷淋约 1874 年 出现，建立在 消防系统、管道运输 之上；它把 房屋营建、桥梁隧道 变成可稳定复现的能力，是 建筑建造 中从经验走向方法的关键一步。",
    "dependsOn": ["bld_fireprotect", "tr_pipeline"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "自动喷淋在 1874 年 前后出现，依托 消防系统 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，自动喷淋仍是 房屋营建 的底层支撑，并作为 建筑建造 的基础能力持续发挥作用。"
      }
    ],
    "significance": "自动喷淋把 消防系统 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bld_lightning",
    "name": "避雷",
    "en": "Lightning Protection",
    "category": "build",
    "era": "earlymodern",
    "date": "1700 年",
    "year": 1700,
    "people": "",
    "place": "",
    "summary": "避雷约 1700 年 出现，建立在 红铜冶炼、块炼铁 之上；它把 房屋营建、桥梁隧道 变成可稳定复现的能力，是 建筑建造 中从经验走向方法的关键一步。",
    "dependsOn": ["mat_copper", "mat_iron"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "近代早期",
        "text": "避雷在 1700 年 前后出现，依托 红铜冶炼 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，避雷仍是 房屋营建 的底层支撑，并作为 建筑建造 的基础能力持续发挥作用。"
      }
    ],
    "significance": "避雷把 红铜冶炼 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bld_seismic",
    "name": "抗震设计",
    "en": "Seismic Design",
    "category": "build",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "抗震设计约 1900 年 出现，建立在 混凝土、固体力学 之上；它把 房屋营建、桥梁隧道 变成可稳定复现的能力，是 建筑建造 中从经验走向方法的关键一步。",
    "dependsOn": ["mat_concrete","solid_mech"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "抗震设计在 1900 年 前后出现，依托 混凝土 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，抗震设计仍是 房屋营建 的底层支撑，并作为 建筑建造 的基础能力持续发挥作用。"
      }
    ],
    "significance": "抗震设计把 混凝土 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bld_isolation",
    "name": "隔震",
    "en": "Seismic Isolation",
    "category": "build",
    "era": "info",
    "date": "1970 年",
    "year": 1970,
    "people": "",
    "place": "",
    "summary": "隔震约 1970 年 出现，建立在 天然橡胶、钢结构 之上；它把 房屋营建、桥梁隧道 变成可稳定复现的能力，是 建筑建造 中从经验走向方法的关键一步。",
    "dependsOn": ["mat_rubber", "steel_frame"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "隔震在 1970 年 前后出现，依托 天然橡胶 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，隔震仍是 房屋营建 的底层支撑，并作为 建筑建造 的基础能力持续发挥作用。"
      }
    ],
    "significance": "隔震把 天然橡胶 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bld_modular",
    "name": "模块化建筑",
    "en": "Modular Building",
    "category": "build",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "模块化建筑在 1900 年 前后成形，依托 砌筑、建筑学、工程学 把 房屋营建、桥梁隧道 落到实处，并成为 建筑建造 中承上启下的一环，直接支撑了 预制构件 等后续技术。",
    "dependsOn": ["masonry","architecture","engineering"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "模块化建筑在 1900 年 前后出现，依托 砌筑 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，模块化建筑仍是 房屋营建 的底层支撑，并持续影响 预制构件。"
      }
    ],
    "significance": "模块化建筑把 砌筑 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 预制构件。"
  },
{
    "id": "bld_precast",
    "name": "预制构件",
    "en": "Precast",
    "category": "build",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "预制构件在 1900 年 前后成形，依托 模块化建筑 把 房屋营建、桥梁隧道 落到实处，并成为 建筑建造 中承上启下的一环，直接支撑了 装配式建筑、3D 打印建筑 等后续技术。",
    "dependsOn": ["bld_modular"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "预制构件在 1900 年 前后出现，依托 模块化建筑 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，预制构件仍是 房屋营建 的底层支撑，并持续影响 装配式建筑、3D 打印建筑。"
      }
    ],
    "significance": "预制构件把 模块化建筑 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 装配式建筑、3D 打印建筑。"
  },
{
    "id": "bld_prefab",
    "name": "装配式建筑",
    "en": "Prefabrication",
    "category": "build",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "装配式建筑在 1900 年 前后成形，依托 预制构件、砌筑、建筑学 把 房屋营建、桥梁隧道 落到实处，并成为 建筑建造 中承上启下的一环，直接支撑了 塔吊 等后续技术。",
    "dependsOn": ["bld_precast","masonry","architecture","engineering"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "装配式建筑在 1900 年 前后出现，依托 预制构件 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，装配式建筑仍是 房屋营建 的底层支撑，并持续影响 塔吊。"
      }
    ],
    "significance": "装配式建筑把 预制构件 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 塔吊。"
  },
{
    "id": "bld_3dpb",
    "name": "3D 打印建筑",
    "en": "3D Printed Building",
    "category": "build",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "3D 打印建筑约 2010 年 出现，建立在 3D 打印、预制构件 之上；它把 房屋营建、桥梁隧道 变成可稳定复现的能力，是 建筑建造 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_3dp","bld_precast"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "3D 打印建筑在 2010 年 前后出现，依托 3D 打印 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，3D 打印建筑仍是 房屋营建 的底层支撑，并作为 建筑建造 的基础能力持续发挥作用。"
      }
    ],
    "significance": "3D 打印建筑把 3D 打印 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bld_green",
    "name": "绿色建筑",
    "en": "Green Building",
    "category": "build",
    "era": "info",
    "date": "1990 年",
    "year": 1990,
    "people": "",
    "place": "",
    "summary": "绿色建筑约 1990 年 成熟，建立在 太阳能光伏、太阳能热利用 之上完成关键突破；其能力延伸到 房屋营建、桥梁隧道，并为 被动房、垂直绿化 的发展铺平了道路。",
    "dependsOn": ["solar", "ene_solarthermal"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "绿色建筑在 1990 年 前后出现，依托 太阳能光伏 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，绿色建筑仍是 房屋营建 的底层支撑，并持续影响 被动房、垂直绿化。"
      }
    ],
    "significance": "绿色建筑把 太阳能光伏 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 被动房、垂直绿化。"
  },
{
    "id": "bld_passive",
    "name": "被动房",
    "en": "Passive House",
    "category": "build",
    "era": "info",
    "date": "1990 年",
    "year": 1990,
    "people": "",
    "place": "",
    "summary": "被动房约 1990 年 成熟，建立在 绿色建筑、砌筑、建筑学 之上完成关键突破；其能力延伸到 房屋营建、桥梁隧道，并为 垂直绿化 的发展铺平了道路。",
    "dependsOn": ["bld_green", "masonry", "architecture", "engineering"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "被动房在 1990 年 前后出现，依托 绿色建筑 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，被动房仍是 房屋营建 的底层支撑，并持续影响 垂直绿化。"
      }
    ],
    "significance": "被动房把 绿色建筑 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 垂直绿化。"
  },
{
    "id": "bld_zeroenergy",
    "name": "零能耗建筑",
    "en": "Zero-Energy Building",
    "category": "build",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "零能耗建筑约 2000 年 出现，建立在 太阳能光伏、太阳能热利用、地源热泵建筑 之上；它把 房屋营建、桥梁隧道 变成可稳定复现的能力，是 建筑建造 中从经验走向方法的关键一步。",
    "dependsOn": ["solar", "ene_solarthermal", "bld_geothermal2"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "零能耗建筑在 2000 年 前后出现，依托 太阳能光伏 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，零能耗建筑仍是 房屋营建 的底层支撑，并作为 建筑建造 的基础能力持续发挥作用。"
      }
    ],
    "significance": "零能耗建筑把 太阳能光伏 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bld_smartb",
    "name": "智能建筑",
    "en": "Smart Building",
    "category": "build",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "智能建筑约 2000 年 成熟，建立在 局域网、空调系统 之上完成关键突破；其能力延伸到 房屋营建、桥梁隧道，并为 智慧城市 的发展铺平了道路。",
    "dependsOn": ["inf_lan","bld_hvac"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "智能建筑在 2000 年 前后出现，依托 局域网 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，智能建筑仍是 房屋营建 的底层支撑，并持续影响 智慧城市。"
      }
    ],
    "significance": "智能建筑把 局域网 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 智慧城市。"
  },
{
    "id": "bld_bim",
    "name": "建筑信息模型",
    "en": "BIM",
    "category": "build",
    "era": "info",
    "date": "1970 年",
    "year": 1970,
    "people": "",
    "place": "",
    "summary": "建筑信息模型约 1970 年 出现，建立在 计算机辅助制造 之上；它把 房屋营建、桥梁隧道 变成可稳定复现的能力，是 建筑建造 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_cam"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "建筑信息模型在 1970 年 前后出现，依托 计算机辅助制造 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，建筑信息模型仍是 房屋营建 的底层支撑，并作为 建筑建造 的基础能力持续发挥作用。"
      }
    ],
    "significance": "建筑信息模型把 计算机辅助制造 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bld_survey2",
    "name": "工程测量",
    "en": "Engineering Survey",
    "category": "build",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "工程测量约 1800 年 出现，建立在 测量学 之上；它把 房屋营建、桥梁隧道 变成可稳定复现的能力，是 建筑建造 中从经验走向方法的关键一步。",
    "dependsOn": ["surveying"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "工程测量在 1800 年 前后出现，依托 测量学 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，工程测量仍是 房屋营建 的底层支撑，并作为 建筑建造 的基础能力持续发挥作用。"
      }
    ],
    "significance": "工程测量把 测量学 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bld_underground",
    "name": "地下空间",
    "en": "Underground Space",
    "category": "build",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "地下空间约 1800 年 成熟，建立在 砌筑、铸铁 之上完成关键突破；其能力延伸到 房屋营建、桥梁隧道，并为 盾构法 的发展铺平了道路。",
    "dependsOn": ["masonry","mat_castiron"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "地下空间在 1800 年 前后出现，依托 砌筑 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，地下空间仍是 房屋营建 的底层支撑，并持续影响 盾构法。"
      }
    ],
    "significance": "地下空间把 砌筑 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 盾构法。"
  },
{
    "id": "bld_sponge",
    "name": "海绵城市",
    "en": "Sponge City",
    "category": "build",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "海绵城市约 2000 年 出现，建立在 雨水管理、污水处理 之上；它把 房屋营建、桥梁隧道 变成可稳定复现的能力，是 建筑建造 中从经验走向方法的关键一步。",
    "dependsOn": ["bld_rainwater","bld_sewage"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "海绵城市在 2000 年 前后出现，依托 雨水管理 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，海绵城市仍是 房屋营建 的底层支撑，并作为 建筑建造 的基础能力持续发挥作用。"
      }
    ],
    "significance": "海绵城市把 雨水管理 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bld_verticalgreen",
    "name": "垂直绿化",
    "en": "Vertical Greening",
    "category": "build",
    "era": "info",
    "date": "1990 年",
    "year": 1990,
    "people": "",
    "place": "",
    "summary": "垂直绿化约 1990 年 出现，建立在 绿色建筑、被动房 之上；它把 房屋营建、桥梁隧道 变成可稳定复现的能力，是 建筑建造 中从经验走向方法的关键一步。",
    "dependsOn": ["bld_green","bld_passive"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "垂直绿化在 1990 年 前后出现，依托 绿色建筑 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，垂直绿化仍是 房屋营建 的底层支撑，并作为 建筑建造 的基础能力持续发挥作用。"
      }
    ],
    "significance": "垂直绿化把 绿色建筑 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bld_geothermal2",
    "name": "地源热泵建筑",
    "en": "Geothermal Building",
    "category": "build",
    "era": "info",
    "date": "1980 年",
    "year": 1980,
    "people": "",
    "place": "",
    "summary": "地源热泵建筑在 1980 年 前后成形，依托 热泵、空调系统 把 房屋营建、桥梁隧道 落到实处，并成为 建筑建造 中承上启下的一环，直接支撑了 零能耗建筑 等后续技术。",
    "dependsOn": ["ene_heatpump","bld_hvac"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "地源热泵建筑在 1980 年 前后出现，依托 热泵 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，地源热泵建筑仍是 房屋营建 的底层支撑，并持续影响 零能耗建筑。"
      }
    ],
    "significance": "地源热泵建筑把 热泵 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 零能耗建筑。"
  },
{
    "id": "bld_towercrane",
    "name": "塔吊",
    "en": "Tower Crane",
    "category": "build",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "塔吊在 1900 年 前后成形，依托 装配式建筑 把 房屋营建、桥梁隧道 落到实处，并成为 建筑建造 中承上启下的一环，直接支撑了 爬模 等后续技术。",
    "dependsOn": ["bld_prefab"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "塔吊在 1900 年 前后出现，依托 装配式建筑 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，塔吊仍是 房屋营建 的底层支撑，并持续影响 爬模。"
      }
    ],
    "significance": "塔吊把 装配式建筑 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 爬模。"
  },
{
    "id": "bld_pump",
    "name": "混凝土泵车",
    "en": "Concrete Pump",
    "category": "build",
    "era": "electrical",
    "date": "1920 年",
    "year": 1920,
    "people": "",
    "place": "",
    "summary": "混凝土泵车约 1920 年 出现，建立在 钢筋混凝土、内燃机、起重机 之上；它把 房屋营建、桥梁隧道 变成可稳定复现的能力，是 建筑建造 中从经验走向方法的关键一步。",
    "dependsOn": ["mat_reconcrete", "internal_combustion", "tr_crane"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "混凝土泵车在 1920 年 前后出现，依托 钢筋混凝土 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，混凝土泵车仍是 房屋营建 的底层支撑，并作为 建筑建造 的基础能力持续发挥作用。"
      }
    ],
    "significance": "混凝土泵车把 钢筋混凝土 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bld_climbform",
    "name": "爬模",
    "en": "Climbing Form",
    "category": "build",
    "era": "info",
    "date": "1960 年",
    "year": 1960,
    "people": "",
    "place": "",
    "summary": "爬模约 1960 年 出现，建立在 混凝土、塔吊 之上；它把 房屋营建、桥梁隧道 变成可稳定复现的能力，是 建筑建造 中从经验走向方法的关键一步。",
    "dependsOn": ["mat_concrete","bld_towercrane"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "爬模在 1960 年 前后出现，依托 混凝土 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，爬模仍是 房屋营建 的底层支撑，并作为 建筑建造 的基础能力持续发挥作用。"
      }
    ],
    "significance": "爬模把 混凝土 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bld_aluform",
    "name": "铝模板",
    "en": "Aluminium Formwork",
    "category": "build",
    "era": "info",
    "date": "1980 年",
    "year": 1980,
    "people": "",
    "place": "",
    "summary": "铝模板约 1980 年 出现，建立在 硬铝合金、混凝土 之上；它把 房屋营建、桥梁隧道 变成可稳定复现的能力，是 建筑建造 中从经验走向方法的关键一步。",
    "dependsOn": ["mat_alalloy","mat_concrete"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "铝模板在 1980 年 前后出现，依托 硬铝合金 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，铝模板仍是 房屋营建 的底层支撑，并作为 建筑建造 的基础能力持续发挥作用。"
      }
    ],
    "significance": "铝模板把 硬铝合金 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bld_robotbrick",
    "name": "砌砖机器人",
    "en": "Bricklaying Robot",
    "category": "build",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "砌砖机器人约 2010 年 出现，建立在 砌筑、建筑学、工程学 之上；它把 房屋营建、桥梁隧道 变成可稳定复现的能力，是 建筑建造 中从经验走向方法的关键一步。",
    "dependsOn": ["masonry","architecture","engineering"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "砌砖机器人在 2010 年 前后出现，依托 砌筑 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，砌砖机器人仍是 房屋营建 的底层支撑，并作为 建筑建造 的基础能力持续发挥作用。"
      }
    ],
    "significance": "砌砖机器人把 砌筑 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bld_dronesurvey",
    "name": "无人机测绘",
    "en": "Drone Surveying",
    "category": "build",
    "era": "intelligent",
    "date": "约 2010 年",
    "year": 2010,
    "people": "大疆(DJI)等消费级无人机厂商、开源飞控社区(ArduPilot、PX4)、摄影测量软件社区(Pix4D、OpenDroneMap)",
    "place": "中国、美国、瑞士",
    "summary": "以无人机为飞行平台，结合 GNSS 定位、数码相机/图像传感器、飞控系统与摄影测量/计算机视觉算法，快速获取地表影像并生成正射影像、地形模型或三维点云的技术。2010 年前后随多旋翼无人机、MEMS 云台与消费级飞控普及而商品化，广泛应用于工程测量、城市规划、建筑巡检与农业监测。",
    "dependsOn": [
      "gps",
      "computer",
      "drone",
      "camera",
      "photography",
      "uav_controller",
      "multicopter"
    ],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "2000 年代后期，多旋翼无人机与消费级飞控成本骤降，使测绘从有人机/地面测量转向低空无人机影像采集。"
      },
      {
        "period": "当代",
        "text": "今天，无人机测绘已广泛应用于工程测量、城市规划与建筑巡检，并延伸至农业监测与三维城市建模。"
      }
    ],
    "significance": "无人机测绘把低成本飞行平台与摄影测量/计算机视觉结合，是建筑工程数字化测绘的关键使能技术。"
  },
{
    "id": "bld_smartcity",
    "name": "智慧城市",
    "en": "Smart City",
    "category": "build",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "智慧城市约 2010 年 出现，建立在 云计算、智能建筑 之上；它把 房屋营建、桥梁隧道 变成可稳定复现的能力，是 建筑建造 中从经验走向方法的关键一步。",
    "dependsOn": ["inf_cloud","bld_smartb"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "智慧城市在 2010 年 前后出现，依托 云计算 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，智慧城市仍是 房屋营建 的底层支撑，并作为 建筑建造 的基础能力持续发挥作用。"
      }
    ],
    "significance": "智慧城市把 云计算 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bld_variabletbm",
    "name": "可变径盾构",
    "en": "Variable-Diameter TBM",
    "category": "build",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "可变径盾构约 2010 年 出现，建立在 盾构法 之上；它把 房屋营建、桥梁隧道 变成可稳定复现的能力，是 建筑建造 中从经验走向方法的关键一步。",
    "dependsOn": ["bld_shield"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "可变径盾构在 2010 年 前后出现，依托 盾构法 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，可变径盾构仍是 房屋营建 的底层支撑，并作为 建筑建造 的基础能力持续发挥作用。"
      }
    ],
    "significance": "可变径盾构把 盾构法 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bld_frpbridge",
    "name": "复材桥梁",
    "en": "FRP Bridge",
    "category": "build",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "复材桥梁约 2010 年 出现，建立在 玻璃钢、钢铁 之上；它把 房屋营建、桥梁隧道 变成可稳定复现的能力，是 建筑建造 中从经验走向方法的关键一步。",
    "dependsOn": ["mat_frp","steel"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "复材桥梁在 2010 年 前后出现，依托 玻璃钢 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，复材桥梁仍是 房屋营建 的底层支撑，并作为 建筑建造 的基础能力持续发挥作用。"
      }
    ],
    "significance": "复材桥梁把 玻璃钢 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点。"
  },

{
    "id": "bld_selfhealconc",
    "name": "自修复混凝土",
    "en": "Self-Healing Concrete",
    "category": "build",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "自修复混凝土约 2010 年 出现，建立在 混凝土 之上；它把 房屋营建、桥梁隧道 变成可稳定复现的能力，是 建筑建造 中从经验走向方法的关键一步。",
    "dependsOn": ["mat_concrete"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "自修复混凝土在 2010 年 前后出现，依托 混凝土 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，自修复混凝土仍是 房屋营建 的底层支撑，并作为 建筑建造 的基础能力持续发挥作用。"
      }
    ],
    "significance": "自修复混凝土把 混凝土 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "bld_carbonconc",
    "name": "碳纤维混凝土",
    "en": "Carbon Concrete",
    "category": "build",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "碳纤维混凝土约 2010 年 出现，建立在 碳纤维复合材料、混凝土 之上；它把 房屋营建、桥梁隧道 变成可稳定复现的能力，是 建筑建造 中从经验走向方法的关键一步。",
    "dependsOn": ["mat_cfrp","mat_concrete"],
    "enables": [],
    "applications": [
      "房屋营建",
      "桥梁隧道",
      "城市基础设施"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "碳纤维混凝土在 2010 年 前后出现，依托 碳纤维复合材料 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，碳纤维混凝土仍是 房屋营建 的底层支撑，并作为 建筑建造 的基础能力持续发挥作用。"
      }
    ],
    "significance": "碳纤维混凝土把 碳纤维复合材料 与 房屋营建 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_bow",
    "name": "弓",
    "en": "Bow",
    "category": "military",
    "era": "prehistoric",
    "date": "约 2 万年前",
    "year": -20000,
    "people": "",
    "place": "",
    "summary": "弓在 约 2 万年前 前后成形，依托 凿 把 防御工事、火力打击 落到实处，并成为 军事技术 中承上启下的一环，直接支撑了 弓箭、箭、弩 等后续技术。",
    "dependsOn": ["mfg_chisel"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "史前时代",
        "text": "弓在 约 2 万年前 前后出现，依托 凿 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，弓仍是 防御工事 的底层支撑，并持续影响 弓箭、箭、弩。"
      }
    ],
    "significance": "弓把 凿 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点，并直接催生了 弓箭、箭、弩。"
  },
{
    "id": "mil_arrow",
    "name": "箭",
    "en": "Arrow",
    "category": "military",
    "era": "prehistoric",
    "date": "约 2 万年前",
    "year": -20000,
    "people": "",
    "place": "",
    "summary": "箭约 约 2 万年前 成熟，建立在 凿、弓 之上完成关键突破；其能力延伸到 防御工事、火力打击，并为 弓箭、火箭弹 的发展铺平了道路。",
    "dependsOn": ["mfg_chisel","mil_bow"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "史前时代",
        "text": "箭在 约 2 万年前 前后出现，依托 凿 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，箭仍是 防御工事 的底层支撑，并持续影响 弓箭、火箭弹。"
      }
    ],
    "significance": "箭把 凿 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点，并直接催生了 弓箭、火箭弹。"
  },
{
    "id": "mil_crossbow",
    "name": "弩",
    "en": "Crossbow",
    "category": "military",
    "era": "ancient",
    "date": "公元前 1000 年",
    "year": -1000,
    "people": "",
    "place": "",
    "summary": "弩约 公元前 1000 年 出现，建立在 弓、青铜合金 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mil_bow", "mat_bronze"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "弩在 公元前 1000 年 前后出现，依托 弓 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，弩仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "弩把 弓 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_catapult",
    "name": "投石机",
    "en": "Catapult",
    "category": "military",
    "era": "classical",
    "date": "公元前 400 年",
    "year": -400,
    "people": "",
    "place": "",
    "summary": "投石机在 公元前 400 年 前后成形，依托 车床 把 防御工事、火力打击 落到实处，并成为 军事技术 中承上启下的一环，直接支撑了 火药 等后续技术。",
    "dependsOn": ["mfg_lathe"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "古典时代",
        "text": "投石机在 公元前 400 年 前后出现，依托 车床 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，投石机仍是 防御工事 的底层支撑，并持续影响 火药。"
      }
    ],
    "significance": "投石机把 车床 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点，并直接催生了 火药。"
  },
{
    "id": "mil_javelin",
    "name": "标枪",
    "en": "Javelin",
    "category": "military",
    "era": "prehistoric",
    "date": "约 2 万年前",
    "year": -20000,
    "people": "",
    "place": "",
    "summary": "标枪约 约 2 万年前 成熟，建立在 凿 之上完成关键突破；其能力延伸到 防御工事、火力打击，并为 长矛 的发展铺平了道路。",
    "dependsOn": ["mfg_chisel"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "史前时代",
        "text": "标枪在 约 2 万年前 前后出现，依托 凿 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，标枪仍是 防御工事 的底层支撑，并持续影响 长矛。"
      }
    ],
    "significance": "标枪把 凿 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点，并直接催生了 长矛。"
  },
{
    "id": "mil_spear",
    "name": "长矛",
    "en": "Spear",
    "category": "military",
    "era": "prehistoric",
    "date": "约 2 万年前",
    "year": -20000,
    "people": "",
    "place": "",
    "summary": "长矛约 约 2 万年前 出现，建立在 凿、标枪 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_chisel","mil_javelin"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "史前时代",
        "text": "长矛在 约 2 万年前 前后出现，依托 凿 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，长矛仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "长矛把 凿 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_sword",
    "name": "剑",
    "en": "Sword",
    "category": "military",
    "era": "ancient",
    "date": "公元前 3000 年",
    "year": -3000,
    "people": "",
    "place": "",
    "summary": "剑约 公元前 3000 年 出现，建立在 青铜合金、铸造 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mat_bronze", "mat_casting"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "剑在 公元前 3000 年 前后出现，依托 青铜合金 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，剑仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "剑把 青铜合金 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_shield",
    "name": "盾",
    "en": "Shield",
    "category": "military",
    "era": "ancient",
    "date": "公元前 3000 年",
    "year": -3000,
    "people": "",
    "place": "",
    "summary": "盾约 公元前 3000 年 出现，建立在 木作、青铜合金 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["woodworking", "mat_bronze"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "盾在 公元前 3000 年 前后出现，依托 木作 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，盾仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "盾把 木作 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_armor",
    "name": "盔甲",
    "en": "Armor",
    "category": "military",
    "era": "ancient",
    "date": "公元前 3000 年",
    "year": -3000,
    "people": "",
    "place": "",
    "summary": "盔甲约 公元前 3000 年 成熟，建立在 青铜合金、铸造 之上完成关键突破；其能力延伸到 防御工事、火力打击，并为 装甲运兵车 的发展铺平了道路。",
    "dependsOn": ["mat_bronze", "mat_casting"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "盔甲在 公元前 3000 年 前后出现，依托 青铜合金 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，盔甲仍是 防御工事 的底层支撑，并持续影响 装甲运兵车。"
      }
    ],
    "significance": "盔甲把 青铜合金 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点，并直接催生了 装甲运兵车。"
  },
{
    "id": "mil_chainmail",
    "name": "锁子甲",
    "en": "Chainmail",
    "category": "military",
    "era": "classical",
    "date": "公元前 500 年",
    "year": -500,
    "people": "",
    "place": "",
    "summary": "锁子甲约 公元前 500 年 出现，建立在 车床 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_lathe"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "古典时代",
        "text": "锁子甲在 公元前 500 年 前后出现，依托 车床 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，锁子甲仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "锁子甲把 车床 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_plate",
    "name": "板甲",
    "en": "Plate Armor",
    "category": "military",
    "era": "medieval",
    "date": "1300 年",
    "year": 1300,
    "people": "",
    "place": "",
    "summary": "板甲在 1300 年 前后成形，依托 钢铁、锻造 把 防御工事、火力打击 落到实处，并成为 军事技术 中承上启下的一环，直接支撑了 防弹衣 等后续技术。",
    "dependsOn": ["steel","mat_forging"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "中世纪",
        "text": "板甲在 1300 年 前后出现，依托 钢铁 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，板甲仍是 防御工事 的底层支撑，并持续影响 防弹衣。"
      }
    ],
    "significance": "板甲把 钢铁 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点，并直接催生了 防弹衣。"
  },
{
    "id": "mil_matchlock",
    "name": "火绳枪",
    "en": "Matchlock",
    "category": "military",
    "era": "earlymodern",
    "date": "1500 年",
    "year": 1500,
    "people": "",
    "place": "",
    "summary": "火绳枪在 1500 年 前后成形，依托 火药、铁器、螺纹 把 防御工事、火力打击 落到实处，并成为 军事技术 中承上启下的一环，直接支撑了 燧发枪 等后续技术。",
    "dependsOn": ["gunpowder","iron","mfg_thread"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "近代早期",
        "text": "火绳枪在 1500 年 前后出现，依托 火药 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，火绳枪仍是 防御工事 的底层支撑，并持续影响 燧发枪。"
      }
    ],
    "significance": "火绳枪把 火药 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点，并直接催生了 燧发枪。"
  },
{
    "id": "mil_fintlock",
    "name": "燧发枪",
    "en": "Flintlock",
    "category": "military",
    "era": "earlymodern",
    "date": "1600 年",
    "year": 1600,
    "people": "",
    "place": "",
    "summary": "燧发枪约 1600 年 出现，建立在 火绳枪、火药、钢铁 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mil_matchlock", "gunpowder", "steel"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "近代早期",
        "text": "燧发枪在 1600 年 前后出现，依托 火绳枪 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，燧发枪仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "燧发枪把 火绳枪 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_musket",
    "name": "滑膛枪",
    "en": "Musket",
    "category": "military",
    "era": "earlymodern",
    "date": "1500 年",
    "year": 1500,
    "people": "",
    "place": "",
    "summary": "滑膛枪约 1500 年 成熟，建立在 火药、铁器、螺纹 之上完成关键突破；其能力延伸到 防御工事、火力打击，并为 来复枪 的发展铺平了道路。",
    "dependsOn": ["gunpowder","iron","mfg_thread"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "近代早期",
        "text": "滑膛枪在 1500 年 前后出现，依托 火药 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，滑膛枪仍是 防御工事 的底层支撑，并持续影响 来复枪。"
      }
    ],
    "significance": "滑膛枪把 火药 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点，并直接催生了 来复枪。"
  },
{
    "id": "mil_rifle",
    "name": "来复枪",
    "en": "Rifle",
    "category": "military",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "来复枪在 1800 年 前后成形，依托 滑膛枪、镗床 把 防御工事、火力打击 落到实处，并成为 军事技术 中承上启下的一环，直接支撑了 机枪、狙击步枪 等后续技术。",
    "dependsOn": ["mil_musket", "mfg_boring"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "来复枪在 1800 年 前后出现，依托 滑膛枪 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，来复枪仍是 防御工事 的底层支撑，并持续影响 机枪、狙击步枪。"
      }
    ],
    "significance": "来复枪把 滑膛枪 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点，并直接催生了 机枪、狙击步枪。"
  },
{
    "id": "mil_machinegun",
    "name": "机枪",
    "en": "Machine Gun",
    "category": "military",
    "era": "industrial",
    "date": "1884 年",
    "year": 1884,
    "people": "",
    "place": "",
    "summary": "机枪约 1884 年 成熟，建立在 来复枪、铣床、钢铁 之上完成关键突破；其能力延伸到 防御工事、火力打击，并为 冲锋枪、战斗机 的发展铺平了道路。",
    "dependsOn": ["mil_rifle", "mfg_mill", "steel"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "机枪在 1884 年 前后出现，依托 来复枪 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，机枪仍是 防御工事 的底层支撑，并持续影响 冲锋枪、战斗机。"
      }
    ],
    "significance": "机枪把 来复枪 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点，并直接催生了 冲锋枪、战斗机。"
  },
{
    "id": "mil_submachine",
    "name": "冲锋枪",
    "en": "Submachine Gun",
    "category": "military",
    "era": "electrical",
    "date": "1918 年",
    "year": 1918,
    "people": "",
    "place": "",
    "summary": "冲锋枪约 1918 年 出现，建立在 机枪、钢铁 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mil_machinegun", "steel"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "冲锋枪在 1918 年 前后出现，依托 机枪 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，冲锋枪仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "冲锋枪把 机枪 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_sniper",
    "name": "狙击步枪",
    "en": "Sniper Rifle",
    "category": "military",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "狙击步枪约 1800 年 出现，建立在 来复枪、光学 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mil_rifle", "optics"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "狙击步枪在 1800 年 前后出现，依托 来复枪 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，狙击步枪仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "狙击步枪把 来复枪 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_pistol",
    "name": "手枪",
    "en": "Pistol",
    "category": "military",
    "era": "earlymodern",
    "date": "1500 年",
    "year": 1500,
    "people": "",
    "place": "",
    "summary": "手枪约 1500 年 出现，建立在 火药、铁器、螺纹 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["gunpowder","iron","mfg_thread"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "近代早期",
        "text": "手枪在 1500 年 前后出现，依托 火药 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，手枪仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "手枪把 火药 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_revolver",
    "name": "左轮手枪",
    "en": "Revolver",
    "category": "military",
    "era": "industrial",
    "date": "1836 年",
    "year": 1836,
    "people": "",
    "place": "",
    "summary": "左轮手枪约 1836 年 出现，建立在 发电机与电动机 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["generator"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "左轮手枪在 1836 年 前后出现，依托 发电机与电动机 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，左轮手枪仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "左轮手枪把 发电机与电动机 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },

{
    "id": "mil_blackpowder",
    "name": "黑火药",
    "en": "Black Powder",
    "category": "military",
    "era": "medieval",
    "date": "800 年",
    "year": 800,
    "people": "",
    "place": "",
    "summary": "黑火药在 800 年 前后成形，依托 螺纹 把 防御工事、火力打击 落到实处，并成为 军事技术 中承上启下的一环，直接支撑了 火药、无烟火药 等后续技术。",
    "dependsOn": ["mfg_thread"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "中世纪",
        "text": "黑火药在 800 年 前后出现，依托 螺纹 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，黑火药仍是 防御工事 的底层支撑，并持续影响 火药、无烟火药。"
      }
    ],
    "significance": "黑火药把 螺纹 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点，并直接催生了 火药、无烟火药。"
  },
{
    "id": "mil_smokeless",
    "name": "无烟火药",
    "en": "Smokeless Powder",
    "category": "military",
    "era": "industrial",
    "date": "1884 年",
    "year": 1884,
    "people": "",
    "place": "",
    "summary": "无烟火药约 1884 年 出现，建立在 黑火药、化学 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mil_blackpowder", "chemistry"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "无烟火药在 1884 年 前后出现，依托 黑火药 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，无烟火药仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "无烟火药把 黑火药 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_dynamite",
    "name": "炸药",
    "en": "Dynamite",
    "category": "military",
    "era": "industrial",
    "date": "1867 年",
    "year": 1867,
    "people": "",
    "place": "",
    "summary": "炸药约 1867 年 出现，建立在 硝化甘油、化学 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mil_ng","chemistry"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "炸药在 1867 年 前后出现，依托 硝化甘油 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，炸药仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "炸药把 硝化甘油 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_ng",
    "name": "硝化甘油",
    "en": "Nitroglycerin",
    "category": "military",
    "era": "industrial",
    "date": "1847 年",
    "year": 1847,
    "people": "",
    "place": "",
    "summary": "硝化甘油约 1847 年 成熟，建立在 化学 之上完成关键突破；其能力延伸到 防御工事、火力打击，并为 炸药、雷管、鱼雷 的发展铺平了道路。",
    "dependsOn": ["chemistry"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "硝化甘油在 1847 年 前后出现，依托 化学 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，硝化甘油仍是 防御工事 的底层支撑，并持续影响 炸药、雷管、鱼雷。"
      }
    ],
    "significance": "硝化甘油把 化学 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点，并直接催生了 炸药、雷管、鱼雷。"
  },
{
    "id": "mil_tnt",
    "name": "TNT",
    "en": "TNT",
    "category": "military",
    "era": "industrial",
    "date": "1863 年",
    "year": 1863,
    "people": "",
    "place": "",
    "summary": "TNT约 1863 年 出现，建立在 化学、有机化学 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry", "organic_chem"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "TNT在 1863 年 前后出现，依托 化学 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，TNT仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "TNT把 化学 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_detonator",
    "name": "雷管",
    "en": "Detonator",
    "category": "military",
    "era": "industrial",
    "date": "1863 年",
    "year": 1863,
    "people": "",
    "place": "",
    "summary": "雷管约 1863 年 出现，建立在 硝化甘油、化学 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mil_ng", "chemistry"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "雷管在 1863 年 前后出现，依托 硝化甘油 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，雷管仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "雷管把 硝化甘油 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_landmine",
    "name": "地雷",
    "en": "Landmine",
    "category": "military",
    "era": "medieval",
    "date": "1200 年",
    "year": 1200,
    "people": "",
    "place": "",
    "summary": "地雷在 1200 年 前后成形，依托 火药、铁器 把 防御工事、火力打击 落到实处，并成为 军事技术 中承上启下的一环，直接支撑了 水雷、扫雷 等后续技术。",
    "dependsOn": ["gunpowder","iron"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "中世纪",
        "text": "地雷在 1200 年 前后出现，依托 火药 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，地雷仍是 防御工事 的底层支撑，并持续影响 水雷、扫雷。"
      }
    ],
    "significance": "地雷把 火药 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点，并直接催生了 水雷、扫雷。"
  },
{
    "id": "mil_seamine",
    "name": "水雷",
    "en": "Naval Mine",
    "category": "military",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "水雷在 1800 年 前后成形，依托 地雷、火药 把 防御工事、火力打击 落到实处，并成为 军事技术 中承上启下的一环，直接支撑了 扫雷 等后续技术。",
    "dependsOn": ["mil_landmine", "gunpowder"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "水雷在 1800 年 前后出现，依托 地雷 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，水雷仍是 防御工事 的底层支撑，并持续影响 扫雷。"
      }
    ],
    "significance": "水雷把 地雷 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点，并直接催生了 扫雷。"
  },
{
    "id": "mil_grenade",
    "name": "手榴弹",
    "en": "Grenade",
    "category": "military",
    "era": "medieval",
    "date": "1400 年",
    "year": 1400,
    "people": "",
    "place": "",
    "summary": "手榴弹约 1400 年 出现，建立在 拉丝、火药 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_wiredraw","gunpowder"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "中世纪",
        "text": "手榴弹在 1400 年 前后出现，依托 拉丝 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，手榴弹仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "手榴弹把 拉丝 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_rocket2",
    "name": "火箭弹",
    "en": "Rocket Projectile",
    "category": "military",
    "era": "medieval",
    "date": "1200 年",
    "year": 1200,
    "people": "",
    "place": "",
    "summary": "火箭弹约 1200 年 出现，建立在 火药、箭 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["gunpowder","mil_arrow"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "中世纪",
        "text": "火箭弹在 1200 年 前后出现，依托 火药 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，火箭弹仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "火箭弹把 火药 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },

{
    "id": "mil_ballistic",
    "name": "弹道导弹",
    "en": "Ballistic Missile",
    "category": "military",
    "era": "electrical",
    "date": "1942 年",
    "year": 1942,
    "people": "",
    "place": "",
    "summary": "弹道导弹约 1942 年 成熟，建立在 火箭、制导技术 之上完成关键突破；其能力延伸到 防御工事、火力打击，并为 巡航导弹、防空导弹、核三位一体 的发展铺平了道路。",
    "dependsOn": ["rocket", "mil_guidance"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "弹道导弹在 1942 年 前后出现，依托 火箭 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，弹道导弹仍是 防御工事 的底层支撑，并持续影响 巡航导弹、防空导弹、核三位一体。"
      }
    ],
    "significance": "弹道导弹把 火箭 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点，并直接催生了 巡航导弹、防空导弹、核三位一体。"
  },
{
    "id": "mil_cruise",
    "name": "巡航导弹",
    "en": "Cruise Missile",
    "category": "military",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "people": "",
    "place": "",
    "summary": "巡航导弹约 1950 年 成熟，建立在 弹道导弹、喷气发动机 之上完成关键突破；其能力延伸到 防御工事、火力打击，并为 巡飞弹 的发展铺平了道路。",
    "dependsOn": ["mil_ballistic", "ene_jet"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "巡航导弹在 1950 年 前后出现，依托 弹道导弹 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，巡航导弹仍是 防御工事 的底层支撑，并持续影响 巡飞弹。"
      }
    ],
    "significance": "巡航导弹把 弹道导弹 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点，并直接催生了 巡飞弹。"
  },
{
    "id": "mil_sam",
    "name": "防空导弹",
    "en": "SAM",
    "category": "military",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "people": "",
    "place": "",
    "summary": "防空导弹约 1950 年 成熟，建立在 弹道导弹、雷达 之上完成关键突破；其能力延伸到 防御工事、火力打击，并为 反坦克导弹、导弹防御 的发展铺平了道路。",
    "dependsOn": ["mil_ballistic", "tr_radar2"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "防空导弹在 1950 年 前后出现，依托 弹道导弹 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，防空导弹仍是 防御工事 的底层支撑，并持续影响 反坦克导弹、导弹防御。"
      }
    ],
    "significance": "防空导弹把 弹道导弹 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点，并直接催生了 反坦克导弹、导弹防御。"
  },
{
    "id": "mil_atgm",
    "name": "反坦克导弹",
    "en": "ATGM",
    "category": "military",
    "era": "info",
    "date": "1960 年",
    "year": 1960,
    "people": "",
    "place": "",
    "summary": "反坦克导弹约 1960 年 出现，建立在 制导技术、防空导弹 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mil_guidance", "mil_sam"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "反坦克导弹在 1960 年 前后出现，依托 制导技术 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，反坦克导弹仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "反坦克导弹把 制导技术 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_guidance",
    "name": "制导技术",
    "en": "Guidance",
    "category": "military",
    "era": "electrical",
    "date": "1940 年",
    "year": 1940,
    "people": "",
    "place": "",
    "summary": "制导技术在 1940 年 前后成形，依托 无线电、雷达 把 防御工事、火力打击 落到实处，并成为 军事技术 中承上启下的一环，直接支撑了 弹道导弹、反坦克导弹、惯性制导 等后续技术。",
    "dependsOn": ["radio", "tr_radar2"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "制导技术在 1940 年 前后出现，依托 无线电 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，制导技术仍是 防御工事 的底层支撑，并持续影响 弹道导弹、反坦克导弹、惯性制导。"
      }
    ],
    "significance": "制导技术把 无线电 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点，并直接催生了 弹道导弹、反坦克导弹、惯性制导。"
  },
{
    "id": "mil_inertial",
    "name": "惯性制导",
    "en": "Inertial Guidance",
    "category": "military",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "people": "",
    "place": "",
    "summary": "惯性制导约 1950 年 出现，建立在 制导技术、控制论 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mil_guidance", "control_theory"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "惯性制导在 1950 年 前后出现，依托 制导技术 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，惯性制导仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "惯性制导把 制导技术 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_laserguid",
    "name": "激光制导",
    "en": "Laser Guidance",
    "category": "military",
    "era": "info",
    "date": "1960 年",
    "year": 1960,
    "people": "",
    "place": "",
    "summary": "激光制导在 1960 年 前后成形，依托 制导技术、雷达 把 防御工事、火力打击 落到实处，并成为 军事技术 中承上启下的一环，直接支撑了 激光武器 等后续技术。",
    "dependsOn": ["mil_guidance", "tr_radar2"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "激光制导在 1960 年 前后出现，依托 制导技术 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，激光制导仍是 防御工事 的底层支撑，并持续影响 激光武器。"
      }
    ],
    "significance": "激光制导把 制导技术 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点，并直接催生了 激光武器。"
  },
{
    "id": "mil_irguid",
    "name": "红外制导",
    "en": "IR Guidance",
    "category": "military",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "people": "",
    "place": "",
    "summary": "红外制导约 1950 年 出现，建立在 制导技术、夜视仪 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mil_guidance", "mil_nightvision"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "红外制导在 1950 年 前后出现，依托 制导技术 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，红外制导仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "红外制导把 制导技术 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_phasedradar",
    "name": "相控阵雷达",
    "en": "Phased Array Radar",
    "category": "military",
    "era": "info",
    "date": "1960 年",
    "year": 1960,
    "people": "",
    "place": "",
    "summary": "相控阵雷达约 1960 年 出现，建立在 雷达、半导体材料 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["tr_radar2", "semiconductors"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "相控阵雷达在 1960 年 前后出现，依托 雷达 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，相控阵雷达仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "相控阵雷达把 雷达 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_sonar",
    "name": "声纳",
    "en": "Sonar",
    "category": "military",
    "era": "electrical",
    "date": "1917 年",
    "year": 1917,
    "people": "",
    "place": "",
    "summary": "声纳约 1917 年 出现，建立在 声学、电子学 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["acoustics", "electronics"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "声纳在 1917 年 前后出现，依托 声学 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，声纳仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "声纳把 声学 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_nightvision",
    "name": "夜视仪",
    "en": "Night Vision",
    "category": "military",
    "era": "electrical",
    "date": "1930 年",
    "year": 1930,
    "people": "",
    "place": "",
    "summary": "夜视仪在 1930 年 前后成形，依托 运载火箭 把 防御工事、火力打击 落到实处，并成为 军事技术 中承上启下的一环，直接支撑了 红外制导、热成像 等后续技术。",
    "dependsOn": ["tr_rocket"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "夜视仪在 1930 年 前后出现，依托 运载火箭 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，夜视仪仍是 防御工事 的底层支撑，并持续影响 红外制导、热成像。"
      }
    ],
    "significance": "夜视仪把 运载火箭 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点，并直接催生了 红外制导、热成像。"
  },
{
    "id": "mil_thermal",
    "name": "热成像",
    "en": "Thermal Imaging",
    "category": "military",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "people": "",
    "place": "",
    "summary": "热成像约 1950 年 出现，建立在 夜视仪、半导体材料 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mil_nightvision", "semiconductors"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "热成像在 1950 年 前后出现，依托 夜视仪 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，热成像仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "热成像把 夜视仪 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_recon",
    "name": "侦察技术",
    "en": "Reconnaissance",
    "category": "military",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "侦察技术约 1800 年 成熟，建立在 热气球、制图学 之上完成关键突破；其能力延伸到 防御工事、火力打击，并为 假目标 的发展铺平了道路。",
    "dependsOn": ["tr_balloon", "cartography"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "侦察技术在 1800 年 前后出现，依托 热气球 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，侦察技术仍是 防御工事 的底层支撑，并持续影响 假目标。"
      }
    ],
    "significance": "侦察技术把 热气球 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点，并直接催生了 假目标。"
  },
{
    "id": "mil_loitering",
    "name": "巡飞弹",
    "en": "Loitering Munition",
    "category": "military",
    "era": "info",
    "date": "1980 年",
    "year": 1980,
    "people": "",
    "place": "",
    "summary": "巡飞弹约 1980 年 出现，建立在 巡航导弹、制导技术 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mil_cruise", "mil_guidance"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "巡飞弹在 1980 年 前后出现，依托 巡航导弹 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，巡飞弹仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "巡飞弹把 巡航导弹 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_ew",
    "name": "电子战",
    "en": "Electronic Warfare",
    "category": "military",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "电子战约 1900 年 出现，建立在 无线电、电报 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["radio", "telegraph"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "电子战在 1900 年 前后出现，依托 无线电 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，电子战仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "电子战把 无线电 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_jamming",
    "name": "干扰",
    "en": "Jamming",
    "category": "military",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "干扰约 1900 年 出现，建立在 无线电、电报 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["radio", "telegraph"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "干扰在 1900 年 前后出现，依托 无线电 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，干扰仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "干扰把 无线电 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_stealth2",
    "name": "隐身技术",
    "en": "Stealth Tech",
    "category": "military",
    "era": "info",
    "date": "1970 年",
    "year": 1970,
    "people": "",
    "place": "",
    "summary": "隐身技术约 1970 年 成熟，建立在 雷达、复合材料 之上完成关键突破；其能力延伸到 防御工事、火力打击，并为 忠诚僚机 的发展铺平了道路。",
    "dependsOn": ["tr_radar2", "composites"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "隐身技术在 1970 年 前后出现，依托 雷达 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，隐身技术仍是 防御工事 的底层支撑，并持续影响 忠诚僚机。"
      }
    ],
    "significance": "隐身技术把 雷达 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点，并直接催生了 忠诚僚机。"
  },
{
    "id": "mil_lowobs",
    "name": "低可探测",
    "en": "Low Observability",
    "category": "military",
    "era": "info",
    "date": "1970 年",
    "year": 1970,
    "people": "",
    "place": "",
    "summary": "低可探测约 1970 年 出现，建立在 复合材料、雷达 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["composites", "tr_radar2"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "低可探测在 1970 年 前后出现，依托 复合材料 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，低可探测仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "低可探测把 复合材料 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },

{
    "id": "mil_apc",
    "name": "装甲运兵车",
    "en": "APC",
    "category": "military",
    "era": "electrical",
    "date": "1918 年",
    "year": 1918,
    "people": "",
    "place": "",
    "summary": "装甲运兵车约 1918 年 出现，建立在 盔甲、内燃机、汽车 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mil_armor", "internal_combustion", "automobile"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "装甲运兵车在 1918 年 前后出现，依托 盔甲 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，装甲运兵车仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "装甲运兵车把 盔甲 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_spg",
    "name": "自行火炮",
    "en": "Self-Propelled Gun",
    "category": "military",
    "era": "electrical",
    "date": "1930 年",
    "year": 1930,
    "people": "",
    "place": "",
    "summary": "自行火炮约 1930 年 出现，建立在 运载火箭 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["tr_rocket"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "自行火炮在 1930 年 前后出现，依托 运载火箭 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，自行火炮仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "自行火炮把 运载火箭 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_mrl",
    "name": "火箭炮",
    "en": "MLRS",
    "category": "military",
    "era": "electrical",
    "date": "1930 年",
    "year": 1930,
    "people": "",
    "place": "",
    "summary": "火箭炮约 1930 年 出现，建立在 运载火箭 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["tr_rocket"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "火箭炮在 1930 年 前后出现，依托 运载火箭 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，火箭炮仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "火箭炮把 运载火箭 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_howitzer",
    "name": "榴弹炮",
    "en": "Howitzer",
    "category": "military",
    "era": "earlymodern",
    "date": "1700 年",
    "year": 1700,
    "people": "",
    "place": "",
    "summary": "榴弹炮约 1700 年 出现，建立在 火炮、火药 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["cannon", "gunpowder"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "近代早期",
        "text": "榴弹炮在 1700 年 前后出现，依托 火炮 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，榴弹炮仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "榴弹炮把 火炮 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_cannon",
    "name": "加农炮",
    "en": "Cannon",
    "category": "military",
    "era": "medieval",
    "date": "1200 年",
    "year": 1200,
    "people": "",
    "place": "",
    "summary": "加农炮约 1200 年 出现，建立在 火药、青铜铸造 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["gunpowder","bronze_casting"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "中世纪",
        "text": "加农炮在 1200 年 前后出现，依托 火药 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，加农炮仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "加农炮把 火药 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_aagun",
    "name": "高射炮",
    "en": "AA Gun",
    "category": "military",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "高射炮约 1900 年 出现，建立在 火炮、钢铁 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["cannon", "steel"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "高射炮在 1900 年 前后出现，依托 火炮 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，高射炮仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "高射炮把 火炮 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_torpedo",
    "name": "鱼雷",
    "en": "Torpedo",
    "category": "military",
    "era": "industrial",
    "date": "1866 年",
    "year": 1866,
    "people": "",
    "place": "",
    "summary": "鱼雷约 1866 年 成熟，建立在 螺旋桨、硝化甘油 之上完成关键突破；其能力延伸到 防御工事、火力打击，并为 驱逐舰 的发展铺平了道路。",
    "dependsOn": ["tr_screwprop","mil_ng"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "鱼雷在 1866 年 前后出现，依托 螺旋桨 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，鱼雷仍是 防御工事 的底层支撑，并持续影响 驱逐舰。"
      }
    ],
    "significance": "鱼雷把 螺旋桨 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点，并直接催生了 驱逐舰。"
  },
{
    "id": "mil_depthcharge",
    "name": "深水炸弹",
    "en": "Depth Charge",
    "category": "military",
    "era": "electrical",
    "date": "1910 年",
    "year": 1910,
    "people": "",
    "place": "",
    "summary": "深水炸弹约 1910 年 出现，建立在 算法理论、电子学 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["algorithm", "electronics"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "深水炸弹在 1910 年 前后出现，依托 算法理论 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，深水炸弹仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "深水炸弹把 算法理论 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_nuclearsub",
    "name": "核潜艇",
    "en": "Nuclear Submarine",
    "category": "military",
    "era": "info",
    "date": "1954 年",
    "year": 1954,
    "people": "",
    "place": "",
    "summary": "核潜艇约 1954 年 出现，建立在 潜艇、核裂变反应堆 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["tr_submarine", "ene_nuclear"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "核潜艇在 1954 年 前后出现，依托 潜艇 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，核潜艇仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "核潜艇把 潜艇 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_frigate",
    "name": "护卫舰",
    "en": "Frigate",
    "category": "military",
    "era": "earlymodern",
    "date": "1700 年",
    "year": 1700,
    "people": "",
    "place": "",
    "summary": "护卫舰约 1700 年 出现，建立在 帆船、火炮 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["sail", "cannon"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "近代早期",
        "text": "护卫舰在 1700 年 前后出现，依托 帆船 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，护卫舰仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "护卫舰把 帆船 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_ssbn",
    "name": "战略导弹潜艇",
    "en": "SSBN",
    "category": "military",
    "era": "info",
    "date": "1959 年",
    "year": 1959,
    "people": "",
    "place": "",
    "summary": "战略导弹潜艇约 1959 年 出现，建立在 破冰船 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["tr_icebreaker"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "战略导弹潜艇在 1959 年 前后出现，依托 破冰船 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，战略导弹潜艇仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "战略导弹潜艇把 破冰船 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_bomber",
    "name": "战略轰炸机",
    "en": "Strategic Bomber",
    "category": "military",
    "era": "electrical",
    "date": "1940 年",
    "year": 1940,
    "people": "",
    "place": "",
    "summary": "战略轰炸机约 1940 年 出现，建立在 飞机、航空发动机 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["airplane", "aircraft_engine"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "战略轰炸机在 1940 年 前后出现，依托 飞机 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，战略轰炸机仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "战略轰炸机把 飞机 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_fighter",
    "name": "战斗机",
    "en": "Fighter Aircraft",
    "category": "military",
    "era": "electrical",
    "date": "1915 年",
    "year": 1915,
    "people": "",
    "place": "",
    "summary": "战斗机约 1915 年 出现，建立在 飞机、内燃机、机枪 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["airplane","internal_combustion","mil_machinegun"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "战斗机在 1915 年 前后出现，依托 飞机 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，战斗机仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "战斗机把 飞机 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_aewc",
    "name": "预警机",
    "en": "AWACS",
    "category": "military",
    "era": "info",
    "date": "1970 年",
    "year": 1970,
    "people": "",
    "place": "",
    "summary": "预警机约 1970 年 出现，建立在 飞机、雷达、无线电 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["airplane", "tr_radar2", "radio"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "预警机在 1970 年 前后出现，依托 飞机 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，预警机仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "预警机把 飞机 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_tankerac",
    "name": "空中加油机",
    "en": "Tanker Aircraft",
    "category": "military",
    "era": "electrical",
    "date": "1920 年",
    "year": 1920,
    "people": "",
    "place": "",
    "summary": "空中加油机约 1920 年 出现，建立在 飞机、航空发动机 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["airplane", "aircraft_engine"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "空中加油机在 1920 年 前后出现，依托 飞机 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，空中加油机仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "空中加油机把 飞机 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_transportac",
    "name": "军用运输机",
    "en": "Military Transport",
    "category": "military",
    "era": "electrical",
    "date": "1920 年",
    "year": 1920,
    "people": "",
    "place": "",
    "summary": "军用运输机约 1920 年 成熟，建立在 飞机、航空发动机 之上完成关键突破；其能力延伸到 防御工事、火力打击，并为 空降兵 的发展铺平了道路。",
    "dependsOn": ["airplane", "aircraft_engine"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "军用运输机在 1920 年 前后出现，依托 飞机 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，军用运输机仍是 防御工事 的底层支撑，并持续影响 空降兵。"
      }
    ],
    "significance": "军用运输机把 飞机 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点，并直接催生了 空降兵。"
  },
{
    "id": "mil_airborne",
    "name": "空降兵",
    "en": "Airborne Troops",
    "category": "military",
    "era": "electrical",
    "date": "1940 年",
    "year": 1940,
    "people": "",
    "place": "",
    "summary": "空降兵约 1940 年 出现，建立在 飞机、军用运输机 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["airplane", "mil_transportac"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "空降兵在 1940 年 前后出现，依托 飞机 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，空降兵仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "空降兵把 飞机 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_bodyarmor",
    "name": "防弹衣",
    "en": "Body Armor",
    "category": "military",
    "era": "earlymodern",
    "date": "1500 年",
    "year": 1500,
    "people": "",
    "place": "",
    "summary": "防弹衣约 1500 年 成熟，建立在 板甲、钢铁 之上完成关键突破；其能力延伸到 防御工事、火力打击，并为 凯夫拉护具、三防装备 的发展铺平了道路。",
    "dependsOn": ["mil_plate","steel"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "近代早期",
        "text": "防弹衣在 1500 年 前后出现，依托 板甲 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，防弹衣仍是 防御工事 的底层支撑，并持续影响 凯夫拉护具、三防装备。"
      }
    ],
    "significance": "防弹衣把 板甲 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点，并直接催生了 凯夫拉护具、三防装备。"
  },
{
    "id": "mil_kevlar2",
    "name": "凯夫拉护具",
    "en": "Kevlar Protection",
    "category": "military",
    "era": "info",
    "date": "1970 年",
    "year": 1970,
    "people": "",
    "place": "",
    "summary": "凯夫拉护具约 1970 年 出现，建立在 芳纶、防弹衣 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mat_aramid", "mil_bodyarmor"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "凯夫拉护具在 1970 年 前后出现，依托 芳纶 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，凯夫拉护具仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "凯夫拉护具把 芳纶 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_helmet",
    "name": "钢盔",
    "en": "Combat Helmet",
    "category": "military",
    "era": "electrical",
    "date": "1914 年",
    "year": 1914,
    "people": "",
    "place": "",
    "summary": "钢盔约 1914 年 出现，建立在 钢铁、冲压 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["steel","mfg_stamping"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "钢盔在 1914 年 前后出现，依托 钢铁 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，钢盔仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "钢盔把 钢铁 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_cbrn",
    "name": "三防装备",
    "en": "CBRN Protection",
    "category": "military",
    "era": "electrical",
    "date": "1940 年",
    "year": 1940,
    "people": "",
    "place": "",
    "summary": "三防装备约 1940 年 出现，建立在 化学、防弹衣 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["chemistry", "mil_bodyarmor"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "三防装备在 1940 年 前后出现，依托 化学 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，三防装备仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "三防装备把 化学 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_c4isr",
    "name": "指挥控制系统",
    "en": "C4ISR",
    "category": "military",
    "era": "info",
    "date": "1980 年",
    "year": 1980,
    "people": "",
    "place": "",
    "summary": "指挥控制系统约 1980 年 成熟，建立在 电子计算机、无线电、传感器 之上完成关键突破；其能力延伸到 防御工事、火力打击，并为 军事人工智能 的发展铺平了道路。",
    "dependsOn": ["computer", "radio", "sensor"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "指挥控制系统在 1980 年 前后出现，依托 电子计算机 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，指挥控制系统仍是 防御工事 的底层支撑，并持续影响 军事人工智能。"
      }
    ],
    "significance": "指挥控制系统把 电子计算机 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点，并直接催生了 军事人工智能。"
  },
{
    "id": "mil_satrec",
    "name": "卫星侦察",
    "en": "Satellite Recon",
    "category": "military",
    "era": "info",
    "date": "1960 年",
    "year": 1960,
    "people": "",
    "place": "",
    "summary": "卫星侦察约 1960 年 出现，建立在 人造卫星、雷达 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["satellite", "tr_radar2"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "卫星侦察在 1960 年 前后出现，依托 人造卫星 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，卫星侦察仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "卫星侦察把 人造卫星 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_aweapon",
    "name": "原子弹",
    "en": "Atomic Bomb",
    "category": "military",
    "era": "electrical",
    "date": "1945 年",
    "year": 1945,
    "people": "",
    "place": "",
    "summary": "原子弹约 1945 年 成熟，建立在 核裂变反应堆 之上完成关键突破；其能力延伸到 防御工事、火力打击，并为 氢弹 的发展铺平了道路。",
    "dependsOn": ["ene_nuclear"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "原子弹在 1945 年 前后出现，依托 核裂变反应堆 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，原子弹仍是 防御工事 的底层支撑，并持续影响 氢弹。"
      }
    ],
    "significance": "原子弹把 核裂变反应堆 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点，并直接催生了 氢弹。"
  },
{
    "id": "mil_hweapon",
    "name": "氢弹",
    "en": "Hydrogen Bomb",
    "category": "military",
    "era": "info",
    "date": "1952 年",
    "year": 1952,
    "people": "",
    "place": "",
    "summary": "氢弹在 1952 年 前后成形，依托 原子弹、核裂变反应堆 把 防御工事、火力打击 落到实处，并成为 军事技术 中承上启下的一环，直接支撑了 中子弹 等后续技术。",
    "dependsOn": ["mil_aweapon", "ene_nuclear"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "氢弹在 1952 年 前后出现，依托 原子弹 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，氢弹仍是 防御工事 的底层支撑，并持续影响 中子弹。"
      }
    ],
    "significance": "氢弹把 原子弹 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点，并直接催生了 中子弹。"
  },
{
    "id": "mil_neutron",
    "name": "中子弹",
    "en": "Neutron Bomb",
    "category": "military",
    "era": "info",
    "date": "1960 年",
    "year": 1960,
    "people": "",
    "place": "",
    "summary": "中子弹约 1960 年 出现，建立在 氢弹、核裂变反应堆 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mil_hweapon", "ene_nuclear"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "中子弹在 1960 年 前后出现，依托 氢弹 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，中子弹仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "中子弹把 氢弹 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_triad",
    "name": "核三位一体",
    "en": "Nuclear Triad",
    "category": "military",
    "era": "info",
    "date": "1960 年",
    "year": 1960,
    "people": "",
    "place": "",
    "summary": "核三位一体约 1960 年 出现，建立在 弹道导弹、潜艇 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mil_ballistic", "tr_submarine"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "核三位一体在 1960 年 前后出现，依托 弹道导弹 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，核三位一体仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "核三位一体把 弹道导弹 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_missiledef",
    "name": "导弹防御",
    "en": "Missile Defense",
    "category": "military",
    "era": "info",
    "date": "1980 年",
    "year": 1980,
    "people": "",
    "place": "",
    "summary": "导弹防御约 1980 年 出现，建立在 防空导弹、制导技术 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mil_sam", "mil_guidance"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "导弹防御在 1980 年 前后出现，依托 防空导弹 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，导弹防御仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "导弹防御把 防空导弹 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_cyber",
    "name": "网络战",
    "en": "Cyber Warfare",
    "category": "military",
    "era": "info",
    "date": "1990 年",
    "year": 1990,
    "people": "",
    "place": "",
    "summary": "网络战约 1990 年 出现，建立在 互联网、电子计算机 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["internet", "computer"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "网络战在 1990 年 前后出现，依托 互联网 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，网络战仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "网络战把 互联网 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_psyop",
    "name": "心理战",
    "en": "Psychological Warfare",
    "category": "military",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "心理战约 1900 年 出现，建立在 印刷术、无线电 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["printing","radio"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "心理战在 1900 年 前后出现，依托 印刷术 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，心理战仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "心理战把 印刷术 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_logistics",
    "name": "军事后勤",
    "en": "Military Logistics",
    "category": "military",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "军事后勤约 1800 年 出现，建立在 车、运河 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["cart", "tr_canal"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "军事后勤在 1800 年 前后出现，依托 车 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，军事后勤仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "军事后勤把 车 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_fieldhospital",
    "name": "战地医疗",
    "en": "Field Hospital",
    "category": "military",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "战地医疗约 1800 年 出现，建立在 外科学、草药学 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["bio_surgery", "bio_herb"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "战地医疗在 1800 年 前后出现，依托 外科学 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，战地医疗仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "战地医疗把 外科学 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_engineer",
    "name": "工程兵",
    "en": "Combat Engineer",
    "category": "military",
    "era": "ancient",
    "date": "公元前 2000 年",
    "year": -2000,
    "people": "",
    "place": "",
    "summary": "工程兵约 公元前 2000 年 出现，建立在 砌筑、混凝土 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["masonry", "mat_concrete"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "古代文明",
        "text": "工程兵在 公元前 2000 年 前后出现，依托 砌筑 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，工程兵仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "工程兵把 砌筑 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_mineclear",
    "name": "扫雷",
    "en": "Mine Clearing",
    "category": "military",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "扫雷约 1900 年 出现，建立在 地雷、水雷 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mil_landmine", "mil_seamine"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "扫雷在 1900 年 前后出现，依托 地雷 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，扫雷仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "扫雷把 地雷 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_assaultbridge",
    "name": "舟桥",
    "en": "Assault Bridge",
    "category": "military",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "舟桥约 1800 年 出现，建立在 钢桥、明轮船 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["bld_steelbridge", "tr_paddlesteamer"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "舟桥在 1800 年 前后出现，依托 钢桥 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，舟桥仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "舟桥把 钢桥 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_camo",
    "name": "伪装迷彩",
    "en": "Camouflage",
    "category": "military",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "伪装迷彩在 1800 年 前后成形，依托 光学、编织 把 防御工事、火力打击 落到实处，并成为 军事技术 中承上启下的一环，直接支撑了 假目标 等后续技术。",
    "dependsOn": ["optics", "weaving"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "工业革命",
        "text": "伪装迷彩在 1800 年 前后出现，依托 光学 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，伪装迷彩仍是 防御工事 的底层支撑，并持续影响 假目标。"
      }
    ],
    "significance": "伪装迷彩把 光学 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点，并直接催生了 假目标。"
  },
{
    "id": "mil_decoy",
    "name": "假目标",
    "en": "Decoy",
    "category": "military",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "假目标约 1900 年 出现，建立在 伪装迷彩、侦察技术 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mil_camo", "mil_recon"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "电气时代",
        "text": "假目标在 1900 年 前后出现，依托 伪装迷彩 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，假目标仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "假目标把 伪装迷彩 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_loyalwingman",
    "name": "忠诚僚机",
    "en": "Loyal Wingman",
    "category": "military",
    "era": "intelligent",
    "date": "2020 年",
    "year": 2020,
    "people": "",
    "place": "",
    "summary": "忠诚僚机约 2020 年 出现，建立在 无人机、隐身技术 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["drone","mil_stealth2"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "忠诚僚机在 2020 年 前后出现，依托 无人机 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，忠诚僚机仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "忠诚僚机把 无人机 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_swarm",
    "name": "无人机蜂群",
    "en": "Drone Swarm",
    "category": "military",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "无人机蜂群约 2010 年 出现，建立在 无人机、制导技术 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["drone", "mil_guidance"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "无人机蜂群在 2010 年 前后出现，依托 无人机 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，无人机蜂群仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "无人机蜂群把 无人机 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_aiwar",
    "name": "军事人工智能",
    "en": "Military AI",
    "category": "military",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "军事人工智能约 2010 年 出现，建立在 电子计算机、指挥控制系统 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["computer", "mil_c4isr"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "军事人工智能在 2010 年 前后出现，依托 电子计算机 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，军事人工智能仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "军事人工智能把 电子计算机 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_directedenergy",
    "name": "定向能武器",
    "en": "Directed Energy Weapon",
    "category": "military",
    "era": "info",
    "date": "1980 年",
    "year": 1980,
    "people": "",
    "place": "",
    "summary": "定向能武器在 1980 年 前后成形，依托 激光、电池 把 防御工事、火力打击 落到实处，并成为 军事技术 中承上启下的一环，直接支撑了 激光武器、高功率微波武器 等后续技术。",
    "dependsOn": ["laser","battery"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "定向能武器在 1980 年 前后出现，依托 激光 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，定向能武器仍是 防御工事 的底层支撑，并持续影响 激光武器、高功率微波武器。"
      }
    ],
    "significance": "定向能武器把 激光 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点，并直接催生了 激光武器、高功率微波武器。"
  },
{
    "id": "mil_laserw",
    "name": "激光武器",
    "en": "Laser Weapon",
    "category": "military",
    "era": "info",
    "date": "1980 年",
    "year": 1980,
    "people": "",
    "place": "",
    "summary": "激光武器约 1980 年 出现，建立在 激光制导、定向能武器 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mil_laserguid", "mil_directedenergy"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "激光武器在 1980 年 前后出现，依托 激光制导 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，激光武器仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "激光武器把 激光制导 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_hpm",
    "name": "高功率微波武器",
    "en": "HPM Weapon",
    "category": "military",
    "era": "info",
    "date": "1990 年",
    "year": 1990,
    "people": "",
    "place": "",
    "summary": "高功率微波武器约 1990 年 出现，建立在 电磁学、定向能武器 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["electromagnetism", "mil_directedenergy"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "信息时代",
        "text": "高功率微波武器在 1990 年 前后出现，依托 电磁学 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，高功率微波武器仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "高功率微波武器把 电磁学 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_railgun",
    "name": "电磁轨道炮",
    "en": "Railgun",
    "category": "military",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "电磁轨道炮约 2000 年 出现，建立在 电磁学、超级电容 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["electromagnetism", "ene_supercap"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "电磁轨道炮在 2000 年 前后出现，依托 电磁学 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，电磁轨道炮仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "电磁轨道炮把 电磁学 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_hypersonicm",
    "name": "高超声速导弹",
    "en": "Hypersonic Missile",
    "category": "military",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "高超声速导弹约 2010 年 出现，建立在 弹道导弹、高超声速飞行 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["mil_ballistic", "hypersonic"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "高超声速导弹在 2010 年 前后出现，依托 弹道导弹 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，高超声速导弹仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "高超声速导弹把 弹道导弹 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_glider",
    "name": "高超滑翔体",
    "en": "Hypersonic Glide Vehicle",
    "category": "military",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "高超滑翔体约 2010 年 出现，建立在 高超声速飞行、弹道导弹 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["hypersonic", "mil_ballistic"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "高超滑翔体在 2010 年 前后出现，依托 高超声速飞行 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，高超滑翔体仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "高超滑翔体把 高超声速飞行 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mil_smartmunition",
    "name": "智能弹药",
    "en": "Smart Munition",
    "category": "military",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "智能弹药约 2010 年 出现，建立在 火箭、算法理论、电子学 之上；它把 防御工事、火力打击 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["rocket", "algorithm", "electronics"],
    "enables": [],
    "applications": [
      "防御工事",
      "火力打击",
      "战略威慑"
    ],
    "views": [
      {
        "period": "智能时代",
        "text": "智能弹药在 2010 年 前后出现，依托 火箭 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，智能弹药仍是 防御工事 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "智能弹药把 火箭 与 防御工事 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "newcomen_engine",
    "name": "纽科门大气式蒸汽机",
    "en": "Newcomen Engine",
    "category": "energy",
    "era": "earlymodern",
    "date": "1712 年",
    "year": 1712,
    "people": "",
    "place": "",
    "summary": "纽科门大气式蒸汽机在 1712 年 前后成形，依托 铸铁 把 能量形式 落到实处，并成为 能量形式 中承上启下的一环，直接支撑了 蒸汽机、瓦特分离冷凝器蒸汽机 等后续技术。",
    "dependsOn": ["mat_castiron"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "近代早期",
        "text": "纽科门大气式蒸汽机在 1712 年 前后出现，依托 铸铁 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，纽科门大气式蒸汽机仍是 能量形式 的底层支撑，并持续影响 蒸汽机、瓦特分离冷凝器蒸汽机。"
      }
    ],
    "significance": "纽科门大气式蒸汽机把 铸铁 与 能量形式 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 蒸汽机、瓦特分离冷凝器蒸汽机。"
  },
{
    "id": "watt_engine",
    "name": "瓦特分离冷凝器蒸汽机",
    "en": "Watt Steam Engine",
    "category": "energy",
    "era": "industrial",
    "date": "1769 年",
    "year": 1769,
    "people": "",
    "place": "",
    "summary": "瓦特分离冷凝器蒸汽机在 1769 年 前后成形，依托 纽科门大气式蒸汽机 把 能量形式 落到实处，并成为 能量形式 中承上启下的一环，直接支撑了 蒸汽机、高压蒸汽机 等后续技术。",
    "dependsOn": ["newcomen_engine"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "工业革命",
        "text": "瓦特分离冷凝器蒸汽机在 1769 年 前后出现，依托 纽科门大气式蒸汽机 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，瓦特分离冷凝器蒸汽机仍是 能量形式 的底层支撑，并持续影响 蒸汽机、高压蒸汽机。"
      }
    ],
    "significance": "瓦特分离冷凝器蒸汽机把 纽科门大气式蒸汽机 与 能量形式 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 蒸汽机、高压蒸汽机。"
  },
{
    "id": "boiler",
    "name": "锅炉",
    "en": "Boiler",
    "category": "energy",
    "era": "industrial",
    "date": "1765 年",
    "year": 1765,
    "people": "",
    "place": "",
    "summary": "锅炉在 1765 年 前后成形，依托 铸铁 把 能量形式 落到实处，并成为 能量形式 中承上启下的一环，直接支撑了 蒸汽机、高压蒸汽机、发电厂 等后续技术。",
    "dependsOn": ["mat_castiron"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "工业革命",
        "text": "锅炉在 1765 年 前后出现，依托 铸铁 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，锅炉仍是 能量形式 的底层支撑，并持续影响 蒸汽机、高压蒸汽机、发电厂。"
      }
    ],
    "significance": "锅炉把 铸铁 与 能量形式 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 蒸汽机、高压蒸汽机、发电厂。"
  },
{
    "id": "high_pressure_steam",
    "name": "高压蒸汽机",
    "en": "High-pressure Steam Engine",
    "category": "energy",
    "era": "industrial",
    "date": "1800 年",
    "year": 1800,
    "people": "",
    "place": "",
    "summary": "高压蒸汽机约 1800 年 出现，建立在 瓦特分离冷凝器蒸汽机、锅炉 之上；它把 能量形式 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["watt_engine","boiler"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "工业革命",
        "text": "高压蒸汽机在 1800 年 前后出现，依托 瓦特分离冷凝器蒸汽机 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，高压蒸汽机仍是 能量形式 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "高压蒸汽机把 瓦特分离冷凝器蒸汽机 与 能量形式 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "otto_cycle",
    "name": "四冲程奥托循环",
    "en": "Otto Cycle",
    "category": "energy",
    "era": "industrial",
    "date": "1876 年",
    "year": 1876,
    "people": "",
    "place": "",
    "summary": "四冲程奥托循环在 1876 年 前后成形，依托 铸铁 把 能量形式 落到实处，并成为 能量形式 中承上启下的一环，直接支撑了 内燃机、柴油压燃发动机、化油器 等后续技术。",
    "dependsOn": ["mat_castiron"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "工业革命",
        "text": "四冲程奥托循环在 1876 年 前后出现，依托 铸铁 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，四冲程奥托循环仍是 能量形式 的底层支撑，并持续影响 内燃机、柴油压燃发动机、化油器。"
      }
    ],
    "significance": "四冲程奥托循环把 铸铁 与 能量形式 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 内燃机、柴油压燃发动机、化油器。"
  },
{
    "id": "diesel_engine",
    "name": "柴油压燃发动机",
    "en": "Diesel Engine",
    "category": "energy",
    "era": "industrial",
    "date": "1893 年",
    "year": 1893,
    "people": "",
    "place": "",
    "summary": "柴油压燃发动机约 1893 年 出现，建立在 四冲程奥托循环 之上；它把 能量形式 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["otto_cycle"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "工业革命",
        "text": "柴油压燃发动机在 1893 年 前后出现，依托 四冲程奥托循环 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，柴油压燃发动机仍是 能量形式 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "柴油压燃发动机把 四冲程奥托循环 与 能量形式 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "carburetor",
    "name": "化油器",
    "en": "Carburetor",
    "category": "energy",
    "era": "industrial",
    "date": "1885 年",
    "year": 1885,
    "people": "",
    "place": "",
    "summary": "化油器约 1885 年 出现，建立在 四冲程奥托循环 之上；它把 能量形式 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["otto_cycle"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "工业革命",
        "text": "化油器在 1885 年 前后出现，依托 四冲程奥托循环 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，化油器仍是 能量形式 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "化油器把 四冲程奥托循环 与 能量形式 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "turbocharger",
    "name": "涡轮增压",
    "en": "Turbocharger",
    "category": "energy",
    "era": "electrical",
    "date": "1905 年",
    "year": 1905,
    "people": "",
    "place": "",
    "summary": "涡轮增压约 1905 年 出现，建立在 四冲程奥托循环 之上；它把 能量形式 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["otto_cycle"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "电气时代",
        "text": "涡轮增压在 1905 年 前后出现，依托 四冲程奥托循环 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，涡轮增压仍是 能量形式 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "涡轮增压把 四冲程奥托循环 与 能量形式 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "dynamo",
    "name": "发电机",
    "en": "Dynamo",
    "category": "energy",
    "era": "industrial",
    "date": "1831 年",
    "year": 1831,
    "people": "",
    "place": "",
    "summary": "发电机约 1831 年 成熟，建立在 铸铁 之上完成关键突破；其能力延伸到 能量形式，并为 发电机与电动机、交流发电机 的发展铺平了道路。",
    "dependsOn": ["mat_castiron"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "工业革命",
        "text": "发电机在 1831 年 前后出现，依托 铸铁 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，发电机仍是 能量形式 的底层支撑，并持续影响 发电机与电动机、交流发电机。"
      }
    ],
    "significance": "发电机把 铸铁 与 能量形式 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 发电机与电动机、交流发电机。"
  },
{
    "id": "alternator",
    "name": "交流发电机",
    "en": "Alternator",
    "category": "energy",
    "era": "industrial",
    "date": "1888 年",
    "year": 1888,
    "people": "",
    "place": "",
    "summary": "交流发电机约 1888 年 出现，建立在 发电机 之上；它把 能量形式 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["dynamo"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "工业革命",
        "text": "交流发电机在 1888 年 前后出现，依托 发电机 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，交流发电机仍是 能量形式 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "交流发电机把 发电机 与 能量形式 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "power_plant",
    "name": "发电厂",
    "en": "Power Plant",
    "category": "energy",
    "era": "industrial",
    "date": "1882 年",
    "year": 1882,
    "people": "",
    "place": "",
    "summary": "发电厂约 1882 年 出现，建立在 发电机与电动机、锅炉 之上；它把 能量形式 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["generator","boiler"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "工业革命",
        "text": "发电厂在 1882 年 前后出现，依托 发电机与电动机 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，发电厂仍是 能量形式 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "发电厂把 发电机与电动机 与 能量形式 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  },

{
    "id": "transmission_line",
    "name": "输电线",
    "en": "Transmission Line",
    "category": "energy",
    "era": "industrial",
    "date": "1882 年",
    "year": 1882,
    "people": "",
    "place": "",
    "summary": "输电线在 1882 年 前后成形，依托 电力系统 把 能量形式 落到实处，并成为 能量形式 中承上启下的一环，直接支撑了 电网 等后续技术。",
    "dependsOn": ["electricity"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "工业革命",
        "text": "输电线在 1882 年 前后出现，依托 电力系统 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，输电线仍是 能量形式 的底层支撑，并持续影响 电网。"
      }
    ],
    "significance": "输电线把 电力系统 与 能量形式 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 电网。"
  },
{
    "id": "substation",
    "name": "变电站",
    "en": "Substation",
    "category": "energy",
    "era": "industrial",
    "date": "1883 年",
    "year": 1883,
    "people": "",
    "place": "",
    "summary": "变电站约 1883 年 出现，建立在 电网、电力传输 之上；它把 能量形式 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["power_grid","ene_transmission"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "工业革命",
        "text": "变电站在 1883 年 前后出现，依托 电网 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，变电站仍是 能量形式 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "变电站把 电网 与 能量形式 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "rail_track",
    "name": "铁轨",
    "en": "Rail Track",
    "category": "transport",
    "era": "industrial",
    "date": "1825 年",
    "year": 1825,
    "people": "",
    "place": "",
    "summary": "铁轨约 1825 年 成熟，建立在 铸铁 之上完成关键突破；其能力延伸到 交通运载，并为 铁路、铁路信号 的发展铺平了道路。",
    "dependsOn": ["mat_castiron"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "工业革命",
        "text": "铁轨在 1825 年 前后出现，依托 铸铁 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，铁轨仍是 交通运载 的底层支撑，并持续影响 铁路、铁路信号。"
      }
    ],
    "significance": "铁轨把 铸铁 与 交通运载 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 铁路、铁路信号。"
  },
{
    "id": "railway_signal",
    "name": "铁路信号",
    "en": "Railway Signaling",
    "category": "transport",
    "era": "industrial",
    "date": "1830 年",
    "year": 1830,
    "people": "",
    "place": "",
    "summary": "铁路信号约 1830 年 成熟，建立在 铁轨 之上完成关键突破；其能力延伸到 交通运载，并为 交通信号灯 的发展铺平了道路。",
    "dependsOn": ["rail_track"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "工业革命",
        "text": "铁路信号在 1830 年 前后出现，依托 铁轨 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，铁路信号仍是 交通运载 的底层支撑，并持续影响 交通信号灯。"
      }
    ],
    "significance": "铁路信号把 铁轨 与 交通运载 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 交通信号灯。"
  },
{
    "id": "chassis",
    "name": "底盘",
    "en": "Automobile Chassis",
    "category": "transport",
    "era": "industrial",
    "date": "1886 年",
    "year": 1886,
    "people": "",
    "place": "",
    "summary": "底盘约 1886 年 成熟，建立在 铸铁 之上完成关键突破；其能力延伸到 交通运载，并为 汽车、起落架 的发展铺平了道路。",
    "dependsOn": ["mat_castiron"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "工业革命",
        "text": "底盘在 1886 年 前后出现，依托 铸铁 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，底盘仍是 交通运载 的底层支撑，并持续影响 汽车、起落架。"
      }
    ],
    "significance": "底盘把 铸铁 与 交通运载 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 汽车、起落架。"
  },
{
    "id": "gearbox",
    "name": "变速箱",
    "en": "Gearbox",
    "category": "transport",
    "era": "industrial",
    "date": "1890 年",
    "year": 1890,
    "people": "",
    "place": "",
    "summary": "变速箱约 1890 年 成熟，建立在 内燃机 之上完成关键突破；其能力延伸到 交通运载，并为 汽车电气系统 的发展铺平了道路。",
    "dependsOn": ["internal_combustion"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "工业革命",
        "text": "变速箱在 1890 年 前后出现，依托 内燃机 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，变速箱仍是 交通运载 的底层支撑，并持续影响 汽车电气系统。"
      }
    ],
    "significance": "变速箱把 内燃机 与 交通运载 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 汽车电气系统。"
  },

{
    "id": "auto_electrics",
    "name": "汽车电气系统",
    "en": "Automotive Electrical System",
    "category": "transport",
    "era": "industrial",
    "date": "1890 年",
    "year": 1890,
    "people": "",
    "place": "",
    "summary": "汽车电气系统约 1890 年 出现，建立在 电动机、变速箱 之上；它把 交通运载 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["electric_motor","gearbox"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "工业革命",
        "text": "汽车电气系统在 1890 年 前后出现，依托 电动机 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，汽车电气系统仍是 交通运载 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "汽车电气系统把 电动机 与 交通运载 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "aerodynamics",
    "name": "空气动力学",
    "en": "Aerodynamics",
    "category": "transport",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "空气动力学在 1900 年 前后成形，依托 流体力学 把 交通运载 落到实处，并成为 交通运载 中承上启下的一环，直接支撑了 飞机、飞行控制、超燃冲压发动机 等后续技术。",
    "dependsOn": ["fluid_mech"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "电气时代",
        "text": "空气动力学在 1900 年 前后出现，依托 流体力学 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，空气动力学仍是 交通运载 的底层支撑，并持续影响 飞机、飞行控制、超燃冲压发动机。"
      }
    ],
    "significance": "空气动力学把 流体力学 与 交通运载 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 飞机、飞行控制、超燃冲压发动机。"
  },
{
    "id": "aircraft_engine",
    "name": "航空发动机",
    "en": "Aircraft Engine",
    "category": "energy",
    "era": "electrical",
    "date": "1903 年",
    "year": 1903,
    "people": "",
    "place": "",
    "summary": "航空发动机在 1903 年 前后成形，依托 内燃机 把 能量形式 落到实处，并成为 能量形式 中承上启下的一环，直接支撑了 飞机、旋翼机、战略轰炸机 等后续技术。",
    "dependsOn": ["internal_combustion"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "电气时代",
        "text": "航空发动机在 1903 年 前后出现，依托 内燃机 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，航空发动机仍是 能量形式 的底层支撑，并持续影响 飞机、旋翼机、战略轰炸机。"
      }
    ],
    "significance": "航空发动机把 内燃机 与 能量形式 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 飞机、旋翼机、战略轰炸机。"
  },
{
    "id": "landing_gear",
    "name": "起落架",
    "en": "Landing Gear",
    "category": "transport",
    "era": "electrical",
    "date": "1903 年",
    "year": 1903,
    "people": "",
    "place": "",
    "summary": "起落架在 1903 年 前后成形，依托 底盘 把 交通运载 落到实处，并成为 交通运载 中承上启下的一环，直接支撑了 飞机 等后续技术。",
    "dependsOn": ["chassis"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "电气时代",
        "text": "起落架在 1903 年 前后出现，依托 底盘 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，起落架仍是 交通运载 的底层支撑，并持续影响 飞机。"
      }
    ],
    "significance": "起落架把 底盘 与 交通运载 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 飞机。"
  },
{
    "id": "flight_control",
    "name": "飞行控制",
    "en": "Flight Control",
    "category": "transport",
    "era": "electrical",
    "date": "1910 年",
    "year": 1910,
    "people": "",
    "place": "",
    "summary": "飞行控制约 1910 年 出现，建立在 空气动力学 之上；它把 交通运载 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["aerodynamics"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "电气时代",
        "text": "飞行控制在 1910 年 前后出现，依托 空气动力学 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，飞行控制仍是 交通运载 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "飞行控制把 空气动力学 与 交通运载 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "multicopter",
    "name": "多旋翼构型",
    "en": "Multicopter",
    "category": "transport",
    "era": "intelligent",
    "date": "2005 年",
    "year": 2005,
    "people": "",
    "place": "",
    "summary": "多旋翼构型约 2005 年 成熟，建立在 电动机、微处理器 之上完成关键突破；其能力延伸到 交通运载，并为 无人机、无人机测绘、飞控系统 的发展铺平了道路。",
    "dependsOn": ["electric_motor","inf_microprocessor"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "智能时代",
        "text": "多旋翼构型在 2005 年 前后出现，依托 电动机 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，多旋翼构型仍是 交通运载 的底层支撑，并持续影响 无人机、无人机测绘、飞控系统。"
      }
    ],
    "significance": "多旋翼构型把 电动机 与 交通运载 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 无人机、无人机测绘、飞控系统。"
  },
{
    "id": "uav_controller",
    "name": "飞控系统",
    "en": "UAV Flight Controller",
    "category": "transport",
    "era": "intelligent",
    "date": "2005 年",
    "year": 2005,
    "people": "",
    "place": "",
    "summary": "飞控系统在 2005 年 前后成形，依托 多旋翼构型、微处理器 把 交通运载 落到实处，并成为 交通运载 中承上启下的一环，直接支撑了 无人机、无人机测绘、图传链路 等后续技术。",
    "dependsOn": ["multicopter","inf_microprocessor"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "智能时代",
        "text": "飞控系统在 2005 年 前后出现，依托 多旋翼构型 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，飞控系统仍是 交通运载 的底层支撑，并持续影响 无人机、无人机测绘、图传链路。"
      }
    ],
    "significance": "飞控系统把 多旋翼构型 与 交通运载 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 无人机、无人机测绘、图传链路。"
  },
{
    "id": "fpv_link",
    "name": "图传链路",
    "en": "FPV Video Link",
    "category": "transport",
    "era": "intelligent",
    "date": "2010 年",
    "year": 2010,
    "people": "",
    "place": "",
    "summary": "图传链路在 2010 年 前后成形，依托 无线电、飞控系统 把 交通运载 落到实处，并成为 交通运载 中承上启下的一环，直接支撑了 无人机 等后续技术。",
    "dependsOn": ["radio","uav_controller"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "智能时代",
        "text": "图传链路在 2010 年 前后出现，依托 无线电 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，图传链路仍是 交通运载 的底层支撑，并持续影响 无人机。"
      }
    ],
    "significance": "图传链路把 无线电 与 交通运载 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 无人机。"
  },
{
    "id": "vacuum_tube",
    "name": "电子管",
    "en": "Vacuum Tube",
    "category": "info",
    "era": "electrical",
    "date": "1904 年",
    "year": 1904,
    "people": "",
    "place": "",
    "summary": "电子管约 1904 年 成熟，建立在 玻璃 之上完成关键突破；其能力延伸到 信息通信，并为 电子计算机、电子管计算机 的发展铺平了道路。",
    "dependsOn": ["mat_glass"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "电气时代",
        "text": "电子管在 1904 年 前后出现，依托 玻璃 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，电子管仍是 信息通信 的底层支撑，并持续影响 电子计算机、电子管计算机。"
      }
    ],
    "significance": "电子管把 玻璃 与 信息通信 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 电子计算机、电子管计算机。"
  },
{
    "id": "eniac",
    "name": "电子管计算机",
    "en": "Vacuum-tube Computer",
    "category": "info",
    "era": "electrical",
    "date": "1946 年",
    "year": 1946,
    "people": "",
    "place": "",
    "summary": "电子管计算机约 1946 年 成熟，建立在 电子管 之上完成关键突破；其能力延伸到 信息通信，并为 电子计算机 的发展铺平了道路。",
    "dependsOn": ["vacuum_tube"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "电气时代",
        "text": "电子管计算机在 1946 年 前后出现，依托 电子管 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，电子管计算机仍是 信息通信 的底层支撑，并持续影响 电子计算机。"
      }
    ],
    "significance": "电子管计算机把 电子管 与 信息通信 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 电子计算机。"
  },
{
    "id": "transistor_computer",
    "name": "晶体管计算机",
    "en": "Transistor Computer",
    "category": "info",
    "era": "info",
    "date": "1960 年",
    "year": 1960,
    "people": "",
    "place": "",
    "summary": "晶体管计算机约 1960 年 出现，建立在 晶体管 之上；它把 信息通信 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["transistor"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "信息时代",
        "text": "晶体管计算机在 1960 年 前后出现，依托 晶体管 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，晶体管计算机仍是 信息通信 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "晶体管计算机把 晶体管 与 信息通信 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "microcomputer",
    "name": "微处理器个人计算机",
    "en": "Microprocessor Personal Computer",
    "category": "info",
    "era": "info",
    "date": "1975 年",
    "year": 1975,
    "people": "",
    "place": "",
    "summary": "微处理器个人计算机约 1975 年 出现，建立在 微处理器、集成电路 之上；它把 信息通信 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["inf_microprocessor","ic"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "信息时代",
        "text": "微处理器个人计算机在 1975 年 前后出现，依托 微处理器 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，微处理器个人计算机仍是 信息通信 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "微处理器个人计算机把 微处理器 与 信息通信 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "soc",
    "name": "手机系统级芯片",
    "en": "Mobile SoC",
    "category": "info",
    "era": "intelligent",
    "date": "2007 年",
    "year": 2007,
    "people": "",
    "place": "",
    "summary": "手机系统级芯片在 2007 年 前后成形，依托 微处理器、集成电路 把 信息通信 落到实处，并成为 信息通信 中承上启下的一环，直接支撑了 智能手机、边缘智能、物联网 等后续技术。",
    "dependsOn": ["inf_microprocessor","ic"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "智能时代",
        "text": "手机系统级芯片在 2007 年 前后出现，依托 微处理器 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，手机系统级芯片仍是 信息通信 的底层支撑，并持续影响 智能手机、边缘智能、物联网。"
      }
    ],
    "significance": "手机系统级芯片把 微处理器 与 信息通信 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 智能手机、边缘智能、物联网。"
  },
{
    "id": "mobile_os",
    "name": "移动操作系统",
    "en": "Mobile Operating System",
    "category": "info",
    "era": "intelligent",
    "date": "2007 年",
    "year": 2007,
    "people": "",
    "place": "",
    "summary": "移动操作系统在 2007 年 前后成形，依托 操作系统 把 信息通信 落到实处，并成为 信息通信 中承上启下的一环，直接支撑了 智能手机 等后续技术。",
    "dependsOn": ["inf_os"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "智能时代",
        "text": "移动操作系统在 2007 年 前后出现，依托 操作系统 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，移动操作系统仍是 信息通信 的底层支撑，并持续影响 智能手机。"
      }
    ],
    "significance": "移动操作系统把 操作系统 与 信息通信 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 智能手机。"
  },
{
    "id": "camera_module",
    "name": "摄像头模组",
    "en": "Camera Module",
    "category": "info",
    "era": "intelligent",
    "date": "2007 年",
    "year": 2007,
    "people": "",
    "place": "",
    "summary": "摄像头模组约 2007 年 成熟，建立在 玻璃 之上完成关键突破；其能力延伸到 信息通信，并为 智能手机 的发展铺平了道路。",
    "dependsOn": ["mat_glass"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "智能时代",
        "text": "摄像头模组在 2007 年 前后出现，依托 玻璃 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，摄像头模组仍是 信息通信 的底层支撑，并持续影响 智能手机。"
      }
    ],
    "significance": "摄像头模组把 玻璃 与 信息通信 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 智能手机。"
  },
{
    "id": "packet_switch",
    "name": "分组交换",
    "en": "Packet Switching",
    "category": "info",
    "era": "info",
    "date": "1969 年",
    "year": 1969,
    "people": "",
    "place": "",
    "summary": "分组交换在 1969 年 前后成形，依托 晶体管 把 信息通信 落到实处，并成为 信息通信 中承上启下的一环，直接支撑了 互联网、TCP/IP协议 等后续技术。",
    "dependsOn": ["transistor"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "信息时代",
        "text": "分组交换在 1969 年 前后出现，依托 晶体管 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，分组交换仍是 信息通信 的底层支撑，并持续影响 互联网、TCP/IP协议。"
      }
    ],
    "significance": "分组交换把 晶体管 与 信息通信 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 互联网、TCP/IP协议。"
  },
{
    "id": "tcpip",
    "name": "TCP/IP协议",
    "en": "TCP/IP",
    "category": "info",
    "era": "info",
    "date": "1981 年",
    "year": 1981,
    "people": "",
    "place": "",
    "summary": "TCP/IP协议约 1981 年 成熟，建立在 分组交换 之上完成关键突破；其能力延伸到 信息通信，并为 Wi-Fi、超文本传输协议 的发展铺平了道路。",
    "dependsOn": ["packet_switch"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "信息时代",
        "text": "TCP/IP协议在 1981 年 前后出现，依托 分组交换 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，TCP/IP协议仍是 信息通信 的底层支撑，并持续影响 Wi-Fi、超文本传输协议。"
      }
    ],
    "significance": "TCP/IP协议把 分组交换 与 信息通信 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 Wi-Fi、超文本传输协议。"
  },
{
    "id": "optic_fiber",
    "name": "光纤",
    "en": "Optical Fiber",
    "category": "info",
    "era": "info",
    "date": "1970 年",
    "year": 1970,
    "people": "",
    "place": "",
    "summary": "光纤约 1970 年 出现，建立在 玻璃 之上；它把 信息通信 变成可稳定复现的能力，是 信息通信 中从经验走向方法的关键一步。",
    "dependsOn": ["mat_glass"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "信息时代",
        "text": "光纤在 1970 年 前后出现，依托 玻璃 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，光纤仍是 信息通信 的底层支撑，并作为 信息通信 的基础能力持续发挥作用。"
      }
    ],
    "significance": "光纤把 玻璃 与 信息通信 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "http",
    "name": "超文本传输协议",
    "en": "HTTP/HTML",
    "category": "info",
    "era": "info",
    "date": "1991 年",
    "year": 1991,
    "people": "",
    "place": "",
    "summary": "超文本传输协议约 1991 年 成熟，建立在 互联网、TCP/IP协议 之上完成关键突破；其能力延伸到 信息通信，并为 万维网、万维网服务器 的发展铺平了道路。",
    "dependsOn": ["internet","tcpip"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "信息时代",
        "text": "超文本传输协议在 1991 年 前后出现，依托 互联网 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，超文本传输协议仍是 信息通信 的底层支撑，并持续影响 万维网、万维网服务器。"
      }
    ],
    "significance": "超文本传输协议把 互联网 与 信息通信 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 万维网、万维网服务器。"
  },

{
    "id": "web_server",
    "name": "万维网服务器",
    "en": "Web Server",
    "category": "info",
    "era": "info",
    "date": "1991 年",
    "year": 1991,
    "people": "",
    "place": "",
    "summary": "万维网服务器约 1991 年 成熟，建立在 超文本传输协议 之上完成关键突破；其能力延伸到 信息通信，并为 万维网 的发展铺平了道路。",
    "dependsOn": ["http"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "信息时代",
        "text": "万维网服务器在 1991 年 前后出现，依托 超文本传输协议 解决了 信息通信 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，万维网服务器仍是 信息通信 的底层支撑，并持续影响 万维网。"
      }
    ],
    "significance": "万维网服务器把 超文本传输协议 与 信息通信 连接起来，是 信息通信 中从「可能」走向「可用」的关键节点，并直接催生了 万维网。"
  },
{
    "id": "recombinant_dna",
    "name": "重组DNA技术",
    "en": "Recombinant DNA",
    "category": "life",
    "era": "info",
    "date": "1973 年",
    "year": 1973,
    "people": "",
    "place": "",
    "summary": "重组DNA技术约 1973 年 出现，建立在 既有技术积累 之上；它把 生命与医疗 变成可稳定复现的能力，是 生命与医疗 中从经验走向方法的关键一步。",
    "dependsOn": ["bio_ct","inf_pl_c"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "信息时代",
        "text": "重组DNA技术在 1973 年 前后出现，依托 生命与医疗 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，重组DNA技术仍是 生命与医疗 的底层支撑，并作为 生命与医疗 的基础能力持续发挥作用。"
      }
    ],
    "significance": "重组DNA技术把 生命与医疗 与 生命与医疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "gene_cloning",
    "name": "基因克隆",
    "en": "Gene Cloning",
    "category": "life",
    "era": "info",
    "date": "1973 年",
    "year": 1973,
    "people": "",
    "place": "",
    "summary": "基因克隆约 1973 年 成熟，建立在 重组DNA技术 之上完成关键突破；其能力延伸到 生命与医疗，并为 基因工程 的发展铺平了道路。",
    "dependsOn": ["recombinant_dna"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "信息时代",
        "text": "基因克隆在 1973 年 前后出现，依托 重组DNA技术 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，基因克隆仍是 生命与医疗 的底层支撑，并持续影响 基因工程。"
      }
    ],
    "significance": "基因克隆把 重组DNA技术 与 生命与医疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 基因工程。"
  },
{
    "id": "shield_tbm",
    "name": "盾构机",
    "en": "Tunnel Boring Machine",
    "category": "build",
    "era": "industrial",
    "date": "1843 年",
    "year": 1843,
    "people": "",
    "place": "",
    "summary": "盾构机在 1843 年 前后成形，依托 铸铁、蒸汽机 把 建筑建造 落到实处，并成为 建筑建造 中承上启下的一环，直接支撑了 隧道与地下工程、真空管道交通、地下城 等后续技术。",
    "dependsOn": ["mat_castiron","steam_engine"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "工业革命",
        "text": "盾构机在 1843 年 前后出现，依托 铸铁 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，盾构机仍是 建筑建造 的底层支撑，并持续影响 隧道与地下工程、真空管道交通、地下城。"
      }
    ],
    "significance": "盾构机把 铸铁 与 建筑建造 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 隧道与地下工程、真空管道交通、地下城。"
  },
{
    "id": "drill_blast",
    "name": "钻爆法",
    "en": "Drill and Blast",
    "category": "build",
    "era": "industrial",
    "date": "1843 年",
    "year": 1843,
    "people": "",
    "place": "",
    "summary": "钻爆法约 1843 年 成熟，建立在 火药 之上完成关键突破；其能力延伸到 建筑建造，并为 隧道与地下工程 的发展铺平了道路。",
    "dependsOn": ["gunpowder"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "工业革命",
        "text": "钻爆法在 1843 年 前后出现，依托 火药 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，钻爆法仍是 建筑建造 的底层支撑，并持续影响 隧道与地下工程。"
      }
    ],
    "significance": "钻爆法把 火药 与 建筑建造 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点，并直接催生了 隧道与地下工程。"
  },
{
    "id": "tunnel_lining",
    "name": "隧道衬砌",
    "en": "Tunnel Lining",
    "category": "build",
    "era": "industrial",
    "date": "1850 年",
    "year": 1850,
    "people": "",
    "place": "",
    "summary": "隧道衬砌约 1850 年 出现，建立在 水泥、铸铁 之上；它把 建筑建造 变成可稳定复现的能力，是 建筑建造 中从经验走向方法的关键一步。",
    "dependsOn": ["mat_cement","mat_castiron"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "工业革命",
        "text": "隧道衬砌在 1850 年 前后出现，依托 水泥 解决了 建筑建造 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，隧道衬砌仍是 建筑建造 的底层支撑，并作为 建筑建造 的基础能力持续发挥作用。"
      }
    ],
    "significance": "隧道衬砌把 水泥 与 建筑建造 连接起来，是 建筑建造 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "rifling",
    "name": "线膛",
    "en": "Rifling",
    "category": "military",
    "era": "medieval",
    "date": "1490 年",
    "year": 1490,
    "people": "",
    "place": "",
    "summary": "线膛在 1490 年 前后成形，依托 火药 把 军事技术 落到实处，并成为 军事技术 中承上启下的一环，直接支撑了 后膛装填 等后续技术。",
    "dependsOn": ["gunpowder"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "中世纪",
        "text": "线膛在 1490 年 前后出现，依托 火药 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，线膛仍是 军事技术 的底层支撑，并持续影响 后膛装填。"
      }
    ],
    "significance": "线膛把 火药 与 军事技术 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点，并直接催生了 后膛装填。"
  },
{
    "id": "breech_loading",
    "name": "后膛装填",
    "en": "Breech-loading",
    "category": "military",
    "era": "industrial",
    "date": "1850 年",
    "year": 1850,
    "people": "",
    "place": "",
    "summary": "后膛装填约 1850 年 成熟，建立在 线膛 之上完成关键突破；其能力延伸到 军事技术，并为 火炮反后坐装置 的发展铺平了道路。",
    "dependsOn": ["rifling"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "工业革命",
        "text": "后膛装填在 1850 年 前后出现，依托 线膛 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，后膛装填仍是 军事技术 的底层支撑，并持续影响 火炮反后坐装置。"
      }
    ],
    "significance": "后膛装填把 线膛 与 军事技术 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点，并直接催生了 火炮反后坐装置。"
  },
{
    "id": "recoil_mechanism",
    "name": "火炮反后坐装置",
    "en": "Recoil Mechanism",
    "category": "military",
    "era": "electrical",
    "date": "1900 年",
    "year": 1900,
    "people": "",
    "place": "",
    "summary": "火炮反后坐装置约 1900 年 出现，建立在 后膛装填 之上；它把 军事技术 变成可稳定复现的能力，是 军事技术 中从经验走向方法的关键一步。",
    "dependsOn": ["breech_loading"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "电气时代",
        "text": "火炮反后坐装置在 1900 年 前后出现，依托 后膛装填 解决了 军事技术 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，火炮反后坐装置仍是 军事技术 的底层支撑，并作为 军事技术 的基础能力持续发挥作用。"
      }
    ],
    "significance": "火炮反后坐装置把 后膛装填 与 军事技术 连接起来，是 军事技术 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "liquid_rocket",
    "name": "液体火箭发动机",
    "en": "Liquid-fuel Rocket",
    "category": "transport",
    "era": "electrical",
    "date": "1926 年",
    "year": 1926,
    "people": "",
    "place": "",
    "summary": "液体火箭发动机在 1926 年 前后成形，依托 火箭发动机 把 交通运载 落到实处，并成为 交通运载 中承上启下的一环，直接支撑了 火箭、多级火箭、火箭制导 等后续技术。",
    "dependsOn": ["ene_rocketengine"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "电气时代",
        "text": "液体火箭发动机在 1926 年 前后出现，依托 火箭发动机 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，液体火箭发动机仍是 交通运载 的底层支撑，并持续影响 火箭、多级火箭、火箭制导。"
      }
    ],
    "significance": "液体火箭发动机把 火箭发动机 与 交通运载 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 火箭、多级火箭、火箭制导。"
  },
{
    "id": "multistage_rocket",
    "name": "多级火箭",
    "en": "Multistage Rocket",
    "category": "transport",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "people": "",
    "place": "",
    "summary": "多级火箭约 1950 年 出现，建立在 液体火箭发动机 之上；它把 交通运载 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["liquid_rocket"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "信息时代",
        "text": "多级火箭在 1950 年 前后出现，依托 液体火箭发动机 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，多级火箭仍是 交通运载 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "多级火箭把 液体火箭发动机 与 交通运载 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "rocket_guidance",
    "name": "火箭制导",
    "en": "Rocket Guidance",
    "category": "transport",
    "era": "info",
    "date": "1950 年",
    "year": 1950,
    "people": "",
    "place": "",
    "summary": "火箭制导约 1950 年 出现，建立在 液体火箭发动机 之上；它把 交通运载 变成可稳定复现的能力，是 交通运载 中从经验走向方法的关键一步。",
    "dependsOn": ["liquid_rocket"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "信息时代",
        "text": "火箭制导在 1950 年 前后出现，依托 液体火箭发动机 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，火箭制导仍是 交通运载 的底层支撑，并作为 交通运载 的基础能力持续发挥作用。"
      }
    ],
    "significance": "火箭制导把 液体火箭发动机 与 交通运载 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "scan_mirror",
    "name": "扫描振镜",
    "en": "Scanning Mirror",
    "category": "transport",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "扫描振镜在 2000 年 前后成形，依托 激光器、伺服系统 把 交通运载 落到实处，并成为 交通运载 中承上启下的一环，直接支撑了 激光雷达 等后续技术。",
    "dependsOn": ["lasers","mfg_servo"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "智能时代",
        "text": "扫描振镜在 2000 年 前后出现，依托 激光器 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，扫描振镜仍是 交通运载 的底层支撑，并持续影响 激光雷达。"
      }
    ],
    "significance": "扫描振镜把 激光器 与 交通运载 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 激光雷达。"
  },
{
    "id": "tof_ranging",
    "name": "飞行时间测距",
    "en": "Time-of-flight Ranging",
    "category": "transport",
    "era": "intelligent",
    "date": "2000 年",
    "year": 2000,
    "people": "",
    "place": "",
    "summary": "飞行时间测距约 2000 年 成熟，建立在 激光器 之上完成关键突破；其能力延伸到 交通运载，并为 激光雷达 的发展铺平了道路。",
    "dependsOn": ["lasers"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "智能时代",
        "text": "飞行时间测距在 2000 年 前后出现，依托 激光器 解决了 交通运载 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，飞行时间测距仍是 交通运载 的底层支撑，并持续影响 激光雷达。"
      }
    ],
    "significance": "飞行时间测距把 激光器 与 交通运载 连接起来，是 交通运载 中从「可能」走向「可用」的关键节点，并直接催生了 激光雷达。"
  },
{
    "id": "fdm",
    "name": "熔融沉积成型",
    "en": "FDM",
    "category": "manufact",
    "era": "info",
    "date": "1988 年",
    "year": 1988,
    "people": "",
    "place": "",
    "summary": "熔融沉积成型约 1988 年 出现，建立在 3D 打印、增材制造 之上；它把 制造与工具 变成可稳定复现的能力，是 制造与工具 中从经验走向方法的关键一步。",
    "dependsOn": ["mfg_3dp","mfg_additive"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "信息时代",
        "text": "熔融沉积成型在 1988 年 前后出现，依托 3D 打印 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，熔融沉积成型仍是 制造与工具 的底层支撑，并作为 制造与工具 的基础能力持续发挥作用。"
      }
    ],
    "significance": "熔融沉积成型把 3D 打印 与 制造与工具 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "sla",
    "name": "光固化成型",
    "en": "SLA",
    "category": "manufact",
    "era": "info",
    "date": "1986 年",
    "year": 1986,
    "people": "",
    "place": "",
    "summary": "光固化成型约 1986 年 出现，建立在 激光器 之上；它把 制造与工具 变成可稳定复现的能力，是 制造与工具 中从经验走向方法的关键一步。",
    "dependsOn": ["lasers"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "信息时代",
        "text": "光固化成型在 1986 年 前后出现，依托 激光器 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，光固化成型仍是 制造与工具 的底层支撑，并作为 制造与工具 的基础能力持续发挥作用。"
      }
    ],
    "significance": "光固化成型把 激光器 与 制造与工具 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "sls",
    "name": "选择性激光烧结",
    "en": "SLS",
    "category": "manufact",
    "era": "info",
    "date": "1990 年",
    "year": 1990,
    "people": "",
    "place": "",
    "summary": "选择性激光烧结约 1990 年 出现，建立在 激光器 之上；它把 制造与工具 变成可稳定复现的能力，是 制造与工具 中从经验走向方法的关键一步。",
    "dependsOn": ["lasers"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "信息时代",
        "text": "选择性激光烧结在 1990 年 前后出现，依托 激光器 解决了 制造与工具 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，选择性激光烧结仍是 制造与工具 的底层支撑，并作为 制造与工具 的基础能力持续发挥作用。"
      }
    ],
    "significance": "选择性激光烧结把 激光器 与 制造与工具 连接起来，是 制造与工具 中从「可能」走向「可用」的关键节点。"
  },
{
    "id": "mower_deck",
    "name": "割草执行机构",
    "en": "Cutting Deck",
    "category": "life",
    "era": "intelligent",
    "date": "2015 年",
    "year": 2015,
    "people": "",
    "place": "",
    "summary": "割草执行机构约 2015 年 成熟，建立在 电动机、电池 之上完成关键突破；其能力延伸到 生命与医疗，并为 智能割草机器人 的发展铺平了道路。",
    "dependsOn": ["electric_motor","battery"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "智能时代",
        "text": "割草执行机构在 2015 年 前后出现，依托 电动机 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，割草执行机构仍是 生命与医疗 的底层支撑，并持续影响 智能割草机器人。"
      }
    ],
    "significance": "割草执行机构把 电动机 与 生命与医疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 智能割草机器人。"
  },
{
    "id": "mower_nav",
    "name": "自主导航定位",
    "en": "Autonomous Mowing Navigation",
    "category": "life",
    "era": "intelligent",
    "date": "2015 年",
    "year": 2015,
    "people": "",
    "place": "",
    "summary": "自主导航定位约 2015 年 成熟，建立在 家用扫地机器人、激光雷达 之上完成关键突破；其能力延伸到 生命与医疗，并为 智能割草机器人 的发展铺平了道路。",
    "dependsOn": ["robot_vacuum","lidar"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "智能时代",
        "text": "自主导航定位在 2015 年 前后出现，依托 家用扫地机器人 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，自主导航定位仍是 生命与医疗 的底层支撑，并持续影响 智能割草机器人。"
      }
    ],
    "significance": "自主导航定位把 家用扫地机器人 与 生命与医疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 智能割草机器人。"
  },
{
    "id": "vacuum_deck",
    "name": "吸尘执行机构",
    "en": "Vacuum Deck",
    "category": "life",
    "era": "intelligent",
    "date": "2002 年",
    "year": 2002,
    "people": "",
    "place": "",
    "summary": "吸尘执行机构在 2002 年 前后成形，依托 电动机、电池 把 生命与医疗 落到实处，并成为 生命与医疗 中承上启下的一环，直接支撑了 家用扫地机器人 等后续技术。",
    "dependsOn": ["electric_motor","battery"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "智能时代",
        "text": "吸尘执行机构在 2002 年 前后出现，依托 电动机 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，吸尘执行机构仍是 生命与医疗 的底层支撑，并持续影响 家用扫地机器人。"
      }
    ],
    "significance": "吸尘执行机构把 电动机 与 生命与医疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 家用扫地机器人。"
  },
{
    "id": "slam_nav",
    "name": "同步定位与建图",
    "en": "SLAM Navigation",
    "category": "life",
    "era": "intelligent",
    "date": "2002 年",
    "year": 2002,
    "people": "",
    "place": "",
    "summary": "同步定位与建图在 2002 年 前后成形，依托 微处理器 把 生命与医疗 落到实处，并成为 生命与医疗 中承上启下的一环，直接支撑了 家用扫地机器人 等后续技术。",
    "dependsOn": ["inf_microprocessor"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "智能时代",
        "text": "同步定位与建图在 2002 年 前后出现，依托 微处理器 解决了 生命与医疗 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，同步定位与建图仍是 生命与医疗 的底层支撑，并持续影响 家用扫地机器人。"
      }
    ],
    "significance": "同步定位与建图把 微处理器 与 生命与医疗 连接起来，是 生命与医疗 中从「可能」走向「可用」的关键节点，并直接催生了 家用扫地机器人。"
  },
{
    "id": "jet_compressor",
    "name": "压气机",
    "en": "Jet Compressor",
    "category": "energy",
    "era": "electrical",
    "date": "1937 年",
    "year": 1937,
    "people": "",
    "place": "",
    "summary": "压气机在 1937 年 前后成形，依托 铸铁 把 能量形式 落到实处，并成为 能量形式 中承上启下的一环，直接支撑了 喷气发动机、涡轮段 等后续技术。",
    "dependsOn": ["mat_castiron"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "电气时代",
        "text": "压气机在 1937 年 前后出现，依托 铸铁 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，压气机仍是 能量形式 的底层支撑，并持续影响 喷气发动机、涡轮段。"
      }
    ],
    "significance": "压气机把 铸铁 与 能量形式 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 喷气发动机、涡轮段。"
  },
{
    "id": "jet_turbine",
    "name": "涡轮段",
    "en": "Turbine Section",
    "category": "energy",
    "era": "electrical",
    "date": "1937 年",
    "year": 1937,
    "people": "",
    "place": "",
    "summary": "涡轮段在 1937 年 前后成形，依托 压气机 把 能量形式 落到实处，并成为 能量形式 中承上启下的一环，直接支撑了 喷气发动机、加力燃烧室 等后续技术。",
    "dependsOn": ["jet_compressor"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "电气时代",
        "text": "涡轮段在 1937 年 前后出现，依托 压气机 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，涡轮段仍是 能量形式 的底层支撑，并持续影响 喷气发动机、加力燃烧室。"
      }
    ],
    "significance": "涡轮段把 压气机 与 能量形式 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点，并直接催生了 喷气发动机、加力燃烧室。"
  },
{
    "id": "afterburner",
    "name": "加力燃烧室",
    "en": "Afterburner",
    "category": "energy",
    "era": "electrical",
    "date": "1940 年",
    "year": 1940,
    "people": "",
    "place": "",
    "summary": "加力燃烧室约 1940 年 出现，建立在 涡轮段 之上；它把 能量形式 变成可稳定复现的能力，是 能量形式 中从经验走向方法的关键一步。",
    "dependsOn": ["jet_turbine"],
    "enables": [],
    "applications": [],
    "views": [
      {
        "period": "电气时代",
        "text": "加力燃烧室在 1940 年 前后出现，依托 涡轮段 解决了 能量形式 中的具体难题，使相关能力第一次可被稳定复现。"
      },
      {
        "period": "当代",
        "text": "今天，加力燃烧室仍是 能量形式 的底层支撑，并作为 能量形式 的基础能力持续发挥作用。"
      }
    ],
    "significance": "加力燃烧室把 涡轮段 与 能量形式 连接起来，是 能量形式 中从「可能」走向「可用」的关键节点。"
  }
,
  {
    "id": "hearth_stove",
    "name": "火塘与灶",
    "en": "Hearth and Stove",
    "category": "energy",
    "era": "prehistoric",
    "date": "约 40 万年前",
    "year": -400000,
    "people": "早期人类",
    "place": "全球",
    "summary": "固定坑灶与石砌火塘的出现，把天然火源固化为可控的烹饪、取暖与热处理场所，是用火从「借用自然」走向「受控利用」的关键一跃，直接支撑了陶器烧制与食物加工。",
    "dependsOn": [
      "fire"
    ],
    "enables": [
      "fire_drill"
    ],
    "applications": [
      "烹饪",
      "取暖",
      "陶器预烧",
      "驱兽"
    ],
    "views": [
      {
        "period": "史前",
        "text": "火塘成为聚落生活的中心，既是灶也是仪式与社群凝聚之地。"
      }
    ],
    "significance": "用火技术从被动保种到主动控温的转折点。"
  },
  {
    "id": "fire_drill",
    "name": "钻木取火",
    "en": "Fire Drill",
    "category": "energy",
    "era": "prehistoric",
    "date": "约 20 万年前",
    "year": -200000,
    "people": "晚期直立人 / 早期智人",
    "place": "全球",
    "summary": "以钻杆高速摩擦木料生热的取火装置，使人类第一次摆脱对天然火源的依赖、按需主动生火，是能源自主的开端。",
    "dependsOn": ["stone_tools","fire"],
    "enables": [
      "fire_making"
    ],
    "applications": [
      "主动生火",
      "火种保障",
      "野外生存"
    ],
    "views": [
      {
        "period": "史前",
        "text": "掌握生火权的人被赋予极高地位，取火技术常与神职绑定。"
      }
    ],
    "significance": "人类首次实现能源的「按需供给」。"
  },
  {
    "id": "ground_stone",
    "name": "磨制石器",
    "en": "Ground Stone Tool",
    "category": "material",
    "era": "prehistoric",
    "date": "约 3 万年前",
    "year": -30000,
    "people": "晚期智人",
    "place": "全球",
    "summary": "通过磨石抛光刃口的石器加工工艺，比打制更规整耐用，是新石器时代农业工具（石锄、石镰、磨盘）的基础形态。",
    "dependsOn": [
      "stone_tools"
    ],
    "enables": [
      "stone_hoe",
      "agriculture"
    ],
    "applications": [
      "谷物加工",
      "农具",
      "木工"
    ],
    "views": [
      {
        "period": "史前",
        "text": "磨制石器与定居、农业一同兴起，成为新石器革命的标志物。"
      }
    ],
    "significance": "石器制造从打制到磨制的工艺升级。"
  },
  {
    "id": "stone_hoe",
    "name": "石锄与耒耜",
    "en": "Stone Hoe and Spade",
    "category": "manufact",
    "era": "prehistoric",
    "date": "约 1.2 万年前",
    "year": -12000,
    "people": "新石器时代农人",
    "place": "两河流域 / 黄河流域",
    "summary": "以磨制石片绑柄而成的翻土农具，使疏松土壤、开沟播种成为可能，是刀耕火种向系统耕作过渡的直接工具。",
    "dependsOn": [
      "ground_stone"
    ],
    "enables": [
      "agriculture"
    ],
    "applications": [
      "翻土",
      "播种",
      "沟渠"
    ],
    "views": [
      {
        "period": "史前",
        "text": "农具的出现让同一块土地可以反复利用，定居聚落随之兴起。"
      }
    ],
    "significance": "农业革命的关键工具载体。"
  },
  
  {
    "id": "open_firing",
    "name": "露天烧陶",
    "en": "Open Firing Pottery",
    "category": "material",
    "era": "prehistoric",
    "date": "约 2.5 万年前",
    "year": -25000,
    "people": "旧石器时代制陶者",
    "place": "东亚 / 欧亚",
    "summary": "在火塘或浅坑中直接堆烧陶坯的早期烧成工艺，温度虽低（约 600–900℃）但足以使黏土烧结，是陶器从晾晒走向烧成的关键一步。",
    "dependsOn": [
      "hearth_stove"
    ],
    "enables": [],
    "applications": [
      "陶器烧成",
      "低温陶瓷"
    ],
    "views": [
      {
        "period": "史前",
        "text": "烧成的陶器不再溶于水，成为最早的耐储容器。"
      }
    ],
    "significance": "人类第一项「烧成」材料技术。"
  },
  {
    "id": "pen_enclosure",
    "name": "围栏与圈养",
    "en": "Pen and Enclosure",
    "category": "life",
    "era": "prehistoric",
    "date": "约 1.2 万年前",
    "year": -12000,
    "people": "新石器时代聚落",
    "place": "新月沃地 / 黄河流域",
    "summary": "以木桩、枝条围合圈舍，把捕获的动物固定饲养，是人类从狩猎采集走向畜牧的第一步，也是驯化的物质前提。",
    "dependsOn": [
      "woodworking"
    ],
    "enables": [
      "domestication"
    ],
    "applications": [
      "牲畜圈养",
      "食物储备"
    ],
    "views": [
      {
        "period": "史前",
        "text": "圈养让活体食物储备成为可能，聚落因而获得稳定蛋白来源。"
      }
    ],
    "significance": "畜牧业萌芽的载体。"
  }
];
