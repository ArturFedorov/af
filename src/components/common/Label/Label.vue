<template>
  <div class="label">
    <h3 class="label-header">
      <slot name="header">
        Contact
      </slot>
    </h3>
    <p class="is-smallest label-caption">
      <slot name="caption"></slot>
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
  }

  // dark mode
  .dark {
    .label {
      * {
        color: $white;
      }
    }
  }
</style>
