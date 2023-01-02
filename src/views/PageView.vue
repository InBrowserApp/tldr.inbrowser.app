<script setup lang="ts">
import { ref } from "vue";
import { getPage } from "@/data/tldr-pages/page";
import { useRoute } from "vue-router";
import { computedAsync } from "@vueuse/core";

const route = useRoute();
const evaluating = ref(false);

const pageMarkdown = computedAsync<string | undefined | null>(
  async () => {
    try {
      const page = await getPage(route.path);
      return await page.getText();
    } catch (error) {
      console.error(error);
      return null;
    }
  },
  undefined, // initial state
  evaluating
);
</script>

<template>
  <main>
    {{ pageMarkdown }}
  </main>
</template>
