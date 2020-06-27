<template>
  <div
    class="design-project"
    @mouseover="$emit('mouseover', project.name)"
    @mouseleave="$emit('mouseleave', '')">
    <div class="design-project-header">
      <h2>{{project.name}}</h2>
      <div class="design-project-topics">
        <p
          class="is-small"
          v-for="topic in project.topics"
          :key="topic">
          {{topic}}
        </p>
      </div>
      <a
        class="design-project-plus"
        @click="goTo(Routes.DESIGN_CASE, project.name)">
        <SvgIcon
          name="plus"/>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {IDesignProject} from '@/shared/interfaces/IDesignProject';
import {routeMixin} from '@/components/common/mixins/route.mixin';
import {Routes} from '@/router';
export default Vue.extend({
  name: 'DesignProject',
  mixins: [routeMixin],
  data() {
    return {
      Routes
    }
  },
  props: {
    project: {
      type: Object as () => IDesignProject,
      required: true
    }
  }
});
</script>

<style lang="scss" scoped>
  .design-project {
    display: flex;
    padding: $padding;
    width: 100%;

    &-header {
      display: flex;
      align-items: center;
      width: 100%;
    }

    &-topics {
      display: flex;
      margin-left: auto;
      margin-right: $building-unit-x10;
      justify-content: flex-end;

      @media ($mobile) {
        display: none;
      }

      .is-small {
        margin-right: $building-unit-x6;
      }
    }

    &-plus {
      width: $building-unit-x5;
      height: $building-unit-x5;
      cursor: pointer;

      @media ($mobile) {
        margin-left: auto;
      }
    }
  }

  //dark mode
  .dark {
    .design-project {
      color: $white;

      &-plus {
        fill: $white;
      }
    }
  }
</style>
