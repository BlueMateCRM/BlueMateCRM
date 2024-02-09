<script setup>
import { ref, onMounted } from "vue";
const input = ref("");
const content = ref(null);
onMounted(() => {
  content.value = 1;
});
</script>

<template>
  <header
    class="w-full flex items-center justify-between shadow-lg sticky top-0 left-0 z-50 bg-white"
  >
    <!-- status list -->
    <nav class="flex text-base cursor-pointer">
      <div
        class="font-semibold py-4 px-3"
        :class="{ price: content == 1 }"
        @click="content = 1"
      >
        Quotes
      </div>
      <div
        class="font-semibold py-4 px-3"
        :class="{ price: content == 2 }"
        @click="content = 2"
      >
        Follow up
      </div>
      <div
        class="font-semibold py-4 px-3"
        :class="{ price: content == 3 }"
        @click="content = 3"
      >
        Warm
      </div>
      <div
        class="font-semibold py-4 px-3"
        :class="{ price: content == 4 }"
        @click="content = 4"
      >
        Ongiong
      </div>
      <div
        class="font-semibold py-4 px-3"
        :class="{ price: content == 5 }"
        @click="content = 5"
      >
        Upcoming
      </div>
      <div
        class="font-semibold py-4 px-3"
        :class="{ price: content == 6 }"
        @click="content = 6"
      >
        On hold
      </div>
      <div
        class="font-semibold py-4 px-3"
        :class="{ price: content == 7 }"
        @click="content = 7"
      >
        Archived
      </div>
    </nav>

    <!-- details -->
    <div class="flex items-center pr-4">
      <el-input v-model="input" placeholder="Search" />
      <div class="flex items-center ml-12">
        <i class="bx bx-bulb text-3xl text-gray-300"></i>
        <div
          class="rounded-full w-10 h-10 overflow-hidden border-[3px] border-darkBlue ml-3"
        >
          <img
            src="https://images.unsplash.com/profile-1534796299842-cfc036c59a04?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
            alt="avatar"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.price {
  border-bottom: 2px solid #0087ff;
  background-color: #ddf2fd;
}
</style>
