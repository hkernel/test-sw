 
if ('serviceWorker' in navigator) {
	  navigator.serviceWorker.register('/test-ws/sw.js')
	  .then(function(reg) {	// success
	    console.log('sw.js registered succesfully!', reg);
	  }).catch(function(err) { // failure
	    console.log('sw.js registration error!', err);
	  });
	}












var body = document.querySelector('body');
var myImage = new Image();

imgLoad('img/logo.png').then(function(response) {
  var imageURL = window.URL.createObjectURL(response);
  myImage.src = imageURL;
  body.appendChild(myImage);
}, function(Error) {
  console.log(Error);
});


function imgLoad(url) {
	  return new Promise(function(doResolve, doReject) {      
	    var request = new XMLHttpRequest();
	    request.open('GET', url);
	    request.responseType = 'blob';

	    request.onload = function() {
	      if (request.status == 200) {
	    	  doResolve(request.response);
	      } else {
	    	  doReject(Error('Image didn\'t load successfully; error code:' + request.statusText));
	      }
	    };

	    request.onerror = function() {
	    	doReject(Error('There was a network error.'));
	    };

	    request.send();
	  });
	}