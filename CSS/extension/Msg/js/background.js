/***
 	 runtime.onMessage:
  	仅在扩展和网页间通信时才会用到
	chrome.runtime.onMessage.addListener(callback)
	
	callback 接受三个参数： message[消息内容]  sender[消息发送者相关] sendResponse[相应函数]

***/


chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
	if (message == 'Hello') {
		sendResponse("Hello from background.js")
	}
})