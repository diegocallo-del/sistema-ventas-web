package com.ventas.servicios;

import com.ventas.dto.CreateUsuarioDTO;
import com.ventas.dto.UsuarioDTO;
import com.ventas.excepciones.ResourceNotFoundException;
import com.ventas.excepciones.ValidationException;
import com.ventas.modelos.Usuario;
import com.ventas.repositorios.UsuarioRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

/**
 * Servicio para la gestión de usuarios
 */
@Service
@RequiredArgsConstructor
public class UsuarioService {

    private final UsuarioRepository usuarioRepository;
    private final PasswordEncoder passwordEncoder;

    /**
     * Lista todos los usuarios
     */
    public List<UsuarioDTO> listarUsuarios() {
        return usuarioRepository.findAll().stream()
                .map(this::convertirADTO)
                .collect(Collectors.toList());
    }

    /**
     * Obtiene un usuario por ID
     */
    public UsuarioDTO obtenerUsuarioPorId(Long id) {
        if (id == null) {
            throw new ValidationException("El ID del usuario es obligatorio");
        }

        Usuario usuario = usuarioRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Usuario no encontrado con ID: " + id));
        return convertirADTO(usuario);
    }

    /**
     * Crea un nuevo usuario
     */
    public UsuarioDTO crearUsuario(CreateUsuarioDTO createDTO) {
        // Validar email único
        if (usuarioRepository.existsByEmail(createDTO.email())) {
            throw new ValidationException("El email ya está registrado");
        }

        Usuario usuario = Usuario.builder()
                .nombre(createDTO.nombre())
                .email(createDTO.email())
                .password(passwordEncoder.encode(createDTO.password()))
                .numeroDocumento(createDTO.username()) // Usar username como numeroDocumento
                .rol(createDTO.rol())
                .build();

        usuario.setActivo(true);
        Usuario usuarioGuardado = usuarioRepository.save(usuario);

        return convertirADTO(usuarioGuardado);
    }

    /**
     * Actualiza un usuario existente
     */
    public UsuarioDTO actualizarUsuario(Long id, CreateUsuarioDTO updateDTO) {
        if (id == null) {
            throw new ValidationException("El ID del usuario es obligatorio");
        }

        Usuario usuario = usuarioRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Usuario no encontrado con ID: " + id));

        // Validar email si cambió
        if (!usuario.getEmail().equals(updateDTO.email()) && usuarioRepository.existsByEmail(updateDTO.email())) {
            throw new ValidationException("El email ya está registrado por otro usuario");
        }

        usuario.setNombre(updateDTO.nombre());
        usuario.setEmail(updateDTO.email());

        // Solo actualizar password si se proporciona
        if (updateDTO.password() != null && !updateDTO.password().trim().isEmpty()) {
            usuario.setPassword(passwordEncoder.encode(updateDTO.password()));
        }

        usuario.setNumeroDocumento(updateDTO.username());
        usuario.setRol(updateDTO.rol());

        Usuario usuarioActualizado = usuarioRepository.save(usuario);
        return convertirADTO(usuarioActualizado);
    }

    /**
     * Elimina un usuario
     */
    public void eliminarUsuario(Long id) {
        if (id == null) {
            throw new ValidationException("El ID del usuario es obligatorio");
        }
        if (!usuarioRepository.existsById(id)) {
            throw new ResourceNotFoundException("Usuario no encontrado con ID: " + id);
        }
        usuarioRepository.deleteById(id);
    }

    /**
     * Marca usuario como inactivo en lugar de eliminar físicamente
     */
    public UsuarioDTO desactivarUsuario(Long id) {
        if (id == null) {
            throw new ValidationException("El ID del usuario es obligatorio");
        }
        Usuario usuario = usuarioRepository.findById(id )
                .orElseThrow(() -> new ResourceNotFoundException("Usuario no encontrado con ID: " + id));

        usuario.setActivo(false);
        Usuario usuarioActualizado = usuarioRepository.save(usuario);

        return convertirADTO(usuarioActualizado);
    }

    /**
     * Convierte Usuario a UsuarioDTO
     */
    private UsuarioDTO convertirADTO(Usuario usuario) {
        String rol = "CLIENTE"; // Default
        try {
            if (usuario.getRol() != null) {
                rol = usuario.getRol().name().toUpperCase();
            }
        } catch (Exception e) {
            // Si hay error en el rol, usar default
            rol = "CLIENTE";
        }

        return new UsuarioDTO(
                usuario.getId(),
                usuario.getNombre(),
                usuario.getEmail(),
                usuario.getTelefono(),
                usuario.getNumeroDocumento(),
                rol,
                usuario.isActivo(),
                usuario.getFechaCreacion() != null ? usuario.getFechaCreacion().toString() : null,
                usuario.getFechaModificacion() != null ? usuario.getFechaModificacion().toString() : null
        );
    }
}
