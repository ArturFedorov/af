<template>
  <div class="number-step">
    <div class="number-step-content">
      <p
        class="p-italic number-step-index"
        v-if="index > 0">
        {{ index | leadingZero}}
      </p>
      <a class="h2 number-step-text">
        <slot name="text">
          Contact
        </slot>
      </a>
    </div>
    <div class="number-step-caption">
      <p class="p-italic">
        <slot name="caption">
          Let me know
        </slot>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'NumberStep',
  props: {
    index: {
      type: Number,
      default: 0
    }
  }
});
</script>

<style lang="scss" scoped>
  .number-step {
    &-item {
      display: flex;
      flex-direction: column;
      width: 100%;
      transform-origin: bottom right;

      &-caption {
        margin-right: 2em;
      }

      &-content {
        display: flex;
        align-items: flex-end;
      }

      &-secondary {
        margin-top: 1em;
        margin-left: 3.3em;
        white-space: nowrap;

        @media ($mobile) {
          display: none;
        }

        &.no-margin {
          margin-left: 0;
        }
      }

      &-text {
        line-height: 94%;
        white-space: nowrap;
      }
    }

    &-text {
      white-space: nowrap;
    }
  }
</style>
