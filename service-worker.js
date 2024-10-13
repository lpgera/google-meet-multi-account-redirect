const DEFAULT_ACCOUNT_ID = '1'

chrome.declarativeNetRequest.updateDynamicRules({
  removeRuleIds: [1, 2],
  addRules: [
    {
      id: 1,
      priority: 2,
      action: { type: 'allow' },
      condition: {
        urlFilter: 'https://meet.google.com/*?*authuser=*',
        resourceTypes: ['main_frame']
      }
    },
    {
      id: 2,
      priority: 1,
      action: {
        type: 'redirect',
        redirect: {
          transform: {
            queryTransform: {
              addOrReplaceParams: [{ key: 'authuser', value: DEFAULT_ACCOUNT_ID }],
            },
          },
        },
      },
      condition: {
        urlFilter: 'https://meet.google.com/*',
        resourceTypes: ['main_frame'],
      },
    },
  ],
})
