import {Module} from 'vuex';
import {UiMode} from '@/shared/enums/uiMode';

export interface IUIState {
  showLoader: boolean;
  showNavigation: boolean;
  uiMode: string;
}

export const SHOW_LOADER = 'ui/SHOW_LOADER';
export const IS_LIGHT_MODE = 'ui/IS_LIGHT_MODE';
export const SET_SHOW_LOADER = 'ui/SET_SHOW_LOADER';
export const SET_UI_MODE = 'ui/SET_UI_MODE';

const defaultUiMode = UiMode.LIGHT;

const uiState: Module<IUIState, {}> = {
  state: {
    showLoader: false,
    showNavigation: false,
    uiMode: UiMode.LIGHT
  },
  mutations: {
    [SET_SHOW_LOADER](state, payload) {
      state.showLoader = payload;
    },
    [SET_UI_MODE](state, payload: string) {
      state.uiMode = payload;
      localStorage.setItem('mode', payload);
    }
  },
  getters: {
    [IS_LIGHT_MODE]: state => {
      const localStoreUiMode = localStorage.getItem('mode');
      if (localStoreUiMode !== null) {
        state.uiMode = localStoreUiMode;
      } else {
        state.uiMode = defaultUiMode;
      }
      return state.uiMode === UiMode.LIGHT;
    },
    [SHOW_LOADER]: state => state.showLoader
  }
};

export default uiState;
