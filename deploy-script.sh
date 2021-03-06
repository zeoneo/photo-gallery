#!/usr/bin/env bash

set -eu

repo_uri="https://x-access-token:${DEPLOY_TOKEN}@github.com/${GITHUB_REPOSITORY}.git"

remote_name="origin"
main_branch="gh-pages"
target_branch="master"
build_dir="build"

cd "$GITHUB_WORKSPACE"

git config user.name "$GITHUB_ACTOR"
git config user.email "${GITHUB_ACTOR}@bots.github.com"

git checkout "$main_branch"

npm install
npm run build
git add "$build_dir"

git commit -m "updated GitHub Pages"
if [ $? -ne 0 ]; then
    echo "nothing to commit"
    exit 0
fi

git remote set-url "$remote_name" "$repo_uri" # includes access token

git subtree split --prefix $build_dir -b master

git push -f origin "$target_branch":"$target_branch"