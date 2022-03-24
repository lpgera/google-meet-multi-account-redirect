chrome.webRequest.onBeforeRequest.addListener((details) => {
      const url = new URL(details.url)
      if (!url.searchParams.get('authuser') && details.type === "main_frame") {
        url.searchParams.set('authuser', '1')
        return { redirectUrl: url.href }
      }
    },
    { urls: ["https://meet.google.com/*"] },
    ["blocking"]
  )
