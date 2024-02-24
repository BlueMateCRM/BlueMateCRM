<script setup lang="ts">
import { ref } from "vue";
import Checkbox from "../ui/form_elements/Checkbox.vue";

const props = defineProps({
  headers: {
    type: Array,
    required: true,
  },
  data: {
    type: Array,
    required: true,
  },
});

const isChecked = ref<boolean>(false);
function checkAll() {
  isChecked.value = !isChecked.value;
}
</script>

<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
    <table
      class="min-w-full text-sm text-left text-gray-500 dark:text-gray-400"
    >
      <!-- header -->
      <thead
        class="text-sm text-gray-700 bg-[#E2E8F0] dark:bg-[#DEF7EC] dark:text-gray-400"
      >
        <tr>
          <th scope="col" class="px-3 capitalize font-semibold">
            <Checkbox
              :checked="isChecked"
              :checkAll="checkAll"
              :isBold="true"
            />
          </th>
          <th
            v-for="(item, index) in props.headers"
            scope="col"
            class="px-3 py-3 capitalize font-semibold"
            :key="index + 'CCMMB'"
          >
            {{ item?.title }}
          </th>
        </tr>
      </thead>

      <!-- body -->
      <tbody>
        <tr
          v-for="(item, dataIndex) in props.data"
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-100"
          :key="item.id + 'JJDF'"
        >
          <td class="px-3">
            <Checkbox :checked="isChecked" :isBold="false" />
          </td>
          <td
            v-for="(td, tdIndex) in props.headers"
            class="px-3 py-[9.5px] text-[15px]"
            :key="tdIndex + 'TDIndex'"
          >
            <slot :name="`td_${td.value}`" :item="{ ...item, i: dataIndex }">{{
              item[td.value]
            }}</slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
