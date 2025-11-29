#===============================================================================
# CLEAN SCRIPT FOR SALES SYSTEM - WIN POWERSHELL
#===============================================================================

Write-Host "CLEANING SALES SYSTEM..." -ForegroundColor Yellow
Write-Host "=========================" -ForegroundColor Red

# Stop existing services
Write-Host "STOPPING PROCESSES..." -ForegroundColor Cyan

# Kill Java processes (Spring Boot)
try {
    $javaProcesses = Get-Process java -ErrorAction SilentlyContinue
    if ($javaProcesses) {
        $javaProcesses | Stop-Process -Force
        Write-Host "JAVA processes stopped" -ForegroundColor Green
    } else {
        Write-Host "No Java processes running" -ForegroundColor Gray
    }
} catch {
    Write-Host "Error stopping Java processes" -ForegroundColor Yellow
}

# Kill Node processes (Next.js)
try {
    $nodeProcesses = Get-Process node -ErrorAction SilentlyContinue
    if ($nodeProcesses) {
        $nodeProcesses | Stop-Process -Force
        Write-Host "NODE processes stopped" -ForegroundColor Green
    } else {
        Write-Host "No Node processes running" -ForegroundColor Gray
    }
} catch {
    Write-Host "Error stopping Node processes" -ForegroundColor Yellow
}

# Kill MySQL if running
try {
    $mysqlProcesses = Get-Process mysqld -ErrorAction SilentlyContinue
    if ($mysqlProcesses) {
        $mysqlProcesses | Stop-Process -Force
        Write-Host "MYSQL processes stopped" -ForegroundColor Green
    } else {
        Write-Host "No MySQL processes running" -ForegroundColor Gray
    }
} catch {
    Write-Host "Error stopping MySQL processes" -ForegroundColor Yellow
}

# Check ports
Write-Host "CHECKING PORTS..." -ForegroundColor Cyan

$ports = @("3000", "8080", "3306")
foreach ($port in $ports) {
    $connections = netstat -ano | Select-String ":$port "
    if ($connections) {
        Write-Host "WARNING: Port $port still occupied" -ForegroundColor Yellow
    } else {
        Write-Host "Port $port available" -ForegroundColor Green
    }
}

# Clean temp files
Write-Host "CLEANING TEMP FILES..." -ForegroundColor Cyan

# Backend - clean target
if (Test-Path "backend\target") {
    Remove-Item "backend\target" -Recurse -Force -ErrorAction SilentlyContinue
    Write-Host "backend\target folder cleaned" -ForegroundColor Green
}

# Frontend - clean .next
if (Test-Path "frontend\.next") {
    Remove-Item "frontend\.next" -Recurse -Force -ErrorAction SilentlyContinue
    Write-Host "frontend\.next folder cleaned" -ForegroundColor Green
}

# Check final status
Write-Host "`nFINAL STATUS:" -ForegroundColor Green
Write-Host "==============" -ForegroundColor Yellow

$processes = Get-Process | Where-Object {
    $_.Name -in @("java", "node", "mysqld", "next")
} | Select-Object Name, Id, CPU, WorkingSet

if ($processes.Count -gt 0) {
    Write-Host "Some related processes still running:" -ForegroundColor Yellow
    $processes | Format-Table -AutoSize
} else {
    Write-Host "No related processes running" -ForegroundColor Green
}

Write-Host "`nCLEANING COMPLETED SUCCESSFULLY!" -ForegroundColor Green
Write-Host "Run ./start.ps1 to restart the system" -ForegroundColor Cyan
