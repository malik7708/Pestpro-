# Notify team and GitHub Security

## Summary

I created a branch `remove-google-key` with the non-destructive fixes (removed hardcoded key from source, added `.env.example`, and added remediation scripts). Please open a PR from that branch and merge after review.

## PR

Create a PR at:

https://github.com/malik7708/Pestpro-/pull/new/remove-google-key

## Actions for the team

1. Review the PR and merge to `main`.
2. After merging, ensure the new API key is stored only in secrets or environment variables (Vercel/Netlify/GCP). Do NOT commit it.
3. If you performed a history rewrite later, instruct all devs to reclone: `git clone <repo>`.
4. Ask GitHub Security to re-scan and close the secret alert after rotation and any history rewrite.

## Contact

If you'd like, I can draft the message to send to the team and GitHub Security.
