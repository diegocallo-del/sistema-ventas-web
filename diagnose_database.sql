-- ====================================================================
-- DIAGNOSTICO COMPLETO DE BASE DE DATOS ACTUAL
-- ====================================================================
-- Ejecutar este script para ver el estado de la BD y detectar problemas

USE sistema_ventas_db;

-- 1. VERIFICA SI EXISTEN LAS TABLAS
SELECT 'TABLAS EXISTENTES:' AS INFO;
SHOW TABLES;

-- 2. VERIFICA ESTRUCTURA DE USUARIOS
SELECT '=== ANALISIS DE USUARIOS ===' AS SECCION;
SELECT
    COUNT(*) AS total_usuarios,
    COUNT(CASE WHEN activo = 1 THEN 1 END) AS usuarios_activos,
    COUNT(CASE WHEN rol IS NOT NULL THEN 1 END) AS usuarios_con_rol
FROM usuarios;

SELECT '=== USUARIOS DETALLADOS ===' AS SECCION;
SELECT id, nombre, email, rol,
       IF(activo = 1, 'ACTIVO', 'INACTIVO') as estado
FROM usuarios
ORDER BY id;

-- 3. VERIFICA ESTRUCTURA DE PRODUCTOS
SELECT '=== ANALISIS DE PRODUCTOS ===' AS SECCION;
SELECT
    COUNT(*) AS total_productos,
    COUNT(CASE WHEN activo = 1 THEN 1 END) AS productos_activos,
    COUNT(DISTINCT categoria_id) AS categorias_usadas
FROM productos;

SELECT '=== PRODUCTOS DETALLADOS ===' AS SECCION;
SELECT id, nombre, codigo, precio, stock,
       IF(activo = 1, 'ACTIVO', 'INACTIVO') as estado
FROM productos
ORDER BY id;

-- 4. VERIFICA VARIANTES DE PRODUCTOS
SELECT '=== ANALISIS DE VARIANTES ===' AS SECCION;
SELECT
    COUNT(*) AS total_variantes,
    COUNT(DISTINCT producto_id) AS productos_con_variantes
FROM producto_variantes;

SELECT '=== VARIANTES DETALLADAS ===' AS SECCION;
SELECT id, producto_id, precio, stock
FROM producto_variantes
ORDER BY producto_id, id;

-- 5. VERIFICA VENTAS Y ORDENES
SELECT '=== ANALISIS DE VENTAS ===' AS SECCION;
SELECT
    COUNT(*) AS total_ordenes,
    COUNT(*) AS total_ventas,
    COUNT(DISTINCT comprador_id) AS clientes_distintos
FROM ordenes;

SELECT '=== VENTAS DETALLADAS ===' AS SECCION;
SELECT id, comprador_id, subtotal, igv, total, estado, metodo_pago
FROM ordenes
ORDER BY id DESC LIMIT 20;

-- 6. VERIFICA DETALLES DE VENTA - EL PROBLEMA PRINCIPAL
SELECT '=== ANALISIS DE DETALLES DE VENTA ===' AS SECCION;
SELECT
    COUNT(*) AS total_detalles,
    COUNT(CASE WHEN producto_id IS NULL OR producto_id = 0 THEN 1 END) AS detalles_con_problemas,
    COUNT(CASE WHEN variante_id IS NULL OR variante_id = 0 THEN 1 END) AS variantes_con_problemas
FROM orden_items;

SELECT '=== DETALLES CON PROBLEMA (producto_id = 0) ===' AS SECCION;
SELECT id, orden_id, variante_id, producto_id, cantidad, precio
FROM orden_items
WHERE producto_id IS NULL OR producto_id = 0;

SELECT '=== DETALLES CON PROBLEMA (variante_id = 0) ===' AS SECCION;
SELECT id, orden_id, variante_id, producto_id, cantidad, precio
FROM orden_items
WHERE variante_id IS NULL OR variante_id = 0;

-- 7. VERIFICA ESTRUCTURA DE TABLAS
SELECT '=== ANALISIS DE TABLA ORDENES ===' AS SECCION;
DESCRIBE ordenes;

SELECT '=== ANALISIS DE TABLA ORDEN_ITEMS ===' AS SECCION;
DESCRIBE orden_items;

-- 8. VERIFICA ROLES Y PERMISOS
SELECT '=== ANALISIS DE ROLES ===' AS SECCION;
SELECT COUNT(*) as total_roles FROM roles;

SELECT '=== ROLES DETALLADOS ===' AS SECCION;
SELECT id, nombre FROM roles;

SELECT '=== ANALISIS USUARIO-ROLES ===' AS SECCION;
SELECT COUNT(*) as total_relaciones FROM usuario_roles;

SELECT '=== RELACIONES USUARIO-ROLES ===' AS SECCION;
SELECT ur.usuario_id, u.nombre, r.nombre as rol
FROM usuario_roles ur
JOIN usuarios u ON ur.usuario_id = u.id
JOIN roles r ON ur.rol_id = r.id
ORDER BY ur.usuario_id;

-- 9. VERIFICA SI TIENE CATEGORIAS
SELECT '=== ANALISIS DE CATEGORIAS ===' AS SECCION;
SELECT COUNT(*) as total_categorias FROM categorias;

SELECT '=== CATEGORIAS DETALLADAS ===' AS SECCION;
SELECT id, nombre FROM categorias;

SELECT '=== RESUMEN COMPLETO DEL SISTEMA ===' AS FINAL;
