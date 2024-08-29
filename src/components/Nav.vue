<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isMobile = ref(window.innerWidth < 768)
const activeHash = ref(window.location.hash)
const scrollY = ref(0)
const showMenu = ref(false)

const menuClick = (hash) => {
  activeHash.value = hash
  showMenu.value = false
}

const handleScroll = () => {
  scrollY.value = window.scrollY
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', () => {
    isMobile.value = window.innerWidth < 768
  })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
})
</script>

<template>
  <div class="nav" :class="{ 'show-bg': scrollY > 100 }">
    <div class="nav-content flex-center-sb">
      <div class="logo flex-center-start">
        <img src="../assets/images/logo.png" alt="logo">
        <span>ETHSydney</span>
      </div>
      <div v-if="isMobile" class="menu-icon" @click="showMenu = !showMenu">
        <img v-if="!showMenu" src="../assets/images/menu.svg" alt="menu">
        <img v-if="showMenu" src="../assets/images/close.svg" alt="menu">
      </div>
      <div class="nav-list" v-if="isMobile ? showMenu : true">
        <div class="nav-item"><a href="https://lu.ma/ETHsydney" target="_blank">Enrol</a></div>
        <div class="nav-item"><a href="https://t.me/EthereumSydney" target="_blank">Telegram</a></div>
        <div class="nav-item" :class="{ active: activeHash === '#section1' }" @click="menuClick('#section1')">
          <router-link to="#section1">Schedule</router-link>
        </div>
        <div class="nav-item" :class="{ active: activeHash === '#section3' }" @click="menuClick('#section3')">
          <router-link to="#section3">Venue</router-link>
        </div>
        <div class="nav-item" :class="{ active: activeHash === '#section2' }" @click="menuClick('#section2')">
          <router-link to="#section2">Track</router-link>
        </div>
        <div class="nav-item">
          <a href="https://ethglobal.com/events/singapore2024#speakers" target="_blank">Mentor & Judge</a>
        </div>
        <div class="nav-item" :class="{ active: activeHash === '#section5' }" @click="menuClick('#section5')">
          <router-link to="#section5">Sponsor</router-link>
        </div>
        <div class="nav-item" :class="{ active: activeHash === '#section6' }" @click="menuClick('#section6')">
          <router-link to="#section6">FAQ</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 110px;
  background: none;
  z-index: 999;

  &.show-bg {
    background: linear-gradient(329deg, rgba(0, 0, 0, 0) -9%, rgba(0, 0, 0, 0.8) 87%);
    backdrop-filter: blur(10px);
  }

  .nav-content {
    max-width: 1440px;
    padding: 0 20px;
    box-sizing: border-box;
    margin: auto;
    height: 100%;

    .logo {
      img {
        width: 42px;
        height: auto;
      }

      span {
        margin-left: 18px;
        font-family: NotoSans;
        font-size: 24px;
        font-weight: bold;
        line-height: 30px;
        letter-spacing: 0em;
        color: #FFFFFF;
      }
    }

    .nav-list {
      display: flex;
      gap: 36px;

      .nav-item {
        font-family: PasseroOne;
        font-size: 20px;
        font-weight: normal;
        line-height: normal;
        letter-spacing: 0.025em;
        color: #FFFFFF;
        cursor: pointer;
        padding: 10px 0;
        box-sizing: border-box;

        &.active {
          background: linear-gradient(270deg, #ABF8FF -18%, #CF4DFF 118%);
          color: #000000;
          padding: 10px 30px;
          border-radius: 100px;
        }
      }
    }
  }
}

@media screen and (max-width: 1200px) {
  .nav {
    .nav-list {
      gap: 24px;
    }
  }
}

@media screen and (max-width: 768px) {
  .nav {
    height: .84rem;
    background: linear-gradient(329deg, rgba(0, 0, 0, 0) -9%, rgba(0, 0, 0, 0.8) 87%);
    backdrop-filter: blur(.2rem);

    .nav-content {
      .logo {
        img {
          width: .44rem;
          height: auto;
        }

        span {
          font-size: .25rem;
          font-weight: bold;
          line-height: .31rem;
          margin-left: .18rem;
        }
      }

      .menu-icon {
        img {
          width: .48rem;
          height: .48rem;
        }
      }

      .nav-list {
        position: absolute;
        top: .84rem;
        width: 100%;
        left: 0;
        flex-direction: column;
        background: linear-gradient(329deg, rgba(0, 0, 0, 0) -9%, rgba(0, 0, 0, 0.8) 87%);
        gap: 0;
        box-sizing: border-box;
        border: 0.5px solid;
        border-image: linear-gradient(342deg, #FFFFFF 1%, rgba(255, 255, 255, 0) 84%) 0.5;
        padding: 0 .36rem;
        backdrop-filter: blur(10px);

        .nav-item {
          height: 1.2rem;
          box-sizing: border-box;
          border-width: 0px 0px 0.78px 0px;
          border-style: solid;
          border-color: rgba(245, 245, 245, 0.2);
          a {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;

          }
          &.active {
            background: none;
            color: #fff;
            padding: 0;
            border-radius: 0;
          }
        }
      }
    }
  }

}
</style>
