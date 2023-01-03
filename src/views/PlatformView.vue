<template>
  <main>
    <n-h1 prefix="bar" align-text>
      <span style="margin-right: 0.5em">{{ platform }}</span>
      <PageLanguage :language="language" v-if="language !== ''" />
    </n-h1>
    <PageInfos :pages="pages" v-if="pages" />
    <PageInfosSkeleton :repeat="5" v-else />
  </main>
</template>

<script setup lang="ts">
import PageLanguage from "@/components/page/PageLanguage.vue";
import { NH1 } from "naive-ui";
import { useLanguage } from "@/router/composables/useLanguage";
import { usePlatform } from "@/router/composables/usePlatform";
import { usePlatformPages } from "@/data/tldr-pages/composables/usePlatformPages";
import PageInfos from "@/components/platform/PageInfos.vue";
import PageInfosSkeleton from "@/components/platform/PageInfosSkeleton.vue";
import { useHead } from "@vueuse/head";
import { useRoute } from "vue-router";

const { language } = useLanguage();
const { platform } = usePlatform();
const { pages } = usePlatformPages(language, platform);

const route = useRoute();

useHead({
  title: `${platform.value}${
    language.value !== "" ? ` ${language.value}` : ""
  } | tldr InBrowser.App`,
  meta: [
    {
      name: "description",
      content: `tldr commands list for platform ${platform.value}${
        language.value !== "" ? ` in language ${language.value}` : ""
      }.`,
    },
  ],
  link: [
    {
      rel: "canonical",
      href: `https://tldr.inbrowser.app${route.path}`,
    },
  ],
});
</script>
