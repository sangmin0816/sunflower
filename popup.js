document.addEventListener('DOMContentLoaded', function () {
	// When content is loaded
	chrome.tabs.query({currentWindow: true, active: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, 'start');
	});
}, false);

// document.addEventListener('DOMContentLoaded', function () {
// 	// When content is loaded
//   	document.getElementById('btn').addEventListener('click', on_click, false);

//     // Tell the page to highlight
//   	function on_click() {
//   		chrome.tabs.query({currentWindow: true, active: true}, function(tabs) {
//   			chrome.tabs.sendMessage(tabs[0].id, 'start');
//   		});
// 	}
	
// }, false);

const $toggle = document.querySelector(".toggleSwitch");

chrome.storage.local.get(["switch"], function (result) {
  if (result.switch) {
    $toggle.className = "toggleSwitch actived-already";
  }
});

$toggle.onclick = () => {
  if ($toggle.className === "toggleSwitch actived-already") {
    $toggle.className = "toggleSwitch active";
  }

  $toggle.classList.toggle("active");
  if ($toggle.className === "toggleSwitch active") {
    chrome.storage.local.set({ switch: true });
  } else {
    chrome.storage.local.set({ switch: false });
  }
};