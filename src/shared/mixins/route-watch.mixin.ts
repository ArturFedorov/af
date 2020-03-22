import Vue from 'vue';
export const routeWatcher = Vue.extend({
  data() {
    return {
      activeRoute: '',
      classRouteMap: {
        Home: 'initial',
        Work: 'is-blue',
        Years: 'is-blue',
        Year: 'is-blue'
      } as { [key: string] : string }
    }
  },
  watch: {
    '$route' (to) {
      this.activeRoute = to.name;
    }
  }
});
