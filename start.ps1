#===============================================================================
# START SCRIPT FOR SALES SYSTEM - WIN POWERSHELL
#===============================================================================

Write-Host "STARTING SALES SYSTEM..." -ForegroundColor Green
Write-Host "=======================" -ForegroundColor Yellow

# Project directory
$PROJECT_DIR = Get-Location
Write-Host "Project directory: $PROJECT_DIR" -ForegroundColor Cyan

# ===============================================================================
# STEP 1: CHECK PREREQUISITES
# ===============================================================================
Write-Host "`nCHECKING PREREQUISITES..." -ForegroundColor Yellow

# Check Java
try {
    java -version > $null 2>&1
    Write-Host "Java installed" -ForegroundColor Green
} catch {
    Write-Host "Java NOT installed. Download from: https://adoptium.net/" -ForegroundColor Red
    exit 1
}

# Check Node.js
try {
    node --version > $null 2>&1
    Write-Host "Node.js installed" -ForegroundColor Green
} catch {
    Write-Host "Node.js NOT installed. Download from: https://nodejs.org/" -ForegroundColor Red
    exit 1
}

# Check MySQL (optional)
try {
    mysqld --version > $null 2>&1
    Write-Host "MySQL detected" -ForegroundColor Green
    $MYSQL_AVAILABLE = $true
} catch {
    Write-Host "MySQL NOT detected - Use Railway for DB" -ForegroundColor Yellow
    $MYSQL_AVAILABLE = $false
}

# ===============================================================================
# STEP 2: PREPARE ENVIRONMENT
# ===============================================================================
Write-Host "`nPREPARING ENVIRONMENT..." -ForegroundColor Yellow

# Kill previous processes
Write-Host "Cleaning previous processes..." -ForegroundColor Cyan
Stop-Process -Name "java" -Force -ErrorAction SilentlyContinue
Stop-Process -Name "node" -Force -ErrorAction SilentlyContinue

# ===============================================================================
# STEP 3: START MYSQL (OPTIONAL)
# ===============================================================================
if ($MYSQL_AVAILABLE) {
    Write-Host "`nSTARTING MYSQL..." -ForegroundColor Yellow

    try {
        Start-Service -Name "MySQL80" -ErrorAction SilentlyContinue
        Write-Host "MySQL service started" -ForegroundColor Green
        Start-Sleep -Seconds 3
    } catch {
        Write-Host "MySQL not as service - start manually if needed" -ForegroundColor Yellow
    }
} else {
    Write-Host "`nMYSQL NOT AVAILABLE LOCALLY" -ForegroundColor Yellow
    Write-Host "Use Railway for database in production" -ForegroundColor Cyan
}

# ===============================================================================
# STEP 4: PREPARE BACKEND SPRING BOOT
# ===============================================================================
Write-Host "`nPREPARING BACKEND..." -ForegroundColor Yellow

cd "$PROJECT_DIR\backend"
Write-Host "Changed to: $(Get-Location)" -ForegroundColor Cyan

# Compile if needed
Write-Host "Compiling Spring Boot project..." -ForegroundColor Cyan
try {
    .\mvnw.cmd clean compile -q
    Write-Host "Compilation successful" -ForegroundColor Green
} catch {
    Write-Host "Compilation error - check logs" -ForegroundColor Red
    exit 1
}

# ===============================================================================
# STEP 5: RUN SERVICES IN PARALLEL
# ===============================================================================
Write-Host "`nRUNNING SERVICES..." -ForegroundColor Green
Write-Host "====================" -ForegroundColor Yellow

# Start Backend in background
Write-Host "Starting Backend Spring Boot..." -ForegroundColor Cyan
$backendJob = Start-Job -ScriptBlock {
    cd "$using:PROJECT_DIR\backend"
    .\mvnw.cmd spring-boot:run -Dspring-boot.run.profiles=dev
}

# Wait 30 seconds for backend
Write-Host "Waiting for backend (30 sec)..." -ForegroundColor Yellow
for ($i = 30; $i -gt 0; $i--) {
    Write-Host -NoNewline "`rWaiting for backend: $i sec remaining..."
    Start-Sleep -Seconds 1
}

# Check backend
Write-Host "`nCHECKING BACKEND..." -ForegroundColor Cyan
try {
    $response = Invoke-WebRequest -Uri "http://localhost:8080/actuator/health" -ErrorAction SilentlyContinue
    if ($response.StatusCode -eq 200) {
        Write-Host "Backend working correctly" -ForegroundColor Green
    }
} catch {
    Write-Host "Backend not responding yet..." -ForegroundColor Yellow
}

# ===============================================================================
# STEP 6: PREPARE AND START FRONTEND
# ===============================================================================
Write-Host "`nPREPARING FRONTEND..." -ForegroundColor Yellow

cd "$PROJECT_DIR\frontend"
Write-Host "Changed to: $(Get-Location)" -ForegroundColor Cyan

# Install dependencies if needed
if (-not (Test-Path "node_modules")) {
    Write-Host "Installing Node.js dependencies..." -ForegroundColor Cyan
    npm install
}

# Start Frontend in background
Write-Host "Starting Frontend Next.js..." -ForegroundColor Cyan
$frontendJob = Start-Job -ScriptBlock {
    cd "$using:PROJECT_DIR\frontend"
    npm run dev
}

# ===============================================================================
# STEP 7: FINAL VERIFICATION AND ACCESS
# ===============================================================================
Write-Host "`nFINAL VERIFICATION..." -ForegroundColor Green
Write-Host "====================" -ForegroundColor Yellow

# Wait for frontend
Write-Host "Waiting for frontend (20 sec)..." -ForegroundColor Yellow
for ($i = 20; $i -gt 0; $i--) {
    Write-Host -NoNewline "`rWaiting for frontend: $i sec remaining..."
    Start-Sleep -Seconds 1
}

# Check frontend
Write-Host "`nCHECKING FRONTEND..." -ForegroundColor Cyan
try {
    $response = Invoke-WebRequest -Uri "http://localhost:3000" -ErrorAction SilentlyContinue
    if ($response.StatusCode -eq 200) {
        Write-Host "Frontend working correctly" -ForegroundColor Green
    }
} catch {
    Write-Host "Frontend not responding yet..." -ForegroundColor Yellow
}

# ===============================================================================
# ACCESS THE SYSTEM
# ===============================================================================
Write-Host "`nSALES SYSTEM OPERATIONAL!" -ForegroundColor Green
Write-Host "=========================" -ForegroundColor Green

Write-Host "`nACCESS URLs:" -ForegroundColor Cyan
Write-Host "   Frontend: http://localhost:3000" -ForegroundColor White
Write-Host "   Backend:  http://localhost:8080" -ForegroundColor White

if ($MYSQL_AVAILABLE) {
    Write-Host "   MySQL:    localhost:3306 (ventas_db)" -ForegroundColor White
}

Write-Host "`nADMIN CREDENTIALS:" -ForegroundColor Cyan
Write-Host "   User: admin@sistema-ventas.com" -ForegroundColor White
Write-Host "   Password: admin123" -ForegroundColor White

Write-Host "`nINSTRUCTIONS:" -ForegroundColor Yellow
Write-Host "  1. Open http://localhost:3000 in browser" -ForegroundColor White
Write-Host "  2. Login with credentials above" -ForegroundColor White

Write-Host "`nCONTROL COMMANDS:" -ForegroundColor Cyan
Write-Host "  Stop services: Ctrl+C in terminal" -ForegroundColor White
Write-Host "  Clean processes: ./clean.ps1" -ForegroundColor White
Write-Host "  Restart: ./start.ps1" -ForegroundColor White

Write-Host "`nAll services are running in background!" -ForegroundColor Green
Write-Host "Do not close this terminal - it contains active processes." -ForegroundColor Yellow

# Keep terminal open
while ($true) {
    Start-Sleep -Seconds 60
    Write-Host "Services active - Press Ctrl+C to stop" -ForegroundColor Gray
}
