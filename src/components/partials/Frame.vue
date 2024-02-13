<script setup>
import { ref, defineComponent } from "vue";
import { QuillEditor } from '@vueup/vue-quill';
import BlotFormatter from "quill-blot-formatter";
import '@vueup/vue-quill/dist/vue-quill.snow.css'
let content = ref(1);
var toolbarOptions = ['bold', 'italic', 'underline','link','list', 'clean'];
</script>
<template>
  <div class="w-full">
    <!-- Framening Header qismi -->
    <nav
      class="flex items-center h-[5vh] w-full gap-4 border-x border-t rounded-t-md border-gray-400 cursor-pointer"
    >
      <div
        class="flex h-full items-center p-2"
        :class="{ price: content == 1 }"
        @click="content = 1"
      >
        <i class="bx bx-notepad bx-sm"></i>
        <p class="text-lg">Notes</p>
      </div>
      <div
        class="flex h-full items-center"
        :class="{ price: content == 2 }"
        @click="content = 2"
      >
        <i class="bx bx-calendar bx-sm"></i>
        <p class="text-lg">Tasks</p>
      </div>
      <div
        class="flex h-full items-center"
        :class="{ price: content == 3 }"
        @click="content = 3"
      >
        <i class="bx bx-phone bx-sm"></i>
        <p class="text-lg">Phone</p>
      </div>
      <div
        class="flex h-full items-center"
        :class="{ price: content == 4 }"
        @click="content = 4"
      >
        <i class="bx bx-envelope bx-sm"></i>
        <p class="text-lg">Email</p>
      </div>
      <div
        class="flex h-full items-center"
        :class="{ price: content == 5 }"
        @click="content = 5"
      >
        <i class="bx bx-file bx-sm"></i>
        <p class="text-lg">Files</p>
      </div>
    </nav>
    <div class="w-full border rounded-b-md border-gray-400">
      <div v-show="content == 1" class="bg-[#FFF4CC]">
        <QuillEditor :modules="modules" :toolbar="toolbarOptions" />
      </div>
      <div v-show="content == 2">
        <p>tasks</p>
      </div>
      <div v-show="content == 3">
        <p>phone</p>
      </div>
      <div v-show="content == 4">
        <p>email</p>
      </div>
      <div v-show="content == 5">
        <p>Files</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.price {
  border-bottom: 2px solid #0087ff;
  background-color: #ddf2fd;
}
</style>