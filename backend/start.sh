#!/bin/sh

# Railway start script for Spring Boot

set -e

echo "Starting Spring Boot application..."

exec java -jar app.jar -Dspring.profiles.active=prod
