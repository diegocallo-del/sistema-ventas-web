═══════════════════════════════════════════════════════════
CARPETA: MODELOS (Entidades JPA)
RESPONSABLE: PERSONA 1 - DBA (Administrador de Base de Datos)
═══════════════════════════════════════════════════════════

DESCRIPCIÓN:
Clases de entidad que representan tablas de la base de datos usando JPA.
Estas clases se mapean directamente a las tablas SQL creadas por el DBA.

CLASES QUE DEBES CREAR:
  • Producto.java
  • Cliente.java
  • Usuario.java
  • Categoria.java
  • Venta.java
  • DetalleVenta.java

ESTRUCTURA QUE DEBES SEGUIR:
- Usar anotaciones JPA: @Entity, @Table, @Id, @GeneratedValue
- Usar Lombok: @Data, @NoArgsConstructor, @AllArgsConstructor
- Definir relaciones: @ManyToOne, @OneToMany, @JoinColumn
- Validaciones: @NotNull, @Size, @DecimalMin
- Campos comunes: id (Long), fechaCreacion (LocalDateTime), 
  fechaModificacion (LocalDateTime), activo (Boolean)

EJEMPLO DE ESTRUCTURA BÁSICA:
@Entity
@Table(name = "productos")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Producto extends EntidadBase {
    @NotBlank
    @Size(max = 200)
    private String nombre;
    
    private String descripcion;
    
    @NotNull
    @DecimalMin(value = "0.01")
    private BigDecimal precio;
    
    @NotNull
    @Min(0)
    private Integer stock;
    
    @ManyToOne
    @JoinColumn(name = "categoria_id")
    private Categoria categoria;
}

NOTAS IMPORTANTES:
- Extiende EntidadBase (creada por Persona 2) para campos comunes
- Usa tipos compatibles: Long para IDs, BigDecimal para precios
- Las relaciones deben coincidir con el diseño de base de datos
- Coordina con Persona 2 para usar EntidadBase correctamente
