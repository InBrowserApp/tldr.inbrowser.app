<template>
  <RouterLink :to="url" class="platform-link">
    <n-statistic>
      <template #label>
        <PlatformIcon :platform="info.platform" style="margin-right: 0.5em" />{{
          info.platform
        }}
      </template>
      {{ info.count }}
    </n-statistic>
  </RouterLink>
</template>

<script lang="ts" setup>
import { NStatistic } from "naive-ui";
import PlatformIcon from "@/components/misc/PlatformIcon.vue";
import { usePlatformURL } from "@/router/composables/usePlatformURL";
import { toRefs } from "@vueuse/core";

const props = defineProps<{
  info: {
    platform: string;
    count: number;
  };
  language: string;
}>();

const { language, info } = toRefs(props);
const { platform } = toRefs(info);

const { url } = usePlatformURL(language, platform);
</script>

<style scoped>
.platform-link {
  text-decoration: none;
  color: inherit;
}
</style>
