<template>
  <main>
    <template v-if="platformCounter !== null">
      <n-h1 prefix="bar" align-text>
        <LanguageIcon style="margin-right: 0.5em; vertical-align: -0.2em" />
        <span style="margin-right: 0.5em">{{ languageDisplay }}</span>
      </n-h1>
    </template>

    <template v-if="platformCounter">
      <PlatformInfos :platformCounter="platformCounter" :language="language" />
    </template>

    <template v-if="platformCounter === null">
      <NotFound />
    </template>
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
import { useLanguageDisplay } from "@/data/tldr-pages/composables/useLanguageDisplay";
import NotFound from "@/components/misc/NotFound.vue";

const { language } = useLanguage();
const { languageDisplay } = useLanguageDisplay(language);
const { platformCounter } = useLanguagePlatforms(language);

const route = useRoute();

useHead({
  title: `Commands in ${languageDisplay.value} | tldr InBrowser.App`,
  meta: [
    {
      name: "description",
      content: `tldr commands list in language ${languageDisplay.value}.`,
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
