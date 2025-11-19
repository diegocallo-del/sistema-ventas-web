// D:\sistema-ventas-web\frontend\lib\utils.ts

/**
 * Combina clases condicionalmente (TailwindCSS)
 */
export function cn(...classes: (string | undefined | false | null)[]) {
  return classes.filter(Boolean).join(" ");
}

/**
 * Simula espera, útil para loaders
 */
export function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
