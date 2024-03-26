<script setup lang="ts">
import { onMounted } from "vue";
import LeadsTable from "@/components/tables/LeadsTable.vue";
import { useLeadStore } from "../../stores/user/lead.ts";

const leadStore = useLeadStore();
onMounted(async () => {
  await leadStore.getAllLeads(1, 10);
});
</script>

<template>
  <main>
    <!-- <pre>{{ leadStore.leads.data }}</pre> -->
    <LeadsTable />
  </main>
</template>

<style scoped></style>
