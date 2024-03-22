<script setup lang="ts">
import { ref } from "vue";

let drop = ref<null | string>(null);
let isfile = ref(false);

const handleDrop = (event: DragEvent) => {
  event.preventDefault();
  const dataTransfer = event.dataTransfer;
  if (dataTransfer && dataTransfer.files.length > 0) {
    const dropfile = dataTransfer.files[0];
    console.log(dropfile);
    isfile.value = true;
    drop.value = dropfile.name;
  }
};

const fileUpload = (event: Event) => {
  const input = event.target as HTMLInputElement;
  const uploadfile = input.files;
  if (!uploadfile || uploadfile.length === 0) {
    console.log("No uploadfile selected");
    return;
  }

  const file = uploadfile[0];
  isfile.value = true;
  drop.value = file.name;
  console.log("Selected file:", file.name);
};

const resetDrop = () => {
  drop.value = null;
  isfile.value = false;

};
</script>

<template>
  <div>x
    <div class="flex flex-col space-y-4 mx-3">
      <div class="w-full">
        <input type="text" class="w-full h-10 focus:border-none focus:outline-none focus:ring-0" placeholder="Title" />
        <hr class="border-t border-solid border-gray-300 w-full" />
      </div>
      <div class="pb-3">
        <div v-show="!isfile"
          class="flex items-center justify-center border-dashed border border-gray-600 bg-gray-200 p-6 cursor-pointer rounded-md"
          @dragover.prevent @drop="handleDrop">
          <div class="flex items-center gap-3">
            <div>
              <label for="fileUpload" class="bg-mainBlue text-white py-2 px-4 rounded-md cursor-pointer">Upload
                files</label>
            </div>
            <input id="fileUpload" type="file" class="bg-mainBlue text-white py-2 px-4 rounded-md hidden"
              @change="fileUpload" />
            <p class="text-gray-500">Or drag file here</p>
          </div>
        </div>
        <div v-show="isfile">
          <div class="flex justify-between bg-gray-200 border border-gray-300 rounded">
            <div class="flex items-center">
              <i class="bx bx-file text-2xl mr-1" style="color: gray;"></i>
              <p class="text-gray-600">
                {{ drop }}
              </p>
            </div>
            <div class="flex items-center">
              <i class='bx bxs-trash text-lg mr-1 cursor-pointer' style='color:red' @click="resetDrop"></i>
            </div>
          </div>
          <div class="flex justify-between pt-2">
            <div>
              <Button for="fileUpload" class="font-semibold text-mainBlue border border-mainBlue  px-3 text-sm rounded">
                + Files
              </Button>
            </div>
            <div class="space-x-2">
              <Button class="font-semibold text-gray-700 border border-gray-300  px-3 text-sm rounded"
                @click="resetDrop">
                Cancel
              </Button>
              <Button class="font-semibold text-white bg-mainBlue px-3 text-sm rounded">
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
