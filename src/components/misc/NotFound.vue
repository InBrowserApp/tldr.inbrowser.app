<template>
  <n-result status="404" title="404 Not Found" style="margin-top: 4em">
    <template #footer>
      <router-link :to="location.path">
        <n-text code style="font-size: 2em">{{ location.basename }}</n-text>
      </router-link>
    </template>
  </n-result>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { NResult, NText } from "naive-ui";
import { usePlatformPages } from "@/data/tldr-pages/composables/usePlatformPages";
import { useIntervalFn } from "@vueuse/core";
import { useHead } from "@vueuse/head";

const { pages } = usePlatformPages("", "common");
const location = ref({
  path: "/pages/common/cat",
  basename: "cat",
});

const updateRandomLocation = () => {
  const pages_ = pages.value;
  if (pages_) {
    const page = pages_[Math.floor(Math.random() * pages_.length)];
    location.value = {
      path: page.path,
      basename: page.basename,
    };
  }
};

useIntervalFn(updateRandomLocation, 1000);

useHead({
  meta: [
    {
      name: "robots",
      content: "noindex",
    },
  ],
});
</script>
