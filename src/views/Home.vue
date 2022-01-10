<template>
  <div class="home">
    <el-container>
      <el-aside width="200px"><Menu /></el-aside>
      <el-container>
        <el-main><router-view /></el-main>
        <el-footer>欢迎使用 Admin-Vue-Element</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Menu from "@/components/Menu";

export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    Menu,
  },
};
</script>

<style scoped>
.el-footer {
  background-color: #b3c0d1;
  color: rgba(0, 0, 0, .4);
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 10px;
}

body > .el-container {
  margin-bottom: 40px;
}
</style>