<template>
  <div class="development">
    <BigHeading
      colorHint="is-black">
      <template slot="first-word">Dev</template>
      <template slot="second-word">Projects</template>
    </BigHeading>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Development'
});
</script>

<style lang="scss" scoped>
  .development {
    padding: 2em;
    border-bottom: $border;
    overflow: hidden;
  }
</style>
