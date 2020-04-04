<template>
  <div class="leftList">
    <ul class="list">
      <router-link tag="li" :to="{path:'articlelist/english',query:{page:1,limit:10}}">考研英语</router-link>

      <router-link tag="li" :to="{path:'articlelist/math',query:{page:1,limit:10}}">考研数学</router-link>
      <router-link tag="li" :to="{path:'articlelist/politics',query:{page:1,limit:10}}">考研政治</router-link>
      <router-link tag="li" :to="{path:'articlelist/profession',query:{page:1,limit:10}}">专业课</router-link>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.leftList {
  width: 250px;
  background-color: #5b9bd5;
  .list {
    justify-content: space-between;
    list-style: none;
    li {
      cursor: pointer;
      height: 100px;
      text-align: center;
      line-height: 100px;
      color: #eee;
      border-bottom: 1px solid #eee;
      box-sizing: border-box;
    }
    li:nth-child(1) {
      &:hover {
        background-color: #215f9c;
      }
    }
    li:nth-child(2) {
      &:hover {
        background-color: #215f9c;
      }
    }
    li:nth-child(3) {
      &:hover {
        background-color: #215f9c;
      }
    }
    li:nth-child(4) {
      border-bottom: none;
      &:hover {
        background-color: #215f9c;
      }
    }
  }
}
</style>