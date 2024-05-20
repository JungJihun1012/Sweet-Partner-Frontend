// install event
self.addEventListener("install", () => {
  // console.log("[Service Worker] installed");
});

// activate event
// eslint-disable-next-line @typescript-eslint/no-unused-vars
self.addEventListener("activate", (e) => {
  // console.log("[Service Worker] actived", e);
});

// fetch event
// eslint-disable-next-line @typescript-eslint/no-unused-vars
self.addEventListener("fetch", (e) => {
  // console.log("[Service Worker] fetched resource " + e.request.url);
});
