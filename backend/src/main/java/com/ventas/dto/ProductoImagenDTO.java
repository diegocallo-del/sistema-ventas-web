package com.ventas.dto;

/**
 * DTO para representar una imagen de producto
 */
public record ProductoImagenDTO(
        Long id,
        String url,
        int orden
) {}
