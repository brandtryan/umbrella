#!/bin/bash

# Stop the script immediately if any command fails
set -e

# --- SAFETY CHECK ---
# Check if there are any uncommitted changes (modified files or staged files)
if [ -n "$(git status --porcelain)" ]; then
  echo "❌ ABORTING: You have uncommitted changes in your current branch."
  echo "   Please commit or stash your changes before syncing."
  exit 1
fi
# --------------------

echo "🚀 Starting Weekly Sync..."

# 1. Update Local develop
echo "⬇️  Fetching upstream..."
git checkout develop
git fetch upstream

# 2. Reset Local develop (The "Teleport")
echo "⚡️ Resetting local develop to match upstream..."
git reset --hard upstream/develop

# 3. Update Fork (Origin)
echo "☁️  Force pushing clean develop to origin..."
git push -u -f origin develop

# 4. Switch to Workspace
echo "📂 Switching to my-examples..."
git checkout my-examples

# 5. Merge Updates
echo "🔀 Merging develop (keeping incoming changes for conflicts)..."
git merge develop -X theirs

# 6. Backup Workspace
echo "💾 Backing up my-examples to origin..."
git push -u origin my-examples

echo "✅ Done! Your repo is fully synced and backed up."
