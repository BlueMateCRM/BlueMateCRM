<script setup lang="ts">
import { ref } from "vue";
import Files from "../ui/Files.vue";
import Tasks from "../ui/Tasks.vue";
import Phone from "../ui/Phone.vue";
import Notes from "../ui/Notes.vue";
import Email from "../ui/Email.vue";
import Contact from "../ui/Contract.vue";
import Payment from "../ui/Payment.vue";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
let content = ref(1);

import { useRoute } from "vue-router";
const route = useRoute();
</script>
<template>
  <!-- <pre>{{ route.path.split('/').pop() }}</pre> -->
  <div class="w-full">
    <!-- Frame Header -->
    <nav
      class="flex items-center w-full gap-2 border-x border-t rounded-t-md border-gray-400 cursor-pointer bg-white"
    >
      <div
        class="flex h-full items-center px-3 py-2 text-gray-800"
        :class="{ price: content == 1 }"
        @click="content = 1"
      >
        <i class="bx bx-notepad text-2xl mr-1"></i>
        <p class="text-lg">Notes</p>
      </div>
      <div
        class="flex h-full items-center px-3 py-2 text-gray-800"
        :class="{ price: content == 2 }"
        @click="content = 2"
      >
        <i class="bx bx-calendar text-2xl mr-1"></i>
        <p class="text-lg">Tasks</p>
      </div>
      <div
        class="flex h-full items-center px-3 py-2 text-gray-800"
        :class="{ price: content == 3 }"
        @click="content = 3"
      >
        <i class="bx bx-phone text-2xl mr-1"></i>
        <p class="text-lg">SMS</p>
      </div>
      <div
        class="flex h-full items-center px-3 py-2 text-gray-800"
        :class="{ price: content == 4 }"
        @click="content = 4"
      >
        <i class="bx bx-envelope text-2xl mr-1"></i>
        <p class="text-lg">Email</p>
      </div>
      <div
        v-if="route.path !== '/user/leads'"
        class="flex h-full items-center px-3 py-2 text-gray-800"
        :class="{ price: content == 5 }"
        @click="content = 5"
      >
        <i class="bx bx-file text-2xl mr-1"></i>
        <p class="text-lg">Files</p>
      </div>
      <div
        v-if="route.path !== '/user/leads' && route.path !== '/user/quotes'"
        class="flex h-full items-center px-3 py-2 text-gray-800"
        :class="{ price: content == 6 }"
        @click="content = 6"
      >
        <i class="bx bx-file text-2xl mr-1"></i>
        <p class="text-lg">Contract</p>
      </div>
      <div
        v-if="route.path !== '/user/leads' && route.path !== '/user/quotes'"
        class="flex h-full items-center px-3 py-2 text-gray-800"
        :class="{ price: content == 7 }"
        @click="content = 7"
      >
        <i class="bx bxs-credit-card text-2xl mr-1"></i>
        <p class="text-lg">Payment</p>
      </div>
    </nav>

    <!-- Frame content -->
    <div class="w-full border bg-white rounded-b-md border-gray-400">
      <!-- Notes -->
      <div v-show="content == 1" class="bg-[#FFF4CC] h-full overflow-y-auto">
        <Notes />
      </div>
      <!-- Tasks -->
      <div v-show="content == 2" class="h-full">
        <Tasks />
      </div>
      <!-- Phone -->
      <div v-show="content == 3" class="h-full">
        <Phone />
      </div>
      <!-- Email -->
      <div v-show="content == 4" class="h-full">
        <!-- <Email/> -->
        <Email />
      </div>
      <!-- Files -->
      <div v-show="content == 5" class="h-full">
        <Files />
      </div>
      <!-- Contract -->
      <div v-show="content == 6" class="h-full">
        <Contact />
      </div>
      <!-- Payment -->
      <div v-show="content == 7" class="h-full">
        <Payment />
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
