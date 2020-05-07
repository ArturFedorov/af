<template>
  <div class="about grid">
    <div class="about-content">
      <h3 class="caption-text is-white about-animate">
        Biggest value I bring is
      </h3>
      <h3 class="caption-text about-animate">
        shape and visualize ideas
      </h3>
      <h3 class="caption-text is-white about-animate">
        gather people around it
      </h3>
      <h3 class="caption-text about-animate">
        and make it go live.
      </h3>
    </div>
    <div class="about-text">
      <p class="p about-animate">
        I am passionate about web development, design, grids, Swiss typography,  type design, and Bauhaus.
      </p>
      <p class="p about-animate">
        I’ve been working in IT since 2013.
      </p>
      <p class="p about-animate">
        I like to learn and take new challenges.
      </p>
    </div>
    <div class="about-caption">
      <h3 class="caption-text is-white about-animate">
        I also like when huge type
      </h3>
      <h3 class="caption-text about-animate">
        moves in space for no reason
      </h3>
    </div>

    <ImageCover
      class="about-image is-left"
      :imagesRatio="1.3"
      :image1="require('../assets/images/letters-white.png')"
      :image2="require('../assets/images/letters-black.png')"/>
    <ImageCover
      class="about-image is-right"
      :imagesRatio="1.3"
      :image1="require('../assets/images/letters-black.png')"
      :image2="require('../assets/images/letters-white.png')"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {AnimationService} from '@/shared/services/animation.service';
export default Vue.extend({
  name: 'About',
  mounted(): void {
    AnimationService.gsap.timeline({duration: 1})
      .from('.text', {
        x: -25,
        opacity: 0,
        stagger: 0.2
      }).from('.about-animate', {
        delay: -0.5,
        opacity: 0,
        stagger: 0.2,
        y: 20
      }).from('.about-image', {
        duration: 1.5,
        y: 10,
        opacity: 0,
        stagger: 0.2,
        ease: AnimationService.easing.power1.easeInOut
      })
  }
});
</script>

<style lang="scss" scoped>
  .about {
    height: 100vh;
    width: 100%;
    max-height: 100vh;

    &-content {
      grid-area: 1 / 1 / 2 / 3;
      white-space: nowrap;
      position: relative;
      z-index: 1;
    }

    &-caption {
      grid-area: 6 / 1 / 7 / 3;
      white-space: nowrap;

      @media ($tablet) {
        grid-area: 7 / 1 / 8 / 3;
        position: relative;
        z-index: 1;
      }

      @media ($mobile) {
        grid-area: 6 / 1 / 7 / 3;
      }
    }

    &-text {
      grid-area: 3 / 1 / 4 / 3;

      @media ($mobile) {
        grid-area: 7 / 1 / 8 / 3;
        padding-top: 1em;
        padding-bottom: $header-height;
      }
    }

    &-image {
      transform-style: preserve-3d;

      &.is-left {
        grid-area: 2 / 4 / 6 / 5;

        @media ($desktop) {
          grid-area: 1 / 3 / 6 / 5;
        }

        @media ($tablet) {
          grid-area: 4 / 1 / 8 / 2;
        }

        @media ($mobile) {
          display: none;
        }
      }

      &.is-right {
        grid-area: 3 / 5 / 7 / 6;

        @media ($desktop) {
          grid-area: 2 / 4 / 8 / 6;
        }

        @media ($tablet) {
          grid-area: 4 / 2 / 8 / 3;
        }

        @media ($mobile) {
          padding-top: 0.3em;
          grid-area: 2 / 1 / 7 / 3;
        }
      }
    }
  }

  .caption-text {
    &:after {
      @media ($desktop) {
        width: 100%;
      }
    }
  }
</style>
