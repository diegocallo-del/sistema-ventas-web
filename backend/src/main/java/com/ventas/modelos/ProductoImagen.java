package com.ventas.modelos;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "producto_imagenes")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ProductoImagen {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "producto_id", nullable = false)
    private Producto producto;

    @Column(name = "url", nullable = true, length = 500)  // Ahora opcional si usamos datos binarios
    private String url;

    @Lob
    @Column(name = "datos_imagen", nullable = true)
    private byte[] datosImagen;  // Para guardar imagen directamente en DB

    @Column(name = "tipo_contenido", nullable = true, length = 100)
    private String tipoContenido;  // ej: "image/jpeg"

    @Column(name = "orden", nullable = false)
    private int orden = 1;
}
