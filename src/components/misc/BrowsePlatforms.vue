<template>
  <n-dropdown trigger="hover" :options="options" @select="handleSelect">
    <n-button text>
      <template #icon>
        <n-icon :component="Devices" />
      </template>
      Browse By Platforms
    </n-button>
  </n-dropdown>
</template>

<script lang="ts" setup>
import { h } from "vue";
import { NButton, NIcon, NDropdown } from "naive-ui";
import Devices from "@vicons/carbon/Devices";
import { getPlatformDisplay } from "@/data/tldr-pages/display";
import PlatformIcon from "./PlatformIcon.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const platforms = ["common", "linux", "osx", "windows", "android", "sunos"];

const options = platforms.map((platform) => ({
  label: getPlatformDisplay(platform),
  key: platform,
  icon: () => h(PlatformIcon, { platform }),
}));

const handleSelect = (key: string) => {
  const url = `/pages/${key}`;
  router.push(url);
};
</script>
