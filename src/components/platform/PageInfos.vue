<template>
  <div>
    <PageInfo v-for="page in pages" :key="page.path" :page="page" />
    <n-space justify="center">
      <n-pagination v-model:page="pageNum" :page-count="pageCount" />
    </n-space>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import type { Page } from "@/data/tldr-pages/page";
import PageInfo from "./PageInfo.vue";
import { NPagination, NSpace } from "naive-ui";

const pageSize = ref(5);
const pageNum = ref(1);

const props = defineProps<{
  pages: Page[];
}>();

const pageCount = computed(() =>
  Math.ceil(props.pages.length / pageSize.value)
);
const pages = computed(() =>
  props.pages.slice(
    (pageNum.value - 1) * pageSize.value,
    pageNum.value * pageSize.value
  )
);
</script>
