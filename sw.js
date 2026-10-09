const CACHE_NAME = "indecisive-v6";
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-180.png",
  "./fonts/JosefinSans.woff2"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Network-first (with a 2.5s timeout) so updates show up as soon as you're online,
// falling back to the cache so the app still works fully offline.
self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET" || new URL(req.url).origin !== self.location.origin) return;

  event.respondWith(
    new Promise((resolve, reject) => {
      const timer = setTimeout(() => reject(new Error("timeout")), 2500);
      fetch(req)
        .then((res) => {
          clearTimeout(timer);
          if (res && res.ok) {
            const copy = res.clone();
            caches.open(CACHE_NAME).then((c) => c.put(req, copy));
          }
          resolve(res);
        })
        .catch((err) => { clearTimeout(timer); reject(err); });
    }).catch(() =>
      caches.match(req, { ignoreSearch: true }).then(
        (cached) => cached || (req.mode === "navigate" ? caches.match("./index.html") : undefined)
      )
    )
  );
});
