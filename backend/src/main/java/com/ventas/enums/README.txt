═══════════════════════════════════════════════════════════
CARPETA: ENUMS
RESPONSABLE: PERSONA 1 - DBA
═══════════════════════════════════════════════════════════

DESCRIPCIÓN:
Enumeraciones para valores constantes del sistema.

ENUMS A CREAR:
  • TipoUsuario.java (ADMIN, VENDEDOR, CAJERO)
  • EstadoVenta.java (PENDIENTE, COMPLETADA, CANCELADA)
  • TipoPago.java (EFECTIVO, TARJETA, TRANSFERENCIA)
  • EstadoProducto.java (DISPONIBLE, AGOTADO, DESCONTINUADO)

EJEMPLO:
public enum TipoUsuario {
    ADMIN("Administrador"),
    VENDEDOR("Vendedor"),
    CAJERO("Cajero");
    
    private String descripcion;
    
    TipoUsuario(String descripcion) {
        this.descripcion = descripcion;
    }
    
    public String getDescripcion() {
        return descripcion;
    }
}
