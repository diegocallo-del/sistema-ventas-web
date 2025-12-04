package com.ventas.dto;

/**
 * DTO para la representación de usuarios en la API REST
 */
public record UsuarioDTO(
    Long id,
    String nombre,
    String email,
    String telefono,
    String numeroDocumento,
    String rol,
    Boolean activo,
    String fechaCreacion,
    String fechaModificacion
) {
}
