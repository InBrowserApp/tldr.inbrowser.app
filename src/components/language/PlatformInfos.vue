<template>
  <n-grid x-gap="15" y-gap="15" cols="2 s:3" responsive="screen">
    <n-gi v-for="info in platformInfos" :key="info.platform">
      <PlatformInfo :info="info" :language="language" />
    </n-gi>
  </n-grid>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { NGrid, NGi } from "naive-ui";
import PlatformInfo from "./PlatformInfo.vue";

const props = defineProps<{
  platformCounter: Map<string, number>;
  language: string;
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
