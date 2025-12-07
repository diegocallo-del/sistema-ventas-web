
CARPETA: MODELOS (Entidades JPA)
RESPONSABLE: SEBASTIAN - DBA (Administrador de Base de Datos)


DESCRIPCIÓN:
Clases de entidad que representan tablas de la base de datos usando JPA.
Estas clases se mapean directamente a las tablas SQL creadas por el DBA.

CLASES PRINCIPALES QUE SE CREARON:
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

NOTAS IMPORTANTES:
- Extiende EntidadBase (DAVID) para campos comunes
- Usa tipos compatibles: Long para IDs, BigDecimal para precios
- Las relaciones deben coincidir con el diseño de base de datos
- Coordina con Persona 2 para usar EntidadBase correctamente
