<script setup lang="ts">
import { toRef } from "vue";
import { useRoute } from "vue-router";
import { NDivider, NSpace } from "naive-ui";
import PageMarkdown from "@/components/page/PageMarkdown.vue";
import FindOnGitHub from "@/components/page/FindOnGitHub.vue";
import PageLanguage from "@/components/page/PageLanguage.vue";
import PagePlatform from "@/components/page/PagePlatform.vue";
import { usePage } from "@/data/tldr-pages/composables/usePage";
import { usePageViewMetadata } from "./usePageViewMetadata";

const route = useRoute();

const { page, markdown } = usePage(toRef(route, "path"));

usePageViewMetadata(page);
</script>

<template>
  <main>
    <template v-if="page && markdown">
      <n-space>
        <PageLanguage
          :language="page.language"
          v-if="page.language && page.language !== ''"
        />
        <PagePlatform
          :platform="page.platform"
          :language="page.language"
          v-if="page.platform && page.platform !== 'common'"
        />
      </n-space>
      <PageMarkdown :markdown="markdown" />
      <n-divider />
      <FindOnGitHub :href="page.githubURL" />
    </template>
  </main>
</template>
