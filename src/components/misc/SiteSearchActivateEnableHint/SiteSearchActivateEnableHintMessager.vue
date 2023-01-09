<template>
  <div style="display: none"></div>
</template>

<script lang="ts" setup>
import { onMounted, h } from "vue";
import { useMessage } from "naive-ui";
import SiteSearchActivateEnableHintContent from "./SiteSearchActivateEnableHintContent.vue";
import { useRoute } from "vue-router";
import { useStorage } from "@vueuse/core";
import type { MessageReactive } from "naive-ui";
import icon from "@vicons/fluent/BookSearch24Regular";

let messageReactive: MessageReactive | null = null;

const route = useRoute();
const message = useMessage();
const notShown = useStorage<boolean>(
  "tldr.inbrowser.app:site-search-activate-enable-hint-not-shown",
  false
);
const delay = 5000;
const duration = 30000;

const removeMessage = () => {
  if (messageReactive) {
    messageReactive.destroy();
    messageReactive = null;
    notShown.value = true;
  }
};

onMounted(async () => {
  // https://twitter.com/googlechrome/status/1504858902248230944
  const isMobile = navigator?.userAgentData?.mobile ?? true;
  const ChromeBrand = (navigator?.userAgentData?.brands ?? []).find(
    (brand) => brand.brand === "Google Chrome"
  );
  const ChromeVersionStr = ChromeBrand?.version ?? "0";
  const ChromeVersion = parseInt(ChromeVersionStr.split(".")[0], 10);

  if (!isMobile && ChromeVersion > 100) {
    await new Promise((resolve) => setTimeout(resolve, delay));

    if (route.name === "activate-site-search") {
      return;
    }

    if (notShown.value) {
      return;
    }

    if (!messageReactive) {
      messageReactive = message.info(
        () =>
          h(SiteSearchActivateEnableHintContent, { onClose: removeMessage }),
        {
          icon: () => h(icon),
          closable: true,
          onClose: () => {
            notShown.value = true;
          },
          keepAliveOnHover: true,
          duration,
        }
      );
    }
  }
});
</script>
