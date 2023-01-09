<template>
  <n-tooltip trigger="hover">
    <template #trigger>
      <span style="cursor: pointer" @click="copy">
        <slot></slot>
      </span>
    </template>
    <n-icon :component="Clipboard16Regular" /> Copy to Clipboard
  </n-tooltip>
</template>

<script setup lang="ts">
import { toRef, h } from "vue";
import { NTooltip, NIcon, useMessage } from "naive-ui";
import Clipboard16Regular from "@vicons/fluent/Clipboard16Regular";
import { get } from "@vueuse/core";
import ClipboardCheckmark20Regular from "@vicons/fluent/ClipboardCheckmark20Regular";

const message = useMessage();

const props = defineProps<{
  content: string;
}>();

const copy = () => {
  navigator.clipboard.writeText(get(toRef(props, "content")));
  message.create("Copied to clipboard", {
    icon: () =>
      h(NIcon, null, { default: () => h(ClipboardCheckmark20Regular) }),
  });
};
</script>
