package com.ventas.repositorios;

import com.ventas.modelos.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

/**
 * Repositorio para operaciones CRUD de clientes en la base de datos.
 * Maneja la gestión de clientes del sistema.
 */
@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Long> {

    /**
     * Busca clientes por email (debe ser único en el sistema).
     * @param email El email del cliente
     * @return Optional del cliente si existe
     */
    Optional<Cliente> findByEmail(String email);

    /**
     * Busca clientes por nombre completo, insensible a mayúsculas/minúsculas.
     * @param nombre El nombre o parte del nombre del cliente
     * @return Lista de clientes que coinciden con el nombre
     */
    List<Cliente> findByNombreContainingIgnoreCase(String nombre);

    /**
     * Busca clientes por teléfono.
     * @param telefono El número de teléfono del cliente
     * @return Lista de clientes con ese teléfono
     */
    List<Cliente> findByTelefono(String telefono);

    /**
     * Busca clientes activos en el sistema.
     * @return Lista de clientes activos
     */
    @Query("SELECT c FROM Cliente c WHERE c.activo = true")
    List<Cliente> findClienteActivos();

    /**
     * Busca cliente por número de documento.
     * @param numeroDocumento Número de documento
     * @return Optional del cliente
     */
    Optional<Cliente> findByNumeroDocumento(String numeroDocumento);

    /**
     * Verifica si existe un cliente con el número de documento especificado.
     * @param numeroDocumento Número de documento
     * @return true si existe, false en caso contrario
     */
    boolean existsByNumeroDocumento(String numeroDocumento);

    /**
     * Verifica si existe un cliente con el email especificado.
     * @param email Email del cliente
     * @return true si existe, false en caso contrario
     */
    boolean existsByEmail(String email);
}
