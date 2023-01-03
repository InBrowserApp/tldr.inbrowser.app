<template>
  <router-link :to="page.path">
    <n-h2>
      <n-text code>
        {{ command }}
      </n-text>
    </n-h2>
  </router-link>
</template>

<script setup lang="ts">
import { toRef } from "vue";
import type { Page } from "@/data/tldr-pages/page";
import { usePageCommand } from "@/data/tldr-pages/composables/usePageCommand";
import { NText, NH2 } from "naive-ui";

const props = defineProps<{
  page: Page;
}>();

const { command } = usePageCommand(toRef(props, "page"));
</script>
