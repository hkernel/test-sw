

this.addEventListener('install', function(event) {
	  event.waitUntil(
	    console.log("service worker installing");
	  );
	});

this.addEventListener('activate', function(event) {
	 console.log("sw activate event");
});
