<template>
  <div class="header grid">
    <div class="header-logo grid-left">
      <router-link to="/">
        <SvgIcon
          name="logo"
          width="78"
          height="79"/>
      </router-link>
    </div>
    <div class="header-content grid-main">
      <router-link to="/">
        <SvgIcon
          name="logo-name" />
      </router-link>
    </div>
    <div class="header-actions grid-right">
      <div class="header-actions-one">
        <Ball
          class="header-ball"
          :class="classRouteMap[activeRoute]"/>
      </div>
      <div class="header-actions-two"></div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Ball from './Ball.vue';
import {routeWatcher} from '@/shared/mixins/route-watch.mixin';

export default Vue.extend({
  name: 'Header',
  components: {
    Ball
  },
  mixins: [routeWatcher]
});
</script>
<style lang="scss" scoped>
  .header {
    height: $header-height;
    border-bottom: $border;

    &-logo {
      display: flex;
      align-items: center;
      justify-content: center;

      @media($tablet) {
        display: none;
      }
    }

    &-content {
      overflow: hidden;
      padding: 0 2em;
    }

    &-actions {
      display: flex;

      &-one {
        border-right: $border;
        display: flex;
        align-items: center;
        justify-content: center;

        @media ($mobile) {
          display: none;
        }
      }

      > div {
        width: 50%;
      }
    }

    &-ball {
      transition: all 0.9s;

      &.is-blue {
        background-color: $blue;
        transform: translateY(160px);

        @media ($tablet) {
          transform: translateY(140px);
        }
      }
    }
  }

  .svg-icon-logo-name {
    display: none;
    @media ($tablet) {
      display: inline;
    }

    @media ($mobile) {
      width: 200px;
    }
  }
</style>
