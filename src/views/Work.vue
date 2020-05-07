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
    <div class="work-row">
      <div class="work-row-controls">
        <a
          class="p-italic work-row-link"
          :class="{'is-pale-text': isSkills}"
          @click="toggleSkills(false)">
          Roles
        </a>
        <span class="work-row-link">/</span>
        <a
          class="p-italic work-row-link"
          :class="{'is-pale-text': !isSkills}"
          @click="toggleSkills(true)">
          Skills
        </a>
      </div>
      <div class="work-labels">
        <Label
          class="work-row-item"
          v-for="role in roles"
          :key="role.id">
          <template slot="header">
            {{role.name}}
          </template>
        </Label>
      </div>
    </div>
    <div class="work-row">
      <div class="work-row-controls">
        <a
          class="p-italic work-row-link">
          Customers
        </a>
      </div>
      <div class="work-labels">
        <Label
          class="work-row-item is-orange"
          v-for="customer in customerList"
          :key="customer.id">
          <template slot="header">
            {{customer.name}}
          </template>
          <template slot="caption">
            {{customer.duration}}
          </template>
        </Label>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {ProjectService} from '../api/services/ProjectService';
import ProjectLabel from '../components/work/ProjectLabel/ProjectLabel.vue';
import {RoleService} from '@/api/services/RoleService';
import {CustomerService} from '@/api/services/CustomerService';
import {ICustomer} from '@/shared/interfaces/ICustomer';
import {CalendarService} from '@/shared/services/calendar.service';
export default Vue.extend({
  name: 'Work',
  components: {
    ProjectLabel
  },
  data() {
    return {
      isSkills: false,
      customers: [],
      projects: [],
      roles: []
    }
  },
  computed: {
    customerList(): ICustomer[] {
      return this.customers.map((customer: ICustomer) => ({
        ...customer,
        duration: CalendarService.convertDateToDurationString(customer.startDate, customer.endDate)
      }));
    }
  },
  mounted(): void {
    this.$bind('projects', ProjectService.getAllProjects());
    this.$bind('roles', RoleService.getAllRoles());
    this.$bind('customers', CustomerService.getAllCustomers());
  },
  methods: {
    toggleSkills (value: boolean) {
      this.isSkills = value;
    }
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
      border-bottom: 1px solid $black;

      &-item {
        width: calc(100% / 5);
        min-width: 270px;
        margin-bottom: 8em;
      }
    }

    &-labels {
      flex: 1;
      flex-wrap: wrap;
      display: flex;
      justify-content: space-between;
    }

    &-row {
      display: flex;
      padding: 2em 0;

      @media ($mobile) {
        flex-direction: column;
      }

      &-controls {
        width: 250px;
        padding-top: 2.2em;

        @media ($mobile) {
          padding: 0 0 2em 0;
        }
      }

      &-item {
        min-width: 270px;
        margin-bottom: 2em;

        @media ($mobile) {
          width: 100%;
          margin-bottom: 1em;
        }
      }

      &-link {
        font-size: $font-size-h3-min;
        cursor: pointer;
      }
    }
  }
</style>
