<template>
  <div class="grid-row">
    <div class="grid-row-section-cover start-animate"></div>
    <div
      v-if="!noLeft"
      class="grid-row-section is-small is-bottom"
      :class="{'with-border-right': withBorder, 'mobile-hidden': mobileHidden, 'tablet-hidden': tabletHidden }">
      <slot name="one"></slot>
    </div>
    <div
      class="grid-row-section"
      :class="{'is-aligned-right': isAlignedRight, 'is-bottom': isBottom, 'mobile-hidden': mobileHiddenMain}">
      <slot name="two"></slot>
    </div>
    <div
      v-if="!noRight"
      class="grid-row-section is-small is-bottom"
      :class="{'with-border-left': withBorder, 'mobile-hidden': mobileHidden,
       'no-border-mobile': mobileHiddenMain, 'tablet-hidden': tabletHidden}">
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
    },
    withBorder: {
      type: Boolean,
      default: true
    },
    mobileHidden: {
      type: Boolean,
      default: false
    },
    mobileHiddenMain: {
      type: Boolean,
      default: false
    },
    tabletHidden: {
      type: Boolean,
      default: false
    },
  }
})
</script>
