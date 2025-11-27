#!/usr/bin/env bash
set -e

# 변경 사항 없으면 바로 종료
if git diff --quiet && git diff --cached --quiet; then
  echo "변경된 파일 없음. 푸시 안 함."
  exit 0
fi

git add .

msg=${1:-"chore: update"}
git commit -m "$msg"
git push origin main
