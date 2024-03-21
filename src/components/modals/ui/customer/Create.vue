<script setup lang="ts">
import { ref, reactive } from "vue";
import AppModal from "../AppModal.vue";
import AppAccordion from "@/components/accordions/AppAccordion.vue";
import BaseAccardion from "@/components/accordions/BaseAccardion.vue";

// modal open-close
const dialog = ref(false);
const openModal = () => {
  dialog.value = true;
};
defineExpose({ openModal });

// send form
const customer = reactive({
  user_name: "",
  user_email: "",
  user_phone: "",
  user_note: "",
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
          <h3 class="font-medium text-darkBlue">New Customer</h3>
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
          <!-- name -->
          <div class="flex items-center mb-[10px]">
            <label class="flex items-center w-1/4" for="customer_user_name">
              <i class="bx bxs-car text-mainBlue text-lg mr-[10px]"></i>
              <span class="text-darkBlue font-medium capitalize"> Name </span>
            </label>
            <input
              id="customer_user_name"
              v-model="customer.user_name"
              required
              type="text"
              placeholder="Empty"
              class="w-3/4 py-[2px] px-2 rounded border border-gray-300 outline-none"
            />
          </div>
          <!-- email -->
          <div class="flex items-center mb-[10px]">
            <label class="flex items-center w-1/4" for="customer_user_email">
              <i class="bx bxs-car text-mainBlue text-lg mr-[10px]"></i>
              <span class="text-darkBlue font-medium capitalize"> Email </span>
            </label>
            <input
              id="customer_user_email"
              v-model="customer.user_email"
              required
              type="email"
              placeholder="Empty"
              class="w-3/4 py-[2px] px-2 rounded border border-gray-300 outline-none"
            />
          </div>
          <!-- phone -->
          <div class="flex items-center py-[5px]">
            <label class="flex items-center w-1/4" for="customer_user_phone">
              <i class="bx bxs-car text-mainBlue text-lg mr-[10px]"></i>
              <span class="text-darkBlue font-medium capitalize"> Phone </span>
            </label>
            <input
              id="customer_user_phone"
              v-model="customer.user_phone"
              required
              type="text"
              placeholder="Empty"
              class="w-3/4 py-[2px] px-2 rounded border border-gray-300 outline-none"
            />
          </div>
          <!-- add -->
          <div class="flex items-center py-[5px]">
            <div class="w-1/4"></div>
            <div class="w-3/4 text-[#A4A4A4] cursor-pointer">+ add</div>
          </div>
          <div class="mt-[14.5px]">
            <label
              class="text-darkBlue font-medium block mb-[5px]"
              for="customer_user_note"
            >
              Note about the customer
            </label>
            <input
              id="customer_user_note"
              v-model="customer.user_note"
              type="text"
              placeholder="Empty"
              class="w-full py-[2px] px-2 rounded border border-gray-300 outline-none"
            />
          </div>
        </div>
      </form>
    </div>
  </AppModal>
</template>

<style scoped></style>
