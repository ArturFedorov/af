<template>
  <div class="year">
    {{id}}
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {YearService} from '@/api/services/YearService';
export default Vue.extend({
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      year: {},
    }
  },
  created(): void {
    this.year = YearService.getYearById(this.id);
  }
});
</script>

<style lang="scss" scoped>

</style>
