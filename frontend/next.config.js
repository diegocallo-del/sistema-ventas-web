/** @type {import('next').NextConfig} */
const nextConfig = {
  // Habilitar imagenes de dominios externos si es necesario
  images: {
    domains: [],
  },
  // Variables de entorno publicas
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000',
  },
  // Configuracion de rutas
  async redirects() {
    return [
      {
        source: '/',
        destination: '/login',
        permanent: false,
      },
    ];
  },
}

module.exports = nextConfig