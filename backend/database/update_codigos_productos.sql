-- Script para asignar códigos a productos existentes que no tienen código
-- Ejecutar después de las modificaciones al ProductoDTO

-- Opción A: Si tienes modo seguro habilitado, usa esta versión
UPDATE productos
SET codigo = CONCAT('PROD-', LPAD(id, 3, '0'))
WHERE (codigo IS NULL OR codigo = '') AND id > 0;

-- Opción B: Alternativa más simple (deshabilita modo seguro temporalmente)
-- UPDATE productos SET codigo = CONCAT('PROD-', LPAD(id, 3, '0')) WHERE id > 0;

-- Verificar que todos los productos tengan código
SELECT id, nombre, codigo FROM productos WHERE codigo IS NULL OR codigo = '';
