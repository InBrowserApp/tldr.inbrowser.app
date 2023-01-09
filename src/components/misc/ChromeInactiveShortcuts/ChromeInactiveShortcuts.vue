<template>
  <div class="chrome-inactive-shortcuts">
    <InactiveShortcutsHeading />
    <ShortcutsTable />
  </div>
</template>

<script lang="ts" setup>
import InactiveShortcutsHeading from "./InactiveShortcutsHeading.vue";
import ShortcutsTable from "./ShortcutsTable.vue";
</script>

<style scoped>
.chrome-inactive-shortcuts {
  border: 1px solid #e8e8e8;
  padding-bottom: 20px;
}

@media (prefers-color-scheme: dark) {
  .chrome-inactive-shortcuts {
    border: 1px solid #0000;
    background-color: rgba(255, 255, 255, 0.1);
  }
}

.chrome-inactive-shortcuts {
  font-family: Roboto, "Segoe UI", Tahoma, sans-serif;
}

.chrome-inactive-shortcuts {
  --google-blue-50-rgb: 232, 240, 254;
  --google-blue-50: rgb(var(--google-blue-50-rgb));
  --google-blue-100-rgb: 210, 227, 252;
  --google-blue-100: rgb(var(--google-blue-100-rgb));
  --google-blue-200-rgb: 174, 203, 250;
  --google-blue-200: rgb(var(--google-blue-200-rgb));
  --google-blue-300-rgb: 138, 180, 248;
  --google-blue-300: rgb(var(--google-blue-300-rgb));
  --google-blue-400-rgb: 102, 157, 246;
  --google-blue-400: rgb(var(--google-blue-400-rgb));
  --google-blue-500-rgb: 66, 133, 244;
  --google-blue-500: rgb(var(--google-blue-500-rgb));
  --google-blue-600-rgb: 26, 115, 232;
  --google-blue-600: rgb(var(--google-blue-600-rgb));
  --google-blue-700-rgb: 25, 103, 210;
  --google-blue-700: rgb(var(--google-blue-700-rgb));
  --google-green-50-rgb: 230, 244, 234;
  --google-green-50: rgb(var(--google-green-50-rgb));
  --google-green-200-rgb: 168, 218, 181;
  --google-green-200: rgb(var(--google-green-200-rgb));
  --google-green-300-rgb: 129, 201, 149;
  --google-green-300: rgb(var(--google-green-300-rgb));
  --google-green-400-rgb: 91, 185, 116;
  --google-green-400: rgb(var(--google-green-400-rgb));
  --google-green-500-rgb: 52, 168, 83;
  --google-green-500: rgb(var(--google-green-500-rgb));
  --google-green-600-rgb: 30, 142, 62;
  --google-green-600: rgb(var(--google-green-600-rgb));
  --google-green-700-rgb: 24, 128, 56;
  --google-green-700: rgb(var(--google-green-700-rgb));
  --google-green-800-rgb: 19, 115, 51;
  --google-green-800: rgb(var(--google-green-800-rgb));
  --google-green-900-rgb: 13, 101, 45;
  --google-green-900: rgb(var(--google-green-900-rgb));
  --google-grey-50-rgb: 248, 249, 250;
  --google-grey-50: rgb(var(--google-grey-50-rgb));
  --google-grey-100-rgb: 241, 243, 244;
  --google-grey-100: rgb(var(--google-grey-100-rgb));
  --google-grey-200-rgb: 232, 234, 237;
  --google-grey-200: rgb(var(--google-grey-200-rgb));
  --google-grey-300-rgb: 218, 220, 224;
  --google-grey-300: rgb(var(--google-grey-300-rgb));
  --google-grey-400-rgb: 189, 193, 198;
  --google-grey-400: rgb(var(--google-grey-400-rgb));
  --google-grey-500-rgb: 154, 160, 166;
  --google-grey-500: rgb(var(--google-grey-500-rgb));
  --google-grey-600-rgb: 128, 134, 139;
  --google-grey-600: rgb(var(--google-grey-600-rgb));
  --google-grey-700-rgb: 95, 99, 104;
  --google-grey-700: rgb(var(--google-grey-700-rgb));
  --google-grey-800-rgb: 60, 64, 67;
  --google-grey-800: rgb(var(--google-grey-800-rgb));
  --google-grey-900-rgb: 32, 33, 36;
  --google-grey-900: rgb(var(--google-grey-900-rgb));
  --google-grey-900-white-4-percent: #292a2d;
  --google-red-300-rgb: 242, 139, 130;
  --google-red-300: rgb(var(--google-red-300-rgb));
  --google-red-500-rgb: 234, 67, 53;
  --google-red-500: rgb(var(--google-red-500-rgb));
  --google-red-600-rgb: 217, 48, 37;
  --google-red-600: rgb(var(--google-red-600-rgb));
  --google-yellow-50-rgb: 254, 247, 224;
  --google-yellow-50: rgb(var(--google-yellow-50-rgb));
  --google-yellow-300-rgb: 253, 214, 51;
  --google-yellow-300: rgb(var(--google-yellow-300-rgb));
  --google-yellow-400-rgb: 252, 201, 52;
  --google-yellow-400: rgb(var(--google-yellow-400-rgb));
  --google-yellow-500-rgb: 251, 188, 4;
  --google-yellow-500: rgb(var(--google-yellow-500-rgb));
  --cr-primary-text-color: var(--google-grey-900);
  --cr-secondary-text-color: var(--google-grey-700);
  --cr-card-background-color: white;
  --cr-card-shadow-color-rgb: var(--google-grey-800-rgb);
  --cr-elevation-1: rgba(var(--cr-card-shadow-color-rgb), 0.3) 0 1px 2px 0,
    rgba(var(--cr-card-shadow-color-rgb), 0.15) 0 1px 3px 1px;
  --cr-elevation-2: rgba(var(--cr-card-shadow-color-rgb), 0.3) 0 1px 2px 0,
    rgba(var(--cr-card-shadow-color-rgb), 0.15) 0 2px 6px 2px;
  --cr-elevation-3: rgba(var(--cr-card-shadow-color-rgb), 0.3) 0 1px 3px 0,
    rgba(var(--cr-card-shadow-color-rgb), 0.15) 0 4px 8px 3px;
  --cr-elevation-4: rgba(var(--cr-card-shadow-color-rgb), 0.3) 0 2px 3px 0,
    rgba(var(--cr-card-shadow-color-rgb), 0.15) 0 6px 10px 4px;
  --cr-elevation-5: rgba(var(--cr-card-shadow-color-rgb), 0.3) 0 4px 4px 0,
    rgba(var(--cr-card-shadow-color-rgb), 0.15) 0 8px 12px 6px;
  --cr-card-shadow: var(--cr-elevation-2);
  --cr-checked-color: var(--google-blue-600);
  --cr-focused-item-color: var(--google-grey-300);
  --cr-form-field-label-color: var(--google-grey-700);
  --cr-hairline-rgb: 0, 0, 0;
  --cr-iph-anchor-highlight-color: rgba(var(--google-blue-600-rgb), 0.1);
  --cr-link-color: var(--google-blue-700);
  --cr-menu-background-color: white;
  --cr-menu-background-focus-color: var(--google-grey-400);
  --cr-menu-shadow: 0 2px 6px var(--paper-grey-500);
  --cr-separator-color: rgba(0, 0, 0, 0.06);
  --cr-title-text-color: rgb(90, 90, 90);
  --cr-toolbar-background-color: white;
  --cr-hover-background-color: rgba(var(--google-grey-900-rgb), 0.1);
  --cr-active-background-color: rgba(var(--google-grey-900-rgb), 0.16);
  --cr-focus-outline-color: rgba(var(--google-blue-600-rgb), 0.4);
}

@media (prefers-color-scheme: dark) {
  .chrome-inactive-shortcuts {
    --cr-primary-text-color: var(--google-grey-200);
    --cr-secondary-text-color: var(--google-grey-500);
    --cr-card-background-color: var(--google-grey-900-white-4-percent);
    --cr-card-shadow-color-rgb: 0, 0, 0;
    --cr-checked-color: var(--google-blue-300);
    --cr-focused-item-color: var(--google-grey-800);
    --cr-form-field-label-color: var(--dark-secondary-color);
    --cr-hairline-rgb: 255, 255, 255;
    --cr-iph-anchor-highlight-color: rgba(var(--google-grey-100-rgb), 0.1);
    --cr-link-color: var(--google-blue-300);
    --cr-menu-background-color: var(--google-grey-900);
    --cr-menu-background-focus-color: var(--google-grey-700);
    --cr-menu-background-sheen: rgba(255, 255, 255, 0.06);
    --cr-menu-shadow: rgba(0, 0, 0, 0.3) 0 1px 2px 0,
      rgba(0, 0, 0, 0.15) 0 3px 6px 2px;
    --cr-separator-color: rgba(255, 255, 255, 0.1);
    --cr-title-text-color: var(--cr-primary-text-color);
    --cr-toolbar-background-color: var(--google-grey-900-white-4-percent);
    --cr-hover-background-color: rgba(255, 255, 255, 0.1);
    --cr-active-background-color: rgba(var(--google-grey-200-rgb), 0.16);
    --cr-focus-outline-color: rgba(var(--google-blue-300-rgb), 0.4);
  }
}

@media (forced-colors: active) {
  .chrome-inactive-shortcuts {
    --cr-focus-outline-hcm: 2px solid transparent;
    --cr-border-hcm: 2px solid transparent;
  }
}

.chrome-inactive-shortcuts {
  --cr-button-edge-spacing: 12px;
  --cr-button-height: 32px;
  --cr-controlled-by-spacing: 24px;
  --cr-default-input-max-width: 264px;
  --cr-icon-ripple-size: 36px;
  --cr-icon-ripple-padding: 8px;
  --cr-icon-size: 20px;
  --cr-icon-button-margin-start: 16px;
  --cr-icon-ripple-margin: calc(var(--cr-icon-ripple-padding) * -1);
  --cr-section-min-height: 48px;
  --cr-section-two-line-min-height: 64px;
  --cr-section-padding: 20px;
  --cr-section-vertical-padding: 12px;
  --cr-section-indent-width: 40px;
  --cr-section-indent-padding: calc(
    var(--cr-section-padding) + var(--cr-section-indent-width)
  );
  --cr-section-vertical-margin: 21px;
  --cr-centered-card-max-width: 680px;
  --cr-centered-card-width-percentage: 0.96;
  --cr-hairline: 1px solid rgba(var(--cr-hairline-rgb), 0.14);
  --cr-separator-height: 1px;
  --cr-separator-line: var(--cr-separator-height) solid
    var(--cr-separator-color);
  --cr-toolbar-overlay-animation-duration: 150ms;
  --cr-toolbar-height: 56px;
  --cr-container-shadow-height: 6px;
  --cr-container-shadow-margin: calc(-1 * var(--cr-container-shadow-height));
  --cr-container-shadow-max-opacity: 1;
  --cr-card-border-radius: 8px;
  --cr-disabled-opacity: 0.38;
  --cr-form-field-bottom-spacing: 16px;
  --cr-form-field-label-font-size: 0.625rem;
  --cr-form-field-label-height: 1em;
  --cr-form-field-label-line-height: 1;
}

.chrome-inactive-shortcuts {
  --settings-disabled-opacity: 0.65;
  --settings-error-color: var(--google-red-700);
  --settings-nav-item-color: var(--google-grey-700);
  --settings-row-min-height: var(--cr-section-min-height);
  --settings-row-two-line-min-height: var(--cr-section-two-line-min-height);
  --settings-control-label-spacing: 20px;
  --settings-controlled-by-spacing: var(--cr-controlled-by-spacing);
  --settings-input-max-width: var(--cr-default-input-max-width);
  --iron-icon-fill-color: var(--google-grey-700);
  --iron-icon-height: var(--cr-icon-size);
  --iron-icon-width: var(--cr-icon-size);
  --cr-radio-group-item-padding: 0;
}

@media (prefers-color-scheme: dark) {
  .chrome-inactive-shortcuts {
    --iron-icon-fill-color: var(--google-grey-500);
    --settings-error-color: var(--google-red-300);
    --settings-nav-icon-color: var(--google-grey-500);
    --settings-nav-item-color: var(--cr-primary-text-color);
  }
}
</style>
