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
			console.log(sender.tab ?
						"from a content script:" + sender.tab.url :
						"from the extension");
			if (request.greeting == "hello")
			  sendResponse({farewell: "goodbye"});
		  });

