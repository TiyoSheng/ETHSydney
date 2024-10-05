<!-- Navbar.vue -->
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
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('resize', () => {
    isMobile.value = window.innerWidth < 768
  })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="nav" :class="{ 'show-bg': scrollY > 100 }">
    <div class="nav-content flex-center-sb">
      <div class="logo flex-center-start">
        <a href="https://2024.ethsydney.net/"
          ><img src="../assets/images/logo.png" alt="logo"
        /></a>
        <a href="https://2024.ethsydney.net/"><span>ETHSydney</span></a>
      </div>
      <div v-if="isMobile" class="menu-icon" @click="showMenu = !showMenu">
        <img
          v-if="!showMenu"
          src="../assets/images/menu.svg"
          alt="menu"
        />
        <img v-if="showMenu" src="../assets/images/close.svg" alt="menu" />
      </div>
      <div class="nav-list" v-if="isMobile ? showMenu : true">
        <!-- <div class="nav-item">
          <a href="https://lu.ma/q5q134u6" target="_blank">Enrol</a>
        </div> -->
        <div class="nav-item">
          <a href="https://t.me/EthereumSydney" target="_blank">Telegram</a>
        </div>
        <div
          class="nav-item"
          :class="{ active: activeHash === '#schedule' }"
          @click="menuClick('#schedule')"
        >
          <router-link to="#schedule">Schedule</router-link>
        </div>
        <div
          class="nav-item"
          :class="{ active: activeHash === '#tracks' }"
          @click="menuClick('#tracks')"
        >
          <router-link to="#tracks">Tracks</router-link>
        </div>
        <div
          class="nav-item"
          :class="{ active: activeHash === '#venue' }"
          @click="menuClick('#venue')"
        >
          <router-link to="#venue">Venue</router-link>
        </div>
        <div
          class="nav-item"
          :class="{ active: activeHash === '#mentorsjudges' }"
          @click="menuClick('#mentorsjudges')"
        >
          <router-link to="#mentorsjudges">Speakers & Mentors</router-link>
        </div>
        <div
          class="nav-item"
          :class="{ active: activeHash === '#sponsors' }"
          @click="menuClick('#sponsors')"
        >
          <router-link to="#sponsors">Sponsor</router-link>
        </div>
        <div
          class="nav-item"
          :class="{ active: activeHash === '#faq' }"
          @click="menuClick('#faq')"
        >
          <router-link to="#faq">FAQ</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
/* Import the Chakra Petch font */
@import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@400;700&display=swap');

.nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 110px;
  background: none;
  z-index: 999;

  &.show-bg {
    background: linear-gradient(
      329deg,
      rgba(0, 0, 0, 0) -9%,
      rgba(0, 0, 0, 0.8) 87%
    );
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
        font-family: 'Chakra Petch', sans-serif;
        font-size: 24px;
        font-weight: 700;
        line-height: 30px;
        letter-spacing: 0em;
        color: #ffffff;
      }
    }

    .nav-list {
      display: flex;
      gap: 36px;

      .nav-item {
        font-family: 'Chakra Petch', sans-serif;
        font-size: 20px;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 0.025em;
        color: #ffffff;
        cursor: pointer;
        padding: 10px 0;
        box-sizing: border-box;

        &.active {
          background: linear-gradient(
            270deg,
            #abf8ff -18%,
            #cf4dff 118%
          );
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
    height: 70px; // Changed from 0.84rem to a fixed pixel value
    background: linear-gradient(
      329deg,
      rgba(0, 0, 0, 0) -9%,
      rgba(0, 0, 0, 0.8) 87%
    );
    backdrop-filter: blur(5px); // Changed from 0.2rem to 5px

    .nav-content {
      .logo {
        img {
          width: 42px; // Changed from 0.44rem to 36px
          height: auto;
        }

        span {
          font-family: 'Chakra Petch', sans-serif;
          padding-left: 4px;
          font-size: 24px; // Changed from 0.25rem to 20px
          font-weight: 700;
          line-height: 25px; // Changed from 0.31rem to 25px
          margin-left: 12px; // Changed from 0.18rem to 12px
          color: #ffffff;
        }
      }

      .menu-icon {
        img {
          width: 32px; // Changed from 0.48rem to 32px
          height: 32px; // Changed from 0.48rem to 32px
        }
      }

      .nav-list {
        position: absolute;
        top: 70px; // Changed from 0.84rem to match the new nav height
        width: 100%;
        left: 0;
        flex-direction: column;
        background: linear-gradient(
          329deg,
          rgba(0, 0, 0, 0) -80%,
          rgba(0, 0, 0, 0.8) 87%
        );
        gap: 0;
        box-sizing: border-box;
        border: 1px solid; // Changed from 0.5px to 1px for better visibility
        border-image: linear-gradient(
            342deg,
            #ffffff 1%,
            rgba(255, 255, 255, 0) 84%
          )
          1;
        padding: 0 15px; // Changed from 0.36rem to 15px
        backdrop-filter: blur(10px);

        .nav-item {
          height: 60px; // Changed from 1.2rem to 50px
          box-sizing: border-box;
          border-width: 0px 0px 1px 0px; // Changed from 0.78px to 1px
          border-style: solid;
          border-color: rgba(245, 245, 245, 0.2);

          a {
            width: 100%;
            height: 100%;
            padding-left: 10px;
            display: flex;
            align-items: center;
            font-family: 'Chakra Petch', sans-serif;
            font-size: 24px; // Changed from 0.25rem to 16px
            font-weight: 600;
            color: #ffffff;
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
