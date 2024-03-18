<script setup lang="ts"></script>

<template>
  <header class="bg-lightBlue py-[9.5px] px-[25px] relative">
    <h2
      class="absolute left-0 top-1/2 -translate-y-1/2 w-full text-center text-2xl font-medium text-darkBlue"
    >
      Agreement
    </h2>
    <div class="flex justify-end">
      <slot name="actions" />
    </div>
  </header>
</template>

<style scoped></style>
