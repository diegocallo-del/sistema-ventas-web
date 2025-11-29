package com.ventas.servicios;

import com.ventas.dto.ClienteDTO;
import com.ventas.dto.CreateClienteDTO;
import com.ventas.excepciones.ResourceNotFoundException;
import com.ventas.excepciones.ValidationException;
import com.ventas.modelos.Cliente;
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
        Cliente cliente = clienteRepository.findById(id)
                .filter(Cliente::isActivo)
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

        Cliente cliente = Cliente.builder()
                .numeroDocumento(createDTO.numeroDocumento())
                .build();
        cliente.setNombre(createDTO.nombre());
        cliente.setEmail(createDTO.email());
        cliente.setTelefono(createDTO.telefono());
        cliente.setDireccion(createDTO.direccion());
        cliente.setActivo(true);

        Cliente clienteGuardado = clienteRepository.save(cliente);
        return convertirADTO(clienteGuardado);
    }

    /**
     * Actualiza un cliente existente.
     * @param id ID del cliente a actualizar
     * @param createDTO Datos actualizados del cliente
     * @return Cliente actualizado como DTO
     */
    public ClienteDTO actualizarCliente(Long id, CreateClienteDTO createDTO) {
        validarDatosCliente(createDTO);

        Cliente cliente = clienteRepository.findById(id)
                .filter(Cliente::isActivo)
                .orElseThrow(() -> new ResourceNotFoundException("Cliente no encontrado con ID: " + id));

        // Verificar unicidad del email si cambió
        if (!cliente.getEmail().equals(createDTO.email()) && clienteRepository.existsByEmail(createDTO.email())) {
            throw new ValidationException("Ya existe un cliente con ese email");
        }

        // Verificar unicidad del número de documento
        if (createDTO.numeroDocumento() != null &&
            !createDTO.numeroDocumento().equals(cliente.getNumeroDocumento()) &&
            clienteRepository.existsByNumeroDocumento(createDTO.numeroDocumento())) {
            throw new ValidationException("Ya existe un cliente con ese número de documento");
        }

        cliente.setNombre(createDTO.nombre());
        cliente.setEmail(createDTO.email());
        cliente.setTelefono(createDTO.telefono());
        cliente.setDireccion(createDTO.direccion());
        cliente.setNumeroDocumento(createDTO.numeroDocumento());

        Cliente clienteActualizado = clienteRepository.save(cliente);
        return convertirADTO(clienteActualizado);
    }

    /**
     * Elimina lógicamente un cliente (lo marca como inactivo).
     * @param id ID del cliente a eliminar
     */
    public void eliminarCliente(Long id) {
        Cliente cliente = clienteRepository.findById(id)
                .filter(Cliente::isActivo)
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
        return clienteRepository.findAll().stream()
                .filter(cliente -> cliente.isActivo() &&
                        cliente.getNombre().toLowerCase().contains(nombre.toLowerCase()))
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
        Cliente cliente = clienteRepository.findByNumeroDocumento(numeroDocumento)
                .filter(Cliente::isActivo)
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
        Cliente cliente = clienteRepository.findByEmail(email)
                .filter(Cliente::isActivo)
                .orElseThrow(() -> new ResourceNotFoundException("Cliente no encontrado con email: " + email));
        return convertirADTO(cliente);
    }

    /**
     * Contador de clientes activos.
     * @return Número de clientes activos
     */
    @Transactional(readOnly = true)
    public long contarClientesActivos() {
        return clienteRepository.findAll().stream()
                .filter(Cliente::isActivo)
                .count();
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
     * Convierte una entidad Cliente a DTO.
     * @param cliente Entidad Cliente
     * @return Cliente como DTO
     */
    private ClienteDTO convertirADTO(Cliente cliente) {
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
