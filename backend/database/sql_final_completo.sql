

USE sistema_ventas_db;

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

INSERT INTO roles (nombre) VALUES
('ADMIN'), ('VENDEDOR'), ('CLIENTE'), ('SUPERVISOR'), ('INVITADO');

INSERT INTO usuarios (nombre, email, password, telefono, numero_documento, rol, activo) VALUES
-- Usuario ADMIN (idioma de BD: ADMIN)
('Admin Master', 'admin@test.com', '$2a$10$TU_GENERAR_CON_BCRYPT_admin123', '900111222', '12345678', 'ADMIN', 1),
-- Usuario VENDEDOR (seguridad: puede cambiar rol)
('Vendedor Uno', 'vend1@test.com', '$2a$10$TU_GENERAR_CON_BCRYPT_pass123', '900111223', '23456789', 'VENDEDOR', 1),
-- Usuario CLIENTE (seguridad: puede cambiar rol)
('Cliente Uno', 'comp1@test.com', '$2a$10$TU_GENERAR_CON_BCRYPT_pass123', '900111224', '34567890', 'CLIENTE', 1),
-- Usuario CLIENTE (seguridad: puede cambiar rol)
('Cliente Dos', 'comp2@test.com', '$2a$10$TU_GENERAR_CON_BCRYPT_pass123', '900111226', '56789012', 'CLIENTE', 1);

INSERT INTO usuario_roles VALUES
(1,1), (2,2), (3,3), (4,3);

INSERT INTO direcciones (usuario_id, direccion, ciudad, distrito, principal) VALUES
(1,'Av Lima 123','Lima','Miraflores',1),
(2,'Av Sol 456','Lima','Surco',1),
(3,'Jr Luna 789','Lima','Callao',1),
(4,'Mz A Lote 5','Arequipa','Yanahuara',1);


CREATE TABLE categorias (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    categoria_padre BIGINT,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_modificacion DATETIME,
    activo TINYINT(1) DEFAULT 1,
    FOREIGN KEY (categoria_padre) REFERENCES categorias(id)
);

CREATE TABLE productos (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    codigo VARCHAR(50) UNIQUE,
    nombre VARCHAR(255) NOT NULL,
    descripcion TEXT,
    categoria_id BIGINT NOT NULL,
    marca VARCHAR(100),
    modelo VARCHAR(100),
    precio DECIMAL(10,2) NOT NULL CHECK (precio > 0),
    stock INT UNSIGNED NOT NULL DEFAULT 0,
    vendedor_id BIGINT NOT NULL,
    activo TINYINT(1) DEFAULT 1,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_modificacion TIMESTAMP NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (vendedor_id) REFERENCES usuarios(id) ON DELETE CASCADE,
    FOREIGN KEY (categoria_id) REFERENCES categorias(id) ON DELETE CASCADE
);

CREATE TABLE producto_variantes (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    producto_id BIGINT NOT NULL,
    atributo VARCHAR(150) NOT NULL,
    valor VARCHAR(150) NOT NULL,
    precio DECIMAL(10,2) NOT NULL,
    stock INT NOT NULL,
    FOREIGN KEY (producto_id) REFERENCES productos(id) ON DELETE CASCADE
);

CREATE TABLE producto_imagenes (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    producto_id BIGINT NOT NULL,
    url VARCHAR(500) NOT NULL,
    orden INT DEFAULT 1,
    FOREIGN KEY (producto_id) REFERENCES productos(id) ON DELETE CASCADE
);

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

INSERT INTO categorias (nombre) VALUES
('Electrónica'), ('Ropa'), ('Hogar'), ('Computo'), ('Deportes');

INSERT INTO productos (codigo, vendedor_id, nombre, categoria_id, marca, precio, stock) VALUES
('LP-HP-001', 2, 'Laptop HP', 4, 'HP', 2500, 10),
('CM-POLO-M', 2, 'Camisa Polo', 2, 'Polo', 45, 20),
('SG-DXR-X1', 2, 'Silla Gamer', 3, 'DXRacer', 200, 10),
('AUD-SONY-001', 2, 'Audífonos Bluetooth', 1, 'Sony', 150, 10),
('ZP-NIKE-42', 2, 'Zapatillas Running', 5, 'Nike', 180, 10);

INSERT INTO producto_variantes (producto_id, atributo, valor, precio, stock) VALUES
(1,'RAM','16GB',2500,10),
(1,'RAM','8GB',2200,5),
(2,'Talla','M',45,20),
(2,'Talla','L',45,15),
(5,'Talla','42',180,10);

INSERT INTO publicaciones (producto_id, titulo) VALUES
(1,'Laptop HP 14 pulgadas'),
(2,'Camisa Polo Algodón'),
(3,'Silla Gamer Pro'),
(4,'Audífonos Sony Noise Cancel'),
(5,'Zapatillas Running Nike');

CREATE TABLE ordenes (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    comprador_id BIGINT NULL COMMENT 'NULL significa venta de contado',
    direccion_envio_id BIGINT NULL,
    subtotal DECIMAL(12,2) NOT NULL DEFAULT 0,
    igv DECIMAL(12,2) NOT NULL DEFAULT 0,
    total DECIMAL(12,2) NOT NULL,
    estado ENUM('PENDIENTE','PAGADA','ENVIADA','ENTREGADA','CANCELADA') DEFAULT 'PENDIENTE',
    metodo_pago VARCHAR(50),
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_modificacion DATETIME,
    activo TINYINT(1) DEFAULT 1,
    FOREIGN KEY (comprador_id) REFERENCES usuarios(id) ON DELETE SET NULL,
    FOREIGN KEY (direccion_envio_id) REFERENCES direcciones(id) ON DELETE SET NULL
);

CREATE TABLE orden_items (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    orden_id BIGINT NOT NULL,
    producto_id BIGINT NOT NULL COMMENT 'Producto vendido - nunca NULL',
    variante_id BIGINT NOT NULL,
    cantidad INT NOT NULL,
    precio DECIMAL(10,2) NOT NULL,
    activo TINYINT(1) DEFAULT 1,
    fecha_modificacion DATETIME,
    FOREIGN KEY (orden_id) REFERENCES ordenes(id) ON DELETE CASCADE,
    FOREIGN KEY (producto_id) REFERENCES productos(id) ON DELETE CASCADE,
    FOREIGN KEY (variante_id) REFERENCES producto_variantes(id) ON DELETE CASCADE
);



-- PRIMERO: Crear variante extra para producto 4 (Audífonos Sony)
INSERT INTO producto_variantes (producto_id, atributo, valor, precio, stock) VALUES
(4,'DEFAULT','DEFAULT',150,10);

-- Ventas con clientes registrados y de contado
INSERT INTO ordenes (comprador_id, direccion_envio_id, subtotal, igv, total, estado, metodo_pago) VALUES
-- Venta 1: Cliente registrado (Cliente Uno)
(3, 3, 2272.73, 409.81, 2682.54, 'PENDIENTE', 'EFECTIVO'),
-- Venta 2: Cliente registrado (Cliente Dos)
(4, 4, 40.91, 7.36, 48.27, 'ENTREGADA', 'YAPE'),
-- Venta 3: Cliente de contado (NULL)
(NULL, NULL, 163.63, 29.45, 193.08, 'PENDIENTE', 'TARJETA');

-- Detalles de ventas con producto_id y variante_id CORRECTOS
INSERT INTO orden_items (orden_id, producto_id, variante_id, cantidad, precio) VALUES
-- Venta 1: Laptop HP (producto_id=1, variante_id=1)
(1, 1, 1, 1, 2500),
-- Venta 2: Camisa Polo (producto_id=2, variante_id=3)
(2, 2, 3, 1, 45),
-- Venta 3: Audífonos Sony (producto_id=4, variante_id=6 - variante creada arriba)
(3, 4, 6, 1, 150);


CREATE TABLE pagos (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    orden_id BIGINT NOT NULL,
    monto DECIMAL(12,2) NOT NULL,
    estado ENUM('PENDIENTE','APROBADO','RECHAZADO') DEFAULT 'PENDIENTE',
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (orden_id) REFERENCES ordenes(id) ON DELETE CASCADE
);

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

INSERT INTO pagos (orden_id, monto, estado) VALUES
(1, 2682.54, 'APROBADO'),
(2, 48.27, 'APROBADO'),
(3, 193.08, 'PENDIENTE');

INSERT INTO envios (orden_id, empresa_envio, estado) VALUES
(1, 'Olva', 'ENTREGADO'),
(2, 'Serpost', 'ENTREGADO');

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

INSERT INTO carrito (usuario_id) VALUES (3), (4);

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

INSERT INTO mensajes (producto_id, usuario_id, mensaje) VALUES
(1,3,'¿Tiene garantía?'),
(2,4,'¿Hay talla S?');

INSERT INTO calificaciones (orden_id, usuario_id, puntuacion, comentario) VALUES
(1,3,5,'Excelente producto'),
(2,4,4,'Buen servicio');


CREATE INDEX idx_productos_categoria ON productos(categoria_id);
CREATE INDEX idx_productos_vendedor ON productos(vendedor_id);
CREATE INDEX idx_productos_precio ON productos(precio);
CREATE INDEX idx_productos_activo ON productos(activo);
CREATE INDEX idx_ordenes_comprador ON ordenes(comprador_id);
CREATE INDEX idx_ordenes_estado ON ordenes(estado);
CREATE INDEX idx_orden_items_orden ON orden_items(orden_id);

SELECT
    'VERIFICACIÓN COMPLETA DEL SISTEMA:' as estado,
    CONCAT(
        'Ventas totales: ', (SELECT COUNT(*) FROM ordenes),
        ' | Ventas registradas: ', (SELECT COUNT(*) FROM ordenes WHERE comprador_id IS NOT NULL),
        ' | Ventas de contado: ', (SELECT COUNT(*) FROM ordenes WHERE comprador_id IS NULL),
        ' | Detalles válidos: ', (
            SELECT COUNT(*) FROM orden_items oi
            WHERE oi.producto_id >= 1
            AND oi.variante_id IN (SELECT id FROM producto_variantes)
        )
    ) as resultados
UNION ALL
SELECT
    ' STATUS SISTEMA',
    CASE
        WHEN (SELECT COUNT(*) FROM orden_items WHERE producto_id NOT IN (SELECT id FROM productos)) = 0
        THEN 'TODOS LOS PRODUCTOS SON VÁLIDOS'
        ELSE 'HAY PRODUCTOS INVÁLIDOS - REVISAR'
    END
