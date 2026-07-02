# PR: Remove hardcoded Google Maps API key and add env guidance

## Summary

This change removes a hardcoded Google Maps API key from the client code and adds a `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` placeholder to `.env.example`.

## Files changed

- `components/ui/BusinessMap.tsx` — replaced the literal API key with `process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""`.
- `.env.example` — added `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` and notes.

## Why

Hardcoding API keys in source is a security risk and triggered GitHub secret scanning. The repo should use environment variables and proper key rotation.

## Reviewer checklist

- Confirm `components/ui/BusinessMap.tsx` no longer contains any plain-text API key.
- Verify `.env.example` contains `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` with guidance.
- Ensure `.gitignore` includes `/.next/` and no build artifacts containing secrets are committed.

## Next manual steps (owner)

1. Revoke or rotate the leaked API key in Google Cloud Console immediately.
2. Restrict the new API key to allowed referrers / usage (Maps Embed API) and set application restrictions.
3. If the secret was committed to repo history, consider a history rewrite with `git filter-repo` or BFG and force-push (coordinate with the team):

   Example with `git-filter-repo`:

```
git clone --mirror git@github.com:your-org/your-repo.git
cd your-repo.git
# Create a file `replacements.txt` with the secret on the left and a replacement on the right
# Or use --replace-text directly with the leaked key
git filter-repo --replace-text replacements.txt
git push --force
```

4. After rotation and/or history rewrite, ask GitHub Security to re-scan and close the alert.
5. Notify team members to reclone or reset local clones if history was rewritten.

## Notes

- I scanned the workspace for the key pattern and only found occurrences in local `.next/` build artifacts and previously updated `components/ui/BusinessMap.tsx` (now fixed). If any other environments or external services use the leaked key, rotate them too.
