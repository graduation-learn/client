<template>
  <nav id="nav-header">
    <div class="nav-center">
      <h1>欢迎来到大学生考研互助平台</h1>
      <div class="login-register">
        <template>
          <router-link v-if="!username" to="/login">登录</router-link>
          <div style="display:inline-block;color:#ccc" v-else>
            hello {{username}}
            <ul class="user-operations">
              <router-link tag="li" to="/" v-if="window.location.pathname !=='/'">回到首页</router-link>
              <router-link
                tag="li"
                to="/personal/showArticle/english/fail"
                v-if="!window.location.pathname.includes('/personal')"
              >个人中心</router-link>
              <li @click="loginOut">退出登录</li>
            </ul>
          </div>
        </template>
        <span v-if="!username">|</span>
        <router-link to="/register" v-if="!username">注册</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      isLogin: false,
      window
    };
  },
  created() {
    const username = localStorage.getItem("username");
    const userId = localStorage.getItem("_id");
    this.$store.commit("user/setUsername", username);
    this.$store.commit("user/setUserId", userId);
  },
  methods: {
    loginOut() {
      this.$store.commit("user/setUsername", "");
      this.$store.commit("user/setUserId", "");
      localStorage.clear();
      location.pathname !== "/" && this.$router.push("/");
    }
  },
  computed: {
    ...mapState("user", ["username"])
  }
};
</script>

<style lang="less">
#nav-header {
  min-width: 1120px;
  position: fixed;
  z-index: 999;
  top: 0;
  width: 100%;
  height: 50px;
  background-color: rgb(91, 155, 213);
  text-align: center;
  line-height: 50px;
  a {
    color: lightblue;
    &:hover {
      color: rgb(61, 61, 190);
    }
  }
  .nav-center {
    width: 1120px;
    position: relative;
    margin: 0 auto;
    height: 50px;
    h1 {
      color: cornsilk;
      font-family: arial;
      text-shadow: 1px 1px 5px blue;
    }
    .login-register {
      position: absolute;
      height: 50px;
      right: 10px;
      top: 0;
      cursor: pointer;
      span {
        display: inline-block;
        width: 15px;
        color: #ccc;
      }
    }
  }
}
.login-register:hover .user-operations {
  display: block;
}
.user-operations {
  background-color: #fff;
  display: none;
  li:hover {
    cursor: pointer;
    background-color: #eee;
  }
}
</style>