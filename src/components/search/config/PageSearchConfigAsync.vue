<template>
  <PageSearchConfig v-model:config="config" />
</template>

<script setup lang="ts">
import { computed } from "vue";
import { defineAsyncComponent } from "vue";
import ConfigIconButton from "./ConfigIconButton.vue";

const props = defineProps<{
  config: {
    languages: string[];
    platforms: string[];
  };
}>();

const emit = defineEmits<{
  (
    event: "update:config",
    config: { languages: string[]; platforms: string[] }
  ): void;
}>();

const config = computed({
  get: () => props.config,
  set: (config) => emit("update:config", config),
});

const PageSearchConfig = defineAsyncComponent({
  // the loader function
  loader: () => import("./PageSearchConfig.vue"),

  // A component to use while the async component is loading
  loadingComponent: ConfigIconButton,
});
</script>
