═══════════════════════════════════════════════════════════
CARPETA: ABSTRACTAS (Clases Abstractas Base)
RESPONSABLE: PERSONA 2 - Infraestructura
═══════════════════════════════════════════════════════════

DESCRIPCIÓN:
Clases abstractas que proveen funcionalidad común usando HERENCIA.
Las entidades extenderán estas clases para reutilizar código.

CLASES QUE DEBES CREAR:
  • EntidadBase.java (clase abstracta con id, fechas, activo)
  • PersonaBase.java (clase abstracta para Cliente/Usuario)

ESTRUCTURA DE EntidadBase:
@MappedSuperclass
@Data
public abstract class EntidadBase {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "fecha_creacion", nullable = false, updatable = false)
    private LocalDateTime fechaCreacion;
    
    @Column(name = "fecha_modificacion")
    private LocalDateTime fechaModificacion;
    
    @Column(name = "activo", nullable = false)
    private Boolean activo = true;
    
    @PrePersist
    protected void onCreate() {
        fechaCreacion = LocalDateTime.now();
        fechaModificacion = LocalDateTime.now();
    }
    
    @PreUpdate
    protected void onUpdate() {
        fechaModificacion = LocalDateTime.now();
    }
}

ESTRUCTURA DE PersonaBase:
@MappedSuperclass
@Data
public abstract class PersonaBase extends EntidadBase {
    @NotBlank
    @Size(max = 100)
    private String nombre;
    
    @Email
    @Size(max = 100)
    private String email;
    
    @Size(max = 20)
    private String telefono;
    
    private String direccion;
}

CONCEPTOS OOP APLICADOS:
✓ HERENCIA: Las entidades extienden estas clases
✓ REUTILIZACIÓN: Código común en un solo lugar
✓ ENCAPSULAMIENTO: Atributos privados con Lombok @Data

NOTAS IMPORTANTES:
- Usa @MappedSuperclass para que JPA reconozca los campos
- Las entidades Cliente y Usuario extenderán PersonaBase
- Las demás entidades extenderán EntidadBase
- Coordina con Persona 1 para que las entidades usen estas clases
