<template>
  <div class="notFound">
    <p>404 Not Found</p>
    <p class="info">抱歉，您访问的页面不存在</p>
    <div class="btnCtn">
      <el-button type="primary" @click="returnHome()">返回首页</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound",
  data() {
    return {};
  },
  methods: {
    returnHome() {
      this.$router.push({ name: 'Home' })
    }
  }
};
</script>

<style scoped>
.notFound {
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
  margin: 0;
  margin-top: 20px;
}

p.info {
  font-size: 14px;
  line-height: 22px;
  margin-top: 8px;
  margin-bottom: 28px;
  color: rgba(0, 0, 0, 0.6);
}

button {
  margin: 0 4px;
}
</style>