═══════════════════════════════════════════════════════════
CARPETA: DTO (Data Transfer Objects)
RESPONSABLE: PERSONA 2 - Infraestructura
═══════════════════════════════════════════════════════════

DESCRIPCIÓN:
Objetos de transferencia de datos. Se usan para comunicarse con el frontend.
NO contienen lógica de negocio, solo datos y validaciones.

CLASES QUE DEBES CREAR:
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

ESTRUCTURA RECOMENDADA (usar records de Java):
public record ProductoDTO(
    Long id,
    String nombre,
    String descripcion,
    BigDecimal precio,
    Integer stock,
    Long categoriaId,
    String categoriaNombre
) {}

O con clases y Lombok:
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProductoDTO {
    private Long id;
    
    @NotBlank
    @Size(max = 200)
    private String nombre;
    
    private String descripcion;
    
    @NotNull
    @Positive
    private BigDecimal precio;
    
    @NotNull
    @PositiveOrZero
    private Integer stock;
    
    @NotNull
    private Long categoriaId;
}

VALIDACIONES IMPORTANTES:
- Usa anotaciones Jakarta Validation: @NotNull, @NotBlank, @Size, @Email, @Positive
- Los DTOs de entrada (Create*) deben tener todas las validaciones
- Los DTOs de salida (sin Create/Update) no necesitan validaciones

NOTAS IMPORTANTES:
- ModelMapper (configurado por Persona 2) convierte automáticamente Entidad ↔ DTO
- Los controladores reciben DTOs y los servicios los convierten a Entidades
- ErrorResponse se usa en GlobalExceptionHandler para respuestas de error

COORDINACIÓN:
- Los controladores (Persona 5) usan estos DTOs
- Los servicios (Persona 4) convierten DTOs a Entidades usando ModelMapper

