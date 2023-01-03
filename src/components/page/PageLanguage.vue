<template>
  <router-link :to="url" class="language-link">
    <LanguageTag :language="language" :size="size" cursor="pointer" />
  </router-link>
</template>

<script lang="ts" setup>
import { toRef } from "vue";
import { useLanguageURL } from "@/router/composables/useLanguageURL";
import LanguageTag from "@/components/misc/LanguageTag.vue";

const props = defineProps<{
  language: string;
  size?: "small" | "medium" | "large";
}>();

const language = toRef(props, "language");
const { url } = useLanguageURL(language);
</script>

<style scoped>
.language-link {
  text-decoration: none;
  color: inherit;
  cursor: pointer !important;
}
</style>
