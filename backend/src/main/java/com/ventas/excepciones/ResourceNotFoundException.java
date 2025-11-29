package com.ventas.excepciones;

/**
 * Excepción personalizada lanzada cuando un recurso solicitado no es encontrado.
 * Se utiliza para casos como buscar por ID y no encontrar el registro.
 * Retorna HTTP 404 (Not Found) en el controlador.
 */
public class ResourceNotFoundException extends RuntimeException {

    /**
     * Constructor con mensaje personalizado.
     * @param message El mensaje descriptivo del error
     */
    public ResourceNotFoundException(String message) {
        super(message);
    }

    /**
     * Constructor que genera un mensaje automático basado en el recurso y ID.
     * @param resource El nombre del recurso (ej: "Producto", "Cliente", "Venta")
     * @param id El ID del recurso que no se encontró
     */
    public ResourceNotFoundException(String resource, Long id) {
        super(String.format("%s con ID %d no encontrado", resource, id));
    }

    /**
     * Constructor que genera un mensaje automático basado en el recurso y ID String.
     * @param resource El nombre del recurso
     * @param id El ID del recurso como String (útil para códigos, nombres, etc.)
     */
    public ResourceNotFoundException(String resource, String id) {
        super(String.format("%s con identificador '%s' no encontrado", resource, id));
    }
}
