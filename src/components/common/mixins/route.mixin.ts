import Vue from 'vue';

import {AnimationService} from '@/shared/services/animation.service';
export const routeMixin = Vue.extend({
  methods: {
    goTo(routeName: string) {
      console.log(routeName);
      AnimationService.cover()
        .then(() => this.$router.push({name: routeName}));
    }
  }
});
