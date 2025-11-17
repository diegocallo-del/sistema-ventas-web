/**
 * Configuracion centralizada de variables de entorno
 * Valida y exporta variables de entorno de forma segura
 */

// Variables requeridas
const requiredEnvVars = ['NEXT_PUBLIC_API_URL'] as const;

/**
 * Función de validación segura
 * Solo lanza error si estamos en el server (Node)
 */
function checkEnvVar(varName: string) {
  const value = process.env[varName];
  if (!value && typeof window === 'undefined') {
    throw new Error(`Variable de entorno requerida no encontrada: ${varName}`);
  }
  return value;
}

// Exportar variables de entorno de forma segura
export const env = {
  apiUrl: checkEnvVar('NEXT_PUBLIC_API_URL') || 'http://localhost:8000',
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
  isTest: process.env.NODE_ENV === 'test',
} as const;

// Configuración de timeouts
export const timeouts = {
  api: 30000,     // 30s
  upload: 60000,  // 60s
  debounce: 300,  // 300ms
} as const;
