
<script setup>
import { ref } from 'vue'
</script>

<template>
  <div class="section">
    <div class="section-content" >
      <img src="../assets/images/title5.png" alt="venue" class="title">
      <div class="list flex-center-center">
        <div class="item flex-center-center">
          <img src="../assets/images/eco.png" alt="">
        </div>
        <div class="item flex-center-center">
          <img src="../assets/images/unsw.png" alt="">
        </div>
        <!-- <div class="item flex-center-center">
          <img src="../assets/images/galxe.png" alt="">
        </div> -->
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.section-content {
  background-image: url('../assets/images/05.png');
  .list {
    gap: 20px;
    padding-bottom: 100px;
    margin-top: 60px;
    .item {
      width: 340px;
      height: 96px;
      border-radius: 10px;
      background: #FFFFFF;
      box-sizing: border-box;
      border: 2px solid #525252;
      img {
        width: 150px;
        height: auto;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .section-content {
    background-image: url('../assets/images/m_05.png');
    .list {
      flex-direction: column;
      margin-top: .48rem;
      padding-bottom: 0;
      .item {
        width: 2.64rem;
        height: .75rem;
        border: 1px solid #525252;
        img {
          width: 1.16rem;
        }
      }
    }
  }
  
}
</style>