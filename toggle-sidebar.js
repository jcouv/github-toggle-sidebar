
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create(
  {
    id: "toggleGitHubSidebar",
    title: "Toggle GitHub sidebar",
    contexts: ["page"],
    "documentUrlPatterns": ["https://github.com/*/pull/*", "https://github.com/*/issues/*"]
  });
});

chrome.contextMenus.onClicked.addListener(function(info, tab) 
{
  if (info.menuItemId == "toggleGitHubSidebar") 
  {
    chrome.tabs.sendMessage(tab.id, "toggleGitHubSidebar", { frameId: info.frameId });
  }
});
