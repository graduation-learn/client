<template>
  <div
    id="detail-container"
    v-loading="loading"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.5)"
  >
    <Nav />
    <div class="content-detail">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>

        <el-breadcrumb-item
          :to="{path:'/aticlelist/'+$route.params.about,query:{page:1,limit:10}}"
        >{{about}}</el-breadcrumb-item>
        <el-breadcrumb-item>文章详情</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="detail">
        <div class="title-box">
          <h2>{{content.title}}</h2>
          <span class="news-time">{{new Date(content.ctime).toLocaleDateString()}}</span>
          <span class="news-from">{{content.from}}</span>
        </div>
        <div class="content" v-html="content.content"></div>
      </div>
    </div>
    <Footer />
    <el-backtop target="#app" :bottom="100">
      <div
        style="{
        height: 100%;
        width: 100%;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0,0,0, .12);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
        border-radius:50%;
        font-size:12px;
      }"
      >顶部</div>
    </el-backtop>
  </div>
</template>

<script>
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { getjyxdDetail } from "@/api/jyxd/jyxdDetail";
import { getfszdDetail } from "@/api/fszd/fszdDetail";
import { getenglishDetail } from "@/api/english/englishDetail";
export default {
  components: {
    Nav,
    Footer
  },
  data() {
    return {
      about: "",
      content: "",
      loading: false
    };
  },
  async mounted() {
    this.loading = true;
    let result;
    if (this.$route.params.about === "jyxd") {
      this.about = "经验心得";
      result = await getjyxdDetail(this.$route.query.titleId);
    } else if (this.$route.params.about === "fszd") {
      this.about = "复试备考";
      result = await getfszdDetail(this.$route.query.titleId);
    }else if(this.$route.params.about === "english"){
      this.about = "英语"
      result = await getenglishDetail(this.$route.query.titleId);
    }

    this.content = result[0];
    this.loading = false;
  }
};
</script>

<style lang="less">
.content-detail {
  margin: 20px auto 0px;
  width: 1120px;
  .detail {
    margin-bottom: 20px;
  }
  .title-box {
    position: relative;
    padding-bottom: 10px;
    border-bottom: 1px solid #ddd;
    margin: 20px 0;
    span {
      color: #999;
    }
  }
  p {
    line-height: 30px;
  }
}

</style>