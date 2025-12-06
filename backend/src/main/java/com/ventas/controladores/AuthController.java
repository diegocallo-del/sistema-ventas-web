package com.ventas.controladores;

import com.ventas.dto.AuthResponseDTO;
import com.ventas.dto.CreateUsuarioDTO;
import com.ventas.dto.LoginRequestDTO;
import com.ventas.servicios.AuthService;
import com.ventas.modelos.Usuario;
import com.ventas.repositorios.UsuarioRepository;
import com.ventas.enums.RolUsuario;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

import jakarta.validation.Valid;
import java.util.HashMap;
import java.util.Map;

/**
 * Controlador REST simple para autenticación básica.
 */
@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@Validated
@Tag(name = "Auth", description = "Autenticación básica y bootstrap")
public class AuthController {

    private final UsuarioRepository usuarioRepository;
    private final AuthService authService;
    private final PasswordEncoder passwordEncoder;

    /**
     * Endpoint para login simple.
     * Verifica si usuario existe y contraseña coincide.
     */
    @PostMapping("/login")
    @Operation(summary = "Login", description = "Autentica usuario y devuelve token")
    public ResponseEntity<AuthResponseDTO> login(@Valid @RequestBody LoginRequestDTO loginRequest) {
        AuthResponseDTO response = authService.login(loginRequest);
        return ResponseEntity.ok(response);
    }

    /**
     * Endpoint para registro simple.
     * Guarda usuario en BD con contraseña en texto plano.
     */
    @PostMapping("/register")
    @Operation(summary = "Registro", description = "Registra usuario básico")
    public ResponseEntity<AuthResponseDTO> registrarUsuario(@Valid @RequestBody CreateUsuarioDTO createUsuario) {
        AuthResponseDTO response = authService.registrarUsuario(createUsuario);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    /**
     * Endpoint de prueba.
     */
    @PostMapping("/test")
    @Operation(summary = "Test", description = "Endpoint de prueba")
    public ResponseEntity<Map<String, Object>> testEndpoint(@RequestBody Map<String, Object> data) {
        Map<String, Object> response = new HashMap<>();
        response.put("success", true);
        response.put("timestamp", System.currentTimeMillis());
        response.put("received", data);
        response.put("message", "Test endpoint working!");
        return ResponseEntity.ok(response);
    }

    /**
     * Inicializar admin simple.
     */
    @PostMapping("/bootstrap")
    @Operation(summary = "Bootstrap admin", description = "Crea un usuario admin por defecto")
    @SuppressWarnings("null")
    public ResponseEntity<String> bootstrapAdmin() {
        try {
            if (usuarioRepository.findByEmail("admin@sistema-ventas.com").isEmpty()) {
                Usuario admin = Usuario.builder()
                        .nombre("Administrador")
                        .email("admin@sistema-ventas.com")
                        .password(passwordEncoder.encode("admin123"))
                        .rol(RolUsuario.ADMIN)
                        .activo(true)
                        .build();

                usuarioRepository.save(admin);
                return ResponseEntity.ok("Admin creado: admin@sistema-ventas.com / admin123");
            } else {
                return ResponseEntity.ok("Admin ya existe: admin@sistema-ventas.com / admin123");
            }
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body("Error creando admin: " + e.getMessage());
        }
    }
}
