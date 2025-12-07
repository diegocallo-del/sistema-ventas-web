
CARPETA: DTO (Data Transfer Objects)
RESPONSABLE: PERSONA 2 - Infraestructura


DESCRIPCIÓN:
Objetos de transferencia de datos. Se usan para comunicarse con el frontend.
NO contienen lógica de negocio, solo datos y validaciones.

CLASES PINCIPALES Q SE CREO 
  • ProductoDTO.java (para respuestas)
  • CreateProductoDTO.java (para crear)
  • UpdateProductoDTO.java (para actualizar)
  • ClienteDTO.java
  • CreateClienteDTO.java
  • UsuarioDTO.java
  • VentaDTO.java
  • DetalleVentaDTO.java
  • ReporteDTO.java
  • ErrorResponse.java (respuesta de error estandarizada)





VALIDACIONES IMPORTANTES:
- Usa anotaciones Jakarta Validation: @NotNull, @NotBlank, @Size, @Email, @Positive
- Los DTOs de entrada (Create) deben tener todas las validaciones
- Los DTOs de salida (sin Create/Update) no necesitan validaciones

NOTAS IMPORTANTES:
- ModelMapper (configurado por David) convierte automáticamente Entidad ↔ DTO
- Los controladores reciben DTOs y los servicios los convierten a Entidades
- ErrorResponse se usa en GlobalExceptionHandler para respuestas de error

COORDINACIÓN:
- Los controladores (Ptrick) usan estos DTOs
- Los servicios (Diego) convierten DTOs a Entidades usando ModelMapper

