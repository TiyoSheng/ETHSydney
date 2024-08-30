<script setup>
import { ref } from 'vue'
import Border from '../assets/images/Border.png'
import Border2 from '../assets/images/Border-2.png'
import Border3 from '../assets/images/Border-3.png'
import Border4 from '../assets/images/Border-4.png'
import Border5 from '../assets/images/Border-5.png'
import Border6 from '../assets/images/Border-6.png'
import Border7 from '../assets/images/Border-7.png'
import Border8 from '../assets/images/Border-8.png'
import Border9 from '../assets/images/Border-9.png'
import Border10 from '../assets/images/Border-10.png'
import Border11 from '../assets/images/Border-11.png'

const list = [
  {
    "ProjectName": "zkSync",
    "Logo": Border,
    "Link": "https://zksync.io/"
  },
  {
    "ProjectName": "Sigma Prime",
    "Logo": Border2,
    "Link": "https://sigmaprime.io/"
  },
  {
    "ProjectName": "Argent Wallet",
    "Logo": Border3,
    "Link": "https://www.argent.xyz/"
  },
  {
    "ProjectName": "Aleph",
    "Logo": Border4,
    "Link": "https://aleph.im/"
  },
  {
    "ProjectName": "SubQuery",
    "Logo": Border5,
    "Link": "https://subquery.network/"
  },
  {
    "ProjectName": "Immutable",
    "Logo": Border6,
    "Link": "https://www.immutable.com/"
  },
  {
    "ProjectName": "HaymarketHQ",
    "Logo": Border7,
    "Link": "https://www.haymarkethq.com/"
  },
  {
    "ProjectName": "Google Cloud",
    "Logo": Border8,
    "Link": "https://cloud.google.com/"
  },
  {
    "ProjectName": "Bitfwd Capital",
    "Logo": Border9,
    "Link": "https://www.bitfwd.com/"
  },
  {
    "ProjectName": "Smart Token Labs",
    "Logo": Border10,
    "Link": "https://smarttokenlabs.com/"
  },
  {
    "ProjectName": "ScalingX",
    "Logo": Border11,
    "Link": "https://www.scalingx.xyz/"
  }
]

const open = (link) => {
  window.open(link)
}

</script>

<template>
  <div class="section">
    <div class="section-content">
      <img src="../assets/images/title7.png" alt="venue" class="title">
      <div class="list flex-center-center">
        <div v-for="item in list" :key="item.ProjectName" class="item flex-center-center" @click="open(item.Link)">
          <img :src="item.Logo" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.section-content {
  background-image: url('../assets/images/07.png');

  .list {
    gap: 20px;
    margin: auto;
    padding-bottom: 44px;
    margin-top: 80px;
    max-width: 880px;
    flex-wrap: wrap;

    .item {
      background: #FFFFFF;
      box-sizing: border-box;
      border: 2px solid #525252;
      margin-bottom: 20px;

      img {
        width: auto;
        height: 80px;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .section-content {
    background-image: url('../assets/images/m_07.png');

    .list {
      margin-top: .64rem;
      padding-bottom: 0;
      padding: 0 .56rem;
      box-sizing: border-box;

      .item {
        // width: 1.36rem;
        // height: 1.34rem;
        border: 1px solid #525252;
        margin-bottom: 0;

        img {
          width: auto;
          height: .7rem;
        }
      }
    }
  }

}
</style>