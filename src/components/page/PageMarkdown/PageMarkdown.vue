<template>
  <!-- eslint-disable vue/no-v-text-v-html-on-component -->
  <n-el v-html="html" class="main-markdown"></n-el>
  <!-- eslint-enable -->
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { marked } from "marked";
import { NEl } from "naive-ui";
import { handleHighlight } from "./HighlightMarkdownHTML";
import "./markdown.scss";
import "./syntax-highlight.scss";

const props = defineProps<{
  markdown: string;
}>();

const html = computed(() => handleHighlight(marked.parse(props.markdown)));
</script>
