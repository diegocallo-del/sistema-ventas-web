package com.ventas.servicios;

import com.ventas.dto.AuthResponseDTO;
import com.ventas.dto.CreateUsuarioDTO;
import com.ventas.dto.LoginRequestDTO;
import com.ventas.excepciones.ResourceNotFoundException;
import com.ventas.excepciones.ValidationException;
import com.ventas.modelos.Usuario;
import com.ventas.repositorios.UsuarioRepository;
import com.ventas.util.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.UUID;

/**
 * Servicio para la gestión de autenticación y gestión de usuarios.
 * Maneja operaciones de login, registro y gestión de tokens JWT.
 */
@Service
@RequiredArgsConstructor
@Transactional
public class AuthService {

    private final UsuarioRepository usuarioRepository;
    private final JwtUtil jwtUtil;
    private final PasswordEncoder passwordEncoder;

    /**
     * Realiza el proceso de login y genera un token JWT.
     * 
     * @param loginRequest Credenciales de login
     * @return Respuesta con token JWT y información del usuario
     */
    public AuthResponseDTO login(LoginRequestDTO loginRequest) {
        Usuario usuario = usuarioRepository.findByEmail(loginRequest.username())
                .orElse(null);
        if (usuario == null) {
            return AuthResponseDTO.error("Usuario no encontrado. Verifique el email ingresado.");
        }
        if (!usuario.isActivo()) {
            return AuthResponseDTO.error("Usuario inactivo. Contacte al administrador.");
        }
        // Comparación de contraseña (con migración automática de texto plano a BCrypt)
        if (!passwordEncoder.matches(loginRequest.password(), usuario.getPassword())) {
            // Fallback: Verificar si es contraseña legacy en texto plano
            if (loginRequest.password().equals(usuario.getPassword())) {
                // Migración automática: Encriptar y guardar
                usuario.setPassword(passwordEncoder.encode(loginRequest.password()));
                usuarioRepository.save(usuario);
            } else {
                return AuthResponseDTO.error("Contraseña incorrecta. Verifique sus credenciales.");
            }
        }
        // Generar token JWT
        String token = jwtUtil.generateToken(usuario);
        return AuthResponseDTO.success(
                token,
                usuario.getId(),
                usuario.getNombre(),
                usuario.getEmail(),
                usuario.getRol());
    }

    /**
     * Registra un nuevo usuario en el sistema.
     * 
     * @param createUsuario Datos del usuario a registrar
     * @return Respuesta con token JWT del usuario creado
     */
    public AuthResponseDTO registrarUsuario(CreateUsuarioDTO createUsuario) {
        // Validación simple antes de guardar
        if (createUsuario.nombre() == null || createUsuario.nombre().trim().isEmpty()) {
            return AuthResponseDTO.error("El nombre es obligatorio");
        }
        if (createUsuario.email() == null || createUsuario.email().trim().isEmpty() || !createUsuario.email().contains("@")) {
            return AuthResponseDTO.error("El email es obligatorio y debe tener formato válido");
        }
        if (createUsuario.password() == null || createUsuario.password().length() < 6) {
            return AuthResponseDTO.error("La contraseña debe tener al menos 6 caracteres");
        }
        if (createUsuario.username() == null || createUsuario.username().trim().isEmpty()) {
            return AuthResponseDTO.error("El nombre de usuario es obligatorio");
        }

        if (usuarioRepository.existsByEmail(createUsuario.email())) {
            return AuthResponseDTO.error("El email ya está en uso");
        }

        // Guardar contraseña en texto plano para desarrollo
        Usuario usuario = new Usuario();
        usuario.setEmail(createUsuario.email());
        usuario.setNombre(createUsuario.nombre());
        usuario.setPassword(passwordEncoder.encode(createUsuario.password()));
        usuario.setRol(createUsuario.rol());
        usuario.setActivo(true);

        Usuario usuarioGuardado = usuarioRepository.save(usuario);

        // Generar token JWT
        String token = jwtUtil.generateToken(usuario);

        return AuthResponseDTO.success(
                token,
                usuarioGuardado.getId(),
                usuarioGuardado.getNombre(),
                usuarioGuardado.getEmail(),
                usuarioGuardado.getRol());
    }

    /**
     * Obtiene la información del usuario actualmente autenticado.
     * 
     * @return Información del usuario actual
     */
    @Transactional(readOnly = true)
    public Usuario obtenerUsuarioActual() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        if (authentication == null || !authentication.isAuthenticated()) {
            throw new ValidationException("Usuario no autenticado");
        }

        String email = authentication.getName();
        return usuarioRepository.findByEmail(email)
                .orElseThrow(() -> new ResourceNotFoundException("Usuario no encontrado"));
    }

    /**
     * Actualiza el perfil del usuario actual.
     * 
     * @param id            ID del usuario
     * @param createUsuario Datos actualizados del usuario
     * @return Usuario actualizado
     */
    public Usuario actualizarPerfil(Long id, CreateUsuarioDTO createUsuario) {
        Usuario usuarioActual = obtenerUsuarioActual();

        if (!usuarioActual.getId().equals(id)) {
            throw new ValidationException("No puede actualizar el perfil de otro usuario");
        }

        // Como usamos email como identificador único, solo verificamos duplicados de
        // email
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
     * 
     * @return Nuevo token generado
     */
    public String refrescarToken() {
        Usuario usuario = obtenerUsuarioActual();
        return jwtUtil.generateToken(usuario);
    }

    /**
     * Valida los datos de registro.
     * 
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
