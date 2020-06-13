<template>
  <div class="not-found">
    <router-link to="/">
      <h1 class="not-found-header is-white-text">
        go home
      </h1>
    </router-link>
    <video
      class="not-found-video"
      autoplay muted loop>
      <source src="../../../assets/videos/404.mp4" type="video/mp4">
    </video>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {AnimationService} from '@/shared/services/animation.service';
  export default Vue.extend({
    name: 'NotFound',
    mounted() {
      AnimationService.tweenLite.from('.not-found', {
        opacity: 0
      })
    }
  });
</script>

<style lang="scss" scoped>
  .not-found {
    width: 100%;
    z-index: 4;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: $black;

    &-header {
      padding: $padding;
    }

    &-video {
      max-width: 100% !important;
      object-fit: cover;
      position: absolute;
      top: 0;
      // bottom: 0;
      // width: 100% !important;
      // height: auto !important;
      z-index: -1;
    }
  }
</style>
