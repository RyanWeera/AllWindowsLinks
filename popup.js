const status = document.getElementById('status');
const tabs = await chrome.tabs.query({ currentWindow: true });
// A tab that is still loading has its address in pendingUrl.
const links = tabs.map((tab) => tab.url || tab.pendingUrl).filter(Boolean);

if (links.length === 0) {
  status.textContent = 'No links found';
} else {
  try {
    await navigator.clipboard.writeText(links.join('\n'));
    status.textContent = `Copied ${links.length} link${links.length === 1 ? '' : 's'}`;
  } catch (err) {
    status.textContent = `Copy failed: ${err.message}`;
  }
}
