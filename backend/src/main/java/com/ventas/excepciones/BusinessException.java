package com.ventas.excepciones;

/**
 * Excepción personalizada lanzada cuando ocurre un error en las reglas de negocio.
 * Se utiliza para validar lógica de negocio que no puede ser cubierta por validaciones básicas.
 * Retorna HTTP 400 (Bad Request) en el controlador.
 * SE HIZO SIMPLE PARA NO COMPLICARSE CON ESTA PARTE
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
     */
    public BusinessException(String messageTemplate, Object... params) {
        super(formatMessage(messageTemplate, params));
    }

    private static String formatMessage(String template, Object... params) {
        String result = template;
        for (Object param : params) {
            result = result.replaceFirst("\\{\\}", param != null ? param.toString() : "null");
        }
        return result;
    }
}
