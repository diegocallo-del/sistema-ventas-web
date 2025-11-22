package com.ventas.servicios;

import com.ventas.dto.AnalisisIARequestDTO;
import com.ventas.dto.AnalisisIAResponseDTO;
import org.springframework.stereotype.Service;

@Service
public class AnalisisIAService {

    // Se eliminan las dependencias a otros servicios temporalmente
    // ya que la implementación de la IA es simulada.
    // En una implementación real, aquí se inyectarían los servicios necesarios
    // para recopilar los datos que se enviarán a la IA.
    public AnalisisIAService() {
        // Constructor vacío
    }

    public AnalisisIAResponseDTO obtenerAnalisis(AnalisisIARequestDTO request) {
        // 1. Recopilar datos basados en el contexto (simulado)
        String datosFormateados = recopilarYFormatearDatos(request.contexto());

        // 2. Construir el prompt para la IA
        String prompt = construirPrompt(request.pregunta(), datosFormateados);

        // 3. Llamar a la API de la IA externa (Simulación)
        String respuestaIA = llamarIAExterna(prompt);

        return new AnalisisIAResponseDTO(respuestaIA);
    }

    private String recopilarYFormatearDatos(String contexto) {
        if ("reporte_ventas".equals(contexto)) {
            return "[Simulación de datos de ventas en formato JSON]";
        } else if ("reporte_inventario".equals(contexto)) {
            return "[Simulación de datos de inventario en formato JSON]";
        }
        return "[No hay datos para el contexto especificado]";
    }

    private String construirPrompt(String pregunta, String datos) {
        return "Actúa como un analista de negocios experto. Basado en los siguientes datos en formato JSON, " +
               "responde a la siguiente pregunta de forma clara y concisa: '" + pregunta + "'. " +
               "No inventes información que no esté en los datos. Datos: \n" + datos;
    }

    private String llamarIAExterna(String prompt) {
        System.out.println("--- PROMPT ENVIADO A LA IA ---");
        System.out.println(prompt);
        System.out.println("-----------------------------");

        return "Análisis de IA simulado: Basado en los datos, el producto más vendido es la 'Laptop Gamer' y el día de menor actividad es el domingo.";
    }
}
