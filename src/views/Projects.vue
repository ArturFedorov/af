<template>
  <div class="projects cover">
    <div class="projects-header">
      <div class="projects-items">
        <div class="projects-item">
          <SvgIcon name="exp1"/>
        </div>
        <div class="projects-item">
          <SvgIcon name="exp2"/>
        </div>
        <div class="projects-item">
          <SvgIcon name="exp3"/>
        </div>
        <div class="projects-item">
          <SvgIcon name="exp4"/>
        </div>
      </div>
    </div>
    <div class="projects-links">
      <div class="projects-link-wrapper is-first">
        <NumberStep class="projects-link">
          <template slot="text">
            Development
          </template>
          <template slot="caption">
            Check out developer carier
          </template>
        </NumberStep>
        <a
          class="p is-white-text projects-link-button is-top"
          @click="goTo(Routes.DESIGN_PROJECTS)">
          Check it up
        </a>
      </div>
      <div class="projects-link-wrapper is-last">
        <a class="p is-white-text projects-link-button is-bottom">
          Check it up
        </a>
        <NumberStep class="projects-link">
          <template slot="text">
            Design
          </template>
          <template slot="caption">
            Some deign projects
          </template>
        </NumberStep>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {AnimationService} from '@/shared/services/animation.service';
import {Routes} from '@/router';
export default Vue.extend({
  data() {
    return {
      Routes
    }
  },
  mounted(): void {
    AnimationService.tweenLite.from('.projects-item', {
      delay: -2,
      duration: 4,
      x: -1000,
      stagger: 0.2,
      ease: AnimationService.easing.elastic.easeInOut
    });

    AnimationService.gsap.timeline().from('.projects-links', {
      duration: 1.5,
      width: 0
    });

    this.animateLink('.is-first', 400, 1.5);
    this.animateLink('.is-last', -400, 2);
  },
  methods: {
    animateLink (selector: string,y: number, delay = 0, disappear = false) {
      const method = disappear ? AnimationService.tweenLite.to : AnimationService.tweenLite.from;
      method(selector, {
        duration: 2,
        opacity: 0,
        y: -y,
        delay,
        ease: 'elastic.out(1, 0.6)'
      })
    },
    pageTransition(name: string) {
      AnimationService.gsap.timeline().to('.projects-links', {
        duration: 2,
        width: '100%',
        ease: AnimationService.easing.elastic.easeInOut
      });

      this.animateLink('.is-first', -400, 0, true);
      this.animateLink('.is-last', 400, 0, true);

      AnimationService.tweenLite.to('.projects-header', {
        delay: 1,
        scale: 10,
        opacity: 0,
        onComplete: () => this.$router.push({name})
      })
    },
    goTo(name: string) {
      this.pageTransition(name);
    }
  }
});
</script>

<style lang="scss" scoped>
  .projects {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $black;
    height: 100vh;
    padding: 4em;
    z-index: 4;

    @media ($mobile) {
      padding: 3em 2em;
    }

    &-header {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 300px;
      background-color: $black;
      position: relative;
      width: 40%;
      overflow: hidden;
      z-index: 2;

      @media ($tablet) {
        width: 70%;
      }

      @media ($mobile) {
        width: 100%;
      }
    }

    &-item {
      position: relative;

      &s {
        position: absolute;
        transform: translateY(20%);
      }
    }

    &-links {
      position: absolute;
      background-color: $white;
      width: 20%;
      height: 100%;
      z-index: 1;
      transform-origin: center center;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 2em 0;

      @media ($desktop) {
        width: 25%;
      }

      @media ($tablet) {
        padding: 1em 0;
        width: 30%;
      }

      @media ($mobile) {
        width: 60%;
      }
    }

    &-link {
      transform-origin: top left;
      padding: 0 2em;

      &-button {
        display: inline-block;
        background-color: $black;
        width: 100%;
        padding: 0.5em 2em;
        cursor: pointer;
        transition: all 0.4s;

        &.is-top {
          margin-top: 2em;

          @media ($tablet) {
            margin-top: 1em;
          }
        }

        &.is-bottom {
          margin-bottom: 2em;

          @media ($tablet) {
            margin-bottom: 1em;
          }
        }
      }
    }
  }

  .svg-icon {
    width: 600px;
    fill: $white;
    position: relative;
    height: 100px;

    @media ($desktop) {
      width: 500px;
      height: 80px;
    }

    @media ($tablet) {
      width: 400px;
      height: 63px;
    }

    @media ($mobile) {
      width: 300px;
      height: 46px;
    }

    &-exp2 {
      transform: translate(0, -54%);
    }

    &-exp3 {
      transform: translate(0, -110%);
    }

    &-exp4 {
      transform: translate(0, -165%);
    }

    &-experience {
      fill: none;
      stroke: $white;
      width: 60%;
      height: 200px;
    }
  }
</style>
