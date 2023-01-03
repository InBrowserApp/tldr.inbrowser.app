<template>
  <n-tag :bordered="false" :size="size" :style="{ cursor }">
    {{ languageDisplay }}
    <template #icon>
      <LanguageIcon />
    </template>
  </n-tag>
</template>

<script lang="ts" setup>
import { toRef } from "vue";
import { NTag } from "naive-ui";
import LanguageIcon from "@/components/misc/LanguageIcon.vue";
import { useLanguageDisplay } from "@/data/tldr-pages/composables/useLanguageDisplay";

const props = defineProps<{
  language: string;
  size?: "small" | "medium" | "large";
  cursor?: "pointer" | "default";
}>();

const language = toRef(props, "language");
const { languageDisplay } = useLanguageDisplay(language);
</script>
