<script setup lang="ts">
import { ref } from "vue";
import { getPage, type Page } from "@/data/tldr-pages/page";
import { useRoute } from "vue-router";
import { computedAsync } from "@vueuse/core";
import { NDivider, NSpace } from "naive-ui";
import PageMarkdown from "@/components/page/PageMarkdown.vue";
import FindOnGitHub from "@/components/page/FindOnGitHub.vue";
import PageLanguage from "@/components/page/PageLanguage.vue";
import PagePlatform from "@/components/page/PagePlatform.vue";

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
    <n-space>
      <PageLanguage :language="page?.language" v-if="page?.language" />
      <PagePlatform :platform="page.platform" v-if="page?.platform" />
    </n-space>
    <PageMarkdown :markdown="markdown" v-if="markdown" />
    <n-divider />
    <FindOnGitHub :href="page.githubURL" v-if="page" />
  </main>
</template>
