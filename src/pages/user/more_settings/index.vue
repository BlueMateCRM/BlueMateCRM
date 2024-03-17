<script setup lang="ts">
import SettingsSidebar from "../../../components/partials/SettingsSidebar.vue";
import { moreSettingsData } from "../../../data/settingsDatta.ts";
</script>

<template>
  <main class="settings flex">
    <SettingsSidebar :routes="moreSettingsData" class="w-[256px] h-full" />
    <div
      class="settings__content content h-full py-[10px] px-4 bg-bglightGray overflow-x-hidden overflow-y-auto"
    >
      <router-view></router-view>
    </div>
  </main>
</template>

<style scoped>
.settings {
  height: calc(100vh - 57.6px);
}
.settings__content {
  width: calc(100% - 256px);
}
</style>
