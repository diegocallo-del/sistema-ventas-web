package com.ventas.controladores;

import com.ventas.enums.RolUsuario;
import com.ventas.modelos.Cliente;
import com.ventas.modelos.Producto;
import com.ventas.modelos.Venta;
import com.ventas.modelos.Usuario;
import com.ventas.repositorios.ClienteRepository;
import com.ventas.repositorios.ProductoRepository;
import com.ventas.repositorios.VentaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import com.lowagie.text.Document;
import com.lowagie.text.DocumentException;
import com.lowagie.text.PageSize;
import com.lowagie.text.pdf.PdfPTable;
import com.lowagie.text.pdf.PdfWriter;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.PrintWriter;
import java.math.BigDecimal;
import java.time.format.DateTimeFormatter;
import java.util.List;

/**
 * Controlador para exportación de datos
 * Permite descargar reportes en diferentes formatos, en un pricipio se intento implementar 
 * jasperport pero hubo problemas 
 * al generara jrlmx 
 */
@RestController
@RequestMapping("/api/export")
@RequiredArgsConstructor
@PreAuthorize("hasAnyRole('ADMIN','SUPERVISOR','VENDEDOR')")
@Tag(name = "Exportaciones", description = "Descarga de reportes en CSV, Excel y PDF")
public class ExportController {

    private final ProductoRepository productoRepository;
    private final VentaRepository ventaRepository;
    private final ClienteRepository clienteRepository;

    /**
     * Exporta productos como CSV
     */
    @GetMapping("/productos/csv")
    @Operation(summary = "Exportar productos en CSV", description = "Genera un archivo CSV con productos activos")
    public ResponseEntity<byte[]> exportarProductosCSV() {
        List<Producto> productos = productoRepository.findAll()
                .stream()
                .filter(Producto::isActivo)
                .toList();

        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        try (PrintWriter writer = new PrintWriter(outputStream)) {
            // Encabezados CSV
            writer.println("ID,Nombre,Código,Precio,Stock");

            // Datos
            for (Producto p : productos) {
                writer.printf("%d,%s,%s,%.2f,%d%n",
                        p.getId(),
                        escaparCSV(p.getNombre()),
                        String.valueOf(p.getCodigo()),
                        p.getPrecio(),
                        p.getStock());
            }
            writer.flush();
        }

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=productos.csv")
                .contentType(MediaType.parseMediaType("text/csv; charset=UTF-8"))
                .body(outputStream.toByteArray());
    }

    @GetMapping("/productos/excel")
    @Operation(summary = "Exportar productos en Excel", description = "Genera un archivo XLSX con productos activos")
    public ResponseEntity<byte[]> exportarProductosExcel() {
        try {
            List<Producto> productos = productoRepository.findAll().stream().filter(Producto::isActivo).toList();
            ByteArrayOutputStream out = new ByteArrayOutputStream();
            Workbook wb = new XSSFWorkbook();
            Sheet sheet = wb.createSheet("Productos");
            Row header = sheet.createRow(0);
            header.createCell(0).setCellValue("ID");
            header.createCell(1).setCellValue("Nombre");
            header.createCell(2).setCellValue("Código");
            header.createCell(3).setCellValue("Precio");
            header.createCell(4).setCellValue("Stock");
            int r = 1;
            for (Producto p : productos) {
                if (p == null)
                    continue;
                Row row = sheet.createRow(r++);
                row.createCell(0).setCellValue(p.getId() != null ? p.getId() : 0);
                row.createCell(1).setCellValue(p.getNombre() != null ? p.getNombre() : "");
                row.createCell(2).setCellValue(p.getCodigo() != null ? p.getCodigo() : "");
                row.createCell(3).setCellValue(p.getPrecio() != null ? p.getPrecio().doubleValue() : 0.0);
                row.createCell(4).setCellValue(p.getStock());
            }
            wb.write(out);
            wb.close();
            return ResponseEntity.ok()
                    .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=productos.xlsx")
                    .contentType(MediaType
                            .parseMediaType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"))
                    .body(out.toByteArray());
        } catch (Exception e) {
            ByteArrayOutputStream out = new ByteArrayOutputStream();
            try {
                Workbook wb = new XSSFWorkbook();
                Sheet sheet = wb.createSheet("Error");
                Row r0 = sheet.createRow(0);
                r0.createCell(0).setCellValue("Error al exportar productos");
                Row r1 = sheet.createRow(1);
                r1.createCell(0).setCellValue(e.getMessage() != null ? e.getMessage() : "Error desconocido");
                wb.write(out);
                wb.close();
            } catch (IOException ignored) {
            }
            return ResponseEntity.ok()
                    .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=productos.xlsx")
                    .contentType(MediaType
                            .parseMediaType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"))
                    .body(out.toByteArray());
        }
    }

    @GetMapping("/productos/pdf")
    @Operation(summary = "Exportar productos en PDF", description = "Genera un archivo PDF con productos activos")
    public ResponseEntity<byte[]> exportarProductosPDF() {
        try {
            List<Producto> productos = productoRepository.findAll().stream().filter(Producto::isActivo).toList();
            ByteArrayOutputStream out = new ByteArrayOutputStream();
            Document doc = new Document(PageSize.A4.rotate());
            PdfWriter writer = null;
            try {
                writer = PdfWriter.getInstance(doc, out);
                doc.open();
                PdfPTable table = new PdfPTable(5);
                table.addCell("ID");
                table.addCell("Nombre");
                table.addCell("Código");
                table.addCell("Precio");
                table.addCell("Stock");
                for (Producto p : productos) {
                    if (p == null)
                        continue;
                    table.addCell(p.getId() != null ? String.valueOf(p.getId()) : "0");
                    table.addCell(p.getNombre() != null ? p.getNombre() : "");
                    table.addCell(p.getCodigo() != null ? p.getCodigo() : "");
                    table.addCell(p.getPrecio() != null ? String.format("%.2f", p.getPrecio().doubleValue()) : "0.00");
                    table.addCell(String.valueOf(p.getStock()));
                }
                doc.add(table);
                doc.close();
            } catch (DocumentException e) {
                throw new RuntimeException("Error al generar documento PDF: " + e.getMessage(), e);
            } finally {
                if (doc.isOpen()) {
                    doc.close();
                }
            }
            return ResponseEntity.ok()
                    .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=productos.pdf")
                    .contentType(MediaType.parseMediaType("application/pdf"))
                    .body(out.toByteArray());
        } catch (Exception e) {
            throw new RuntimeException("Error al exportar productos a PDF: " + e.getMessage(), e);
        }
    }

    /**
     * Exporta ventas como CSV
     */
    @GetMapping("/ventas/csv")
    @Operation(summary = "Exportar ventas en CSV", description = "Genera un archivo CSV con el historial de ventas")
    public ResponseEntity<byte[]> exportarVentasCSV() {
        List<Venta> ventas = ventaRepository.findAll();

        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        try (PrintWriter writer = new PrintWriter(outputStream)) {
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
                        v.getTipoPago() != null ? v.getTipoPago().toString() : "N/A");
            }
            writer.flush();
        }

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=ventas.csv")
                .contentType(MediaType.parseMediaType("text/csv; charset=UTF-8"))
                .body(outputStream.toByteArray());
    }

    @GetMapping("/ventas/excel")
    @Operation(summary = "Exportar ventas en Excel", description = "Genera un archivo XLSX con el historial de ventas")
    public ResponseEntity<byte[]> exportarVentasExcel() {
        List<Venta> ventas = ventaRepository.findAll();
        ByteArrayOutputStream out = new ByteArrayOutputStream();
        Workbook wb = new XSSFWorkbook();
        Sheet sheet = wb.createSheet("Ventas");
        Row header = sheet.createRow(0);
        header.createCell(0).setCellValue("ID");
        header.createCell(1).setCellValue("Fecha");
        header.createCell(2).setCellValue("Cliente");
        header.createCell(3).setCellValue("Total");
        header.createCell(4).setCellValue("Estado");
        header.createCell(5).setCellValue("Método Pago");
        int r = 1;
        DateTimeFormatter fmt = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm");
        for (Venta v : ventas) {
            Row row = sheet.createRow(r++);
            row.createCell(0).setCellValue(v.getId());
            row.createCell(1).setCellValue(v.getFechaCreacion().format(fmt));
            row.createCell(2).setCellValue(v.getCliente() != null ? v.getCliente().getNombre() : "Cliente contado");
            row.createCell(3).setCellValue(v.getTotal().doubleValue());
            row.createCell(4).setCellValue(v.getEstadoVenta().toString());
            row.createCell(5).setCellValue(v.getTipoPago() != null ? v.getTipoPago().toString() : "N/A");
        }
        try {
            wb.write(out);
            wb.close();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=ventas.xlsx")
                .contentType(
                        MediaType.parseMediaType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"))
                .body(out.toByteArray());
    }

    @GetMapping("/ventas/pdf")
    @Operation(summary = "Exportar ventas en PDF", description = "Genera un archivo PDF con el historial de ventas")
    public ResponseEntity<byte[]> exportarVentasPDF() {
        List<Venta> ventas = ventaRepository.findAll();
        ByteArrayOutputStream out = new ByteArrayOutputStream();
        Document doc = new Document(PageSize.A4.rotate());
        try {
            PdfWriter.getInstance(doc, out);
            doc.open();
            PdfPTable table = new PdfPTable(6);
            table.addCell("ID");
            table.addCell("Fecha");
            table.addCell("Cliente");
            table.addCell("Total");
            table.addCell("Estado");
            table.addCell("Método Pago");
            DateTimeFormatter fmt = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm");
            for (Venta v : ventas) {
                table.addCell(String.valueOf(v.getId()));
                table.addCell(v.getFechaCreacion().format(fmt));
                table.addCell(v.getCliente() != null ? v.getCliente().getNombre() : "Cliente contado");
                table.addCell(String.format("%.2f", v.getTotal().doubleValue()));
                table.addCell(v.getEstadoVenta().toString());
                table.addCell(v.getTipoPago() != null ? v.getTipoPago().toString() : "N/A");
            }
            doc.add(table);
            doc.close();
        } catch (DocumentException e) {
            throw new RuntimeException(e);
        }
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=ventas.pdf")
                .contentType(MediaType.parseMediaType("application/pdf"))
                .body(out.toByteArray());
    }

    /**
     * Exporta clientes como CSV
     */
    @GetMapping("/clientes/csv")
    @Operation(summary = "Exportar clientes en CSV", description = "Genera un archivo CSV con clientes activos")
    public ResponseEntity<byte[]> exportarClientesCSV() {
        List<?> usuarios = clienteRepository.findAll();
        List<Cliente> clientes = usuarios.stream()
                .filter(u -> u instanceof Cliente)
                .map(u -> (Cliente) u)
                .filter(c -> c.isActivo())
                .toList();

        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        try (PrintWriter writer = new PrintWriter(outputStream)) {
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
                        c.getDireccion() != null ? escaparCSV(c.getDireccion()) : "");
            }
            writer.flush();
        }

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=clientes.csv")
                .contentType(MediaType.parseMediaType("text/csv; charset=UTF-8"))
                .body(outputStream.toByteArray());
    }

    @GetMapping("/clientes/excel")
    @Operation(summary = "Exportar clientes en Excel", description = "Genera un archivo XLSX con clientes activos")
    public ResponseEntity<byte[]> exportarClientesExcel() {
        List<?> usuarios = clienteRepository.findAll();
        List<Cliente> clientes = usuarios.stream().filter(u -> u instanceof Cliente).map(u -> (Cliente) u)
                .filter(Cliente::isActivo).toList();
        ByteArrayOutputStream out = new ByteArrayOutputStream();
        Workbook wb = new XSSFWorkbook();
        Sheet sheet = wb.createSheet("Clientes");
        Row header = sheet.createRow(0);
        header.createCell(0).setCellValue("ID");
        header.createCell(1).setCellValue("Nombre");
        header.createCell(2).setCellValue("DNI");
        header.createCell(3).setCellValue("Email");
        header.createCell(4).setCellValue("Teléfono");
        header.createCell(5).setCellValue("Dirección");
        int r = 1;
        for (Cliente c : clientes) {
            Row row = sheet.createRow(r++);
            row.createCell(0).setCellValue(c.getId());
            row.createCell(1).setCellValue(c.getNombre());
            row.createCell(2).setCellValue(c.getNumeroDocumento() != null ? c.getNumeroDocumento() : "");
            row.createCell(3).setCellValue(c.getEmail() != null ? c.getEmail() : "");
            row.createCell(4).setCellValue(c.getTelefono() != null ? c.getTelefono() : "");
            row.createCell(5).setCellValue(c.getDireccion() != null ? c.getDireccion() : "");
        }
        try {
            wb.write(out);
            wb.close();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=clientes.xlsx")
                .contentType(
                        MediaType.parseMediaType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"))
                .body(out.toByteArray());
    }

    @GetMapping("/clientes/pdf")
    @Operation(summary = "Exportar clientes en PDF", description = "Genera un archivo PDF con clientes activos")
    public ResponseEntity<byte[]> exportarClientesPDF() {
        List<?> usuarios = clienteRepository.findAll();
        List<Cliente> clientes = usuarios.stream().filter(u -> u instanceof Cliente).map(u -> (Cliente) u)
                .filter(Cliente::isActivo).toList();
        ByteArrayOutputStream out = new ByteArrayOutputStream();
        Document doc = new Document(PageSize.A4);
        try {
            PdfWriter.getInstance(doc, out);
            doc.open();
            PdfPTable table = new PdfPTable(6);
            table.addCell("ID");
            table.addCell("Nombre");
            table.addCell("DNI");
            table.addCell("Email");
            table.addCell("Teléfono");
            table.addCell("Dirección");
            for (Cliente c : clientes) {
                table.addCell(String.valueOf(c.getId()));
                table.addCell(c.getNombre());
                table.addCell(c.getNumeroDocumento() != null ? c.getNumeroDocumento() : "");
                table.addCell(c.getEmail() != null ? c.getEmail() : "");
                table.addCell(c.getTelefono() != null ? c.getTelefono() : "");
                table.addCell(c.getDireccion() != null ? c.getDireccion() : "");
            }
            doc.add(table);
            doc.close();
        } catch (DocumentException e) {
            throw new RuntimeException(e);
        }
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=clientes.pdf")
                .contentType(MediaType.parseMediaType("application/pdf"))
                .body(out.toByteArray());
    }

    /**
     * Genera reporte completo del sistema como CSV
     */
    @GetMapping("/reporte-completo/csv")
    @Operation(summary = "Exportar reporte completo en CSV", description = "Genera un CSV con KPIs y totales del sistema")
    public ResponseEntity<byte[]> exportarReporteCompleto() {
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        try (PrintWriter writer = new PrintWriter(outputStream)) {
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
        }

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=reporte-completo.csv")
                .contentType(MediaType.parseMediaType("text/csv; charset=UTF-8"))
                .body(outputStream.toByteArray());
    }

    @GetMapping("/reporte-completo/excel")
    @Operation(summary = "Exportar reporte completo en Excel", description = "Genera un XLSX con KPIs y totales del sistema")
    public ResponseEntity<byte[]> exportarReporteCompletoExcel() {
        try {
            ByteArrayOutputStream out = new ByteArrayOutputStream();
            Workbook wb = new XSSFWorkbook();
            Sheet sheet = wb.createSheet("Resumen");
            Row r0 = sheet.createRow(0);
            r0.createCell(0).setCellValue("REPORTE COMPLETO DEL SISTEMA");

            List<Producto> productos = productoRepository.findAll().stream().filter(Producto::isActivo).toList();
            List<Venta> ventas = ventaRepository.findAll();
            List<?> usuarios = clienteRepository.findAll();
            long totalClientes = usuarios.stream()
                    .filter(u -> u instanceof Cliente)
                    .map(u -> (Cliente) u)
                    .filter(Cliente::isActivo)
                    .count();

            // Calcular valor de inventario con null safety
            BigDecimal valorInventario = productos.stream()
                    .filter(p -> p != null && p.getPrecio() != null && p.getStock() >= 0)
                    .map(p -> p.getPrecio().multiply(BigDecimal.valueOf(p.getStock())))
                    .reduce(BigDecimal.ZERO, BigDecimal::add);

            // Calcular ingresos totales con null safety
            BigDecimal ingresosTotales = ventas.stream()
                    .filter(v -> v != null && v.getTotal() != null)
                    .map(Venta::getTotal)
                    .reduce(BigDecimal.ZERO, BigDecimal::add);

            Row r2 = sheet.createRow(2);
            r2.createCell(0).setCellValue("TOTAL PRODUCTOS");
            r2.createCell(1).setCellValue(productos.size());

            Row r3 = sheet.createRow(3);
            r3.createCell(0).setCellValue("VALOR INVENTARIO");
            r3.createCell(1).setCellValue(valorInventario.doubleValue());

            Row r4 = sheet.createRow(4);
            r4.createCell(0).setCellValue("TOTAL VENTAS");
            r4.createCell(1).setCellValue(ventas.size());

            Row r5 = sheet.createRow(5);
            r5.createCell(0).setCellValue("INGRESOS TOTALES");
            r5.createCell(1).setCellValue(ingresosTotales.doubleValue());

            Row r6 = sheet.createRow(6);
            r6.createCell(0).setCellValue("TOTAL CLIENTES");
            r6.createCell(1).setCellValue(totalClientes);

            try {
                wb.write(out);
                wb.close();
            } catch (IOException e) {
                throw new RuntimeException("Error al generar archivo Excel: " + e.getMessage(), e);
            }

            return ResponseEntity.ok()
                    .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=reporte-sistema.xlsx")
                    .contentType(
                            MediaType.parseMediaType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"))
                    .body(out.toByteArray());
        } catch (Exception e) {
            throw new RuntimeException("Error al exportar reporte completo a Excel: " + e.getMessage(), e);
        }
    }

    @GetMapping("/reporte-completo/pdf")
    @Operation(summary = "Exportar reporte completo en PDF", description = "Genera un PDF con KPIs y totales del sistema")
    public ResponseEntity<byte[]> exportarReporteCompletoPDF() {
        try {
            ByteArrayOutputStream out = new ByteArrayOutputStream();
            Document doc = new Document(PageSize.A4);
            try {
                PdfWriter.getInstance(doc, out);
                doc.open();
                PdfPTable table = new PdfPTable(2);
                List<Producto> productos = productoRepository.findAll().stream().filter(Producto::isActivo).toList();
                List<Venta> ventas = ventaRepository.findAll();
                List<Usuario> usuarios = clienteRepository.findAll();
                long totalClientes = usuarios.stream()
                        .filter(u -> u != null && RolUsuario.CLIENTE.equals(u.getRol()) && u.isActivo())
                        .count();

                // Calcular valor de inventario con null safety
                BigDecimal valorInventario = productos.stream()
                        .filter(p -> p != null && p.getPrecio() != null && p.getStock() >= 0)
                        .map(p -> p.getPrecio().multiply(BigDecimal.valueOf(p.getStock())))
                        .reduce(BigDecimal.ZERO, BigDecimal::add);

                // Calcular ingresos totales con null safety
                BigDecimal ingresosTotales = ventas.stream()
                        .filter(v -> v != null && v.getTotal() != null)
                        .map(Venta::getTotal)
                        .reduce(BigDecimal.ZERO, BigDecimal::add);

                table.addCell("TOTAL PRODUCTOS");
                table.addCell(String.valueOf(productos.size()));
                table.addCell("VALOR INVENTARIO");
                table.addCell(String.format("%.2f", valorInventario.doubleValue()));
                table.addCell("TOTAL VENTAS");
                table.addCell(String.valueOf(ventas.size()));
                table.addCell("INGRESOS TOTALES");
                table.addCell(String.format("%.2f", ingresosTotales.doubleValue()));
                table.addCell("TOTAL CLIENTES");
                table.addCell(String.valueOf(totalClientes));
                doc.add(table);
                doc.close();
            } catch (DocumentException e) {
                throw new RuntimeException("Error al generar documento PDF: " + e.getMessage(), e);
            } finally {
                if (doc.isOpen()) {
                    doc.close();
                }
            }
            return ResponseEntity.ok()
                    .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=reporte-sistema.pdf")
                    .contentType(MediaType.parseMediaType("application/pdf"))
                    .body(out.toByteArray());
        } catch (Exception e) {
            throw new RuntimeException("Error al exportar reporte completo a PDF: " + e.getMessage(), e);
        }
    }

    /**
     * Escapa valores para CSV
     */
    private String escaparCSV(String valor) {
        if (valor == null)
            return "";

        // Si contiene comas, comillas o saltos de línea, escapar
        if (valor.contains(",") || valor.contains("\"") || valor.contains("\n")) {
            return "\"" + valor.replace("\"", "\"\"") + "\"";
        }

        return valor;
    }
}
