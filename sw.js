const CACHE_NAME = 'startpage-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/styles.css',
    '/script.js',
    '/icons/mostly_clear_day.svg',
    '/icons/Print_Glyph_Green.png',
    '/icons/github-mark.png',
    '/icons/github-mark-white.png',
    '/icons/google-ai-studio-logo.png',
    '/icons/deepl-1.svg',
    '/icons/Google_Translate_logo.svg',
    '/icons/Google_Calendar_icon_(2020).svg',
    'https://gnome.pages.gitlab.gnome.org/libadwaita/css/adwaita-1.css'
];

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                return cache.addAll(urlsToCache);
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
            }
            )
    );
});