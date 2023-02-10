<template>
  <n-button
    text
    tag="a"
    href="https://github.com/InBrowserApp/tldr.inbrowser.app"
    target="_blank"
  >
    <template #icon>
      <n-icon>
        <Github />
      </n-icon>
    </template>
    GitHub
  </n-button>
</template>

<script setup lang="ts">
import { NButton, NIcon } from "naive-ui";
import Github from "@vicons/fa/Github";
</script>
