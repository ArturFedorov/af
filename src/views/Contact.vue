<template>
  <div class="contact">
    <div class="contact-content">
      <div
        ref="element"
        class="contact-content-item item-1">
        <SvgIcon
          class="contact-header is-one"
          name="contact-one"/>
      </div>

      <div class="contact-content-item item-2">
        <SvgIcon
          class="contact-header is-two"
          name="contact-two"/>
      </div>

      <div class="contact-content-item item-3">
        <SvgIcon
          class="contact-header is-three"
          name="contact-three"/>
      </div>

      <div class="contact-content-item item-4">
        <SvgIcon
          class="contact-logo is-top-left"
          name="logo-top-left"/>
      </div>

      <div class="contact-content-item item-5">
        <SvgIcon
          class="contact-logo is-top-right"
          name="logo-top-right"/>
      </div>

      <div class="contact-content-item is-black item-6">
        <NumberStep class="contact-content-item-bottom">
          <template slot="text">
            <span class="is-white-text contact-name">Artur Fedorov</span>
          </template>
          <template slot="caption">
            <span class="is-white-text">Developer |  Designer</span>
          </template>
        </NumberStep>
      </div>

      <div class="contact-content-item item-7">
        <div class="contact-links">
          <h3 class="caption-text is-white smaller-margin">
            <a
              href="https://www.facebook.com/artur.fedorov/" target="_blank">
              facebook
            </a>
          </h3>
          <h3 class="caption-text is-fullwidth">
            <a
              class="is-white-text">linkedIn</a>
          </h3>
          <h3 class="is-white no-bg caption-text smaller-margin">
            <a href="https://www.instagram.com/arturhsv/" target="_blank">instagram</a>
          </h3>
        </div>
      </div>
      <div class="contact-content-item no-border"></div>

      <div class="contact-content-item item-9">
        <SvgIcon
          class="contact-logo is-bottom-left"
          name="logo-bottom-left"/>
      </div>
      <div class="contact-content-item item-10">
        <SvgIcon
          class="contact-logo is-bottom-right"
          name="logo-bottom-right"/>
      </div>
    </div>

    <div class="contact-footer">
      <p class="p-italic">Developer |  Designer</p>
      <p class="p-italic">2020 / Saint-Petersburg</p>
      <p class="p-italic">All rights reserved</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {AnimationService} from '@/shared/services/animation.service';
export default Vue.extend({
  name: 'Contact',
  mounted(): void {
    const el = this.$refs.element as HTMLElement;
    const squareHeight = el.clientHeight + 12;


    AnimationService.gsap.timeline()
      .set('.item-3', {
        x: -squareHeight,
        y: squareHeight
      })
      .set('.item-2', {
        x: squareHeight
      })
      .set('.item-7', {
        y: -squareHeight
      })
      .set('.item-9', {
        x: -squareHeight
      })
      .set('.item-5', {
        x: -squareHeight
      })
      .set('.item-4', {
        y: squareHeight
      })

    const duration = 0.2;
    const ease = AnimationService.easing.power1.easeOut;

    AnimationService.gsap.timeline()
      .from('.contact-content-item', {
        delay: 0.5,
        opacity: 0,
        scale: 1.05,
        stagger: 0.05
      })
      .to('.item-5', {
        duration,
        ease,
        x: 0
      })
      .to('.item-4', {
        duration,
        ease,
        y: 0
      })
      .to('.item-9', {
        duration,
        ease,
        x: 0
      })
      .to('.item-3', {
        duration,
        ease,
        x: 0
      })
      .to('.item-7', {
        duration,
        ease,
        y: 0
      })
      .to('.item-2', {
        duration,
        ease,
        x: 0
      })
      .to('.item-3', {
        duration,
        ease,
        y: 0
      });
  }
});
</script>

<style lang="scss" scoped>
  .contact {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 7em;

    @media ($tablet) {
      padding-bottom: 3em;
    }

    &-content {
      display: grid;
      grid-template-columns: repeat(5, minmax(200px, 1fr));
      grid-gap: 10px;
      position: relative;

      @media ($tablet) {
        grid-template-columns: repeat(3, minmax(200px, 1fr));
      }

      @media ($mobile) {
        grid-template-columns: repeat(2, minmax(150px, 1fr));
      }

      &-item {
        position: relative;
        border: 1px solid $lite-gray;
        overflow: hidden;

        &-bottom {
          position: absolute;
          bottom: 1em;
          left: 2em;

          @media ($mobile) {
            left: 1em;
          }
        }

        &::before {
          content: '';
          padding-bottom: 100%;
          display: block;
        }

        &.no-border {
          border: 0;
        }

        &.is-black {
          background-color: $black;
        }
      }
    }

    &-footer {
      display: flex;
      width: 100%;
      justify-content: space-between;
      margin-top: 3em;
    }

    &-header {
      position: absolute;
      width: 100%;
      height: 100%;

      &.is-one {
        bottom: 0;
        right: 0;
      }

      &.is-two {
        bottom: -5px;
        left: 0;
      }

      &.is-three {
        bottom: -5px;
        left: 0;
      }
    }

    &-logo {
      position: absolute;
      width: 100%;
      height: 100%;

      &.is-top-left {
        top: 0;
        left: 0;
      }

      &.is-top-right {
        top: 0;
        right: 0;
      }

      &.is-bottom-left {
        bottom: 0;
        left: 0;
      }

      &.is-bottom-right {
        bottom: 0;
        right: 0;
      }
    }

    &-links {
      position: absolute;
      bottom: 1em;
      right: 2em;

      @media ($mobile) {
        right: 1em;
      }
    }

    &-name {
      font-size: 85px;

      @media ($desktop) {
        font-size: 70px;
      }

      @media ($mobile) {
        font-size: 50px;
      }
    }
  }

  .item-3 {
    @media ($mobile) {
      display: none;
    }
  }

  .item-4 {
    @media ($tablet) {
      grid-area: 3 / 1 / 4 / 2;
    }
  }

  .item-5 {
    @media ($tablet) {
      grid-area: 3 / 2 / 4 / 3;
    }
  }

  .item-6 {
    @media ($tablet) {
      grid-area: 2 / 1 / 3 / 2;
    }
  }

  .item-7 {
    @media ($tablet) {
      grid-area: 2 / 2 / 3 / 3;
    }
  }

  .item-9 {
    @media ($tablet) {
      grid-area: 4 / 1 / 5 / 2;
    }
  }

  .item-10 {
    @media ($tablet) {
      grid-area: 4 / 2 / 5 / 3;
    }
  }
</style>
