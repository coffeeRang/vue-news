import Vue from 'vue';
import Vuex from 'vuex';

import mutations from './mutations.js';
import actions from './actions.js';

Vue.use(Vuex);
// Vuex : 상태관리도구 -상태란? 여러 컴포넌트간의 공유되는 데이터 속성
export const store = new Vuex.Store({
  state: {
    news: [],
    asks: [],
    jobs: []
  },
  getters: {
    fetchedAsks(state) {
      return state.asks;
    }
  },
  mutations,
  actions
})