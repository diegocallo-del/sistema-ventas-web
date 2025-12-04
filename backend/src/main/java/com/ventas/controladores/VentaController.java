package com.ventas.controladores;

import com.ventas.dto.CreateVentaDTO;
import com.ventas.dto.VentaDTO;
import com.ventas.enums.EstadoVenta;
import com.ventas.servicios.VentaService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.util.List;

/**
 * Controlador REST para la gestión de ventas.
 * Proporciona endpoints para operaciones CRUD de ventas.
 */
@RestController
@RequestMapping("/api/ventas")
@RequiredArgsConstructor
@Validated
public class VentaController {

    private final VentaService ventaService;

    /**
     * Obtiene todas las ventas activas.
     * @return Lista de ventas activas
     */
    @GetMapping
    public ResponseEntity<List<VentaDTO>> obtenerTodasLasVentas() {
        List<VentaDTO> ventas = ventaService.obtenerTodasLasVentas();
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
