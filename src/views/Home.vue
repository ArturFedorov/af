<template>
  <div>
    <div class="home">
      <div class="home-header-wrapper">
        <h1 class="home-header h0">Artur</h1>
        <h1 class="home-header h0">Fedorov</h1>
      </div>
      <h2 class="home-header-h2">
        Developer +
        <span class="is-red">
        Designer
      </span>
      </h2>
      <div class="home-date">
        <Date />
      </div>
    </div>
    <div class="home-content">
      <div class="home-item home-one is-red">
        <h1 class="home-number">1</h1>
        <div class="content">
          <h2 class="is-white">Hello,</h2>
          <h2 class="is-white">My name is</h2>
          <h2 class="is-white">Artur Fedorov</h2>
        </div>
      </div>
      <div class="home-item home-two">
        <h1 class="home-number">2</h1>
        <div>
          <h2>I am</h2>
          <h2>
            developer +
            <span class="is-red">
              designer
            </span>
          </h2>
          <h2>based in Saint-Petersburg</h2>
        </div>
      </div>
      <div class="home-item home-three">
        <h1 class="home-number">3</h1>
        <div>
          <h2>I am passionate about</h2>
          <h2>web development, design,</h2>
          <h2>grids, Swiss typography</h2>
          <h2>
            and
            <span class="is-red">
              Bauhaus
            </span>
          </h2>
        </div>
      </div>
      <div class="home-item home-four is-black">
        <h1 class="home-number is-white">4</h1>
        <div>
          <h2 class="is-white">
            development +
            <span class="is-red">design</span>
          </h2>
          <h2 class="is-white">is my vision of</h2>
          <h2 class="is-white">Bauhaus principle</h2>
          <h2 class="home-text underlined is-white">
            Forms follows Function
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { db } from '@/api/db';
export default Vue.extend({
  name: 'Home',
  data() {
    return {
      years: []
    };
  },
  firestore: {
    years: db.collection('years')
  }
});
</script>
<style lang="scss" scoped>
  $min_width: 320px;
  $max_width: 1200px;

  .home {
    padding: 2em;
    border-bottom: $border;
    overflow: hidden;

    &-number {
      opacity: 0.1;
      margin-bottom: 5em;

      @media ($tablet) {
        margin-bottom: 7em;
      }

      @media ($mobile) {
        margin-bottom: 2em;
      }
    }

    &-item {
      h2 {
        @include fluid-type($min_width, $max_width, $font-size-h3, $font-size-h2);
      }
    }

    &-text {
      &.underlined {
        &:after {
          @include fluid-type($min_width, $max_width, $font-size-h2, $font-size-h0);
        }
      }
    }

    &-two {
      border-bottom: $border;
    }

    &-four {
      background: $black center url('../assets/images/profile.png') no-repeat;
      background-size: cover;
    }

    &-header {
      line-height: 100%;
      @include fluid-type($min_width, $max_width, $font-size-h1, $font-size-h0);

      &-wrapper {
        animation: flow 2s ease-in-out;
      }

      &-h2 {
        margin: 1em 0;
        padding-left: 10px;
        @include fluid-type($min_width, $max_width, $font-size-h3, $font-size-h1);

        @media ($mobile) {
          padding-left: 0;
          margin-bottom: 2em;
        }
      }
    }

    &-date {
      display: flex;
      justify-content: flex-end;
    }

    &-content {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);

      @media($tablet) {
        grid-template-columns: repeat(1, 1fr);
      }

      &-one {
      }

      > div {
        padding: 2em;

        @media ($mobile) {
          padding: 1em 2em;
        }
      }
    }
  }

  @keyframes flow {
    from {
      margin-top: -700px;
    }

    to {
      margin-top: 0;
    }
  }
</style>
