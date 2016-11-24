this.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/test-sw/',
        '/test-sw/index.html',
        '/test-sw/app.js',
        '/test-sw/img/logo.png'
      ]);
    })
  );
});

this.addEventListener('activate', function(event) {
	 console.log("sw activate event");
});
