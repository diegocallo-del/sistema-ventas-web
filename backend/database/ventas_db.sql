-- Script simplificado para MySQL Workbench local
-- Base de datos: sistema_ventas_db

CREATE DATABASE IF NOT EXISTS sistema_ventas_db;
USE sistema_ventas_db;

-- Eliminar tablas existentes
DROP TABLE IF EXISTS detalle_venta;
DROP TABLE IF EXISTS ventas;
DROP TABLE IF EXISTS productos;
DROP TABLE IF EXISTS clientes;
DROP TABLE IF EXISTS usuarios;
DROP TABLE IF EXISTS categorias;

-- Tabla de categorías
CREATE TABLE categorias (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT,
    activo TINYINT(1) NOT NULL DEFAULT 1,
    fecha_creacion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tabla de usuarios
CREATE TABLE usuarios (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    rol VARCHAR(50) NOT NULL DEFAULT 'VENDEDOR',
    activo TINYINT(1) NOT NULL DEFAULT 1,
    fecha_creacion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tabla de clientes (simplificada)
CREATE TABLE clientes (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    telefono VARCHAR(20),
    direccion TEXT,
    numero_documento VARCHAR(20),
    activo TINYINT(1) NOT NULL DEFAULT 1,
    fecha_creacion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tabla de productos (simplificada)
CREATE TABLE productos (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    codigo VARCHAR(100),
    nombre VARCHAR(255) NOT NULL,
    descripcion TEXT,
    precio DECIMAL(10,2) NOT NULL,
    stock INT NOT NULL DEFAULT 0,
    categoria_id BIGINT,
    activo TINYINT(1) NOT NULL DEFAULT 1,
    fecha_creacion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (categoria_id) REFERENCES categorias(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tabla de ventas
CREATE TABLE ventas (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    cliente_id BIGINT,
    usuario_id BIGINT NOT NULL,
    fecha_venta TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    total DECIMAL(15,2) NOT NULL DEFAULT 0.00,
    estado VARCHAR(20) NOT NULL DEFAULT 'COMPLETADA',
    metodo_pago VARCHAR(50) DEFAULT 'EFECTIVO',
    activo TINYINT(1) NOT NULL DEFAULT 1,
    fecha_creacion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (cliente_id) REFERENCES clientes(id),
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tabla de detalle de ventas
CREATE TABLE detalle_venta (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    venta_id BIGINT NOT NULL,
    producto_id BIGINT NOT NULL,
    cantidad INT NOT NULL,
    precio_unitario DECIMAL(10,2) NOT NULL,
    subtotal DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (venta_id) REFERENCES ventas(id) ON DELETE CASCADE,
    FOREIGN KEY (producto_id) REFERENCES productos(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Datos de ejemplo
INSERT INTO categorias (nombre, descripcion) VALUES
('Electrónica', 'Productos electrónicos'),
('Ropa', 'Prendas de vestir'),
('Alimentos', 'Productos alimenticios'),
('Hogar', 'Artículos para el hogar'),
('Deportes', 'Equipamiento deportivo');

INSERT INTO usuarios (nombre, email, password, rol) VALUES
('Administrador', 'admin@sistema-ventas.com', 'admin123', 'ADMIN'),
('Juan Pérez', 'juan@vendedor.com', 'vendedor123', 'VENDEDOR'),
('Ana García', 'ana@vendedor.com', 'vendedor123', 'VENDEDOR');

INSERT INTO clientes (nombre, email, telefono, direccion, numero_documento) VALUES
('Cliente Contado', NULL, NULL, NULL, NULL),
('Carlos López', 'carlos@email.com', '999888777', 'Av. Principal 123', '12345678'),
('María Rodríguez', 'maria@email.com', '999777666', 'Jr. Los Olivos 456', '87654321');

INSERT INTO productos (codigo, nombre, descripcion, precio, stock, categoria_id) VALUES
('P001', 'Laptop HP', 'Laptop HP Pavilion 14 pulgadas', 2500.00, 10, 1),
('P002', 'Camisa Polo', 'Camisa polo de algodón', 45.00, 50, 2),
('P003', 'Arroz Premium', 'Arroz blanco 5kg', 25.00, 100, 3),
('P004', 'Juego de Sábanas', 'Juego de sábanas matrimonial', 80.00, 20, 4),
('P005', 'Pelota de Fútbol', 'Pelota oficial tamaño 5', 35.00, 30, 5);

INSERT INTO ventas (cliente_id, usuario_id, total, estado, metodo_pago) VALUES
(2, 2, 2580.00, 'COMPLETADA', 'EFECTIVO');

INSERT INTO detalle_venta (venta_id, producto_id, cantidad, precio_unitario, subtotal) VALUES
(1, 1, 1, 2500.00, 2500.00),
(1, 5, 2, 35.00, 70.00);

