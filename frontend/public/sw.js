// Service Worker para Sistema de Ventas PWA
const CACHE_NAME = 'sistema-ventas-v1';
const STATIC_CACHE = 'sistema-ventas-static-v1';
const DYNAMIC_CACHE = 'sistema-ventas-dynamic-v1';

// Archivos a cachear inicialmente
const STATIC_FILES = [
  '/',
  '/offline.html',
  '/manifest.json',
  '/icon-192x192.png',
  '/icon-512x512.png'
];

// Recursos estáticos del framework
const FRAMEWORK_RESOURCES = [
  '/_next/static/',
  '/_next/image'
];

// Instalar Service Worker
self.addEventListener('install', (event) => {
  console.log('📦 Service Worker instalado');

  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('💾 Cacheando archivos estáticos');
        return cache.addAll(STATIC_FILES);
      })
      .catch((error) => {
        console.error('❌ Error cacheando archivos:', error);
      })
  );

  // Forzar activación inmediata
  self.skipWaiting();
});

// Activar Service Worker
self.addEventListener('activate', (event) => {
  console.log('🚀 Service Worker activado');

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
            console.log('🗑️ Eliminando cache antigua:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );

  // Tomar control de todas las páginas inmediatamente
  self.clients.claim();
});

// Interceptar fetch requests
self.addEventListener('fetch', (event) => {
  const { request } = event;

  // Solo interceptar requests GET
  if (request.method !== 'GET') return;

  // Estratégia Network First para frameworks y APIs
  if (request.url.includes('/api/') ||
      request.url.includes('/_next/') ||
      request.url.includes('groq.com')) {

    event.respondWith(
      fetch(request)
        .then((response) => {
          // Cachear recursos del framework dinámicamente
          if (request.url.includes('/_next/static/')) {
            const responseClone = response.clone();
            caches.open(DYNAMIC_CACHE)
              .then((cache) => cache.put(request, responseClone));
          }
          return response;
        })
        .catch(() => {
          // Fallback para algunos assets críticos
          if (request.destination === 'style' || request.destination === 'script') {
            return new Response('', { status: 404 });
          }
        })
    );
    return;
  }

  // Estrategia Cache First para assets estáticos
  event.respondWith(
    caches.match(request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }

        // Si no está en cache, intentar fetch
        return fetch(request)
          .then((response) => {
            // Solo cachear respuestas exitosas
            if (response.status === 200 && response.type === 'basic') {
              const responseClone = response.clone();

              caches.open(DYNAMIC_CACHE)
                .then((cache) => {
                  // Cachear con límite de tamaño
                  if (responseClone.url.includes('/api/dashboard') ||
                      responseClone.url.includes('/api/productos') ||
                      responseClone.url.length < 50000) {
                    cache.put(request, responseClone);
                  }
                });
            }

            return response;
          })
          .catch(() => {
            // Página offline para navegación
            if (request.mode === 'navigate') {
              return caches.match('/offline.html');
            }

            // Para otros assets, devolver respuesta vacía
            return new Response('', { status: 404 });
          });
      })
  );
});

// Escuchar mensajes desde el cliente
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }

  if (event.data && event.data.type === 'GET_VERSION') {
    event.ports[0].postMessage({ version: CACHE_NAME });
  }
});

// Limpiar cache viejo periodicamente
self.addEventListener('periodicsync', (event) => {
  if (event.tag === 'clean-cache') {
    event.waitUntil(
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              return caches.delete(cacheName);
            }
          })
        );
      })
    );
  }
});
