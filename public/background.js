chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "open_popup") {
    // Open the extension popup
    chrome.action.openPopup(); // Note: Requires Chrome 102+ and manifest v3
  }
});