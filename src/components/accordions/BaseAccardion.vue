<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
});

const open = ref(props.isOpen);
const openAccordion = () => {
  open.value = !open.value;
};
</script>

<template>
  <div class="rounded-md bg-transparent duration-200 cursor-default">
    <!-- title   -->
    <div
      class="w-full flex items-center justify-between duration-200"
      :class="open ? 'pb-[10px]' : ''"
    >
      <div @click="openAccordion" class="cursor-pointer">
        <slot name="title"></slot>
      </div>
      <div class="flex items-center">
        <slot name="btns"></slot>
        <i
          @click="openAccordion"
          class="bx bxs-down-arrow ml-4 cursor-pointer"
        ></i>
      </div>
    </div>
    <!-- accordion -->
    <div
      class="overflow-hidden transition-all duration-200"
      :class="open ? 'max-h-[800px]' : 'max-h-0'"
    >
      <slot name="body"></slot>
    </div>
  </div>
</template>

<style scoped></style>
