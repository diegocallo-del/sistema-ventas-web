package com.ventas.repositorios;

import com.ventas.modelos.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

/**
 * Repositorio para operaciones CRUD de usuarios en la base de datos.
 * Maneja la autenticación y gestión de usuarios del sistema.
 */
@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

    /**
     * Busca usuario por email (usado como identificador único).
     * Utilizado principalmente para la autenticación.
     * @param email El email del usuario (identificador único)
     * @return Optional del usuario si existe
     */
    Optional<Usuario> findByEmail(String email);

    /**
     * Verifica si existe un usuario con el email especificado.
     * @param email El email a verificar
     * @return true si el email existe, false en caso contrario
     */
    boolean existsByEmail(String email);
}
