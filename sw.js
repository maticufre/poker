/* Modo sin conexión. La pantalla principal se pide primero a internet (así siempre tenés la última versión)
   y, si no hay conexión o tarda, se usa la copia guardada. El resto de los archivos se sirve al instante. */
const V = 'poker-v3';
const CORE = ['./', 'index.html', 'manifest.webmanifest', 'apple-touch-icon.png', 'icon-192.png', 'icon-512.png'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(V).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== V).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
async function networkFirst(r){
  const c = await caches.open(V);
  try {
    const res = await Promise.race([fetch(r), new Promise((_, rej) => setTimeout(() => rej(new Error('timeout')), 3500))]);
    if (res && res.ok) c.put('index.html', res.clone());
    return res;
  } catch (err) {
    return (await c.match('index.html')) || (await c.match('./')) || Response.error();
  }
}
self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.method !== 'GET') return;
  if (r.mode === 'navigate') { e.respondWith(networkFirst(r)); return; }
  e.respondWith(caches.open(V).then(async c => {
    const hit = await c.match(r);
    const net = fetch(r).then(res => { if (res && (res.ok || res.type === 'opaque')) c.put(r, res.clone()); return res; }).catch(() => hit);
    if (hit) { e.waitUntil(net); return hit; }
    return net;
  }));
});
