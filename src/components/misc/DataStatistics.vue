<template>
  <n-grid cols="1 400:2" y-gap="12">
    <n-grid-item>
      <n-statistic label="Last Updated">
        <n-time :time="lastModifiedTime" v-if="lastModifiedTime" />
        <n-skeleton text style="width: 10em" v-else />
      </n-statistic>
    </n-grid-item>
    <n-grid-item>
      <n-statistic label="Page Count">
        <span v-if="pageCount">{{ pageCount }}</span>
        <n-skeleton text style="width: 3em" v-else />
      </n-statistic>
    </n-grid-item>
  </n-grid>
</template>

<script setup lang="ts">
import { NTime, NSkeleton, NStatistic, NGrid, NGridItem } from "naive-ui";
import { getLastModifiedTime, getPageCount } from "@/data/tldr-pages/page";
import { computedAsync } from "@vueuse/core";

const pageCount = computedAsync(getPageCount, undefined);
const lastModifiedTime = computedAsync(getLastModifiedTime, undefined);
</script>
