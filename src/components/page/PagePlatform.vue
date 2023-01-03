<template>
  <n-tag :bordered="false" :size="size">
    {{ platform }}
    <template #icon>
      <PlatformIcon :platform="platform" />
    </template>
  </n-tag>
</template>

<script lang="ts" setup>
import { NTag } from "naive-ui";
import PlatformIcon from "@/components/misc/PlatformIcon.vue";

defineProps<{
  platform: string;
  size?: "small" | "medium" | "large";
}>();
</script>
