

/*document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('checkPage');
  checkPageButton.addEventListener('click', function() {
	var url = "https://shecodesconnect.com/";
	chrome.cookies.remove({"url": url, "name": "MoodleSession"});
    });
  }, false);
}, false);
*/
function done(details){
	if(details == null){
		var err = chrome.runtime.lastError;
		renderStatus(err.message);
	} else {
		renderStatus("Done!");
		var checkPageButton = document.getElementById('checkPage');
		checkPageButton.hidden = true;
	}
}

function removeShecodesCookie(){
	var url = "https://shecodesconnect.com/";
	renderStatus('Removing cookie for ' + url);
	chrome.cookies.remove({"url": url, "name": "MoodleSession"}, done);
}

function renderStatus(statusText) {
  document.getElementById('status').textContent = statusText;
}

document.addEventListener('DOMContentLoaded', function() {
  //onload();
  var checkPageButton = document.getElementById('checkPage');
  checkPageButton.addEventListener('click', removeShecodesCookie)
  //document.body.addEventListener('click', focusFilter);
  //document.querySelector('#remove_button').addEventListener('click', removeAll);
  //document.querySelector('#filter_div input').addEventListener(
    //  'input', reloadCookieTable);
  //document.querySelector('#filter_div button').addEventListener(
    //  'click', resetFilter);
});