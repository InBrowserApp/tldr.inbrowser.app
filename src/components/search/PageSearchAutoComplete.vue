<template>
  <n-auto-complete
    v-model:value="query"
    :input-props="{
      autocomplete: 'disabled',
    }"
    :options="options"
    placeholder="tar"
    :render-label="renderLabel"
    :get-show="() => true"
    :menu-props="{
      class: 'page-search-auto-complete-menu',
    }"
    @select="router.push"
    clear-after-select
  />
</template>

<script setup lang="ts">
import { ref, computed, h } from "vue";
import { NAutoComplete, type SelectOption } from "naive-ui";
import { searchPages } from "@/data/tldr-pages/search";
import { computedAsync } from "@vueuse/core";
import PageSearchResultEntry from "./PageSearchResultEntry.vue";
import type { Page } from "@/data/tldr-pages/page";
import { useRouter } from "vue-router";

const props = defineProps<{
  config: {
    languages: string[];
    platforms: string[];
  };
}>();

const router = useRouter();
const query = ref("");
const searchResults = computedAsync(async () => {
  const languages = props.config.languages;
  const platforms = props.config.platforms;
  const results = await searchPages(query.value, {
    languages,
    platforms,
  });
  console.debug(results);
  return results;
}, []);

const options = computed(() => {
  return searchResults.value.map((page) => {
    return {
      label: page.path,
      value: page.path,
      page: page,
    };
  });
});

const renderLabel = (option: SelectOption) => {
  return h(PageSearchResultEntry, {
    page: option.page as Page,
  });
};
</script>

<style>
.page-search-auto-complete-menu .n-base-select-option__content {
  width: 100%;
}

.page-search-auto-complete-menu.n-base-select-menu
  .n-base-select-option.n-base-select-option--show-checkmark {
  padding-right: calc(var(--n-option-padding-right) + 3px);
}
</style>
