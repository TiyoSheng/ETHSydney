
<script setup>
import { ref } from 'vue'
</script>

<template>
  <div class="section">
    <div class="section-content" >
      <img src="../assets/images/title7.svg" alt="venue" class="title">
      <div class="list flex-center-center">
        <div class="item flex-center-center">
          <img src="../assets/supporters/pku.png" alt="">
        </div>
        <div class="item flex-center-center">
          <img src="../assets/supporters/thubq.png" alt="">
        </div>
        <div class="item flex-center-center">
          <img src="../assets/supporters/zjubca.png" alt="">
        </div>
        <div class="item flex-center-center">
          <img src="../assets/supporters/bhba.png" alt="">
        </div>
        <div class="item flex-center-center">
          <img src="../assets/supporters/blockchain.png" alt="">
        </div>
        <div class="item flex-center-center">
          <img src="../assets/supporters/neubca.png" alt="">
        </div>
        <div class="item flex-center-center">
          <img src="../assets/supporters/polyu.png" alt="">
        </div>
        <div class="item flex-center-center">
          <img src="../assets/supporters/fd.png" alt="">
        </div>
        <div class="item flex-center-center">
          <img src="../assets/supporters/rm.png" alt="">
        </div>
        <div class="item flex-center-center">
          <img src="../assets/supporters/byr.png" alt="">
        </div>
        <div class="item flex-center-center">
          <img src="../assets/supporters/sd.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.section-content {
  background-image: url('../assets/images/07.png');
  .list {
    gap: 20px;
    margin: auto;
    padding-bottom: 44px;
    margin-top: 80px;
    max-width: 800px;
    flex-wrap: wrap;
    .item {
      width: 180px;
      height: 172px;
      border-radius: 10px;
      background: #FFFFFF;
      box-sizing: border-box;
      border: 2px solid #525252;
      margin-bottom: 20px;
      img {
        width: 138px;
        height: auto;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .section-content {
    .list {
      margin-top: 32px;
      padding-bottom: 0;
      padding: 0 28px;
      box-sizing: border-box;
      .item {
        width: 70px;
        height: 67px;
        border: 1px solid #525252;
        img {
          width: 54px;
        }
      }
    }
  }
  
}
</style>