<template>
  <div class="button">
    <div
      class="box"
      :class="{ 'is-inactive': isInactive }">
      <div class="corner top left"></div>
      <div class="corner top right"></div>
      <div class="corner bottom left"></div>
      <div class="corner bottom right"></div>
    </div>
    <a
      class="h3 button-link"
      :class="{ 'is-inactive': isInactive }"
      @click="clickLink">
      {{ text }}
    </a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'AngleButton',
  props: {
    text: {
      type: String,
      required: true
    },
    isInactive: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    clickLink() {
      this.$emit('click');
    }
  }
});
</script>

<style lang="scss" scoped>
  .button {
    position: relative;
    display: flex;
    align-items: center;

    &-icon {}

    &-link {
      cursor: pointer;
      display: inline-block;
      margin-left: 15px;
      position: relative;

      &.is-inactive {
        font-weight: $font-light;
      }
    }
  }

  .box {
    width: 50px;
    height: 50px;
    position: absolute;

    &.is-inactive {
      > div.corner {
        border-width: 2px;
      }
    }
  }

  .box > div.corner {
    display: block;
    position: absolute;
    width: 50px;
    height: 30px;
  }

  .top {
    top: 0;
    border-top-style: solid;
  }

  .bottom {
    bottom: 0;
    border-bottom-style: solid;
  }

  .left {
    left: 0;
    border-left-style: solid;
  }

</style>
