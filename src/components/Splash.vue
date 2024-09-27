<!-- Banner.vue -->
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
    <div class="banner-content">
      <div class="column column-text">
        <h1>Make <span>Ethereum</span> Cypherpunk Again</h1>
        <p>Date: 25-27 Oct 2024 ｜ Venue: UNSW Founders</p>
        <!-- Register Button -->
        <a href="https://lu.ma/kqbga4fl" target="_blank" class="register-button">Register Now</a>
      </div>
      <div class="column column-image">
        <img src="../assets/images/mask.jpg" alt="Mask Image representing Ethereum Cypherpunk" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  background-color: #0a0a0a; /* Black background */
  padding: 120px 20px;
  color: #fff;
}

.banner-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}

.column {
  flex: 1;
}

.column-text {
  max-width: 650px; /* Increased max-width to give more space */
  padding-right: 20px;
}

.column-text h1 {
  font-family: 'Chakra Petch', sans-serif;
  font-size: 72px;
  font-weight: 700; /* Use 700 for Bold */
  line-height: 1.2;
  color: #FFFFFF;
  margin-bottom: 40px;
  text-align: left;
}

.column-text h1 span {
  background: linear-gradient(180deg, #ABF8FF 0%, #CF4DFF 137%);
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
}

.column-text p {
  font-family: 'Chakra Petch', sans-serif;
  font-size: 24px; /* Reduced font size */
  line-height: 1.4;
  color: #FFFFFF;
  text-align: left;
  margin-bottom: 20px;
  white-space: nowrap; /* Prevent text wrapping */
}

.register-button {
  display: inline-block;
  margin-top: 30px;
  padding: 15px 30px;
  font-family: 'Chakra Petch', sans-serif;
  font-size: 20px;
  color: #FFFFFF;
  background-color: #5856D6;
  border-radius: 8px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.register-button:hover {
  background-color: #4745b7;
}

.column-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.column-image img {
  max-width: 100%;
  height: auto;
  max-height: 450px;
}

@media screen and (min-width: 1400px) {
  .banner-content {
    padding-left: 10%;
  }
}

@media screen and (max-width: 1200px) {
  .banner-content {
    padding-left: 0;
  }
  .column-text {
    max-width: 100%; /* Allow full width on smaller screens */
  }
  .column-text h1 {
    font-size: 64px;
    margin-bottom: 30px;
  }
  .column-text p {
    font-size: 22px; /* Adjust font size for smaller screens */
  }
  .column-image img {
    max-height: 400px;
  }
}

@media screen and (max-width: 992px) {
  .column-text h1 {
    font-size: 56px;
    margin-bottom: 25px;
  }
  .column-text p {
    font-size: 20px; /* Further reduce font size */
  }
  .column-image img {
    max-height: 350px;
  }
}

@media screen and (max-width: 768px) {
  .banner {
    padding: 80px 15px;
  }
  .banner-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .column {
    width: 100%;
    padding: 0;
  }
  .column-text {
    max-width: 100%;
    padding-right: 0;
  }
  .column-text h1 {
    font-size: 48px;
    margin-bottom: 20px;
    text-align: center;
  }
  .column-text p {
    font-size: 18px; /* Adjust font size for mobile */
    text-align: center;
    white-space: normal; /* Allow wrapping on mobile */
  }
  .register-button {
    margin-top: 20px;
  }
  .column-image {
    margin-top: 30px;
  }
  .column-image img {
    max-height: 300px;
  }
}
</style>
