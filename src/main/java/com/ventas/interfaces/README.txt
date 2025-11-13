═══════════════════════════════════════════════════════════
CARPETA: INTERFACES
RESPONSABLE: PERSONA 3 - DAOs
═══════════════════════════════════════════════════════════

DESCRIPCIÓN:
Interfaces que definen contratos para las operaciones de datos.

CLASES A CREAR:
  • IProductoDAO.java
  • IClienteDAO.java
  • IVentaDAO.java
  • IUsuarioDAO.java
  • ICRUD.java (interfaz genérica)

EJEMPLO DE ESTRUCTURA:
public interface ICRUD<T> {
    void insertar(T objeto);
    void actualizar(T objeto);
    void eliminar(int id);
    T buscarPorId(int id);
    List<T> listarTodos();
}
