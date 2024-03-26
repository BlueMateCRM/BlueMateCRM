<script setup lang="ts">
import { ref, reactive } from "vue";
import AppModal from "../AppModal.vue";
import BaseAccardion from "../../../accordions/BaseAccardion.vue";

// modal open-close
const dialog = ref(false);
const openModal = () => {
  dialog.value = true;
};
defineExpose({ openModal });

// send form
const carrier = reactive({
  company: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  mc_number: "",
  contact_name: "",
  phone1: "",
  phone2: "",
  email: "",
  fax: "",
});
const sendForm = () => {
  dialog.value = !dialog.value;
};
</script>

<template>
  <AppModal v-model="dialog">
    <div class="w-[420px]">
      <form @submit.prevent="sendForm">
        <!-- header -->
        <header
          class="flex bg-lightBlue items-center justify-between py-[12.5px] px-6 rounded-t-md"
        >
          <h3 class="font-medium text-darkBlue">New Carrier</h3>
          <div class="flex">
            <button
              type="button"
              class="py-[2px] px-3 min-w-[65px] rounded text-textBlack bg-white border border-gray-300"
              @click="dialog = !dialog"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="py-[2px] px-3 min-w-[65px] rounded text-white bg-mainBlue font-medium ml-[10px]"
            >
              Save
            </button>
          </div>
        </header>
        <!-- content -->
        <div class="bg-white px-6 py-5 rounded-b-md">
          <!-- company -->
          <div class="flex items-center mb-[10px]">
            <label class="flex items-center w-[35%]" for="carrier_company">
              <i class="bx bxs-car text-mainBlue text-lg mr-[10px]"></i>
              <span class="text-darkBlue font-medium"> Conpany </span>
            </label>
            <input
              id="carrier_company"
              v-model="carrier.company"
              required
              type="text"
              placeholder="Empty"
              class="w-[65%] py-[2px] px-2 rounded border border-gray-300 outline-none"
            />
          </div>
          <!-- location -->
          <BaseAccardion :isOpen="true" class="mb-[10px]">
            <template #title>
              <div class="flex items-center">
                <i class="bx bxs-car text-mainBlue text-lg mr-[10px]"></i>
                <span class="text-darkBlue font-medium"> Location </span>
              </div>
            </template>
            <template #body>
              <!-- address -->
              <div class="flex items-center mb-[10px]">
                <label for="carrier_address" class="w-[35%] text-textBlack">
                  Address
                </label>
                <input
                  id="carrier_address"
                  v-model="carrier.address"
                  required
                  placeholder="empty"
                  class="w-[65%] py-[2px] px-2 rounded border border-gray-300 outline-none"
                />
              </div>
              <!-- city -->
              <div class="flex items-center mb-[10px]">
                <label for="carrier_city" class="w-[35%] text-textBlack">
                  City
                </label>
                <input
                  id="carrier_city"
                  v-model="carrier.city"
                  required
                  placeholder="empty"
                  class="w-[65%] py-[2px] px-2 rounded border border-gray-300 outline-none"
                />
              </div>
              <!-- state -->
              <div class="flex items-center mb-[10px]">
                <label for="carrier_state" class="w-[35%] text-textBlack">
                  State
                </label>
                <input
                  id="carrier_state"
                  v-model="carrier.state"
                  required
                  placeholder="empty"
                  class="w-[65%] py-[2px] px-2 rounded border border-gray-300 outline-none"
                />
              </div>
              <!-- zip -->
              <div class="flex items-center">
                <label for="carrier_zip" class="w-[35%] text-textBlack">
                  Zip
                </label>
                <input
                  id="carrier_zip"
                  v-model="carrier.zip"
                  required
                  placeholder="empty"
                  class="w-[65%] py-[2px] px-2 rounded border border-gray-300 outline-none"
                />
              </div>
            </template>
          </BaseAccardion>
          <!-- mc number -->
          <div class="flex items-center mb-[10px]">
            <label class="flex items-center w-[35%]" for="carrier_mc_number">
              <i class="bx bxs-car text-mainBlue text-lg mr-[10px]"></i>
              <span class="text-darkBlue font-medium"> MC number </span>
            </label>
            <input
              id="carrier_mc_number"
              v-model="carrier.mc_number"
              required
              type="text"
              placeholder="Empty"
              class="w-[65%] py-[2px] px-2 rounded border border-gray-300 outline-none"
            />
          </div>
          <!-- Contact name -->
          <div class="flex items-center mb-[10px]">
            <label class="flex items-center w-[40%]" for="carrier_contact_name">
              <i class="bx bxs-car text-mainBlue text-lg mr-[10px]"></i>
              <span class="text-darkBlue font-medium"> Contact name </span>
            </label>
            <input
              id="carrier_contact_name"
              v-model="carrier.contact_name"
              required
              type="text"
              placeholder="Empty"
              class="w-[60%] py-[2px] px-2 rounded border border-gray-300 outline-none"
            />
          </div>
          <!-- phone 1 -->
          <div class="flex items-center mb-[10px]">
            <label class="flex items-center w-[35%]" for="carrier_phone1">
              <i class="bx bxs-car text-mainBlue text-lg mr-[10px]"></i>
              <span class="text-darkBlue font-medium">Phone 1 </span>
            </label>
            <input
              id="carrier_phone1"
              v-model="carrier.phone1"
              required
              type="text"
              placeholder="Empty"
              class="w-[65%] py-[2px] px-2 rounded border border-gray-300 outline-none"
            />
          </div>
          <!-- phone 2 -->
          <div class="flex items-center mb-[10px]">
            <label class="flex items-center w-[35%]" for="carrier_phone2">
              <i class="bx bxs-car text-mainBlue text-lg mr-[10px]"></i>
              <span class="text-darkBlue font-medium">Phone 2 </span>
            </label>
            <input
              id="carrier_phone2"
              v-model="carrier.phone2"
              required
              type="text"
              placeholder="Empty"
              class="w-[65%] py-[2px] px-2 rounded border border-gray-300 outline-none"
            />
          </div>
          <!-- email -->
          <div class="flex items-center mb-[10px]">
            <label class="flex items-center w-[35%]" for="carrier_email">
              <i class="bx bxs-car text-mainBlue text-lg mr-[10px]"></i>
              <span class="text-darkBlue font-medium">Email </span>
            </label>
            <input
              id="carrier_email"
              v-model="carrier.email"
              required
              type="email"
              placeholder="Empty"
              class="w-[65%] py-[2px] px-2 rounded border border-gray-300 outline-none"
            />
          </div>
          <!-- fax -->
          <div class="flex items-center">
            <label class="flex items-center w-[35%]" for="carrier_fax">
              <i class="bx bxs-car text-mainBlue text-lg mr-[10px]"></i>
              <span class="text-darkBlue font-medium">Fax </span>
            </label>
            <input
              id="carrier_fax"
              v-model="carrier.fax"
              required
              type="text"
              placeholder="Empty"
              class="w-[65%] py-[2px] px-2 rounded border border-gray-300 outline-none"
            />
          </div>
        </div>
      </form>
    </div>
  </AppModal>
</template>

<style scoped></style>
