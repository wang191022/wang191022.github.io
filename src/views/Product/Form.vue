<template>
  <div class="form">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="姓名" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="生日" prop="date">
        <el-input placeholder="请输入日期: yyyy-mm-dd" v-model="ruleForm.date">
        </el-input>
      </el-form-item>
      <el-form-item label="地址" prop="address">
        <el-input type="textarea" v-model="ruleForm.address"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">{{
          editModel
        }}</el-button>
        <el-button @click="resetForm('ruleForm')"> {{ btnModel }} </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
id
<script>
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      ruleForm: {
        name: "",
        date: "",
        address: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入姓名", trigger: "blur" },
          { min: 2, max: 5, message: "长度在 2 到 5 个字符", trigger: "blur" },
        ],
        date: [
          {
            required: true,
            message: "请输入日期",
            trigger: "blur",
          },
          {
            min: 10,
            max: 10,
            message: "请按照规定输入，注意年、月、日之间使用“-”（减号）分隔",
            trigger: "blur",
          },
        ],
        address: [{ required: true, message: "请填写地址", trigger: "blur" }],
      },
    };
  },
  computed: {
    ...mapGetters(['newestId']),
    editModel() {
      if (this.id) {
        return "立即修改";
      } else {
        return "立即创建";
      }
    },
    btnModel() {
      if (this.id) {
        return "恢复原数据";
      } else {
        return "清空数据";
      }
    },
  },
  props: ["id", "name", "address", "date"],
  methods: {
    ...mapMutations(['updateCreatedId']),
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("成功");
          if (this.id === undefined) {
            this.updateCreatedId()
          }
          this.$router.push({
            name: "List",
            params: {
              name: this.ruleForm.name,
              date: this.ruleForm.date,
              address: this.ruleForm.address,
              id: this.newestId
            },
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  beforeRouteEnter(to, from, next) {
    if (to.params.id !== null || to.params.id !== "") {
      next((vm) => {
        vm.ruleForm.name = to.params.name;
        vm.ruleForm.address = to.params.address;
        vm.ruleForm.date = to.params.date;
      });
    } else {
      next();
    }
  },
};
</script>

<style>
div.form {
  width: 600px;
  margin: 0 auto;
  margin-top: 200px;
}
</style>