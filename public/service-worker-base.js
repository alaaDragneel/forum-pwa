workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest);

// The Next ine For Runtime Caching No Need For Offline Page.
// workbox.routing.registerNavigationRoute("/offline");


// workbox.routing.registerRoute(/http:\/\/127.0.0.1/, workbox.strategies.networkFirst({
// 	cacheName: "Forum-local",
// 	plugins: [
// 		new workbox.cacheableResponse.Plugin({
// 			headers: {
// 				'Content-Type': 'text/html; charset=UTF-8',
// 			},
// 		}),
// 		new workbox.expiration.Plugin({
// 			// Only cache requests for a week
// 			maxAgeSeconds: 60 * 60 * 24 * 7,
// 			// Only cache 10 requests.
// 			maxEntries: 10,
// 		}),
// 	]
// }), 'GET');


workbox.routing.registerRoute( (routeData) => {
	return (routeData.event.request.headers.get('accept').includes('text/html'));
},  (args) => {
	return caches.match(args.event.request)
	.then((response) => {
		if (response) {
			// return response form the cache
			return response;
		} else {
			// if the cache fail or not found try to get the response from the network
			return fetch(args.event.request)
			.then(function (res) {
				// if the cache fail or not found try to get the response from the network
				return caches.open('dynamic')
				.then(function (cache) {
					cache.put(args.event.request.url, res.clone());
					return res;
				});
			})
			// If The Network Response Fail
			.catch(function (err) {
				return caches.match('/offline')
				.then(function (res) {
					return res;
				});
			});
		}
	})
});

workbox.routing.registerRoute(/https:\/\/fonts.(googleapis|gstatic).com/, workbox.strategies.cacheFirst({
	cacheName: "google-fonts",
	plugins: [
		new workbox.cacheableResponse.Plugin({
			headers: {
				'Content-Type': 'font/woff2',
			},
		}),

		new workbox.expiration.Plugin({
			// Only cache requests for a week
			maxAgeSeconds: 60 * 60 * 24 * 7,
			// Only cache 10 requests.
			maxEntries: 10,
		}),
	]
}), 'GET');