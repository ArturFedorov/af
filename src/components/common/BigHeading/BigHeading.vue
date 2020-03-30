<template>
  <div
    class="heading">
    <div class="heading-header-wrapper">
      <h1 class="heading-header h0 animate-stagger">
        <slot name="first-word">
          Artur
        </slot>
      </h1>
      <h1 class="heading-header h0 animate-stagger">
        <slot name="second-word">
          Fedorov
        </slot>
      </h1>
    </div>
    <h2 class="heading-header-h2 animate-stagger">
      Developer +
      <span :class="colorHint">
        Designer
      </span>
    </h2>
    <div class="heading-date">
      <Date class="animate-stagger"/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {AnimationService} from '@/shared/services/animation.service';
export default Vue.extend({
  name: 'BigHeading',
  props: {
    colorHint: {
      type: String,
      default: 'is-red',
      validator: value => [ 'initial', 'is-black', 'is-red', 'is-blue', 'is-purple', 'is-orange'].includes(value)
    }
  },
  mounted(): void {
    AnimationService.tweenLite.from('.animate-stagger', {
      duration: 1,
      delay: 0.5,
      opacity: 0,
      scale: 0.9,
      y: -30,
      ease: AnimationService.easing.power1.easeOut,
      stagger: 0.5
    });
  }
});
</script>

<style lang="scss" scoped>
  .heading {
    position: relative;
    z-index: 3;

    &-header {
      line-height: 100%;
      position: relative;
      transition: color 0.5s;
      @include fluid-type($min_width, $max_width, $font-size-h1, $font-size-h0);

      &-h2 {
        margin: 1em 0;
        padding-left: 10px;
        transition: color 0.2s;
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

    &.is-white {
      .heading-header {
        color: $white;

        &-h2 {
          color: $white;
        }
      }
    }
  }

  .animate-stagger {
    transform-origin: 0 100%;
  }
</style>
