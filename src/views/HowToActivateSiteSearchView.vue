<template>
  <main>
    <n-h1 prefix="bar" align-text>How to Activate Site Search</n-h1>
    <n-p>
      Go to <n-tag :bordered="false">Chrome Settings</n-tag> /
      <n-tag :bordered="false">Search Engine</n-tag> /
      <n-tag :bordered="false">Manage search engines and site search</n-tag> /
      <n-tag :bordered="false">Inactive shortcuts</n-tag>
    </n-p>
    <n-p>
      Or type
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
      Then click the <ActivateButtonStandalone /> button to activate
      <n-text code style="font-size: 1em">tldr</n-text> site search.
    </n-p>

    <n-divider />

    <n-p>
      Now you can use the site search feature of Google Chrome. Just type
      <n-text code style="font-size: 1em">tldr</n-text> in the address bar and
      press <n-tag :bordered="false">Tab</n-tag> to search commands.
    </n-p>

    <n-p>
      <ChromeOmniboxExample />
    </n-p>
  </main>
</template>

<script setup lang="ts">
import { NH1, NP, NTag, NText, NDivider } from "naive-ui";
import { useHead } from "@vueuse/head";
import ChromeInactiveShortcuts from "@/components/misc/ChromeInactiveShortcuts/ChromeInactiveShortcuts.vue";
import ChromeOmniboxExample from "@/components/misc/ChromeOmniboxExample/ChromeOmniboxExample.vue";
import ActivateButtonStandalone from "@/components/misc/ChromeInactiveShortcuts/ActivateButtonStandalone.vue";

useHead({
  title: "How to Activate Site Search | tldr InBrowser.App",
  meta: [
    {
      name: "description",
      content: "How to Activate Site Search for tldr in Google Chrome",
    },
  ],
});
</script>
