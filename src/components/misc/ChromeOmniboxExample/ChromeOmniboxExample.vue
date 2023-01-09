<template>
  <div class="omnibox">
    <span class="prefix">
      <span class="prefix-icon"><Search16Regular style="width: 1em" /></span>
      <span>Search tldr</span>
    </span>
    <span class="divider">|</span>
    <span class="keyword">tar</span>
  </div>
</template>

<script setup lang="ts">
import Search16Regular from "@vicons/fluent/Search16Regular";
</script>

<style scoped>
.omnibox {
  border: 1px solid #e8e8e8;
  padding: 0.5em;
  border-radius: 5em;
  background-color: #fff;
}

@media (prefers-color-scheme: dark) {
  .omnibox {
    border: 1px solid #0000;
    background-color: rgba(255, 255, 255, 0.1);
  }
}

.prefix {
  color: #2965c7;
  user-select: none;
}

@media (prefers-color-scheme: dark) {
  .prefix {
    color: #fff;
  }
}

.prefix-icon {
  margin-left: 1em;
  margin-right: 1em;
  vertical-align: -0.125em;
}

.divider {
  margin-left: 0.5em;
  margin-right: 0.5em;
  color: #a3a3a4;
  user-select: none;
}

.keyword {
  color: #000;
}

@media (prefers-color-scheme: dark) {
  .keyword {
    color: #fff;
  }
}
</style>
