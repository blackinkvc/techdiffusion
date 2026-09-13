// tools/fix_midtech_dup.js —— 修复中间技术库重复条目
// 背景：assets/techs_midtech.js 中 mil_smartmunition（智能弹药）登记两次
//   [50] date=2010 年，summary 与主管线一致
//   [57] date=21 世纪，summary 为另一批次风格（「承接…」句式）
// 规则：保留「首次出现者」（与主管线 date 一致者），删除后续同 id 条目。
// 用法：node tools/fix_midtech_dup.js [--apply]
"use strict";
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const P = path.join(ROOT, "assets", "techs_midtech.js");
const APPLY = process.argv.includes("--apply");

const raw = fs.readFileSync(P, "utf8");
// 头部注释（前两行）+ 变量声明行
const headEnd = raw.indexOf("const MIDTECHS_EXTRA = ");
if (headEnd < 0) throw new Error("未找到 MIDTECHS_EXTRA 声明");
const head = raw.slice(0, headEnd);
const bodyStart = headEnd + "const MIDTECHS_EXTRA = ".length;
const bodyEnd = raw.indexOf(";\n", bodyStart);
if (bodyEnd < 0) throw new Error("未找到数组结束分号");
const arr = JSON.parse(raw.slice(bodyStart, bodyEnd));
const tail = raw.slice(bodyEnd); // ";\n\nif (typeof module ..."

// 去重：保留首次出现
const seen = new Map();
const kept = [];
const dropped = [];
arr.forEach((it, i) => {
  if (seen.has(it.id)) {
    dropped.push({ id: it.id, name: it.name, index: i, keepIndex: seen.get(it.id) });
    return;
  }
  seen.set(it.id, i);
  kept.push(it);
});

console.log("条目 " + arr.length + " → " + kept.length + "；删除重复 " + dropped.length + " 条");
dropped.forEach((d) => console.log("  删除 [" + d.index + "] " + d.name + " [" + d.id + "]，保留 [" + d.keepIndex + "]"));
if (!dropped.length) { console.log("无重复，无需改动。"); process.exit(0); }

// 断言：删除后 id 唯一
if (new Set(kept.map((k) => k.id)).size !== kept.length) throw new Error("去重后仍有重复 id");

if (!APPLY) { console.log("\n（干跑模式，未写盘。加 --apply 执行）"); process.exit(0); }

const out = head + "const MIDTECHS_EXTRA = " + JSON.stringify(kept, null, 2) + tail;
fs.writeFileSync(P, out);

// 写后复核
const back = require(path.join(ROOT, "assets", "techs_midtech.js"));
const ids = back.MIDTECHS_EXTRA.map((x) => x.id);
console.log("\n写盘完成。条目 " + ids.length + "，唯一 id " + new Set(ids).size +
  (ids.length === new Set(ids).size ? " [OK]" : " [FAIL]"));
