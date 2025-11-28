package com.ventas.servicios;

import com.ventas.dto.AnalisisIARequestDTO;
import com.ventas.dto.AnalisisIAResponseDTO;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.reactive.function.client.WebClientResponseException;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.jdbc.core.JdbcTemplate;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.util.Map;
import java.util.List;
import java.util.HashMap;
import java.util.ArrayList;

@Service
public class AnalisisIAService {

    private final WebClient webClient;
    private final String apiKey;
    private final String model;
    private final ObjectMapper objectMapper;
    private final JdbcTemplate jdbcTemplate;

    public AnalisisIAService(WebClient webClient, 
                             @Value("${ia.api.key}") String apiKey,
                             @Value("${ia.api.model}") String model,
                             JdbcTemplate jdbcTemplate) {
        this.webClient = webClient;
        this.apiKey = apiKey;
        this.model = model;
        this.objectMapper = new ObjectMapper();
        this.jdbcTemplate = jdbcTemplate;
    }

    public AnalisisIAResponseDTO obtenerAnalisis(AnalisisIARequestDTO request) {
        try {
            String datosFormateados = recopilarYFormatearDatos(request.contexto());
            String prompt = construirPrompt(request.pregunta(), datosFormateados);

            String respuestaIA = llamarIAExterna(prompt);

            return new AnalisisIAResponseDTO(respuestaIA);
        } catch (WebClientResponseException e) {
            throw new RuntimeException("Error al comunicarse con el servicio de IA: " + 
                (e.getResponseBodyAsString() != null ? e.getResponseBodyAsString() : e.getMessage()), e);
        } catch (Exception e) {
            throw new RuntimeException("Error inesperado al procesar la solicitud de IA: " + e.getMessage(), e);
        }
    }

    private String recopilarYFormatearDatos(String contexto) {
        try {
            if ("reporte_ventas".equals(contexto)) {
                return obtenerDatosVentas();
            } else if ("reporte_inventario".equals(contexto)) {
                return obtenerDatosInventario();
            }
            return "{\"mensaje\": \"No hay datos para el contexto especificado: " + contexto + "\"}";
        } catch (Exception e) {
            System.err.println("Error al recopilar datos: " + e.getMessage());
            return "{\"error\": \"Error al obtener datos de la base de datos: " + e.getMessage() + "\"}";
        }
    }
    
    private String obtenerDatosVentas() {
        try {
            // Primero verificar si la tabla existe
            String checkTable = "SELECT COUNT(*) as count FROM information_schema.tables WHERE table_schema = DATABASE() AND table_name = 'ventas'";
            List<Map<String, Object>> tableCheck = jdbcTemplate.queryForList(checkTable);
            if (tableCheck.isEmpty() || ((Number) tableCheck.get(0).get("count")).intValue() == 0) {
                return "{\"mensaje\": \"La tabla 'ventas' no existe en la base de datos\", \"ventas_recientes\": [], \"estadisticas\": {}, \"productos_mas_vendidos\": []}";
            }
            
            // Consulta simplificada para obtener datos de ventas recientes
            String sqlVentas = "SELECT v.id, v.fecha, v.subtotal, v.igv, v.total, v.metodo_pago, v.estado, " +
                               "COALESCE(c.nombre, 'Sin cliente') as cliente_nombre " +
                               "FROM ventas v " +
                               "LEFT JOIN clientes c ON v.cliente_id = c.id " +
                               "ORDER BY v.fecha DESC LIMIT 50";
            
            List<Map<String, Object>> ventas = new ArrayList<>();
            try {
                ventas = jdbcTemplate.queryForList(sqlVentas);
            } catch (Exception e) {
                System.err.println("Error en consulta de ventas: " + e.getMessage());
                // Intentar consulta más simple sin JOIN
                try {
                    sqlVentas = "SELECT id, fecha, subtotal, igv, total, metodo_pago, estado FROM ventas ORDER BY fecha DESC LIMIT 50";
                    ventas = jdbcTemplate.queryForList(sqlVentas);
                } catch (Exception e2) {
                    System.err.println("Error en consulta simple de ventas: " + e2.getMessage());
                }
            }
            
            // Consulta para obtener estadísticas generales (con manejo de errores)
            Map<String, Object> estadisticas = new HashMap<>();
            try {
                String sqlStats = "SELECT COUNT(*) as total_ventas, " +
                                 "COALESCE(SUM(total), 0) as total_ingresos, " +
                                 "COALESCE(AVG(total), 0) as promedio_venta " +
                                 "FROM ventas";
                estadisticas = jdbcTemplate.queryForMap(sqlStats);
            } catch (Exception e) {
                System.err.println("Error en consulta de estadísticas: " + e.getMessage());
                estadisticas.put("total_ventas", 0);
                estadisticas.put("total_ingresos", 0);
                estadisticas.put("promedio_venta", 0);
            }
            
            // Consulta para productos más vendidos (con manejo de errores)
            List<Map<String, Object>> productosVendidos = new ArrayList<>();
            try {
                // Intentar con detalle_venta (singular)
                String sqlProductosVendidos = "SELECT p.nombre, p.codigo, SUM(dv.cantidad) as total_vendido, SUM(dv.subtotal) as ingresos_producto " +
                                            "FROM detalle_venta dv " +
                                            "JOIN productos p ON dv.producto_id = p.id " +
                                            "JOIN ventas v ON dv.venta_id = v.id " +
                                            "GROUP BY p.id, p.nombre, p.codigo " +
                                            "ORDER BY total_vendido DESC LIMIT 10";
                productosVendidos = jdbcTemplate.queryForList(sqlProductosVendidos);
            } catch (Exception e) {
                System.err.println("Error en consulta de productos vendidos (detalle_venta): " + e.getMessage());
                try {
                    // Intentar con detalle_ventas (plural)
                    String sqlProductosVendidos = "SELECT p.nombre, p.codigo, SUM(dv.cantidad) as total_vendido, SUM(dv.subtotal) as ingresos_producto " +
                                                "FROM detalle_ventas dv " +
                                                "JOIN productos p ON dv.producto_id = p.id " +
                                                "JOIN ventas v ON dv.venta_id = v.id " +
                                                "GROUP BY p.id, p.nombre, p.codigo " +
                                                "ORDER BY total_vendido DESC LIMIT 10";
                    productosVendidos = jdbcTemplate.queryForList(sqlProductosVendidos);
                } catch (Exception e2) {
                    System.err.println("Error en consulta de productos vendidos (detalle_ventas): " + e2.getMessage());
                }
            }
            
            // Formatear como JSON
            Map<String, Object> datos = new HashMap<>();
            datos.put("ventas_recientes", ventas != null ? ventas : new ArrayList<>());
            datos.put("estadisticas", estadisticas);
            datos.put("productos_mas_vendidos", productosVendidos != null ? productosVendidos : new ArrayList<>());
            datos.put("periodo", "Todos los datos disponibles");
            datos.put("total_ventas_encontradas", ventas != null ? ventas.size() : 0);
            
            return objectMapper.writeValueAsString(datos);
        } catch (Exception e) {
            System.err.println("Error al obtener datos de ventas: " + e.getMessage());
            e.printStackTrace();
            return "{\"error\": \"Error al obtener datos de ventas: " + e.getMessage().replace("\"", "\\\"") + "\", \"ventas_recientes\": [], \"estadisticas\": {}, \"productos_mas_vendidos\": []}";
        }
    }
    
    private String obtenerDatosInventario() {
        try {
            // Primero verificar si la tabla existe
            String checkTable = "SELECT COUNT(*) as count FROM information_schema.tables WHERE table_schema = DATABASE() AND table_name = 'productos'";
            List<Map<String, Object>> tableCheck = jdbcTemplate.queryForList(checkTable);
            if (tableCheck.isEmpty() || ((Number) tableCheck.get(0).get("count")).intValue() == 0) {
                return "{\"mensaje\": \"La tabla 'productos' no existe en la base de datos\", \"productos\": [], \"estadisticas\": {}, \"productos_stock_bajo\": []}";
            }
            
            // Consulta simplificada para obtener datos de inventario
            List<Map<String, Object>> productos = new ArrayList<>();
            try {
                String sqlInventario = "SELECT p.id, p.codigo, p.nombre, p.descripcion, p.precio, p.stock, p.activo, " +
                                      "COALESCE(c.nombre, 'Sin categoría') as categoria " +
                                      "FROM productos p " +
                                      "LEFT JOIN categorias c ON p.categoria_id = c.id " +
                                      "WHERE p.activo = true OR p.activo IS NULL " +
                                      "ORDER BY p.stock ASC, p.nombre ASC";
                productos = jdbcTemplate.queryForList(sqlInventario);
            } catch (Exception e) {
                System.err.println("Error en consulta de inventario con JOIN: " + e.getMessage());
                // Intentar consulta más simple sin JOIN
                try {
                    String sqlInventario = "SELECT id, codigo, nombre, descripcion, precio, stock, activo FROM productos ORDER BY stock ASC, nombre ASC";
                    productos = jdbcTemplate.queryForList(sqlInventario);
                } catch (Exception e2) {
                    System.err.println("Error en consulta simple de inventario: " + e2.getMessage());
                }
            }
            
            // Consulta para estadísticas de inventario (con manejo de errores)
            Map<String, Object> estadisticas = new HashMap<>();
            try {
                String sqlStats = "SELECT COUNT(*) as total_productos, " +
                                 "COALESCE(SUM(stock), 0) as stock_total, " +
                                 "COALESCE(SUM(CASE WHEN stock = 0 THEN 1 ELSE 0 END), 0) as productos_sin_stock, " +
                                 "COALESCE(SUM(CASE WHEN stock < 10 THEN 1 ELSE 0 END), 0) as productos_stock_bajo, " +
                                 "COALESCE(AVG(precio), 0) as precio_promedio " +
                                 "FROM productos WHERE activo = true OR activo IS NULL";
                estadisticas = jdbcTemplate.queryForMap(sqlStats);
            } catch (Exception e) {
                System.err.println("Error en consulta de estadísticas de inventario: " + e.getMessage());
                estadisticas.put("total_productos", productos != null ? productos.size() : 0);
                estadisticas.put("stock_total", 0);
                estadisticas.put("productos_sin_stock", 0);
                estadisticas.put("productos_stock_bajo", 0);
                estadisticas.put("precio_promedio", 0);
            }
            
            // Productos con stock bajo (con manejo de errores)
            List<Map<String, Object>> stockBajo = new ArrayList<>();
            try {
                String sqlStockBajo = "SELECT codigo, nombre, stock, precio FROM productos WHERE (activo = true OR activo IS NULL) AND stock < 10 ORDER BY stock ASC LIMIT 20";
                stockBajo = jdbcTemplate.queryForList(sqlStockBajo);
            } catch (Exception e) {
                System.err.println("Error en consulta de stock bajo: " + e.getMessage());
            }
            
            // Formatear como JSON
            Map<String, Object> datos = new HashMap<>();
            datos.put("productos", productos != null ? productos : new ArrayList<>());
            datos.put("estadisticas", estadisticas);
            datos.put("productos_stock_bajo", stockBajo != null ? stockBajo : new ArrayList<>());
            datos.put("total_productos_encontrados", productos != null ? productos.size() : 0);
            
            return objectMapper.writeValueAsString(datos);
        } catch (Exception e) {
            System.err.println("Error al obtener datos de inventario: " + e.getMessage());
            e.printStackTrace();
            return "{\"error\": \"Error al obtener datos de inventario: " + e.getMessage().replace("\"", "\\\"") + "\", \"productos\": [], \"estadisticas\": {}, \"productos_stock_bajo\": []}";
        }
    }

    private String construirPrompt(String pregunta, String datos) {
        return "Actúa como un analista de negocios experto. Basado en los siguientes datos en formato JSON, " +
               "responde a la siguiente pregunta de forma clara y concisa: '" + pregunta + "'. " +
               "No inventes información que no esté en los datos. Datos: \n" + datos;
    }

    private String llamarIAExterna(String prompt) {
        // Lista de modelos a intentar (en orden de preferencia)
        List<String> modelos = List.of(model, "llama-3.1-8b-instant", "mixtral-8x7b-32768");
        
        Exception ultimoError = null;
        
        for (String modeloActual : modelos) {
            try {
                System.out.println("--- INTENTANDO CON MODELO: " + modeloActual + " ---");
                return llamarIAConModelo(prompt, modeloActual);
            } catch (WebClientResponseException e) {
                String errorBody = e.getResponseBodyAsString();
                // Si el error es por modelo descontinuado o no disponible, intentar con el siguiente
                if (e.getStatusCode().value() == 400 && errorBody != null && 
                    (errorBody.contains("decommissioned") || errorBody.contains("not found"))) {
                    System.out.println("Modelo " + modeloActual + " no disponible, intentando con siguiente modelo...");
                    ultimoError = e;
                    continue; // Intentar con el siguiente modelo
                }
                // Si es otro tipo de error, lanzarlo
                throw new RuntimeException("Error en la API de Groq: " + 
                    (errorBody != null ? errorBody : e.getMessage()) + " (Status: " + e.getStatusCode() + ")", e);
            } catch (com.fasterxml.jackson.core.JsonProcessingException e) {
                throw new RuntimeException("Error al parsear la respuesta JSON de la IA: " + e.getMessage(), e);
            } catch (Exception e) {
                ultimoError = e;
                // Si no es un error de modelo, no intentar con otros modelos
                if (!(e.getCause() instanceof WebClientResponseException)) {
                    throw e;
                }
            }
        }
        
        // Si todos los modelos fallaron, lanzar el último error
        throw new RuntimeException("No se pudo conectar con ningún modelo disponible. Último error: " + 
            (ultimoError != null ? ultimoError.getMessage() : "Error desconocido"), ultimoError);
    }
    
    private String llamarIAConModelo(String prompt, String modeloActual) throws com.fasterxml.jackson.core.JsonProcessingException {
        System.out.println("--- PROMPT ENVIADO A LA IA (Groq) ---");
        System.out.println(prompt);
        System.out.println("--------------------------------------");

        // Formato de Groq (similar a OpenAI)
        Map<String, Object> message = Map.of(
            "role", "user",
            "content", prompt
        );
        
        Map<String, Object> requestBody = Map.of(
            "model", modeloActual,
            "messages", List.of(message),
            "temperature", 0.7,
            "max_tokens", 1000
        );

        String responseJson = webClient.post()
                .header("Authorization", "Bearer " + apiKey)
                .bodyValue(requestBody)
                .retrieve()
                .bodyToMono(String.class)
                .block();

        // Parsear la respuesta JSON de Groq
        JsonNode jsonNode = objectMapper.readTree(responseJson);
        
        // Extraer el texto de la respuesta
        // La estructura de Groq es: choices[0].message.content
        JsonNode choices = jsonNode.get("choices");
        if (choices != null && choices.isArray() && choices.size() > 0) {
            JsonNode choice = choices.get(0);
            JsonNode messageNode = choice.get("message");
            if (messageNode != null) {
                JsonNode content = messageNode.get("content");
                if (content != null) {
                    System.out.println("--- RESPUESTA EXITOSA DEL MODELO: " + modeloActual + " ---");
                    return content.asText();
                }
            }
        }
        
        // Si no se encuentra la estructura esperada, devolver un mensaje de error
        throw new RuntimeException("La respuesta de la IA no tiene el formato esperado: " + responseJson);
    }
}
