// Cache names
const CACHE_NAME = 'budget-tracker-cache';
const DATA_CACHE_NAME = 'data-cache-budget';

//Connect files to cache
const FILES_TO_CACHE = [
    '/',
    '/index.html',
    '/manifest.json',
    '/js/index.js',
    '/css/styles.css',
    '/icons/icon-72x72.png',
    '/icons/icon-96x96.png',
    '/icons/icon-128x128.png',
    '/icons/icon-144x144.png',
    '/icons/icon-152x152.png',
    '/icons/icon-192x192.png',
    '/icons/icon-384x382.png',
    '/icons/icon-512x512.png'
];

//Install service worker
self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            console.log('Cache installing');
            return cache.addAll(FILES_TO_CACHE);
        })
    );
    self.skipWaiting();
})
//Activate Service Worker

//Intercept Fetch