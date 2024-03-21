<script setup lang="ts">
import AppTransition from "../../ui/native/AppTransition.vue";
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <AppTransition>
    <div
      class="app-modal-shadow fixed top-0 left-0 w-full h-screen py-[14px]"
      v-if="props.modelValue"
    >
      <div class="content w-full h-full flex justify-center overflow-y-auto">
        <slot></slot>
      </div>
    </div>
  </AppTransition>
</template>

<style scoped>
.app-modal-shadow {
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 99;
}
.content::-webkit-scrollbar {
  display: none;
}
</style>
