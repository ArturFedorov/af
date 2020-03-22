<template>
    <div class="years">
      <Year
        v-for="year in years"
        :key="year.id"
        :year="year"
        :styling="yearBorderMap[year.year]"/>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {IYear} from '@/components/work/Years/IYear';
import {YearService} from '@/api/services/YearService';
import Year from './Year/Year.vue';
export default Vue.extend({
  components: {
    Year
  },
  data() {
    return {
      years: [] as IYear[],
      yearBorderMap: {
        2020: ['left-top', 'is-reversed', 'is-blue-text', 'is-bottom'],
        2019: ['right-bottom', 'is-top'],
        2018: ['right-bottom', 'is-middle'],
        2017: ['left-top', 'is-reversed', 'is-clockwise', 'is-bottom'],
        2016: ['right-bottom', 'is-blue-bg', 'is-counter-clockwise', 'is-top'],
        2015: ['right-bottom', 'is-clockwise', 'is-middle'],
        2014: ['left-top', 'is-reversed', 'is-counter-clockwise', 'is-bottom'],
        2013: ['right-bottom', 'is-clockwise', 'is-top'],
        2012: ['right-bottom', 'is-counter-clockwise', 'is-middle']
      }
    }
  },
  firestore: {
    years: YearService.getAllYears()
  }
});
</script>

<style lang="scss" scoped>
  .years {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));

    @media ($tablet) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media ($mobile) {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
  }

</style>
