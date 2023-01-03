<template>
  <n-tag :bordered="false" :size="size">
    {{ platformDisplay }}
    <template #icon>
      <PlatformIcon :platform="platform" />
    </template>
  </n-tag>
</template>

<script lang="ts" setup>
import { toRef } from "vue";
import { NTag } from "naive-ui";
import PlatformIcon from "@/components/misc/PlatformIcon.vue";
import { usePlatformDisplay } from "@/data/tldr-pages/composables/usePlatformDisplay";

const props = defineProps<{
  platform: string;
  size?: "small" | "medium" | "large";
}>();

const platform = toRef(props, "platform");

const { platformDisplay } = usePlatformDisplay(platform);
</script>
