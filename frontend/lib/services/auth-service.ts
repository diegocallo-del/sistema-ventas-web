'use client';

/**
 * Servicio de autenticación - auth-service.ts
 *
 * Este servicio maneja todas las operaciones relacionadas con autenticación
 * de usuarios. Usa Axios para comunicación con el backend Spring Boot.
 */

import { api } from '../api';
import { User, UserRole } from '../types/usuario';

/**
 * Interfaz para las credenciales de login
 * Puede enviar tanto 'username' como 'email' según el backend
 */
interface LoginCredentials {
  username: string; // Campo que acepta tanto username como email
  password: string;
}

/**
 * Interfaz para la respuesta de autenticación
 * Incluye información de éxito/fracaso y datos del usuario si aplica
 */
interface LoginResponse {
  success: boolean;
  token?: string;
  userId?: number;
  nombre?: string;
  email?: string;
  error?: string;
  user?: User;
  rol?: UserRole;
}

/**
 * Función de login que se conecta al backend Spring Boot
 *
 * @param credentials - Credenciales de autenticación
 * @returns Promise con la respuesta del servidor
 *
 * El backend espera un DTO así:
 * public record LoginRequestDTO(
 *     @NotBlank @JsonAlias({"username","email"}) String username,
 *     @NotBlank String password
 * ) {}
 */
export async function login(credentials: LoginCredentials): Promise<LoginResponse> {
  // Validación básica antes de enviar
  if (!credentials.username?.trim() || !credentials.password?.trim()) {
    return {
      success: false,
      error: 'Usuario y contraseña son obligatorios'
    };
  }

  try {
    // Envío de POST request con JSON
    const response: any = await api.post('/api/auth/login', {
      username: credentials.username, // Campo aceptado por el backend (se pueda username o email)
      password: credentials.password
    }, {
      headers: {
        'Content-Type': 'application/json' // Header obligatorio para Spring Boot
      }
    });

    // El backend devuelve datos con la estructura que manejamos
    const responseData: any = response;

    // El backend ahora devuelve directamente los campos
    if (responseData.success) {
      // Convertir rol del backend (mayúsculas) a frontend (minúsculas)
      const rolMapped: UserRole = responseData.rol ? responseData.rol.toLowerCase() as UserRole : UserRole.CLIENTE;

      return {
        success: true,
        token: responseData.token,
        userId: responseData.userId,
        nombre: responseData.nombre,
        email: responseData.email,
        rol: rolMapped,
        user: {
          id: responseData.userId,
          nombre: responseData.nombre,
          email: responseData.email,
          rol: rolMapped,
          activo: true,
          fecha_creacion: new Date().toISOString(),
          ultimo_acceso: new Date().toISOString(),
          username: responseData.email // Fallback
        }
      };
    } else {
      return {
        success: false,
        error: responseData.error || 'Error de autenticación desconocido'
      };
    }

  } catch (error: any) {
    // Manejo específico de errores HTTP
    if (error.response && error.response.status === 400) {
      // Error 400 - Datos inválidos enviados al backend
      return {
        success: false,
        error: 'Credenciales inválidas. Verifique usuario y contraseña.'
      };
    }

    // Error de conexión o servidor
    return {
      success: false,
      error: error.message || 'Error de conexión con el servidor'
    };
  }
}

/**
 * Función de registro que se conecta al backend Spring Boot
 *
 * @param registerData - Datos del registro de usuario
 * @returns Promise con la respuesta del servidor
 */
export async function register(registerData: {
  username: string;
  nombre: string;
  email: string;
  password: string;
  rol: string;
}): Promise<LoginResponse> {
  // Validación básica antes de enviar
  if (!registerData.username?.trim() || registerData.username.length < 4) {
    return {
      success: false,
      error: 'El nombre de usuario debe tener al menos 4 caracteres'
    };
  }

  if (!registerData.nombre?.trim()) {
    return {
      success: false,
      error: 'El nombre es obligatorio'
    };
  }

  if (!registerData.email?.trim() || !registerData.email.includes('@')) {
    return {
      success: false,
      error: 'El email debe tener un formato válido'
    };
  }

  if (!registerData.password?.trim() || registerData.password.length < 8) {
    return {
      success: false,
      error: 'La contraseña debe tener al menos 8 caracteres'
    };
  }

  if (!registerData.rol) {
    return {
      success: false,
      error: 'El rol es obligatorio'
    };
  }

  try {
    // Envío de POST request con JSON al endpoint de registro
    const response: any = await api.post('/api/auth/register', {
      username: registerData.username,
      nombre: registerData.nombre,
      email: registerData.email,
      password: registerData.password,
      rol: registerData.rol.toUpperCase() // Asegurar que el rol esté en mayúsculas
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    // El backend devuelve datos con la estructura que manejamos
    const responseData: any = response;

    // Si el registro es exitoso, el backend devuelve token e información del usuario
    if (responseData.success) {
      // Convertir rol del backend (mayúsculas) a frontend (minúsculas)
      const rolMapped: UserRole = responseData.rol ? responseData.rol.toLowerCase() as UserRole : UserRole.VENDEDOR;

      return {
        success: true,
        token: responseData.token,
        userId: responseData.userId,
        nombre: responseData.nombre,
        email: responseData.email,
        rol: rolMapped,
        user: {
          id: responseData.userId,
          nombre: responseData.nombre,
          email: responseData.email,
          rol: rolMapped,
          activo: true,
          fecha_creacion: new Date().toISOString(),
          ultimo_acceso: new Date().toISOString(),
          username: responseData.email
        }
      };
    } else {
      return {
        success: false,
        error: responseData.error || 'Error en el registro'
      };
    }

  } catch (error: any) {
    // Manejo específico de errores HTTP
    if (error.response?.status === 400) {
      // Error 400 - Datos inválidos enviados al backend
      return {
        success: false,
        error: 'Datos inválidos. Verifique la información proporcionada.'
      };
    }

    if (error.response?.status === 409) {
      // Error 409 - Conflicto (email ya existente)
      return {
        success: false,
        error: 'El email ya está registrado en el sistema.'
      };
    }

    // Error de conexión o servidor
    return {
      success: false,
      error: error.message || 'Error de conexión con el servidor'
    };
  }
}

/**
 * Función auxiliar para validación básica de credenciales
 */
export function validateCredentials(credentials: LoginCredentials): { isValid: boolean; error?: string } {
  if (!credentials.username?.trim()) {
    return { isValid: false, error: 'El usuario es obligatorio' };
  }

  if (!credentials.password?.trim()) {
    return { isValid: false, error: 'La contraseña es obligatoria' };
  }

  if (credentials.password.length < 4) {
    return { isValid: false, error: 'La contraseña debe tener al menos 4 caracteres' };
  }

  return { isValid: true };
}
