<template>
  <n-button :href="href" target="_blank" tag="a" text>
    <template #icon>
      <n-icon :component="Github" />
    </template>
    Find this page on GitHub
  </n-button>
</template>

<script lang="ts" setup>
import { NButton, NIcon } from "naive-ui";
import Github from "@vicons/fa/Github";

defineProps<{
  href: string;
}>();
</script>
