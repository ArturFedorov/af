<template>
  <div
    class="button"
    :class="{'is-black': isReversed}"
    @click="$emit('click')">
    <SvgIcon
      class="button-icon"
      name="arrow-flat"/>
    <a>
      <h2 :class="{'is-white-text': isReversed}">
        <slot></slot>
      </h2>
    </a>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  export default Vue.extend({
    name: 'Button',
    props: {
      isReversed: {
        type: Boolean,
        default: false
      }
    }
  });
</script>

<style lang="scss" scoped>
  .button {
    display: flex;
    background-color: $white;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 100%;
    width: 100%;
    transition: $default-transition;

    &.is-black {
      background-color: $black;

      .button-icon {
        fill: $white;
      }
    }

    &-icon {
      position: absolute;
      top: 0;
      left: 0;
      transform: rotate(45deg);
    }
  }
</style>
