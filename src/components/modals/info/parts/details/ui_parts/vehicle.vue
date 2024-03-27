<script setup lang="ts">
import { ref, reactive } from "vue";
import BaseAccardion from "../../../../../accordions/BaseAccardion.vue";
import axios from "../../../../../../api/axios.ts";

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
  editFunction: {
    type: Function,
    required: true,
  },
});
const isOpenEdit = ref<boolean>(true);
const vehicle = reactive({
  year: "",
  make: "",
  model: "",
  lot: "",
  color: "",
  vin: "",
  plate: "",
});

// vehicle model
const vehicleId = ref<number>(0);
const model_array = ref<any>([]);
const getModel = async (e: any) => {
  const res = await axios.get(
    `/api/cars/models-list/?page=1&pageSize=10&q=${e.target.value}`
  );
  model_array.value = res.data.data;
};
const selectModel = (item: any) => {
  vehicle.model = item?.name;
  vehicle.make = item?.mark?.name;
  vehicleId.value = +item?.id;
  model_array.value = [];
};

const submidData = () => {
  props.editFunction({ vehicle: vehicleId.value });
  isOpenEdit.value = !isOpenEdit.value;
};
</script>

<template>
  <form @submit.prevent="submidData">
    <!-- active -->
    <div
      v-if="isOpenEdit"
      class="py-1 px-2 flex gap-x-4 hover:bg-gray-100 cursor-pointer duration-200 group"
    >
      <div class="w-1/3 text-nowrap overflow-hidden">
        <i class="bx bxs-car text-mainBlue mr-2"></i>
        <span class="text-darkBlue font-medium">Vehicle</span>
      </div>
      <div class="w-2/3 flex justify-between items-center">
        <p class="text-textBlack text-sm">
          {{ props.data?.name }}
        </p>
        <div class="flex opacity-0 group-hover:opacity-100 duration-200">
          <div
            type="button"
            @click="isOpenEdit = !isOpenEdit"
            class="bg-white w-5 h-5 rounded border border-gray-200 flex items-center justify-center"
          >
            <i class="bx bx-pencil text-sm text-textBlack"></i>
          </div>
          <div
            type="submit"
            @click="props.editFunction"
            class="bg-white w-5 h-5 rounded border border-gray-200 flex items-center justify-center ml-1"
          >
            <i class="bx bx-copy text-sm text-textBlack"></i>
          </div>
        </div>
      </div>
    </div>

    <!-- edit -->
    <BaseAccardion
      v-else
      :isOpen="true"
      class="mb-[10px] px-[10px] py-[5px] hover:bg-bglightGray"
    >
      <template #title>
        <div class="flex items-center">
          <i class="bx bxs-car text-mainBlue text-lg mr-[10px]"></i>
          <span class="text-darkBlue font-medium capitalize"> Vehicle </span>
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
          class="px-1 text-sm min-w-[45px] rounded text-white bg-mainBlue font-medium mx-[6px]"
        >
          Save
        </button>
        <button
          type="button"
          class="w-[30px] h-[23px] flex items-center justify-center rounded border border-gray-300 font-medium text-textBlack"
        >
          +
        </button>
      </template>
      <template #body>
        <!-- 1 -->
        <div class="flex items-center mb-[10px]">
          <label for="v_year" class="w-[35%] text-textBlack">
            Vehicle year<span class="text-red-500">*</span>
          </label>
          <input
            id="v_year"
            required
            placeholder="empty"
            disabled
            :value="vehicle.year || props.data.year"
            class="w-[65%] py-[2px] px-2 rounded border border-gray-300 outline-none"
          />
        </div>
        <!-- 2 -->
        <div class="flex items-center mb-[10px]">
          <label for="v_make" class="w-[35%] text-textBlack">
            Vehicle make<span class="text-red-500">*</span>
          </label>
          <input
            id="v_make"
            required
            placeholder="empty"
            disabled
            :value="vehicle.make || props.data.make"
            class="w-[65%] py-[2px] px-2 rounded border border-gray-300 outline-none"
          />
        </div>
        <!-- 3 -->
        <div class="flex items-center mb-[10px]">
          <label for="v_model" class="w-[35%] text-textBlack">
            Vehicle model<span class="text-red-500">*</span>
          </label>
          <div class="relative w-[65%]">
            <input
              id="v_model"
              v-model="vehicle.model"
              required
              placeholder="empty"
              @input="getModel"
              class="w-full py-[2px] px-2 rounded border border-gray-300 outline-none"
            />
            <ul
              v-if="model_array?.length > 0"
              class="variant-emnu absolute left-0 top-[30px] z-50 w-full duration-200 bg-white rounded-md border border-gray-300"
              :class="
                model_array?.length > 0
                  ? 'max-h-[145px] overflow-y-auto'
                  : 'max-h-0'
              "
            >
              <li
                v-for="(item, index) in model_array"
                :key="index + 'TRRFFG'"
                class="px-2 py-1 text-sm hover:bg-gray-100 duration-100 cursor-pointer"
                @click="selectModel(item)"
              >
                {{ item?.name }}
              </li>
            </ul>
          </div>
        </div>
        <!-- 4 -->
        <!-- <div class="flex gap-x-2">
          <div class="w-[34%]">
            <div class="flex items-center mb-[10px]">
              <label for="v_lot" class="w-[45%] text-textBlack"> Lot </label>
              <input
                id="v_lot"
                v-model="vehicle.lot"
                required
                placeholder="empty"
                class="w-[55%] py-[2px] px-2 rounded border border-gray-300 outline-none"
              />
            </div>
            <div class="flex items-center">
              <label for="v_color" class="w-[45%] text-textBlack">
                Color
              </label>
              <input
                id="v_color"
                v-model="vehicle.color"
                required
                placeholder="empty"
                class="w-[55%] py-[2px] px-2 rounded border border-gray-300 outline-none"
              />
            </div>
          </div>
          <div class="w-[66%]">
            <div class="flex items-center mb-[10px]">
              <label for="v_vin" class="w-[22%] text-textBlack"> VIN </label>
              <input
                id="v_vin"
                v-model="vehicle.vin"
                required
                placeholder="empty"
                class="w-[78%] py-[2px] px-2 rounded border border-gray-300 outline-none"
              />
            </div>
            <div class="flex items-center">
              <label for="v_plate" class="w-[22%] text-textBlack">
                Plate
              </label>
              <input
                id="v_plate"
                v-model="vehicle.plate"
                required
                placeholder="empty"
                class="w-[78%] py-[2px] px-2 rounded border border-gray-300 outline-none"
              />
            </div>
          </div>
        </div> -->
      </template>
    </BaseAccardion>
  </form>
</template>

<style scoped>
.variant-emnu::-webkit-scrollbar {
  width: 8px;
}
.variant-emnu::-webkit-scrollbar-track {
  background-color: #fff;
}
.variant-emnu::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.4);
  border-radius: 15px;
}
</style>
