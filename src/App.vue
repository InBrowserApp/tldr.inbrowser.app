<template>
  <n-config-provider :theme="theme">
    <n-global-style />
    <n-message-provider>
      <div class="app">
        <TheHeader />
        <RouterView />
      </div>
    </n-message-provider>
  </n-config-provider>
</template>

<script lang="ts" setup>
import {
  useOsTheme,
  darkTheme,
  NConfigProvider,
  NGlobalStyle,
  NMessageProvider,
} from "naive-ui";
import { RouterView } from "vue-router";
import { computed } from "vue";
import TheHeader from "@/components/header/TheHeader.vue";

const osThemeRef = useOsTheme();
const theme = computed(() => (osThemeRef.value === "dark" ? darkTheme : null));
</script>

<style>
body {
  min-height: 100vh;
}

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: 80px;
  }

  .app {
    display: grid;
    grid-template-columns: 2fr 3fr;
    padding: 0 2rem;
  }
}
</style>
