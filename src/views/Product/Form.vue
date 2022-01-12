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
        // 表格初始空对象
        name: "",
        date: "",
        address: "",
      },
      rules: {
        // 表格校验规则

        // 用户姓名
        name: [
          { required: true, message: "请输入姓名", trigger: "blur" },
          { min: 2, max: 5, message: "长度在 2 到 5 个字符", trigger: "blur" },
        ],

        // 用户生日
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

        // 用户地址
        address: [{ required: true, message: "请填写地址", trigger: "blur" }],
      },
    };
  },
  computed: {
    ...mapGetters(["newestId"]),
    editModel() {
      // 根据路由传递的参数，动态渲染页面内容
      // “修改” / “创建”
      if (this.id) {
        return "立即修改";
      } else {
        return "立即创建";
      }
    },
    btnModel() {
      // 根据路由传递的参数，动态渲染按钮文本
      // “修改” / “创建”
      if (this.id) {
        return "恢复原数据";
      } else {
        return "清空数据";
      }
    }, 
  },

  // 接受路由传参
  props: ["id", "name", "address", "date"],
  methods: {
    ...mapMutations(["updateCreatedId", "updateCreatedData"]),
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("成功");
          if (this.id === undefined) {
            
            // 将新建用户信息存储到vuex
            this.updateCreatedData({
              name: this.ruleForm.name,
              date: this.ruleForm.date,
              address: this.ruleForm.address,
              id: this.newestId
            })
            
            // 当为新建用户时，用户创建数量+1
            this.updateCreatedId();
          }
          // 实际应该是通过 axios.post() 发送给后台
          // 通过验证后在 “list” 页面更新数据
          this.$router.push({ name: "List" });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      // 重置当前数据
      // 若为更新则重置回元数据
      // 若为新建则清空内容
      this.$refs[formName].resetFields();
    },
  },
  beforeRouteEnter(to, from, next) {
    // 路由若携带参数，则将页面表格内的数据渲染为参数数据
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