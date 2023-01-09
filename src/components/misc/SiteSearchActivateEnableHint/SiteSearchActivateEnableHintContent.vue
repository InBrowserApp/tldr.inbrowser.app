<template>
  <span data-nosnippet>
    <RouterLink
      to="/search/activate-site-search"
      class="link"
      @click="emit('close')"
    >
      <ChromeOmniboxExample style="margin-bottom: 0.5em" />
      <span class="text">
        Do you know that you can run
        <n-text code style="font-size: 1em">tldr tar</n-text> right from your
        address bar?
      </span>
    </RouterLink>
  </span>
</template>

<script setup lang="ts">
import ChromeOmniboxExample from "../ChromeOmniboxExample/ChromeOmniboxExample.vue";
import { NText } from "naive-ui";

const emit = defineEmits(["close"]);
</script>

<style scoped>
.link {
  text-decoration: none;
  color: inherit;
}

.text {
  padding: 1em;
}

.link:hover .text {
  text-decoration: underline;
}
</style>
