import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    weightData:  [],
  },
  mutations: {
    ADD_WEIGHT(state,  weight) {
      state.weightData.push(weight);
      localStorage.setItem('weightData', JSON.stringify(state.weightData));
    },
    INITIALIZE_WEIGHT_DATA(state) {
      const data = JSON.parse(localStorage.getItem('weightData'));
      if (data) {
        state.weightData = data;
      }
    },
  },
  actions: {
    initializeWeightData({ commit }) {
      commit('INITIALIZE_WEIGHT_DATA');
    },
  },
});

export default store;