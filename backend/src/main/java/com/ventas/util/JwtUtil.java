package com.ventas.util;

import com.nimbusds.jose.*;
import com.nimbusds.jose.crypto.*;
import com.nimbusds.jwt.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.time.Instant;
import java.util.Date;
import java.util.function.Function;

/**
 * Utilidad para la gestión de tokens JWT.
 * Maneja la creación, validación y extracción de información de tokens JWT.
 */
@Component
@Slf4j
@RequiredArgsConstructor
public class JwtUtil {

    @Value("${jwt.secret}")
    private String jwtSecret;

    @Value("${jwt.expiration:86400000}") // 24 horas por defecto
    private long jwtExpirationMs;

    /**
     * Genera un token JWT para un usuario.
     * @param userDetails El usuario para generar el token
     * @return Token JWT generado
     */
    public String generateToken(final Object userDetails) {
        return createToken(userDetails, jwtExpirationMs);
    }

    /**
     * Extrae el nombre de usuario del token JWT.
     * @param token Token JWT
     * @return Nombre de usuario contenido en el token
     */
    public String extractUsername(String token) {
        return extractClaim(token, JWTClaimsSet::getSubject);
    }

    /**
     * Extrae la fecha de expiración del token JWT.
     * @param token Token JWT
     * @return Fecha de expiración del token
     */
    public Date extractExpiration(String token) {
        return extractClaim(token, claims -> claims.getExpirationTime());
    }

    /**
     * Verifica si el token JWT está expirado.
     * @param token Token JWT
     * @return true si el token está expirado, false en caso contrario
     */
    public boolean isTokenExpired(String token) {
        Date expiration = extractExpiration(token);
        return expiration == null || expiration.before(Date.from(Instant.now()));
    }

    /**
     * Valida un token JWT comparando con el nombre de usuario.
     * @param token Token JWT a validar
     * @param username Nombre de usuario para comparar
     * @return true si el token es válido para ese usuario, false en caso contrario
     */
    public boolean validateToken(String token, String username) {
        try {
            String tokenUsername = extractUsername(token);
            return (username.equals(tokenUsername) && !isTokenExpired(token));
        } catch (Exception e) {
            log.warn("Token JWT inválido: {}", e.getMessage());
            return false;
        }
    }

    /**
     * Crea un token JWT con una expiración específica.
     * @param claims Datos del usuario
     * @param expirationMs Tiempo de expiración en milisegundos
     * @return Token JWT generado
     */
    private String createToken(Object claims, long expirationMs) {
        try {
            JWSHeader header = new JWSHeader(JWSAlgorithm.HS256);
            Date now = Date.from(Instant.now());
            Date expiryDate = new Date(now.getTime() + expirationMs);

            // Extraer username del objeto Usuario
            String username = extractUsernameFromUser(claims);
            
            if (username == null || username.isEmpty()) {
                log.error("No se pudo extraer username del objeto de usuario");
                throw new RuntimeException("No se pudo extraer username para generar token");
            }

            log.debug("Generando token JWT para usuario: {}", username);

            JWTClaimsSet claimsSet = new JWTClaimsSet.Builder()
                    .subject(username)
                    .issueTime(now)
                    .expirationTime(expiryDate)
                    .build();

            SignedJWT signedJWT = new SignedJWT(header, claimsSet);
            JWSSigner signer = new MACSigner(jwtSecret.getBytes());

            signedJWT.sign(signer);

            String token = signedJWT.serialize();
            log.debug("Token JWT generado exitosamente para: {}", username);
            return token;
        } catch (JOSEException e) {
            log.error("Error al crear token JWT: {}", e.getMessage(), e);
            throw new RuntimeException("Error al generar token JWT", e);
        }
    }

    /**
     * Extrae información específica del token JWT.
     * @param token Token JWT
     * @param claimsResolver Función para resolver los claims
     * @param <T> Tipo de dato esperado
     * @return Información extraída del token
     */
    private <T> T extractClaim(String token, Function<JWTClaimsSet, T> claimsResolver) {
        JWTClaimsSet claims = extractAllClaims(token);
        if (claims != null) {
            return claimsResolver.apply(claims);
        }
        return null;
    }

    /**
     * Extrae todos los claims del token JWT.
     * @param token Token JWT
     * @return ClaimsSet con toda la información del token
     */
    private JWTClaimsSet extractAllClaims(String token) {
        try {
            SignedJWT signedJWT = SignedJWT.parse(token);
            JWSVerifier verifier = new MACVerifier(jwtSecret.getBytes());

            if (signedJWT.verify(verifier)) {
                return signedJWT.getJWTClaimsSet();
            }
        } catch (Exception e) {
            log.warn("Error al procesar token JWT: {}", e.getMessage());
        }
        return null;
    }

    /**
     * Extrae el nombre de usuario del objeto de usuario.
     * @param userDetails Objeto de usuario
     * @return Nombre de usuario
     */
    private String extractUsernameFromUser(Object userDetails) {
        if (userDetails instanceof com.ventas.modelos.Usuario usuario) {
            String email = usuario.getEmail();
            if (email == null || email.isEmpty()) {
                log.warn("Usuario sin email, usando ID como fallback");
                return usuario.getId() != null ? usuario.getId().toString() : null;
            }
            return email;
        }
        log.warn("Objeto de usuario no es instancia de Usuario: {}", userDetails.getClass().getName());
        return null;
    }
}
