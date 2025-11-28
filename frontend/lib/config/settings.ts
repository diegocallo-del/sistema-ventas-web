/**
 * Configuraciones globales y constantes de la aplicacion
 */

/**
 * Configuracion de paginacion
 */
export const pagination = {
  defaultPageSize: 10,
  pageSizeOptions: [10, 25, 50, 100],
  maxPageSize: 100,
} as const;

/**
 * Configuracion de validacion
 */
export const validation = {
  password: {
    minLength: 8,
    maxLength: 128,
    requireUppercase: true,
    requireLowercase: true,
    requireNumbers: true,
    requireSpecialChars: true,
  },
  username: {
    minLength: 3,
    maxLength: 50,
  },
  email: {
    maxLength: 255,
  },
  producto: {
    nombre: {
      minLength: 2,
      maxLength: 200,
    },
    codigo: {
      minLength: 1,
      maxLength: 50,
    },
    precio: {
      min: 0,
      max: 999999.99,
    },
    stock: {
      min: 0,
      max: 999999,
    },
  },
  cliente: {
    nombre: {
      minLength: 2,
      maxLength: 200,
    },
    documento: {
      minLength: 8,
      maxLength: 20,
    },
  },
} as const;

/**
 * Configuracion de formato de moneda
 */
export const currency = {
  locale: 'es-PE',
  currency: 'PEN',
  symbol: 'S/',
} as const;

/**
 * Configuracion de formato de fecha
 */
export const dateFormat = {
  display: 'dd/MM/yyyy',
  displayWithTime: 'dd/MM/yyyy HH:mm',
  api: 'yyyy-MM-dd',
  apiWithTime: "yyyy-MM-dd'T'HH:mm:ss",
} as const;

/**
 * Mensajes de la aplicacion
 */
export const messages = {
  success: {
    created: 'Registro creado exitosamente',
    updated: 'Registro actualizado exitosamente',
    deleted: 'Registro eliminado exitosamente',
    saved: 'Cambios guardados exitosamente',
  },
  error: {
    generic: 'Ha ocurrido un error. Por favor intenta nuevamente',
    network: 'Error de conexion. Verifica tu internet',
    unauthorized: 'No tienes permisos para realizar esta accion',
    notFound: 'Registro no encontrado',
    validation: 'Por favor corrige los errores en el formulario',
  },
  confirmation: {
    delete: 'Estas seguro de eliminar este registro?',
    cancel: 'Estas seguro de cancelar? Se perderan los cambios',
  },
} as const;

/**
 * Configuracion de almacenamiento local
 */
export const storage = {
  keys: {
    authToken: 'auth_token',
    refreshToken: 'refresh_token',
    user: 'user_data',
    cart: 'cart_data',
    preferences: 'user_preferences',
  },
} as const;