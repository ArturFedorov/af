<template>
  <div
    class="loader">
    <div
      class="loader-wrapper"
      ref="wrapper">
      <BigHeading class="loader-header">
        Developer Designer
      </BigHeading>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {IS_LIGHT_MODE} from '@/store/ui';
export default Vue.extend({
  name: 'Loader',
  computed: {
    isLightMode(): boolean {
      return this.$store.getters[IS_LIGHT_MODE];
    }
  }
});
</script>

<style lang="scss" scoped>
  .loader {
    position: fixed;
    background-color: $white;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10;
    display: flex;
    align-items: flex-end;
    overflow: hidden;

    &-header {
      transform-origin: left bottom;
      transform: scale(7);
    }
  }

</style>
