//asignar un nombre y versión de cache
const CACHE_NAME = 'v1_cache_programador_fitness',
urlsToCache = [
    './',
    'https://fonts.googleapis.com/css?family=Raleway:400,700',
    'https://fonts.gstatic.com/s/raleway/v12/1Ptrg8zYS_SKggPNwJYtWqZPAA.woff2',
    'https://use.fontawesome.com/release/v5.0.7/css/all.css',
    'https://use.fontawesome.com/release/v5.0.6/webfonts/fa-brands-400.woff2',
    './style.css',
    './scripts.js',
    './img/ProgramadorFitness.png',
    './img/favicon.png'
];

//durante la fase de instalación, generalmente se almacena en caché los activos estáticos del sitio
self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => {
            return cache.addAll(urlsToCache)
            .then(() => self.skipWaiting())
        })
        .catch(err => console.log('Falló registro de cache', err))
    )
})

//una vez que se instala el SW, se activa y busca los recursos para hacer que funcione sin conexión
self.addEventListener('activate', e => {
    //Para conocer si la información en el cache a cambiado
    const cacheWhiteList = [CACHE_NAME]
    e.waitUntil(
        caches.keys()
        .then(cachesNames => {
            cachesNames.map(cacheName => {
                //Eliminamos lo que ya no se necesita en cache
                if(cacheWhiteList.indexOf(cacheName) === -1){
                    return caches.delete(cacheName)
                }
            })
        })
        //Le indica al SW activar el cache actual
        .then(() => self.clients.claim())
    )
})

//recupera todos los recursos del navegador
self.addEventListener('fetch', e => {
    //Responde ya sea con el objeto en caché o continuar y buscar la url real
    e.respondWith(
        caches.match(e.request)
        .then(res => {
            if(res){
                //recuperar del cache
                return res
            }
            //recuperar de la petición a la url
            return fetch(e.request)
        })
    )
})