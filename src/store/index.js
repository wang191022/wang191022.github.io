import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Authorization: localStorage.getItem("Authorization")
      ? localStorage.getItem("Authorization")
      : "",               // 登录token
    tableData: [],        // 存储请求的用户信息
    createdData: [],      // 创建的用户信息
    menuActive: -1,       // 当前激活菜单坐标
    firstId: 700000,      // 初识会员ID
    newCreate: 0,         // 新建会员计数
  },
  getters: {
    newestId(state) {
      // 返回最新未使用的会员ID
      return state.firstId + state.newCreate;
    },
    newestMenu(state) {
      // 返回当前激活的菜单坐标
      return state.menuActive + "";
    }
  },
  mutations: {
    updateToken(state, payLoad) {
      // 更新用户登录token
      state.Authorization = payLoad.Authorization;
      localStorage.setItem("Authorization", payLoad.Authorization);
    },
    updateTableData(state, payLoad) {
      // 更新请求到的用户信息
      state.tableData = payLoad.tableData;
    },
    updateCreatedData(state, payLoad){
      state.createdData.push(payLoad)
      console.log(payLoad);
      console.log(state.createdData);
    },
    deleteTableItem(state, payLoad) {
      // 删除表格中选中的用户信息
      state.tableData.splice(payLoad.i, 1);
    },
    updateMenu(state, payLoad) {
      // 更新激活菜单坐标
      if (payLoad.path.includes("list")) {
        state.menuActive = 0;
      } else if (payLoad.path.includes("detail")) {
        state.menuActive = 1;
      } else if (payLoad.path.includes("form")) {
        state.menuActive = 2;
      } else {
        state.menuActive = -1;
      }
    },
    updateCreatedId(state) {
      // 更新会员计数
      state.newCreate++;
    },
  },
  actions: {},
  modules: {},
});
