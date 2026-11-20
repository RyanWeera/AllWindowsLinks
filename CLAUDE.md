# All Window Links
Chrome/Brave extension (Manifest V3) that copies every tab link in the current window, one per line.

@DIRECTORY_MAP.md

## Stack
Plain JavaScript, Manifest V3. No build step, no dependencies.

## Commands
- Run (dev): load the project folder with "Load unpacked" at `brave://extensions` or `chrome://extensions`, then click reload there after each edit.
- Syntax check: `node --input-type=module --check < popup.js` (the popup script is an ES module)
- Validate manifest: `node -e "JSON.parse(require('fs').readFileSync('manifest.json','utf8'))"`

## Conventions
- Output format is one link per line, joined with `\n`, no trailing newline.

## Gotchas
- `navigator.clipboard.writeText` only works while the popup has focus, so the copy runs in the popup, not in a service worker. In Brave the popup script can run before the popup has focus, so it waits for the `focus` event first.
