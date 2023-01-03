<template>
  <a :href="page.path" @click.prevent class="search-entry-a">
    <n-space justify="space-between" style="width: 100%">
      <span>{{ command }}</span>
      <n-space>
        <LanguageTag
          v-if="page.language !== ''"
          :language="page.language"
          size="small"
        />
        <PlatformTag
          v-if="page.platform !== 'common'"
          :platform="page.platform"
          :language="page.language"
          size="small"
        />
      </n-space>
    </n-space>
  </a>
</template>

<script setup lang="ts">
import { toRef } from "vue";
import type { Page } from "@/data/tldr-pages/page";
import LanguageTag from "@/components/misc/LanguageTag.vue";
import PlatformTag from "@/components/misc/PlatformTag.vue";
import { NSpace } from "naive-ui";
import { usePageCommand } from "@/data/tldr-pages/composables/usePageCommand";

const props = defineProps<{
  page: Page;
}>();

const { command } = usePageCommand(toRef(props, "page"));
</script>

<style scoped>
.search-entry-a {
  text-decoration: none;
  color: inherit;
}

.search-entry-a:hover {
  text-decoration: none;
}
</style>
