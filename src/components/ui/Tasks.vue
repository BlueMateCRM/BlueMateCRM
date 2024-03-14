<script lang="ts" setup>
import { ref } from "vue";
import CalendarRight from "./Calendar.vue";
// import { Calendar, Search } from "@element-plus/icons-vue";
// input
const input1 = ref("");

let content = ref(1);

const select1 = ref("");
const select2 = ref("");
const select3 = ref("");

const date1 = ref("");
const date2 = ref("");
const time1 = ref("");
const time2 = ref("");

const textarea = ref("");
const options = [
  {
    value: "Option1",
    label: "Option1",
  },
  {
    value: "Option2",
    label: "Option2",
  },
  {
    value: "Option3",
    label: "Option3",
  },
  {
    value: "Option4",
    label: "Option4",
  },
  {
    value: "Option5",
    label: "Option5",
  },
];
</script>
<template>
  <div class="flex justify-end">
    <div class="w-[70%] flex-col px-6 py-2 space-y-3">
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
      <div class="">
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
      <!-- date row -->
      <div class="space-x-2">
        <el-date-picker
          v-model="date1"
          placeholder="2024-07-12"
          style="width: 140px"
        />
        <el-time-picker
          v-model="time1"
          placeholder="10:00 AM"
          format="hh:mm:ss A"
          value-format="hh:mm:ss A"
          style="width: 130px"
        />

        <el-time-picker
          v-model="time2"
          placeholder="10:00 AM"
          format="hh:mm:ss A"
          value-format="hh:mm:ss A"
          style="width: 130px"
        />
        <el-date-picker
          v-model="date2"
          placeholder="2024-07-12"
          style="width: 140px"
        />
      </div>
      <!-- select row -->
      <div>
        <el-select
          v-model="select1"
          clearable
          placeholder="Select"
          style="width: 140px"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
      <!-- select row -->
      <div>
        <el-select
          v-model="select2"
          clearable
          placeholder="Select"
          style="width: 140px"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
      <div>
        <el-input
          v-model="textarea"
          style="width: 360px; background-color: burlywood;"
          :rows="2"
          type="textarea"
        />
      </div>
      <div class="flex-coll space-y-3">
        <div>
          <el-select
            v-model="select3"
            clearable
            placeholder="Select"
            
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
        <div>
          <el-select
            v-model="select3"
            clearable
            placeholder="Select"
            
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
      </div>
    </div>
    <!-- Right Calendar -->
    <div class="w-[30%]">
      <CalendarRight />
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
