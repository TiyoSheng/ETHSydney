<!-- Themes.vue -->
<script setup>
const list = [
  {
    number: 1,
    title: 'Privacy tooling (ZK, FHE, TEEs)',
  },
  {
    number: 2,
    title: 'Self sovereignty',
  },
  {
    number: 3,
    title: 'P2P payments',
  },
  {
    number: 4,
    title: 'Decentralized socials & communication',
  },
  {
    number: 5,
    title: 'White Hat Hacking',
  },
]
</script>

<template>
  <div class="section">
    <div class="section-content">

      <div class="title-text">
        Hackathon Themes
      </div>

      <div class="list">
        <div v-for="item in list" :key="item.number" class="item">
          <div class="number-label">
            {{ item.number }}
          </div>
          <p class="name">{{ item.title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* Import the Chakra Petch font */
@import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@400;700&display=swap');

.section-content {
  background-color: #1C1C1C;
  padding: 80px 20px;
  color: #FFFFFF;

  .title-text {
    font-family: 'Chakra Petch', sans-serif;
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 40px;
    padding-left: 20px;
    text-align: center;
    transition: padding-left 0.3s ease;
  }

  .list {
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    gap: 28px;
    justify-content: flex-start;
    padding-left: 20px;

    .item {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: calc(20% - 28px);
      box-sizing: border-box;
      padding: 10px;

      .number-label {
        font-family: 'Chakra Petch', sans-serif;
        font-size: 36px;
        font-weight: 700;
        color: #FFFFFF;
        margin-bottom: 8px;
      }

      .name {
        font-family: 'Chakra Petch', sans-serif;
        font-size: 24px;
        font-weight: 400;
        line-height: 32px;
        text-align: left;
        margin-bottom: 8px;
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

/* Adjustments for better mobile responsiveness */
@media screen and (max-width: 1200px) {
  .list .item {
    width: calc(33.33% - 28px); /* Three items per row */
  }
}

@media screen and (max-width: 768px) {
  .section-content {
    padding: 40px 15px;

    .title-text {
      font-size: 40px;
      margin-bottom: 30px;
      padding-left: 15px;
    }

    .list {
      gap: 20px;
      padding-left: 15px;

      .item {
        width: calc(50% - 20px); /* Two items per row */
        padding: 8px;

        .number-label {
          font-size: 32px;
          margin-bottom: 6px;
        }

        .name {
          font-size: 20px;
          line-height: 28px;
        }
      }
    }
  }
}

@media screen and (max-width: 480px) {
  .section-content {
    padding: 30px 10px;

    .title-text {
      font-size: 32px;
      margin-bottom: 20px;
      padding-left: 10px;
    }

    .list {
      gap: 15px;
      padding-left: 10px;

      .item {
        width: 100%; /* One item per row */
        padding: 6px;

        .number-label {
          font-size: 28px;
          margin-bottom: 4px;
        }

        .name {
          font-size: 18px;
          line-height: 24px;
        }
      }
    }
  }
}
</style>
