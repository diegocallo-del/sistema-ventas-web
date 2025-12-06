FROM eclipse-temurin:21-jre-alpine

WORKDIR /app

# Copiar wrapper de Maven y preparar dependencias offline
COPY .mvn/ .mvn/
COPY mvnw mvnw
COPY pom.xml pom.xml
RUN chmod +x mvnw && ./mvnw -q -DskipTests dependency:go-offline

# Copiar código fuente y construir el JAR
COPY src src
RUN ./mvnw -q -DskipTests package

# Configuración de puerto
ENV PORT=8080
EXPOSE 8080

# Ejecutar Spring Boot leyendo $PORT de la plataforma
CMD ["sh","-c","java -Dserver.port=${PORT} -jar target/sistema-ventas-api-1.0.0.jar"]
