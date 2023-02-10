<template>
  <div>
    <n-h1 class="h1">
      <a href="https://tldr.inbrowser.app" target="_blank" v-if="isIframe">
        <SiteName />
      </a>

      <router-link
        :to="{
          name: 'home',
        }"
        v-else
      >
        <SiteName />
      </router-link>
    </n-h1>
    <n-h2 class="h2" v-if="!isIframe">
      tldr InBrowser.App is an offline-capable PWA for tldr-pages. Fully runs in
      your browser. Zero API latency.
    </n-h2>
  </div>
</template>

<script lang="ts" setup>
import { NH1, NH2 } from "naive-ui";
import SiteName from "./SiteName.vue";
import { isInIframe } from "@/utils/is-in-iframe";

const isIframe = isInIframe();
</script>

<style scoped>
@media (min-width: 1024px) {
  .h2 {
    font-size: 1.25rem;
  }
}

@media (max-width: 1023px) {
  .h2 {
    font-size: 1rem;
    margin-top: 10px !important;
  }

  .h1 {
    text-align: center;
    margin-bottom: 10px !important;
  }
}

.h1 ::v-deep(a) {
  color: inherit;
  text-decoration: none;
}
</style>
