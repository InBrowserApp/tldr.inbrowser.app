<template>
  <router-link :to="url" class="language-link">
    <PlatformTag :platform="platform" :size="size" cursor="pointer" />
  </router-link>
</template>

<script lang="ts" setup>
import { usePlatformURL } from "@/router/composables/usePlatformURL";
import { toRefs } from "@vueuse/core";
import PlatformTag from "@/components/misc/PlatformTag.vue";

const props = defineProps<{
  platform: string;
  language: string;
  size?: "small" | "medium" | "large";
}>();

const { platform, language } = toRefs(props);
const { url } = usePlatformURL(language, platform);
</script>

<style scoped>
.language-link {
  text-decoration: none;
  color: inherit;
}
</style>
