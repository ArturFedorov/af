<template>
  <div
    id="app"
    class="app"
    ref="app"
    :class="{'dark': !isLightMode}">
    <div class="app-content">
      <router-view />
    </div>
    <Footer class="app-footer"/>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Footer from '@/components/root/Footer/Footer.vue';
import {routeMixin} from '@/components/common/mixins/route.mixin';
import {IS_LIGHT_MODE} from '@/store/ui';
import SmoothScrollbar from 'smooth-scrollbar';
export default Vue.extend({
  name: 'App',
  components: {
    Footer
  },
  mixins: [routeMixin],
  computed: {
    isLightMode(): boolean {
      return this.$store.getters[IS_LIGHT_MODE]
    }
  },
  mounted() {
    SmoothScrollbar.init(this.$refs.app as HTMLElement, {
      damping: 0.03,
      thumbMinSize: 15,
      // plugins:
    });
  }
});
</script>
<style lang="scss">
  .app {
    display: flex;
    background-color: $white;
    height: 100vh;
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
