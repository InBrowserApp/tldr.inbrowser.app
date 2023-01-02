<template>
  <n-card
    embedded
    :bordered="false"
    class="md-card"
    content-style="padding: 0;"
  >
    <n-scrollbar x-scrollable content-style="padding: 16px;">
      <n-code :code="code" :language="language"></n-code>
    </n-scrollbar>
  </n-card>
</template>

<script lang="ts" setup>
import { NCard, NScrollbar, NCode } from "naive-ui";

defineProps<{
  code: string;
  language?: string;
}>();
</script>
