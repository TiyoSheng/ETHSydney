<!-- Sponsor.vue -->
<script setup>
import { ref } from 'vue'
</script>

<template>
  <div class="section">
    <div class="section-content">
      <!-- Replaced the image header with a text header -->
      <div class="title-text">Community Support</div>
      <div class="list flex-center-center">
        <div class="item flex-center-center">
          <a href="https://ausbuildors.liamz.co/" target="_blank" rel="noopener noreferrer"><img src="../assets/images/community-ausbuildooors.png" alt="aus buildooors"></a>
        </div>
        <div class="item flex-center-center">
          <a href="https://www.ethkl.org/" target="_blank" rel="noopener noreferrer"><img src="../assets/images/community-ethkl.avif" alt="ethkl"></a>
        </div>
        <div class="item flex-center-center">
          <a href="https://ethriyadh.com/" target="_blank" rel="noopener noreferrer"><img src="../assets/images/ETHRiyadh.jpg" alt="ETHRiyadh"></a>
        </div>
        <div class="item flex-center-center">
          <a href="https://ethindia.co/" target="_blank" rel="noopener noreferrer"><img src="../assets/images/ethindia-logo.png" alt="ETHIndia"></a>
        </div>
        <div class="item flex-center-center">
          <a href="https://github.com/bokkypoobah/BokkyPooBahsEthereumWorkshop" target="_blank" rel="noopener noreferrer"><img src="../assets/images/community-Bokky.png" alt="Helix"></a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* Import the Chakra Petch font */
@import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@400;700&display=swap');

.section-content {
  // background-image: url('../assets/images/05.png');
  background-color: #1a1a1a;
  background-size: cover;
  background-position: center;
  padding: 80px 20px;
  text-align: center;
  color: #ffffff;

  .title-text {
    font-family: 'Chakra Petch', sans-serif;
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 40px;
  }

  .list {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
  // margin-bottom: 40px;

  .item {
    width: 300px; /* Fixed width */
    height: 150px; /* Fixed height */
    padding: 20px; /* Padding to create space around the image */
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background: #ffffff;
    box-sizing: border-box;
    border: 2px solid #525252;
    overflow: hidden; /* Truncate content if it exceeds container bounds */

    img {
      width: 100%;
      height: 100%;
      object-fit: cover; /* Cover the entire container, potentially cropping */
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
    margin: 0 auto;
    

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      font-family: 'Chakra Petch', sans-serif;
      font-size: 24px;
      font-weight: 700;
      color: #000000;
      text-decoration: none;
    }
  }
}

/* Responsive Styles */
@media screen and (max-width: 768px) {
  .section-content {
    // background-image: url('../assets/images/m_05.png');
    background-color: #111;
    padding: 60px 15px;

    .title-text {
      font-size: 32px;
      margin-bottom: 30px;
    }

    .list {
      flex-direction: column;
      gap: 20px;
      margin-bottom: 40px;

      .item {
        // width: 100%;
        height: 120px; /* Adjusted height for mobile */
        

        img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }
      }
    }

    button {
      // width: 100%;
      height: 60px;
      border-radius: 10px;
      box-shadow: 4px 4px 0px 0px #2B2B2B;

      a {
        font-size: 20px;
      }
    }
  }
}
</style>
