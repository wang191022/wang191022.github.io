<template>
  <div class="menu">
    <el-menu default-active="-1" class="el-menu-vertical-demo">
        <router-link
          v-for="(item, index) in menu"
          :key="index"
          :to="item.route">
          <el-menu-item
            :index="index + ''">
            <i :class="item.icon"></i>
            <span> {{ item.title }} </span>
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
          icon: "el-icon-document",
          title: "列表总览",
          route: { name: "List" },
        },
        {
          icon: "el-icon-notebook-2",
          title: "表单详情",
          route: { name: "Detail" },
        },
        {
          icon: "el-icon-edit",
          title: "表单编辑",
          route: { name: "Form" },
        },
        {
          icon: "el-icon-setting",
          title: "退出登录",
          route: { name: "Login" },
        },
      ],
    };
  },
  methods: {
  },
};
</script>

<style scoped>
.el-menu-vertical-demo {
  height: 98vh;
}

a {
  text-decoration: none;
}
</style>