<template>
  <n-popselect
    trigger="hover"
    :options="options"
    scrollable
    @update:value="handleSelect"
  >
    <n-button text size="large">
      <template #icon>
        <LanguageIcon />
      </template>
      Browse By Languages
    </n-button>
  </n-popselect>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { NButton, NPopselect } from "naive-ui";
import { getLanguageDisplay } from "@/data/tldr-pages/display";
import LanguageIcon from "./LanguageIcon.vue";
import { useRouter } from "vue-router";
import { useLanguages } from "@/data/tldr-pages/composables/useLanguages";

const router = useRouter();
const { languages } = useLanguages();

const options = computed(() =>
  languages.value.map((language) => ({
    label: getLanguageDisplay(language),
    value: language,
  }))
);

const handleSelect = (key: string) => {
  console.log(key);
  const url = `/pages${key === "" ? "" : `.${key}`}`;
  router.push(url);
};
</script>
