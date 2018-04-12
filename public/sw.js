
var CACHE_STATIC_NAME = 'static-v1';
var CACHE_DYNAMIC_NAME = 'dynamic-v1';
var STATIC_FILES = [
	'/',
	'/js/app.js',
	'/css/app.css',
];


self.addEventListener('install', function (event) {
	console.log('[Service Worker] Installing Service Worker ...', event);
	event.waitUntil(
		caches.open(CACHE_STATIC_NAME)
		.then(function (cache) {
			console.log('[Service Worker] Precaching App Shell');
			cache.addAll(STATIC_FILES);
		})
	);
});

self.addEventListener('activate', function (event) {
	console.log('[Service Worker] Activating Service Worker ...', event);
	return self.clients.claim();
});


self.addEventListener('fetch', function (event) {
    console.log('[Service Worker] Fetching Somethings ...', event);

	// cache with network fallback
	event.respondWith(
		caches.match(event.request)
		.then(function (response) {
			if (response) {
				// return response form the cache
				return response;
			} else {
				// if the cache fail or not found try to get the response from the network
				return fetch(event.request)
				.then(function (res) {
					// if the cache fail or not found try to get the response from the network
					return caches.open(CACHE_DYNAMIC_NAME)
					.then(function (cache) {
						// res return one time so use clone to use twice [ more safety ]
						// trimCache(CACHE_DYNAMIC_NAME, 3);
						cache.put(event.request.url, res.clone());
						return res;
					});
				})
				// If The Network Response Fail
				.catch(function (err) {
					return caches.open(CACHE_STATIC_NAME).then(function (cache) {
						if (event.request.headers.get('accept').includes('text/html')) {
							return cache.match('/offline');
						}
					});
				});
			}
		})
	);
});

self.addEventListener('sync', function (event) {
	console.log('[Server Worker] Background Syncing', event);
});

self.addEventListener('notificationclick', function (event) {
	console.log('Notification: ', notification);
});

self.addEventListener('notificationclose', function (event) {
	console.log('Notification Was Closed', event);
});

self.addEventListener('push', function (event) {
	console.log('[Server Worker] Push Notification Received...', event);
});
