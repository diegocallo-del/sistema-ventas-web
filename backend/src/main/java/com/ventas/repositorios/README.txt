═══════════════════════════════════════════════════════════
CARPETA: REPOSITORIOS (Spring Data JPA)
RESPONSABLE: PERSONA 3 - Repositorios
═══════════════════════════════════════════════════════════

DESCRIPCIÓN:
Interfaces Repository usando Spring Data JPA. NO escribes SQL manual.
Spring Data JPA genera el SQL automáticamente basándose en los nombres de métodos.

INTERFACES QUE DEBES CREAR:
  • ProductoRepository.java
  • ClienteRepository.java
  • UsuarioRepository.java
  • CategoriaRepository.java
  • VentaRepository.java
  • DetalleVentaRepository.java

ESTRUCTURA BÁSICA:
@Repository
public interface ProductoRepository extends JpaRepository<Producto, Long> {
    // Spring Data JPA proporciona automáticamente:
    // - save(Producto)
    // - findById(Long)
    // - findAll()
    // - deleteById(Long)
    // - etc.
}

MÉTODOS POR CONVENCIÓN (Spring Data JPA genera el SQL):
- findByNombreContainingIgnoreCase(String nombre)
- findByCategoriaIdAndActivoTrue(Long categoriaId)
- findByStockLessThan(Integer stock)
- findByFechaCreacionBetween(LocalDateTime inicio, LocalDateTime fin)

CONSULTAS PERSONALIZADAS (cuando la convención no alcanza):
@Query("SELECT p FROM Producto p WHERE p.stock < :umbral AND p.activo = true")
List<Producto> findProductosConStockBajo(@Param("umbral") Integer umbral);

CONCEPTOS OOP APLICADOS:
✓ POLIMORFISMO: Interfaces que pueden tener diferentes implementaciones
✓ HERENCIA: Extienden JpaRepository que proporciona métodos comunes
✓ ABSTRACCIÓN: Define qué buscar, no cómo buscar (Spring lo implementa)

NOTAS IMPORTANTES:
- NO implementas estos métodos, Spring Data JPA lo hace
- Solo defines la interfaz con la firma del método
- Usa nombres descriptivos que sigan la convención de Spring
- Para consultas complejas, usa @Query con JPQL

COORDINACIÓN:
- Usa las entidades creadas por Persona 1
- Los servicios (Persona 4) usarán estos repositorios

