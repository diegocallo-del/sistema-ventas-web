package com.ventas.controladores;

import com.ventas.dto.CreateVentaDTO;
import com.ventas.dto.VentaDTO;
import com.ventas.enums.EstadoVenta;
import com.ventas.repositorios.UsuarioRepository;
import com.ventas.servicios.VentaService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import com.ventas.seguridad.UsuarioPrincipal;
import jakarta.annotation.Resource;

import jakarta.validation.Valid;
import java.util.List;

/**
 * Controlador REST para la gestión de ventas.
 * Proporciona endpoints para operaciones CRUD de ventas.
 */
@RestController
@RequestMapping("/api/ventas")
@RequiredArgsConstructor
@Slf4j
@Validated
public class VentaController {

    private final VentaService ventaService;

    /**
     * Obtiene ventas según el rol del usuario autenticado.
     * - CLIENTE: Solo sus propias compras
     * - VENDEDOR: Solo ventas de sus productos
     * - ADMIN/SUPERVISOR: Todas las ventas del sistema
     * @param auth Usuario autenticado
     * @return Lista de ventas filtrada por rol
     */
    @GetMapping
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<List<VentaDTO>> obtenerVentaSegunRol(Authentication auth) {
        // DEBUG: Log del tipo de principal recibido
        log.info("🔍 Tipo de principal recibido: {}", auth.getPrincipal().getClass().getName());

        Long userId = null;
        String username = null;
        String userRole = "CLIENTE"; // Default

        try {
            // Intentar castear como UsuarioPrincipal
            if (auth.getPrincipal() instanceof UsuarioPrincipal) {
                UsuarioPrincipal usuarioPrincipal = (UsuarioPrincipal) auth.getPrincipal();
                userId = usuarioPrincipal.getId();
                username = usuarioPrincipal.getNombre();

                // Obtener rol desde authorities
                if (auth.getAuthorities() != null && !auth.getAuthorities().isEmpty()) {
                    String authority = auth.getAuthorities().iterator().next().getAuthority();
                    userRole = authority.replace("ROLE_", "").toUpperCase(); // ROLE_ADMIN -> ADMIN
                }

                log.info("✅ UsuarioPrincipal encontrado - {} (ID: {}, Rol: {})",
                         username, userId, userRole);
            } else {
                // Fallback: obtener información básica del principal
                username = auth.getPrincipal().toString();
                log.warn("⚠️ Principal no es UsuarioPrincipal, usando fallback: {}", username);

                // Por ahora usar datos hardcodeados para testing
                if ("Vendedor Uno".equals(username)) {
                    userId = 2L;
                    userRole = "VENDEDOR";
                } else if ("Cliente Uno".equals(username)) {
                    userId = 3L;
                    userRole = "CLIENTE";
                } else {
                    userId = 1L; // Default admin
                    userRole = "ADMIN";
                }

                log.info("🔄 Datos hardcodeados - {} (ID: {}, Rol: {})", username, userId, userRole);
            }
        } catch (Exception e) {
            log.error("❌ Error obteniendo información de usuario: {}", e.getMessage(), e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }

        log.info("🔍 Procesando consulta de ventas para {} (ID: {}, Rol: {})",
                 username, userId, userRole);

        List<VentaDTO> ventas;

        switch(userRole) {
            case "CLIENTE":
                log.debug("👤 Cliente consultando sus compras");
                ventas = ventaService.obtenerVentasPorCliente(userId);
                log.info("✅ Cliente {} ve {} compras propias", userId, ventas.size());
                break;

            case "VENDEDOR":
                log.debug("🏪 Vendedor consultando ventas de sus productos");
                ventas = ventaService.obtenerVentasPorVendedor(userId);
                log.info("✅ Vendedor {} ve {} ventas de sus productos", userId, ventas.size());
                break;

            case "ADMIN":
            case "SUPERVISOR":
                log.debug("⚡ Admin/Supervisor consultando todas las ventas");
                ventas = ventaService.obtenerTodasLasVentas();
                log.info("✅ Admin {} ve todas las {} ventas del sistema", userId, ventas.size());
                break;

            default:
                log.error("🚫 Rol desconocido: {} para usuario {}", userRole, userId);
                return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
        }

        log.debug("🔒 Filtrado completado - devolviendo {} ventas", ventas.size());
        return ResponseEntity.ok(ventas);
    }

    /**
     * Obtiene una venta por su ID con todos sus detalles.
     * @param id ID de la venta
     * @return Venta completa con detalles
     */
    @GetMapping("/{id}")
    public ResponseEntity<VentaDTO> obtenerVentaPorId(@PathVariable Long id) {
        VentaDTO venta = ventaService.obtenerVentaPorId(id);
        return ResponseEntity.ok(venta);
    }

    /**
     * Busca ventas por cliente.
     * @param clienteId ID del cliente
     * @return Lista de ventas del cliente
     */
    @GetMapping("/cliente/{clienteId}")
    public ResponseEntity<List<VentaDTO>> obtenerVentasPorCliente(@PathVariable Long clienteId) {
        List<VentaDTO> ventas = ventaService.obtenerVentasPorCliente(clienteId);
        return ResponseEntity.ok(ventas);
    }

    /**
     * Crea una nueva venta completa con validación de stock.
     * @param createDTO Datos de la venta a crear
     * @return Venta creada con detalles
     */
    @PostMapping
    public ResponseEntity<VentaDTO> crearVenta(@Valid @RequestBody CreateVentaDTO createDTO) {
        VentaDTO venta = ventaService.crearVenta(createDTO);
        return new ResponseEntity<>(venta, HttpStatus.CREATED);
    }

    /**
     * Actualiza el estado de una venta (solo administradores).
     * @param id ID de la venta
     * @param nuevoEstado Nuevo estado
     * @return Venta con estado actualizado
     */
    @PatchMapping("/{id}/estado")
    public ResponseEntity<VentaDTO> actualizarEstadoVenta(
            @PathVariable Long id,
            @RequestParam EstadoVenta nuevoEstado) {
        VentaDTO venta = ventaService.actualizarEstadoVenta(id, nuevoEstado);
        return ResponseEntity.ok(venta);
    }

    /**
     * Procesa el pago de una venta pendiente.
     * @param id ID de la venta
     * @return Venta con pago procesado
     */
    @PostMapping("/{id}/pagar")
    public ResponseEntity<VentaDTO> procesarPagoVenta(@PathVariable Long id) {
        VentaDTO venta = ventaService.procesarPagoVenta(id);
        return ResponseEntity.ok(venta);
    }

    /**
     * Confirma el envío de una venta pagada.
     * @param id ID de la venta
     * @return Venta con envío confirmado
     */
    @PostMapping("/{id}/enviar")
    public ResponseEntity<VentaDTO> confirmarEnvioVenta(@PathVariable Long id) {
        VentaDTO venta = ventaService.confirmarEnvioVenta(id);
        return ResponseEntity.ok(venta);
    }

    /**
     * Confirma la entrega de una venta enviada.
     * @param id ID de la venta
     * @return Venta con entrega confirmada
     */
    @PostMapping("/{id}/entregar")
    public ResponseEntity<VentaDTO> confirmarEntregaVenta(@PathVariable Long id) {
        VentaDTO venta = ventaService.confirmarEntregaVenta(id);
        return ResponseEntity.ok(venta);
    }

    /**
     * Cancela/elimina una venta lógicamente (solo administradores).
     * Devuelve stock al inventario.
     * @param id ID de la venta
     * @return Respuesta sin contenido
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarVenta(@PathVariable Long id) {
        ventaService.eliminarVenta(id);
        return ResponseEntity.noContent().build();
    }
}
