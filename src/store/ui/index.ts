import {Module} from 'vuex';

export interface IUIState {
  showLoader: boolean;
}

export const SHOW_LOADER = 'ui/SHOW_LOADER';
export const SET_SHOW_LOADER = 'ui/SET_SHOW_LOADER';

const uiState: Module<IUIState, {}> = {
  state: {
    showLoader: false
  },
  mutations: {
    [SET_SHOW_LOADER](state, payload) {
      state.showLoader = payload;
    }
  },
  getters: {
    [SHOW_LOADER]: state => state.showLoader
  }
};

export default uiState;
