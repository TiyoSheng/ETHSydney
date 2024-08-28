<script setup>
import { ref } from 'vue'
</script>

<template>
  <div class="section">
    <div class="section-content" >
      <img src="../assets/images/title2.svg" alt="tracks" class="title">
      <div class="list flex-center-center">
        <div class="item flex-center-start">
          <img src="../assets/images/ethIcon.svg" alt="" class="icon">
          <div class="item-track">Track 1</div>
          <div class="item-box flex-start-center">
            <p class="item-title">Ethereum Main track (Make Ethereum cyberpunk again)</p>
            <p class="item-content flex-center-start">
              <img src="../assets/images/infoIcon.svg" alt="">
              Build open-source projects on Ethereum</p>
          </div>
        </div>
        <div class="item flex-center-start">
          <img src="../assets/images/ethIcon.svg" alt="" class="icon">
          <div class="item-track">Track 2</div>
          <div class="item-box flex-start-center">
            <p class="item-title">DeSci track</p>
            <p class="item-content flex-center-start">
              <img src="../assets/images/infoIcon.svg" alt="">
              Build open-source projects on Ethereum</p>
          </div>
        </div>
        <div class="item flex-center-start">
          <img src="../assets/images/ethIcon.svg" alt="" class="icon">
          <div class="item-track">Track 3</div>
          <div class="item-box flex-start-center">
            <p class="item-title">&lt;placeholder for sponsor track 1&gt;</p>
            <p class="item-content flex-center-start">
              <img src="../assets/images/infoIcon.svg" alt="">
              Build open-source projects on Ethereum</p>
          </div>
        </div>
        <div class="item flex-center-start">
          <img src="../assets/images/ethIcon.svg" alt="" class="icon">
          <div class="item-track">Track 4</div>
          <div class="item-box flex-start-center">
            <p class="item-title">&lt;placeholder for sponsor track 2&gt;</p>
            <p class="item-content flex-center-start">
              <img src="../assets/images/infoIcon.svg" alt="">
              Build open-source projects on Ethereum</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.section-content {
  background-image: url('../assets/images/02.png');
  min-height: 100vh;
  .list {
    margin-top: 60px;
    flex-direction: column;
    gap: 40px;
    .item {
      .icon {
        width: 32px;
        height: 32px;
      }
      .item-track {
        width: 156px;
        font-family: NotoSans;
        font-size: 24px;
        font-weight: bold;
        line-height: 29px;
        letter-spacing: 0em;
        color: #000000;
        text-align: left;
        padding-left: 10px;
        box-sizing: border-box;
      }
      .item-box {
        width: 600px;
        height: 136px;
        flex-direction: column;
        background: #CFBDFE;
        box-sizing: border-box;
        border: 2px solid #525252;
        padding: 0 40px;
        border-radius: 10px;
        text-align: left;
        gap: 16px;
        .item-title {
          font-family: NotoSans;
          font-size: 18px;
          font-weight: bold;
          line-height: 34px;
          letter-spacing: 0em;
          color: #000000;
        }
        .item-content {
          font-family: Inter;
          font-size: 15px;
          font-weight: normal;
          line-height: 24px;
          letter-spacing: -0.17px;
          color: #171717;
          img {
            height: 15px;
            width: auto;
          }
        }
      }
      &:nth-child(2n) {
        .item-box {
          background: linear-gradient(261deg, rgba(255, 228, 150, 0) 20%, #EFEC53 88%, #EFEC53 92%);
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .section-content {
    min-height: 0;
    .list {
      gap: 16px;
      padding: 0 28px;
      margin-top: 24px;
      .item {
        width: 100%;
        .icon {
          width: 10px;
          height: 10px;
        }
        .item-track {
          font-size: 10px;
          line-height: 12px;
          padding-left: 4px;
          width: 60px;
        }
        .item-box {
          height: auto;
          width: 100%;
          padding: 12px 16px;
          gap: 6px;
          flex: 1;
          border: 1px solid #525252;
          .item-title {
            font-size: 10px;
            line-height: 14px;
          }
          .item-content {
            font-size: 9px;
            line-height: 9.4px;
          }
        }
      }
    }
  }
  
}
</style>