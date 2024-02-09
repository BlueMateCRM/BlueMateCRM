<script setup>
import { ref,onMounted } from "vue";
const input = ref("");
const content = ref(null)
onMounted(() => {
  content.value = 1;
})
</script>

<template>
  <div class="w-[100%] flex justify-between p-4">
    <div class="flex space-x-4 text-base cursor-pointer">
      <div class="font-semibold" :class="{'price' :content == 1}" @click="content = 1"> Quotes </div>
      <div class="font-semibold" :class="{'price' :content == 2}" @click="content = 2"> Follow up </div>
      <div class="font-semibold" :class="{'price' :content == 3}" @click="content = 3">Warm</div>
      <div class="font-semibold" :class="{'price' :content == 4}" @click="content = 4">Ongiong</div>
      <div class="font-semibold" :class="{'price' :content == 5}" @click="content = 5">Upcoming</div>
      <div class="font-semibold" :class="{'price' :content == 6}" @click="content = 6">On hold</div>
      <div class="font-semibold" :class="{'price' :content == 7}" @click="content = 7">Archived</div>
    </div>
    <div>
      <el-input v-model="input" placeholder="Search" />
    </div>
  </div>
</template>

<style scoped>
.price{
  border-bottom:2px solid #0087FF;
  background-color: #DDF2FD;

}
</style>
