<template>
  <div>
    <div v-for="i in new Array(repeat)" :key="i">
      <n-h2>
        <n-text code>
          <n-skeleton text style="width: 3em" />
        </n-text>
      </n-h2>
      <n-p>
        <n-skeleton
          style="
            height: calc(var(--n-line-height) * var(--n-font-size));
            vertical-align: 0;
            max-width: 100%;
          "
          text
        />
      </n-p>

      <n-divider />
    </div>
    <n-space justify="center">
      <n-skeleton style="height: 28px; width: 322.636px" />
    </n-space>
  </div>
</template>

<script lang="ts" setup>
import { NSkeleton, NSpace, NDivider, NH2, NText, NP } from "naive-ui";

defineProps<{
  repeat: number;
}>();
</script>
