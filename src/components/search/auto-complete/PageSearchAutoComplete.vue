<template>
  <n-auto-complete
    v-model:value="query"
    :input-props="{
      autocomplete: 'off',
      autocorrect: 'off',
      autocapitalize: 'off',
      spellcheck: 'false',
    }"
    :options="options"
    :placeholder="placeholder"
    :render-label="renderLabel"
    :get-show="() => true"
    :menu-props="{ class: 'page-search-auto-complete-menu' }"
    @select="onSelect"
    clear-after-select
    ref="searchInput"
  />
</template>

<script setup lang="ts">
import { ref, computed, h, onMounted, nextTick } from "vue";
import { NAutoComplete, type SelectOption } from "naive-ui";
import { searchPages } from "@/data/tldr-pages/search";
import { computedAsync } from "@vueuse/core";
import PageSearchResultEntry from "../PageSearchResultEntry.vue";
import type { Page } from "@/data/tldr-pages/page";
import { useRouter } from "vue-router";
import { useRandomPlaceholder } from "../composables";
import { isInIframe } from "@/utils/is-in-iframe";

const { placeholder } = useRandomPlaceholder();

const props = defineProps<{
  config: {
    languages: string[];
    platforms: string[];
  };
}>();

const searchInput = ref<InstanceType<typeof NAutoComplete> | null>(null);
const router = useRouter();
const query = ref("");
const searchResults = computedAsync(async () => {
  if (query.value === "") {
    return [];
  }
  const languages = props.config.languages;
  const platforms = props.config.platforms;
  const results = await searchPages(query.value, {
    size: 20,
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

// auto-focus
onMounted(() => {
  nextTick(() => {
    searchInput.value?.focus();

    // FIXME: this is a hack to disable autocorrect on mobiles
    searchInput.value?.inputInstRef?.inputElRef?.setAttribute(
      "autocorrect",
      "off"
    );
  });
});

const onSelect = (value: string | number) => {
  if (isInIframe()) {
    window.open(`https://tldr.inbrowser.app${value}`, "_blank");
  } else {
    router.push(value as string);
  }
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
