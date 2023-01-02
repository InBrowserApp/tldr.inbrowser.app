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

const router = useRouter();
const query = ref("");
const searchResults = computedAsync(async () => {
  const results = await searchPages(query.value, {
    // language: ["", "de"],
    // platform: ["common", "linux", "windows", "android", "osx", "sunos"],
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
</style>
