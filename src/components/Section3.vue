
<script setup>
import { ref } from 'vue'

const openMap = () => {
  window.open('https://goo.gl/maps/M4MRRC4HZt7TLst36 ', '_blank')
}
</script>

<template>
  <div class="section">
    <div class="section-content" >
      <img src="../assets/images/title3.png" alt="venue" class="title">
      <div class="metaspace" @click="openMap">
        <img src="../assets/images/metaspace.png" alt="metaspace">
      </div>
      <p class="title-p">UNSW Founders</p>
      <p class="subtitle">Michael Crouch Innovation Centre - UNSW Kensington Entre via Gate 2 Avenue, Kensington, NSW 2033</p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.section-content {
  background-image: url('../assets/images/03.png');
  .metaspace {
    margin-top: 60px;
    img {
      width: 400px;
      height: 400px;
      cursor: pointer;
    }
  }
  .title-p {
    font-family: NotoSans;
    font-size: 28px;
    font-weight: bold;
    line-height: 40px;
    letter-spacing: 0em;
    color: #000000;
    margin-top: 98px;
  }
  .subtitle {
    margin-top: 16px;
    font-family: NotoSans;
    font-size: 16px;
    font-weight: normal;
    line-height: 28.8px;
    letter-spacing: 0em;
    color: #000000;
  }
}
@media screen and (max-width: 768px) {
  .section-content {
    background-image: url('../assets/images/m_03.png');
    .metaspace {
      margin-top: .48rem;
      img {
        width: 3.12rem;
        height: 3.12rem;
      }
    }
    .title-p {
      font-size: .22rem;
      line-height: .31rem;
      margin-top: .77rem;
    }
    .subtitle {
      font-size: .13rem;
      line-height: .23rem;
      margin-top: .13rem;
    }
  }
  
}
</style>