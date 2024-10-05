<script setup>
import NavBar from '../components/NavBar.vue'

</script>

<template>
  <div>
    <!-- <NavBar /> -->
    <div class="text-color-black">
      <p class="text-xs">Hello World</p>
    </div>
  </div>
</template>

<style scoped>
html {
  font-size: 16px; /* Set to a normal size like 16px */
}

.text-color-black {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 110px;
  background: none;
  z-index: 999;
  color: black;
}
</style>