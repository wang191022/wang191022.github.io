import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Authorization: localStorage.getItem("Authorization")
      ? localStorage.getItem("Authorization")
      : "",
    tableData: [],
    menuActive: -1,
    firstId: 700000,
    newCreate: 0
  },
  getters: {
    newestId(state) {
      return state.firstId + state.newCreate
    },
    newestMenu(state) {
      return state.menuActive + ''
    }
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
    },
    updateMenu(state, payLoad) {
      switch (payLoad.path) {
        case '/list':
          state.menuActive = 0
          break;
          case '/detail':
            state.menuActive = 1
            break;
            case '/form':
              state.menuActive = 2
              break;
        default:
          state.menuActive = -1
          break;
      }
    },
    updateCreatedId(state) {
      state.newCreate ++
    }
  },
  actions: {},
  modules: {},
});
