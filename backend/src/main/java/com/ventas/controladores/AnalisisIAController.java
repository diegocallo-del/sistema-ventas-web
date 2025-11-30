package com.ventas.controladores;

import com.ventas.dto.AnalisisIARequestDTO;
import com.ventas.dto.AnalisisIAResponseDTO;
import com.ventas.servicios.AnalisisIAService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/ia")
public class AnalisisIAController {

    private final AnalisisIAService analisisIAService;

    public AnalisisIAController(AnalisisIAService analisisIAService) {
        this.analisisIAService = analisisIAService;
    }

    @PostMapping("/procesar")
    public ResponseEntity<AnalisisIAResponseDTO> analizarDatos(
            @RequestBody AnalisisIARequestDTO request) {
        // Aquí se llamaría al servicio para procesar la petición
        // El servicio se encargaría de recoger datos y consultar la IA externa
        AnalisisIAResponseDTO response = analisisIAService.obtenerAnalisis(request);
        return ResponseEntity.ok(response);
    }
}
