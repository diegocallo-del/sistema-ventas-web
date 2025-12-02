package com.ventas.repositorios;

import com.ventas.modelos.DetalleVenta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Repositorio para operaciones CRUD de detalles de venta en la base de datos.
 * Gestiona los productos individuales incluidos en cada venta.
 */
@Repository
public interface DetalleVentaRepository extends JpaRepository<DetalleVenta, Long> {

    /**
     * Busca detalles de venta por venta específica.
     * @param ventaId El ID de la venta
     * @return Lista de detalles de esa venta
     */
    @Query("SELECT d FROM DetalleVenta d WHERE d.orden.id = :ventaId ORDER BY d.id")
    List<DetalleVenta> findByVentaId(@Param("ventaId") Long ventaId);

    /**
     * Busca detalles de venta por producto.
     * @param productoId El ID del producto
     * @return Lista de todos los detalles donde aparece ese producto
     */
    @Query("SELECT d FROM DetalleVenta d WHERE d.producto.id = :productoId ORDER BY d.orden.fechaCreacion DESC")
    List<DetalleVenta> findByProductoId(@Param("productoId") Long productoId);

    /**
     * Calcula la cantidad total vendida de un producto.
     * @param productoId El ID del producto
     * @return Cantidad total vendida
     */
    @Query("SELECT SUM(d.cantidad) FROM DetalleVenta d WHERE d.producto.id = :productoId")
    Integer calcularTotalVendidoProducto(@Param("productoId") Long productoId);

    /**
     * Busca los productos más vendidos basado en cantidad.
     * @param limite Número máximo de productos a retornar
     * @return Lista ordenada por cantidad vendida descendente
     */
    @Query("SELECT d.producto.id, d.producto.nombre, SUM(d.cantidad) as total " +
           "FROM DetalleVenta d " +
           "GROUP BY d.producto.id, d.producto.nombre " +
           "ORDER BY total DESC")
    List<Object[]> findProductosMasVendidos(@Param("limite") int limite);

    /**
     * Calcula los ingresos totales generados por un producto.
     * @param productoId El ID del producto
     * @return Ingresos totales generados por el producto
     */
    @Query("SELECT SUM(d.precio * d.cantidad) FROM DetalleVenta d WHERE d.producto.id = :productoId")
    Double calcularIngresosPorProducto(@Param("productoId") Long productoId);

    /**
     * Obtiene estadísticas de venta por producto en un rango de fechas.
     * @param productoId El ID del producto
     * @param inicio Fecha de inicio
     * @param fin Fecha de fin
     * @return Estadísticas de venta (cantidad total, ingresos totales)
     */
    @Query("SELECT SUM(d.cantidad), SUM(d.precio * d.cantidad) FROM DetalleVenta d " +
           "WHERE d.producto.id = :productoId AND d.orden.fechaCreacion BETWEEN :inicio AND :fin")
    Object[] obtenerEstadisticasProductoEnRango(
        @Param("productoId") Long productoId,
        @Param("inicio") java.time.LocalDateTime inicio,
        @Param("fin") java.time.LocalDateTime fin
    );

    /**
     * Busca detalles de venta con información completa de producto y venta.
     * @param ventaId El ID de la venta
     * @return Detalles con joins para obtener toda la información
     */
    @Query("SELECT d FROM DetalleVenta d " +
           "JOIN FETCH d.producto p " +
           "JOIN FETCH d.orden v " +
           "WHERE d.orden.id = :ventaId " +
           "ORDER BY d.id")
    List<DetalleVenta> findByVentaIdConProducto(@Param("ventaId") Long ventaId);
}
