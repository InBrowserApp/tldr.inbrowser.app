<template>
  <div>
    <n-row>
      <n-col :span="12">
        <n-statistic label="Page Count">
          <span v-if="pageCount">{{ pageCount }}</span>
          <n-skeleton text style="width: 3em" v-else />
        </n-statistic>
      </n-col>
      <n-col :span="12">
        <n-statistic label="Last Updated">
          <n-time :time="lastModifiedTime" v-if="lastModifiedTime" />
          <n-skeleton text style="width: 10em" v-else />
        </n-statistic>
      </n-col>
    </n-row>
  </div>
</template>

<script setup lang="ts">
import { NTime, NSkeleton, NStatistic, NRow, NCol } from "naive-ui";
import { getLastModifiedTime, getPageCount } from "@/data/tldr-pages/misc";
import { computedAsync } from "@vueuse/core";

const pageCount = computedAsync(getPageCount, undefined);
const lastModifiedTime = computedAsync(getLastModifiedTime, undefined);
</script>
