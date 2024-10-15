<!-- Banner.vue -->
<script setup>
import { ref, onMounted } from 'vue'

const isMobile = ref(window.innerWidth < 768)

onMounted(() => {
  window.addEventListener('resize', () => {
    isMobile.value = window.innerWidth < 768
  })
})
</script>

<template>
  <div class="bg-black text-white py-44 lg:py-48 px-5">
    <div class="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-center">
      <div class="lg:max-w-lg mb-10 lg:mb-0 lg:pr-8 text-center lg:text-left">
        <h1 class="text-[48px] lg:text-[72px] font-bold font-chakra leading-tight lg:leading-[1.2] mb-8 lg:mb-10">
          Make <span class="bg-gradient-to-b from-[#ABF8FF] to-[#CF4DFF] bg-clip-text text-transparent">Ethereum</span> Cypherpunk Again
        </h1>
        <p class="text-[18px] lg:text-[24px] font-chakra mb-6 lg:mb-8 whitespace-nowrap lg:whitespace-normal">
          Date: 25-27 Oct 2024 ｜ Venue: UNSW Founders
        </p>
        <a href="https://lu.ma/q5q134u6" target="_blank" class="inline-block bg-indigo-500 hover:bg-indigo-700 text-white py-4 px-8 rounded-lg text-[20px] font-chakra transition-colors">
          Register Now
        </a>
      </div>
      <div class="flex justify-center lg:max-h-[600px]">
        <img src="../assets/images/mask.jpg" alt="Mask Image representing Ethereum Cypherpunk" class="max-w-full h-auto max-h-[300px] lg:max-h-[600px]" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@400;700&display=swap');

.font-chakra {
  font-family: 'Chakra Petch', sans-serif;
}
</style>
