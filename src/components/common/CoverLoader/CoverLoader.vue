<template>
  <div class="cover-loader">
    <SvgIcon
      class="cover-loader-icon"
      name="logo"
      width="78"
      height="79"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'CoverLoader'
});
</script>

<style lang="scss" scoped>
  .cover-loader {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: $white;
    z-index: 2;
    display: flex;
    justify-content: center;
    padding-top: 10em;
    transition: all 0.5s;

    &-icon {
      -webkit-animation: rotating 2s linear infinite;
      animation: rotating 2s linear infinite;
    }
  }
</style>
