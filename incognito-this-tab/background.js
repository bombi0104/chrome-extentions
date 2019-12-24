chrome.browserAction.onClicked.addListener(function(tab) {
  // console.log(tab);
  chrome.tabs.query(
    { active: true, windowId: chrome.windows.WINDOW_ID_CURRENT },
    function(tabs) {
      console.log(tabs[0].url);
      chrome.windows.create({ url: tabs[0].url, incognito: true });
    }
  );
});
