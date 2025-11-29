# 🛠️ Configuración Local - Sistema de Ventas Web

## 📋 Requisitos Previos

### 1. MySQL Workbench
- ✅ **Usuario**: `root`
- ✅ **Contraseña**: `2007antony`
- ✅ **Puerto**: `3306`
- ✅ **Host**: `localhost`
- ✅ **Nombre de conexión**: `sistema-ventas-web`

### 2. Node.js y Java
- ✅ Node.js 18+ (`npm install`)
- ✅ Java 17+ (JDK)
- ✅ Maven (`mvn --version`)

---

## 🚀 Configuración Rápida

### Paso 1: Configurar Base de Datos
Ejecuta el script PowerShell para configurar automáticamente la base de datos:

```powershell
# Ejecutar como administrador (si es necesario)
.\setup-local-mysql.ps1
```

Este script:
- ✅ Verifica conexión a MySQL
- ✅ Crea la base de datos `sistema_ventas_db`
- ✅ Ejecuta el script SQL completo
- ✅ Crea usuarios y datos de ejemplo

### Paso 2: Instalar Dependencias del Frontend
```bash
cd frontend
npm install
```

### Paso 3: Ejecutar Backend
```bash
cd backend
./mvnw spring-boot:run
```
El backend estará disponible en: `http://localhost:8080`

### Paso 4: Ejecutar Frontend
```bash
cd frontend
npm run dev
```
El frontend estará disponible en: `http://localhost:3000`

---

## 🔐 Credenciales de Acceso

### Usuario Administrador
- **Email**: `admin@sistema-ventas.com`
- **Contraseña**: `admin123`
- **Rol**: ADMIN

### Usuario Vendedor
- **Email**: `juan@vendedor.com`
- **Contraseña**: `vendedor123`
- **Rol**: VENDEDOR

---

## 🗂️ Archivos de Configuración Modificados

### Backend
- ✅ `backend/.env` - Credenciales MySQL locales
- ✅ `backend/src/main/resources/application.properties` - URL y credenciales BD
- ✅ `backend/database/ventas_db.sql` - Script actualizado para BD `sistema_ventas_db`

### Frontend
- ✅ `frontend/.env.local` - BACKEND_URL apuntando a localhost:8080
- ✅ `frontend/lib/config/endpoints.ts` - Prefijo `/api` agregado

---

## 🔧 Solución de Problemas

### Error: "Can't connect to MySQL server"
```bash
# Verificar que MySQL esté ejecutándose
services.msc
# Buscar "MySQL" y verificar estado
```

### Error: "Access denied for user 'root'@'localhost'"
```sql
-- En MySQL Workbench, ejecutar:
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '2007antony';
FLUSH PRIVILEGES;
```

### Error: "Table doesn't exist"
```bash
# Re-ejecutar configuración
.\setup-local-mysql.ps1
```

---

## 📊 Estructura de Base de Datos

La base de datos `sistema_ventas_db` incluye:

- ✅ **usuarios** - Gestión de usuarios del sistema
- ✅ **productos** - Catálogo de productos
- ✅ **categorias** - Clasificación de productos
- ✅ **clientes** - Información de clientes
- ✅ **ventas** - Registro de ventas
- ✅ **detalle_venta** - Detalles de cada venta

### Datos de Ejemplo Incluidos
- 1 usuario administrador
- 2 usuarios vendedores
- 5 categorías de productos
- 5 productos de ejemplo
- 2 clientes
- 1 venta de ejemplo

---

## 🎯 Verificación de Funcionamiento

### 1. Backend API
```bash
# Test conexión backend
curl http://localhost:8080/api/auth/test
```

### 2. Login Administrador
1. Abrir `http://localhost:3000`
2. Usuario: `admin@sistema-ventas.com`
3. Contraseña: `admin123`
4. Deberías poder acceder al dashboard

### 3. Verificar Base de Datos
En MySQL Workbench, conectar a `sistema-ventas-web` y verificar:
```sql
USE sistema_ventas_db;
SHOW TABLES;
SELECT * FROM usuarios;
```

---

## 📋 Siguientes Pasos

Después de la configuración exitosa:

1. ✅ **Dashboard de Administración**: Gestiona productos, categorías y usuarios
2. ✅ **Sistema de Ventas**: Registra ventas y administra inventario
3. ✅ **Reportes**: Visualiza estadísticas y reportes
4. ✅ **Gestión de Clientes**: Mantén información de clientes

---

## 🤝 Soporte

Si encuentras problemas durante la configuración:

1. Verifica que MySQL Workbench esté ejecutándose
2. Confirma las credenciales de MySQL (`root` / `2007antony`)
3. Revisa que el puerto 3306 no esté bloqueado
4. Ejecuta nuevamente `.\setup-local-mysql.ps1`

¡Tu sistema de ventas local está listo para usar! 🎉
