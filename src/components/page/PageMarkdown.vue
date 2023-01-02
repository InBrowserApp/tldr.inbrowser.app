<template>
  <CustomMarkdown :markdown="mdStr" :parser="parser" />
</template>

<script lang="ts" setup>
import CustomMarkdown from "./custom-markdown/custom-markdown";
import { parser } from "./naive-ui-markdown/naive-ui-markdown-parser";
import mdStr from "./test.md?raw";

defineProps<{
  markdown: string;
}>();
</script>
