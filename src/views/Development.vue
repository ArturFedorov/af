<template>
  <div class="development">
    <BigHeading
      colorHint="is-black"
      :class="{'is-white' : showLoader}">
      <template slot="first-word">Dev</template>
      <template slot="second-word">Projects</template>
    </BigHeading>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {routeWatcher} from '@/shared/mixins/route-watch.mixin';
import {loaderMixin} from '@/shared/mixins/loader.mixin';
export default Vue.extend({
  name: 'Development',
  mixins: [routeWatcher, loaderMixin]
});
</script>

<style lang="scss" scoped>
  .development {
    padding: 2em;
    border-bottom: $border;
    overflow: hidden;
  }
</style>
