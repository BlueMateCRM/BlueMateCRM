<script setup lang="ts">
import Button from "../buttons/Button.vue";
import { ref } from "vue";

const input = ref("");
</script>

<template>
  <header
    class="border-b border-black mt-2 mb-7 bg-white flex items-end justify-between pb-[6.5px] relative z-20"
  >
    <!-- create leads -->
    <div class="flex gap-x-[10px]">
      <div
        class="w-10 border border-textGray flex items-center justify-center rounded"
      >
        <i class="bx bx-grid text-xl text-textGray"></i>
      </div>
      <div
        class="w-10 border border-mainGray flex items-center justify-center rounded"
      >
        <i class="bx bx-calendar text-xl text-textGray"></i>
      </div>
      <div class="border-l border-mainGray pl-[10px]">
        <Button class="font-semibold text-white bg-mainBlue px-3 text-sm">
          + New lead
        </Button>
      </div>
    </div>

    <!-- info & filter -->
    <div class="flex gap-x-[10px]">
      <!-- 1 -->
      <p class="font-semibold text-textGray flex items-center">
        <span>$120,000</span>
        <span class="mx-[10px] text-xs">*</span>
        <span>1-50 / 2500</span>
      </p>
      <!-- 2 -->
      <el-input v-model="input" placeholder="Search" style="width: 150px" />
      <!-- 3 -->
      <div
        class="user_settings cursor-pointer px-3 border border-mainGray flex items-center justify-center rounded relative"
      >
        <!-- constent -->
        <i class="bx bxs-down-arrow text-textGray mr-2"></i>
        <span class="font-semibold text-textGray">Ali Brain</span>
        <!-- sub menu -->
        <ul
          class="sub_menu opacity-0 invisible w-[150px] absolute top-10 right-0 bg-white border border-mainGray rounded flex flex-col py-1 shadow-lg duration-200"
        >
          <li
            class="w-full py-1 hover:bg-gray-100 duration-200 px-2 cursor-pointer"
          >
            Some Item 1
          </li>
          <li
            class="w-full py-1 hover:bg-gray-100 duration-200 px-2 cursor-pointer"
          >
            Some Item 2
          </li>
          <li
            class="w-full py-1 hover:bg-gray-100 duration-200 px-2 cursor-pointer"
          >
            Some Item 3
          </li>
          <li
            class="w-full py-1 hover:bg-gray-100 duration-200 px-2 cursor-pointer"
          >
            Some Item 4
          </li>
          <li
            class="w-full py-1 hover:bg-gray-100 duration-200 px-2 cursor-pointer"
          >
            Some Item 5
          </li>
        </ul>
      </div>
      <!-- 4 -->
      <div
        class="w-10 border border-mainGray flex items-center justify-center rounded"
      >
        <i class="bx bx-dots-horizontal-rounded text-2xl text-textGray"></i>
      </div>
    </div>
  </header>
</template>

<style scoped>
.user_settings:hover .sub_menu {
  top: 32px;
  opacity: 1;
  visibility: visible;
}
</style>
