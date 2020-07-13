<template>
  <div class="overview">
    <div class="overview-section is-one-forth">
      <Paragraph>
        <template slot="header">
          Challenge
        </template>
        <template slot="content">
          <p class="paragraph-text is-small">
            I had to come up with a product name
            and branding concept.
          </p>
          <p class="paragraph-text is-small">
            System  represents dynamics of people migration
            in the city over the day in a form of heat map in near real-time.
            It provides optimisations based on big data analysis.
          </p>
          <p class="is-small">
            Moreover it is a product of Cheeta digital agency.
            It has own identity but still has to preserve connection
            with company identity.
          </p>
        </template>
      </Paragraph>
    </div>

    <div class="overview-section is-one-forth">
      <Paragraph>
        <template slot="header">
          Solution
        </template>
        <template slot="content">
          <p class="paragraph-text is-small">
            I came up with short memorable name.
            It basically has no meaning but it sounds
            bold and clear.
          </p>
          <p class="paragraph-text is-small">
            For a bold name i needed a bold symbol.
            I created a typographic logo based on "FE"
            ligature. Feix analysis daily migrations of millions of people.
            Letter "I" in logo hints towards person symbol.
          </p>
        </template>
      </Paragraph>
    </div>

    <div class="overview-section is-one-forth">
      <Paragraph class="with-margin-bottom">
        <template slot="header">
          Client
        </template>
        <template slot="content">
          <p class="is-small">
            Telekom innovation laboratories (t-labs)
          </p>
        </template>
      </Paragraph>

      <Paragraph>
        <template slot="header">
          Sector
        </template>
        <template slot="content">
          <p class="is-small">
            Software development.
            Digital services.
          </p>
        </template>
      </Paragraph>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Overview'
});
</script>

<style lang="scss" scoped>
  .overview {
    display: flex;
    flex-wrap: wrap;

    @media($mobile) {
      padding: $building-unit-x2 0;
    }

    &-section {
      padding-right: $building-unit-x3;
      width: 25%;

      @media ($tablet) {
        width: 70%;
        margin-bottom: $building-unit-x8;
        padding-right: 0;

        &:last-child {
          margin-bottom: 0;
        }
      }

      @media($mobile) {
        width: 100%;
      }
    }
  }

  .dark {
    .overview {
      color: $white;
    }
  }
</style>
