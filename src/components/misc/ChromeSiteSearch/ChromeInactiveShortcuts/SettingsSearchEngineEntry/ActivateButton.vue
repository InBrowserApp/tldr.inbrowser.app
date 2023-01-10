<template>
  <div
    class="secondary-button cr-button"
    id="activate"
    role="button"
    tabindex="0"
    aria-disabled="false"
  >
    Activate
  </div>
</template>

<style scoped>
.cr-button {
  --active-shadow-rgb: var(--google-grey-800-rgb);
  --active-shadow-action-rgb: var(--google-blue-500-rgb);
  --bg-action: var(--google-blue-600);
  --border-color: var(--google-grey-300);
  --disabled-bg-action: var(--google-grey-100);
  --disabled-bg: white;
  --disabled-border-color: var(--google-grey-100);
  --disabled-text-color: var(--google-grey-600);
  --focus-shadow-color: rgba(var(--google-blue-600-rgb), 0.4);
  --hover-bg-action: rgba(var(--google-blue-600-rgb), 0.9);
  --hover-bg-color: rgba(var(--google-blue-500-rgb), 0.04);
  --hover-border-color: var(--google-blue-100);
  --hover-shadow-action-rgb: var(--google-blue-500-rgb);
  --ink-color-action: white;
  --ink-color: var(--google-blue-600);
  --ripple-opacity-action: 0.32;
  --ripple-opacity: 0.1;
  --text-color-action: white;
  --text-color: var(--google-blue-600);
}

@media (prefers-color-scheme: dark) {
  .cr-button {
    --active-bg: black
      linear-gradient(rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.06));
    --active-shadow-rgb: 0, 0, 0;
    --active-shadow-action-rgb: var(--google-blue-500-rgb);
    --bg-action: var(--google-blue-300);
    --border-color: var(--google-grey-700);
    --disabled-bg-action: var(--google-grey-800);
    --disabled-bg: transparent;
    --disabled-border-color: var(--google-grey-800);
    --disabled-text-color: var(--google-grey-500);
    --focus-shadow-color: rgba(var(--google-blue-300-rgb), 0.5);
    --hover-bg-action: var(--bg-action)
      linear-gradient(rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.08));
    --hover-bg-color: rgba(var(--google-blue-300-rgb), 0.08);
    --ink-color-action: black;
    --ink-color: var(--google-blue-300);
    --ripple-opacity-action: 0.16;
    --ripple-opacity: 0.16;
    --text-color-action: var(--google-grey-900);
    --text-color: var(--google-blue-300);
  }
}

.cr-button {
  --paper-ripple-opacity: var(--ripple-opacity);
  -webkit-tap-highlight-color: transparent;
  align-items: center;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  box-sizing: border-box;
  color: var(--text-color);
  cursor: pointer;
  display: inline-flex;
  flex-shrink: 0;
  font-weight: 500;
  height: var(--cr-button-height);
  justify-content: center;
  min-width: 5.14em;
  outline-width: 0;
  overflow: hidden;
  padding: 8px 16px;
  position: relative;
  user-select: none;
}

@media (forced-colors: active) {
  :host-context(.focus-outline-visible):host(:focus) {
    outline: var(--cr-focus-outline-hcm);
  }
}

.cr-button:active {
  background: var(--active-bg);
  box-shadow: var(
    --active-shadow,
    0 1px 2px 0 rgba(var(--active-shadow-rgb), 0.3),
    0 3px 6px 2px rgba(var(--active-shadow-rgb), 0.15)
  );
}

.cr-button:hover {
  background-color: var(--hover-bg-color);
}

@media (prefers-color-scheme: light) {
  .cr-button:hover {
    border-color: var(--hover-border-color);
  }
}
</style>
