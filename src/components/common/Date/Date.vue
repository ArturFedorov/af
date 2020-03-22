<template>
  <div class="date">
    <p
      class="p-body date-month is-bold"
      :class="{'is-white': isReversedColor}">
      {{ dayMonth }}
    </p>
    <p
      class="date-year"
      :class="{'is-white': isReversedColor}">
      Twenty <span class="is-bold">{{ year }}</span>
    </p>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Date',
  props: {
    date: {
      type: Date,
      default: () => new Date()
    },
    isReversedColor: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    dayMonth(): string {
      const date = this.date as Date;
      return `${date.getDate()}.${('0' + (date.getMonth() + 1)).slice(-2)}`;
    },
    year(): string {
      return (this.date as Date)
        .getFullYear()
        .toString()
        .substr(2, 2);
    }
  }
});
</script>
<style lang="scss" scoped>
  .date {
    display: inline-block;

    &-year {
      margin: 0;
      @include fluid-type($min_width, $max_width, $font-size-base, $font-size-h3);
    }

    &-month {
      margin: 0;
      text-align: right;
    }
  }
</style>
