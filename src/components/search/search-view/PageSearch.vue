<template>
  <div class="search-combined">
    <PageSearchQueryInput :config="config" v-model:query="query" />
    <PageSearchConfig v-model:config="config" />
  </div>
  <PageInfos
    :pages="searchResults"
    v-if="searchResults.length !== 0"
    :pageSize="3"
  />
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import PageSearchConfig from "../config/PageSearchConfigAsync.vue";
import PageSearchQueryInput from "./PageSearchQueryInput.vue";
import { useSearchConfig } from "../composables";
import { searchPages } from "@/data/tldr-pages/search";
import { computedAsync } from "@vueuse/core";
import PageInfos from "@/components/platform/PageInfos.vue";
import { useRouter } from "vue-router";

const isFirstRender = ref(true);
const router = useRouter();

const props = defineProps<{
  query: string;
}>();

const emit = defineEmits<{
  (event: "update:query", value: string): void;
}>();

const { config } = useSearchConfig();

const query = computed({
  get: () => props.query,
  set: (value) => emit("update:query", value),
});

const searchResults = computedAsync(async () => {
  const firstRender = isFirstRender.value;
  isFirstRender.value = false;

  if (query.value === "") {
    return [];
  }
  const languages = config.value.languages;
  const platforms = config.value.platforms;
  const results = await searchPages(query.value, {
    languages,
    platforms,
  });
  console.debug(results);
  if (firstRender) {
    if (results.length >= 1 && results[0].basename === query.value) {
      router.push(results[0].path);
    }
  }

  return results;
}, []);
</script>

<style scoped>
.search-combined {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.3em;

  margin-bottom: 1em;
}
</style>
