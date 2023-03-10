<template>
  <header>
    <div class="wrapper">
      <HeaderText />
      <HeaderNav class="nav hidden-on-print" style="margin-bottom: 1em" />

      <PageSearch
        id="header-search"
        v-if="showSearch"
        style="margin-bottom: 1em"
        class="hidden-on-print"
      />
    </div>
  </header>
</template>

<script lang="ts" setup>
import { computed, defineAsyncComponent } from "vue";
import HeaderText from "./HeaderText.vue";
import HeaderNav from "./nav/HeaderNav.vue";
import { useRoute } from "vue-router";

const PageSearch = defineAsyncComponent(
  () => import("@/components/search/auto-complete/PageSearch.vue")
);

const route = useRoute();
const showSearch = computed(
  () => route.name !== "home" && route.name !== "search"
);
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
