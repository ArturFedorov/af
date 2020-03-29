import Vue from 'vue';
import {Routes} from '@/router';
export const routeWatcher = Vue.extend({
  data() {
    return {
      activeRoute: '',
      classRouteMap: {
        Home: 'initial',
        Work: 'is-blue',
        Years: 'is-blue',
        Year: 'is-blue',
        Design: 'is-purple',
        Development: 'is-black',
        Contact: 'is-orange'
      } as { [key: string] : string }
    }
  },
  watch: {
    '$route' (to) {
      this.activeRoute = to.name;
      const exceptions = [Routes.YEAR];
      if(this.$refs.content && !exceptions.includes(to.name)) {
        (this.$refs.content as Element).scrollTop = 0;
      }
    }
  }
});
