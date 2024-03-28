<script setup lang="ts">
import { ref } from "vue";
// import BaseAccordion from "../../../../../accordions/BaseAccardion.vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  editFunction: {
    type: Function,
    required: true,
  },
  openAll: {
    type: Boolean,
    reqired: true,
  },
});
const isOpenEdit = ref<boolean>(false);
const source = ref<string>("");
const input = ref<any>(false);
const showSource = ref<boolean>(true);
const allSources = ref(["website", "phone", "email"]);

const searchSource = (e: any) => {
  if (e.target.value !== "") {
    const result = allSources.value.filter((item) => {
      if (item.includes(e.target.value)) {
        return item;
      }
    });
    allSources.value = result;
  } else {
    allSources.value = ["website", "phone", "email"];
  }
};

const selectSource = (val: string) => {
  if (props.title != val) {
    props.editFunction({ source: val });
  }
  source.value = val;
  showSource.value = true;
  input.value.value = "";
  allSources.value = ["website", "phone", "email"];
  isOpenEdit.value = false;
};

const deleteOption = () => {
  source.value = "";
  input.value.focus();
  showSource.value = false;
};

const closeEdit = () => {
  showSource.value = true;
  input.value.value = "";
  allSources.value = ["website", "phone", "email"];
  isOpenEdit.value = false;
  isOpenEdit.value = false;
};
</script>

<template>
  <div
    class="py-1 px-2 flex gap-x-4 hover:bg-gray-100 cursor-pointer duration-200 group"
  >
    <div class="w-1/3 text-nowrap overflow-hidden">
      <i class="bx bxs-car text-mainBlue mr-2"></i>
      <span class="text-darkBlue font-medium">Source</span>
    </div>
    <div class="w-2/3 flex justify-between items-center">
      <!-- title -->
      <p
        v-if="!isOpenEdit && !props.openAll"
        class="text-textBlack text-sm px-1 rounded bg-lightBlue"
      >
        {{ props.title }}
      </p>
      <!-- edit btn -->
      <div
        v-if="!isOpenEdit && !props.openAll"
        class="flex opacity-0 group-hover:opacity-100 duration-200"
      >
        <div
          @click="isOpenEdit = !isOpenEdit"
          class="bg-white w-5 h-5 rounded border border-gray-200 flex items-center justify-center"
        >
          <i class="bx bx-pencil text-sm text-textBlack"></i>
        </div>
        <div
          class="bg-white w-5 h-5 rounded border border-gray-200 flex items-center justify-center ml-1"
        >
          <i class="bx bx-copy text-sm text-textBlack"></i>
        </div>
      </div>
      <!-- edit modal -->
      <div
        v-if="isOpenEdit || props.openAll"
        class="w-full rounded-md overflow-hidden border border-gray-300"
      >
        <div class="flex gap-x-1 bg-gray-100 py-1 px-2 relative">
          <span
            v-if="showSource"
            class="flex items-center rounded-md px-1 bg-lightBlue text-mainBlue"
          >
            <span class="mr-1">{{ source || props.title }}</span>
            <i class="bx bx-x" @click="deleteOption"></i>
          </span>
          <input
            ref="input"
            type="text"
            class="bg-gray-100 outline-none grow"
            @input="searchSource"
          />
          <div
            v-if="!props.openAll"
            @click="closeEdit"
            class="absolute top-0 right-0 h-full flex items-center px-1 bg-gray-100"
          >
            <i class="bx bx-x text-textBlack text-xl"></i>
          </div>
        </div>
        <div class="bg-white py-1">
          <ul>
            <li class="text-sm text-gray-400 my-1 px-2">Select an option</li>
            <template v-if="allSources?.length > 0">
              <li
                v-for="(item, index) in allSources"
                :key="index + 'RRWWQQA'"
                @click="selectSource(item)"
                class="py-1 px-2 rounded hover:bg-gray-100 duration-200 cursor-pointer"
              >
                <span
                  class="px-[6px] py-[2px] bg-lightBlue text-mainBlue rounded text-sm"
                >
                  {{ item }}
                </span>
              </li>
            </template>
            <li v-else class="py-1 px-2 text-sm text-gray-400">Not Found</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
