/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.0.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.0.1"});

importScripts(
  "precache-manifest.e006496ee480f3875b6472e76dbcf801.js"
);

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "css/app.css",
    "revision": "ccc61e75cc925bd91dbfc13ee10ffb65"
  },
  {
    "url": "css/vendor/jquery.atwho.min.css",
    "revision": "d94bf771ef5e5115bcfc304b2b831f5c"
  },
  {
    "url": "css/vendor/trix.css",
    "revision": "56a40a9d7d50ee77162e0dcd55ec6aeb"
  },
  {
    "url": "images/favicons/html_code.html",
    "revision": "dedd680b43fde89f3d8d1d549a786fa1"
  },
  {
    "url": "js/app.js",
    "revision": "f87ddcb5c7499c8b31d8186584691a39"
  },
  {
    "url": "js/manifest.js",
    "revision": "198c7df2cebcc2b8aa493e8b57cba1df"
  },
  {
    "url": "js/vendor.js",
    "revision": "c88987180c6420c65f7a99b40681f376"
  },
  {
    "url": "sw-base.js",
    "revision": "552448c0a4a2254bcbcf26f7b7a7bb10"
  },
  {
    "url": "sw.js",
    "revision": "e11b3436492e342c4ff72d6b86653adb"
  },
  {
    "url": "workbox-v3.0.1/workbox-background-sync.dev.js",
    "revision": "36533f650dbb06e4d479e3543e324be8"
  },
  {
    "url": "workbox-v3.0.1/workbox-background-sync.prod.js",
    "revision": "d78e2364e41d7fce06419042c1c595c1"
  },
  {
    "url": "workbox-v3.0.1/workbox-broadcast-cache-update.dev.js",
    "revision": "776bc201b74b14f8637ab428df9b63cf"
  },
  {
    "url": "workbox-v3.0.1/workbox-broadcast-cache-update.prod.js",
    "revision": "934891f61b11e9c051906f53324d159a"
  },
  {
    "url": "workbox-v3.0.1/workbox-cache-expiration.dev.js",
    "revision": "1d94eca0a0c20d5c02521cf752545d9d"
  },
  {
    "url": "workbox-v3.0.1/workbox-cache-expiration.prod.js",
    "revision": "33750d9ba165fe23f9dea02272db4eda"
  },
  {
    "url": "workbox-v3.0.1/workbox-cacheable-response.dev.js",
    "revision": "8b7d6e583bdbc2aba21c560e90beb986"
  },
  {
    "url": "workbox-v3.0.1/workbox-cacheable-response.prod.js",
    "revision": "82e09431bd4f19afddee2ade24911529"
  },
  {
    "url": "workbox-v3.0.1/workbox-core.dev.js",
    "revision": "1d245db4168ad653c8f5f5d6e63ad2ca"
  },
  {
    "url": "workbox-v3.0.1/workbox-core.prod.js",
    "revision": "d63d487fd91e4223a1f5bf87f994cd8d"
  },
  {
    "url": "workbox-v3.0.1/workbox-google-analytics.dev.js",
    "revision": "f8633eb9a13ae40486537890fd6db049"
  },
  {
    "url": "workbox-v3.0.1/workbox-google-analytics.prod.js",
    "revision": "d246feb57451b67393ef0775cc2362fb"
  },
  {
    "url": "workbox-v3.0.1/workbox-precaching.dev.js",
    "revision": "e5aeb8620f27d3c775b1708e25dd2188"
  },
  {
    "url": "workbox-v3.0.1/workbox-precaching.prod.js",
    "revision": "047b5fda9a8c02de8c16a7dd13b5b829"
  },
  {
    "url": "workbox-v3.0.1/workbox-routing.dev.js",
    "revision": "5a3a5b3ec0d8cb345b90cc31ffeed751"
  },
  {
    "url": "workbox-v3.0.1/workbox-routing.prod.js",
    "revision": "129f5adfcbedb0a93121814e68164439"
  },
  {
    "url": "workbox-v3.0.1/workbox-strategies.dev.js",
    "revision": "9775b2b9f0af5db8252d614f2807a124"
  },
  {
    "url": "workbox-v3.0.1/workbox-strategies.prod.js",
    "revision": "5c404cfe1333803c885a50af87fb90c4"
  },
  {
    "url": "workbox-v3.0.1/workbox-sw.js",
    "revision": "060adeb4aef35c5028563db0c51afa34"
  },
  {
    "url": "fonts/vendor/bootstrap-sass/bootstrap/glyphicons-halflings-regular.eot",
    "revision": "f4769f9bdb7466be65088239c12046d1"
  },
  {
    "url": "fonts/vendor/bootstrap-sass/bootstrap/glyphicons-halflings-regular.svg",
    "revision": "f721466883998665b87923b92dea655b"
  },
  {
    "url": "fonts/vendor/bootstrap-sass/bootstrap/glyphicons-halflings-regular.ttf",
    "revision": "e18bbf611f2a2e43afc071aa2f4e1512"
  },
  {
    "url": "fonts/vendor/bootstrap-sass/bootstrap/glyphicons-halflings-regular.woff",
    "revision": "fa2772327f55d8198301fdb8bcfc8158"
  },
  {
    "url": "fonts/vendor/bootstrap-sass/bootstrap/glyphicons-halflings-regular.woff2",
    "revision": "448c34a56d699c29117adc64c43affeb"
  },
  {
    "url": "/",
    "revision": "66129ed0d39b52e6fa0fc4849bf4ff32"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/");

workbox.routing.registerRoute(/http:\/\/localhost/, workbox.strategies.networkFirst({ cacheName: "Forum-local", plugins: [] }), 'GET');
workbox.routing.registerRoute(/https:\/\/fonts.(googleapis|gstatic).com/, workbox.strategies.cacheFirst({ cacheName: "google-fonts", plugins: [] }), 'GET');
