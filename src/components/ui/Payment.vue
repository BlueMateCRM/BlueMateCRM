<script setup lang="ts">
import { ref } from 'vue';
import PaymentTable from '../tables/PaymentTable.vue';
let create = ref(false);

</script>

<template>
  <div>

    <div class="px-4 py-8" v-show="!create">
      <div
        class="flex items-center justify-center border-dashed border border-gray-600 bg-gray-200 p-6 text-center rounded-md">
        <div class="">
          <label class="bg-mainBlue text-white py-2 px-10 rounded-md cursor-pointer" @click="create = true">Create a
            payment</label>
        </div>
      </div>
    </div>
    <div v-show="create">
      <PaymentTable />
      <div class="flex justify-end px-4 py-2">
        <label class="bg-mainBlue text-white py-2 px-10 rounded-md cursor-pointer"  @click="create = false">Create a
          payment</label>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
