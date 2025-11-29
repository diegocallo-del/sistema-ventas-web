package com.ventas.servicios;

import com.ventas.dto.CreateVentaDTO;
import com.ventas.dto.DetalleVentaDTO;
import com.ventas.dto.VentaDTO;
import com.ventas.enums.EstadoVenta;
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

        Cliente cliente = null;
        if (createDTO.clienteId() != null) {
            cliente = clienteRepository.findById(createDTO.clienteId())
                    .filter(Cliente::isActivo)
                    .orElse(null);
        }

        validarStock(createDTO.detalles());

        BigDecimal total = BigDecimal.ZERO;
        for (var detalle : createDTO.detalles()) {
            Producto producto = productoRepository.findById(detalle.productoId())
                    .orElseThrow(() -> new ResourceNotFoundException("Producto no encontrado con ID: " + detalle.productoId()));

            if (!producto.isActivo()) {
                throw new ValidationException("Producto inactivo: " + producto.getNombre());
            }

            total = total.add(producto.getPrecio().multiply(BigDecimal.valueOf(detalle.cantidad())));
        }

        // Crear venta
        Venta venta = new Venta();
        venta.setCliente(cliente);
        venta.setUsuario(getUsuarioTemporal());
        venta.setTotal(total);
        venta.setEstadoVenta(EstadoVenta.COMPLETADA);
        venta.setTipoPago(createDTO.tipoPago());
        venta.setActivo(true);

        Venta ventaGuardada = ventaRepository.save(venta);

        // Crear detalles y actualizar stock
        for (var detalleDTO : createDTO.detalles()) {
            Producto producto = productoRepository.findById(detalleDTO.productoId()).get();

            DetalleVenta detalle = new DetalleVenta();
            detalle.setVenta(ventaGuardada);
            detalle.setProducto(producto);
            detalle.setCantidad(detalleDTO.cantidad());
            detalle.setPrecioUnitario(producto.getPrecio());
            detalle.setSubtotal(producto.getPrecio().multiply(BigDecimal.valueOf(detalleDTO.cantidad())));
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
                .filter(Cliente::isActivo)
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
                        d.getPrecioUnitario(),
                        d.getSubtotal()
                ))
                .collect(Collectors.toList());

        return new VentaDTO(
                venta.getId(),
                venta.getCliente() != null ? venta.getCliente().getId() : null,
                venta.getCliente() != null ? venta.getCliente().getNombre() : "Cliente Contado",
                venta.getCliente() != null ? venta.getCliente().getNumeroDocumento() : null,
                venta.getUsuario().getId(),
                venta.getUsuario().getNombre(),
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
