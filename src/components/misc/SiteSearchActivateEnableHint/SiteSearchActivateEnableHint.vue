<template>
  <n-message-provider placement="bottom" :container-style="style">
    <SiteSearchActivateEnableHintMessager />
  </n-message-provider>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { NMessageProvider } from "naive-ui";
import SiteSearchActivateEnableHintMessager from "./SiteSearchActivateEnableHintMessager.vue";
import { useMediaQuery } from "@vueuse/core";

const isPrint = useMediaQuery("print");

const style = computed(() => {
  return isPrint.value
    ? {
        display: "none",
      }
    : {};
});
</script>
