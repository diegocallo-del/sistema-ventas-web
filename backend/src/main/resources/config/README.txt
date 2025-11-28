═══════════════════════════════════════════════════════════
CARPETA: CONFIG (Configuración)
RESPONSABLE: PERSONA 2 - Infraestructura
═══════════════════════════════════════════════════════════

DESCRIPCIÓN:
Archivos de configuración de Spring Boot. La configuración principal está en
src/main/resources/application.properties, pero esta carpeta puede tener
configuraciones adicionales si se necesitan.

ARCHIVOS PRINCIPALES:
📁 src/main/resources/application.properties (configuración principal)

CONTENIDO DE application.properties:
# Base de datos
spring.datasource.url=jdbc:mysql://localhost:3306/ventas_db
spring.datasource.username=root
spring.datasource.password=
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

# JPA / Hibernate
spring.jpa.hibernate.ddl-auto=none
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect

# Flyway (migraciones)
spring.flyway.enabled=true
spring.flyway.locations=classpath:db/migration
spring.flyway.baseline-on-migrate=true

# JWT
jwt.secret=tu-clave-secreta-muy-larga-y-segura-aqui
jwt.expiration=86400000

# CORS
cors.allowed-origins=http://localhost:3000

# Puerto del servidor
server.port=8080

NOTAS IMPORTANTES:
- application.properties es el archivo principal de configuración
- Spring Boot lee automáticamente este archivo al iniciar
- Las configuraciones de JPA, Flyway y JWT van aquí
- Coordina con Persona 5 para configuraciones de seguridad
