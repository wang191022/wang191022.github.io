import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    // 登录后默认的路由路径
    path: "/",
    name: "Home",
    component: Home,
    children: [
      // 子路由
      {
        path: "list",
        name: "List",
        props: true,
        component: () => import("../views/Product/List.vue"),
      },
      {
        path: "detail",
        name: "Detail",
        component: () => import("../views/Product/Detail.vue"),
      },
      {
        // 通过动态路由，跳转用户详情界面
        // 使用 router.push() 传递当前查看的用户信息，并渲染
        path: "detail/:id",
        name: "ItemDetail",
        props: true,
        component: () => import("../views/Product/Detail.vue"),
      },
      {
        path: "form",
        name: "Form",
        component: () => import("../views/Product/Form.vue"),
      },
      {
        // 通过动态路由，跳转用户编辑界面
        // 使用 router.push() 传递选中用户信息，并渲染
        path: "form/:id",
        name: "ItemForm",
        props: true,
        component: () => import("../views/Product/Form.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue"),
  },
  {
    path: "*",
    name: "NotFound",
    component: () => import("../views/NotFound.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {

  // 登录验证
  if (to.path === "/login") {
    next();
  } else {
    
    // 将即将进入的路由路径，作为参数传递给 “更新菜单激活坐标” 函数，并执行
    store.commit("updateMenu", {
      path: to.path,
    });

    // 登录验证：若非'/login'路径，查看本地数据库的token是否存在
    let token = localStorage.getItem("Authorization");

    // 若token不存在，跳转登录页面；否则，继续执行
    // 可以在控制台验证
    if (token === null || token === "") {
      next("/login");
    } else {
      next();
    }
  }
});

export default router;
