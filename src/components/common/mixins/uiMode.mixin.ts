import Vue from 'vue';
import {IS_LIGHT_MODE} from '@/store/ui';

export const uiMode = Vue.extend({
  computed: {
    isLightMode(): boolean {
      return this.$store.getters[IS_LIGHT_MODE];
    }
  }
});
