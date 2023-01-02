<template>
  <main>
    <n-h2 prefix="bar" align-text>Search</n-h2>
    <PageSearch />
    <n-h2 prefix="bar" align-text>Statistics</n-h2>
    <DataStatistics />
  </main>
</template>

<script setup lang="ts">
import { NH2 } from "naive-ui";
import PageSearch from "@/components/search/PageSearch.vue";
import DataStatistics from "@/components/misc/DataStatistics.vue";
</script>
