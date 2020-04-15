<template>
  <div id="app" class="app">
    <custom-cursor
      :targets="['CANVAS', 'a', 'button', 'svg', 'use', 'SVGAnimatedString']"
      :circleColor="'#A009F0'"
      :circleColorHover="'#A009F0'"
      :dotColorHover="'#A009F0'"
      :hoverSize="1.8"></custom-cursor>
    <Loader v-if="false"/>
    <Header />
    <Navigation v-if="showNavigation"/>
    <router-view />
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Header from './components/root/Header.vue';
import Loader from '@/components/root/Loader.vue';
import Navigation from '@/components/root/Navigation.vue';
import {routeWatcher} from '@/shared/mixins/route-watch.mixin';
import {SHOW_NAVIGATION} from '@/store/ui';
export default Vue.extend({
  name: 'App',
  components: {
    Header,
    Loader,
    Navigation
  },
  mixins: [routeWatcher],
  computed: {
    showNavigation(): boolean {
      return this.$store.getters[SHOW_NAVIGATION];
    }
  }
});
</script>
<style lang="scss">
  .app {
    height: 100vh;
  }

</style>
