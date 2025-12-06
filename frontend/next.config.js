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

  async rewrites() {
    const backend = process.env.BACKEND_URL || 'http://localhost:8080';
    return [
      {
        source: '/api/:path*',
        destination: `${backend}/api/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
