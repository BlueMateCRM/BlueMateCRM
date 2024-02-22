<script lang="ts" setup>
import { ref } from 'vue';
import Calendar from "./Calendar.vue";
import Select from "./Select.vue";

// input
const input1 = ref("");

let content = ref(1);
</script>
<template>
  <div class="flex justify-end">
    <div class="w-[70%]">
      <!-- Input Call -->
      <div class="w-full p-4">
        <el-input
          v-model="input1"
          placeholder="Call"
          class="w-50 m-2"
          size="large"
        />
      </div>
      <!-- Nav -->
      <nav class="flex items-center w-full border rounded-md border-gray-400 cursor-pointer bg-white">
        <div
          class="flex h-full items-center px-3 py-2 text-gray-800 border"
          :class="{ 'border-blue-500': content === 1 }"
          @click="content = 1"
        >
          <i class="bx bx-phone text-2xl mr-1"></i>
          <p class="text-lg">Call</p>
        </div>
        <div
          class="flex h-full items-center px-3 py-2 text-gray-800 border"
          :class="{ 'border-blue-500': content === 2 }"
          @click="content = 2"
        >
          <i class="bx bx-envelope text-2xl mr-1"></i>
          <p class="text-lg">Email</p>
        </div>
        <div
          class="flex h-full items-center px-3 py-2 text-gray-800 border"
          :class="{ 'border-blue-500': content === 3 }"
          @click="content = 3"
        >
          <i class="bx bx-calendar text-2xl mr-1"></i>
          <p class="text-lg">Tasks</p>
        </div>
        <div
          class="flex h-full items-center px-3 py-2 text-gray-800 border"
          :class="{ 'border-blue-500': content === 4 }"
          @click="content = 4"
        >
          <i class="bx bx-calendar text-2xl mr-1"></i>
          <p class="text-lg">Deadline</p>
        </div>
      </nav>
      <!-- Nav's item -->
      <div v-show="content === 1" class="flex">
        <div>
          <input type="text" placeholder="Input" class="border p-2 rounded-md" />
        </div>
        <div>
          <Select />
        </div>
      </div>
    </div>
    <!-- Right Calendar -->
    <div class="w-[30%]">
      <Calendar />
    </div>
  </div>
</template>


<style scoped>
.border-blue-500 {
  border: 1px solid #0087ff;
}
.border-blue-500 p {
  color: #0087ff;
}
</style>
