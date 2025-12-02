package com.ventas.controladores;

import com.ventas.modelos.Cliente;
import com.ventas.modelos.Producto;
import com.ventas.modelos.Venta;
import com.ventas.repositorios.ClienteRepository;
import com.ventas.repositorios.ProductoRepository;
import com.ventas.repositorios.VentaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.io.ByteArrayOutputStream;
import java.io.PrintWriter;
import java.math.BigDecimal;
import java.time.format.DateTimeFormatter;
import java.util.List;

/**
 * Controlador para exportación de datos
 * Permite descargar reportes en diferentes formatos
 */
@RestController
@RequestMapping("/api/export")
@RequiredArgsConstructor
@PreAuthorize("hasRole('ADMIN')")
public class ExportController {

    private final ProductoRepository productoRepository;
    private final VentaRepository ventaRepository;
    private final ClienteRepository clienteRepository;

    /**
     * Exporta productos como CSV
     */
    @GetMapping("/productos/csv")
    public ResponseEntity<byte[]> exportarProductosCSV() {
        List<Producto> productos = productoRepository.findAll()
            .stream()
            .filter(Producto::isActivo)
            .toList();

        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        PrintWriter writer = new PrintWriter(outputStream);

        // Encabezados CSV
        writer.println("ID,Nombre,Código,Precio,Stock");

        // Datos
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm");
        for (Producto p : productos) {
            writer.printf("%d,%s,%s,%.2f,%d%n",
                p.getId(),
                escaparCSV(p.getNombre()),
                String.valueOf(p.getCodigo()),
                p.getPrecio(),
                p.getStock()
            );
        }

        writer.flush();
        writer.close();

        return ResponseEntity.ok()
            .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=productos.csv")
            .contentType(MediaType.parseMediaType("text/csv; charset=UTF-8"))
            .body(outputStream.toByteArray());
    }

    /**
     * Exporta ventas como CSV
     */
    @GetMapping("/ventas/csv")
    public ResponseEntity<byte[]> exportarVentasCSV() {
        List<Venta> ventas = ventaRepository.findAll();

        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        PrintWriter writer = new PrintWriter(outputStream);

        // Encabezados CSV
        writer.println("ID,Fecha,Cliente,Total,Estado,Método Pago");

        // Datos
        for (Venta v : ventas) {
            writer.printf("%d,%s,%s,%.2f,%s,%s%n",
                v.getId(),
                v.getFechaCreacion().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm")),
                escaparCSV(v.getCliente() != null ? v.getCliente().getNombre() : "Cliente contado"),
                v.getTotal(),
                v.getEstadoVenta().toString(),
                v.getTipoPago() != null ? v.getTipoPago().toString() : "N/A"
            );
        }

        writer.flush();
        writer.close();

        return ResponseEntity.ok()
            .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=ventas.csv")
            .contentType(MediaType.parseMediaType("text/csv; charset=UTF-8"))
            .body(outputStream.toByteArray());
    }

    /**
     * Exporta clientes como CSV
     */
    @GetMapping("/clientes/csv")
    public ResponseEntity<byte[]> exportarClientesCSV() {
        List<?> usuarios = clienteRepository.findAll();
        List<Cliente> clientes = usuarios.stream()
            .filter(u -> u instanceof Cliente)
            .map(u -> (Cliente) u)
            .filter(c -> c.isActivo())
            .toList();

        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        PrintWriter writer = new PrintWriter(outputStream);

        // Encabezados CSV
        writer.println("ID,Nombre,DNI,Email,Teléfono,Dirección");

        // Datos
        for (Cliente c : clientes) {
            writer.printf("%d,%s,%s,%s,%s,%s%n",
                c.getId(),
                escaparCSV(c.getNombre()),
                c.getNumeroDocumento() != null ? c.getNumeroDocumento() : "",
                c.getEmail() != null ? c.getEmail() : "",
                c.getTelefono() != null ? c.getTelefono() : "",
                c.getDireccion() != null ? escaparCSV(c.getDireccion()) : ""
            );
        }

        writer.flush();
        writer.close();

        return ResponseEntity.ok()
            .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=clientes.csv")
            .contentType(MediaType.parseMediaType("text/csv; charset=UTF-8"))
            .body(outputStream.toByteArray());
    }

    /**
     * Genera reporte completo del sistema como CSV
     */
    @GetMapping("/reporte-completo/csv")
    public ResponseEntity<byte[]> exportarReporteCompleto() {
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        PrintWriter writer = new PrintWriter(outputStream);

        // Estadísticas generales
        writer.println("REPORTE COMPLETO DEL SISTEMA");
        writer.println("");

        // Productos
        List<Producto> productos = productoRepository.findAll().stream()
            .filter(Producto::isActivo).toList();
        writer.printf("TOTAL PRODUCTOS:,%d%n", productos.size());
        writer.printf("VALOR INVENTARIO:,%s%n",
            productos.stream()
                .map(p -> p.getPrecio().multiply(BigDecimal.valueOf(p.getStock())))
                .reduce(BigDecimal.ZERO, BigDecimal::add)
                .toString());
        writer.println("");

        // Ventas
        List<Venta> ventas = ventaRepository.findAll();
        writer.printf("TOTAL VENTAS:,%d%n", ventas.size());
        writer.printf("INGRESOS TOTALES:,%s%n",
            ventas.stream()
                .map(Venta::getTotal)
                .reduce(BigDecimal.ZERO, BigDecimal::add)
                .toString());
        writer.println("");

        // Clientes
        List<?> usuarios = clienteRepository.findAll();
        long totalClientes = usuarios.stream()
            .filter(u -> u instanceof Cliente)
            .map(u -> (Cliente) u)
            .filter(c -> c.isActivo())
            .count();
        writer.printf("TOTAL CLIENTES:,%d%n", totalClientes);

        writer.flush();
        writer.close();

        return ResponseEntity.ok()
            .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=reporte-completo.csv")
            .contentType(MediaType.parseMediaType("text/csv; charset=UTF-8"))
            .body(outputStream.toByteArray());
    }

    /**
     * Escapa valores para CSV
     */
    private String escaparCSV(String valor) {
        if (valor == null) return "";

        // Si contiene comas, comillas o saltos de línea, escapar
        if (valor.contains(",") || valor.contains("\"") || valor.contains("\n")) {
            return "\"" + valor.replace("\"", "\"\"") + "\"";
        }

        return valor;
    }
}
