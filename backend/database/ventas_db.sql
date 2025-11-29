-- Script completo para la base de datos del Sistema de Ventas
-- Base de datos: MySQL 8.0+
-- Ejecutar este script para crear la estructura completa

-- Crear y usar la base de datos sistema_ventas_db (para MySQL Workbench local)
CREATE DATABASE IF NOT EXISTS sistema_ventas_db;
USE sistema_ventas_db;

-- Limpiar tablas existentes
DROP TABLE IF EXISTS detalle_venta;
DROP TABLE IF EXISTS ventas;
DROP TABLE IF EXISTS productos;
DROP TABLE IF EXISTS clientes;
DROP TABLE IF EXISTS usuarios;
DROP TABLE IF EXISTS categorias;

-- Eliminar tablas en orden inverso para evitar problemas de claves foráneas
DROP TABLE IF EXISTS detalle_venta;
DROP TABLE IF EXISTS ventas;
DROP TABLE IF EXISTS productos;
DROP TABLE IF EXISTS clientes;
DROP TABLE IF EXISTS usuarios;
DROP TABLE IF EXISTS categorias;

-- Crear tabla de categorías
CREATE TABLE categorias (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT,
    activo TINYINT(1) NOT NULL DEFAULT 1,
    fecha_creacion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    fecha_modificacion TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Crear tabla de usuarios
CREATE TABLE usuarios (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    rol VARCHAR(50) NOT NULL DEFAULT 'VENDEDOR',
    activo TINYINT(1) NOT NULL DEFAULT 1,
    fecha_creacion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    fecha_modificacion TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Crear tabla de clientes
CREATE TABLE clientes (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    telefono VARCHAR(20),
    direccion TEXT,
    tipo_documento VARCHAR(10) DEFAULT 'DNI',
    numero_documento VARCHAR(20) UNIQUE,
    fecha_nacimiento DATE,
    genero VARCHAR(10),
    activo TINYINT(1) NOT NULL DEFAULT 1,
    fecha_creacion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    fecha_modificacion TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    creado_por BIGINT,
    modificado_por BIGINT,
    FOREIGN KEY (creado_por) REFERENCES usuarios(id),
    FOREIGN KEY (modificado_por) REFERENCES usuarios(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Crear tabla de productos
CREATE TABLE productos (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    descripcion TEXT,
    precio DECIMAL(10,2) NOT NULL,
    stock INT NOT NULL DEFAULT 0,
    categoria_id BIGINT,
    imagen_url VARCHAR(500),
    sku VARCHAR(100) UNIQUE,
    costo DECIMAL(10,2),
    peso_kg DECIMAL(8,3),
    dimensiones_cm VARCHAR(50),
    marca VARCHAR(100),
    proveedor VARCHAR(100),
    ubicacion_almacen VARCHAR(100),
    minimo_stock INT,
    maximo_stock INT,
    fecha_vencimiento DATE,
    lote VARCHAR(50),
    codigo_barras VARCHAR(100),
    etiquetas JSON,
    atributos_extra JSON,
    activo TINYINT(1) NOT NULL DEFAULT 1,
    fecha_creacion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    fecha_modificacion TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    creado_por BIGINT,
    modificado_por BIGINT,
    FOREIGN KEY (categoria_id) REFERENCES categorias(id),
    FOREIGN KEY (creado_por) REFERENCES usuarios(id),
    FOREIGN KEY (modificado_por) REFERENCES usuarios(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Crear tabla de ventas
CREATE TABLE ventas (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    cliente_id BIGINT,
    usuario_id BIGINT NOT NULL,
    fecha_venta TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    total DECIMAL(15,2) NOT NULL DEFAULT 0.00,
    estado VARCHAR(20) NOT NULL DEFAULT 'COMPLETADA',
    notas TEXT,
    metodo_pago VARCHAR(50) DEFAULT 'EFECTIVO',
    descuento DECIMAL(10,2) DEFAULT 0.00,
    impuestos DECIMAL(10,2) DEFAULT 0.00,
    activo TINYINT(1) NOT NULL DEFAULT 1,
    fecha_creacion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    fecha_modificacion TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    creado_por BIGINT,
    FOREIGN KEY (cliente_id) REFERENCES clientes(id),
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
    FOREIGN KEY (creado_por) REFERENCES usuarios(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Crear tabla de detalle de ventas
CREATE TABLE detalle_venta (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    venta_id BIGINT NOT NULL,
    producto_id BIGINT NOT NULL,
    cantidad INT NOT NULL,
    precio_unitario DECIMAL(10,2) NOT NULL,
    subtotal DECIMAL(10,2) NOT NULL,
    descuento DECIMAL(10,2) DEFAULT 0.00,
    fecha_creacion DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    fecha_modificacion DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    activo TINYINT(1) NOT NULL DEFAULT 1,
    FOREIGN KEY (venta_id) REFERENCES ventas(id) ON DELETE CASCADE,
    FOREIGN KEY (producto_id) REFERENCES productos(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Crear índices para mejorar rendimiento
CREATE INDEX idx_categorias_activo ON categorias(activo);
CREATE INDEX idx_usuarios_email ON usuarios(email);
CREATE INDEX idx_usuarios_rol ON usuarios(rol);
CREATE INDEX idx_usuarios_activo ON usuarios(activo);
CREATE INDEX idx_clientes_numero_documento ON clientes(numero_documento);
CREATE INDEX idx_clientes_activo ON clientes(activo);
CREATE INDEX idx_productos_categoria_id ON productos(categoria_id);
CREATE INDEX idx_productos_sku ON productos(sku);
CREATE INDEX idx_productos_activo ON productos(activo);
CREATE INDEX idx_ventas_cliente_id ON ventas(cliente_id);
CREATE INDEX idx_ventas_usuario_id ON ventas(usuario_id);
CREATE INDEX idx_ventas_fecha_venta ON ventas(fecha_venta);
CREATE INDEX idx_ventas_estado ON ventas(estado);
CREATE INDEX idx_detalle_venta_venta_id ON detalle_venta(venta_id);
CREATE INDEX idx_detalle_venta_producto_id ON detalle_venta(producto_id);
CREATE INDEX idx_detalle_venta_activo ON detalle_venta(activo);

-- Datos de ejemplo
-- Insertar categorías
INSERT INTO categorias (nombre, descripcion, activo) VALUES
('Electrónica', 'Productos electrónicos y gadgets', 1),
('Ropa', 'Prendas de vestir para hombres, mujeres y niños', 1),
('Alimentos', 'Productos alimenticios y bebidas', 1),
('Hogar', 'Artículos para el hogar y decoración', 1),
('Deportes', 'Equipamiento y accesorios deportivos', 1);

-- Insertar usuarios - CONTRASEÑAS FUNCIONALES
INSERT INTO usuarios (nombre, email, password, rol, activo) VALUES
('Administrador', 'admin@sistema-ventas.com', 'admin123', 'ADMIN', 1),
('Juan Pérez', 'juan@vendedor.com', 'vendedor123', 'VENDEDOR', 1),
('Ana García', 'ana@vendedor.com', 'vendedor123', 'VENDEDOR', 1);

-- Insertar clientes
INSERT INTO clientes (nombre, email, telefono, tipo_documento, numero_documento, activo, creado_por) VALUES
('Cliente Contado', NULL, NULL, 'CONTADO', NULL, 1, 1),
('Carlos López', 'carlos@email.com', '999888777', 'DNI', '12345678', 1, 1),
('María Rodríguez', 'maria@email.com', '999777666', 'DNI', '87654321', 1, 1);

-- Insertar productos
INSERT INTO productos (nombre, descripcion, precio, stock, categoria_id, sku, activo, creado_por) VALUES
('Laptop HP', 'Laptop HP Pavilion 14 pulgadas', 2500.00, 10, 1, 'HP001', 1, 1),
('Camisa Polo', 'Camisa polo de algodón talla M', 45.00, 50, 2, 'CAM001', 1, 1),
('Arroz Premium', 'Arroz blanco 5kg', 25.00, 100, 3, 'ARR001', 1, 1),
('Juego de Sábanas', 'Juego de sábanas matrimonial', 80.00, 20, 4, 'SAB001', 1, 1),
('Pelota de Fútbol', 'Pelota oficial de fútbol tamaño 5', 35.00, 30, 5, 'PEL001', 1, 1);

-- Insertar una venta de ejemplo
INSERT INTO ventas (cliente_id, usuario_id, fecha_venta, total, estado, metodo_pago, creado_por) VALUES
(2, 2, NOW(), 2580.00, 'COMPLETADA', 'EFECTIVO', 2);

-- Insertar detalle de la venta
INSERT INTO detalle_venta (venta_id, producto_id, cantidad, precio_unitario, subtotal, activo) VALUES
(1, 1, 1, 2500.00, 2500.00, 1),
(1, 5, 2, 35.00, 70.00, 1);

-- Crear vistas útiles (opcional)
CREATE VIEW vista_ventas_resumen AS
SELECT
    v.id,
    c.nombre AS cliente,
    u.nombre AS vendedor,
    v.fecha_venta,
    v.total,
    v.estado,
    v.metodo_pago
FROM ventas v
LEFT JOIN clientes c ON v.cliente_id = c.id
JOIN usuarios u ON v.usuario_id = u.id
WHERE v.activo = 1;

CREATE VIEW vista_inventario AS
SELECT
    p.id,
    p.nombre,
    p.sku,
    p.stock,
    p.precio,
    cat.nombre AS categoria,
    CASE
        WHEN p.stock <= COALESCE(p.minimo_stock, 0) THEN 'BAJO STOCK'
        WHEN p.stock > COALESCE(p.maximo_stock, 999999) THEN 'SOBRE STOCK'
        ELSE 'NORMAL'
    END AS estado_stock
FROM productos p
LEFT JOIN categorias cat ON p.categoria_id = cat.id
WHERE p.activo = 1;

-- Crear procedimientos almacenados (opcional)
DELIMITER //

CREATE PROCEDURE sp_actualizar_stock(
    IN p_venta_id BIGINT
)
BEGIN
    UPDATE productos p
    INNER JOIN detalle_venta dv ON p.id = dv.producto_id
    SET p.stock = p.stock - dv.cantidad
    WHERE dv.venta_id = p_venta_id;
END //

CREATE PROCEDURE sp_calcular_total_venta(
    IN p_venta_id BIGINT
)
BEGIN
    UPDATE ventas v
    SET v.total = (
        SELECT SUM(dv.subtotal - dv.descuento)
        FROM detalle_venta dv
        WHERE dv.venta_id = p_venta_id
    )
    WHERE v.id = p_venta_id;
END //

DELIMITER ;

-- Ejecutar procedimientos para la venta de ejemplo
CALL sp_actualizar_stock(1);

-- Fin del script
