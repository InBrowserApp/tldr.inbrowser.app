<template>
  <n-icon :component="icon" />
</template>

<script lang="ts" setup>
import type { Component } from "vue";
import { computed } from "vue";
import { NIcon } from "naive-ui";
import Apple from "@vicons/fa/Apple";
import Android from "@vicons/fa/Android";
import Desktop16Regular from "@vicons/fluent/Desktop16Regular";
import Linux from "@vicons/fa/Linux";
import Windows from "@vicons/fa/Windows";

const props = defineProps<{
  platform: string;
}>();

const icon = computed<Component>(() => {
  switch (props.platform) {
    case "android":
      return Android;
    case "common":
      return Desktop16Regular;
    case "linux":
      return Linux;
    case "osx":
      return Apple;
    case "sunos":
      return Desktop16Regular;
    case "windows":
      return Windows;
    default:
      return Desktop16Regular;
  }
});
</script>
