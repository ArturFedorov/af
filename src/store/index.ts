import Vue from 'vue';
import Vuex from 'vuex';
import ui from './ui/index';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    ui
  }
});
