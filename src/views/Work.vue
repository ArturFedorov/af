<template>
  <div class="work">
    <GridRow :mobileHidden="true">
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
        </ArrowLink>
      </template>
    </GridRow>

    <!--mobile visible-->
    <GridRow
      :mobileHiddenMain="true"
      class="work-section-mobile">
      <template slot="one">
        <Button
          class="is-flipped"
          :isReversed="!isLightMode"
          @click="goTo(Routes.HOME)">
          home
        </Button>
      </template>
      <template slot="three">
        <ArrowLink
          class="arrow-link"
          link="github">
          <template slot="text">April 2013-now</template>
        </ArrowLink>
      </template>
    </GridRow>

    <GridRow
      :noRight="true"
      :mobileHidden="true"
      v-for="(projects, index) in chunkedProjects"
      :key="`project${index}`">
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
      :mobileHidden="true"
      v-for="(roles, index) in chunkedRoles"
      :key="`role${index}`">
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
            <template slot="caption">{{role.duration}}</template>
          </Label>
        </div>
      </template>
    </GridRow>

    <GridRow
      :noRight="true"
      :isBottom="true"
      :mobileHidden="true"
      v-for="(customers, index) in chunkedCustomers"
      :key="`customer${index}`">
      <template
        slot="one">
        <ArrowLink class="work-subheader">
          <template slot="text">
            {{index === chunkedCustomers.length -1 ? 'customers': ''}}
          </template>
        </ArrowLink>
      </template>
      <template slot="two">
        <div
          v-if="customers"
          class="work-projects">
          <Label
            class="work-projects-item"
            v-for="customer in customers"
            :key="customer.id">
            <template slot="header">{{customer.name}}</template>
          </Label>
        </div>
      </template>
    </GridRow>

    <GridRow
      :noRight="true"
      :isBottom="true"
      :mobileHidden="true"
      v-for="(technologies, index) in chunkedTechnologies"
      :key="`technology${index}`">
      <template
        slot="one">
        <ArrowLink class="work-subheader">
          <template slot="text">
            {{index === chunkedTechnologies.length -1 ? 'skills': ''}}
          </template>
        </ArrowLink>
      </template>
      <template slot="two">
        <div
          v-if="technologies"
          class="work-projects">
          <Label
            class="work-projects-item"
            v-for="technology in technologies"
            :key="technology.id">
            <template slot="header">{{technology.name}}</template>
            <template slot="caption">
              <Rating
                v-if="technology.rating"
                :rating="technology.rating" />
            </template>
          </Label>
        </div>
      </template>
    </GridRow>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {ProjectService} from '@/api/services/ProjectService';
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
import {TechnologyService} from '@/api/services/TechnologyService';
import {ITechnology} from '@/shared/interfaces/ITechnology';
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
      roles: [],
      technologies: []
    }
  },
  computed: {
    customerList(): ICustomer[] {
      return this.customers.map((customer: ICustomer) => ({
        ...customer,
        duration: CalendarService.convertDateToDurationString(customer.startDate, customer.endDate)
      }));
    },
    rolesList(): IRole[] {
      return this.roles.map((role: IRole) => ({
        ...role,
        duration: CalendarService.convertDateToDurationString(role.startDate, role.endDate)
      }));
    },
    chunkedProjects(): IProject[][] {
      return this.projects.length
        ? ArrayUtil.chunkArray(this.projects, 4)
        : [[DefaultValues.projects[0]],[DefaultValues.projects[1]]];
    },
    chunkedRoles(): IRole[][] {
      return this.rolesList.length
        ? ArrayUtil.chunkArray(this.rolesList, 4)
        : [[DefaultValues.roles[0]],[DefaultValues.roles[1]]];
    },
    chunkedCustomers(): ICustomer[][] {
      return this.customerList.length
        ? ArrayUtil.chunkArray(this.customerList, 4)
        : [[DefaultValues.customers[0]],[DefaultValues.customers[1]]];
    },
    chunkedTechnologies(): ITechnology[][] {
      return this.technologies.length
        ? ArrayUtil.chunkArray(this.technologies, 4)
        : [[DefaultValues.technologies[0]],
          [DefaultValues.technologies[1]],
          [DefaultValues.technologies[2]],
          [DefaultValues.technologies[3]]];
    }
  },
  mounted(): void {
    this.$bind('projects', ProjectService.getAllProjects());
    this.$bind('roles', RoleService.getAllRoles());
    this.$bind('customers', CustomerService.getAllCustomers());
    this.$bind('technologies', TechnologyService.getAllTechnologies());


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

      @media ($tablet) {
        height: 100%;
        align-items: center;
      }

      &-mobile {
        display: none;

        @media ($mobile) {
          display: flex;
        }
      }
    }

    &-subheader {
      margin-left: auto;
    }

    &-projects {
      display: flex;
      padding: $padding;
      width: 100%;

      @media ($desktop) {
        overflow-x: auto;
      }

      @media ($mobile) {
        padding: $building-unit-x5;
        flex-direction: column;
        overflow-x: hidden;
      }

      &-item {
        width: 25%;

        @media ($desktop) {
          min-width: 250px;
        }

        @media ($mobile) {
          width: 100%;

          &:not(:last-child) {
            margin-bottom: $building-unit-x8;
          }
        }
      }
    }
  }

  .heading {
    @media ($tablet) {
      font-size: 120px;
    }
  }
</style>
