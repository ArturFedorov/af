<template>
  <div class="home grid">
    <GridRow
      :noLeft="true">
      <template slot="two">
        <div
          class="home-section scale"
          ref="developerWrapper">
          <div ref="developer">
            <BigHeading>Developer</BigHeading>
          </div>
        </div>
      </template>
      <template slot="three">
        <ArrowLink
          class="arrow-link"
          :link="Routes.WORK"
          @click="goTo">
          <template slot="text">development</template>
          <template slot="caption">9 projects</template>
        </ArrowLink>
      </template>
    </GridRow>

    <GridRow :noRight="true">
      <template slot="one">
        <ArrowLink
          class="arrow-link"
          :link="Routes.DESIGN_PROJECTS"
          @click="goTo">
          <template slot="text">design</template>
          <template slot="caption">4 projects</template>
        </ArrowLink>
      </template>
      <template slot="two">
        <div
          class="home-section"
          ref="designerWrapper">
          <div ref="designer">
            <BigHeading>Designer</BigHeading>
          </div>
        </div>
      </template>
    </GridRow>

    <GridRow
      :noLeft="true"
      :isAlignedRight="true"
      :isBottom="true">
      <template slot="two">
        <ArrowLink
          class="arrow-link"
          :link="Routes.CONTACT"
          @click="goTo">
          <template slot="text">contact</template>
        </ArrowLink>
      </template>
      <div class="grid-row-section is-small with-border-left no-border-mobile"></div>
    </GridRow>

    <GridRow
      :noRight="true"
      :isBottom="true">
      <template slot="one"></template>
      <template slot="two">
        <ArrowLink
          class="arrow-link"
          :link="Routes.ABOUT"
          @click="goTo">
          <template slot="text">about</template>
        </ArrowLink>
      </template>
    </GridRow>

  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Routes} from '@/router';
import {AnimationService} from '@/shared/services/animation.service';
import {routeMixin} from '@/components/common/mixins/route.mixin';
export default Vue.extend({
  name: 'Home',
  mixins: [routeMixin],
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

    AnimationService.removeCover();
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
