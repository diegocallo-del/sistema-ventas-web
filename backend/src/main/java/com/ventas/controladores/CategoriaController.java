package com.ventas.controladores;

import com.ventas.dto.CategoriaDTO;
import com.ventas.dto.CreateCategoriaDTO;
import com.ventas.servicios.CategoriaService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

import jakarta.validation.Valid;
import java.util.List;

/**
 * Controlador REST para la gestión de categorías.
 * Proporciona endpoints para operaciones CRUD de categorías.
 */
@RestController
@RequestMapping("/api/categorias")
@RequiredArgsConstructor
@Validated
@Tag(name = "Categorías", description = "CRUD y consultas de categorías")
public class CategoriaController {

    private final CategoriaService categoriaService;

    /**
     * Obtiene todas las categorías activas.
     */
    @GetMapping
    @Operation(summary = "Listar categorías", description = "Obtiene categorías activas")
    public ResponseEntity<List<CategoriaDTO>> obtenerTodasLasCategorias() {
        List<CategoriaDTO> categorias = categoriaService.obtenerTodasLasCategorias();
        return ResponseEntity.ok(categorias);
    }

    /**
     * Obtiene una categoría por su ID.
     */
    @GetMapping("/{id}")
    @Operation(summary = "Obtener categoría", description = "Obtiene una categoría por ID")
    public ResponseEntity<CategoriaDTO> obtenerCategoriaPorId(@PathVariable Long id) {
        CategoriaDTO categoria = categoriaService.obtenerCategoriaPorId(id);
        return ResponseEntity.ok(categoria);
    }

    /**
     * Busca categorías por nombre aproximado, se usa la misma sintaxis anterior 
     */
    @GetMapping("/buscar")
    @Operation(summary = "Buscar categorías", description = "Busca categorías por nombre aproximado")
    public ResponseEntity<List<CategoriaDTO>> buscarCategoriasPorNombre(@RequestParam String nombre) {
        List<CategoriaDTO> categorias = categoriaService.buscarCategoriasPorNombre(nombre);
        return ResponseEntity.ok(categorias);
    }

    /**
     * Aqui tambien parecida 
     */
    @GetMapping("/con-productos")
    @Operation(summary = "Categorías con productos", description = "Obtiene categorías que tienen productos asociados")
    public ResponseEntity<List<CategoriaDTO>> obtenerCategoriasConProductos() {
        List<CategoriaDTO> categorias = categoriaService.obtenerCategoriasConProductos();
        return ResponseEntity.ok(categorias);
    }

    /**
     * de la misma manera crea una nueva categoría
     */
    @PostMapping
    @Operation(summary = "Crear categoría", description = "Crea una nueva categoría")
    public ResponseEntity<CategoriaDTO> crearCategoria(@Valid @RequestBody CreateCategoriaDTO createDTO) {
        CategoriaDTO categoria = categoriaService.crearCategoria(createDTO);
        return new ResponseEntity<>(categoria, HttpStatus.CREATED);
    }

    /**
     * Actualiza una categoría existente
     */
    @PutMapping("/{id}")
    @Operation(summary = "Actualizar categoría", description = "Actualiza datos de una categoría")
    public ResponseEntity<CategoriaDTO> actualizarCategoria(
            @PathVariable Long id,
            @Valid @RequestBody CreateCategoriaDTO createDTO) {
        CategoriaDTO categoria = categoriaService.actualizarCategoria(id, createDTO);
        return ResponseEntity.ok(categoria);
    }

    /**
     * Elimina lógicamente una categoría
     */
    @DeleteMapping("/{id}")
    @Operation(summary = "Eliminar categoría", description = "Elimina lógicamente una categoría")
    public ResponseEntity<Void> eliminarCategoria(@PathVariable Long id) {
        categoriaService.eliminarCategoria(id);
        return ResponseEntity.noContent().build();
    }
}
