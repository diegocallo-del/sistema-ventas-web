package com.ventas.servicios;

import com.ventas.dto.AuthResponseDTO;
import com.ventas.dto.CreateUsuarioDTO;
import com.ventas.dto.LoginRequestDTO;
import com.ventas.excepciones.ResourceNotFoundException;
import com.ventas.excepciones.ValidationException;
import com.ventas.modelos.Usuario;
import com.ventas.repositorios.UsuarioRepository;
import com.ventas.seguridad.UsuarioPrincipal;
import com.ventas.util.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Servicio para la gestión de autenticación y gestión de usuarios.
 * Maneja operaciones de login, registro y gestión de tokens JWT.
 */
@Service
@RequiredArgsConstructor
@Transactional
public class AuthService {

    private final UsuarioRepository usuarioRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtUtil;

    /**
     * Realiza el proceso de login y genera un token JWT.
     * @param loginRequest Credenciales de login
     * @return Respuesta con token JWT y información del usuario
     */
    public AuthResponseDTO login(LoginRequestDTO loginRequest) {
        try {
            // Añadir logs detallados para debugging
            System.out.println("=== LOGIN DEBUG ===");
            System.out.println("Username recibido: " + loginRequest.username());
            System.out.println("Password recibido: " + (loginRequest.password() != null ? "[OCULTO]" : "null"));

            // Verificar si el usuario existe en la base de datos
            Usuario usuarioExistente = usuarioRepository.findByEmail(loginRequest.username())
                .orElse(null);
            System.out.println("Usuario encontrado en BD: " + (usuarioExistente != null ? "SI" : "NO"));

            if (usuarioExistente != null) {
                System.out.println("Usuario ID: " + usuarioExistente.getId());
                System.out.println("Usuario activo: " + usuarioExistente.isActivo());
                System.out.println("Usuario rol: " + usuarioExistente.getRol());
                System.out.println("Password almacenada: " + usuarioExistente.getPassword());
            }

            Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                    loginRequest.username(),
                    loginRequest.password()
                )
            );
            System.out.println("Autenticación exitosa");

            SecurityContextHolder.getContext().setAuthentication(authentication);

            UsuarioPrincipal usuarioPrincipal = (UsuarioPrincipal) authentication.getPrincipal();
            System.out.println("Usuario autenticado: " + usuarioPrincipal.getEmail());

            // Obtener el usuario completo desde la base de datos
            Usuario usuario = usuarioRepository.findByEmail(usuarioPrincipal.getEmail())
                .orElseThrow(() -> new ValidationException("Usuario no encontrado"));

            String token = jwtUtil.generateToken(usuario);
            System.out.println("Token generado exitosamente");

            return new AuthResponseDTO(
                token,
                usuario.getId(),
                usuario.getNombre(),
                usuario.getEmail(), // Cambiar de getUsername() a getEmail()
                usuario.getRol()
            );

        } catch (Exception e) {
            System.out.println("ERROR en login: " + e.getMessage());
            e.printStackTrace();
            throw new ValidationException("Credenciales inválidas: " + e.getMessage());
        }
    }

    /**
     * Registra un nuevo usuario en el sistema.
     * @param createUsuario Datos del usuario a registrar
     * @return Respuesta con token JWT del usuario creado
     */
    public AuthResponseDTO registrarUsuario(CreateUsuarioDTO createUsuario) {
        validarDatosRegistro(createUsuario);

        if (usuarioRepository.existsByEmail(createUsuario.email())) {
            throw new ValidationException("El email ya está en uso");
        }

        Usuario usuario = Usuario.builder()
                .email(createUsuario.username()) // Usar email como identificador
                .password(passwordEncoder.encode(createUsuario.password()))
                .rol(createUsuario.rol())
                .activo(true)
                .build();
        usuario.setNombre(createUsuario.nombre());

        Usuario usuarioGuardado = usuarioRepository.save(usuario);

        // Generar token automáticamente después del registro
        String token = jwtUtil.generateToken(usuarioGuardado);

        return new AuthResponseDTO(
            token,
            usuarioGuardado.getId(),
            usuarioGuardado.getNombre(),
            usuarioGuardado.getEmail(), // Cambiar a getEmail()
            usuarioGuardado.getRol()
        );
    }

    /**
     * Obtiene la información del usuario actualmente autenticado.
     * @return Información del usuario actual
     */
    @Transactional(readOnly = true)
    public Usuario obtenerUsuarioActual() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        if (authentication == null || !authentication.isAuthenticated()) {
            throw new ValidationException("Usuario no autenticado");
        }

        String email = authentication.getName(); // Ahora el nombre es el email
        return usuarioRepository.findByEmail(email)
                .orElseThrow(() -> new ResourceNotFoundException("Usuario no encontrado"));
    }

    /**
     * Actualiza el perfil del usuario actual.
     * @param id ID del usuario
     * @param createUsuario Datos actualizados del usuario
     * @return Usuario actualizado
     */
    public Usuario actualizarPerfil(Long id, CreateUsuarioDTO createUsuario) {
        Usuario usuarioActual = obtenerUsuarioActual();

        if (!usuarioActual.getId().equals(id)) {
            throw new ValidationException("No puede actualizar el perfil de otro usuario");
        }

        // Como usamos email como identificador único, solo verificamos duplicados de email
        if (!usuarioActual.getEmail().equals(createUsuario.email()) &&
            usuarioRepository.existsByEmail(createUsuario.email())) {
            throw new ValidationException("El email ya está en uso");
        }

        usuarioActual.setNombre(createUsuario.nombre());
        usuarioActual.setEmail(createUsuario.email());

        // Solo actualizar contraseña si se proporciona
        if (createUsuario.password() != null && !createUsuario.password().trim().isEmpty()) {
            usuarioActual.setPassword(passwordEncoder.encode(createUsuario.password()));
        }

        return usuarioRepository.save(usuarioActual);
    }

    /**
     * Refresca el token JWT del usuario actual.
     * @return Nuevo token generado
     */
    public String refrescarToken() {
        Usuario usuario = obtenerUsuarioActual();
        return jwtUtil.generateToken(usuario);
    }

    /**
     * Valida que el rol sea válido.
     * @param rol Rol a validar
     * @return true si es válido
     */
    private boolean esRolValido(String rol) {
        return rol != null && (
            rol.equals("ADMIN") ||
            rol.equals("SUPERVISOR") ||
            rol.equals("VENDEDOR")
        );
    }

    /**
     * Valida los datos de registro.
     * @param createUsuario Datos a validar
     */
    private void validarDatosRegistro(CreateUsuarioDTO createUsuario) {
        if (createUsuario.nombre() == null || createUsuario.nombre().trim().isEmpty()) {
            throw new ValidationException("El nombre es obligatorio");
        }

        if (createUsuario.username() == null || createUsuario.username().trim().isEmpty()) {
            throw new ValidationException("El nombre de usuario es obligatorio");
        }

        if (createUsuario.password() == null || createUsuario.password().length() < 6) {
            throw new ValidationException("La contraseña debe tener al menos 6 caracteres");
        }

        if (createUsuario.email() != null && !createUsuario.email().contains("@")) {
            throw new ValidationException("El email debe tener un formato válido");
        }


    }
}
