package com.ventas.controladores;

import com.ventas.dto.CreateUsuarioDTO;
import com.ventas.dto.UsuarioDTO;
import com.ventas.enums.RolUsuario;
import com.ventas.modelos.Usuario;
import com.ventas.repositorios.UsuarioRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Controlador completo para gestión de usuarios VENDEDOR/CLIENTE
 * Soporta CRUD completo: crear, listar, modificar, eliminar
 */
@RestController
@RequestMapping("/api/usuarios")
@RequiredArgsConstructor
@Slf4j
public class UsuarioController {

    private final UsuarioRepository usuarioRepository;
    private final PasswordEncoder passwordEncoder;

    /**
     * Lista todos los usuarios con roles VENDEDOR o CLIENTE
     */
    @GetMapping
    @PreAuthorize("hasAnyRole('ADMIN', 'SUPERVISOR')")
    public ResponseEntity<List<UsuarioDTO>> obtenerUsuariosBasicos() {
        try {
            List<UsuarioDTO> usuarios = usuarioRepository.findAll().stream()
                .filter(u -> u.getRol() == RolUsuario.VENDEDOR || u.getRol() == RolUsuario.CLIENTE)
                .filter(u -> u.isActivo())
                .map(this::convertirADTO)
                .collect(Collectors.toList());
            return ResponseEntity.ok(usuarios);
        } catch (Exception e) {
            log.error("Error listando usuarios básicos", e);
            return ResponseEntity.internalServerError().build();
        }
    }

    /**
     * Obtiene un usuario por ID
     */
    @GetMapping("/{id}")
    @PreAuthorize("hasAnyRole('ADMIN', 'SUPERVISOR')")
    public ResponseEntity<UsuarioDTO> obtenerUsuario(@PathVariable Long id) {
        try {
            Usuario usuario = usuarioRepository.findById(id).orElse(null);
            if (usuario == null || !(usuario.getRol() == RolUsuario.VENDEDOR || usuario.getRol() == RolUsuario.CLIENTE)) {
                return ResponseEntity.notFound().build();
            }
            return ResponseEntity.ok(convertirADTO(usuario));
        } catch (Exception e) {
            log.error("Error obteniendo usuario {}", id, e);
            return ResponseEntity.internalServerError().build();
        }
    }

    /**
     * Crea un nuevo usuario VENDEDOR o CLIENTE
     */
    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<UsuarioDTO> crearUsuarioBasico(@Valid @RequestBody CreateUsuarioDTO createDTO) {
        try {
            if (usuarioRepository.existsByEmail(createDTO.email())) {
                return ResponseEntity.badRequest().build(); // Email ya existe
            }

            // Validar que el rol sea VENDEDOR o CLIENTE
            if (createDTO.rol() != RolUsuario.VENDEDOR && createDTO.rol() != RolUsuario.CLIENTE) {
                return ResponseEntity.badRequest().build(); // Rol inválido
            }

            Usuario usuario = Usuario.builder()
                .nombre(createDTO.nombre())
                .email(createDTO.email())
                .password(passwordEncoder.encode(createDTO.password()))
                .numeroDocumento(createDTO.username())
                .rol(createDTO.rol())
                .activo(true)
                .build();

            Usuario usuarioGuardado = usuarioRepository.save(usuario);
            return new ResponseEntity<>(convertirADTO(usuarioGuardado), HttpStatus.CREATED);

        } catch (Exception e) {
            log.error("Error creando usuario básico", e);
            return ResponseEntity.internalServerError().build();
        }
    }

    /**
     * Cambia el rol de un usuario entre VENDEDOR y CLIENTE
     */
    @PostMapping("/{id}/role")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<UsuarioDTO> cambiarRol(@PathVariable Long id, @RequestParam String nuevoRol) {
        log.info("Intentando cambiar rol de usuario {} a {}", id, nuevoRol);

        try {
            Usuario usuario = usuarioRepository.findById(id).orElse(null);
            log.info("Usuario encontrado: {}", usuario != null ? usuario.getId() : "null");

            if (usuario == null) {
                log.error("Usuario {} no encontrado", id);
                return ResponseEntity.notFound().build();
            }

            log.info("Rol actual del usuario {}: {}", usuario.getId(), usuario.getRol());

            // Verificar que puede cambiar este tipo de usuario
            if (!(usuario.getRol() == RolUsuario.VENDEDOR || usuario.getRol() == RolUsuario.CLIENTE)) {
                log.error("Usuario {} tiene rol {} que no puede ser cambiado", usuario.getId(), usuario.getRol());
                return ResponseEntity.notFound().build();
            }

            RolUsuario rol;
            if ("VENDEDOR".equalsIgnoreCase(nuevoRol)) {
                rol = RolUsuario.VENDEDOR;
            } else if ("CLIENTE".equalsIgnoreCase(nuevoRol)) {
                rol = RolUsuario.CLIENTE;
            } else {
                log.error("Nuevo rol '{}' no válido", nuevoRol);
                return ResponseEntity.badRequest().build();
            }

            log.info("Cambiando rol de {} a {}", usuario.getRol(), rol);
            usuario.setRol(rol);
            usuarioRepository.save(usuario);

            UsuarioDTO response = convertirADTO(usuario);
            log.info("Cambio de rol exitoso para usuario {}", id);

            return ResponseEntity.ok(response);

        } catch (Exception e) {
            log.error("Error cambiando rol de usuario {}", id, e);
            return ResponseEntity.internalServerError().build();
        }
    }

    /**
     * Modifica los datos de un usuario VENDEDOR/CLIENTE
     */
    @PutMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<UsuarioDTO> actualizarUsuario(@PathVariable Long id, @Valid @RequestBody CreateUsuarioDTO updateDTO) {
        try {
            Usuario usuario = usuarioRepository.findById(id).orElse(null);
            if (usuario == null || !(usuario.getRol() == RolUsuario.VENDEDOR || usuario.getRol() == RolUsuario.CLIENTE)) {
                return ResponseEntity.notFound().build();
            }

            // Validar email único si cambió
            if (!usuario.getEmail().equals(updateDTO.email()) && usuarioRepository.existsByEmail(updateDTO.email())) {
                return ResponseEntity.badRequest().build(); // Email ya existe
            }

            usuario.setNombre(updateDTO.nombre());
            usuario.setEmail(updateDTO.email());

            // Actualizar password solo si se proporciona
            if (updateDTO.password() != null && !updateDTO.password().trim().isEmpty()) {
                usuario.setPassword(passwordEncoder.encode(updateDTO.password()));
            }

            usuario.setNumeroDocumento(updateDTO.username());

            Usuario usuarioActualizado = usuarioRepository.save(usuario);
            return ResponseEntity.ok(convertirADTO(usuarioActualizado));

        } catch (Exception e) {
            log.error("Error actualizando usuario {}", id, e);
            return ResponseEntity.internalServerError().build();
        }
    }

    /**
     * Desactiva un usuario VENDEDOR/CLIENTE (soft delete)
     */
    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Void> eliminarUsuario(@PathVariable Long id) {
        try {
            Usuario usuario = usuarioRepository.findById(id).orElse(null);
            if (usuario == null || !(usuario.getRol() == RolUsuario.VENDEDOR || usuario.getRol() == RolUsuario.CLIENTE)) {
                return ResponseEntity.notFound().build();
            }

            usuario.setActivo(false);
            usuarioRepository.save(usuario);
            return ResponseEntity.noContent().build();

        } catch (Exception e) {
            log.error("Error eliminando usuario {}", id, e);
            return ResponseEntity.internalServerError().build();
        }
    }

    private UsuarioDTO convertirADTO(Usuario usuario) {
        return new UsuarioDTO(
            usuario.getId(),
            usuario.getNombre(),
            usuario.getEmail(),
            usuario.getTelefono(),
            usuario.getNumeroDocumento(),
            usuario.getRol().name(),
            usuario.isActivo(),
            usuario.getFechaCreacion() != null ? usuario.getFechaCreacion().toString() : null,
            usuario.getFechaModificacion() != null ? usuario.getFechaModificacion().toString() : null
        );
    }
}
