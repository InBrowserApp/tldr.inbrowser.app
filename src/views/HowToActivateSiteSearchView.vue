<template>
  <main>
    <n-h1 prefix="bar" align-text>How to Activate Site Search</n-h1>
    <n-p> There are three ways to navigate to the setting page:</n-p>
    <n-ul>
      <n-li>
        Type
        <CopyToClipboard content="chrome://settings/searchEngines">
          <n-text code style="font-size: 1em"
            >chrome://settings/searchEngines</n-text
          >
        </CopyToClipboard>
        in the address bar.
      </n-li>
      <n-li>
        Right click on the address bar and select
        <n-tag :bordered="false">Manage search engines and site search</n-tag>
      </n-li>
      <n-li>
        Go to
        <n-tag :bordered="false" class="settings-tag">Chrome Settings</n-tag> /
        <n-tag :bordered="false" class="settings-tag">Search Engine</n-tag> /
        <n-tag :bordered="false" class="settings-tag"
          >Manage search engines and site search</n-tag
        >
        /
        <n-tag :bordered="false" class="settings-tag">Inactive shortcuts</n-tag>
      </n-li>
    </n-ul>

    <n-p>
      After navigating to the setting page, you will find a list of inactive
      shortcuts:
    </n-p>

    <n-p>
      <ChromeInactiveShortcuts />
    </n-p>

    <n-p>
      Then click the <ActivateButtonStandalone /> button to activate
      <n-text code style="font-size: 1em">tldr</n-text> site search.
    </n-p>

    <n-p>
      After activating the site search, you will find a new search engine
      <n-text code style="font-size: 1em">tldr</n-text> in the list:
    </n-p>

    <n-divider />

    <n-p>
      Now you can use the site search feature of Google Chrome. Just type
      <n-text code style="font-size: 1em">tldr tar</n-text> in the address bar
      and press <n-tag :bordered="false">Enter</n-tag> to search commands.
    </n-p>

    <n-p>
      <ChromeOmniboxExample />
    </n-p>
  </main>
</template>

<script setup lang="ts">
import { NH1, NP, NTag, NText, NDivider, NUl, NLi } from "naive-ui";
import { useHead } from "@vueuse/head";
import ChromeInactiveShortcuts from "@/components/misc/ChromeSiteSearch/ChromeInactiveShortcuts/ChromeInactiveShortcuts.vue";
import ChromeOmniboxExample from "@/components/misc/ChromeOmniboxExample/ChromeOmniboxExample.vue";
import ActivateButtonStandalone from "@/components/misc/ChromeSiteSearch/ChromeInactiveShortcuts/ActivateButtonStandalone.vue";
import CopyToClipboard from "@/components/misc/CopyToClipboard.vue";

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

<style scoped>
.settings-tag {
  margin-bottom: 0.25em;
}
</style>
