<template>
  <div class="grid-row">
    <div
      v-if="!noLeft"
      class="grid-row-section is-small with-border-right is-bottom">
      <div class="grid-row-section-cover start-animate"></div>
      <slot name="one"></slot>
    </div>
    <div
      class="grid-row-section"
      :class="{'is-aligned-right': isAlignedRight, 'is-bottom': isBottom}">
      <div class="grid-row-section-cover start-animate"></div>
      <slot name="two"></slot>
    </div>
    <div
      v-if="!noRight"
      class="grid-row-section is-small with-border-left is-bottom">
      <div class="grid-row-section-cover start-animate"></div>
      <slot name="three"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'GridRow',
  props: {
    noLeft: {
      type: Boolean,
      default: false
    },
    noRight: {
      type: Boolean,
      default: false
    },
    isAlignedRight: {
      type: Boolean,
      default: false
    },
    isBottom: {
      type: Boolean,
      default: false
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
