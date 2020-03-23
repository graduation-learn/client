<template>
  <nav id="nav-header">
    <div class="nav-center">
      <h1>欢迎来到大学生考研互助平台</h1>
      <div class="login-register">
          <router-link  to="/login">登录</router-link>
          <span>|</span>
          <router-link  to="/register">注册</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="less">
#nav-header {
  min-width: 1120px;
  width: 100%;
  height: 50px;
  background-color: rgb(91, 155, 213);
  text-align: center;
  line-height: 50px;
  a{
    color:lightblue;
    &:hover{
      color:rgb(61, 61, 190);
    }
  }
  .nav-center {
    width: 1120px;
    position: relative;
    margin: 0 auto;
    height: 50px;
    h1{
        color:cornsilk;
        font-family: arial;
        text-shadow: 1px 1px 5px blue;
    }
    .login-register{
        position:absolute;
        width:150px;
        height:50px;
        right:10px;
        top:0;
        span{
            display: inline-block;
            width:15px;
            color:#ccc;
        }
    }
  }
}
</style>