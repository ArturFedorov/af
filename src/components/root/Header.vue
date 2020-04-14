<template>
  <div class="header">
    <a class="header-link">
      <SvgIcon
        class="header-icon"
        name="menu"
        width="40"
        height="40"/>
    </a>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import {routeWatcher} from '@/shared/mixins/route-watch.mixin';

export default Vue.extend({
  name: 'Header',
  mixins: [routeWatcher]
});
</script>
<style lang="scss" scoped>
  .header {
    display: flex;
    height: 60px;
    align-items: center;
    justify-content: flex-end;

    &-icon {
      stroke: $black;
    }
  }
</style>
