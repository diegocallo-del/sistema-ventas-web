/**
 * Funciones de validacion de datos
 */

import { validation } from './config/settings';

/**
 * Valida un email
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= validation.email.maxLength;
}

/**
 * Valida una contraseña
 */
export function isValidPassword(password: string): boolean {
  const { minLength, maxLength, requireUppercase, requireLowercase, requireNumbers, requireSpecialChars } = validation.password;
  
  if (password.length < minLength || password.length > maxLength) {
    return false;
  }
  
  if (requireUppercase && !/[A-Z]/.test(password)) {
    return false;
  }
  
  if (requireLowercase && !/[a-z]/.test(password)) {
    return false;
  }
  
  if (requireNumbers && !/\d/.test(password)) {
    return false;
  }
  
  if (requireSpecialChars && !/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
    return false;
  }
  
  return true;
}

/**
 * Obtiene mensaje de error para contraseña invalida
 */
export function getPasswordErrorMessage(): string {
  const { minLength, requireUppercase, requireLowercase, requireNumbers, requireSpecialChars } = validation.password;
  
  const requirements = [
    `al menos ${minLength} caracteres`,
    requireUppercase && 'una mayuscula',
    requireLowercase && 'una minuscula',
    requireNumbers && 'un numero',
    requireSpecialChars && 'un caracter especial',
  ].filter(Boolean);
  
  return `La contraseña debe contener ${requirements.join(', ')}`;
}

/**
 * Valida un DNI peruano
 */
export function isValidDNI(dni: string): boolean {
  return /^\d{8}$/.test(dni);
}

/**
 * Valida un RUC peruano
 */
export function isValidRUC(ruc: string): boolean {
  return /^\d{11}$/.test(ruc);
}

/**
 * Valida un numero de telefono peruano
 */
export function isValidPhone(phone: string): boolean {
  const cleaned = phone.replace(/\D/g, '');
  return /^9\d{8}$/.test(cleaned);
}

/**
 * Valida un codigo de producto
 */
export function isValidProductCode(code: string): boolean {
  const { minLength, maxLength } = validation.producto.codigo;
  return code.length >= minLength && code.length <= maxLength;
}

/**
 * Valida un nombre de producto
 */
export function isValidProductName(name: string): boolean {
  const { minLength, maxLength } = validation.producto.nombre;
  return name.trim().length >= minLength && name.trim().length <= maxLength;
}

/**
 * Valida un precio
 */
export function isValidPrice(price: number): boolean {
  const { min, max } = validation.producto.precio;
  return price >= min && price <= max && !isNaN(price);
}

/**
 * Valida un stock
 */
export function isValidStock(stock: number): boolean {
  const { min, max } = validation.producto.stock;
  return Number.isInteger(stock) && stock >= min && stock <= max;
}

/**
 * Valida un nombre de cliente
 */
export function isValidClientName(name: string): boolean {
  const { minLength, maxLength } = validation.cliente.nombre;
  return name.trim().length >= minLength && name.trim().length <= maxLength;
}

/**
 * Valida un documento de identidad
 */
export function isValidDocument(tipo: string, numero: string): boolean {
  const cleaned = numero.replace(/\D/g, '');
  
  switch (tipo) {
    case 'DNI':
      return isValidDNI(cleaned);
    case 'RUC':
      return isValidRUC(cleaned);
    case 'PASAPORTE':
    case 'CARNET_EXTRANJERIA':
      return cleaned.length >= validation.cliente.documento.minLength 
        && cleaned.length <= validation.cliente.documento.maxLength;
    default:
      return false;
  }
}

/**
 * Valida que un numero sea positivo
 */
export function isPositiveNumber(value: number): boolean {
  return !isNaN(value) && value > 0;
}

/**
 * Valida que un campo no este vacio
 */
export function isNotEmpty(value: string): boolean {
  return value.trim().length > 0;
}

/**
 * Valida una URL
 */
export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}