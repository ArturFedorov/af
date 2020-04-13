<template>
  <div class="header grid">

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
  }
</style>
