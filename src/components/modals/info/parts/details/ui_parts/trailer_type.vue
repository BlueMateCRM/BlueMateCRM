<script setup lang="ts">
import { ref } from "vue";
// import BaseAccordion from "../../../../../accordions/BaseAccardion.vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
const isOpenEdit = ref<boolean>(false);
const trailer_type = ref<string>("");
const input = ref<any>(false);
const showTrailerType = ref<boolean>(true);
const allTrailerTypes = ref(["open", "enclose"]);

const searchTrailerType = (e: any) => {
  if (e.target.value !== "") {
    const result = allTrailerTypes.value.filter((item) => {
      if (item.includes(e.target.value)) {
        return item;
      }
    });
    allTrailerTypes.value = result;
  } else {
    allTrailerTypes.value = ["open", "enclose"];
  }
};

const selectTrailerType = (val: string) => {
  trailer_type.value = val;
  showTrailerType.value = true;
  input.value.value = "";
  allTrailerTypes.value = ["open", "enclose"];
  isOpenEdit.value = false;
};

const deleteOption = () => {
  trailer_type.value = "";
  input.value.focus();
  showTrailerType.value = false;
};
</script>

<template>
  <div
    class="py-1 px-2 flex gap-x-4 hover:bg-gray-100 cursor-pointer duration-200 group"
  >
    <div class="w-1/3 text-nowrap overflow-hidden">
      <i class="bx bxs-car text-mainBlue mr-2"></i>
      <span class="text-darkBlue font-medium">Trailer type</span>
    </div>
    <div class="w-2/3 flex justify-between items-center">
      <!-- title -->
      <p
        v-if="!isOpenEdit"
        class="text-textBlack text-sm px-1 rounded bg-lightBlue"
      >
        {{ props.title }}
      </p>
      <!-- edit btn -->
      <div
        v-if="!isOpenEdit"
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
        v-if="isOpenEdit"
        class="w-full rounded-md overflow-hidden shadow-xl"
      >
        <div class="flex gap-x-1 bg-gray-100 py-1 px-2">
          <span
            v-if="showTrailerType"
            class="flex items-center rounded-md px-1 bg-lightBlue text-mainBlue"
          >
            <span class="mr-1">{{ trailer_type || props.title }}</span>
            <i class="bx bx-x" @click="deleteOption"></i>
          </span>
          <input
            ref="input"
            type="text"
            class="bg-gray-100 outline-none"
            @input="searchTrailerType"
          />
        </div>
        <div class="bg-white py-1">
          <ul>
            <li class="text-sm text-gray-400 my-1 px-2">Select an option</li>
            <template v-if="allTrailerTypes?.length > 0">
              <li
                v-for="(item, index) in allTrailerTypes"
                :key="index + 'RRWWQQA'"
                @click="selectTrailerType(item)"
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
