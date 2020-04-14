<template>
  <div id="app" class="app">
    <Loader v-if="false"/>
    <Header />
    <router-view />
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Header from './components/root/Header.vue';
import Loader from '@/components/root/Loader.vue';
import {routeWatcher} from '@/shared/mixins/route-watch.mixin';
export default Vue.extend({
  name: 'App',
  components: {
    Header,
    Loader
  },
  mixins: [routeWatcher]
});
</script>
<style lang="scss">
  .app {
    height: 100vh;
  }

</style>
