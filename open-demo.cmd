@echo off
setlocal

set "ROOT=%~dp0"
set "PORT=8000"
set "URL=http://127.0.0.1:%PORT%/html/indexhtml.html"

powershell -NoProfile -ExecutionPolicy Bypass -Command ^
  "$port = %PORT%; $url = '%URL%'; $root = '%ROOT%';" ^
  "try { $client = New-Object System.Net.Sockets.TcpClient; $client.Connect('127.0.0.1', $port); $client.Close(); $serverRunning = $true } catch { $serverRunning = $false }" ^
  "if (-not $serverRunning) { Start-Process python -ArgumentList '-m','http.server',$port -WorkingDirectory $root -WindowStyle Minimized }" ^
  "Start-Process $url"

endlocal