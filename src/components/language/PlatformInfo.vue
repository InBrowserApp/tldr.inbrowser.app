<template>
  <div>
    {{ info.platform }}
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  info: {
    platform: string;
    count: number;
  };
}>();
</script>
