this.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/hkernel/test-sw/master/',
        '/hkernel/test-sw/master/index.html',
        '/hkernel/test-sw/master/app.js',
        '/hkernel/test-sw/master/img/logo.png'
      ]);
    })
  );
});

this.addEventListener('activate', function(event) {
	 console.log("sw activate event");
});
