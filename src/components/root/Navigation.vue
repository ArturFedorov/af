<template>
  <div class="navigation cover with-margin grid">
    <div class="navigation-item is-reversed is-one">
      <p class="p-italic navigation-item-caption is-white-text">01</p>
      <router-link
        to="/"
        class="h2 navigation-item-text is-white-text">
        Home
      </router-link>
    </div>

    <div class="navigation-item is-three">
      <div class="navigation-item-content">
        <p class="p-italic navigation-item-caption is-white-text">03</p>
        <router-link
          to="/about"
          class="h2 navigation-item-text is-white-text">About Me</router-link>
      </div>
      <div class="navigation-item-secondary">
        <p class="p-italic is-white-text">Short about me</p>
      </div>
    </div>

    <div class="navigation-item is-two">
      <div class="navigation-item-content">
        <p class="p-italic navigation-item-caption is-white-text">02</p>
        <router-link
          to="/projects"
          class="h2 navigation-item-text is-white-text">Projects</router-link>
      </div>
      <div class="navigation-item-secondary">
        <p class="p-italic is-white-text">Development experience</p>
        <p class="p-italic is-white-text">Design portfolio</p>
      </div>
    </div>

    <div class="navigation-item is-four">
      <div class="navigation-item-content">
        <p class="p-italic navigation-item-caption is-white-text">04</p>
        <a class="h2 navigation-item-text is-white-text">Contact</a>
      </div>
      <div class="navigation-item-secondary">
        <p class="p-italic is-white-text">Let me know</p>
      </div>
    </div>

    <div class="navigation-item is-bottom-left">
      <div class="navigation-item-content">
        <a class="h2 navigation-item-text is-white-text">Artur Fedorov</a>
      </div>
      <div class="navigation-item-secondary no-margin">
        <p class="p-italic is-white-text">Developer |  Designer</p>
      </div>
    </div>

    <ImageCover class="navigation-image"/>

    <div class="navigation-item is-bottom-right">
      <p class="p-italic is-white-text">
        All rights reserved
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {AnimationService} from '@/shared/services/animation.service';
export default Vue.extend({
  name: 'Navigation',
  mounted(): void {
    const timeline = AnimationService.gsap.timeline({});

    timeline.from('.navigation', {
      duration: 0.5,
      opacity: 0
    }).from('.navigation-item,  .navigation-image', {
      duration: 1.3,
      delay: -0.5,
      y: 30,
      opacity: 0,
      stagger: 0.3
    })
  }
});
</script>

<style lang="scss" scoped>
  .navigation {
    background-color: $black;
    transform-origin: right top;
    height: 100vh;
    overflow-y: scroll;

    &-item {
      display: flex;
      flex-direction: column;
      width: 100%;
      transform-origin: bottom right;

      &-caption {
        margin-right: 2em;
      }

      &-content {
        display: flex;
        align-items: flex-end;
      }

      &-secondary {
        margin-top: 1em;
        margin-left: 3.3em;
        white-space: nowrap;

        @media ($mobile) {
          display: none;
        }

        &.no-margin {
          margin-left: 0;
        }
      }

      &-text {
        line-height: 94%;
        white-space: nowrap;
      }

      &.is-reversed {
        flex-direction: row;
        align-items: flex-end;
      }

      &.is-one {
        grid-area: 2 / 1 / 3 / 1;
      }

      &.is-two {
        grid-area: 3 / 5 / 4 / -1;

        @media ($tablet) {
          grid-area: 3 / 8 / 4 / 9;
        }

        @media ($mobile) {
          grid-area: 3/ 1 / 4 / 1;
        }
      }

      &.is-three {
        grid-area: 4 / 3 / 5 / -1;

        @media ($tablet) {
          grid-area: 4 / 5 / 5 / 6;
        }

        @media ($mobile) {
          grid-area: 4 / 1 / 5 / 1;
        }
      }

      &.is-four {
        grid-area: 5 / 4 / 6 / -1;

        @media ($tablet) {
          grid-area: 5 / 8 / 6 / 9;
        }

        @media ($mobile) {
          grid-area: 5 / 1 / 7 / 1;
        }
      }

      &.is-bottom-left {
        grid-area: 7 / 1 / 8 / 2;

        @media ($mobile) {
          grid-area: 7 / 9 / 8 / 10;
        }
      }

      &.is-bottom-right {
        align-items: flex-end;
        justify-content: flex-end;
        grid-area: 7 / 5 / 8 / -1;

        @media ($tablet) {
          grid-area: 7 / 8 / 8 / 9;
        }

        @media ($mobile) {
          grid-area: 7 / 9 / 8 / 10;
        }
      }
    }

    &-image {
      grid-area: 4 / 1 / 7 / 2;

      @media ($tablet) {
        grid-area: 4 / 1 / 7 / 5;
        z-index: -1;
        min-width: 250px;
      }

      @media ($mobile) {
        display: none;
      }
    }
  }
</style>
