<script setup lang="ts">
import { ref } from "vue";
import { makePdf } from "../../../../composables/makePdf.ts";
import ContactHeader from "@/components/client/ContactHeader.vue";

const show = ref(true);
const completedPage = ref("");

// make PDF
const download = () => {
  show.value = false;
  makePdf(completedPage.value, "term_completed");
};
</script>

<template>
  <!-- title & actions -->
  <ContactHeader class="border border-gray-300 border-b-0 rounded-t">
    <template #actions>
      <div class="flex">
        <!-- download -->
        <button
          @click="download()"
          class="flex items-center px-[10px] py-[3px] bg-white border border-gray-300 rounded"
        >
          <div
            class="w-4 h-4 rounded flex items-center justify-center bg-mainBlue"
          >
            <i class="bx bxs-download text-xs text-white"></i>
          </div>
          <span class="text-textBlack font-semibold ml-[5px]">Download</span>
        </button>
        <!-- status -->
        <div
          class="rounded bg-[#02A858] py-[3px] px-[10px] font-semibold text-white ml-[10px] mr-8"
        >
          Signed
        </div>
        <!-- pay -->
        <button
          class="rounded bg-mainBlue py-[3px] px-[20px] font-semibold text-white"
        >
          Pay
        </button>
      </div>
    </template>
  </ContactHeader>
  <!-- contract text -->
  <section class="py-[30px] border border-gray-300">
    <div ref="completedPage" class="px-[30px] text-textBlack">
      <!-- title -->
      <h1 class="text-center text-[40px] leading-[47.4px] font-medium mb-[5px]">
        Terms and Conditions
      </h1>
      <div class="w-full h-[5px] bg-textBlack my-5"></div>
      <!-- 1 -->
      <p class="mb-5">
        By submitting this Service Agreement (hereafter "Agreement") online, via
        fax, or email, Customer (hereafter "you" or "your") understands and
        agrees that they are hiring the services of Mate Logistics Inc
        (hereafter "Mate Logistics"), a licensed & bonded transportation
        brokerage (MC#01380151), to arrange the shipment of their vehicle(s)
        with a Contract Carrier (hereafter "Carrier"). They further have read,
        understand, and will abide by the following terms and conditions.
      </p>
      <!-- 2 -->
      <p class="mb-5">
        1. Carrier requires you to prepare your vehicle(s) for transport by
        disarming any alarm systems and/or providing necessary remotes for alarm
        systems, removing or retracting all loose and/or protruding accessories
        from your vehicle(s) and removing or deactivating any Electronic Toll
        Tags and Parking Passes. Prior to dispatch, It is your duty to inform
        Mate Logistics Inc of any modifications which affect the length, width,
        height, and/or weight of your vehicle(s), as well as if your vehicle(s)
        ground clearance is less than 4 inches. You are required to ensure that
        there is no more than 1/2 tank of fuel in the vehicle(s) prior to
        pickup. Vehicle(s) being shipped from a port must not contain more than
        1/4 tank of fuel and can under no circumstances contain any luggage. All
        personal and detachable items must be removed from the vehicle prior to
        pick-up.
      </p>
      <!-- 3 This paragraph is Dinamic -->
      <p class="mb-5">
        2. Your vehicle(s) is/are considered in operational condition and must
        be able to be driven onto and off of the carrier under the vehicle's own
        power at all times during shipment unless clearly noted on your order as
        'In-op' or 'Non-operational'. Non-operational vehicles must roll, brake,
        and steer in order to be loaded on a regular open or enclosed trailer
        using a winch. It is the obligation of the Customer to provide a
        forklift at the pick-up and delivery location if this condition is not
        met. Vehicles that are non-operational and were dispatched as
        operational vehicles will be subject to an additional,
        industry-standard, Non-Operational Fee of Two Hundred and Fifty Dollars
        ($250.00).
      </p>
      <!-- 4 -->
      <p class="mb-5">
        3. With the exception of shipments going through a port, you can arrange
        to store personal belongings in the trunk/back compartment of your
        vehicle(s). Up to 100 lbs are free of charge, subject to pre-approval by
        the Carrier. Any luggage exceeding 100 lbs will incur an additional
        charge and will be payable to the carrier on the spot. Neither Shipper
        Logistics nor Carrier are licensed to handle the transportation of
        "Household Goods." As such, any damage to or loss of any contents
        present in the vehicle during shipment is the sole responsibility of the
        Customer. Any fines levied to the Carrier resulting from the presence of
        these items are also payable by the Customer.
      </p>
      <!-- 5 -->
      <p class="mb-5">
        4. Your total price for the transportation of your vehicle(s) covers all
        tax and tolls and is factored in using numerous pieces of information
        including, but not limited to, the size and/or weight of the
        vehicle(s).The balance due on delivery must be made by CASH (COD) or
        CASHIER;S check (zelle , cashapp or venmo are also acceptable , and
        should be set up on booking). Misrepresentation to MateLogistics of the
        vehicle(s) size and/or weight may result in additional fees and/or the
        cancellation of the order. Orders canceled due to misrepresentation of
        the vehicle(s) or any other reason will forfeit any service fees that
        have been previously paid.
      </p>
      <!-- 6 -->
      <p class="mb-5">
        5. Mate Logistics Inc agrees to provide a carrier to transport your
        vehicle as promptly as possible in accordance with your instructions but
        cannot guarantee pick-up or delivery on a specified date. Paid deposit
        will be refunded within 7 business days if we can not provide a carrier
        to transport your vehicle in accordance with provided date. An
        administration fee of $ 200 shall be charged for orders canceled prior
        to one week after the requested initial available pickup date. Mate
        Logistics Inc does not agree to pay for your rental of a vehicle, nor
        shall it be liable for the failure of mechanical or operating parts of
        your vehicle.
      </p>
      <!-- 7 -->
      <p class="mb-5">
        6. If Carrier is sent out and the vehicle isn't ready as indicated by
        the Shipper there shall be an additional $95.00 rescheduling fee. Mate
        Logistics Inc must be notified at least 48 hours in advance, should the
        shipper be available for pick up and delivery, the shipper must have an
        alternate representative take their place as Shipper. If for any reason
        the vehicle becomes unavailable during a scheduled pick-up window, after
        an order has been placed, Mate Logistics Inc has the right to cancel the
        order with no refund.
      </p>
      <!-- 8 -->
      <p class="mb-10">
        7. Trucking damage claims are covered by carrier from $100,000 up to
        $1,000,000 cargo insurance per load, and a minimum of 3/4 of a million
        dollars in public liability and property damage. All claims must be
        noted and signed for at the time of delivery, and submitted in writing
        within 15 days of delivery.
      </p>
      <!-- sign & info -->
      <div class="mb-5">
        <p class="font-medium mb-5">
          The parties agree to the terms and conditions set forth above as
          demonstrated by their signature:
        </p>
        <div class="flex gap-x-[25px]">
          <div class="w-1/2">
            <h3 class="font-medium">Mate Logistics</h3>
            <p class="pt-[5px]">info@matelogistics</p>
            <div class="flex my-[10px]">
              <div
                class="flex items-center w-[75%] border border-gray-300 border-r-0 px-[10px] rounded-l"
              >
                <span class="text-[25.89px] font-bold vajuhday">
                  Mate Logistics Inc
                </span>
              </div>
              <div class="text-center w-[25%] border border-gray-300 rounded-r">
                <p>Initials</p>
                <span class="text-[25.89px] font-bold vajuhday mt-[10px]">
                  ML
                </span>
              </div>
            </div>
            <p>E-Signed: 12/31/2024</p>
          </div>
          <div class="w-1/2">
            <h3 class="font-medium">Alex Summer</h3>
            <p class="pt-[5px]">alexsummer@gmail.com</p>
            <div class="flex my-[10px]">
              <div
                class="flex items-center w-[75%] border border-gray-300 border-r-0 px-[10px] rounded-l"
              >
                <span class="text-[25.89px] font-bold vajuhday">
                  Alex Summer
                </span>
              </div>
              <div class="text-center w-[25%] border border-gray-300 rounded-r">
                <p>Initials</p>
                <span class="text-[25.89px] font-bold vajuhday mt-[10px]">
                  AS
                </span>
              </div>
            </div>
            <p>E-Signed: 12/31/2024 02:12 PM EST</p>
            <p class="pt-[3px]">IP: 191.12.12.12</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- footer -->
  <footer
    class="flex justify-end border border-gray-300 border-t-0 bg-lightBlue py-[9.5px] px-[25px] rounded-b"
  >
    <routerLink
      to="/client/contract/contract-completed"
      class="w-[125px] text-center py-1 bg-mainBlue font-semibold text-white rounded"
    >
      Back
    </routerLink>
  </footer>
</template>

<style scoped></style>
