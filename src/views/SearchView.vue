<template>
  <main>
    <n-h2 prefix="bar" align-text>Search</n-h2>
    <PageSearch />
  </main>
</template>

<script setup lang="ts">
import { NH2 } from "naive-ui";
import PageSearch from "@/components/search/PageSearch.vue";
import { useHead } from "@vueuse/head";

useHead({
  title: "Search | tldr InBrowser.App",
  meta: [
    {
      name: "description",
      content: "Search for tldr-pages.",
    },
  ],
});
</script>
