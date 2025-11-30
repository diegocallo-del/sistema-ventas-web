package com.ventas.controladores;

import com.ventas.dto.AuthResponseDTO;
import com.ventas.dto.CreateUsuarioDTO;
import com.ventas.dto.LoginRequestDTO;
import com.ventas.enums.RolUsuario;
import com.ventas.modelos.Usuario;
import com.ventas.repositorios.UsuarioRepository;
import com.ventas.util.JwtUtil;
import com.ventas.servicios.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

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
    private final JwtUtil jwtUtil;
    private final UsuarioRepository usuarioRepository;
    private final PasswordEncoder passwordEncoder;

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
     * Endpoint de prueba para verificar comunicación básica.
     * NO requiere autenticación - usado para debugging.
     */
    @PostMapping("/test")
    public ResponseEntity<Map<String, Object>> testEndpoint(@RequestBody Map<String, Object> data) {
        Map<String, Object> response = new HashMap<>();
        response.put("success", true);
        response.put("timestamp", System.currentTimeMillis());
        response.put("received", data);
        response.put("message", "Test endpoint working! Time: " + System.currentTimeMillis());
        return ResponseEntity.ok(response);
    }

    /**
     * Endpoint TEMPORAL para inicializar el primer usuario admin.
     * SOBRESCRIBE el usuario admin existente.
     */
    @PostMapping("/bootstrap")
    public ResponseEntity<String> bootstrapAdmin() {
        try {
            // Buscar usuario admin existente o crear uno nuevo
            Usuario admin = usuarioRepository.findByEmail("admin@sistema-ventas.com").orElse(new Usuario());

            admin.setNombre("Administrador");
            admin.setEmail("admin@sistema-ventas.com");
            admin.setPassword("admin123"); // Contraseña en texto plano para desarrollo
            admin.setRol(RolUsuario.ADMIN);
            admin.setActivo(true);

            usuarioRepository.save(admin);

            return ResponseEntity.ok("Usuario admin creado/actualizado exitosamente. Usuario: admin@sistema-ventas.com, Clave: admin123");

        } catch (Exception e) {
            return ResponseEntity.internalServerError().body("Error al inicializar: " + e.getMessage());
        }
    }

    /**
     * Endpoint TEMPORAL para convertir contraseñas a texto plano (desarrollo).
     * Elimina el hash BCrypt y deja contraseñas en texto plano.
     */
    @PostMapping("/fix-passwords")
    public ResponseEntity<String> fixPasswords() {
        try {
            java.util.List<Usuario> usuarios = usuarioRepository.findAll();
            int fixed = 0;

            for (Usuario usuario : usuarios) {
                String passwordActual = usuario.getPassword();
                // Si la contraseña está codificada con BCrypt (comienza con $2a$)
                if (passwordActual != null && passwordActual.startsWith("$2a$")) {
                    // Convertir contraseñas BCrypt conocidas a texto plano
                    if (passwordEncoder.matches("admin123", passwordActual)) {
                        usuario.setPassword("admin123");
                        usuarioRepository.save(usuario);
                        fixed++;
                    } else if (passwordEncoder.matches("vendedor123", passwordActual)) {
                        usuario.setPassword("vendedor123");
                        usuarioRepository.save(usuario);
                        fixed++;
                    }
                }
            }

            return ResponseEntity.ok("Contraseñas convertidas a texto plano: " + fixed + " usuarios actualizados");

        } catch (Exception e) {
            return ResponseEntity.internalServerError().body("Error al convertir contraseñas: " + e.getMessage());
        }
    }



    /**
     * Endpoint para refrescar el token JWT.
     * @return Nuevo token JWT generado
     */
    @PostMapping("/refresh")
    public ResponseEntity<String> refrescarToken() {
        String token = authService.refrescarToken();
        return ResponseEntity.ok(token);
    }

    /**
     * Endpoint para obtener informacion del usuario actual.
     * @return Informacion del usuario autenticado
     */
    @GetMapping("/mi-perfil")
    public ResponseEntity<String> obtenerMiPerfil() {
        // Por simplicidad, retorna un mensaje básico
        // En implementación real, retornaría información completa del usuario
        return ResponseEntity.ok("Perfil cargado exitosamente");
    }
}
