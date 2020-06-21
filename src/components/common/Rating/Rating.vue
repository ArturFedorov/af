<template>
  <div class="rating">
    <div
      v-for="rating in ratings"
      :key="rating"
      class="rating-item"
      :class="{'is-filled': rating + 1 <= maxRating}"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Rating',
  props: {
    rating: {
      type: Number,
      required: true
    }
  },
  computed: {
    maxRating(): number {
      return this.rating > 5 ? 5 : this.rating;
    },
    ratings(): number[] {
      return Array.from(Array(5).keys())
    }
  }
})
</script>

<style lang="scss" scoped>
  .rating {
    display: flex;
    padding: $building-unit-x0_5;

    &-item {
      margin-right: 3px;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      border: $border;

      &.is-filled {
        background-color: $black;
      }
    }
  }

  // dark mode
  .dark {
    .rating {
      &-item {
        border: $border-reversed;

        &.is-filled {
          background-color: $white;
        }
      }
    }
  }
</style>
