package com.ventas.dto;

/**
 * DTO para crear productos con imagen por URL o archivo
 */
public record CreateProductoConImagenDTO(
        String codigo,
        String nombre,
        String descripcion,
        String marca,
        String modelo,
        java.math.BigDecimal precio,
        Integer stock,
        Long categoriaId,
        String imagenUrl
) {}
