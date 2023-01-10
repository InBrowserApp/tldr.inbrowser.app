<template>
  <ChromeCSSVarsProvider>
    <div class="chrome-inactive-shortcuts">
      <SiteSearchHeading />
      <ShortcutsTable />
    </div>
  </ChromeCSSVarsProvider>
</template>

<script lang="ts" setup>
import SiteSearchHeading from "./SiteSearchHeading.vue";
import ShortcutsTable from "./ShortcutsTable.vue";
import ChromeCSSVarsProvider from "../ChromeCSSVarsProvider.vue";
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
