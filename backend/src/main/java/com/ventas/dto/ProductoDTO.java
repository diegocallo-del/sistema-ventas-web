package com.ventas.dto;

import java.math.BigDecimal;

public record ProductoDTO(
        Long id,
        String nombre,
        String descripcion,
        BigDecimal precio,
        int stock,
        Long categoriaId,
        String categoriaNombre
) {}
