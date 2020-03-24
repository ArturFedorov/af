<template>
  <div class="year">
    <div class="year-content">
      <h1 class="year-h1">Projects</h1>
      <div v-if="year && year.projects">
        <Project
          v-for="(project, index) in year.projects"
          :key="project.id"
          :project="project"
          :orderNumber="index + 1"/>
      </div>
    </div>
    <div class="year-navigation">
      <div
        class="year-navigation-item"
        v-for="year in years"
        :key="year.id">
        <h2
          class="year-navigation-header"
          :class="{ 'is-active': isLinkActive(year.id) }">
          {{ year.year }}
        </h2>
        <router-link
          class="p-body year-navigation-link"
          :class="{ 'is-active': isLinkActive(year.id) }"
          :to="{ name: 'Year', params: {id: year.id } }">
          Details
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {YearService} from '@/api/services/YearService';
import {IYear} from '@/components/work/Years/IYear';
import Project from '@/components/work/YearPage/Project/Project.vue';
export default Vue.extend({
  components: {
    Project
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      years: [] as IYear[]
    }
  },
  computed: {
    year (): IYear {
      return this.years.find((year: IYear) => year.id === this.id) as IYear;
    }
  },
  methods: {
    isLinkActive(id: string): boolean {
      return this.id === id;
    }
  },
  firestore: {
    years: YearService.getAllYears()
  }
});
</script>

<style lang="scss" scoped>
  .year {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));

    &-h1 {
      text-decoration: underline;
      margin-bottom: 1em;
    }

    &-content {
      grid-column: 1 / 3;
      border-top: $border;
      padding: 2em;
    }

    &-navigation {
      grid-column: 3 / 3;
      border-top: $border;
      border-left: $border;
      padding: 2em;

      @media ($mobile) {
        padding: 2em 0.5em;
      }

      &-header {
        &.is-active {
          color: $blue;
        }
      }

      &-link {
        color: $black;
        transition: all 0.4s;

        &.is-active {
          color: $blue;
        }
      }

      &-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 3em;
      }
    }
  }
</style>
