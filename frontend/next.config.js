/** @type {import('next').NextConfig} */
const nextConfig = {
  // Solución para problemas de EPERM en Windows
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.watchOptions = {
        ...config.watchOptions,
        ignored: ['**/node_modules/**', '**/.next/**'],
        aggregateTimeout: 300,
        poll: 1000,
      };
    }

    // Resolver problemas de source maps en Windows
    if (config.devtool) {
      config.devtool = 'eval-cheap-module-source-map';
    }

    return config;
  },

  // Configuración de Turbopack para silenciar warnings
  turbopack: {},

  // Paquetes externos para server components
  serverExternalPackages: [],

  // Configuración para Windows
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
};

module.exports = nextConfig;
