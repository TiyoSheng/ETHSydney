<script setup>
import { ref } from 'vue'

const list = [
  {
    "ProjectName": "zkSync",
    "Logo": "https://miro.medium.com/v2/resize:fit:971/1*w_5npXegHQq5zql15ol3bQ.png",
    "Link": "https://zksync.io/"
  },
  {
    "ProjectName": "Sigma Prime",
    "Logo": "https://cdn.prod.website-files.com/659ddeb7f63ce6a1f7898526/65baa856cf5e4c8a4f044cba_TmKY71FDEPoQOIMurapzERHPVc.png",
    "Link": "https://sigmaprime.io/"
  },
  {
    "ProjectName": "Argent Wallet",
    "Logo": "https://logowik.com/content/uploads/images/argent-wallet3696.logowik.com.webp",
    "Link": "https://www.argent.xyz/"
  },
  {
    "ProjectName": "Aleph",
    "Logo": "https://cdn.prod.website-files.com/63aac47990b0ca2923e2ca96/6487b03402be7309da9f876c_Aleph.png",
    "Link": "https://aleph.im/"
  },
  {
    "ProjectName": "SubQuery",
    "Logo": "https://blog.subquery.network/content/images/2023/03/logo-1.png",
    "Link": "https://subquery.network/"
  },
  {
    "ProjectName": "Immutable",
    "Logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp2XgV8ViAX-CyiUqKIpyEb-7jDqqQTWIcHA&s",
    "Link": "https://www.immutable.com/"
  },
  {
    "ProjectName": "HaymarketHQ",
    "Logo": "https://cdn.prod.website-files.com/638051c17c0754311a2926d4/6380546f2907b162378e79cf_HHQ%20Logo_Frames_Colour_SMALL.webp",
    "Link": "https://www.haymarkethq.com/"
  },
  {
    "ProjectName": "Google Cloud",
    "Logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8BogQa-bVz7E1pqETsf7eQORJhm9JoOt3Xw&s",
    "Link": "https://cloud.google.com/"
  },
  {
    "ProjectName": "Bitfwd Capital",
    "Logo": "https://pbs.twimg.com/profile_images/1518014599328526336/UELzWy9c_400x400.jpg",
    "Link": "https://www.bitfwd.com/"
  },
  {
    "ProjectName": "Smart Token Labs",
    "Logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNsFBSQX31HdXlCmae223AhqlfsL77LFBQHw&s",
    "Link": "https://smarttokenlabs.com/"
  },
  {
    "ProjectName": "ScalingX",
    "Logo": "https://miro.medium.com/v2/resize:fit:2400/1*pJCuWHVk61GuuUbRiSNkDg.jpeg",
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
    max-width: 800px;
    flex-wrap: wrap;

    .item {
      width: 180px;
      height: 172px;
      border-radius: 10px;
      background: #FFFFFF;
      box-sizing: border-box;
      border: 2px solid #525252;
      margin-bottom: 20px;

      img {
        width: 138px;
        height: auto;
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
        width: 1.36rem;
        height: 1.34rem;
        border: 1px solid #525252;

        img {
          width: 1.08rem;
        }
      }
    }
  }

}
</style>