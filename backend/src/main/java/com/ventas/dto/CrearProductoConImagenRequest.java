package com.ventas.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * DTO para crear productos con imagen por URL
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CrearProductoConImagenRequest {
    private String codigo;
    private String nombre;
    private String descripcion;
    private String marca;
    private String modelo;
    private Double precio;
    private Integer stock;
    private Long categoriaId;
    private String imagenUrl;
}
