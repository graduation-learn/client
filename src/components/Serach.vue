<template>
  <div id="search-container">
    <div class="logo-container">
      <a href="/">
        <img src="../../public/logo.png" alt />
      </a>
    </div>
    <div class="search">
      <div class="search-box">
        <input type="text" id="search-word" placeholder="请输入考研相关的内容" v-model="inputValue" />
        <button class="search-btn" @click="search">搜索</button>
      </div>
    </div>
    <div class="phone">
      <img src="http://ksd.oss-cn-shanghai.aliyuncs.com/image/400.png" alt />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: ""
    };
  },
  methods: {
    search: function() {
      this.$router.push({
        path: "/search",
        query: { wd: this.inputValue, page: 1, limit: 10 }
      });
    }
  }
};
</script>

<style lang="less">
#search-container {
  display: flex;
  width: 1120px;
  height: 100px;
  margin: 0px auto 20px;
  .logo-container {
    width: 100px;
    height: 100px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .search {
    flex: 1;
  }
  .phone {
    width: 200px;
    padding: 23px;
    padding-top: 25px;
    box-sizing: border-box;
  }
}
.search {
  height: 100px;
  position: relative;
}
.search .search-box {
  width: 500px;
  height: 35px;
  font-size: 0;
  top: 30px;
  left: 147px;
  position: absolute;
  bottom: 0;
  z-index: 2;
}
.search #search-word {
  width: 450px;
  height: 35px;
  line-height: 35px;
  padding-left: 5px;
  background-color: #fff;
  border: 1px solid #5b9bd5;
  outline: none;
  box-sizing: border-box;
}
.search .search-btn {
  width: 50px;
  height: 35px;
  background-color: #5b9bd5;
  color: #fff;
  border: none;
  outline: none;
  position: absolute;
  cursor: pointer;
  &:hover {
    background-color: #215f9c;
  }
}
</style>