<template>
  <div class="icon-more-vert cr-icon-button" title="More actions">
    <div id="icon"><div id="maskedImage"></div></div>
  </div>
</template>

<style scoped>
.icon-more-vert {
  /* ./icon_more_vert.svg */
  --cr-icon-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iIzVGNjM2OCI+PHBhdGggZD0iTTEyIDhjMS4xIDAgMi0uOSAyLTJzLS45LTItMi0yLTIgLjktMiAyIC45IDIgMiAyem0wIDJjLTEuMSAwLTIgLjktMiAycy45IDIgMiAyIDItLjkgMi0yLS45LTItMi0yem0wIDZjLTEuMSAwLTIgLjktMiAycy45IDIgMiAyIDItLjkgMi0yLS45LTItMi0yeiIvPjwvc3ZnPg==");
}

.cr-icon-button {
  --cr-icon-button-fill-color: var(--google-grey-700);
  --cr-icon-button-icon-start-offset: 0;
  --cr-icon-button-icon-size: 20px;
  --cr-icon-button-size: 36px;
  --cr-icon-button-height: var(--cr-icon-button-size);
  --cr-icon-button-transition: 150ms ease-in-out;
  --cr-icon-button-width: var(--cr-icon-button-size);
  -webkit-tap-highlight-color: transparent;
  border-radius: 50%;
  color: var(--cr-icon-button-stroke-color, var(--cr-icon-button-fill-color));
  cursor: pointer;
  display: inline-flex;
  flex-shrink: 0;
  height: var(--cr-icon-button-height);
  margin-inline-end: var(
    --cr-icon-button-margin-end,
    var(--cr-icon-ripple-margin)
  );
  margin-inline-start: var(--cr-icon-button-margin-start);
  outline: 0;
  overflow: hidden;
  user-select: none;
  vertical-align: middle;
  width: var(--cr-icon-button-width);
}

.cr-icon-button:hover {
  background-color: var(
    --cr-icon-button-hover-background-color,
    var(--cr-hover-background-color)
  );
}

.cr-icon-button:focus-visible:focus {
  box-shadow: inset 0 0 0 2px
    var(--cr-icon-button-focus-outline-color, var(--cr-focus-outline-color));
}

.cr-icon-button:active {
  background-color: var(
    --cr-icon-button-active-background-color,
    var(--cr-active-background-color)
  );
}
.cr-icon-button #maskedImage {
  -webkit-mask-image: var(--cr-icon-image);
  mask-image: var(--cr-icon-image);
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: var(--cr-icon-button-icon-size);
  mask-size: var(--cr-icon-button-icon-size);
  -webkit-transform: var(--cr-icon-image-transform, none);
  transform: var(--cr-icon-image-transform, none);
  background-color: var(--cr-icon-button-fill-color);
  height: 100%;
  transition: background-color var(--cr-icon-button-transition);
  width: 100%;
}

#icon {
  align-items: center;
  border-radius: 4px;
  display: flex;
  height: 100%;
  justify-content: center;
  padding-inline-start: var(--cr-icon-button-icon-start-offset);
  position: relative;
  width: 100%;
}

@media (prefers-color-scheme: dark) {
  .cr-icon-button {
    --cr-icon-button-fill-color: var(--google-grey-500);
  }
}
</style>
