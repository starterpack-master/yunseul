#!/usr/bin/env bash
# 빌드 결과물(dist/)을 gh-pages 브랜치에 새 커밋으로 올려요. GitHub Pages는 이 브랜치를 그대로 보여 줘요.
#
#   npm run deploy            # 빌드 + 배포
#   bash scripts/deploy-gh-pages.sh   # 이미 빌드했다면 배포만
#
# 작업 폴더를 건드리지 않고 임시 인덱스로 커밋을 만들어요. 강제 푸시를 하지 않아서
# 누가 먼저 배포했으면 푸시가 거절돼요(다시 실행하면 돼요).
set -euo pipefail

DIST=${DIST:-dist}
BRANCH=${BRANCH:-gh-pages}
REMOTE=${REMOTE:-origin}

if [ ! -f "$DIST/index.html" ]; then
  echo "$DIST/index.html 이 없어요. 먼저 npm run build 를 실행하세요." >&2
  exit 1
fi

SRC_REF=$(git rev-parse --abbrev-ref HEAD)
SRC_SHA=$(git rev-parse --short HEAD)

# 원격 gh-pages가 있으면 그 위에 이어서, 없으면 새 브랜치로 시작해요.
set +e
git ls-remote --exit-code --heads "$REMOTE" "$BRANCH" >/dev/null
rc=$?
set -e
PARENT=""
case $rc in
  0)
    git fetch --quiet --depth=1 "$REMOTE" "+refs/heads/$BRANCH:refs/remotes/$REMOTE/$BRANCH"
    PARENT=$(git rev-parse "refs/remotes/$REMOTE/$BRANCH")
    ;;
  2) echo "$REMOTE 에 $BRANCH 브랜치가 없어서 새로 만들어요." ;;
  *)
    echo "원격 저장소에 접속하지 못했어요 (git ls-remote 종료 코드 $rc)." >&2
    exit 1
    ;;
esac

TMP=$(mktemp -d)
trap 'rm -rf "$TMP"' EXIT
export GIT_INDEX_FILE="$TMP/index"
git --work-tree="$DIST" add --all --force .
TREE=$(git write-tree)
unset GIT_INDEX_FILE

if [ -n "$PARENT" ] && [ "$TREE" = "$(git rev-parse "$PARENT^{tree}")" ]; then
  echo "바뀐 내용이 없어서 배포하지 않았어요 ($BRANCH = ${PARENT:0:7})."
  exit 0
fi

COMMIT=$(git commit-tree "$TREE" ${PARENT:+-p "$PARENT"} -m "배포: $SRC_REF@$SRC_SHA")
git push "$REMOTE" "$COMMIT:refs/heads/$BRANCH"
echo "$BRANCH 에 배포했어요: ${COMMIT:0:7} ($SRC_REF@$SRC_SHA)"
