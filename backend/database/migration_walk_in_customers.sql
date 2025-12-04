-- ==========================================
-- MIGRATION: PERMITIR VENTAS A CLIENTES DE CONTADO (WALK-IN CUSTOMERS)
-- ==========================================
-- Fecha: 2024-12-04
-- Motivo: Permitir ventas sin requerir registro de cliente

USE sistema_ventas_db;

-- Hacer que comprador_id y direccion_envio_id permitan valores NULL
ALTER TABLE ordenes MODIFY COLUMN comprador_id BIGINT NULL;
ALTER TABLE ordenes MODIFY COLUMN direccion_envio_id BIGINT NULL;

-- Agregar columnas subtotal e igv si no existen
SET @sql = (SELECT IF(
    NOT EXISTS(
        SELECT * FROM INFORMATION_SCHEMA.COLUMNS
        WHERE TABLE_SCHEMA = 'sistema_ventas_db'
        AND TABLE_NAME = 'ordenes'
        AND COLUMN_NAME = 'subtotal'
    ),
    'ALTER TABLE ordenes ADD COLUMN subtotal DECIMAL(12,2) NOT NULL DEFAULT 0;',
    'SELECT "Columna subtotal ya existe" as mensaje;'
));
PREPARE stmt FROM @sql;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

SET @sql = (SELECT IF(
    NOT EXISTS(
        SELECT * FROM INFORMATION_SCHEMA.COLUMNS
        WHERE TABLE_SCHEMA = 'sistema_ventas_db'
        AND TABLE_NAME = 'ordenes'
        AND COLUMN_NAME = 'igv'
    ),
    'ALTER TABLE ordenes ADD COLUMN igv DECIMAL(12,2) NOT NULL DEFAULT 0;',
    'SELECT "Columna igv ya existe" as mensaje;'
));
PREPARE stmt FROM @sql;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

-- Agregar columna producto_id a orden_items si no existe
SET @sql = (SELECT IF(
    NOT EXISTS(
        SELECT * FROM INFORMATION_SCHEMA.COLUMNS
        WHERE TABLE_SCHEMA = 'sistema_ventas_db'
        AND TABLE_NAME = 'orden_items'
        AND COLUMN_NAME = 'producto_id'
    ),
    'ALTER TABLE orden_items ADD COLUMN producto_id BIGINT; UPDATE orden_items SET producto_id = variante_id WHERE producto_id IS NULL;',
    'SELECT "Columna producto_id ya existe" as mensaje;'
));
PREPARE stmt FROM @sql;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

-- Actualizar foreign keys para usar SET NULL en lugar de CASCADE
ALTER TABLE ordenes DROP FOREIGN KEY ordenes_ibfk_1;
ALTER TABLE ordenes ADD CONSTRAINT ordenes_ibfk_1
    FOREIGN KEY (comprador_id) REFERENCES usuarios(id) ON DELETE SET NULL;

ALTER TABLE ordenes DROP FOREIGN KEY ordenes_ibfk_2;
ALTER TABLE ordenes ADD CONSTRAINT ordenes_ibfk_2
    FOREIGN KEY (direccion_envio_id) REFERENCES direcciones(id) ON DELETE SET NULL;

-- Verificar estructura de la tabla
DESCRIBE ordenes;

-- Insertar una venta de prueba para cliente de contado
INSERT INTO ordenes (comprador_id, direccion_envio_id, subtotal, igv, total, estado, metodo_pago)
VALUES (NULL, NULL, 2842.00, 511.56, 3353.56, 'PENDIENTE', 'EFECTIVO');

SET @last_order_id = LAST_INSERT_ID();

-- Insertar items para la venta de contado (obtener producto_id desde variante)
INSERT INTO orden_items (orden_id, variante_id, producto_id, cantidad, precio, activo)
SELECT @last_order_id, v.id, v.producto_id, cantidad, precio, 1
FROM (
  SELECT 1 as variante_id, 1 as producto_id, 1 as cantidad, 2500.00 as precio
  UNION ALL
  SELECT 3, 2, 2, 45.00
) as items_temp
JOIN producto_variantes v ON v.id = items_temp.variante_id;

SELECT 'Migration completada exitosamente. Ahora se permiten ventas a clientes de contado.' as resultado;


```sql final
-- Primero eliminar datos problemáticos
DELETE FROM orden_items WHERE orden_id = (SELECT id FROM ordenes WHERE subtotal = 2842.00 LIMIT 1);
DELETE FROM ordenes WHERE comprador_id IS NULL AND subtotal = 2842.00;

-- Arreglar producto_id para todos los registros existentes
UPDATE orden_items SET producto_id = variante_id WHERE producto_id IS NULL OR producto_id = 0;

-- Asegurar que todos los campos necesarios estén presentes
ALTER TABLE orden_items MODIFY COLUMN producto_id BIGINT NOT NULL DEFAULT 0;
UPDATE orden_items SET producto_id = variante_id WHERE producto_id = 0;

-- Verificar que todos los producto_id existan como productos válidos
UPDATE orden_items SET producto_id = 1 WHERE producto_id NOT IN (SELECT id FROM productos);

-- Limpiar datos inconsistententes
DELETE FROM orden_items WHERE variante_id NOT IN (SELECT id FROM producto_variantes);

SELECT 'Base de datos arreglada exitosamente - ejecuta el backend ahora' as resultado;

```

USE sistema_ventas_db;

-- Ver que productos existen
SELECT id FROM productos;

-- Arreglar registros específicos (reemplaza los IDs con los que tienes)
-- Si variante_id es 1,2,3,... los productos son 1,2,3,...
UPDATE orden_items SET producto_id = 1 WHERE variante_id = 1 AND (producto_id IS NULL OR producto_id = 0);
UPDATE orden_items SET producto_id = 2 WHERE variante_id = 2 AND (producto_id IS NULL OR producto_id = 0);
UPDATE orden_items SET producto_id = 3 WHERE variante_id = 3 AND (producto_id IS NULL OR producto_id = 0);
UPDATE orden_items SET producto_id = 4 WHERE variante_id = 4 AND (producto_id IS NULL OR producto_id = 0);
UPDATE orden_items SET producto_id = 5 WHERE variante_id = 5 AND (producto_id IS NULL OR producto_id = 0);

-- Verificar que ya no hay productos_id NULL
SELECT * FROM orden_items WHERE producto_id IS NULL OR producto_id = 0;

##
