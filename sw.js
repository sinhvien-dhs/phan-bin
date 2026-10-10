/* LỰC LƯỜNG — service worker (chỉ dùng khi chạy qua http/https) */
const CACHE = 'lucluong-v5';
const FILES = [
  './', './index.html',
  './css/base.css', './css/game.css', './css/report.css',
  './js/core.js', './js/ui.js', './js/render.js', './js/engine.js',
  './js/report.js', './js/main.js',
  './js/data/level1.js', './js/data/level2.js', './js/data/level3.js',
  './js/data/level4.js', './js/data/level5.js', './js/data/level6.js',
  './js/data/level7.js',
  './manifest.json', './assets/icon.svg'
];

self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE)
      .then(c => Promise.allSettled(FILES.map(f => c.add(f))))
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(hit => hit || fetch(e.request).then(res => {
      const copy = res.clone();
      caches.open(CACHE).then(c => c.put(e.request, copy)).catch(() => {});
      return res;
    }).catch(() => caches.match('./index.html')))
  );
});