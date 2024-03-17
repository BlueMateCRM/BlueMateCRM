<script setup lang="ts">
import { ref } from "vue";
import BlotFormatter from "quill-blot-formatter";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import { QuillEditor } from "@vueup/vue-quill";
const select3 = ref("");
const options = [
  {
    value: "value",
    label: "label",
  },
  {
    value: "Option2",
    label: "Option2",
  },
  {
    value: "Option3",
    label: "Option3",
  },
  {
    value: "Option4",
    label: "Option4",
  },
  {
    value: "Option5",
    label: "Option5",
  },
];
const phone = [
  {
    value: "(929) 567-123",
    label: "(929) 567-123",
  }
]
const valuephone = ref("");


var toolbarOptions = [
  "bold",
  "italic",
  "underline",
  "link",
  "image",
  { list: "bullet" },
  { list: "ordered" },
  { indent: "-1" },
  { indent: "+1" },
  "clean",
];

const modules = {
  name: "blotFormatter",
  module: BlotFormatter,
  options: {
    upload: (file: File) => {
      console.log(file);
    },
  },
};
</script>
<template>
  <div>
    <div>
      <div class="">
        <div class="flex items-center space-x-3 px-3">
          <p>From:</p>
          <el-select v-model="valuephone" style="width: 150px">
            <el-option v-for="item in phone" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </div>
        <hr class="border-t border-solid border-gray-300 w-full" />
        <div class="flex items-center space-x-3 px-3">
          <p>To:</p>
          <input type="text" class="h-10 focus:border-none focus:outline-none focus:ring-0"
            placeholder="(929) 592-3003">
        </div>
        <hr class="border-t border-solid border-gray-300 w-full" />
        <div class="flex items-center space-x-3 px-3 py-1">
          <el-select v-model="select3" clearable placeholder="Choose from template" style="width: 300px">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
          <el-select v-model="select3" clearable placeholder="Insert a field" style="width: 150px">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </div>
        <!-- <hr class="border-t border-solid border-gray-300 w-full" /> -->

        <div>
          <QuillEditor :modules="modules" :toolbar="toolbarOptions" />
          <div class="flex justify-end space-x-2 px-4 py-2">
            <Button class="font-semibold text-gray-700 border-bleck bg-hoverGray  px-3 text-sm rounded">
              Cancel
            </Button>
            <Button class="font-semibold text-white bg-mainBlue px-3 text-sm rounded">
              Save
            </Button>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>


<style scoped></style>