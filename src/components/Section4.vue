<!-- Speakers Mentors Judges -->
<script setup>
import { ref } from 'vue'
import GeoffLamperd from '../assets/avatar/GeoffLamperd.jpg'
import bokkypoobah from '../assets/avatar/bokkypoobah.png'
import JasonRudolph from '../assets/avatar/JasonRudolph.jpg'
import danielbar from '../assets/avatar/danielbar.jpg'

const list = [
  { name: 'Geoff Lamperd', avatar: GeoffLamperd, role: 'PSE' },
  { name: 'Bokky Poobah', avatar: bokkypoobah, role: 'Bok' },
  { name: 'Jason Rudolph', avatar: JasonRudolph, role: 'dMPC' },
  { name: 'Daniel Bar', avatar: danielbar, role: 'Bitfwd Capital' }
]
</script>

<template>
  <div class="section">
    <div class="section-content">
      <img src="../assets/images/title4.png" alt="venue" class="title">
      <div class="list">
        <div v-for="item in list" :key="item.name" class="item">
          <div class="avatar-wrapper">
            <img :src="item.avatar" alt="" class="avatar">
          </div>
          <p class="name">{{ item.name }}</p>
          <p class="role">{{ item.role }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.section-content {
  background-image: url('../assets/images/04.png');
  background-size: cover;
  background-position: center;
  padding: 80px 20px; /* Added padding for better spacing on mobile */

  .title {
    display: block;
    margin: 0 auto;
    max-width: 100%;
    height: auto;
  }

  .list {
    max-width: 1100px;
    margin: 40px auto 0;
    display: flex;
    flex-wrap: wrap;
    gap: 28px;
    justify-content: center;

    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: calc(25% - 28px); /* Adjusted to allow four items per row on larger screens */

      .avatar-wrapper {
        width: 100%;
        padding-top: 100%; /* Maintains aspect ratio */
        position: relative;
        border-radius: 50%;
        overflow: hidden;

        .avatar {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .name {
        margin-top: 16px;
        font-family: NotoSans, sans-serif;
        font-size: 18px;
        line-height: 28px;
        text-align: center;
        color: #000000;
      }

      .role {
        font-family: Inter, sans-serif;
        font-size: 15px;
        line-height: 24px;
        text-align: center;
        color: #000000;
      }
    }
  }
}

@media screen and (max-width: 1024px) {
  .list .item {
    width: calc(33.33% - 28px); /* Three items per row */
  }
}

@media screen and (max-width: 768px) {
  .section-content {
    background-image: url('../assets/images/m_04.png');
    padding: 40px 16px;

    .list {
      margin-top: 16px;
      gap: 16px;

      .item {
        width: calc(50% - 16px); /* Two items per row */

        .name {
          margin-top: 12px;
          font-size: 16px;
          line-height: 24px;
        }

        .role {
          font-size: 14px;
          line-height: 20px;
        }
      }
    }
  }
}

@media screen and (max-width: 480px) {
  .list .item {
    width: 100%; /* One item per row */
    margin-bottom: 20px;

    .name {
      font-size: 14px;
      line-height: 22px;
    }

    .role {
      font-size: 13px;
      line-height: 19px;
    }
  }
}
</style>
