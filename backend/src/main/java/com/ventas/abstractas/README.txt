═══════════════════════════════════════════════════════════
CARPETA: ABSTRACTAS
RESPONSABLE: PERSONA 2 - Backend
═══════════════════════════════════════════════════════════

DESCRIPCIÓN:
Clases abstractas que proveen funcionalidad común.

CLASES A CREAR:
  • Entidad.java (clase base para modelos)
  • DAOBase.java (clase base para DAOs)
  • Persona.java (clase abstracta para Cliente/Usuario)

EJEMPLO DE ESTRUCTURA:
public abstract class Entidad {
    protected int id;
    protected LocalDateTime fechaCreacion;
    protected boolean activo;
    
    // Métodos comunes
    public abstract boolean validar();
}
