<script setup lang="ts"></script>

<template>
			<div class="flex items-center justify-center relative py-6">
				<div class="text-center p-1">
					<h3 class="h-[250px] md:text-[200px] text-[150px] font-[900] errorTxt">
						404
					</h3>
					<p class="text-[#5D5D5F] md:text-[40px] text-[24px] font-[1000]">
						OOPS! PAGE NOT FOUND
					</p>
					<p class="text-[#5D5D5F80] md:text-[25px] text-[14px] font-[700] mb-5">
						Sorry! the page you are looking for doesn’t exist
					</p>
					<router-link
						to="/"
						class="text-white text-[20px] font-[700] bg-gradient-to-r from-[#008AFF] to-[#005BA8] p-2.5 px-5 rounded-2xl">
						Go to the Home page
					</router-link>
				</div>
			</div>
</template>

<style scoped>
.errorTxt {
	background: -webkit-linear-gradient(#008aff, #005ba8);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}
</style>
