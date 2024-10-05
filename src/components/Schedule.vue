<!-- Schedule.vue -->
<script setup>
import { ref } from 'vue'

const tabs = ref([
  {
    id: 1,
    title: 'Warm up',
    list: [
      {
        time: '13 August',
        title:
          '<a href="https://lu.ma/42iq2h0p" target="_blank">Developing in Ethereum 101</a>',
      },
      {
        time: '24 September',
        title:
          '<a href="https://lu.ma/s45y1inm" target="_blank">Developing in Ethereum 102</a>',
      },
      {
        time: '15 October',
        title:
          '<a href="https://lu.ma/ETHsydney" target="_blank">Developing in Ethereum 103</a>',
      },
    ],
  },
  {
    id: 2,
    title: 'Day 1 - 25 Oct',
    list: [
      {
        time: '05:00 PM',
        title: 'Check-In',
      },
      {
        time: '06:30 PM',
        title: 'Dinner',
      },
      {
        time: '07:30 PM',
        title: 'Opening Talk - TBD',
      },
      {
        time: '08:00 PM',
        title: 'Opening Talk 2',
      },
      {
        time: '08:30 PM',
        title: 'Team Formation',
      },
      {
        time: '09:00 PM',
        title: 'Close',
      },
    ],
  },
  {
    id: 3,
    title: 'Day 2 - 26 Oct',
    list: [
      {
        time: '07:00 AM',
        title: 'Early Registration & Open',
      },
      {
        time: '08:00 AM',
        title: 'Breakfast & Hacking',
      },
      {
        time: '',
        title: 'Workshop Time Slot',
      },
      {
        time: '10:00 AM',
        title: 'Early Submission (Check-in 2)',
      },
      {
        time: '12:30 PM',
        title: 'Lunch',
      },
      {
        time: '',
        title: 'Workshop Time Slot',
      },
      {
        time: '06:30 PM',
        title: 'Dinner',
      },
      {
        time: '09:00 PM',
        title: 'Close',
      },
    ],
  },
  {
    id: 4,
    title: 'Day 3 - 27 Oct',
    list: [
      {
        time: '07:00 AM',
        title: 'Open',
      },
      {
        time: '11:30 AM',
        title: 'Final Submission (Check-in 3)',
      },
      {
        time: '12:30 PM',
        title: 'Lunch',
      },
      {
        time: '02:00 PM',
        title: 'Demos',
      },
      {
        time: '04:00 PM',
        title: 'Judging',
      },
      {
        time: '04:30 PM',
        title: 'Final Announcement',
      },
      {
        time: '07:00 PM',
        title: 'Close',
      },
    ],
  },
])
const activeTab = ref(1)
</script>

<template>
  <div class="section">
    <div class="section-content">
      <!-- Replaced the image with a text heading -->
      <div class="title-text">
        Schedule
      </div>

      <div class="tabs flex-center-center">
        <div
          v-for="(tab, index) in tabs"
          :key="tab.id"
          class="tab flex-center-center"
          :class="{ active: activeTab == index }"
          @click="activeTab = index"
        >
          <p>{{ tab.title }}</p>
        </div>
      </div>

      <div class="list flex-center-center">
        <div
          v-for="item in tabs[activeTab].list"
          :key="item.time + item.title"
          class="item"
        >
          <p class="time flex-center-start">{{ item.time }}</p>
          <p class="title flex-center-start" v-html="item.title"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.section-content {
  background-color: #111;
  min-height: 100vh;
  padding: 80px 20px;
  // text-align: center;
  color: #fff;

  .title-text {
    font-family: 'Chakra Petch', sans-serif;
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 40px;
    padding-left: 20px;
    text-align: center;
    transition: padding-left 0.3s ease;
  }

  .tabs,
  .list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center; // Center the tabs and the schedule items
    padding: 0 20px;
    gap: 16px; // Same gap for consistency
  }

  .tabs {
    margin-top: 20px;

    .tab {
      min-width: 200px;
      height: 60px;
      box-sizing: border-box;
      border: 2px solid #000;
      background-color: #1c1c1c;
      border-radius: 12px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 10px;
      transition: background-color 0.3s ease;

      &.active {
        background: linear-gradient(156deg, #5856d6 -29%, #5856d6 147%);
        box-shadow: 5px 5px 0px 0px rgba(43, 43, 43, 0.5);
      }

      &:hover {
        background-color: #333;
      }

      p {
        font-family: NotoSans;
        font-size: 18px;
        font-weight: bold;
        line-height: normal;
        text-align: center;
        color: #fff;
      }
    }
  }

  .list {
    margin-top: 36px;
    flex-direction: column;

    .item {
      max-width: 1200px;
      width: 100%;
      min-height: 70px;
      border-radius: 10px;
      box-sizing: border-box;
      border: 2px solid #5856d6;
      cursor: pointer;
      display: flex;
      align-items: center;
      padding: 0 20px;
      background: #1c1c1c;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #2a2a2a;
      }

      p {
        font-family: NotoSans;
        font-size: 16px;
        font-weight: bold;
        line-height: normal;
        text-align: left;
        color: #fff;
        margin: 0;

        &.time {
          flex: 0 0 120px;
          width: 120px;
        }

        &.title {
          flex: 1;
        }
      }
    }
  }
}

/* Adjust the title's position as the screen width increases */
@media screen and (min-width: 768px) {
  .title-text {
    padding-left: calc(5% + 20px);
  }
}

@media screen and (min-width: 1024px) {
  .title-text {
    padding-left: calc(10% + 20px);
  }
}

@media screen and (min-width: 1440px) {
  .title-text {
    padding-left: calc(20% + 20px);
  }
}

/* Mobile Responsiveness */
@media screen and (max-width: 768px) {
  .section-content {
    padding: 40px 15px;
    min-height: 0;
    

    .tabs {
      gap: 12px;
      padding: 0 15px;

      .tab {
        min-width: auto;
        flex: 1;
        height: 50px;

        p {
          font-size: 14px; /* Reduced font size for mobile */
          font-weight: 500; /* Reduced font weight for mobile */
        }
      }
    }

    .list {
      margin-top: 28px;
      padding: 0 15px;
      gap: 10px;

      .item {
        min-height: 60px;
        padding: 0 15px;

        p {
          font-size: 14px;

          &.time {
            flex: 0 0 80px;
            width: 80px;
          }
        }
      }
    }
  }
}

</style>

<style lang="scss">
.list {
  a {
    color: #0069c2;
    text-decoration: underline;
    cursor: pointer;
  }
}
</style>
