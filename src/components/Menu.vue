<template>
  <div class="menu">
    <t-menu theme="light" defaultValue="list" style="margin-right: 40px">
      <router-link v-for="(item, index) in menu" :key="index" :to="item.route">
        <t-menu-item :value="item.name">
          <template #icon>
            <icon :name="item.icon" />
          </template>
          {{ item.title }}
        </t-menu-item>
      </router-link>
    </t-menu>
  </div>
</template>

<script>
import { Icon } from "tdesign-icons-vue";

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
  components: {
    Icon,
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