═══════════════════════════════════════════════════════════
CARPETA: SERVICIOS
RESPONSABLE: PERSONA 4 - Servicios
═══════════════════════════════════════════════════════════

DESCRIPCIÓN:
Lógica de negocio y reglas del sistema.

CLASES A CREAR:
  • ProductoService.java
  • VentaService.java
  • ClienteService.java
  • UsuarioService.java
  • ReporteService.java
  • InventarioService.java

RESPONSABILIDADES:
  - Validar reglas de negocio
  - Coordinar operaciones entre DAOs
  - Aplicar cálculos complejos
  - Gestionar transacciones

EJEMPLOS DE MÉTODOS:
  • calcularTotalVenta(List<DetalleVenta> detalles)
  • validarStock(int productoId, int cantidad)
  • procesarVenta(Venta venta)
  • generarReporte(Date inicio, Date fin)
  • aplicarDescuento(double total, double porcentaje)
