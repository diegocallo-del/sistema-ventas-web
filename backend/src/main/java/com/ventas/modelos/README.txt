═══════════════════════════════════════════════════════════
CARPETA: MODELOS
RESPONSABLE: PERSONA 1 - DBA
═══════════════════════════════════════════════════════════

DESCRIPCIÓN:
Clases de entidad que representan tablas de la base de datos.

CLASES A CREAR:
  • Producto.java
  • Cliente.java
  • Venta.java
  • DetalleVenta.java
  • Categoria.java
  • Usuario.java

ESTRUCTURA TÍPICA:
public class Producto {
    private int id;
    private String nombre;
    private double precio;
    private int stock;
    private int categoriaId;
    
    // Constructor vacío
    // Constructor con parámetros
    // Getters y Setters
    // toString()
}
