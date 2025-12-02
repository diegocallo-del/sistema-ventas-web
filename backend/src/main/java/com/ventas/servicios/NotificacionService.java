package com.ventas.servicios;

import com.ventas.modelos.Producto;
import com.ventas.modelos.Venta;
import com.ventas.repositorios.ProductoRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.scheduling.annotation.Scheduled;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Servicio de notificaciones del sistema
 * Gestiona alertas automáticas, notificaciones push y comunicaciones internas
 */
@Service
@RequiredArgsConstructor
@Slf4j
public class NotificacionService {

    private final ProductoRepository productoRepository;

    /**
     * Verifica productos con stock bajo cada 5 minutos
     * y genera alertas automáticas
     */
    @Scheduled(fixedRate = 300000) // 5 minutos
    public void verificarAlertasStock() {
        log.info("🔍 Verificando alertas de stock bajo...");

        try {
            List<Producto> productosStockBajo = productoRepository
                .findAll()
                .stream()
                .filter(producto -> producto.getStock() <= 5 && producto.isActivo())
                .collect(Collectors.toList());

            if (!productosStockBajo.isEmpty()) {
                String mensaje = String.format(
                    "🚨 ALERTA de Stock Bajo: %d productos requieren atención inmediata:\n%s",
                    productosStockBajo.size(),
                    productosStockBajo.stream()
                        .map(p -> String.format("- %s (%d unidades)", p.getNombre(), p.getStock()))
                        .collect(Collectors.joining("\n"))
                );

                log.warn("ALERTA STOCK: {}", mensaje);

                // En un sistema real, aquí enviaríamos:
                // - Correo electrónico
                // - Notificaciones push
                // - Mensajes Slack/WhatsApp
                // - Alertas en el dashboard

                enviarNotificacionStockBajo(productosStockBajo);
            } else {
                log.info("✅ Todos los productos tienen stock suficiente");
            }
        } catch (Exception e) {
            log.error("Error al verificar alertas de stock: {}", e.getMessage());
        }
    }

    /**
     * Verifica ventas pendientes de entrega cada 10 minutos
     */
    @Scheduled(fixedRate = 600000) // 10 minutos
    public void verificarVentasPendientes() {
        log.info("🔍 Verificando ventas pendientes...");

        // Esta funcionalidad podría expandirse según requerimientos
        // Por ejemplo: ventas procesadas que necesitan entrega física
    }

    /**
     * Envía notificación de stock bajo
     * En implementación real, enviaría emails, push notifications, etc.
     */
    private void enviarNotificacionStockBajo(List<Producto> productos) {
        // Simulación de envío de notificaciones
        log.warn("📧 NOTIFICACIÓN ENVIADA - Stock Bajo: {} productos requieren atención", productos.size());

        // En un sistema real esto enviaría:
        // emailService.send("admin@empresa.com", "Alerta de Stock Bajo", contenido);
        // pushNotificationService.send("Stock Bajo", contenido);
    }

    /**
     * Genera reporte diario de estado del sistema
     */
    @Scheduled(cron = "0 0 6 * * *") // Todos los días a las 6:00 AM
    public void enviarReporteDiario() {
        log.info("📊 Generando reporte diario del sistema...");

        // Este método podría:
        // - Calcular estadísticas del día anterior
        // - Generar resumen de ventas
        // - Enviar reporte por email
        // - Generar backups automáticos

        String resumen = String.format(
            "📈 Reporte Diario - %s\n" +
            "- Estado del sistema: ✅ Operativo\n" +
            "- Próximo mantenimiento programado\n",
            LocalDateTime.now().toLocalDate().toString()
        );

        log.info("REPORTE DIARIO: {}", resumen);
    }

    /**
     * Notifica eventos importantes del sistema
     */
    public void notificarEventoImportante(String titulo, String mensaje, String tipo) {
        log.info("📢 EVENTO IMPORTANTE - {}: {}", titulo, mensaje);

        // Aquí implementarían diferentes tipos de notificaciones:
        // - EMAIL: Para eventos críticos
        // - PUSH: Para usuarios logueados
        // - SLACK/DISCORD: Para equipos de soporte
    }

    /**
     * Notifica cambios en el estado de una venta
     */
    public void notificarCambioVenta(Venta venta, String cambio) {
        String mensaje = String.format(
            "Venta #%d - %s\n" +
            "Cliente: %s\n" +
            "Total: S/ %.2f\n" +
            "Estado: %s",
            venta.getId(),
            cambio,
            venta.getCliente() != null ? venta.getCliente().getNombre() : "Cliente contado",
            venta.getTotal(),
            venta.getEstadoVenta()
        );

        log.info("VENTA ACTUALIZADA: {}", mensaje);
    }

    /**
     * Notifica creación de nuevas ventas
     */
    public void notificarNuevaVenta(Venta venta) {
        String mensaje = String.format(
            "🛒 Nueva venta registrada #%d\n" +
            "Cliente: %s\n" +
            "Total: S/ %.2f\n" +
            "Productos: %d items",
            venta.getId(),
            venta.getCliente() != null ? venta.getCliente().getNombre() : "Cliente contado",
            venta.getTotal(),
            venta.getDetalles().size()
        );

        log.info("NUEVA VENTA: {}", mensaje);
        notificarEventoImportante("Nueva Venta", mensaje, "VENTA");
    }

    /**
     * Notifica productos nuevos agregados
     */
    public void notificarNuevoProducto(Producto producto) {
        String mensaje = String.format(
            "📦 Nuevo producto agregado\n" +
            "Nombre: %s\n" +
            "Código: %s\n" +
            "Precio: S/ %.2f\n" +
            "Stock inicial: %d unidades",
            producto.getNombre(),
            String.valueOf(producto.getCodigo()),
            producto.getPrecio(),
            producto.getStock()
        );

        log.info("NUEVO PRODUCTO: {}", mensaje);
    }
}
