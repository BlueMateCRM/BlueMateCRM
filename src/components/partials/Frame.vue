<script setup>
import { ref, onMounted } from "vue";
const content = ref(null);
onMounted(() => {
  content.value = 1;
});
</script>
<template>
  <div class="w-full">
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
    <div class="h-[7vh] w-full border rounded-b-md border-gray-400"></div>
  </div>
</template>


<style scoped>
.price {
  border-bottom: 2px solid #0087ff;
  background-color: #ddf2fd;
}
</style>