<script setup lang="ts">
import { orderHeaders } from "../../data/tableData";
import { orders } from "../../data/staticData";
import AppTable from "./AppTable.vue";
</script>

<template>
  <main>
    <AppTable :data="orders" :headers="orderHeaders">
      <template #td_note>
        <div class="flex justify-center">
          <i class="bx bxs-file text-mainBlue text-lg"></i>
        </div>
      </template>
    </AppTable>
  </main>
</template>

<style scoped></style>
