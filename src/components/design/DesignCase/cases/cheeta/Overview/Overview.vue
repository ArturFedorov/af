<template>
  <div class="overview">
    <div class="overview-section is-one-forth">
      <Paragraph>
        <template slot="header">
          Challenge
        </template>
        <template slot="content">
          <p class="paragraph-text is-small">
            Name of company is associated with
            wild animal. It is generic and draws
            mental picture of an animal that is
            difficult to relate to digital sector.
          </p>
          <p class="is-small">
            Main challenge was to go away from
            this mental image and create strong
            bold visual language unique for
            the company.
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
            I created typographic logo. I wanted to create bold
            modern logo that has a strong symbol.
          </p>
          <p class="paragraph-text is-small">
            I researched many images of overviews and their habitats.
            And one day it hit me - claw marks.
          </p>
          <p class="is-small">
            I combined to “E”s in one ligature and it reminded me chetah’s claw marks.
            Based on that i have built alphabet, visual elements, animation and whole
            brand identity.
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
            Cheeta is a modern digital agency.
            <br/>
            It is a new player on the market of software
            development and digital services.
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
