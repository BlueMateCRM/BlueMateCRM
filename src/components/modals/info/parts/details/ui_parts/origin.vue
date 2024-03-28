<script setup lang="ts">
import { ref, reactive } from "vue";
import BaseAccardion from "../../../../../accordions/BaseAccardion.vue";
import axios from "../../../../../../api/axios.ts";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  data: {
    type: Object,
    required: true,
  },
  editFunction: {
    type: Function,
    required: true,
  },
  openAll: {
    type: Boolean,
    reqired: true,
  },
});
const isOpenEdit = ref<boolean>(true);
const vehicle = reactive({
  pickup_city: "",
  pickup_state: "",
  pickup_zip: "",
});

const pickup_zip_array = ref<any>([]);
const city_id = ref<number>(0);
const getZip = async (e: any) => {
  const res = await axios.get(
    `/api/address/cities-list/?page=1&pageSize=10&q=${e.target.value}`
  );
  pickup_zip_array.value = res.data.data;
  vehicle.pickup_city = res.data.data?.[0]?.id;
};
const selectZip = (item: any) => {
  vehicle.pickup_city = item?.name;
  vehicle.pickup_state = item?.state?.name;
  vehicle.pickup_zip = item?.zip;
  city_id.value = +item?.id;
  pickup_zip_array.value = [];
};

const openEditForm = () => {
  isOpenEdit.value = false;
  vehicle.pickup_city = props.data?.name;
  vehicle.pickup_state = props.data?.state?.name;
  vehicle.pickup_zip = props.data?.zip;
};

const submitData = () => {
  props.editFunction({ origin: city_id.value });
  isOpenEdit.value = true;
};
</script>

<template>
  <form @submit.prevent="submitData">
    <!-- active -->
    <div
      v-if="isOpenEdit && !props.openAll"
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
            @click="openEditForm"
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
            v-if="!props.openAll"
            class="px-1 text-sm min-w-[45px] rounded text-textBlack bg-white border border-gray-300"
            @click="isOpenEdit = !isOpenEdit"
          >
            Cancel
          </button>
          <button
            type="submit"
            v-if="!props.openAll"
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
              required
              placeholder="empty"
              v-model="vehicle.pickup_city"
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
              required
              placeholder="empty"
              v-model="vehicle.pickup_state"
              class="w-[65%] py-[2px] px-2 rounded border border-gray-300 outline-none"
            />
          </div>
          <!-- 3 -->
          <div class="flex items-center">
            <label for="origin_vehicle_zip" class="w-[35%] text-textBlack">
              Pickup zip
            </label>
            <div class="relative w-[65%]">
              <input
                id="origin_vehicle_zip"
                v-model="vehicle.pickup_zip"
                required
                placeholder="empty"
                @input="getZip"
                class="w-full py-[2px] px-2 rounded border border-gray-300 outline-none"
              />
              <ul
                v-if="pickup_zip_array?.length > 0"
                class="variant-emnu absolute left-0 top-[30px] z-50 w-full duration-200 bg-white rounded-md border border-gray-300"
                :class="
                  pickup_zip_array?.length > 0
                    ? 'max-h-[145px] overflow-y-auto'
                    : 'max-h-0'
                "
              >
                <li
                  v-for="(item, index) in pickup_zip_array"
                  :key="index + 'TRRFFG'"
                  class="px-2 py-1 text-sm hover:bg-gray-100 duration-100 cursor-pointer"
                  @click="selectZip(item)"
                >
                  {{ item?.zip }}
                </li>
              </ul>
            </div>
          </div>
        </template>
      </BaseAccardion>
    </template>
  </form>
</template>

<style scoped></style>
