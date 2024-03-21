<script setup lang="ts">
import { ref, reactive } from "vue";
import AppModal from "../AppModal.vue";
import AppAccordion from "@/components/accordions/AppAccordion.vue";
import BaseAccardion from "@/components/accordions/BaseAccardion.vue";

// modal open-close
const dialog = ref(false);
const openModal = () => {
  dialog.value = true;
};
defineExpose({ openModal });

// send form
const vehicle = reactive({
  year: "",
  make: "",
  model: "",
  condition: "",
  type: "",
  pickup_city: "",
  pickup_state: "",
  pickup_zip: "",
  delivery_city: "",
  delivery_state: "",
  delivery_zip: "",
  trailer_type: "",
  date: "",
  source: "",
  cm_note: "",
  user_name: "",
  user_email: "",
  user_phone: "",
});
const sendForm = () => {
  dialog.value = !dialog.value;
};
</script>

<template>
  <AppModal v-model="dialog">
    <div class="w-[840px]">
      <form @submit.prevent="sendForm">
        <!-- header -->
        <header
          class="flex bg-lightBlue items-center justify-between py-[12.5px] px-6 rounded-t-md"
        >
          <h3 class="font-medium text-darkBlue">New Lead</h3>
          <div class="flex">
            <button
              type="button"
              class="py-[2px] px-3 min-w-[65px] rounded text-textBlack bg-white border border-gray-300"
              @click="dialog = !dialog"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="py-[2px] px-3 min-w-[65px] rounded text-white bg-mainBlue font-medium ml-[10px]"
            >
              Save
            </button>
          </div>
        </header>
        <!-- content -->
        <div class="flex">
          <div
            class="w-1/2 bg-white border border-gray-300 rounded-bl-md border-r-0 p-4"
          >
            <AppAccordion title="Details" :isOpen="true">
              <!-- vehicle form -->
              <BaseAccardion :isOpen="true" class="mb-[10px]">
                <template #title>
                  <div class="flex items-center">
                    <i class="bx bxs-car text-mainBlue text-lg mr-[10px]"></i>
                    <span class="text-darkBlue font-medium capitalize">
                      Vehicle
                    </span>
                  </div>
                </template>
                <template #btns>
                  <button
                    type="button"
                    class="w-[30px] h-[23px] flex items-center justify-center rounded border border-gray-300 font-medium text-textBlack"
                  >
                    +
                  </button>
                </template>
                <template #body>
                  <!-- 1 -->
                  <div class="flex items-center mb-[10px]">
                    <label for="v_year" class="w-[35%] text-textBlack">
                      Vehicle year
                    </label>
                    <input
                      id="v_year"
                      v-model="vehicle.year"
                      required
                      placeholder="empty"
                      class="w-[65%] py-[2px] px-2 rounded border border-gray-300 outline-none"
                    />
                  </div>
                  <!-- 2 -->
                  <div class="flex items-center mb-[10px]">
                    <label for="v_make" class="w-[35%] text-textBlack">
                      Vehicle make
                    </label>
                    <input
                      id="v_make"
                      v-model="vehicle.make"
                      required
                      placeholder="empty"
                      class="w-[65%] py-[2px] px-2 rounded border border-gray-300 outline-none"
                    />
                  </div>
                  <!-- 3 -->
                  <div class="flex items-center">
                    <label for="v_model" class="w-[35%] text-textBlack">
                      Vehicle make
                    </label>
                    <input
                      id="v_model"
                      v-model="vehicle.model"
                      required
                      placeholder="empty"
                      class="w-[65%] py-[2px] px-2 rounded border border-gray-300 outline-none"
                    />
                  </div>
                </template>
              </BaseAccardion>
              <!-- condition -->
              <div
                class="flex items-center px-[10px] py-[5px] mt-[10px] rounded-md bg-transparent hover:bg-bglightGray duration-200 cursor-default"
              >
                <label class="flex items-center w-[35%]" for="lead_condition">
                  <i class="bx bxs-car text-mainBlue text-lg mr-[10px]"></i>
                  <span class="text-darkBlue font-medium capitalize">
                    Vehicle
                  </span>
                </label>
                <el-select
                  v-model="vehicle.condition"
                  clearable
                  placeholder="Select"
                  class="w-[65%]"
                  id="lead_condition"
                >
                  <el-option label="item1" value="item1" />
                  <el-option label="item2" value="item2" />
                  <el-option label="item3" value="item3" />
                  <el-option label="item4" value="item4" />
                </el-select>
              </div>
              <!-- type -->
              <div
                class="flex items-center px-[10px] py-[5px] mb-[10px] rounded-md bg-transparent hover:bg-bglightGray duration-200 cursor-default"
              >
                <label class="flex items-center w-[35%]" for="lead_type">
                  <i class="bx bxs-car text-mainBlue text-lg mr-[10px]"></i>
                  <span class="text-darkBlue font-medium capitalize">
                    Type
                  </span>
                </label>
                <el-select
                  v-model="vehicle.type"
                  clearable
                  placeholder="Select"
                  class="w-[65%]"
                  id="lead_type"
                >
                  <el-option label="item1" value="item1" />
                  <el-option label="item2" value="item2" />
                  <el-option label="item3" value="item3" />
                  <el-option label="item4" value="item4" />
                </el-select>
              </div>
              <!-- Pickup form -->
              <BaseAccardion :isOpen="true" class="mb-[10px]">
                <template #title>
                  <div class="flex items-center">
                    <i class="bx bxs-car text-mainBlue text-lg mr-[10px]"></i>
                    <span class="text-darkBlue font-medium capitalize">
                      Pickup
                    </span>
                  </div>
                </template>
                <template #body>
                  <!-- 1 -->
                  <div class="flex items-center mb-[10px]">
                    <label for="p_city" class="w-[35%] text-textBlack">
                      Pickup city
                    </label>
                    <input
                      id="p_city"
                      v-model="vehicle.pickup_city"
                      required
                      placeholder="empty"
                      class="w-[65%] py-[2px] px-2 rounded border border-gray-300 outline-none"
                    />
                  </div>
                  <!-- 2 -->
                  <div class="flex items-center mb-[10px]">
                    <label for="p_state" class="w-[35%] text-textBlack">
                      Pickup state
                    </label>
                    <input
                      id="p_state"
                      v-model="vehicle.pickup_state"
                      required
                      placeholder="empty"
                      class="w-[65%] py-[2px] px-2 rounded border border-gray-300 outline-none"
                    />
                  </div>
                  <!-- 3 -->
                  <div class="flex items-center">
                    <label for="p_zip" class="w-[35%] text-textBlack">
                      Pickup zip
                    </label>
                    <input
                      id="p_zip"
                      v-model="vehicle.pickup_zip"
                      required
                      placeholder="empty"
                      class="w-[65%] py-[2px] px-2 rounded border border-gray-300 outline-none"
                    />
                  </div>
                </template>
              </BaseAccardion>
              <!-- Delivery form -->
              <BaseAccardion :isOpen="true" class="mb-[10px]">
                <template #title>
                  <div class="flex items-center">
                    <i class="bx bxs-car text-mainBlue text-lg mr-[10px]"></i>
                    <span class="text-darkBlue font-medium capitalize">
                      Delivery
                    </span>
                  </div>
                </template>
                <template #body>
                  <!-- 1 -->
                  <div class="flex items-center mb-[10px]">
                    <label for="d_city" class="w-[35%] text-textBlack">
                      Delivery city
                    </label>
                    <input
                      id="d_city"
                      v-model="vehicle.delivery_city"
                      required
                      placeholder="empty"
                      class="w-[65%] py-[2px] px-2 rounded border border-gray-300 outline-none"
                    />
                  </div>
                  <!-- 2 -->
                  <div class="flex items-center mb-[10px]">
                    <label for="d_state" class="w-[35%] text-textBlack">
                      Delivery state
                    </label>
                    <input
                      id="d_state"
                      v-model="vehicle.delivery_state"
                      required
                      placeholder="empty"
                      class="w-[65%] py-[2px] px-2 rounded border border-gray-300 outline-none"
                    />
                  </div>
                  <!-- 3 -->
                  <div class="flex items-center">
                    <label for="d_zip" class="w-[35%] text-textBlack">
                      Delivery zip
                    </label>
                    <input
                      id="d_zip"
                      v-model="vehicle.delivery_zip"
                      required
                      placeholder="empty"
                      class="w-[65%] py-[2px] px-2 rounded border border-gray-300 outline-none"
                    />
                  </div>
                </template>
              </BaseAccardion>
              <!-- trailer type -->
              <div
                class="flex items-center px-[10px] py-[5px] mt-[10px] rounded-md bg-transparent hover:bg-bglightGray duration-200 cursor-default"
              >
                <label class="flex items-center w-[35%]" for="trailer_type">
                  <i class="bx bxs-car text-mainBlue text-lg mr-[10px]"></i>
                  <span class="text-darkBlue font-medium capitalize">
                    Trailer type
                  </span>
                </label>
                <el-select
                  v-model="vehicle.trailer_type"
                  clearable
                  placeholder="Select"
                  class="w-[65%]"
                  id="trailer_type"
                >
                  <el-option label="item1" value="item1" />
                  <el-option label="item2" value="item2" />
                  <el-option label="item3" value="item3" />
                  <el-option label="item4" value="item4" />
                </el-select>
              </div>
              <!-- date -->
              <div
                class="flex items-center px-[10px] py-[5px] rounded-md bg-transparent hover:bg-bglightGray duration-200 cursor-default"
              >
                <label class="flex items-center w-[35%]" for="ship_date">
                  <i class="bx bxs-car text-mainBlue text-lg mr-[10px]"></i>
                  <span class="text-darkBlue font-medium capitalize">
                    Ship Date
                  </span>
                </label>
                <input
                  id="ship_date"
                  v-model="vehicle.date"
                  required
                  type="date"
                  class="w-[65%] py-[2px] px-2 rounded border border-gray-300 outline-none"
                />
              </div>
              <!-- source -->
              <div
                class="flex items-center px-[10px] py-[5px] mb-[10px] rounded-md bg-transparent hover:bg-bglightGray duration-200 cursor-default"
              >
                <label class="flex items-center w-[35%]" for="source">
                  <i class="bx bxs-car text-mainBlue text-lg mr-[10px]"></i>
                  <span class="text-darkBlue font-medium capitalize">
                    Source
                  </span>
                </label>
                <el-select
                  v-model="vehicle.source"
                  clearable
                  placeholder="Select"
                  class="w-[65%]"
                  id="source"
                >
                  <el-option label="item1" value="item1" />
                  <el-option label="item2" value="item2" />
                  <el-option label="item3" value="item3" />
                  <el-option label="item4" value="item4" />
                </el-select>
              </div>
              <!-- note -->
              <div
                class="flex items-center px-[10px] py-[5px] rounded-md bg-transparent hover:bg-bglightGray duration-200 cursor-default"
              >
                <label class="flex items-center w-[20%]" for="lead_note">
                  CM note
                </label>
                <input
                  id="lead_note"
                  v-model="vehicle.cm_note"
                  required
                  type="text"
                  placeholder="Empty"
                  class="w-[80%] py-[2px] px-2 rounded border border-gray-300 outline-none"
                />
              </div>
            </AppAccordion>
          </div>
          <div
            class="w-1/2 bg-bglightGray border border-gray-300 rounded-br-md p-4"
          >
            <AppAccordion title="Person" :isOpen="true">
              <!-- name -->
              <div class="flex items-center py-[5px]">
                <label class="flex items-center w-1/4" for="user_name">
                  <i class="bx bxs-car text-mainBlue text-lg mr-[10px]"></i>
                  <span class="text-darkBlue font-medium capitalize">
                    Name
                  </span>
                </label>
                <input
                  id="user_name"
                  v-model="vehicle.user_name"
                  required
                  type="text"
                  placeholder="Empty"
                  class="w-3/4 py-[2px] px-2 rounded border border-gray-300 outline-none"
                />
              </div>
              <!-- email -->
              <div class="flex items-center py-[5px]">
                <label class="flex items-center w-1/4" for="user_email">
                  <i class="bx bxs-car text-mainBlue text-lg mr-[10px]"></i>
                  <span class="text-darkBlue font-medium capitalize">
                    Email
                  </span>
                </label>
                <input
                  id="user_email"
                  v-model="vehicle.user_email"
                  required
                  type="email"
                  placeholder="Empty"
                  class="w-3/4 py-[2px] px-2 rounded border border-gray-300 outline-none"
                />
              </div>
              <!-- phone -->
              <div class="flex items-center py-[5px]">
                <label class="flex items-center w-1/4" for="user_phone">
                  <i class="bx bxs-car text-mainBlue text-lg mr-[10px]"></i>
                  <span class="text-darkBlue font-medium capitalize">
                    Phone
                  </span>
                </label>
                <input
                  id="user_phone"
                  v-model="vehicle.user_phone"
                  required
                  type="text"
                  placeholder="Empty"
                  class="w-3/4 py-[2px] px-2 rounded border border-gray-300 outline-none"
                />
              </div>
              <!-- add -->
              <div class="flex items-center py-[5px]">
                <div class="w-1/4"></div>
                <div class="w-3/4 text-[#A4A4A4] cursor-pointer">+ add</div>
              </div>
            </AppAccordion>
          </div>
        </div>
      </form>
    </div>
  </AppModal>
</template>

<style scoped></style>
