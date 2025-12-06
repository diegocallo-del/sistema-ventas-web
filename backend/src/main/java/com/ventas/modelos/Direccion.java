package com.ventas.modelos;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "direcciones")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Direccion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "usuario_id", nullable = false)
    private Usuario usuario;

    @Column(name = "direccion", nullable = false, length = 255)
    private String direccion;

    @Column(name = "ciudad", length = 100)
    private String ciudad;

    @Column(name = "distrito", length = 100)
    private String distrito;

    @Column(name = "codigo_postal", length = 20)
    private String codigoPostal;

    @Column(name = "referencia")
    private String referencia;

    @Column(name = "principal")
    @Builder.Default
    private boolean principal = false;
}
