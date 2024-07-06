const typeAndOption = {
  all: {
    cookies: true,
    localStorage: true,
    cache: true,
    cacheStorage: true,
    indexedDB: true,
    webSQL: true,
    fileSystems: true,
  },
  localStorage: {
    localStorage: true,
  },
  sessionStorage: {
    sessionStorage: true,
  },
  cookies: {
    cookies: true,
  },
};

document.getElementById("all-clear-btn").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const activeTab = tabs[0];
    chrome.browsingData.remove(
      {
        origins: [activeTab.url],
      },
      {
        ...typeAndOption.all,
      },
      () => {
        // Reload the tab after clearing data
        chrome.tabs.reload(activeTab.id, { bypassCache: true });
      }
    );
  });
});

document.getElementById("local-clear-btn").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const activeTab = tabs[0];
    chrome.browsingData.removeLocalStorage(
      {
        origins: [activeTab.url],
      },
      () => {
        // Reload the tab after clearing data
        chrome.tabs.reload(activeTab.id, { bypassCache: true });
      }
    );
  });
});

// document.getElementById("session-clear-btn").addEventListener("click", () => {
//   chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//     const activeTab = tabs[0];
//     chrome.browsingData.remove(
//       {
//         origins: [activeTab.url],
//       },
//       {
//         ...typeAndOption.sessionStorage,
//       },
//       () => {
//         // Reload the tab after clearing data
//         chrome.tabs.reload(activeTab.id, { bypassCache: true });
//       }
//     );
//   });
// });

document.getElementById("cookies-clear-btn").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const activeTab = tabs[0];
    chrome.browsingData.removeCookies(
      {
        origins: [activeTab.url],
      },

      () => {
        // Reload the tab after clearing data
        chrome.tabs.reload(activeTab.id, { bypassCache: true });
      }
    );
  });
});
