<!-- Sponsor -->
<script setup>
import { ref } from 'vue'
</script>

<template>
  <div class="section">
    <div class="section-content">
      <img src="../assets/images/title5.png" alt="venue" class="title">
      <div class="list flex-center-center">
        <!--
        <div class="item flex-center-center">
          <img src="../assets/images/eco.png" alt="">
        </div>
        -->
        <div class="item flex-center-center">
          <img src="../assets/images/unsw.png" alt="">
        </div>
        <!-- <div class="item flex-center-center">
          <img src="../assets/images/galxe.png" alt="">
        </div> -->
      </div>
      <button><a href="https://www.ethsydney.net/img/ETHSydney-Hackathon-2024.pdf" target="_blank"
          rel="noopener noreferrer">Sponsor Us</a></button>
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

  button {
    
    width: 286px;
    height: 78px;
    box-sizing: border-box;
    border: 2px solid #000000;
    border-radius: 12px;
    cursor: pointer;
    background: linear-gradient(156deg, #ABF8FF -29%, #CF4DFF 147%);
    box-shadow: 5px 5px 0px 0px #2B2B2B;
    margin: auto;

    a {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: NotoSans;
      font-size: 24px;
      font-weight: bold;
      line-height: normal;
      text-align: center;
      letter-spacing: 0em;
      color: #000000;
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
    button {
    margin-top: .48rem;
    width: 2.64rem;
    height: .75rem;
    border-radius: .12rem;
    border: 1px solid #000000;
    box-shadow: 1.95px 1.95px 0px 0px #2B2B2B;
    a {
      font-size: .19rem;
    }
  }
  }

}
</style>