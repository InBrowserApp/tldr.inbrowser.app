<template>
  <nav class="header-nav">
    <NavGitHub />
  </nav>
</template>

<script lang="ts" setup>
import { NDivider } from "naive-ui";

import NavGitHub from "./NavGitHub.vue";
</script>

<style scoped>
@media (max-width: 1023px) {
  .header-nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
}
</style>
