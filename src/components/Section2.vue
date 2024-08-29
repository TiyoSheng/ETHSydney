<script setup>
import { ref } from 'vue'
</script>

<template>
  <div class="section">
    <div class="section-content" >
      <img src="../assets/images/title2.png" alt="tracks" class="title">
      <div class="list flex-center-center">
        <div class="item flex-center-start">
          <img src="../assets/images/ethIcon.svg" alt="" class="icon">
          <div class="item-track">General Track</div>
          <div class="item-box flex-start-center">
            <p class="item-title">Making Ethereum Cypherpunk Again</p>
            <p class="item-content flex-center-start">
              <img src="../assets/images/infoIcon.svg" alt="">
              Build open-source projects on Ethereum</p>
          </div>
        </div>
        <div class="item flex-center-start">
          <img src="../assets/images/ethIcon.svg" alt="" class="icon">
          <div class="item-track">Youth Innovators Track</div>
          <div class="item-box flex-start-center">
            <p class="item-title">Exclusively for young minds ready to push the boundaries of creativity and technology.</p>
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
    background-image: url('../assets/images/m_02.png');

    .list {
      gap: .32rem;
      padding: 0 .56rem;
      margin-top: .48rem;
      .item {
        width: 100%;
        .icon {
          width: .2rem;
          height: .2rem;
        }
        .item-track {
          font-size: .2rem;
          line-height: .24rem;
          padding-left: .08rem;
          width: 1.2rem;
        }
        .item-box {
          height: auto;
          width: 100%;
          padding: .24rem .32rem;
          gap: .12rem;
          flex: 1;
          border: 1px solid #525252;
          .item-title {
            font-size: .2rem;
            line-height: .28rem;
          }
          .item-content {
            font-size: .18rem;
            line-height: .19rem;
          }
        }
      }
    }
  }
  
}
</style>