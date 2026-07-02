#!/usr/bin/env bash
set -euo pipefail

echo "This script will mirror-clone a repository and run git-filter-repo to replace a leaked key."
echo "Prerequisites: pip install --user git-filter-repo; git installed."

read -rp "Enter the git remote URL to mirror (e.g. git@github.com:org/repo.git): " REPO_URL
if [ -z "$REPO_URL" ]; then
  echo "Repo URL is required" >&2
  exit 1
fi

read -rp "Paste the exact leaked key (input hidden): " LEAKED_KEY
if [ -z "$LEAKED_KEY" ]; then
  echo "Leaked key is required" >&2
  exit 1
fi

read -rp "This will rewrite history and force-push. Type YES to continue: " CONFIRM
if [ "$CONFIRM" != "YES" ]; then
  echo "Aborted by user."; exit 0
fi

TMP_DIR=$(mktemp -d)
echo "Cloning mirror to: $TMP_DIR"
git clone --mirror "$REPO_URL" "$TMP_DIR"

pushd "$TMP_DIR" >/dev/null

REPL=replacements.txt
printf "%s==>REDACTED-GOOGLE-KEY
" "$LEAKED_KEY" > "$REPL"
echo "Created replacements file at: $TMP_DIR/$REPL"

echo "Running: git filter-repo --replace-text $REPL"
git filter-repo --replace-text "$REPL"

echo "Pushing rewritten refs to origin (force)"
git push --force

popd >/dev/null

echo "Done. Remove $TMP_DIR if it contains sensitive data." 
