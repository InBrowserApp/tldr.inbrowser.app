<template>
  <div id="containerWithCollapsibleSection" class="scroll-container">
    <div class="settings-search-engine-entry">
      <div class="list-item cr-row">
        <NameColumn />
        <ShortcutColumn />
        <span>
          <IconEdit />
          <IconMoreActions />
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import IconMoreActions from "./IconMoreActions.vue";
import IconEdit from "./IconEdit.vue";
import NameColumn from "./NameColumn.vue";
import ShortcutColumn from "./ShortcutColumn.vue";
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

.list-item {
  --cr-icon-button-margin-end: 0;
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
