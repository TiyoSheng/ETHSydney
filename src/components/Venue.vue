<!-- Venue.vue -->
<script setup>
import { ref } from 'vue'

const openMap = () => {
  window.open('https://goo.gl/maps/M4MRRC4HZt7TLst36', '_blank')
}
</script>

<template>
  <div class="section">
    <div class="section-content">
      <!-- Replaced the image header with a text header -->
      <div class="title-text">Venue</div>
      <div class="metaspace" @click="openMap">
        <img src="../assets/images/map.jpg" alt="Map to UNSW Founders">
      </div>
      <div class="placeholder"></div>
      <p class="title-p">UNSW Founders</p>
      <a href="https://goo.gl/maps/M4MRRC4HZt7TLst36" target="_blank">
        <p class="subtitle">
          Michael Crouch Innovation Centre<br />
          UNSW Kensington, Entry via Gate 2 Avenue,<br />
          Kensington, NSW 2033
        </p>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* Import the Chakra Petch font */
@import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@400;700&display=swap');

.section-content {
  // background-image: url('../assets/images/03.png');
  background-color: #111;
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

  .metaspace {
    margin: 0 auto 40px;
    cursor: pointer;
    max-width: 800px;

    img {
      width: 100%;
      height: auto;
      border-radius: 10px;
      border: 2px solid #525252;
    }
  }

  .placeholder {
    width: 22px;
    height: 22px;
    background: #000;
    margin: 0 auto 12px;
  }

  .title-p {
    font-family: 'Chakra Petch', sans-serif;
    font-size: 32px;
    font-weight: 700;
    line-height: 40px;
    margin-bottom: 20px;
  }

  .subtitle {
    font-family: 'Chakra Petch', sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    color: #ffffff;
    margin: 0 auto;
    max-width: 600px;
  }

  .subtitle a {
    color: #ffffff;
    text-decoration: none;
  }
}

/* Responsive Styles */
@media screen and (max-width: 768px) {
  .section-content {
    padding: 60px 15px;
    // background-image: url('../assets/images/m_03.png');
    background-color: #000;

    .title-text {
      font-size: 32px;
      margin-bottom: 30px;
    }

    .metaspace {
      margin-bottom: 30px;
      max-width: 100%;

      img {
        border-radius: 8px;
      }
    }

    .placeholder {
      width: 16px;
      height: 16px;
      margin-bottom: 12px;
    }

    .title-p {
      font-size: 24px;
      line-height: 32px;
      margin-bottom: 16px;
    }

    .subtitle {
      font-size: 16px;
      line-height: 24px;
      max-width: 100%;
    }
  }
}
</style>
