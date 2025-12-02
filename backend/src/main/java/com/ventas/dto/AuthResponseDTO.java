package com.ventas.dto;

import com.ventas.enums.RolUsuario;

/**
 * DTO para la respuesta de autenticación.

 */
public record AuthResponseDTO(

        boolean success,
        String token, 
        Long userId,
        String nombre,
        String email,
        String error,
        RolUsuario rol

) {
    // Constructor para respuestas exitosas
    public static AuthResponseDTO success(String token, Long userId, String nombre, String email, RolUsuario rol) {
        return new AuthResponseDTO(true, token, userId, nombre, email, null, rol);
    }

    // Constructor para respuestas de error
    public static AuthResponseDTO error(String error) {
        return new AuthResponseDTO(false, null, null, null, null, error, null);
    }
}
