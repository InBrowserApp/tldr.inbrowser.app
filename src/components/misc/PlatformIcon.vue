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
import Freebsd from "@vicons/fa/Freebsd";
import SunOSIcon from "./platform-icons/SunOSIcon.vue";
import NetBSDIcon from "./platform-icons/NetBSDIcon.vue";
import OpenBSDIcon from "./platform-icons/OpenBSDIcon.vue";

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
    case "windows":
      return Windows;
    case "freebsd":
      return Freebsd;
    case "sunos":
      return SunOSIcon;
    case "netbsd":
      return NetBSDIcon;
    case "openbsd":
      return OpenBSDIcon;
    default:
      return Desktop16Regular;
  }
});
</script>
