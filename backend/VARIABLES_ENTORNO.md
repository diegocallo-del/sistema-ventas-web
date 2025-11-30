# Variables de Entorno para Producción

## Configuración Requerida

### JWT
```bash
export JWT_SECRET="tu-clave-super-secreta-minimo-256-bits-aleatoria-y-segura"
export JWT_EXPIRATION=1800000  # 30 minutos en milisegundos
```

### CORS
```bash
export CORS_ALLOWED_ORIGINS="https://tu-dominio.com,https://www.tu-dominio.com"
```

### Base de Datos
```bash
export SPRING_DATASOURCE_URL="jdbc:mysql://tu-servidor:3306/sistema_ventas_db"
export SPRING_DATASOURCE_USERNAME="tu_usuario"
export SPRING_DATASOURCE_PASSWORD="tu_contraseña_segura"
```

## Generar JWT_SECRET Seguro

```bash
# Opción 1: OpenSSL
openssl rand -base64 64

# Opción 2: Node.js
node -e "console.log(require('crypto').randomBytes(64).toString('base64'))"

# Opción 3: Python
python -c "import secrets; print(secrets.token_urlsafe(64))"
```

## Ejemplo de .env (NO subir a git)

```env
JWT_SECRET=tu-clave-super-secreta-generada-aleatoriamente
JWT_EXPIRATION=1800000
CORS_ALLOWED_ORIGINS=https://tu-dominio.com
SPRING_DATASOURCE_URL=jdbc:mysql://localhost:3306/sistema_ventas_db
SPRING_DATASOURCE_USERNAME=root
SPRING_DATASOURCE_PASSWORD=tu_contraseña
```

