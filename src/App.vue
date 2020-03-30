<template>
  <div id="app" class="app">
    <Loader :color="classRouteMap[activeRoute]"/>
    <PageLoader
      :class="{'is-top-z' : showLoader}"
      :color="classRouteMap[activeRoute]"
      :startAnimation="showLoader"
      @end-animation="hideLoader"/>
    <Header />
    <div class="main grid">
      <div class="main-left grid-left"></div>
      <div
        ref="content"
        class="main-content grid-main">
        <router-view />
        <Footer
          class="main-footer"
          :color="classRouteMap[activeRoute]"/>
      </div>
      <div class="main-actions grid-right">
        <div class="main-actions-one"></div>
        <div class="main-actions-two">
          <Navigation class="main-navigation"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Header from './components/root/Header.vue';
import Loader from '@/components/root/Loader.vue';
import PageLoader from '@/components/root/PageLoader.vue';
import Navigation from './components/root/Navigation.vue';
import Footer from './components/root/Footer.vue';
import {routeWatcher} from '@/shared/mixins/route-watch.mixin';
import {loaderMixin} from '@/shared/mixins/loader.mixin';
export default Vue.extend({
  name: 'App',
  components: {
    Header,
    Loader,
    PageLoader,
    Footer,
    Navigation
  },
  mixins: [routeWatcher, loaderMixin]
});
</script>
<style lang="scss">
  .main {
    min-height: 100vh;

    &-content {
      overflow-y: auto;
      overflow-x: hidden;
      max-height: 100vh;
    }

    &-left {
      @media($tablet) {
        display: none;
      }
    }

    &-actions {
      display: flex;

      > div {
        flex: 1;
      }

      &-one {
        border-right: $border;

        @media ($mobile) {
          display: none;
        }
      }

      &-two {
        min-width: 50%;
        max-width: none;
      }
    }

    &-navigation {
      margin-top: 5em;

      @media($tablet) {
        margin-top: 3em;
      }
    }

    &-footer {
      margin-bottom: 400px;
    }
  }
</style>
