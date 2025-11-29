package com.ventas.dto;

import com.ventas.enums.RolUsuario;

public record UsuarioDTO(
        Long id,
        String username,
        String nombre,
        String email,
        RolUsuario rol
) {}
