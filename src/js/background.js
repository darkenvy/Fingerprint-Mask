import '../img/icon-128.png'
import '../img/icon-34.png'

console.log('background hello')


function onMessage(request, sender, sendResponse) {
  console.log('message')

  sendResponse({
    cmd: 'CONTENT_SETTINGS',
    settings: {
      a: true,
      b: false,
    }
  })
}

chrome.runtime.onMessage.addListener(onMessage);