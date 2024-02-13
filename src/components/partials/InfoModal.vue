<script setup lang="ts">
import Accordion from './Accordion.vue';
import Frame from './Frame.vue';


const props = defineProps({
  close: {
    type: Function,
    required: true,
  },
  show: {
    type: Boolean,
    required: true,
  },
  data: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div
    id="info-modal"
    class="fixed top-[58.2px] bg-white w-4/5 shadow-xl z-50 border duration-200"
    :class="props.show ? 'right-0' : '-right-full'"
  >
    <div
      class="details flex flex-col border bg-white absolute top-3 -left-[62px] rounded-main shadow-xl overflow-hidden"
    >
      <div
        @click="props.close"
        class="flex items-center justify-center w-12 h-12 duration-200 hover:bg-gray-200 cursor-pointer"
      >
        <i class="bx bx-chevrons-right text-gray-600 text-[32px]"></i>
      </div>
      <div
        class="flex items-center justify-center w-12 h-12 duration-200 hover:bg-gray-200 cursor-pointer"
      >
        <i class="bx bx-fullscreen text-gray-600 text-[26px]"></i>
      </div>
      <div
        class="flex items-center justify-center w-12 h-12 duration-200 hover:bg-gray-200 cursor-pointer"
      >
        <i class="bx bx-chevron-up text-gray-600 text-[36px]"></i>
      </div>
      <div
        class="flex items-center justify-center w-12 h-12 duration-200 hover:bg-gray-200 cursor-pointer"
      >
        <i class="bx bx-chevron-down text-gray-600 text-[36px]"></i>
      </div>
    </div>
    <div class="w-full flex h-full overflow-y-auto p-4">
      <pre>{{ props.data }}</pre>
      <Accordion title="Details" data="props.data"/>
      <Frame/>
    </div>
  </div>
</template>

<style scoped>
#info-modal {
  height: calc(100vh - 58.2px);
}
</style>
