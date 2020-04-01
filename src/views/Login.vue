<template>
  <div id="fixed">
    <div id="login-container">
      <h3>请登录</h3>
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="姓名" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
      <div class="to-register">
        没有账号？
        <router-link to="/register">去注册</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        pass: "",
        name: ""
      },
      rules: {
        name: [{ required: true, message: "请输入账号", trigger: "blur" }],
        pass: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          //校验合法，发送登录请求
          this.sendUserInfo(this.ruleForm);
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    sendUserInfo(form) {
      this.$ajax({
        method: "post",
        url: "api/login",
        data: {
          username: form.name,
          password: form.pass
        }
      }).then(
        res => {
          if (res.status == 200) {
            localStorage.setItem("token", res.token);
            localStorage.setItem("username", res.data.username);
            localStorage.setItem("_id", res.data.id);
            this.$store.commit("user/setUsername", res.data.username);
            this.$store.commit("user/setUserId", res.data.id);
            this.$showMessage(res.message, "success");
            location.href = "/";
          } else {
            this.$showMessage(res.message, "error");
          }
        },
        err => {
          this.$showMessage("服务器错误", "error");
        }
      );
    }
  }
};
</script>

<style lang="less">
#fixed {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgb(201, 234, 238);
}
#login-container {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 400px;
  height: 200px;
  .to-register {
    position: absolute;
    width: 135px;
    height: 20px;
    right: 0px;
    bottom: 15px;
    font-size: 12px;
    line-height: 20px;
    text-align: center;
  }
  h3 {
    text-align: center;
    height: 35px;
  }
}
</style>
