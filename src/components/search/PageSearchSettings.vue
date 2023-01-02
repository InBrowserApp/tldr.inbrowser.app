<template>{{ platforms }} {{ languages }}</template>

<script setup lang="ts">
import { getLanguages, getPlatforms } from "@/data/tldr-pages/page";
import { computedAsync } from "@vueuse/core";

const languages = computedAsync<Set<string> | undefined>(
  getLanguages,
  undefined
);

const platforms = computedAsync<Set<string> | undefined>(
  getPlatforms,
  undefined
);
</script>
