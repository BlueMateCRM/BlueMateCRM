<script setup lang="ts">
import { ref, onMounted } from "vue";
import CreateCustomer from "../modals/ui/customer/Create.vue";
import CreateLead from "../modals/ui/leads/Create.vue";
import CreateOrder from "../modals/ui/orders/Create.vue";
import CreateCarrier from "../modals/ui/carrier/Create.vue";
import CreateTask from "../modals/ui/task/Create.vue";

const props = defineProps({
  initial: {
    type: Function,
    required: true,
  },
  status: {
    type: Array,
    required: true,
  },
  i: {
    type: Number,
    required: true,
  },
  active: {
    type: Function,
    required: true,
  },
});

const input = ref("");
const content = ref(props.i);
const addCustomer = ref<any>(false);
const addLead = ref<any>(false);
const addOrder = ref<any>(false);
const addCarrier = ref<any>(false);
const addTask = ref<any>(false);

onMounted(async () => {
  props.initial();
  content.value = props.i;
});
</script>

<template>
  <!-- create modals -->
  <CreateCustomer ref="addCustomer" />
  <CreateLead ref="addLead" />
  <CreateOrder ref="addOrder" />
  <CreateCarrier ref="addCarrier" />
  <CreateTask ref="addTask" />

  <!-- header -->
  <header
    class="w-full flex items-center justify-between shadow-lg sticky top-0 left-0 z-50 bg-white"
  >
    <!-- status list -->
    <nav class="flex text-base cursor-pointer">
      <div
        v-for="(item, index) in props.status"
        class="font-semibold py-4 px-3 capitalize"
        :class="{ price: props.i == index && props.status?.length > 1 }"
        @click="props.active(index)"
        :key="index + 'AAVVDD'"
      >
        {{ item }}
      </div>
    </nav>

    <!-- details -->
    <div class="flex items-center pr-4">
      <el-input v-model="input" placeholder="Search" />
      <div class="flex items-center ml-12">
        <div
          class="group w-6 h-6 flex items-center justify-center border-2 border-textGray rounded-full leading-0 relative cursor-pointer"
        >
          <i class="bx bx-plus text-textGray text-xl"></i>
          <div
            class="opacity-0 invisible group-hover:opacity-100 group-hover:visible absolute top-6 -right-1 w-[180px] py-2 bg-white shadow-lg border border-gray-300 rounded-md overflow-hidden duration-200"
          >
            <div
              @click="addLead.openModal"
              class="py-1 text-textGray text-[15px] px-2 hover:text-mainBlue hover:bg-gray-100 duration-200"
            >
              Create a lead
            </div>
            <div
              @click="addOrder.openModal"
              class="py-1 text-textGray text-[15px] px-2 hover:text-mainBlue hover:bg-gray-100 duration-200"
            >
              Create an order
            </div>
            <div
              @click="addCustomer.openModal"
              class="py-1 text-textGray text-[15px] px-2 hover:text-mainBlue hover:bg-gray-100 duration-200"
            >
              Create a contact
            </div>
            <div
              @click="addCarrier.openModal"
              class="py-1 text-textGray text-[15px] px-2 hover:text-mainBlue hover:bg-gray-100 duration-200"
            >
              Create a carrier
            </div>
            <div
              @click="addTask.openModal"
              class="py-1 text-textGray text-[15px] px-2 hover:text-mainBlue hover:bg-gray-100 duration-200"
            >
              Create a task
            </div>
          </div>
        </div>
        <i class="bx bx-bulb text-3xl text-gray-300 mx-3"></i>
        <div
          class="rounded-full w-10 h-10 overflow-hidden border-[3px] border-darkBlue"
        >
          <img
            src="https://images.unsplash.com/profile-1534796299842-cfc036c59a04?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
            alt="avatar"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.price {
  border-bottom: 2px solid #0087ff;
  background-color: #ddf2fd;
}
</style>
