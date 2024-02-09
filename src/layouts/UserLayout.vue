<script setup lang="ts">
import SidebarVue from "../components/partials/Sidebar.vue";
import Header from "../components/partials/Header.vue";
</script>

<template>
  <main class="flex">
    <!-- sidebar -->
    <div class="aside w-14 h-screen overflow-y-auto shadow-2xl">
      <SidebarVue />
    </div>

    <!-- main content -->
    <div class="content overflow-y-auto overflow-x-hidden h-screen">
      <Header />
      <div class="p-4">
        <RouterView />
      </div>
    </div>
  </main>
</template>

<style scoped>
.aside::-webkit-scrollbar {
  width: 5px;
}
.aside::-webkit-scrollbar-track {
  background-color: #4b5677;
}
.aside::-webkit-scrollbar-thumb {
  background: #427d9d;
  border-radius: 15px;
}
.content {
  width: calc(100% - 56px);
}
</style>
