═══════════════════════════════════════════════════════════
CARPETA: DAO (Data Access Object)
RESPONSABLE: PERSONA 3 - DAOs
═══════════════════════════════════════════════════════════

DESCRIPCIÓN:
Clases que implementan las operaciones de base de datos.

CLASES A CREAR:
  • ConexionDB.java
  • ProductoDAO.java
  • ClienteDAO.java
  • VentaDAO.java
  • DetalleVentaDAO.java
  • CategoriaDAO.java
  • UsuarioDAO.java

RESPONSABILIDADES:
  - Implementar métodos CRUD (Create, Read, Update, Delete)
  - Manejar conexiones a la base de datos
  - Ejecutar consultas SQL
  - Mapear ResultSet a objetos

MÉTODOS TÍPICOS:
  • insertar(Objeto obj)
  • actualizar(Objeto obj)
  • eliminar(int id)
  • buscarPorId(int id)
  • listarTodos()
  • buscarPorCriterio(String criterio)
