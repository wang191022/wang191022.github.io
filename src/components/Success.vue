<template>
  <div class="success">
    <i class="el-icon-circle-check" style="color: #00a870" size="72px"></i>
    <p>项目已创建成功</p>
    <div class="btnCtn">
      <el-button type="primary" @click="this.$router.push({name: 'List'})"
        >返回首页</el-button
      >
      <el-button type="default" @click="this.$router.push({name: 'Detail'})">查看详情</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Success",
  data() {
    return {};
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