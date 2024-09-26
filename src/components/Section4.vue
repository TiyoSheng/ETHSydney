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

  .list {
    max-width: 1100px;
    margin: 80px auto 0;
    display: flex;
    flex-wrap: wrap;
    gap: 28px;
    justify-content: center;

    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 233px;

      .avatar-wrapper {
        width: 233px;
        height: 233px;
        border-radius: 50%;
        overflow: hidden; /* Ensures the image is clipped to the container's bounds */
      }

      .avatar {
        width: 100%;
        height: 100%;
        object-fit: cover; /* Scales the image to cover the container */
      }

      .name {
        margin-top: 16px;
        font-family: NotoSans;
        font-size: 18px;
        line-height: 28px;
        text-align: center;
        color: #000000;
      }

      .role {
        font-family: Inter;
        font-size: 15px;
        line-height: 24px;
        text-align: center;
        color: #000000;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .section-content {
    background-image: url('../assets/images/m_04.png');

    .list {
      margin-top: 16px;
      padding: 0 16px;
      gap: 16px;

      .item {
        width: 100%;
        margin-bottom: 20px;

        .avatar-wrapper {
          width: 100%;
          height: auto;
          aspect-ratio: 1 / 1; /* Maintains a square aspect ratio */
          border-radius: 50%;
          overflow: hidden;
        }

        .avatar {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .name {
          margin-top: 14px;
          font-size: 14px;
          line-height: 22px;
        }

        .role {
          font-size: 13px;
          line-height: 19px;
        }
      }
    }
  }
}
</style>
