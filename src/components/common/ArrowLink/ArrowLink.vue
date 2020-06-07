<template>
  <router-link
    :to="{name: link}"
    class="link"
    :class="{'full-width': withArrow}"  >
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
      <SvgIcon name="arrow" />
    </div>
  </router-link>
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

    &.full-width {
      width: 100%;
    }
  }

  // dark mode {
  .dark {
    .link {
      &-section {
        color: $white;
      }
    }
  }
</style>
