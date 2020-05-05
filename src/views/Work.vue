<template>
  <div class="work">
    <div class="work-header">
      <NumberStep class="projects-link">
        <template slot="text">
          T-Systems
        </template>
        <template slot="caption">
          April 2013 - Present
          <span class="is-pale-text">
            ( 7 years )
          </span>
        </template>
      </NumberStep>
    </div>
    <div class="work-content">
      <ProjectLabel
        class="work-content-item"
        v-for="project in projects"
        :key="project.id"
        :project="project"/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {ProjectService} from '../api/services/ProjectService';
import ProjectLabel from '../components/work/ProjectLabel/ProjectLabel.vue';
export default Vue.extend({
  name: 'Work',
  components: {
    ProjectLabel
  },
  data() {
    return {
      projects: []
    }
  },
  mounted(): void {
    this.$bind('projects', ProjectService.getAllProjects());
  }
});
</script>

<style lang="scss" scoped>
  .work {
    height: 100%;

    &-header {
      width: 100%;
      padding-bottom: $building-unit-x2;
      border-bottom: 1px solid $black;
      margin-bottom: 5em;
    }

    &-content {
      display: flex;
      flex-wrap: wrap;

      &-item {
        width: calc(100% / 5);
        min-width: 270px;
        margin-bottom: 8em;
      }
    }
  }
</style>
