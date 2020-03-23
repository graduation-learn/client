<template>
  <div id="banner">
    <el-carousel trigger="click" height="150px">
      <el-carousel-item v-for="(item,i) in imgList" :key="i">
        <a :href="item.target" target="_blank">
          <img :src="item.src" />
        </a>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import one from "../../assets/banner/1.jpg";
import two from "../../assets/banner/2.jpg";
import three from "../../assets/banner/3.jpg";

export default {
  data() {
    return {
      imgList: [
        {
          src:one,
          target:
            "http://axvert.chsi.com.cn/goo.action?aid=1849288691&evtype=adv_https:_yz.chsi.com.cn"
        },
        {
          src:two,
          target:
            "http://axvert.chsi.com.cn/goo.action?aid=2601025697&evtype=adv_https:_yz.chsi.com.cn"
        },
        {
          src:three,
          target:
            "http://axvert.chsi.com.cn/goo.action?aid=2587500894&evtype=adv_https:_yz.chsi.com.cn"
        }
      ]
    };
  }
};
</script>

<style lang="less">
#banner {
  flex: 1;
  background-color: #ccc;
  .el-carousel {
    height: 100%;
    .el-carousel__container {
      height: 100% !important;
    }
  }
  .el-carousel__item img {
    width: 100%;
    height: 100%;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
}
</style>