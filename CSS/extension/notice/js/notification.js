chrome.notifications.create("test", {
	type: "basic",
	iconUrl: "../constellation_48.png",
	title: "Notification Demo",
	message: "Content here"
})

serTimeout(function() {
	chrome.notifications.clear("test")
}, 3000)