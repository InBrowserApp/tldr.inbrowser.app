<script setup lang="ts">
import { ref } from "vue";
import { getPage } from "@/data/tldr-pages/page";
import { useRoute } from "vue-router";
import { computedAsync } from "@vueuse/core";
import PageMarkdown from "@/components/page/PageMarkdown.vue";

const route = useRoute();
const evaluating = ref(false);

const markdown = computedAsync<string | undefined | null>(
  async () => {
    try {
      const page = await getPage(route.path);
      console.debug(page);
      const text = await page.getText();
      console.debug(text);
      return text;
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
    <PageMarkdown :markdown="markdown" v-if="markdown" />
  </main>
</template>
