import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Authorization: localStorage.getItem("Authorization")
      ? localStorage.getItem("Authorization")
      : "",
  },
  mutations: {
    changeLogin(state, payLoad) {
      state.Authorization = payLoad.Authorization
      localStorage.setItem('Authorization', payLoad.Authorization)
    }
  },
  actions: {},
  modules: {},
});
