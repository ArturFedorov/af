import Vue from 'vue';
import {SET_SHOW_LOADER, SHOW_LOADER} from '@/store/ui';
export const loaderMixin = Vue.extend({
  computed: {
    showLoader(): boolean {
      return this.$store.getters[SHOW_LOADER];
    }
  },
  methods: {
    hideLoader() {
      this.$store.commit(SET_SHOW_LOADER, false);
    }
  }
});
