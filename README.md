# All Window Links

A browser extension for Chrome and Brave. Click its icon and it copies the link of every tab in the current window to the clipboard, one link per line:

```
https://example.com/page-one
https://example.com/page-two
https://example.com/page-three
```

## Install (Brave or Chrome)

1. Download this repository (Code > Download ZIP) and unzip it, or clone it.
2. Open `brave://extensions` (Brave) or `chrome://extensions` (Chrome).
3. Turn on **Developer mode** (top right).
4. Click **Load unpacked** and select the folder that contains `manifest.json`.
5. Pin the extension from the puzzle-piece menu so the icon is always visible.

## Use

Click the extension icon. The popup shows how many links it copied. Paste anywhere.

## Permissions

`tabs`: needed to read the address of each open tab. The extension sends nothing over the network.

The copied links include everything in each address, such as query strings, and any app that reads your clipboard can see them.
