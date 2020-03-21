<template>
  <div id="app" class="app">
    <Header />
    <div class="main grid">
      <div class="main-left grid-left"></div>
      <div class="main-content grid-main">
        <router-view />
        <Footer class="main-footer"/>
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
import Navigation from './components/root/Navigation.vue';
import Footer from './components/root/Footer.vue';
export default Vue.extend({
  name: 'App',
  components: {
    Header,
    Footer,
    Navigation
  }
});
</script>
<style lang="scss">
  .app {

  }

  .main {
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
