<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import AppModal from "../AppModal.vue";
import AppAccordion from "@/components/accordions/AppAccordion.vue";
import BaseAccardion from "@/components/accordions/BaseAccardion.vue";
import axios from "../../../../api/axios.ts";
import { useLeadStore } from "../../../../stores/user/lead.ts";

const leadStore = useLeadStore();
// send form
const vehicle = reactive({
  vehicleYear: "",
  condition: "",
  trailerType: "",
  notes: "",
  dateEstShip: "",
  customer: "",
  vehicle: "",
  source: "",
  origin: "",
  destionation: "",
});

async function sendForm() {
  const year = new Date(vehicle.vehicleYear).getFullYear();

  const data = await leadStore.createLead({
    status: "leads",
    price: 0,
    reservationPrice: 200,
    vehicleYear: +year,
    condition: vehicle.condition,
    trailerType: vehicle.trailerType,
    notes: vehicle.notes,
    dateEstShip: vehicle.dateEstShip,
    customer: +vehicle.customer,
    vehicle: +vehicle.vehicle,
    source: +vehicle.source,
    origin: +vehicle.origin,
    destination: +vehicle.destionation,
  });
  if (data?.status === 201) {
    await leadStore.getAllLeads(0, 15);

    vehicle.vehicleYear = "";
    vehicle.condition = "";
    vehicle.trailerType = "";
    vehicle.notes = "";
    vehicle.dateEstShip = "";
    vehicle.customer = "";
    vehicle.vehicle = "";
    vehicle.source = "";
    vehicle.origin = "";
    vehicle.destionation = "";

    dialog.value = !dialog.value;
  }
}

const sourceData = ref<any>([]);
const vehicleType = ref<string>("");

// vehicle make
const vehicle_make = ref<string>("");
const make_array = ref<any>([]);
const getMake = async (e: any) => {
  const res = await axios.get(
    `/api/cars/marks-list/?page=1&pageSize=10&q=${e.target.value}`
  );
  const arr = res.data.data?.map((item: any) => item?.name);
  make_array.value = arr;
};
const selectMake = (val: string) => {
  vehicle_make.value = val;
  make_array.value = [];
};

// vehicle model
const vehicle_model = ref<string>("");
const model_array = ref<any>([]);
const getModel = async (e: any) => {
  const res = await axios.get(
    `/api/cars/models-list/?page=1&pageSize=10&q=${e.target.value}`
  );
  model_array.value = res.data.data;
};
const selectModel = (item: any) => {
  vehicle_model.value = item?.name;
  vehicle_make.value = item?.mark?.name;
  vehicleType.value = item?.vehicleType;
  vehicle.vehicle = item?.id;
  model_array.value = [];
};

// customer
const customer_name = ref<string>("");
const customer_email = ref<string>("");
const customer_phone = ref<string>("");
const extra_phones = ref<any>([]);
const customer_array = ref<any>([]);

const getCustomerData = async (type: string) => {
  let url: string = "";
  if (type === "name") {
    url = `/api/customers/?name=${customer_name.value}&page=1&pageSize=10`;
  } else if (type === "email") {
    url = `/api/customers/?email=${customer_email.value}%40&page=1&pageSize=10`;
  } else if (type === "phone") {
    url = `/api/customers/?page=1&pageSize=10&phone=${customer_phone.value}`;
  }
  const res = await axios.get(url);
  console.log("CUSTOMER: ", res.data.data);
  if (type === "name") {
    url = `/api/customers/?name=${customer_name.value}&page=1&pageSize=10`;
    customer_array.value = res.data.data;
  } else if (type === "email") {
    url = `/api/customers/?email=${customer_email.value}%40&page=1&pageSize=10`;
  } else if (type === "phone") {
    url = `/api/customers/?page=1&pageSize=10&phone=${customer_phone.value}`;
  }
};
const selectCustomer = (item: any) => {
  customer_name.value = item?.name;
  customer_email.value = item?.email;
  customer_phone.value = item?.phone;
  vehicle.customer = item?.id;
  extra_phones.value = item?.extra?.length > 0 ? item?.extra : [];
  customer_array.value = [];
};

// Address
const delivery_city = ref<string>("");
const delivery_state = ref<string>("");
const delivery_zip = ref<string>("");

const pickup_city = ref<string>("");
const pickup_state = ref<string>("");
const pickup_zip = ref<string>("");

const getCity = async (type: string) => {
  let url: string = "";
  if (type === "delivery") {
    url = `/api/address/cities-list/?page=1&pageSize=10&q=${delivery_city.value}`;
  } else if (type === "pickup") {
    url = `/api/address/cities-list/?page=1&pageSize=10&q=${pickup_city.value}`;
  }
  const res = await axios.get(url);
  console.log("CITY", res.data.data);
};
const getState = async (type: string) => {
  let url: string = "";
  if (type === "delivery") {
    url = `/api/address/states-list/?page=1&pageSize=10&q=${delivery_state.value}`;
  } else if (type === "pickup") {
    url = `/api/address/states-list/?page=1&pageSize=10&q=${pickup_state.value}`;
  }
  const res = await axios.get(url);
  console.log("STATE", res.data.data);
};
const delivery_zip_array = ref<any>([]);
const pickup_zip_array = ref<any>([]);
const getZip = async (type: string) => {
  let url: string = "";
  if (type === "delivery") {
    url = `/api/address/cities-list/?page=1&pageSize=10&q=${delivery_zip.value}`;
  } else if (type === "pickup") {
    url = `/api/address/cities-list/?page=1&pageSize=10&q=${pickup_zip.value}`;
  }
  const res = await axios.get(url);
  if (type === "delivery") {
    delivery_zip_array.value = res.data.data;
    vehicle.origin = res.data.data?.[0]?.id;
    delivery_city.value = res.data.data?.[0]?.name;
    delivery_state.value = res.data.data?.[0]?.state?.name;
  } else if (type === "pickup") {
    pickup_zip_array.value = res.data.data;
    vehicle.destionation = res.data.data?.[0]?.id;
    pickup_city.value = res.data.data?.[0]?.name;
    pickup_state.value = res.data.data?.[0]?.state?.name;
  }
  console.log("ZIP", res.data.data);
};
const selectZip = (type: string, item: any) => {
  console.log(item);

  if (type === "delivery") {
    vehicle.origin = item?.id;
    delivery_city.value = item?.name;
    delivery_state.value = item?.state?.name;
    delivery_zip.value = item?.zip;
    delivery_zip_array.value = [];
  } else if (type === "pickup") {
    vehicle.destionation = item?.id;
    pickup_city.value = item?.name;
    pickup_state.value = item?.state?.name;
    pickup_zip.value = item?.zip;
    pickup_zip_array.value = [];
  }
};

// modal open-close
const dialog = ref(false);
const openModal = () => {
  dialog.value = true;
};
defineExpose({ openModal });

onMounted(async () => {
  const res = await axios.get("/api/providers");
  sourceData.value = res.data;
});
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
              <BaseAccardion
                :isOpen="true"
                class="mb-[10px] px-[10px] py-[5px] hover:bg-bglightGray"
              >
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
                    <!-- <input
                      id="v_year"
                      v-model="vehicle.vehicleYear"
                      required
                      placeholder="empty"
                      class="w-[65%] py-[2px] px-2 rounded border border-gray-300 outline-none"
                    /> -->
                    <el-date-picker
                      id="v_year"
                      v-model="vehicle.vehicleYear"
                      type="year"
                      placeholder="Select year"
                      style="width: 65%"
                    />
                  </div>
                  <!-- 2 -->
                  <div class="flex items-center mb-[10px] relative">
                    <label for="v_make" class="w-[35%] text-textBlack">
                      Vehicle make
                    </label>
                    <div class="relative w-[65%]">
                      <input
                        id="v_make"
                        v-model="vehicle_make"
                        required
                        placeholder="empty"
                        @input="getMake"
                        class="w-full py-[2px] px-2 rounded border border-gray-300 outline-none"
                      />
                      <ul
                        v-if="make_array?.length > 0"
                        class="variant-emnu absolute left-0 top-[30px] z-50 w-full duration-200 bg-white rounded-md border border-gray-300"
                        :class="
                          make_array?.length > 0
                            ? 'max-h-[145px] overflow-y-auto'
                            : 'max-h-0'
                        "
                      >
                        <li
                          v-for="(item, index) in make_array"
                          :key="index + 'TTFFG'"
                          class="px-2 py-1 text-sm hover:bg-gray-100 duration-100 cursor-pointer"
                          @click="selectMake(item)"
                        >
                          {{ item }}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <!-- 3 -->
                  <div class="flex items-center">
                    <label for="v_model" class="w-[35%] text-textBlack">
                      Vehicle model
                    </label>
                    <div class="relative w-[65%]">
                      <input
                        id="v_model"
                        v-model="vehicle_model"
                        required
                        placeholder="empty"
                        @input="getModel"
                        class="w-full py-[2px] px-2 rounded border border-gray-300 outline-none"
                      />
                      <ul
                        v-if="model_array?.length > 0"
                        class="variant-emnu absolute left-0 top-[30px] z-50 w-full duration-200 bg-white rounded-md border border-gray-300"
                        :class="
                          model_array?.length > 0
                            ? 'max-h-[145px] overflow-y-auto'
                            : 'max-h-0'
                        "
                      >
                        <li
                          v-for="(item, index) in model_array"
                          :key="index + 'TRRFFG'"
                          class="px-2 py-1 text-sm hover:bg-gray-100 duration-100 cursor-pointer"
                          @click="selectModel(item)"
                        >
                          {{ item?.name }}
                        </li>
                      </ul>
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
                    Condition
                  </span>
                </label>
                <el-select
                  v-model="vehicle.condition"
                  clearable
                  placeholder="Select"
                  class="w-[65%]"
                  id="lead_condition"
                >
                  <el-option label="run" value="run" />
                  <el-option label="rols" value="rols" />
                  <el-option label="forklift" value="forklift" />
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
                <input
                  id="lead_type"
                  v-model="vehicleType"
                  required
                  placeholder="empty"
                  class="w-[65%] py-[2px] px-2 rounded border border-gray-300 outline-none"
                />
              </div>
              <!-- Pickup form -->
              <BaseAccardion
                :isOpen="true"
                class="mb-[10px] px-[10px] py-[5px] hover:bg-bglightGray"
              >
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
                      v-model="pickup_city"
                      required
                      placeholder="empty"
                      @input="getCity('pickup')"
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
                      v-model="pickup_state"
                      required
                      placeholder="empty"
                      @input="getState('pickup')"
                      class="w-[65%] py-[2px] px-2 rounded border border-gray-300 outline-none"
                    />
                  </div>
                  <!-- 3 -->
                  <div class="flex items-center">
                    <label for="p_zip" class="w-[35%] text-textBlack">
                      Pickup zip
                    </label>
                    <div class="relative w-[65%]">
                      <input
                        id="p_zip"
                        v-model="pickup_zip"
                        required
                        placeholder="empty"
                        @input="getZip('pickup')"
                        class="w-full py-[2px] px-2 rounded border border-gray-300 outline-none"
                      />
                      <ul
                        v-if="pickup_zip_array?.length > 0"
                        class="variant-emnu absolute left-0 top-[30px] z-50 w-full duration-200 bg-white rounded-md border border-gray-300"
                        :class="
                          pickup_zip_array?.length > 0
                            ? 'max-h-[145px] overflow-y-auto'
                            : 'max-h-0'
                        "
                      >
                        <li
                          v-for="(item, index) in pickup_zip_array"
                          :key="index + 'TRRFFG'"
                          class="px-2 py-1 text-sm hover:bg-gray-100 duration-100 cursor-pointer"
                          @click="selectZip('pickup', item)"
                        >
                          {{ item?.zip }}
                        </li>
                      </ul>
                    </div>
                  </div>
                </template>
              </BaseAccardion>
              <!-- Delivery form -->
              <BaseAccardion
                :isOpen="true"
                class="mb-[10px] px-[10px] py-[5px] hover:bg-bglightGray"
              >
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
                      v-model="delivery_city"
                      required
                      placeholder="empty"
                      @input="getCity('delivery')"
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
                      v-model="delivery_state"
                      required
                      placeholder="empty"
                      @input="getState('delivery')"
                      class="w-[65%] py-[2px] px-2 rounded border border-gray-300 outline-none"
                    />
                  </div>
                  <!-- 3 -->
                  <div class="flex items-center">
                    <label for="d_zip" class="w-[35%] text-textBlack">
                      Delivery zip
                    </label>
                    <div class="relative w-[65%]">
                      <input
                        id="d_zip"
                        v-model="delivery_zip"
                        required
                        placeholder="empty"
                        @input="getZip('delivery')"
                        class="w-full py-[2px] px-2 rounded border border-gray-300 outline-none"
                      />
                      <ul
                        v-if="delivery_zip_array?.length > 0"
                        class="variant-emnu absolute left-0 top-[30px] z-50 w-full duration-200 bg-white rounded-md border border-gray-300"
                        :class="
                          delivery_zip_array?.length > 0
                            ? 'max-h-[145px] overflow-y-auto'
                            : 'max-h-0'
                        "
                      >
                        <li
                          v-for="(item, index) in delivery_zip_array"
                          :key="index + 'TRRFFG'"
                          class="px-2 py-1 text-sm hover:bg-gray-100 duration-100 cursor-pointer"
                          @click="selectZip('delivery', item)"
                        >
                          {{ item?.zip }}
                        </li>
                      </ul>
                    </div>
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
                  v-model="vehicle.trailerType"
                  clearable
                  placeholder="Select"
                  class="w-[65%]"
                  id="trailer_type"
                >
                  <el-option label="open" value="open" />
                  <el-option label="enclosed" value="enclosed" />
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
                <!-- <input
                  id="ship_date"
                  v-model="vehicle.dateEstShip"
                  required
                  type="date"
                  class="w-[65%] py-[2px] px-2 rounded border border-gray-300 outline-none"
                /> -->
                <el-date-picker
                  v-model="vehicle.dateEstShip"
                  type="date"
                  placeholder="Select date"
                  format="YYYY-MM-DD"
                  value-format="YYYY-MM-DD"
                  style="width: 65%"
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
                  <el-option
                    v-for="(item, index) in sourceData"
                    :key="index + 'KKALXC'"
                    :label="item?.name"
                    :value="item?.id"
                  />
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
                  v-model="vehicle.notes"
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
                <div class="relative w-3/4">
                  <input
                    id="user_name"
                    v-model="customer_name"
                    required
                    type="text"
                    placeholder="Empty"
                    @input="getCustomerData('name')"
                    class="w-full py-[2px] px-2 rounded border border-gray-300 outline-none"
                  />
                  <ul
                    v-if="customer_array?.length > 0"
                    class="variant-emnu absolute left-0 top-[30px] z-50 w-full duration-200 bg-white rounded-md border border-gray-300"
                    :class="
                      customer_array?.length > 0
                        ? 'max-h-[145px] overflow-y-auto'
                        : 'max-h-0'
                    "
                  >
                    <li
                      v-for="(item, index) in customer_array"
                      :key="index + 'TRRFFG'"
                      class="px-2 py-1 text-sm hover:bg-gray-100 duration-100 cursor-pointer"
                      @click="selectCustomer(item)"
                    >
                      {{ item?.name }}
                    </li>
                  </ul>
                </div>
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
                  v-model="customer_email"
                  required
                  type="email"
                  placeholder="Empty"
                  @input="getCustomerData('email')"
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
                  v-model="customer_phone"
                  required
                  type="text"
                  placeholder="Empty"
                  @input="getCustomerData('phone')"
                  class="w-3/4 py-[2px] px-2 rounded border border-gray-300 outline-none"
                />
              </div>
              <!-- extra_phones -->
              <template v-if="extra_phones?.length > 0">
                <div
                  v-for="(item, index) in extra_phones"
                  :key="index + 'LOpdks'"
                  class="flex items-center py-[5px]"
                >
                  <label
                    class="flex items-center w-[30%]"
                    :for="'extra_phone' + (index + 2)"
                  >
                    <i class="bx bxs-car text-mainBlue text-lg mr-[10px]"></i>
                    <span class="text-darkBlue font-medium capitalize">
                      Phone #{{ index + 2 }}
                    </span>
                  </label>
                  <input
                    :id="'extra_phone' + (index + 2)"
                    required
                    type="text"
                    :value="item?.phone"
                    disabled
                    class="w-[70%] py-[2px] px-2 rounded border border-gray-300 outline-none"
                  />
                </div>
              </template>
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

<style scoped>
.variant-emnu::-webkit-scrollbar {
  width: 8px;
}
.variant-emnu::-webkit-scrollbar-track {
  background-color: #fff;
}
.variant-emnu::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.4);
  border-radius: 15px;
}
</style>
