<script setup lang="ts">
import SidebarVue from "../components/partials/Sidebar.vue";
import Header from "../components/partials/Header.vue";
</script>

<template>
  <main class="flex">
    <SidebarVue />
    <div>
      <Header />
      <RouterView />
    </div>
  </main>
</template>

<style scoped></style>
