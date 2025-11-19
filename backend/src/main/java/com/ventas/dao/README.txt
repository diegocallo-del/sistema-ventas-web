═══════════════════════════════════════════════════════════
CARPETA: DAO (Data Access Object)
⚠️ ESTA CARPETA NO SE USA - OBSOLETA
═══════════════════════════════════════════════════════════

DESCRIPCIÓN:
Esta carpeta estaba pensada para clases DAO que escribían SQL manual con JDBC.
PERO: Usamos Spring Data JPA que lo hace automáticamente.

¿POR QUÉ NO SE USA?
- Spring Data JPA genera el SQL automáticamente
- No necesitas escribir PreparedStatement ni ResultSet
- Los repositorios (Persona 3) reemplazan esta funcionalidad
- Es más simple y menos propenso a errores

EN SU LUGAR:
- Usa la carpeta repositorios/ (Persona 3)
- Crea interfaces que extienden JpaRepository
- Spring Data JPA hace todo el trabajo de acceso a datos

EJEMPLO DE LO QUE NO HACEMOS (JDBC manual):
// ❌ NO HACER ESTO
public class ProductoDAO {
    public Producto buscarPorId(Long id) {
        String sql = "SELECT * FROM productos WHERE id = ?";
        PreparedStatement ps = connection.prepareStatement(sql);
        ps.setLong(1, id);
        ResultSet rs = ps.executeQuery();
        // ... mapear ResultSet a objeto
    }
}

EJEMPLO DE LO QUE SÍ HACEMOS (Spring Data JPA):
// ✅ HACER ESTO
public interface ProductoRepository extends JpaRepository<Producto, Long> {
    // Spring Data JPA genera el SQL automáticamente
}

CONCLUSIÓN:
- Esta carpeta puede eliminarse o dejarse vacía
- Todo el acceso a datos se hace en repositorios/
- Persona 3 crea las interfaces Repository
