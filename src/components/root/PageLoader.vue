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
              value: 'M2764.13 1298.47C3769.95 2366.54 1063.09 2281.44 714.381 2281.44C143.648 2281.44 -236.817 404.758 -236.817 230.404C-236.817 56.0499 661.042 -499.817 1682.1 -499.817C2436.47 -499.817 1758.3 230.404 2764.13 1298.47Z'
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
