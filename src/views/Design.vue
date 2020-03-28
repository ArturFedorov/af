<template>
  <div class="design">
    <BigHeading
      colorHint="is-purple">
      <template slot="first-word">Design</template>
      <template slot="second-word">Projects</template>
    </BigHeading>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Design'
});
</script>

<style lang="scss" scoped>
  .design {
    padding: 2em;
    border-bottom: $border;
    overflow: hidden;
  }
</style>
