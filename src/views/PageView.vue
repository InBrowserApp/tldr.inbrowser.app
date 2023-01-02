<script setup lang="ts">
import { ref } from "vue";
import { getPage, type Page } from "@/data/tldr-pages/page";
import { useRoute } from "vue-router";
import { computedAsync } from "@vueuse/core";
import { NDivider } from "naive-ui";
import PageMarkdown from "@/components/page/PageMarkdown.vue";
import FindOnGitHub from "@/components/page/FindOnGitHub.vue";

const route = useRoute();
const evaluating = ref(false);

const page = computedAsync<Page | undefined | null>(
  async () => {
    try {
      const page = await getPage(route.path);
      console.debug(page);
      return page;
    } catch (error) {
      console.error(error);
      return null;
    }
  },
  undefined,
  evaluating
);

const markdown = computedAsync<string | undefined | null>(
  async () => {
    if (page.value) {
      const text = await page.value.text();
      console.debug(text);
      return text;
    } else {
      return page.value;
    }
  },
  undefined, // initial state
  evaluating
);
</script>

<template>
  <main>
    <PageMarkdown :markdown="markdown" v-if="markdown" />
    <n-divider />
    <FindOnGitHub :href="page.githubURL" v-if="page" />
  </main>
</template>
