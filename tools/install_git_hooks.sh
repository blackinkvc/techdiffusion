#!/bin/sh
# 安装 git 钩子（一致性自检门禁）
# ------------------------------------------------------------------
# .git/hooks/ 不随仓库版本化，克隆后门禁会丢失。本脚本把版本化的
# tools/git-hooks/pre-commit 安装到 .git/hooks/pre-commit。
#
# 用法：sh tools/install_git_hooks.sh
#
# 门禁内容（三道，任一不过即阻断提交）：
#   1) 文档/数据一致性      tools/check_docs.js
#   2) 派生文案不动点        tools/regen_text.js --check
#   3) 结构指标不劣化        tools/audit_net.js --check
# 确需跳过： git commit --no-verify
set -e
ROOT="$(git rev-parse --show-toplevel)"
SRC="$ROOT/tools/git-hooks/pre-commit"
DST="$ROOT/.git/hooks/pre-commit"

[ -f "$SRC" ] || { echo "✗ 未找到 $SRC"; exit 1; }
if [ -f "$DST" ]; then
  cp "$DST" "/tmp/pre-commit.bak.$(date +%s)"
  echo "[备份] 原钩子已备份至 /tmp/pre-commit.bak.*"
fi
cp "$SRC" "$DST"
chmod +x "$DST"
echo "[安装] $DST"
echo "[自检] 试跑门禁："
sh "$DST"
echo "[完成] 门禁已生效。"
