#!/usr/bin/env bash
# ============================================================
# 数据快照工具 —— 保护核心数据文件，防止大改后回滚困难
# 注意：本脚本使用 bash 数组语法，请用 bash 运行（而非 sh）。
# ------------------------------------------------------------
# 用法：
#   bash tools/snapshot_data.sh snapshot [label]   # 创建快照
#   bash tools/snapshot_data.sh list                 # 列出快照
#   bash tools/snapshot_data.sh diff <snapshot>      # 对比当前与某快照
#   bash tools/snapshot_data.sh restore <snapshot>   # 恢复某快照（需确认）
#
# 快照目录：backups/snapshot-<label>-<YYYYMMDD-HHMMSS>/
# 快照内容：核心数据文件 + 一份元信息 manifest.txt
#
# 核心数据文件清单（每次大改前务必先 snapshot）：
#   主管线数据      assets/data.js / techs_{extra,extend,more,midtech}.js
#   全量图快照      analysis-engine/data/graph.json
#   评分结果        analysis-engine/data/phase2_scores.json
#   审计基线        audit/{baseline,ledger,text_hygiene_baseline,full_pipeline_exclusions}.json
#   版本/纠错/维度  assets/pages/{changelog,correction,dimension,theory}_data.js
# ============================================================
set -eu

ROOT="$(git rev-parse --show-toplevel 2>/dev/null || { cd "$(dirname "$0")/.." && pwd; })"
BACKUP_ROOT="$ROOT/backups"

# 核心数据文件清单（相对 ROOT）
CORE_FILES=(
  "assets/data.js"
  "assets/techs_extra.js"
  "assets/techs_extend.js"
  "assets/techs_more.js"
  "assets/techs_midtech.js"
  "analysis-engine/data/graph.json"
  "analysis-engine/data/phase2_scores.json"
  "audit/baseline.json"
  "audit/ledger.json"
  "audit/text_hygiene_baseline.json"
  "audit/full_pipeline_exclusions.json"
  "assets/pages/changelog_data.js"
  "assets/pages/correction_data.js"
  "assets/pages/dimension_data.js"
  "assets/pages/theory_data.js"
)

# 提取当前主管线节点/边数（用于 manifest）
current_metrics() {
  cd "$ROOT"
  node -e '
    const fs = require("fs");
    const files = ["assets/data.js","assets/techs_extra.js","assets/techs_extend.js","assets/techs_more.js"];
    files.forEach(f => {
      try {
        let src = fs.readFileSync(f, "utf8");
        // 把顶层 var/const/let 声明挂载到 global，屏蔽 module.exports
        src = src.replace(/\b(const|let|var)\s+(TECHS|EXTRA_TECHS|EXTEND_TECHS|MORE_TECHS)\b/g, "global.$2");
        src = src.replace(/module\.exports\s*=[^;]*;/g, "");
        eval(src);
      } catch(e) {}
    });
    const all = (global.TECHS||[]).concat(global.EXTRA_TECHS||[]).concat(global.EXTEND_TECHS||[]).concat(global.MORE_TECHS||[]);
    const ids = new Set(all.map(t=>t.id));
    let e = 0;
    all.forEach(t => { e += (t.dependsOn||[]).length + (t.enables||[]).length; });
    console.log(ids.size + " " + e);
  ' 2>/dev/null || echo "n/a n/a"
}

cmd_snapshot() {
  local label="${1:-manual}"
  local ts
  ts="$(date +%Y%m%d-%H%M%S)"
  local snap="$BACKUP_ROOT/snapshot-${label}-${ts}"
  mkdir -p "$snap"

  local copied=0 missing=0
  for f in "${CORE_FILES[@]}"; do
    if [ -f "$ROOT/$f" ]; then
      mkdir -p "$snap/$(dirname "$f")"
      cp "$ROOT/$f" "$snap/$f"
      copied=$((copied+1))
    else
      echo "  [跳过] 不存在: $f"
      missing=$((missing+1))
    fi
  done

  # manifest
  local metrics
  metrics="$(current_metrics)"
  {
    echo "snapshot: ${label}-${ts}"
    echo "created_at: $(date '+%Y-%m-%d %H:%M:%S')"
    echo "label: $label"
    echo "mainline_nodes: ${metrics%% *}"
    echo "mainline_edges: ${metrics##* }"
    echo "files_copied: $copied"
    echo "files_missing: $missing"
    echo "git_commit: $(git -C "$ROOT" rev-parse --short HEAD 2>/dev/null || echo n/a)"
    echo "git_branch: $(git -C "$ROOT" branch --show-current 2>/dev/null || echo n/a)"
    echo "----- file list -----"
    for f in "${CORE_FILES[@]}"; do
      [ -f "$ROOT/$f" ] && echo "$f  $(wc -c < "$ROOT/$f") bytes"
    done
  } > "$snap/manifest.txt"

  echo ""
  echo "✅ 快照已创建: $snap"
  echo "   文件数: $copied（跳过 $missing 个不存在的）"
  echo "   主管线: ${metrics}"
  echo ""
  echo "恢复命令: sh tools/snapshot_data.sh restore snapshot-${label}-${ts}"
}

cmd_list() {
  if [ ! -d "$BACKUP_ROOT" ]; then
    echo "暂无快照（$BACKUP_ROOT 不存在）"
    return 0
  fi
  echo "快照列表（$BACKUP_ROOT）："
  echo "------------------------------------------------------------"
  local found=0
  for snap in "$BACKUP_ROOT"/snapshot-*; do
    [ -d "$snap" ] || continue
    found=1
    local name
    name="$(basename "$snap")"
    if [ -f "$snap/manifest.txt" ]; then
      local created nodes edges
      created="$(grep '^created_at:' "$snap/manifest.txt" | sed 's/created_at: //')"
      nodes="$(grep '^mainline_nodes:' "$snap/manifest.txt" | sed 's/mainline_nodes: //')"
      edges="$(grep '^mainline_edges:' "$snap/manifest.txt" | sed 's/mainline_edges: //')"
      printf "  %-40s  %s  节点=%s 边=%s\n" "$name" "$created" "$nodes" "$edges"
    else
      printf "  %-40s  (无 manifest)\n" "$name"
    fi
  done
  [ "$found" -eq 0 ] && echo "  （暂无快照）"
  echo "------------------------------------------------------------"
}

cmd_diff() {
  local snap="$1"
  local snapdir="$BACKUP_ROOT/$snap"
  if [ ! -d "$snapdir" ]; then
    echo "✗ 快照不存在: $snap"
    echo "可用快照："
    cmd_list
    exit 1
  fi
  echo "对比当前工作区与快照 $snap："
  echo "------------------------------------------------------------"
  local diff_count=0
  for f in "${CORE_FILES[@]}"; do
    if [ ! -f "$snapdir/$f" ]; then
      [ -f "$ROOT/$f" ] && { echo "  [新增] $f"; diff_count=$((diff_count+1)); }
    elif [ ! -f "$ROOT/$f" ]; then
      echo "  [删除] $f"; diff_count=$((diff_count+1))
    elif ! diff -q "$snapdir/$f" "$ROOT/$f" >/dev/null 2>&1; then
      echo "  [改动] $f"; diff_count=$((diff_count+1))
    fi
  done
  echo "------------------------------------------------------------"
  echo "共 $diff_count 个文件有差异"
}

cmd_restore() {
  local snap="$1"
  local snapdir="$BACKUP_ROOT/$snap"
  if [ ! -d "$snapdir" ]; then
    echo "✗ 快照不存在: $snap"
    cmd_list
    exit 1
  fi
  echo "⚠️  即将用快照 $snap 覆盖当前核心数据文件"
  echo ""
  echo "将被覆盖的文件："
  for f in "${CORE_FILES[@]}"; do
    [ -f "$snapdir/$f" ] && echo "  $f"
  done
  echo ""
  printf "确认恢复？输入 yes 继续: "
  read -r confirm
  if [ "$confirm" != "yes" ]; then
    echo "已取消。"
    exit 0
  fi
  # 恢复前先做一次当前状态的安全快照
  cmd_snapshot "pre-restore" >/dev/null
  local restored=0
  for f in "${CORE_FILES[@]}"; do
    if [ -f "$snapdir/$f" ]; then
      mkdir -p "$ROOT/$(dirname "$f")"
      cp "$snapdir/$f" "$ROOT/$f"
      restored=$((restored+1))
    fi
  done
  echo ""
  echo "✅ 已恢复 $restored 个文件（恢复前的当前状态已存为 pre-restore 快照）"
  echo "建议重跑：sh tools/install_git_hooks.sh  （验证门禁是否仍通过）"
}

# ---- 主入口 ----
case "${1:-}" in
  snapshot) shift; cmd_snapshot "$@" ;;
  list)     cmd_list ;;
  diff)     shift; cmd_diff "$@" ;;
  restore)  shift; cmd_restore "$@" ;;
  *)
    echo "用法："
    echo "  bash tools/snapshot_data.sh snapshot [label]   创建快照"
    echo "  bash tools/snapshot_data.sh list                 列出快照"
    echo "  bash tools/snapshot_data.sh diff <snapshot>      对比差异"
    echo "  bash tools/snapshot_data.sh restore <snapshot>   恢复快照"
    exit 1
    ;;
esac
