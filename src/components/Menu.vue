<template>
  <div class="menu">
     <el-menu
      default-active="2"
      class="el-menu-vertical-demo">
      <router-link v-for="(item, index) in menu" :key="index" :to="item.route">
        <el-menu-item :key="item.index">
          <i :class="item.icon"></i>
          <span slot="title">{{item.title}}</span>
        </el-menu-item>
      </router-link>
     </el-menu>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      menu: [
        {
          name: "list",
          icon: "bulletpoint",
          title: "列表总览",
          route: { name: "List" },
        },
        {
          name: "detail",
          icon: "calendar",
          title: "表单详情",
          route: { name: "Detail" },
        },
        {
          name: "form",
          icon: "root-list",
          title: "表单编辑",
          route: { name: "Form" },
        },
        {
          name: "login",
          icon: "login",
          title: "退出登录",
          route: { name: "Login" },
        },
      ],
    };
  },
};
</script>

<style scoped>
.menu {
  height: 100vh;
}

a {
  text-decoration: none;
}
</style>