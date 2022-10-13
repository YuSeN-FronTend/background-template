import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dynamicRoutes: JSON.parse(sessionStorage.getItem('data'))||[],
    // status: false
  },
  mutations: {
    DYNAMIC_ROUTES(state, routes) {
      state.dynamicRoutes = routes
    },
    // CHANGE_STATUS(state){
    //   state.status = state
    // }
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
