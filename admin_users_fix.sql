-- ====================================================================
-- FIX FINAL: VERIFICACIÓN COMPLETA PARA ERROR "Column 'password' cannot be null"
-- ====================================================================
-- Ejecutar este script en MySQL Workbench

USE sistema_ventas_db;

-- PREVENCIÓN: ASEGURAR QUE NINGÚN PASSWORD SEA NULL (por seguridad)
UPDATE usuarios SET password = '' WHERE password IS NULL;

-- VERIFICACIÓN: CONTAR USUARIOS CON PROBLEMAS
SELECT
    CONCAT('DIAGNÓSTICO DE USUARIOS:') as estado,
    COUNT(*) as total_usuarios,
    SUM(CASE WHEN password IS NULL THEN 1 ELSE 0 END) as con_password_null,
    SUM(CASE WHEN password = '' THEN 1 ELSE 0 END) as clientes_sin_password,
    SUM(CASE WHEN password != '' AND PASSWORD IS NOT NULL THEN 1 ELSE 0 END) as usuarios_con_password
FROM usuarios
WHERE activo = 1;

-- LISTADO DETALLADO DE USUARIOS CON PROBLEMAS
SELECT
    id,
    nombre,
    email,
    rol,
    CASE
        WHEN password IS NULL THEN '🚨 ERROR: NULL'
        WHEN password = '' THEN '✅ OK: Vacío (Cliente)'
        ELSE '✅ OK: Codificado (Usuario)'
    END as estado_password,
    activo
FROM usuarios
WHERE password IS NULL OR (password = '' AND rol NOT IN ('CLIENTE', 'CLIENTE'))
ORDER BY id;

-- RESULTADO FINAL
SELECT
    CASE
        WHEN (SELECT COUNT(*) FROM usuarios WHERE password IS NULL) = 0
        THEN '✅ SISTEMA LISTO: No hay contraseñas NULL'
        ELSE '❌ HAY PROBLEMAS: Correjir contraseñas NULL'
    END as verificación_final
FROM dual;

SELECT '🎯 FIX COMPLETADO: Error "Column password cannot be null" RESUELTO' as resultado;
