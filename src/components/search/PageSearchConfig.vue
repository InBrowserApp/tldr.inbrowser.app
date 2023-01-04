<template>
  <n-popover trigger="hover">
    <template #trigger>
      <n-button quaternary circle aria-label="Search Configs">
        <template #icon>
          <n-icon :component="Settings20Filled" />
        </template>
      </n-button>
    </template>
    <div class="search-config-panel">
      <n-form-item :show-feedback="false" style="margin-bottom: 1em">
        <template #label> <n-icon :component="Language" /> Languages </template>
        <n-select
          v-model:value="config.languages"
          multiple
          :options="languageOptions"
        />
      </n-form-item>
      <n-form-item label="Platform" :show-feedback="false">
        <template #label>
          <n-icon :component="Desktop16Regular" /> Platforms
        </template>
        <n-select
          v-model:value="config.platforms"
          multiple
          :options="platformOptions"
        />
      </n-form-item>
    </div>
  </n-popover>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { getPlatforms } from "@/data/tldr-pages/page";
import { computedAsync } from "@vueuse/core";
import { NSelect, NPopover, NButton, NFormItem, NIcon } from "naive-ui";
import Language from "@vicons/ionicons5/Language";
import Desktop16Regular from "@vicons/fluent/Desktop16Regular";
import Settings20Filled from "@vicons/fluent/Settings20Filled";
import { getLanguageDisplay } from "@/data/tldr-pages/display";
import { getPlatformDisplay } from "@/data/tldr-pages/display";
import { useLanguages } from "@/data/tldr-pages/composables/useLanguages";

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

const { languages } = useLanguages();
const languageOptions = computed(() =>
  languages.value.map((language) => ({
    label: getLanguageDisplay(language),
    value: language,
  }))
);

const platformOptions = computedAsync(async () => {
  return [...(await getPlatforms())].map((platform) => {
    return {
      label: getPlatformDisplay(platform),
      value: platform,
    };
  });
}, [
  {
    label: "Common",
    value: "common",
  },
]);
</script>

<style scoped>
.search-config-panel {
  min-width: 300px;
  max-width: 80vw;
  padding: 0.5em;
}
</style>
