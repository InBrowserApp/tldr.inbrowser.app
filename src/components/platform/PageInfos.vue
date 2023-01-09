<template>
  <div>
    <PageInfo v-for="page in pages" :key="page.path" :page="page" />
    <n-space justify="center">
      <n-pagination
        v-model:page="pageNum"
        :page-count="pageCount"
        :page-slot="7"
      />
    </n-space>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, watch } from "vue";
import type { Page } from "@/data/tldr-pages/page";
import PageInfo from "./PageInfo.vue";
import { NPagination, NSpace } from "naive-ui";

const pageNum = ref(1);

const props = defineProps<{
  pages: Page[];
  pageSize?: number;
}>();

const pageSize = computed(() => props.pageSize ?? 5);

const pageCount = computed(() =>
  Math.ceil(props.pages.length / pageSize.value)
);
const pages = computed(() =>
  props.pages.slice(
    (pageNum.value - 1) * pageSize.value,
    pageNum.value * pageSize.value
  )
);

watch(
  () => props.pages,
  () => {
    pageNum.value = 1;
  }
);
</script>
