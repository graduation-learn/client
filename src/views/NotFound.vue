<template>
  <div id="not-found">
    <h3>对不起，您要找的页面没找到</h3>
    <router-link tag="p" to="/">点击返回首页</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scpoed >

h3,p {
  text-align: center;
  padding-top:10%;
  font-size: 20px;
}
p{
    transition:all 0.2s;
}
p:hover{
    color:blueviolet;
    cursor: pointer;
    font-size: 24px;
}
</style>