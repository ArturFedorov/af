<template>
  <div class="work">
    <div class="work-overview">
      <Overview />
    </div>
    <div class="work-menu">
      <AngleButton
        class="work-menu-button"
        text="Years"
        :isInactive="isButtonInactive(routes.YEARS)"
        @click="goTo(routes.YEARS)"/>
      <AngleButton
        class="work-menu-button"
        text="Overview"
        :isInactive="isButtonInactive(routes.OVERVIEW)"
        @click="goTo(routes.OVERVIEW)"/>
      <AngleButton
        class="work-menu-button"
        text="Skills"
        :isInactive="isButtonInactive(routes.SKILLS)"
        @click="goTo(routes.SKILLS)"/>
    </div>
    <div class="work-content">
      <router-view name="work" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Overview from '@/components/work/Overview/Overview.vue';
import {Routes} from '@/router';
export default Vue.extend({
  name: 'Work',
  components: {
    Overview
  },
  data() {
    return {
      routes: Routes
    }
  },
  methods: {
    isButtonInactive(route: string): boolean {
      return this.$route.name !== route;
    },
    goTo(route: string) {
      this.$router.push({ name: route });
    }
  }
});
</script>
<style lang="scss" scoped>
  .work {
    &-menu {
      display: flex;
      border-top: $border;
      padding: 3em 2em;
      align-items: center;
      justify-content: space-between;
    }
  }
</style>
