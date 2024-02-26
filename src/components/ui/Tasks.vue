<script lang="ts" setup>
import { ref } from "vue";
import Calendar from "./Calendar.vue";
import Select from "./Select.vue";

// input
const input1 = ref("");
const textarea = ref('')

let content = ref(1);
</script>
<template>
  <div class="flex justify-end">
    <div class="w-[70%] flex-col px-6 py-2">
      <!-- Input Call -->
      <div class="w-full bg-green-200">
        <el-input
          v-model="input1"
          placeholder="Call"
          class="w-50"
          size="large"
        />
      </div>
      <!-- Nav -->
      <div class="pt-2">
        <nav
          class="flex items-center w-[394px] h-8 border rounded-lg border-gray-400 cursor-pointer bg-white"
        >
          <div
            class="flex h-full items-center px-3 py-2 text-gray-800"
            :class="{ 'border-blue-500': content === 1 }"
            @click="content = 1"
          >
            <i class="bx bx-phone text-xl mr-1"></i>
            <p class="text-lg">Call</p>
          </div>
          <div
            class="flex h-full items-center px-3 py-2 text-gray-800 border"
            :class="{ 'border-blue-500': content === 2 }"
            @click="content = 2"
          >
            <i class="bx bx-envelope text-xl mr-1"></i>
            <p class="text-lg">Email</p>
          </div>
          <div
            class="flex h-full items-center px-3 py-2 text-gray-800 border"
            :class="{ 'border-blue-500': content === 3 }"
            @click="content = 3"
          >
            <i class="bx bx-calendar text-xl mr-1"></i>
            <p class="text-lg">Tasks</p>
          </div>
          <div
            class="flex h-full items-center px-3 py-2 text-gray-800"
            :class="{ 'border-blue-500': content === 4 }"
            @click="content = 4"
          >
            <i class="bx bx-calendar text-xl mr-1"></i>
            <p class="text-lg">Deadline</p>
          </div>
        </nav>
      </div>
      <!-- Nav's item -->
      <!-- Call -->
      <div v-show="content === 1" class="flex-col">
        <div class="w-[70%] py-2">
          <el-input
            v-model="textarea"
            maxlength="60"
            show-word-limit
            type="textarea"
            class="bg-bgyellow"
          />
        </div>
        <div>
          <Select />
        </div>
      </div>
      <!-- Email -->
      <div v-show="content === 2" class="flex">
        <div>
          <p>Email</p>
          <!-- <input type="text" placeholder="Input" class="border p-2 rounded-md" /> -->
        </div>
        <div>
          <Select />
        </div>
      </div>
      <!-- Tasks -->
      <div v-show="content === 3" class="flex">
        <div>
          <p>Tasks</p>
          <!-- <input type="text" placeholder="Input" class="border p-2 rounded-md" /> -->
        </div>
        <div>
          <Select />
        </div>
      </div>
      <!-- Deadline -->
      <div v-show="content === 4" class="flex">
        <div>
          <p>Deadline</p>
          <!-- <input type="text" placeholder="Input" class="border p-2 rounded-md" /> -->
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
  border-radius: 5px;
}
.border-blue-500 p {
  color: #0087ff;
}
</style>
