alert("background");


var successURL = 'https://www.facebook.com/connect/login_success.html';
function onFacebookLogin() {
	if (!localStorage.accessToken) {
		chrome.tabs.getAllInWindow(null, function(tabs) {
			for (var i = 0; i < tabs.length; i++) {
				if (tabs[i].url.indexOf(successURL) == 0) {
					var params = tabs[i].url.split('#')[1];
	access = params.split('&')[0]
					console.log(access);
					localStorage.accessToken = access;
					chrome.tabs.onUpdated.removeListener(onFacebookLogin);
					return;
				}
			}
		});
	}
}
chrome.tabs.onUpdated.addListener(onFacebookLogin);

chrome.runtime.onMessage.addListener(
		  function(request, sender, sendResponse) {
			 window.fbAsyncInit = function() {
				FB.init({
					appId: 'your app id',
					status: true,
					cookie: true,
					xfbml: true,
					channelUrl : 'http://WWW.MYDOMAIN.COM/channel.html',
					oauth  : true
				});

				FB.getLoginStatus(function(response) {
					if (response.authResponse) {
						  alert("logged in");} 
					else {
						// no user session available, someone you dont know                                                                                                            
					}
				});
				FB.api('/me', function(response){
					sendResponse({farewell: response.name});
			}
			  };
			  (function() {
				var e = document.createElement('script'); e.async = true;
				e.src = document.location.protocol +
				  '//connect.facebook.net/en_US/all.js';
				document.getElementById('fb-root').appendChild(e);
			  }());

			if (request.greeting == "hello")
			  sendResponse({farewell: "goodbye"});
		  });

