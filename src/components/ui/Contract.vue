<script setup lang="ts">
import { ref } from 'vue';

let create = ref(false);

</script>

<template>
  <div class="flex flex-col space-y-4 mx-3">
    <div class="px-4 py-8" v-show="!create">
      <div
        class="flex items-center justify-center border-dashed border border-gray-600 bg-gray-200 p-6 text-center rounded-md">
        <label @click="create = true"
          class="bg-mainBlue text-white  flex items-center px-2 rounded-md cursor-pointer">Send a
          contract <i class='bx bx-chevron-down text-2xl pl-4' style='color:#ffffff'></i></label>
      </div>
    </div>

    <div v-show="create" class="pb-3">
      <div class="flex justify-between bg-gray-200 border border-gray-300 rounded">
        <div class="flex items-center">
          <i class="bx bx-file text-2xl mr-1" style="color: gray;"></i>
          <p class="text-gray-600">
            Contract is sent for #600000 at 09:37 AM 03/15/2024
          </p>
        </div>
        <div class="space-x-2 pr-2">
          <Button class="font-semibold text-mainBlue border border-mainBlue px-3 text-sm rounded">
            Track
          </Button>
          <Button class="font-semibold text-mainBlue border border-mainBlue px-3 text-sm rounded">
            SMS
          </Button>
          <Button class="font-semibold text-white bg-mainBlue px-3 text-sm rounded">
            Not-Signed
          </Button>
        </div>
      </div>
      <div class="flex justify-end pt-2">
        <label @click="create = false"
            class="bg-mainBlue text-white  flex items-center px-2 rounded-md cursor-pointer">Send a new contract
            <i class='bx bx-chevron-down text-2xl pl-4' style='color:#ffffff'></i></label>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
