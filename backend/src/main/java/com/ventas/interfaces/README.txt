═══════════════════════════════════════════════════════════
CARPETA: INTERFACES (Contratos)
RESPONSABLE: PERSONA 3 - Repositorios (opcional) / PERSONA 4 - Servicios (opcional)
═══════════════════════════════════════════════════════════

DESCRIPCIÓN:
Interfaces que definen contratos usando POLIMORFISMO.
Estas interfaces son OPCIONALES pero recomendadas para buenas prácticas.

INTERFACES OPCIONALES A CREAR:
  • IBaseRepository.java (interfaz genérica para repositorios)
  • IProductoService.java (interfaz para ProductoService)
  • IVentaService.java (interfaz para VentaService)

NOTA IMPORTANTE:
- Spring Data JPA ya proporciona interfaces (JpaRepository), así que estas son opcionales
- Si las creas, los repositorios y servicios las implementarán
- Esto permite POLIMORFISMO: poder usar diferentes implementaciones

EJEMPLO OPCIONAL (IBaseRepository):
public interface IBaseRepository<T, ID> {
    T save(T entity);
    Optional<T> findById(ID id);
    List<T> findAll();
    void deleteById(ID id);
}

CONCEPTOS OOP APLICADOS:
✓ POLIMORFISMO: Interfaces que pueden tener múltiples implementaciones
✓ ABSTRACCIÓN: Define qué hacer, no cómo hacerlo
✓ CONTRATOS: Garantiza que las clases implementen métodos específicos

RECOMENDACIÓN:
- Para este proyecto, NO es necesario crear estas interfaces
- Spring Data JPA ya proporciona JpaRepository
- Los servicios pueden trabajar directamente sin interfaces
- Solo créalas si quieres practicar conceptos OOP avanzados
