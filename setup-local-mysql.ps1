# Script para configurar MySQL Workbench local - Sistema de Ventas
# Ejecutar como Administrador si es necesario

Write-Host "=== CONFIGURANDO SISTEMA DE VENTAS - MYSQL LOCAL ===" -ForegroundColor Green
Write-Host "===================================================" -ForegroundColor Yellow

# Variables de configuracion
$DB_HOST = "localhost"
$DB_PORT = "3306"
$DB_USER = "root"
$DB_PASS = "2007antony"
$DB_NAME = "sistema_ventas_db"
$SQL_FILE = "backend\database\ventas_db.sql"

# Funcion para ejecutar comandos MySQL
function Execute-MySQLCommand {
    param(
        [string]$Command,
        [string]$Database = ""
    )

    if ($Database) {
        $mysqlCmd = "mysql -h $DB_HOST -P $DB_PORT -u $DB_USER -p$DB_PASS $Database -e `"$Command`""
    } else {
        $mysqlCmd = "mysql -h $DB_HOST -P $DB_PORT -u $DB_USER -p$DB_PASS -e `"$Command`""
    }

    try {
        Invoke-Expression $mysqlCmd 2>$null
        return $LASTEXITCODE -eq 0
    } catch {
        return $false
    }
}

# Verificar si tenemos MySQL disponible
Write-Host "Verificando si MySQL esta disponible..." -ForegroundColor Cyan

try {
    $version = mysql -h $DB_HOST -P $DB_PORT -u $DB_USER -p$DB_PASS -e "SELECT VERSION();" 2>$null
    if ($LASTEXITCODE -eq 0) {
        Write-Host "Conexion a MySQL OK - Procediendo con la configuracion..." -ForegroundColor Green
    } else {
        throw "No se puede conectar"
    }
} catch {
    Write-Host ""
    Write-Host "=== INSTRUCCIONES PARA CONFIGURAR MYSQL MANUALMENTE ===" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "1. Abre MySQL Workbench" -ForegroundColor White
    Write-Host "2. Crea una nueva conexion llamada 'sistema-ventas-web'" -ForegroundColor White
    Write-Host "3. Configura:" -ForegroundColor White
    Write-Host "   - Hostname: localhost" -ForegroundColor Cyan
    Write-Host "   - Port: 3306" -ForegroundColor Cyan
    Write-Host "   - Username: root" -ForegroundColor Cyan
    Write-Host "   - Password: 2007antony" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "4. Una vez conectada, abre un Query tab y ejecuta:" -ForegroundColor White
    Write-Host "   CREATE DATABASE IF NOT EXISTS sistema_ventas_db;" -ForegroundColor Green
    Write-Host ""
    Write-Host "5. Luego ejecuta el contenido del archivo 'backend\database\ventas_db.sql'" -ForegroundColor White
    Write-Host ""
    Write-Host "6. Despues ejecuta nuevamente este script: .\setup-local-mysql.ps1" -ForegroundColor Yellow
    Write-Host ""
    exit 1
}

# Crear base de datos si no existe
Write-Host "Creando base de datos '$DB_NAME' si no existe..." -ForegroundColor Cyan
$dbCreated = Execute-MySQLCommand "CREATE DATABASE IF NOT EXISTS $DB_NAME;"

if ($dbCreated) {
    Write-Host "Base de datos creada/verificada correctamente" -ForegroundColor Green
} else {
    Write-Host "Error creando la base de datos" -ForegroundColor Red
    exit 1
}

# Ejecutar el script SQL completo
Write-Host "Ejecutando script de base de datos..." -ForegroundColor Cyan

if (Test-Path $SQL_FILE) {
    try {
        $mysqlCmd = "type `"$SQL_FILE`" | mysql -h $DB_HOST -P $DB_PORT -u $DB_USER -p$DB_PASS $DB_NAME"
        $result = Invoke-Expression $mysqlCmd 2>$null

        if ($LASTEXITCODE -eq 0) {
            Write-Host "Base de datos configurada exitosamente!" -ForegroundColor Green
        } else {
            Write-Host "Error ejecutando el script SQL" -ForegroundColor Red
            exit 1
        }
    } catch {
        Write-Host "Error ejecutando script SQL" -ForegroundColor Red
        exit 1
    }
} else {
    Write-Host "ERROR: Archivo SQL no encontrado: $SQL_FILE" -ForegroundColor Red
    exit 1
}

# Verificar que las tablas se crearon
Write-Host "Verificando creacion de tablas..." -ForegroundColor Cyan
Execute-MySQLCommand "SHOW TABLES;" $DB_NAME | Out-Null

# Mostrar usuarios existentes
Write-Host "Usuarios configurados:" -ForegroundColor Cyan
Execute-MySQLCommand "SELECT id, nombre, email, rol FROM usuarios WHERE activo = 1;" $DB_NAME | Out-Null

Write-Host ""
Write-Host "=== CONFIGURACION COMPLETADA EXITOSAMENTE ===" -ForegroundColor Green
Write-Host "==============================================" -ForegroundColor Yellow
Write-Host "Credenciales de login:" -ForegroundColor White
Write-Host "  Admin: admin@sistema-ventas.com / admin123" -ForegroundColor Cyan
Write-Host "  Vendedor: juan@vendedor.com / vendedor123" -ForegroundColor Cyan
Write-Host ""
Write-Host "Ahora puedes ejecutar:" -ForegroundColor White
Write-Host "  Backend: cd backend && ./mvnw spring-boot:run" -ForegroundColor Yellow
Write-Host "  Frontend: cd frontend && npm run dev" -ForegroundColor Yellow
Write-Host ""
Write-Host "URLs:" -ForegroundColor White
Write-Host "  Frontend: http://localhost:3000" -ForegroundColor Cyan
Write-Host "  Backend: http://localhost:8080" -ForegroundColor Cyan
