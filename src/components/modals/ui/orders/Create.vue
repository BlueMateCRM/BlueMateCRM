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
  lot: "",
  color: "",
  vin: "",
  plate: "",
  condition: "",
  type: "",
  pickup_address: "",
  pickup_city: "",
  pickup_state: "",
  pickup_zip: "",
  pickup_business_name: "",
  pickup_business_phone: "",
  pickup_contact_person: "",
  pickup_phone1: "",
  pickup_phone2: "",
  buyer: "",
  delivery_address: "",
  delivery_city: "",
  delivery_state: "",
  delivery_zip: "",
  delivery_business_name: "",
  delivery_business_phone: "",
  delivery_contact_person: "",
  delivery_phone1: "",
  delivery_phone2: "",
  trailer_type: "",
  location_type: "",
  source: "",
  cm_note: "",
  cd_note: "",
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
    <div class="w-[900px]">
      <form @submit.prevent="sendForm">
        <!-- header -->
        <header
          class="flex bg-lightBlue items-center justify-between py-[12.5px] px-6 rounded-t-md"
        >
          <h3 class="font-medium text-darkBlue">New Order</h3>
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
                      Vehicle year<span class="text-red-500">*</span>
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
                      Vehicle make<span class="text-red-500">*</span>
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
                  <div class="flex items-center mb-[10px]">
                    <label for="v_model" class="w-[35%] text-textBlack">
                      Vehicle make<span class="text-red-500">*</span>
                    </label>
                    <input
                      id="v_model"
                      v-model="vehicle.model"
                      required
                      placeholder="empty"
                      class="w-[65%] py-[2px] px-2 rounded border border-gray-300 outline-none"
                    />
                  </div>
                  <!-- 4 -->
                  <div class="flex gap-x-2">
                    <div class="w-[34%]">
                      <div class="flex items-center mb-[10px]">
                        <label for="v_lot" class="w-[45%] text-textBlack">
                          Lot
                        </label>
                        <input
                          id="v_lot"
                          v-model="vehicle.lot"
                          required
                          placeholder="empty"
                          class="w-[55%] py-[2px] px-2 rounded border border-gray-300 outline-none"
                        />
                      </div>
                      <div class="flex items-center">
                        <label for="v_color" class="w-[45%] text-textBlack">
                          Color
                        </label>
                        <input
                          id="v_color"
                          v-model="vehicle.color"
                          required
                          placeholder="empty"
                          class="w-[55%] py-[2px] px-2 rounded border border-gray-300 outline-none"
                        />
                      </div>
                    </div>
                    <div class="w-[66%]">
                      <div class="flex items-center mb-[10px]">
                        <label for="v_vin" class="w-[22%] text-textBlack">
                          VIN
                        </label>
                        <input
                          id="v_vin"
                          v-model="vehicle.vin"
                          required
                          placeholder="empty"
                          class="w-[78%] py-[2px] px-2 rounded border border-gray-300 outline-none"
                        />
                      </div>
                      <div class="flex items-center">
                        <label for="v_plate" class="w-[22%] text-textBlack">
                          Plate
                        </label>
                        <input
                          id="v_plate"
                          v-model="vehicle.plate"
                          required
                          placeholder="empty"
                          class="w-[78%] py-[2px] px-2 rounded border border-gray-300 outline-none"
                        />
                      </div>
                    </div>
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
                    <label for="p_address" class="w-[35%] text-textBlack">
                      Pickup address<span class="text-red-500">*</span>
                    </label>
                    <input
                      id="p_address"
                      v-model="vehicle.pickup_address"
                      required
                      placeholder="empty"
                      class="w-[65%] py-[2px] px-2 rounded border border-gray-300 outline-none"
                    />
                  </div>
                  <!-- 2 -->
                  <div class="flex items-center mb-[10px]">
                    <label for="p_city" class="w-[35%] text-textBlack">
                      Pickup city<span class="text-red-500">*</span>
                    </label>
                    <input
                      id="p_city"
                      v-model="vehicle.pickup_city"
                      required
                      placeholder="empty"
                      class="w-[65%] py-[2px] px-2 rounded border border-gray-300 outline-none"
                    />
                  </div>
                  <!-- 3 -->
                  <div class="flex items-center mb-[10px]">
                    <label for="p_state" class="w-[35%] text-textBlack">
                      Pickup state<span class="text-red-500">*</span>
                    </label>
                    <input
                      id="p_state"
                      v-model="vehicle.pickup_state"
                      required
                      placeholder="empty"
                      class="w-[65%] py-[2px] px-2 rounded border border-gray-300 outline-none"
                    />
                  </div>
                  <!-- 4 -->
                  <div class="flex items-center mb-[10px]">
                    <label for="p_zip" class="w-[35%] text-textBlack">
                      Pickup zip<span class="text-red-500">*</span>
                    </label>
                    <input
                      id="p_zip"
                      v-model="vehicle.pickup_zip"
                      required
                      placeholder="empty"
                      class="w-[65%] py-[2px] px-2 rounded border border-gray-300 outline-none"
                    />
                  </div>
                  <!-- 5 -->
                  <div class="flex items-center mb-[10px]">
                    <label
                      for="pickup_business_name"
                      class="w-[35%] text-textBlack"
                    >
                      Business name
                    </label>
                    <input
                      id="pickup_business_name"
                      v-model="vehicle.pickup_business_name"
                      placeholder="empty"
                      class="w-[65%] py-[2px] px-2 rounded border border-gray-300 outline-none"
                    />
                  </div>
                  <!-- 6 -->
                  <div class="flex items-center mb-[10px]">
                    <label
                      for="pickup_business_phone"
                      class="w-[35%] text-textBlack"
                    >
                      Business phone
                    </label>
                    <input
                      id="pickup_business_phone"
                      v-model="vehicle.pickup_business_phone"
                      placeholder="empty"
                      class="w-[65%] py-[2px] px-2 rounded border border-gray-300 outline-none"
                    />
                  </div>
                  <!-- 7 -->
                  <div class="flex items-center mb-[10px]">
                    <label
                      for="pickup_contact_person"
                      class="w-[35%] text-textBlack"
                    >
                      Contact person<span class="text-red-500">*</span>
                    </label>
                    <input
                      id="pickup_contact_person"
                      v-model="vehicle.pickup_contact_person"
                      required
                      placeholder="empty"
                      class="w-[65%] py-[2px] px-2 rounded border border-gray-300 outline-none"
                    />
                  </div>
                  <!-- 8 -->
                  <div class="flex gap-x-2 mb-[10px]">
                    <div class="w-1/2">
                      <div class="flex items-center">
                        <label
                          for="pickup_phone1"
                          class="w-[35%] text-textBlack"
                        >
                          Phone<span class="text-red-500">*</span>
                        </label>
                        <input
                          id="pickup_phone1"
                          v-model="vehicle.pickup_phone1"
                          placeholder="empty"
                          required
                          class="w-[65%] py-[2px] px-2 rounded border border-gray-300 outline-none"
                        />
                      </div>
                    </div>
                    <div class="w-1/2">
                      <div class="flex items-center">
                        <label
                          for="pickup_phone2"
                          class="w-[35%] text-textBlack"
                        >
                          Second<span class="text-red-500">*</span>
                        </label>
                        <input
                          id="pickup_phone2"
                          v-model="vehicle.pickup_phone2"
                          placeholder="empty"
                          required
                          class="w-[65%] py-[2px] px-2 rounded border border-gray-300 outline-none"
                        />
                      </div>
                    </div>
                  </div>
                  <!-- 9 -->
                  <div class="flex items-center">
                    <label for="buyer" class="w-[35%] text-textBlack">
                      Buyer number
                    </label>
                    <input
                      id="buyer"
                      v-model="vehicle.buyer"
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
                    <label for="d_address" class="w-[35%] text-textBlack">
                      Address<span class="text-red-500">*</span>
                    </label>
                    <input
                      id="d_address"
                      v-model="vehicle.delivery_address"
                      required
                      placeholder="empty"
                      class="w-[65%] py-[2px] px-2 rounded border border-gray-300 outline-none"
                    />
                  </div>
                  <!-- 2 -->
                  <div class="flex items-center mb-[10px]">
                    <label for="d_city" class="w-[35%] text-textBlack">
                      Delivery city<span class="text-red-500">*</span>
                    </label>
                    <input
                      id="d_city"
                      v-model="vehicle.delivery_city"
                      required
                      placeholder="empty"
                      class="w-[65%] py-[2px] px-2 rounded border border-gray-300 outline-none"
                    />
                  </div>
                  <!-- 3 -->
                  <div class="flex items-center mb-[10px]">
                    <label for="d_state" class="w-[35%] text-textBlack">
                      Delivery state<span class="text-red-500">*</span>
                    </label>
                    <input
                      id="d_state"
                      v-model="vehicle.delivery_state"
                      required
                      placeholder="empty"
                      class="w-[65%] py-[2px] px-2 rounded border border-gray-300 outline-none"
                    />
                  </div>
                  <!-- 4 -->
                  <div class="flex items-center mb-[10px]">
                    <label for="d_zip" class="w-[35%] text-textBlack">
                      Delivery zip<span class="text-red-500">*</span>
                    </label>
                    <input
                      id="d_zip"
                      v-model="vehicle.delivery_zip"
                      required
                      placeholder="empty"
                      class="w-[65%] py-[2px] px-2 rounded border border-gray-300 outline-none"
                    />
                  </div>
                  <!-- 5 -->
                  <div class="flex items-center mb-[10px]">
                    <label
                      for="delivery_business_name"
                      class="w-[35%] text-textBlack"
                    >
                      Business name
                    </label>
                    <input
                      id="delivery_business_name"
                      v-model="vehicle.delivery_business_name"
                      placeholder="empty"
                      class="w-[65%] py-[2px] px-2 rounded border border-gray-300 outline-none"
                    />
                  </div>
                  <!-- 6 -->
                  <div class="flex items-center mb-[10px]">
                    <label
                      for="delivery_business_phone"
                      class="w-[35%] text-textBlack"
                    >
                      Business phone
                    </label>
                    <input
                      id="delivery_business_phone"
                      v-model="vehicle.delivery_business_phone"
                      placeholder="empty"
                      class="w-[65%] py-[2px] px-2 rounded border border-gray-300 outline-none"
                    />
                  </div>
                  <!-- 7 -->
                  <div class="flex items-center mb-[10px]">
                    <label
                      for="delivery_contact_person"
                      class="w-[35%] text-textBlack"
                    >
                      Contact person<span class="text-red-500">*</span>
                    </label>
                    <input
                      id="delivery_contact_person"
                      v-model="vehicle.delivery_contact_person"
                      required
                      placeholder="empty"
                      class="w-[65%] py-[2px] px-2 rounded border border-gray-300 outline-none"
                    />
                  </div>
                  <!-- 8 -->
                  <div class="flex gap-x-2 mb-[10px]">
                    <div class="w-1/2">
                      <div class="flex items-center">
                        <label
                          for="delivery_phone1"
                          class="w-[35%] text-textBlack"
                        >
                          Phone<span class="text-red-500">*</span>
                        </label>
                        <input
                          id="delivery_phone1"
                          v-model="vehicle.delivery_phone1"
                          placeholder="empty"
                          required
                          class="w-[65%] py-[2px] px-2 rounded border border-gray-300 outline-none"
                        />
                      </div>
                    </div>
                    <div class="w-1/2">
                      <div class="flex items-center">
                        <label
                          for="delivery_phone2"
                          class="w-[35%] text-textBlack"
                        >
                          Second<span class="text-red-500">*</span>
                        </label>
                        <input
                          id="delivery_phone2"
                          v-model="vehicle.delivery_phone2"
                          placeholder="empty"
                          required
                          class="w-[65%] py-[2px] px-2 rounded border border-gray-300 outline-none"
                        />
                      </div>
                    </div>
                  </div>
                </template>
              </BaseAccardion>
              <!-- location type -->
              <div
                class="flex items-center px-[10px] py-[5px] mt-[10px] rounded-md bg-transparent hover:bg-bglightGray duration-200 cursor-default"
              >
                <label class="flex items-center w-[40%]" for="location_type">
                  <i class="bx bxs-car text-mainBlue text-lg mr-[10px]"></i>
                  <span class="text-darkBlue font-medium capitalize">
                    Location type
                  </span>
                </label>
                <el-select
                  v-model="vehicle.trailer_type"
                  clearable
                  placeholder="Select"
                  class="w-[60%]"
                  id="location_type"
                >
                  <el-option label="item1" value="item1" />
                  <el-option label="item2" value="item2" />
                  <el-option label="item3" value="item3" />
                  <el-option label="item4" value="item4" />
                </el-select>
              </div>
              <!-- trailer type -->
              <div
                class="flex items-center px-[10px] py-[5px] rounded-md bg-transparent hover:bg-bglightGray duration-200 cursor-default"
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
              <!-- CD note -->
              <div
                class="flex items-center px-[10px] py-[5px] rounded-md bg-transparent hover:bg-bglightGray duration-200 cursor-default"
              >
                <label class="flex items-center w-[20%]" for="lead_cd_note">
                  CD note
                </label>
                <input
                  id="lead_cd_note"
                  v-model="vehicle.cd_note"
                  required
                  type="text"
                  placeholder="Empty"
                  class="w-[80%] py-[2px] px-2 rounded border border-gray-300 outline-none"
                />
              </div>
              <!-- CM note -->
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
