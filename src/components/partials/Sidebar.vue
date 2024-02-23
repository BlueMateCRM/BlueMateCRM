<script setup lang="ts"></script>

<template>
  <aside
    class="sidebar bg-darkBlue w-full min-h-full flex flex-col items-center"
  >
    <span class="flex w-12 h-12 items-center justify-center rounded-md mb-1">
      <i class="bx bxl-stripe text-xl text-white"></i>
    </span>
    <router-link
      to="/user/leads"
      title="leads"
      class="flex w-12 h-12 items-center justify-center rounded-md mb-1"
    >
      <i class="bx bx-filter-alt text-xl text-white"></i>
    </router-link>
    <router-link
      to="/user/quotes"
      title="quotes"
      class="flex w-12 h-12 items-center justify-center rounded-md mb-1"
    >
      <i class="bx bx-dollar-circle text-xl text-white"></i>
    </router-link>
    <router-link
      to="/user/orders"
      title="orders"
      class="flex w-12 h-12 items-center justify-center rounded-md mb-1"
    >
      <i class="bx bx-task text-xl text-white"></i>
    </router-link>
    <router-link
      to="/user/messages"
      title="messages"
      class="flex w-12 h-12 items-center justify-center rounded-md mb-1"
    >
      <i class="bx bx-envelope text-xl text-white"></i>
    </router-link>
    <router-link
      to="/user/tasks"
      title="tasks"
      class="flex w-12 h-12 items-center justify-center rounded-md mb-1"
    >
      <i class="bx bx-calendar text-xl text-white"></i>
    </router-link>
    <router-link
      to="/user/profile"
      title="profile"
      class="flex w-12 h-12 items-center justify-center rounded-md mb-1"
    >
      <i class="bx bx-id-card text-xl text-white"></i>
    </router-link>
    <router-link
      to="/user/insights"
      title="Insights"
      class="flex w-12 h-12 items-center justify-center rounded-md mb-1"
    >
      <i class="bx bx-line-chart text-xl text-white"></i>
    </router-link>
    <router-link
      to="/user/settings"
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
