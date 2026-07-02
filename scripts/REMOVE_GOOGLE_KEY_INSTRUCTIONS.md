# Remove leaked Google API key - instructions

IMPORTANT: Rotate/revoke the leaked key in Google Cloud Console before rewriting history.

## Overview

This document provides safe, repeatable steps to remove a leaked Google API key from repository history using `git-filter-repo` or BFG. Rewriting history is disruptive — coordinate with your team and back up the repo first.

1. Revoke / rotate the key immediately (manual)

---

- Go to Google Cloud Console → APIs & Services → Credentials.
- Delete or restrict the leaked API key and create a new one with application restrictions (HTTP referrers) and API restrictions (Maps Embed API).

2. Prepare replacements file

---

- Create a file named `replacements.txt` with the following contents. Replace the placeholder `LEAKED_GOOGLE_KEY_HERE` with the actual leaked key exactly as it appears in commits/artifacts. The right side is the replacement text (short redaction):

```
# lines starting with # are comments
LEAKED_GOOGLE_KEY_HERE==>REDACTED-GOOGLE-KEY
```

3. Use `git-filter-repo` to rewrite history (recommended)

---

- Install `git-filter-repo` (do NOT use the older `git filter-branch`):

Windows (PowerShell):

```powershell
pip install git-filter-repo
```

macOS/Linux (bash):

```bash
pip3 install --user git-filter-repo
```

- Mirror-clone the repo and run the replacement rewrite:

```bash
git clone --mirror git@github.com:your-org/your-repo.git
cd your-repo.git
git filter-repo --replace-text ../replacements.txt
# Inspect results, then force-push
git push --force
```

Notes:

- `--replace-text` replaces literal occurrences in commit contents and file blobs.
- Test this on a copy before running on the real repo.

4. Alternative: BFG Repo-Cleaner (simpler for large repos)

---

- BFG can delete files or replace passwords. See https://rtyley.github.io/bfg-repo-cleaner/ for usage.

5. Post-rewrite steps

---

- Notify your team: everyone must re-clone or reset their local branches.
- Inform GitHub Security and request a re-scan to close the alert.
- Rotate any other credentials that used the leaked key.

6. Removing local build artifacts

---

- Delete `.next/` locally to remove build artifacts containing the key:

Windows (PowerShell):

```powershell
Remove-Item -Recurse -Force .next
```

macOS/Linux:

```bash
rm -rf .next
```

- Ensure `/.next/` is present in `.gitignore` (it already is in this repo).

7. Need help?

---

If you want, I can:

- Draft `replacements.txt` for you (I will not include the real key here — paste it locally),
- Create a small script you can run locally to perform the mirror clone and `git-filter-repo` call,
- Or prepare a branch/PR that only removes source occurrences (non-history rewrite) and removes any accidental committed build artifacts from the working tree (less disruptive).

CAUTION: I will NOT run destructive history-rewriting commands without your explicit confirmation.
