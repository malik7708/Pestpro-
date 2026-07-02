<#
Run this PowerShell script locally to mirror-clone the repo and run git-filter-repo
It will prompt you for the repo URL and the leaked key. The leaked key is only used
to create a local `replacements.txt` file and will not be committed.

Prerequisites:
- Install Python + pip and then: `pip install git-filter-repo`
- Have `git` installed and in PATH

CAUTION: This rewrites history and force-pushes. Coordinate with your team.
#>

Param()

Write-Host "This script will mirror-clone a repository and run git-filter-repo to replace a leaked key." -ForegroundColor Yellow

$repoUrl = Read-Host "Enter the git remote URL to mirror (e.g. git@github.com:org/repo.git)"
if (-not $repoUrl) { Write-Error "Repo URL is required"; exit 1 }

$leaked = Read-Host "Paste the exact leaked key (will not be stored in the repo)"
if (-not $leaked) { Write-Error "Leaked key is required"; exit 1 }

$confirm = Read-Host "This will rewrite history and force-push. Type YES to continue"
if ($confirm -ne 'YES') { Write-Host "Aborted by user."; exit 0 }

$tmp = Join-Path -Path $env:TEMP -ChildPath ("repo-mirror-{0}" -f ([System.Guid]::NewGuid().ToString()))
Write-Host "Cloning mirror to: $tmp"
git clone --mirror $repoUrl $tmp
if ($LASTEXITCODE -ne 0) { Write-Error "git clone failed"; exit 1 }

Set-Location $tmp

# Write replacements.txt local-only
$replPath = Join-Path $tmp 'replacements.txt'
"$leaked==>REDACTED-GOOGLE-KEY" | Out-File -FilePath $replPath -Encoding utf8
Write-Host "Created replacements file at: $replPath"

Write-Host "Running: git filter-repo --replace-text replacements.txt" -ForegroundColor Cyan
git filter-repo --replace-text $replPath
if ($LASTEXITCODE -ne 0) { Write-Error "git filter-repo failed"; exit 1 }

Write-Host "Pushing rewritten refs to origin (force)" -ForegroundColor Yellow
git push --force
if ($LASTEXITCODE -ne 0) { Write-Error "git push failed"; exit 1 }

Write-Host "Done. Remove $replPath if it contains sensitive data." -ForegroundColor Green
