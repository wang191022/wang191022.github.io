<template>
  <div class="list">
    <el-table class="table" :data="tableData" style="width: 100%" stripe border>
      <el-table-column prop="name" label="姓名" width="100"> </el-table-column>
      <el-table-column prop="id" label="会员ID" width="150"> </el-table-column>
      <el-table-column prop="date" label="生日" width="150"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="220">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >查看</el-button
          >
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="deleteItem(scope)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      tableData: null,
    };
  },
  methods: {
    getTableData() {
      this.$axios
        .get("http://rap2api.taobao.org/app/mock/296473/userInfo")
        .then((res) => {
          this.tableData = res.data.data;
        })
        .catch((err) => {
          throw err;
        });
    },
    deleteItem(scope) {
      let i = this.tableData.indexOf(scope.row)
      this.tableData.splice(i, 1)
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
  },
  mounted() {
    this.getTableData();
  },
};
</script>

<style>
div.cell {
  text-align: center;
}
</style>