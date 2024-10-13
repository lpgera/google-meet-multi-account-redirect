# Google Meet Default Account Switcher

This Chrome extension automatically switches to a specified default Google account when
opening [Google Meet](https://meet.google.com).

## Features

- Automatically redirects to a specified default account when opening Google Meet
- Allows manual account switching by modifying `authuser=X` in the URL
- Lightweight and easy to use

## Installation

1. Clone this repository or download the source code
2. Open Chrome and navigate to `chrome://extensions`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked" and select the directory containing the extension files

## Configuration

To change the default account, modify the `DEFAULT_ACCOUNT_ID` constant in the [service-worker.js](./service-worker.js)
script:

```javascript
const DEFAULT_ACCOUNT_ID = '1' // Change this to your preferred account index
```

Account indices typically start at 0 for the first logged-in account.

## Usage

Once installed, the extension will automatically redirect to your default account when opening Google Meet. To switch to
a different account, simply modify `authuser=X` in the URL, where X is the account index.

## How It Works

The extension uses Chrome's declarativeNetRequest API to:

1. Allow requests to Google Meet with an existing `authuser` parameter
2. Redirect requests to Google Meet without an `authuser` parameter, adding the default account ID
