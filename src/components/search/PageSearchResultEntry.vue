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
        :language="page.language"
        size="small"
      />
    </n-space>
  </n-space>
</template>

<script setup lang="ts">
import { toRef } from "vue";
import type { Page } from "@/data/tldr-pages/page";
import PageLanguage from "@/components/page/PageLanguage.vue";
import PagePlatform from "@/components/page/PagePlatform.vue";
import { NSpace } from "naive-ui";
import { usePageCommand } from "@/data/tldr-pages/composables/usePageCommand";

const props = defineProps<{
  page: Page;
}>();

const { command } = usePageCommand(toRef(props, "page"));
</script>
