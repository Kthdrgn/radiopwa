// Service Worker for Radio Player PWA
// This service worker adds cache clearing capability and smart caching strategies

// Auto-versioning: Update this timestamp when you make changes to force cache refresh
// Format: YYYYMMDD-HHMM or increment the number after each update
const CACHE_VERSION = '20251029-001';
const CACHE_NAME = `radio-player-v${CACHE_VERSION}`;

const urlsToCache = [
    './',
    './manifest.json',
    './icons/icon-192x192.png',
    './icons/icon-512x512.png'
    // Note: index.html is NOT pre-cached to ensure fresh content
];

// Install event - cache resources
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Fetch event - smart caching strategy
self.addEventListener('fetch', (event) => {
    // Don't cache Supabase API calls
    if (event.request.url.includes('supabase.co')) {
        event.respondWith(fetch(event.request));
        return;
    }

    const url = new URL(event.request.url);
    const isHTMLRequest = url.pathname.endsWith('.html') ||
                         url.pathname === '/' ||
                         url.pathname === '/index.html';

    // Network-first strategy for HTML files (always fetch fresh content)
    if (isHTMLRequest) {
        event.respondWith(
            fetch(event.request)
                .then((response) => {
                    // Cache the fresh HTML response for offline access
                    if (response && response.status === 200) {
                        const responseToCache = response.clone();
                        caches.open(CACHE_NAME)
                            .then((cache) => {
                                cache.put(event.request, responseToCache);
                            });
                    }
                    return response;
                })
                .catch(() => {
                    // If network fails, fall back to cached version
                    return caches.match(event.request);
                })
        );
        return;
    }

    // Cache-first strategy for static assets (CSS, JS, images, etc.)
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                if (response) {
                    return response;
                }
                return fetch(event.request).then((response) => {
                    // Don't cache if not a valid response
                    if (!response || response.status !== 200 || response.type !== 'basic') {
                        return response;
                    }

                    const responseToCache = response.clone();
                    caches.open(CACHE_NAME)
                        .then((cache) => {
                            cache.put(event.request, responseToCache);
                        });

                    return response;
                });
            })
    );
});

// CRITICAL FIX: Handle messages from the page for cache clearing
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'CLEAR_CACHE') {
        console.log('Received CLEAR_CACHE message');
        event.waitUntil(
            caches.keys().then((cacheNames) => {
                return Promise.all(
                    cacheNames.map((cacheName) => {
                        console.log('Clearing cache:', cacheName);
                        return caches.delete(cacheName);
                    })
                );
            }).then(() => {
                console.log('All caches cleared');
                // Notify the page that cache is cleared
                if (event.source) {
                    event.source.postMessage({
                        type: 'CACHE_CLEARED'
                    });
                }
            }).catch((error) => {
                console.error('Error clearing cache:', error);
            })
        );
    }
    
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});
