/**
 * Utilidades para formateo de datos
 */

import { format, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';
import { currency, dateFormat } from './config/settings';

/**
 * Formatea un numero como moneda
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat(currency.locale, {
    style: 'currency',
    currency: currency.currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

/**
 * Formatea un numero simple con separadores de miles
 */
export function formatNumber(value: number, decimals: number = 0): string {
  return new Intl.NumberFormat(currency.locale, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
}

/**
 * Formatea una fecha a string legible
 */
export function formatDate(date: string | Date, withTime: boolean = false): string {
  try {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    const formatString = withTime ? dateFormat.displayWithTime : dateFormat.display;
    
    return format(dateObj, formatString, { locale: es });
  } catch {
    return 'Fecha invalida';
  }
}

/**
 * Formatea una fecha para enviar a la API
 */
export function formatDateForApi(date: Date): string {
  return format(date, dateFormat.api);
}

/**
 * Formatea una fecha con hora para enviar a la API
 */
export function formatDateTimeForApi(date: Date): string {
  return format(date, dateFormat.apiWithTime);
}

/**
 * Formatea un nombre completo desde nombre y apellido
 */
export function formatFullName(nombre: string, apellido?: string | null): string {
  if (!apellido) return nombre;
  return `${nombre} ${apellido}`;
}

/**
 * Formatea un numero de documento con su tipo
 */
export function formatDocument(tipo: string, numero: string): string {
  return `${tipo}: ${numero}`;
}

/**
 * Formatea un telefono
 */
export function formatPhone(phone: string): string {
  // Eliminar caracteres no numericos
  const cleaned = phone.replace(/\D/g, '');
  
  // Formatear segun longitud
  if (cleaned.length === 9) {
    return cleaned.replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3');
  }
  
  return phone;
}

/**
 * Formatea un porcentaje
 */
export function formatPercentage(value: number, decimals: number = 2): string {
  return `${formatNumber(value, decimals)}%`;
}

/**
 * Trunca un texto largo
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  
  return `${text.substring(0, maxLength)}...`;
}

/**
 * Capitaliza la primera letra de un string
 */
export function capitalize(text: string): string {
  if (!text) return '';
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

/**
 * Convierte un string a titulo (primera letra de cada palabra mayuscula)
 */
export function toTitleCase(text: string): string {
  return text
    .toLowerCase()
    .split(' ')
    .map(word => capitalize(word))
    .join(' ');
}