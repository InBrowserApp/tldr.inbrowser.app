<template>
  <main>
    <n-h2 prefix="bar" align-text>Search</n-h2>
    <PageSearch />
    <n-h2 prefix="bar" align-text>Commands</n-h2>
    <BrowseCommands />
    <n-h2 prefix="bar" align-text>Statistics</n-h2>
    <DataStatistics />
  </main>
</template>

<script setup lang="ts">
import { NH2 } from "naive-ui";
import PageSearch from "@/components/search/PageSearch.vue";
import DataStatistics from "@/components/misc/DataStatistics.vue";
import BrowseCommands from "@/components/misc/BrowseCommands.vue";
import { useHead } from "@vueuse/head";

useHead({
  title: "tldr InBrowser.App",
  meta: [
    {
      name: "description",
      content:
        "tldr InBrowser.App is a offline-capable PWA for tldr-pages. Fully runs in your browser. Zero API latency.",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: `https://tldr.inbrowser.app/`,
    },
  ],
});
</script>
