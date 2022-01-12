<template>
  <div class="list">
    <div class="btn">
      <el-button type="primary" @click="linkToForm()">会员注册</el-button>
    </div>
    <el-table class="table" :data="total" style="width: 100%" stripe border>
      <el-table-column prop="name" label="姓名" width="100"> </el-table-column>
      <el-table-column prop="id" label="会员ID" width="150"> </el-table-column>
      <el-table-column prop="date" label="生日" width="150"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="220">
        <template slot-scope="scope">
          <el-button size="mini" @click="linkToDetail(scope.row)"
            >查看</el-button
          >
          <el-button size="mini" @click="linkToEdit(scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="deleteItem(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapMutations } from "vuex";

export default {
  name: "List",
  data() {
    return {
    };
  },
  computed: {
    ...mapState(["tableData"]),
    total() {
      // 
      return this.tableData
    }
  },
  // 接受来自 “form” 页面传递的参数
  props: ['id', 'name', 'address', 'date'],
  methods: {
    ...mapMutations(["updateTableData", "deleteTableItem"]),
    getTableData() {
      // 获取用户数据，并存储到vuex中
      this.$axios
        .get("http://rap2api.taobao.org/app/mock/296473/userInfo")
        .then((res) => {
          this.updateTableData({ tableData: res.data.data });
        })
        .catch((err) => {
          throw err;
        });
    },
    deleteItem(row) {
      // 通过索引定位当前选中对象，并在vuex中删除
      let i = this.total.indexOf(row);
      this.deleteTableItem({ i });
      console.log(this.total);
    },
    linkToForm() {
      // 跳转到 “form” 页面
      this.$router.push({ name: "Form" });
    },
    linkToDetail(row) {
      // 跳转到 “detail” 页面，并将选中的用户信息作为参数传递
      this.$router.push({
        name: "ItemDetail",
        params: {
          address: row.address,
          date: row.date,
          id: row.id,
          name: row.name,
        },
      });
    },
    linkToEdit(row) {
      // 跳转到 “form” 页面，并将选中的用户信息作为参数传递
      this.$router.push({
        name: "ItemForm",
        params: {
          address: row.address,
          date: row.date,
          id: row.id,
          name: row.name,
        },
      });
    },
  },
  mounted() {
    // vue实例挂载完成后，获取用户数据
    this.getTableData();
  }
};
</script>

<style>
div.cell {
  text-align: center;
}

.btn {
  float: right;
}

.btn button {
  margin-bottom: 20px;
}
</style>