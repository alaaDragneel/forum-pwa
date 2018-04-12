importScripts("workbox-v3.0.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.0.1"});

workbox.precaching.precacheAndRoute([].concat(self.__precacheManifest || []));
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
