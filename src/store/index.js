import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dynamicRoutes: []
  },
  mutations: {
    DYNAMIC_ROUTES(state, routes) {
      state.dynamicRoutes = routes
    }
  },
  getters: {
  },

  actions: {
    dynamicRoutes({ commit }, routes) {
      commit('DYNAMIC_ROUTES', routes)
    }
  },
  modules: {},
});
