<template>
  <div class="numbered-step">
    <h1 class="numbered-step-number">
      <slot name="number">01</slot>
    </h1>
    <h3 class="h3-thin">
      <slot name="initial">Where do i work?</slot>
    </h3>
    <h3>
      <slot name="secondary">T Systems</slot>
    </h3>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'NumberedStep'
});
</script>

<style lang="scss" scoped>
  .numbered-step {
    &-number {
      line-height: 100%;
    }
  }
</style>
