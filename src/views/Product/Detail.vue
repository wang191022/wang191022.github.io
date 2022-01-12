<template>
  <div class="detail">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <h2 class="title">会员信息</h2>
      </div>
      <div class="text item">会员ID: {{ id }}</div>
      <div class="text item">姓名: {{ name }}</div>
      <div class="text item">生日: {{ date }}</div>
      <div class="text item">地址: {{ address }}</div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "Detail",
  data() {
    return {};
  },

  // 接受路由传递的参数，并渲染到页面中
  props: ["id", "name", "address", "date"],
};

</script>

<style>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
  margin-left: 10%;
  text-align: left;
  font-size: 20px;
  line-height: 28px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.title {
  font-size: 28px;
  line-height: 30px;
  font-weight: 900;
}

.box-card {
  width: 480px;
  margin: 0 auto;
  margin-top: 100px;
}
</style>