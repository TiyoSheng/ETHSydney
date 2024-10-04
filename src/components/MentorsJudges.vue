<!-- SpeakersMentorsJudges.vue -->
<script setup>
import { ref } from 'vue'
import GeoffLamperd from '../assets/avatar/GeoffLamperd.jpg'
import bokkypoobah from '../assets/avatar/bokkypoobah.png'
import JasonRudolph from '../assets/avatar/JasonRudolph.jpg'
import danielbar from '../assets/avatar/danielbar.jpg'
import jeevasuresh from '../assets/avatar/jeevasuresh.jpg'
import archiewhitford from '../assets/avatar/archiewhitford.png'
import sam from '../assets/avatar/Sam.png'

const list = [
  { name: 'Geoff Lamperd', avatar: GeoffLamperd, role: 'PSE' },
  { name: 'Bokky Poobah', avatar: bokkypoobah, role: 'Bok' },
  { name: 'Jason Rudolph', avatar: JasonRudolph, role: 'dMPC' },
  { name: 'Daniel Bar', avatar: danielbar, role: 'Bitfwd Capital' },
  { name: 'Jeeva Suresh', avatar: jeevasuresh, role: 'founding partner Helix' },
  { name: 'Archie Whitford', avatar: archiewhitford, role: 'Investment Associate Hansa Network' },
  { name: 'Sam', avatar: sam, role: 'Co-founder Rise Chain' }
]
</script>

<template>
  <div class="section">
    <div class="section-content">
      <!-- Replaced the image header with a text header -->
      <div class="title-text">Speakers, Mentors & Judges</div>
      <div class="list">
        <div v-for="item in list" :key="item.name" class="item">
          <div class="avatar-wrapper">
            <img :src="item.avatar" :alt="item.name" class="avatar" />
          </div>
          <p class="name">{{ item.name }}</p>
          <p class="role">{{ item.role }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* Import the Chakra Petch font */
@import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@400;700&display=swap');

.section-content {
  // background-image: url('../assets/images/04.png');
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
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    gap: 28px;
    justify-content: center;

    .item {
      width: calc(25% - 28px);
      display: flex;
      flex-direction: column;
      align-items: center;

      .avatar-wrapper {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        overflow: hidden;
        border: 2px solid #525252;

        .avatar {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .name {
        margin-top: 16px;
        font-family: 'Chakra Petch', sans-serif;
        font-size: 24px;
        font-weight: 700;
        line-height: 32px;
        color: #ffffff;
      }

      .role {
        font-family: 'Chakra Petch', sans-serif;
        font-size: 20px;
        font-weight: 400;
        line-height: 28px;
        color: #ffffff;
      }
    }
  }
}

/* Responsive Styles */
@media screen and (max-width: 1024px) {
  .list .item {
    width: calc(33.33% - 28px);
  }
}

@media screen and (max-width: 768px) {
  .section-content {
    padding: 60px 15px;

    .title-text {
      font-size: 32px;
      margin-bottom: 30px;
    }

    .list {
      gap: 20px;

      .item {
        width: calc(50% - 20px);

        .avatar-wrapper {
          width: 150px;
          height: 150px;
        }

        .name {
          margin-top: 12px;
          font-size: 20px;
          line-height: 28px;
        }

        .role {
          font-size: 18px;
          line-height: 24px;
        }
      }
    }
  }
}

@media screen and (max-width: 480px) {
  .list .item {
    width: 100%;

    .avatar-wrapper {
      width: 120px;
      height: 120px;
    }

    .name {
      font-size: 18px;
      line-height: 24px;
    }

    .role {
      font-size: 16px;
      line-height: 22px;
    }
  }
}
</style>
