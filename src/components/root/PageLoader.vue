<template>
  <svg
    class="morph-svg" height="100%" width="100%" viewBox="0 0 1920 800" preserveAspectRatio="none"
    :class="[color, {'is-hidden' : hide}]">
    <path class="morph" d="M-8.00586 334.584C-8.00586 694.674 76.3178 909.55 -272.39 909.55C-843.123 909.55 -272.39 350.422 -272.39 176.068C-272.39 1.71408 -847.16 -291.759 -498.452 -291.759C-149.745 -291.759 -8.00586 -25.506 -8.00586 334.584Z"></path>
  </svg>
</template>

<script lang="ts">
import Vue from 'vue';
import {AnimationService} from '../../shared/services/animation.service';
export default Vue.extend({
  name: 'PageLoader',
  props: {
    color: {
      type: String,
      default: 'is-red'
    },
    startAnimation: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      hide: false
    }
  },
  methods: {
    endAnimation() {
      this.$emit('end-animation');
    },
    animate() {
      const timeline = AnimationService.anime.timeline({
        easing: 'easeInOutQuint',
        duration: 1300,
        loop: false
      });

      timeline
        .add({
          targets: '.morph',
          d: [
            {
              value: 'M2361.55 209.562C2361.55 1598.19 804.451 1598.19 455.743 1598.19C-114.989 1598.19 -236.817 404.758 -236.817 230.404C-236.817 56.0501 45.8665 -85.2917 394.574 -85.2917C743.282 -85.2917 2361.55 -1179.07 2361.55 209.562Z'
            }]
        })
        .add({
          targets: '.morph',
          d: [
            {
              value: 'M-8.00586 334.584C-8.00586 694.674 76.3178 909.55 -272.39 909.55C-843.123 909.55 -272.39 350.422 -272.39 176.068C-272.39 1.71408 -847.16 -291.759 -498.452 -291.759C-149.745 -291.759 -8.00586 -25.506 -8.00586 334.584Z'
            }],
          complete: () => this.endAnimation()
        });

      timeline.play();
    }
  },
  watch: {
    startAnimation(newValue: boolean) {
      if(newValue) {
        this.animate();
      }
    }
  }
});
</script>

<style lang="scss" scoped>
  .morph-svg {
    bottom: 0;
    right: 0;
    top: 0;
    position: fixed;
    z-index: -1;

    &.is-top-z {
      z-index: 2;
    }

    &.initial {
      fill: $red;
    }

    &.is-red {
      fill: $red;
    }

    &.is-black {
      fill: $black;
    }

    &.is-blue {
      fill: $blue;
    }

    &.is-orange {
      fill: $orange;
    }

    &.is-purple {
      fill: $purple;
    }
  }
</style>
