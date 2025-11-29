package com.ventas.controladores;

import com.ventas.dto.AuthResponseDTO;
import com.ventas.dto.CreateUsuarioDTO;
import com.ventas.dto.LoginRequestDTO;
import com.ventas.servicios.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;

/**
 * Controlador REST para la gestión de autenticación y usuarios.
 * Proporciona endpoints para login, registro y gestión de perfil de usuario.
 */
@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@Validated
public class AuthController {

    private final AuthService authService;

    /**
     * Endpoint para el login de usuarios.
     * Recibe credenciales y retorna un token JWT.
     * @param loginRequest Credenciales del usuario
     * @return Token JWT con información del usuario
     */
    @PostMapping("/login")
    public ResponseEntity<AuthResponseDTO> login(@Valid @RequestBody LoginRequestDTO loginRequest) {
        AuthResponseDTO response = authService.login(loginRequest);
        return ResponseEntity.ok(response);
    }

    /**
     * Endpoint para registro de nuevos usuarios.
     * Solo accesible para administradores o usuarios registrados.
     * @param createUsuario Datos del nuevo usuario
     * @return Token JWT del usuario registrado
     */
    @PostMapping("/register")
    public ResponseEntity<AuthResponseDTO> registrarUsuario(
            @Valid @RequestBody CreateUsuarioDTO createUsuario) {
        AuthResponseDTO response = authService.registrarUsuario(createUsuario);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    /**
     * Endpoint para refrescar el token JWT.
     * @return Nuevo token JWT generado
     */
    @PostMapping("/refresh")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<String> refrescarToken() {
        String token = authService.refrescarToken();
        return ResponseEntity.ok(token);
    }

    /**
     * Endpoint para obtener informacion del usuario actual.
     * @return Informacion del usuario autenticado
     */
    @GetMapping("/mi-perfil")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<String> obtenerMiPerfil() {
        // Por simplicidad, retorna un mensaje básico
        // En implementación real, retornaría información completa del usuario
        return ResponseEntity.ok("Perfil cargado exitosamente");
    }
}
