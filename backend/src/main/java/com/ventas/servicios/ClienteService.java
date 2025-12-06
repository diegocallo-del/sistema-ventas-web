package com.ventas.servicios;

import com.ventas.dto.ClienteDTO;
import com.ventas.dto.CreateClienteDTO;
import com.ventas.dto.UpdateClienteDTO;
import com.ventas.excepciones.ResourceNotFoundException;
import com.ventas.excepciones.ValidationException;
import com.ventas.modelos.Usuario;
import com.ventas.repositorios.ClienteRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import java.util.List;
import java.util.stream.Collectors;

/**
 * Servicio para la gestión de clientes.
 * Implementa operaciones CRUD y lógica de negocio relacionada con clientes.
 */
@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class ClienteService {

    private final ClienteRepository clienteRepository;

    /**
     * Obtiene todos los clientes activos.
     * @return Lista de clientes activos como DTO
     */
    @Transactional(readOnly = true)
    public List<ClienteDTO> obtenerTodosLosClientes() {
        return clienteRepository.findClienteActivos().stream()
                .map(this::convertirADTO)
                .collect(Collectors.toList());
    }

    /**
     * Obtiene un cliente por su ID.
     * @param id ID del cliente
     * @return Cliente como DTO
     */
    @Transactional(readOnly = true)
    public ClienteDTO obtenerClientePorId(Long id) {
        if (id == null) {
            throw new ValidationException("El ID del cliente es obligatorio");
        }

        Usuario cliente = clienteRepository.findById(id)
                .filter(Usuario::isActivo)
                .orElseThrow(() -> new ResourceNotFoundException("Cliente no encontrado con ID: " + id));
        return convertirADTO(cliente);
    }

    /**
     * Crea un nuevo cliente.
     * @param createDTO Datos del cliente a crear
     * @return Cliente creado como DTO
     */
    public ClienteDTO crearCliente(CreateClienteDTO createDTO) {
        validarDatosCliente(createDTO);

        if (createDTO.numeroDocumento() != null && clienteRepository.existsByNumeroDocumento(createDTO.numeroDocumento())) {
            throw new ValidationException("Ya existe un cliente con ese número de documento");
        }

        if (clienteRepository.existsByEmail(createDTO.email())) {
            throw new ValidationException("Ya existe un cliente con ese email");
        }

        Usuario cliente = new Usuario();
        cliente.setNombre(createDTO.nombre());
        cliente.setNumeroDocumento(createDTO.numeroDocumento());
        cliente.setEmail(createDTO.email());
        cliente.setTelefono(createDTO.telefono());
        cliente.setDireccion(createDTO.direccion());
        cliente.setRol(com.ventas.enums.RolUsuario.CLIENTE);
        cliente.setActivo(true);
        cliente.setPassword(""); // LIENTE SIN PASSWORD 

        Usuario clienteGuardado = clienteRepository.save(cliente);
        return convertirADTO(clienteGuardado);
    }

    /**
     * Actualiza un cliente existente.
     * @param id ID del cliente a actualizar
     * @param updateDTO Datos actualizados del cliente
     * @return Cliente actualizado como DTO
     */
    public ClienteDTO actualizarCliente(Long id, UpdateClienteDTO updateDTO) {
        log.info("INICIANDO actualización de cliente ID: {}", id);

        if (id == null) {
            throw new ValidationException("El ID del cliente es obligatorio");
        }

        validarDatosCliente(updateDTO);
        log.info("Validaciones básicas pasaron");

        Usuario cliente = clienteRepository.findById(id)
                .filter(Usuario::isActivo)
                .orElseThrow(() -> new ResourceNotFoundException("Cliente no encontrado con ID: " + id));

        log.info("Cliente encontrado: {} (Email actual: {}, Documento actual: {})",
                 cliente.getNombre(), cliente.getEmail(), cliente.getNumeroDocumento());

        // Verificar unicidad del email si cambió
        if (!cliente.getEmail().equals(updateDTO.email())) {
            log.info("Cambio de email detectado. Verificando unicidad para: {}", updateDTO.email());
            if (clienteRepository.existsByEmail(updateDTO.email())) {
                log.error("Email duplicado encontrado: {}", updateDTO.email());
                throw new ValidationException("Ya existe un cliente con ese email");
            }
        }

        // Verificar unicidad del número de documento (manejar nulls con cuidado)
        String currentDocumento = cliente.getNumeroDocumento();
        String newDocumento = updateDTO.numeroDocumento();

        if (newDocumento != null &&
            !newDocumento.equals(currentDocumento) &&
            clienteRepository.existsByNumeroDocumento(newDocumento)) {
            log.error("❌ Documento duplicado encontrado: {}", newDocumento);
            throw new ValidationException("Ya existe un cliente con ese número de documento");
        }

        log.info("Aplicando cambios...");

        try {
            // Aplicar cambios uno por uno
            cliente.setNombre(updateDTO.nombre());
            cliente.setEmail(updateDTO.email());
            cliente.setTelefono(updateDTO.telefono());
            cliente.setDireccion(updateDTO.direccion());
            cliente.setNumeroDocumento(updateDTO.numeroDocumento());

            // ASEGURAR QUE PASSWORD NO SEA NULL (BD constraint NOT NULL)
            if (cliente.getPassword() == null || cliente.getPassword().trim().isEmpty()) {
                cliente.setPassword(""); // Valor por defecto para clientes sin password
                log.info("🔒 Asignando password vacío para cliente sin password");
            }

            log.info("Intentando guardar cambios en BD...");
            Usuario clienteActualizado = clienteRepository.save(cliente);
            log.info("Cliente ID {} actualizado exitosamente", clienteActualizado.getId());

            return convertirADTO(clienteActualizado);

        } catch (Exception e) {
            log.error("ERROR JAP TRANSACTION durante save: {}", e.getMessage(), e);
            throw new RuntimeException("Error al guardar el cliente: " + e.getMessage(), e);
        }
    }

    /**
     * Elimina lógicamente un cliente (lo marca como inactivo).
     * @param id ID del cliente a eliminar
     */
    public void eliminarCliente(Long id) {
        if (id == null) {
            throw new ValidationException("El ID del cliente es obligatorio");
        }

        Usuario cliente = clienteRepository.findById(id)
                .filter(Usuario::isActivo)
                .orElseThrow(() -> new ResourceNotFoundException("Cliente no encontrado con ID: " + id));

        cliente.setActivo(false);
        clienteRepository.save(cliente);
    }

    /**
     * Busca clientes por nombre aproximado.
     * @param nombre Nombre a buscar
     * @return Lista de clientes que coinciden
     */
    @Transactional(readOnly = true)
    public List<ClienteDTO> buscarClientesPorNombre(String nombre) {
        return clienteRepository.findClienteActivos().stream()
                .filter(cliente -> cliente.getNombre().toLowerCase().contains(nombre.toLowerCase()))
                .map(this::convertirADTO)
                .collect(Collectors.toList());
    }

    /**
     * Busca cliente por número de documento.
     * @param numeroDocumento Número de documento
     * @return Cliente encontrado
     */
    @Transactional(readOnly = true)
    public ClienteDTO buscarClientePorDocumento(String numeroDocumento) {
        Usuario cliente = clienteRepository.findByNumeroDocumento(numeroDocumento)
                .filter(Usuario::isActivo)
                .orElseThrow(() -> new ResourceNotFoundException("Cliente no encontrado con documento: " + numeroDocumento));
        return convertirADTO(cliente);
    }

    /**
     * Busca cliente por email.
     * @param email Email del cliente
     * @return Cliente encontrado
     */
    @Transactional(readOnly = true)
    public ClienteDTO buscarClientePorEmail(String email) {
        Usuario cliente = clienteRepository.findByEmail(email)
                .filter(Usuario::isActivo)
                .orElseThrow(() -> new ResourceNotFoundException("Cliente no encontrado con email: " + email));
        return convertirADTO(cliente);
    }

    /**
     * Contador de clientes activos.
     * @return Número de clientes activos
     */
    @Transactional(readOnly = true)
    public long contarClientesActivos() {
        return clienteRepository.findClienteActivos().size();
    }

    /**
     * Valida los datos del cliente antes de guardar.
     * @param dto Datos a validar
     */
    private void validarDatosCliente(CreateClienteDTO dto) {
        if (dto.nombre() == null || dto.nombre().trim().isEmpty()) {
            throw new ValidationException("El nombre es obligatorio");
        }

        if (dto.email() != null && !dto.email().contains("@")) {
            throw new ValidationException("El email debe tener un formato válido");
        }
    }

    /**
     * Valida los datos del cliente antes de actualizar.
     * @param dto Datos a validar
     */
    private void validarDatosCliente(UpdateClienteDTO dto) {
        if (dto.nombre() == null || dto.nombre().trim().isEmpty()) {
            throw new ValidationException("El nombre es obligatorio");
        }

        if (dto.email() != null && !dto.email().contains("@")) {
            throw new ValidationException("El email debe tener un formato válido");
        }
    }

    /**
     * Convierte una entidad Cliente a DTO.
     * @param cliente Entidad Cliente
     * @return Cliente como DTO
     */
    private ClienteDTO convertirADTO(Usuario cliente) {
        return new ClienteDTO(
                cliente.getId(),
                cliente.getNombre(),
                cliente.getEmail(),
                cliente.getTelefono(),
                cliente.getDireccion(),
                cliente.getNumeroDocumento()
        );
    }
}
