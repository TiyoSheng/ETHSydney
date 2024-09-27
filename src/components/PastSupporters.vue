<!-- Past supporters -->
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
      <div class="title-text">Past Supporters</div>
      <div class="list flex-center-center">
        <div v-for="item in list" :key="item.ProjectName" class="item flex-center-center" @click="open(item.Link)">
          <img :src="item.Logo" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.section {
  background-color: #111111;
  padding: 40px 20px;
  text-align: center;

  .section-title {
    font-size: 2rem;
    font-weight: 700;
    color: #fff;
    margin-bottom: 40px;
  }

  .section-content {
    background-color: #111111;
    padding: 40px;
    border-radius: 10px;
    color: #ffffff;

    .title-text {
      font-family: 'Chakra Petch', sans-serif;

      font-size: 48px;
      font-weight: 700;
      margin-bottom: 40px;
    }

    .list {
      gap: 20px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      .item {
        background: #1C1C1C;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        cursor: pointer;
        transition: transform 0.3s ease, box-shadow 0.3s ease;

        &:hover {
          transform: translateY(-10px);
          box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
        }

        &:focus {
          outline: none;
          box-shadow: 0 0 0 4px rgba(82, 82, 82, 0.5);
        }

        img {
          width: auto;
          height: 80px;
          padding: 10px;
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .section {
    padding: 20px 10px;

    .section-content {
      padding: 20px;

      .title-text {
        font-size: 32px;
        margin-bottom: 30px;
      }
      
      .list {
        .item {
          img {
            height: 60px;
          }
        }
      }
    }
  }
}
</style>
