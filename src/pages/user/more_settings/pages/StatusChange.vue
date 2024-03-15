<script setup lang="ts">
import { automationHeader } from "../../../../data/tableData.ts";
import { automation } from "../../../../data/staticData.ts";
import SettingsHeader from "../../../../components/ui/headers/SettingsHeader.vue";
import AppTable from "../../../../components/tables/app/AppTable.vue";
import Select from "../../../../components/ui/form_elements/Select.vue";
</script>

<template>
  <SettingsHeader
    title="Status automation"
    name="automation"
    :length="automation.length"
  >
    <template #action>
      <Select />
    </template>
  </SettingsHeader>
  <AppTable :data="automation" :headers="automationHeader">
    <template #td_name="{ item }">
      <span class="text-mainBlue font-medium cursor-pointer">
        {{ item?.name }}
      </span>
    </template>
    <template #td_email="{ item }">
      <span v-if="item?.email">{{ item?.email }}</span>
      <span v-else class="text-gray-400">Empty</span>
    </template>
    <template #td_sms="{ item }">
      <span v-if="item?.sms">{{ item?.sms }}</span>
      <span v-else class="text-gray-400">Empty</span>
    </template>
    <template #td_status="{ item }">
      <span v-if="item?.status">Active</span>
      <span v-else class="text-red-500">Inactive</span>
    </template>
  </AppTable>
</template>

<style scoped></style>
