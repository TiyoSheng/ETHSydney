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
  <div class="banner section">
    <img v-if="!isMobile" class="banner-bg" src="../assets/images/banner.png" alt="ETHSydney banner" />
    <img v-if="isMobile" class="banner-bg" src="../assets/images/m_banner.png" alt="ETHSydney banner" />
    <div class="banner-content">
      <h1>Making <span>Ethereum</span> <br v-if="isMobile" /> Cypherpunk Again</h1>
      <p>DATE : 25-27 Oct 2024 ｜ UNSW Founders</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  position: relative;
  
  .banner-bg {
    width: 100%;
    height: auto;
    max-width: 100%;
    max-height: 100vh;
    object-fit: cover;
  }
  .banner-content {
    position: absolute;
    top: 24%;
    left: 0;
    width: 100%;
    height: calc(100% - 24%);
    box-sizing: border-box;
    text-align: center;
    h1 {
      font-family: AlegreyaSansSC;
      font-size: 72px;
      font-weight: 900;
      line-height: 100%;
      text-align: center;
      letter-spacing: 0.05em;
      color: #FFFFFF;
      span {
        background: linear-gradient(180deg, #ABF8FF 0%, #CF4DFF 137%);
        -webkit-background-clip: text;
        color: transparent;
        -webkit-text-fill-color: transparent;
      }
    }
    p {
      font-family: PasseroOne;
      font-size: 28px;
      font-weight: normal;
      line-height: normal;
      text-align: center;
      letter-spacing: 0.025em;
      color: #FFFFFF;
    }
  }
}
@media screen and (max-width: 1330px) {
  .banner {
    .banner-content {
      h1 {
        font-size: 56px;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .banner {
    .banner-bg {
      margin-top: -.88rem;
    }
    .banner-content {
      // position: static;
      top: 0;
      height: calc(100%);
      padding-top: 3rem;
      h1 {
        font-size: .48rem;
      }
      p {
        font-size: .2rem;
        margin-top: .36rem;
      }
    }
  }
}
</style>