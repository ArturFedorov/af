<template>
  <div class="project">
    <div class="project-header">
      <h2>{{ project.name }}</h2>
      <h1 class="project-number">{{ orderNumberString }}</h1>
    </div>
    <div class="project-content">
      <!---- Section divider ---->
      <div
        class="project-section"
        v-if="project.description">
        <h4 class="h4-bold">
          Description
        </h4>
        <p class="p-body">
          {{ project.description }}
        </p>
      </div>
      <!---- Section divider ---->
      <div
        class="project-section"
        v-if="project.customers">
        <h4 class="h4-bold">
          Customers
        </h4>
        <div class="project-section-content">
          <a
            target="_blank"
            v-for="customer in project.customers"
            :key="customer"
            class="h3 link is-blue p-body project-section-link">
            {{ customer }}
          </a>
        </div>
      </div>
      <!---- Section divider ---->
      <div
        class="project-section"
        v-if="project.technologies">
        <h4 class="h4-bold">
          Technologies
        </h4>
        <div class="project-section-content">
          <a
            target="_blank"
            v-for="technology in project.technologies"
            :key="technology.id"
            class="h3 link is-black p-body project-section-link">
            {{ technology.name }}
          </a>
        </div>
      </div>
      <!---- Section divider ---->
      <div
        class="project-section"
        v-if="project.roles || project.responsibilities">
        <h4 class="h4-bold">
          Role and responsibilities
        </h4>
        <div class="project-section-content">
          <a
            target="_blank"
            v-for="role in project.roles"
            :key="role.id"
            class="h3 link is-blue p-body project-section-link">
            {{ role.name }}
          </a>
        </div>
        <div class="project-section-content">
          <a
            target="_blank"
            v-for="responsibility in project.responsibilities"
            :key="responsibility"
            class="h3 link is-black p-body project-section-link">
            {{ responsibility }}
          </a>
        </div>
      </div>
      <!---- Section divider ---->
      <div
        class="project-section"
        v-if="project.years">
        <h4 class="h4-bold">
          Also in
        </h4>
        <div class="project-section-content">
          <AngleButton
            class="project-section-link"
            v-for="year in project.years"
            :key="year"
            :text="year"
            :isInactive="true"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    project: {
      required: true
    },
    orderNumber: {
      type: Number,
      default: 1
    }
  },
  computed: {
    orderNumberString(): string {
      return this.orderNumber < 10 ? `0${this.orderNumber}` : this.orderNumber.toString();
    }
  }
});
</script>

<style lang="scss" scoped>
  .project {
    &-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2em;
    }

    &-number {
      opacity: 0.2;
    }

    &-section {
      margin-bottom: 3em;

      &-link {
        margin-right: 1.5em;

        @media ($mobile) {
          margin-right: 0;
          margin-bottom: 0.5em;
        }
      }

      .h4-bold {
        margin-bottom: 1.5em;
      }

      &-content {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 1em;

        @media ($mobile) {
          flex-direction: column;
        }
      }
    }
  }
</style>
