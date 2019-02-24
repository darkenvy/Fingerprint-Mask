import { GET_CONTENT_SETTINGS } from './constants';

console.log('loaded... test');

function injectFunction(func) {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.textContent = "(" + func + ")(" + JSON.stringify(switches) + ");";
  document.documentElement.appendChild(script);
}

chrome.runtime.sendMessage(GET_CONTENT_SETTINGS, function(response) {
  console.log('response', response);
});
