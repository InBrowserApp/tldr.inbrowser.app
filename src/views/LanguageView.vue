<template>
  <main>
    <n-h1 prefix="bar" align-text>
      <LanguageIcon style="margin-right: 0.5em; vertical-align: -0.2em" />
      <span style="margin-right: 0.5em">{{ languageDisplayName }}</span>
    </n-h1>
    <PlatformInfos :platformCounter="platformCounter" v-if="platformCounter" />
  </main>
</template>

<script setup lang="ts">
import { NH1 } from "naive-ui";
import { useLanguage } from "@/router/composables/useLanguage";
import { useHead } from "@vueuse/head";
import { useRoute } from "vue-router";
import { useLanguagePlatforms } from "@/data/tldr-pages/composables/useLanguagePlatforms";
import LanguageIcon from "@/components/misc/LanguageIcon.vue";
import PlatformInfos from "@/components/language/PlatformInfos.vue";


const { language, languageDisplayName } = useLanguage();
const { platformCounter } = useLanguagePlatforms(language);

const route = useRoute();

useHead({
  title: `${languageDisplayName.value} | tldr InBrowser.App`,
  meta: [
    {
      name: "description",
      content: `tldr commands list in language ${languageDisplayName.value}.`,
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
