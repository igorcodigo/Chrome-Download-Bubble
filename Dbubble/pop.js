let downloadList = document.getElementById('download-list');

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  let div = document.createElement('div');
  div.textContent = message.fileName;
  downloadList.appendChild(div);
});
