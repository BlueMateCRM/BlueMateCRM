<script setup lang="ts">
import { leadHeaders } from "../../data/tableData.ts";
import { ref } from "vue";
import InfoModal from "../modals/InfoModal.vue";
import TableHeader from "../ui/headers/TableHeader.vue";
import Create from "../modals/ui/leads/Create.vue";
import { useLeadStore } from "../../stores/user/lead.ts";
import DataLoader from "../ui/DataLoader.vue";

const leadStore = useLeadStore();
const showModal = ref<boolean>(false);
const singleData = ref<any>({});
const openCreate = ref<any>(true);

// info modal
function hideModal() {
  showModal.value = false;
}
async function openInfoModal(data: any) {
  await leadStore.getLeadDetails(data?.guid);
  singleData.value = { ...leadStore.details.data, i: data?.i };
  showModal.value = true;
}

// change data of info modal by index
async function getDataByNum(index: number | object) {
  if (typeof index === "number") {
    await leadStore.getLeadDetails(leadStore.leads.data?.[index]?.guid);
    singleData.value = { ...leadStore.details.data, i: index };
  }
}
</script>

<template>
  <!-- CRUD modals -->
  <Create ref="openCreate" />

  <!-- main -->
  <section>
    <!-- info modal -->
    <InfoModal
      :close="hideModal"
      :show="showModal"
      :data="singleData"
      :next="getDataByNum"
      :length="leadStore.leads.data?.length"
    />

    <!-- header -->
    <TableHeader title="lead" :create="openCreate.openModal" />

    <!-- loading -->
    <div
      v-if="leadStore.leads.loading"
      class="w-full h-[60vh] flex items-center justify-center"
    >
      <DataLoader />
    </div>

    <!-- table -->
    <template v-else>
      <AppTable
        v-if="leadStore.leads.data?.length > 0"
        :data="leadStore.leads.data"
        :headers="leadHeaders"
      >
        <template #td_id="{ item }">
          <span
            class="text-mainBlue cursor-pointer uppercase"
            @click="openInfoModal(item)"
          >
            60000{{ item?.id }}
          </span>
        </template>
        <template #td_vehicle="{ item }">
          <div class="flex items-center">
            <div class="flex flex-col mr-[5px]">
              <i class="bx bxs-ev-station text-mainRed text-sm mb-[2px]"></i>
              <i class="bx bxs-car text-mainBlue text-sm"></i>
            </div>
            <span>{{ item?.vehicle }}</span>
          </div>
        </template>
        <template #td_price="{ item }">
          <p>
            <span class="text-mainBlue font-bold mr-[2px]">$</span>
            <span>{{ item?.price }}</span>
          </p>
        </template>
      </AppTable>
      <h1 v-else class="text-center text-mainBlue text-2xl pt-10">
        Leads are empty!
      </h1>
    </template>
  </section>
</template>

<style scoped></style>
