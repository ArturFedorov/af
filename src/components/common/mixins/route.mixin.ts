import Vue from 'vue';

import {AnimationService} from '@/shared/services/animation.service';
export const routeMixin = Vue.extend({
  methods: {
    goTo(routeName: string) {
      AnimationService.cover()
        .then(() => this.$router.push({name: routeName}));
    }
  }
});
