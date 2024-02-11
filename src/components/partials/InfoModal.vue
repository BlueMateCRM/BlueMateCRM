<script setup lang="ts">
import { ref } from "vue";
import ModalHeader from "../ui/ModalHeader.vue";

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
  next: {
    type: Function,
    required: true,
  },
  length: {
    type: Number,
    required: true,
  },
});
const isFull = ref<boolean>(false);

function nextElement() {
  if (+props.data?.i < props.length - 1) {
    props.next(+props.data?.i + 1);
  } else {
    props.next(props.length - 1);
  }
}
function prevElement() {
  if (+props.data?.i !== 0) {
    props.next(+props.data?.i - 1);
  } else {
    props.next(0);
  }
}
function changeWidth() {
  isFull.value = !isFull.value;
}
</script>

<template>
  <div
    id="info-modal"
    class="fixed top-[58.2px] bg-white shadow-xl z-50 border duration-200"
    :class="props.show ? 'right-0' : '-right-full'"
    :style="isFull ? 'width: 100%;' : 'width: 80%;'"
  >
    <!-- action tab -->
    <div
      v-if="!isFull"
      class="details flex flex-col border bg-white absolute top-3 -left-[62px] rounded-main shadow-xl overflow-hidden"
    >
      <!-- close modal -->
      <div
        @click="props.close"
        class="flex items-center justify-center w-12 h-12 duration-200 hover:bg-gray-200 cursor-pointer"
      >
        <i class="bx bx-chevrons-right text-gray-600 text-[32px]"></i>
      </div>
      <!-- full screen -->
      <div
        @click="changeWidth"
        class="flex items-center justify-center w-12 h-12 duration-200 hover:bg-gray-200 cursor-pointer"
      >
        <i class="bx bx-fullscreen text-gray-600 text-[26px]"></i>
      </div>
      <!-- prev element -->
      <div
        @click="prevElement"
        class="flex items-center justify-center w-12 h-12 duration-200 hover:bg-gray-200 cursor-pointer"
      >
        <i class="bx bx-chevron-up text-gray-600 text-[36px]"></i>
      </div>
      <!-- next element -->
      <div
        @click="nextElement"
        class="flex items-center justify-center w-12 h-12 duration-200 hover:bg-gray-200 cursor-pointer"
      >
        <i class="bx bx-chevron-down text-gray-600 text-[36px]"></i>
      </div>
    </div>
    <div class="w-full h-full overflow-y-auto">
      <ModalHeader
        :show="isFull"
        :next="nextElement"
        :prev="prevElement"
        :close="props.close"
        :change="changeWidth"
        :data="{ id: props.data?.id, user: props.data?.customer }"
      />
      <div class="modal-body flex w-full">
        <aside
          class="modal-aside w-[420px] h-full overflow-y-auto border-r border-gray-300"
        ></aside>
        <section class="modal-content h-auto overflow-auto bg-bglightGray p-4">
          <pre>{{ props.data }}</pre>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
#info-modal {
  height: calc(100vh - 58.2px);
}
.modal-body {
  height: calc(100% - 72.8px);
}
.modal-content {
  width: calc(100% - 420px);
}
</style>
