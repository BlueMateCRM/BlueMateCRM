<script setup lang="ts">
import { useRouter } from "vue-router";
import { reactive, ref } from "vue";
let forget = ref(false);
const router = useRouter();
const userData = reactive({
  login: "",
  password: "",
});
const resetData = reactive({
  login: "",
  password: "",
});
function submitData() {
  console.log("Form yuborildi...", userData);
  router.push({ name: "user-leads" });
}
</script>

<template>
  <!-- <div class="p-6 rounded-lg box-shadow">
    <div class="title py-2 px-4 bg-blue-100 flex items-center mb-4 rounded-lg">
      <i class="bx bx-lock-open-alt text-[40px] text-gray-600 mr-3"></i>
      <div class="text-gray-600">
        <h1 class="text-xl font-semibold mb-1">Login</h1>
        <p class="text-sm">Please enter your data to login.</p>
      </div>
    </div>
    <form class="block w-full" @submit.prevent="submitData" autocomplete="off">
      <div class="form-item mb-3">
        <label class="text-sm text-gray-700 font-semibold">Username</label>
        <input
          type="email"
          class="my-1 outline-none border border-gray-400 ring-0 rounded px-4 py-2 block w-full"
          placeholder="example@gmail.com"
          required
          v-model="userData.login"
        />
      </div>
      <div class="form-item mb-5">
        <label class="text-sm text-gray-700 font-semibold">Password</label>
        <input
          type="password"
          class="my-1 outline-none border border-gray-400 ring-0 rounded px-4 py-2 block w-full"
          placeholder="******"
          required
          v-model="userData.password"
        />
      </div>
      <div class="flex justify-end items-center">
        <input
          type="reset"
          class="py-2 px-4 bg-blue-500 text-white rounded mr-2 text-sm"
          value="Reset"
        />
        <input
          type="submit"
          class="py-2 px-4 bg-green-500 text-white rounded text-sm"
          value="Login"
        />
      </div>
    </form>
  </div> -->


  <!-- Page 1 -->
  <div v-if="!forget" class="flex flex-col items-center border border-gray-300 shadow-xl gap-2 w-[320px] rounded">
    <div class="flex justify-center bg-[#DDF2FD] w-full p-2 font-semibold border border-b-gray-300">
      <h2 class="text-[16px] text-[#164863]">Welcome!</h2>
    </div>
    <div>
      <form class="block w-full" @submit.prevent="submitData" autocomplete="off">
        <div class="form-item mb-3">
          <label class="text-sm text-gray-700 font-semibold">Username</label>
          <input type="email"
            class="my-1 outline-none border border-gray-400 ring-0 rounded px-4 py-2 block w-full h-[30px]"
            placeholder="Enter username" required v-model="userData.login" />
        </div>
        <div class="form-item mb-5">
          <label class="text-sm text-gray-700 font-semibold">Password</label>
          <input type="password"
            class="my-1 outline-none border border-red-500 ring-0 rounded px-4 py-2 block w-full h-[30px]"
            placeholder="Enter password" required v-model="userData.password" />
          <div class="flex justify-between">
            <label class="flex">
              <i class='bx bxs-error-circle text-[12px]' style='color:#ff0000'></i>
              <p class="text-[10px] text-[#ff0000] pl-1">Wrong password</p>
            </label>
            <label>
              <p @click="forget = true" class="text-[10px] text-[#427D9D] cursor-pointer">Forgot your password?</p>
            </label>
          </div>
        </div>
        <div class="flex items-center pb-6">
          <input type="submit" class="w-[270px] h-[30px] bg-blue-500 text-white rounded text-sm" value="Sign in" />
        </div>
      </form>
    </div>
  </div>

  <!-- Page 2 Enter your work email -->
  <div v-if="false" class="flex flex-col items-center border border-gray-300 shadow-xl gap-2 w-[320px] rounded">
    <div class="flex items-center bg-[#DDF2FD] w-full p-2 font-semibold border border-b-gray-300">
      <h2 class="ml-16 text-[16px] text-[#164863]">Reset your password</h2>
    </div>
    <div>
      <form class="block w-full" autocomplete="off">
        <div class="form-item mb-2 pt-2">
          <label class="text-sm text-gray-700 font-semibold">Email</label>
          <input type="email"
            class="my-1 outline-none border border-gray-400 ring-0 rounded px-4 py-2 block w-full h-[30px]"
            placeholder="Enter your work email" required v-model="userData.login" />
        </div>
        <div class="flex items-center py-4 ">
          <input type="submit" class="w-[270px] h-[30px] bg-blue-500 text-white rounded text-sm" value="Send" />
        </div>
      </form>
    </div>
  </div>

  <!-- Page 3 Enter code -->
  <div v-if="false" class="flex flex-col items-center border border-gray-300 shadow-xl gap-2 w-[320px] rounded">
    <div class="flex justify-center bg-[#DDF2FD] w-full p-2 font-semibold border border-b-gray-300">
      <h2 class=" text-[16px] text-[#164863]">Reset your password</h2>
    </div>
    <div>
      <form class="block w-full" autocomplete="off">
        <div class="form-item mb-2 pt-2">
          <label class="text-sm text-gray-700 font-semibold">Confirm a code</label>
          <p class="text-[10px] text-[#427D9D] pt-2">We have sent a confirmation code to your email.</p>
          <input type="email"
            class="my-1 outline-none border border-gray-400 ring-0 rounded px-4 py-2 block w-full h-[30px]"
            placeholder="Enter a code" required v-model="userData.login" />
        </div>
        <div class="flex items-center py-4 ">
          <input type="submit" class="w-[270px] h-[30px] bg-blue-500 text-white rounded text-sm" value="Send" />
        </div>
      </form>
    </div>
  </div>
  <!-- Page 4 Resent password -->
  <div v-if="forget" class="flex flex-col items-center border border-gray-300 shadow-xl gap-2 w-[320px] rounded">
    <div class="flex justify-center bg-[#DDF2FD] w-full p-2 font-semibold border border-b-gray-300">
      <h2 class=" text-[16px] text-[#164863]">Reset your password</h2>
    </div>
    <div>
      <form class="block w-full" autocomplete="off">
        <div class="form-item mb-2 pt-2">
          <label class="text-sm text-gray-700 font-semibold">New password</label>
          <input type="email"
            class="my-1 outline-none border border-gray-400 ring-0 rounded px-4 py-2 block w-full h-[30px]"
            placeholder="Enter password" required v-model="resetData.login" />
        </div>
        <div class="form-item mb-2 pt-2">
          <label class="text-sm text-gray-700 font-semibold">Retype a new password</label>
          <input type="email"
            class="my-1 outline-none border border-gray-400 ring-0 rounded px-4 py-2 block w-full h-[30px]"
            placeholder="Retype password" required v-model="resetData.password" />
        </div>
        <div class="flex">
          <i class='bx bxs-error-circle text-[12px]' style='color:#ff0000'></i>
          <p class="text-[10px] text-[#ff0000] pl-1">Does not match</p>
        </div>
        <div class="text-[#767676] text-[10px]">
          <p>At least 8 characters</p>
          <p>Contains an uppercase letter</p>
          <p>Contains a lowercase letter</p>
          <p>Contains a digit</p>
          <p>Contains a symbol</p>
        </div>
        <div class="flex items-center py-4 ">
          <input type="submit" class="w-[270px] h-[30px] bg-blue-500 text-white rounded text-sm" value="Reset" />
        </div>
      </form>
    </div>
  </div>

</template>

<style scoped>
/* .box-shadow {
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
} */
</style>
