<template>
  <main>
    <PageLanguage :language="language" v-if="language !== ''" />
    <n-h1 prefix="bar" align-text>{{ platform }}</n-h1>
    <PageInfos :pages="pages" v-if="pages" />
  </main>
</template>

<script setup lang="ts">
import PageLanguage from "@/components/page/PageLanguage.vue";
import { NH1 } from "naive-ui";
import { useLanguage } from "@/router/composables/useLanguage";
import { usePlatform } from "@/router/composables/usePlatform";
import { usePlatformPages } from "@/data/tldr-pages/composables/usePlatformPages";
import PageInfos from "@/components/platform/PageInfos.vue";

const { language } = useLanguage();
const { platform } = usePlatform();
const { pages } = usePlatformPages(language, platform);
</script>
