#!/bin/sh

# Script de inicio para Spring Boot - desarrollo local
# Configuración de Railway comentada - usando MySQL local

set -e

echo "Starting Spring Boot application..."

# Para desarrollo local, usar mvnw spring-boot:run
# Para producción, descomentar la línea siguiente:
# exec java -jar app.jar -Dspring.profiles.active=prod
