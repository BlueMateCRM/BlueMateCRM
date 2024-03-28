<script setup lang="ts">
import { ref } from "vue";
import Vehicle from "./ui_parts/vehicle.vue";
import Condition from "./ui_parts/condition.vue";
import Type from "./ui_parts/type.vue";
import Origin from "./ui_parts/origin.vue";
import Destination from "./ui_parts/destination.vue";
import TrailerType from "./ui_parts/trailer_type.vue";
import EstShipDate from "./ui_parts/est_ship_date.vue";
import Source from "./ui_parts/source.vue";
import TotalTarif from "./ui_parts/total_tarif.vue";
import Reservation from "./ui_parts/reservation.vue";
import { useLeadStore } from "../../../../../stores/user/lead.ts";

const leadStore = useLeadStore();
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
  reload: {
    type: Function,
    required: true,
  },
});
const open = ref<boolean>(true);

const updateLead = async (data: any) => {
  await leadStore.updateLead(props.data?.guid, {
    status: "leads",
    price: 0,
    reservationPrice: 200,
    vehicleYear: +props.data?.vehicleYear,
    condition: props.data?.condition,
    trailerType: props.data?.trailerType,
    notes: props.data?.notes,
    dateEstShip: props.data?.dateEstShip,
    customer: +props.data?.customer?.id,
    vehicle: +props.data?.vehicle?.id,
    source: +props.data?.source?.id,
    origin: +props.data?.origin?.id,
    destination: +props.data?.destionation?.id,
    ...data,
  });
  await props.reload(props.data?.guid, props.data?.i);
};

const openAll = ref<boolean>(false);
const openAllEdit = () => {
  openAll.value = !openAll.value;
};
</script>

<template>
  <div>
    <!-- head -->
    <div
      class="py-1 w-full flex items-center justify-between pr-2 cursor-pointer hover:bg-gray-100 duration-200"
    >
      <div class="flex items-center" @click="open = !open">
        <i
          class="bx bx-chevron-down text-3xl duration-500"
          :class="open ? 'rotate-180' : 'rotate-0'"
        ></i>
        <p class="font-semibold">Details</p>
      </div>
      <div class="flex items-center">
        <div class="flex">
          <button
            v-if="openAll"
            type="button"
            class="px-1 text-sm min-w-[45px] rounded text-textBlack bg-white border border-gray-300"
            @click="openAllEdit"
          >
            Cancel
          </button>
          <button
            v-if="openAll"
            type="submit"
            class="px-1 text-sm min-w-[45px] rounded text-white bg-mainBlue font-medium mx-[6px]"
          >
            Save
          </button>
          <div
            v-if="!openAll"
            @click="openAllEdit"
            class="bg-white w-5 h-5 mx-1 rounded border border-gray-300 flex items-center justify-center"
          >
            <i class="bx bx-pencil text-sm text-textBlack"></i>
          </div>
          <button class="w-6 h-5 rounded border border-gray-200 bg-white">
            <i class="bx bx-dots-horizontal-rounded text-sm text-textBlack"></i>
          </button>
        </div>
      </div>
    </div>
    <!-- body -->
    <div
      class="overflow-hidden transition-all duration-200"
      :class="open ? 'max-h-[2000px]' : 'max-h-0'"
    >
      <Vehicle
        :data="{
          id: props.data?.vehicle?.id,
          year: props.data?.vehicleYear,
          make: props.data?.vehicle?.mark?.name,
          model: props.data?.vehicle?.name,
          name: props.data?.vehicleName,
        }"
        :editFunction="updateLead"
        :openAll="openAll"
      />
      <Condition
        :title="props.data?.condition || ''"
        :editFunction="updateLead"
        :openAll="openAll"
      />
      <Type :title="props.data?.vehicle?.vehicleType || ''" />
      <Origin
        :title="props.data?.originName || ''"
        :data="props.data?.origin || {}"
        :editFunction="updateLead"
        :openAll="openAll"
      />
      <Destination
        :title="props.data?.destinationName || ''"
        :data="props.data?.destination || {}"
        :editFunction="updateLead"
        :openAll="openAll"
      />
      <TrailerType
        :title="props.data?.trailerType || ''"
        :editFunction="updateLead"
        :openAll="openAll"
      />
      <EstShipDate :title="props.data?.dateEstShip || ''" />
      <Source
        :title="props.data?.source?.name || ''"
        :editFunction="updateLead"
        :openAll="openAll"
      />
      <TotalTarif :title="+props.data?.price || 0" />
      <Reservation :title="+props.data?.reservationPrice || 0" />
    </div>
  </div>
</template>

<style scoped></style>
