<template>
  <div class="contact">
    <svg class="contact-icon" width="655" height="160" viewBox="0 0 655 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path class="line two"  d="M1.00012 80.1C1.00012 36.4585 34.2936 1 78.1001 1C121.907 1 155.2 36.4585 155.2 80.1C155.2 123.943 121.905 159.5 78.1001 159.5C34.2948 159.5 1.00012 124.043 1.00012 80.1ZM65.9001 77.5V86.6C65.9001 90.6761 69.224 94 73.3001 94H82.2001C86.4857 94 89.6001 90.6666 89.6001 86.6V77.5C89.6001 75.3852 88.8846 73.5807 87.6469 72.3022C86.4085 71.0231 84.6757 70.3 82.7001 70.3H73.2001C71.0382 70.3 69.2052 71.0139 67.9109 72.2946C66.6163 73.5756 65.9001 75.3847 65.9001 77.5Z" stroke="#333333"/>
      <path class="line one"  d="M167.4 157.3V3H230.7V157.3H167.4ZM314.4 74.6V157.3H237.8V3.00127C258.749 3.10748 277.833 9.88843 291.707 22.125C305.685 34.4531 314.4 52.3404 314.4 74.6Z" stroke="#333333"/>
      <path class="line one"  d="M328.702 78.1C328.931 35.9641 358.189 1.5 402.5 1.5H411.6C433.86 1.5 451.747 10.2156 464.075 24.1932C476.312 38.0671 483.093 57.151 483.199 78.1H420.3V74.2C420.3 70.1048 416.957 67 412.9 67H401.1C397.024 67 393.7 70.3239 393.7 74.4V78.1H328.702ZM420.4 82.9H439.7V159.3H400.3C378.041 159.3 360.153 150.584 347.825 136.607C335.589 122.733 328.808 103.649 328.701 82.7H393.8V87.5C393.8 91.5761 397.124 94.9 401.2 94.9H413C417.076 94.9 420.4 91.5761 420.4 87.5V82.9Z" stroke="#333333"/>
      <path class="line one"  d="M499.702 78.1C499.931 35.9641 529.189 1.5 573.5 1.5H582.6C604.86 1.5 622.747 10.2156 635.075 24.1932C647.312 38.0671 654.093 57.151 654.199 78.1H591.3V74.2C591.3 70.1048 587.957 67 583.9 67H572.1C568.024 67 564.7 70.3239 564.7 74.4V78.1H499.702ZM654 140.9C654 144.424 651.124 147.3 647.6 147.3H572.2C568.124 147.3 564.8 150.624 564.8 154.7V159.5H499.701C499.807 138.501 506.589 119.417 518.825 105.556C531.153 91.591 549.04 82.9 571.3 82.9H654V140.9Z" stroke="#333333"/>
    </svg>
    <p class="p is-uppercase contact-text">One Second</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {AnimationService} from '@/shared/services/animation.service';
export default Vue.extend({
  name: 'Contact',
  mounted(): void {
    AnimationService.gsap.timeline().set('.contact-text', {
      opacity: 0,
      y: 50
    });

    AnimationService.anime({
      targets: '.line',
      strokeDashoffset: [AnimationService.anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 1500,
      delay: function(el, i) { return i * 250 },
      loop: false,
      // complete: () => this.startAnimation()
    });

    this.startAnimation();
  },
  methods: {
    startAnimation() {
      AnimationService.gsap.timeline({duration: 1.5})
        .to('.line', {
          delay: 0.2,
          fill: '#333333',
          ease: AnimationService.easing.power1.easeInOut
        })
        .to('.contact-text', {
          opacity: 1,
          y: 0,
          ease: AnimationService.easing.power1.easeInOut
        });
    }
  }
});
</script>

<style lang="scss" scoped>
  .contact {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &-text {
      font-size: 50px;
      margin-top: 15px;
      margin-left: 340px;
    }
  }

  .line {
    transform-origin: top center;
  }
</style>
