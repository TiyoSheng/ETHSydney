<script setup>
import { ref, onMounted } from 'vue'
const isMobile = ref(window.innerWidth < 768)

onMounted(() => {
  window.addEventListener('resize', () => {
    isMobile.value = window.innerWidth < 769
  })
})
</script>
<template>
  <div class="ft flex-center-center">
    © 2024 ETH Sydney. All Rights <br v-if="isMobile" /> Reserved.
  </div>
</template>
<style lang="scss" scoped>
.ft {
  height: 48px;
  text-align: center;
  background: #000;
  width: 100%;
  font-family: Inter;
  font-size: 15.13px;
  font-weight: normal;
  line-height: 24px;
  letter-spacing: 0em;
  color: #FFFFFF;
  box-sizing: border-box;
}
@media screen and (max-width: 768px) {
  .ft {
    height: 20px;
    font-size: 5.91px;
    font-weight: normal;
    line-height: 9.38px;
    text-align: center;
  }
}
</style>