<template>
  <n-space justify="space-between" style="width: 100%">
    <span>{{ command }}</span>
    <n-space>
      <PageLanguage
        v-if="page.language !== ''"
        :language="page.language"
        size="small"
      />
      <PagePlatform
        v-if="page.platform !== 'common'"
        :platform="page.platform"
        size="small"
      />
    </n-space>
  </n-space>
</template>

<script setup lang="ts">
import type { Page } from "@/data/tldr-pages/page";
import PageLanguage from "@/components/page/PageLanguage.vue";
import PagePlatform from "@/components/page/PagePlatform.vue";
import { NSpace } from "naive-ui";
import { computedAsync } from "@vueuse/core";

const props = defineProps<{
  page: Page;
}>();

const command = computedAsync(async () => {
  return await props.page.command;
}, props.page.basename);
</script>
