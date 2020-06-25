import Vue from 'vue';

import {AnimationService} from '@/shared/services/animation.service';
export const routeMixin = Vue.extend({
  methods: {
    goTo(routeName: string, id?: string) {
      const options = {
        name: routeName,
        ...(id && {params: {id}})
      }

      AnimationService.cover()
        .then(() => this.$router.push(options));
    }
  }
});
