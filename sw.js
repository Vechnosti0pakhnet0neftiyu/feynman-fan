const CACHE_NAME = 'feynman-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/fanclub.html',
  '/literature.html',
  '/styles.css',
  '/feynman.jpg',
  '/feynman-fan.jpg',
  '/bg.jpg',
  '/icon-192.png',
  '/icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
