<template>
  <div class="grid design-case">
    <GridRow
      :noRight="true">
      <template slot="one">
        <Button
          class="is-flipped"
          :isReversed="!isLightMode"
          @click="goTo(Routes.DESIGN_PROJECTS)">
          back
        </Button>
      </template>
      <template slot="two">
        <div
          class="design-section scale"
          ref="designWrapper">
          <div ref="design">
            <BigHeading class="is-capitalized">{{project.name}}</BigHeading>
          </div>
        </div>
      </template>
    </GridRow>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {IDesignProject} from '@/shared/interfaces/IDesignProject';
  import {AnimationService} from '@/shared/services/animation.service';
  import {DesignService} from '@/api/services/DesignService';
  import {uiMode} from '@/components/common/mixins/uiMode.mixin';
  import {routeMixin} from '@/components/common/mixins/route.mixin';
  import {Routes} from '@/router';
  export default Vue.extend({
    name: 'DesignCase',
    mixins: [uiMode, routeMixin],
    props: {
      id: {
        type: String,
        required: true
      },
    },
    data() {
      return {
        Routes,
        project: {} as IDesignProject | undefined
      }
    },
    created() {
      this.project = DesignService.getDesignProjectByName(this.id);
    },
    mounted() {
      const contact = this.$refs.design as HTMLElement;
      let wrapper = this.$refs.designWrapper as HTMLElement;
      wrapper = AnimationService.appenCloneToParrent(wrapper, contact, 6);
      AnimationService.runningTimeline(wrapper, -wrapper.offsetWidth, 30);

      AnimationService.removeCover();
    }
  });
</script>

<style lang="scss" scoped>
  .design {
    &-section {
      display: flex;
    }
  }
</style>


