<template>
  <n-grid cols="1 400:2" y-gap="12">
    <n-grid-item>
      <n-statistic label="Last Updated">
        <a
          :href="githubCommitUrl"
          target="_blank"
          v-if="lastModifiedTime"
          class="github-commit-hash-a"
        >
          <n-time :time="lastModifiedTime" />
        </a>
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
import { computed } from "vue";
import { NTime, NSkeleton, NStatistic, NGrid, NGridItem } from "naive-ui";
import {
  getLastModifiedTime,
  getPageCount,
  getCommitHash,
} from "@/data/tldr-pages/page";
import { computedAsync } from "@vueuse/core";

const pageCount = computedAsync(getPageCount, undefined);
const lastModifiedTime = computedAsync(getLastModifiedTime, undefined);
const commitHash = computedAsync(getCommitHash, undefined);

const githubCommitUrl = computed(() => {
  if (commitHash.value) {
    return `https://github.com/tldr-pages/tldr/commit/${commitHash.value}`;
  }
  return undefined;
});
</script>

<style scoped>
.github-commit-hash-a {
  color: inherit;
  text-decoration: none;
}
</style>
