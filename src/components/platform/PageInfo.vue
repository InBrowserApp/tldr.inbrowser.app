<template>
  <div>
    <PageCommand :page="page" />
    <PageDescription :page="page" />
    <n-divider />
  </div>
</template>

<script setup lang="ts">
import type { Page } from "@/data/tldr-pages/page";
import { NDivider } from "naive-ui";
import PageDescription from "./PageDescription.vue";
import PageCommand from "./PageCommand.vue";

defineProps<{
  page: Page;
}>();
</script>
