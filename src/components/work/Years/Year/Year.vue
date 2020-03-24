<template>
  <div
    class="year"
    :class="styling"
    @mouseover="isHovered = true"
    @mouseout="isHovered = false">
    <div
      class="year-content"
      :class="styling">
      <h1
        class="h0 year-text"
        :class="[styling, { 'is-hovered': isHovered}]">
        {{ year.year }}
      </h1>
      <router-link
        :to="{ name: 'Year', params: {id: year.id } }"
        class="h3-light year-link">
        Details
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {IYear} from '@/components/work/Years/IYear';
export default Vue.extend({
  name: 'Year',
  props: {
    year: {
      type: Object as () => IYear,
      required: true
    },
    styling: {
      type: Array as () => string[],
      default: () => ['left-bottom']
    }
  },
  data() {
    return {
      isHovered: false
    }
  }
})
</script>

<style lang="scss" scoped>
  $thick-border: 33px solid $black;
  $thick-border-blue: 33px solid $blue;
  $stroke-offset: 40%;

  @mixin position() {
    content: '';
    position: absolute;
    width: 50%;
    height: 1px;
    border-bottom: $thick-border;

    @media ($tablet) {
      border-width: 25px;
    }

    @media ($mobile) {
      border-width: 15px;
    }
  }

  .year {
    border-top: $border;
    border-left: $border;
    overflow: hidden;
    position: relative;
    height: 750px;

    &.is-blue-bg {
      background-color: $blue;
    }

    @media ($tablet) {
      height: 700px;
      border-left: 0;
      border-right: $border;

      /* One before last one */
      &:nth-last-child(2) {
        border-bottom: $border;
        border-right: 0;
      }
    }

    @media ($mobile) {
      height: 550px;
      border-left: 0;
      border-right: 0;

      &:last-child {
        border-top: 0;
      }
    }

    &-content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: absolute;

      &.is-reversed {
        flex-direction: column-reverse;
      }

      &.is-clockwise {
        transform: rotate(15deg);
      }

      &.is-counter-clockwise {
        transform: rotate(-15deg);
      }

      /* content position */
      &.is-bottom {
        bottom: 0;
        left: -10%;

        .year-link {
          margin-bottom: 40%;
          margin-left: 40%;
        }
      }

      &.is-top {
        top: 0;
        right: -5%;

        .year-link {
          margin-top: 40%;
          margin-left: 50%;
        }
      }

      &.is-middle {
        top: 35%;
        right: -10%;

        .year-link {
          margin-top: 40%;
          margin-left: 50%;
        }
      }
    }

    &-link {
      display: inline-block;
      color: $black;
    }

    &-text {
      position: relative;
      line-height: 73%;
      transition: all 1s;

      &.is-hovered {
        transform: scale(1.2) rotate(5deg);
      }

      &.is-blue-text {
        color: $blue;

        &::before {
          border-bottom-color: $blue !important;
        }
      }

      /* border position */
      &.left-bottom {
        &::after {
          @include position;
          bottom: -$stroke-offset;
          left: 0;
        }
      }

      &.left-top {
        &::before {
          @include position;
          left: 0;
          top: -$stroke-offset;
        }
      }

      &.right-bottom {
        &::after {
          @include position;
          bottom: -$stroke-offset;
          right: 0;
        }
      }

      &.right-top {
        &::after {
          @include position;
          top: -$stroke-offset;
          right: 0;
        }
      }
    }
  }
</style>
