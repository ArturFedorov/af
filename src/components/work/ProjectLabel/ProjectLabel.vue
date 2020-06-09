<template>
  <div class="project">
    <h3 class="is-bigger project-header">{{project.name}}</h3>
    <p
      class="is-underlined project-role"
      v-if="roleString">
      {{roleString}}
    </p>
    <p class="is-small project-description">
      {{project.description}}
    </p>
    <p class="is-smallest project-date">
      {{dateString}}
    </p>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import {IProject} from '../../../shared/interfaces/IProject';
import {IRole} from '@/shared/interfaces/IRole';
import {CalendarService} from '@/shared/services/calendar.service';
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
      return CalendarService.convertDateToDurationString(this.project.startDate, this.project.endDate)
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
      white-space: nowrap;
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

  }

  // dark mode
  .dark {
    .project {
      * {
        color: $white;
      }
    }
  }
</style>
