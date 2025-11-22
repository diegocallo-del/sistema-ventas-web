package com.ventas.servicios;

import com.ventas.dto.AnalisisIARequestDTO;
import com.ventas.dto.AnalisisIAResponseDTO;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.beans.factory.annotation.Value;
import java.util.Map;
import java.util.List;

@Service
public class AnalisisIAService {

    private final WebClient webClient;
    private final String apiKey;

    public AnalisisIAService(WebClient webClient, @Value("${ia.api.key}") String apiKey) {
        this.webClient = webClient;
        this.apiKey = apiKey;
    }

    public AnalisisIAResponseDTO obtenerAnalisis(AnalisisIARequestDTO request) {
        String datosFormateados = recopilarYFormatearDatos(request.contexto());
        String prompt = construirPrompt(request.pregunta(), datosFormateados);

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

        Map<String, Object> requestBody = Map.of(
            "contents", List.of(
                Map.of("parts", List.of(Map.of("text", prompt)))
            )
        );

        return webClient.post()
                .uri(uriBuilder -> uriBuilder.queryParam("key", apiKey).build())
                .bodyValue(requestBody)
                .retrieve()
                .bodyToMono(String.class)
                .block();
    }
}
