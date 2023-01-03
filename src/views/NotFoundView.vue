<template>
  <main>
    <NotFound />
  </main>
</template>

<script setup lang="ts">
import { useHead } from "@vueuse/head";
import NotFound from "@/components/misc/NotFound.vue";

useHead({
  title: "Not Found | tldr InBrowser.App",
});
</script>
