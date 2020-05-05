<template>
  <div class="project">
    <h2 class="project-header">{{project.name}}</h2>
    <p
      class="p is-underlined project-role"
      v-if="roleString">
      {{roleString}}
    </p>
    <p class="p project-description">
      {{project.description}}
    </p>
    <p class="p-italic project-date">
      {{dateString}}
    </p>
    <div
      class="project-label"
      v-if="!hasEndDate">
      <p class="p-italic is-white-text">
        ongoing
      </p>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import {IProject} from '../../../shared/interfaces/IProject';
import {IRole} from '@/shared/interfaces/IRole';
export default Vue.extend({
  name: 'ProjectLabel',
  props: {
    project: {
      type: Object as () => IProject,
      required: true
    }
  },
  computed: {
    hasEndDate(): boolean {
      return Boolean(this.project.endDate);
    },
    roleString (): string {
      let roles = '';

      if(!this.project.roles) {
        return '';
      }

      this.project.roles.forEach((role: IRole) =>
        roles = roles.concat(`${role.name}/`)
      );

      return roles.substring(0, roles.length - 1);
    },
    dateString (): string {
      const startDate = new Date(this.project.startDate.seconds * 1000);
      const endDate = this.project.endDate ? new Date(this.project.endDate.seconds * 1000) : 'Present';
      const startMonth = this.extractStringMonth(startDate);
      const endMonth = endDate !== 'Present'
        ? this.extractStringMonth(endDate)
        : 'Present';

      return `${startMonth} - ${endMonth}`;
    }
  },
  methods: {
    extractStringMonth (date: Date) {
      const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ];

      return `${monthNames[date.getMonth()]} ${date.getFullYear()}`;
    }
  }
})
</script>

<style lang='scss' scoped>
  .project {
    display: flex;
    flex-direction: column;
    position: relative;

    &-header {
      margin-bottom: $building-unit;
    }

    &-role {
      margin-bottom: $building-unit-x2;
    }

    &-description {
      margin-bottom: $building-unit-x3;
      max-width: 90%;
    }

    &-date {
      margin-top: auto;
    }

    &-label {
      position: absolute;
      bottom: -50px;
      background-color: $black;
      display: flex;
      justify-content: center;
      padding: 2px 0;
      width: 80px;
    }
  }
</style>
