<template>
  <div id="outer" class="list-frame">
    <ColumnHeader />
    <SettingsSearchEngineEntry />
  </div>
</template>

<script lang="ts" setup>
import SettingsSearchEngineEntry from "./SettingsSearchEngineEntry/SettingsSearchEngineEntry.vue";
import ColumnHeader from "./ColumnHeader/ColumnHeader.vue";
</script>

<style scoped>
.list-frame {
  display: block;
  padding-block-end: 0;
  padding-block-start: 0;
  padding-inline-end: var(--cr-section-padding);
  padding-inline-start: var(--cr-section-indent-padding);
}
</style>
