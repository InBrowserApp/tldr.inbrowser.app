<template>
  <header>
    <div class="wrapper">
      <HeaderText />
      <HeaderNav class="nav" />
    </div>
  </header>
</template>

<script lang="ts" setup>
import HeaderText from "./HeaderText.vue";
import HeaderNav from "./nav/HeaderNav.vue";
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
