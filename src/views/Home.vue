<template>
  <div>
    <div class="home">
      <BigHeading />
    </div>
    <div class="home-content">
      <IntersectionObserver @enter="fadeIn">
        <div class="home-item animate home-one is-red">
          <h1 class="home-number">1{{msg}}</h1>
          <div class="content">
            <h2 class="is-white animate">Hello,</h2>
            <h2 class="is-white animate">My name is</h2>
            <h2 class="is-white animate">Artur Fedorov</h2>
          </div>
        </div>
      </IntersectionObserver>
      <IntersectionObserver @enter="fadeIn">
        <div class="home-item animate home-two">
          <h1 class="home-number">2</h1>
          <div>
            <h2 class="animate">I am</h2>
            <h2 class="animate">
              developer +
              <span class="is-red">
              designer
            </span>
            </h2>
            <h2 class="animate">based in Saint-Petersburg</h2>
          </div>
        </div>
      </IntersectionObserver>
      <IntersectionObserver @enter="fadeIn">
        <div class="home-item animate home-three">
          <h1 class="home-number">3</h1>
          <div>
            <h2 class="animate">I am passionate about</h2>
            <h2 class="animate">web development, design,</h2>
            <h2 class="animate">grids, Swiss typography</h2>
            <h2 class="animate">
              and
              <span class="is-red">
              Bauhaus
            </span>
            </h2>
          </div>
        </div>
      </IntersectionObserver>
      <IntersectionObserver @enter="fadeIn">
        <div class="home-item animate home-four is-black">
          <h1 class="home-number is-white">4</h1>
          <div>
            <h2 class="is-white animate">
              development +
              <span class="is-red">design</span>
            </h2>
            <h2 class="is-white animate">is my vision of</h2>
            <h2 class="is-white animate">Bauhaus principle</h2>
            <h2 class="home-text underlined is-white animate">
              Forms follows Function
            </h2>
          </div>
        </div>
      </IntersectionObserver>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {AnimationService} from '@/shared/services/animation.service';
export default Vue.extend({
  name: 'Home',
  data() {
    return {
      observer: {} as IntersectionObserver,
      msg: ''
    }
  },
  mounted(): void {
    AnimationService.gsap.set('.animate', {
      duration: 1.5,
      opacity: 0,
      y: 30
    });

  },
  methods: {
    fadeIn() {
      // Without any offset
      AnimationService.gsap.to('.animate', {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        ease: AnimationService.easing.power1.easeInOut
      });

    }
  }
});
</script>
<style lang="scss" scoped>
  $min_width: 320px;
  $max_width: 1200px;

  .home {
    padding: 2em;
    border-bottom: $border;
    overflow: hidden;

    /* Header */
    &-header {
      line-height: 100%;
      @include fluid-type($min_width, $max_width, $font-size-h1, $font-size-h0);

      &-h2 {
        margin: 1em 0;
        padding-left: 10px;
        @include fluid-type($min_width, $max_width, $font-size-h3, $font-size-h1);

        @media ($mobile) {
          padding-left: 0;
          margin-bottom: 2em;
        }
      }
    }

    /* Corner date */
    &-date {
      display: flex;
      justify-content: flex-end;
    }

    /* Rectangles wrapper */
    &-content {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);

      @media($tablet) {
        grid-template-columns: repeat(1, 1fr);
      }

      &-one {
      }

      > div {
        padding: 2em;

        @media ($mobile) {
          padding: 1em 2em;
        }
      }
    }

    /* Rectangles with info */
    &-item {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      transform-origin: 0 100%;

      h2 {
        @include fluid-type($min_width, $max_width, $font-size-h3, $font-size-h2);
      }
    }

    &-two {
      border-bottom: $border;
    }

    &-four {
      background: $black bottom url('../assets/images/profile.png') no-repeat;
      background-size: cover;
    }

    &-number {
      opacity: 0.1;
      margin-bottom: 5em;

      @media ($desktop) {
        margin-bottom: 4em;
      }

      @media ($tablet) {
        margin-bottom: 8em;
      }

      @media ($mobile) {
        margin-bottom: 4em;
      }
    }

    &-text {
      &.underlined {
        text-decoration: underline;

        &:after {
          @include fluid-type($min_width, $max_width, $font-size-h2, $font-size-h0);
        }
      }
    }
  }

</style>
