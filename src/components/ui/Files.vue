<script setup lang="ts">
// import { ref } from "vue";
const handleDrop = (event: DragEvent) => {
  event.preventDefault();
  // const file = event.dataTransfer.files[0];
  // if (file) {
  //   console.log(file);
  // }
};

// const fileUpload = async (e) => {
//   const file = new FormData();
//   file.append("file", e.target.files[0]);
//   // await store.Files(file)
//   console.log();
// };
</script>

<template>
  <div>
    <div class="flex flex-col space-y-4 mx-3">
      <div class="w-full">
        <input
          type="text"
          class="w-full h-10 focus:border-none focus:outline-none focus:ring-0"
          placeholder="Title"
        />
        <hr class="border-t border-solid border-gray-300 w-full" />
      </div>
      <div class="pb-3">
        <div
          class="flex items-center justify-center border-dashed border border-gray-600 bg-gray-200 p-6 cursor-pointer rounded-md"
          @dragover.prevent
          @drop="handleDrop"
        >
          <div class="flex items-center gap-3">
            <div>
              <label
                for="fileUpload"
                class="bg-mainBlue text-white py-2 px-4 rounded-md cursor-pointer"
                >Upload files</label
              >
            </div>
            <input
              id="fileUpload"
              type="file"
              class="bg-mainBlue text-white py-2 px-4 rounded-md hidden"
              />
              <!-- @change="fileUpload" -->
            <p class="text-gray-500">Or drag file here</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
</style>
