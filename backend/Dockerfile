# Build stage
FROM eclipse-temurin:21-jdk-alpine AS build

WORKDIR /app

# Copiar Maven wrapper y pom.xml desde backend
COPY .mvn .mvn
COPY mvnw pom.xml ./

# Descargar dependencias
RUN ./mvnw dependency:go-offline -B

# Copiar código fuente
COPY src ./src

# Compilar la aplicación
RUN ./mvnw package -DskipTests

# Runtime stage
FROM eclipse-temurin:21-jre-alpine

WORKDIR /app

COPY --from=build /app/target/*.jar app.jar

EXPOSE 8080

CMD ["java", "-jar", "app.jar"]
