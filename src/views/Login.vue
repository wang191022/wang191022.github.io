<template>
  <div class="login">
    <div class="title">
      <p>登录到</p>
      <p>Admin-Vue-TDesign</p>
    </div>
    <div class="change">
      <span>没有账号吗？</span>
      <span>点击注册新账号</span>
    </div>
    <div class="formCtn" style="width: 350px">
      <el-form ref="form" :model="formData" label-width="80px">
        <el-form-item label="账号">
          <el-input
            v-model="formData.account"
            placeholder="请输入账号: admin"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input
            placeholder="请输入密码: admin"
            v-model="formData.password"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item label="">
          <el-button type="primary" @click="login()">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      formData: {
        account: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapMutations(["changeLogin"]),
    login() {
      if (this.formData.account === "" || this.formData.password === "") {
        this.$message.warning("账号与密码不能为空");
      } else {
        this.$axios({
          method: "post",
          url: "http://rap2api.taobao.org/app/mock/296473/login",
          data: this.formData,
        })
          .then((res) => {
            console.log(res);
            this.userToken = "Bearer" + res.data.token;
            this.changeLogin({ Authorization: this.userToken });
            this.$router.push({ name: "Home" });
          })
          .catch((err) => {
            this.$message.warning("账号或密码错误");
            throw err;
          });
      }
    },
  },
};
</script>

<style scoped>
.login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 25%;
  height: 75vh;
}

p {
  font-size: 30px;
  line-height: 38px;
  font-weight: 900;
  margin: 0 0 10px 0;
}

p:last-child {
  font-size: 26px;
  line-height: 34px;
  margin-bottom: 15px;
}

span {
  display: inline-block;
  color: rgba(0, 0, 0, 0.6);
  margin-bottom: 60px;
}

span:last-child {
  color: #000;
  cursor: pointer;
}
</style>