<template>
  <div class="overview">
    <div class="overview-section is-one-forth">
      <Paragraph>
        <template slot="header">
          Challenge
        </template>
        <template slot="content">
          <p class="paragraph-text is-small">
            One2nd is a New type of online services where artists can get
            professional support in recording & distribution,
            promoting music, get funding for projects.
            Where investors can find a project to invest in, using
            standard methods and cryptocurrency.
          </p>
          <p class="is-small">
            Main challenge was to find a unique yet familiar identity. Music industry
            is filled with brands and identities. New identity had to be
            outstanding and in the same time belong to a big music family.
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
            I used 4 stylescapes to find a direction.
            <br />I gathered four styles: bold red, typographic,
            retro, ultramodern. <br/>
            Together with customer we decided to go with "bold red up–to–date retro".
          </p>
          <p class="paragraph-text is-small">
            I have built main symbol from a vinyl record. <br/>
            But i tried to imagine how it could look like nowadays.
          </p>
          <p class="is-small">
            All interactions on website are also build based on vinyl record.
            Imagine how you pull it out of a mint condition cover.
            This movement became a basis of all website's transitions and
            interactions. Same goes with posters. You can see this layers below.
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
            Startup. <br/>
            Music industry
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
