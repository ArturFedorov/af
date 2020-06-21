<template>
  <h1
    class="heading">
    <slot></slot>
  </h1>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'BigHeading'
});
</script>

<style lang="scss" scoped>
  .heading {
    padding: 0 $building-unit-x5;
  }

  //dark mode {
  .dark {
    .heading {
      color: $white;
    }
  }
</style>
