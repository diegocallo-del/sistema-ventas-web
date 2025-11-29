package com.ventas.excepciones;

/**
 * Excepción personalizada lanzada cuando ocurre un error en las reglas de negocio.
 * Se utiliza para validar lógica de negocio que no puede ser cubierta por validaciones básicas.
 * Retorna HTTP 400 (Bad Request) en el controlador.
 */
public class BusinessException extends RuntimeException {

    /**
     * Constructor con mensaje personalizado.
     * @param message El mensaje descriptivo del error de negocio
     */
    public BusinessException(String message) {
        super(message);
    }

    /**
     * Constructor que permite generar mensajes con contexto.
     * Útil para errores que requieren información específica del negocio.
     * @param messageTemplate Plantilla del mensaje (ej: "Stock insuficiente para producto {}")
     * @param params Parámetros para completar la plantilla
     */
    public BusinessException(String messageTemplate, Object... params) {
        super(formatMessage(messageTemplate, params));
    }

    /**
     * Método auxiliar para formatear mensajes con parámetros.
     * Reemplaza {} en la plantilla con los valores de los parámetros.
     * @param template La plantilla del mensaje
     * @param params Los parámetros a insertar
     * @return El mensaje formateado
     */
    private static String formatMessage(String template, Object... params) {
        String result = template;
        for (Object param : params) {
            result = result.replaceFirst("\\{\\}", param != null ? param.toString() : "null");
        }
        return result;
    }
}
