<template>
  <n-grid cols="1 400:2">
    <n-grid-item>
      <BrowsePlatforms />
    </n-grid-item>
    <n-grid-item>
      <BrowseLanguages />
    </n-grid-item>
  </n-grid>
</template>

<script lang="ts" setup>
import { NGridItem, NGrid } from "naive-ui";
import BrowseLanguages from "./BrowseLanguages.vue";
import BrowsePlatforms from "./BrowsePlatforms.vue";
</script>
