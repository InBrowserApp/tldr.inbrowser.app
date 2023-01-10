<template>
  <div id="containerWithCollapsibleSection" class="scroll-container">
    <div class="settings-search-engine-entry">
      <div class="list-item cr-row">
        <NameColumn />
        <URLColumn />
        <span>
          <ActivateButton />
          <IconMoreActions />
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ActivateButton from "./ActivateButton.vue";
import IconMoreActions from "./IconMoreActions.vue";
import NameColumn from "./NameColumn.vue";
import URLColumn from "./URLColumn.vue";
</script>

<style scoped>
.cr-row {
  align-items: center;
  border-top: var(--cr-separator-line);
  display: flex;
  min-height: var(--cr-section-min-height);
  padding: 0 var(--cr-section-padding);
}

.list-item {
  align-items: center;
  display: flex;
  min-height: var(--settings-row-min-height);
  padding: 0;
}

.settings-search-engine-entry {
  border-top: var(--cr-separator-line);
}

.scroll-container {
  display: flex;
  flex-direction: column;
  min-height: 1px;
}
</style>
