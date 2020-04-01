<template>
  <div id="show-article">
    <div class="nav-link">
      <router-link to="fail">未通过</router-link>
      <router-link to="success">已通过</router-link>
      <router-link to="pedding">审核中</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
#show-article {
  width: 80%;
  float: right;
  .nav-link {
    margin: 20px;
    a {
      display: inline-block;
      margin: 0px 20px;
      font-size: 18px;
      height: 40px;
      line-height: 40px;
      padding: 0 10px;
      border-radius: 5px;
      &.router-link-active {
        color: #fff;
        background-color: #409eff;
        border-color: #409eff;
      }
    }
  }
}
</style>