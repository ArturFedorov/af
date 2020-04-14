<template>
  <div class="header">
    <a
      class="header-link"
      @click="toggleNavigation">
      <SvgIcon
        v-if="!showNavigation"
        class="header-icon"
        name="menu"
        width="40"
        height="40"/>
      <SvgIcon
        v-if="showNavigation"
        class="header-icon-close"
        name="close"
        width="40"
        height="40"/>
    </a>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import {SET_SHOW_NAVIGATION, SHOW_NAVIGATION} from '@/store/ui';

export default Vue.extend({
  name: 'Header',
  computed: {
    showNavigation(): boolean {
      return this.$store.getters[SHOW_NAVIGATION];
    }
  },
  methods: {
    toggleNavigation() {
      this.$store.commit(SET_SHOW_NAVIGATION, !this.showNavigation);
    }
  }
});
</script>
<style lang="scss" scoped>
  .header {
    display: flex;
    height: 80px;
    align-items: center;
    justify-content: flex-end;
    position: relative;
    z-index: 8;

    &-link {
      cursor: pointer;
    }

    &-icon {
      stroke: $black;

      &-close {
        stroke: $white;
      }
    }
  }
</style>
