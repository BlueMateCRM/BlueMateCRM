<script setup lang="ts">
import AppModal from "../AppModal.vue";
import { ref, reactive } from "vue";

// modal open-close
const dialog = ref(false);
const openModal = () => {
  dialog.value = true;
};
defineExpose({ openModal });

// send form
const sendedData = reactive({
  fullname: "",
  initial: "",
});
const sendForm = () => {
  console.log(sendedData);
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
          <h3 class="font-medium text-darkBlue">Sign and Accept</h3>
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
              Sign
            </button>
          </div>
        </header>
        <!-- content -->
        <div class="bg-white px-6 py-4 border-t border-gray-300 rounded-b-md">
          <!-- 1 -->
          <div class="flex items-center mb-[10px]">
            <label for="fullname" class="w-[30%] font-medium text-darkBlue">
              Full Name
            </label>
            <input
              id="fullname"
              v-model="sendedData.fullname"
              required
              class="w-[70%] py-[2px] px-2 rounded border border-gray-300 outline-none"
            />
          </div>
          <!-- 2 -->
          <div class="flex items-center mb-[10px]">
            <label for="initial" class="w-[30%] font-medium text-darkBlue">
              Initials
            </label>
            <input
              id="initial"
              v-model="sendedData.initial"
              maxLength="2"
              required
              class="w-[70%] py-[2px] px-2 rounded border border-gray-300 outline-none uppercase"
            />
          </div>
          <!-- 3 -->
          <div class="flex gap-x-2">
            <div class="w-4/5">
              <h3 class="font-medium text-darkBlue mb-[2px]">
                Preview your signature
              </h3>
              <div
                class="border border-gray-300 h-[47.6px] rounded py-[10px] px-2 vajuhday text-[26px] capitalize leading-[100%]"
              >
                {{ sendedData.fullname }}
              </div>
            </div>
            <div class="w-1/5">
              <h3 class="font-medium text-darkBlue mb-[2px] text-center">
                Initials
              </h3>
              <div
                class="border border-gray-300 h-[47.6px] rounded py-[10px] vajuhday text-[26px] uppercase leading-[100%] text-center"
              >
                {{ sendedData.initial }}
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </AppModal>
</template>

<style scoped></style>
