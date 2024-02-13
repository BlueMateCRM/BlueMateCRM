<script setup lang="ts">
import AppAccordion from "../tables/AppAccordion.vue"; // Corrected import statement
defineProps(['title','data']);
</script>

<template>
  <div>
    <app-accordion class="mb-4">
      <template v-slot:title>
        <span class="font-semibold text-xl">
            {{ title }}
        </span>
      </template>
      <template v-slot:content>
<pre>{{ data }}</pre>
      </template>
    </app-accordion>
  </div>
</template>

<style scoped>
  /* Your component-specific styles go here */
</style>
