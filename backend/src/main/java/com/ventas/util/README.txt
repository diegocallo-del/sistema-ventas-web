═══════════════════════════════════════════════════════════
CARPETA: UTIL (Utilidades)
RESPONSABLE: PERSONA 2 - Infraestructura
═══════════════════════════════════════════════════════════

DESCRIPCIÓN:
Clases de utilidad con métodos estáticos reutilizables para validación y formato.

CLASES QUE DEBES CREAR:
  • ValidadorUtil.java (validar DNI, email, teléfono)
  • FormatoUtil.java (formatear moneda, fechas)
  • FechaUtil.java (operaciones con fechas)

EJEMPLO DE ESTRUCTURA:
public final class ValidadorUtil {
    private ValidadorUtil() {} // Prevenir instanciación
    
    public static boolean validarDNI(String dni) {
        // Validar formato de DNI peruano (8 dígitos)
        return dni != null && dni.matches("\\d{8}");
    }
    
    public static boolean validarEmail(String email) {
        return email != null && email.matches("^[A-Za-z0-9+_.-]+@(.+)$");
    }
}

public final class FormatoUtil {
    private FormatoUtil() {}
    
    public static String formatearMoneda(BigDecimal monto) {
        NumberFormat formatter = NumberFormat.getCurrencyInstance(
            new Locale("es", "PE")
        );
        return formatter.format(monto);
    }
    
    public static String formatearFecha(LocalDateTime fecha) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm");
        return fecha.format(formatter);
    }
}

NOTAS IMPORTANTES:
- Usa métodos estáticos (no necesitas instanciar la clase)
- Haz el constructor privado para prevenir instanciación
- Usa final en la clase para prevenir herencia
- Estos métodos se usan en servicios y controladores

COORDINACIÓN:
- Los servicios (Persona 4) pueden usar estas utilidades
- Los controladores (Persona 5) pueden usar FormatoUtil para respuestas
