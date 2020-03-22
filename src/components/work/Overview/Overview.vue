<template>
  <div class="overview">
    <div class="overview-steps">
      <h2 class="overview-header">
        Developer +
        <span class="is-blue">Designer</span>
      </h2>
      <div class="overview-steps-content">
        <NumberedStep />
        <NumberedStep>
          <template slot="number">
            02
          </template>
          <template slot="initial">
            When did i start in It?
          </template>
          <template slot="secondary">
            2013
          </template>
        </NumberedStep>
        <NumberedStep class="three">
          <template slot="number">
            03
          </template>
          <template slot="initial">
            What did i do first?
          </template>
          <template slot="secondary">
            Sales
          </template>
        </NumberedStep>
        <NumberedStep class="four">
          <template slot="number">
            04
          </template>
          <template slot="initial">
            Who am i now?
          </template>
          <template slot="secondary">
            JS developer and
            <br/> group lead
          </template>
        </NumberedStep>
        <NumberedStep class="five">
          <template slot="number">
            05
          </template>
          <template slot="initial">
            How did it happen?
          </template>
          <template slot="secondary">
            Explore below
          </template>
        </NumberedStep>
      </div>
    </div>
    <div class="overview-profile">
      <Date
        class="overview-profile-date"
        :isReversedColor="true"/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({

})
</script>

<style lang="scss" scoped>
  .overview {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    padding-left: 2em;

    @media ($mobile) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    &-header {
      margin-bottom: 3em;
      @include fluid-type($min_width, $max_width, $font-size-h3, $font-size-h2);
    }

    &-steps {
      grid-column: 1 / 3;
      padding: 1em 0;
      animation: opacity 1.5s ease-in-out;

      &-content {
        display: grid;
        grid-gap: 2em;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        grid-template-rows: repeat(3, minmax(0, 1fr));

        @media ($mobile) {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
      }
    }

    &-profile {
      grid-column: 3 / 3;
      background: $black bottom url('../../../assets/images/profile-work.png') no-repeat;
      background-size: contain;
      padding: 1em 2em;
      animation: opacity 1.5s ease-in-out;

      &-date {
        width: 100%;
        text-align: right;
      }

      @media ($mobile) {
        display: none;
      }
    }
  }

  .three {
    grid-area: 2 / 2;
    @media ($mobile) {
      grid-area: 2 / 1;
    }
  }

  .four {
    grid-area: 2 / 3;
    @media ($mobile) {
      grid-area: 2 / 2;
    }
  }

  .five {
    grid-area: 3 / 1;
  }

</style>
