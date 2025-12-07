package com.ventas.controladores;

import com.ventas.dto.AuthResponseDTO;
import com.ventas.dto.CreateUsuarioDTO;
import com.ventas.dto.LoginRequestDTO;
import com.ventas.servicios.AuthService;
import com.ventas.modelos.Usuario;
import com.ventas.repositorios.UsuarioRepository;
import com.ventas.enums.RolUsuario;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

import jakarta.validation.Valid;
import java.util.HashMap;
import java.util.Map;


@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@Validated
@Tag(name = "Auth", description = "Autenticación básica y bootstrap")
public class AuthController {

    private final UsuarioRepository usuarioRepository;
    private final AuthService authService;
    private final PasswordEncoder passwordEncoder;

    /**
     * Endpoint para login simple.
     * Verifica si usuario existe y contraseña coincide.
     */
    @PostMapping("/login")
    @Operation(summary = "Login", description = "Autentica usuario y devuelve token")
    public ResponseEntity<AuthResponseDTO> login(@Valid @RequestBody LoginRequestDTO loginRequest) {
        AuthResponseDTO response = authService.login(loginRequest);
        return ResponseEntity.ok(response);
    }

    /**
     * Endpoint para registro simpl
     * Guarda usuario en BD con contraseña en texto plano, en un pricipio se penso en Bycript pero se complico  
     */
    @PostMapping("/register")
    @Operation(summary = "Registro", description = "Registra usuario básico")
    public ResponseEntity<AuthResponseDTO> registrarUsuario(@Valid @RequestBody CreateUsuarioDTO createUsuario) {
        AuthResponseDTO response = authService.registrarUsuario(createUsuario);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }
}
