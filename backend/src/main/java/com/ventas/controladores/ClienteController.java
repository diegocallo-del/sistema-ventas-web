package com.ventas.controladores;

import com.ventas.dto.ClienteDTO;
import com.ventas.dto.CreateClienteDTO;
import com.ventas.servicios.ClienteService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.util.List;

/**
 * Controlador REST para la gestión de clientes.
 * Proporciona endpoints para operaciones CRUD de clientes.
 */
@RestController
@RequestMapping("/api/clientes")
@RequiredArgsConstructor
@Validated
public class ClienteController {

    private final ClienteService clienteService;

    /**
     * Obtiene todos los clientes activos.
     * @return Lista de clientes activos
     */
    @GetMapping
    @PreAuthorize("hasAnyRole('ADMIN', 'SUPERVISOR', 'VENDEDOR')")
    public ResponseEntity<List<ClienteDTO>> obtenerTodosLosClientes() {
        List<ClienteDTO> clientes = clienteService.obtenerTodosLosClientes();
        return ResponseEntity.ok(clientes);
    }

    /**
     * Obtiene un cliente por su ID.
     * @param id ID del cliente
     * @return Cliente encontrado
     */
    @GetMapping("/{id}")
    public ResponseEntity<ClienteDTO> obtenerClientePorId(@PathVariable Long id) {
        ClienteDTO cliente = clienteService.obtenerClientePorId(id);
        return ResponseEntity.ok(cliente);
    }

    /**
     * Busca clientes por nombre aproximado.
     * @param nombre Nombre a buscar
     * @return Lista de clientes que coinciden
     */
    @GetMapping("/buscar")
    public ResponseEntity<List<ClienteDTO>> buscarClientesPorNombre(@RequestParam String nombre) {
        List<ClienteDTO> clientes = clienteService.buscarClientesPorNombre(nombre);
        return ResponseEntity.ok(clientes);
    }

    /**
     * Busca cliente por número de documento.
     * @param documento Número de documento
     * @return Cliente encontrado
     */
    @GetMapping("/documento/{documento}")
    public ResponseEntity<ClienteDTO> buscarClientePorDocumento(@PathVariable String documento) {
        ClienteDTO cliente = clienteService.buscarClientePorDocumento(documento);
        return ResponseEntity.ok(cliente);
    }

    /**
     * Busca cliente por email.
     * @param email Email del cliente
     * @return Cliente encontrado
     */
    @GetMapping("/email")
    public ResponseEntity<ClienteDTO> buscarClientePorEmail(@RequestParam String email) {
        ClienteDTO cliente = clienteService.buscarClientePorEmail(email);
        return ResponseEntity.ok(cliente);
    }

    /**
     * Contador de clientes activos.
     * @return Número de clientes activos
     */
    @GetMapping("/count")
    public ResponseEntity<Long> contarClientesActivos() {
        long count = clienteService.contarClientesActivos();
        return ResponseEntity.ok(count);
    }

    /**
     * Crea un nuevo cliente.
     * @param createDTO Datos del cliente a crear
     * @return Cliente creado
     */
    @PostMapping
    @PreAuthorize("hasAnyRole('ADMIN', 'SUPERVISOR', 'VENDEDOR')")
    public ResponseEntity<ClienteDTO> crearCliente(@Valid @RequestBody CreateClienteDTO createDTO) {
        ClienteDTO cliente = clienteService.crearCliente(createDTO);
        return new ResponseEntity<>(cliente, HttpStatus.CREATED);
    }

    /**
     * Actualiza un cliente existente.
     * @param id ID del cliente a actualizar
     * @param createDTO Datos actualizados del cliente
     * @return Cliente actualizado
     */
    @PutMapping("/{id}")
    public ResponseEntity<ClienteDTO> actualizarCliente(
            @PathVariable Long id,
            @Valid @RequestBody CreateClienteDTO createDTO) {
        ClienteDTO cliente = clienteService.actualizarCliente(id, createDTO);
        return ResponseEntity.ok(cliente);
    }

    /**
     * Elimina lógicamente un cliente.
     * @param id ID del cliente a eliminar
     * @return Respuesta sin contenido
     */
    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Void> eliminarCliente(@PathVariable Long id) {
        clienteService.eliminarCliente(id);
        return ResponseEntity.noContent().build();
    }
}
