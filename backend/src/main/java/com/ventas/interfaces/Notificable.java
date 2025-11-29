package com.ventas.interfaces;

/**
 * Interfaz que define contratos para envío de notificaciones.
 * Los servicios que implementen esta interfaz pueden enviar notificaciones por diferentes medios.
 * Se utiliza para alertas del sistema, confirmaciones de operaciones, etc.
 */
public interface Notificable {

    /**
     * Envía una notificación con un mensaje simple.
     * La implementación decide el medio de envío (email, SMS, push, etc.).
     * @param mensaje El contenido del mensaje a enviar
     */
    void enviarNotificacion(String mensaje);

    /**
     * Envía una notificación a un destinatario específico.
     * Permite especificar el destinatario además del mensaje.
     * @param destinatario La dirección, número o identificador del destinatario
     * @param mensaje El contenido del mensaje a enviar
     */
    void enviarNotificacion(String destinatario, String mensaje);

    /**
     * Envía una notificación de bienvenida.
     * Método de conveniencia para notificaciones estándar de bienvenida.
     * @param nombreUsuario El nombre del usuario para personalizar el mensaje
     */
    default void enviarNotificacionBienvenida(String nombreUsuario) {
        enviarNotificacion("¡Bienvenido al Sistema de Ventas, " + nombreUsuario + "!");
    }

    /**
     * Envía una notificación de confirmación de operación.
     * Método de conveniencia para confirmaciones estándar.
     * @param operacion El tipo de operación realizada (ej: "venta", "registro", etc.)
     * @param id El ID de la operación para referencia
     */
    default void enviarConfirmacionOperacion(String operacion, Long id) {
        enviarNotificacion("Operación '" + operacion + "' completada exitosamente. ID: " + id);
    }

    /**
     * Envía una notificación de error del sistema.
     * Método de conveniencia para alertas de error crítico.
     * @param error El mensaje de error o descripción del problema
     */
    default void enviarAlertaError(String error) {
        enviarNotificacion("ALERTA: Error en el sistema - " + error);
    }
}
