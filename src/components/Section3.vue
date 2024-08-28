
<script setup>
import { ref } from 'vue'
</script>

<template>
  <div class="section">
    <div class="section-content" >
      <img src="../assets/images/title3.png" alt="venue" class="title">
      <div class="metaspace">
        <img src="../assets/images/metaspace.png" alt="metaspace">
      </div>
      <p class="title-p">META SPACE (751 Branch)</p>
      <p class="subtitle">L Building, 751D Park, 798 District, Chaoyang District, Beijing.</p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.section-content {
  background-image: url('../assets/images/03.png');
  .metaspace {
    margin-top: 60px;
    img {
      width: 400px;
      height: 400px;
    }
  }
  .title-p {
    font-family: NotoSans;
    font-size: 28px;
    font-weight: bold;
    line-height: 40px;
    letter-spacing: 0em;
    color: #000000;
    margin-top: 98px;
  }
  .subtitle {
    margin-top: 16px;
    font-family: NotoSans;
    font-size: 16px;
    font-weight: normal;
    line-height: 28.8px;
    letter-spacing: 0em;
    color: #000000;
  }
}
@media screen and (max-width: 768px) {
  .section-content {
    background-image: url('../assets/images/m_03.png');
    .metaspace {
      margin-top: 24px;
      img {
        width: 156px;
        height: 156px;
      }
    }
    .title-p {
      font-size: 10.94px;
      line-height: 15.63px;
      margin-top: 38.28px;
    }
    .subtitle {
      font-size: 6.25px;
      line-height: 11.25px;
      margin-top: 6.5px;
    }
  }
  
}
</style>