-- Script para ejecutar en PlanetScale
-- Crea la base de datos y las tablas para producción

-- Ejecutar manualmente en PlanetScale Console o con mysql client
-- mysql -h {HOST} -u {USERNAME} -p{PASSWORD} < deploy-planetscale.sql

-- Crear base de datos si no existe (sustituir 'sistema_ventas_prod' por nombre deseado)
CREATE DATABASE IF NOT EXISTS sistema_ventas_prod CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE sistema_ventas_prod;

-- Crear usuario administrador si no existe (cambiar contraseña)
CREATE USER IF NOT EXISTS 'sistema_user'@'%' IDENTIFIED BY 'tu_password_seguro_aqui';
GRANT ALL PRIVILEGES ON sistema_ventas_prod.* TO 'sistema_user'@'%';

-- Ahora ejecutar tu script existente:
SOURCE backend/database/ventas_db.sql;

-- O puedes copiar todo el contenido de backend/database/ventas_db.sql aquí

-- Verificar que las tablas se crearon
SHOW TABLES;

-- Verificar que los datos iniciales están
SELECT COUNT(*) as total_usuarios FROM usuarios;
SELECT COUNT(*) as total_productos FROM productos;
SELECT COUNT(*) as total_categorias FROM categorias;

-- Crear usuario administrador adicional para producción si es necesario
-- INSERT INTO usuarios (nombre, email, password, rol, activo) VALUES
-- ('Administrador Producción', 'admin@produccion.com', '$2a$10$new_hasheada_password_here', 'ADMIN', 1);
