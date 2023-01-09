<template>
  <div class="search-combined">
    <PageSearchAutoComplete :config="config" />
    <PageSearchConfig v-model:config="config" />
  </div>
</template>

<script setup lang="ts">
import PageSearchConfig from "../PageSearchConfig.vue";
import PageSearchAutoComplete from "../auto-complete/PageSearchAutoComplete.vue";
import { useSearchConfig } from "../composables";

const { config } = useSearchConfig();
</script>

<style scoped>
.search-combined {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.3em;
}
</style>
