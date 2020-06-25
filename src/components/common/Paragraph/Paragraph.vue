<template>
  <div class="paragraph">
    <h3 class="paragraph-header is-underlined">
      <slot name="header"></slot>
    </h3>
    <div>
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Paragraph'
});
</script>

<style lang="scss" scoped>
  .paragraph {
    &-header {
      margin-bottom: $building-unit-x2;
    }

    &-text {
      margin-bottom: $building-unit-x2;
    }

    &.with-margin-bottom {
      margin-bottom: $building-unit-x5;
    }
  }
</style>
