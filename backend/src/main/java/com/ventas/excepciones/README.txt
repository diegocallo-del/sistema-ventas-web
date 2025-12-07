
CARPETA: EXCEPCIONES (Excepciones Personalizadas)
RESPONSABLE: David - Infraestructura


DESCRIPCIÓN:
Excepciones personalizadas para manejar errores del sistema de forma controlada.
El GlobalExceptionHandler captura estas excepciones y retorna respuestas JSON estandarizadas.

CLASES QUE DEBES CREAR:
  • ResourceNotFoundException.java (recurso no encontrado - 404)
  • BusinessException.java (error de lógica de negocio - 400)
  • ValidationException.java (error de validación - 400)
  • GlobalExceptionHandler.java (maneja todas las excepciones)



NOTAS IMPORTANTES:
- @RestControllerAdvice captura excepciones de todos los controladores
- ErrorResponse es un DTO creado en dto/
- Las excepciones se lanzan en servicios (Persona 4) y se capturan aquí
- Retorna códigos HTTP correctos y mensajes claros para el frontend

COORDINACIÓN:
- Los servicios (Diego) lanzan estas excepciones
- Los controladores (Patrick) no necesitan TRY-CATH, el handler lo hace

