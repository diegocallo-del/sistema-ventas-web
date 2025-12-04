package com.ventas.repositorios;

import com.ventas.modelos.ProductoImagen;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductoImagenRepository extends JpaRepository<ProductoImagen, Long> {

    /**
     * Busca todas las imágenes de un producto ordenadas por el campo 'orden'
     * @param productoId ID del producto
     * @return Lista de imágenes ordenadas
     */
    List<ProductoImagen> findByProductoIdOrderByOrdenAsc(Long productoId);

    /**
     * Elimina todas las imágenes de un producto
     * @param productoId ID del producto
     */
    void deleteByProductoId(Long productoId);

    /**
     * Busca imágenes por producto y orden específico
     * @param productoId ID del producto
     * @param orden Orden de la imagen
     * @return La imagen encontrada o null
     */
    ProductoImagen findByProductoIdAndOrden(Long productoId, int orden);

    /**
     * Encuentra el máximo orden para las imágenes de un producto
     * @param productoId ID del producto
     * @return El máximo orden o 0 si no hay imágenes
     */
    @org.springframework.data.jpa.repository.Query("SELECT COALESCE(MAX(pi.orden), 0) FROM ProductoImagen pi WHERE pi.producto.id = ?1")
    int findMaxOrdenByProductoId(Long productoId);
}
