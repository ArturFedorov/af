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
      <div class="home-one is-red">
        <h1 class="home-number">1</h1>
        <div class="content">
          <h2 class="is-white">Hello,</h2>
          <h2 class="is-white">My name is</h2>
          <h2 class="is-white">Artur Fedorov</h2>
        </div>
      </div>
      <div class="home-two">
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
  .home {
    padding: 2em;
    border-bottom: $border;
    overflow: hidden;

    &-number {
      opacity: 0.1;
      margin-bottom: 5em;
    }

    &-header {
      line-height: 100%;

      &-wrapper {
        animation: flow 2s ease-in-out;
      }

      &-h2 {
        margin: 1em 0;
        padding-left: 10px;
      }
    }

    &-date {
      display: flex;
      justify-content: flex-end;
    }

    &-content {
      display: flex;
      flex-wrap: wrap;

      &-one {
      }

      > div {
        flex: 1;
        padding: 2em;
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
