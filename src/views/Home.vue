<template>
  <div class="home grid">
    <div class="home-heading">
      <h1 class="h0 home-header">Artur Fedorov</h1>
      <h1 class="h1-italic home-subheader">Designer | Developer</h1>
    </div>
    <ImageCover class="distortion home-content" />
    <div class="home-caption">
      <h3 class="home-caption-text is-white">Hello I am Artur Fedorov</h3>
      <h3 class="home-caption-text">developer/designer</h3>
      <h3 class="home-caption-text is-white">from Saint-Petersburg.</h3>
      <h3 class="home-caption-text">Seeking for new challenges.</h3>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Home'
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
        grid-area: 2 / 1 / 4 / 2;
      }

      @media ($mobile) {
        grid-area: 1 / 1 / 3 / 4;
      }
    }

    &-content {
      grid-area: 1 / 3 / 7 / 5;

      @media ($tablet) {
        grid-area: 1 / 2 / 7 / 5;
      }

      @media ($mobile) {
        grid-area: 3 / 1 / 8 / 4;
      }
    }

    &-caption {
      grid-area: 6 / 4 / 8 / 6;
      z-index: 1;

      @media ($tablet) {
        grid-area: 6 / 2 / 10 / 5;
      }

      @media ($mobile) {
        grid-area: 7 / 1 / 8 / 2;
      }

      &-text {
        color: $white;
        position: relative;
        margin-bottom: 5px;

        &:after {
          z-index: -1;
          position: absolute;
          height: 100%;
          width: 80%;
          left: -10px;
          content: '';
          padding: 3px 10px;
          background-color: $black;

          @media ($mobile) {
            width: 100%;
          }
        }

        &.is-white {
          color: $black;
          margin-left: 50px;

          &:after {
            background-color: $white;
            opacity: 0.7;
          }
        }
      }
    }
  }

  .distortion {

  }
</style>
