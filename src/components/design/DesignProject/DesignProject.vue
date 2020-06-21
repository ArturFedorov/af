<template>
  <div class="design-project">
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
      <a class="design-project-plus">
        <SvgIcon
          name="plus"/>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {IDesignProject} from '@/shared/interfaces/IDesignProject';
export default Vue.extend({
  name: 'DesignProject',
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
      justify-content: space-between;
      width: 100%;
    }

    &-topics {
      display: flex;

      .is-small {
        margin-right: $building-unit-x6;
      }
    }

    &-plus {
      width: $building-unit-x5;
      height: $building-unit-x5;
      cursor: pointer;
    }
  }
</style>
