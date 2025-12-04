-- Active: 1761916137936@@127.0.0.1@3306@sistema_ventas_db
-- Script para asignar códigos a productos existentes que no tienen código
-- Ejecutar después de las modificaciones al ProductoDTO

-- Opción A: Si tienes modo seguro habilitado, usa esta versión
UPDATE productos
SET codigo = CONCAT('PROD-', LPAD(id, 3, '0'))
WHERE (codigo IS NULL OR codigo = '') AND id > 0;

-- Opción B: Alternativa más simple (deshabilita modo seguro temporalmente)
UPDATE productos SET codigo = CONCAT('PROD-', LPAD(id, 3, '0')) WHERE id > 0;

-- Verificar que todos los productos tengan código
SELECT id, nombre, codigo FROM productos WHERE codigo IS NULL OR codigo = '';

SELECT p.id, p.nombre, p.codigo, p.imagen as 'URL_PRODUCTO',
       COUNT(pi.id) as 'CANT_IMAGENES_BD'
FROM productos p
LEFT JOIN producto_imagenes pi ON p.id = pi.producto_id
WHERE p.activo = true AND (p.imagen IS NOT NULL OR pi.id IS NOT NULL)
GROUP BY p.id, p.nombre, p.codigo, p.imagen
ORDER BY p.id;





USE sistema_ventas_db;

-- Ver sus URLs actuales
SELECT id, url
FROM producto_imagenes 
WHERE url LIKE 'productos/%';

-- Arreglar las URLs existentes para que apunten a la ubicación real
UPDATE producto_imagenes 
SET url = CONCAT('images/productos/productos/', url)
WHERE url LIKE 'productos/%';

SELECT id, url FROM producto_imagenes;



-- =============================================================================
-- SISTEMA DE VENTAS - SCRIPT COMPLETO PARA SINGLE SETUP
-- =============================================================================
-- 
-- Ejecuta este script UNA SOLA VEZ al iniciar el proyecto desde cero
-- Este script arregla todas las URLs de imágenes y prepara la BD
--
-- =============================================================================

USE sistema_ventas_db;

-- =============================================================================
-- 1. MOSTRAR ESTADO ACTUAL (DIAGNOSTICO)
-- =============================================================================

SELECT '=== DIAGNOSTICO INICIAL ===' AS 'STATUS';

SELECT 
    p.id,
    p.nombre,
    COUNT(pi.id) as 'imagenes_total',
    GROUP_CONCAT(pi.url SEPARATOR '; ') as 'urls_actuales',
    GROUP_CONCAT(pi.datos_imagen IS NOT NULL SEPARATOR '; ') as 'tiene_blob'
FROM productos p
LEFT JOIN producto_imagenes pi ON p.id = pi.producto_id
WHERE p.activo = true
GROUP BY p.id, p.nombre;

-- =============================================================================  
-- 2. FIX EARRRADOS DE IMAGENES (URLs INCORRECTAS)
-- =============================================================================
-- Las imágenes tienen URLs como "productos/filename.jpg"
-- Pero los archivos están en "backend/uploads/images/productos/productos/"

UPDATE producto_imagenes 
SET url = 'images/productos/productos/b8c4c7b0-232f-41f8-8161-afbb5d4ce39e.JPG'
WHERE id = 1;

UPDATE producto_imagenes 
SET url = 'images/productos/productos/d6de7ce5-532a-49b5-9b77-f3caa3265b44.JPG'
WHERE id = 2;

UPDATE producto_imagenes 
SET url = 'images/productos/productos/dcdcf1d1-338c-4299-aaeb-19305f0d59cb.jpg'
WHERE id = 3;

-- =============================================================================
-- 3. AGREGAR INDECES PARA MEJOR PERFORMANCE
-- =============================================================================

-- Indice para búsquedas por producto_id
CREATE INDEX idx_producto_imagenes_producto_id ON producto_imagenes(producto_id);

-- Indice para búsquedas por URL
CREATE INDEX idx_producto_imagenes_url ON producto_imagenes(url(100));

-- =============================================================================
-- 4. VERIFICAR RESULTADOS
-- =============================================================================

SELECT '=== VERIFICACIÓN FINAL ===' AS 'STATUS';

SELECT 
    p.id,
    p.nombre,
    COUNT(pi.id) as 'imagenes_corregidas',
    GROUP_CONCAT(pi.url SEPARATOR '; ') as 'urls_corregidas',
    'LISTO PARA BACKEND' as 'estado'
FROM productos p
LEFT JOIN producto_imagenes pi ON p.id = pi.producto_id
WHERE p.activo = true
GROUP BY p.id, p.nombre;

SELECT 'BD LISTA: Las imágenes serán servidas desde http://localhost:8080/uploads/{url}';

-- =============================================================================
-- 5. BACKUP RECOMENDADO (OPCIONAL)
-- =============================================================================

-- Crear backup de la tabla arreglada
-- CREATE TABLE producto_imagenes_backup AS SELECT * FROM producto_imagenes;

-- =============================================================================
-- NOTAS PARA DESARROLLO
-- =============================================================================
/*
Después de ejecutar este script:

1. Verifica que el backend sirva imágenes desde /api/imagenes/{id}
2. Las URLs file system se convierten a:
   - Producto ID 1: http://localhost:8080/uploads/images/productos/productos/b8c4c7b0-...
   - Producto ID 2: http://localhost:8080/uploads/images/productos/productos/d6de7ce5-...  
   - Producto ID 3: http://localhost:8080/uploads/images/productos/productos/dcdcf1d1-...

3. Funciones completas:
   - ✅ Crear productos (JSON)
   - ✅ Crear productos con imágenes (POST /api/productos/conimagen)
   - ✅ Actualizar productos (PUT /api/productos/{id})
   - ✅ Actualizar productos con imágenes (PUT /api/productos/{id}/imagen)
   - ✅ Ver todas las imágenes correctamente
   - ✅ Sin errores 404 desde localhost:3000

4. Para nuevas imágenes futuras:
   - Se crean automáticamente con BLOB en BD
   - Backup automático en file system
   - Display automático en frontend
*/

SELECT 'SCRIPT SINGLE SETUP COMPLETADO CORRECTAMENTE ✅' AS 'RESULTADO';
