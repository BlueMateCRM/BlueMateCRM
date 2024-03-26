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

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
const open = ref<boolean>(true);
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
          <div
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
        :data="{ id: props.data?.vehicle?.id, name: props.data?.vehicleName }"
      />
      <Condition :title="props.data?.condition || ''" />
      <Type :title="props.data?.vehicle?.vehicleType || ''" />
      <Origin :title="props.data?.originName || ''" />
      <Destination :title="props.data?.destinationName || ''" />
      <TrailerType :title="props.data?.trailerType || ''" />
      <EstShipDate :title="props.data?.trailerType || ''" />
      <Source :title="props.data?.source?.name || ''" />
      <TotalTarif :title="props.data?.price || '0'" />
      <Reservation :title="props.data?.reservationPrice || ''" />
    </div>
  </div>
</template>

<style scoped></style>
