<template>
  <div class="home grid">
    <div class="home-heading">
      <h1 class="h0 home-header">Artur Fedorov</h1>
      <h1 class="h1-italic home-subheader">Designer | Developer</h1>
    </div>
    <div class="distortion home-content is-center"></div>
    <div class="home-text">
      <h3><span class="is-white-text">Hello</span>, I am Artur Fedorov</h3>
      <h3 class="is-reversed">developer/designer from</h3>
      <h3>Saint-Petersburg. Seeking</h3>
      <h3 class="is-reversed">for new challenges.</h3>
    </div>
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
      displacementImage: require('../assets/images/heightMap.png'),
      imagesRatio: 1.1
    });
  }
});
</script>
<style lang="scss" scoped>
  .home {
    height: 100%;
    position: relative;

    &-heading {
      grid-area: 2 / 1 / 3 / 3;
      z-index: 1;
      white-space: nowrap;
      width: 100%;
      @media ($tablet) {
        grid-area: 3 / 1 / 5 / 2;
      }

      @media ($mobile) {
        grid-area: 1 / 1 / 3 / 4;
      }
    }

    &-content {
      grid-area: 2 / 3 / 9 / 5;

      @media ($tablet) {
        grid-area: 2 / 2 / 8 / 5;
      }

      @media ($mobile) {
        grid-area: 3 / 1 / 8 / 4;
      }
    }

    &-text {
      grid-area: 8 / 4 / 10 / 6;
      z-index: 1;

      @media ($tablet) {
        grid-area: 7 / 2 / 10 / 5;
      }

      @media ($mobile) {
        grid-area: 7 / 1 / 10 / 4;
      }

      .is-reversed {
        color: $white;
        position: relative;

        &:after {
          z-index: -1;
          position: absolute;
          height: 100%;
          width: 70%;
          left: -10px;
          content: '';
          padding: 3px 10px;
          background-color: $black;
        }
      }
    }
  }

  .distortion {

  }
</style>
