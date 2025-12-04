package com.ventas.servicios;

import com.ventas.dto.CreateVentaDTO;
import com.ventas.dto.DetalleVentaDTO;
import com.ventas.dto.VentaDTO;
import com.ventas.enums.EstadoVenta;
import com.ventas.enums.TipoPago;
import com.ventas.excepciones.ResourceNotFoundException;
import com.ventas.excepciones.ValidationException;
import com.ventas.modelos.*;
import com.ventas.repositorios.ClienteRepository;
import com.ventas.repositorios.DetalleVentaRepository;
import com.ventas.repositorios.ProductoRepository;
import com.ventas.repositorios.VentaRepository;
import com.ventas.repositorios.UsuarioRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.beans.factory.annotation.Value;

import java.math.BigDecimal;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Servicio para la gestión de ventas.
 * Implementa operaciones CRUD y lógica de negocio para ventas.
 */
@Service
@RequiredArgsConstructor
@Transactional
public class VentaService {

    // Hardcoded IGV para Perú 18%
    private final BigDecimal ivaPercentage = BigDecimal.valueOf(0.18);

    private final VentaRepository ventaRepository;
    private final DetalleVentaRepository detalleVentaRepository;
    private final ProductoRepository productoRepository;
    private final ClienteRepository clienteRepository;
    private final UsuarioRepository usuarioRepository;

    /**
     * Obtiene todas las ventas activas.
     */
    @Transactional(readOnly = true)
    public List<VentaDTO> obtenerTodasLasVentas() {
        return ventaRepository.findAll().stream()
                .filter(Venta::isActivo)
                .map(this::convertirADTO)
                .collect(Collectors.toList());
    }

    /**
     * Obtiene una venta por su ID.
     */
    @Transactional(readOnly = true)
    public VentaDTO obtenerVentaPorId(Long id) {
        Venta venta = ventaRepository.findById(id)
                .filter(Venta::isActivo)
                .orElseThrow(() -> new ResourceNotFoundException("Venta no encontrada con ID: " + id));

        return convertirADTO(venta);
    }

    /**
     * Crea una nueva venta.
     */
    public VentaDTO crearVenta(CreateVentaDTO createDTO) {
        if (createDTO.detalles() == null || createDTO.detalles().isEmpty()) {
            throw new ValidationException("La venta debe tener al menos un detalle");
        }

        Usuario cliente = null;
        if (createDTO.clienteId() != null) {
            cliente = clienteRepository.findById(createDTO.clienteId())
                    .filter(u -> u.isActivo() && "CLIENTE".equals(u.getRol()))
                    .orElse(null);
        }

        validarStock(createDTO.detalles());

        // Calcular subtotal (precios base sin IGV)
        BigDecimal subtotal = BigDecimal.ZERO;
        for (var detalle : createDTO.detalles()) {
            Producto producto = productoRepository.findById(detalle.productoId())
                    .orElseThrow(() -> new ResourceNotFoundException("Producto no encontrado con ID: " + detalle.productoId()));

            if (!producto.isActivo()) {
                throw new ValidationException("Producto inactivo: " + producto.getNombre());
            }

            subtotal = subtotal.add(producto.getPrecio().multiply(BigDecimal.valueOf(detalle.cantidad())));
        }

        // Calcular IGV y total
        BigDecimal igv = subtotal.multiply(ivaPercentage);
        BigDecimal total = subtotal.add(igv);
        System.out.println("DEBUG: subtotal=" + subtotal + ", ivaPercentage=" + ivaPercentage + ", igv=" + igv + ", total=" + total);

        // Crear venta pendiente de pago
        Venta venta = new Venta();
        venta.setCliente(cliente);
        venta.setSubtotal(subtotal);
        venta.setIgv(igv);
        venta.setTotal(total);
        venta.setEstadoVenta(EstadoVenta.PENDIENTE); // Start as pending payment
        venta.setTipoPago(createDTO.tipoPago());
        venta.setActivo(true);

        Venta ventaGuardada = ventaRepository.save(venta);

        // Crear detalles y actualizar stock
        for (var detalleDTO : createDTO.detalles()) {
            Producto producto = productoRepository.findById(detalleDTO.productoId())
                    .orElseThrow(() -> new ResourceNotFoundException("Producto no encontrado con ID: " + detalleDTO.productoId()));

            // Crear variante temporal basada en el producto (simplificado)
            ProductoVariante variante = new ProductoVariante();
            variante.setId(producto.getId()); // Para esta impl, variante_id = producto_id
            variante.setProducto(producto);
            variante.setPrecio(producto.getPrecio());
            variante.setStock(producto.getStock());
            variante.setAtributo("DEFAULT");
            variante.setValor("DEFAULT");

            DetalleVenta detalle = new DetalleVenta();
            detalle.setOrden(ventaGuardada);
            detalle.setProducto(producto);
            detalle.setVariante(variante);
            detalle.setCantidad(detalleDTO.cantidad());
            detalle.setPrecio(producto.getPrecio());
            detalle.setActivo(true);

            detalleVentaRepository.save(detalle);
            producto.setStock(producto.getStock() - detalleDTO.cantidad());
            productoRepository.save(producto);
        }

        return obtenerVentaPorId(ventaGuardada.getId());
    }

    /**
     * Actualiza el estado de una venta.
     */
    public VentaDTO actualizarEstadoVenta(Long id, EstadoVenta nuevoEstado) {
        Venta venta = ventaRepository.findById(id)
                .filter(Venta::isActivo)
                .orElseThrow(() -> new ResourceNotFoundException("Venta no encontrada con ID: " + id));

        if (venta.getEstadoVenta() == EstadoVenta.CANCELADA) {
            throw new ValidationException("No se puede cambiar el estado de una venta cancelada");
        }

        venta.setEstadoVenta(nuevoEstado);
        ventaRepository.save(venta);

        return obtenerVentaPorId(id);
    }

    /**
     * Procesa el pago de una venta pendiente y la marca como pagada.
     */
    public VentaDTO procesarPagoVenta(Long id) {
        Venta venta = ventaRepository.findById(id)
                .filter(Venta::isActivo)
                .orElseThrow(() -> new ResourceNotFoundException("Venta no encontrada con ID: " + id));

        if (venta.getEstadoVenta() != EstadoVenta.PENDIENTE) {
            throw new ValidationException("Solo se pueden procesar pagos de ventas pendientes. Estado actual: " + venta.getEstadoVenta());
        }

        // Cambiar estado a PAGADA
        venta.setEstadoVenta(EstadoVenta.PAGADA);
        ventaRepository.save(venta);

        return obtenerVentaPorId(id);
    }

    /**
     * Confirma el envío de una venta pagada.
     */
    public VentaDTO confirmarEnvioVenta(Long id) {
        Venta venta = ventaRepository.findById(id)
                .filter(Venta::isActivo)
                .orElseThrow(() -> new ResourceNotFoundException("Venta no encontrada con ID: " + id));

        if (venta.getEstadoVenta() != EstadoVenta.PAGADA) {
            throw new ValidationException("Solo se pueden enviar ventas pagadas. Estado actual: " + venta.getEstadoVenta());
        }

        venta.setEstadoVenta(EstadoVenta.ENVIADA);
        ventaRepository.save(venta);

        return obtenerVentaPorId(id);
    }

    /**
     * Confirma la entrega de una venta enviada.
     */
    public VentaDTO confirmarEntregaVenta(Long id) {
        Venta venta = ventaRepository.findById(id)
                .filter(Venta::isActivo)
                .orElseThrow(() -> new ResourceNotFoundException("Venta no encontrada con ID: " + id));

        if (venta.getEstadoVenta() != EstadoVenta.ENVIADA) {
            throw new ValidationException("Solo se pueden entregar ventas enviadas. Estado actual: " + venta.getEstadoVenta());
        }

        venta.setEstadoVenta(EstadoVenta.ENTREGADA);
        ventaRepository.save(venta);

        return obtenerVentaPorId(id);
    }

    /**
     * Elimina una venta lógicamente.
     */
    public void eliminarVenta(Long id) {
        Venta venta = ventaRepository.findById(id)
                .filter(Venta::isActivo)
                .orElseThrow(() -> new ResourceNotFoundException("Venta no encontrada con ID: " + id));

        venta.setActivo(false);
        ventaRepository.save(venta);
    }

    /**
     * Busca ventas por cliente.
     */
    public List<VentaDTO> obtenerVentasPorCliente(Long clienteId) {
        clienteRepository.findById(clienteId)
                .filter(u -> u.isActivo() && "CLIENTE".equals(u.getRol()))
                .orElseThrow(() -> new ResourceNotFoundException("Cliente no encontrado con ID: " + clienteId));

        return ventaRepository.findAll().stream()
                .filter(v -> v.isActivo() && v.getCliente() != null && v.getCliente().getId().equals(clienteId))
                .map(this::convertirADTO)
                .collect(Collectors.toList());
    }

    /**
     * Valida stock suficiente para la venta.
     */
    private void validarStock(List<com.ventas.dto.CreateDetalleVentaDTO> detalles) {
        for (var detalle : detalles) {
            Producto producto = productoRepository.findById(detalle.productoId())
                    .filter(Producto::isActivo)
                    .orElseThrow(() -> new ValidationException("Producto no encontrado con ID: " + detalle.productoId()));

            if (producto.getStock() < detalle.cantidad()) {
                throw new ValidationException("Stock insuficiente para " + producto.getNombre() +
                    ". Disponible: " + producto.getStock() + ", requerido: " + detalle.cantidad());
            }
        }
    }

    /**
     * Usuario temporal para testing (debería usar SecurityContext).
     */
    private Usuario getUsuarioTemporal() {
        return usuarioRepository.findAll().stream()
                .findFirst()
                .orElseThrow(() -> new RuntimeException("No hay usuarios en el sistema"));
    }

    /**
     * Convierte entidad Venta a DTO.
     */
    private VentaDTO convertirADTO(Venta venta) {
        List<DetalleVentaDTO> detallesDTO = venta.getDetalles().stream()
                .filter(DetalleVenta::isActivo)
                .map(d -> new DetalleVentaDTO(
                        d.getId(),
                        d.getProducto().getId(),
                        d.getProducto().getNombre(),
                        d.getCantidad(),
                        d.getPrecio(),
                        d.getPrecio().multiply(BigDecimal.valueOf(d.getCantidad()))
                ))
                .collect(Collectors.toList());

        Usuario comprador = venta.getCliente();
        return new VentaDTO(
                venta.getId(),
                comprador != null ? comprador.getId() : null,
                comprador != null ? comprador.getNombre() : "Cliente Contado",
                comprador != null && comprador instanceof Cliente ? ((Cliente) comprador).getNumeroDocumento() : null,
                null, // sin usuario vendedor
                null,
                venta.getSubtotal(),
                venta.getIgv(),
                venta.getTotal(),
                venta.getEstadoVenta(),
                venta.getTipoPago(),
                venta.getFechaCreacion().toLocalDate().atStartOfDay(),
                venta.getFechaCreacion(),
                venta.isActivo(),
                detallesDTO
        );
    }
}
