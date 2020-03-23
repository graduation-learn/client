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
    var checkName = (rule, value, callback) => {
      if (!value.trim()) {
        return callback(new Error("姓名不能为空"));
      }
      setTimeout(() => {
        if (value.length < 5) {
          callback(new Error("姓名必须大于5个字符"));
        } else {
          callback();
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    return {
      ruleForm: {
        pass: "",
        name: ""
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        name: [{ validator: checkName, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {

        } else {
          
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style lang="less">
#fixed{
  position: absolute;
  width:100%;
  height:100%;
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
    width: 130px;
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
