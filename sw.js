

self.addEventListener('install', function(event) {
	  event.waitUntil(
	    console.log("service worker installing");
	  );
	});

self.addEventListener('activate', function(event) {
	 console.log("sw activate event");
});
