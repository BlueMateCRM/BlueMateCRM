<script setup lang="ts">
import BlotFormatter from "quill-blot-formatter";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import { QuillEditor } from "@vueup/vue-quill";
import { ref } from "vue";
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
let create = ref(false);


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
    <div v-show="create">
      <QuillEditor :modules="modules" :toolbar="toolbarOptions" />
      <div class="flex justify-end space-x-2 px-4 py-2">
        <Button class="font-semibold text-gray-700 border border-gray-300 bg-bglightGray  px-3 text-sm rounded"  @click="create = false">
          Cancel
        </Button>
        <Button class="font-semibold text-white bg-mainBlue px-3 text-sm rounded">
          Save
        </Button>
      </div>
    </div>
    <div class="" v-show="!create">
      <div class="p-2 pb-5 bg-white cursor-pointer" @click="create = true">
        <p class="text-gray-400">Click here to type, @name...</p>
      </div>
    </div>
  </div>
</template>


<style scoped></style>