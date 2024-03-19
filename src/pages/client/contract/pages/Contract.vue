<script setup lang="ts">
import { ref } from "vue";
import ContactHeader from "@/components/client/ContactHeader.vue";
import { jsPDF } from "jspdf";
// import html2PDF from "jspdf-html2canvas";

const show = ref(true);
const page = ref("");
const download = () => {
  show.value = false;
  const pdf = new jsPDF({
    orientation: "p",
    unit: "px",
    format: "a4",
    putOnlyUsedFonts: true,
  });
  const html = page.value;
  pdf.html(html, {
    callback: (pdf) => {
      pdf.save("contract.pdf");
    },
    margin: [25, 0, 25, 0],
    autoPaging: "text",
    x: 0,
    y: 0,
    width: 446,
    windowWidth: 892,
  });
};
</script>

<template>
  <!-- title & actions -->
  <ContactHeader class="border border-gray-300 border-b-0 rounded-t">
    <template #actions>
      <button
        @click="download()"
        class="flex items-center px-[10px] py-[3px] bg-white border border-gray-300 rounded"
      >
        <span
          class="w-4 h-4 rounded flex items-center justify-center bg-mainBlue"
        >
          <i class="bx bxs-download text-xs text-white"></i>
        </span>
        <span class="text-textBlack font-semibold ml-[5px]">Download</span>
      </button>
    </template>
  </ContactHeader>
  <!-- contract -->
  <button
    @click="download()"
    class="flex items-center px-[10px] py-[3px] bg-white border border-gray-300 rounded"
  >
    <span class="w-4 h-4 rounded flex items-center justify-center bg-mainBlue">
      <i class="bx bxs-download text-xs text-white"></i>
    </span>
    <span class="text-textBlack font-semibold ml-[5px]">Download</span>
  </button>
  <section class="w-full py-[30px] border border-gray-300">
    <div ref="page" class="px-[30px] text-textBlack">
      <!-- header -->
      <div
        class="flex justify-between items-center border-b-[5px] border-textBlack mb-5 pb-3"
      >
        <!-- title -->
        <div>
          <img src="/images/logo.png" alt="logo" class="w-[82px] mb-[15px]" />
          <h1 class="text-[40px] leading-[47.4px] font-medium">
            Mate Logistics Inc
          </h1>
        </div>
        <!-- data -->
        <ul class="flex flex-col justify-between max-w-[173px]">
          <li class="text-end mb-[5px]">MC: 01380151</li>
          <li class="text-end mb-[5px]">
            65-34 Myrtle Ave #2f, Queens, NY 11385
          </li>
          <li class="text-end mb-[5px]">(929) 592-3003</li>
          <li class="text-end">matelogisticss.com</li>
        </ul>
      </div>
      <!-- order number -->
      <div class="mb-10">
        <h2 class="text-[25.89px] leading-[30.68px] font-semibold mb-[10px]">
          Order number: 101001
        </h2>
        <p class="">
          This agreement is executed on 12/31/2024 between following parties:
        </p>
      </div>
      <!-- company table -->
      <div class="flex mb-10">
        <div class="w-1/2">
          <h3 class="border-b border-textBlack pb-[10px] font-medium">
            Transport Company
          </h3>
          <div class="pt-[10px]">
            <h4 class="mb-[10px] font-medium">Mate Logistics Inc</h4>
            <p>
              Info@matelogisticss.com<br />
              (929) 592-3003
            </p>
          </div>
        </div>
        <div class="w-1/2">
          <h3 class="border-b border-textBlack pb-[10px] font-medium">
            Shipper
          </h3>
          <div class="pt-[10px]">
            <h4 class="mb-[10px] font-medium">Alex Summer</h4>
            <p>
              alexsummer@gmail.com<br />
              (999) 999-9999
            </p>
          </div>
        </div>
      </div>
      <!-- origin table -->
      <div class="flex mb-10">
        <div class="w-1/2">
          <h3 class="border-b border-textBlack pb-[10px] font-medium">
            Origin
          </h3>
          <div class="pt-[10px]">
            <div class="flex mb-[10px]">
              <h4 class="font-medium w-[146px]">Address</h4>
              <p>234 Ave, apt #23</p>
            </div>
            <div class="flex">
              <h4 class="font-medium w-[146px]">City,State Zip</h4>
              <p>Wilmington, DE 19804</p>
            </div>
          </div>
        </div>
        <div class="w-1/2">
          <h3 class="border-b border-textBlack pb-[10px] font-medium">
            Destination
          </h3>
          <div class="pt-[10px]">
            <div class="flex mb-[10px]">
              <h4 class="font-medium w-[146px]">Address</h4>
              <p>3455 St, apt #23</p>
            </div>
            <div class="flex">
              <h4 class="font-medium w-[146px]">City,State Zip</h4>
              <p>Brooklyn, NY 11101</p>
            </div>
          </div>
        </div>
      </div>
      <!-- origin table -->
      <div class="flex mb-10">
        <div class="w-3/5">
          <h3 class="border-b border-textBlack pb-[10px] font-medium">
            Contact information
          </h3>
          <div class="pt-[10px]">
            <div class="flex mb-[10px]">
              <h4 class="font-medium w-[25%] min-w-[100px]">Field</h4>
              <h4 class="font-medium w-[40%] min-w-[176px]">Origin</h4>
              <h4 class="font-medium w-[35%] min-w-[176px]">Destination</h4>
            </div>
            <div class="flex mb-[10px]">
              <h4 class="font-medium w-[25%] min-w-[100px]">Business</h4>
              <p class="w-[40%] min-w-[176px]">AZB Company</p>
              <p class="w-[35%] min-w-[176px]">AZB Company</p>
            </div>
            <div class="flex mb-[10px]">
              <h4 class="font-medium w-[25%] min-w-[100px]">Phone</h4>
              <p class="w-[40%] min-w-[176px]">(929) 999-9999</p>
              <p class="w-[35%] min-w-[176px]">(929) 999-9999</p>
            </div>
            <div class="flex mb-[10px]">
              <h4 class="font-medium w-[25%] min-w-[100px]">Person</h4>
              <p class="w-[40%] min-w-[176px]">Amanda Madison</p>
              <p class="w-[35%] min-w-[176px]">Alex Summer</p>
            </div>
            <div class="flex mb-[10px]">
              <h4 class="font-medium w-[25%] min-w-[100px]">Phone</h4>
              <p class="w-[40%] min-w-[176px]">(929) 999-9999</p>
              <p class="w-[35%] min-w-[176px]">(929) 999-9999</p>
            </div>
            <div class="flex mb-[10px]">
              <h4 class="font-medium w-[25%] min-w-[100px]">Phone #2</h4>
              <p class="w-[40%] min-w-[176px]">(929) 999-9999</p>
              <p class="w-[35%] min-w-[176px]">(929) 999-9999</p>
            </div>
            <div class="flex mb-[10px]">
              <h4 class="font-medium w-[25%] min-w-[100px]">Buyer</h4>
              <p class="w-[40%] min-w-[176px]">88394</p>
              <p class="w-[35%] min-w-[176px]">88394</p>
            </div>
          </div>
        </div>
        <div class="w-2/5">
          <h3 class="border-b border-textBlack pb-[10px] font-medium">
            Shipping information
          </h3>
          <div class="pt-[10px]">
            <div class="flex mb-[10px]">
              <h4 class="font-medium w-[60%] min-w-[149px]">
                1st avail pick up
              </h4>
              <p>12/31/2024</p>
            </div>
            <div class="flex mb-[10px]">
              <h4 class="font-medium w-[60%] min-w-[149px]">Est. load</h4>
              <p>12/31/2024</p>
            </div>
            <div class="flex mb-[10px]">
              <h4 class="font-medium w-[60%] min-w-[149px]">Est. delivery</h4>
              <p>12/31/2024</p>
            </div>
            <div class="flex mb-[10px]">
              <h4 class="font-medium w-[60%] min-w-[149px]">Trailer type</h4>
              <p>open</p>
            </div>
            <div class="flex mb-[10px]">
              <h4 class="font-medium w-[60%] min-w-[149px]">
                Vehicle condition
              </h4>
              <p>Running</p>
            </div>
            <div class="flex mb-[10px]">
              <h4 class="font-medium w-[60%] min-w-[149px]">
                Vehicle #2 condition
              </h4>
              <p>Running</p>
            </div>
          </div>
        </div>
      </div>
      <!-- vehicle table -->
      <div class="flex mb-10">
        <div class="w-2/5">
          <h3 class="border-b border-textBlack pb-[10px] font-medium">
            Vehicle year, make, model
          </h3>
          <p class="pt-[10px]">2023 Chevrolet Cobalt</p>
          <p class="pt-[10px]">2023 Chevrolet Cobalt</p>
        </div>
        <div class="w-[30%]">
          <h3 class="border-b border-textBlack pb-[10px] font-medium">
            Type of the vehicle
          </h3>
          <p class="pt-[10px]">Car</p>
          <p class="pt-[10px]">Car</p>
        </div>
        <div class="w-2/5">
          <h3 class="border-b border-textBlack pb-[10px] font-medium">Price</h3>
          <p class="pt-[10px]">$1,200.00</p>
          <p class="pt-[10px]">$1,200.00</p>
          <p class="pt-[10px] flex">
            <span class="min-w-[177px] w-[55%]">Total price</span>
            <span>$2,300.00</span>
          </p>
          <p class="pt-[10px] flex">
            <span class="min-w-[177px] w-[55%]">Reservation fee</span>
            <span>$400.00</span>
          </p>
          <p class="pt-[10px] flex">
            <span class="min-w-[177px] w-[55%]">Balance on delivery</span>
            <span>$1,900.00</span>
          </p>
        </div>
      </div>
      <!-- sign & info -->
      <div class="mb-5">
        <p class="font-medium mb-5">
          The parties agree to the terms and conditions set forth above as
          demonstrated by their signature:
        </p>
        <div class="flex">
          <div class="w-1/2">
            <h3 class="font-medium">Mate Logistics</h3>
            <p class="pt-[5px] pb-[10px]">info@matelogistics</p>
            <div
              class="flex items-center h-[60.4px] w-[65%] min-w-[291px] pl-3 border border-gray-300 rounded text-[25.89px] font-bold"
            >
              Mate Logistics Inc
            </div>
            <p class="pt-[10px]">info@matelogistics</p>
          </div>
          <div class="w-1/2">
            <h3 class="font-medium">Alex Summer</h3>
            <p class="pt-[5px]">alexsummer@gmail.com</p>
            <div
              class="flex items-center h-[64.4px] w-[65%] min-w-[291px] p-[10px] border border-gray-300 my-[10px] rounded"
            >
              <button
                v-if="show"
                class="w-full py-[2px] bg-mainBlue text-white text-[25.89px] font-semibold rounded"
              >
                Sign
              </button>
            </div>
            <p>E-Signed:</p>
            <p class="pt-[3px]">IP:</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- footer -->
  <footer
    class="flex justify-end border border-gray-300 bg-lightBlue border-t-0 py-[9.5px] px-[25px] rounded-b"
  >
    <button class="w-[125px] py-1 bg-mainBlue font-semibold text-white rounded">
      Next
    </button>
  </footer>
</template>

<style scoped></style>
