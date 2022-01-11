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
      newUser: {
        name: '',
        id: '',
        address: '',
        date: ''
      }
    };
  },
  computed: {
    ...mapState(["tableData"]),
    total() {
      let arr = this.tableData
      return arr
    }
  },
  props: ['id', 'name', 'address', 'date'],
  methods: {
    ...mapMutations(["updateTableData", "deleteTableItem"]),
    getTableData() {
      this.$axios
        .get("http://rap2api.taobao.org/app/mock/296473/userInfo")
        .then((res) => {
          this.updateTableData({ tableData: res.data.data });
        })
        .catch((err) => {
          throw err;
        });
    },
    updateNewCreate() {
      if (this.id) {
        this.newUser.name = this.name
        this.newUser.id = this.id
        this.newUser.address = this.address
        this.newUser.date = this.date
      }
    },
    deleteItem(row) {
      let i = this.total.indexOf(row);
      this.deleteTableItem({ i });
      console.log(this.total);
    },
    linkToForm() {
      this.$router.push({ name: "Form" });
    },
    linkToDetail(row) {
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
    this.getTableData();
    this.updateNewCreate()
  },
  beforeRouteEnter(to, from, next) {
    if (to.params.id !== null || to.params.id !== "") {
      next((vm) => {
        vm.newUser.name = to.params.name;
        vm.newUser.address = to.params.address;
        vm.newUser.date = to.params.date;
        vm.newUser.id = to.params.id
      });
    } else {
      next();
    }
  },
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