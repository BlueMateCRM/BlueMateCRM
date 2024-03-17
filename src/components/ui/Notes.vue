<script setup lang="ts">
import BlotFormatter from "quill-blot-formatter";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import { QuillEditor } from "@vueup/vue-quill";
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
</template>


<style scoped></style>