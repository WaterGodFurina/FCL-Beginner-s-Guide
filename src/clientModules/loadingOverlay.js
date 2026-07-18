// 首屏加载覆盖层的移除逻辑。
// 覆盖层本身由 docusaurus.config.js 中的 headTags 内联注入（JS 加载前即显示），
// 这里在整站资源加载完成后将其淡出并移除，避免首屏图标/字体闪烁的丑陋过程。

const OVERLAY_ID = 'fcl-loading-overlay';
const HIDDEN_CLASS = 'fcl-loading-hidden';
// 兜底：过渡动画未触发时也强制移除
const REMOVE_FALLBACK_MS = 800;

function hideOverlay() {
  const overlay = document.getElementById(OVERLAY_ID);
  if (!overlay) return;

  overlay.classList.add(HIDDEN_CLASS);
  overlay.addEventListener('transitionend', () => overlay.remove(), {
    once: true,
  });
  setTimeout(() => overlay.remove(), REMOVE_FALLBACK_MS);
}

if (typeof window !== 'undefined') {
  if (document.readyState === 'complete') {
    hideOverlay();
  } else {
    window.addEventListener('load', hideOverlay, { once: true });
  }
}
