<template>
  <div class="overview">
    <div class="overview-steps">
      <h2 class="overview-header animate">
        Developer +
        <span class="is-blue">Designer</span>
      </h2>
      <div class="overview-steps-content">
        <NumberedStep class="animate"/>
        <NumberedStep class="animate">
          <template slot="number">
            02
          </template>
          <template slot="initial">
            When did i start in Tech?
          </template>
          <template slot="secondary">
            2013
          </template>
        </NumberedStep>
        <NumberedStep class="three animate">
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
        <NumberedStep class="four animate">
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
        <NumberedStep class="five animate">
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
    <div class="overview-profile animate">
      <Date
        class="overview-profile-date"
        :isReversedColor="true"/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {AnimationService} from '@/shared/services/animation.service';
export default Vue.extend({
  mounted(): void {
    AnimationService.tweenLite.from('.animate', {
      delay: 1,
      duration: 1.5,
      opacity: 0,
      y: 20,
      stagger: 0.2
    });
  }
})
</script>

<style lang="scss" scoped>
  .overview {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    padding-left: 2em;

    @media ($tablet) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    &-header {
      margin-bottom: 3em;
      @include fluid-type($min_width, $max_width, $font-size-h3, $font-size-h2);
    }

    &-steps {
      grid-column: 1 / 3;
      padding: 1em 0;

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

      &-date {
        width: 100%;
        text-align: right;
      }

      @media ($tablet) {
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
