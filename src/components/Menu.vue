<template>
  <div class="menu">
    <t-menu
      theme="light"
      defaultValue="list"
      style="margin-right: 40px"
    >
      <t-menu-item
        v-for="(item, index) in menu"
        :key="index"
        :value="item.name"
      >
        <template #icon>
          <icon :name="item.icon" />
        </template>
        {{ item.title }}
      </t-menu-item>
      <t-menu-item value="login">
        <template #icon>
          <icon name="login" />
        </template>
        退出登录
      </t-menu-item>
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
        },
        {
          name: "detail",
          icon: "calendar",
          title: "表单详情",
        },
        {
          name: "form",
          icon: "root-list",
          title: "表单编辑",
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
</style>