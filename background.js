chrome.browsingData.remove({}, {
    "cookies": true
}, function() {
    console.log("Cookies deleted.");
});
