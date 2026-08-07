$ErrorActionPreference = 'Stop'

$repoRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$nodeDir = Join-Path (Split-Path -Parent $repoRoot) '.tools\node-v24.18.1-win-x64'
$logDir = Join-Path (Split-Path -Parent $repoRoot) '.tools\logs'
$outLog = Join-Path $logDir 'bejk-dev.out.log'
$errLog = Join-Path $logDir 'bejk-dev.err.log'

New-Item -ItemType Directory -Force -Path $logDir | Out-Null

$serverReady = $false
try {
  $response = Invoke-WebRequest -Uri 'http://localhost:3000' -UseBasicParsing -TimeoutSec 2
  $serverReady = $response.StatusCode -eq 200
} catch {
  $serverReady = $false
}

if (-not $serverReady) {
  $env:PATH = "$nodeDir;$env:PATH"
  $env:BROWSER = 'none'
  $env:PORT = '3000'

  Start-Process `
    -FilePath (Join-Path $nodeDir 'npm.cmd') `
    -ArgumentList 'start' `
    -WorkingDirectory $repoRoot `
    -RedirectStandardOutput $outLog `
    -RedirectStandardError $errLog `
    -WindowStyle Hidden | Out-Null
}

Write-Host 'Bullmate web: http://localhost:3000'
Write-Host "Logs: $outLog"
