/* Service worker de Matriz de comidas.
   Solo gestiona la caché de archivos: no lee ni escribe localStorage.

   Al publicar:
   - Si solo cambia index.html, no hay que tocar nada aquí: se descarga sola al abrir la app con conexión.
   - Si cambia la fuente, un icono, el manifest o este archivo, sube VERSION. */
const VERSION = '2026-11-03-1';

// Todos los repos de <usuario>.github.io comparten origen y, con él, las cachés:
// usa siempre este prefijo y borra únicamente las que lo llevan.
const PREFIX = 'matriz-comidas-';
const CACHE = PREFIX + VERSION;
const NETWORK_TIMEOUT_MS = 3000;

const PAGE = new URL('./', self.location).href;
const INDEX = new URL('index.html', self.location).href;
const ASSETS = [
  PAGE,
  'manifest.webmanifest',
  'fonts/InstrumentSans.woff2',
  'icons/icon-180.png',
  'icons/icon-192.png',
  'icons/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    // cache:'reload' evita guardar copias antiguas de la caché HTTP de GitHub Pages
    await cache.addAll(ASSETS.map(url => new Request(url, { cache: 'reload' })));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names.filter(n => n.startsWith(PREFIX) && n !== CACHE).map(n => caches.delete(n)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  if (req.mode === 'navigate') {
    const target = url.origin + url.pathname;
    if (target === PAGE || target === INDEX) {
      // Red primero: la descarga sigue en segundo plano aunque se sirva la caché por tiempo agotado
      const network = fetchPage();
      event.waitUntil(network.catch(() => {}));
      event.respondWith(pageResponse(network));
    }
    return;
  }

  event.respondWith(assetResponse(req));
});

async function fetchPage() {
  // no-cache revalida con el servidor en lugar de aceptar la caché HTTP de 10 min
  const res = await fetch(PAGE, { cache: 'no-cache' });
  if (res.ok) {
    const cache = await caches.open(CACHE);
    await cache.put(PAGE, res.clone());
  }
  return res;
}

async function pageResponse(network) {
  const cache = await caches.open(CACHE);
  const cached = await cache.match(PAGE);
  if (!cached) return network;
  const timeout = new Promise(resolve => setTimeout(resolve, NETWORK_TIMEOUT_MS));
  try {
    const res = await Promise.race([network, timeout]);
    if (res && res.ok) return res;
  } catch (e) { /* sin conexión: se sirve la copia guardada */ }
  return cached;
}

async function assetResponse(req) {
  const cache = await caches.open(CACHE);
  const cached = await cache.match(req, { ignoreSearch: true });
  return cached || fetch(req);
}
