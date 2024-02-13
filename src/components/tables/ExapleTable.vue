<script setup lang="ts">
import { orderHeaders } from "../../data/tableData";
import { orders } from "../../data/staticData";
import AppTable from "./AppTable.vue";
import { ref } from "vue";
import InfoModal from "../partials/InfoModal.vue";

const showModal = ref<boolean>(false);
const singleData = ref<any>({});
function hideModal() {
  showModal.value = false;
}
function openModal(data: any) {
  singleData.value = data;
  showModal.value = true;
}

function getDataByNum(index: number | object) {
  if (typeof index === "number") {
    singleData.value = { ...orders[index], i: index };
  }
}
</script>

<template>
  <section>
    <InfoModal
      :close="hideModal"
      :show="showModal"
      :data="singleData"
      :next="getDataByNum"
      :length="orders.length"
    />
    <AppTable :data="orders" :headers="orderHeaders">
      <template #td_id="{ item }">
        <span class="text-mainBlue cursor-pointer" @click="openModal(item)">
          {{ item?.id }}
        </span>
      </template>
      <template #td_note>
        <div class="flex justify-center">
          <i class="bx bxs-file text-mainBlue text-lg"></i>
        </div>
      </template>
    </AppTable>
  </section>
</template>

<style scoped></style>
