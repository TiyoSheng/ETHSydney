<!-- JoinUs.vue -->
<script setup>
import { ref } from 'vue'

import event1 from '../assets/images/event1.webp';
import event2 from '../assets/images/event2.webp';
import event3 from '../assets/images/event3.webp';
import event4 from '../assets/images/event4.webp';

const images = [
  event1,
  event2,
  event3,
  event4
]

import { computed } from 'vue'


const register = () => {
  window.open('https://your-registration-link.com', '_blank')
}

// Compute the number of images based on screen size
const isMobile = window.innerWidth <= 768
const visibleImages = computed(() => {
  return isMobile ? images.slice(0, 2) : images
})
</script>

<template>
  <div class="section">
    <div class="section-content">
      <div class="title-text">Join Us</div>

      <!-- Image Gallery -->
      <div class="image-gallery">
        <div v-for="(image, index) in visibleImages" :key="index" class="image-item">
          <img :src="image" alt="Event Image" />
        </div>
      </div>

      <!-- Call to Action Button -->
      <button class="w-[286px] h-[78px] border-2 border-black rounded-lg cursor-pointer bg-gradient-to-br from-[#ABF8FF] to-[#CF4DFF] shadow-[5px_5px_0_0_#2B2B2B] mx-auto">
        <a href="https://lu.ma/q5q134u6" class="flex items-center justify-center w-full h-full font-chakra text-2xl font-bold text-black no-underline">
          Register Now
        </a>
      </button>

    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@400;700&display=swap');

.section-content {
  background-color: #111;
  padding: 80px 20px;
  text-align: center;
  color: #ffffff;

  .title-text {
    font-family: 'Chakra Petch', sans-serif;
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 40px;
  }

  .image-gallery {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-bottom: 40px;

    .image-item {
      flex: 1;
      overflow: hidden;
      border-radius: 10px;
      border: 2px solid #525252;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        max-height: 250px; /* Prevents images from being too tall */
      }
    }
  }

  .placeholder {
    width: 22px;
    height: 22px;
    background: #000;
    margin: 0 auto 12px;
  }

  .register-btn {
    font-family: 'Chakra Petch', sans-serif;
    font-size: 20px;
    font-weight: 700;
    color: #ffffff;
    background-color: #007bff;
    padding: 12px 24px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }
  }
}

/* Responsive Styles */
@media screen and (max-width: 768px) {
  .section-content {
    padding: 60px 15px;

    .title-text {
      font-size: 32px;
      margin-bottom: 30px;
    }

    .image-gallery {
      flex-wrap: wrap;

      .image-item {
        flex: 0 0 48%; /* Two images per row on mobile */
        img {
          max-height: 200px;
        }
      }
    }

    .register-btn {
      font-size: 18px;
      padding: 10px 20px;
    }
  }
}
</style>
