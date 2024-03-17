<script setup lang="ts">
import { contactHeaders } from "../../data/tableData.ts";
import { contacts } from "../../data/staticData.ts";
import TableHeader from "../ui/headers/TableHeader.vue";
// import { ref } from "vue";
// import InfoModal from "../modals/InfoModal.vue";

// const showModal = ref<boolean>(false);
// const singleData = ref<any>({});

// function hideModal() {
//   showModal.value = false;
// }
// function openModal(data: any) {
//   singleData.value = data;
//   showModal.value = true;
// }

// function getDataByNum(index: number | object) {
//   if (typeof index === "number") {
//     singleData.value = { ...contacts[index], i: index };
//   }
// }
</script>

<template>
  <section>
    <!-- <InfoModal
      :close="hideModal"
      :show="showModal"
      :data="singleData"
      :next="getDataByNum"
      :length="contacts.length"
    /> -->
    <TableHeader title="customer" />
    <AppTable :data="contacts" :headers="contactHeaders">
      <template #td_customer="{ item }">
        <!-- @click="openModal(item)" -->
        <span class="text-mainBlue cursor-pointer font-medium">
          {{ item?.customer }}
        </span>
      </template>
      <template #td_status="{ item }">
        <span v-if="item?.status" class="text-green-500">Active</span>
        <span v-else class="text-red-500">Inactive</span>
      </template>
      <template #td_price="{ item }">
        <p>
          <span class="text-mainBlue font-bold mr-[2px]">$</span>
          <span>{{ item?.price }}</span>
        </p>
      </template>
      <template #td_note>
        <i class="bx bxs-file text-mainBlue text-lg"></i>
      </template>
    </AppTable>
  </section>
</template>

<style scoped></style>
