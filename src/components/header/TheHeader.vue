<template>
  <header>
    <div class="wrapper">
      <HeaderText />
      <HeaderNav class="nav" style="margin-bottom: 1em" />

      <PageSearch
        id="header-search"
        v-if="showSearch"
        style="margin-bottom: 1em"
      />
    </div>
  </header>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import HeaderText from "./HeaderText.vue";
import HeaderNav from "./nav/HeaderNav.vue";
import PageSearch from "@/components/search/PageSearch.vue";
import { useRoute } from "vue-router";

const route = useRoute();
const showSearch = computed(() => route.name !== "home");
</script>

<style scoped>
header {
  max-height: 100vh;
}

@media (max-width: 1023px) {
  .nav {
    margin-bottom: 25px;
  }
}
</style>
