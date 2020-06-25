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
      :key="project.id">
      <template slot="one">
        <div
          class="design-image left"
          :class="[project.class, {'visible': isProjectHovered(project.name)}]"></div>
      </template>
      <template slot="two">
        <DesignProject
          :project="project"
          @mouseover="onMouse"
          @mouseleave="onMouse"/>
      </template>
      <template slot="three">
        <div
          class="design-image right"
          :class="[project.class, {'visible': isProjectHovered(project.name)}]"></div>
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
import {DesignService} from '@/api/services/DesignService';

export default Vue.extend({
  mixins: [uiMode, routeMixin],
  components: {
    DesignProject
  },
  name: 'Design',
  data() {
    return {
      Routes,
      projects: DesignService.getDesignProjects(),
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
  $feix-purple: #6153D3;
  $ice-blue: #0E3053;
  $elena-brown: #E4DCDA;

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
      transition: 0.6s all;
      transform-origin: center center;
      transform: scale(0.9); //translateY(20px);

      &.cheeta {
        &.left {
          background-color: $white;
          background-image: url('../assets/images/cheeta/logo-caption-black.png');
        }

        &.right {
          background-color: $black;
          background-image: url('../assets/images/cheeta/logo-caption-white.png');
        }
      }

      &.feix {
        &.left {
          background-image: url('../assets/images/feix/logo-feix.png');
        }

        &.right {
          background-color: $feix-purple;
          background-image: url('../assets/images/feix/logo-feix-inverted.png');
        }
      }

      &.ice {
        background-color: $ice-blue;

        &.left {
          background-image: url('../assets/images/ice/dashboard-ice.png');
        }

        &.right {
          background-image: url('../assets/images/ice/logo-ice.png');
        }
      }

      &.one2nd {
        &.left {
          background-color: $white;
          background-image: url('../assets/images/one2nd/one2nd.png');
        }

        &.right {
          background-position: bottom;
          background-size: cover;
          background-image: url('../assets/images/one2nd/one2nd-alt.png');
        }
      }

      &.elena-krasnenko {
        &.left {
          background-color: $elena-brown;
          background-image: url('../assets/images/elena/elena-logo.png');
        }

        &.right {
          background-color: $white;
          background-size: cover;
          background-image: url('../assets/images/elena/elena-logo-color.png');
        }
      }

      &.visible {
        // transform: translateY(0);
        transform: scale(1);
        opacity: 1;
      }
    }
  }

</style>
