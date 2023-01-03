<template>
  <n-tag :bordered="false" :size="size">
    {{ language }}
    <template #icon>
      <LanguageIcon />
    </template>
  </n-tag>
</template>

<script lang="ts" setup>
import { NTag } from "naive-ui";
import LanguageIcon from "@/components/misc/LanguageIcon.vue";

defineProps<{
  language: string;
  size?: "small" | "medium" | "large";
}>();
</script>
