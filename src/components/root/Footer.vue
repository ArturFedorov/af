<template>
  <div class="footer">
    <div class="footer-logo">
      <SvgIcon name="logo-name" />
    </div>
    <div class="footer-links">
      <div class="footer-links-social">
        <a
          target="_blank"
          v-for="link in links"
          :key="link.text"
          class="h3 link with-plus footer-link"
          :class="color"
          :href="link.url">
          {{ link.text }}
        </a>
      </div>
      <div class="footer-links-email">
        <AngleButton
          text="artur.fodorov@gmail.com"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  export default Vue.extend({
    name: 'Footer',
    props: {
      color: {
        type: String,
        default: 'is-red',
        validator: value => [ 'is-black', 'is-red', 'is-blue', 'is-purple'].includes(value)
      }
    },
    data() {
      return {
        links: [{
          text: 'instagram',
          url: 'https://www.instagram.com/arturhsv/'
        },{
          text: 'linkedIn',
          url: '#'
        }, {
          text: 'facebook',
          url: 'https://www.facebook.com/artur.fedorov'
        }]
      }
    }
  });
</script>

<style lang="scss" scoped>
  $footer-height: 140px;

  .footer {
    display: flex;
    align-items: center;
    border-top: $border;
    border-bottom: $border;
    padding: 2em;
    box-sizing: border-box;

    &-link:not(:first-child) {
      margin-left: 30px;
    }

    &-links {
      display: flex;
      margin-left: auto;
      align-items: center;

      &-email {
        margin-left: $footer-height;
      }
    }
  }
</style>
