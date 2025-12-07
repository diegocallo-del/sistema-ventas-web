package com.ventas.controladores;

import com.ventas.dto.AnalisisIARequestDTO;
import com.ventas.dto.AnalisisIAResponseDTO;
import com.ventas.servicios.AnalisisIAService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@RequestMapping("/api/ia")
@Tag(name = "Análisis IA", description = "Procesamiento de datos con servicio IA externo")
public class AnalisisIAController {

    private final AnalisisIAService analisisIAService;

    public AnalisisIAController(AnalisisIAService analisisIAService) {
        this.analisisIAService = analisisIAService;
    }

    @PostMapping("/procesar")
    @Operation(summary = "Procesar análisis IA", description = "Envía datos y recibe análisis generado por IA")
    public ResponseEntity<AnalisisIAResponseDTO> analizarDatos(
            @RequestBody AnalisisIARequestDTO request) {
        // Aquí se llamaría al servicio para procesar la petición
        // El servicio se encargaría de recoger datos y consultar la IA externa, se hace de manera simple 
        AnalisisIAResponseDTO response = analisisIAService.obtenerAnalisis(request);
        return ResponseEntity.ok(response);
    }
}
