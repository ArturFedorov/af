<template>
  <div id="app" class="app">
    <Header />
    <div class="main grid">
      <div class="main-left grid-left">

      </div>
      <div class="main-content grid-main">
        <router-view />
        <Footer class="main-footer"/>
      </div>
      <div class="main-actions grid-right">
        <div class="main-actions-one"></div>
        <div class="main-actions-two"></div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  import Header from './components/root/Header.vue';
  import Footer from './components/root/Footer.vue';
  export default Vue.extend({
    name: 'App',
    components: {
      Header,
      Footer
    }
  });
</script>
<style lang="scss">
  .app {

  }

  .main {
    &-content {
      overflow-y: auto;
      max-height: 100vh;
    }

    &-actions {
      display: flex;

      > div {
        flex: 1;
      }

      &-one {
        border-right: $border;
      }
    }

    &-footer {
      margin-bottom: 400px;
    }
  }
</style>
