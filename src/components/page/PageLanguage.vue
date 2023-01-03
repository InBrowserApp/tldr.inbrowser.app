<template>
  <router-link :to="url" class="language-link">
    <n-tag :bordered="false" :size="size" style="cursor: pointer">
      {{ languageDisplay }}
      <template #icon>
        <LanguageIcon />
      </template>
    </n-tag>
  </router-link>
</template>

<script lang="ts" setup>
import { toRef } from "vue";
import { NTag } from "naive-ui";
import LanguageIcon from "@/components/misc/LanguageIcon.vue";
import { useLanguageDisplay } from "@/data/tldr-pages/composables/useLanguageDisplay";
import { useLanguageURL } from "@/router/composables/useLanguageURL";

const props = defineProps<{
  language: string;
  size?: "small" | "medium" | "large";
}>();

const language = toRef(props, "language");
const { url } = useLanguageURL(language);

const { languageDisplay } = useLanguageDisplay(language);
</script>

<style scoped>
.language-link {
  text-decoration: none;
  color: inherit;
  cursor: pointer !important;
}
</style>
