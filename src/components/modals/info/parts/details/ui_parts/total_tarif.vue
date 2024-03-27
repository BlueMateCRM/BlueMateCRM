<script setup lang="ts">
const props = defineProps({
  title: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <div
    class="py-1 px-2 flex gap-x-4 hover:bg-gray-100 cursor-pointer duration-200 group"
  >
    <div class="w-1/3 text-nowrap overflow-hidden">
      <i class="bx bxs-car text-mainBlue mr-2"></i>
      <span class="text-darkBlue font-medium">Total tariff</span>
    </div>
    <div class="w-2/3 flex justify-between items-center">
      <p class="text-textBlack text-sm">
        {{ props.title }}
      </p>
      <div
        class="bg-white w-5 h-5 opacity-0 group-hover:opacity-100 duration-200 rounded border border-gray-200 flex items-center justify-center"
      >
        <i class="bx bx-copy text-sm text-textBlack"></i>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
