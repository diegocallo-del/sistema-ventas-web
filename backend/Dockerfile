# Dockerfile for Production Deployment on Railway
FROM eclipse-temurin:21-jdk-alpine AS build
WORKDIR /app

# Copy Maven wrapper and pom.xml from backend directory
COPY backend/mvnw backend/pom.xml ./
COPY backend/.mvn ./.mvn

# Download dependencies (caching layer)
RUN ./mvnw dependency:go-offline -B

# Copy source code with correct paths from buildContext root (desde sistema-ventas-web/)
COPY backend/src/main/java ./backend/src/main/java
COPY backend/src/main/resources ./backend/src/main/resources

# Build the application
RUN ./mvnw clean package -DskipTests

FROM eclipse-temurin:21-jre-alpine AS runtime
WORKDIR /app

# Copy the built JAR from build stage
COPY --from=build /app/target/*.jar app.jar

# Expose port 8080
EXPOSE 8080

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:8080/actuator/health || exit 1

# Run the application with production profile
ENTRYPOINT ["java", "-jar", "app.jar", "--spring.profiles.active=prod"]
