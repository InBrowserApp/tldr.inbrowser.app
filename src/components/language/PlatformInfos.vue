<template>
  <div>
    <PlatformInfo
      v-for="info in platformInfos"
      :key="info.platform"
      :info="info"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import PlatformInfo from "./PlatformInfo.vue";

const props = defineProps<{
  platformCounter: Map<string, number>;
}>();

const platformInfos = computed(() => {
  return Array.from(props.platformCounter, ([key, value]) => {
    return {
      platform: key,
      count: value,
    };
  }).sort((a, b) => b.count - a.count);
});
</script>
