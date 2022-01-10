<template>
  <div class="detail">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <h2 class="title">会员信息</h2>
      </div>
      <div v-for="o in 4" :key="o" class="text item">
        {{ "列表内容 " + o }}
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "Detail",
  data() {
    return {};
  },
};
</script>

<style>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
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