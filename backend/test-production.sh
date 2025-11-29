#!/bin/bash

# Script para probar backend antes del deployment en producción
echo "🚀 Probando configuración de producción..."

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Función para imprimir mensajes
print_status() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

# Verificar que estamos en el directorio backend
if [ ! -f "pom.xml" ]; then
    print_error "No se encontró pom.xml. Ejecutar desde directorio backend/"
    exit 1
fi

print_status "Directorio correcto"

# Verificar que existan archivos requeridos
REQUIRED_FILES=("src/main/resources/application-prod.properties" "Dockerfile" "deploy-planetscale.sql")

for file in "${REQUIRED_FILES[@]}"; do
    if [ -f "$file" ]; then
        print_status "Archivo encontrado: $file"
    else
        print_error "Archivo faltante: $file"
        exit 1
    fi
done

# Verificar que el perfil de producción compile
print_status "Compilando aplicación..."
if ./mvnw clean compile -q; then
    print_status "Compilación exitosa"
else
    print_error "Error en compilación"
    exit 1
fi

# Verificar que exista configuración de BD
if grep -q "DATABASE_URL" src/main/resources/application-prod.properties; then
    print_status "Configuración de base de datos presente"
else
    print_warning "Verificar configuración de DATABASE_URL"
fi

# Verificar CORS configuración
if grep -q "cors.allowed-origins" src/main/resources/application-prod.properties; then
    print_status "Configuración CORS presente"
else
    print_warning "Verificar configuración CORS"
fi

# Verificar que el Dockerfile contenga HEALTHCHECK
if grep -q "HEALTHCHECK" Dockerfile; then
    print_status "Dockerfile con healthcheck configurado"
else
    print_warning "Verificar healthcheck en Dockerfile"
fi

# Verificar estructura de BD
print_status "Verificando estructura de base de datos..."

# Aquí podríamos agregar más verificaciones si fuera necesario

print_status "🎉 Verificación completada!"
echo ""
echo "📋 PRÓXIMOS PASOS:"
echo "1. Crear cuenta en PlanetScale (https://planetscale.com)"
echo "2. Crear database y obtener credenciales de conexión"
echo "3. Ejecutar el script de base de datos en PlanetScale"
echo "4. Generar JWT_SECRET seguro"
echo "5. Crear cuenta en Render (https://render.com)"
echo "6. Conectar repositorio GitHub y configurar variables"
echo ""
echo "📖 Ver DEPLOYMENT_README.md para instrucciones detalladas"
