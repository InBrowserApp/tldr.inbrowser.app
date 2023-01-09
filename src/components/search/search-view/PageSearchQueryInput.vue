<template>
  <n-input v-model:value="query" type="text" :placeholder="placeholder" />
</template>

<script setup lang="ts">
import { computed } from "vue";
import { NInput } from "naive-ui";
import { useRandomPlaceholder } from "../composables";

const { placeholder } = useRandomPlaceholder();

const props = defineProps<{
  query: string;
}>();

const emit = defineEmits<{
  (event: "update:query", value: string): void;
}>();

const query = computed({
  get: () => props.query,
  set: (value) => emit("update:query", value),
});
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
