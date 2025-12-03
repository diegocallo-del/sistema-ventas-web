package com.ventas.dto;

import java.math.BigDecimal;
import java.time.LocalDateTime;

public record ProductoDTO(
        Long id,
        String codigo,
        String nombre,
        String descripcion,
        String marca,
        String modelo,
        BigDecimal precio,
        int stock,
        Long categoriaId,
        String categoriaNombre,
        Long vendedorId,
        String vendedorNombre,
        String imagen,
        boolean activo,
        LocalDateTime fechaCreacion,
        LocalDateTime fechaActualizacion
) {}
