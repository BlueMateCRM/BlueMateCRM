<script setup lang="ts">
import { PaymentHeaders } from "../../data/tableData.ts";
import { payments } from "../../data/staticData.ts";

</script>

<template>
  <div class="w-full">
    <table class="min-w-full text-sm text-left text-gray-500">
      <!-- header -->
      <thead class="text-sm text-gray-700 bg-[#E2E8F0]">
        <tr>
          <th v-for="(item, index) in PaymentHeaders" scope="col" class="px-3 py-3 capitalize font-semibold"
            :key="index + 'CCMMB'">
            {{ item?.title }}
          </th>
        </tr>
      </thead>

      <!-- body -->
      <tbody>
        <tr v-for="(item, dataIndex) in payments" class=" bg-white border-b hover:bg-gray-100"
          :key="item.created + 'JJDF'">
          <!-- {{ item }} -->
          <td v-for="(td, tdIndex) in PaymentHeaders" class=" px-3 py-[9.5px] text-[15px]" :key="tdIndex + 'TDIndex'">
            <div class="">
              <slot :name="`td_${td.value}`" :item="{ ...item, i: dataIndex }">{{
            item[td.value]
          }}</slot>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>