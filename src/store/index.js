import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Authorization: localStorage.getItem("Authorization")
      ? localStorage.getItem("Authorization")
      : "",
    tableData: [],
  },
  mutations: {
    changeLogin(state, payLoad) {
      state.Authorization = payLoad.Authorization
      localStorage.setItem('Authorization', payLoad.Authorization)
    },
    updateTableData(state, payLoad) {
      state.tableData = payLoad.tableData
    },
    deleteTableItem(state, payLoad) {
      state.tableData.splice(payLoad.i, 1);
    }
  },
  actions: {},
  modules: {},
});
