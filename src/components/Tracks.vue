<!-- Track.vue -->
<script setup>
import { ref } from 'vue'
</script>

<template>
  <div class="section">
    <div class="section-content">
      <!-- Replaced the image header with a text header -->
      <div class="title-text">Tracks</div>
      <div class="list flex-center-center">
        <div class="item flex-center-start">
          <img src="../assets/images/ethIcon.svg" alt="" class="icon">
          <div class="item-track">General Track</div>
          <div class="item-box flex-start-center">
            <p class="item-title">Making Ethereum Cypherpunk Again</p>
            <p class="item-content flex-center-start">
              <img src="../assets/images/infoIcon.svg" alt="">
              $2,500 for open-source projects on Ethereum (complementary 1 FREE DEVCON ticket)
            </p>
          </div>
        </div>
        <div class="item flex-center-start">
          <img src="../assets/images/ethIcon.svg" alt="" class="icon">
          <div class="item-track">Youth Innovators Track</div>
          <div class="item-box flex-start-center">
            <p class="item-title">Exclusively for young minds ready to push the boundaries of creativity and technology.</p>
            <p class="item-content flex-center-start">
              <img src="../assets/images/infoIcon.svg" alt="">
              $1,500 for the projects built by youth (complementary 1 FREE DEVCON ticket)
            </p>
          </div>
        </div>
        <div class="item flex-center-start">
          <img src="../assets/images/ethIcon.svg" alt="" class="icon">
          <div class="item-track">Security Track</div>
          <div class="item-box flex-start-center">
            <p class="item-title">From smart contract audits to building privacy-preserving tools, this track will challenge you to push the boundaries of Ethereum security. 
            Let’s Make Ethereum Cypherpunk Again by developing robust, trustless systems that defend user sovereignty.</p>
            <p class="item-content flex-center-start">
              <img src="../assets/images/infoIcon.svg" alt="">
              $1,000 for the projects focused on security (complementary 3 50% off DEVCON ticket)
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* Import the Chakra Petch font */
@import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@400;700&display=swap');

.section-content {
  // background-image: url('../assets/images/02.png');
  background-color: #1C1C1C;
  min-height: 100vh;
  color: #fff; /* Ensure text is visible on background */

  .title-text {
    font-family: 'Chakra Petch', sans-serif;
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 40px;
    text-align: left;
    padding-left: 20px;
  }

  .list {
    margin-top: 60px;
    flex-direction: column;
    gap: 40px;

    .item {
      display: flex;
      flex-direction: row;
      align-items: center;

      .icon {
        width: 32px;
        height: 32px;
      }

      .item-track {
        width: 156px;
        font-family: 'Chakra Petch', sans-serif;
        font-size: 24px;
        font-weight: 700;
        line-height: 29px;
        color: #FFFFFF;
        text-align: left;
        padding-left: 10px;
        box-sizing: border-box;
      }

      .item-box {
        width: 600px;
        height: auto;
        flex-direction: column;
        background: rgba(0, 0, 0, 0.5); /* Adjust background for contrast */
        box-sizing: border-box;
        border: 2px solid #525252;
        padding: 20px;
        border-radius: 10px;
        text-align: left;
        gap: 16px;

        .item-title {
          font-family: 'Chakra Petch', sans-serif;
          font-size: 20px;
          font-weight: 700;
          line-height: 28px;
          color: #FFFFFF;
        }

        .item-content {
          display: flex;
          align-items: center;
          font-family: 'Chakra Petch', sans-serif;
          font-size: 18px;
          font-weight: 400;
          line-height: 24px;
          color: #FFFFFF;

          img {
            height: 18px;
            width: auto;
            margin-right: 8px;
          }
        }
      }

      &:nth-child(2n) {
        .item-box {
          background: rgba(0, 0, 0, 0.6); /* Adjust background as needed */
        }
      }
    }
  }
}

/* Responsive Styles */
@media screen and (max-width: 768px) {
  .section-content {
    min-height: 0;
    // background-image: url('../assets/images/m_02.png');
    background-color: #000;

    .title-text {
      font-size: 32px;
      margin-bottom: 30px;
      padding-left: 15px;
    }

    .list {
      margin-top: 40px;
      gap: 32px;
      padding: 0 15px;

      .item {
        flex-direction: column;
        align-items: flex-start;
        flex-wrap: wrap;
        width: 400px;

        .icon {
          width: 28px;
          height: 28px;
        }

        .item-track {
          font-size: 20px;
          line-height: 24px;
          padding-left: 0;
          margin-top: 10px;
        }

        .item-box {
          width: 100%;
          flex: 1;
          min-width: 0;
          padding: 16px;
          gap: 12px;
          border: 1px solid #525252;

          .item-title {
            font-size: 18px;
            line-height: 24px;
            white-space: normal;
          }

          .item-content {
            font-size: 16px;
            line-height: 22px;

            img {
              height: 16px;
            }
          }
        }
      }
    }
  }
}
</style>
