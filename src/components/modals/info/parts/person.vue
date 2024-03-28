<script setup lang="ts">
import { ref, reactive } from "vue";
import BaseAccardion from "../../../accordions/BaseAccardion.vue";
import { useLeadStore } from "../../../../stores/user/lead.ts";
import axios from "../../../../api/axios.ts";

const leadStore = useLeadStore();
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
  reload: {
    type: Function,
    required: true,
  },
});
const client = reactive({
  id: 0,
  name: "",
  email: "",
  phone: "",
});
const open = ref<boolean>(true);
const isOpenEdit = ref<boolean>(true);

const openEditForm = () => {
  isOpenEdit.value = false;
  client.name = props.data?.customer?.name;
  client.email = props.data?.customer?.email;
  client.phone = props.data?.customer?.phone;
};

const customer_array = ref<any>([]);
const getCustomer = async (e: any) => {
  const res = await axios.get(
    `/api/customers/?name=${e.target.value}&page=1&pageSize=10`
  );
  customer_array.value = res.data.data;
  console.log(customer_array.value);
};
const selectCustomer = (item: any) => {
  client.name = item?.name;
  client.email = item?.email;
  client.phone = item?.phone;
  client.id = item?.id;
  customer_array.value = [];
};

const updateLead = async () => {
  await leadStore.updateLead(props.data?.guid, {
    status: "leads",
    price: 0,
    reservationPrice: 200,
    vehicleYear: +props.data?.vehicleYear,
    condition: props.data?.condition,
    trailerType: props.data?.trailerType,
    notes: props.data?.notes,
    dateEstShip: props.data?.dateEstShip,
    vehicle: +props.data?.vehicle?.id,
    source: +props.data?.source?.id,
    origin: +props.data?.origin?.id,
    destination: +props.data?.destionation?.id,
    customer: +client.id,
  });
  await props.reload(props.data?.guid, props.data?.i);
  isOpenEdit.value = true;
};
</script>

<template>
  <div>
    <!-- head -->
    <div
      class="py-1 w-full flex items-center justify-between pr-2 cursor-pointer hover:bg-gray-100 duration-200"
    >
      <div class="flex items-center" @click="open = !open">
        <i
          class="bx bx-chevron-down text-3xl duration-500"
          :class="open ? 'rotate-180' : 'rotate-0'"
        ></i>
        <p class="font-semibold">Person</p>
      </div>
      <div class="flex items-center">
        <div class="flex">
          <div
            @click="openEditForm"
            class="bg-white w-5 h-5 mx-1 rounded border border-gray-300 flex items-center justify-center"
          >
            <i class="bx bx-pencil text-sm text-textBlack"></i>
          </div>
          <button class="w-6 h-5 rounded border border-gray-200 bg-white">
            <i class="bx bx-dots-horizontal-rounded text-sm text-textBlack"></i>
          </button>
        </div>
      </div>
    </div>
    <!-- body -->
    <div
      class="overflow-hidden transition-all duration-200"
      :class="open ? 'max-h-[2000px]' : 'max-h-0'"
    >
      <!-- active -->
      <div
        v-if="isOpenEdit"
        class="py-1 px-2 flex gap-x-4 hover:bg-gray-100 cursor-pointer duration-200 group"
      >
        <div class="w-1/3 text-nowrap overflow-hidden">
          <i class="bx bxs-car text-mainBlue mr-2"></i>
          <span class="text-darkBlue font-medium">Name</span>
        </div>
        <div class="w-2/3 flex justify-between items-center">
          <p class="text-textBlack text-sm">
            {{ props.data?.customer?.name }}
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
      <div
        v-if="isOpenEdit"
        class="py-1 px-2 flex gap-x-4 hover:bg-gray-100 cursor-pointer duration-200 group"
      >
        <div class="w-1/3 text-nowrap overflow-hidden">
          <i class="bx bxs-car text-mainBlue mr-2"></i>
          <span class="text-darkBlue font-medium">Email</span>
        </div>
        <div class="w-2/3 flex justify-between items-center">
          <p class="text-textBlack text-sm">
            {{ props.data?.customer?.email }}
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
      <div
        v-if="isOpenEdit"
        class="py-1 px-2 flex gap-x-4 hover:bg-gray-100 cursor-pointer duration-200 group"
      >
        <div class="w-1/3 text-nowrap overflow-hidden">
          <i class="bx bxs-car text-mainBlue mr-2"></i>
          <span class="text-darkBlue font-medium">Phone</span>
        </div>
        <div class="w-2/3 flex justify-between items-center">
          <p class="text-textBlack text-sm">
            {{ props.data?.customer?.phone }}
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
      <BaseAccardion
        v-else
        :isOpen="true"
        class="mb-[10px] px-[10px] py-[5px] hover:bg-bglightGray"
      >
        <template #title>
          <div class="flex items-center">
            <i class="bx bxs-car text-mainBlue text-lg mr-[10px]"></i>
            <span class="text-darkBlue font-medium capitalize"> Client </span>
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
            @click="updateLead"
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
            <label for="client_name" class="w-[35%] text-textBlack">
              Name<span class="text-red-500">*</span>
            </label>
            <div class="relative w-[65%]">
              <input
                id="client_name"
                v-model="client.name"
                required
                placeholder="empty"
                @input="getCustomer"
                class="w-full py-[2px] px-2 rounded border border-gray-300 outline-none"
              />
              <ul
                v-if="customer_array?.length > 0"
                class="variant-emnu absolute left-0 top-[30px] z-50 w-full duration-200 bg-white rounded-md border border-gray-300"
                :class="
                  customer_array?.length > 0
                    ? 'max-h-[145px] overflow-y-auto'
                    : 'max-h-0'
                "
              >
                <li
                  v-for="(item, index) in customer_array"
                  :key="index + 'TRRFFG'"
                  class="px-2 py-1 text-sm hover:bg-gray-100 duration-100 cursor-pointer"
                  @click="selectCustomer(item)"
                >
                  {{ item?.name }}
                </li>
              </ul>
            </div>
          </div>
          <!-- 2 -->
          <div class="flex items-center mb-[10px]">
            <label for="client_email" class="w-[35%] text-textBlack">
              Email<span class="text-red-500">*</span>
            </label>
            <input
              id="client_email"
              v-model="client.email"
              required
              placeholder="empty"
              disabled
              class="w-[65%] py-[2px] px-2 rounded border border-gray-300 outline-none"
            />
          </div>
          <!-- 3 -->
          <div class="flex items-center mb-[10px]">
            <label for="client_phone" class="w-[35%] text-textBlack">
              Phone<span class="text-red-500">*</span>
            </label>
            <input
              id="client_phone"
              v-model="client.phone"
              required
              placeholder="empty"
              disabled
              class="w-[65%] py-[2px] px-2 rounded border border-gray-300 outline-none"
            />
          </div>
        </template>
      </BaseAccardion>
    </div>
  </div>
</template>

<style scoped></style>
