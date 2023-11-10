chrome.downloads.onCreated.addListener(downloadItem => {
  console.log('Download iniciado:', downloadItem);
});

chrome.downloads.onChanged.addListener(downloadDelta => {
  if (downloadDelta.state && downloadDelta.state.current === 'complete') {
    console.log('Download concluído:', downloadDelta);
  }
});
chrome.downloads.onCreated.addListener(downloadItem => {
    const fileName = downloadItem.filename.substring(0, 3); // Pegando os primeiros 3 caracteres
    chrome.runtime.sendMessage({ fileName: fileName });
  });