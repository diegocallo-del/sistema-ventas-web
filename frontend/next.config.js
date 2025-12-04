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

  // Rewrites para proxy API requests al backend
  async rewrites() {
    if (process.env.NODE_ENV === 'development') {
      return [
        {
          source: '/api/:path*',
          destination: 'http://localhost:8080/api/:path*',
        },
      ];
    }
    return [];
  },
};

module.exports = nextConfig;
