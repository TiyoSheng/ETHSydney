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
}
@media screen and (max-width: 768px) {
  .ft {
    height: .4rem;
    font-size: .12rem;
    font-weight: normal;
    line-height: .19rem;
    text-align: center;
    padding-bottom: env(safe-area-inset-bottom);
  }
}
</style>