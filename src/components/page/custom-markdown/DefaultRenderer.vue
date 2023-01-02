<template>
  <RawHTML :html="html" />
</template>

<script lang="ts" setup>
import { marked } from "marked";
import RawHTML from "./RawHTML";

const props = defineProps<{
  token: marked.Token;
}>();

const html = marked.parser([props.token]);
console.log(props.token);
console.log(html);
</script>
