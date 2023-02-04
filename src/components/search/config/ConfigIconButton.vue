<template>
  <n-button quaternary circle aria-label="Search Configs">
    <template #icon>
      <n-icon :component="Settings20Filled" />
    </template>
  </n-button>
</template>

<script setup lang="ts">
import { NButton, NIcon } from "naive-ui";
import Settings20Filled from "@vicons/fluent/Settings20Filled";
</script>
