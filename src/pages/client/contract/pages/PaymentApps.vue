<script setup lang="ts">
import { reactive, ref } from "vue";
let isqr = ref(false);

const vehicle = reactive({
    type: "",
})

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
                <!-- Payment apps -->
                <div v-if="!isqr">
                    <div class="flex justify-between">
                        <div class="text-blue-900 font-bold space-y-2 pl-4">
                            <p>Name</p>
                            <p>Email</p>
                            <p>Phone number</p>
                            <p>Order ID</p>
                            <p>Vehicle</p>
                            <p>Amount due</p>
                            <p>Payment method</p>
                        </div>
                        <div class="space-y-2 pr-6 pb-4">
                            <p>Adam Smith</p>
                            <p>youremail@gmail.com</p>
                            <p>(929) 929-9292</p>
                            <p>101001</p>
                            <p>2023 Toyota Camry</p>
                            <p>$200.00</p>
                            <el-select v-model="vehicle.type" placeholder="Select" class="w-full">
                                <el-option label="Zelle" value="zelle" />
                                <el-option label="Venmo" value="venmo" />
                                <el-option label="Paypal" value="paypal" />
                                <el-option label="Cashapp" value="cashapp" />
                            </el-select>
                        </div>
                    </div>
                    <div v-show="vehicle.type" class="flex flex-col w-full px-3 space-y-2">
                        <Button v-show="vehicle.type !== `zelle`" class="font-semibold h-[35px] text-white bg-mainBlue px-3 text-lg rounded">
                            Pay now
                        </Button>
                        <Button
                            class="font-semibold h-[35px] text-[#086ED6] border border-[#086ED6] bg-bglightGray text-lg  rounded"
                            @click="isqr = true">
                            Pay with QR code
                        </Button>
                    </div>
                    <div class="flex items-center px-5 py-2">
                        <p class="text-gray-500">You can pay by pressing the “<span class="text-black font-bold">Pay
                                now</span>” button above, and it will redirect you to your selected
                            payment method’s app or web.
                            Or press “<span class="text-black font-bold">Pay with QR code</span>” to scan a QR code with
                            phone’s camera app or inside payment app.
                        </p>
                    </div>
                </div>
                <!--  -->
                <div v-show="isqr">
                    <div class="flex flex-col items-center">
                        <p>You can pay $200.00 by clicking the <span class="font-bold">scan QR</span></p>

                        <p v-show="vehicle.type == `zelle`"><span class="font-bold">code</span> inside <span class="font-bold">Zelle app</span> on your phone</p>
                        <p v-show="vehicle.type == `zelle`" class="py-6">Or enter the “<span class="font-bold">Email</span>” below as a recipient.</p>

                        <p v-show="vehicle.type == `venmo`"><span class="font-bold">code</span> inside <span class="font-bold">Venmo app</span> on your phone</p>

                        <p v-show="vehicle.type == `paypal`"><span class="font-bold">code</span> inside <span class="font-bold">PayPal app</span> on your phone</p>
                        
                        <p v-show="vehicle.type == `cashapp`"><span class="font-bold">code</span> inside <span class="font-bold">Cash app</span> on your phone</p>

                        <p class="py-6">Or enter the “<span class="font-bold">Username</span>” below as a recipient.</p>
                    </div>

                    <!-- QR codes -->
                    <div v-show="vehicle.type == `zelle`" class="flex justify-center items-center h-[200px]">
                        <img class="w-[200px]" src="/images/zellaqr.png" alt="Zella QR">
                    </div>
                    <div v-show="vehicle.type == `venmo`" class="flex justify-center items-center h-[200px]">
                        <img class="w-[200px]" src="/images/venmoqr.png" alt="Venmo QR">
                    </div>
                    <div v-show="vehicle.type == `paypal`" class="flex justify-center items-center h-[200px]">
                        <img class="w-[200px]" src="/images/paypalqr.png" alt="Paypal QR">
                    </div>
                    <div v-show="vehicle.type == `cashapp`" class="flex justify-center items-center h-[200px]">
                        <img class="w-[200px]" src="/images/cashappqr.png" alt="Cash QR">
                    </div>


                    <div class="flex flex-col items-center p-4">
                        <p class="pb-2"><span class="font-bold text-[#164863] pr-2">Account name</span> Mate Logistics
                            Inc</p>
                        <p><span class="font-bold text-[#164863] pr-2">Email</span> payment@matelogisticss.com </p>
                    </div>
                    <div class="flex flex-col w-[370px] pb-2">
                        <Button
                            class="font-semibold h-[35px] text-[#086ED6] border border-[#086ED6] bg-[#DDF2FD] text-lg  rounded"
                            @click="isqr = false">
                            Back
                        </Button>
                    </div>
                </div>
            </div>
        </div>
</template>


<style scoped></style>