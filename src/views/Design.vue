<template>
  <div class="design grid">
    <GridRow
      :noRight="true">
      <template slot="one">
        <Button
          class="is-flipped"
          :isReversed="!isLightMode"
          @click="goTo(Routes.HOME)">
          home
        </Button>
      </template>
      <template slot="two">
        <div
          class="design-section scale"
          ref="designWrapper">
          <div ref="design">
            <BigHeading>Design</BigHeading>
          </div>
        </div>
      </template>
    </GridRow>
    <GridRow
      :isBottom="true"
      v-for="project in projects"
      :key="project.name">
      <template slot="one">
        <div
          class="design-image left"
          :class="{'visible': isProjectHovered(project.name)}"></div>
      </template>
      <template slot="two">
        <DesignProject
          :project="project"
          @mouseover="onMouse"/>
      </template>
      <template slot="three">
        <div
          class="design-image right"
          :class="{'visible': isProjectHovered(project.name)}"></div>
      </template>
    </GridRow>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {AnimationService} from '@/shared/services/animation.service';
import {uiMode} from '@/components/common/mixins/uiMode.mixin';
import {routeMixin} from '@/components/common/mixins/route.mixin';
import {Routes} from '@/router';
import DesignProject from '@/components/design/DesignProject/DesignProject.vue';
import {IDesignProject} from '@/shared/interfaces/IDesignProject';

export default Vue.extend({
  mixins: [uiMode, routeMixin],
  components: {
    DesignProject
  },
  name: 'Design',
  data() {
    return {
      Routes,
      projects: [
        { name: 'cheeta', topics: ['logo', 'landing', 'identity']},
        { name: 'feix', topics: ['logo', 'landing', 'identity']},
        { name: 'one2nd', topics: ['logo', 'landing', 'identity']},
        { name: 'ice9', topics: ['ux', 'ui']},
        { name: 'elena krasnenko', topics: ['logo', 'type', 'landing']}
      ] as IDesignProject[],
      hoveredProject: ''
    }
  },
  mounted() {
    const contact = this.$refs.design as HTMLElement;
    let wrapper = this.$refs.designWrapper as HTMLElement;
    wrapper = AnimationService.appenCloneToParrent(wrapper, contact, 6);
    AnimationService.runningTimeline(wrapper, -wrapper.offsetWidth, 30);

    AnimationService.removeCover();
  },
  methods: {
    isProjectHovered (name: string): boolean {
      return this.hoveredProject === name;
    },
    onMouse(name: string) {
      this.hoveredProject = name;
    }
  }
});
</script>

<style lang="scss" scoped>
  .design {
    position: relative;

    &-section {
      display: flex;
    }

    &-image {
      width: 100%;
      height: 100%;
      position: absolute;
      background-position: center center;
      background-size: contain;
      background-repeat: no-repeat;
      opacity: 0;
      transition: $default-transition;

      &.left {
        background-image: url('../assets/images/cheeta/logo-caption-black.png');
        transform: translateY(20px);
      }

      &.right {
        background-color: $black;
        background-image: url('../assets/images/cheeta/logo-caption-white.png');
        transform: translateY(20px);

      }

      &.visible {
        transform: translateY(0);
        opacity: 1;
      }
    }
  }

</style>
