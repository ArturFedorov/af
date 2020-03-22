<template>
  <div class="work">
    <div class="work-overview">
      <Overview />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Overview from '@/components/work/Overview/Overview.vue';
export default Vue.extend({
  name: 'Work',
  components: {
    Overview
  }
});
</script>
<style lang="scss" scoped>
  .work {

  }
</style>
