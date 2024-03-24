<script setup lang="ts">
import { ref, reactive } from "vue";
import BaseAccardion from "../../../../../accordions/BaseAccardion.vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
const isOpenEdit = ref<boolean>(true);
const vehicle = reactive({
  pickup_city: "",
  pickup_state: "",
  pickup_zip: "",
});
</script>

<template>
  <!-- active -->
  <div
    v-if="isOpenEdit"
    class="py-1 px-2 flex gap-x-4 hover:bg-gray-100 cursor-pointer duration-200 group"
  >
    <div class="w-1/3 text-nowrap overflow-hidden">
      <i class="bx bxs-car text-mainBlue mr-2"></i>
      <span class="text-darkBlue font-medium">Origin</span>
    </div>
    <div class="w-2/3 flex justify-between items-center">
      <p class="text-textBlack text-sm">
        {{ props.title }}
      </p>
      <div class="flex opacity-0 group-hover:opacity-100 duration-200">
        <div
          @click="isOpenEdit = !isOpenEdit"
          class="bg-white w-5 h-5 rounded border border-gray-200 flex items-center justify-center"
        >
          <i class="bx bx-pencil text-sm text-textBlack"></i>
        </div>
        <div
          class="bg-white w-5 h-5 rounded border border-gray-200 flex items-center justify-center ml-1"
        >
          <i class="bx bx-copy text-sm text-textBlack"></i>
        </div>
      </div>
    </div>
  </div>

  <!-- edit -->
  <template v-else>
    <BaseAccardion
      :isOpen="true"
      class="mb-[10px] px-[10px] py-[5px] hover:bg-bglightGray"
    >
      <template #title>
        <div class="flex items-center">
          <i class="bx bxs-car text-mainBlue text-lg mr-[10px]"></i>
          <span class="text-darkBlue font-medium capitalize"> Pickup </span>
        </div>
      </template>
      <template #btns>
        <button
          type="button"
          class="px-1 text-sm min-w-[45px] rounded text-textBlack bg-white border border-gray-300"
          @click="isOpenEdit = !isOpenEdit"
        >
          Cancel
        </button>
        <button
          type="submit"
          class="px-1 text-sm min-w-[45px] rounded text-white bg-mainBlue font-medium ml-[6px]"
        >
          Save
        </button>
      </template>
      <template #body>
        <!-- 1 -->
        <div class="flex items-center mb-[10px]">
          <label for="origin_p_city" class="w-[35%] text-textBlack">
            Pickup city
          </label>
          <input
            id="origin_p_city"
            v-model="vehicle.pickup_city"
            required
            placeholder="empty"
            class="w-[65%] py-[2px] px-2 rounded border border-gray-300 outline-none"
          />
        </div>
        <!-- 2 -->
        <div class="flex items-center mb-[10px]">
          <label for="origin_p_state" class="w-[35%] text-textBlack">
            Pickup state
          </label>
          <input
            id="origin_p_state"
            v-model="vehicle.pickup_state"
            required
            placeholder="empty"
            class="w-[65%] py-[2px] px-2 rounded border border-gray-300 outline-none"
          />
        </div>
        <!-- 3 -->
        <div class="flex items-center">
          <label for="origin_vehicle_zip" class="w-[35%] text-textBlack">
            Pickup zip
          </label>
          <input
            id="origin_vehicle_zip"
            v-model="vehicle.pickup_zip"
            required
            placeholder="empty"
            class="w-[65%] py-[2px] px-2 rounded border border-gray-300 outline-none"
          />
        </div>
      </template>
    </BaseAccardion>
  </template>
</template>

<style scoped></style>
