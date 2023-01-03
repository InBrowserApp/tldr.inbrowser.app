<template>
  <router-link :to="url" class="language-link">
    <n-tag :bordered="false" :size="size" style="cursor: pointer">
      {{ platformDisplay }}
      <template #icon>
        <PlatformIcon :platform="platform" />
      </template>
    </n-tag>
  </router-link>
</template>

<script lang="ts" setup>
import { NTag } from "naive-ui";
import PlatformIcon from "@/components/misc/PlatformIcon.vue";
import { usePlatformDisplay } from "@/data/tldr-pages/composables/usePlatformDisplay";
import { usePlatformURL } from "@/router/composables/usePlatformURL";
import { toRefs } from "@vueuse/core";

const props = defineProps<{
  platform: string;
  language: string;
  size?: "small" | "medium" | "large";
}>();

const { platform, language } = toRefs(props);
const { url } = usePlatformURL(language, platform);

const { platformDisplay } = usePlatformDisplay(platform);
</script>

<style scoped>
.language-link {
  text-decoration: none;
  color: inherit;
}
</style>
