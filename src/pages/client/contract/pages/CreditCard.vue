<script setup lang="ts">
import { ref } from "vue";
let iscredit = ref(false);

</script>
<template>
    <div class="flex flex-col items-center pt-10">
        <div class="w-[260px]  pb-4">
            <img src="/images/MateLogistics.png" alt="">
        </div>
        <div class="flex flex-col items-center border border-gray-300 shadow-lg gap-2 w-[390px] rounded">
            <div class="flex items-center bg-[#DDF2FD] w-full p-2 font-semibold border border-b-gray-300">
                <h2 class="ml-20 text-2xl text-[#164863]">Mate Logistics Inc</h2>
            </div>
            <div v-if="!iscredit">
                <div class="flex flex-col font-bold items-center">
                    <p class="text-[#21232C]">Please fill out the <span class="text-black font-bold text-lg">Credit Card
                            Authorization</span></p>
                    <p class="pb-4">form to pay for your auto transportation.</p>
                    <p>You can use this payment method for now and</p>
                    <p class="pb-4">future auto transport needs.</p>
                </div>
                <div class="flex justify-between">
                    <div class="text-blue-900 font-bold space-y-2 pl-4">
                        <p>Name</p>
                        <p>Email</p>
                        <p>Phone number</p>
                        <p>Order ID</p>
                        <p>Vehicle</p>
                        <p>Payment method</p>
                        <p>Amount</p>
                        <p>Surcharge fee</p>
                        <p>Total amount:</p>
                    </div>
                    <div class="space-y-2 pr-6 pb-4">
                        <p>Adam Smith</p>
                        <p>youremail@gmail.com</p>
                        <p>(929) 929-9292</p>
                        <p>101001</p>
                        <p>2023 Toyota Camry</p>
                        <p>Credit/Debit Card</p>
                        <p>$200.00</p>
                        <p>$9.00</p>
                        <p>$209.00</p>
                    </div>
                </div>
                <div class="px-6">
                    <p class="text-gray-500">
                        I authorize  <span class="text-black font-bold">Mate Logistics Inc</span> to charge my
                        credit card for agreed upon services. I understand that my information will be saved
                        to file for future transactions on my account.
                    </p>
                    <p class="text-gray-500 py-4">
                        Your name on the card should match with the name on the contract and account.
                    </p>
                </div>
                <div class="p-3">
                    <Button class="font-semibold h-[35px] w-full text-white bg-mainBlue text-lg rounded">
                        Fill out a form now
                    </Button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>