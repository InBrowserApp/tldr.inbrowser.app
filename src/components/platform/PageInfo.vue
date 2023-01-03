<template>
  <n-space justify="space-between" style="width: 100%">
    <span>{{ command }}</span>
  </n-space>
</template>

<script setup lang="ts">
import { toRef } from "vue";
import type { Page } from "@/data/tldr-pages/page";
import { NSpace } from "naive-ui";
import { usePageCommand } from "@/data/tldr-pages/composables/usePageCommand";

const props = defineProps<{
  page: Page;
}>();

const { command } = usePageCommand(toRef(props, "page"));
</script>
