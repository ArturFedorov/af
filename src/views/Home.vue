<template>
  <div class="home grid">
    <div class="grid-row">
     <div
       class="grid-row-section">
       <div
         class="home-section scale"
         ref="developerWrapper">
         <div ref="developer">
           <BigHeading>Developer</BigHeading>
         </div>
       </div>
     </div>
      <div class="grid-row-section is-small with-border-left is-bottom">
        <div class="grid-row-section-cover"></div>
        <ArrowLink
          class="home-link"
          :link="Routes.WORK">
          <template slot="text">development</template>
          <template slot="caption">9 projects</template>
        </ArrowLink>
      </div>
    </div>

    <div class="grid-row">
      <div class="grid-row-section is-small with-border-right is-bottom">
        <div class="grid-row-section-cover"></div>
        <ArrowLink
          class="home-link"
          :link="Routes.DESIGN_PROJECTS">
          <template slot="text">design</template>
          <template slot="caption">4 projects</template>
        </ArrowLink>
      </div>
      <div class="grid-row-section">
        <div
          class="home-section"
          ref="designerWrapper">
          <div ref="designer">
            <BigHeading>Designer</BigHeading>
          </div>
        </div>
      </div>
    </div>

    <div class="grid-row">
      <div class="grid-row-section is-bottom is-aligned-right">
        <div class="grid-row-section-cover"></div>
        <ArrowLink
          class="home-link"
          :link="Routes.CONTACT">
          <template slot="text">contact</template>
        </ArrowLink>
      </div>
      <div class="grid-row-section is-small with-border-left no-border-mobile"></div>
    </div>

    <div class="grid-row">
      <div class="grid-row-section is-small with-border-right no-border-mobile"></div>
      <div class="grid-row-section is-bottom">
        <div class="grid-row-section-cover"></div>
        <ArrowLink
          class="home-link"
          :link="Routes.ABOUT">
          <template slot="text">about</template>
        </ArrowLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Routes} from '@/router';
import {AnimationService} from '@/shared/services/animation.service';
export default Vue.extend({
  name: 'Home',
  data() {
    return {
      Routes
    }
  },
  mounted() {
    const developer = this.$refs.developer as HTMLElement;
    let developerWrapper = this.$refs.developerWrapper as HTMLElement;
    developerWrapper = AnimationService.appenCloneToParrent(developerWrapper, developer, 6);

    const designer = this.$refs.designer as HTMLElement;
    let designerWrapper = this.$refs.designerWrapper as HTMLElement;
    designerWrapper = AnimationService.appenCloneToParrent(designerWrapper, designer, 6);

    AnimationService.runningTimeline(developerWrapper, -developerWrapper.offsetWidth, 30);
    AnimationService.runningTimeline(designerWrapper, -developerWrapper.offsetWidth ,20);



    AnimationService.tweenLite.to('.grid-row-section-cover', {
      y: '100%',
      duration: 2,
      ease: AnimationService.easing.power3.easeOut,
      stagger: 0.1
    })

    AnimationService.tweenLite.fromTo('.home-link', {
      delay: 0.5,
      y: '110%',
      duration: 1.2,
      ease: AnimationService.easing.power3.easeOut
    }, {
      y: 0,
      stagger: 0.1
    })
  }
});
</script>
<style lang="scss" scoped>
  .home {
    height: 100%;
    position: relative;

    &-section {
      display: flex;
    }
  }
</style>
