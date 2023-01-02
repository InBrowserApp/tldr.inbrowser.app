<template>
  <div v-html="html"></div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { marked } from "marked";

const props = defineProps<{
  markdown: string;
}>();

const html = computed(() => marked.parse(props.markdown));
</script>
