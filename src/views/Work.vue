<template>
  <div class="work">
    <GridRow>
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
          class="work-section scale"
          ref="wrapper">
          <div ref="contact">
            <BigHeading>T–Systems</BigHeading>
          </div>
        </div>
      </template>
      <template slot="three">
        <ArrowLink
          class="arrow-link"
          link="github">
          <template slot="text">April 2013-now</template>
          <template slot="caption">7 years</template>
        </ArrowLink>
      </template>
    </GridRow>

    <GridRow
      :noRight="true"
      v-for="(projects, index) in chunkedProjects"
      :key="index">
      <template
        slot="one">
        <ArrowLink class="work-subheader">
          <template slot="text">
            {{index === chunkedProjects.length -1 ? 'projects': ''}}
          </template>
        </ArrowLink>
      </template>
      <template slot="two">
          <div
            v-if="projects"
            class="work-projects">
            <ProjectLabel
              class="work-projects-item"
              v-for="project in projects"
              :key="project.id"
              :project="project"/>
          </div>
      </template>
    </GridRow>

    <GridRow
      :noRight="true"
      :isBottom="true"
      v-for="(roles, index) in chunkedRoles"
      :key="index">
      <template
        slot="one">
        <ArrowLink class="work-subheader">
          <template slot="text">
            {{index === chunkedRoles.length -1 ? 'roles': ''}}
          </template>
        </ArrowLink>
      </template>
      <template slot="two">
        <div
          v-if="roles"
          class="work-projects">
          <Label
            class="work-projects-item"
            v-for="role in roles"
            :key="role.id">
            <template slot="header">{{role.name}}</template>
          </Label>
        </div>
      </template>
    </GridRow>
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
import {uiMode} from '@/components/common/mixins/uiMode.mixin';
import {routeMixin} from '@/components/common/mixins/route.mixin';
import {AnimationService} from '@/shared/services/animation.service';
import {IProject} from '@/shared/interfaces/IProject';
import {ArrayUtil} from '@/shared/utils/array.util';
import {Routes} from '@/router';
import {DefaultValues} from '@/components/work/DefaultValues';
import {IRole} from '@/shared/interfaces/IRole';
export default Vue.extend({
  name: 'Work',
  mixins: [uiMode, routeMixin],
  components: {
    ProjectLabel
  },
  data() {
    return {
      Routes,
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
    },
    chunkedProjects(): IProject[][] {
      return this.projects.length
        ? ArrayUtil.chunkArray(this.projects, 4)
        : [[DefaultValues.projects[0]],[DefaultValues.projects[1]]];
    },
    chunkedRoles(): IRole[][] {
      return this.roles.length
        ? ArrayUtil.chunkArray(this.roles, 4)
        : [[DefaultValues.roles[0]],[DefaultValues.roles[1]]];
    }
  },
  mounted(): void {
    this.$bind('projects', ProjectService.getAllProjects());
    this.$bind('roles', RoleService.getAllRoles());
    this.$bind('customers', CustomerService.getAllCustomers());


    const contact = this.$refs.contact as HTMLElement;
    let wrapper = this.$refs.wrapper as HTMLElement;
    wrapper = AnimationService.appenCloneToParrent(wrapper, contact, 6);
    AnimationService.runningTimeline(wrapper, -wrapper.offsetWidth, 30);
    AnimationService.removeCover();
  }
});
</script>

<style lang="scss" scoped>
  .work {
    position: relative;

    &-section {
      display: flex;
    }

    &-subheader {
      margin-left: auto;
    }

    &-projects {
      display: flex;
      padding: $padding;
      width: 100%;

      &-item {
        width: 25%;
      }
    }
  }
</style>
