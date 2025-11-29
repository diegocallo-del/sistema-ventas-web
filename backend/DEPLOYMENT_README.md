# 🚀 Deployment Backend - Sistema de Ventas

## 📋 PASOS PARA DEPLOYMENT EN PRODUCCIÓN

### ✅ PASO 1: Preparar Base de Datos PlanetScale

#### 1.1 Crear cuenta en PlanetScale
```bash
# Ir a https://planetscale.com
# Crear cuenta gratuita (ideal para desarrollo/producción)
```

#### 1.2 Crear database
```bash
# En PlanetScale dashboard:
# New database → "sistema-ventas-prod"
# Elegir región: "aws-us-east-1" (más cercano)
# Crear database
```

#### 1.3 Obtener credenciales de conexión
```bash
# En PlanetScale → tu database → "Connect"
# Elegir: "General" → "Connect with: Application"
# Copiar:
# - HOST: xxxxxx.us-east-1.psdb.cloud
# - USERNAME: xxxxxx
# - PASSWORD: pscale_pw_xxxxxx
# - DATABASE: sistema_ventas_prod
```

#### 1.4 Ejecutar script de Base de Datos
```bash
# Opción A: Ejecutar en PlanetScale Console
# Copiar todo el contenido de `backend/database/ventas_db.sql`
# Pegar en PlanetScale Console → SQL

# Opción B: Usar el script preparado
# Ejecutar: backend/deploy-planetscale.sql en PlanetScale
```

#### 1.5 Verificar que los datos existen
```sql
SELECT COUNT(*) FROM usuarios;
SELECT COUNT(*) FROM productos;
SELECT COUNT(*) FROM categorias;
```

### ✅ PASO 2: Configurar Variables de Producción

#### 2.1 Generar JWT Secret Seguro
```bash
# Generar secret seguro (256+ caracteres)
node -e "console.log(require('crypto').randomBytes(256).toString('hex'))"
# Copiar la salida para usar como JWT_SECRET
```

#### 2.2 Obtener clave de Groq AI (opcional)
```bash
# Ir a https://console.groq.com/
# Crear API key para análisis IA
```

### ✅ PASO 3: Desplegar en Render

#### 3.1 Crear cuenta en Render
```bash
# Ir a https://render.com
# Crear cuenta (tiene free tier excelente)
```

#### 3.2 Conectar repositorio Git
```bash
# En Render → "New Web Service"
# "Public Git repository"
# Pegar URL de tu GitHub: https://github.com/diegocallo-del/sistema-ventas-web
```

#### 3.3 Configurar Build Settings

**Settings:**
```
⚙️ Service Name: sistema-ventas-backend
📁 Root Directory: backend
🎯 Environment: Docker
💰 Free Plan
🚀 Build Command: docker build -t app .
📦 Dockerfile Path: ./Dockerfile
```

**Environment Variables:**
```
SPRING_PROFILES_ACTIVE=prod
DATABASE_URL=jdbc:mysql://[HOST]:3306/[DATABASE]?sslMode=VERIFY_IDENTITY
DB_USERNAME=[USERNAME]
DB_PASSWORD=[PASSWORD]
JWT_SECRET=[JWT_SECRET_GENERADO]
JWT_EXPIRATION=86400000
CORS_ALLOWED_ORIGINS=https://sistema-ventas-web.vercel.app,https://www.sistema-ventas-web.vercel.app
GROQ_API_KEY=[GROQ_API_KEY] (opcional)
```

#### 3.4 Deploy
```bash
# Click "Create Web Service"
# Esperar ~5-10 minutos
# Obtener URL: https://sistema-ventas-backend.onrender.com
```

### ✅ PASO 4: Verificar Funcionamiento

#### 4.1 Probar health check
```bash
curl https://sistema-ventas-backend.onrender.com/actuator/health
# Debería retornar: {"status":"UP"}
```

#### 4.2 Probar login
```bash
curl -X POST https://sistema-ventas-backend.onrender.com/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}'
# Debería retornar JWT token
```

#### 4.3 Probar APIs protegidas
```bash
# Usar el token del paso anterior
curl -X GET https://sistema-ventas-backend.onrender.com/api/productos \
  -H "Authorization: Bearer [TOKEN]"
```

## 🔧 CONFIGURACIÓN FRENTEEND

### Cambiar la URL en el frontend:

**Archivo:** `frontend/lib/config/env.ts`

**Cambiar:**
```typescript
export const API_BASE_URL = 'http://localhost:8080';
```

**Por:**
```typescript
export const API_BASE_URL = 'https://sistema-ventas-backend.onrender.com';
```

**Archivo:** `frontend/.env.local`
```env
# URL backend producción
NEXT_PUBLIC_API_URL=https://sistema-ventas-backend.onrender.com
```

## 📊 MONITOREO Y LOGS

### Revisar logs de aplicación
```bash
# En Render dashboard → logs
# Ver por errores de conexión DB
```

### Configurar healthchecks
```bash
# Render soporta healthchecks automáticamente
# Verifica endpoint: /actuator/health
```

## 🚨 PROBLEMAS COMUNES

### Problema: Error de conexión BD
```
Error: com.mysql.cj.jdbc.exceptions.CommunicationsException
```
**Solución:** Verificar credenciales PlanetScale, asegurar puerto 3306 y SSL.

### Problema: CORS error
```
Access to XMLHttpRequest blocked by CORS policy
```
**Solución:** Verificar CORS_ALLOWED_ORIGINS incluye el dominio de Vercel.

### Problema: JWT inválido
```
Full authentication is required
```
**Solución:** Verificar JWT_SECRET sea igual en frontend y backend.

### Problema: Flyway migration
```
Migration checksum mismatch
```
**Solución:** Cambiar `ddl-auto=validate` → `ddl-auto=update` en producción.

## ✅ VERIFICACIÓN FINAL

### 1. Login funciona ✅
### 2. CRUD productos funciona ✅
### 3. CRUD clientes funciona ✅
### 4. Crear ventas funciona ✅
### 5. IA funciona ✅
### 6. Frontend conecta ✅

## 🚀 TU APP ESTÁ EN PRODUCCIÓN! 🎉

**URLs finales:**
- 📱 **Frontend:** https://sistema-ventas-web.vercel.app
- 🔧 **Backend:** https://sistema-ventas-backend.onrender.com
- 🗄️ **Database:** PlanetScale (privado)

¡Felicitaciones! Tienes una aplicación enterprise completa en la nube.
