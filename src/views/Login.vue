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
      <t-form
      :data="formData"
      ref="form"
      :colon="true"
      :labelWidth="0"
      @submit="login()"
    >
      <t-form-item name="account">
        <t-input
          clearable
          v-model="formData.account"
          placeholder="请输入账户名: admin"
        >
          <desktop-icon slot="prefix-icon"></desktop-icon>
        </t-input>
      </t-form-item>
      <t-form-item name="password">
        <t-input
          type="password"
          clearable
          v-model="formData.password"
          placeholder="请输入密码: admin"
        >
          <lock-on-icon slot="prefix-icon"></lock-on-icon>
        </t-input>
      </t-form-item>
      <t-form-item style="padding-top: 8px">
        <t-button theme="primary" type="submit" block>登录</t-button>
      </t-form-item>
    </t-form>
    </div>
    
  </div>
</template>

<script>
import { DesktopIcon, LockOnIcon } from "tdesign-icons-vue";
import { mapMutations } from 'vuex'

export default {
  name: "Login",
  components: {
    DesktopIcon,
    LockOnIcon,
  },
  data() {
    return {
      formData: {
        account: '',
        password: ''
      },
    };
  },
  methods: {
    ...mapMutations(['changeLogin']),
    login() {
      if (this.formData.account === '' || this.formData.password === '') {
        this.$message.warning('账号与密码不能为空')
      } else {
        this.$axios({
          method: 'post',
          url: 'http://rap2api.taobao.org/app/mock/296473/login',
          data: this.formData
        })
        .then(res => {
          console.log(res)
          this.userToken = 'Bearer' + res.data.token
          this.changeLogin({ Authorization: this.userToken })
          this.$router.push({ name: 'List' })
        })
        .catch(err => {
          this.$message.warning('账号或密码错误')
          throw err
        })
      }
    }
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
  margin: 0 0 10px 0
  
}

p:last-child {
  font-size: 26px;
  line-height: 34px;
  margin-bottom: 15px;
}

span {
  display: inline-block;
  color: rgba(0, 0, 0, .6);
  margin-bottom: 60px;
}

span:last-child {
  color: #000;
  cursor: pointer;
}

</style>