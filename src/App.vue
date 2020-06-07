<template>
  <div
    id="app"
    class="app"
    :class="{'dark': !isLightMode}">
    <Loader v-if="false"/>
    <router-view />
    <Footer class="app-footer"/>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Footer from '@/components/root/Footer/Footer.vue';
import Loader from '@/components/root/Loader.vue';
import {routeWatcher} from '@/components/common/mixins/route-watch.mixin';
import {IS_LIGHT_MODE} from '@/store/ui';
export default Vue.extend({
  name: 'App',
  components: {
    Footer,
    Loader
  },
  mixins: [routeWatcher],
  computed: {
    isLightMode(): boolean {
      return this.$store.getters[IS_LIGHT_MODE]
    }
  }
});
</script>
<style lang="scss">
  .app {
    display: flex;
    background-color: $white;
    min-height: 100vh;
    flex-direction: column;
    transition: $default-transition;

    &-footer {
      margin-top: auto;
    }

    &.dark {
      background-color: $black;
    }
  }
</style>
