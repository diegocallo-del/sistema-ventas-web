
CARPETA: DAO (Data Access Object)
ESTA CARPETA NO SE USA - OBSOLETA

Esta carpeta estaba pensada para clases DAO que escribían SQL manual con JDBC.
PERO: Usamos Spring Data JPA que lo hace automáticamente.

POR QUÉ NO SE USA?
Spring Data JPA genera el SQL automáticamente
No necesitas escribir PreparedStatement ni ResultSet
Los repositorios (PATRICK) reemplazan esta funcionalidad
Es más simple y menos propenso a errores

EN SU LUGAR:
- Usa la carpeta repositorios/ (Patrick)
- Crea interfaces que extienden JpaRepository
- Spring Data JPA hace todo el trabajo de acceso a datos

