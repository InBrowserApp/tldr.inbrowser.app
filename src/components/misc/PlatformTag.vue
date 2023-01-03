<template>
  <n-tag :bordered="false" :size="size" :style="{ cursor }">
    {{ platformDisplay }}
    <template #icon>
      <PlatformIcon :platform="platform" />
    </template>
  </n-tag>
</template>

<script lang="ts" setup>
import { NTag } from "naive-ui";
import PlatformIcon from "@/components/misc/PlatformIcon.vue";
import { usePlatformDisplay } from "@/data/tldr-pages/composables/usePlatformDisplay";
import { toRefs } from "@vueuse/core";

const props = defineProps<{
  platform: string;
  size?: "small" | "medium" | "large";
  cursor?: "pointer" | "default";
}>();

const { platform } = toRefs(props);

const { platformDisplay } = usePlatformDisplay(platform);
</script>

<style scoped>
.language-link {
  text-decoration: none;
  color: inherit;
}
</style>
