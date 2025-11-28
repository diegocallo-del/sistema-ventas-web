═══════════════════════════════════════════════════════════
CARPETA: EXCEPCIONES (Excepciones Personalizadas)
RESPONSABLE: PERSONA 2 - Infraestructura
═══════════════════════════════════════════════════════════

DESCRIPCIÓN:
Excepciones personalizadas para manejar errores del sistema de forma controlada.
El GlobalExceptionHandler captura estas excepciones y retorna respuestas JSON estandarizadas.

CLASES QUE DEBES CREAR:
  • ResourceNotFoundException.java (recurso no encontrado - 404)
  • BusinessException.java (error de lógica de negocio - 400)
  • ValidationException.java (error de validación - 400)
  • GlobalExceptionHandler.java (maneja todas las excepciones)

ESTRUCTURA DE EXCEPCIONES:
public class ResourceNotFoundException extends RuntimeException {
    public ResourceNotFoundException(String message) {
        super(message);
    }
    
    public ResourceNotFoundException(String resource, Long id) {
        super(String.format("%s con ID %d no encontrado", resource, id));
    }
}

public class BusinessException extends RuntimeException {
    public BusinessException(String message) {
        super(message);
    }
}

ESTRUCTURA DE GlobalExceptionHandler:
@RestControllerAdvice
public class GlobalExceptionHandler {
    
    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleNotFound(ResourceNotFoundException ex) {
        ErrorResponse error = new ErrorResponse(
            HttpStatus.NOT_FOUND.value(),
            "Not Found",
            ex.getMessage(),
            LocalDateTime.now()
        );
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(error);
    }
    
    @ExceptionHandler(BusinessException.class)
    public ResponseEntity<ErrorResponse> handleBusiness(BusinessException ex) {
        ErrorResponse error = new ErrorResponse(
            HttpStatus.BAD_REQUEST.value(),
            "Business Error",
            ex.getMessage(),
            LocalDateTime.now()
        );
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(error);
    }
    
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ErrorResponse> handleValidation(MethodArgumentNotValidException ex) {
        // Manejar errores de validación de DTOs
    }
}

NOTAS IMPORTANTES:
- @RestControllerAdvice captura excepciones de todos los controladores
- ErrorResponse es un DTO creado en dto/
- Las excepciones se lanzan en servicios (Persona 4) y se capturan aquí
- Retorna códigos HTTP correctos y mensajes claros para el frontend

COORDINACIÓN:
- Los servicios (Persona 4) lanzan estas excepciones
- Los controladores (Persona 5) no necesitan try-catch, el handler lo hace

