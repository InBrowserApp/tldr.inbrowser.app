<template>
  <main>
    <template v-if="pages || pages === undefined">
      <n-h1 prefix="bar" align-text>
        <span style="margin-right: 0.5em">{{ platformDisplay }}</span>
        <PageLanguage :language="language" v-if="language !== ''" />
      </n-h1>
    </template>
    <template v-if="pages">
      <PageInfos :pages="pages" />
    </template>
    <template v-if="pages === undefined">
      <PageInfosSkeleton :repeat="5" />
    </template>

    <template v-if="pages === null">
      <NotFound />
    </template>
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
import { usePlatformDisplay } from "@/data/tldr-pages/composables/usePlatformDisplay";
import { useLanguageDisplay } from "@/data/tldr-pages/composables/useLanguageDisplay";
import NotFound from "@/components/misc/NotFound.vue";

const { language } = useLanguage();
const { platform } = usePlatform();
const { pages } = usePlatformPages(language, platform);

const { platformDisplay } = usePlatformDisplay(platform);
const { languageDisplay } = useLanguageDisplay(language);

const route = useRoute();

useHead({
  title: `${platformDisplay.value} commands${
    language.value !== "" ? ` in ${languageDisplay.value}` : ""
  } | tldr InBrowser.App`,
  meta: [
    {
      name: "description",
      content: `tldr commands list for platform ${platformDisplay.value}${
        language.value !== "" ? ` in language ${languageDisplay.value}` : ""
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
