<template>
  <div class="home">
    <h1 class="h0">Artur Fedorov</h1>
    <h1 class="h1-italic">Designer | Developer</h1>
<!--    <img src="../assets/images/pink-rect.png" alt="">-->
    <div class="distortion"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import hoverEffect from 'hover-effect';
export default Vue.extend({
  name: 'Home',
  mounted(): void {
    new hoverEffect({
      parent: document.querySelector('.distortion'),
      intensity: 0.2,
      image1: require('../assets/images/pink-rect.png'),
      image2: require('../assets/images/blue-rect.png'),
      displacementImage: require('../assets/images/heightMap.png')
    });
  }
});
</script>
<style lang="scss" scoped>
  .home {
    height: 100%;
  }

  .distortion {
    width: 400px;
    height: 563px;
  }
</style>
