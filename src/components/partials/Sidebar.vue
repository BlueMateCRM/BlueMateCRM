<script setup lang="ts">

</script>

<template>
  <div class="bg-darkBlue h-screen">
    <router-link to="/" class="menu flex items-center py-4 px-[30px]">
      <i class='bx bxl-stripe bx-sm' style="color:#ffff"></i>
    </router-link>
    <router-link to="/login" class="menu flex items-center px-[30px] p-4 rounded-md bg-slate-500">
      <i class='bx bx-filter-alt bx-sm' style="color:#ffff"></i>
    </router-link>
    <router-link to="/" class="flex items-center py-4 px-[30px]">
      <i class='bx bx-dollar-circle bx-sm' style="color:#ffff" ></i>
    </router-link>
    <router-link to="/" class="flex items-center py-4 px-[30px]">
      <i class='bx bx-task bx-sm' style="color:#ffff"></i>
    </router-link>
    <router-link to="/" class="flex items-center py-4 px-[30px]">
      <i class='bx bx-envelope bx-sm' style="color:#ffff"></i>
    </router-link>
    <router-link to="/" class="flex items-center py-4 px-[30px]">
      <i class='bx bx-calendar bx-sm' style="color:#ffff"></i>
    </router-link>
    <router-link to="/" class="flex items-center py-4 px-[30px]">
      <i class='bx bx-id-card bx-sm' style="color:#ffff"></i>
    </router-link>
    <router-link to="/" class="flex items-center py-4 px-[30px]">
      <i class='bx bx-dots-horizontal-rounded bx-sm' style="color:#ffff"></i>
    </router-link>
  </div>
</template>

<style scoped>
.router-link-exact-active .menu {
  background: rgb(15, 118, 110);
  background: linear-gradient(90deg, rgba(15, 118, 110, 0.2) 0%, rgba(255, 255, 255, 0.4) 100%);
  color: #0f766e;
}
</style>
