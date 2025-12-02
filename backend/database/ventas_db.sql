-- ============================================================
--   BASE DE DATOS TIPO MERCADO LIBRE (ECOMMERCE PROFESIONAL)
-- ============================================================

CREATE DATABASE IF NOT EXISTS sistema_ventas_db;
USE sistema_ventas_db;

-- ==========================================
-- DROP ALL TABLES (orden correcto para evitar FK errors)
-- ==========================================
SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE IF EXISTS calificaciones;
DROP TABLE IF EXISTS mensajes;
DROP TABLE IF EXISTS envios;
DROP TABLE IF EXISTS pagos;
DROP TABLE IF EXISTS orden_items;
DROP TABLE IF EXISTS ordenes;
DROP TABLE IF EXISTS carrito_items;
DROP TABLE IF EXISTS carrito;
DROP TABLE IF EXISTS producto_imagenes;
DROP TABLE IF EXISTS producto_variantes;
DROP TABLE IF EXISTS publicaciones;
DROP TABLE IF EXISTS productos;
DROP TABLE IF EXISTS categorias;
DROP TABLE IF EXISTS direcciones;
DROP TABLE IF EXISTS usuario_roles;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS usuarios;
SET FOREIGN_KEY_CHECKS = 1;

-- ==========================================
-- USUARIOS
-- ==========================================
CREATE TABLE usuarios (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(150) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    telefono VARCHAR(20),
    numero_documento VARCHAR(20),
    rol VARCHAR(31) NOT NULL,
    activo TINYINT(1) DEFAULT 1,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_modificacion DATETIME
);

-- ==========================================
-- ROLES
-- ==========================================
CREATE TABLE roles (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE usuario_roles (
    usuario_id BIGINT NOT NULL,
    rol_id BIGINT NOT NULL,
    PRIMARY KEY(usuario_id, rol_id),
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE,
    FOREIGN KEY (rol_id) REFERENCES roles(id) ON DELETE CASCADE
);

-- ==========================================
-- DIRECCIONES
-- ==========================================
CREATE TABLE direcciones (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    usuario_id BIGINT NOT NULL,
    direccion VARCHAR(255) NOT NULL,
    ciudad VARCHAR(100),
    distrito VARCHAR(100),
    codigo_postal VARCHAR(20),
    referencia TEXT,
    principal TINYINT(1) DEFAULT 0,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE
);

-- ==========================================
-- CATEGORIAS (jerárquicas)
-- ==========================================
CREATE TABLE categorias (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    categoria_padre BIGINT,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_modificacion DATETIME,
    activo TINYINT(1) DEFAULT 1,
    FOREIGN KEY (categoria_padre) REFERENCES categorias(id)
);

-- ==========================================
-- PRODUCTOS
-- ==========================================
CREATE TABLE productos (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT,
    categoria_id BIGINT NOT NULL,
    marca VARCHAR(100),
    modelo VARCHAR(100),
    precio DECIMAL(10,2) NOT NULL,
    stock INT NOT NULL DEFAULT 0,
    vendedor_id BIGINT NOT NULL,
    activo TINYINT(1) DEFAULT 1,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_modificacion DATETIME,
    FOREIGN KEY (vendedor_id) REFERENCES usuarios(id) ON DELETE CASCADE,
    FOREIGN KEY (categoria_id) REFERENCES categorias(id) ON DELETE CASCADE
);

-- ==========================================
-- VARIANTES
-- ==========================================
CREATE TABLE producto_variantes (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    producto_id BIGINT NOT NULL,
    atributo VARCHAR(150) NOT NULL,
    valor VARCHAR(150) NOT NULL,
    precio DECIMAL(10,2) NOT NULL,
    stock INT NOT NULL,
    FOREIGN KEY (producto_id) REFERENCES productos(id) ON DELETE CASCADE
);

-- ==========================================
-- IMÁGENES
-- ==========================================
CREATE TABLE producto_imagenes (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    producto_id BIGINT NOT NULL,
    url VARCHAR(500) NOT NULL,
    orden INT DEFAULT 1,
    FOREIGN KEY (producto_id) REFERENCES productos(id) ON DELETE CASCADE
);

-- ==========================================
-- PUBLICACIONES
-- ==========================================
CREATE TABLE publicaciones (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    producto_id BIGINT NOT NULL,
    titulo VARCHAR(255) NOT NULL,
    estado ENUM('ACTIVA','PAUSADA','CERRADA') DEFAULT 'ACTIVA',
    visitas INT DEFAULT 0,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    activo TINYINT(1) DEFAULT 1,
    fecha_modificacion DATETIME,
    FOREIGN KEY (producto_id) REFERENCES productos(id) ON DELETE CASCADE
);

-- ==========================================
-- CARRITO
-- ==========================================
CREATE TABLE carrito (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    usuario_id BIGINT NOT NULL,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    activo TINYINT(1) DEFAULT 1,
    fecha_modificacion DATETIME,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE
);

CREATE TABLE carrito_items (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    carrito_id BIGINT NOT NULL,
    variante_id BIGINT NOT NULL,
    cantidad INT NOT NULL,
    FOREIGN KEY (carrito_id) REFERENCES carrito(id) ON DELETE CASCADE,
    FOREIGN KEY (variante_id) REFERENCES producto_variantes(id) ON DELETE CASCADE
);

-- ==========================================
-- ÓRDENES
-- ==========================================
CREATE TABLE ordenes (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    comprador_id BIGINT NOT NULL,
    direccion_envio_id BIGINT NOT NULL,
    total DECIMAL(12,2) NOT NULL,
    estado ENUM('PENDIENTE','PAGADA','ENVIADA','ENTREGADA','CANCELADA') DEFAULT 'PENDIENTE',
    metodo_pago VARCHAR(50),
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_modificacion DATETIME,
    activo TINYINT(1) DEFAULT 1,
    FOREIGN KEY (comprador_id) REFERENCES usuarios(id) ON DELETE CASCADE,
    FOREIGN KEY (direccion_envio_id) REFERENCES direcciones(id) ON DELETE CASCADE
);

CREATE TABLE orden_items (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    orden_id BIGINT NOT NULL,
    variante_id BIGINT NOT NULL,
    cantidad INT NOT NULL,
    precio DECIMAL(10,2) NOT NULL,
    activo TINYINT(1) DEFAULT 1,
    fecha_modificacion DATETIME,
    FOREIGN KEY (orden_id) REFERENCES ordenes(id) ON DELETE CASCADE,
    FOREIGN KEY (variante_id) REFERENCES producto_variantes(id) ON DELETE CASCADE
);

-- ==========================================
-- PAGOS
-- ==========================================
CREATE TABLE pagos (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    orden_id BIGINT NOT NULL,
    monto DECIMAL(12,2) NOT NULL,
    estado ENUM('PENDIENTE','APROBADO','RECHAZADO') DEFAULT 'PENDIENTE',
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (orden_id) REFERENCES ordenes(id) ON DELETE CASCADE
);

-- ==========================================
-- ENVIOS
-- ==========================================
CREATE TABLE envios (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    orden_id BIGINT NOT NULL,
    empresa_envio VARCHAR(100),
    codigo_seguimiento VARCHAR(255),
    estado ENUM('PENDIENTE','EN CAMINO','ENTREGADO') DEFAULT 'PENDIENTE',
    fecha_envio TIMESTAMP NULL,
    fecha_entrega TIMESTAMP NULL,
    FOREIGN KEY (orden_id) REFERENCES ordenes(id) ON DELETE CASCADE
);

-- ==========================================
-- MENSAJES
-- ==========================================
CREATE TABLE mensajes (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    producto_id BIGINT NOT NULL,
    usuario_id BIGINT NOT NULL,
    mensaje TEXT NOT NULL,
    respuesta TEXT,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (producto_id) REFERENCES productos(id) ON DELETE CASCADE,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE
);

-- ==========================================
-- CALIFICACIONES
-- ==========================================
CREATE TABLE calificaciones (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    orden_id BIGINT NOT NULL,
    usuario_id BIGINT NOT NULL,
    puntuacion INT CHECK (puntuacion BETWEEN 1 AND 5),
    comentario TEXT,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (orden_id) REFERENCES ordenes(id) ON DELETE CASCADE,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE
);

-- =======================================================
-- ================== INSERTS DE PRUEBA ===================
-- =======================================================

-- ROLES
INSERT INTO roles (nombre) VALUES
('ADMIN'), ('VENDEDOR'), ('CLIENTE'), ('SUPERVISOR'), ('INVITADO');

-- USUARIOS
INSERT INTO usuarios (nombre, email, password, telefono, numero_documento, rol)
VALUES
('Admin Master', 'admin@test.com', 'admin123', '900111222', '12345678', 'ADMIN'),
('Vendedor Uno', 'vend1@test.com', 'pass123', '900111223', '23456789', 'VENDEDOR'),
('Cliente Uno', 'comp1@test.com', 'pass123', '900111224', '34567890', 'CLIENTE'),
('Vendedor Dos', 'vend2@test.com', 'pass123', '900111225', '45678901', 'VENDEDOR'),
('Cliente Dos', 'comp2@test.com', 'pass123', '900111226', '56789012', 'CLIENTE');

-- ASIGNAR ROLES
INSERT INTO usuario_roles VALUES
(1,1), (2,2), (3,3), (4,2), (5,3);

-- DIRECCIONES
INSERT INTO direcciones (usuario_id, direccion, ciudad, distrito, codigo_postal, principal)
VALUES
(1,'Av Lima 123','Lima','Miraflores','15074',1),
(2,'Av Sol 456','Lima','Surco','15039',1),
(3,'Jr Luna 789','Lima','Callao','07001',1),
(4,'Calle 12','Cusco','Wanchaq','08000',1),
(5,'Mz A Lote 5','Arequipa','Yanahuara','04011',1);

-- CATEGORIAS
INSERT INTO categorias (nombre) VALUES
('Electrónica'),
('Ropa'),
('Hogar'),
('Computo'),
('Deportes');

-- PRODUCTOS
INSERT INTO productos (vendedor_id, nombre, descripcion, categoria_id, marca, modelo, precio, stock)
VALUES
(2,'Laptop HP','Buen rendimiento',4,'HP','Pav14',2500,10),
(2,'Camisa Polo','Algodón premium',2,'Polo','2023',45,20),
(4,'Silla Gamer','Ergonómica',3,'DXRacer','X1',200,10),
(4,'Audífonos Bluetooth','Alta calidad',1,'Sony','WH1000',150,10),
(2,'Zapatillas Running','Para deporte',5,'Nike','RunX',180,10);

-- VARIANTES
INSERT INTO producto_variantes (producto_id, atributo, valor, precio, stock)
VALUES
(1,'RAM','16GB',2500,10),
(1,'RAM','8GB',2200,5),
(2,'Talla','M',45,20),
(2,'Talla','L',45,15),
(5,'Talla','42',180,10);

-- PUBLICACIONES
INSERT INTO publicaciones (producto_id, titulo) VALUES
(1,'Laptop HP 14 pulgadas'),
(2,'Camisa Polo Algodón'),
(3,'Silla Gamer Pro'),
(4,'Audífonos Sony Noise Cancel'),
(5,'Zapatillas Running Nike');

-- CARRITO
INSERT INTO carrito (usuario_id) VALUES (3),(5),(3),(5),(3);

-- ORDERS
INSERT INTO ordenes (comprador_id, direccion_envio_id, total, estado, metodo_pago)
VALUES
(3,3,2500,'PAGADA','TARJETA'),
(5,5,180,'PENDIENTE','EFECTIVO'),
(3,3,90,'ENTREGADA','YAPE'),
(5,5,45,'PAGADA','TARJETA'),
(3,3,2200,'ENVIADA','EFECTIVO');

-- ORDER ITEMS
INSERT INTO orden_items (orden_id, variante_id, cantidad, precio)
VALUES
(1,1,1,2500),
(2,5,1,180),
(3,3,2,45),
(4,3,1,45),
(5,2,1,2200);

-- PAGOS
INSERT INTO pagos (orden_id, monto, estado)
VALUES
(1,2500,'APROBADO'),
(2,180,'PENDIENTE'),
(3,90,'APROBADO'),
(4,45,'APROBADO'),
(5,2200,'PENDIENTE');

-- ENVIOS
INSERT INTO envios (orden_id, empresa_envio, codigo_seguimiento, estado)
VALUES
(1,'Olva','OLVA123','ENTREGADO'),
(2,'Serpost','SERP456','PENDIENTE'),
(3,'Urbaner','URB789','ENTREGADO'),
(4,'Olva','OLVA999','EN CAMINO'),
(5,'Serpost','SERP000','PENDIENTE');

-- MENSAJES
INSERT INTO mensajes (producto_id, usuario_id, mensaje)
VALUES
(1,3,'¿Tiene garantía?'),
(2,5,'¿Hay talla S?'),
(3,3,'¿Cuánto mide?'),
(4,5,'¿Original?'),
(5,3,'¿Hay delivery?');

-- CALIFICACIONES
INSERT INTO calificaciones (orden_id, usuario_id, puntuacion, comentario)
VALUES
(1,3,5,'Excelente'),
(3,3,4,'Buen producto'),
(4,5,5,'Muy bueno'),
(5,3,3,'Regular'),
(2,5,4,'A tiempo');
