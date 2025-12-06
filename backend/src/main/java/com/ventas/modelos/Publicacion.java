package com.ventas.modelos;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "publicaciones")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Publicacion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "producto_id", nullable = false)
    private Producto producto;

    @Column(name = "titulo", nullable = false, length = 255)
    private String titulo;

    public enum EstadoPublicacion {
        ACTIVA, PAUSADA, CERRADA
    }

    @Enumerated(EnumType.STRING)
    @Column(name = "estado", nullable = false, columnDefinition = "ENUM('ACTIVA','PAUSADA','CERRADA') DEFAULT 'ACTIVA'")
    @Builder.Default
    private EstadoPublicacion estado = EstadoPublicacion.ACTIVA;

    @Column(name = "visitas", nullable = false)
    @Builder.Default
    private int visitas = 0;

    @Column(name = "fecha_creacion", columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private LocalDateTime fechaCreacion;
}
