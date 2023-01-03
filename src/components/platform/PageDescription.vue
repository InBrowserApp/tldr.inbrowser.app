<template>
  <n-p>
    <span v-if="descriptionWithoutMoreInfo">
      {{ descriptionWithoutMoreInfo }}
    </span>
    <n-skeleton v-else />
  </n-p>
</template>

<script setup lang="ts">
import { toRef, computed } from "vue";
import type { Page } from "@/data/tldr-pages/page";
import { usePageDescription } from "@/data/tldr-pages/composables/usePageDescription";
import { NP, NSkeleton } from "naive-ui";

const props = defineProps<{
  page: Page;
}>();

const { description } = usePageDescription(toRef(props, "page"));
const moreInfoText = " More information:";
const descriptionWithoutMoreInfo = computed(() => {
  if (!description.value) {
    return undefined;
  }

  const index = description.value.indexOf(moreInfoText);
  if (index === -1) {
    return description.value;
  }
  return description.value.substring(0, index);
});
</script>
