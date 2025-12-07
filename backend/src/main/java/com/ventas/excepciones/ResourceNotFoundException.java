package com.ventas.excepciones;

/**
 * Excepción personalizada lanzada cuando un recurso solicitado no es encontrado.
 * Se utiliza para casos como buscar por ID y no encontrar el registro.
 * Se uso, se tuvo q crear para cuando hubo errores con las tabblas 
 */
public class ResourceNotFoundException extends RuntimeException {


    public ResourceNotFoundException(String message) {
        super(message);
    }


    public ResourceNotFoundException(String resource, Long id) {
        super(String.format("%s con ID %d no encontrado", resource, id));
    }


    public ResourceNotFoundException(String resource, String id) {
        super(String.format("%s con identificador '%s' no encontrado", resource, id));
    }
}
