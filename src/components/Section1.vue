<script setup>
import { ref } from 'vue'

const tabs = ref([
  {
    id: 1, title: 'Warm up', list: [{
      time: '13 August',
      title: '<a href="https://lu.ma/42iq2h0p" target="_blank">Get started with developing in Ethereum 101</a>'
    }, {
      time: '24 September',
      title: '<a href="https://lu.ma/ETHsydney" target="_blank">Get started with developing in Ethereum 102</a>'
    }, {
      time: '15 October',
      title: '<a href="https://lu.ma/ETHsydney" target="_blank">Get started with developing in Ethereum 103</a>'
    }]
  },
  {
    id: 2, title: 'Day 1 - 25 October', list: [{
      time: '02:00 PM',
      title: 'Welcome & Registration',
    }, {
      time: '02:30 PM',
      title: 'Speech 1',
    }, {
      time: '03:15 PM',
      title: 'Speech 2',
    }, {
      time: '04:00 PM',
      title: 'Break & Networking',
    }, {
      time: '04:30 PM',
      title: 'Speech 3',
    }, {
      time: '05:15 PM',
      title: 'Team formation & Registration (check in 1)',
    }, {
      time: '06:30 PM',
      title: 'Dinner',
    }, {
      time: '07:00 PM',
      title: 'Hacking',
    }, {
      time: '09:00 PM',
      title: 'Close (TBD)',
    }]
  },
  {
    id: 3, title: 'Day 2 - 26 October', list: [{
      "time": "07:00 AM",
      "title": "Early Registration & Open"
    }, {
      "time": "08:00 AM",
      "title": "Breakfast & Hacking"
    }, {
      "time": "",
      "title": "Workshop Time Slot"
    }, {
      "time": "10:00 AM",
      "title": "Early Submission (Check-in 2)"
    }, {
      "time": "12:30 PM",
      "title": "Lunch"
    }, {
      "time": "",
      "title": "Workshop Time Slot"
    }, {
      "time": "06:30 PM",
      "title": "Dinner"
    }, {
      "time": "09:00 PM",
      "title": "Close (TBD)"
    }]
  },
  {
    id: 4, title: 'Day 3 - 27 October', list: [{
      "time": "07:00 AM",
      "title": "Open"
    }, {
      "time": "11:30 AM",
      "title": "Final Submission (Check-in 3)"
    }, {
      "time": "12:30 PM",
      "title": "Lunch"
    }, {
      "time": "02:00 PM",
      "title": "Demos"
    }, {
      "time": "04:00 PM",
      "title": "Judging"
    }, {
      "time": "04:30 PM",
      "title": "Final Announcement"
    }, {
      "time": "06:00 PM",
      "title": "Close"
    }]
  },
])
const activeTab = ref(1)
</script>

<template>
  <div class="section">
    <div class="section-content">
      <img src="../assets/images/title1.png" alt="schedule" class="title">
      <div class="tabs flex-center-center">
        <div v-for="(tab, index) in tabs" :key="tab.id" class="tab flex-center-center"
          :class="{ active: activeTab == index }" @click="activeTab = index">
          <p>{{ tab.title }}</p>
        </div>
      </div>
      <div class="list flex-center-center">
        <div v-for="item in tabs[activeTab].list" :key="item.time" class="item">
          <p class="time flex-center-start">{{ item.time }}</p>
          <p class="title flex-center-start" v-html="item.title"></p>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.section-content {
  background-image: url('../assets/images/01.png');
  min-height: 100vh;

  .tabs {
    margin-top: 60px;
    gap: 16px;
    box-sizing: border-box;
    padding: 0 20px;

    .tab {
      width: 286px;
      height: 78px;
      box-sizing: border-box;
      border: 2px solid #000000;
      border-radius: 12px;
      cursor: pointer;

      &.active {
        background: linear-gradient(156deg, #ABF8FF -29%, #CF4DFF 147%);
        box-shadow: 5px 5px 0px 0px #2B2B2B;
      }

      p {
        font-family: NotoSans;
        font-size: 24px;
        font-weight: bold;
        line-height: normal;
        text-align: center;
        letter-spacing: 0em;
        color: #000000;
      }
    }
  }

  .list {
    margin-top: 36px;
    flex-direction: column;
    gap: 12px;
    padding: 0 20px;

    .item {
      max-width: 1200px;
      width: 100%;
      height: 86px;
      border-radius: 10px;
      box-sizing: border-box;
      border: 2px solid #525252;
      cursor: pointer;
      display: flex;
      align-items: center;
      padding: 0 40px;
      background: #fff;

      p {
        font-family: NotoSans;
        font-size: 20px;
        font-weight: bold;
        line-height: normal;
        text-align: center;
        letter-spacing: 0em;
        color: #000000;

        &:first-child {
          flex: 0 0 280px;
          width: 280px;
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .section-content {
    min-height: 0;
    background-image: url('../assets/images/m_01.png');

    .tabs {
      flex-wrap: wrap;
      gap: .12rem;
      padding: 0 .56rem;
      margin-top: .48rem;

      .tab {
        width: auto;
        flex: 1;
        min-width: 3rem;
        height: .6rem;
        border-radius: .12rem;
        border: 1px solid #000000;

        &.active {
          box-shadow: 1.95px 1.95px 0px 0px #2B2B2B;
          ;
        }

        p {
          font-size: .19rem;
        }
      }
    }

    .list {
      margin-top: .28rem;
      padding: 0 .56rem;
      gap: .1rem;

      .item {
        height: .68rem;
        border-radius: 4px;
        padding: 0 .24rem;
        border: 1px solid #000000;

        p {
          font-size: .2rem;

          &:first-child {
            flex: 0 0 1.5rem;
            width: 1.32rem;
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