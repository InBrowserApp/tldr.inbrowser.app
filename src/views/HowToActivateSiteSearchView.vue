<template>
  <main>
    <n-h1 prefix="bar" align-text>How to Active Site Search</n-h1>
    <n-p>
      Go to <n-tag :bordered="false">Chrome Settings</n-tag> /
      <n-tag :bordered="false">Search Engine</n-tag> /
      <n-tag :bordered="false">Manage search engines and site search</n-tag> /
      <n-tag :bordered="false">Inactive shortcuts</n-tag>
    </n-p>
    <n-p>
      Or just type
      <n-text code style="font-size: 1em"
        >chrome://settings/searchEngines</n-text
      >
      in the address bar.
    </n-p>
    <n-p> You will find a list of inactive shortcuts: </n-p>

    <n-p>
      <ChromeInactiveShortcuts />
    </n-p>

    <n-p>
      Then click the <n-tag :bordered="false">Activate</n-tag> button of tldr.
    </n-p>
  </main>
</template>

<script setup lang="ts">
import { NH1, NP, NTag, NText } from "naive-ui";
import { useHead } from "@vueuse/head";
import ChromeInactiveShortcuts from "@/components/misc/ChromeInactiveShortcuts/ChromeInactiveShortcuts.vue";

useHead({
  title: "How to Active Site Search | tldr InBrowser.App",
  meta: [
    {
      name: "description",
      content: "How to Active Site Search for tldr in Google Chrome",
    },
  ],
});
</script>
