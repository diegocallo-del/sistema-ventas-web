
CARPETA: ENUMS (Enumeraciones)
RESPONSABLE: Sebastian - DBA (Administrador de Base de Datos)


DESCRIPCIÓN:
Enumeraciones para valores constantes del sistema que se almacenan en la base de datos.

ENUMS QUE SE CREO:
  • RolUsuario.java (ADMIN, SUPERVISOR, VENDEDOR, CLIENTE)
  • EstadoVenta.java (PENDIENTE, COMPLETADA, CANCELADA)
  • TipoPago.java (EFECTIVO, TARJETA, TRANSFERENCIA)

EJEMPLO DE ESTRUCTURA:
public enum RolUsuario {
    ADMIN("Administrador"),
    SUPERVISOR("Supervisor"),
    VENDEDOR("Vendedor"),
    CLIENTE("Cliente");
    
    private final String descripcion;
    
    RolUsuario(String descripcion) {
        this.descripcion = descripcion;
    }
    
    public String getDescripcion() {
        return descripcion;
    }
}

NOTAS IMPORTANTES:
- Los valores del enum deben coincidir con los valores en la base de datos
- Usa @Enumerated(EnumType.STRING) en las entidades para guardar como texto
- Los enums se usarán en las entidades creadas en modelos/
