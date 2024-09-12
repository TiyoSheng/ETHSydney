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
        <div v-for="item in list" class="item">
          <img :src="item.avatar" alt="" class="avatar">
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
  // min-height: 100vh;

  .list {
    max-width: 1100px;
    margin: auto;
    margin-top: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 28px;
    .item {
      display: flex;
      flex-direction: column;
      align-items: center;

      .avatar {
        width: 233px;
        height: 233px;
        border-radius: 50%;
      }

      .name {
        font-family: NotoSans;
        font-size: 18px;
        line-height: 28px;
        letter-spacing: 0em;
        text-align: center;
        color: #000000;
        margin-top: -20px;
      }

      .role {
        font-family: Inter;
        font-size: 15px;
        font-weight: normal;
        line-height: 24px;
        letter-spacing: 0em;
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
      gap: .56rem;
      margin-top: .64rem;
      padding: 0 .6rem;
      box-sizing: border-box;
      .item {
        margin-bottom: -.2rem;
        .avatar {
          width: 1.72rem;
          height: auto;
        }
        .name {
          font-size: .14rem;
          line-height: .22rem;
          margin-top: -.14rem;
        }
        .role {
          font-size: .13rem;
          line-height: .19rem;
        }
      }
    }
  }
  
}
</style>