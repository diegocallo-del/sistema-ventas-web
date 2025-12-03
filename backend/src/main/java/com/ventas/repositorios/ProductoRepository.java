package com.ventas.repositorios;

import com.ventas.modelos.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

/**
 * Repositorio para la gestión de Productos en la base de datos.
 * Extiende JpaRepository para operaciones CRUD básicas y permite consultas personalizadas.
 */
@Repository
public interface ProductoRepository extends JpaRepository<Producto, Long> {

    /**
     * Encuentra productos por nombre aproximado (insensible a mayúsculas).
     * @param nombre Nombre aproximado a buscar
     * @return Lista de productos que coinciden
     */
    List<Producto> findByNombreContainingIgnoreCase(String nombre);

    /**
     * Encuentra productos activos por categoría.
     * @param categoriaId ID de la categoría
     * @return Lista de productos activos en esa categoría
     */
    List<Producto> findByCategoriaIdAndActivoTrue(Long categoriaId);

    /**
     * Encuentra productos activos.
     * @return Lista de productos activos
     */
    List<Producto> findByActivoTrue();

    /**
     * Encuentra productos con stock bajo (menor o igual a un umbral).
     * @param stockMinimo Umbral mínimo de stock
     * @return Lista de productos con stock bajo
     */
    @Query("SELECT p FROM Producto p WHERE p.stock <= :stockMinimo AND p.activo = true")
    List<Producto> findProductosConStockBajo(@Param("stockMinimo") Integer stockMinimo);


}
