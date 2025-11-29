package com.ventas.dto;

import com.ventas.enums.RolUsuario;

/**
 * DTO para la respuesta de autenticación.
 * Contiene el token JWT y información básica del usuario autenticado.
 */
public record AuthResponseDTO(

    String token,

    Long id,

    String nombre,

    String username,

    RolUsuario rol

) {}
