<template>
  <span id="name-column"
    ><site-favicon></site-favicon>
    <div>tldr</div></span
  >
</template>

<script lang="ts" setup>
import SiteFavicon from "./SiteFavicon.vue";
</script>

<style scoped>
#name-column {
  align-items: center;
  display: flex;
  flex: 3;
  word-break: break-word;
}
</style>
