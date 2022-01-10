<template>
  <div class="success">
    <icon name="check-circle" style="color: #00a870" size="72px" />
    <p>项目已创建成功</p>
    <div class="btnCtn">
      <t-button theme="primary" @click="this.$router.push({name: 'List'})"
        >返回首页</t-button
      >
      <t-button theme="default" @click="this.$router.push({name: 'Detail'})">查看详情</t-button>
    </div>
  </div>
</template>

<script>
import { Icon } from "tdesign-icons-vue";

export default {
  name: "Success",
  data() {
    return {};
  },
  components: {
    Icon,
  },
  methods: {},
};
</script>

<style scoped>
.success {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 75vh;
}

p {
  font-size: 20px;
  line-height: 28px;
  font-weight: 500;
  margin-top: 28px;
  margin-bottom: 32px;
}

button {
  margin: 0 4px;
}
</style>