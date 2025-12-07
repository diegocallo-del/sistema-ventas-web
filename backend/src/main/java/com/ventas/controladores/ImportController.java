package com.ventas.controladores;

import com.ventas.modelos.Producto;
import com.ventas.modelos.Usuario;
import com.ventas.repositorios.ProductoRepository;
import com.ventas.repositorios.ClienteRepository;
import lombok.RequiredArgsConstructor;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

import java.io.IOException;
import java.io.InputStream;
import java.math.BigDecimal;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;

@RestController
@RequestMapping("/api/import")
@RequiredArgsConstructor
@PreAuthorize("hasRole('ADMIN')")
@Tag(name = "Importaciones", description = "Carga de datos desde Excel para productos y clientes")
public class ImportController {

    private final ProductoRepository productoRepository;
    private final ClienteRepository clienteRepository;

    @PostMapping(value = "/productos/excel", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    @Operation(summary = "Importar productos desde Ecel", description = "Actualiza productos existentes por código desde un archivo XLSX")
    public ResponseEntity<Map<String, Object>> importarProductosExcel(@RequestParam("file") MultipartFile file) {
        Map<String, Object> resumen = new HashMap<>();
        int total = 0, updated = 0, skipped = 0;
        try (InputStream in = file.getInputStream();
             Workbook wb = new XSSFWorkbook(in)) {
            Sheet sheet = wb.getSheetAt(0);
            for (int i = 1; i <= sheet.getLastRowNum(); i++) {
                Row row = sheet.getRow(i);
                if (row == null) {
                    skipped++;
                    continue;
                }
                total++;
                String codigo = getString(row, 2);
                String nombre = getString(row, 1);
                Double precioD = getNumeric(row, 3);
                Double stockD = getNumeric(row, 4);
                if (codigo == null || precioD == null || stockD == null) {
                    skipped++;
                    continue;
                }
                Optional<Producto> opt = productoRepository.findByCodigo(codigo);
                if (opt.isPresent()) {
                    Producto p = Objects.requireNonNull(opt.get());
                    if (nombre != null)
                        p.setNombre(nombre);
                    p.setPrecio(BigDecimal.valueOf(precioD));
                    p.setStock(stockD.intValue());
                    productoRepository.save(p);
                    updated++;
                } else {
                    skipped++;
                }
            }
        } catch (IOException e) {
            resumen.put("success", false);
            resumen.put("error", e.getMessage());
            return ResponseEntity.badRequest().body(resumen);
        }
        resumen.put("success", true);
        resumen.put("total_rows", total);
        resumen.put("updated", updated);
        resumen.put("skipped", skipped);
        return ResponseEntity.ok(resumen);
    }

    @PostMapping(value = "/clientes/excel", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    @Operation(summary = "Importar clientes desde Excel", description = "Actualiza clientes existentes por email o documento desde un archivo XLSX")
    public ResponseEntity<Map<String, Object>> importarClientesExcel(@RequestParam("file") MultipartFile file) {
        Map<String, Object> resumen = new HashMap<>();
        int total = 0, updated = 0, skipped = 0;
        try (InputStream in = file.getInputStream();
             Workbook wb = new XSSFWorkbook(in)) {
            Sheet sheet = wb.getSheetAt(0);
            for (int i = 1; i <= sheet.getLastRowNum(); i++) {
                Row row = sheet.getRow(i);
                if (row == null) {
                    skipped++;
                    continue;
                }
                total++;
                String email = getString(row, 3);
                String nombre = getString(row, 1);
                String telefono = getString(row, 4);
                String direccion = getString(row, 5);
                String documento = getString(row, 2);
                Optional<Usuario> usuario = email != null ? clienteRepository.findByEmail(email) : Optional.empty();
                if (usuario.isEmpty() && documento != null) {
                    usuario = clienteRepository.findByNumeroDocumento(documento);
                }
                if (usuario.isPresent()) {
                    Usuario u = Objects.requireNonNull(usuario.get());
                    if (nombre != null)
                        u.setNombre(nombre);
                    if (telefono != null)
                        u.setTelefono(telefono);
                    if (direccion != null)
                        u.setDireccion(direccion);
                    clienteRepository.save(u);
                    updated++;
                } else {
                    skipped++;
                }
            }
        } catch (IOException e) {
            resumen.put("success", false);
            resumen.put("error", e.getMessage());
            return ResponseEntity.badRequest().body(resumen);
        }
        resumen.put("success", true);
        resumen.put("total_rows", total);
        resumen.put("updated", updated);
        resumen.put("skipped", skipped);
        return ResponseEntity.ok(resumen);
        
    }

    private String getString(Row row, int idx) {
        try {
            if (row.getCell(idx) == null)
                return null;
            String v = row.getCell(idx).getStringCellValue();
            return v != null ? v.trim() : null;
        } catch (Exception e) {
            return null;
        }
    }

    private Double getNumeric(Row row, int idx) {
        try {
            if (row.getCell(idx) == null)
                return null;
            return row.getCell(idx).getNumericCellValue();
    } catch (Exception e) {
        try {
            String s = getString(row, idx);
            return s != null ? Double.valueOf(s) : null;
        } catch (NumberFormatException ex) {
            return null;
        }
        }
    }
}
