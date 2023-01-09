<template>
  <ChromeInactiveShortcutsCSSVarsProvider>
    <div class="chrome-inactive-shortcuts">
      <InactiveShortcutsHeading />
      <ShortcutsTable />
    </div>
  </ChromeInactiveShortcutsCSSVarsProvider>
</template>

<script lang="ts" setup>
import InactiveShortcutsHeading from "./InactiveShortcutsHeading.vue";
import ShortcutsTable from "./ShortcutsTable.vue";
import ChromeInactiveShortcutsCSSVarsProvider from "./ChromeInactiveShortcutsCSSVarsProvider.vue";
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
</style>
