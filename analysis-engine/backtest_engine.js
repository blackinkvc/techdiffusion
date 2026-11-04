#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { loadMain, sourceDigest } = require('../tools/mainline');

const ROOT = path.resolve(__dirname, '..');
const FUTURE_TIERS = new Set(['L2', 'L3', 'L4', 'L5']);
function yearArg(name, fallback) {
  const index = process.argv.indexOf(name);
  if (index < 0) return fallback;
  const value = Number(process.argv[index + 1]);
  if (!Number.isInteger(value) || value < 1700 || value > 9999) {
    throw new Error(`${name} 需要 1700–9999 的整数年份`);
  }
  return value;
}
const asOf = yearArg('--as-of', 1990);
const until = yearArg('--until', 2020);
if (until <= asOf) throw new Error('--until 必须晚于 --as-of');

const techs = loadMain(ROOT);
const byId = Object.fromEntries(techs.map(t => [t.id, t]));
const strict = process.argv.includes('--strict');
if (strict) {
  const graph = JSON.parse(fs.readFileSync(path.join(ROOT, 'analysis-engine/data/graph.json'), 'utf8'));
  const undated = graph.edges.filter(e => (e.type || 'dependency') !== 'enables'
    && !Number.isFinite(e.knownSince) && !Number.isFinite(e.validFrom));
  if (undated.length) {
    console.error(`无法执行严格回溯：${undated.length} 条依赖缺少 knownSince/validFrom 时间证据。`);
    console.error('不能用节点年份冒充关系入库年份。');
    process.exit(2);
  }
}

function bucket(count) {
  return count === 1 ? '1' : count <= 3 ? '2-3' : '4+';
}
function record(t, origin) {
  if (!Number.isFinite(t.year) || FUTURE_TIERS.has(t.tier)) return null;
  const prereqs = (t.dependsOn || []).map(id => byId[id]).filter(Boolean);
  const years = prereqs.map(p => p.year).filter(y => Number.isFinite(y) && y >= 0 && y <= origin);
  if (!years.length) return null;
  const lag = t.year - Math.max(...years);
  if (lag < 0 || lag > 300) return null;
  return {
    id: t.id, category: t.category || '?', lag,
    prereqCount: prereqs.length, bucket: bucket(prereqs.length)
  };
}

const training = techs.filter(t => t.year >= 1700 && t.year <= asOf)
  .map(t => record(t, asOf)).filter(Boolean);
const evaluation = techs.filter(t => t.year > asOf && t.year <= until)
  .map(t => record(t, asOf)).filter(Boolean);
if (!training.length || !evaluation.length) throw new Error('训练集或测试集为空');

const median = values => {
  const a = [...values].sort((x, y) => x - y);
  const m = Math.floor(a.length / 2);
  return a.length % 2 ? a[m] : (a[m - 1] + a[m]) / 2;
};
const globalMedian = median(training.map(r => r.lag));
const group = (rows, key) => rows.reduce((out, row) => {
  const k = key(row);
  (out[k] || (out[k] = [])).push(row.lag);
  return out;
}, {});
const medianMap = rows => Object.fromEntries(Object.entries(rows).map(([k, values]) => [k, median(values)]));
const categoryMedians = medianMap(group(training, r => r.category));
const dependencyGroups = group(training, r => `${r.category}|${r.bucket}`);
const dependencyMedians = medianMap(dependencyGroups);

const predictors = {
  global_median: () => globalMedian,
  category_median: r => categoryMedians[r.category] ?? globalMedian,
  dependency_bucket: r => {
    const k = `${r.category}|${r.bucket}`;
    return dependencyGroups[k] && dependencyGroups[k].length >= 8
      ? dependencyMedians[k]
      : categoryMedians[r.category] ?? globalMedian;
  }
};
const models = {};
for (const [name, predict] of Object.entries(predictors)) {
  const errors = evaluation.map(r => predict(r) - r.lag);
  const absolute = errors.map(Math.abs);
  models[name] = {
    mae: +(absolute.reduce((a, b) => a + b, 0) / absolute.length).toFixed(3),
    rmse: +Math.sqrt(errors.reduce((sum, e) => sum + e * e, 0) / errors.length).toFixed(3),
    medianAbsoluteError: +median(absolute).toFixed(3)
  };
}

const out = {
  generatedAt: new Date().toISOString().slice(0, 10),
  sourceDigest: sourceDigest(techs),
  input: {
    asOf, until,
    trainingNodes: training.length,
    evaluationNodes: evaluation.length,
    relationKnowledge: 'current-curated',
    postOriginNodesExcludedFromTraining: true,
    postOriginEndpointsExcludedFromTraining: true,
    futureTiersExcluded: true,
    futureYearsExcludedFromTraining: true
  },
  validationStatus: 'exploratory',
  temporalLeakageControlled: false,
  limitations: [
    '依赖关系没有独立的 knownSince/validFrom 入库时间；节点年份只能限制端点，不能证明关系在 as-of 时已为人知。',
    '结果只比较已实现技术的滞后预测误差，不评估新技术发现、top-K 命中率或 AUC。',
    '失败、搁置和长期未实现方向不在评价集中，存在成功样本选择偏差。',
    '未做显著性检验，模型间指标差异不能直接解释为统计显著改进。'
  ],
  models
};
const outputName = `backtest_${asOf}_${until}.json`;
fs.writeFileSync(path.join(ROOT, 'analysis-engine/data', outputName), JSON.stringify(out, null, 2) + '\n');
console.log(JSON.stringify(out, null, 2));
console.log(`→ 写入 analysis-engine/data/${outputName}`);
