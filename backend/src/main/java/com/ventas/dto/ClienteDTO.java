package com.ventas.dto;

public record ClienteDTO(
        Long id,
        String nombre,
        String email,
        String telefono,
        String direccion,
        String numeroDocumento
) {}
