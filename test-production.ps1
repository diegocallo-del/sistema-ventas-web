Write-Host "=== VERIFICACIÓN DEL DESPLIEGUE EN RAILWAY ===" -ForegroundColor Green
Write-Host ""
Write-Host "URL de la aplicación: https://sistema-ventas-prod.up.railway.app" -ForegroundColor Yellow
Write-Host ""

# Función para probar endpoint
function Test-Endpoint {
    param([string]$url, [string]$description)
    Write-Host "Probando $description..." -ForegroundColor Cyan
    try {
        $response = Invoke-WebRequest -Uri $url -TimeoutSec 10
        $content = $response | Select-Object -ExpandProperty Content
        if ($response.StatusCode -eq 200) {
            Write-Host "✅ $description - OK" -ForegroundColor Green
            Write-Host "   Respuesta: $content" -ForegroundColor Gray
        } else {
            Write-Host "⚠️  $description - Status: $($response.StatusCode)" -ForegroundColor Yellow
        }
    } catch {
        $errorMessage = $_.Exception.Message
        switch {
            ($errorMessage -like "*Application not found*") {
                Write-Host "❌ $description - APLICACIÓN NO ENCONTRADA" -ForegroundColor Red
                Write-Host "   La aplicación aún no está desplegada en Railway" -ForegroundColor Red
                break
            }
            ($errorMessage -like "*timed out*") {
                Write-Host "⏱️  $description - Timeout (posiblemente desplegando)" -ForegroundColor Yellow
                break
            }
            default {
                Write-Host "❌ $description - Error: $errorMessage" -ForegroundColor Red
            }
        }
    }
    Write-Host ""
}

# Pruebas
Test-Endpoint "https://sistema-ventas-prod.up.railway.app/actuator/health" "Health Check"

# Solo probar login si health check funciona
try {
    $healthCheck = Invoke-WebRequest -Uri "https://sistema-ventas-prod.up.railway.app/actuator/health" -TimeoutSec 5
    if ($healthCheck.StatusCode -eq 200) {
        Write-Host "Probando login..." -ForegroundColor Cyan
        try {
            $body = '{"username":"admin","password":"admin123"}'
            $loginResponse = Invoke-WebRequest -Uri "https://sistema-ventas-prod.up.railway.app/api/auth/login" -Method POST -Body $body -ContentType "application/json" -TimeoutSec 10
            $loginContent = $loginResponse | Select-Object -ExpandProperty Content
            Write-Host "✅ Login - OK" -ForegroundColor Green
            Write-Host "   Respuesta:" -ForegroundColor Gray
            Write-Host "   $loginContent" -ForegroundColor Gray
        } catch {
            Write-Host "❌ Login - Error: $($_.Exception.Message)" -ForegroundColor Red
        }
    }
} catch {
    Write-Host "⏭️  Saltando prueba de login (health check falló)" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "=== SIGUIENTE PASOS ===" -ForegroundColor Green

if ($healthCheck -and $healthCheck.StatusCode -eq 200) {
    Write-Host "🎉 ¡La aplicación está funcionando correctamente!" -ForegroundColor Green
    Write-Host "   Frontend: https://sistema-ventas-web.vercel.app" -ForegroundColor Cyan
} else {
    Write-Host "El despliegue aún no está completo. Espera 3-5 minutos y ejecuta este script nuevamente." -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Para verificar manualmente:" -ForegroundColor Cyan
    Write-Host "1. Dashboard Railway: https://railway.com/project/153807c0-03da-4860-9149-b84412c10e71" -ForegroundColor White
    Write-Host "2. Revisa la pestaña 'Logs'" -ForegroundColor White
    Write-Host "3. Busca 'Build' y 'Deploy' completados" -ForegroundColor White
    Write-Host ""
    Write-Host "Si hay errores en los logs:" -ForegroundColor Yellow
    Write-Host "- Revisa variables de entorno (DATABASE_URL)" -ForegroundColor White
    Write-Host "- Confirma que el Dockerfile funciona (railway run docker build -t test .)" -ForegroundColor White
}

Write-Host ""
Write-Host "Ejecuta este script nuevamente: .\test-production.ps1" -ForegroundColor Gray
Write-Host ""
Write-Host "Ejecuta este script nuevamente: .\test-production.ps1" -ForegroundColor Gray
