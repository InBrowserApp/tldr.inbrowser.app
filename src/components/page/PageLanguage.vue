<template>
  <n-tag :bordered="false" :size="size">
    {{ language }}
    <template #icon>
      <n-icon :component="Language" />
    </template>
  </n-tag>
</template>

<script lang="ts" setup>
import { NTag, NIcon } from "naive-ui";
import Language from "@vicons/ionicons5/Language";

defineProps<{
  language: string;
  size?: "small" | "medium" | "large";
}>();
</script>
