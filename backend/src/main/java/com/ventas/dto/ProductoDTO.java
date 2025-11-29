package com.ventas.dto;

import java.math.BigDecimal;
import java.time.LocalDateTime;

public record ProductoDTO(
        Long id,
        String codigo,
        String nombre,
        String descripcion,
        BigDecimal precio,
        int stock,
        Long categoriaId,
        String categoriaNombre,
        String imagen,
        boolean activo,
        LocalDateTime fechaCreacion,
        LocalDateTime fechaActualizacion
) {}
