<script setup lang="ts"></script>

<template>
  <aside
    class="sidebar bg-darkBlue w-full min-h-full flex flex-col items-center"
  >
    <span class="flex w-12 h-12 items-center justify-center rounded-md mb-1">
      <i class="bx bxl-stripe text-xl text-white"></i>
    </span>
    <router-link
      to="/"
      title="leads"
      class="flex w-12 h-12 items-center justify-center rounded-md mb-1"
    >
      <i class="bx bx-filter-alt text-xl text-white"></i>
    </router-link>
    <router-link
      to="/quotes"
      title="quotes"
      class="flex w-12 h-12 items-center justify-center rounded-md mb-1"
    >
      <i class="bx bx-dollar-circle text-xl text-white"></i>
    </router-link>
    <router-link
      to="/orders"
      title="orders"
      class="flex w-12 h-12 items-center justify-center rounded-md mb-1"
    >
      <i class="bx bx-task text-xl text-white"></i>
    </router-link>
    <router-link
      to="/messages"
      title="messages"
      class="flex w-12 h-12 items-center justify-center rounded-md mb-1"
    >
      <i class="bx bx-envelope text-xl text-white"></i>
    </router-link>
    <router-link
      to="/tasks"
      title="tasks"
      class="flex w-12 h-12 items-center justify-center rounded-md mb-1"
    >
      <i class="bx bx-calendar text-xl text-white"></i>
    </router-link>
    <router-link
      to="/profile"
      title="profile"
      class="flex w-12 h-12 items-center justify-center rounded-md mb-1"
    >
      <i class="bx bx-id-card text-xl text-white"></i>
    </router-link>
    <router-link
      to="/statistic"
      title="statistics"
      class="flex w-12 h-12 items-center justify-center rounded-md mb-1"
    >
      <i class="bx bx-line-chart text-xl text-white"></i>
    </router-link>
    <router-link
      to="/setting"
      title="settings"
      class="flex w-12 h-12 items-center justify-center rounded-md mb-1"
    >
      <i class="bx bx-dots-horizontal-rounded text-xl text-white"></i>
    </router-link>
  </aside>
</template>

<style>
.sidebar .router-link-active {
  background: #427d9d;
}
</style>
