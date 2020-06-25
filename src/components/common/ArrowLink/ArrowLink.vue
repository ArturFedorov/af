<template>
  <a
    class="link"
    :class="{'full-width': withArrow}"
    @click="$emit('click', link)">
    <div class="link-section">
      <h2>
        <slot name="text"></slot>
      </h2>
      <p class="is-small">
        <slot name="caption"></slot>
      </p>
    </div>
    <div
      class="link-section"
      v-if="withArrow">
      <SvgIcon
        class="link-icon"
        name="arrow" />
    </div>
  </a>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'ArrowLink',
  props: {
    withArrow: {
      type: Boolean,
      default: false
    },
    link: {
      type: String,
      required: false
    }
  }
});
</script>

<style lang="scss" scoped>
  .link {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding: $padding;
    transition: $default-transition;
    position: relative;
    cursor: pointer;

    @media ($mobile) {
      padding: $padding-mobile;
    }

    &.full-width {
      width: 100%;
    }

    &.is-aligned-right {
      margin-left: auto;
    }
  }

  // dark mode {
  .dark {
    .link {
      &-section {
        color: $white;
      }

      &-icon {
        fill: $white;
      }
    }
  }
</style>
