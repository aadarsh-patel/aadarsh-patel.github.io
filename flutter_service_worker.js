'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/assets/AssetManifest.json": "15ae2edb5aa180706e6c5d3889b5d24e",
"/assets/assets/fonts/Varela-Regular.ttf": "bb4e479a2da1aaca15c79131e369cd03",
"/assets/assets/images/code_logo.png": "1bbdfb6ac1300c32ddfcea7c47337e0a",
"/assets/assets/images/code_title.png": "37df918450809d704b58033942a87889",
"/assets/assets/images/git_logo.png": "f177ec1bd1e8554289c143313eb6a7c0",
"/assets/assets/images/git_title.png": "5d6645e84a830c44fcaf0f6e2fb03028",
"/assets/assets/images/link_logo.png": "abdc17e87cf1277b10752346cfefc87e",
"/assets/assets/images/link_title.png": "586ed2f39865ff0b767fdccfd7a6adec",
"/assets/assets/images/snow2.jpg": "8eb078fb8504f86bcf76f22fc4bc9b21",
"/assets/assets/images/stack_logo.png": "c1b236166363debdcc230f639c87f759",
"/assets/assets/images/stack_title.png": "c9d0d4c993ffea8c72a223920f7acef9",
"/assets/assets/images/test.png": "7925f6ac5a2be8aa9812e6ac1ca900be",
"/assets/FontManifest.json": "4f5566052150b8c319d166c6281396ad",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/LICENSE": "3fdcb4ad8cb12d6b05361f9d7bd6c023",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/index.html": "edd3712349f81e12180e36e5021e82cb",
"/main.dart.js": "e0767bf5506dcaf00560eeac54424e51",
"/manifest.json": "14e919b7b1dde549ab334b7ee3ce8412"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
