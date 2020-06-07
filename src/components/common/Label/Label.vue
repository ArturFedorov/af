<template>
  <div class="label">
    <h2 class="is-white-text label-header">
      <slot name="header">
        Contact
      </slot>
    </h2>
    <p class="p-italic is-white-text label-caption">
      <slot name="caption">
        5 years 10 Month
      </slot>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Label',
  props: {
    hasLabel: {
      type: Boolean,
      default: false
    }
  }
});
</script>

<style lang="scss" scoped>
  .label {
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: flex-start;
    background-color: $black;
    padding: $building-unit $building-unit-x3;

    &-caption {
      font-size: $font-size-small;
    }
  }
</style>
