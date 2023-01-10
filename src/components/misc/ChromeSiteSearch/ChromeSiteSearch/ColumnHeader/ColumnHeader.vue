<template>
  <div>
    <div id="headers" class="column-header">
      <span class="name" role="columnheader">Site or page</span
      ><span class="url-padded" role="columnheader">Shortcut</span
      ><span class="icon-placeholder"></span
      ><span class="icon-placeholder"></span>
    </div>
  </div>
</template>

<style scoped>
#headers {
  display: flex;
  padding: 10px 0;
}

.column-header {
  color: var(--cr-secondary-text-color);
  font-size: inherit;
  font-weight: 400;
}

#headers .name {
  flex: 3;
}

#headers .shortcut,
#headers .url,
#headers .url-padded {
  flex: 4;
}

.icon-placeholder {
  margin-inline-end: 0;
  margin-inline-start: var(--cr-icon-button-margin-start);
  width: var(--cr-icon-ripple-size);
}
</style>
