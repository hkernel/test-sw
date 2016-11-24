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

this.addEventListener('fetch', function(event) {
	  event.respondWith(
	    caches.match(event.request).then(function(resp) {
	      return resp || fetch(event.request).then(function(response) {
	        caches.open('v1').then(function(cache) {
	          cache.put(event.request, response.clone());
	        });
	        return response;
	      });
	    }).catch(function() {
	      return caches.match('/test-sw/img/logo.png');
	    })
	  );
	});