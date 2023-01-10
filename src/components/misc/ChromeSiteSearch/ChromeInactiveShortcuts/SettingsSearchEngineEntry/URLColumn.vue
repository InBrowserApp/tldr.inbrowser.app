<template>
  <span id="url-column-padded" class="text-elide"
    ><div>https://tldr.inbrowser.app/search?query=%s</div></span
  >
</template>

<style scoped>
#url-column-padded {
  flex: 3;
  margin-inline-end: 40px;
}

.text-elide {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
