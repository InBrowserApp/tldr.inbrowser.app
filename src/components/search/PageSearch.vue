<template>
  <div class="search-combined">
    <PageSearchAutoComplete :config="config" />
    <PageSearchConfig v-model:config="config" />
  </div>
</template>

<script setup lang="ts">
import PageSearchConfig from "./PageSearchConfig.vue";
import { useStorage } from "@vueuse/core";
import PageSearchAutoComplete from "./PageSearchAutoComplete.vue";

const config = useStorage(
  "tldr.inbrowser.app:search:config",
  {
    languages: [""],
    platforms: ["common"],
  },
  undefined,
  { mergeDefaults: true }
);
</script>

<style scoped>
.search-combined {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.3em;
}
</style>
