package com.ventas.controladores;

import com.ventas.dto.CreateProductoDTO;
import com.ventas.dto.ProductoDTO;
import com.ventas.servicios.ProductoService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.util.List;

/**
 * Controlador REST para la gestión de productos.
 * Proporciona endpoints para operaciones CRUD de productos.
 */
@RestController
@RequestMapping("/api/productos")
@RequiredArgsConstructor
@Validated
public class ProductoController {

    private final ProductoService productoService;

    /**
     * Obtiene todos los productos activos.
     * @return Lista de productos activos
     */
    @GetMapping
    public ResponseEntity<List<ProductoDTO>> obtenerTodosLosProductos() {
        List<ProductoDTO> productos = productoService.obtenerTodosLosProductos();
        return ResponseEntity.ok(productos);
    }

    /**
     * Obtiene un producto por su ID.
     * @param id ID del producto
     * @return Producto encontrado
     */
    @GetMapping("/{id}")
    public ResponseEntity<ProductoDTO> obtenerProductoPorId(@PathVariable Long id) {
        ProductoDTO producto = productoService.obtenerProductoPorId(id);
        return ResponseEntity.ok(producto);
    }

    /**
     * Busca productos por nombre aproximado.
     * @param nombre Nombre a buscar
     * @return Lista de productos que coinciden
     */
    @GetMapping("/buscar")
    public ResponseEntity<List<ProductoDTO>> buscarProductosPorNombre(@RequestParam String nombre) {
        List<ProductoDTO> productos = productoService.buscarProductosPorNombre(nombre);
        return ResponseEntity.ok(productos);
    }

    /**
     * Obtiene productos con stock bajo.
     * @param stockMinimo Umbral mínimo de stock (opcional, por defecto 10)
     * @return Lista de productos con stock bajo
     */
    @GetMapping("/stock-bajo")
    public ResponseEntity<List<ProductoDTO>> obtenerProductosConStockBajo(
            @RequestParam(defaultValue = "10") Integer stockMinimo) {
        List<ProductoDTO> productos = productoService.obtenerProductosConStockBajo(stockMinimo);
        return ResponseEntity.ok(productos);
    }

    /**
     * Crea un nuevo producto.
     * @param createDTO Datos del producto a crear
     * @return Producto creado
     */
    @PostMapping
    public ResponseEntity<ProductoDTO> crearProducto(@Valid @RequestBody CreateProductoDTO createDTO) {
        ProductoDTO producto = productoService.crearProducto(createDTO);
        return new ResponseEntity<>(producto, HttpStatus.CREATED);
    }

    /**
     * Actualiza un producto existente.
     * @param id ID del producto a actualizar
     * @param createDTO Datos actualizados del producto
     * @return Producto actualizado
     */
    @PutMapping("/{id}")
    @PreAuthorize("hasAnyRole('ADMIN', 'SUPERVISOR')")
    public ResponseEntity<ProductoDTO> actualizarProducto(
            @PathVariable Long id,
            @Valid @RequestBody CreateProductoDTO createDTO) {
        ProductoDTO producto = productoService.actualizarProducto(id, createDTO);
        return ResponseEntity.ok(producto);
    }

    /**
     * Actualiza el stock de un producto.
     * @param id ID del producto
     * @param nuevoStock Nuevo stock
     * @return Producto con stock actualizado
     */
    @PatchMapping("/{id}/stock")
    public ResponseEntity<ProductoDTO> actualizarStock(
            @PathVariable Long id,
            @RequestParam Integer nuevoStock) {
        ProductoDTO producto = productoService.actualizarStock(id, nuevoStock);
        return ResponseEntity.ok(producto);
    }

    /**
     * Elimina lógicamente un producto.
     * @param id ID del producto a eliminar
     * @return Respuesta sin contenido
     */
    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Void> eliminarProducto(@PathVariable Long id) {
        productoService.eliminarProducto(id);
        return ResponseEntity.noContent().build();
    }
}
