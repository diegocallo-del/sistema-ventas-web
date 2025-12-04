-- ==========================================
-- MIGRATION: REMOVER CAMPOS BLOB DE PRODUCTO_IMAGENES
-- ==========================================
-- Fecha: 2025-01-04
-- Motivo: Refactorizar sistema de imágenes para usar solo filesystem

USE sistema_ventas_db;

-- Eliminar columnas BLOB si existen (no fallar si no existen)
SET @sql = (SELECT IF(
    EXISTS(
        SELECT * FROM INFORMATION_SCHEMA.COLUMNS
        WHERE TABLE_SCHEMA = 'sistema_ventas_db'
        AND TABLE_NAME = 'producto_imagenes'
        AND COLUMN_NAME = 'datos_imagen'
    ),
    'ALTER TABLE producto_imagenes DROP COLUMN datos_imagen;',
    'SELECT "Columna datos_imagen no existe, omitiendo..." as mensaje;'
));
PREPARE stmt FROM @sql;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

-- Eliminar columna tipo_contenido si existe
SET @sql = (SELECT IF(
    EXISTS(
        SELECT * FROM INFORMATION_SCHEMA.COLUMNS
        WHERE TABLE_SCHEMA = 'sistema_ventas_db'
        AND TABLE_NAME = 'producto_imagenes'
        AND COLUMN_NAME = 'tipo_contenido'
    ),
    'ALTER TABLE producto_imagenes DROP COLUMN tipo_contenido;',
    'SELECT "Columna tipo_contenido no existe, omitiendo..." as mensaje;'
));
PREPARE stmt FROM @sql;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

-- Verificar estructura final de la tabla
DESCRIBE producto_imagenes;

SELECT 'Migration completada exitosamente. Tabla producto_imagenes ahora solo usa filesystem.' as resultado;
